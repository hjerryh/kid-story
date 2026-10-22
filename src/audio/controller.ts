import type { Story } from '../content/types';
export interface PlayerStatus { loaded:boolean; playing:boolean; position:number; duration:number; ended:boolean; error?:string; }
export interface PlayerDriver { play():void; pause():void; seek(seconds:number):Promise<void>; dispose():void; }
export type SleepMode = 15 | 30 | 'end' | null;
export interface PlaybackSnapshot { storyId:string|null; position:number; duration:number; playing:boolean; loading:boolean; error:string|null; sleep:SleepMode; }
type DriverFactory = (story:Story, listener:(status:PlayerStatus)=>void) => PlayerDriver;

/** Owns a single audio session. Status and async commands are scoped to that session. */
export class PlaybackController {
  snapshot:PlaybackSnapshot = {storyId:null,position:0,duration:0,playing:false,loading:false,error:null,sleep:'end'};
  private driver:PlayerDriver|null=null;
  private generation=0;
  private loaded=false;
  private wantPlaying=false;
  private queue:Promise<void>=Promise.resolve();
  private pendingSeeks=0;
  private deadline:number|null=null;
  private listeners=new Set<()=>void>();
  private loadTimeout:ReturnType<typeof setTimeout>|null=null;
  constructor(private factory:DriverFactory) {}
  subscribe=(listener:()=>void)=>{this.listeners.add(listener);return ()=>{this.listeners.delete(listener);};};
  private update(patch:Partial<PlaybackSnapshot>){this.snapshot={...this.snapshot,...patch};for(const listener of this.listeners)listener();}
  select(story:Story,position=0){
    const generation=++this.generation;
    if(this.loadTimeout)clearTimeout(this.loadTimeout);
    this.driver?.dispose();this.driver=null;this.loaded=false;this.wantPlaying=false;this.pendingSeeks=0;this.queue=Promise.resolve();
    this.update({storyId:story.id,position:Math.max(0,Math.min(position,story.duration)),duration:story.duration,playing:false,loading:true,error:null});
    this.loadTimeout=setTimeout(()=>{if(generation===this.generation&&!this.loaded)this.fail('故事声音暂时没准备好，请点一下重试。');},20000);
    try {this.driver=this.factory(story,status=>{
      if(generation!==this.generation||this.snapshot.error)return;
      if(status.error){this.fail(status.error);return;}
      if(status.loaded&&!this.loaded){
        this.loaded=true;if(this.loadTimeout)clearTimeout(this.loadTimeout);
        // A factory may deliver its first status synchronously, before driver assignment.
        void Promise.resolve().then(()=>{if(generation===this.generation)void this.seek(this.snapshot.position);});
        return;
      }
      if(!this.loaded)return;
      if(this.checkSleep())return;
      if(status.ended&&this.pendingSeeks===0){this.wantPlaying=false;this.update({position:this.snapshot.duration,playing:false,loading:false});return;}
      if(this.pendingSeeks===0)this.wantPlaying=status.playing;
      this.update({playing:status.playing,loading:false,...(this.pendingSeeks===0&&Number.isFinite(status.position)?{position:Math.max(0,Math.min(status.position,this.snapshot.duration))}:{})});
    });}catch{this.fail('声音加载失败了，图画还可以继续看。');}
  }
  play(){
    this.wantPlaying=true;
    if(this.snapshot.error)return;
    if(this.snapshot.position>=this.snapshot.duration-.1)void this.seek(0);
    else if(this.loaded&&this.pendingSeeks===0){try{this.driver?.play();}catch{this.fail('暂时无法播放，请再试一次。');}}
  }
  pause(){this.wantPlaying=false;this.driver?.pause();this.update({playing:false});}
  async seek(seconds:number){
    const target=Number.isFinite(seconds)?Math.max(0,Math.min(seconds,this.snapshot.duration)):0;
    if(target>=this.snapshot.duration&&this.snapshot.duration>0)this.wantPlaying=false;
    this.update({position:target});
    if(!this.loaded||!this.driver)return;
    const driver=this.driver,generation=this.generation;
    this.pendingSeeks++;
    const command=this.queue.catch(()=>{}).then(async()=>{
      if(generation!==this.generation)return;
      try{
        await driver.seek(target);
        if(generation!==this.generation)return;
        this.pendingSeeks--;
        this.update({loading:false});
        if(this.pendingSeeks===0){if(this.wantPlaying)driver.play();else driver.pause();}
      }catch{if(generation===this.generation){this.pendingSeeks=Math.max(0,this.pendingSeeks-1);this.fail('声音暂时迷路了，点重试就能重新出发。');}}
    });
    this.queue=command;await command;
  }
  setSleep(mode:SleepMode,now=Date.now()){this.deadline=typeof mode==='number'?now+mode*60000:null;this.update({sleep:mode});}
  checkSleep(now=Date.now()){
    if(this.deadline!==null&&now>=this.deadline){this.deadline=null;this.update({sleep:null});this.pause();return true;}
    return false;
  }
  private fail(message:string){this.wantPlaying=false;this.update({playing:false,loading:false,error:message});this.driver?.pause();}
  dispose(){this.generation++;if(this.loadTimeout)clearTimeout(this.loadTimeout);this.driver?.dispose();this.driver=null;this.listeners.clear();}
}

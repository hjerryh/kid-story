import React,{createContext,useContext,useEffect,useRef,useState} from 'react';
import {AppState,Image,Platform} from 'react-native';
import {createAudioPlayer,setAudioModeAsync,type AudioStatus} from 'expo-audio';
import {findStory} from '../content/catalog';
import {useLibrary} from '../state/library';
import {restorePosition} from '../state/progress';
import {PlaybackController,type PlaybackSnapshot,type SleepMode} from './controller';

type PlaybackValue=PlaybackSnapshot&{playStory:(id:string,position?:number)=>void;toggle:()=>void;seek:(seconds:number)=>void;goToPage:(index:number)=>void;setSleep:(mode:SleepMode)=>void;retry:()=>void};
const Context=createContext<PlaybackValue|null>(null);
export function PlaybackProvider({children}:{children:React.ReactNode}){
  const library=useLibrary(),libraryRef=useRef(library);libraryRef.current=library;
  const modeReady=useRef(Promise.resolve());
  const controller=useRef<PlaybackController|null>(null);
  if(!controller.current)controller.current=new PlaybackController((story,listener)=>{
    const player=createAudioPlayer(story.audio,{updateInterval:250});
    let live=true;
    const handle=(status:AudioStatus)=>{if(live)listener({loaded:status.isLoaded,playing:status.playing,position:status.currentTime,duration:status.duration,ended:status.didJustFinish,error:status.error?'声音暂时无法播放，请点重试。':undefined});};
    const subscription=player.addListener('playbackStatusUpdate',handle);
    const artworkUrl=Image.resolveAssetSource?.(story.cover)?.uri;
    const metadata={title:story.title,artist:'小小故事岛',album:'晚安，小小探险家',...(artworkUrl?{artworkUrl}:{})};
    let wanted=false;
    void Promise.resolve().then(()=>{if(live)handle(player.currentStatus);});
    return {
      play:()=>{wanted=true;void modeReady.current.then(()=>{if(live&&wanted){player.setActiveForLockScreen(true,metadata);player.play();}}).catch(()=>{if(live)listener({loaded:true,playing:false,position:player.currentTime,duration:story.duration,ended:false,error:'暂时无法打开声音，请重试。'});});},
      pause:()=>{wanted=false;player.pause();},
      seek:seconds=>player.seekTo(seconds,0,0),
      dispose:()=>{live=false;wanted=false;subscription.remove();player.pause();player.clearLockScreenControls();player.remove();},
    };
  });
  const engine=controller.current;
  const[snapshot,setSnapshot]=useState(engine.snapshot);
  useEffect(()=>{
    modeReady.current=setAudioModeAsync({playsInSilentMode:true,interruptionMode:'doNotMix',shouldPlayInBackground:true,allowsRecording:false});
    // Retain a rejected promise for the user-visible play error, without an unhandled rejection.
    void modeReady.current.catch(()=>{});
    let lastSaved=0,lastId:string|null=null,lastPlaying=false;
    const persist=()=>{
      const s=engine.snapshot,story=findStory(s.storyId);
      if(story&&!s.loading){libraryRef.current.saveProgress(story,s.position);lastSaved=Date.now();}
    };
    const unsubscribe=engine.subscribe(()=>{
      const s=engine.snapshot;setSnapshot(s);
      if(s.storyId!==lastId||s.playing!==lastPlaying||Date.now()-lastSaved>3000)persist();
      lastId=s.storyId;lastPlaying=s.playing;
    });
    const interval=setInterval(()=>engine.checkSleep(),1000);
    const appState=AppState.addEventListener('change',state=>{persist();if(state==='active')engine.checkSleep();});
    const beforeUnload=()=>persist();
    if(Platform.OS==='web')window.addEventListener('pagehide',beforeUnload);
    return()=>{persist();unsubscribe();clearInterval(interval);appState.remove();if(Platform.OS==='web')window.removeEventListener('pagehide',beforeUnload);engine.dispose();};
  },[engine]);
  const playStory=(id:string,position?:number)=>{
    const story=findStory(id);if(!story)return;
    if(engine.snapshot.storyId!==id||engine.snapshot.error)engine.select(story,position??restorePosition(story,libraryRef.current.progress[id]));
    else if(position!==undefined)void engine.seek(position);
    engine.play();
  };
  return <Context.Provider value={{...snapshot,playStory,
    toggle:()=>engine.snapshot.playing?engine.pause():engine.play(),
    seek:seconds=>{void engine.seek(seconds);},
    goToPage:index=>{const story=findStory(engine.snapshot.storyId);if(story?.pages[index])void engine.seek(story.pages[index].start);},
    setSleep:mode=>engine.setSleep(mode),
    retry:()=>{if(engine.snapshot.storyId)playStory(engine.snapshot.storyId,engine.snapshot.position);},
  }}>{children}</Context.Provider>;
}
export function usePlayback(){const value=useContext(Context);if(!value)throw new Error('PlaybackProvider is required');return value;}

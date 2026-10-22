import test from 'node:test';
import assert from 'node:assert/strict';
import { PlaybackController, type PlayerDriver, type PlayerStatus } from '../src/audio/controller';
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
const story = (id: string): any => ({id, duration:30, pages:[{id:'p01',start:0,end:10},{id:'p02',start:10,end:30}]});
function setup() {
  const sessions: { emit:(s:Partial<PlayerStatus>)=>void; releaseSeek?:()=>void; holdSeek:boolean }[] = [];
  const controller = new PlaybackController((_story, listener) => {
    let status: PlayerStatus = {loaded:false,playing:false,position:0,duration:30,ended:false};
    const session = {holdSeek:false, emit(patch:Partial<PlayerStatus>) {status={...status,...patch};listener(status);},releaseSeek:undefined as undefined|(()=>void)};
    sessions.push(session);
    const driver: PlayerDriver = {
      play:()=>session.emit({playing:true}),pause:()=>session.emit({playing:false}),
      seek:async(seconds)=>{if(session.holdSeek)await new Promise<void>(resolve=>{session.releaseSeek=resolve;});session.emit({position:seconds,ended:false});},
      dispose:()=>{},
    }; return driver;
  }); return {controller,sessions};
}
test('late status from previous story cannot replace current playback', async () => {
  const {controller:c,sessions:s}=setup();
  c.select(story('a'),0);c.play();s[0].emit({loaded:true});await tick();
  c.select(story('b'),10);s[1].emit({loaded:true});await tick();
  s[0].emit({position:29,playing:true});
  assert.equal(c.snapshot.storyId,'b');assert.equal(c.snapshot.position,10);assert.equal(c.snapshot.playing,false);
  c.dispose();
});
test('pause during a pending seek prevents an unexpected resume', async () => {
  const {controller:c,sessions:s}=setup();c.select(story('a'),0);s[0].emit({loaded:true});await tick();c.play();await tick();
  s[0].holdSeek=true;const moving=c.seek(12);await tick();c.pause();s[0].releaseSeek?.();await moving;
  assert.equal(c.snapshot.position,12);assert.equal(c.snapshot.playing,false);c.dispose();
});
test('ended story replays from start and paused manual navigation stays paused', async () => {
  const {controller:c,sessions:s}=setup();c.select(story('a'),0);s[0].emit({loaded:true});await tick();
  await c.seek(10);assert.equal(c.snapshot.playing,false);
  c.play();await tick();s[0].emit({position:30,playing:false,ended:true});assert.equal(c.snapshot.playing,false);
  c.play();await tick();assert.equal(c.snapshot.position,0);assert.equal(c.snapshot.playing,true);c.dispose();
});
test('expired sleep timer pauses audio after a delayed background check', async () => {
  const {controller:c,sessions:s}=setup();c.select(story('a'),0);s[0].emit({loaded:true});await tick();c.play();await tick();
  c.setSleep(15,1000);c.checkSleep(901001);
  assert.equal(c.snapshot.playing,false);assert.equal(c.snapshot.sleep,null);c.dispose();
});
test('a status tick cannot undo a sleep pause or repeatedly report the same error', async () => {
  const {controller:c,sessions:s}=setup();c.select(story('a'),0);s[0].emit({loaded:true});await tick();c.play();await tick();
  c.setSleep(15,Date.now()-900001);s[0].emit({position:5,playing:true});
  assert.equal(c.snapshot.playing,false);
  s[0].emit({error:'unavailable'});
  assert.equal(c.snapshot.error,'unavailable');assert.equal(c.snapshot.playing,false);c.dispose();
});

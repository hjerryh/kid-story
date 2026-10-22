import source from './stories.json';
import timings from './timings.json';
import { storyAssets } from './assets';
import type { Story, AgeBand } from './types';
type Timing={duration:number;pages:{id:string;start:number;end:number}[];voice:string};
export const stories:Story[]=source.map(story=>{
  const timing=(timings as Record<string,Timing>)[story.id];
  const assets=storyAssets[story.id];
  if(!timing||!assets)throw new Error(`Incomplete story assets: ${story.id}`);
  return {...story,ageBand:story.ageBand as AgeBand,version:1,pageCount:story.pages.length,duration:timing.duration,cover:assets.cover,audio:assets.audio,
    pages:story.pages.map((page,index)=>({...page,image:assets.pages[index],start:timing.pages[index].start,end:timing.pages[index].end}))};
});
export const findStory=(id:string|null)=>stories.find(story=>story.id===id);
export const ageLabel=(age:AgeBand)=>age.replace('-', '–')+' 岁';
export const durationLabel=(seconds:number)=>`${Math.ceil(seconds/60)} 分钟`;
export const clockLabel=(seconds:number)=>`${Math.floor(Math.max(0,seconds)/60)}:${String(Math.floor(Math.max(0,seconds)%60)).padStart(2,'0')}`;

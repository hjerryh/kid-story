import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import sharp from 'sharp';
const stories=JSON.parse(fs.readFileSync('src/content/stories.json','utf8'));
const timings=JSON.parse(fs.readFileSync('src/content/timings.json','utf8'));
assert.equal(stories.length,6,'Six complete stories are required');
assert.equal(new Set(stories.map(s=>s.id)).size,6);
for(const band of ['3-5','6-8','9-10'])assert.equal(stories.filter(s=>s.ageBand===band).length,2);
const hashes=new Set();const summary=[];
for(const story of stories){
 const timing=timings[story.id],folder=path.join('assets/stories',story.id);
 assert(timing,`${story.id}: missing timing`);assert.equal(timing.pages.length,story.pages.length);
 assert.equal(new Set(story.pages.map(p=>p.id)).size,story.pages.length);
 const cover=await sharp(path.join(folder,'cover.png')).metadata();assert(cover.width>=1000&&cover.height>=800);
 let previousEnd=0;
 for(const [index,page] of story.pages.entries()){
  assert(page.text.trim().length>20,`${story.id}/${page.id}: incomplete text`);
  assert(page.scene?.setting&&page.scene?.action,`${story.id}/${page.id}: missing scene`);
  const time=timing.pages[index];assert.equal(time.id,page.id);assert(Math.abs(time.start-previousEnd)<0.001);assert(time.end>time.start);previousEnd=time.end;
  const file=path.join(folder,`page-${String(index+1).padStart(2,'0')}.png`),buffer=fs.readFileSync(file);
  const image=await sharp(buffer).metadata();assert.equal(image.width,1000);assert.equal(image.height,800);
  const hash=crypto.createHash('sha256').update(buffer).digest('hex');assert(!hashes.has(hash),`Repeated illustration ${file}`);hashes.add(hash);
 }
 const audioPath=path.join(folder,'narration.mp3');
 const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=sample_rate,channels,codec_name','-of','json',audioPath],{encoding:'utf8'}));
 const seconds=Number(probe.format.duration);assert(Math.abs(seconds-timing.duration)<.15);assert(Math.abs(previousEnd-timing.duration)<.15);
 const range={'3-5':[120,240],'6-8':[300,420],'9-10':[480,720]}[story.ageBand];assert(seconds>=range[0]&&seconds<=range[1],`${story.id}: outside age duration range`);
 assert.equal(probe.streams[0].codec_name,'mp3');assert(Number(probe.streams[0].sample_rate)>=24000);
 summary.push({story:story.title,age:story.ageBand,pages:story.pages.length,seconds:Math.round(seconds)});
}
console.table(summary);console.log(`PASS: 6 complete stories, ${hashes.size} distinct illustrations, valid audio and synchronized timelines.`);

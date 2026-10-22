import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import {fileURLToPath} from 'node:url';
import {firstThreeArtwork} from './expansion-art/first-three.mjs';
import {youngArtwork} from './expansion-art/young.mjs';
import {middleArtwork} from './expansion-art/middle.mjs';
import {middleLastArtwork} from './expansion-art/middle-last.mjs';
import {olderArtwork} from './expansion-art/older.mjs';
import {middleExtraArtwork} from './expansion-art/middle-extra.mjs';
import {secondYoungArtwork} from './expansion-art/second-young.mjs';
import {secondMiddleArtwork} from './expansion-art/second-middle.mjs';
import {secondMiddleLastArtwork} from './expansion-art/second-middle-last.mjs';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2), inputAt=args.indexOf('--input');
assert(inputAt>=0&&args[inputAt+1], 'Usage: node scripts/build-expansion-library.mjs --input <story-json>');
const input=JSON.parse(await fs.readFile(path.resolve(ROOT,args[inputAt+1]),'utf8'));
const manuscripts=Array.isArray(input)?input:[input];
const library=path.join(ROOT,'public/library');
const sources=path.join(ROOT,'content-expansion/artwork');
const reports=path.join(ROOT,'content-expansion/reports');
const hash=data=>crypto.createHash('sha256').update(data).digest('hex');
const json=async file=>JSON.parse(await fs.readFile(file,'utf8'));
async function atomicJson(file,data){await fs.mkdir(path.dirname(file),{recursive:true});await fs.writeFile(file+'.tmp',JSON.stringify(data,null,2)+'\n');await fs.rename(file+'.tmp',file);}
async function immutableWrite(file,bytes){
 const buffer=Buffer.isBuffer(bytes)?bytes:Buffer.from(bytes);
 try{const existing=await fs.readFile(file);assert(existing.equals(buffer),`Refusing to change immutable asset: ${file}`);}
 catch(error){if(error.code!=='ENOENT')throw error;await fs.writeFile(file,buffer,{flag:'wx'});}
}
const lockFile=path.join(ROOT,'.cache/expansion-library-build.lock');
await fs.mkdir(path.dirname(lockFile),{recursive:true});
const lock=await fs.open(lockFile,'wx').catch(error=>{if(error.code==='EEXIST')throw new Error('Another library build owns .cache/expansion-library-build.lock; do not build concurrently.');throw error;});
try{
await lock.writeFile(String(process.pid));
await fs.mkdir(library,{recursive:true});await fs.mkdir(reports,{recursive:true});
let previous={schemaVersion:1,stories:[]};
try{previous=await json(path.join(library,'index.json'));}catch(error){if(error.code!=='ENOENT')throw error;}
assert.equal(previous.schemaVersion,1);
const index=new Map(previous.stories.map(s=>[s.id,s]));
// Hash only registered, reviewed renderers. Unpublished artists may work in parallel.
const artworkFiles=['first-three','young','middle','middle-extra','middle-last','older','second-young','second-middle','second-middle-last'].map(name=>name+'.mjs').sort();
const artworkHash=hash(Buffer.concat(await Promise.all([
 ...artworkFiles.map(name=>fs.readFile(path.join(ROOT,'scripts/expansion-art',name))),
 fs.readFile(path.join(ROOT,'scripts/render-illustrations.mjs')),
 fs.readFile(fileURLToPath(import.meta.url)),
 Promise.resolve(Buffer.from(JSON.stringify(sharp.versions))),
])));
const renderers=new Map();
for(const id of [1,17,31])renderers.set(id,firstThreeArtwork);
for(let id=2;id<=16;id++)renderers.set(id,youngArtwork);
for(let id=18;id<=21;id++)renderers.set(id,middleArtwork);
for(let id=22;id<=26;id++)renderers.set(id,middleExtraArtwork);
for(let id=27;id<=30;id++)renderers.set(id,middleLastArtwork);
for(let id=32;id<=40;id++)renderers.set(id,olderArtwork);
for(let id=41;id<=56;id++)renderers.set(id,secondYoungArtwork);
for(let id=57;id<=65;id++)renderers.set(id,secondMiddleArtwork);
for(let id=66;id<=70;id++)renderers.set(id,secondMiddleLastArtwork);
const completed=[],skipped=[];
for(const story of manuscripts){
 assert(/^expansion-\d{4}$/.test(story.id),'Invalid expansion ID');
 if(story.status!=='text-ready'){skipped.push({id:story.id,reason:'Text is awaiting editorial review'});continue;}
 const render=renderers.get(Number(story.id.slice(-4)));
 if(!render){skipped.push({id:story.id,reason:'Artwork has not been reviewed'});continue;}
 const folder=path.join(ROOT,'.cache/expansion-audio',story.id);
 let timing,report,audio;
 try{[timing,report,audio]=await Promise.all([json(path.join(folder,'timing.json')),json(path.join(folder,'report.json')),fs.readFile(path.join(folder,'narration.mp3'))]);}
 catch(error){if(error.code==='ENOENT'){skipped.push({id:story.id,reason:'Narration is incomplete'});continue;}throw error;}
 assert.equal(report.sourceTextSha256,hash(story.pages.map(p=>p.text).join('\n\n')),`${story.id}: narration was recorded from a different manuscript`);
 assert.equal(report.audioSha256,hash(audio),`${story.id}: invalid audio hash`);
 assert.equal(report.timingSha256,hash(await fs.readFile(path.join(folder,'timing.json'))));
 assert.equal(timing.pages.length,story.pages.length);assert.equal(timing.duration,report.duration);
 let end=0;
 for(let i=0;i<story.pages.length;i++){
  const t=timing.pages[i];assert.equal(t.id,story.pages[i].id);assert(Math.abs(t.start-end)<1e-6&&t.end>t.start);end=t.end;
 }
 assert.equal(end,timing.duration);
 const buildHash=hash(JSON.stringify({story,artworkHash,audio:report.audioSha256,timing}));
 const old=index.get(story.id);
 let oldHash;
 if(old){try{oldHash=(await json(path.join(ROOT,'public',old.detailUrl))).buildHash;}catch{}}
 const version=old?old.version+(oldHash===buildHash?0:1):1;
 const url=`/library/stories/${story.id}/v${version}`, destination=path.join(ROOT,'public',url);
 const sourceDir=path.join(sources,story.id);await fs.mkdir(sourceDir,{recursive:true});await fs.mkdir(destination,{recursive:true});
 const pictures=[];
 for(let i=-1;i<story.pages.length;i++){
  const name=i<0?'cover':story.pages[i].id;
  const source=render(story,Math.max(0,i),i<0);
  await fs.writeFile(path.join(sourceDir,`${name}.svg`),source);
  const bytes=await sharp(Buffer.from(source)).webp({quality:88,effort:5}).toBuffer();
  const meta=await sharp(bytes).metadata();assert.equal(meta.width,1000);assert.equal(meta.height,i<0?1000:800);
  assert(bytes.length>4000,`${story.id}/${name}: empty illustration`);
  pictures.push({name,sha256:hash(bytes),bytes:bytes.length});
  await immutableWrite(path.join(destination,`${name}.webp`),bytes);
 }
 assert.equal(new Set(pictures.map(x=>x.sha256)).size,pictures.length,'Duplicate illustration');
 await immutableWrite(path.join(destination,'narration.mp3'),audio);
 const {id,title,subtitle,description,ageBand,theme,color,character}=story;
 const summary={id,version,status:'media-ready',title,subtitle,description,ageBand,theme,color,character,
  cover:`${url}/cover.webp`,pageCount:story.pages.length,duration:timing.duration,detailUrl:`${url}/story.json`};
 await immutableWrite(path.join(destination,'story.json'),JSON.stringify({...summary,audio:`${url}/narration.mp3`,
  pages:story.pages.map((page,i)=>({id:page.id,text:page.text,image:`${url}/${page.id}.webp`,start:timing.pages[i].start,end:timing.pages[i].end})),buildHash},null,2)+'\n');
 index.set(id,summary);
 const result={id,title,version,bodyCharacters:report.sourceChars,pages:story.pages.length,duration:timing.duration,
  bodySha256:report.sourceTextSha256,audioSha256:report.audioSha256,voice:report.voice,illustrations:pictures,
  artworkMethod:'Original scene-specific vector artwork, rendered to WebP',audioVerification:report.verification};
 completed.push(result);await atomicJson(path.join(reports,`${id}-media.json`),result);
 console.log(`${story.id}: ${story.pages.length} illustrations + cover, ${timing.duration.toFixed(2)}s narration`);
}
await atomicJson(path.join(library,'index.json'),{schemaVersion:1,stories:[...index.values()].sort((a,b)=>a.id.localeCompare(b.id))});
console.log(JSON.stringify({mediaReady:index.size,built:completed.length,skipped},null,2));
}finally{await lock.close();await fs.unlink(lockFile);}

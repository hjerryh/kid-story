import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const directory=path.join(ROOT,'content-expansion');
// User reduced the delivery scope on 2026-10-23. Keep earlier manuscripts as reserves.
const TARGET=500;
const hash=text=>crypto.createHash('sha256').update(text).digest('hex');
async function files(dir){try{const result=[];for(const entry of await fs.readdir(dir,{withFileTypes:true})){const f=path.join(dir,entry.name);if(entry.isDirectory())result.push(...await files(f));else if(f.endsWith('.json'))result.push(f);}return result;}catch(e){if(e.code==='ENOENT')return [];throw e;}}
const allFiles=[...await files(path.join(directory,'batches')),...await files(path.join(directory,'manuscripts'))].sort();
const stories=new Map(), titles=new Map(), bodies=new Map(), paragraphs=new Map(), results=[];
const ranges={'3-5':[8,450,650],'6-8':[12,900,1200],'9-10':[16,1400,1900]};
for(const file of allFiles){
 const data=JSON.parse(await fs.readFile(file,'utf8'));
 for(const story of Array.isArray(data)?data:[data]){
  assert(/^expansion-\d{4}$/.test(story.id),`${file}: invalid ID`);
  const number=Number(story.id.slice(-4));assert(number>=1&&number<=1000);
  const offset=(number-1)%40,age=offset<16?'3-5':offset<30?'6-8':'9-10';
  assert.equal(story.ageBand,age,`${story.id}: incorrect age assignment`);
  const [pages,minimum,maximum]=ranges[age];assert.equal(story.pages.length,pages);
  for(const field of ['title','subtitle','description','theme','character'])assert(typeof story[field]==='string'&&story[field].trim(),`${story.id}: missing ${field}`);
  assert(/^#[a-f\d]{6}$/i.test(story.color));
  let body='',characters=0;
  story.pages.forEach((page,i)=>{
   assert.equal(page.id,`p${String(i+1).padStart(2,'0')}`);
   assert(typeof page.text==='string'&&page.text.trim().length>20);
   characters+=(page.text.match(/\p{Script=Han}/gu)||[]).length;body+=page.text;
   for(const field of ['setting','action','mood'])assert(page.scene?.[field],`${story.id}/${page.id}: missing ${field}`);
   assert(Array.isArray(page.scene?.props)&&page.scene.props.length>0);
  });
  assert(characters>=minimum&&characters<=maximum,`${story.id}: ${characters} Han characters, expected ${minimum}–${maximum}`);
  const bodyHash=hash(body);
  if(stories.has(story.id)){
   assert.equal(stories.get(story.id).bodyHash,bodyHash,`${story.id}: conflicting copies`);continue;
  }
  assert(!titles.has(story.title),`Duplicate title: ${story.title}`);
  assert(!bodies.has(bodyHash),`Duplicate full story: ${story.id}`);
  for(const page of story.pages){const digest=hash(page.text);assert(!paragraphs.has(digest),`${story.id}/${page.id}: exact repeated paragraph with ${paragraphs.get(digest)}`);paragraphs.set(digest,`${story.id}/${page.id}`);}
  titles.set(story.title,story.id);bodies.set(bodyHash,story.id);
  stories.set(story.id,{...story,bodyHash,characters,source:path.relative(ROOT,file)});
 }
}
const retained=[...stories.values()].sort((a,b)=>a.id.localeCompare(b.id));
const ordered=retained.filter(s=>Number(s.id.slice(-4))<=TARGET);
const outsideScope=retained.filter(s=>Number(s.id.slice(-4))>TARGET);
let media=[];try{media=JSON.parse(await fs.readFile(path.join(ROOT,'public/library/index.json'),'utf8')).stories;}catch(e){if(e.code!=='ENOENT')throw e;}
assert(media.every(s=>Number(s.id.slice(-4))<=TARGET),'Published catalog exceeds the agreed 500-story scope');
const bands=Object.fromEntries(Object.keys(ranges).map(age=>[age,ordered.filter(s=>s.ageBand===age).length]));
const counts={target:TARGET,manuscripts:ordered.length,textReady:ordered.filter(s=>s.status==='text-ready').length,
 textDraft:ordered.filter(s=>s.status!=='text-ready').length,mediaReadyLocal:media.length,
 bodyCharacters:ordered.reduce((sum,s)=>sum+s.characters,0),pages:ordered.reduce((sum,s)=>sum+s.pages.length,0),ageBands:bands,
 retainedOutsideScope:{manuscripts:outsideScope.length,textReady:outsideScope.filter(s=>s.status==='text-ready').length,notForPublication:true}};
const batches=Array.from({length:Math.ceil(TARGET/40)},(_,i)=>{
 const selected=ordered.filter(s=>Math.floor((Number(s.id.slice(-4))-1)/40)===i);
 return {batch:i+1,expected:Math.min(40,TARGET-i*40),manuscripts:selected.length,textReady:selected.filter(s=>s.status==='text-ready').length};
});
await fs.mkdir(path.join(directory,'reports'),{recursive:true});
const summary={counts,batches,stories:ordered.map(({id,title,ageBand,characters,pages,status,source,bodyHash})=>({id,title,ageBand,characters,pages:pages.length,status,source,bodyHash}))};
await fs.writeFile(path.join(directory,'reports/inventory.json'),JSON.stringify(summary,null,2)+'\n');
await fs.writeFile(path.join(directory,'CATALOG.md'),[
 '# 500篇故事交付目录','',
 `用户于2026-10-23将目标调整为新增${TARGET}篇，保留原有6篇，最终网站506篇。范围内${counts.manuscripts}篇完整正文，其中${counts.textReady}篇标记text-ready、${counts.textDraft}篇待编辑审阅；本地${counts.mediaReadyLocal}篇媒体完整。上线数量以部署记录为准。`,
 `另有${outsideScope.length}篇既有储备稿留存，未纳入本次交付和线上目录，后续制作已停止。`,
 '', '正文字符数仅统计汉字。自动校验覆盖结构、分龄篇幅和完全相同文本；不代表全网原创性排查或每篇都已独立审阅。',
 '', '| 编号 | 标题 | 年龄 | 汉字 | 页数 | 状态 |','| --- | --- | --- | ---: | ---: | --- |',
 ...ordered.map(s=>`| ${s.id} | [${s.title}](${path.relative(directory,path.join(ROOT,s.source))}) | ${s.ageBand} | ${s.characters} | ${s.pages.length} | ${s.status} |`),'',
].join('\n'));
console.log(JSON.stringify(counts,null,2));
if(process.argv.includes('--require-all')){
 const ids=Array.from({length:TARGET},(_,i)=>`expansion-${String(i+1).padStart(4,'0')}`);
 assert.deepEqual(ordered.map(s=>s.id),ids,'The agreed 500 manuscripts are incomplete');
 assert.equal(counts.textReady,TARGET,'Unreviewed manuscripts remain within the agreed scope');
 assert.deepEqual(media.map(s=>s.id).sort(),ids,'The agreed 500-story media library is incomplete');
 assert.deepEqual(bands,{'3-5':208,'6-8':172,'9-10':120});
}

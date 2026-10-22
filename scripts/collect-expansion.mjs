import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';

// Assemble canonical manuscripts for audio/art builds; samples are excluded.
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2);
const value=(flag,fallback)=>args.includes(flag)?args[args.indexOf(flag)+1]:fallback;
const start=Number(value('--start','1')),end=Number(value('--end','1000'));
const output=value('--output','.cache/expansion-selected.json');
assert(Number.isInteger(start)&&Number.isInteger(end)&&start>=1&&end<=1000&&start<=end,'Invalid story range');
assert(output&&!output.startsWith('--'),'--output requires a filename');
async function files(directory){
 const entries=await fs.readdir(directory,{withFileTypes:true}).catch(error=>{if(error.code==='ENOENT')return [];throw error;});
 return (await Promise.all(entries.map(entry=>entry.isDirectory()?files(path.join(directory,entry.name)):entry.name.endsWith('.json')?[path.join(directory,entry.name)]:[]))).flat();
}
const inputFiles=[...await files(path.join(root,'content-expansion/batches')),...await files(path.join(root,'content-expansion/manuscripts'))].sort();
const stories=new Map();
for(const file of inputFiles){
 const data=JSON.parse(await fs.readFile(file,'utf8'));
 for(const story of Array.isArray(data)?data:[data]){
  assert(/^expansion-\d{4}$/.test(story.id),`Invalid story in ${file}`);
  const number=Number(story.id.slice(-4));
  if(number<start||number>end)continue;
  if(stories.has(story.id))assert.deepEqual(stories.get(story.id),story,`Conflicting canonical copies: ${story.id}`);
  stories.set(story.id,story);
 }
}
const selected=[...stories.values()].filter(story=>!args.includes('--ready')||story.status==='text-ready').sort((a,b)=>a.id.localeCompare(b.id));
assert(selected.length>0,'No matching manuscripts');
if(args.includes('--require-range'))assert.equal(selected.length,end-start+1,'The requested range is incomplete');
const destination=path.resolve(root,output);
assert(!destination.startsWith(path.join(root,'content-expansion')+path.sep),'Write build inputs outside canonical content-expansion');
await fs.mkdir(path.dirname(destination),{recursive:true});
await fs.writeFile(destination,JSON.stringify(selected,null,2)+'\n');
console.log(JSON.stringify({stories:selected.length,first:selected[0].id,last:selected.at(-1).id,output:destination}));

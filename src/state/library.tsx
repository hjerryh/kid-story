import React,{createContext,useCallback,useContext,useEffect,useRef,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {stories} from '../content/catalog';
import type {AgeFilter,LibraryData,Story} from '../content/types';
import {getPageIndex,sanitizeLibrary} from './progress';
import {createWriteQueue} from './storage';
const KEY='story-island.library.v1';
type LibraryValue=LibraryData&{ready:boolean;storageError:boolean;setAgeBand:(age:AgeFilter)=>void;toggleFavorite:(id:string)=>void;saveProgress:(story:Story,seconds:number)=>void};
const Context=createContext<LibraryValue|null>(null);
export function LibraryProvider({children}:{children:React.ReactNode}){
  const[data,setData]=useState<LibraryData>(()=>sanitizeLibrary(null,stories));
  const[ready,setReady]=useState(false),[storageError,setStorageError]=useState(false);
  const canPersist=useRef(false);
  const write=useRef(createWriteQueue(value=>AsyncStorage.setItem(KEY,value))).current;
  useEffect(()=>{let live=true;AsyncStorage.getItem(KEY).then(raw=>{
    if(!live)return;let parsed:unknown=null;try{parsed=raw?JSON.parse(raw):null;}catch{/* Corrupt JSON is recoverable as an empty library. */}
    setData(sanitizeLibrary(parsed,stories));canPersist.current=true;
  }).catch(()=>{if(live)setStorageError(true);}).finally(()=>{if(live)setReady(true);});return()=>{live=false;};},[]);
  useEffect(()=>{if(ready&&canPersist.current)void write(JSON.stringify(data)).catch(()=>setStorageError(true));},[data,ready,write]);
  const setAgeBand=useCallback((ageBand:AgeFilter)=>setData(old=>({...old,ageBand})),[]);
  const toggleFavorite=useCallback((id:string)=>setData(old=>({...old,favorites:old.favorites.includes(id)?old.favorites.filter(x=>x!==id):[...old.favorites,id]})),[]);
  const saveProgress=useCallback((story:Story,seconds:number)=>setData(old=>{
    const safe=Math.max(0,Math.min(Number.isFinite(seconds)?seconds:0,story.duration));
    return {...old,lastStoryId:story.id,progress:{...old.progress,[story.id]:{storyId:story.id,version:story.version,pageId:story.pages[getPageIndex(story,safe)].id,seconds:safe,updatedAt:Date.now()}}};
  }),[]);
  return <Context.Provider value={{...data,ready,storageError,setAgeBand,toggleFavorite,saveProgress}}>{children}</Context.Provider>;
}
export function useLibrary(){const value=useContext(Context);if(!value)throw new Error('LibraryProvider is required');return value;}

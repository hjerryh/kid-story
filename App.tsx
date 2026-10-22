import React,{useEffect,useState} from 'react';
import {View,Text,ActivityIndicator,BackHandler,StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LibraryProvider,useLibrary} from './src/state/library';
import {PlaybackProvider} from './src/audio/PlaybackProvider';
import {StoryCatalogProvider,useStoryCatalog} from './src/content/StoryCatalogProvider';
import type {Story} from './src/content/types';
import {LibraryScreen,type LibraryBrowseState} from './src/screens/LibraryScreen';
import {ReaderScreen} from './src/screens/ReaderScreen';
import {Action} from './src/ui/components';
import {colors,font} from './src/ui/theme';

function StoryRoute({id,onBack}:{id:string;onBack:()=>void}){
 const{loadStory,findLoadedStory,findSummary,refresh}=useStoryCatalog();
 const[story,setStory]=useState<Story|undefined>(()=>findLoadedStory(id)),[error,setError]=useState(false),[attempt,setAttempt]=useState(0);
 useEffect(()=>{
  let live=true;
  setError(false);
  void(async()=>{
   if(attempt>0)await refresh();
   if(!live)return;
   try{const loaded=await loadStory(id);if(live)setStory(loaded);}catch{if(live)setError(true);}
  })();
  return()=>{live=false;};
 },[id,attempt,loadStory,refresh]);
 if(story)return <ReaderScreen key={`${story.id}:${story.version}`} story={story} onBack={onBack}/>;
 return <View style={styles.loading}>
  {error?<Text accessibilityRole="alert" style={styles.message}>故事暂时没有打开，联网后可以再试一次。</Text>:<><ActivityIndicator color={colors.green}/><Text style={styles.message}>正在打开{findSummary(id)?.title??'故事'}…</Text></>}
  {error&&<Action label="重新打开故事" onPress={()=>setAttempt(value=>value+1)}/>}
  <Action label="返回故事岛" secondary onPress={onBack}/>
 </View>;
}
function AppContent(){
 const[storyId,setStoryId]=useState<string|null>(null),[shelf,setShelf]=useState(false),{ready}=useLibrary();
 const[browse,setBrowse]=useState<LibraryBrowseState>({query:'',page:0});
 useEffect(()=>{const subscription=BackHandler.addEventListener('hardwareBackPress',()=>{if(storyId){setStoryId(null);return true;}return false;});return()=>subscription.remove();},[storyId]);
 if(!ready)return <View style={styles.loading}><ActivityIndicator color={colors.green}/></View>;
 return <PlaybackProvider>{storyId?<StoryRoute key={storyId} id={storyId} onBack={()=>setStoryId(null)}/>:<LibraryScreen onOpenStory={setStoryId} shelf={shelf} browse={browse} onBrowseChange={setBrowse} onSetShelf={value=>{setShelf(value);setBrowse(old=>({...old,page:0}));}}/>}</PlaybackProvider>;
}
export default function App(){return <SafeAreaProvider><StatusBar style="dark"/><StoryCatalogProvider><LibraryProvider><AppContent/></LibraryProvider></StoryCatalogProvider></SafeAreaProvider>;}
const styles=StyleSheet.create({loading:{flex:1,alignItems:'center',justifyContent:'center',gap:18,padding:28,backgroundColor:colors.paper},message:{fontFamily:font,fontSize:16,lineHeight:28,textAlign:'center',color:colors.muted}});

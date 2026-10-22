import React,{useEffect,useState} from 'react';
import {View,ActivityIndicator,BackHandler,StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LibraryProvider,useLibrary} from './src/state/library';
import {PlaybackProvider} from './src/audio/PlaybackProvider';
import {LibraryScreen} from './src/screens/LibraryScreen';
import {ReaderScreen} from './src/screens/ReaderScreen';
import {findStory} from './src/content/catalog';
import {colors} from './src/ui/theme';
function AppContent(){
 const[storyId,setStoryId]=useState<string|null>(null),[shelf,setShelf]=useState(false),{ready}=useLibrary();
 const story=findStory(storyId);
 useEffect(()=>{const subscription=BackHandler.addEventListener('hardwareBackPress',()=>{if(storyId){setStoryId(null);return true;}return false;});return()=>subscription.remove();},[storyId]);
 if(!ready)return <View style={styles.loading}><ActivityIndicator color={colors.green}/></View>;
 return <PlaybackProvider>{story?<ReaderScreen key={story.id} story={story} onBack={()=>setStoryId(null)}/>:<LibraryScreen onOpenStory={setStoryId} shelf={shelf} onSetShelf={setShelf}/>}</PlaybackProvider>;
}
export default function App(){return <SafeAreaProvider><StatusBar style="dark"/><LibraryProvider><AppContent/></LibraryProvider></SafeAreaProvider>;}
const styles=StyleSheet.create({loading:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:colors.paper}});

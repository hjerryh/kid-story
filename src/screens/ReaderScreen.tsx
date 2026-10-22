import React,{useEffect,useRef,useState} from 'react';
import {View,Text,ScrollView,Pressable,Modal,StyleSheet,useWindowDimensions,ActivityIndicator} from 'react-native';
import {SeekBar} from '../ui/SeekBar';
import {StoryPicture} from '../ui/StoryPicture';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {Story} from '../content/types';
import {ageLabel,clockLabel} from '../content/catalog';
import {getPageIndex,restorePosition} from '../state/progress';
import {useLibrary} from '../state/library';
import {usePlayback} from '../audio/PlaybackProvider';
import type {SleepMode} from '../audio/controller';
import {Icon,IconButton,Action} from '../ui/components';
import {colors,font,serif} from '../ui/theme';

export function ReaderScreen({story,onBack}:{story:Story;onBack:()=>void}){
 const{width}=useWindowDimensions(),wide=width>=900,insets=useSafeAreaInsets(),library=useLibrary(),playback=usePlayback();
 const initialPosition=useRef(restorePosition(story,library.progress[story.id]));
 useEffect(()=>{library.saveProgress(story,initialPosition.current);},[story,library.saveProgress]);
 const[manualPosition,setManualPosition]=useState(initialPosition.current),[timerOpen,setTimerOpen]=useState(false),[dragPosition,setDragPosition]=useState<number|null>(null);
 const active=playback.storyId===story.id,position=active?playback.position:manualPosition;
 const index=getPageIndex(story,position),page=story.pages[index],favorite=library.favorites.includes(story.id),playing=active&&playback.playing;
 const readerScroll=useRef<React.ComponentRef<typeof ScrollView>>(null);
 useEffect(()=>{readerScroll.current?.scrollTo({y:0,animated:false});},[index]);
 const loading=active&&playback.loading,error=active?playback.error:null,ended=position>=story.duration-.1;
 const jump=(seconds:number)=>{if(active)playback.seek(seconds);else setManualPosition(seconds);library.saveProgress(story,seconds);};
 const go=(delta:number)=>{const next=story.pages[index+delta];if(next)jump(next.start);};
 const toggle=()=>{if(error)playback.retry();else if(active)playback.toggle();else playback.playStory(story.id,manualPosition);};
 const sleepLabel=playback.sleep==='end'?'本篇结束':typeof playback.sleep==='number'?`${playback.sleep} 分钟`:'定时关闭';
 return <View style={s.root}>
  <View style={[s.header,{paddingTop:insets.top+14,paddingHorizontal:wide?42:18}]}>
   <Pressable accessibilityRole="button" accessibilityLabel="返回故事岛" onPress={onBack} style={s.back}><Icon name="back" size={22}/><Text style={s.backText}>故事岛</Text></Pressable>
   <Text numberOfLines={1} style={s.headerTitle}>{story.title}</Text>
   <IconButton name="heart" label={favorite?'取消收藏这个故事':'收藏这个故事'} filled={favorite} onPress={()=>library.toggleFavorite(story.id)}/>
  </View>
  <ScrollView ref={readerScroll} contentContainerStyle={{paddingHorizontal:wide?42:20,paddingTop:wide?36:15,paddingBottom:28}}>
   <View style={[s.readingArea,wide&&{flexDirection:'row',alignItems:'flex-start',gap:42}]}>
    <View style={[s.pictureColumn,wide&&{width:'56%'}]}>
     <View style={s.pictureFrame}><StoryPicture key={page.id} label={`${story.title}，第 ${index+1} 页插图`} source={page.image}/><View style={s.pageNumber}><Text style={s.pageNumberText}>{String(index+1).padStart(2,'0')} <Text style={{opacity:.5}}> / {String(story.pages.length).padStart(2,'0')}</Text></Text></View></View>
     {wide&&<View style={s.pageHints}><Text style={s.hint}>一幅画，一小段奇妙。</Text><View style={{flexDirection:'row',alignItems:'center',gap:10}}><IconButton name="previous" label="上一页" disabled={index===0} onPress={()=>go(-1)} style={s.pageNav}/><IconButton name="next" label="下一页" disabled={index===story.pages.length-1} onPress={()=>go(1)} style={s.pageNav}/></View></View>}
    </View>
    <View style={[s.textColumn,wide?{flex:1,paddingTop:13}:{paddingHorizontal:7,paddingTop:23}]}>
     <View style={s.storyTags}><Text style={s.tag}>{ageLabel(story.ageBand)}</Text><View style={s.dot}/><Text style={s.tag}>{story.theme}</Text><View style={s.dot}/><Text style={s.tag}>原创童话</Text></View>
     <Text style={[s.title,{fontSize:wide?35:27,lineHeight:wide?49:39}]}>{story.title}</Text>
     <View style={s.divider}/>
     <Text accessibilityLiveRegion="none" style={[s.storyText,{fontSize:story.ageBand==='3-5'?22:20,lineHeight:wide?39:35}]}>{page.text}</Text>
     {index===story.pages.length-1&&<View style={s.ending}><Icon name="leaf" size={18} color={colors.green}/><Text style={s.endingText}>故事讲完了，想象还在继续。</Text></View>}
     {!wide&&<View style={s.mobilePageNav}><IconButton name="previous" label="上一页" disabled={index===0} onPress={()=>go(-1)} style={s.pageNav}/><Text style={s.pageHint}>第 {index+1} 页 · 共 {story.pages.length} 页</Text><IconButton name="next" label="下一页" disabled={index===story.pages.length-1} onPress={()=>go(1)} style={s.pageNav}/></View>}
    </View>
   </View>
  </ScrollView>
  <View style={[s.player,{paddingBottom:insets.bottom+15,paddingHorizontal:wide?36:22}]}><View style={s.playerInner}>
   {error&&<Pressable accessibilityRole="button" onPress={playback.retry}><Text accessibilityRole="alert" style={s.error}>{error}　重试 →</Text></Pressable>}
   <View style={s.seekRow}><Text style={s.time}>{clockLabel(dragPosition??position)}</Text><SeekBar maximum={story.duration} value={dragPosition??position} onStart={()=>setDragPosition(position)} onPreview={setDragPosition} onCommit={value=>{jump(value);setDragPosition(null);}}/><Text style={s.time}>{clockLabel(story.duration)}</Text></View>
   <View style={s.controls}>
    <View style={[s.controlSide,{width:wide?110:44}]}><Icon name="headphones" size={19} color={colors.muted}/>{wide&&<Text style={s.controlCaption}>{playing?'正在讲给你听':'让故事陪着你'}</Text>}</View>
    <View style={s.mainControls}>
     <IconButton name="previous" label="播放上一页" disabled={index===0} onPress={()=>go(-1)} size={48}/>
     <Pressable accessibilityRole="button" accessibilityLabel={error?'重试播放':loading?'正在准备故事':playing?'暂停播放':ended?'再听一次':'播放故事'} onPress={toggle} disabled={loading} style={({pressed})=>[s.playButton,{opacity:pressed?.8:1}]}>{loading?<ActivityIndicator color={colors.white}/>:<Icon name={playing?'pause':'play'} color={colors.white} size={29}/>}</Pressable>
     <IconButton name="next" label="播放下一页" disabled={index===story.pages.length-1} onPress={()=>go(1)} size={48}/>
    </View>
    <Pressable accessibilityRole="button" accessibilityLabel={`定时关闭，当前${sleepLabel}`} onPress={()=>setTimerOpen(true)} style={[s.controlSide,{alignItems:'flex-end',width:wide?110:44}]}><Icon name="moon" size={20} color={colors.muted}/><Text style={s.controlCaption}>{sleepLabel}</Text></Pressable>
   </View>
  </View></View>
  <Modal visible={timerOpen} transparent animationType="fade" onRequestClose={()=>setTimerOpen(false)}><Pressable onPress={()=>setTimerOpen(false)} style={s.backdrop}><Pressable onPress={()=>{}} style={[s.timerCard,{paddingBottom:insets.bottom+28}]}><View style={s.timerHeader}><Text style={s.timerTitle}>故事轻轻停下来</Text><IconButton name="close" label="关闭定时设置" onPress={()=>setTimerOpen(false)}/></View><Text style={s.timerDescription}>到了时间就暂停，替你记住听到哪里。</Text>{([['end','听完这篇故事'],[15,'15 分钟后'],[30,'30 分钟后'],[null,'不设置定时']] as [SleepMode,string][]).map(([mode,label])=><Pressable key={String(mode)} accessibilityRole="button" accessibilityLabel={label} onPress={()=>{playback.setSleep(mode);setTimerOpen(false);}} style={[s.timerOption,playback.sleep===mode&&{backgroundColor:colors.lightGreen}]}><Text style={s.timerOptionText}>{label}</Text>{playback.sleep===mode&&<Icon name="check" color={colors.green} size={20}/>}</Pressable>)}</Pressable></Pressable></Modal>
 </View>;
}
const s=StyleSheet.create({
 root:{flex:1,backgroundColor:colors.paper},header:{paddingBottom:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:colors.line,gap:12},back:{flexDirection:'row',alignItems:'center',gap:5,minHeight:44},backText:{fontFamily:font,fontSize:13,color:colors.ink},headerTitle:{fontFamily:font,fontSize:14,fontWeight:'500',color:colors.muted,flexShrink:1},readingArea:{maxWidth:1160,width:'100%',alignSelf:'center'},pictureColumn:{},pictureFrame:{aspectRatio:1.25,borderRadius:25,overflow:'hidden',backgroundColor:'#E8E9DC'},picture:{width:'100%',height:'100%'},pageNumber:{position:'absolute',right:16,top:16,paddingVertical:8,paddingHorizontal:12,borderRadius:14,backgroundColor:'#FFFEF1E8'},pageNumberText:{fontSize:12,color:colors.ink,fontVariant:['tabular-nums'],letterSpacing:1},pageHints:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:18},hint:{fontFamily:serif,fontSize:15,color:colors.muted,letterSpacing:1},pageNav:{backgroundColor:colors.soft},textColumn:{},storyTags:{flexDirection:'row',alignItems:'center',gap:9},tag:{fontFamily:font,fontSize:11,color:colors.muted},dot:{width:3,height:3,borderRadius:2,backgroundColor:'#B7BDAA'},title:{fontFamily:serif,color:colors.ink,fontWeight:'600',marginTop:16},divider:{width:30,height:2,backgroundColor:'#D3B38A',marginTop:22,marginBottom:22},storyText:{fontFamily:font,color:'#435044',letterSpacing:1},ending:{marginTop:26,flexDirection:'row',alignItems:'center',gap:8,paddingVertical:13},endingText:{fontFamily:serif,fontSize:14,color:colors.green},mobilePageNav:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:26},pageHint:{fontFamily:font,fontSize:11,color:colors.muted},player:{backgroundColor:'#FFFEFA',borderTopWidth:1,borderTopColor:colors.line,paddingTop:10},playerInner:{maxWidth:800,width:'100%',alignSelf:'center'},seekRow:{flexDirection:'row',alignItems:'center',gap:12},time:{fontSize:11,color:colors.muted,fontVariant:['tabular-nums'],minWidth:34,textAlign:'center'},slider:{height:32,flex:1},controls:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:5},mainControls:{flexDirection:'row',alignItems:'center',gap:12},playButton:{width:62,height:62,borderRadius:31,backgroundColor:colors.green,justifyContent:'center',alignItems:'center',boxShadow:'0 4px 16px #36644D22'},controlSide:{width:90,alignItems:'flex-start',gap:6,minHeight:48,justifyContent:'center'},controlCaption:{fontFamily:font,fontSize:10,color:colors.muted},error:{fontFamily:font,fontSize:12,color:colors.orange,textAlign:'center',padding:8},backdrop:{flex:1,backgroundColor:'#18332666',justifyContent:'flex-end',alignItems:'center'},timerCard:{backgroundColor:colors.paper,width:'100%',maxWidth:480,borderTopLeftRadius:28,borderTopRightRadius:28,padding:25},timerHeader:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},timerTitle:{fontFamily:font,fontSize:22,fontWeight:'600',color:colors.ink},timerDescription:{fontFamily:font,fontSize:12,color:colors.muted,marginTop:4,marginBottom:20},timerOption:{minHeight:54,borderRadius:14,marginTop:7,paddingHorizontal:18,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},timerOptionText:{fontFamily:font,fontSize:15,color:colors.ink},
});

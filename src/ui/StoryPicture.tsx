import React,{useState} from 'react';
import {Image,View,Text,Pressable,StyleSheet,type ImageSourcePropType} from 'react-native';
import {colors,font} from './theme';

export function StoryPicture({source,label}:{source:ImageSourcePropType;label:string}){
 const[failed,setFailed]=useState(false),[attempt,setAttempt]=useState(0);
 return <View style={StyleSheet.absoluteFill}>
  <Image key={attempt} source={source} accessibilityLabel={label} resizeMode="cover" style={{width:'100%',height:'100%'}} onError={()=>setFailed(true)}/>
  {failed&&<View style={s.fallback}>
   <Text accessibilityRole="alert" style={s.message}>插图暂时没有打开，可以继续听故事。</Text>
   <Pressable accessibilityRole="button" accessibilityLabel="重新加载插图" onPress={()=>{setFailed(false);setAttempt(value=>value+1);}} style={s.retry}><Text style={s.retryText}>重新打开插图</Text></Pressable>
  </View>}
 </View>;
}
const s=StyleSheet.create({fallback:{position:'absolute',top:0,right:0,bottom:0,left:0,alignItems:'center',justifyContent:'center',padding:24,backgroundColor:colors.soft,gap:12},message:{fontFamily:font,color:colors.muted,fontSize:14,lineHeight:24,textAlign:'center'},retry:{minHeight:44,paddingHorizontal:20,justifyContent:'center',borderRadius:16,backgroundColor:colors.green},retryText:{fontFamily:font,color:colors.white,fontSize:14}});

import React from 'react';
import {Pressable,Text,StyleSheet,View,type StyleProp,type ViewStyle} from 'react-native';
import Svg,{Path,Circle,Rect} from 'react-native-svg';
import {colors,font} from './theme';
export type IconName='play'|'pause'|'back'|'next'|'previous'|'heart'|'moon'|'book'|'leaf'|'close'|'check'|'headphones'|'arrow'|'sun';
export function Icon({name,size=24,color=colors.ink,filled=false}:{name:IconName;size?:number;color?:string;filled?:boolean}){
  const paths:Record<string,string>={
    play:'M9 5L20 12L9 19Z',pause:'M8 5V19M16 5V19',back:'M15 5L8 12L15 19',next:'M8 5L16 12L8 19',previous:'M16 5L8 12L16 19',
    heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
    moon:'M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z',
    book:'M12 6C8 3 4 4 2 5V20c4-2 7-1 10 1 3-2 6-3 10-1V5c-3-1-7-2-10 1ZM12 6V21',
    leaf:'M20 3C20 3 5 1 4 12c-1 7 8 10 12 5 4-5 4-14 4-14ZM5 20L15 9',
    close:'M6 6L18 18M6 18L18 6',check:'M5 12L10 17L20 7',headphones:'M4 14V11a8 8 0 0 1 16 0v3M4 12H7v9H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2ZM20 12H17v9h3a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z',
    arrow:'M4 12H20M14 6L20 12L14 18',sun:'M12 2V4M12 20V22M2 12H4M20 12H22M5 5L6.5 6.5M17.5 17.5L19 19M5 19L6.5 17.5M17.5 6.5L19 5',
  };
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d={paths[name]} stroke={color} strokeWidth={name==='pause'?3:1.7} strokeLinecap="round" strokeLinejoin="round" fill={name==='play'||(name==='heart'&&filled)?color:'none'}/>{name==='sun'&&<Circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.7"/>}</Svg>;
}
export function Logo({small=false}:{small?:boolean}){return <View style={{flexDirection:'row',alignItems:'center',gap:10}}><View style={{width:small?38:46,height:small?38:46,borderRadius:15,backgroundColor:colors.green,alignItems:'center',justifyContent:'center',transform:[{rotate:'-5deg'}]}}><Icon name="book" color="#FFF4CE" size={small?23:28}/></View><View><Text style={{fontFamily:font,fontSize:small?19:23,fontWeight:'700',color:colors.ink,letterSpacing:1}}>小小故事岛</Text>{!small&&<Text style={{fontSize:8,color:colors.muted,letterSpacing:2.5,marginTop:4}}>LITTLE STORY ISLAND</Text>}</View></View>;}
export function Action({label,onPress,icon,secondary=false,style,disabled=false}:{label:string;onPress:()=>void;icon?:IconName;secondary?:boolean;style?:StyleProp<ViewStyle>;disabled?:boolean}){
 return <Pressable accessibilityRole="button" accessibilityLabel={label} disabled={disabled} onPress={onPress} style={({pressed})=>[s.action,{backgroundColor:secondary?colors.soft:colors.green,opacity:disabled?.4:pressed?.8:1},style]}><Text style={[s.actionText,{color:secondary?colors.ink:colors.white}]}>{label}</Text>{icon&&<Icon name={icon} size={19} color={secondary?colors.ink:colors.white}/>}</Pressable>;
}
export function IconButton({name,label,onPress,filled=false,size=44,disabled=false,style}:{name:IconName;label:string;onPress:()=>void;filled?:boolean;size?:number;disabled?:boolean;style?:StyleProp<ViewStyle>}){
 return <Pressable accessibilityRole="button" accessibilityLabel={label} disabled={disabled} onPress={onPress} style={({pressed})=>[{width:size,height:size,alignItems:'center',justifyContent:'center',borderRadius:size/2,opacity:disabled?.25:pressed?.6:1},style]}><Icon name={name} filled={filled} color={filled?colors.orange:colors.ink}/></Pressable>;
}
const s=StyleSheet.create({action:{minHeight:48,paddingHorizontal:23,borderRadius:16,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:14},actionText:{fontFamily:font,fontSize:15,fontWeight:'600'}});

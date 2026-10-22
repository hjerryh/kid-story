import Slider from '@react-native-community/slider';
import {colors} from './theme';
export interface SeekBarProps {value:number;maximum:number;onStart:()=>void;onPreview:(value:number)=>void;onCommit:(value:number)=>void;}
export function SeekBar({value,maximum,onStart,onPreview,onCommit}:SeekBarProps){return <Slider style={{flex:1,height:32}} accessibilityLabel="故事播放进度" accessibilityValue={{min:0,max:maximum,now:value,text:`${Math.floor(value)} 秒，共 ${Math.floor(maximum)} 秒`}} minimumValue={0} maximumValue={maximum} value={value} minimumTrackTintColor={colors.green} maximumTrackTintColor={colors.line} thumbTintColor={colors.green} onSlidingStart={onStart} onValueChange={onPreview} onSlidingComplete={onCommit}/>;}

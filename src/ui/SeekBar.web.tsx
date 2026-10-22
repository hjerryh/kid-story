import React from 'react';
import type {SeekBarProps} from './SeekBar';
import {colors} from './theme';
export function SeekBar({value,maximum,onStart,onPreview,onCommit}:SeekBarProps){
 return <input aria-label="故事播放进度" type="range" min={0} max={maximum} step={0.1} value={value} aria-valuetext={`${Math.floor(value)} 秒，共 ${Math.floor(maximum)} 秒`} onPointerDown={onStart} onChange={event=>onPreview(Number(event.currentTarget.value))} onPointerUp={event=>onCommit(Number(event.currentTarget.value))} onPointerCancel={event=>onCommit(Number(event.currentTarget.value))} onKeyUp={event=>onCommit(Number(event.currentTarget.value))} onBlur={event=>onCommit(Number(event.currentTarget.value))} style={{flex:1,width:0,minWidth:0,height:24,margin:0,accentColor:colors.green,cursor:'pointer'}}/>;
}

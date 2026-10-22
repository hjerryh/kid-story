import {Platform} from 'react-native';
export const colors={paper:'#FAF8F2',white:'#FFFFFF',ink:'#283D34',muted:'#7C8579',green:'#36644D',lightGreen:'#EAF0E5',peach:'#F5DFCB',orange:'#C87D4F',line:'#E4E6DC',soft:'#F0EFE6'};
export const font=Platform.select({ios:'PingFang SC',android:undefined,web:'"PingFang SC", "Microsoft YaHei", sans-serif'});
export const serif=Platform.select({ios:'STSong',android:'serif',web:'"Songti SC", "Noto Serif CJK SC", serif'});

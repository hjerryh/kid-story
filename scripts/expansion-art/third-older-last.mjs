// Original scene-specific vector illustrations, independent of previously frozen modules.
import {E,R,P,G,line,leaf,cloud,tree,table,stool,book,lantern,rock,svg} from '../render-illustrations.mjs';
import {room,outdoors} from './middle.mjs';
const ink='#40534F',paper='#EFE5C9',skin='#D8AE88',blue='#7F9CA4',green='#849C80',gold='#C7A76C';
const arm=(x,y,dx,dy,c,w=18)=>P(`M${x} ${y} Q${x+dx*.6} ${y+dy*.2-7} ${x+dx} ${y+dy}`,'none',c,w);
const tx=(v,x,y,s=18,c=ink)=>`<text x="${x}" y="${y}" font-size="${s}" font-family="PingFang SC,sans-serif" text-anchor="middle" fill="${c}">${v}</text>`;
const sheet=(x,y,s=1,art='',rot=0)=>G(x,y,s,R(-78,-54,156,108,paper,3)+art,rot);
const letter=(x,y,s=1,mark='',rot=0)=>sheet(x,y,s,mark?tx(mark,0,5,18):[-24,-4,17].map((yy,j)=>line(-52,yy,43-j*7,yy,'#9CA28B',3)).join(''),rot);
const pencil=(x,y,s=1,rot=20)=>G(x,y,s,R(-3,-53,6,90,'#B29B70',2)+P('M-3 37 L3 37 L0 48Z',ink),rot);
const bowl=(x,y,s=1,c='#ADB7A0')=>G(x,y,s,P('M-43 -20 Q-33 27 0 28 Q33 27 43 -20Z',c)+E(0,-20,43,15,paper));
const bag=(x,y,s=1,c=blue)=>G(x,y,s,R(-30,-29,60,59,c,9)+R(-31,-33,62,25,c,5)+E(0,-9,4,4,gold));
const cup=(x,y,s=1)=>G(x,y,s,R(-21,-32,42,52,'#B1BDA8',7)+E(0,-32,21,7,'#879A89')+P('M22 -24 Q48 -25 42 -1 Q36 8 22 4','none','#B1BDA8',6));
function child(x,y,s=1,who='sha',pose='hold',sit=false,headless=false){
 const deer=who==='mi',sali=who==='sha',ning=who==='ning',nanzhi=who==='nan';
 const hair=deer?'#79624F':'#4C514A',tone=sali?'#BA906C':ning?'#C8A07B':skin,cloth=ning?'#6D8C99':paper,dress=deer?'#7C9272':'#C7AC70';
 let a=E(0,0,66,10,ink,'opacity=".12"');
 if(sit)a+=P('M-23 -65 L-53 -38 L-58 -12 M23 -65 L53 -38 L58 -12','none',ning?paper:sali?'#6D8595':'#9D957B',23)+E(-58,-7,25,11,'#8D7D64')+E(58,-7,25,11,'#8D7D64');
 else a+=R(-31,-75,23,64,ning?paper:sali?'#6D8595':'#9D957B',8)+R(9,-75,23,64,ning?paper:sali?'#6D8595':'#9D957B',8)+E(-21,-8,24,11,'#8D7D64')+E(22,-8,24,11,'#8D7D64');
 a+=P('M-39 -170 L39 -170 L48 -62 Q0 -45 -48 -62Z',cloth);
 if(deer||nanzhi)a+=P('M-29 -143 L29 -143 L54 -45 Q0 -26 -54 -45Z',dress)+R(-28,-171,10,59,dress,2)+R(18,-171,10,59,dress,2);
 if(sali)a+=P('M-31 -143 L31 -143 L37 -56 L12 -56 L0 -76 L-12 -56 L-37 -56Z','#678495')+R(-29,-170,11,56,'#678495',3)+R(18,-170,11,56,'#678495',3);
 if(ning)a+=line(0,-159,0,-67,'#94A8AC',3)+R(-47,-83,93,10,'#AE966D',2)+G(41,-78,1,R(-7,0,14,62,'#B4955D',2)+[12,25,38,51].map(yy=>line(-5,yy,2,yy,'#7D8266',2)).join(''));
 if(deer)a+=bag(39,-70,.63);
 if(!headless){a+=E(0,-222,60,62,hair)+R(-56,-220,112,39,hair,10)+E(0,-212,49,48,tone)+P('M-52 -222 Q-51 -277 0 -277 Q56 -274 53 -219 Q26 -220 10 -244 Q-16 -217 -52 -222Z',hair);
 if(sali)a+=P('M-44 -200 l-13 31 l8 22 M43 -200 l13 31 l-8 22','none',hair,14)+E(0,-263,72,14,'#C38D54')+P('M-47 -266 Q-48 -308 0 -308 Q49 -307 48 -266Z','#D29B5B');
 if(deer)a+=P('M-28 -268 L-35 -302 L-54 -316 M-35 -302 L-20 -321 M28 -268 L35 -302 L54 -316 M35 -302 L20 -321','none','#AC936E',7);
 if(nanzhi)a+=line(-43,-246,-24,-257,'#B29364',7);
 a+=pose==='listen'?P('M-25 -214 Q-17 -206 -9 -214 M9 -214 Q17 -206 25 -214','none',ink,2):E(-17,-214,4,5,ink)+E(17,-214,4,5,ink);
 a+=pose==='read'?E(0,-187,6,8,'#9B7966'):P(pose==='sad'?'M-11 -187 Q0 -195 11 -187':'M-11 -191 Q0 -180 11 -191','none','#96795F',2);
 }
 const l=pose==='open'?[-43,23]:pose==='raise'?[-24,-67]:pose==='hold'||pose==='read'?[24,37]:[-12,48];
 const r=pose==='point'?[66,-12]:pose==='write'?[108,52]:pose==='touch'?[98,-29]:pose==='think'?[-27,-33]:pose==='open'?[43,23]:pose==='hold'||pose==='read'?[-24,37]:[13,48];
 a+=arm(-39,-149,...l,cloth)+arm(39,-149,...r,cloth)+E(-39+l[0],-149+l[1],10,11,tone)+E(39+r[0],-149+r[1],10,11,tone);
 return G(x,y,s,a);
}
const cushion=(x,y,s=1,c='#94A6A5',patched=false)=>G(x,y,s,R(-89,-23,178,49,c,17)+line(-69,-9,66,-9,'#B9C7B3',2)+(patched?cloud(0,7,.33,'#CBD4C9'):'')+[-54,0,54].map(xx=>line(xx,-20,xx,22,'#B5BAA0',2)).join(''));
function palm(x,y,s=1){return G(x,y,s,P('M0 0 Q28 -179 3 -332','none','#AD9971',26)+[-82,-45,0,43,80].map((r,j)=>G(0,-324,1,P('M0 0 Q-68 -68 -128 11 Q-55 -18 0 0Z',['#7F9D76','#8DA67B'][j%2]),r)).join('')+[-12,3,17].map(xx=>E(xx,-307,9,15,'#B79B66')).join(''));}
function oasis(){return R(0,0,1000,800,'#D8D5B4',0)+cloud(763,158,1.45,'#E5E5CA')+P('M0 441 Q233 302 503 461 Q752 329 1000 443 L1000 800 L0 800Z','#C5BB90')+P('M0 627 Q406 520 1000 657 L1000 800 L0 800Z','#D5C49A')+palm(107,646,1.22)+palm(907,585,.86);}
function well(x,y,s=1,bucketRaised=true){return G(x,y,s,R(-127,-104,254,108,'#A4A58B',12)+E(0,-103,128,32,'#A5A68D')+E(0,-110,112,23,'#B8AA7C')+[-52,-2,48].map(xx=>line(xx,-126,xx,-94,'#8D866B',3)).join('')+R(-144,-290,17,286,'#A18C68',4)+R(126,-290,17,286,'#A18C68',4)+line(-136,-285,135,-285,'#A18C68',17)+E(95,-269,22,22,'#7F8D78')+line(95,-269,126,-239,'#897E62',9)+E(128,-236,9,10,'#A79167')+line(0,-282,0,bucketRaised?-147:-96,'#8C8467',4)+[[-135,-163],[134,-163]].map(([xx,yy])=>line(xx,yy,xx,22,'#8B967B',10)).join('')+line(-136,-157,135,-157,'#8B967B',9)+(bucketRaised?bucket(0,-112,.5):''));}
function bucket(x,y,s=1,inside=''){return G(x,y,s,P('M-56 -69 L56 -69 L43 22 L-43 22Z','#AA956E')+[-30,0,30].map(xx=>line(xx,-63,xx*.79,17,'#C2B08A',3)).join('')+E(0,-69,56,18,'#8C8E73')+P('M-49 -66 Q-55 -143 0 -143 Q56 -143 50 -66','none','#8E8567',7)+inside+line(-46,-11,46,-11,'#838E75',5));}
const thimble=(x,y,s=1)=>G(x,y,s,P('M-22 5 L-19 -38 Q0 -55 19 -38 L22 5Z','#BD9559')+E(0,5,22,7,'#D8B675')+[-10,0,10].map(xx=>[-29,-16].map(yy=>E(xx,yy,2,2,'#917F5C')).join('')).join('')+E(1,-7,4,6,'#8F7E59'));
function mist(x,y,s=1,sleep=false){return G(x,y,s,cloud(0,-31,.57,'#C6D4D0')+E(0,-45,36,30,'#CCD8D2')+(sleep?P('M-18 -46 q6 5 12 0 M6 -46 q6 5 12 0','none',ink,2):E(-12,-46,3,4,ink)+E(12,-46,3,4,ink))+P('M-35 -31 Q-65 -56 -71 -25 M35 -31 Q65 -56 71 -25','none','#C6D4D0',6));}
function glassJar(x,y,s=1,cover='fine',occupied=false){let a=R(-66,-122,132,131,'#B7CEC6',20,'fill-opacity=".48" stroke="#8DAAA2" stroke-width="3"')+E(0,8,64,16,'#B8CEC3','fill-opacity=".5"')+line(-47,-93,-47,-24,'#DCE4D4',5);if(occupied)a+=mist(0,-7,.7,true);a+=E(0,-124,65,15,'none','stroke="#91ABA1" stroke-width="5"');if(cover!=='none')a+=P('M-72 -131 Q0 -149 72 -131 L67 -114 Q0 -128 -67 -114Z',cover==='coarse'?'#B5B798':paper)+line(-68,-119,68,-119,'#B4976C',4)+P('M47 -119 Q76 -115 79 -92 Q65 -85 60 -100 M58 -118 Q81 -130 85 -114','none','#B4976C',3)+(cover==='coarse'?[-45,-23,0,23,45].map(xx=>line(xx,-136,xx,-119,'#7F947F',2)).join(''):'');return G(x,y,s,a);}
const bottle=(x,y,s=1)=>G(x,y,s,R(-25,-72,50,80,'#A9C2B8',12,'fill-opacity=".6" stroke="#8FA99E" stroke-width="3"')+R(-11,-107,22,40,'#B9CFC3',5)+R(-13,-118,26,15,'#AF9971',3)+P('M12 -103 Q50 -97 44 -58','none','#B49C72',3));
const patchwork=(x,y,s=1,cloudPatch=false)=>G(x,y,s,R(-105,-63,210,126,'#AEBAA0',10)+[-90,-30,30].map((xx,j)=>R(xx,-52,55,48,[blue,'#D0B983','#BEA690'][j],3)+R(xx,4,55,48,['#C6B68C','#93AA9E',blue][j],3)).join('')+(cloudPatch?cloud(3,15,.48,'#D2D8CA'):''));
function underground(){return R(0,0,1000,800,'#728F8D',0)+P('M0 0 L280 0 Q169 276 282 491 L162 800 L0 800Z','#91A29A')+P('M1000 0 L807 0 Q875 328 792 800 L1000 800Z','#A2AD9C')+R(240,557,552,134,'#9EAA98',18)+E(512,756,329,44,'#829F9B')+[292,418,711].map((xx,j)=>line(xx,149+j*49,xx,198+j*49,'#AEC9BC',5)).join('');}
function saliStory(i,cover){if(cover)return oasis()+well(749,697,.94)+child(309,752,1.2,'sha','hold')+letter(305,610,.7)+glassJar(555,680,.81,'coarse',true);
 const work=(pose='write')=>oasis()+table(590,649,1.18)+child(283,754,1.15,'sha',pose);
 const inside=(pose='write')=>room()+table(590,649,1.18)+child(283,754,1.15,'sha',pose);
 return [
 ()=>oasis()+well(807,658,.65,false)+stool(297,702,.7)+cushion(297,690,.65)+child(297,754,1.05,'sha','point',true)+table(468,637,.78)+patchwork(467,612,.62)+thimble(755,577,.32)+P('M565 627 Q681 653 748 581','none','#BFA67C',2,'stroke-dasharray="4 9"'),
 ()=>oasis()+well(692,699,1.08,false)+child(318,751,1.25,'sha','point')+bucket(514,699,.64,letter(0,-70,.25)),
 ()=>work()+letter(468,631,.7)+pencil(441,611,.55,-30)+bucket(795,660,.75)+patchwork(634,636,.42),
 ()=>work('point')+G(605,613,1.03,E(0,0,65,33,'#A58A67')+E(0,-8,55,23,paper)+P('M-41 -8 Q-18 -24 39 0','none','#C3CDBA',12)+P('M-47 18 l8 10 m9 -7 l5 10 m18 -10 l1 11 m21 -16 l-3 11 m20 -20 l-6 11','none','#7F775C',3))+bucket(800,663,.72)+letter(471,676,.36),
 ()=>oasis()+well(729,687,.94)+child(301,752,1.21,'sha','think')+table(493,653,.67)+bottle(501,627,.9)+letter(369,654,.43),
 ()=>inside('think')+[-10,0,10].map((rot,j)=>letter(484+j*64,609+j%2*32,.35,'',rot)).join('')+letter(487,684,.47)+patchwork(792,628,.39)+pencil(445,632,.53,-30),
 ()=>work('point')+E(593,592,57,57,'#AB9C78')+E(593,592,47,47,'#BBD2CC')+P('M559 584 L618 560','none','#D7E3D7',7)+R(656,609,85,24,'#9BAE9B',5)+bucket(805,670,.69)+letter(466,660,.4),
 ()=>underground()+thimble(451,560,1.6)+mist(452,516,1.1)+G(660,522,1.08,E(0,0,64,69,'#A89978')+E(0,0,54,59,'#AFC6BF')+mist(0,35,.62))+letter(346,575,.4),
 ()=>inside()+R(752,604,79,31,'#9B9E82',5)+line(766,613,813,621,'#CCD1BF',3)+patchwork(788,726,.53)+letter(474,634,.7)+pencil(442,613,.55,-30),
 ()=>work('point')+glassJar(617,611,1.12,'fine')+R(761,587,95,24,paper,4)+P('M780 648 q-18 -35 8 -43 q33 3 18 39','none','#B59B70',4)+bucket(845,734,.51),
 ()=>work('think')+letter(489,611,.65)+sheet(666,627,.56,E(0,-4,45,10,'none','stroke="#8AA397" stroke-width="3"')+line(-42,-4,42,-4,'#8AA397',3))+R(771,634,83,25,paper,4)+bowl(794,668,.55),
 ()=>room()+child(348,751,1.22,'sha','raise')+G(246,430,.8,R(-61,-67,122,134,'#ADB195',3)+[-40,-20,0,20,40].map(xx=>line(xx,-63,xx,63,'#7F947F',2)).join('')+[-45,-22,0,22,45].map(yy=>line(-57,yy,57,yy,'#7F947F',2)).join(''))+table(665,653,1.16)+patchwork(664,621,.76)+R(663,615,58,47,'#888D79',3)+sheet(765,633,.29)+sheet(825,645,.29)+pencil(498,645,.6,-34),
 ()=>work('point')+glassJar(609,617,1.12,'coarse')+G(687,498,1,P('M0 0 Q25 -24 34 0 Q22 20 0 0','none','#B4B79A',9))+letter(474,673,.4)+bucket(825,683,.72),
 ()=>oasis()+well(758,685,.9,false)+child(306,751,1.2,'sha','hold')+bucket(536,691,.79,thimble(0,-67,.46)+letter(16,-77,.14))+G(303,610,.6,thimble(0,0,.7)+letter(58,-9,.3)),
 ()=>work('write')+patchwork(592,615,.89,true)+P('M449 635 Q479 616 501 620','none','#A49C78',3)+thimble(453,636,.25)+sheet(801,660,.47,cloud(0,0,.34,'#9DADA6')),
 ()=>R(0,0,1000,800,'#D7D1AE',0)+G(0,0,.57,oasis()+stool(311,700,.8)+cushion(311,680,.76,blue,true)+child(311,747,1.14,'sha','write',true)+table(588,642,1.1)+letter(482,640,.77)+pencil(471,621,.62,-28))+G(433,328,.567,underground()+glassJar(512,555,1.6,'coarse',true))+P('M528 0 Q520 327 440 376 Q401 455 443 800','none','#B3B499',19),
 ][i]();}

function cave(raining=false){return R(0,0,1000,800,'#C3D2B9',0)+P('M0 0 L1000 0 L1000 800 L779 800 L812 564 Q796 118 544 117 Q267 151 267 552 L236 800 L0 800Z','#8F9F89')+P('M0 672 Q464 550 1000 692 L1000 800 L0 800Z','#A9B59B')+P('M323 566 Q518 448 783 564','none','#B4C4A6',30)+[70,146,884,943].map((xx,j)=>leaf(xx,711-j%2*48,.58,'#7E9C76',j%2?-55:40)).join('')+(raining?[352,423,502,588,676,745].map((xx,j)=>line(xx,198+j%3*45,xx-9,244+j%3*45,'#8FB0AA',3)).join(''):'');}
const shell=(x,y,s=1,groove=false,rot=0)=>G(x,y,s,P('M-77 5 Q-99 -62 -44 -91 Q11 -121 82 -63 L91 10 Q4 -12 -77 5Z','#839C99','#6F8885',3)+P('M-60 -1 Q-71 -53 -33 -68 Q10 -90 67 -50','none',groove?'#D5DCD0':'#A9BCB1',groove?9:3)+P('M-30 -59 L-30 -11 M9 -72 L9 -17 M47 -60 L47 -10','none','#9EB6AA',3),rot);
function dragon(x,y,s=1,stage='old',pose='calm',scarf=true){const fresh=['new','folded','open'].includes(stage),body=fresh?'#ADC7B8':'#8FAAA0',leg=stage==='partial'||stage==='split'||fresh?'#AAC4B2':body;
 let a=E(0,0,164,14,ink,'opacity=".12"')+P(pose==='tap'?'M73 -53 Q155 8 220 -2 Q254 -9 257 -33':'M74 -53 Q157 1 222 -32 Q263 -53 258 -97 Q253 -45 211 -48 Q165 -57 123 -95',body);
 if(fresh)a+=stage==='folded'?P('M-8 -88 L-34 -170 L13 -156 L33 -189 L63 -147 L105 -168 L107 -89Z','#B7D5C7','#8CAEA4',3):P('M-6 -83 Q-78 -160 -64 -291 Q-26 -257 19 -242 Q19 -283 53 -310 Q77 -262 107 -234 Q147 -259 185 -250 Q152 -150 87 -79Z','#BED8C9','#8DAEA4',3,'fill-opacity=".73"')+P('M15 -107 L19 -241 M52 -108 L54 -297 M83 -106 L173 -243','none','#9FBDAF',3);
 if(!fresh)a+=shell(42,-109,1.23,false,-8)+(stage==='split'?P('M42 -212 L31 -115 L78 -140 L65 -225Z','#BED6C5'):'')+P('M31 -218 Q48 -169 39 -122','none',stage==='old'?'#A8BBB0':'#D2D8C9',stage==='old'?3:6);
 a+=E(2,-70,111,68,body)+E(-64,-15,36,21,leg)+E(77,-14,38,22,leg)+P('M-69 -62 Q-105 -24 -78 -13 M65 -62 Q31 -23 66 -13','none',leg,31)+E(-85,-119,57,55,body)+E(-123,-106,46,31,body)+P('M-116 -156 L-108 -189 L-92 -166 M-68 -166 L-45 -187 L-52 -147',body)+E(-111,-120,9,10,'#C9A66A')+E(-112,-120,3,6,ink)+E(-147,-110,4,3,'#627E76')+P(pose==='sad'?'M-145 -89 Q-124 -103 -109 -88':'M-145 -96 Q-126 -79 -107 -95','none','#5F7D70',3)+[-42,3,44].map((xx,j)=>P(`M${xx-11} ${-77-j%2*12} q12 10 24 0`,'none',fresh?'#92B39F':'#719085',2)).join('');
 if(scarf)a+=P('M-107 -75 Q-73 -60 -53 -90 L-42 -72 Q-69 -43 -105 -56Z','#B28365')+P('M-61 -66 L-33 -27 L-23 -49 L-37 -80Z','#B28365');
 if(pose==='tap')a+=line(224,8,235,16,'#C2BC93',3)+line(248,6,260,10,'#C2BC93',3);
 return G(x,y,s,a);}
function mossFriend(x,y,s=1,pose='hold',sit=false,carrying=true){let a=E(0,0,52,8,ink,'opacity=".1"')+(sit?P('M-17 -52 L-46 -25 L-44 -5 M17 -52 L45 -25 L43 -5','none','#A5B28F',16):R(-26,-57,20,48,'#A5B28F',7)+R(7,-57,20,48,'#A5B28F',7))+E(-27,-4,23,10,'#8E9878')+E(29,-4,23,10,'#8E9878')+R(-34,-68,68,29,'#9B8F6C',5)+P('M-31 -143 L31 -143 L38 -66 L-38 -66Z',paper)+E(0,-186,45,45,'#B4C49F')+[-36,-19,0,19,36].map((xx,j)=>E(xx,-215-j%2*9,21,22,'#5E7D5C')).join('')+E(-14,-188,3,4,ink)+E(14,-188,3,4,ink)+P('M-9 -166 Q0 -158 9 -166','none','#849471',2)+arm(-29,-125,pose==='low'?-85:pose==='reach'?-90:-20,pose==='low'?90:pose==='reach'?-2:39,'#B4C49F',13)+arm(29,-125,pose==='point'?45:-14,pose==='point'?-17:35,'#B4C49F',13)+line(26,-138,-27,-65,'#A28D66',3)+(carrying?flask(39,-75,.37):'');return G(x,y,s,a);}
function flask(x,y,s=1){return G(x,y,s,E(0,0,47,37,'#A0B3A2')+E(0,0,36,27,'#B8C8AE')+R(-11,-55,22,21,'#9AAF9C',4)+R(-14,-60,28,10,'#B6A276',3)+P('M-30 -28 Q-63 -63 -33 -92','none','#9E8E66',4));}
const lowStone=(x,y,s=1)=>G(x,y,s,R(-125,-18,250,50,'#8B9E8C',15)+E(0,-18,124,26,'#B5C1A7'));
const cloth=(x,y,s=1)=>G(x,y,s,P('M-35 -12 Q-11 -22 35 -11 L28 17 Q4 9 -28 21Z','#C8D4C0'));
function liqingStory(i,cover){if(cover)return cave(true)+dragon(432,735,1.25,'open')+mossFriend(813,745,1.02,'hold',true)+shell(701,756,.48);
 const old=(stage='old',pose='calm')=>cave()+dragon(414,718,1.26,stage,pose);
 return [
 ()=>cave(true)+dragon(400,718,1.32,'old')+line(735,515,732,563,'#8FB0AA',4)+E(731,577,5,7,'#8FB0AA'),
 ()=>old('partial')+E(385,756,146,24,'#8AA9A0')+G(387,756,.62,'<g transform="scale(1 -.2)">'+dragon(0,0,1,'partial')+'</g>'),
 ()=>old('partial')+mossFriend(829,738,1.05,'point')+lowStone(665,735,.54)+G(665,697,.53,P('M-38 -63 L-14 -75 L-6 -51 L10 -51 L17 -75 L39 -63 L32 9 L-33 9Z',paper)),
 ()=>old('partial')+bowl(766,730,.92)+G(719,600,1.0,line(0,0,-79,-142,'#A99770',10)+E(-86,-155,15,29,'#B6A47B')+cloth(-86,-154,.62))+P('M739 596 Q723 581 719 600','none','#8FAAA0',16),
 ()=>cave()+E(494,684,259,68,'#8D9F91')+E(494,667,236,51,'#A8C5B7')+G(482,643,1.1,E(0,0,151,65,'#8FAAA0')+E(-131,-32,59,50,'#8FAAA0')+E(-161,-19,43,27,'#8FAAA0')+P('M-154 -70 L-163 -96 L-137 -76 M-120 -78 L-105 -102 L-99 -65Z','#8FAAA0')+E(-154,-40,8,9,'#C6AA72')+E(-155,-40,3,5,ink)+E(-182,-24,4,3,'#627E76')+P('M-181 -2 Q-161 13 -143 -3','none','#5F7D70',3)+P('M-66 -20 L-79 -86 M55 -21 L76 -83','none','#AAC2AE',29)+E(-79,-86,24,13,'#AAC2AE')+E(76,-83,24,13,'#AAC2AE')+P('M88 19 Q179 63 222 2','none','#8FAAA0',28)+P('M-79 28 Q12 69 109 24','none','#7C9690',25))+P('M237 680 Q478 757 738 680 L730 709 Q480 774 248 708Z','#9ABAAE','',0,'opacity=".48"')+P('M720 744 Q749 723 786 735 L811 757 L772 771Z','#B28365'),
 ()=>old('partial','sad')+lowStone(784,719,.74)+[-1,0,1].map((j)=>shell(739+j*49,690+(j%2)*5,.28,true,j*14)).join('')+cloth(751,746,.75)+line(869,756,871,568,'#AD9B73',7),
 ()=>cave(true)+dragon(453,721,1.29,'partial','sad')+P('M740 520 L759 721','none','#A28F6A',8)+E(737,498,15,28,'#B7A27A')+cloth(737,497,.5),
 ()=>cave()+lowStone(800,733,.49)+dragon(407,720,1.2,'partial','sad')+mossFriend(818,752,1.02,'hold',true),
 ()=>cave()+dragon(399,722,1.22,'partial')+mossFriend(797,752,1.08,'hold',true)+shell(641,758,.3,true),
 ()=>cave()+dragon(309,739,1.02,'partial')+lowStone(615,667,1.01)+shell(608,620,.81,true)+cloth(611,585,.73)+bowl(748,645,.59)+mossFriend(852,744,.99,'point'),
 ()=>cave()+cushion(481,734,1.34,'#A7BAA1')+dragon(397,716,1.26,'partial','tap')+mossFriend(837,746,1.05,'reach')+cloth(712,595,.75)+bowl(851,736,.58),
 ()=>cave()+dragon(402,717,1.3,'split')+mossFriend(811,744,1.02,'hold',true)+bowl(732,746,.61)+cloth(731,721,.68)+lowStone(145,733,.47)+shell(143,696,.32),
 ()=>cave()+cushion(651,743,1.12,'#A7BAA1')+dragon(378,719,1.16,'folded')+shell(637,714,.56,true,-17)+shell(725,724,.52,true,18)+mossFriend(840,748,1.07,'low'),
 ()=>cave()+dragon(407,726,1.23,'open')+mossFriend(826,746,1.03,'hold',true)+cushion(694,748,.67)+shell(707,735,.4)+leaf(576,419,.37,'#A8B792',64),
 ()=>cave(true)+dragon(415,730,1.3,'open')+mossFriend(816,748,1.04,'hold',true)+[388,475,589].map((xx,j)=>line(xx,306+j%2*43,xx-7,344+j%2*43,'#8FB0AA',3)).join(''),
 ()=>cave(true)+dragon(383,722,1.19,'open')+mossFriend(747,742,.99,'hold',true,false)+shell(821,748,.55,true)+shell(622,765,.43,true)+flask(818,712,.55)+line(820,586,820,661,'#A2BDB0',3)+E(819,679,4,7,'#A2BDB0'),
 ][i]();}

function attic(evening=false){return R(0,0,1000,800,evening?'#B8B79B':'#D6CBA7',0)+P('M0 0 L509 0 L0 410Z','#AFA080')+P('M1000 0 L507 0 L1000 376Z','#B9A887')+P('M0 407 L508 34 L1000 376','none','#958B6E',23)+R(0,641,1000,159,'#AA9C7A',0)+[80,274,478,692,884].map(xx=>line(xx,643,xx-51,800,'#8E8A6B',2)).join('')+E(750,312,156,156,'#A29570')+E(750,312,138,138,evening?'#B1BCB0':'#BDCFB6')+line(750,174,750,450,'#CDBB8C',11)+line(615,312,885,312,'#CDBB8C',11)+R(589,459,323,26,'#AE9974',5)+P('M599 437 L824 436 L539 800 L291 800Z','#E9D7A0','',0,'opacity=".22"');}
function qsnail(x,y,s=1,fade=false){return G(x,y,s,E(0,-1,30,8,'#CAD7D0',fade?'opacity=".4"':'')+P('M-16 -3 Q-38 -14 -27 -28 Q-17 -40 -7 -24 L-4 -6Z','#D0DDD6')+line(-27,-27,-34,-42,'#B7CCC4',3)+line(-19,-28,-16,-45,'#B7CCC4',3)+E(-34,-43,3,3,ink)+E(-16,-45,3,3,ink)+P('M0 -52 Q-2 -78 23 -76 Q49 -73 40 -53 Q35 -43 19 -34 L19 -25','none','#D5E0D8',11,fade?'opacity=".35"':'opacity=".8"')+P('M0 -52 Q-2 -78 23 -76 Q49 -73 40 -53 Q35 -43 19 -34 L19 -25','none','#9DBBB1',2)+E(19,-12,5,5,'#D9E4D9'));
}
function plate(x,y,s=1,n=3){return G(x,y,s,E(0,0,78,22,'#C5CCB6')+E(0,-4,70,17,paper)+Array.from({length:n},(_,j)=>qsnail((j-(n-1)/2)*44,-6,.5)).join(''));}
function fairy(x,y,s=1,pose='hold',n=0){let a=E(0,-33,25,36,'#C4D5B7','fill-opacity=".78"')+P('M-23 -73 L25 -73 L37 -7 Q-4 -25 -36 -7Z','#8DA8AA')+E(0,-112,31,35,'#B3CFAF','fill-opacity=".78"')+P('M-12 -144 Q-42 -177 -29 -183 Q-4 -176 -12 -144 M12 -144 Q40 -180 29 -187 Q4 -177 12 -144','none','#8FAE80',8)+E(-10,-114,3,4,ink)+E(10,-114,3,4,ink)+P('M-7 -98 Q0 -91 7 -98','none','#84997B',2)+arm(-22,-65,pose==='point'?-43:18,pose==='point'?-26:18,'#B4CDAE',7)+arm(23,-65,pose==='point'?43:-16,pose==='point'?-26:18,'#B4CDAE',7)+E(-14,0,16,6,'#A6C0A2')+E(15,0,16,6,'#A6C0A2');if(n)a+=plate(0,-43,.58,n);return G(x,y,s,a);}
function readingBox(x,y,s=1,pose='read',withBook=true){return G(x,y,s,R(-111,-143,222,144,'#A68E66',6)+R(-97,-129,194,111,'#BCAB82',5)+cushion(0,-86,.91,blue)+child(0,-10,.97,'nan',pose,true)+(withBook?book(0,-128,.69,true,blue):'')+R(-111,-40,222,44,'#A68E66',5)+line(-88,-30,89,-30,'#C2B08B',3));}
function tray(x,y,s=1,n=8){return G(x,y,s,R(-188,-88,376,176,'#A89570',19)+R(-175,-75,350,148,'#C3B68E',14)+Array.from({length:n},(_,j)=>letter(-134+(j%4)*88,-36+Math.floor(j/4)*73,.31,'',j%2?8:-7)+qsnail(-129+(j%4)*88,-27+Math.floor(j/4)*73,.43)).join(''));}
function marginBook(x,y,s=1){return G(x,y,s,book(0,0,1.4,true,blue)+[[-102,-47],[-106,12],[102,-33],[107,28]].map(([xx,yy])=>E(xx,yy,10,8,'#C8B18A')).join(''));}
function nanStory(i,cover){if(cover)return attic()+readingBox(330,760,1.13)+fairy(761,463,.89,'hold',1)+plate(599,698,.7,3)+letter(604,732,.4);
 const desk=()=>attic()+table(603,649,1.15)+child(300,752,1.12,'nan','point');
 return [
 ()=>attic()+readingBox(313,760,1.1,'hold',false)+book(315,606,.7,false,blue)+fairy(835,450,.61,'hold',3),
 ()=>attic()+child(317,751,1.28,'nan','open')+table(621,647,1.13)+fairy(654,605,1.4,'hold',3)+cushion(807,746,.7,blue),
 ()=>desk()+letter(596,593,.95)+E(537,623,13,11,'#C8B18A')+qsnail(560,614,.69)+plate(781,638,.63,2)+fairy(803,459,.66,'point')+book(438,676,.42,false,blue),
 ()=>attic()+child(301,751,1.15,'nan','point',true)+R(409,687,157,59,paper,8)+R(571,684,103,22,'#C3AD9F',6)+R(684,670,144,74,'#A9AF92',4)+[-1,0,1].map(j=>line(704+j*23,676,704+j*23,736,'#83947A',2)).join('')+fairy(621,680,.92,'point')+plate(831,757,.6,2)+book(431,767,.46,true,green),
 ()=>attic()+readingBox(243,762,.99,'sad')+[[509,628],[689,625],[865,632],[516,744],[694,739],[868,742]].map(([x,y])=>plate(x,y,.78,2)).join('')+fairy(757,475,.79,'hold',3),
 ()=>desk()+marginBook(589,607,.86)+qsnail(658,628,.53)+plate(801,669,.59,3)+fairy(799,459,.72,'hold',2)+letter(465,711,.3)+P('M856 755 L874 679 M858 754 L843 748 L833 772 L867 781Z','#A6AB8C','#A0916B',4),
 ()=>desk()+book(587,603,.89,true,green)+book(807,644,.51,false,'#A2A889')+book(820,583,.51,false,'#BAA17B')+plate(463,693,.58,3)+fairy(797,459,.79,'point')+plate(792,733,.58,3),
 ()=>attic()+readingBox(216,761,.94,'read')+tray(666,681,1.35,8)+fairy(851,448,.54,'hold',2),
 ()=>attic()+readingBox(250,761,1.01,'sad',false)+book(250,621,.63,false,blue)+tray(678,704,1.2,8)+fairy(742,459,.88,'hold',2),
 ()=>attic()+child(326,752,1.14,'nan','sad')+book(326,623,.66,false,blue)+tray(701,717,1.03,8)+fairy(865,452,.65,'hold',2)+P('M887 264 L904 292 L904 449 L884 449Z','#82958B'),
 ()=>attic(true)+readingBox(268,762,1.04,'read')+tray(701,711,1.12,8)+letter(497,736,.36)+book(755,420,.26,false,blue),
 ()=>attic()+readingBox(266,761,1.01,'open',false)+tray(692,717,1.09,8)+fairy(763,461,.77,'hold')+plate(736,459,.44,0),
 ()=>attic()+table(603,650,1.2)+child(287,753,1.11,'nan','listen')+fairy(756,630,1.13,'hold')+qsnail(738,581,.52,true)+qsnail(781,584,.48)+plate(590,633,.65,3)+tray(741,747,.65,4),
 ()=>attic()+R(560,159,355,401,'#B7BA9D',9)+R(581,179,312,360,'#99A78D',6)+R(626,479,139,40,'#9E9071',4)+cushion(694,470,.57,blue)+R(799,375,83,155,'#B4A880',5)+[412,457,504].map(y=>plate(834,y,.39,2)).join('')+fairy(693,478,.88,'point')+child(331,752,1.16,'nan','point')+plate(461,578,.54,2)+tray(507,737,.55,0),
 ()=>attic()+readingBox(321,762,1.15)+fairy(784,462,.76,'hold',1)+letter(848,462,.29),
 ()=>attic()+table(611,658,.7)+readingBox(322,762,1.15,'point')+fairy(560,622,.88,'hold',1)+letter(458,579,.28),
 ][i]();}

function badgerGirl(x,y,s=1,pose='hold',sit=false){let a=E(0,0,69,9,ink,'opacity=".12"')+(sit?P('M-22 -62 L-53 -36 L-56 -9 M23 -62 L52 -36 L57 -9','none','#978F7A',22):R(-30,-66,23,57,'#978F7A',7)+R(8,-66,23,57,'#978F7A',7))+E(-23,-7,26,11,'#938E7B')+E(25,-7,26,11,'#938E7B')+E(0,-114,57,83,'#92988A')+P('M-44 -175 L44 -175 L48 -57 Q0 -39 -48 -57Z','#C6AD78')+[-21,0,21].map(xx=>line(xx,-151,xx,-67,'#DEC897',2)).join('')+E(-44,-255,22,24,'#92988A')+E(45,-255,22,24,'#92988A')+E(0,-218,64,56,'#92988A')+P('M-9 -268 L9 -268 L24 -206 Q0 -186 -24 -206Z',paper)+E(-25,-221,4,5,ink)+E(26,-221,4,5,ink)+E(0,-205,10,7,'#647168')+P('M-12 -188 Q0 -178 12 -188','none','#6F7C6B',2)+arm(-41,-154,pose==='point'?-75:26,pose==='point'?-15:40,'#92988A')+arm(42,-154,pose==='point'?60:-26,pose==='point'?-17:40,'#92988A');return G(x,y,s,a);}
function doorTouchChild(x,y,s=1){return G(x,y,s,child(0,0,1,'mi','touch',false,true)+R(-12,-184,30,29,skin,5)+P('M-26 -242 Q-12 -273 18 -268 Q47 -264 50 -239 L49 -226 Q54 -214 47 -213 L46 -198 Q38 -177 13 -176 Q-23 -180 -29 -213Z',skin)+P('M-24 -200 Q-59 -218 -38 -258 Q-16 -293 22 -275 Q43 -268 49 -249 Q24 -260 4 -232 L-10 -202Z','#79624F')+P('M-20 -265 L-29 -299 L-48 -311 M-29 -299 L-15 -320 M16 -268 L24 -304 L43 -319 M24 -304 L11 -319','none','#AC936E',7)+E(32,-231,3,5,ink)+P('M35 -198 Q42 -191 47 -199','none','#977B61',2));}

function corridor(){return R(0,0,1000,800,'#CEC6A6',0)+R(0,628,1000,172,'#A69A79',0)+[88,245,398,587,744,912].map(xx=>line(xx,631,xx-43,800,'#8E8B70',2)).join('')+R(510,94,339,543,'#9A8C6C',13)+R(534,116,292,515,'#B6A17A',8)+[592,650,708,766].map(xx=>line(xx,128,xx,615,'#A18E6C',3)).join('')+R(815,125,10,490,'#D9DEC4',3)+E(783,406,8,8,'#8E8C6A')+R(82,173,250,17,'#A69A78',5)+lantern(198,176,.55);}
function mistIsland(){return R(0,0,1000,800,'#D4DECD',0)+R(0,618,1000,182,'#BAB99C',0)+[60,270,480,690,900].map(xx=>line(xx,620,xx-37,800,'#A2AA90',2)).join('')+cloud(56,577,2.15,'#E4E8D6')+cloud(937,583,2.35,'#E4E8D6')+P('M398 172 L849 172 L849 208 L398 208Z','#B0AB89')+R(573,211,197,395,'#8BA7AB',9)+R(593,231,156,353,'#9AB6B8',5)+line(669,238,669,584,'#83A3A6',4)+E(724,415,7,7,'#CCB07B')+R(558,604,226,27,'#A7A483',4);}
const woodStool=(x,y,s=1)=>G(x,y,s,stool(0,0,1)+P('M-49 -19 Q-11 -31 3 -17 Q20 -4 49 -20','none','#8F8666',3));
function beanJar(x,y,s=1){return G(x,y,s,R(-41,-99,82,104,'#AAC1B2',15,'fill-opacity=".5" stroke="#8CA697" stroke-width="3"')+E(0,-99,41,10,'#9FB9AC')+[-19,2,21,-13,14,-22,4,25].map((xx,j)=>E(xx,-12-Math.floor(j/3)*23,10,7,['#A5B186','#B7BA8C'][j%2])).join('')+line(-29,-81,-29,-30,'#D6DFCB',4));}
function shellSpoon(x,y,s=1,r=0){return G(x,y,s,P('M-24 -16 Q-26 -48 0 -48 Q27 -47 25 -15 L18 -10 L14 -17 L8 -11 L0 -16 L-10 -11Z','#D5C7A7','#B7AC89',2)+R(-4,-14,8,65,'#CABD97',4)+[-14,0,14].map(xx=>line(0,-17,xx,-38,'#B5B79B',2)).join(''),r);}
const pods=(x,y,s=1)=>G(x,y,s,[-25,0,25].map((yy,j)=>G(j*18,yy,1,P('M-43 0 Q0 -28 44 0 Q0 25 -43 0Z','#9CA97A')+line(-36,0,37,0,'#C3C49A',2),j*12-10)).join(''));
function fountain(x,y,s=1){return G(x,y,s,E(0,0,131,42,'#AAB7AB')+E(0,-9,116,31,'#9FBEB5')+R(-15,-158,30,145,'#B4B799',8)+[-102,-158].map((yy,j)=>G(0,yy,1-j*.28,P('M-72 -14 Q0 -103 72 -14 Q0 12 -72 -14Z','#D4CCAF')+[-43,-22,0,22,43].map(xx=>line(0,-11,xx,-55,'#B6B59A',3)).join(''))).join('')+P('M0 -204 Q-43 -239 -60 -160 M0 -204 Q43 -239 60 -160 M-61 -113 Q-92 -84 -98 -17 M61 -113 Q92 -84 98 -17','none','#BDD3C4',5));}
function lighthouse(x,y,s=1){return G(x,y,s,P('M-39 0 L-29 -205 L29 -205 L39 0Z',paper)+R(-31,-164,62,41,'#B98F7B',2)+R(-35,-83,70,42,'#B98F7B',2)+R(-39,-239,78,35,'#A2BAB0',3)+P('M-49 -240 L0 -281 L49 -240Z','#AE8E76')+line(-48,-202,48,-202,'#A38F6D',8));}
function colorfulIsland(){return R(0,0,1000,800,'#BDCFBC',0)+R(0,461,1000,339,'#9DBDB4',0)+P('M0 628 Q448 377 1000 622 L1000 800 L0 800Z','#D0C5A0')+palm(116,658,1.03)+lighthouse(813,495,1.0)+[[348,'#BEA18C'],[498,'#A8B695'],[649,'#C6B27F']].map(([xx,c],j)=>R(xx,358+j%2*36,116,225-j%2*36,c,4)+P(`M${xx-9} ${360+j%2*36} L${xx+58} ${299+j%2*36} L${xx+127} ${360+j%2*36}Z`,'#A79C7B')+R(xx+38,461,40,122,'#7F9DA1',5)).join('')+fountain(738,706,.9);}
function misaStory(i,cover){if(cover)return mistIsland()+child(322,751,1.25,'mi','point')+woodStool(686,684,.72)+beanJar(716,648,.78)+shellSpoon(756,610,.67,-20)+cushion(478,753,.65)+cushion(795,753,.65,'#C5AD7C');
 const home=(pose='point')=>mistIsland()+child(310,752,1.14,'mi',pose);
 return [
 ()=>corridor()+doorTouchChild(448,752,1.25)+P('M511 415 L522 421','none','#D7DCC2',4),
 ()=>outdoors()+R(0,636,1000,164,'#B5AC88',0)+line(48,482,942,482,'#A09472',15)+[72,236,419,594,768,931].map(xx=>line(xx,481,xx,637,'#A09472',11)).join('')+child(315,750,1.21,'mi','open')+badgerGirl(757,750,1.11)+cushion(755,612,.63,'#C8B180')+cup(533,709,.7),
 ()=>mistIsland()+woodStool(635,671,.9)+child(337,751,.96,'mi','point',true),
 ()=>room()+table(600,649,1.25)+child(296,754,1.18,'mi','write')+G(598,609,.8,book(0,0,1.6,true,green)+P('M-103 -3 Q-52 -35 -5 -3 L-5 37 L-103 25Z','#9DBCB0')+palm(71,21,.15))+lantern(838,605,.55),
 ()=>colorfulIsland()+R(296,411,135,223,blue,6)+woodStool(365,690,.6)+child(480,753,1.19,'mi','sad'),
 ()=>corridor()+R(821,235,91,380,'#D1DDCA',3)+R(836,317,67,247,blue,4)+woodStool(870,594,.31)+doorTouchChild(448,752,1.25),
 ()=>home('listen')+woodStool(622,694,.75)+beanJar(721,637,.94)+shellSpoon(769,607,.7,-25)+P('M776 611 l17 -3 M783 624 l15 4','none','#9CA88B',2),
 ()=>R(0,0,1000,800,'#CBC9AC',0)+G(0,0,.52,room(true)+R(92,606,657,146,'#A29C7C',13)+R(114,584,614,84,'#D2CBB0',21)+E(322,565,61,51,skin)+P('M263 565 Q252 492 314 490 Q383 494 379 559Z','#79624F')+P('M289 511 L282 479 L265 463 M342 513 L350 476 L367 463','none','#AC936E',7)+R(370,572,352,85,'#ADC0AC',20))+G(480,310,.52,corridor()+child(375,754,1.22,'mi','sad')+letter(677,705,.8)+pencil(736,729,.7,-47)),
 ()=>colorfulIsland()+child(340,752,1.21,'mi','sad')+badgerGirl(594,754,1.07,'point')+G(807,221,.65,P('M-20 0 Q-3 -16 16 0 Q33 -14 48 0','none',ink,5)),
 ()=>mistIsland()+woodStool(549,689,.74)+child(292,752,1.07,'mi','listen',true)+badgerGirl(728,753,1.01,'point',true)+beanJar(566,648,.73)+shellSpoon(609,611,.63,-17)+pods(557,752,.63),
 ()=>colorfulIsland()+child(437,754,1.17,'mi','touch')+P('M597 546 Q640 564 674 578','none',paper,18)+E(679,583,13,12,skin)+E(689,607,8,12,'#B5D0C1'),
 ()=>corridor()+R(819,136,143,478,'#DDE4D2',4)+G(887,496,.42,lighthouse(0,0,1))+cloud(893,514,.87,'#E6E9D8')+doorTouchChild(448,752,1.25),
 ()=>mistIsland()+woodStool(435,687,.83)+child(432,754,1.01,'mi','listen',true)+beanJar(735,654,.7)+bowl(605,745,.8)+pods(574,706,.69)+E(167,757,57,18,'#E7E9D6'),
 ()=>R(0,0,1000,800,'#D3CAAB',0)+P('M0 800 L0 732 L258 732 L258 651 L537 651 L537 570 L1000 570 L1000 800Z','#B7AB83')+P('M81 535 L322 535 L588 454 L913 454','none','#978D6E',12)+[81,322,588,913].map((xx,j)=>line(xx,j<2?535:454,xx,j<2?701:567,'#978D6E',9)).join('')+child(322,730,1.08,'mi','hold')+cushion(320,603,.61,'#C7AE78')+badgerGirl(700,649,1.04)+cushion(699,526,.58)+bag(819,603,.62,green),
 ()=>mistIsland()+cushion(312,704,.85,blue)+cushion(734,704,.85,'#C9B380')+child(312,752,1.02,'mi','listen',true)+badgerGirl(734,752,.98,'hold',true)+bowl(516,744,.82)+pods(504,689,.66)+E(166,739,10,7,'#A4B181')+beanJar(638,642,.62)+shellSpoon(672,624,.52,-26),
 ()=>mistIsland()+child(513,752,1.14,'mi','write')+beanJar(675,659,.98)+shellSpoon(675,606,.75,-24)+woodStool(673,698,.62)+cushion(360,752,.7,blue)+cushion(824,753,.7,'#C9B380')+pods(605,758,.62),
 ][i]();}

function foxFriend(x,y,s=1,pose='hold',sit=false){let a=P('M34 -45 Q123 -48 132 -145 Q177 -111 151 -55 Q125 -2 50 -7Z','#B1845C')+P('M132 -145 Q178 -111 166 -78 Q143 -72 118 -82 Q135 -117 132 -145Z',paper)+E(0,0,62,9,ink,'opacity=".1"')+(sit?P('M-19 -65 L-49 -34 L-54 -10 M20 -65 L48 -34 L54 -10','none','#B1845C',21):R(-29,-68,23,57,'#B1845C',7)+R(8,-68,23,57,'#B1845C',7))+E(-21,-7,26,11,'#A77E59')+E(24,-7,26,11,'#A77E59')+P('M-41 -169 L41 -169 L49 -52 Q0 -35 -49 -52Z','#AAB88F')+E(0,-216,59,52,'#B1845C')+P('M-50 -235 L-53 -294 L-11 -259 M51 -234 L53 -294 L11 -259Z','#B1845C')+P('M-40 -243 L-40 -277 L-20 -258 M40 -243 L40 -277 L20 -258Z','#D3B69B')+P('M-52 -220 Q-22 -213 0 -190 Q22 -213 52 -220 Q39 -165 0 -169 Q-39 -165 -52 -220Z',paper)+E(-22,-222,4,5,ink)+E(23,-222,4,5,ink)+E(0,-190,9,6,ink)+P('M-9 -179 Q0 -172 9 -179','none','#94785E',2)+arm(-39,-148,pose==='point'?-64:22,pose==='point'?-19:40,'#B1845C')+arm(39,-148,pose==='write'?-148:pose==='point'?63:-20,pose==='write'?45:pose==='point'?-17:40,'#B1845C')+line(-39,-168,39,-70,'#B69C67',4)+bag(42,-74,.66,'#CAB070');return G(x,y,s,a);}
function duneScene(east=false,phase=0,evening=false){const base=evening?'#C8AB81':'#D5BF87';return R(0,0,1000,800,evening?'#C4BEA2':'#D0D4B6',0)+cloud(139,158,1.03,'#E4E1C5')+P('M0 465 Q220 281 424 464 Q760 292 1000 490 L1000 800 L0 800Z','#CEBF92')+P(`M-10 660 Q166 603 308 ${phase?341:365} Q${phase?487:520} ${phase?208:246} 682 386 Q845 558 1010 634 L1010 800 L-10 800Z`,base)+P(`M${phase?466:494} ${phase?284:310} Q${phase?570:595} ${phase?284:310} 682 386 Q845 558 1010 634 L1010 800 L513 800 Q503 545 ${phase?466:494} ${phase?284:310}Z`,east?'#B2AA91':'#C6AC79')+P('M0 737 Q348 651 619 695 Q841 734 1000 702','none','#B2B29A',47)+P('M0 737 Q348 651 619 695 Q841 734 1000 702','none','#D3CFAD',35)+(!east?P('M291 449 Q322 427 355 446 M383 421 Q412 402 440 422','none','#9C916C',9)+P('M278 577 Q333 559 390 577 M302 592 Q349 577 399 594','none','#B39D70',3):'');}
function station(closed=false,evening=false){return R(0,0,1000,800,evening?'#BDB89C':'#D1C9A5',0)+R(0,642,1000,158,'#AA9F7D',0)+R(531,92,395,415,'#A18E68',7)+R(549,111,359,378,evening?'#C4B694':'#C6D2B4',4)+P('M549 397 Q643 245 746 264 Q832 285 908 405 L908 488 L549 488Z','#CEB77F')+P('M611 365 Q633 349 654 363 M675 338 Q699 326 721 341','none','#A59970',5)+R(518,88,42,438,blue,4)+R(897,88,42,438,blue,4)+P('M529 99 Q548 142 529 191 Q512 235 531 280 Q549 327 529 376','none','#A3BBBA',4)+R(520,502,417,23,'#B49E73',4)+(closed?line(729,108,729,490,'#B09B74',9)+line(549,302,906,302,'#B09B74',8):'');}
const scope=(x,y,s=1,closed=false)=>G(x,y,s,line(0,-20,-46,121,'#8A8971',7)+line(0,-20,53,121,'#8A8971',7)+line(0,-20,7,126,'#8A8971',6)+G(0,-30,1,R(-97,-18,180,37,'#879C93',8)+R(67,-25,29,50,'#728D86',5)+R(-111,-11,25,22,'#7C8B7A',3),closed?0:-18));
const contour='M-63 25 Q-32 11 -13 -16 Q8 -42 34 -10 Q48 9 64 25';
function study(x,y,s=1,mode='line',shade='#D3B56D'){return sheet(x,y,s,mode==='blank'?tx('今天看不清',0,31,13):mode==='fish'?P('M-68 15 Q-28 -49 28 -8 L58 -48 L55 -4 L75 15 L43 10 Q-12 50 -68 15Z',shade):P(contour+(mode==='line'?'':' L64 39 L-63 39Z'),mode==='line'?'none':shade,mode==='line'?'#85988B':'',3)+(mode==='line'?[-43,-14,15,43].map(xx=>line(xx,-29,xx,40,'#B6BBA1',1)).join(''):[0,1,2].map(j=>P(`M${-38+j*23} 19 q20 -11 31 8`,'none','#E0C991',2)).join('')));}
function album(x,y,s=1,mode='normal'){return G(x,y,s,P('M-214 -131 Q-109 -158 0 -111 Q112 -157 214 -131 L214 122 Q111 105 0 144 Q-109 105 -214 122Z',paper,'#879E95',7)+line(0,-111,0,141,'#B7AD88',3)+(mode==='empty'?sheet(-108,-4,1.1)+sheet(108,-4,1.1):study(-108,-4,1.1,mode==='wind'?'blank':'line')+study(108,-4,1.1,mode==='wind'?'blank':'color',mode==='shadow'?'#CDB477':'#D1B777'))+(mode==='shadow'?P('M118 -41 Q128 -18 174 23 L174 34 L118 34Z','#9A99A6'):'')+(mode==='empty'?'':tx('晨 · 东侧',-105,101,14)+tx('晨 · 东侧',105,101,14)));}
function easel(x,y,s=1,art=''){return G(x,y,s,line(-87,-130,-119,97,'#9A8D6D',12)+line(85,-130,118,97,'#9A8D6D',12)+line(0,-125,0,108,'#9A8D6D',9)+R(-150,-156,300,217,'#AB9A72',7)+art+R(-161,56,322,15,'#9C8F6B',4)+R(-117,-167,21,32,'#839B8C',4)+R(98,-167,21,32,'#839B8C',4));}
const palette=(x,y,s=1)=>G(x,y,s,R(-55,-27,110,54,'#B6A480',6)+[-31,-10,12,34].map((xx,j)=>E(xx,-4,9,10,['#C8AD64','#B5A7A2','#A0BBA9','#D4CDB3'][j])).join(''));
function ningStory(i,cover){if(cover)return duneScene(false,1,true)+child(258,757,1.1,'ning','point')+foxFriend(797,754,1.03,'point')+easel(541,668,.88,G(0,-45,.57,album(0,0,1)));
 const work=(pose='point')=>station()+table(560,651,1.17)+child(286,754,1.14,'ning',pose)+foxFriend(756,754,1.07,'write');
 return [
 ()=>station()+child(455,752,1.16,'ning','raise')+foxFriend(793,751,1.04,'point')+R(364,655,61,8,'#B6955E',2),
 ()=>work('write')+sheet(550,612,1.14,[-55,-28,0,28,55].map(xx=>line(xx,-45,xx,45,'#A9B49B',1)).join('')+[-28,0,28].map(yy=>line(-65,yy,65,yy,'#A9B49B',1)).join(''))+pencil(454,643,.6,-36)+palette(715,650,.7),
 ()=>duneScene(true)+child(304,754,1.15,'ning','write')+letter(466,648,.62)+pencil(450,623,.53,-30)+lowStone(784,728,.52)+foxFriend(783,757,.99,'hold',true)+scope(605,598,.7),
 ()=>duneScene(false)+easel(576,644,1.0,G(0,-47,1.48,study(0,0,1,'line')))+child(253,755,1.08,'ning','point')+foxFriend(849,754,.97,'hold'),
 ()=>duneScene(false)+easel(569,645,1.0,G(0,-47,1.48,study(0,0,1,'fish')))+child(254,756,1.08,'ning','point')+foxFriend(845,754,.97,'point')+palette(759,758,.64),
 ()=>work('write')+study(548,611,1.15,'color')+P('M502 610 Q538 586 589 614','none','#9EAC98',3)+R(450,637,35,14,'#B4BEA7',4)+pencil(454,643,.6,-37)+pencil(639,644,.56,40),
 ()=>station()+child(292,753,1.15,'ning','sad')+letter(292,624,.6)+foxFriend(768,753,1.08,'hold')+bag(762,624,.85,'#CAB070')+table(554,652,.78)+study(554,618,.75,'color'),
 ()=>duneScene(true,1)+child(313,754,1.17,'ning','think')+scope(601,576,.89)+study(456,651,.65,'line')+P('M111 216 Q300 157 430 196 M565 155 Q711 119 895 157','none','#E3DDC0',5),
 ()=>duneScene(true)+P('M134 242 L899 242 L850 313 L178 313Z','#A7B69C')+line(166,286,166,675,'#9A906C',9)+line(871,285,871,673,'#9A906C',9)+child(292,753,1.07,'ning','point',true)+foxFriend(801,753,1.01,'point',true)+study(444,664,.7,'color','#D5BC76')+study(562,664,.7,'color','#DFD9BB')+study(680,664,.7,'color','#C99B73')+study(559,759,.57,'line'),
 ()=>duneScene(false)+child(288,755,1.08,'ning','open',true)+foxFriend(793,756,1.01,'point',true)+study(480,667,.81,'line')+study(653,677,.81,'fish')+letter(566,758,.5),
 ()=>work()+album(552,602,.76,'empty')+palette(738,658,.57)+pencil(422,628,.55,-35),
 ()=>duneScene(true,1)+child(286,755,1.1,'ning','point')+foxFriend(822,755,1.03,'point')+scope(531,582,.8)+album(632,697,.52,'shadow')+palette(756,746,.58),
 ()=>station(true)+R(550,112,356,377,'#D9D6B8',0,'opacity=".66"')+line(729,108,729,490,'#B09B74',9)+line(549,302,906,302,'#B09B74',8)+P('M558 211 Q721 143 899 221 M556 371 Q707 311 899 372','none','#D9D6B8',16)+child(286,753,1.12,'ning','sad')+foxFriend(820,753,1.03,'write')+table(555,653,1.12)+album(552,602,.73,'wind')+scope(125,585,.44,true),
 ()=>work('write')+G(559,600,.76,album(0,0,1))+P('M443 674 Q488 697 546 668 Q603 693 641 670','none','#B29D72',4)+R(634,640,139,91,'#A9B69B',5)+study(668,659,.35,'line')+study(724,663,.35,'fish')+letter(694,703,.34),
 ()=>duneScene(false,1)+easel(553,652,.95,G(0,-45,.61,album(0,0,1)))+child(241,755,1.06,'ning','point')+foxFriend(850,755,.99,'point'),
 ()=>station(false,true)+child(301,753,1.1,'ning','point')+foxFriend(819,753,1.03,'hold')+table(562,654,1.1)+album(560,600,.71,'empty')+letter(748,682,.49)+letter(788,711,.49),
 ][i]();}

const registry={'expansion-0116':saliStory,'expansion-0117':liqingStory,'expansion-0118':nanStory,'expansion-0119':misaStory,'expansion-0120':ningStory};
export function thirdOlderLastArtwork(story,index,cover=false){
 const render=registry[story?.id];
 if(!render||story.status!=='text-ready'||story.pages?.length!==16||!Number.isInteger(index)||index<0||index>=16)throw new Error('No reviewed third older last storyboard for this input');
 return svg(render(index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);
}

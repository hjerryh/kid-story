// Original page-specific storyboards for the final five middle-age manuscripts in batch 002.
import {E,R,P,G,line,leaf,grass,flower,cloud,table,book,basket,stool,whale,cottage,paperBoat,svg} from '../render-illustrations.mjs';
import {room,outdoors,notes,drum} from './middle.mjs';
const ink='#40504B', skin='#D9B38A', cream='#E7DDC1';
const arm=(x,y,dx,dy,c,w=18)=>P(`M${x} ${y} Q${x+dx*.55} ${y+dy*.15-12} ${x+dx} ${y+dy}`,'none',c,w);
const face=(sad=false,sleep=false)=>(sleep?P('M-25 -214 Q-18 -207 -11 -214 M11 -214 Q18 -207 25 -214','none',ink,2):E(-18,-214,4,5,ink)+E(18,-214,4,5,ink))+E(0,-196,7,5,'#A68D76')+P(sad?'M-10 -181 Q0 -189 10 -181':'M-10 -186 Q0 -176 10 -186','none','#8B745F',2);
function mouse(x,y,s=1,who='li',pose='hold'){
 const gray=who==='xi'||who==='mu',fur=gray?'#B4BBB1':'#B9956E',cloth=who==='xi'?'#9DAF7E':who==='mu'?'#D4B967':'#819FAB';
 let a=E(0,0,72,10,ink,'opacity=".11"')+P('M40 -22 Q127 3 112 -49 Q107 -67 91 -60','none',fur,7)+E(-24,-7,26,13,fur)+E(25,-7,26,13,fur)+E(0,-95,53,86,fur)+P('M-42 -162 L42 -162 L48 -34 Q0 -17 -48 -34Z',cloth)+E(-43,-247,29,32,fur)+E(43,-247,29,32,fur)+E(-43,-250,15,18,'#D8C3AA')+E(43,-250,15,18,'#D8C3AA')+E(0,-212,58,50,fur)+E(0,-190,38,27,'#E6DCC2')+face(pose==='sad',pose==='sleep');
 if(who==='li')a+=R(-34,-170,12,63,cloth,4)+R(22,-170,12,63,cloth,4)+E(0,-120,8,8,'#BFA576');
 if(who==='xi')a+=P('M-27 -148 L27 -148 L39 -42 L-39 -42Z','#C7D0A5')+G(39,-269,1,R(-4,-33,8,62,'#D7B966',2)+P('M-4 29 L4 29 L0 42Z','#6F7E65'),31);
 if(who==='mu')a+=P('M-41 -159 L43 -69','none','#94A67A',5)+R(29,-91,38,47,'#8DA47A',6);
 a+=pose==='raise'?arm(-41,-148,-24,-67,fur):arm(-41,-148,3,48,fur);a+=pose==='point'?arm(41,-148,57,0,fur):pose==='think'?arm(41,-148,-22,-35,fur):arm(41,-148,12,46,fur);return G(x,y,s,a);
}
function bunny(x,y,s=1,pose='hold'){
 let a=E(0,0,76,11,ink,'opacity=".12"')+E(50,-55,24,23,'#E9DEC7')+E(-25,-9,29,14,'#EFE4CA')+E(26,-9,29,14,'#EFE4CA')+E(0,-96,54,88,'#EFE4CA')+P('M-42 -163 L42 -163 L61 -28 Q0 -13 -61 -28Z','#81ADBB')+R(-31,-174,12,65,'#81ADBB',4)+R(20,-174,12,65,'#81ADBB',4)+G(-30,-259,1,E(0,0,18,68,'#EFE4CA')+E(0,0,8,46,'#D6B4A2'),-8)+G(30,-259,1,E(0,0,18,68,'#EFE4CA')+E(0,0,8,46,'#D6B4A2'),8)+E(0,-211,60,52,'#EFE4CA')+face(pose==='sad',pose==='sleep')+G(30,-297,.7,P('M0 0 Q-30 -24 -28 -2 Q-24 18 0 0 Q27 -24 28 -2 Q24 19 0 0','#C99562'))+line(-42,-167,38,-71,'#C4B18A',5)+R(25,-93,48,51,'#D7C6A1',7)+G(49,-70,.4,P('M0 0 Q-24 -30 -35 -22 Q-24 4 0 13 Q24 3 35 -22 Q22 -28 0 0Z','#87ADB6'));
 a+=pose==='raise'?arm(-42,-149,-24,-70,'#EFE4CA'):arm(-42,-149,7,47,'#EFE4CA');a+=pose==='point'?arm(42,-149,58,-3,'#EFE4CA'):pose==='think'?arm(42,-149,-21,-36,'#EFE4CA'):arm(42,-149,12,47,'#EFE4CA');return G(x,y,s,a);
}
function badger(x,y,s=1,pose='hold'){let a=E(0,0,78,11,ink,'opacity=".11"')+E(-26,-9,28,15,'#8E8D7A')+E(27,-9,28,15,'#8E8D7A')+E(0,-96,57,89,'#8E8D7A')+P('M-46 -164 L46 -164 L50 -36 Q0 -19 -50 -36Z','#839B70')+line(0,-155,0,-34,'#728662',3)+E(6,-127,6,6,'#C6B17C')+E(6,-85,6,6,'#C6B17C')+E(-42,-249,22,25,'#8E8D7A')+E(42,-249,22,25,'#8E8D7A')+E(0,-214,62,55,'#92917E')+P('M-14 -269 L15 -269 L22 -216 L12 -177 L-12 -177 L-22 -216Z','#E3DFCA')+face(pose==='sad',pose==='sleep');a+=arm(-44,-150,6,51,'#92917E')+(pose==='point'?arm(43,-150,58,-4,'#92917E'):arm(43,-150,10,50,'#92917E'));return G(x,y,s,a);}
function child(x,y,s=1,who='tao',pose='hold',ghost=false){const mom=who==='mom',baby=who==='baby',young=who==='young',boy=who==='man';const cloth=mom?'#8FAEB9':young?'#C89078':baby?'#92AA7C':'#D6B977';let a=E(0,0,67,11,ink,'opacity=".10"')+R(-33,-64,27,54,mom?'#8FAEB9':boy?'#D6B977':'#C8B490',8)+R(8,-64,27,54,mom?'#8FAEB9':boy?'#D6B977':'#C8B490',8)+E(-22,-8,24,11,'#8C785C')+E(23,-8,24,11,'#8C785C')+P('M-43 -165 L43 -165 L53 -48 Q0 -31 -53 -48Z',baby?cloth:'#E9DFCA');
 if(!baby)a+=P(mom?'M-39 -162 L40 -162 L66 -29 Q0 -10 -66 -29Z':boy?'M-33 -143 L33 -143 L39 -43 L11 -43 L0 -76 L-11 -43 L-39 -43Z':'M-33 -145 L33 -145 L51 -43 Q0 -23 -51 -43Z',cloth)+R(-30,-172,12,63,cloth,3)+R(18,-172,12,63,cloth,3);
 a+=E(0,-218,62,62,'#50564E')+R(-58,-216,116,48,'#50564E',14)+E(0,-213,52,51,skin)+P('M-53 -224 Q-55 -276 0 -275 Q56 -276 54 -222 Q24 -227 8 -249 Q-15 -220 -53 -224Z','#50564E')+E(-19,-215,4,5,ink)+E(19,-215,4,5,ink)+P(pose==='sad'?'M-10 -187 Q0 -196 11 -187':'M-10 -192 Q0 -181 11 -192','none','#94765D',2);
 if(mom)a+=[0,1,2,3].map(j=>E(58,-209+j*25,14,18,'#50564E')).join('');if(young)a+=E(-63,-210,18,25,'#50564E')+E(63,-210,18,25,'#50564E');if(who==='tao')a+=G(39,-251,.45,P('M-22 1 Q-13 -17 4 -4 Q22 -30 27 -12 Q36 -9 33 2 L45 9 L29 14 Q16 24 3 14 L-22 13Z','#D4B466'));
 const sleeve=mom?cloth:young?cloth:baby?cloth:'#E9DFCA';a+=pose==='raise'?arm(-41,-150,-25,-71,sleeve):arm(-41,-150,-13,45,sleeve);a+=pose==='point'?arm(41,-150,58,-3,sleeve):pose==='think'?arm(41,-150,-26,-33,sleeve):arm(41,-150,15,47,sleeve);a+=E(pose==='raise'?-66:-54,pose==='raise'?-221:-105,11,12,skin)+E(pose==='point'?99:pose==='think'?15:56,pose==='point'?-153:pose==='think'?-183:-103,11,12,skin);return G(x,y,s,ghost?`<g opacity=".66">${a}</g>`:a);}
const sheet=(x,y,s=1,marks='',rot=0)=>G(x,y,s,R(-85,-57,170,114,'#EAE0C4',5)+marks,rot);
const pencil=(x,y,s=1,r=-35)=>G(x,y,s,R(-4,-47,8,87,'#BDA46F',2)+P('M-4 40 L4 40 L0 52Z','#70806D'),r);
const bowl=(x,y,s=1)=>G(x,y,s,P('M-56 -18 Q-44 28 0 30 Q44 28 56 -18Z','#B7BBA3')+E(0,-18,56,18,'#D7D7B9'));
const bean=(x,y,s=1,green=false)=>G(x,y,s,E(0,0,25,18,green?'#AEC38C':'#82ABB7')+P('M-6 -12 Q11 -4 4 13','none',green?'#C7D4A3':'#AFCFD0',3));
function nightPasture(){return R(0,0,1000,800,'#3F616B',0)+[62,193,305,441,614,783,903].map((x,j)=>E(x,64+j%3*67,2,2,'#D7DDBA')).join('')+cloud(757,152,1.2,'#657F83')+P('M0 542 Q238 383 522 498 Q805 369 1000 497 L1000 800 L0 800Z','#78977E')+[56,129,205,809,886,957].map((x,j)=>grass(x,741-j%2*35,1.3,'#A2B495')).join('');}
function dream(x,y,s=1,kind='whale',detail=false){let a=E(0,0,160,114,kind==='whale'?'#9EBFC5':'#AFBF98','opacity=".9"')+E(0,0,164,118,'none','stroke="#D3DDC0" stroke-width="3" stroke-dasharray="4 9"');if(kind==='whale')a+=cloud(-32,24,.68,'#DADCC0')+G(2,2,.42,whale(0,0,1,'swim'))+P('M-115 73 Q0 43 118 70','none','#D4B585',7);else{a+=R(-139,42,278,35,'#B0A27D',5)+[-115,-66,-18,31,80,124].map(xx=>line(xx,-20,xx,42,'#C9B88B',6)).join('')+line(-130,3,130,3,'#C9B88B',5)+P('M-10 35 Q-38 48 -7 68 Q21 58 12 37Z','#E0D1A3')+leaf(-3,37,.36,'#819F6F',-25)+leaf(7,37,.32,'#819F6F',28)+line(-92,-5,-105,62,'#8B997A',5)+P('M-117 58 L-94 60 L-107 81Z','#9BA993')+[-95,-40,20,78,130].map(xx=>line(xx,-69,xx-8,-45,'#C7D3B7',2)).join('');if(detail)a+=child(71,61,.32,'man')+E(71,-28,30,7,'#C6B27A');}return G(x,y,s,a);}
function dreamStory(i,cover){const b=nightPasture();if(cover)return b+bunny(318,751,1.26,'point')+badger(759,750,1.26,'point')+dream(291,218,.89)+dream(712,218,.89,'garden',true)+bean(423,586,.68)+bean(824,589,.68,true);
 return [
 ()=>b+cottage(793,521,.6)+bunny(330,751,1.27)+badger(693,750,1.27)+[[176,684],[515,719],[835,736],[746,596]].map(([x,y],j)=>bean(x,y,.42,j%2)).join(''),
 ()=>b+cottage(807,502,.55)+bunny(363,751,1.4,'raise')+R(489,635,72,74,'#D3C49F',8)+dream(680,300,1.15)+bean(687,705,.44),
 ()=>b+bunny(299,751,1.31,'point')+badger(773,751,1.31,'point')+bean(427,550,.75)+dream(529,215,1.2)+bean(700,718,.7,true),
 ()=>b+bunny(310,750,1.28,'think')+badger(769,750,1.31)+bean(777,602,.75,true)+dream(547,215,1.45,'garden')+E(550,385,4,6,'#C8D6C2'),
 ()=>b+bunny(303,751,1.3,'think')+badger(770,751,1.3)+bean(783,604,.7)+dream(540,215,1.33)+P('M409 235 Q545 129 669 243','none','#CBD8C1',4),
 ()=>b+bunny(339,732,1.18)+badger(777,750,1.26)+bean(389,614,.71,true)+dream(532,215,1.37,'garden',true),
 ()=>b+cottage(826,475,.59)+bunny(339,750,1.33,'sad')+R(450,659,68,74,'#D3C49F',7)+bean(584,698,.62,true)+bean(692,649,.6)+sheet(626,400,.5,R(-37,-7,74,40,'#D2BE89',2)+R(-27,-28,15,25,'#D2BE89',2)+R(16,-28,15,25,'#D2BE89',2))+E(813,335,52,36,'#C6D5CB'),
 ()=>b+bunny(298,750,1.3,'think')+badger(765,750,1.3)+bean(772,605,.74,true)+dream(541,215,1.35,'garden',true)+G(548,288,1,R(-55,-13,110,14,'#A78F67',4)+R(-43,0,8,34,'#A78F67',3)+R(34,0,8,34,'#A78F67',3)),
 ()=>b+bunny(317,749,1.32,'point')+badger(749,748,1.3,'point')+bean(651,728,.74,true)+bean(443,550,.71)+dream(465,225,.99),
 ()=>b+cottage(828,493,.66)+bunny(326,750,1.28,'point')+badger(736,751,1.28)+bean(504,556,.78,true)+P('M451 554 Q481 541 504 556','none','#E9DFC6',12)+R(319,636,71,73,'#D3C49F',8),
 ()=>room(true)+R(142,584,332,157,'#AB9874',11)+R(523,584,332,157,'#AB9874',11)+R(155,569,305,80,'#D9DBC1',20)+R(537,569,305,80,'#D9DBC1',20)+badger(303,705,.53,'sleep')+bunny(688,707,.53,'sleep')+R(151,640,315,81,'#A5B9A2',15)+R(533,640,315,81,'#9CB6B6',15)+bean(415,597,.4,true)+bean(804,598,.4)+dream(301,336,.85,'garden')+dream(689,333,.85),
 ()=>room()+bunny(305,751,1.28,'raise')+badger(809,751,1.28,'point')+table(557,650,1.25)+E(487,612,48,16,'#D6CBA8')+R(459,576,58,38,'#C9AE7A',11)+E(644,613,47,16,'#D6CBA8')+R(617,578,58,36,'#C9AE7A',10)+bowl(776,403,.7)+bean(761,384,.38,true)+bean(788,384,.38),
 ][i]();}
function paperGoose(x,y,s=1,type='good',bow=false){const good=type==='good';return G(x,y,s,P(good?'M-62 5 L-39 -58 L22 -45 L43 -91 L66 -83 L43 -34 L64 10 L14 30Z':'M-63 9 L-38 -54 L13 -40 L27 -91 L46 -76 L30 -18 L65 20 L-7 38Z','#E8E4CE','#B9C2AA',2)+P('M-39 -58 L4 9 L22 -45 M4 9 L14 30 L-62 5','none','#B9C2AA',2)+P(good?'M47 -85 L74 -85 L96 -70 L61 -70Z':'M29 -82 L57 -81 L78 -66 L44 -66Z','#D1B47A')+E(good?62:45,-82,3,3,ink)+(type==='feet'?R(-48,34,53,10,'#C7BA95',3)+R(11,34,53,10,'#C7BA95',3):line(-23,24,-25,43,'#C5A576',5)+line(19,27,22,44,'#C5A576',5)),bow?25:0);}
const bell=(x,y,s=1)=>G(x,y,s,P('M-13 -38 Q-17 -15 -27 -7 L27 -7 Q17 -15 13 -38Z','#C9B271')+E(0,-7,27,9,'#DAC591')+E(0,1,5,7,'#A28F60')+P('M-7 -38 Q-7 -62 7 -62 L7 -38','none','#AA976B',6));
function owl(x,y,s=1){return G(x,y,s,E(0,-93,73,93,'#929888')+P('M-54 -162 L54 -162 L58 -41 Q0 -17 -58 -41Z','#A69BB3')+E(-28,-8,26,11,'#B7A57C')+E(29,-8,26,11,'#B7A57C')+E(0,-216,80,65,'#9FA592')+E(-33,-218,33,35,'#DBDBC1')+E(33,-218,33,35,'#DBDBC1')+E(-32,-218,7,9,ink)+E(32,-218,7,9,ink)+E(-32,-218,38,39,'none','stroke="#B69A63" stroke-width="5"')+E(32,-218,38,39,'none','stroke="#B69A63" stroke-width="5"')+P('M-10 -189 L10 -189 L0 -171Z','#C8AC76')+arm(59,-137,36,21,'#929888'));}
const stage=(dark=false)=>R(0,0,1000,800,dark?'#5A6C6B':'#C0C9B4',0)+R(0,612,1000,188,'#AA997A',0)+P('M0 0 L224 0 Q186 287 225 578 Q139 644 0 616Z','#9BAA9B')+P('M1000 0 L788 0 Q818 289 777 580 Q862 641 1000 616Z','#9BAA9B')+P('M29 0 Q45 361 37 613 M89 0 Q116 320 93 616 M951 0 Q919 336 954 612 M887 0 Q856 303 888 621','none','#BBC5AC',5)+R(185,638,631,41,'#BDA981',6);
const programme=(x,y,s=1,owner='')=>G(x,y,s,R(-101,-68,202,136,'#DCCDA7',6)+line(-76,-43,76,-43,'#BBA77E',3)+(owner?`<text x="0" y="-9" text-anchor="middle" font-size="24" fill="#596956" font-family="PingFang SC, sans-serif">${owner}</text>`:'')+(owner==='细禾 · 纸鹅'?`<text x="0" y="29" text-anchor="middle" font-size="19" fill="#72816A" font-family="PingFang SC, sans-serif">水波 · 栗扣</text>`:''));
const blueLake=(x,y,s=1,strong=false)=>G(x,y,s,P(strong?'M-233 13 Q-173 -148 -95 -44 Q-12 -155 72 -57 Q170 -137 234 11 L248 79 L-248 79Z':'M-242 13 Q-184 -19 -127 5 Q-61 -21 5 3 Q76 -22 139 4 Q195 -14 241 13 L251 76 L-251 76Z','#89B2B7')+P('M-204 35 Q-120 8 -39 34 Q38 10 129 36 Q170 24 205 33','none','#B1CECA',5)+P('M-169 56 Q-102 34 -21 53 Q83 34 170 58','none','#AAC8C2',4));
function gooseStory(i,cover){const b=stage(i>9);if(cover)return b+blueLake(559,651,1.0)+paperGoose(600,579,1.52,'good',true)+mouse(294,751,1.24)+mouse(834,748,1.2,'xi','point')+bell(793,552,.7);
 return [
 ()=>room()+table(615,652,1.4)+mouse(316,751,1.36,'li','sad')+paperGoose(584,591,1.04,'bad')+bell(792,600,.67)+programme(263,233,.65),
 ()=>b+table(566,652,1.43)+mouse(287,752,1.28,'li','raise')+owl(845,749,1.24)+paperGoose(636,590,1.01,'good',true)+paperGoose(440,611,.65,'bad')+bell(366,553,.62),
 ()=>b+mouse(321,751,1.37,'li','think')+owl(813,751,1.3)+basket(564,680,1.05,false)+paperGoose(567,602,.85)+programme(523,265,1,'栗扣的纸鹅队'),
 ()=>b+table(625,652,1.43)+mouse(301,751,1.32,'li','sad')+G(529,604,1,paperGoose(0,0,.86,'bad'),-83)+G(680,609,1,paperGoose(0,0,.9,'bad'),-79)+basket(816,625,.62,false)+paperGoose(810,582,.48)+bell(391,615,.58),
 ()=>b+table(635,652,1.45)+mouse(301,750,1.34,'li','think')+paperGoose(543,592,.85,'feet')+paperGoose(689,592,.87,'feet')+paperGoose(822,575,.62)+sheet(801,630,.4,`<text x="0" y="7" text-anchor="middle" font-size="28" fill="#7F8E77" font-family="PingFang SC, sans-serif">细禾</text>`),
 ()=>b+mouse(336,751,1.36,'li','sad')+basket(244,675,.81,false)+paperGoose(245,614,.57)+mouse(787,751,1.3,'xi','think')+sheet(795,622,.69,line(-47,-17,49,-17,'#A9B394',3)+line(-45,3,39,3,'#A9B394',3))+programme(575,275,.71,'栗扣的纸鹅队'),
 ()=>b+mouse(303,750,1.32,'li','sad')+mouse(806,750,1.32,'xi','think')+basket(548,700,1.22,false)+paperGoose(553,612,1.06,'good',true),
 ()=>room()+mouse(265,751,1.18,'li','point')+mouse(539,748,1.13,'xi')+owl(823,751,1.27)+paperGoose(606,642,.62)+bell(621,572,.57)+programme(349,668,.64),
 ()=>b+mouse(310,751,1.3,'li','point')+programme(624,422,1.33,'制作者 · 细禾')+pencil(455,549,.72,-23)+R(540,650,219,87,'#B9AF8A',9)+paperGoose(581,679,.6,'bad')+paperGoose(689,678,.6,'bad')+bell(451,717,.57),
 ()=>b+mouse(305,751,1.27,'li','point')+mouse(830,750,1.24,'xi','point')+blueLake(591,661,1.0)+paperGoose(589,597,1.05)+P('M389 574 Q440 597 449 664','none','#B9956E',15),
 ()=>b+blueLake(533,617,1.15)+paperGoose(550,540,1.3,'good',true)+mouse(285,655,.9,'li')+mouse(815,647,.96,'xi','point')+bell(880,502,.55)+programme(816,243,.69,'细禾 · 纸鹅')+[[201,767],[373,782],[556,779],[743,774]].map(([x,y],j)=>E(x,y,52,43,['#BCB29B','#CBBBA1','#B4C4B3','#D1C9B1'][j])+E(x-25,y-28,17,18,'#D4C5A3')).join(''),
 ()=>room(true)+table(594,653,1.4)+mouse(307,751,1.3)+mouse(845,749,1.26,'xi','point')+sheet(576,611,1,P('M-46 24 L0 -30 L51 25 L-46 24 M0 -30 L0 24','none','#AAA88C',3))+R(696,591,124,65,'#BBAF89',6)+paperGoose(752,592,.54)+bell(443,618,.59),
 ][i]();}
const feltBall=(x,y,s=1,blue=false)=>G(x,y,s,E(0,0,22,22,blue?'#8FADAE':'#D5B979')+P('M-14 -8 Q4 -20 14 -4 M-14 6 Q2 18 16 4','none',blue?'#B7CCBF':'#E6D2A0',2));
function elephant(x,y,s=1,endX=650,endY=590,sad=false){let a=E(0,0,119,15,ink,'opacity=".12"')+E(-49,-28,37,31,'#93ADB4')+E(47,-28,37,31,'#93ADB4')+E(0,-122,89,122,'#93ADB4')+E(-75,-227,53,75,'#8CA7AF')+E(71,-229,56,75,'#8CA7AF')+E(-77,-224,35,54,'#B1C1BE')+E(0,-235,79,72,'#9DB5BB')+E(-26,-240,5,7,ink)+E(28,-240,5,7,ink)+P(sad?'M-12 -209 Q0 -220 12 -209':'M-13 -216 Q0 -204 13 -216','none','#6F9197',3)+P('M-67 -171 Q0 -143 67 -171 L66 -148 Q0 -119 -67 -148Z','#BB8D78')+R(43,-144,26,80,'#BB8D78',6);let world=G(x,y,s,a);return world+P(`M${x+50*s} ${y-221*s} Q${x+146*s} ${y-174*s} ${endX-24} ${endY-39} Q${endX-6} ${endY-21} ${endX} ${endY}`,'none','#9DB5BB',35*s)+E(endX,endY,18*s,12*s,'#87A3AA');}
const ballBasket=(x,y,s=1,blue=false,n=5)=>G(x,y,s,basket(0,0,1,false)+[[-32,-64],[0,-70],[31,-63],[-17,-43],[18,-42]].slice(0,n).map(([xx,yy])=>feltBall(xx,yy,.62,blue)).join(''));
const goalGate=(x=855,y=692,s=1)=>G(x,y,s,R(-51,-145,16,161,'#9E9572',5)+R(35,-145,16,161,'#9E9572',5)+R(-59,-158,118,21,'#B4A17B',5)+line(0,-144,0,-79,'#A49470',5)+bell(0,-45,.85));
function track(night=false,flag=true){return outdoors(night)+P('M280 516 L916 516 L972 751 L209 751Z','#BFAA7E')+[553,599,646,694,735].map(yy=>line(263-(yy-553)*.2,yy,922+(yy-553)*.15,yy,'#D2BD91',4)).join('')+line(351,523,315,747,'#BA806E',8)+goalGate()+(flag?P('M921 347 L921 514','none','#A79770',6)+P('M923 351 L982 372 L923 401Z','#BD8573'):'');}
function ballStory(i,cover){const b=track();if(cover)return outdoors()+G(40,40,.92,b)+elephant(220,639,.88,660,590)+mouse(280,750,1.04,'mu','point')+feltBall(333,671,.88)+feltBall(684,592,.88,true);
 return [
 ()=>b+elephant(227,681,1.03,499,608)+mouse(658,751,1.22,'mu','point')+P('M766 416 Q812 375 862 378','none','#C5D1AD',3),
 ()=>b+elephant(195,635,.98,653,593)+mouse(235,751,1.08,'mu','point')+ballBasket(423,753,.74)+ballBasket(548,493,.74,true),
 ()=>b+elephant(182,635,.98,717,589)+mouse(238,751,1.07,'mu','point')+feltBall(750,596,.86,true)+feltBall(783,716,.86)+feltBall(875,608,.75,true)+P('M392 698 Q525 679 664 696','none','#C7C7A5',3,'stroke-dasharray="6 10"'),
 ()=>b+elephant(178,635,.97,654,588)+mouse(237,750,1.08,'mu','think')+feltBall(289,640,.78)+ballBasket(451,753,.74,false,2)+ballBasket(548,493,.74,true,2),
 ()=>b+elephant(177,635,.96,695,592)+mouse(235,750,1.07,'mu','sad')+[[624,709],[744,739],[813,700]].map(([x,y])=>feltBall(x,y,.85)).join('')+feltBall(859,604,.8,true)+ballBasket(439,751,.71,false,0),
 ()=>b+elephant(177,635,.96,697,591,true)+mouse(699,752,.99,'mu','think')+feltBall(796,669,.79)+leaf(578,705,.39,'#CEBD78',53)+leaf(610,735,.4,'#CEBD78',-25),
 ()=>outdoors()+P('M155 571 L891 571 L931 738 L115 738Z','#BFAA7E')+[601,643,689,725].map(y=>line(150,y,911,y,'#D6BE91',4)).join('')+line(317,576,295,736,'#BA806E',8)+leaf(328,672,.69,'#CABA78',48)+leaf(712,654,.69,'#CABA78',52)+mouse(206,750,1.11,'mu','point')+feltBall(783,664,.86,true)+P('M369 660 L661 650','none','#A99F76',3,'stroke-dasharray="5 9"'),
 ()=>b+elephant(149,634,.88,326,590)+mouse(200,750,1.06,'mu','point')+feltBall(328,617,.8,true)+ballBasket(444,752,.75)+ballBasket(535,491,.75,true),
 ()=>b+elephant(147,633,.87,324,590)+mouse(200,750,1.05,'mu','point')+feltBall(776,710,.81)+feltBall(814,704,.81,true)+feltBall(871,631,.79)+ballBasket(442,751,.7,false,3)+ballBasket(540,490,.7,true,4),
 ()=>b+elephant(145,634,.86,328,590)+mouse(200,750,1.05,'mu','point')+feltBall(458,678,.86)+feltBall(790,721,.8,true)+ballBasket(438,751,.7,false,0)+ballBasket(540,488,.7,true,0)+P('M506 680 Q616 661 730 673','none','#D0C8A2',3,'stroke-dasharray="4 9"'),
 ()=>track(false,false)+elephant(179,652,.94,333,705)+mouse(591,750,1.13,'mu','raise')+P('M642 463 L642 685','none','#A48E64',7)+P('M644 467 L728 496 L644 527Z','#BC8674')+[[819,661,false],[861,656,false],[900,670,false],[842,697,true],[884,706,true]].map(([x,y,c])=>feltBall(x,y,.7,c)).join(''),
 ()=>outdoors(true)+P('M0 754 Q348 628 1000 738 L1000 800 L0 800Z','#BBB595')+elephant(293,711,.87,497,672)+mouse(688,750,1.1,'mu','raise')+P('M734 466 L734 678','none','#B8AA7B',6)+P('M736 470 L820 498 L736 531Z','#BE8C77')+[[102,412],[903,386]].map(([x,y])=>line(x,y-140,x,y-50,'#8F9877',5)+E(x,y,31,48,'#C6B77D')+P(`M${x-19} ${y-22} L${x+18} ${y+23} M${x+19} ${y-22} L${x-18} ${y+23}`,'none','#9EA272',3)).join('')+[157,573,842,929].map(x=>leaf(x,770,.5,'#C4B384',55)).join(''),
 ][i]();}
function parachute(x,y,s=1,rot=0){return G(x,y,s,line(0,-99,0,-200,'#C2C8B6',3)+[-96,-72,-48,-24,0,24,48,72,96].map(xx=>line(0,-200,xx,-257+Math.abs(xx)*.37,'#E8E9D6',2)+G(xx,-257+Math.abs(xx)*.37,1,P('M-17 3 Q-7 -7 0 0 Q9 -8 17 3','none','#E8E9D6',3))).join(''),rot);}
function seed(x,y,s=1,hat=true,pose='hold',rot=0){return G(x,y,s,(hat?parachute(0,0):'')+P('M0 -93 Q-30 -74 -20 -37 L0 -14 L18 -38 Q29 -75 0 -93Z','#A18B66')+E(-8,-70,3,4,ink)+E(8,-70,3,4,ink)+P('M-7 -57 Q0 -49 7 -57','none','#695D46',2)+line(-9,-28,-17,-4,'#9B855F',5)+line(9,-28,18,-4,'#9B855F',5)+E(-18,-4,13,7,'#82976C')+E(20,-4,13,7,'#82976C')+arm(-15,-57,-16,pose==='reach'?-48:27,'#9B855F',6)+arm(16,-57,16,pose==='reach'?-48:27,'#9B855F',6),rot);}
function bluePot(x,y,s=1,sprout=0){let a=P('M-151 -165 L-114 -3 Q0 35 114 -3 L151 -165Z','#7EA5B5')+E(0,-165,151,34,'#A1C1C3')+E(0,-166,133,25,'#8A8A6B')+[-88,-44,17,61,102].map((xx,j)=>E(xx,-165+j%2*10,12,6,'#A39A76')).join('')+P('M-116 -119 Q-103 -94 -99 -74 M117 -116 L108 -80','none','#A6C3C2',5);if(sprout){a+=line(0,-174,0,sprout===2?-376:-236,'#7D9A64',8)+leaf(-3,-204,sprout===2?.77:.42,'#8EA96F',-59)+leaf(3,-204,sprout===2?.77:.42,'#9EB67D',59);if(sprout===2)a+=leaf(-2,-254,.67,'#88A367',-58)+leaf(4,-263,.66,'#9EB67D',53)+G(0,-372,1,[0,30,60,90,120,150].map(r=>G(0,0,1,E(0,0,13,42,'#D7BE6D'),r)).join('')+E(0,0,19,19,'#C3A65B'));}return G(x,y,s,a);}
const roof=(rain=false)=>R(0,0,1000,800,rain?'#ADBFC0':'#D1DAC2',0)+cloud(763,135,1.35,rain?'#8EAAAC':'#E6E2C7')+R(0,489,1000,311,'#BCB79B',0)+R(0,428,1000,31,'#A5B09A',4)+[41,155,267,834,947].map(x=>R(x,307,17,187,'#9BAA96',5)).join('')+line(0,312,1000,312,'#9BAA96',15)+[584,668,752].map(y=>line(0,y,1000,y,'#D0C7A7',3)).join('')+[130,310,490,670,850].map(x=>line(x,491,x,800,'#D0C7A7',3)).join('')+leaf(912,733,1.6,'#8DA67A',-24)+leaf(60,723,1.4,'#94AD7E',27);
const dish=(x,y,s=1)=>G(x,y,s,E(0,0,142,33,'#BFAE88')+E(0,-10,138,29,'#D0C09B')+E(0,-12,116,20,'#BBAD8A'));
const stone=(x,y,s=1)=>G(x,y,s,P('M-27 0 L-31 -21 L-12 -38 L15 -32 L30 -8 L22 5Z','#B2AE93'));
function seedStory(i,cover){const b=roof(i>5&&i<10);if(cover)return roof()+bluePot(649,724,1.22,2)+child(316,750,1.27,'man','point')+parachute(795,368,.64,18);
 return [
 ()=>b+bluePot(733,717,.88)+child(748,545,.61,'man')+seed(342,487,1.18,true,'reach',14)+P('M130 358 Q197 345 235 377','none','#D9E0C5',5),
 ()=>b+bluePot(664,731,1.19)+child(329,750,1.35,'man','point')+seed(619,372,.66,true,'hold',11)+R(865,625,12,77,'#9C9371',3)+P('M852 697 L890 697 L873 735Z','#9AA88E'),
 ()=>b+bluePot(663,733,1.24)+dish(343,734,.86)+seed(344,694,1.12,true,'reach',-19)+P('M408 433 Q468 419 495 454','none','#D9E0C5',5),
 ()=>b+dish(440,719,1.38)+bluePot(848,726,.78)+seed(393,693,1.32,true)+stone(440,671,.57),
 ()=>b+bluePot(770,731,1.1)+seed(381,723,1.37,true,'reach',-18)+P('M208 415 Q277 406 313 443','none','#D9E0C5',5)+stone(178,735,.46),
 ()=>b+bluePot(690,733,1.45)+seed(421,730,1.2,true,'hold')+leaf(338,749,.6,'#BBAF80',66)+P('M289 276 Q219 304 235 350','none','#CCD5C0',4),
 ()=>b+bluePot(684,734,1.38)+seed(414,733,1.16)+parachute(790,461,.55,28)+seed(764,510,.36,false,'hold',23)+P('M804 292 Q850 283 886 308','none','#CED8C4',4),
 ()=>b+bluePot(693,737,1.47)+seed(483,649,1.05,true,'reach',10)+stone(537,635,.28)+stone(536,583,.23)+P('M123 183 Q175 129 224 179','none','#9CB0AD',7),
 ()=>b+bluePot(652,740,1.53)+seed(462,509,1.0,true,'reach',42)+P('M413 366 Q445 393 479 383','none','#D9E0C9',3),
 ()=>roof(true)+bluePot(531,747,1.62)+seed(543,488,.86,false,'hold',-27)+parachute(847,372,.7,22)+E(606,486,8,5,'#657C70')+P('M610 337 Q592 367 610 376 Q629 367 610 337Z','#B8D0C7'),
 ()=>roof()+child(316,752,1.32,'man','point')+bluePot(685,738,1.37,1)+E(807,516,4,7,'#C5D7C9'),
 ()=>roof()+stool(320,702,.83)+child(320,734,1.0,'man')+R(368,596,36,28,'#C5A776',9)+bluePot(692,737,1.31,2)+G(760,256,1,E(-8,-10,12,19,'#D4DDD0')+E(10,-10,12,19,'#D4DDD0')+E(0,2,16,12,'#CEB977')+line(-4,-7,-4,12,'#869A7B',4)+E(12,-1,4,4,ink)),
 ][i]();}
function loom(){return G(183,514,1,R(-74,-196,15,242,'#AA9471',5)+R(62,-196,15,242,'#AA9471',5)+R(-83,-177,169,18,'#C2AE80',5)+R(-82,17,165,18,'#C2AE80',5)+[-44,-25,-6,13,32,51].map(x=>line(x,-160,x,17,'#D2C6A0',3)).join('')+R(-52,-77,112,91,'#A9B8A2',2)+[-61,-38,-15,8].map(y=>line(-49,y,57,y,'#D0D5BA',6)).join(''));}
const spool=(x,y,s=1)=>G(x,y,s,R(-15,-34,30,50,'#A1B5A7',4)+R(-21,-41,42,11,'#C1AD81',3)+R(-21,13,42,11,'#C1AD81',3)+[-21,-9,3].map(yy=>line(-13,yy,13,yy,'#D0DCC2',3)).join(''));
const memoryRoom=(night=false)=>room(night)+loom()+spool(82,249,.8)+spool(173,249,.8)+spool(273,249,.8);
const rug=()=>E(405,687,242,75,'#C0B08B')+E(405,682,218,58,'#D2C29B')+[252,337,425,513,589].map(x=>flower(x,698,.48,'#C1A985')).join('');
const button=(x,y,s=1,show=true)=>G(x,y,s,E(0,0,34,34,'#ADC9C3','fill-opacity=".65" stroke="#D3DFCA" stroke-width="3"')+(show?E(-11,3,6,8,'#B9957B')+P('M-17 17 L-15 9 L-7 9 L-5 17Z','#BB8A77')+E(10,-12,7,9,'#B9957B')+P('M1 17 L4 -4 L16 -4 L21 17Z','#9CB9BE'):'')+[-7,7].map(xx=>E(xx,-2,3,3,'#E2E7CF')).join('')+P('M-22 -8 Q-17 -25 -4 -26','none','#ECF0D8',3));
const box=(x,y,s=1,open=true)=>G(x,y,s,(open?R(-59,-87,118,48,'#B8A078',7)+R(-48,-78,96,31,'#D0BA91',4):'')+R(-62,-36,124,72,'#B29A72',7)+R(-53,-28,106,55,'#D2C2A0',4)+E(0,6,4,4,'#D5BF8B'));
const chair=(x,y,s=1)=>G(x,y,s,R(-46,-105,13,179,'#9D8B68',5)+R(34,-105,13,179,'#9D8B68',5)+R(-48,-107,98,29,'#B5A179',5)+R(-57,-12,114,23,'#C6B28A',5));
const redDrum=(x,y,s=1)=>G(x,y,s,R(-45,-64,90,64,'#BE8A76',9)+E(0,-64,45,16,'#E0C89E')+[-29,-10,10,29].map(xx=>line(xx,-49,-xx,-2,'#DDC296',3)).join(''));
const drumChild=(x=357,y=710,s=.7)=>child(x,y,s,'young','point')+redDrum(x+47*s,y-74*s,.74*s)+G(x+51*s,y-121*s,1,line(-13,0,19,-33,'#AA8C61',5)+E(20,-34,7,7,'#C2A67B'));
const songPaper=(x,y,s=1,full=false)=>sheet(x,y,s,`<text x="-68" y="-27" font-size="17" fill="#74826B" font-family="PingFang SC, sans-serif">小船摇呀摇</text>`+(full?[-3,20,41].map(yy=>line(-68,yy,63,yy,'#9AA38A',3)).join(''):''));
function oldAfternoon(){return memoryRoom()+rug()+chair(793,645,1.06)+child(793,717,1.11,'mom')+drumChild()+notes(796,362,.8,'#C9B16F')+R(866,548,26,39,'#A7B9A2',6);}
function memoryStory(i,cover){if(cover)return memoryRoom()+child(333,751,1.35,'tao','point')+button(480,513,1.7)+E(707,336,176,147,'#D6D8B8','opacity=".75"')+G(478,204,.31,oldAfternoon())+notes(720,203,.7);
 return [
 ()=>memoryRoom()+table(625,650,1.35)+child(329,751,1.33)+box(664,594,.85)+button(482,575,.85)+sheet(822,619,.47)+flower(703,386,.5,'#DCC98C'),
 ()=>memoryRoom()+child(425,751,1.44,'tao','think')+button(436,414,.43)+table(751,651,.97)+box(749,612,.8)+P('M500 364 Q593 308 652 375','none','#D3DCC1',5),
 ()=>oldAfternoon()+child(571,751,1.19,'tao','sad',true)+notes(428,481,1.18,'#C69D77')+P('M378 603 Q428 571 459 601','none','#BEA382',4),
 ()=>oldAfternoon()+child(554,751,1.17,'tao','point',true)+P('M502 572 Q462 588 410 650','none','#D6C5A7',14,'opacity=".5"')+notes(421,477,1.12,'#C69D77'),
 ()=>memoryRoom()+table(621,651,1.37)+child(324,751,1.31,'tao','think')+songPaper(621,601,1.14)+button(818,597,.61)+pencil(444,594,.65,-44)+E(773,307,51,51,'#D6DBBC','opacity=".7"')+notes(773,324,.55),
 ()=>oldAfternoon()+child(234,751,1.18,'tao','sad',true)+R(51,438,266,281,'#A49B7B',8)+R(71,462,225,237,'#B9AD89',6)+notes(453,489,.98,'#C7AA7D'),
 ()=>oldAfternoon()+child(547,750,1.16,'tao','think',true)+P('M586 462 Q634 413 701 423','none','#B7C9AC',3,'stroke-dasharray="6 10"'),
 ()=>oldAfternoon()+stool(621,681,.66)+child(622,725,.92,'tao','hold',true)+notes(736,397,1.08,'#CFBB7E')+E(693,241,112,89,'#D7DCC0','opacity=".7"')+G(693,270,.32,paperBoat(0,0,1)),
 ()=>memoryRoom()+table(620,651,1.36)+child(325,751,1.33,'tao')+songPaper(617,599,1.18,true)+button(805,602,.62)+pencil(440,587,.7,-33)+P('M641 188 L834 188 L894 432 L701 432Z','#E9D6AA','',0,'opacity=".23"'),
 ()=>oldAfternoon()+stool(621,682,.66)+child(622,725,.92,'tao','raise',true)+notes(440,486,1.03,'#C49F7B')+notes(732,381,.83,'#D6C082'),
 ()=>room()+table(561,652,1.16)+child(323,751,1.18,'tao','point')+child(658,754,.84,'baby','point')+child(841,750,1.34,'mom','think')+R(519,568,82,55,'#DCC79F',8)+E(560,568,42,12,'#E6D5B3')+E(560,556,10,9,'#B88D7C')+notes(398,397,.92)+E(436,612,32,12,'#CEBF9C'),
 ()=>memoryRoom(true)+table(588,651,1.26)+child(313,751,1.29,'tao')+box(589,597,1.03)+button(590,579,.58)+child(845,752,.76,'baby')+G(852,656,.65,E(0,0,31,36,'#B5BCA8')+E(0,-42,29,27,'#B5BCA8')+P('M-23 -53 L-25 -81 L-6 -63 M10 -64 L28 -81 L26 -52Z','#B5BCA8')+E(-9,-43,3,4,ink)+E(10,-43,3,4,ink)),
 ][i]();}
const registry={
 'expansion-0066':dreamStory,'expansion-0067':seedStory,'expansion-0068':gooseStory,
 'expansion-0069':ballStory,'expansion-0070':memoryStory,
};
export function secondMiddleLastArtwork(story,pageIndex,isCover=false){
 const render=registry[story.id];if(!render||story.pages?.length!==12)throw Error(`Missing second-middle-last storyboard ${story.id}`);
 if(!Number.isInteger(pageIndex)||pageIndex<0||pageIndex>=12)throw Error(`Invalid page ${pageIndex} for ${story.id}`);
 return svg(render(pageIndex,isCover),`${story.title} · ${isCover?'原创封面':story.pages[pageIndex].scene.action}`,isCover);
}

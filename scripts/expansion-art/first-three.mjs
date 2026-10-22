// Original scene-by-scene artwork for the three editorially reviewed manuscripts.
// Coordinates use a 1000 × 800 canvas. Character designs and props stay consistent.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,table,book,rock,svg} from '../render-illustrations.mjs';

const ink='#35484C', cream='#F4E7C7';
const hand=(x,y,dx,dy,c)=>P(`M${x} ${y} Q${x+dx*.4} ${y+dy*.2-15} ${x+dx} ${y+dy}`,'none',c,25);
function otter(x,y,s=1,pose='stand',flip=false){
 const art=E(0,0,103,15,'#456B58','opacity=".14"')+P('M48 -65 Q156 -10 157 28 Q92 27 38 -5','#956B4D')+
 E(0,-113,67,104,'#9E7353')+E(-37,-12,37,20,'#9E7353')+E(36,-12,37,20,'#9E7353')+
 P('M-57 -181 L-18 -194 L0 -166 L20 -194 L59 -179 L56 -73 Q0 -56 -57 -73Z','#E6CA78')+
 E(-52,-261,22,23,'#986A4E')+E(51,-261,22,23,'#986A4E')+E(0,-222,76,62,'#A77C57')+
 E(0,-202,52,32,'#E8D6B7')+E(-26,-228,5,7,ink)+E(27,-228,5,7,ink)+E(0,-210,12,8,'#665443')+
 P('M0 -202 Q-1 -189 -12 -191 M0 -202 Q5 -189 15 -192','none','#765E4A',2)+
 [-1,1].map(k=>line(k*40,-203,k*67,-209,'#786049',2)+line(k*42,-196,k*69,-194,'#786049',2)).join('')+
 (pose==='reach'?hand(46,-157,75,30,'#A77C57')+hand(-44,-157,55,55,'#A77C57'):pose==='think'?hand(-48,-157,50,-30,'#A77C57')+hand(44,-157,5,60,'#A77C57'):hand(-45,-157,-7,63,'#A77C57')+hand(45,-157,7,63,'#A77C57'));
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${art}</g>`);
}
function sleepingOtter(x,y,s=1){return G(x,y,s,`${E(0,-10,141,62,'#9D7453')}${P('M96 -22 Q184 67 103 75 Q49 79 54 29','none','#916B4D',31)}${R(-40,-63,99,93,'#E6CA78',28)}${E(-93,-45,66,57,'#A77C57')}${E(-143,-83,20,20,'#916B4D')}${E(-80,-97,20,20,'#916B4D')}${E(-116,-24,42,27,'#E8D6B7')}${E(-139,-32,10,7,'#665443')}${P('M-129 -59 Q-119 -49 -108 -58 M-90 -58 Q-80 -47 -70 -57','none',ink,3)}${E(-27,31,29,16,'#A77C57')}`);}
function duck(x,y,s=1,pose='stand',flip=false){return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${E(0,0,83,11,'#456B58','opacity=".15"')}${E(-25,-8,29,11,'#D99952')}${E(31,-8,29,11,'#D99952')}${E(0,-83,65,78,'#EBD386')}${P('M-42 -110 Q-74 -70 -23 -50 Q17 -56 -3 -89Z','#D9BC70')}${E(10,-167,55,54,'#F1DA8D')}${P('M42 -166 Q102 -169 99 -150 Q81 -137 43 -142Z','#D89C51')}${E(29,-178,5,7,ink)}${R(-40,-219,104,16,'#7AABB8',8)}${R(-20,-252,61,36,'#88BAC7',12)}${pose==='reach'?hand(-33,-111,65,-9,'#EBD386'):''}</g>`);}
function mat(x,y,s=1,rot=0){return G(x,y,s,P('M-133 18 Q-141 -71 -12 -87 Q122 -69 137 14 Q35 75 -133 18Z','#83A687','#6D8E70',4)+P('M-113 17 L109 13 M-5 14 L-34 -58 M16 14 L60 -43','none','#B9C99C',3)+[-45,0,45].map(xx=>E(xx,37,7,7,'#E7C66D')).join(''),rot);}
function willow(){return P('M66 800 Q143 512 123 175 L168 161 Q170 501 118 800Z','#8F8566')+E(143,126,245,153,'#93AD87')+E(362,97,250,119,'#9FB88F')+Array.from({length:17},(_,i)=>{const x=20+i*36;return P(`M${x} 111 Q${x+50} 267 ${x-18} ${305+(i%4)*37}`,'none','#8DA97F',9)+leaf(x-15,289+(i%4)*32,.27,'#A6BA8D',25);}).join('');}
function riverBase(sunset=false){return R(0,0,1000,800,sunset?'#E7D6AE':'#DCE5CC',0)+P('M0 390 Q300 281 605 384 Q844 300 1000 349 L1000 800 L0 800Z','#B6C9A0')+P('M580 371 Q743 478 1000 425 L1000 800 L454 800 Q783 573 580 371Z','#8EB9B6')+P('M670 481 Q823 527 1000 490 M664 646 Q824 682 1000 643','none','#C9DAD0',5)+[30,90,240,800].map((x,i)=>flower(x,730+i%2*42,.55,'#E6CC91')).join('');}
function boat(x,y,s=1){return G(x,y,s,`${P('M-183 -49 L194 -49 Q142 57 -113 50Z','#B18D60','#8F7959',5)}${P('M-165 -43 Q3 -84 181 -44','none','#D9BB87',13)}${line(-25,-66,-25,27,'#C4A070',22)}${line(-143,-52,-220,-101,'#A59169',4)}${R(-235,-131,18,92,'#8D8868',5)}`);}
function door(){return R(0,0,1000,800,'#D4C69E',0)+R(0,617,1000,183,'#B8B18C',0)+R(415,78,404,555,'#988E68',184)+R(436,96,363,531,'#F0DFC0',167)+R(457,165,320,460,'#A6B196',130)+[490,547,604,661,718].map(x=>line(x,190,x,621,'#93A186',5)).join('')+E(727,411,12,12,'#C19B5D')+R(396,622,447,25,'#8E947A',8)+table(889,583,.5);}
function fish(x,y,s=1){return G(x,y,s,P('M-32 0 Q-4 -28 30 0 Q-4 28 -32 0 L-51 -19 L-51 20Z','#C4AA76')+E(16,-3,4,4,ink));}
function otterScene(i,cover){
 if(cover)return riverBase()+willow()+mat(570,661,1.28)+otter(361,734,1.28,'reach')+duck(754,712,1.1,'reach',true)+flower(844,739,.85);
 if(i===0)return riverBase()+willow()+mat(401,671,1.4)+sleepingOtter(395,639,1.05);
 if(i===1)return door()+otter(318,723,1.35,'reach')+duck(724,716,1.3,'reach',true)+mat(551,532,.9,-18);
 if(i===2)return riverBase()+willow()+otter(402,717,1.4,'think')+leaf(429,655,1,'#B7C697',84)+E(394,722,175,50,'none','stroke="#B4BF96" stroke-width="3" stroke-dasharray="9 12"');
 if(i===3)return riverBase()+boat(765,648,1.05)+mat(775,575,.65)+duck(756,574,.95)+otter(378,728,1.35,'think')+fish(812,535,.65)+line(831,487,846,530,'#8B765C',6);
 if(i===4)return riverBase()+boat(786,637,1)+duck(782,568,.95,'stand',true)+otter(390,738,1.4,'reach')+mat(787,580,.64)+grass(211,743,1.2);
 if(i===5)return riverBase()+boat(845,680,.8)+duck(690,704,1.2,'reach',true)+otter(356,724,1.35,'reach')+mat(530,535,1,-11)+leaf(598,659,.24,'#A1B38B',75)+leaf(633,689,.25,'#9BAB7D',-30);
 if(i===6)return door()+duck(331,724,1.4,'reach')+otter(719,727,1.34,'reach',true)+mat(517,543,.95)+R(811,525,104,55,'#EDD7AB',18)+P('M850 506 Q830 485 852 468 M874 505 Q853 480 876 461','none','#E4D3AE',5);
 if(i===7)return riverBase(true)+willow()+boat(851,489,.45)+duck(843,466,.42)+mat(397,669,1.45)+sleepingOtter(389,635,1.1)+flower(71,746,.8);
 throw new Error('No otter scene');
}

function tailor(x,y,s=1,pose='stand'){return G(x,y,s,`${E(0,0,98,13,'#4C4F4B','opacity=".15"')}${E(-32,-9,34,19,'#797871')}${E(34,-9,34,19,'#797871')}${E(0,-107,71,101,'#83827B')}${P('M-50 -180 L46 -181 L64 -31 Q-5 -14 -62 -32Z','#697D97')}${R(-24,-106,53,43,'#8093A7',10)}${E(0,-222,78,61,'#8B8A80')}${E(-26,-223,5,7,ink)}${E(29,-223,5,7,ink)}${E(0,-192,23,17,'#CFA89B')}${E(0,-198,12,7,'#D8B0A1')}${R(-29,-162,15,21,'#C1C7C1',4)}${pose==='up'?hand(-48,-154,-14,-124,'#83827B'):hand(-49,-150,42,22,'#83827B')}${pose==='hold'?hand(49,-151,79,-18,'#83827B'):hand(49,-151,13,60,'#83827B')}`);}
function goat(x,y,s=1,pose='stand',flip=false){return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${E(0,0,96,14,'#4C4F4B','opacity=".15"')}${R(-49,-31,27,31,'#7B7A6C',9)}${R(22,-31,27,31,'#7B7A6C',9)}${P('M-51 -182 Q0 -206 53 -181 L81 -42 Q0 -12 -82 -42Z','#80B3A6')}${E(0,-232,70,64,'#F4ECD6')}${E(-68,-240,33,17,'#E8DDC4','transform="rotate(20 -68 -240)"')}${E(68,-240,33,17,'#E8DDC4','transform="rotate(-20 68 -240)"')}${P('M-39 -283 Q-82 -337 -40 -350 Q-8 -353 -13 -322 M37 -283 Q80 -337 38 -350 Q8 -353 12 -322','none','#B7A88A',15)}${E(-24,-238,5,7,ink)}${E(25,-238,5,7,ink)}${E(0,-208,29,19,'#E3D5B8')}${P('M-7 -217 Q0 -211 7 -217 M0 -212 L0 -203 M-10 -199 Q0 -194 10 -200','none','#8B816F',2)}${pose==='touch'?hand(44,-164,-4,-93,'#F4ECD6'):pose==='point'?hand(45,-159,78,23,'#F4ECD6'):hand(43,-160,6,67,'#F4ECD6')}${hand(-43,-157,-9,64,'#F4ECD6')}</g>`);}
function lamp(x,y,s=1){return G(x,y,s,glow(0,-57,156)+R(-25,-7,50,15,'#BA9D65',7)+R(-7,-50,14,52,'#B29461',4)+E(0,-61,36,36,'#F9F0CA')+E(-10,-70,13,13,'#FFF7DD','opacity=".8"'));}
function spool(x,y,s=1){return G(x,y,s,R(-19,-40,38,38,'#C8AC82',4)+E(0,-42,29,9,'#E3CE9C')+E(0,-3,29,9,'#E3CE9C')+[-29,-21,-13].map(yy=>line(-20,yy,20,yy,'#9DAFA8',5)).join(''));}
function clothBox(x,y,s=1,open=false){return G(x,y,s,R(-123,-105,246,113,'#AD9372',8)+R(-133,-120,266,27,'#C3AB84',7)+[[-110,0],[-35,0],[40,0]].map(([xx])=>line(xx,-96,xx,0,'#9A805E',3)).join('')+(open?P('M-128 -121 L-97 -225 L139 -191 L131 -117Z','#C6AE89')+P('M-100 -119 Q-28 -197 47 -124 Q90 -175 122 -110 L104 12 Q6 -38 -104 -9Z','#5F6872'):''));}
function workshop(high=true){return R(0,0,1000,800,'#C7C3AC',0)+P('M0 0 L1000 0 L1000 153 Q497 -109 0 153Z','#8F9C8C')+R(0,630,1000,170,'#B0AA91',0)+R(600,105,298,349,'#D9D5BA',9)+R(45,193,230,16,'#8E8E74',4)+[80,124,168,212].map((x,i)=>R(x,104+i*8,29,88-i*8,['#B49A7E','#93AAA4','#C9B284','#A1A997'][i],9)).join('')+(high?line(498,0,498,80,'#998D6C',5)+lamp(498,144,1.2):'')+line(562,700,861,700,'#E2DCC5',6);}
function goatShadow(x,y,s=1){return G(x,y,s,P('M-61 0 L-80 -179 L-51 -239 Q-98 -294 -56 -317 Q-21 -319 -23 -286 L-8 -265 L19 -272 Q9 -315 45 -317 Q85 -303 55 -268 L71 -231 L89 -179 L66 0Z','#868D82','',0,'opacity=".62"'));}
function tailorScene(i,cover){
 if(cover)return workshop(false)+table(345,596,.76)+lamp(326,561,1.05)+goatShadow(746,514,.9)+tailor(347,745,1.1,'hold')+goat(701,761,1.11)+spool(210,606,.9);
 if(i===0)return workshop(false)+table(283,597,.76)+lamp(280,561,1)+goatShadow(754,511,.87)+tailor(459,738,1.15,'hold')+goat(716,748,1.05);
 if(i===1)return workshop(true)+tailor(446,735,1.45,'up')+clothBox(802,724,.65)+spool(237,654,1)+R(695,539,166,13,'#8E8E74',7);
 if(i===2)return workshop(true)+goat(725,753,1.27,'touch')+tailor(360,739,1.2,'hold')+E(723,747,108,20,'#7D877C','opacity=".45"');
 if(i===3)return workshop(true)+clothBox(528,698,1.2,true)+tailor(241,750,1.16,'hold')+goat(797,753,1.1,'point',true)+E(497,755,10,5,'#D3BA80')+E(561,769,11,5,'#C5A76B');
 if(i===4)return workshop(true)+E(487,704,39,13,'#858D80')+spool(482,696,1.15)+G(311,715,1.1,tailor(0,0,1,'hold'),21)+goat(799,754,1.05,'stand',true);
 if(i===5)return workshop(true)+goat(687,750,1.23,'point')+E(704,746,115,21,'#788277','opacity=".5"')+tailor(322,743,1.1,'hold')+table(337,553,.62)+spool(421,542,.78);
 if(i===6)return workshop(false)+table(546,627,1.32)+R(344,572,394,61,cream,7)+E(569,601,31,12,'none','stroke="#A7AF93" stroke-width="3"')+P('M582 596 L817 577 L808 625 L579 612Z','#7F8C82')+spool(569,604,1)+lamp(351,608,.9)+tailor(236,754,1.1,'hold')+goat(833,751,1.1,'point',true);
 if(i===7)return workshop(false)+table(547,628,1.32)+R(345,574,394,61,cream,7)+E(554,601,34,14,'#8B9585')+spool(554,597,1.1)+lamp(551,375,1)+tailor(297,747,1.14,'up')+goat(837,751,1.1,'point',true);
 if(i===8)return workshop(false)+table(256,585,.74)+lamp(254,546,1.05)+goatShadow(761,510,.92)+goat(685,748,1.2,'point')+tailor(352,751,1.2,'hold');
 if(i===9)return workshop(true)+table(553,619,1.22)+R(379,565,336,67,cream,6)+P('M481 599 Q446 550 474 535 Q510 526 507 563 M575 599 Q609 550 583 535 Q548 526 551 563','none','#8D947F',5)+tailor(289,745,1.17,'hold')+goat(835,753,1.1,'point',true)+clothBox(174,746,.55);
 if(i===10)return workshop(true)+goat(678,750,1.35)+G(681,658,.28,P('M-97 12 Q-173 -162 -81 -189 Q1 -207 -2 -112 M101 12 Q178 -162 84 -189 Q0 -207 2 -112','none','#525C60',34))+tailor(323,744,1.23,'hold')+R(111,473,90,76,cream,9)+line(128,534,128,495,'#788B82',5)+line(128,495,180,495,'#788B82',5);
 if(i===11)return R(0,0,1000,800,'#ECD9B0',0)+E(209,196,78,78,'#F2CF87')+P('M0 509 Q314 372 1000 460 L1000 800 L0 800Z','#A7BA91')+P('M259 800 Q516 494 714 468 L771 479 Q653 626 606 800Z','#D3C29B')+tree(895,685,1.48,'#789679')+G(678,715,.75,goatShadow(0,0,.85),72)+goat(390,754,1.3,'point')+grass(108,764,1.2);
 throw new Error('No tailor scene');
}

function mi(x,y,s=1,pose='stand'){return G(x,y,s,`${E(0,0,81,12,'#425A61','opacity=".16"')}${R(-42,-53,31,54,'#8B6854',10)}${R(13,-53,31,54,'#8B6854',10)}${P('M-45 -178 L44 -178 L55 -50 L-52 -50Z','#B77960')}${R(-43,-177,16,60,'#D3A078',6)}${R(29,-177,16,60,'#D3A078',6)}${R(-18,-113,38,31,'#C58A6D',7)}${E(0,-225,63,66,'#695D50')}${E(0,-218,49,49,'#E5BDA0')}${P('M-53 -237 Q-34 -302 34 -274 Q64 -260 60 -211 L42 -216 L33 -248 Q-8 -224 -47 -239Z','#64574B')}${E(-18,-222,4,5,ink)}${E(19,-222,4,5,ink)}${P('M-10 -200 Q0 -192 11 -200','none','#A67765',2)}${pose==='point'?hand(46,-161,65,-18,'#E7D7B8'):pose==='hold'?hand(44,-161,30,56,'#E7D7B8'):hand(44,-162,8,69,'#E7D7B8')}${hand(-44,-161,-5,66,'#E7D7B8')}${line(-37,-91,-47,-56,'#B7A078',3)}${R(-56,-58,20,10,'#C8A66B',4)}`);}
function heron(x,y,s=1,pose='stand'){return G(x,y,s,`${R(-31,-71,13,71,'#9D967B',5)}${R(24,-71,13,71,'#9D967B',5)}${E(-33,0,25,8,'#A49C80')}${E(36,0,25,8,'#A49C80')}${E(0,-154,65,94,'#E8E7D7')}${P('M-54 -217 L-15 -223 L0 -197 L25 -222 L56 -205 L59 -98 Q2 -79 -61 -103Z','#617E8F')}${P('M3 -199 Q-24 -261 -9 -292 Q17 -319 45 -288 L36 -235','none','#ECE9D8',35)}${E(13,-305,37,36,'#F0EDDA')}${P('M39 -308 L139 -290 L43 -283Z','#979F99')}${E(24,-314,5,6,ink)}${pose==='point'?P('M46 -179 Q119 -195 133 -239','none','#DFE2D4',20):P('M-39 -181 Q-70 -126 -32 -106','none','#CCD5CA',23)}`);}
function granny(x,y,s=1){return G(x,y,s,`${E(0,0,89,13,'#425A61','opacity=".15"')}${E(-31,-10,31,16,'#7E7568')}${E(34,-10,31,16,'#7E7568')}${P('M-49 -194 L48 -194 L77 -30 Q0 -11 -78 -30Z','#9692A0')}${R(-28,-117,57,45,'#B3AAB4',9)}${E(0,-243,63,64,'#C6C6B8')}${[-44,-22,0,22,44].map(xx=>E(xx,-283,18,21,'#D4D2C3')).join('')}${E(0,-238,47,49,'#DEC0A1')}${E(-21,-244,19,17,'none','stroke="#7C7E72" stroke-width="3"')}${E(21,-244,19,17,'none','stroke="#7C7E72" stroke-width="3"')}${line(-3,-244,3,-244,'#7C7E72',3)}${E(-20,-242,4,5,ink)}${E(20,-242,4,5,ink)}${P('M-10 -218 Q0 -210 12 -218','none','#997C69',2)}${hand(-48,-174,5,61,'#DEC0A1')}${hand(48,-174,44,34,'#DEC0A1')}`);}
function crownChild(x,y,s=1){return G(x,y,s,`${R(-29,-48,22,48,'#9C8B6C',8)}${R(9,-48,22,48,'#9C8B6C',8)}${P('M-35 -137 L36 -137 L51 -42 L-47 -42Z','#A7B8A0')}${E(0,-174,42,45,'#E6C3A1')}${P('M-42 -208 L-48 -245 L-17 -224 L0 -252 L20 -224 L45 -246 L39 -208Z','#DEBE6E','#C7A361',3)}${E(-15,-176,4,5,ink)}${E(15,-176,4,5,ink)}${P('M-7 -155 Q0 -150 8 -156','none','#A38068',2)}${hand(-35,-122,-2,51,'#E6C3A1')}${hand(35,-122,2,51,'#E6C3A1')}`);}
function sky(){return R(0,0,1000,800,'#BDD5D3',0)+cloud(171,213,1.5,'#E5E6D1')+cloud(884,311,1.7,'#E2E4D0')+cloud(452,711,2,'#D6DFCD');}
function theater(x,y,s=1){return G(x,y,s,`${E(0,0,246,52,'#A8B9A0')}${P('M-246 0 Q-159 160 152 139 Q232 87 246 0Z','#8FA99A')}${R(-130,-165,260,162,'#BDAA82',10)}${P('M-161 -162 Q0 -230 161 -162Z','#7E9D95')}${R(-96,-151,192,138,'#785A54',4)}${P('M-96 -151 L-30 -151 Q-15 -74 -75 -14 L-96 -14Z','#BA7D6B')}${P('M96 -151 L30 -151 Q15 -74 75 -14 L96 -14Z','#BA7D6B')}${[-179,0,179].map(xx=>line(xx,-42,xx,-310,'#B8A882',4)+E(xx,-358,81,132,'#AECED0')+P(`M${xx} -489 Q${xx-50} -359 ${xx} -226`,'none','#91B7BF',3)).join('')}${line(-243,-24,242,-24,'#E0D1A5',8)}${Array.from({length:13},(_,i)=>line(-232+i*38,-23,-232+i*38,15,'#D2C29B',5)).join('')}${P('M-82 119 L56 119 L-12 223Z','#E1CF9C')}`);}
function navRoom(){return R(0,0,1000,800,'#D4CFB2',0)+R(0,631,1000,169,'#AAA98D',0)+R(641,68,268,310,'#9BAFA3',135)+R(660,86,230,273,'#BAD5D0',115)+cloud(771,251,.57,'#E9E8CF')+line(775,88,775,355,'#CFC29F',10)+line(664,223,886,223,'#CFC29F',10)+R(62,230,388,17,'#9F9C81',5)+[93,136,180,225,269,311,354,398].map((x,i)=>R(x,133+i%3*19,31,97-i%3*19,['#809AAB','#B49C7C','#9FAE90'][i%3],4)).join('');}
function logBooks(x,y,s=1,notes=false){return G(x,y,s,book(-95,0,.9,true,'#88A4B5',-7)+book(102,12,.9,true,'#AD9475',6)+(notes?R(-94,-47,58,33,'#E1C887',3)+R(92,-39,58,33,'#E1C887',3):''));}
function routeChart(x,y,s=1){return G(x,y,s,R(-163,-87,326,174,'#F2E5C2',10)+P('M-132 48 Q-19 -81 127 26','none','#B0836C',5)+P('M-132 48 Q-102 87 21 55 Q128 88 127 26','none','#6F9C94',7)+P('M-132 48 Q7 -23 127 26','none','#9AA7B2',4)+E(-132,48,9,9,'#C19D62')+E(127,26,9,9,'#C19D62')+cloud(3,-24,.37,'#CBD5BD'));}
function windTower(){return sky()+R(0,666,1000,134,'#B0BB9C',0)+R(631,188,25,477,'#A89979',8)+line(527,274,771,274,'#C4B490',12)+line(526,469,771,469,'#C4B490',12)+P('M651 277 Q574 247 531 279 L507 265 L516 299 Q583 279 651 296Z','#A1B4C1')+P('M654 472 Q734 429 801 462 L820 452 L807 484 Q737 455 654 491Z','#CEAF7B')+line(0,615,1000,615,'#DBCEAE',11)+[60,200,340,480,800,940].map(x=>line(x,614,x,756,'#DBCEAE',9)).join('');}
function backstage(){return R(0,0,1000,800,'#C5BDA1',0)+R(0,641,1000,159,'#A39F85',0)+P('M0 0 L209 0 Q284 360 104 692 L0 692Z','#B67C6A')+P('M1000 0 L827 0 Q746 360 924 692 L1000 692Z','#B67C6A')+R(294,120,392,374,'#D8D0B0',8)+P('M292 409 Q487 225 683 417 L683 495 L292 495Z','#A4B69A');}
function poster(x,y,s=1){return G(x,y,s,R(-89,-119,178,238,'#EDDFB8',8)+P('M-69 -99 L69 -99 L69 15 Q0 -53 -69 15Z','#B87E6D')+star(0,-38,1.5,'#E6C88D')+line(-50,49,50,49,'#8A9D8E',6)+line(-39,74,39,74,'#B19C75',5));}
function tube(x,y,s=1){return G(x,y,s,P('M0 0 L0 -82 Q0 -125 47 -125','none','#B49865',23)+P('M39 -151 L89 -169 L89 -81 L39 -98Z','#CCAD72')+E(90,-125,10,44,'#8A8469'));}
function theaterScene(i,cover){
 if(cover)return sky()+theater(544,644,1.05)+mi(287,767,1.15,'hold')+logBooks(385,634,.65,true);
 if(i===0)return sky()+theater(788,627,.69)+R(0,654,557,146,'#AEBB9B',0)+mi(308,756,1.4,'point')+poster(522,459,1.1);
 if(i===1)return navRoom()+mi(421,753,1.3,'hold')+table(546,638,1.5)+logBooks(537,608,1.3);
 if(i===2)return navRoom()+mi(297,752,1.2,'hold')+heron(815,746,1.15,'point')+table(537,639,1.35)+routeChart(540,600,1.02)+book(423,518,.6,false,'#88A4B5',-7);
 if(i===3)return navRoom()+mi(355,750,1.25,'hold')+table(554,638,1.45)+logBooks(543,604,1.2,true)+R(710,582,50,40,'#DBC58B',3)+R(340,611,51,29,'#C7D1B0',3);
 if(i===4)return windTower()+mi(326,751,1.35,'point')+heron(772,748,1.15,'point')+logBooks(390,629,.5);
 if(i===5)return windTower()+P('M445 519 Q377 360 273 174','none','#8F987F',3)+P('M274 103 L324 166 L274 230 L225 167Z','#D3B782','#9A9E85',3)+line(274,104,274,229,'#F4E4BA',4)+line(225,167,324,167,'#F4E4BA',4)+mi(353,750,1.27,'hold')+heron(768,754,1.1,'point')+R(408,558,100,77,'#E7DAB5',6);
 if(i===6)return windTower()+mi(351,754,1.3,'hold')+table(604,655,1.15)+logBooks(592,623,1.01,true)+P('M495 578 L527 580 M690 595 L724 598','none','#8C9C86',3);
 if(i===7)return backstage()+table(540,641,1.5)+routeChart(536,597,1.1)+mi(241,755,1.13,'point')+granny(818,756,1.13)+E(646,184,47,47,'#E6D7AD')+line(646,184,646,151,'#909477',4)+line(646,184,674,200,'#909477',4);
 if(i===8)return backstage()+mi(342,756,1.34,'point')+heron(782,749,1.13)+table(588,641,1.07)+routeChart(585,604,.85)+book(768,525,.65,true,'#AEB49A');
 if(i===9)return windTower()+R(171,109,387,550,'#B3AF90',33)+R(194,130,343,501,'#D2CFB0',22)+tube(425,469,1.12)+mi(331,749,1.4,'hold')+poster(701,496,.87);
 if(i===10)return sky()+theater(493,590,1.4)+mi(290,661,.72,'hold')+heron(698,657,.7,'point')+line(310,613,686,613,'#B39468',13)+line(402,610,402,634,'#E1D2A9',8)+line(598,610,598,635,'#E1D2A9',8)+R(349,593,300,19,'#D9C394',6)+cloud(840,167,.65,'#D7E2D2');
 if(i===11)return backstage()+granny(340,753,1.4)+mi(737,751,1.2,'hold')+table(535,639,1.04)+book(505,602,1,true,'#B3B7A0')+R(594,547,88,68,'#E8DBBA',4)+R(86,495,83,158,'#A1AC90',9);
 if(i===12)return sky()+R(641,329,302,304,'#B8C4A0',133)+R(669,355,249,272,'#D6DEC1',112)+[700,771,841,911].map(x=>line(x,385,x,630,'#9BAC91',7)).join('')+R(0,666,1000,134,'#B5B18F',0)+line(0,660,528,660,'#E0D2AA',12)+mi(330,756,1.32,'point')+crownChild(704,758,1.27)+R(846,634,34,36,'#E8D2A8',8)+E(864,633,17,6,'#BD9C73');
 if(i===13)return backstage()+R(362,226,184,280,'#9F9F84',72)+R(385,245,137,258,'#CAB994',55)+mi(510,492,.68,'point')+R(0,647,1000,153,'#929E87',0)+[153,338,523,708,893].map(x=>R(x-59,650,118,125,'#B6A27D',13)).join('')+crownChild(329,707,.8)+mi(797,789,1.05)+R(738,722,124,79,'#A88E6B',13);
 if(i===14)return navRoom()+mi(364,752,1.3,'hold')+table(560,639,1.5)+logBooks(722,597,.72,true)+book(476,612,1.05,true,'#97AF9D')+P('M409 579 L537 583 M408 600 L535 604 M430 567 L428 623 M471 570 L470 626 M511 575 L510 628','none','#8F9D86',2)+glow(491,602,170);
 if(i===15)return navRoom()+mi(667,750,1.37,'point')+table(338,659,1.22)+logBooks(329,624,.86,true)+R(304,525,114,74,'#ECDFBB',5)+poster(136,490,.6)+line(814,193,875,193,'#8FA18D',5)+P('M875 178 L895 193 L875 209Z','#C8AC79');
 throw new Error('No theater scene');
}

export function firstThreeArtwork(story, index, cover=false){
 const registry={'expansion-0001':[8,otterScene],'expansion-0017':[12,tailorScene],'expansion-0031':[16,theaterScene]};
 const selected=registry[story.id];
 if(!selected||story.pages.length!==selected[0])throw new Error(`No reviewed illustration storyboard for ${story.id}`);
 return svg(selected[1](index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);
}

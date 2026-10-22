// Original scene-by-scene vector illustrations for manuscripts 0022–0026.
// No text is drawn into narrative artwork. Twelve distinct scenes plus one cover per story.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,table,book,basket,rock,svg} from '../render-illustrations.mjs';
import {outdoors,room,bamboo,notes} from './middle.mjs';
const ink='#3E514D';
const limb=(x,y,dx,dy,c,w=19)=>P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.3-12} ${x+dx} ${y+dy}`,'none',c,w);
const face=(c,closed=false)=>E(0,-205,58,53,c)+(closed?P('M-28 -213 Q-19 -205 -11 -213 M11 -213 Q19 -205 28 -213','none',ink,3):E(-20,-214,4,6,ink)+E(20,-214,4,6,ink))+E(0,-194,8,5,'#7F6F57')+P('M-10 -181 Q0 -172 11 -181','none','#89795F',2);
function mouse(x,y,s=1,who='rain',pose='hold',flip=false){
 const old=who==='granny',fur=old?'#C0C2B5':'#BC9874';let a=E(0,0,82,12,'#536A50','opacity=".13"')+P('M35 -29 Q145 -5 120 -57 Q107 -81 87 -66','none',fur,8)+E(-28,-7,29,14,fur)+E(28,-7,29,14,fur)+E(0,-95,57,90,fur)+E(0,-88,38,67,'#E4D8BB');
 if(who==='rain')a+=P('M-43 -164 L43 -164 L76 -26 Q0 -6 -76 -26Z','#D8BC67')+P('M-54 -217 Q-71 -304 0 -310 Q71 -292 54 -217 L41 -247 Q0 -281 -41 -247Z','#D8BC67')+leaf(0,-297,.31,'#C7AB5B',70);
 if(who==='path')a+=R(-45,-146,90,115,'#8AA875',13)+R(-41,-176,13,62,'#8AA875',3)+R(28,-176,13,62,'#8AA875',3)+P('M-43 -161 L44 -161 L48 -142 L-45 -141Z','#BB7F6B')+R(24,-145,18,49,'#BB7F6B',4);
 if(old)a+=P('M-42 -165 L42 -165 L58 -30 Q0 -12 -58 -30Z','#91AAB6')+[-30,0,30].map(xx=>line(xx,-151,xx,-34,'#CAD5CA',3)).join('')+[-133,-103,-72,-42].map(yy=>line(-49,yy,49,yy,'#CAD5CA',3)).join('');
 a+=E(-43,-249,25,28,fur)+E(43,-249,25,28,fur)+E(-43,-250,14,18,'#D6B5AA')+E(43,-250,14,18,'#D6B5AA')+face(fur,pose==='rest');
 a+=line(-35,-194,-69,-201,'#E7DCC5',2)+line(-36,-185,-71,-182,'#E7DCC5',2)+line(35,-194,69,-201,'#E7DCC5',2)+line(36,-185,71,-182,'#E7DCC5',2);
 if(old)a+=E(-21,-211,20,18,'none','stroke="#7D8777" stroke-width="3"')+E(21,-211,20,18,'none','stroke="#7D8777" stroke-width="3"')+line(-2,-211,2,-211,'#7D8777',3)+P('M72 -5 L72 -120 Q70 -149 47 -135','none','#9E8967',9);
 a+=limb(-42,-151,pose==='up'?-32:29,pose==='up'?-92:52,fur)+limb(42,-151,pose==='point'?84:pose==='low'?58:pose==='think'?-30:-24,pose==='point'?-19:pose==='low'?90:pose==='think'?-37:49,fur);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function acornBucket(x,y,s=1,full=false,tilt=0){return G(x,y,s,P('M-34 -42 L-30 7 Q0 37 30 7 L34 -42Z','#AE8F61')+E(0,-42,34,11,full?'#A6C5BC':'#827A5F')+P('M-33 -41 Q-40 -99 0 -101 Q40 -99 33 -41','none','#AE9F77',5)+[-19,0,19].map(xx=>line(xx,-36,xx,9,'#C6AB7C',3)).join(''),tilt);}
function cat(x,y,s=1,pose='hold',flip=false){let a=E(0,0,88,13,'#536A50','opacity=".13"')+P('M40 -39 Q141 -24 130 -134 Q118 -178 92 -159','none','#BA865E',33)+P('M128 -136 Q125 -174 93 -159','none','#ECE4CD',27)+E(-29,-9,29,15,'#BD895F')+E(29,-9,29,15,'#BD895F')+E(0,-105,58,96,'#BD895F')+P('M-46 -146 L46 -146 L54 -26 L-54 -26Z','#91B4C1')+R(-38,-173,13,67,'#91B4C1',3)+R(25,-173,13,67,'#91B4C1',3)+R(-24,-104,48,36,'#B1C8CE',8)+P('M-45 -245 L-59 -301 L-11 -262 L12 -262 L59 -301 L45 -245Z','#BD895F')+face('#C3946A')+P('M-28 -253 L-18 -236 M0 -256 L0 -237 M28 -253 L18 -236 M-56 -214 L-41 -205 M56 -214 L41 -205','none','#906C50',6)+line(-38,-197,-70,-202,'#DDD6B8',2)+line(38,-197,70,-202,'#DDD6B8',2)+R(-47,-170,94,20,'#91A97D',8)+P('M28 -153 L49 -151 L56 -108 L34 -114Z','#91A97D');a+=limb(-43,-147,pose==='up'?-22:30,pose==='up'?-95:50,'#BD895F')+limb(43,-147,pose==='point'?83:pose==='think'?-26:-28,pose==='point'?-22:pose==='think'?-39:50,'#BD895F');return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);}
function rabbit(x,y,s=1,pose='hold',flip=false){const f='#F1E9D5';let a=E(0,0,85,12,'#536A50','opacity=".13"')+E(51,-58,26,27,f)+E(-30,-8,31,15,f)+E(30,-8,31,15,f)+E(0,-103,59,94,f)+R(-47,-169,94,105,'#C18A78',19)+[-31,-14,3,20,37].map(xx=>line(xx,-154,xx,-76,'#D3A491',2)).join('')+E(-25,-272,18,69,f,'transform="rotate(-9 -25 -272)"')+E(26,-278,18,71,f,'transform="rotate(8 26 -278)"')+E(-34,-318,12,22,'#C8CCC2')+E(33,-326,12,23,'#C8CCC2')+face(f)+flower(-39,-273,.53,'#DFC781');a+=limb(-42,-149,pose==='up'?-27:28,pose==='up'?-88:48,f)+limb(42,-149,pose==='point'?83:-25,pose==='point'?-21:47,f);return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);}
function fox(x,y,s=1,old=false,pose='hold',flip=false){const f=old?'#CBCBC0':'#C58D65';let a=E(0,0,90,13,'#536A50','opacity=".13"')+P('M42 -42 Q142 -19 128 -132 Q87 -131 52 -100Z',f)+P('M128 -132 Q141 -95 118 -65 L98 -103Z','#EFE6CF')+E(-29,-8,31,15,f)+E(29,-8,31,15,f)+E(0,-104,59,94,f)+P('M-43 -168 L43 -168 L56 -34 Q0 -15 -57 -34Z',old?'#9AB2A9':'#8AA783')+R(-23,-99,46,34,'#B8C49E',7)+leaf(0,-72,.27,'#7E9C73',65)+P('M-45 -245 L-62 -305 L-10 -264 L11 -264 L61 -305 L45 -245Z',f)+P('M-62 -305 L-51 -270 L-31 -278Z','#686A5A')+P('M61 -305 L51 -270 L31 -278Z','#686A5A')+E(0,-209,62,54,f)+P('M-56 -212 L-11 -191 L0 -202 L12 -191 L56 -212 Q44 -158 0 -161 Q-45 -158 -56 -212Z','#E5DDC3')+E(-21,-217,4,6,ink)+E(22,-217,4,6,ink)+E(0,-189,9,6,'#766A56')+P('M-10 -174 Q0 -168 11 -174','none','#8D7B60',2);
 if(old)a+=P('M-65 -253 Q-4 -285 65 -253 L52 -228 Q0 -259 -54 -228Z','#8BA9B7')+P('M-54 -236 L-79 -211 L-79 -246Z','#8BA9B7')+[-32,-7,19,43].map(xx=>star(xx,-252,.35,'#D3E0D7')).join('')+E(-21,-216,19,17,'none','stroke="#7E8B80" stroke-width="3"')+E(22,-216,19,17,'none','stroke="#7E8B80" stroke-width="3"');else a+=flower(-43,-264,.45,'#E4D18E');
 a+=limb(-42,-147,pose==='up'?-29:27,pose==='up'?-96:51,f)+limb(42,-147,pose==='point'?82:pose==='cup'?44:pose==='think'?-27:-26,pose==='point'?-21:pose==='cup'?12:pose==='think'?-38:49,f);return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);}
function frog(x,y,s=1,pose='sit'){return G(x,y,s,E(0,-28,55,38,'#85AE7A')+E(0,-24,31,28,'#B8C99B')+E(-33,-75,22,24,'#90B780')+E(33,-75,22,24,'#90B780')+E(0,-60,49,32,'#90B780')+E(-32,-77,13,16,'#D6C474')+E(32,-77,13,16,'#D6C474')+E(-31,-77,5,8,ink)+E(31,-77,5,8,ink)+P('M-16 -51 Q0 -40 17 -51','none','#597F59',3)+P('M-24 -99 Q-20 -129 0 -128 Q24 -128 27 -99Z','#AB976E')+R(-31,-102,62,11,'#C3AB7A',5)+[[-30,-22],[27,-19],[4,-37]].map(([xx,yy])=>E(xx,yy,4,4,'#D7D394')).join('')+limb(-38,-24,-31,pose==='jump'?-25:22,'#85AE7A',9)+limb(38,-24,pose==='wave'?29:32,pose==='wave'?-42:22,'#85AE7A',9)+[-64,63].map(xx=>[0,1,2].map(j=>E(xx+j*5,-3+j%2*4,4,4,'#A1BF8E')).join('')).join(''));}
function tortoise(x,y,s=1,rest=false){return G(x,y,s,E(-14,-52,87,64,'#84765C')+P('M-79 -62 L-42 -99 L9 -105 L57 -75 L61 -36 L9 -9 L-44 -15Z','none','#A89873',4)+P('M-42 -99 L-35 -55 L9 -9 M-35 -55 L15 -61 L57 -75 M15 -61 L9 -105','none','#A89873',4)+[[-57,-14],[30,-11]].map(([xx,yy])=>E(xx,yy,23,15,'#B0B391')).join('')+(!rest?P('M54 -31 Q100 -43 105 -93','none','#B2B696',28)+E(104,-103,42,36,'#B7BE9E')+E(120,-111,4,5,ink)+E(122,-110,19,16,'none','stroke="#7B8473" stroke-width="3"')+P('M101 -90 Q111 -85 123 -92','none','#7E8D70',2)+P('M73 -57 L89 -51 M79 -67 L97 -61','none','#919E7E',3):E(75,-33,20,17,'#A6B08B'))+grass(-52,-98,.55,'#96AA7C')+leaf(-39,-106,.3,'#96AA7C',78));}
function drop(x,y,s=1){return G(x,y,s,P('M0 -15 Q-14 5 0 12 Q14 5 0 -15Z','#A6C7C8'));}
function birdChild(x,y,s=1,tuft=false,open=false){return G(x,y,s,E(0,-44,37,47,'#7C8C94')+E(0,-36,27,37,'#E4E6DB')+E(0,-86,36,32,'#6E808B')+E(-12,-88,4,5,ink)+E(13,-88,4,5,ink)+(open?P('M-19 -76 L18 -76 L0 -49Z','#D8BF72')+P('M-12 -74 L12 -74 L0 -57Z','#9D7957'):P('M-12 -72 L0 -65 L13 -73Z','#D9C67F'))+(tuft?P('M-9 -117 L-16 -138 L-1 -126 L7 -142 L13 -118Z','#9CA7A6'):'')+P('M-27 -61 Q-48 -47 -35 -21 M28 -62 Q47 -46 34 -22','none','#6E808B',9));}
function swallow(x,y,s=1,fly=true){return G(x,y,s,(fly?P('M-9 -43 Q-76 -151 -146 -134 Q-113 -64 -35 -15 M15 -44 Q95 -134 155 -101 Q99 -35 32 -9Z','#516B7B'):P('M-36 -41 Q-50 44 -13 46 L22 -26Z','#516B7B'))+P('M-11 14 L-39 91 L3 63 L40 92 L18 12Z','#516B7B')+E(0,-21,34,60,'#516B7B')+E(10,-16,20,39,'#DDE1D5')+E(12,-76,35,30,'#4B6677')+E(17,-55,17,15,'#B7856D')+E(24,-82,4,5,ink)+P('M43 -78 L71 -69 L42 -65Z','#C8B581'));}
function swallowLeft(x,y,s=1,fly=true){return G(x,y,s,`<g transform="scale(-1 1)">${swallow(0,0,1,fly)}</g>`);}
function nest(x,y,s=1,smallOpen=false,othersOpen=false,covered=false){return G(x,y,s,birdChild(-90,-40,.96,false,othersOpen)+birdChild(-25,-47,1.03,false,othersOpen)+birdChild(43,-37,.99,false,othersOpen)+birdChild(101,-26,.76,true,smallOpen)+P('M-155 -53 Q0 -8 161 -53 Q143 68 0 79 Q-143 68 -155 -53Z','#A99575')+[-18,2,22,42].map(yy=>P(`M-136 ${yy} Q0 ${yy+56} 139 ${yy}`,'none','#C4AD84',5)).join('')+P('M-155 -53 Q0 -8 161 -53','none','#C8B08B',12)+(covered?P('M91 -45 Q81 -123 6 -148 Q13 -50 91 -45Z','#516B7B'):''));}
function gecko(x,y,s=1){return G(x,y,s,P('M-15 11 Q45 12 79 35 Q115 55 106 78 Q91 87 91 70','none','#9E9F8D',13)+E(0,0,22,45,'#A5AA95')+E(0,-44,28,27,'#A5AA95')+E(-12,-49,9,11,'#CDD0B8')+E(12,-49,9,11,'#CDD0B8')+E(-12,-49,4,6,ink)+E(12,-49,4,6,ink)+[-1,1].map(k=>limb(k*14,-17,k*32,-6,'#A5AA95',6)+limb(k*15,19,k*33,13,'#A5AA95',6)).join('')+line(91,66,100,67,'#D4D5BC',7));}
function veranda(rain=true,dark=false){return R(0,0,1000,800,dark?'#657E80':'#BDD1CD',0)+P('M0 0 L1000 0 L1000 177 Q520 95 0 171Z','#7E8F8A')+[0,1,2,3,4,5,6,7,8].map(j=>P(`M${j*122} 0 Q${j*122+74} 49 ${j*122+53} 152`,'none','#9FAE9E',7)).join('')+R(0,205,1000,53,'#A99A7E',9)+R(0,262,1000,17,'#BCAB88',4)+R(83,256,29,544,'#A79574',4)+R(897,258,29,542,'#A79574',4)+R(0,712,1000,88,'#B1B19B',0)+(rain?Array.from({length:32},(_,j)=>line(153+j%8*95,342+Math.floor(j/8)*91,145+j%8*95,374+Math.floor(j/8)*91,'#9DBAC0',3)).join(''):'');}
function nestScene(i,cover){
 const base=(rain=true,dark=false)=>veranda(rain,dark)+R(476,255,49,420,'#A49376',4);
 if(cover)return base()+nest(493,579,1.62,true,true)+swallowLeft(705,328,.95,true)+gecko(238,314,.8)+drop(813,560,1.2);
 return [
 ()=>base(false)+nest(511,504,1.27)+gecko(259,310,.62)+cloud(761,617,.5,'#DAE3D4'),
 ()=>base()+nest(499,516,1.27)+swallow(794,397,.72,true)+drop(783,269,.8)+drop(760,323,.6),
 ()=>base()+nest(484,564,1.54,true,true)+swallow(253,389,.92,true)+P('M297 325 Q308 318 322 325','none','#9A9875',4),
 ()=>base()+nest(469,578,1.62,false,true)+swallow(790,360,.74,true)+drop(834,512,1.1),
 ()=>base()+nest(491,575,1.68,false,false)+G(666,426,.9,P('M-12 0 Q-37 -45 -53 -29 M15 0 Q45 -44 56 -30','none','#85969C',10))+line(671,433,674,415,'#D6C48D',3),
 ()=>base(true,true)+nest(482,579,1.5)+swallowLeft(759,533,.92,false)+drop(742,626,.8)+drop(752,665,.6),
 ()=>base(true,true)+nest(486,579,1.51)+gecko(765,410,1.25)+P('M782 354 Q850 307 892 325','none','#B9C2AC',3),
 ()=>base(true,true)+nest(487,579,1.52,true,false)+gecko(260,339,.9)+swallowLeft(794,362,.77,true)+notes(680,430,.36,'#B8C8B6'),
 ()=>base(false,true)+nest(475,577,1.5)+drop(829,311,1.35)+drop(829,485,1.35)+drop(829,659,1.35)+E(804,382,7,7,'#C5D8CD','opacity=".4"'),
 ()=>base(false,true)+nest(480,579,1.48,true,false)+swallowLeft(692,501,.86,false)+P('M631 441 Q636 434 644 440','none','#A5A47A',4)+drop(847,644,1.05),
 ()=>base(false,true)+nest(477,583,1.5,false,false,true)+swallowLeft(733,540,1.1,false)+gecko(251,310,.7)+G(628,435,.75,P('M0 0 Q21 33 49 27','none','#D8DECE',10)),
 ()=>base(false)+nest(488,573,1.51,true,false)+swallowLeft(726,456,.85,false)+gecko(248,313,.92)+drop(848,426,.8)+star(845,412,.4,'#EEE5C2')+cloud(792,625,.55,'#E0E7D6'),
 ][i]();
}
function yard(night=false){return R(0,0,1000,800,night?'#36535F':'#C5D5CD',0)+R(0,375,1000,425,night?'#84968D':'#BCC3AA',0)+P('M0 557 L1000 557 M0 703 L1000 703 M209 376 L122 800 M513 376 L528 800 M801 376 L951 800','none',night?'#9CA998':'#D4D5BB',6)+tree(105,503,1.13,night?'#627C6D':'#95AA89')+R(714,90,286,433,'#BAAE8F',8)+R(782,350,152,173,'#838D72',74)+(night?[210,397,587,695,866].map((x,j)=>star(x,77+j%2*65,.7,'#E4D9AC')).join(''):cloud(559,142,.74,'#E4E6D1'));}
function puddle(x,y,s=1,stage=1,stars=false){return G(x,y,s,E(0,0,237,64,'#A0B5AC')+E(0,-3,212*stage,51*stage,stars?'#476E7D':'#9CBFC3')+`<clipPath id="puddle-clip"><ellipse cx="0" cy="-3" rx="${211*stage}" ry="${50*stage}"/></clipPath><g clip-path="url(#puddle-clip)">`+(stars?[-120,-33,62,139].map((xx,j)=>star(xx,-4+j%2*18,.72,'#E8DDB1')).join(''):cloud(56,23,.39,'#DDE6D8')+P('M-118 -63 L-88 39 M-97 9 L-148 37 M-91 30 L-48 49','none','#7F9C8D',7)+leaf(-126,21,.36,'#91AB9A',-45))+`</g>`+P(`M${-156*stage} 4 Q${-83*stage} -9 ${-11*stage} -2`,'none','#C9DAD0',3));}
function waterBasin(x,y,s=1,stars=false){return G(x,y,s,P('M-125 -22 Q-111 57 0 64 Q109 58 125 -22Z','#B59171')+E(0,-22,126,39,'#D1B78F')+E(0,-24,109,29,stars?'#466C7D':'#A4C7C7')+(stars?[-71,-27,28,76].map((xx,j)=>star(xx,-25+j%2*12,.52,'#E8DDB1')).join(''):'')+P('M-73 -29 Q-29 -43 28 -36','none','#D2E0D2',3));}
function waterJar(x,y,s=1){return G(x,y,s,P('M-61 -111 Q-89 -51 -66 30 Q0 68 66 30 Q89 -51 61 -111Z','#AA9273')+E(0,-112,61,19,'#C7B08A')+E(0,-113,48,12,'#92AFAC')+line(-52,-78,-61,-1,'#C2AB85',4));}
function mouseReflection(x,y,s=1){return G(x,y,s,`<g opacity=".52">${E(0,0,43,29,'#83A4A8')}${E(-28,24,15,14,'#83A4A8')}${E(28,24,15,14,'#83A4A8')}${E(-14,-2,3,4,'#587E89')}${E(14,-2,3,4,'#587E89')}${E(0,10,5,3,'#587E89')}${P('M-10 -15 Q0 -22 10 -15','none','#587E89',2)}${line(-31,4,-55,8,'#C3D7D2',2)}${line(31,4,55,8,'#C3D7D2',2)}</g>`);}
function reflectionScene(i,cover){
 if(cover)return yard(true)+mouse(343,748,1.39,'rain','point')+mouse(783,747,1.31,'granny','low',true)+waterBasin(570,694,1.24,true)+acornBucket(276,715,.62);
 return [
 ()=>yard()+puddle(560,646,1.18)+mouse(324,748,1.3,'rain','low')+mouseReflection(501,649,.8),
 ()=>yard()+mouse(323,748,1.4,'rain','low')+puddle(599,678,1.32)+E(600,678,5,4,'#789AA2')+E(636,678,5,4,'#789AA2')+P('M608 695 Q621 702 635 694','none','#789AA2',3),
 ()=>yard()+mouse(336,748,1.38,'rain','point')+mouse(806,750,1.32,'granny','rest',true)+puddle(553,694,1.08)+star(543,368,.85,'#DEC992'),
 ()=>yard()+E(676,145,63,63,'#EAD7A1')+mouse(338,751,1.4,'rain','think')+puddle(610,681,1.12,.74),
 ()=>yard()+mouse(325,748,1.37,'rain','hold')+puddle(603,687,1.17,.7)+G(588,689,2.95,leaf(0,0,1,'#9BAF87',84))+P('M329 644 L475 666','none','#91A77F',12),
 ()=>yard()+waterJar(823,524,.92)+mouse(384,751,1.4,'rain','point')+acornBucket(530,592,.9,true,19)+drop(550,651,.6)+drop(571,687,.55)+puddle(704,720,.81,.55),
 ()=>yard()+E(665,146,69,69,'#EAD7A1')+puddle(626,696,1.03,.27)+mouse(338,750,1.35,'rain','think')+acornBucket(461,739,.85,false,47),
 ()=>yard()+mouse(328,749,1.39,'rain','low')+puddle(623,695,1.08,.29)+cloud(644,186,1.15,'#D9E2D1')+leaf(604,687,.14,'#9EB7A6',45),
 ()=>yard()+mouse(331,751,1.34,'rain','point')+waterJar(806,543,.96)+waterBasin(623,690,.77,false)+puddle(440,726,.68,.15)+E(706,145,62,62,'#EAD7A1'),
 ()=>yard(true)+E(467,701,153,37,'#9EA89A')+mouse(326,751,1.38,'rain','point')+waterBasin(666,682,1.12,false)+acornBucket(467,594,.85,true,25)+P('M482 562 Q535 577 600 647','none','#B3CFCC',6),
 ()=>yard(true)+mouse(324,752,1.26,'rain','hold')+mouse(820,752,1.4,'granny','low',true)+waterBasin(584,684,1.27,true)+acornBucket(282,745,.59),
 ()=>yard()+puddle(610,680,1.25)+mouse(330,750,1.4,'rain','low')+mouseReflection(549,681,.8)+waterBasin(843,514,.4,false)+drop(729,212,.65)+drop(788,303,.6),
 ][i]();
}
function walnutChime(x,y,s=1,tilt=0){return G(x,y,s,line(0,-131,0,32,'#B37468',4)+[-75,-25,25].map(yy=>E(0,yy,18,15,'#BFA17A')+P(`M-5 ${yy-11} Q9 ${yy-2} -4 ${yy+10}`,'none','#9C825F',3)).join('')+leaf(0,56,.36,'#BEB58C',4),tilt);}
function chimeStreet(night=false){return outdoors(night)+P('M271 800 Q401 466 666 329 L750 348 Q537 537 592 800Z',night?'#8B977E':'#CFC09B')+R(0,177,278,490,night?'#8D9682':'#C9BC97',4)+P('M0 180 L126 75 L296 180Z','#97A590')+R(71,367,131,300,'#9FAF8D',65)+R(771,285,229,339,night?'#98A08A':'#D0C3A1',4)+P('M740 286 L887 191 L1000 268 L1000 287Z','#8FA493')+R(808,386,121,161,night?'#647B76':'#AAC2AC',60)+walnutChime(209,282,.58)+walnutChime(955,361,.47)+tree(670,431,.6,night?'#5F7C67':'#9BB18B');}
function cookie(x,y,s=1){return G(x,y,s,E(0,0,33,21,'#D9BA80')+[-12,0,13].map((xx,j)=>E(xx,-4+j%2*7,3,3,'#BB9662')).join(''));}
function wind(x,y,s=1){return G(x,y,s,P('M-101 6 Q-34 -38 43 -2 Q102 23 119 -11 M-62 40 Q6 12 74 38','none','#C5D6BD',5));}
function chimeScene(i,cover){
 if(cover)return chimeStreet()+cat(345,752,1.44,'hold')+rabbit(750,752,1.22,'hold',true)+walnutChime(555,443,1.25)+basket(802,646,.55,false)+wind(582,266,1.1);
 return [
 ()=>chimeStreet()+cat(327,751,1.26,'point')+rabbit(838,619,.72,'up',true)+wind(580,318,1.8)+notes(609,294,.8,'#A4B691'),
 ()=>room()+cat(338,751,1.42,'hold')+table(626,651,1.3)+walnutChime(623,544,1.01)+E(737,610,17,14,'#BFA17A')+P('M496 590 Q529 548 570 593','none','#B37468',4),
 ()=>chimeStreet()+cat(337,751,1.43,'think')+walnutChime(392,630,.47)+wind(611,374,1.57)+notes(530,353,.7,'#A6B997'),
 ()=>room(true)+R(125,612,416,151,'#A7B69B',20)+cat(316,708,.95,'think')+R(138,660,392,99,'#B5C5A7',20)+walnutChime(510,620,.65)+E(813,172,37,37,'#E2D5AD'),
 ()=>chimeStreet()+cat(589,748,1.4,'hold')+walnutChime(607,615,.58)+R(805,385,125,164,'#9DAE91',60)+line(868,394,868,540,'#B4C3A6',5)+basket(274,703,.55,false),
 ()=>chimeStreet()+cat(345,752,1.43,'point')+walnutChime(295,370,1.03)+wind(617,379,1.6)+notes(556,332,.61,'#A4B591'),
 ()=>chimeStreet()+cat(399,753,1.46,'think')+walnutChime(269,383,.97)+wind(661,393,1.38)+notes(636,345,.54,'#A4B591')+table(798,684,.53)+cookie(799,660,.53),
 ()=>chimeStreet()+G(387,751,1,cat(0,0,1.36,'up'),8)+walnutChime(402,578,.53,-15)+P('M258 756 Q211 749 183 726','none','#C5B98F',5)+wind(703,346,1.1),
 ()=>outdoors()+tree(554,581,1.36,'#91AB87')+cat(349,751,1.33,'hold')+rabbit(749,750,1.18,'point',true)+basket(654,645,.69,false)+cookie(652,594,.7)+walnutChime(379,586,.51),
 ()=>outdoors()+tree(554,581,1.36,'#91AB87')+cat(348,752,1.39,'point')+rabbit(759,751,1.19,'point',true)+basket(626,721,.71,false)+cookie(624,668,.64)+walnutChime(380,591,.54),
 ()=>chimeStreet()+cat(511,752,1.33,'up')+rabbit(769,751,1.16,'up',true)+walnutChime(724,393,1.06)+basket(904,748,.58,false)+cookie(584,617,.52),
 ()=>chimeStreet()+cat(413,752,1.36,'hold')+rabbit(719,751,1.2,'hold',true)+walnutChime(578,355,1.06)+wind(535,288,1.9)+notes(769,395,.77,'#A2B394'),
 ][i]();
}
function fireflies(){return [[592,199],[643,166],[711,203],[780,152],[827,211],[691,251],[744,291],[872,270],[548,271]].map(([x,y],j)=>glow(x,y,23)+E(x,y,4,6,'#D9D88A')+E(x-4,y-6,4,7,'#B4CBA9')+E(x+4,y-6,4,7,'#B4CBA9')).join('');}
function hill(night=false,path='none'){let a=R(0,0,1000,800,night?'#3C5862':'#CFDCC7',0)+cloud(223,148,1,night?'#617D78':'#E4E8D1')+P('M0 744 Q233 683 449 365 Q638 91 1000 263 L1000 800 L0 800Z',night?'#6B886E':'#ABC394');
 if(path==='straight')a+=P('M167 800 L633 237 L675 252 L215 800Z',night?'#9AA487':'#D0BD95');
 if(path==='curve'||path==='trace')a+=P('M128 786 Q257 692 519 707 Q814 717 793 610 Q779 534 434 531 Q226 520 472 410 Q637 333 857 351 Q913 327 750 250','none',path==='trace'?'#A2B98B':night?'#9AA88A':'#D0BE97',path==='trace'?15:40);
 return a+[90,195,338,928].map((x,j)=>grass(x,761-j%2*53,.9,night?'#779475':'#91AE83')).join('')+(night?fireflies()+E(186,118,44,44,'#E6D9AA'):'');}
function turtleHouse(){return G(207,659,1,P('M-127 4 Q-150 -168 0 -176 Q151 -161 132 4Z','#9DAF8C')+R(-46,-102,95,111,'#657F67',45)+grass(-31,-144,.61,'#7F9C76'));}
function stoneTile(x,y,s=1,tilt=0){return G(x,y,s,P('M-63 -9 L-39 -27 L47 -23 L65 10 L40 24 L-54 19Z','#B8BBA5')+[[-31,-5],[1,7],[29,-9],[42,9],[-12,-13]].map(([xx,yy])=>E(xx,yy,3,2,'#919C86')).join(''),tilt);}
function railing(x,y,s=1){return G(x,y,s,P('M-115 -48 L111 -116','none','#A39A72',10)+[-100,-30,40,108].map((xx,j)=>line(xx,-45-j*22,xx,38-j*22,'#A39A72',10)).join(''));}
function berries(x,y,s=1){return G(x,y,s,basket(0,0,1,false)+[-26,0,27,-10,15].map((xx,j)=>E(xx,-51-j%2*15,13,12,'#A5859B')+star(xx,-61-j%2*15,.3,'#A3B287')).join(''));}
function pathScene(i,cover){
 if(cover)return hill(true,'curve')+mouse(351,752,1.37,'path','point')+tortoise(721,716,1.05)+stoneTile(606,748,.77)+berries(412,679,.52)+[371,752,486,850].map((x,j)=>E(x,[720,607,526,348][j],10,8,'#DDE1C8')).join('');
 return [
 ()=>hill(true)+turtleHouse()+mouse(433,752,1.22,'path','hold')+tortoise(760,733,.96)+berries(462,632,.55),
 ()=>hill(true)+turtleHouse()+tortoise(393,733,1.08)+mouse(695,751,1.36,'path','up',true)+berries(770,718,.6),
 ()=>hill(false,'straight')+mouse(637,380,.93,'path','up')+grass(480,537,.75)+P('M299 729 L375 652 M395 630 L451 572','none','#B5A57C',4)+berries(778,527,.45),
 ()=>hill(false,'straight')+G(463,632,1,tortoise(0,0,1.24),-27)+mouse(277,752,1.33,'path','hold')+E(517,690,28,10,'#C3B38C'),
 ()=>hill(false,'straight')+[0,1,2,3,4].map(j=>stoneTile(347+j*41,676-j*49,.65)).join('')+tortoise(343,678,1.13,true)+mouse(652,749,1.39,'path','think')+stoneTile(534,753,.88),
 ()=>hill(false,'trace')+mouse(543,592,1.13,'path','hold')+berries(661,519,.87)+[748,790,834].map((x,j)=>leaf(x,590-j*12,.5,'#8CA778',-20)+E(x,551-j*12,12,11,'#A5869F')).join(''),
 ()=>hill(false,'trace')+mouse(699,484,1.15,'path','up')+berries(811,482,.64)+P('M489 442 L502 469','none','#B3A078',10)+grass(515,473,.6),
 ()=>hill(false,'curve')+tortoise(655,680,1.08)+mouse(330,751,1.36,'path','low')+leaf(502,708,.52,'#91AA80',69)+drop(519,700,.5)+drop(550,681,.45)+railing(722,583,.66),
 ()=>hill(false,'curve')+mouse(310,752,1.33,'path','low')+tortoise(777,708,1.06)+stoneTile(505,738,1.08)+stoneTile(630,713,.89)+stoneTile(745,678,.73)+railing(713,571,.83)+E(477,774,29,8,'#A7A077'),
 ()=>hill(true,'curve')+tortoise(662,628,.91)+mouse(482,719,1.11,'path','think')+stoneTile(789,614,.65)+grass(834,620,.88,'#789473')+E(376,734,10,8,'#E0E2C9'),
 ()=>hill(true,'curve')+mouse(358,746,1.22,'path','low')+tortoise(682,636,.91)+P('M428 715 Q447 687 470 716Z','#8E9D7C')+E(449,693,11,9,'#E2E5CE')+E(773,588,10,8,'#E2E5CE')+E(459,513,10,8,'#E2E5CE')+grass(491,721,.55,'#789473'),
 ()=>hill(true,'curve')+P('M0 673 Q430 548 1000 641 L1000 800 L0 800Z','#869B7C')+mouse(360,751,1.22,'path','hold')+tortoise(736,733,1.15)+berries(546,700,.82)+leaf(529,739,1.15,'#9EB78D',87)+[[430,568],[558,503],[656,539],[810,590],[278,561],[887,529]].map(([x,y])=>glow(x,y,32)+E(x,y,4,6,'#DDDF91')+E(x-4,y-6,4,7,'#B9D2AC')+E(x+4,y-6,4,7,'#B9D2AC')).join('')+[517,793,434,851].map((x,j)=>E(x,[539,467,411,345][j],7,6,'#DEE3CB')).join(''),
 ][i]();
}
function teahouse(){return room()+bamboo()+R(38,518,256,132,'#A3A78B',14)+R(27,506,278,23,'#BCAD84',5)+[0,1,2,3,4].map(j=>leaf(437+j*58,137,.55,'#95AB7F',j%2?15:-15)+line(437+j*58,0,437+j*58,82,'#B3B48D',3)).join('');}
function teapot(x,y,s=1){return G(x,y,s,E(0,-40,51,45,'#9EB6A3')+P('M41 -58 Q87 -73 92 -97 L100 -95 Q99 -54 49 -33Z','#9EB6A3')+P('M-43 -69 Q-93 -92 -89 -39 Q-80 -10 -49 -23','none','#88A38F',11)+E(0,-82,34,10,'#B7C9B1')+E(0,-96,8,9,'#9EB6A3'));}
function teacup(x,y,s=1,hot=false,fish=false){return G(x,y,s,P('M-39 -47 L-31 0 Q0 22 31 0 L39 -47Z',fish?'#9CBDB8':'#C8B688')+E(0,-47,39,12,fish?'#C4D5C5':'#D8C99F')+E(0,-48,30,7,'#BEA573')+(hot?P('M-13 -69 Q-31 -90 -13 -111 M13 -69 Q-5 -91 15 -116','none','#DDDCCD',4):'')+(fish?P('M-20 -18 Q-1 -34 18 -18 Q-1 -2 -20 -18 L-28 -29 L-28 -7Z','#749E9A')+E(9,-20,2,2,ink):''));}
function honey(x,y,s=1){return G(x,y,s,R(-35,-70,70,75,'#D0AE71',11)+R(-31,-83,62,19,'#B09263',6)+E(0,-42,23,18,'#E2C487')+flower(0,-22,.35,'#EBDDAB'));}
function spoon(x,y,s=1,rot=0){return G(x,y,s,line(-42,0,32,0,'#AA9473',9)+E(38,0,19,11,'#B6A17C'),rot);}
function bambooDish(x,y,s=1,wet=true){return G(x,y,s,P('M-103 -13 Q-97 25 0 30 Q96 25 103 -13Z','#B5AD7B')+E(0,-13,103,31,'#D2C794')+E(0,-15,90,23,wet?'#ACCDC3':'#E0D4AA')+P('M-75 10 L-72 22 M-47 17 L-45 27 M46 17 L45 27 M75 10 L73 22','none','#998F63',3));}
function frogSoak(x,y,s=1){return bambooDish(x,y,s,true)+frog(x+14*s,y-10*s,.83*s)+E(x+15*s,y-13*s,55*s,11*s,'#B9D7CA','opacity=".42"')+leaf(x-60*s,y-13*s,.41*s,'#94B488',75);}
function teaScene(i,cover){
 if(cover)return teahouse()+fox(310,751,1.38,false,'hold')+table(607,655,1.34)+teacup(487,602,.98,true)+frogSoak(714,616,1.05)+fox(863,746,.95,true,'hold');
 return [
 ()=>teahouse()+fox(358,750,1.46,false,'cup')+fox(801,746,1.35,true,'hold',true)+teacup(484,540,.8,true)+teapot(164,497,.75)+honey(620,687,.72),
 ()=>outdoors()+bamboo()+P('M0 666 Q405 508 1000 650 L1000 800 L0 800Z','#9DBFB5')+fox(333,744,1.38,false,'up')+G(711,525,1.75,leaf(0,0,1,'#8FAE7C',77))+frog(727,478,1.0,'jump')+acornBucket(421,720,.67,true),
 ()=>teahouse()+fox(322,752,1.39,false,'hold')+table(617,656,1.37)+teacup(571,606,1.15,true)+frog(800,602,1.0,'wave')+honey(436,611,.71)+spoon(488,556,.68,-22),
 ()=>teahouse()+fox(330,752,1.38,false,'hold')+table(629,654,1.3)+teacup(584,603,1.04,false)+frog(770,605,.99)+P('M637 543 L693 542','none','#ABC5B1',3)+spoon(450,607,.55,-9),
 ()=>teahouse()+fox(326,751,1.4,false,'point')+table(632,654,1.36)+teacup(574,605,1.16,false,true)+frog(788,607,1.04)+R(275,250,184,16,'#AEA27F',5)+teacup(364,246,.52,false,true),
 ()=>teahouse()+fox(326,752,1.43,false,'think')+table(642,655,1.3)+frog(837,575,1.04,'wave')+teacup(684,609,.88,false,true)+honey(530,611,.8)+spoon(504,499,.98,-15)+E(543,529,5,8,'#D1AE69')+E(541,552,4,7,'#D1AE69'),
 ()=>teahouse()+fox(332,751,1.31,false,'point')+fox(778,745,1.25,true,'up')+waterJar(792,715,.86)+rock(611,741,.6)+frog(602,679,.86,'jump')+P('M809 268 Q729 318 691 376','none','#C9D6BC',5),
 ()=>teahouse()+waterJar(809,719,1.0)+rock(619,735,.8)+E(617,698,73,17,'#A8C9BC')+frog(617,691,.99)+G(348,749,1,fox(0,0,1.3,false,'hold'),11)+drop(679,715,.41),
 ()=>teahouse()+rock(628,735,1.03)+E(636,686,101,23,'#A7C7BE')+frog(638,679,1.28)+fox(334,752,1.4,false,'think')+drop(730,696,.55)+waterJar(834,699,.74),
 ()=>outdoors()+bamboo()+fox(335,750,1.36,false,'hold')+table(642,653,1.33)+bambooDish(653,610,1.23,true)+leaf(620,592,.54,'#A0BC8D',80)+acornBucket(478,534,.8,true,31)+P('M496 504 Q535 522 553 580','none','#B1D1CA',6)+frog(868,714,.73),
 ()=>teahouse()+fox(327,752,1.39,false,'cup')+table(639,653,1.33)+teacup(447,550,.82,true)+frogSoak(720,607,1.18)+teapot(605,610,.56),
 ()=>teahouse()+fox(306,751,1.24,false,'hold')+fox(825,748,1.24,true,'hold')+table(565,654,1.18)+teacup(473,607,.81,true)+frogSoak(649,612,.92)+R(507,340,141,83,'#C7B58B',10)+G(544,404,.35,fox(0,0,.5,false,'hold'))+G(606,406,.39,frog(0,0,.8))+line(534,342,534,300,'#B0A27C',3)+line(619,342,619,300,'#B0A27C',3),
 ][i]();
}
const registry={'expansion-0022':nestScene,'expansion-0023':reflectionScene,'expansion-0024':chimeScene,'expansion-0025':pathScene,'expansion-0026':teaScene};
export function middleExtraArtwork(story,index,cover=false){
 const render=registry[story.id];if(!render)throw new Error(`No middle-extra storyboard: ${story.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==12)throw new Error(`Story ${story.id} requires twelve pages`);
 if(!Number.isInteger(index)||index<0||index>=12)throw new Error(`Invalid page ${index} for ${story.id}`);
 return svg(render(index,cover),`${story.title} · ${cover?'原创封面':story.pages[index].scene.action}`,cover);
}

import {E,R,P,G,line,leaf,grass,flower,cloud,svg} from '../render-illustrations.mjs';
// Original illustrations authored after full reading of the frozen 0409–0416 manuscripts.
const ink='#506258',cream='#EEE4CB',wood='#B59B72';
const eye=(x,y,closed=false)=>closed?P(`M${x-5} ${y} Q${x} ${y+5} ${x+5} ${y}`,'none',ink,2.5):E(x,y,4,5,ink);
const hand=(x,y,tx,ty,c,w=16)=>P(`M${x} ${y} Q${(x+tx)/2} ${ty+13} ${tx} ${ty}`,'none',c,w)+E(tx,ty,w*.53,w*.53,c);
function sack(x,y,s=1,c='#9DB38D'){return G(x,y,s,P('M-32 -38 Q0 -51 32 -38 L42 25 Q0 44 -42 25Z',c)+P('M-32 -35 Q0 -13 32 -35','none','#C2CDB0',3));}
function feather(x,y,s=1,r=0){return G(x,y,s,P('M0 0 Q-40 -64 -15 -143 Q8 -187 33 -161 Q60 -95 0 0Z','#D7CEB0')+P('M0 0 Q9 -92 11 -152 M5 -53 L-17 -78 M9 -78 L32 -105 M10 -105 L-8 -127','none','#B39F7D',3),r);}
function hat(x,y,s=1,plume=false,r=0){let z=P('M-46 -15 Q-43 -69 -4 -71 Q43 -70 46 -15Z',plume?'#A98D68':'#E7DFC5')+E(0,-13,69,12,plume?'#B69B73':'#ECE5CE');if(plume)z+=feather(19,-55,.50,22);return G(x,y,s,z,r);}
function pixie(name,x,y,s=1,o={}){
 const clay=name==='陶芽',purple=['芽铃','绵荠','芋芽'].includes(name),skin=clay?'#BA8469':'#CFBC96',q=o.sit?35:0,hy=-210+q,cl=name==='绵荠'||name==='芽铃'?'#B5A2BD':name==='芋芽'?'#B2A1BC':clay?'#A8BD92':'#EBE4CC',wings=['苔米','芽铃'].includes(name);
 let z=o.noShadow?'':E(0,0,68,12,'#84917A','opacity=".15"');
 if(wings)z+=E(-41,-132+q,34,66,'#E8EACF','opacity=".53" transform="rotate(-25 -41 '+(-132+q)+')"')+E(41,-132+q,34,66,'#E8EACF','opacity=".53" transform="rotate(25 41 '+(-132+q)+')"');
 z+=o.stoolSit?R(-28,-37,20,69,skin,7)+R(8,-37,20,69,skin,7)+E(-24,31,25,11,'#B79E7B')+E(24,31,25,11,'#B79E7B'):o.sit?E(-27,-10,29,13,'#B79E7B')+E(28,-10,29,13,'#B79E7B'):R(-28,-67,20,59,name==='芋芽'?'#E6DDC7':skin,7)+R(8,-67,20,59,name==='芋芽'?'#E6DDC7':skin,7)+E(-24,-7,25,11,'#AD9575')+E(24,-7,25,11,'#AD9575');
 if(['苔米','叶芽'].includes(name))z+=R(-37,-79+q,32,37,'#819B76',5)+R(5,-79+q,32,37,'#819B76',5);
 z+=P(`M-36 ${-164+q} Q0 ${-182+q} 36 ${-164+q} L${purple||clay?51:42} ${-58+q} L${purple||clay?-51:-42} ${-58+q}Z`,cl);
 if(name==='绵荠')z+=P(`M-50 ${-59+q} Q-31 ${-39+q} -15 ${-59+q} Q0 ${-36+q} 15 ${-59+q} Q32 ${-39+q} 50 ${-59+q}Z`,cl);
 if(!clay)z+=P(`M-45 ${hy-9} L-62 ${hy-27} L-46 ${hy-34} M45 ${hy-9} L62 ${hy-27} L46 ${hy-34}Z`,skin);
 z+=E(0,hy,48,46,skin)+eye(-18,hy-3,o.closed)+eye(18,hy-3,o.closed)+E(0,hy+14,6,5,clay?'#A3705C':'#A38B73')+P(o.sad?`M-10 ${hy+32} Q0 ${hy+24} 10 ${hy+32}`:`M-10 ${hy+29} Q0 ${hy+37} 10 ${hy+29}`,'none',clay?'#8D6352':'#8C785D',2.5);
 if(clay)z+=P(`M-49 ${hy-6} Q-52 ${hy-62} 0 ${hy-61} Q54 ${hy-59} 49 ${hy-5} L29 ${hy-28} L9 ${hy-20} L-12 ${hy-32} L-34 ${hy-21}Z`,'#976A55')+E(-42,hy-55,25,25,'#A77359')+E(42,hy-55,25,25,'#A77359');
 else if(['芽铃','绵荠'].includes(name))z+=Array.from({length:7},(_,j)=>E(-40+j*13,hy-33-Math.sin(j/6*Math.PI)*18,15,16,name==='芽铃'?'#A6BC91':'#AA8C66')).join('');
 else z+=P(`M-48 ${hy-5} Q-56 ${hy-60} 0 ${hy-59} Q54 ${hy-59} 48 ${hy-5} L31 ${hy-28} L11 ${hy-20} L-9 ${hy-30} L-33 ${hy-19}Z`,'#99B387');
 if(name==='苔米')z+=G(0,hy-45,1,P('M-59 5 Q-33 -52 28 -43 Q60 -27 55 7Z','#91AA79')+P('M-61 5 Q0 23 61 5 M-42 -4 Q4 -16 39 -29','none','#B4C599',7));
 if(name==='叶芽'&&!o.noHat)z+=hat(0,hy-35,1,true);
 const poses={rest:[[-32,-68+q],[32,-68+q]],hold:[[-15,-110+q],[15,-110+q]],wide:[[-83,-132+q],[83,-132+q]],think:[[-32,-70+q],[24,hy+24]],wave:[[-30,-68+q],[72,-245+q]],reach:[[-28,-71+q],[115,-130+q]]},a=o.arms||poses[o.pose||'rest'];
 if(o.arms!==false)z+=hand(-35,-147+q,...a[0],skin)+hand(35,-147+q,...a[1],skin);
 if(name==='绵荠'&&!o.noBag)z+=line(-30,-151+q,45,-59+q,'#87A47B',5)+sack(46,-53+q,.54,'#9EB58C');
 return G(x,y,s,z,o.rotate||0);
}
function critter(name,x,y,s=1,o={}){
 const pig=name==='麦团',fur=pig?'#D5B2A0':'#B99C77',q=o.sit?35:0,hy=-204+q,pjs=name==='枣绒';let z=o.noShadow?'':E(0,0,71,12,'#89957D','opacity=".15"');
 z+=pig?P('M37 -36 Q92 -4 81 -34 Q75 -49 61 -33 Q52 -16 76 -10','none','#CAA48F',6):P('M29 -16 Q113 27 120 -32','none',fur,6);
 z+=o.sit?E(-29,-10,29,13,fur)+E(29,-10,29,13,fur):R(-29,-55,22,45,fur,8)+R(8,-55,22,45,fur,8)+E(-24,-7,25,11,fur)+E(24,-7,25,11,fur);
 z+=E(0,-102+q,50,70,fur)+E(0,-86+q,31,46,cream)+P(`M-35 ${-151+q} L35 ${-151+q} L45 ${-54+q} L-45 ${-54+q}Z`,pjs?'#B7A5BD':'#85AAB7');
 if(pjs)z+=E(0,-125+q,6,6,'#BAA37D');else z+=R(-34,-161+q,13,40,'#85AAB7',4)+R(21,-161+q,13,40,'#85AAB7',4)+R(-24,-107+q,48,29,'#709DAA',5);
 z+=pig?P(`M-42 ${hy-29} L-53 ${hy-68} Q-25 ${hy-72} -23 ${hy-42} M24 ${hy-42} Q28 ${hy-72} 53 ${hy-66} L42 ${hy-27}Z`,fur):E(-37,hy-33,24,26,fur)+E(37,hy-33,24,26,fur)+E(-37,hy-33,12,14,'#D3B39A')+E(37,hy-33,12,14,'#D3B39A');
 z+=E(0,hy,51,46,fur)+eye(-19,hy-5,o.closed)+eye(19,hy-5,o.closed);
 if(pig)z+=E(0,hy+15,25,18,'#C59B8B')+E(-9,hy+15,3.6,4,'#987966')+E(9,hy+15,3.6,4,'#987966');else z+=E(0,hy+13,7,5,'#A18168')+[-1,1].map(k=>line(k*26,hy+18,k*61,hy+11,'#9E896C',1.8)+line(k*26,hy+25,k*62,hy+30,'#9E896C',1.8)).join('');
 z+=P(o.sad?`M-10 ${hy+34} Q0 ${hy+27} 10 ${hy+34}`:`M-10 ${hy+29} Q0 ${hy+37} 10 ${hy+29}`,'none','#8F775F',2.5);
 if(!pjs)z+=hat(0,hy-38,1,pig?false:false);
 const poses={rest:[[-32,-66+q],[32,-66+q]],hold:[[-16,-107+q],[16,-107+q]],think:[[-32,-70+q],[25,hy+24]],wide:[[-85,-130+q],[85,-130+q]],wave:[[-30,-68+q],[71,-242+q]],reach:[[-29,-70+q],[116,-131+q]]},a=o.arms||poses[o.pose||'rest'];if(o.arms!==false)z+=hand(-37,-141+q,...a[0],fur)+hand(37,-141+q,...a[1],fur);
 return G(x,y,s,z,o.rotate||0);
}
function stool(x,y,s=1){return G(x,y,s,R(-32,-3,13,63,wood,4)+R(20,-3,13,63,wood,4)+E(0,-10,49,16,'#CCB58A'));}
function dish(x,y,s=1){return G(x,y,s,E(0,0,70,20,'#C7CEB8')+E(0,-5,58,14,'#E9E4CD'));}
function table(y=641){return R(140,y,721,36,'#C8AD82',7)+R(171,y+29,23,146,wood,4)+R(808,y+29,23,146,wood,4);}
function room(kind='clay'){return R(0,0,1000,800,kind==='tea'?'#D1D7BD':kind==='work'?'#D5CDB7':'#DDCDB1',0)+R(0,660,1000,140,'#C5AF88',0)+[135,345,575,810].map(x=>line(x,660,x-38,800,'#AE9875',2)).join('')+R(553,86,335,346,'#AF9671',15)+R(572,104,298,309,'#BED2BE',6)+R(717,102,13,313,'#C7AD82',4)+R(569,256,304,13,'#C7AD82',4)+(kind==='tea'?Array.from({length:10},(_,j)=>line(579+j*30,104,579+j*30,242,'#9EB38C',7)).join('')+leaf(800,339,.68,'#96AD82',50):leaf(630,211,.7,'#A5BA8A',-41)+leaf(820,332,.64,'#A0B786',39));}
function book(x,y,s=1,open=true,kind='boat',r=0){let z=open?P('M0 -32 Q-37 -58 -84 -38 L-77 39 Q-27 22 0 45 Q27 22 77 39 L84 -38 Q37 -58 0 -32Z','#E8DFC5')+line(0,-29,0,41,'#B5AE91',3):R(-65,-41,130,82,'#8FA9AF',7)+R(-53,-36,106,72,'#DAD9BD',3)+R(-65,-41,13,82,'#71959D',3);
 if(open)z+=kind==='bear'?E(-45,-16,18,18,'#B39770')+E(-59,-30,8,8,'#B39770')+E(-31,-30,8,8,'#B39770')+R(-61,1,33,26,'#B8A7B9',4)+flower(-46,24,.19,'#E6D3AB')+E(-51,-19,2,3,ink)+E(-39,-19,2,3,ink)+line(22,-12,59,-12,'#ACB59C',2):kind==='tower'?R(-60,-12,35,39,'#BBA47C',3)+P('M-67 -12 L-42 -40 L-17 -12Z','#AAB38C')+[-12,1,14].map(yy=>line(22,yy,59,yy,'#ACB59C',2)).join(''):P('M-64 7 L-21 7 L-31 23 L-55 23Z','#AE9D78')+P('M-42 5 L-42 -28 L-18 5Z','#B7C6B6')+E(43,-17,11,11,'#D3CCA4');return G(x,y,s,z,r);}
function blanket(x,y,s=1,c='#B4BDA6',r=0){return G(x,y,s,P('M-106 -37 L95 -40 L114 42 L-111 42Z',c)+P('M-85 -21 Q0 5 78 -21 M-87 23 Q0 5 90 25','none','#D2D4B9',3),r);}
function cake(x,y,w=96,h=40){return G(x,y,1,R(-w/2,-h,w,h,'#D5AC6F',9)+E(0,-h,w/2,11,'#E4C38B')+[-.3,0,.3].map((k,j)=>E(k*w,-h+13+j%2*8,2.5,3,'#B99561')).join(''));}
function crumbs(x,y,count=4){return Array.from({length:count},(_,j)=>E(x+j*11,y+(j%2)*5,3.5,2.6,'#CDA36B')).join('');}
function spoon(x,y,s=1,r=0){return G(x,y,s,line(-44,0,25,0,'#B5B69A',6)+E(37,0,17,10,'#D4D2B6'),r);}
function teaBase(){return room('tea')+table(625)+sack(804,753,.73,'#B7AA82');}

function teaPix(name,x,y,s,o={}){return stool(x,y-46*s,s)+pixie(name,x,y-35*s,s,{...o,sit:true,stoolSit:true,...(o.arms?{arms:o.arms.map(([xx,yy])=>[xx,yy+35])}:{})});}
function proneCritter(name,x,y,s=1){const pig=name==='麦团',fur=pig?'#D5B2A0':'#B99C77';let z=E(-36,2,142,14,'#8B997D','opacity=".17"')+P('M-143 -28 Q-188 -4 -176 -38','none',fur,6)+E(-103,-31,63,34,fur)+E(-145,-9,34,13,fur)+E(-106,-8,30,13,fur)+E(-49,-36,74,38,'#85AAB7')+R(-77,-61,17,60,'#709DAA',5)+hand(-5,-31,35,-2,fur,16)+hand(39,-33,83,-1,fur,16);
 z+=pig?P('M19 -84 L13 -117 Q38 -120 42 -91 M75 -92 Q82 -119 105 -110 L99 -76Z',fur):E(23,-94,22,25,fur)+E(91,-94,22,25,fur)+E(23,-94,11,12,'#D3B39A')+E(91,-94,11,12,'#D3B39A');
 z+=E(59,-63,49,43,fur)+eye(42,-68)+eye(78,-68)+(pig?E(62,-47,24,16,'#C59B8B')+E(54,-47,3,4,'#987966')+E(70,-47,3,4,'#987966'):E(60,-48,6,5,'#A18168')+line(30,-45,1,-51,'#9E896C',2)+line(89,-45,117,-51,'#9E896C',2))+P('M50 -30 Q61 -22 73 -31','none','#8F775F',2.5)+hat(59,-102,.95);return G(x,y,s,z);}
function lounge(x,y,s=1,o={}){const skin='#CFBC96';let z=E(113,0,142,11,'#8A967C','opacity=".1"')+R(112,-33,92,20,'#E6DDC7',8)+R(112,-10,105,18,'#E6DDC7',8)+E(214,-22,13,22,'#AD9575')+E(226,-1,13,20,'#AD9575')+P('M25 -63 Q88 -62 129 -35 L127 12 Q75 8 20 -14Z','#B2A1BC')+P('M-34 -62 L-47 -77 L-30 -83 M35 -61 L48 -78 L32 -83Z',skin)+E(0,-51,43,40,skin)+eye(-16,-55)+eye(16,-55)+P('M-10 -30 Q0 -22 10 -30','none','#8C785D',2.5)+P('M-43 -52 Q-48 -101 0 -101 Q49 -99 43 -52 L27 -74 L9 -64 L-11 -76 L-29 -65Z','#99B387');
 if(o.reach)z+=hand(42,-39,87,-165,skin)+hand(61,-10,97,-30,skin)+book(99,-44,.54,false,'tower',5);
 else z+=hand(40,-41,61,-99,skin)+hand(85,-15,131,-96,skin)+book(96,-116,.55,true,'tower');return G(x,y,s,z);}
function leanGirl(x,y,s=1){const skin='#CFBC96';let z=E(-22,-8,74,15,skin)+E(-81,-4,32,13,'#AD9575')+P('M-65 -88 Q4 -102 76 -126 L99 -55 Q26 -16 -63 -22Z','#B5A2BD')+hand(36,-79,99,-58,skin)+hand(54,-95,139,-66,skin)+E(112,-128,43,40,skin)+eye(98,-132,true)+eye(128,-132,true)+P('M105 -108 Q117 -99 129 -108','none','#8C785D',2.5)+Array.from({length:7},(_,j)=>E(77+j*12,-156-Math.sin(j/6*Math.PI)*15,14,15,'#AA8C66')).join('')+sack(-11,-49,.49,'#9EB58C');return G(x,y,s,z);}
function lyingMouse(x,y,s=1,o={}){const fur='#B99C77';let z=P('M191 -13 Q234 6 227 -30','none',fur,6)+E(150,-11,62,24,fur)+E(194,-4,25,11,fur)+E(118,-16,74,30,'#B7A5BD')+E(55,-23,6,6,'#BAA37D')+hand(54,-12,21,3,fur,13)+E(-27,-55,22,25,fur)+E(29,-56,22,25,fur)+E(-27,-55,11,13,'#D3B39A')+E(29,-56,11,13,'#D3B39A')+E(0,-24,45,39,fur)+eye(-16,-29,o.closed)+eye(16,-29,o.closed)+E(0,-10,6,4,'#A18168')+P('M-9 1 Q0 9 9 1','none','#8F775F',2)+line(-24,-7,-54,-14,'#9E896C',2)+line(24,-7,54,-14,'#9E896C',2);return G(x,y,s,z);}

function cakePair(equal=false){return dish(438,607,.92)+dish(625,607,.92)+(equal?cake(438,597,94,34)+cake(603,597,42,32)+cake(640,598,39,29)+cake(620,576,36,24):cake(438,597,132,43)+cake(625,597,57,43));}
function cakeStory(i,cover){if(cover)return teaBase()+teaPix('苔米',296,749,1.14,{pose:'hold'})+teaPix('芽铃',769,749,1.14,{pose:'think'})+cakePair(true)+spoon(536,625,.63);return [
 ()=>teaBase()+teaPix('苔米',322,749,1.13,{arms:[[-14,-108],[131,-133]]})+teaPix('芽铃',766,749,1.11,{pose:'hold'})+dish(519,603,1.23)+cake(519,589,191,47),
 ()=>teaBase()+teaPix('苔米',298,749,1.13,{arms:[[-20,-108],[124,-136]]})+teaPix('芽铃',788,749,1.05,{pose:'hold'})+cakePair()+spoon(445,581,.72,-12),
 ()=>teaBase()+teaPix('苔米',294,749,1.12,{arms:[[-22,-106],[116,-136]]})+teaPix('芽铃',790,749,1.08,{arms:[[-101,-108],[-61,-108]],sad:true})+cakePair()+spoon(541,623,.62),
 ()=>teaBase()+teaPix('苔米',318,749,1.12,{arms:[[88,-119],[122,-116]],sad:true})+teaPix('芽铃',775,749,1.1,{arms:[[-134,-107],[25,-69]]})+cakePair()+spoon(543,622,.65),
 ()=>teaBase()+teaPix('苔米',319,749,1.12,{arms:[[-20,-108],[143,-158]]})+teaPix('芽铃',787,749,1.08,{pose:'hold'})+cakePair()+spoon(499,575,.67,-24),
 ()=>teaBase()+teaPix('苔米',355,749,1.1,{arms:[[-20,-108],[143,-145]]})+teaPix('芽铃',795,749,1.05,{pose:'think'})+cakePair(true)+spoon(551,588,.72,9)+cake(582,584,17,10)+crumbs(528,614,3),
 ()=>teaBase()+teaPix('苔米',353,749,1.13,{pose:'hold'})+teaPix('芽铃',708,749,1.12,{pose:'hold'})+dish(353,638,.84)+cake(353,627,92,33)+dish(708,638,.84)+cake(687,627,41,31)+cake(724,629,37,28)+cake(704,607,33,22)+spoon(535,625,.63),
 ()=>teaBase()+teaPix('苔米',356,749,1.13,{arms:[[-15,-106],[25,-175]]})+teaPix('芽铃',706,749,1.12,{arms:[[-24,-178],[17,-106]]})+dish(356,638,.84)+crumbs(345,632,2)+dish(706,638,.84)+cake(681,550,15,12)+E(384,550,3.5,3,'#CDA36B')
 ][i]();}

function horse(x,y,s=1,o={}){const c='#C3C6B8';let z=E(0,2,108,13,'#929F88','opacity=".15"');for(const [j,xx]of[-59,-25,31,61].entries())if(!(o.scratch&&j===0))z+=R(xx-9,-62,18,62,j%2?'#A9B3A5':c,7)+E(xx,-3,16,8,'#A4AF9F');z+=E(0,-73,86,45,c)+P('M-70 -60 L-96 -99 L-72 -131 L-25 -91Z',c)+E(-92,-112,32,37,c)+E(-113,-91,28,20,'#D3D4C7')+eye(-103,-119)+P('M-111 -143 L-116 -166 L-95 -151 M-80 -143 L-73 -163 L-67 -139Z',c)+P('M-65 -140 L-44 -110 M-57 -130 L-37 -107 M-49 -119 L-31 -101','none','#99A798',7)+P('M76 -92 Q119 -80 115 -48','none',c,11)+P('M115 -49 Q115 -34 104 -31','none','#80A8B8',13);if(o.scratch)z+=P('M-60 -62 Q-108 -65 -95 -121','none',c,15);if(o.nod)z=G(0,0,1,z,-9);return G(x,y,s,z);}
function cabinet(){return R(105,386,293,270,'#B59A74',10)+R(123,405,257,230,'#8F9C7F',5)+P('M123 405 L182 438 L182 635 L123 635Z','#C4AB82')+E(168,535,6,6,'#E0C89B');}
function clothHorse(x,y,s=1,dry=false){return G(x,y,s,P('M-146 10 Q-134 -20 -105 -20 Q-84 -94 -26 -72 Q13 -118 63 -53 Q114 -65 145 12 Q50 44 -146 10Z',dry?'#E9DFC5':'#B0BEB4')+P('M-104 -12 Q-67 -3 -62 21 M35 -69 Q44 -6 77 22','none',dry?'#C7C9AD':'#90ABA5',3)+(dry?[-90,-37,16,69,112].map(xx=>line(xx,-6,xx+4,20,'#C5C9AD',2)).join(''):'')+P('M138 1 Q165 -3 160 13','none','#83AABD',12));}
function horseStory(i,cover){if(cover)return room()+table(686)+pixie('陶芽',332,747,1.18,{arms:[[-20,-110],[127,-126]]})+horse(628,682,1.03)+blanket(790,672,.55,'#E9DFC5')+blanket(802,739,.35,'#B0BEB4');return [
 ()=>room()+cabinet()+blanket(251,616,.7)+pixie('陶芽',472,749,1.1,{sit:true,arms:[[-105,-117],[-56,-117]]})+horse(370,639,.58),
 ()=>room()+cabinet()+pixie('陶芽',405,749,1.15,{sit:true,arms:[[-22,-57],[62,-57]]})+horse(449,695,.61,{scratch:true})+blanket(688,738,.85),
 ()=>room()+blanket(650,739,1.3)+pixie('陶芽',343,749,1.15,{pose:'wide'})+horse(689,730,1,{nod:true}),
 ()=>room()+R(624,460,54,252,'#B8A078',5)+R(835,460,54,252,'#B8A078',5)+R(611,441,292,37,'#C8AF83',6)+P('M599 443 L756 337 L915 443Z','#A7B18B')+horse(707,723,.81)+E(480,729,42,41,'#C5A0A1')+P('M450 698 Q476 738 518 719','none','#E0CEBC',4)+pixie('陶芽',329,747,1.1,{pose:'think'}),
 ()=>room()+table(685)+blanket(618,675,2,'#C8C8AF')+dish(802,670,.62)+E(802,664,30,6,'#B0C6C2')+clothHorse(620,664,.9)+pixie('陶芽',330,747,1.14,{pose:'wide'}),
 ()=>room()+table(685)+blanket(618,675,2,'#C8C8AF')+dish(818,669,.61)+clothHorse(646,665,.86)+pixie('陶芽',373,747,1.14,{sit:true,closed:true,pose:'think'}),
 ()=>room()+table(685)+blanket(630,675,2,'#C8C8AF')+pixie('陶芽',350,747,1.15,{arms:[[-20,-107],[130,-128]]})+horse(590,682,1)+blanket(819,666,.46,'#B0BEB4'),
 ()=>room()+table(685)+blanket(821,667,.38,'#B0BEB4')+pixie('陶芽',358,747,1.15,{sit:true,pose:'think'})+clothHorse(638,667,.96,true)
 ][i]();}

function shore(){return R(0,0,1000,800,'#CDDCD1',0)+cloud(178,152,.9,'#E8E9D5')+cloud(821,122,.7,'#E8E9D5')+R(0,367,1000,180,'#A0BFC0',0)+P('M0 455 Q197 416 411 456 T1000 451 M15 506 Q235 473 450 509 T982 506','none','#E5EADD',5)+R(0,555,1000,245,'#D6C59C',0)+P('M0 554 Q244 534 1000 556','none','#EAE0BF',12);}
function sandPile(x,y,s=1){return G(x,y,s,P('M-57 8 Q-25 -28 -10 -10 Q13 -43 31 -10 Q51 -18 65 9Z','#C4AD7D')+[-30,-10,15,38].map((xx,j)=>E(xx,j%2?1:-6,2,2,'#A8966F')).join(''));}
function sandCastle(x=658,y=732,s=1,o={}){
 let back=R(-161,-229,322,204,'#BBA57A',14)+P('M-163 -220 Q0 -268 163 -220 L163 -193 Q0 -229 -163 -193Z','#D5BF91');
 if(o.window)back+=R(-72,-172,144,100,'#A5C1C0',4)+P('M-66 -113 Q-10 -139 66 -115','none','#E4E9D9',5)+R(-97,-188,194,18,'#AA9470',4)+(o.sandTop?sandPile(0,-192,.98):'');
 else if(o.hole)back+=E(-9,-129,o.hole===2?64:34,o.hole===2?48:29,'#A5C1C0')+sandPile(-6,-94,o.hole===2?.98:.57)+[[-18,-150],[9,-140],[21,-112]].map(([xx,yy])=>E(xx,yy,2.4,3,'#C9B383')).join('');
 if(o.low)back=R(-161,-177,84,152,'#C9B383',9)+R(77,-177,84,152,'#C9B383',9)+R(-161,-45,322,20,'#C9B383',4)+R(-97,-188,194,18,'#AA9470',4)+R(-72,-170,144,100,'#A5C1C0',0)+P('M-65 -116 Q0 -140 66 -116','none','#E5E9D9',4);
 if(o.low)back+=R(-88,-198,176,10,'#D5BF91',5);
 if(o.rear)return G(x,y,s,back+P('M-178 -25 Q0 4 178 -25','none','#BBA77A',10));
 return G(x,y,s,E(0,-8,264,32,'#BCA87C','opacity=".32"')+back+P('M-161 -25 L-121 0 L121 0 L161 -25Z','#AC9770')+P('M-161 -193 L-121 -160 L-121 0 L-161 -25Z','#AE9A70')+P('M161 -193 L121 -160 L121 0 L161 -25Z','#C0AA7B')+P('M-214 0 L-214 -171 Q-214 -245 -139 -247 L-117 -213 L-121 0Z','#D8C397')+P('M214 0 L214 -171 Q214 -245 139 -247 L117 -213 L121 0Z','#D8C397')+P('M-212 -176 Q0 -344 212 -176 L201 -139 Q0 -274 -201 -139Z','#D7C193')+E(-137,-114,17,24,'#E6E4D1')+E(137,-114,17,24,'#E6E4D1')+E(-132,-118,5,7,ink)+E(132,-118,5,7,ink)+P('M-69 6 Q0 37 69 6','none','#9F8D65',7));
}
function bucket(x,y,s=1,board=false){return G(x,y,s,P('M-67 -82 L67 -82 L49 22 Q0 43 -49 22Z','#B5C5B2')+E(0,-82,67,18,'#CAD4BF')+E(0,-82,54,12,'#94A895')+P('M-62 -75 Q-96 -175 0 -180 Q96 -175 62 -75','none','#9AAE9F',7)+(board?R(-96,-101,192,25,'#B79D72',5)+sandPile(9,-103,.69):''));}
function spade(x,y,s=1,r=0){return G(x,y,s,R(-6,-91,12,85,'#B19870',5)+P('M-22 -9 L22 -9 L20 26 Q0 51 -20 26Z','#C4AC81')+E(0,-106,17,14,'none','stroke="#B19870" stroke-width="6"'),r);}
function sandStory(i,cover){if(cover)return shore()+sandCastle(631,732,1.12,{window:true,sandTop:true})+critter('穗粒',300,751,1.1,{sit:true,pose:'hold'})+bucket(154,750,.58)+spade(221,750,.61,-36);return [
 ()=>shore()+sandCastle()+critter('穗粒',312,749,1.1,{sit:true,pose:'reach'})+bucket(183,748,.67)+spade(236,751,.65,-33),
 ()=>shore()+sandCastle(673,733,1.2,{rear:true,hole:1})+critter('穗粒',461,749,1.1,{arms:[[-20,-108],[174,-162]]})+bucket(225,746,.67),
 ()=>shore()+sandCastle(672,733,1.2,{rear:true,hole:2})+critter('穗粒',451,749,1.1,{arms:[[-20,-108],[146,-153]],sad:true})+spade(635,603,.68,-50)+bucket(225,746,.67),
 ()=>shore()+sandCastle(797,682,.58,{rear:true,hole:2})+critter('穗粒',332,751,1.12,{sit:true,arms:[[-20,-61],[151,-65]]})+bucket(559,748,1.1,true)+spade(751,746,.65,-42),
 ()=>shore()+sandCastle(707,730,1.03,{rear:true,hole:2})+critter('穗粒',400,750,1.14,{arms:[[-52,-141],[52,-141]]})+R(306,579,187,24,'#B79D72',5)+bucket(188,751,.7),
 ()=>shore()+sandCastle(678,732,1.2,{rear:true,low:true})+critter('穗粒',450,750,1.1,{arms:[[-20,-107],[130,-216]]})+spade(324,752,.7,-55)+bucket(202,751,.67),
 ()=>shore()+sandCastle(654,733,1.06,{window:true,sandTop:true})+critter('穗粒',302,751,1.13,{sit:true,pose:'wide'})+spade(202,750,.67,-71)+bucket(141,751,.61),
 ()=>shore()+sandCastle(655,733,1.06,{window:true,sandTop:true})+proneCritter('穗粒',343,750,.98)+bucket(133,753,.58)+spade(220,752,.63,-64)
 ][i]();}

function garden(){return R(0,0,1000,800,'#C8D8BF',0)+P('M0 440 Q267 367 520 448 Q739 354 1000 423 L1000 800 L0 800Z','#ACC29A')+R(0,655,1000,145,'#B7BF98',0)+[70,890].map(x=>P(`M${x} 662 Q${x+37} 315 ${x-10} 0 L${x+59} 0 Q${x+47} 333 ${x+91} 656Z`,'#A58F6B')).join('')+leaf(175,208,.8,'#9AB286',-47)+leaf(808,190,.8,'#9AB286',53)+grass(127,754,.7)+grass(914,748,.7)+flower(797,657,.65,'#B6A3BD')+flower(184,680,.52,'#B6A3BD');}
function brick(x,y,s=1,o={}){let z=P('M-108 -77 L65 -99 L112 -75 L-59 -49Z','#C7977C')+P('M-108 -77 L-59 -49 L-59 17 L-108 -10Z','#B87E66')+P('M-59 -49 L112 -75 L112 -8 L-59 17Z','#BF866D')+eye(-13,-30,o.closed)+eye(56,-40,o.closed)+P(o.talk?'M2 -13 Q28 -29 52 -21 Q35 6 10 -1Z':'M5 -11 Q28 1 51 -19','none','#815F50',3);const a=o.arms||[[-115,-16],[129,-38]];z+=hand(-80,-35,...a[0],'#BA8065',9)+hand(106,-40,...a[1],'#BA8065',9);if(o.bed)z+=P('M-91 -81 Q-2 -111 87 -82 Q32 -54 -50 -57Z','#B3B98A')+P('M-68 -77 Q-2 -81 65 -82','none','#D2D3AE',2)+E(-68,-69,29,15,'#D7B6AF');return G(x,y,s,z);}
function pot(x,y,s=1){return G(x,y,s,P('M-91 -112 L91 -112 L67 20 L-67 20Z','#C19B7B')+E(0,-112,96,25,'#D4B08B')+E(0,-115,79,17,'#8B8669')+P('M-64 -72 L59 -73','none','#D2B08A',5));}
function leafBoat(x,y,s=1){return G(x,y,s,blanket(0,-3,1.63,'#94B9BB')+brick(0,0,1,{arms:[[-134,-52],[143,-58]],talk:true})+leaf(-135,-42,.52,'#9BB384',-45)+leaf(145,-54,.52,'#A8BC8C',55));}
function brickStory(i,cover){if(cover)return garden()+leafBoat(652,724,1.13)+pixie('绵荠',354,747,1.18,{sit:true,arms:[[-22,-58],[153,-113]]})+pot(807,637,.5);return [
 ()=>garden()+brick(675,724,1.04,{arms:[[-128,-93],[137,-100]]})+pixie('绵荠',364,748,1.15,{sit:true,pose:'hold'}),
 ()=>garden()+brick(675,724,1.04,{talk:true})+[-1,0,1].map((j)=>leaf(674+j*66,749,1.63,j===0?'#B4B68B':'#A6AA79',j*19-8)).join('')+pixie('绵荠',344,747,1.13,{pose:'wave'}),
 ()=>garden()+brick(695,699,1.02,{arms:[[-7,-12],[36,-20]],closed:true})+pot(620,725,.88)+pixie('绵荠',326,748,1.16,{arms:[[-119,-170],[28,-69]]}),
 ()=>garden()+pot(825,700,.58)+brick(645,724,1.05)+leaf(649,640,.94,'#B7BA8D',81)+pixie('绵荠',365,748,1.16,{sit:true,pose:'think'}),
 ()=>garden()+brick(675,722,1.12,{bed:true})+pixie('绵荠',412,748,1.16,{sit:true,arms:[[-20,-60],[155,-84]]})+pot(838,696,.53),
 ()=>garden()+brick(698,721,1.1,{bed:true,talk:true})+leanGirl(503,775,.91)+pot(853,695,.48),
 ()=>garden()+leafBoat(656,722,1.08)+pixie('绵荠',348,748,1.14,{sit:true,pose:'wide'})+leaf(829,724,.53,'#B7BA8D',84)+E(849,723,19,10,'#D7B6AF'),
 ()=>garden()+leafBoat(670,724,1.13)+pixie('绵荠',454,747,1.15,{sit:true,arms:[[-22,-60],[153,-109]]})+line(630,622,630,646,'#CFBC96',9)+leaf(834,737,.49,'#B7BA8D',84)+E(852,735,17,9,'#D7B6AF')
 ][i]();}

function block(x,y,w=76,h=51,o={}){return G(x,y,1,R(-w/2,-h,w,h,'#C8AD7E',5)+P(`M${-w/2+6} ${-h+6} L${w/2-7} ${-h+6} M${-w/2+9} -7 L${w/2-9} -7`,'none','#DEC494',2)+(o.face===false?'':eye(-12,-h*.51,o.closed)+eye(12,-h*.51,o.closed)+P(`M-7 ${-h*.28} Q0 ${-h*.17} 7 ${-h*.28}`,'none','#927B56',2)));}
function blockBasket(x,y,s=1,empty=false){return G(x,y,s,P('M-94 -61 L94 -61 L75 25 Q0 57 -75 25Z','#B99A6F')+E(0,-61,94,24,'#D0B58A')+E(0,-63,79,16,'#938466')+(empty?'':block(-34,-64,60,46)+block(32,-65,61,53)+block(2,-111,63,48))+[-63,-30,0,30,63].map(xx=>line(xx,-36,xx*.8,24,'#DEC79D',3)).join(''));}
function workroom(){return room('work')+R(43,721,912,41,'#C0A57A',7)+R(81,759,29,41,'#A98F69',3)+R(893,759,29,41,'#A98F69',3)+P('M83 705 Q425 679 917 702 M98 683 Q389 654 902 679','none','#DBC39A',3);}
function tower(x=662,y=714,o={}){
 const wide=o.wide,w=wide?446:228,h=o.low?215:377,side=68,inner=w-2*side;
 let z=R(x-w/2+side,y-h+12,inner,h-12,'#A6A58B',0);
 for(const k of[-1,1])for(let row=0;row<Math.ceil(h/53);row++)z+=block(x+k*(w/2-side/2),y-row*53,side-2,51,{closed:o.sleep&&row===0});
 if(o.roof==='half')for(let j=0;j<3;j++)z+=block(x-w/2+42+j*73,y-h+1,72,43);
 if(o.roof==='flat')for(let j=0;j<6;j++)z+=block(x-w/2+36+j*74,y-h+1,73,43,{closed:o.sleep&&j===0});
 if(o.roof==='point')z+=P(`M${x-w/2-18} ${y-h} L${x} ${y-h-115} L${x+w/2+18} ${y-h}Z`,'#BEA473')+eye(x-15,y-h-39)+eye(x+15,y-h-39)+P(`M${x-9} ${y-h-23} Q${x} ${y-h-15} ${x+9} ${y-h-23}`,'none','#927B56',2);
 return z;
}
function ladder(x,y,s=1){return G(x,y,s,line(-41,0,-28,-252,'#AA916A',12)+line(41,0,28,-252,'#AA916A',12)+[-26,-79,-132,-185,-237].map(yy=>line(-38-yy*.04,yy,38+yy*.04,yy,'#CCB386',9)).join(''));}
function houseStory(i,cover){if(cover)return workroom()+tower(669,714,{wide:true,low:true,roof:'flat',sleep:true})+blanket(646,706,1.29,'#AFC0AC')+pixie('芋芽',351,713,1.06,{pose:'hold'})+book(351,601,.6,true,'tower')+blockBasket(189,711,.52,true)+ladder(258,711,.48);return [
 ()=>workroom()+blockBasket(628,705,1.37)+pixie('芋芽',344,713,1.05,{pose:'hold'})+book(344,601,.57,false,'tower'),
 ()=>workroom()+tower(675,714,{roof:'point'})+pixie('芋芽',432,713,1.02,{arms:[[-20,-104],[133,-251]]})+block(567,456,74,51)+book(345,698,.69,true,'tower')+blockBasket(179,710,.62),
 ()=>workroom()+tower(635,714,{roof:'point'})+pixie('芋芽',635,705,.74,{sit:true,pose:'hold',sad:true,noShadow:true})+book(635,643,.85,true,'tower'),
 ()=>workroom()+tower(604,714,{wide:true,roof:'half'})+pixie('芋芽',603,710,.86,{pose:'hold',sad:true,noShadow:true})+block(603,620,70,49)+blockBasket(899,708,.66,true)+book(289,705,.58,false,'tower'),
 ()=>workroom()+tower(606,714,{wide:true,roof:'half'})+lounge(505,701,.92,{reach:true})+block(854,710,72,48)+blockBasket(229,713,.59,true),
 ()=>workroom()+tower(594,714,{wide:true,low:true})+ladder(816,716,.88)+pixie('芋芽',795,644,.79,{arms:[[-110,-216],[29,-67]],noShadow:true})+block(710,477,72,51)+[0,1,2].map(j=>block(316+j*76,708,74,49)).join('')+block(355,658,72,48)+book(219,711,.52,false,'tower'),
 ()=>workroom()+tower(633,714,{wide:true,low:true,roof:'flat'})+blanket(527,706,1.09,'#AFC0AC')+pixie('芋芽',373,712,.98,{arms:[[-20,-108],[103,-32]]})+book(364,607,.51,false,'tower')+blockBasket(143,714,.5,true)+ladder(222,714,.58),
 ()=>workroom()+tower(632,714,{wide:true,low:true,roof:'flat',sleep:true})+blanket(619,706,1.29,'#AFC0AC')+lounge(526,695,.92)+blockBasket(218,713,.56,true)+ladder(293,714,.46)
 ][i]();}

function pillow(x,y,s=1,o={}){return G(x,y,s,P('M-108 -67 Q0 -43 108 -67 Q86 0 108 66 Q0 42 -108 66 Q-85 0 -108 -67Z','#E9E1CA')+P('M-82 -36 Q-66 -46 -50 -36 M27 -38 Q44 -48 61 -38','none','#9CA496',4)+eye(-65,-20,o.closed)+eye(46,-22,o.closed)+P('M-35 15 Q-6 36 23 15','none','#9AA18F',3)+(o.tear?P('M-74 -3 Q-82 8 -74 13 Q-66 9 -74 -3Z','#9EBCC0'):'') );}
function bed(){return R(227,648,637,60,'#C5A87B',10)+R(252,699,24,73,'#AC9169',5)+R(807,699,24,73,'#AC9169',5)+R(224,528,25,162,'#BDA174',7)+R(841,570,25,121,'#BDA174',7)+R(250,626,588,35,'#E2D9BC',12);}
function bedroom(){return room('clay')+P('M535 459 Q516 217 544 63 M906 461 Q930 224 902 58','none','#B49C78',27)+leaf(634,219,.83,'#9BB782',-34)+leaf(818,331,.76,'#A7BB87',36);}
function peach(x,y,s=1,o={}){let z=P('M0 -99 C-51 -135 -116 -74 -89 -6 Q-67 54 0 77 Q70 49 94 -9 C117 -75 51 -133 0 -99Z','#D9A58A')+P('M1 -97 Q-20 -20 2 65','none','#BA8F79',3)+leaf(11,-93,.45,'#9EAF80',65);if(o.face)z+=eye(-31,-26,o.closed)+eye(31,-26,o.closed)+P('M-17 5 Q0 20 17 5','none','#9E7B66',3);if(o.offer)z+=hand(-77,-20,-180,-38,'#D9A58A',9);return G(x,y,s,z);}
function peachSlice(x,y,s=1,r=0){return G(x,y,s,P('M-39 -16 Q0 49 40 -15 Q0 9 -39 -16Z','#E4BD92')+P('M-39 -16 Q0 49 40 -15','none','#CD9D82',4),r);}
function dreamPatch(x=624,y=248,s=1,seated=false){return G(x,y,s,E(0,0,261,147,'#E2E7CE','opacity=".88"')+P('M-236 64 Q0 12 235 63 Q0 141 -236 64Z','#B5C598')+P('M-139 65 Q-147 -9 -140 -93','none','#AA9774',15)+leaf(-181,-74,.62,'#A3BA8B',-55)+leaf(-112,-76,.71,'#A6BD8C',54)+dish(78,70,.75)+(seated?peach(79,32,.51,{face:true}):peach(166,44,.5,{face:true}))+E(-167,173,17,13,'#D9DFCA')+E(-187,205,9,8,'#D9DFCA'));}
function dreamGarden(){return garden()+P('M677 682 Q649 364 707 129','none','#A88E6D',41)+leaf(608,209,1.19,'#A7BC8B',-64)+leaf(802,203,1.25,'#A2B987',62)+peach(588,290,.3)+peach(811,306,.27);}
function dreamStory(i,cover){if(cover)return dreamGarden()+critter('枣绒',333,746,1.2,{sit:true,pose:'hold'})+dish(700,737,1.2)+peach(700,645,.9,{face:true,closed:true})+peachSlice(333,660,.54);return [
 ()=>bedroom()+bed()+pillow(738,596,.79,{closed:true})+critter('枣绒',435,651,1.04,{sit:true,pose:'think',sad:true,noShadow:true})+blanket(668,646,1.34,'#C4B6BC'),
 ()=>bedroom()+bed()+pillow(484,590,.89,{closed:true,tear:true})+lyingMouse(563,622,.9)+blanket(724,631,.96,'#C4B6BC'),
 ()=>bedroom()+bed()+pillow(719,592,.94)+critter('枣绒',425,651,1.04,{sit:true,arms:[[-26,-72],[28,-148]],noShadow:true})+blanket(535,647,.86,'#C4B6BC'),
 ()=>bedroom()+bed()+pillow(584,507,.85)+critter('枣绒',458,654,1.05,{sit:true,arms:[[-26,-34],[30,-37]],noShadow:true})+blanket(699,647,1.06,'#C4B6BC'),
 ()=>bedroom()+bed()+pillow(484,590,.86)+lyingMouse(562,623,.9)+blanket(719,635,1.05,'#C4B6BC')+dreamPatch(573,220,.91,false),
 ()=>bedroom()+bed()+pillow(484,590,.86,{closed:true})+lyingMouse(562,623,.9,{closed:true})+blanket(719,635,1.05,'#C4B6BC')+dreamPatch(573,220,.91,true),
 ()=>dreamGarden()+critter('枣绒',339,746,1.2,{sit:true,arms:[[-20,-61],[154,-114]]})+dish(704,736,1.25)+peach(704,643,.9,{face:true,offer:true})+peachSlice(532,610,.67,-10)+E(284,566,3,5,'#9EBCC0')+E(395,565,3,5,'#9EBCC0'),
 ()=>bedroom()+bed()+pillow(721,590,.95,{closed:true})+critter('枣绒',422,650,1.05,{sit:true,arms:[[-25,-152],[187,-118]],noShadow:true})+blanket(567,648,.84,'#C4B6BC')
 ][i]();}

function meadow(porch=false){return R(0,0,1000,800,'#D2DDD0',0)+P('M0 418 Q246 328 514 427 Q719 325 1000 414 L1000 800 L0 800Z','#AFC69C')+R(0,637,1000,163,'#BCC59E',0)+grass(105,749,.77)+grass(910,743,.72)+flower(803,673,.51,'#E7D8B6')+(porch?R(0,612,569,188,'#CFBA92',0)+[150,320,480].map(x=>line(x,614,x-20,800,'#B6A17D',2)).join('')+R(56,137,35,484,'#AC9471',5)+R(0,127,333,30,'#B9A17B',5):'');}
function silverDots(){return [[-28,-78],[-2,-101],[21,-75],[-39,-43],[-10,-58],[12,-33],[36,-46],[-24,-17],[8,-10]].map(([xx,yy],j)=>E(xx,yy,j%2?3:4,j%2?4:3,'#E4E5D6')).join('');}
function egg(x,y,s=1,r=0){return G(x,y,s,P('M0 -125 C-53 -125 -81 -40 -54 -7 Q0 34 54 -7 C81 -40 53 -125 0 -125Z','#B3BEB0')+silverDots(),r);}
function cushion(x,y,s=1){return G(x,y,s,E(0,0,119,26,'#C9B879')+E(0,-10,117,25,'#DECE96')+P('M-101 -7 Q0 22 101 -7','none','#E9DBAD',3));}
function turtle(x,y,s=1){let z=[[-65,0],[-30,19],[32,19],[66,0]].map(([xx,yy],j)=>E(xx,yy,15,11,j%2?'#A8B4A6':'#B8C1B0')).join('')+E(0,-27,65,43,'#ACB9A6')+P('M-48 -39 Q0 -74 48 -39','none','#CAD3BD',3)+E(-66,-28,28,23,'#C4CCBC')+eye(-73,-35)+eye(-58,-36)+P('M-76 -17 Q-66 -10 -56 -18','none','#8E9D88',2)+G(0,15,.8,silverDots());return G(x,y,s,z);}
function shell(x,y,s=1){return G(x,y,s,P('M-87 -30 L-63 -49 L-40 -32 L-17 -46 L-2 -18 Q-35 35 -83 1Z','#C3CCBB')+P('M36 -61 L56 -83 L74 -60 L98 -74 Q121 -14 67 9 L31 -13Z','#B8C4B2')+E(-62,-4,4,3,'#E3E6D5')+E(82,-39,4,3,'#E3E6D5'))}
function stoneStory(i,cover){if(cover)return meadow()+cushion(337,749,1.05)+critter('麦团',337,745,1.18,{sit:true,pose:'hold'})+turtle(691,742,1.24)+shell(827,733,.55);return [
 ()=>meadow(true)+critter('麦团',409,749,1.12,{sit:true,pose:'hold'})+egg(663,742,.96)+grass(711,744,.61),
 ()=>meadow(true)+cushion(622,736,1.12)+egg(706,707,.87,18)+critter('麦团',462,749,1.1,{arms:[[-20,-107],[172,-62]]})+stool(252,702,.73),
 ()=>meadow(true)+stool(368,729,.84)+critter('麦团',368,733,1.13,{sit:true,arms:[[-33,-75],[32,-76]]})+egg(368,653,.7,8)+cushion(686,740,.93),
 ()=>meadow(true)+cushion(657,731,1.04)+block(657,688,168,50,{face:false})+egg(657,707,.9)+block(796,716,76,73,{face:false})+block(655,771,127,50,{face:false})+critter('麦团',346,748,1.12,{arms:[[-20,-107],[145,-55]]})+block(489,687,67,60,{face:false}),
 ()=>meadow(true)+cushion(400,704,.88)+block(207,739,85,54,{face:false})+block(250,684,73,50,{face:false})+egg(672,746,.94,-18)+critter('麦团',433,748,1.12,{sit:true,pose:'think'}),
 ()=>meadow()+cushion(382,748,1.04)+critter('麦团',382,744,1.14,{sit:true,pose:'think'})+egg(703,745,.96,8)+[[169,739],[201,754],[221,731]].map(([xx,yy],j)=>E(xx,yy,14+j*2,10,'#A5B39A')).join(''),
 ()=>meadow()+cushion(344,748,1.05)+critter('麦团',344,744,1.14,{sit:true,arms:[[-28,-30],[28,-30]]})+shell(694,741,1.05)+turtle(686,739,.87),
 ()=>meadow()+cushion(199,745,.75)+shell(288,738,.7)+proneCritter('麦团',493,746,1.02)+turtle(774,741,1.07)+leaf(682,711,.35,'#A4BB89',-24)
 ][i]();}

function tunnel(o={}){const base=R(0,0,1000,800,'#BACDAD',0)+P('M34 800 L34 391 Q32 101 500 106 Q968 101 966 391 L966 800Z','#AD9470')+P('M214 800 L214 491 Q214 330 500 330 Q786 330 786 491 L786 800Z','#8F8468')+P('M244 800 L244 500 Q244 363 500 363 Q756 363 756 500 L756 800Z','#96A388')+R(246,693,508,107,'#B9B08C',0)+P('M79 650 Q103 386 226 277 M911 650 Q885 386 765 277 M110 394 Q501 44 890 394 M137 376 Q500 90 863 376','none','#C5AB81',7)+E(161,532,34,40,'#C3B18B')+E(839,532,34,40,'#C3B18B')+eye(166,531,o.laugh)+eye(834,531,o.laugh)+P(o.laugh?'M102 697 Q500 835 898 697 Q500 787 102 697Z':'M102 709 Q500 814 898 709','none','#806F55',6)+grass(94,773,.71)+grass(902,772,.7);return base;}
function tunnelStory(i,cover){if(cover)return tunnel()+pixie('叶芽',412,749,1.16,{noHat:true,arms:[[-18,-111],[160,-130]]})+book(391,617,.58,false)+hat(608,625,.83,true,53);return [
 ()=>tunnel()+pixie('叶芽',303,749,.95,{pose:'hold'})+book(303,644,.55,false),
 ()=>tunnel({laugh:true})+pixie('叶芽',505,749,1.06,{pose:'hold'})+book(505,627,.75,true,'bear')+P('M403 605 L390 596 M599 611 L613 602','none','#B6C2A7',4),
 ()=>tunnel({laugh:true})+pixie('叶芽',508,749,1.06,{pose:'hold'})+book(508,627,.75,true,'boat'),
 ()=>tunnel({laugh:true})+pixie('叶芽',504,749,1.06,{arms:[[-27,-93],[85,-206]]})+book(472,649,.58,false,undefined,84),
 ()=>tunnel()+pixie('叶芽',503,749,.97,{sit:true,arms:[[-30,-76],[90,-25]]})+book(473,663,.54,false,undefined,83)+[-1,0,1].map(j=>E(615+j*20,747+j%2*6,3,2,'#91896A')).join(''),
 ()=>tunnel()+pixie('叶芽',463,749,1.06,{noHat:true,arms:[[-29,-95],[133,-197]]})+book(432,648,.58,false,undefined,84)+hat(618,550,.67,true,70),
 ()=>tunnel()+pixie('叶芽',500,749,1.06,{noHat:true,pose:'hold'})+book(500,627,.75,true,'boat')+hat(688,746,.65,true,57),
 ()=>tunnel()+pixie('叶芽',499,749,1.06,{sit:true,noHat:true,pose:'hold'})+book(499,674,.65,false)+hat(688,746,.65,true,57)
 ][i]();}

const scenes={409:cakeStory,410:horseStory,411:sandStory,412:brickStory,413:houseStory,414:dreamStory,415:stoneStory,416:tunnelStory};
export function eleventhYoungLastArtwork(story,index,cover=false){
 const n=Number(typeof story?.id==='string'?story.id.replace('expansion-',''):NaN);
 if(!scenes[n]||story.id!==`expansion-${String(n).padStart(4,'0')}`)throw Error('Unsupported story');
 if(story.status!=='text-ready'||story.ageBand!=='3-5'||story.provenance?.review!=='full-text-reviewed'||!Array.isArray(story.pages)||story.pages.length!==8||story.pages.some((p,j)=>p?.id!==`p${String(j+1).padStart(2,'0')}`||typeof p.text!=='string'||!p.text.trim()||typeof p.scene?.action!=='string'||!p.scene.action.trim())||!Number.isInteger(index)||index<0||index>=8||typeof cover!=='boolean')throw Error('Reviewed text-ready age 3–5 eight-page story and valid index required');
 return svg(scenes[n](index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

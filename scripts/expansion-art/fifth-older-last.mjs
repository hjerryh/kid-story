// Original scene-specific vector masters for the reviewed stories 0196–0200.
import {E,R,P,G,line,leaf,cloud,flower,evergreen,table,stool,book,basket,gear,svg} from '../render-illustrations.mjs';
import {room,outdoors} from './middle.mjs';
const ink='#41584F', cream='#F1EBD6', snow='#ECF2E8', skin='#D8B492';
const arm=(x,y,dx,dy,c,w=17)=>P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.25-8} ${x+dx} ${y+dy}`,'none',c,w);
const bag=(x,y,s=.7,c='#C8B891')=>G(x,y,s,R(-32,-34,64,66,c,8)+P('M-29 -33 Q0 -60 29 -33','none',c,7)+line(-30,-9,30,-9,'#A89C7D',3));
const cup=(x,y,s=.6)=>G(x,y,s,R(-23,-39,46,55,'#A6BCB2',6)+E(0,-39,23,7,cream)+P('M23 -29 Q50 -32 43 -8 Q36 3 23 -1','none','#A6BCB2',7));
const bowl=(x,y,s=.8,water=true,stone=false)=>G(x,y,s,P('M-52 -14 Q-39 35 0 36 Q39 35 52 -14Z','#A8B6AC')+E(0,-14,52,16,cream)+(water?E(0,-15,43,10,'#A2C4C2'):'')+(stone?E(9,-20,18,11,'#8C9C8B'):''));
const stone=(x,y,s=1)=>G(x,y,s,P('M-29 4 Q-30 -20 -4 -27 Q23 -31 34 -7 L27 7Z','#A1AE9C'));
const paper=(x,y,s=1,art='',rot=0)=>G(x,y,s,R(-81,-55,162,110,cream,3)+art,rot);
const pencil=(x,y,s=.7,rot=-20)=>G(x,y,s,R(-3,-37,6,68,'#AE8A5C',2)+P('M-3 31 L3 31 L0 41Z',ink),rot);
const bread=(x,y,s=.7)=>G(x,y,s,P('M-35 11 Q-49 -38 0 -43 Q45 -38 35 11Z','#C8A365')+[-17,0,17].map(xx=>line(xx,-29,xx-6,-8,'#ECD2A0',4)).join(''));
const comb=(x,y,s=.7)=>G(x,y,s,R(-27,-15,54,13,'#B89D71',4)+[-23,-15,-7,1,9,17,25].map(xx=>R(xx,-3,4,23,'#B89D71',2)).join(''));
const ruler=(x,y,s=.7,rot=0)=>G(x,y,s,R(-8,-61,16,122,'#C5AC7B',3)+[-48,-32,-16,0,16,32,48].map(yy=>line(-7,yy,yy%32?1:5,yy,'#8D8267',2)).join(''),rot);
function person(x,y,s=1,who='mai',pose='hold',sit=false){
 const coat={mai:'#7D9CA6',su:'#547E6E',lan:'#829D99',dong:'#627E99',frost:'#587F71'}[who];const hair=who==='frost'?'#E4E9E0':who==='mai'?'#5D594D':'#46554F';let a=E(0,0,62,10,ink,'opacity=".11"');
 a+=sit?P('M-19 -60 L-49 -31 L-55 -6 M19 -60 L48 -31 L54 -6','none',who==='mai'?'#A48269':'#9BA8A0',21):R(-29,-74,21,64,who==='mai'?'#A48269':'#9BA8A0',5)+R(8,-74,21,64,who==='mai'?'#A48269':'#9BA8A0',5);
 a+=E(sit?-55:-20,-5,23,10,'#8D816D')+E(sit?54:19,-5,23,10,'#8D816D');a+=P(who==='frost'?'M-37 -160 L37 -160 L74 -55 Q0 -33 -74 -55Z':'M-38 -164 L38 -164 L48 -52 Q0 -42 -48 -52Z',coat)+line(0,-156,0,-55,'#B0BDA9',3);
 a+=E(0,-218,55,58,hair)+R(-53,-220,106,41,hair,15)+E(0,-211,47,47,skin)+P('M-50 -222 Q-49 -275 0 -274 Q51 -270 51 -222 Q20 -231 7 -245 Q-16 -220 -50 -222Z',hair);
 if(who==='su')a+=P('M-39 -205 Q-66 -185 -55 -164 M39 -205 Q65 -185 53 -166','none',hair,11);
 a+=pose==='sleep'?P('M-25 -212 q8 7 16 0 M9 -212 q8 7 16 0','none',ink,2):E(-17,-212,3.5,5,ink)+E(17,-212,3.5,5,ink);a+=P(pose==='sad'?'M-10 -182 Q0 -190 10 -182':'M-10 -186 Q0 -176 10 -186','none','#967762',2);
 if(who==='frost')a+=[-12,0,12].map(xx=>E(xx,-199,2,2,'#83ADB6')).join('')+ruler(48,-70,.43,12);
 if(who==='dong')a+=P('M-41 -162 Q0 -143 41 -164 L42 -144 Q0 -127 -41 -144Z','#B07D68')+R(23,-145,20,63,'#B07D68',4);
 if(who==='su')a+=comb(44,-56,.5);
 if(who==='lan')a+=line(-33,-159,40,-60,'#C1B897',5)+bag(42,-64,.6);
 const l=pose==='press'?[-75.35,73.1]:pose==='open'?[-55,17]:pose==='touchleft'?[-123,39]:pose==='stop'?[-18,-46]:[25,42];const r=pose==='draw'?[116,47]:pose==='point'?[120,-10]:pose==='reach'?[154,8]:pose==='open'?[55,17]:[-25,42];
 a+=arm(-37,-141,...l,coat)+arm(37,-141,...r,coat)+E(-37+l[0],-141+l[1],10,10,skin)+E(37+r[0],-141+r[1],10,10,skin);return G(x,y,s,a);
}
function critter(x,y,s=1,kind='islander',pose='hold',sit=false){const c={islander:'#E9EFE4',badger:'#9A9B86',mouse:'#BEAA83',squirrel:'#A88264'}[kind],coat={islander:'#5A826F',badger:'#7398AA',mouse:'#B17E67',squirrel:'#9B86A3'}[kind];let a=E(0,0,55,8,ink,'opacity=".11"');
 if(kind==='squirrel')a+=P('M31 -28 Q123 -28 107 -154 Q77 -215 49 -170 Q24 -139 68 -103 Q96 -62 30 -47Z',c);
 if(kind==='mouse')a+=P('M30 -24 Q87 4 84 -53','none','#8F765C',9);
 a+=sit?P('M-20 -54 L-46 -20 M20 -54 L47 -20','none',c,18):R(-29,-65,20,60,c,5)+R(9,-65,20,60,c,5);a+=E(sit?-47:-21,-9,23,9,c)+E(sit?47:21,-9,23,9,c);
 a+=P('M-35 -125 L35 -125 L45 -38 Q0 -23 -45 -38Z',coat)+line(0,-119,0,-36,cream,2)+E(-41,-188,23,27,c)+E(41,-188,23,27,c)+E(-42,-188,12,15,'#D4BAA2')+E(42,-188,12,15,'#D4BAA2')+E(0,-157,53,49,c);
 if(kind==='badger')a+=P('M-23 -200 L-12 -175 L-21 -144 L-40 -163Z','#697263')+P('M23 -200 L12 -175 L21 -144 L40 -163Z','#697263')+P('M-9 -202 L9 -202 L15 -141 L-15 -141Z',cream);
 if(kind==='squirrel')a+=P('M-49 -207 L-43 -233 L-31 -208 M31 -208 L43 -233 L49 -207Z',c);
 a+=E(-18,-162,3,4,ink)+E(18,-162,3,4,ink)+E(0,-145,7,5,kind==='islander'?'#A6B0A8':'#6A7060')+P('M-10 -131 Q0 -124 10 -131','none','#89765F',2);
 if(kind==='mouse')a+=E(-18,-162,15,17,'none','stroke="#A58C61" stroke-width="3"')+E(18,-162,15,17,'none','stroke="#A58C61" stroke-width="3"')+line(-3,-162,3,-162,'#A58C61',3);
 const l=pose==='raise'?[18,-115]:pose==='open'?[-52,-4]:[20,31],r=pose==='press'?[62.7,55.05]:pose==='raise'?[-18,-115]:pose==='point'?[93,-15]:pose==='draw'?[100,40]:pose==='open'?[52,-4]:[-20,31];a+=arm(-34,-110,...l,c,14)+arm(34,-110,...r,c,14);
 if(kind==='badger')a+=line(-31,-122,37,-40,'#9E886B',5)+bag(39,-47,.48,'#A99170');if(kind==='islander')a+=basket(35,-69,.22,false);return G(x,y,s,a);
}
function attic(){return R(0,0,1000,800,'#DAD5BD',0)+P('M0 175 L500 -40 L1000 175','none','#9B8D72',28)+R(0,650,1000,150,'#B6AC91',0)+[118,320,523,727,932].map(x=>line(x,652,x-50,800,'#C7BBA0',3)).join('')+R(80,170,250,239,'#AEAB8E',9)+R(96,186,218,207,'#BDD1C9',4)+line(205,190,205,391,'#D8CCAB',11)+line(99,294,310,294,'#D8CCAB',11);}
const drawer=()=>R(459,301,484,435,'#B29A76',8)+R(478,325,445,371,'#AECED0',4)+cloud(747,400,.7,'#D9E5DC')+R(470,698,469,47,'#C4AF88',6)+E(704,721,21,9,'none','stroke="#8C7F60" stroke-width="5"');
function floatIsland(y=569,fruit='whole',tiny=true,spoon=false){let a=P('M-164 0 Q-80 101 15 90 Q112 83 163 0Z','#B59D76')+E(0,0,165,35,'#AEC09A')+R(69,-83,72,80,'#D4C9A7',4)+P('M58 -82 L106 -120 L152 -82Z','#8B9F8B')+R(93,-49,25,45,'#A09473',4)+R(113,-70,15,15,cream,2)+P('M-40 -5 Q-42 -69 -32 -142 M-36 -92 L-84 -132 M-33 -106 L13 -144','none','#978365',12)+E(-75,-145,66,47,'#83A58A')+E(-5,-165,67,55,'#91AC8C')+E(33,-126,51,44,'#91AC8C');
 a+=[[-81,-131],[-29,-164],[22,-126]].map(([x,yy],j)=>(['two','core-balanced'].includes(fruit)&&j===1)?'':fruit==='core'&&j===1?line(x,yy-24,x,yy-4,cream,2)+E(x,yy-30,11,16,'#E1E9DF'):E(x,yy,17,21,fruit==='ripe'?'#CCAD70':'#DCC98D')+P(`M${x-8} ${yy-7} l8 11 m0 -19 l8 11`,'none','#B39260',2)).join('');
 if(['core','crumbs','core-balanced'].includes(fruit))a+=bread(-55,-12,.45)+bread(-19,2,.35);a+=stone(-112,8,.4)+(fruit==='core-balanced'?'':stone(18,13,.35)+stone(55,13,.35));if(tiny)a+=critter(46,-1,.32,'islander','open');if(spoon)a+=G(-111,-1,.5,line(0,-7,58,-7,'#BAA076',7)+E(72,-7,23,12,'#BAA076'));return G(705,y,1,a);}
const sproutPot=(x,y,s=.8,stage=0)=>G(x,y,s,P('M-56 -14 L-43 65 Q0 80 43 65 L56 -14Z','#B68D73')+E(0,-13,56,17,'#D1AB8A')+E(0,-14,45,11,'#877B60')+stone(24,-12,.4)+(stage?line(-8,-17,-8,-65,'#809E7B',4)+leaf(-8,-60,.32,'#9CB793',-49)+leaf(-8,-60,.3,'#8DAA83',47):''));
const notebook=(x,y,s=.7,marks='')=>G(x,y,s,book(0,0,1,true,'#839C8C')+marks);
function islandStory(i,cover){if(cover)return attic()+drawer()+floatIsland(561,'core')+person(287,749,1.1,'mai','open')+sproutPot(454,713,.65,1);const base=()=>attic()+drawer();return [
 ()=>base()+floatIsland()+person(283,748,1.03,'mai','point',true),
 ()=>base()+floatIsland(551,'whole',false)+critter(751,551,.32,'islander','open')+person(264,749,1.04,'mai','open'),
 ()=>base()+floatIsland(622,'two')+person(263,750,1.04,'mai','reach')+bread(460,612,.45)+P('M870 534 l0 62 m-8 -8 l8 8 l8 -8','none','#829D9B',3),
 ()=>base()+floatIsland(594,'two',false,true)+person(507,716,1.02,'mai','reach')+critter(702,580,.32,'islander','raise')+bread(702,507,.36),
 ()=>base()+floatIsland(562,'crumbs')+person(259,750,1.06,'mai','draw')+notebook(419,643,.7)+pencil(425,649,.5)+bread(615,590,.4),
 ()=>base()+floatIsland(555)+person(258,750,1.02,'mai','draw')+paper(422,648,.7,P('M0 24 L0 -19','none','#8A9E80',5)+E(0,-27,23,18,'#A4BA93'))+sproutPot(397,737,.53),
 ()=>base()+floatIsland(553,'whole',false)+critter(667,553,.32,'islander','point')+person(276,749,1.06,'mai','stop')+sproutPot(428,737,.5),
 ()=>base()+floatIsland(553)+stool(281,700,.7,true)+person(281,750,1,'mai','hold',true)+notebook(284,636,.69,line(-40,-10,38,8,'#AA8C6C',3))+sproutPot(428,737,.5),
 ()=>base()+floatIsland(511,'ripe')+person(276,750,1.02,'mai','point')+notebook(327,731,.57)+P('M902 615 L902 498','none','#7E9C98',3,'stroke-dasharray="5 7"'),
 ()=>R(0,0,1000,800,'#AECED0',0)+cloud(169,188,1.3,'#E4ECE0')+G(-769,-280,1.8,floatIsland(540,'core',true)),
 ()=>base()+floatIsland(547,'core',false)+person(267,750,1.03,'mai','reach')+bread(467,613,.29)+critter(625,547,.32,'islander','point'),
 ()=>attic()+table(600,636,1.35)+person(266,751,1.08,'mai','draw')+critter(755,618,.32,'islander','open')+basket(559,621,.58,false)+[-1,0,1].map((k,j)=>E(512+k*32,635+j%2*12,11,15,j?'#C3CCC2':'#E4EBE3')).join('')+leaf(573,643,.32,'#B6BA96',80),
 ()=>base()+floatIsland(557,'core-balanced')+table(434,649,.64)+sproutPot(433,625,.69)+person(240,750,.94,'mai','draw')+stone(503,711,.45)+stone(538,730,.35),
 ()=>attic()+table(659,652,1.15)+sproutPot(663,621,.95)+person(297,751,1.1,'mai','draw')+cup(476,650,.63)+notebook(825,653,.45),
 ()=>attic()+table(667,650,1.15)+sproutPot(667,617,.95,1)+person(282,750,1.06,'mai','reach')+critter(484,609,.32,'islander','open')+notebook(830,657,.49),
 ()=>base()+floatIsland(550,'core',false)+stool(278,700,.7,true)+table(441,693,.55)+person(278,750,1.05,'mai','draw',true)+E(431,679,56,13,cream)+bread(410,671,.3)+critter(490,684,.32,'islander','hold')+table(823,709,.62)+sproutPot(823,684,.65,1)+E(810,641,2,2,'#CCA55B'),
 ][i]();}
function sheep(x,y,s=.7,sleep=false){let a=E(0,0,78,9,'#7A9391','opacity=".15"');a+=R(-48,-38,13,35,'#C7DBD2',5)+R(26,-38,13,35,'#C7DBD2',5);a+=E(-4,-60,73,47,'#E9F0E6','fill-opacity=".82"')+[-55,-25,8,38].map((xx,j)=>E(xx,-77-j%2*17,24,23,'#E9F0E6','fill-opacity=".9"')).join('');a+=E(61,-77,31,36,'#CFDFD5')+E(82,-62,23,14,'#D9E6D9')+P('M54 -107 Q18 -130 38 -145 Q63 -151 66 -125 Q49 -143 49 -126Z','#C3D4C5')+E(38,-91,18,9,'#D9E6D9');a+=sleep?P('M67 -79 q7 5 13 0','none',ink,2):E(73,-80,3,4,ink);a+=E(91,-65,3,3,'#92A69A');return G(x,y,s,a);}
function flock(sleep=false,count=12,top=434){return Array.from({length:count},(_,j)=>sheep(480+j%4*126,top+Math.floor(j/4)*96,.58,sleep)).join('');}
function foldRoom(night=false,curtains=true){return room(night)+R(427,211,520,402,night?'#6B8891':'#A8B59E',5)+R(448,236,478,350,'#9DAE95',4)+(curtains?P('M427 211 L541 211 Q506 417 542 614 L427 614Z','#819891')+P('M832 211 L947 211 L947 614 L832 614 Q866 426 832 211Z','#819891'):'')+R(448,589,478,25,'#C9BF93',4)+[479,556,638,720,801,882].map(x=>line(x,588,x+22,577,'#D9CAA4',3)).join('');}
const trough=(x,y,s=1,lit=true)=>G(x,y,s,R(-104,-38,208,52,'#9BAC9D',8)+E(0,-39,103,19,lit?'#E8EFCB':'#AAC5BA')+P('M-76 -34 Q0 -54 76 -34','none',lit?'#F2F1D4':'#D8E8D5',4));
const bucket=(x,y,s=.7)=>G(x,y,s,P('M-36 -54 L-28 10 L28 10 L36 -54Z','#ADAA8C')+E(0,-55,36,10,'#B8CEC0')+P('M-34 -50 Q-38 -112 29 -66','none','#827E67',5));
const ladle=(x,y,s=.8)=>G(x,y,s,line(0,-68,0,5,'#B6A17D',6)+E(0,15,25,14,'#B6A17D')+[-9,0,9].map(xx=>E(xx,15,2,2,'#6D8279')).join(''));
const bloomPage=(x,y,s=.7,petals=3)=>paper(x,y,s,line(0,30,0,-15,'#829E79',3)+Array.from({length:petals},(_,j)=>G(0,-17,1,E(0,-12,8,15,'#8EAEB7'),j*72)).join('')+E(0,-17,5,5,'#CCB678'));
function pastureStory(i,cover){if(cover)return outdoors(true)+R(427,214,521,394,'#95ADA5',9)+G(80,45,.83,flock(true))+person(262,748,1.03,'su','draw',true)+bloomPage(425,651,.85,3)+critter(804,749,.83,'badger','open');return [
 ()=>outdoors(true)+R(431,206,520,412,'#9AAE9D',7)+flock()+person(254,750,1.1,'su','open')+notebook(287,724,.57),
 ()=>foldRoom(true)+flock(true,11)+trough(622,727,1.06)+person(259,751,1.08,'su','point')+sheep(859,744,.66)+bread(415,739,.5),
 ()=>foldRoom(false)+sheep(739,714,.99)+person(293,750,1,'su','draw',true)+G(514,721,.8,bowl(0,0,1,false),-67)+E(588,750,92,19,'#A0C1BC')+notebook(291,640,.59),
 ()=>foldRoom(true)+stool(296,700,.72,true)+person(296,751,1.04,'su','sleep',true)+basket(402,738,.8,false)+E(400,682,46,18,snow)+sheep(619,742,.93)+bowl(724,753,.66,false),
 ()=>foldRoom(false,false)+flock(true)+person(260,750,1.07,'su','open')+[497,610,723].map(x=>bowl(x,728,.65)).join(''),
 ()=>room()+table(514,648,1.04)+person(275,749,1.05,'su','sad')+critter(790,751,1,'badger','open')+notebook(499,610,.7)+bread(647,635,.69),
 ()=>outdoors()+R(411,254,264,387,'#B8BC9C',6)+person(290,750,1.09,'su','open')+critter(750,751,1.13,'badger','open')+bread(535,735,.5),
 ()=>foldRoom(false)+person(295,750,1.08,'su','reach')+critter(646,749,1.11,'badger','point')+bucket(786,655,.8)+R(446,708,110,40,'#CCBF92',5),
 ()=>foldRoom(false)+stool(291,700,.72,true)+stool(748,704,.65,true)+person(291,750,1.04,'su','sad',true)+critter(748,750,1.02,'badger','hold',true)+bucket(534,756,.65),
 ()=>foldRoom(false)+person(268,751,1.06,'su','point')+critter(748,749,.93,'badger','open')+sheep(509,735,.8)+bowl(606,756,.8),
 ()=>outdoors()+R(647,137,304,489,'#ACB297',6)+R(704,316,187,311,'#91A18C',7)+stone(312,741,2.9)+person(310,739,1,'su','hold',true)+notebook(310,625,.69)+critter(800,612,.65,'badger','point')+ladle(883,572,.6),
 ()=>foldRoom(false)+sheep(648,744,.9)+R(675,718,159,60,'#CDC6A2',8)+bowl(756,729,.84)+stool(868,698,.65,true)+critter(868,747,.94,'badger','hold',true)+person(293,750,1,'su','draw',true),
 ()=>room()+table(531,647,1.1)+person(270,750,1.07,'su','open')+critter(792,750,1.09,'badger','open')+paper(533,615,.64,[0,1].map(j=>R(-40+j*50,-20,29,28,'#9FAF96',3)).join(''))+cup(414,658,.53)+bread(642,656,.48),
 ()=>foldRoom(false)+person(282,750,1.08,'su','point')+critter(739,750,1.08,'badger','point')+ladle(492,589,.7)+R(467,539,52,13,'#A39B78',4)+bucket(877,752,.65),
 ()=>outdoors()+P('M730 330 Q540 490 726 800 L866 800 Q706 530 841 342Z','#A8C5BB')+[584,646,717,883].map((x,j)=>flower(x,726-j%2*37,.8,'#97B3BD')).join('')+person(300,748,1.05,'su','draw',true)+bloomPage(455,646,.83,3)+pencil(455,650,.5)+bread(285,737,.45),
 ()=>foldRoom(false)+flock(true,12,342)+stool(264,702,.66,true)+person(264,751,1.02,'su','draw',true)+bloomPage(420,650,.72,5)+critter(807,751,.9,'badger','open')+bowl(645,740,.9,true,true),
 ][i]();}
function desert(){return R(0,0,1000,800,'#D1DCCF',0)+cloud(258,151,1.2,'#EAE8D1')+P('M0 419 Q220 295 460 434 Q730 285 1000 423 L1000 800 L0 800Z','#D2C398')+P('M0 624 Q290 413 544 610 Q789 483 1000 584 L1000 800 L0 800Z','#C6B58B');}
const station=()=>desert()+R(644,221,289,384,'#B8B499',8)+P('M626 221 L794 131 L953 221Z','#96A995')+R(746,387,106,218,'#879C8A',45)+R(660,592,283,22,'#AAA081',4);
const sandLines=(x=369,y=680)=>[0,1,2,3,4].map(j=>P(`M${x} ${y+j*13} q67 -33 135 -6 q66 26 135 -4`,'none','#AFA580',3)).join('');
function boatBase(x=500,y=730,s=1,step=false){return G(x,y,s,[-220,-95,91,216].map((xx,j)=>P(`M${xx} -61 L${xx+(step&&j%2?18:0)} -2 L${xx+21+(step&&j%2?18:0)} -2`,'none','#A48B68',18)).join('')+E(0,3,288,15,ink,'opacity=".08"')+P('M-280 -136 Q0 -190 280 -136 L233 -70 Q0 -38 -233 -70Z','#D7DCCD'));
}
function boatFront(x=500,y=730,s=1){return G(x,y,s,P('M-284 -142 Q0 -95 284 -142 L232 -67 Q0 -30 -232 -67Z','#EFEBD8','#B7C2AE',3)+E(-250,-141,17,11,'#87A980')+E(250,-141,17,11,'#87A980'));}
function pressStones(){return E(250,592,8,7,skin)+E(750,592,8,7,'#BEAA83');}
function riding(pose='hold',mouse='hold',step=false){return boatBase(500,733,1,step)+person(341,647,.81,'lan',pose,true)+critter(662,642,.91,'mouse',mouse,true)+boatFront(500,733)+bag(508,641,.55)+(pose==='press'?pressStones():'');}
const route=(x,y,s=.8)=>paper(x,y,s,P('M-65 25 Q-26 -27 5 16 Q30 49 66 -28','none','#8B9D7D',5)+[[-55,12],[8,10],[60,-34]].map(([xx,yy])=>E(xx,yy,6,6,'#B6956A')).join(''));
const shell=(x,y,s=.8)=>G(x,y,s,P('M-48 -4 Q-13 -65 40 -10 Q21 15 -12 20 Q-43 23 -48 -4Z','#DFD7BA')+P('M-28 -5 Q-6 -27 26 -9','none','#B3AD8D',4));
function valley(){return desert()+P('M43 800 L64 361 L245 224 L382 395 L349 800Z','#727F79')+P('M609 800 L664 282 L857 173 L1000 338 L1000 800Z','#6D7E77')+P('M666 284 L794 398 L732 800 M66 362 L232 475 L347 396','none','#91A193',6)+[640,673,714].map((x,j)=>flower(x,741-j%2*35,.55,cream)).join('');}
function wishesStory(i,cover){if(cover)return desert()+riding('open','draw',false)+notebook(684,542,.45)+sandLines(122,765);return [
 ()=>station()+boatBase()+person(346,641,.78,'lan','hold',true)+notebook(347,550,.56)+critter(682,644,.9,'mouse','open',true)+boatFront(),
 ()=>station()+riding('press','press')+cup(501,610,.5),
 ()=>desert()+sandLines(89,694)+riding('hold','draw')+notebook(695,563,.42)+pencil(705,563,.3),
 ()=>desert()+riding('point','hold')+notebook(653,542,.45)+P('M268 734 l-26 15 M282 740 l-21 20','none','#E6D6AD',3),
 ()=>desert()+riding('sad','draw',true)+notebook(697,562,.42)+pencil(710,567,.33)+sandLines(44,755),
 ()=>desert()+riding('open','hold')+shell(818,759,.75)+[451,480,510].map(x=>E(x,627,10,6,'#AA805B')).join(''),
 ()=>desert()+riding('sad','open')+bag(502,615,.65,'#BFA776')+shell(829,755,.68),
 ()=>desert()+riding('press','press')+shell(863,753,.8),
 ()=>desert()+riding('sad','hold')+route(353,551,.49)+bag(245,764,.65),
 ()=>station()+riding('press','press',true)+P('M208 730 Q139 679 191 646','none','#A69E79',3)+P('M179 644 L194 644 L191 660','none','#A69E79',3),
 ()=>room()+table(528,651,1.15)+person(277,750,1.08,'lan','draw')+route(506,618,.78)+critter(796,751,1.07,'mouse','draw')+cup(643,647,.56),
 ()=>desert()+person(309,749,1.04,'lan','hold')+bag(358,697,.65)+cup(277,670,.55)+critter(758,746,1.03,'mouse','draw',true)+notebook(880,647,.55)+sandLines(524,749),
 ()=>valley()+person(382,748,1.05,'lan','point',true)+R(319,490,130,17,'#BEAD80',8)+E(383,480,40,19,'#BEAD80')+cup(507,740,.59)+bag(290,745,.62),
 ()=>valley()+person(331,749,1.05,'lan','draw',true)+R(266,490,130,17,'#BEAD80',8)+E(331,480,40,19,'#BEAD80')+paper(495,647,.78,flower(7,30,.7,cream))+pencil(496,650,.5)+bag(241,742,.62),
 ()=>room()+table(527,652,1.06)+person(278,750,1.04,'lan','open')+critter(794,750,1.07,'mouse','open')+paper(475,620,.5,flower(0,29,.65,cream))+paper(629,634,.5,shell(0,0,.65)),
 ()=>station()+riding('hold','draw')+notebook(338,552,.48)+notebook(699,566,.42)+bread(521,621,.38)+E(252,592,3,3,'#CBA464')+sandLines(21,773),
 ][i]();}
function winter(){return R(0,0,1000,800,'#C5D8D6',0)+cloud(258,161,1.5,'#E6E9DB')+P('M0 440 L247 225 L482 452 L701 202 L1000 454 L1000 800 L0 800Z','#A9C2C0')+P('M179 285 L247 225 L338 320 L278 299 L240 278 L212 305Z',snow)+P('M634 277 L701 202 L784 301 L716 265 L680 282Z',snow)+P('M0 608 Q263 457 548 609 Q813 498 1000 578 L1000 800 L0 800Z','#E6EADD');}
function pine(x,y,s=.7){return evergreen(x,y,s,'#91ADA2')+G(x,y,s,P('M-79 -212 Q0 -181 79 -212 M-49 -296 Q0 -269 49 -296 M-126 -122 Q0 -92 126 -122','none','#DCE7D9',13));}
function coldRoom(night=false){return R(0,0,1000,800,'#C4D1C7',0)+R(0,636,1000,164,'#D8E0D2',0)+R(543,98,374,412,'#91A69E',9)+R(562,116,337,375,night?'#6F9298':'#BED4D3',4)+P('M565 364 L659 251 L776 373 L896 283 L896 490 L565 490Z','#DFE8DB')+line(730,118,730,486,'#D9E1D1',13)+line(564,302,895,302,'#D9E1D1',13)+R(524,499,408,24,'#A8B7A7',6)+[105,219,355].map((x,j)=>E(x,696+j%2*30,48,8,snow)).join('');}
function camel(x,y,s=1,pose='stand',even=false){let a=E(0,3,167,14,'#91ABA5','opacity=".15"');
 if(pose==='rest')a+=P('M-87 -57 L-119 -10 L-43 -10 M52 -57 L101 -10 L38 -10','none','#D5E2D8',24);else a+=P('M-63 -91 L-59 -4 M57 -91 L65 -4','none','#CDDCD4',23)+P(`M-91 -78 L-93 ${even?-4:-23} M83 -82 L92 -4`,'none',snow,24);
 a+=E(-10,-110,111,65,snow)+P('M-66 -146 Q-46 -235 5 -158Z',snow)+P('M60 -130 Q60 -201 101 -226 Q127 -235 135 -210 L130 -91Z',snow)+E(130,-211,44,35,snow)+E(158,-192,32,22,snow)+E(104,-239,17,20,snow)+E(131,-248,17,18,snow)+E(136,-217,4,5,ink)+E(154,-215,4,5,ink)+P('M161 -184 q11 5 17 -2','none','#90A59C',2)+P('M-115 -125 Q-152 -112 -150 -75','none',snow,10);return G(x,y,s,a);}
const tracks=(x,y,s=.8)=>G(x,y,s,[0,1,2].map(j=>[[-27,0],[7,-17],[35,2],[-5,26]].map(([xx,yy],k)=>E(xx+j*95,yy-j*27,9,5,k===3?'#CFDED4':'#9CB7AD')).join('')).join(''));
const camelPicture=(x,y,s=.8)=>paper(x,y,s,camel(-13,37,.32,'stand',true));
function pavilion(x,y,s=1){return G(x,y,s,R(-87,-221,13,237,'#ABB49C',4)+R(74,-221,13,237,'#ABB49C',4)+P('M-120 -219 L0 -292 L120 -219Z','#B2C5B8')+P('M-100 -230 L0 -292 L105 -230Z',snow)+R(-98,-55,196,18,'#B6BEA7',4)+R(-84,-40,12,54,'#A3AE98',3)+R(73,-40,12,54,'#A3AE98',3));}
function winterPath(){return winter()+pine(115,606,.9)+pine(299,548,.75)+pine(815,605,.83)+P('M411 782 Q512 592 699 495','none','#BDCFC4',45)+P('M414 778 Q515 592 699 495','none',snow,34);}
function snowCamelStory(i,cover){if(cover)return winter()+pine(181,542,.85)+pavilion(811,480,.6)+person(296,745,1.08,'dong','open')+camel(660,746,.98)+tracks(434,761,.65);return [
 ()=>coldRoom()+R(410,685,467,71,'#B6A47D',11)+R(425,695,437,43,snow,8)+person(265,749,1.04,'dong','draw')+camel(645,715,.7)+notebook(389,762,.45),
 ()=>coldRoom()+camel(644,721,.95)+person(287,750,1.02,'dong','point',true)+tracks(439,759,.82),
 ()=>coldRoom()+person(286,749,1.04,'dong','draw',true)+camel(684,737,.96)+E(501,697,29,20,snow)+[488,502,515].map((x,j)=>E(x,718+j*9,5,4,snow)).join('')+notebook(295,749,.52),
 ()=>coldRoom(true)+stool(289,697,.7,true)+person(289,748,1.04,'dong','hold',true)+notebook(288,636,.72)+camel(695,741,.93),
 ()=>coldRoom()+person(282,749,1.06,'dong','draw')+camelPicture(469,638,.84)+camel(726,738,.85),
 ()=>coldRoom()+person(281,750,1.04,'dong','open')+camel(710,740,.89)+paper(558,723,.8,E(0,0,58,26,'#A6C5C8')+P('M-58 -22 L-25 -48 L8 -22 L42 -42 L67 -22Z','#A2B8B3')),
 ()=>coldRoom()+table(568,650,1.1)+person(279,751,1.06,'dong','draw')+route(569,617,.84)+camel(826,751,.7,'rest')+pencil(443,651,.5),
 ()=>winterPath()+camel(654,748,.9,'rest')+person(294,751,1.09,'dong','draw')+bag(477,702,.67)+tracks(434,773,.67),
 ()=>coldRoom()+stool(291,701,.72,true)+person(291,751,1.04,'dong','open',true)+camel(681,744,.98,'rest')+bag(472,751,.55),
 ()=>winterPath()+person(310,751,1.07,'dong','open',true)+bag(230,729,.6)+camel(702,747,.94,'rest')+E(477,730,49,16,snow),
 ()=>coldRoom()+table(527,649,1.1)+person(273,750,1.04,'dong','point')+route(534,613,.85)+camel(808,751,.7)+G(551,628,.72,P('M-69 30 Q0 -60 65 -25','none','#B1B595',4)),
 ()=>winter()+R(56,152,395,478,'#B8C4B3',7)+R(137,318,173,314,'#94ACA0',55)+person(407,749,1.06,'dong','hold')+bag(459,697,.7)+cup(395,685,.5)+camel(721,749,.85)+pine(864,551,.65),
 ()=>winter()+E(803,457,140,30,'#9FBEC5')+pavilion(509,710,1.24)+person(366,737,.92,'dong','hold',true)+camel(681,737,.83,'rest')+bread(369,637,.45)+bag(486,754,.6),
 ()=>coldRoom(true)+R(75,195,391,414,'#B3B29B',6)+R(94,213,353,372,'#D8C5A4',5)+person(268,580,.85,'dong','hold',true)+cup(271,478,.5)+line(96,496,443,496,'#A9AC90',12)+camel(719,739,1,'rest')+E(714,760,174,15,snow),
 ()=>winter()+E(690,492,302,113,'#C2DADC')+E(690,490,282,94,'#ADCDD2')+[567,614,663,723,782].map((x,j)=>E(x,523-j%3*18,8+j%2*4,11+j%3*4,'#DFECE2')).join('')+person(287,750,1.03,'dong','open',true)+camel(674,755,.93,'rest'),
 ()=>winterPath()+tracks(414,771,.87)+person(293,751,1.09,'dong','open')+camel(692,737,.92)+P('M313 590 Q350 570 318 551','none','#B07D68',18)+E(660,759,63,10,'#CCDDD1'),
 ][i]();}
function wallScene(){return winter()+R(425,184,575,477,'#AEBEB2',5)+[274,360,447,535,623].map(yy=>line(428,yy,1000,yy,'#C5D0BF',3)).join('')+P('M584 667 L584 372 Q584 250 710 250 Q836 250 836 372 L836 667Z','#819A92')+P('M608 667 L608 375 Q608 276 710 276 Q812 276 812 375 L812 667Z','#CFDED4')+P('M568 740 L593 619 L837 619 L874 740Z',snow);}
function elephant(x,y,s=1,shape='normal',fold=false,reach=false){let a=E(0,4,186,17,'#99B3AB','opacity=".15"');const small=shape==='small',long=shape==='long',bend=shape==='bend';const bodyY=bend?-116:-149,w=long?172:111;
 a+=P(bend?'M-59 -102 L-101 -50 L-79 -2 M58 -102 L100 -50 L77 -2':'M-62 -106 L-64 -3 M60 -106 L62 -3','none','#D5E2D8',32)+P(bend?'M-92 -103 L-131 -45 L-108 -4 M86 -101 L125 -40 L109 -4':'M-94 -107 L-96 -3 M93 -106 L95 -3','none',snow,34);
 a+=E(0,bodyY,w,long?52:92,snow)+E(-80,bodyY-62,74,69,snow)+P(reach?`M-132 ${bodyY-41} Q-143 ${bodyY+35} -209 ${bodyY+23} Q-247 ${bodyY+9} -247 ${bodyY+18}`:`M-132 ${bodyY-41} Q-149 ${bodyY+16} -132 ${bodyY+(small?53:90)} Q-107 ${bodyY+(small?75:132)} -82 ${bodyY+(small?45:92)}`,'none',snow,31)+E(-101,bodyY-76,4,5,ink)+E(-91,bodyY-115,12,13,'#8EB5C3');
 if(!long)a+=fold?P(`M-47 ${bodyY-107} Q-28 ${bodyY-71} -42 ${bodyY-10} Q-71 ${bodyY-20} -67 ${bodyY-40} Q-39 ${bodyY-46} -69 ${bodyY-64} Q-72 ${bodyY-100} -47 ${bodyY-107}Z`,'#DDE8DC'):P(`M-48 ${bodyY-112} C7 ${bodyY-125} 35 ${bodyY-21} -19 ${bodyY+18} Q-32 ${bodyY+24} -47 ${bodyY+8} Q-24 ${bodyY-5} -52 ${bodyY-15} Q-90 ${bodyY-66} -48 ${bodyY-112}Z`,'#DDE8DC','#C2D4C8',2);
 a+=P(`M${w-2} ${bodyY+1} Q${w+35} ${bodyY+25} ${w+22} ${bodyY+58}`,'none',snow,10);return G(x,y,s,a);
}
function elephantFront(x,y,s=.9){return G(x,y,s,E(0,0,112,10,'#97B2AA','opacity=".12"')+P('M-60 -92 L-80 -47 L-65 -3 M60 -92 L80 -47 L65 -3','none',snow,29)+E(0,-139,96,110,snow)+E(0,-232,67,68,snow)+P('M-60 -273 Q-90 -232 -61 -184 L-50 -202 Q-75 -212 -48 -223Z','#D3E2D5')+P('M59 -273 Q90 -232 61 -184 L46 -222Z','#D3E2D5')+E(0,-279,13,14,'#8EB5C3')+E(-23,-239,4,5,ink)+E(23,-239,4,5,ink)+P('M0 -221 Q-13 -138 30 -121 Q61 -110 61 -145','none','#C3D5C8',33)+P('M0 -221 Q-13 -138 30 -121 Q61 -110 61 -145','none',snow,27));}
const elephantPlan=(x,y,s=.75,marked=false)=>paper(x,y,s,elephant(8,38,.32)+(marked?E(30,16,13,19,'none','stroke="#B29069" stroke-width="3"')+E(-15,-18,15,22,'none','stroke="#B29069" stroke-width="3"'):''));
function orrery(x,y,s=1){return G(x,y,s,R(-12,-170,24,171,'#9B9375',5)+E(0,-2,97,19,'#B6B79B')+E(0,-203,124,80,'none','stroke="#B69D6D" stroke-width="9"')+E(0,-203,81,125,'none','stroke="#B5AF83" stroke-width="7"')+E(-32,-235,19,19,'#DBE4D9')+E(0,-203,48,48,'#D4B679')+E(110,-168,22,22,'#DCE5DA')+G(-78,-94,.45,gear(0,0,55))+G(70,-82,.32,gear(0,0,55)));}
function elephantStory(i,cover){if(cover)return winter()+orrery(745,453,.84)+person(257,749,.94,'frost','open')+elephant(623,749,.97)+critter(816,750,.60,'squirrel','hold');return [
 ()=>wallScene()+elephant(396,750,1.1)+person(809,750,.88,'frost','open'),
 ()=>wallScene()+person(359,750,1.02,'frost','point')+ruler(522,579,1.1)+elephant(830,750,.7)+critter(201,750,.82,'squirrel','hold')+basket(199,721,.43,false),
 ()=>winter()+elephant(683,747,1.13)+E(574,751,66,17,snow)+person(271,750,1.05,'frost','open')+critter(887,750,.7,'squirrel','open'),
 ()=>wallScene()+person(260,750,1.03,'frost','draw')+elephantPlan(421,649,.85)+elephant(766,750,.77)+critter(551,750,.76,'squirrel','hold'),
 ()=>wallScene()+person(310,750,1.05,'frost','open')+elephant(625,750,.64,'small')+E(761,754,92,34,snow)+elephantPlan(468,749,.55),
 ()=>winter()+elephant(624,749,.91,'long')+person(253,750,1,'frost','sad')+critter(891,749,.8,'squirrel','point')+E(571,750,115,17,snow),
 ()=>winter()+elephant(575,748,.89,'long')+person(244,750,1.01,'frost','sad')+elephantPlan(255,636,.68)+critter(877,750,.85,'squirrel','open'),
 ()=>winter()+pine(867,508,.65)+elephant(678,748,1.05)+person(280,750,1.02,'frost','hold')+elephantPlan(280,635,.72)+critter(878,750,.72,'squirrel','point'),
 ()=>winter()+elephant(637,750,1.06)+person(263,749,.98,'frost','hold')+critter(879,750,.76,'squirrel','hold')+notebook(272,638,.65),
 ()=>wallScene()+elephant(338,749,.91)+critter(708,638,.77,'squirrel','point')+basket(758,551,.45,false)+person(899,750,.86,'frost','hold')+ruler(875,665,.65),
 ()=>winter()+person(252,751,1.04,'frost','draw')+elephantPlan(425,644,.9,true)+elephant(744,749,.97)+critter(881,751,.7,'squirrel','point'),
 ()=>winter()+elephant(647,749,1.02,'bend')+person(251,750,1.04,'frost','draw')+paper(418,648,.72,line(-45,3,48,3,'#8B9E86',3))+pencil(421,650,.5)+critter(853,751,.78,'squirrel','point'),
 ()=>wallScene()+P('M565 744 L603 592 L815 592 L871 744Z',snow)+person(289,750,1.02,'frost','point')+elephant(715,751,.85,'normal',true)+critter(502,751,.72,'squirrel','draw'),
 ()=>wallScene()+P('M565 744 L603 652 L815 652 L871 744Z',snow)+elephantFront(709,659,.91)+person(353,750,.98,'frost','point')+critter(900,750,.8,'squirrel','point'),
 ()=>winter()+orrery(752,528,1.23)+elephant(331,750,1.06)+person(570,750,.86,'frost','open')+critter(911,750,.7,'squirrel','open'),
 ()=>winter()+orrery(810,458,.65)+person(313,750,.99,'frost','open')+elephant(618,750,1.06,'normal',false,true)+critter(876,750,.75,'squirrel','hold',true)+notebook(876,674,.47)+basket(802,748,.4,false)+E(360,608,6,4,snow),
 ][i]();}
const registry={'expansion-0196':islandStory,'expansion-0197':pastureStory,'expansion-0198':wishesStory,'expansion-0199':snowCamelStory,'expansion-0200':elephantStory};
export function fifthOlderLastArtwork(story,index,cover=false){const render=registry[story?.id];if(!render||story.status!=='text-ready'||story.pages?.length!==16||!Number.isInteger(index)||index<0||index>=16)throw Error('No reviewed fifth older last storyboard for this input');return svg(render(index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

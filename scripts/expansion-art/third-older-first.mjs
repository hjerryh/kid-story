// Scene-specific original vector illustrations. Unpublished until all frames are reviewed.
import {E,R,P,G,line,leaf,cloud,tree,book,table,stool,lantern,basket,svg} from '../render-illustrations.mjs';
import {room,outdoors} from './middle.mjs';
const ink='#40534F',paper='#F0E7CD',skin='#D9B492',gold='#C9AE72',blue='#809FA8',green='#839A80';
const arm=(x,y,dx,dy,c,w=18)=>P(`M${x} ${y} Q${x+dx*.65} ${y+dy*.25-8} ${x+dx} ${y+dy}`,'none',c,w);
const text=(t,x,y,size=18,c=ink)=>`<text x="${x}" y="${y}" font-family="PingFang SC,sans-serif" font-size="${size}" text-anchor="middle" fill="${c}">${t}</text>`;
const bag=(x,y,s=1,c=green)=>G(x,y,s,R(-28,-23,56,54,c,8)+R(-30,-29,60,25,c,5)+E(0,-5,4,4,gold));
const pencil=(x,y,s=1,r=25)=>G(x,y,s,R(-3,-54,6,95,'#BA9F72',2)+P('M-3 41 L3 41 L0 55Z',ink),r);
const sheet=(x,y,s=1,art='',r=0)=>G(x,y,s,R(-81,-63,162,126,paper,3)+art,r);
const bowl=(x,y,s=1,c='#AFB4A0',filled=false)=>G(x,y,s,P('M-39 -16 Q-32 26 0 27 Q32 26 39 -16Z',c)+E(0,-17,39,13,paper)+(filled?E(0,-17,32,9,'#C5AF77'):'')+line(-20,27,20,27,c,6));
const cup=(x,y,s=1)=>G(x,y,s,R(-20,-29,40,47,'#B5C2AD',7)+P('M20 -23 Q48 -23 42 1 Q37 9 21 7','none','#B5C2AD',6)+E(0,-28,20,7,'#8A9A86'));
const chest=(x,y,s=1,open=true)=>G(x,y,s,(open?R(-69,-97,138,52,'#BAA17A',6):'')+R(-71,-45,142,76,'#AE946F',5)+R(-59,-35,118,57,'#CBB48C',4)+line(-58,-10,58,-10,'#A78F6C',3));
const cart=(x,y,s=1,blanket=false)=>G(x,y,s,line(-116,-26,-171,-120,'#9F8F6D',10)+R(-119,-45,238,29,'#AC9975',5)+R(-102,-82,204,37,blanket?'#ABB9A2':'#C7B08C',7)+E(-77,0,30,30,'#8B907C')+E(77,0,30,30,'#8B907C')+E(-77,0,11,11,'#C6B58A')+E(77,0,11,11,'#C6B58A'));
function girl(x,y,s=1,who='ling',pose='hold'){
 const dress=who==='zhi',over=who==='li',hair=who==='li'?'#65584D':'#4E5650',pants=who==='lan'?'#647C70':'#7C7563';
 let a=E(0,0,69,10,ink,'opacity=".1"')+R(-32,-74,25,65,pants,8)+R(9,-74,25,65,pants,8)+E(-22,-8,25,11,'#897961')+E(23,-8,25,11,'#897961')+P('M-42 -170 L42 -170 L50 -61 Q0 -47 -50 -61Z',dress?paper:'#CCB47D');
 if(dress)a+=P('M-32 -151 L32 -151 L58 -42 Q0 -23 -58 -42Z','#6E8A76')+R(-30,-176,11,55,'#6E8A76',3)+R(18,-176,11,55,'#6E8A76',3);
 if(over)a+=P('M-31 -150 L31 -150 L38 -50 L12 -50 L0 -78 L-12 -50 L-38 -50Z','#6E8B73')+R(-29,-174,11,61,'#6E8B73',3)+R(18,-174,11,61,'#6E8B73',3);
 if(who==='lan')a+=line(0,-160,0,-60,'#AC9566',3)+[-142,-117,-92].map(y=>E(4,y,3,3,'#E8D6A4')).join('');
 a+=E(0,-225,62,62,hair)+R(-58,-224,116,48,hair,15)+E(0,-217,52,51,skin)+P('M-55 -229 Q-54 -281 0 -280 Q55 -281 55 -226 Q31 -228 8 -251 Q-16 -224 -55 -229Z',hair);
 if(who==='ling')a+=P('M-6 -274 Q2 -304 19 -281 L28 -274Z',hair);
 if(dress)a+=leaf(-37,-253,.23,'#B49B69',-32);
 a+=pose==='listen'?P('M-26 -219 Q-18 -211 -10 -219 M10 -219 Q18 -211 26 -219','none',ink,2):E(-18,-219,4,5,ink)+E(18,-219,4,5,ink);
 a+=pose==='read'?E(0,-191,7,9,'#9B7967'):P(pose==='sad'?'M-11 -191 Q0 -199 11 -191':'M-11 -195 Q0 -184 11 -195','none','#977C64',2);
 const cloth=dress?paper:'#CCB47D'; const left=pose==='open'?[-55,20]:pose==='hold'?[26,35]:[-12,48];
 const right=pose==='press'?[115,-10]:pose==='write'?[116,35]:pose==='point'?[64,-8]:pose==='raise'?[37,-76]:pose==='think'?[-22,-32]:pose==='open'?[55,20]:pose==='hold'?[-26,35]:[13,48];
 a+=arm(-41,-151,...left,cloth)+arm(41,-151,...right,cloth)+E(-41+left[0],-151+left[1],11,12,skin)+E(41+right[0],-151+right[1],11,12,skin);
 if(['ling','cen'].includes(who))a+=line(-39,-168,35,-80,'#6E8975',5)+bag(42,-80,.75);
 if(who==='lan')a+=R(-45,-85,90,32,'#627F8B',6)+[-25,-8,11,27].map(xx=>line(xx,-89,xx,-62,'#C4AD7F',3)).join('');
 if(who==='li')a+=bag(41,-77,.59,'#668A9B');
 return G(x,y,s,a);
}
function elder(x,y,s=1,kind='page'){
 const bark=kind==='page',hat=kind==='lu';let a=E(0,0,64,10,ink,'opacity=".1"')+P('M-34 -139 L34 -139 L56 -11 Q0 5 -56 -11Z',bark?'#809573':hat?'#71859B':'#A69EB0')+E(0,-191,52,54,bark?'#9B9178':skin);
 a+=P('M-54 -191 Q-61 -249 0 -251 Q62 -248 53 -188 Q33 -228 0 -226 Q-35 -228 -54 -191Z','#CDD2C3');
 if(bark)a+=[-32,-15,4,23,40].map((xx,j)=>leaf(xx,-219,.3,'#D5D9C7',j*23-60)).join('')+P('M-36 -188 l6 19 m22 -57 l-4 15 M28 -192 l-6 25','none','#7D7A64',2);
 if(hat)a+=E(0,-240,83,14,'#C9B585')+R(-47,-278,94,38,'#C9B585',15)+P('M43 -200 Q73 -146 43 -93','none','#C5CCBB',14);
 a+=E(-19,-191,16,17,'none','stroke="#7F8974" stroke-width="3"')+E(19,-191,16,17,'none','stroke="#7F8974" stroke-width="3"')+line(-3,-193,3,-193,'#7F8974',3)+E(-19,-191,3,4,ink)+E(19,-191,3,4,ink)+P('M-10 -165 Q0 -156 10 -165','none','#8F7A65',2)+arm(-36,-125,-13,42,bark?'#9B9178':skin,13)+arm(36,-125,48,-14,bark?'#9B9178':skin,13);return G(x,y,s,a);
}
function library(empty=0){return R(0,0,1000,800,'#C6C8B0',0)+R(0,626,1000,174,'#AAA98D',0)+P('M60 690 Q-13 45 508 28 Q1015 55 940 690','none','#9CA58B',76)+P('M94 650 Q63 98 504 83 Q918 116 909 650','none','#B3BBA0',15)+R(123,257,680,22,'#A39470',5)+R(116,427,731,22,'#A39470',5)+Array.from({length:Math.max(0,13-empty*3)},(_,j)=>R(139+j*48,170+j%3*12,30,87-j%3*12,[green,blue,'#B9A07A'][j%3],3)).join('')+Array.from({length:Math.max(0,9-empty*3)},(_,j)=>R(141+j*53,338+j%2*9,34,89-j%2*9,['#B7AB84','#97AA91'][j%2],3)).join('');}
function travel(x,y,s=1,pose='stand'){
 const low=pose==='reach'||pose==='sit',yy=low?20:0;
 let a=low?P('M-11 -31 L-27 -12 L-28 2 M10 -31 L29 -11 L31 3','none','#92978D',9):R(-12,-35,9,34,'#92978D',3)+R(4,-35,9,34,'#92978D',3);
 a+=G(0,yy,1,P('M-19 -76 L19 -76 L23 -31 L-23 -31Z','#A87968')+E(0,-96,19,20,skin)+P('M-19 -100 Q-22 -123 2 -119 Q24 -120 20 -99 Q1 -105 -19 -100Z','#8A7259')+E(7,-96,2,2,ink)+bag(-21,-54,.32,'#D2C09A')+arm(16,-62,pose==='reach'?34:17,pose==='reach'?44:13,skin,6));
 if(pose==='stick')a+=line(32,-49,41,6,'#9F8C63',4);
 if(pose==='sit')a+=P('M39 -11 v12 h-8 v8 h15 v-20 M59 -8 v12 h-8 v8 h15 v-20','#B9C3AD');
 return G(x,y,s,a);
}
function riverScene(stage=0){let a=R(-142,-113,284,214,'#C9D8BA',8)+P('M-60 -112 Q56 -31 -18 101 L100 101 Q54 -23 130 -112Z','#8DB3BA')+P('M-142 25 Q-113 7 -77 24 M119 14 L143 27','none','#AEC19B',18);
 if(stage<=1)a+=P('M-132 7 L-39 3 M47 3 L139 -2','none','#A49370',16)+line(-110,-7,-47,-8,'#CBB18A',3)+line(65,-9,122,-12,'#CBB18A',3);
 if(stage>=2&&stage<=4)a+=[[-40,21],[-10,48],[16,70],[85,45]].map(([xx,yy])=>E(xx,yy,13,8,'#A8AE9B')).join('');
 if(stage===5)a+=P('M-122 100 Q-136 3 -96 -85','none','#B7A982',16)+[0,1,2].map(j=>leaf(-112,-12-j*26,.17,green,30)).join('');
 if(stage===6)a+=P('M-66 28 L92 28','none','#C3CEAA',31)+[[-40,28],[-8,27],[25,30],[59,28]].map(([x,y])=>E(x,y,13,7,'#9BAA97')).join('');
 a+=travel(stage===6?55:-92,stage===5?-31:45,stage===5?.47:.62,stage===2?'reach':stage===4?'sit':stage>=3?'stick':'stand');return a;}
function innScene(socksWindow=false){return R(-142,-113,284,214,'#C9B98E',7)+R(71,-77,54,75,'#7C9F9D',7)+R(-118,-35,68,80,'#AD8C68',4)+P('M-102 26 Q-106 -8 -82 -13 Q-57 -6 -65 26Z','#D7B371')+table(35,59,.43)+travel(4,73,.55)+bowl(24,39,.28,'#9BA38E',true)+bowl(62,41,.28,'#9BA38E',true)+[0,1].map(j=>P(`M${socksWindow?82+j*23:-113+j*23} ${socksWindow?-12:-58} v24 h-9 v10 h20 v-34Z`,'#B9C3AD')).join('');}
function folio(x,y,s=1,art='',words=3){return G(x,y,s,P('M-230 -150 Q-113 -183 0 -133 Q113 -183 230 -150 L230 144 Q115 119 0 161 Q-110 120 -230 144Z',paper,'#7294A0',9)+line(0,-134,0,158,'#B7AD8D',3)+[0,1,2,3,4,5,6].slice(0,words).map(j=>P(`M-205 ${-94+j*29} Q-121 ${-110+j*29} -29 ${-87+j*29}`,'none','#A0A68F',4)).join('')+G(117,0,.73,art));}
function lingStory(i,cover){if(cover)return library(2)+girl(281,751,1.18,'ling','point')+folio(618,549,.93,innScene(),4)+lantern(799,278,.7);
 const common=()=>library(i>8?3:i>5?2:1)+table(604,683,1.36)+(i===10?stool(291,705,.72)+seated(291,754,1.04,'ling','sad'):girl(291,752,1.15,'ling',i===6?'think':'point'));
 return [
 ()=>library()+girl(377,751,1.4,'ling','point')+chest(748,706,1.15)+chest(833,536,.78)+book(600,228,.53,false,blue),
 ()=>library()+girl(313,750,1.23,'ling','raise')+elder(761,746,1.05)+book(756,609,.68,false,blue)+E(727,626,10,11,'#9B9178')+E(786,626,10,11,'#9B9178')+R(476,211,13,397,'#AD9C76',4)+R(555,211,13,397,'#AD9C76',4)+[275,344,413,482,551].map(y=>line(484,y,555,y,'#AD9C76',7)).join(''),
 ()=>common()+folio(627,518,.88,riverScene(0),4),
 ()=>library(1)+table(562,681,1.15)+girl(266,751,1.17,'ling','point')+book(533,635,.77,false,blue)+sheet(687,645,.29,text('借书卡',0,5,22))+elder(807,750,.95)+cart(877,632,.39),
 ()=>common()+folio(620,523,.91,riverScene(1),4)+G(722,502,.66,R(-141,-112,282,218,'#E5EAD4',7,'fill-opacity=".14" stroke="#C2CFBD" stroke-width="2"')+P('M-131 -5 Q-15 -56 130 -5 M-128 15 Q-15 -36 127 15','none','#7B9692',7)+line(-85,-16,-84,45,'#7B9692',6)+line(76,-16,76,45,'#7B9692',6))+pencil(428,554,.72,-38),
 ()=>common()+folio(624,523,.91,E(-70,40,4,4,'#B1B4A0')+E(-58,40,3,3,'#B1B4A0')+E(-48,43,3,3,'#B1B4A0'),0)+sheet(801,692,.42,'',-13),
 ()=>common()+folio(625,520,.91,text('他蹲',-28,24,22,'#A4AA96'),0)+G(428,560,.85,line(0,0,30,-74,'#AA916A',8)+P('M18 -69 L42 -61 L57 -95 Q37 -119 32 -106Z','#D3CBB1'))+cup(876,671,.77),
 ()=>common()+folio(625,523,.91,riverScene(2),2)+cup(866,669,.7),
 ()=>common()+folio(625,519,.91,riverScene(3),4)+R(638,676,146,5,'#9BAC9C',2),
 ()=>library(3)+girl(305,751,1.2,'ling','think')+table(592,685,1.3)+folio(595,576,.61,riverScene(3),4)+R(770,284,185,344,'#92A38B',12)+cart(859,632,.45)+chest(859,573,.33),
 ()=>common()+folio(625,522,.91,riverScene(4),5),
 ()=>common()+P('M0 401 L112 392 L400 800 L247 800Z','#ECE0AA','',0,'opacity=".34"')+folio(625,524,.91,riverScene(5),5),
 ()=>common()+folio(625,519,.91,riverScene(6),6),
 ()=>common()+folio(625,519,.91,innScene(),6)+G(408,644,.7,E(0,0,38,22,'#CAAD79')+[-15,5,24].map(x=>line(x,-12,x-8,8,'#E2C894',4)).join('')),
 ()=>outdoors()+R(640,234,265,391,'#91AA8A',90)+R(663,258,218,358,'#C2CCB1',72)+R(645,608,254,23,'#ABAA85',4)+girl(340,750,1.24,'ling','point')+elder(784,749,1.0)+book(778,615,.67,false,blue)+E(747,631,10,11,'#9B9178')+E(807,631,10,11,'#9B9178')+sheet(466,555,.26,text('借书卡',0,4,22)),
 ()=>room(true)+R(59,605,369,132,'#9EA98E',10)+R(62,603,364,59,'#C8C9AF',10)+R(83,552,125,52,paper,16)+girl(303,745,1.01,'ling','listen')+table(648,684,1.25)+folio(649,538,.86,innScene(true),6)+lantern(884,612,.65),
 ][i]();}

// Local helpers and storyboards below are independent of frozen earlier batches.
const notes=(x,y,s=1)=>G(x,y,s,P('M0 -6 Q21 -19 30 -6 M7 8 Q29 -5 39 8','none','#AABCB0',4));
function seated(x,y,s=1,who='ling',pose='hold'){
 const id=`seat-${x}-${y}-${who}`;
 return G(x,y,s,`<defs><clipPath id="${id}"><rect x="-180" y="-310" width="360" height="244"/></clipPath></defs><g clip-path="url(#${id})">${girl(0,0,1,who,pose)}</g>`+P('M-28 -67 L-61 -43 L-64 -13 M27 -67 L55 -43 L58 -13','none',who==='li'?'#6E8B73':who==='lan'?'#647C70':'#7C7563',23)+E(-66,-7,27,12,'#897961')+E(62,-7,27,12,'#897961'));
}
const spoon=(x,y,s=1,r=0)=>G(x,y,s,E(0,-40,15,24,'#BFA67D')+R(-4,-22,8,72,'#BFA67D',4),r);
const clock=(x,y,s=1)=>G(x,y,s,E(0,0,48,48,'#AF9B74')+E(0,0,39,39,paper)+line(0,0,0,-25,ink,3)+line(0,0,21,11,ink,3)+E(0,0,4,4,gold));
function shop(){return room()+R(428,121,455,373,'#8DA49C',20)+R(449,140,413,331,'#CBD6B8',10)+line(443,482,868,482,'#B4A17A',15)+[163,281,390].map((x,j)=>clock(x,170+j%2*59,.7)).join('');}
function work(){return R(0,0,1000,800,'#C3C7AD',0)+R(0,638,1000,162,'#ADA98C',0)+R(74,70,19,590,'#A59573',4)+R(906,70,19,590,'#A59573',4)+P('M0 53 Q500 121 1000 53 L1000 215 Q500 161 0 215Z','#97ADA2')+[137,228,766,855].map((x,j)=>line(x,256,x-18,328+j%2*44,'#8AA8A4',3)).join('')+table(590,657,1.36);}
function molePotter(x,y,s=1){return G(x,y,s,E(0,0,60,10,ink,'opacity=".1"')+E(-22,-7,24,13,'#8D8A7C')+E(25,-7,24,13,'#8D8A7C')+E(0,-107,57,91,'#8D8A7C')+P('M-44 -163 L44 -163 L51 -36 L-51 -36Z','#6F8695')+E(0,-199,65,54,'#969083')+E(0,-173,21,13,'#B4A995')+[-22,22].map(x=>E(x,-202,19,20,'none','stroke="#C4BB96" stroke-width="3"')+E(x,-202,3,4,ink)).join('')+line(-3,-202,3,-202,'#C4BB96',3)+P('M-12 -157 Q0 -150 12 -157','none',ink,2)+arm(-43,-136,-17,40,'#969083',15)+arm(43,-136,38,13,'#969083',15));}
function clay(x,y,s=1,shape='boot',goldDot=true){let a='';const c='#ADB7B5',stroke='#7F9292';
 if(shape==='boot')a=P('M-49 -91 L16 -91 L17 -35 Q38 -36 59 -53 Q82 -24 57 -10 L-51 -10Z',c,stroke,3)+line(-38,-77,4,-77,'#C9D0C5',5)+line(-39,-15,-24,-17,stroke,3);
 if(shape==='spoon')a=E(-35,-56,32,43,c)+P('M-17 -30 L62 37 Q70 45 75 37 Q80 31 70 22 L-5 -49Z',c,stroke,3);
 if(shape==='fish')a=E(-12,-42,64,34,c)+P('M44 -42 L86 -75 L77 -40 L88 -9 L44 -42Z',c,stroke,3)+E(-47,-50,4,4,ink);
 if(shape==='bowl')a=P('M-77 -62 Q-61 8 0 8 Q61 8 77 -62Z',c,stroke,3)+E(0,-62,77,22,'#CDD4C7')+E(0,-62,57,13,'#95A7A3');
 if(shape==='whale')a=P('M-95 -29 Q-107 -88 -39 -85 Q30 -87 63 -36 L89 -59 L119 -83 L120 -45 L141 -28 L94 -25 Q60 18 -20 15 Q-77 12 -95 -29Z',c,stroke,3)+P('M-10 -25 Q25 -29 37 -4 Q6 9 -10 -25Z','#C2CEC2')+E(-68,-45,4,4,ink)+P('M-63 -24 Q-53 -16 -44 -24','none',stroke,2);
 if(shape==='flat')a=E(0,-17,78,21,c)+P('M-59 -21 Q-17 -9 54 -23','none','#CBD3C7',4);
 if(shape==='ball')a=E(0,-43,48,43,c);
 if(goldDot)a+=E(shape==='whale'?-31:shape==='fish'?-8:0,shape==='bowl'?-13:shape==='flat'?-15:-51,5,5,'#D6B36E');
 return G(x,y,s,a);
}
function design(x,y,s=1){return sheet(x,y,s,P('M-49 6 Q-57 -26 -18 -27 Q18 -27 32 -2 L60 -23 L56 9 L36 17 Q-12 36 -49 6Z','none','#8BA1A2',3)+P('M-3 -14 L-37 -49 L-27 -8 M5 -12 L39 -45 L33 -1','none','#8BA1A2',3));}
function rollStage(x,y,s=1,shape='boot',bg='street'){
 const art=bg==='sea'?P('M-124 -52 Q-89 -76 -52 -52 Q-13 -77 25 -52 Q63 -78 126 -52 L126 27 L-124 27Z','#9BBFC0')+P('M-119 -21 Q-65 -39 -15 -18 Q44 -37 119 -18','none','#D2DEC9',4):bg==='stream'?P('M-119 25 Q-56 -47 16 -18 Q60 10 124 -44','none','#9DBBB5',26):bg==='bowl'?P('M-104 -41 Q-93 52 0 50 Q93 52 104 -41','none','#9EAA95',7):P('M-127 20 L127 20 M-98 -27 L-98 8 M-48 -27 L-48 8 M0 -27 L0 8 M48 -27 L48 8 M98 -27 L98 8','none','#AFAC91',6);
 return G(x,y,s,R(-150,-119,300,170,'#B4A17C',6)+R(-132,-101,264,142,paper,3)+art+R(-155,-126,17,187,'#8D987F',8)+R(138,-126,17,187,'#8D987F',8)+line(-169,56,169,56,'#9C916F',13)+clay(0,20,.76,shape));
}
function lanStory(i,cover){if(cover)return shop()+girl(279,754,1.27,'lan','point')+rollStage(656,575,1.42,'whale','sea')+bowl(495,702,.7)+spoon(461,626,.65,-22);
 const base=(pose='point')=>work()+girl(275,752,1.19,'lan',pose);
 return [
 ()=>shop()+girl(338,749,1.4,'lan','hold')+design(338,594,.82)+elder(826,748,1.01,'boss'),
 ()=>outdoors()+tree(186,608,1.05)+table(585,651,1.35)+girl(300,749,1.16,'lan','point')+molePotter(839,749,1.05)+clay(596,602,.8,'ball')+bowl(719,636,.7)+spoon(479,627,.65,62),
 ()=>work()+girl(385,752,1.19,'lan','press')+clay(570,612,1.05,'boot')+P('M515 565 Q543 564 568 554','none',skin,13)+E(568,554,9,8,skin)+sheet(801,638,.38,text('按金点存形',0,4,19)),
 ()=>base('sad')+clay(590,610,1.05,'boot')+bowl(777,631,.79)+spoon(751,557,.72,-31)+notes(800,540,.8)+design(458,682,.35),
 ()=>base('think')+clay(597,626,1.05,'flat')+bowl(785,638,.7)+R(456,657,88,18,'#B8C9BF',4),
 ()=>base()+R(486,317,14,306,'#A39471',4)+R(731,317,14,306,'#A39471',4)+line(487,319,743,319,'#A39471',12)+P('M494 328 L731 328 L706 593 L651 548 L582 601 L494 542Z','#85A4B0')+clay(615,613,1.04,'boot')+bowl(809,635,.7)+spoon(780,575,.67,-19),
 ()=>base('sad')+design(597,583,.85)+E(776,630,39,25,'#B99478')+bowl(454,642,.64),
 ()=>base('think')+clay(599,596,1.02,'boot')+E(599,749,119,25,'#9DB6AF')+G(600,740,.7,'<g transform="scale(1 -.36)">'+clay(0,0,1,'boot')+'</g>')+sheet(791,640,.45)+pencil(787,613,.43,-32),
 ()=>base()+sheet(609,566,1.08,text('一只靴子想看看大海',0,-27,15)+line(-59,1,59,1,'#A3AE99',3)+line(-59,23,43,23,'#A3AE99',3))+clay(461,679,.52,'boot')+pencil(471,557,.68,-35),
 ()=>base()+clay(595,610,1.17,'whale')+design(790,679,.39)+bowl(458,642,.65),
 ()=>base()+clay(600,609,1.02,'spoon')+R(441,643,335,40,paper,3)+['boot','spoon','fish','bowl','whale'].map((shape,j)=>clay(470+j*59,674,.16,shape,false)).join('')+bowl(824,638,.62),
 ()=>base()+rollStage(613,560,1.11,'fish','street')+bowl(821,645,.62)+spoon(789,579,.67,-25),
 ()=>shop()+girl(264,751,1.17,'lan','hold')+elder(838,750,1.04,'boss')+table(587,667,1.0)+rollStage(589,573,1.02,'boot','street'),
 ()=>shop()+girl(242,752,1.07,'lan','point')+elder(865,750,.99,'boss')+table(593,672,1.1)+rollStage(588,561,1.18,'whale','sea')+bowl(425,654,.59)+spoon(406,594,.59,-24),
 ()=>shop()+[518,663,808].map((x,j)=>G(x,443,.55,R(-26,-88,52,88,['#9EAD98','#A9978B','#A7B4AB'][j],13)+E(0,-112,28,29,skin)+E(-9,-113,2,3,ink)+E(9,-113,2,3,ink))+umbrella(x+23,403,.35)).join('')+girl(251,752,1.07,'lan','point')+elder(842,750,.96,'boss')+table(583,670,1.04)+rollStage(585,562,1.08,'boot','street')+bowl(743,653,.6)+spoon(728,598,.6,-20)+R(187,669,101,32,'#A48E6B',5),
 ()=>outdoors()+R(398,163,527,470,'#8EA49A',12)+R(419,184,486,421,'#C7D4B9',7)+rollStage(666,514,1.15,'boot','street')+girl(273,751,1.16,'lan','hold')+R(218,606,105,36,'#AA9270',5)+leaf(662,753,.42,'#D7C18C',75)+E(684,768,123,13,'#B1C2AD'),
 ][i]();}

function deck(night=false){return R(0,0,1000,800,night?'#536D79':'#BCD1C5',0)+cloud(818,183,1.45,night?'#788C8D':'#E1E5CF')+R(0,468,1000,140,night?'#708C94':'#9ABCB9',0)+P('M0 566 Q500 493 1000 566 L1000 800 L0 800Z','#A39A7B')+[642,710,782].map(y=>line(0,y,1000,y,'#C5B895',3)).join('')+line(0,495,1000,495,'#897D63',13)+[49,166,834,951].map(x=>line(x,493,x,601,'#897D63',10)).join('')+R(112,0,18,499,'#B3A27B',5)+P('M129 32 Q337 95 302 328 L129 328Z',night?'#AEB6A6':paper)+[181,498,817].map(x=>lantern(x,450,.48)).join('');}
function captain(x,y,s=1){return G(x,y,s,P('M-27 -83 L27 -83 L40 -22 L12 -22 L0 -44 L-12 -22 L-40 -22Z','#BCA77D')+P('M-32 -89 L-26 -143 L28 -143 L33 -89Z','#D8C39A')+P('M-57 -147 L0 -198 L57 -147Z','#C7B38C')+P('M0 -198 L17 -147 L-43 -147Z','#E3CE9F')+E(-11,-122,3,3,ink)+E(11,-122,3,3,ink)+P('M-9 -107 Q0 -100 9 -107','none',ink,2)+P('M-23 -71 L-10 -67 L4 -72 L18 -67 L30 -72','none','#83A2AD',4)+P('M-29 -79 L-57 -45 L-41 -40 M29 -79 L56 -63 L65 -73','none','#C7B38C',11));}
function fogPerson(x,y,s=1){return G(x,y,s,P('M-29 -96 L29 -96 L45 -10 Q0 7 -45 -10Z','#ABA2B8')+E(0,-139,33,38,skin)+P('M-33 -143 Q-37 -183 0 -184 Q39 -182 34 -140 L43 -76 L25 -80 L22 -140 Q0 -133 -19 -151 L-22 -81 L-42 -75Z','#D7DBD3')+E(-11,-139,2,3,ink)+E(11,-139,2,3,ink)+arm(27,-82,31,24,skin,9)+basket(69,-45,.4,false)+cloud(70,-71,.22,'#DDE5D4'));}
function palace(x,y,s=1){return G(x,y,s,R(-98,-112,196,113,'#D8C17E',4)+[-78,0,78].map((xx,j)=>R(xx-21,-172-j%2*34,42,173+j%2*34,'#D8C17E',3)+P(`M${xx-29} ${-170-j%2*34} L${xx} ${-213-j%2*34} L${xx+29} ${-170-j%2*34}Z`,'#C7AB6A')).join('')+R(-20,-64,40,65,'#998D73',17)+[-65,65].map(xx=>R(xx-10,-86,20,29,paper,9)).join(''));}
function fogRoad(x,y,s=1,which='fork'){let a=E(0,0,160,45,'#D9E0D0','opacity=".75"');
 if(which==='fork')a+=P('M0 15 L0 -45 L-88 -112 M0 -45 L82 -110','none','#B5C0A8',19)+fogPerson(0,-19,.55);
 if(which==='palace')a+=palace(20,-5,.87)+fogPerson(8,-6,.43);
 if(which==='valley')a+=P('M-154 -31 Q-115 -174 -65 -67 Q-11 -156 32 -62 Q98 -159 157 -30Z','#B1C4AD')+cloud(-5,-37,.75,'#DDE6D7')+fogPerson(44,-8,.58);
 if(which==='village')a+=R(-114,-87,90,91,'#B9B69E',5)+P('M-130 -85 L-68 -132 L-9 -85Z','#A9987F')+R(44,-67,87,72,'#C8BEA0',4)+P('M30 -66 L88 -105 L146 -66Z','#A89F83')+line(-22,-108,23,-108,'#AA9B77',4)+R(-15,-103,35,55,'#D9DDCA',3)+fogPerson(-4,24,.57)+cloud(-35,-19,.41,'#DCE3D0');
 return G(x,y,s,a);
}
const audience=()=>[177,294,817,923].map((x,j)=>G(x,747,.64,R(-34,-128,68,131,['#A0A895','#B6A595','#9BA9A9','#B5AF93'][j],20)+E(0,-166,41,43,skin)+P('M-41 -173 Q-36 -222 0 -222 Q39 -222 41 -173Z',j===0?'#A6B6AD':'#887D6B'))).join('');
const signature=(x,y,s=1)=>sheet(x,y,s,line(-54,-27,56,-27,'#9EA995',3)+line(-54,-3,47,-3,'#9EA995',3)+text('栀禾',23,33,17));
function zhiStory(i,cover){if(cover)return deck(true)+girl(304,754,1.22,'zhi','read')+table(621,667,1.3)+book(622,614,1.55,true,blue)+fogRoad(654,448,1.03,'village')+captain(875,716,.75)+notes(397,503,.77);
 const writing=()=>room()+table(607,664,1.35)+girl(280,753,1.18,'zhi','write');
 const reading=(scene='valley')=>deck(i>=12)+table(610,665,1.27)+girl(286,753,1.17,'zhi','read')+book(606,614,1.21,true,blue)+fogRoad(620,439,.94,scene)+notes(382,500,.8);
 return [
 ()=>deck()+girl(352,752,1.33,'zhi','hold')+book(352,598,.9,false,blue)+captain(802,718,1.0),
 ()=>reading('valley')+captain(852,723,.83),
 ()=>writing()+folio(628,529,.88,fogRoad(0,28,.84,'fork'),0),
 ()=>writing()+book(587,600,1.02,false,blue)+sheet(786,619,.52,text('借阅记录',0,-22,19)+line(-55,5,55,5,'#A8AE98',3))+captain(871,744,.87),
 ()=>room()+P('M0 274 L397 0 L599 0 L1000 278','none','#A29172',36)+girl(318,751,1.28,'zhi','think')+chest(724,667,1.0)+sheet(644,692,.53,text('雾海',0,-22,18))+sheet(815,721,.53,text('空水缸',0,-22,18),12),
 ()=>writing()+sheet(616,585,1.02,P('M-58 0 Q-73 -34 -19 -34 Q23 -34 50 -9 L67 -29 L75 3 L50 9 Q-7 33 -58 0Z','none','#91A6A5',3))+pencil(455,581,.65,-34)+book(805,642,.58,false,blue),
 ()=>writing()+sheet(617,587,1.03,G(0,34,.39,palace(0,0,1)))+pencil(455,575,.68,-34)+sheet(813,666,.44,text('村庄',0,4,20)),
 ()=>reading('palace')+sheet(792,654,.43,line(-59,-23,51,-23,'#9CAA95',3))+pencil(805,608,.44,19),
 ()=>deck()+table(610,665,1.29)+girl(286,753,1.19,'zhi','think')+book(610,614,1.25,true,blue)+sheet(804,652,.44)+captain(860,747,.75),
 ()=>writing()+folio(627,520,.87,cup(0,40,1.0)+P('M15 -60 L24 -50','none',paper,9),6)+notes(385,499,.6),
 ()=>writing()+chest(833,696,.58)+sheet(613,582,.99,P('M-17 39 L-17 -10 L50 -43 M-17 -10 L-62 -44','none','#9CA991',5)+G(20,24,.29,fogPerson(0,0,1)))+pencil(455,577,.64,-32),
 ()=>deck()+girl(361,752,1.3,'zhi','hold')+book(360,596,.95,true,blue)+signature(421,606,.55)+R(399,567,10,25,'#9A9F89',2)+captain(802,733,.95),
 ()=>deck(true)+audience()+table(615,665,1.05)+girl(310,753,1.12,'zhi','read')+book(624,615,.95,true,blue)+signature(720,615,.45)+notes(417,501,.7),
 ()=>reading('village')+cup(799,656,.66)+audience(),
 ()=>deck(true)+audience()+girl(497,715,1.12,'zhi','hold')+book(499,584,1.0,true,blue)+captain(698,733,.73)+notes(214,594,.65)+notes(813,596,.65),
 ()=>deck(true)+table(596,665,1.3)+girl(287,753,1.16,'zhi','hold')+signature(539,616,.62)+sheet(720,613,.61,P('M-55 10 Q-65 -23 -24 -27 Q7 -29 33 -8 L61 -25 L64 0 L38 11 Q-9 28 -55 10Z','none','#8DA3A2',3))+pencil(451,580,.62,-35)+captain(881,731,.8),
 ][i]();}

const maple=(x,y,s=1,r=0)=>G(x,y,s,P('M0 12 L-5 -7 L-29 -16 L-21 -27 L-36 -42 L-13 -39 L-11 -63 L0 -49 L11 -63 L14 -39 L36 -42 L22 -26 L29 -16 L5 -7Z','#AA755D')+line(0,18,0,-44,'#D7AA7A',2),r);
const redThree=(x,y,s=1)=>G(x,y,s,maple(-15,0,.51,-24)+maple(4,5,.56,5)+maple(23,1,.51,26));
function lion(x,y,s=1,pose='rest'){
 const standing=pose==='stand'||pose==='paw',headY=standing?-197:-145;
 let a=E(0,0,209,20,ink,'opacity=".10"')+E(22,standing?-97:-64,141,77,'#AF9D60');
 a+=P('M113 -78 Q217 -177 230 -79 Q230 -39 197 -29','none','#B4A366',29)+redThree(199,-20,.97);
 a+=[-54,15,79].map((xx,j)=>P(`M${xx} ${standing?-83:-53} L${xx+15} -13`,'none','#B9A46B',standing?40:34)+E(xx+21,-8,40,16,'#B9A46B')).join('');
 for(let j=0;j<27;j++)a+=leaf(-73+(j%9)*23,-25-Math.floor(j/9)*36,.4,['#B5A365','#BEAA6F','#9E9360','#BA986B'][j%4],j*43%110-55);
 a+=E(-104,headY,104,106,'#B7A164');
 for(let j=0;j<18;j++){const t=j*Math.PI*2/18;a+=leaf(-104+Math.sin(t)*75,headY+Math.cos(t)*80,.56,['#C2AD74','#AE955E','#B5A168'][j%3],j*20);}
 a+=E(-104,headY+4,56,57,'#D2BA7B')+E(-144,headY-41,20,19,'#C6AE70')+E(-64,headY-41,20,19,'#C6AE70')+E(-124,headY-3,12,11,'#CDA65F')+E(-83,headY-3,12,11,'#CDA65F')+E(-124,headY-3,4,6,ink)+E(-83,headY-3,4,6,ink)+E(-104,headY+26,12,8,'#8C7C54')+P(`M-104 ${headY+34} Q-114 ${headY+43} -124 ${headY+34} M-104 ${headY+34} Q-94 ${headY+43} -84 ${headY+34}`,'none','#8D7D54',2);
 if(pose==='tired')a+=P('M-63 -50 L-35 -72 L-5 -42Z','#C8D4B5');
 if(pose==='paw')a+=R(-157,-13,105,27,'#BCA46E',4)+[-142,-113,-84].map(xx=>leaf(xx,-1,.3,'#A69360',54)).join('');
 return G(x,y,s,a);
}
function leafQuilt(x,y,s=1,rolled=false,mouth=false){let a=rolled?R(-130,-46,260,89,'#B4A16A',35)+E(130,0,32,45,'#C1AD76')+P('M130 -27 Q155 -26 151 1 Q140 21 123 13 Q115 0 129 -5','none','#8E9260',4):P('M-178 -48 Q-98 -71 2 -53 Q105 -77 178 -44 L179 47 Q101 65 -2 47 Q-103 66 -178 43Z','#B4A16A');
 for(let j=0;j<30;j++)a+=leaf(-151+(j%10)*30,rolled?-1+Math.floor(j/10)*18:8+Math.floor(j/10)*21,.34,['#C4AD70','#AF9B62','#B29566'][j%3],j*29%100-50);
 a+=redThree(rolled?-110:137,rolled?-3:40,.84)+E(rolled?126:-124,rolled?-11:-21,11,8,'#CDA65F')+E(rolled?148:-98,rolled?-11:-21,11,8,'#CDA65F')+E(rolled?126:-124,rolled?-11:-21,3,4,ink)+E(rolled?148:-98,rolled?-11:-21,3,4,ink);
 if(mouth)a+=P('M-121 -4 Q-111 6 -101 -4','none','#8D7657',3);
 return G(x,y,s,a);
}
function maze(){return outdoors()+[92,296,703,916].map((x,j)=>R(x-67,246+j%2*60,134,393-j%2*60,'#B0A874',12)).join('')+[125,249,725,877].map((x,j)=>Array.from({length:7},(_,k)=>leaf(x+(k%2)*20,320+k*43,.5,['#BBA96E','#AFA16C','#B6A378'][j%3],(k*27)%80-40)).join('')).join('')+P('M181 800 L390 526 L588 526 L795 800Z','#B6AF8B')+R(58,364,169,147,'#AA9974',5)+R(73,382,138,80,'#827D61',5);}
function warmRoom(day=false){return room(!day)+R(425,611,465,119,'#A2AB8D',12)+R(425,598,465,41,'#D7D6B7',11)+R(468,556,138,44,paper,14)+lantern(849,329,.64)+table(835,716,.59);}
function cenStory(i,cover){if(cover)return warmRoom()+leafQuilt(661,617,1.12,false,true)+stool(321,718,.7)+seated(321,764,1.02,'cen','listen')+bowl(833,693,.65,'#AFB4A0',true);
 const both=(pose='rest')=>maze()+girl(278,752,1.14,'cen','point')+lion(672,727,1.01,pose);
 return [
 ()=>maze()+girl(286,752,1.18,'cen','point')+cart(406,746,.72,true)+lion(732,676,.92),
 ()=>both()+P('M923 570 Q929 538 944 530 M936 582 L962 569','none','#B6A678',5),
 ()=>both('tired'),
 ()=>maze()+girl(257,752,1.1,'cen','sad')+cart(663,751,1.08,true)+lion(676,705,1.0,'stand'),
 ()=>both('stand')+leaf(624,646,.64,'#A87357',34),
 ()=>maze()+seated(293,755,1.03,'cen','listen')+lion(672,726,1.04),
 ()=>both('paw')+chest(176,714,.46)+P('M357 557 Q412 512 444 548 Q427 578 398 549','none','#AE9670',6),
 ()=>both('stand')+P('M353 575 Q422 546 437 603 Q412 632 383 596','none','#AE9670',6),
 ()=>maze()+chest(858,687,.66)+seated(355,752,1.0,'cen','listen')+lion(712,709,.91),
 ()=>maze()+seated(292,751,1.01,'cen','listen')+lion(672,719,1.05)+E(185,184,71,71,'#E0C29A'),
 ()=>maze()+seated(328,752,.99,'cen','listen')+lion(565,737,.84)+cart(852,708,.64,true),
 ()=>maze()+girl(293,751,1.14,'cen','point')+cart(823,639,.55,true)+leafQuilt(684,684,1.25,false,true),
 ()=>outdoors()+P('M0 800 L414 497 L603 497 L1000 800Z','#BAAE88')+girl(290,754,1.18,'cen','point')+cart(666,749,1.17,true)+leafQuilt(667,646,.95,true),
 ()=>warmRoom()+R(66,115,211,519,'#A59676',8)+P('M75 123 L267 123 L227 442 Q168 477 80 404Z','#A8BBA8')+girl(302,753,1.1,'cen','raise')+cart(595,753,.81,true)+leafQuilt(595,681,.66,true)+bowl(811,693,.6,'#AFB4A0',true)+bowl(864,708,.6,'#AFB4A0',true),
 ()=>warmRoom()+leafQuilt(659,614,1.08,false,true)+stool(306,715,.68)+seated(306,761,1.02,'cen','hold')+bowl(309,647,.66,'#AFB4A0',true)+bowl(565,632,.48,'#AFB4A0',true)+E(526,600,4,7,'#A7C0BB'),
 ()=>warmRoom(true)+leafQuilt(658,615,1.1,false,true)+stool(299,716,.7)+seated(299,762,1.0,'cen','listen')+bowl(831,690,.66)+notes(576,564,.68),
 ][i]();}

function skyMarket(sunset=false){return R(0,0,1000,800,sunset?'#C4B9A2':'#BDD1CC',0)+cloud(155,166,1.3,'#DEE4D3')+cloud(839,390,1.8,'#D6E1D2')+P('M62 44 Q181 150 348 47 L315 7 L95 4Z','#9CA99A')+R(138,87,140,183,'#B7AE91',5)+R(163,153,34,60,'#8FA9AA',4)+R(220,153,34,60,'#8FA9AA',4)+R(733,151,179,225,'#ACAA91',4)+P('M712 156 L823 80 L932 156Z','#849F94')+R(760,223,42,69,'#CFD8BD',4)+R(836,223,42,69,'#CFD8BD',4)+P('M0 610 Q500 536 1000 610 L1000 800 L0 800Z','#B8AF8C')+line(0,587,1000,587,'#8B977F',11)+[40,145,846,954].map(x=>line(x,584,x,685,'#8B977F',9)).join('');}
function locker(x=679,y=659,s=1,open=false){return G(x,y,s,R(-218,-255,436,255,'#AC9873',7)+Array.from({length:6},(_,j)=>{const xx=-204+(j%3)*138,yy=-240+Math.floor(j/3)*117;return R(xx,yy,126,106,j===1&&open?'#7E8A73':'#C4AF84',5)+(j===1&&open?P(`M${xx} ${yy} L${xx-53} ${yy+17} L${xx-53} ${yy+116} L${xx} ${yy+106}Z`,'#CAB78F'):R(xx+91,yy+46,16,7,'#8D8E71',2));}).join('')+R(-231,-268,462,23,'#D1BA91',4));}
const coin=(x,y,s=1)=>G(x,y,s,E(0,0,12,11,'#C9A86B')+R(-3,-3,6,6,'#8C8F6F',1));
function egg(x,y,s=1,crack=false){return G(x,y,s,P('M-45 4 Q-66 -31 -30 -87 Q0 -129 30 -87 Q65 -31 45 4 Q0 32 -45 4Z','#E3E7D9')+(crack?P('M-43 -36 L-22 -47 L-10 -28 L8 -47 L27 -30 L46 -43','none','#A6B5A9',4):E(-13,-57,13,23,'#F4F0DE','opacity=".5"')));}
function rainCloud(x,y,s=1,state='wide',drops=false){const c=state==='tight'?.73:state==='wide'?1.22:1;let a=G(0,0,c,cloud(0,0,1,'#DCE4DC')+cloud(-18,-7,.72,'#E9ECE0')+E(10,-14,35,28,state==='tight'?'#95AAA6':state==='clear'?'#B4C8BC':'#A9BCB5')+P('M-97 12 Q-121 -3 -103 -22 M97 9 Q133 -3 108 -24','none','#C8D9CF',5));if(drops)a+=Array.from({length:15},(_,j)=>{const xx=-126+j%5*59, yy=63+Math.floor(j/5)*67;return line(xx,yy,xx-6,yy+22,'#89AFAF',3);}).join('');return G(x,y,s,a);}
function basin(x,y,s=1){return G(x,y,s,P('M-82 -31 L-64 41 Q0 64 64 41 L82 -31Z','#B7A17B')+E(0,-31,82,25,'#9CAF9C')+E(0,-34,69,16,'#AEC9BD')+line(-55,-11,-47,31,'#CEBA90',4)+line(51,-11,46,32,'#CEBA90',4));}
function canopy(){return skyMarket()+R(83,171,15,499,'#9F9273',4)+R(906,171,15,499,'#9F9273',4)+P('M53 147 L940 147 L969 295 Q500 258 23 295Z','#A3B4A1');}
function platform(sunset=false){return R(0,0,1000,800,sunset?'#C7BFA8':'#BDD1CB',0)+cloud(193,171,1.4,'#E4E7D8')+cloud(809,211,1.4,'#E0E5D6')+R(0,500,1000,300,'#BEC2AC',0)+[585,660,741].map(y=>line(0,y,1000,y,'#9BAE9C',6)).join('')+[190,495,790].map(x=>line(x,500,x-30,800,'#9BAE9C',5)).join('')+line(18,313,980,313,'#8D9D89',14)+line(18,484,980,484,'#8D9D89',10)+[26,151,276,401,526,651,776,901,978].map(x=>line(x,313,x,502,'#8D9D89',9)).join('')+R(15,750,250,50,'#9CB3A4',5)+P('M31 767 Q83 747 128 768 Q181 748 239 768','none','#CFDFCD',4);}
function umbrella(x,y,s=1){return G(x,y,s,line(0,0,0,-220,'#9A9075',8)+P('M-157 -169 Q-116 -301 0 -303 Q120 -300 157 -169 Q103 -201 78 -170 Q25 -203 0 -170 Q-35 -203 -78 -170 Q-109 -202 -157 -169Z','#9AAEAC')+P('M0 -301 Q-63 -252 -78 -170 M0 -301 Q65 -247 78 -170','none','#BDCCC1',3)+P('M0 0 Q0 25 -22 17','none','#9A9075',8));}
const rack=(x,y,s=1)=>G(x,y,s,line(-79,0,-43,-116,'#A49A7B',9)+line(79,0,43,-116,'#A49A7B',9)+line(-55,-105,55,-105,'#A49A7B',8)+line(-76,-2,76,-2,'#A49A7B',8)+P('M-74 -104 Q0 -55 74 -104','none','#CAD7C4',10));
function liStory(i,cover){if(cover)return platform()+rainCloud(615,226,1.36,'wide',true)+stool(350,716,.75)+seated(351,763,1.12,'li','listen')+umbrella(409,640,1.19)+basket(850,729,.65,false);
 const storage=(pose='hold',open=false)=>skyMarket()+locker(684,664,.98,open)+girl(276,753,1.16,'li',pose);
 return [
 ()=>storage('think')+coin(350,639,.7)+coin(384,640,.7)+R(491,65,203,200,'#AEBEAD',8)+R(481,57,223,18,'#8F9D84',4)+line(500,28,680,28,'#8F9D84',7)+[505,547,589,631,674].map(x=>line(x,28,x,65,'#8F9D84',5)).join('')+sheet(603,311,.42,text('观鲸台',0,-13,20)+text('凭票入场',0,18,16)),
 ()=>skyMarket()+locker(657,661,.98)+girl(263,752,1.11,'li','point')+elder(841,749,.98,'lu')+basket(557,424,.73,false)+egg(557,393,.56)+coin(451,451,.8)+coin(486,451,.8),
 ()=>storage('point',true)+egg(663,518,.49,true)+rainCloud(665,408,.59,'small',false)+sheet(392,620,.4,text('票钱',0,4,20)),
 ()=>storage('sad')+basket(653,400,.66,false)+rainCloud(662,294,.94,'small',true)+R(493,428,155,14,'#CCD6C8',3)+R(678,441,134,13,'#C1D3C8',3)+coin(834,447,.6),
 ()=>canopy()+girl(284,752,1.17,'li','hold')+sheet(294,606,.61,text('养云说明',0,-16,19))+rainCloud(666,353,.94,'tight',true)+basin(663,695,1.0),
 ()=>canopy()+girl(308,753,1.1,'li','point')+rainCloud(675,356,1.03,'tight',true)+basin(725,700,1.1)+basket(911,647,.63,false)+[544,612,849].map(x=>E(x,727,32,8,'#A2BFB1')).join(''),
 ()=>canopy()+girl(320,753,1.18,'li','hold')+sheet(318,610,.7,text('初雨不能催，也不能堵',0,4,12))+rainCloud(718,378,.87,'tight',true)+basket(522,736,.7,false),
 ()=>skyMarket()+girl(311,753,1.32,'li','think')+R(511,258,231,31,'#9EAC94',4)+[520,564,608,652,696,737].map(x=>line(x,198,x,259,'#8E9F87',7)).join('')+line(518,198,739,198,'#8E9F87',8)+R(782,328,158,276,'#B7BCA7',9)+line(863,332,863,599,'#899F92',7),
 ()=>skyMarket()+R(503,128,377,531,'#97AA9A',8)+R(530,151,322,497,'#B6C4AE',5)+line(691,152,691,648,'#94A694',6)+girl(300,754,1.19,'li','point')+rainCloud(686,349,.84,'small',false)+basket(688,651,.82,false)+coin(407,620,.8)+coin(444,617,.8),
 ()=>platform()+rainCloud(676,254,1.27,'wide',true)+R(251,668,118,29,'#9CAD99',5)+seated(309,747,1.03,'li','listen')+basket(836,711,.66,false),
 ()=>platform()+rainCloud(662,215,1.39,'wide',true)+stool(379,716,.72)+seated(380,765,1.09,'li','listen')+umbrella(432,639,1.18)+sheet(835,690,.48,text('养云说明',0,-11,17)),
 ()=>platform()+P('M628 176 L628 484 L987 484 L987 96 L918 96 L918 176Z','#93A898')+P('M646 534 Q742 473 853 501 L917 455 L948 481 L974 503 L917 519 Q834 578 686 566Z','#8DA29A','',0,'opacity=".29"')+rainCloud(519,219,1.21,'wide',true)+stool(345,716,.72)+seated(346,765,1.09,'li','hold')+umbrella(399,639,1.18)+G(398,648,.46,E(0,0,41,26,'#CCB280')+P('M0 -26 L0 26','none','#A78C66',3)),
 ()=>platform(true)+girl(332,753,1.16,'li','point')+rainCloud(691,438,1.02,'clear',false)+G(852,716,.63,line(0,0,0,-188,'#9A9075',8)+P('M0 -188 L-27 -62 Q0 -42 27 -62Z','#9AAEAC')+P('M0 0 Q0 25 -22 17','none','#9A9075',8))+basket(847,735,.55,false),
 ()=>skyMarket(true)+locker(667,662,.99)+girl(270,751,1.13,'li','open')+elder(848,748,.99,'lu')+rack(638,658,.82)+rainCloud(636,500,.81,'clear',false)+basket(509,734,.62,false)+egg(503,687,.34,true),
 ()=>skyMarket(true)+locker(670,662,.98)+girl(274,752,1.17,'li','point')+elder(848,748,.99,'lu')+rack(637,657,.84)+rainCloud(636,499,.83,'clear',false),
 ()=>skyMarket(true)+locker(435,641,.82)+seated(314,748,1.05,'li','hold')+G(320,627,.49,E(0,0,41,26,'#CCB280')+P('M0 -26 L0 26','none','#A78C66',3))+elder(836,694,.8,'lu')+rack(725,671,.61)+rainCloud(722,551,.61,'clear',false)+P('M635 552 Q498 571 330 623','none','#D8E4D7',17)+R(450,351,113,98,'#D5DDCD',4),
 ][i]();}

const registry={'expansion-0111':lingStory,'expansion-0112':lanStory,'expansion-0113':zhiStory,'expansion-0114':cenStory,'expansion-0115':liStory};
export function thirdOlderFirstArtwork(story,index,cover=false){
 const render=registry[story?.id];if(!render||story.status!=='text-ready'||story.pages?.length!==16||!Number.isInteger(index)||index<0||index>=16)throw new Error('No reviewed third older storyboard for this input');
 return svg(render(index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);
}

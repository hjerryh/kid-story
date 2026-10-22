// Original scene-specific storyboards for expansion-0032–0040.
// All scenes use shared editable SVG primitives; no remote or stock pictures.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,table,book,rock,svg} from '../render-illustrations.mjs';
const ink='#344B50', paper='#F2E7CC', wood='#B49B76';
const arm=(x,y,dx,dy,c,w=21)=>P(`M${x} ${y} Q${x+dx*.6} ${y+dy*.4-12} ${x+dx} ${y+dy}`,'none',c,w);
const specs={
 ami:{type:'human',skin:'#E5BE9C',hair:'#625449',cloth:'#579395',pants:'#7F8980',braid:true,apron:true},
 qing:{type:'fox',skin:'#EAE7D7',hair:'#AF9678',cloth:'#647AA2',pants:'#7D8D91',scarf:'#B56B65'},
 badgerAunt:{type:'badger',skin:'#A5A093',cloth:'#9C8768',pants:'#777C70',glasses:true},
 loshi:{type:'badger',skin:'#D2D1BF',cloth:'#819169',pants:'#819169',apron:true},
 anan:{type:'human',skin:'#E2B78F',hair:'#836046',cloth:'#D99A5F',pants:'#7B8980',curly:true},
 yuetao:{type:'rabbit',skin:'#C7CCCA',cloth:'#BB858A',pants:'#898B81',apron:'#E8DECA'},
 owlTeacher:{type:'owl',skin:'#80939B',cloth:'#A39B87',pants:'#858D82',glasses:true},
 lijian:{type:'squirrel',skin:'#A67D58',cloth:'#A76879',pants:'#8D9A89'},
 azhi:{type:'beaver',skin:'#896F57',cloth:'#7395AF',pants:'#7395AF',apron:true},
 zhilan:{type:'otter',skin:'#A17E59',cloth:'#658FA4',pants:'#A17E59'},
 qizhou:{type:'human',skin:'#DBB18D',hair:'#4B4D46',cloth:'#5D8878',pants:'#999B91'},
 sand:{type:'human',skin:'#D6B295',hair:'#C6C7B9',cloth:'#A28B70',pants:'#8F8777',bun:true,glasses:true},
 grandpa:{type:'human',skin:'#D7B291',hair:'#D5D4BF',cloth:'#B47B69',pants:'#8D9488',beard:true},
 lili:{type:'dragon',skin:'#C28C69',cloth:'#E7D4A1',pants:'#BA8A68',apron:true},
 dragonDad:{type:'dragon',skin:'#A86F60',cloth:'#687D91',pants:'#7B8987',beard:true},
 turtle:{type:'turtle',skin:'#8CA18B',cloth:'#B4A184',pants:'#829B80',glasses:true},
 lanyin:{type:'human',skin:'#CFA17B',hair:'#4E5550',cloth:'#CFAD65',pants:'#647F70',longHair:true},
 keeper:{type:'human',skin:'#D7B598',hair:'#D1D3C3',cloth:'#667E94',pants:'#8B9085',beard:true},
 visitor:{type:'human',skin:'#DCB991',hair:'#7B6652',cloth:'#A8B79B',pants:'#8A9C9A'},
 deer:{type:'deer',skin:'#B69773',cloth:'#7895A7',pants:'#B69773'},
};
function person(name,x,y,s=1,pose='stand',flip=false){
 const c=specs[name];if(!c)throw new Error(name);const f=c.skin;let a=E(0,pose==='sit'?37:2,83,12,'#52675C','opacity=".13"');
 if(c.type==='squirrel')a+=P('M43 -51 Q147 -55 135 -180 Q118 -247 74 -216 Q29 -183 89 -142','none',f,45);
 if(c.type==='fox')a+=P('M38 -46 Q131 -39 133 -129 Q93 -145 55 -97Z',f)+P('M131 -130 Q137 -97 111 -65 L94 -103Z','#B9A68A');
 if(c.type==='otter')a+=P('M38 -39 Q127 -20 153 21 Q95 42 44 -2Z','#8A6F52');
 if(c.type==='beaver')a+=E(79,-36,42,69,'#77664F','transform="rotate(-38 79 -36)"')+line(64,-76,99,4,'#9E8A6A',3);
 if(c.type==='dragon')a+=P('M47 -57 Q128 -52 130 -132 L166 -115 Q146 25 35 -5Z',f)+P('M-48 -160 L-117 -237 L-121 -127 L-78 -137 L-63 -94Z','#D9B18D')+P('M44 -160 L114 -236 L121 -124 L79 -138 L62 -94Z','#D9B18D');
 if(c.type==='turtle')a+=E(33,-107,83,103,'#697F6B');
 a+=(pose==='sit'?P('M-41 -61 L-12 -61 L-13 -17 L-53 -17 L-53 24 L-77 24 L-77 -37 L-40 -39Z',c.pants)+P('M13 -61 L42 -61 L42 -39 L78 -37 L78 24 L54 24 L54 -17 L13 -17Z',c.pants)+E(-66,24,25,12,c.type==='human'?'#7A7468':f)+E(67,24,25,12,c.type==='human'?'#7A7468':f):R(-40,-61,28,60,c.pants,10)+R(13,-61,28,60,c.pants,10)+E(-30,0,29,13,c.type==='human'?'#7A7468':f)+E(29,0,29,13,c.type==='human'?'#7A7468':f))+P('M-48 -182 L48 -182 L59 -50 Q0 -32 -58 -50Z',c.cloth);
 if(c.apron)a+=P('M-30 -182 L-24 -122 L24 -122 L30 -182 L43 -182 L49 -51 L-48 -51 L-43 -182Z',typeof c.apron==='string'?c.apron:c.cloth)+R(-24,-103,48,29,'#E4D7B5',7);
 if(c.type==='human'&&c.longHair)a+=R(-62,-274,124,121,c.hair,45);
 if(c.type==='rabbit')a+=E(-27,-298,19,65,f,'transform="rotate(-10 -27 -298)"')+E(27,-302,18,67,f,'transform="rotate(8 27 -302)"')+E(-27,-304,7,42,'#BEAEB0')+E(27,-309,7,40,'#BEAEB0');
 if(['fox','deer','badger'].includes(c.type))a+=P('M-48 -248 L-68 -303 L-13 -268Z',f)+P('M48 -248 L68 -303 L13 -268Z',f);
 if(['squirrel','beaver','otter'].includes(c.type))a+=E(-49,-267,20,24,f)+E(49,-267,20,24,f);
 if(c.type==='dragon')a+=P('M-43 -269 L-46 -312 L-20 -280Z','#DEC9A0')+P('M43 -269 L46 -312 L20 -280Z','#DEC9A0');
 a+=E(0,-224,65,59,f);
 if(c.type==='human')a+=P('M-61 -238 Q-66 -302 -7 -301 Q61 -307 63 -240 L48 -229 L37 -269 Q7 -244 -29 -256 L-48 -228Z',c.hair);
 if(c.braid)a+=P('M-50 -246 Q-80 -215 -57 -180 Q-75 -152 -52 -132','none',c.hair,15)+R(-54,-267,29,7,'#C9AD6C',3);
 if(c.bun)a+=E(0,-305,32,25,c.hair);
 if(c.curly)a+=[-43,-20,3,26,44].map(xx=>E(xx,-276+Math.abs(xx)*.13,18,18,c.hair)).join('');
 if(c.type==='badger')a+=P('M-55 -264 L-22 -276 L-8 -186 L-34 -179Z','#65706A')+P('M55 -264 L22 -276 L8 -186 L34 -179Z','#65706A')+E(0,-201,33,25,'#E4DECA');
 if(c.type==='fox')a+=P('M-59 -229 L-16 -210 L0 -217 L16 -210 L59 -229 Q39 -170 0 -172 Q-39 -170 -59 -229Z','#F0ECDD');
 if(c.type==='otter')a+=E(0,-201,43,28,'#E7DBC2');
 if(c.type==='beaver')a+=E(0,-202,36,27,'#B79C78')+R(-11,-188,22,15,'#EBE2C7',3);
 if(c.type==='owl')a+=E(-26,-231,29,33,'#D1D7CD')+E(26,-231,29,33,'#D1D7CD')+P('M-8 -210 L8 -210 L0 -196Z','#C4AB75');
 if(c.type==='dragon')a+=E(0,-201,43,28,'#DDB996')+E(-19,-205,4,3,'#92735C')+E(19,-205,4,3,'#92735C');
 a+=E(-23,-231,5,6,ink)+E(23,-231,5,6,ink)+P(['think','stop'].includes(pose)?'M-9 -189 L9 -189':'M-11 -190 Q0 -184 12 -191','none','#91775F',2);
 if(!['human','dragon','owl'].includes(c.type))a+=E(0,-211,8,6,'#796C59');
 if(c.beard)a+=P('M-30 -191 Q0 -159 32 -191 Q9 -148 -18 -168Z',c.hair||'#D1CBB5');
 if(c.glasses)a+=E(-24,-232,21,18,'none','stroke="#847F6A" stroke-width="3"')+E(24,-232,21,18,'none','stroke="#847F6A" stroke-width="3"')+line(-3,-232,3,-232,'#847F6A',3);
 if(c.scarf)a+=R(-49,-180,98,21,c.scarf,8)+P('M21 -165 L46 -165 L57 -106 L29 -115Z',c.scarf);
 const poses={sit:[[39,41],[-39,41]],stand:[[-10,64],[10,64]],point:[[-9,66],[81,-20]],hold:[[39,41],[-39,41]],reach:[[70,25],[59,20]],think:[[40,-38],[9,65]],up:[[-36,-87],[39,-90]],low:[[34,83],[57,72]],wave:[[-7,64],[36,-100]],open:[[-59,21],[61,18]],write:[[44,46],[83,44]],stop:[[-8,65],[70,-56]]};
 const v=poses[pose]||poses.stand;a+=arm(-43,-155,...v[0],f)+arm(43,-155,...v[1],f);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function crane(x,y,s=1,pose='point'){return G(x,y,s,R(-30,-67,12,70,'#9A977F',4)+R(21,-67,12,70,'#9A977F',4)+E(0,-143,62,90,'#C9D0C5')+P('M-52 -191 L50 -190 L63 -83 L-62 -83Z','#647B90')+P('M0 -197 Q-22 -251 -1 -280','none','#D0D7CA',30)+E(9,-294,36,35,'#D9DBCB')+P('M36 -299 L129 -279 L36 -274Z','#929B91')+E(20,-301,4,6,ink)+E(20,-301,15,14,'none','stroke="#818B83" stroke-width="3"')+arm(43,-162,pose==='point'?77:5,pose==='point'?-34:58,'#CDD5C9',22));}
function octopus(x,y,s=1){return G(x,y,s,[-82,-40,0,40,82].map((xx,i)=>P(`M${xx*.6} -47 Q${xx*1.5} ${22+i%2*25} ${xx*1.7} -6`,'none','#9D97AB',24)).join('')+E(0,-110,92,105,'#A6A0B4')+E(-31,-119,21,20,'none','stroke="#666D78" stroke-width="4"')+E(31,-119,21,20,'none','stroke="#666D78" stroke-width="4"')+line(-10,-119,10,-119,'#666D78',4)+E(-31,-120,5,7,ink)+E(31,-120,5,7,ink)+P('M-17 -78 Q0 -67 17 -78','none','#777284',3)+P('M0 -34 L-29 -47 L-29 -20 L0 -31 L29 -47 L29 -20Z','#967866'));}
function room(wall='#D7D0B6',night=false){return R(0,0,1000,800,wall,0)+R(0,624,1000,176,night?'#909B91':'#B7B395',0)+R(648,93,255,324,'#B2AD91',111)+R(666,111,219,285,night?'#5E7A87':'#BED4CD',94)+line(777,116,777,393,'#D6C7A3',10)+line(670,253,879,253,'#D6C7A3',10)+R(626,407,297,24,'#BCA47A',6)+(night?E(826,179,31,31,'#E9D9A4'):cloud(765,185,.47,'#E6E6CF'))+line(0,624,1000,624,'#A9A389',6);}
function field(snow=false,night=false){return R(0,0,1000,800,night?'#526F80':'#CBDDD4',0)+cloud(220,178,.95,night?'#82949A':'#E8E9D5')+E(797,141,57,57,night?'#E0D5AE':'#EAD7A3')+P('M0 487 Q254 339 494 459 Q749 354 1000 454 L1000 800 L0 800Z',snow?'#DCE4DE':'#B7C7A0')+P('M0 661 Q440 563 1000 673 L1000 800 L0 800Z',snow?'#EEF0E1':'#A9BB91')+tree(52,592,.98,snow?'#B2C4B8':'#8FA888')+tree(936,587,.87,snow?'#BECBC0':'#9DB18A');}
function shelf(x,y,s=1){return G(x,y,s,R(-129,-235,258,245,'#A79474',6)+[-221,-113,-5].map(yy=>R(-116,yy,232,91,'#C7B995',2)).join('')+[-90,-46,0,44,87].map((xx,i)=>R(xx,-196,29,76-i%2*13,['#88A6A0','#B9A180','#A49DB1'][i%3],3)).join(''));}
function note(x,y,s=1,kind='lines',rot=0){let a=R(-94,-68,188,136,paper,5,'stroke="#CBBE9E" stroke-width="2"');
 if(kind==='lines')a+=[-39,-18,3,24,45].map((yy,i)=>line(-66,yy,64-i%2*20,yy,'#9EA88E',4)).join('');
 if(kind==='grid')a+=[-37,-9,19,47].map(yy=>line(-72,yy,73,yy,'#ADB59C',2)).join('')+[-36,0,36].map(xx=>line(xx,-53,xx,52,'#ADB59C',2)).join('')+P('M-58 -22 L-49 -12 L-28 -39 M12 31 L21 41 L45 12','none','#6F9C8F',5);
 if(kind==='routes')a+=P('M-71 40 Q-36 -65 59 -28 L71 27','none','#AA8068',5)+P('M-71 40 L-27 40 L-9 11 L42 36 L71 27','none','#709C94',6)+E(-71,40,8,8,'#D6B870')+E(71,27,8,8,'#D6B870');
 if(kind==='bell')a+=E(-50,-6,11,11,'#829B8C')+E(-18,-6,11,11,'#829B8C')+line(10,-6,62,-6,'#829B8C',8)+line(-52,35,55,35,'#B4AD8D',4);
 if(kind==='columns')a+=line(-29,-50,-29,50,'#AAA98C',3)+line(31,-50,31,50,'#AAA98C',3)+[-46,-22,3,28].map(yy=>line(-76,yy,-40,yy,'#8F9F8B',3)+line(-17,yy,18,yy,'#A98E74',3)+line(42,yy,72,yy,'#9EABB1',3)).join('');
 if(kind==='key')a+=key(-16,0,.74)+line(-64,45,63,45,'#AAA98C',4);
 if(kind==='water')a+=P('M-74 -13 Q-49 -38 -24 -14 Q0 9 25 -14 Q50 -37 74 -13 M-74 20 Q-49 -4 -24 20 Q0 43 25 20 Q50 -4 74 20','none','#85ACAD',6);
 return G(x,y,s,a,rot);}
function pencil(x,y,s=1,rot=0){return G(x,y,s,R(-4,-61,8,102,'#C0A266',2)+P('M-4 41 L4 41 L0 55Z','#746D5A'),rot);}
function stool(x,y,s=1){return G(x,y,s,R(-40,-3,13,76,wood,3)+R(27,-3,13,76,wood,3)+E(0,-5,57,18,'#C7B089'));}
function flag(x,y,s=1,c='#8DAE8D'){return G(x,y,s,line(0,0,0,-201,'#A18E6C',8)+P('M3 -193 L118 -180 L94 -138 L3 -151Z',c));}
function bell(x,y,s=1,crack=false){return G(x,y,s,P('M-72 23 Q-52 -12 -51 -87 Q-40 -139 0 -143 Q41 -139 52 -88 Q54 -11 73 23Z','#C2A26B','#9F8B66',4)+E(0,24,74,18,'#A98F61')+E(0,23,59,10,'#806F55')+E(0,31,15,17,'#C6A572')+R(-15,-159,30,23,'#AF9568',7)+(crack?P('M24 -113 L6 -80 L27 -57 L12 -22','none','#756D59',4):''));}
function mallet(x,y,s=1,rot=0){return G(x,y,s,R(-5,-5,10,79,'#9D8768',3)+R(-31,-20,62,31,'#C2A47B',7),rot);}
function clock(x,y,s=1,hands=0){return G(x,y,s,E(0,0,70,70,'#B59B70')+E(0,0,60,60,paper)+Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return line(Math.sin(a)*48,-Math.cos(a)*48,Math.sin(a)*53,-Math.cos(a)*53,'#8D9279',3);}).join('')+line(0,0,hands?25:0,hands?-25:-39,'#798B7B',5)+line(0,0,31,18,'#798B7B',4)+E(0,0,5,5,'#8E876C'));}
function cart(x,y,s=1){return G(x,y,s,R(-101,-85,202,69,'#BBA17B',8)+R(-105,-18,210,15,'#9F8E6F',4)+E(-67,0,26,26,'#8B8A73')+E(67,0,26,26,'#8B8A73')+line(101,-41,153,-99,'#A28F6C',7));}
function town(){return R(0,0,1000,800,'#C8DCDA',0)+cloud(257,160,1.05,'#E7E8D5')+P('M0 531 L1000 408 L1000 800 L0 800Z','#B7C6AE')+[110,360,720,910].map((x,i)=>G(x,565-i%2*52,.8,R(-107,-244,214,244,'#BDD6CB',5,'fill-opacity=".75" stroke="#92B6AD" stroke-width="4"')+P('M-129 -240 L0 -345 L129 -240Z','#95B8B0')+R(-31,-101,63,101,'#94AE9F',27)+R(-84,-208,52,62,'#DBE9D6',9)+R(31,-208,52,62,'#D9E7D4',9))).join('')+P('M0 739 Q436 643 1000 606 L1000 800 L0 800Z','#C9C4A3');}
function bellRoom(){return room('#D1D2B9')+P('M73 584 L73 98 L514 98 L514 584','none','#9A9980',23)+line(70,102,514,102,'#BAAD88',17);}
function distantClockTower(x,y,s=1){return G(x,y,s,R(-65,-273,130,278,'#BFC0A6',6)+P('M-80 -271 L0 -341 L80 -271Z','#809E94')+R(-45,-244,90,117,'#6B8C87',39)+bell(0,-173,.51)+R(-38,-82,76,87,'#99AA94',35)+line(-67,-114,67,-114,'#D9CEAC',9)+E(0,-66,11,11,'#BDC5AA'));}
function clockScene(i,cover){
 if(cover)return town()+bell(650,349,1.36)+person('ami',373,750,1.4,'point')+flag(726,746,.7)+note(558,624,.68,'bell',-8);
 const a=person;
 switch(i){
 case 0:return town()+bell(750,260,.7)+a('ami',355,754,1.4,'think')+cart(747,733,.7);
 case 1:return bellRoom()+bell(280,318,1.1,true)+R(220,473,89,69,'#B5A16F',10)+crane(730,746,1.25)+a('ami',480,746,1.08,'hold');
 case 2:return room()+shelf(170,557,.8)+table(613,628,1.25)+bell(617,538,.8)+a('ami',340,747,1.22,'reach')+mallet(493,521,.7,-48);
 case 3:return town()+cart(720,706,1.05)+a('visitor',512,723,.9,'stop')+a('deer',214,736,.92,'hold')+R(124,539,150,64,'#C2A273',15)+bell(825,205,.55);
 case 4:return town()+a('ami',368,749,1.35,'open')+a('deer',732,743,1.18,'think',true)+mallet(303,722,.7,-70)+R(588,248,129,94,'#A5AA8E',8);
 case 5:return bellRoom()+a('ami',329,748,1.2,'write')+table(580,640,1.5)+note(569,602,1.25,'routes')+pencil(485,549,.6,48)+note(773,585,.55,'bell',15);
 case 6:return field()+P('M578 800 L654 281 L1000 251 L1000 800Z','#9DAD9E')+a('visitor',735,747,1.2,'point')+a('ami',351,750,1.3,'hold')+note(419,602,.58,'lines');
 case 7:return R(0,0,1000,800,'#547586',0)+E(795,139,56,56,'#E3D7AF')+cloud(210,155,.76,'#8DA4A6')+P('M0 492 Q177 365 409 461 Q653 385 1000 472 L1000 800 L0 800Z','#A8B79B')+P('M0 660 Q360 593 1000 674 L1000 800 L0 800Z','#9BAF8D')+distantClockTower(184,464,.86)+P('M661 800 L730 318 L1000 270 L1000 800Z','#899D94')+a('ami',431,756,1.4,'write')+note(548,603,.8,'bell',-8)+P('M238 293 Q353 247 488 293 M244 320 Q357 281 466 320','none','#D2D5B9',4);
 case 8:return town()+a('ami',298,754,1.2,'point')+a('visitor',787,754,1.2,'hold',true)+note(554,470,1.62,'bell')+cart(870,745,.42);
 case 9:return town()+flag(555,735,1.8)+a('ami',403,750,1.18,'up')+cart(800,735,.72)+note(660,535,.58,'bell');
 case 10:return bellRoom()+a('ami',327,749,1.29,'point')+bell(605,404,1.18)+clock(230,537,.57,1)+flag(794,666,.72)+mallet(474,488,.77,-28);
 case 11:return room('#C8CBB3')+E(260,589,180,48,'#A7A993')+R(247,400,22,193,'#9A997D',7)+a('visitor',490,745,1.07,'reach')+a('ami',800,752,1.15,'write')+R(591,293,169,152,'#CFCEB3',9)+R(602,306,146,126,'#B5CBCD',6)+G(634,399,.45,flag(0,0,1));
 case 12:return bellRoom()+crane(784,751,1.23)+a('ami',290,750,1.21,'point')+table(532,648,1.3)+note(489,595,.76,'grid',-7)+note(647,624,.64,'bell',13)+bell(168,298,.62);
 case 13:return town()+a('ami',385,755,1.35,'think')+flag(720,685,.84)+bell(813,254,.72)+note(641,456,.77,'bell');
 case 14:return room()+shelf(786,572,1.13)+a('ami',358,751,1.35,'low')+R(500,592,241,124,'#B59D77',12)+note(569,591,.65,'bell')+bell(778,547,.62)+book(690,642,.55,true,'#A2B8A4');
 case 15:return town()+R(0,0,1000,800,'#426579',0,'opacity=".23"')+glow(196,378,148)+R(135,320,122,116,'#D5C28B',8)+a('ami',433,756,1.38,'stand')+cart(782,730,.7)+bell(826,248,.6);
 default:throw new Error('clock scene');}
}
function seed(x,y,s=1){return G(x,y,s,E(0,0,25,33,'#AC8B5C')+P('M-12 -26 Q16 -9 -6 27 M-20 -9 Q2 7 18 3','none','#DEC47E',3));}
function pot(x,y,s=1,stage=0){return G(x,y,s,P('M-57 -61 L-43 19 Q0 39 43 19 L57 -61Z','#C08F77')+R(-64,-73,128,24,'#D0A38A',8)+E(0,-65,54,13,'#8D876B')+(stage?line(0,-65,0,-143,'#87A57D',6)+leaf(0,-102,.46,'#A8C095',-56)+leaf(0,-126,.45,'#8FAC82',58):'')+(stage>1?flower(0,-142,1.14,'#EDDCB3')+P('M19 -182 Q87 -221 149 -185','none','#E2D9B0',6):''));}
function stove(x,y,s=1){return G(x,y,s,R(-104,-223,208,232,'#959A8B',25)+R(-84,-183,168,136,'#737D71',15)+E(0,-113,57,47,'#D8B27D')+P('M-34 -96 Q-30 -149 -2 -157 Q-8 -119 22 -145 Q52 -106 28 -79Z','#E7C591')+R(-20,-347,40,131,'#8D9588',8)+R(-91,8,23,42,'#858A78',5)+R(68,8,23,42,'#858A78',5));}
function thermo(x,y,s=1){return G(x,y,s,R(-13,-83,26,119,'#E8E1CC',13)+E(0,28,12,12,'#BC897A')+line(0,24,0,-49,'#BE9280',6)+[-62,-43,-24,-5].map(yy=>line(3,yy,10,yy,'#94A28D',2)).join(''));}
function coat(x,y,s=1){return G(x,y,s,P('M-37 -90 L-69 -52 L-45 -30 L-33 -46 L-40 74 L44 74 L34 -46 L49 -29 L72 -54 L38 -91 L0 -71Z','#657BA1')+line(1,-70,1,72,'#ADB6B5',3)+[-38,-7,24].map(yy=>E(0,yy,3,3,'#C7C7B2')).join(''));}
function paperBag(x,y,s=1){return G(x,y,s,P('M-48 -75 L38 -75 L51 41 L-51 41Z','#DAC9A4')+line(-45,-62,39,-62,'#BFA783',3)+leaf(1,12,.34,'#A5B296',25));}
function seedScene(i,cover){
 if(cover)return room('#D5D5C7')+person('qing',361,754,1.45,'hold')+table(681,642,1.15)+pot(682,604,1.1,2)+seed(402,565,.8)+coat(858,565,.7);
 const q=(x=346,y=751,s=1.3,p='hold')=>person('qing',x,y,s,p);
 switch(i){
 case 0:return room('#D7D9CA')+q(382,750,1.45,'think')+seed(433,432,.85)+note(677,601,.85,'lines',12);
 case 1:return room()+q(327,750,1.3,'low')+table(616,643,1.37)+pot(613,590,1.1)+seed(548,552,.66)+note(797,422,.53,'lines');
 case 2:return room('#D4D0B5')+stove(748,611,1.2)+pot(551,669,.98)+q(312,756,1.25,'low')+P('M512 599 L585 599','none','#DEDCC7',6);
 case 3:return room()+q(326,753,1.23,'hold')+person('badgerAunt',770,752,1.25,'point')+table(560,646,1.16)+pot(553,603,.76)+note(662,510,.62,'lines');
 case 4:return room('#CFD4BE')+shelf(180,549,1.3)+q(488,751,1.15,'write')+table(635,649,1.3)+book(635,601,1,true,'#A5B69B')+G(649,585,.42,pot(0,0,1,1))+note(823,625,.6,'columns');
 case 5:return room('#D6D8C5',true)+q(337,755,1.25,'reach')+table(684,649,1.22)+coat(679,597,1.2)+pot(682,536,.75)+R(564,327,235,314,'#CEE0D2',73,'fill-opacity=".2" stroke="#A4B7AA" stroke-width="4"');
 case 6:return room('#D7D2B9',true)+stove(758,609,1.12)+q(367,754,1.37,'hold')+pot(582,672,.8)+coat(378,634,.73);
 case 7:return room('#CBD2BA')+person('badgerAunt',763,753,1.3,'low')+q(322,751,1.25,'think')+table(548,648,1.21)+seed(552,612,1.1)+pot(662,617,.48);
 case 8:return room()+shelf(757,574,1.28)+q(354,751,1.29,'reach')+paperBag(542,594,.95)+thermo(799,494,.76)+seed(491,569,.64);
 case 9:return room('#CBD3BD')+shelf(610,596,1.5)+paperBag(574,523,.74)+thermo(687,494,.8)+q(309,755,1.3,'write')+note(402,603,.75,'grid',-8);
 case 10:return field(true)+R(563,370,330,23,wood,5)+R(583,382,18,322,wood,4)+R(848,382,18,322,wood,4)+q(337,751,1.3,'hold')+person('deer',775,754,1.18,'open',true)+note(474,597,.6,'lines');
 case 11:return field(true,true)+line(167,122,871,122,'#B1A580',4)+[226,466,706].map(x=>R(x,125,53,79,'#D8B27A',24)+glow(x+27,165,70)).join('')+q(416,751,1.36,'stand')+G(689,386,1.2,line(0,-110,0,0,wood,4)+[-50,-17,17,50].map((x,j)=>line(x,0,x,80+j%2*23,'#CBB47C',7)).join(''));
 case 12:return room('#D2D7C6')+q(341,752,1.31,'write')+table(599,647,1.38)+note(590,609,1,'lines')+pencil(490,559,.7,43)+shelf(805,519,.62)+paperBag(796,467,.45);
 case 13:return room('#DAD9C2')+q(345,751,1.28,'low')+table(649,650,1.35)+pot(649,601,1.05)+seed(556,567,.73)+coat(891,547,.69)+R(567,641,169,26,'#AC9674',5);
 case 14:return room('#E0DBBD')+table(680,646,1.35)+pot(681,605,1.15,2)+stool(350,658,1.1)+q(350,719,1.22,'sit')+note(868,578,.55,'lines',16);
 case 15:return room('#DADBC3')+q(338,751,1.28,'write')+table(608,647,1.38)+note(581,608,1,'grid')+G(581,590,.36,pot(0,0,1,2))+paperBag(815,666,.68)+pot(795,413,.42,2);
 default:throw new Error('seed scene');}
}
function house(x,y,s=1,c='#C3B68F'){return G(x,y,s,R(-44,-71,88,75,c,5)+P('M-56 -70 L0 -111 L56 -70Z','#8FA68A')+R(-10,-35,23,39,'#8B9C83',4)+R(-31,-55,15,18,'#E5D9AB',3)+R(18,-55,15,18,'#E5D9AB',3));}
function board(x=594,y=617,s=1,layout='straight'){let a=P('M-255 -138 L190 -138 L285 89 L-185 89Z','#A0B397','#8A997E',8)+P('M-96 -139 Q-15 -35 -42 88','none','#8EBCBC',26);
 if(layout==='straight')a+=line(-193,-77,216,36,'#E5D7AE',16);
 else a+=P('M-199 32 L-138 -22 L-55 -6 L18 -74 L98 -47 L175 35 L230 17','none','#E1D2A8',14);
 const pts=[[-169,-68],[-56,-82],[73,-82],[177,-47],[-120,43],[9,41],[126,52]];
 a+=pts.map(([xx,yy],j)=>house(xx,yy,.43,j===2?'#CEB586':'#C7BC98')).join('')+R(-15,-7,93,28,'#A0B77F',5)+[-3,18,39,60].map(xx=>leaf(xx,10,.18,'#779A70',0)).join('');
 if(layout==='flood')a+=E(62,-46,59,20,'#A2C7C5')+E(8,21,90,21,'#9DBFBD');
 if(layout==='cloth')a+=P('M-224 9 L-132 -62 L-68 -22 L-140 54Z','#8AA489');
 return G(x,y,s,a);}
function boardScene(i,cover){
 const b=(x=320,y=750,s=1.25,p='hold')=>person('loshi',x,y,s,p);
 if(cover)return room('#CBD3BB')+b(360,753,1.42,'point')+table(674,653,1.36)+board(665,600,.86,'bend')+person('anan',693,606,.24,'wave');
 switch(i){
 case 0:return room()+b(332,752,1.34,'hold')+table(641,652,1.45)+board(637,619,.9)+note(442,564,.66,'grid',-11);
 case 1:return room()+b(283,750,1.23,'point')+table(650,654,1.65)+board(640,594,1.08)+person('anan',705,615,.31,'wave')+R(411,689,338,15,'#D4BF85',3);
 case 2:return room()+b(276,751,1.25,'reach')+table(637,657,1.65)+board(631,600,1.08,'cloth')+person('anan',550,635,.31,'stop');
 case 3:return field()+P('M476 747 L670 429 L907 429 L907 747Z','#B9B69A')+house(786,474,1.45)+person('anan',375,752,1.36,'point')+cart(611,690,.9);
 case 4:return room('#AEBDB4',true)+b(285,756,1.2,'point')+table(647,652,1.68)+board(639,602,1.12,'flood')+P('M415 385 L792 653 L699 670Z','#EADDAC','',0,'opacity=".22"');
 case 5:return room()+stool(318,650,1.2)+b(318,716,1.25,'sit')+table(672,646,1.3)+board(650,604,.83,'bend')+person('anan',591,615,.3,'stop');
 case 6:return room()+b(304,751,1.24,'write')+table(646,653,1.5)+board(651,594,.83,'bend')+[451,556,661,766].map((x,j)=>note(x,686,.41,'lines',j%2?7:-7)).join('')+person('anan',694,600,.26,'point');
 case 7:return room()+b(327,752,1.25,'think')+table(632,650,1.45)+note(551,600,1,'routes',-8)+note(740,617,.75,'routes',13)+R(429,528,264,14,'#C7AC76',3);
 case 8:return room()+b(318,753,1.3,'write')+table(631,652,1.5)+note(608,593,1.5,'columns')+note(851,657,.6,'routes',17);
 case 9:return room()+b(291,755,1.24,'reach')+table(641,652,1.64)+board(634,601,1.08,'bend')+P('M443 638 L502 595 L604 611 L648 562 L734 594','none',paper,12)+person('anan',690,625,.28,'point');
 case 10:return room()+b(306,751,1.32,'low')+table(646,653,1.55)+board(642,594,.99,'bend')+E(693,623,34,15,'none','stroke="#9EBFC0" stroke-width="3" stroke-dasharray="6 6"')+R(489,655,47,25,'#D1BBA5',6);
 case 11:return room()+b(310,755,1.25,'point')+table(649,654,1.53)+board(644,608,1.02,'bend')+house(691,487,.53)+P('M686 541 L686 574','none','#A2AD8C',4)+person('anan',580,633,.29,'reach');
 case 12:return field()+P('M0 633 L1000 633 L1000 800 L0 800Z','#CCBE9A')+P('M478 633 Q548 523 645 633','none','#9B9577',26)+cart(735,711,.76)+cart(346,694,.67)+person('anan',516,749,1.2,'point')+clock(777,405,.73,1);
 case 13:return room('#D4CCB4')+R(67,105,866,136,'#AFB49D',7)+[160,380,600,820].map(x=>star(x,174,2.7,'#D7BE7D')).join('')+b(308,755,1.23,'open')+table(661,659,1.46)+board(656,612,.91,'bend');
 case 14:return room('#CFD2B8')+b(283,754,1.18,'hold')+person('deer',827,753,1.2,'think',true)+table(547,654,1.31)+note(493,613,.82,'routes',-7)+note(665,620,.68,'columns',8);
 case 15:return room('#D9D8BC')+b(313,751,1.31,'write')+table(650,655,1.52)+board(663,608,.91,'bend')+person('anan',687,617,.3,'wave')+note(431,653,.65,'grid');
 default:throw new Error('board scene');}
}
function crown(x,y,s=1,state='whole'){let a=E(0,2,118,31,'#8DAFA7')+E(0,-4,106,25,'#CAE0CC')+E(0,-4,79,15,'#92AEA0');
 for(let n=0;n<9;n++){if(state==='repair'&&n>6)continue;const xx=-97+n*24;const yy=-24-Math.sin(n*Math.PI/8)*27;a+=G(xx,yy,1,P('M-17 12 Q-25 -40 -6 -69 Q13 -44 18 10Z','#BED5C5','#91B2A5',2)+P('M-7 -14 Q-9 -32 -3 -43 Q6 -28 7 -14Z','#E8E8CB'));}
 if(state==='crack')a+=P('M73 -58 L63 -34 L82 -14 L69 9','none','#748E84',4);
 if(state==='repair')a+=P('M60 -22 Q86 -46 108 -16 L102 8 L64 9Z','#A6C5B7')+P('M64 -26 L67 -9 L62 9','none','#F2EBD7',7)+E(0,20,128,23,'#9DB5A7');
 if(state==='gold')a=a.replaceAll('#8DAFA7','#C4A266').replaceAll('#CAE0CC','#E2C886').replaceAll('#92AEA0','#B39965').replaceAll('#BED5C5','#DCC17F').replaceAll('#91B2A5','#BA9C68').replaceAll('#E8E8CB','#F2DEAA');
 return G(x,y,s,a);}
function kiln(x,y,s=1,open=false){return G(x,y,s,R(-122,-241,244,256,'#B6A68E',24)+R(-96,-207,192,206,open?'#626D63':'#958D7B',72)+line(-120,-145,120,-145,'#C8BCA0',4)+line(-120,-78,120,-78,'#C8BCA0',4)+(!open?R(52,-102,28,12,'#CFC1A0',5):E(0,-55,78,19,'#9A8B6E'))+R(-19,-334,38,93,'#A59882',7));}
function stand(x,y,s=1){return G(x,y,s,R(-12,-78,24,88,'#A39676',4)+E(0,-80,64,17,'#BFA987')+E(0,12,78,20,'#9C947B'));}
function ribbon(x,y,s=1){return G(x,y,s,P('M-16 15 L-39 77 L-7 63 L9 85 L25 17Z','#AA8F9D')+E(0,0,36,36,'#D0B16E')+star(0,0,2,'#E5CE8F'));}
function crownScene(i,cover){
 const r=(x=328,y=752,s=1.23,p='hold')=>person('yuetao',x,y,s,p);
 if(cover)return room('#D5C8BA')+r(359,756,1.38,'point')+table(685,652,1.3)+stand(682,619,.72)+crown(683,553,1.2,'repair')+note(528,671,.54,'lines',-10);
 switch(i){
 case 0:return room()+r(325,754,1.3,'write')+table(643,655,1.45)+note(590,594,1.25,'lines')+G(590,599,.57,crown(0,0,1))+book(823,614,.57,true,'#A4B7A0');
 case 1:return room('#CFC8B2')+kiln(733,613,1.3)+r(355,755,1.28,'write')+note(522,502,.85,'grid')+crown(285,665,.62);
 case 2:return room()+r(319,751,1.27,'low')+table(628,655,1.45)+crown(627,596,1.58,'crack')+R(420,674,105,47,'#CEC7B2',10);
 case 3:return room()+r(345,753,1.3,'think')+table(648,655,1.42)+crown(657,597,1.35,'crack')+R(478,566,46,58,'#C7B989',9)+E(500,567,22,7,'#D8CBA6')+pencil(444,586,.7,23);
 case 4:return room()+r(287,753,1.18,'open')+person('owlTeacher',809,752,1.23,'point')+table(546,655,1.35)+crown(545,593,1,'crack')+note(730,649,.57,'grid')+line(377,701,696,701,'#BCA675',8);
 case 5:return room('#D9D4BC')+r(284,751,1.22,'think')+person('owlTeacher',809,750,1.21,'point')+table(543,655,1.3)+crown(535,589,1.3,'crack')+E(634,523,48,48,'none','stroke="#AAAB91" stroke-width="5"');
 case 6:return field()+stool(400,657,1.17)+r(400,721,1.3,'sit')+note(626,591,.94,'lines',-10)+G(615,584,.43,crown(0,0,1))+note(785,667,.85,'lines',9)+G(781,657,.42,crown(0,0,1,'crack'));
 case 7:return room()+r(312,753,1.22,'low')+person('owlTeacher',839,754,1.14,'reach',true)+table(571,657,1.43)+crown(584,598,1.12,'repair')+P('M407 624 L439 590 L456 625Z','#B6CFBF')+R(702,588,27,61,'#E3DDC5',7);
 case 8:return room()+r(302,753,1.25,'write')+table(639,654,1.55)+crown(720,572,1.03,'repair')+note(490,623,1,'grid')+E(543,540,85,21,'none','stroke="#96AF9F" stroke-width="14"');
 case 9:return room('#C9CDB7')+r(283,753,1.22,'hold')+person('owlTeacher',833,751,1.15,'point')+table(558,657,1.38)+stand(549,627,.95)+crown(550,541,1.1,'repair')+note(741,649,.53,'grid');
 case 10:return field()+R(622,244,246,219,paper,9)+r(310,754,1.25,'hold')+person('visitor',789,754,1.16,'open',true)+table(568,667,1.17)+crown(563,611,.97,'repair')+note(422,596,.62,'grid');
 case 11:return field()+line(109,149,919,149,'#9C9A7C',3)+[175,315,455,595,735,875].map((x,j)=>P(`M${x} 150 L${x+54} 150 L${x+27} 211Z`,j%2?'#AAC1A7':'#D7B485')).join('')+r(317,755,1.25,'hold')+person('visitor',755,748,1.11,'wave')+G(755,450,.67,crown(0,0,1,'gold'))+ribbon(833,639,.62);
 case 12:return room('#D9CFB7')+r(300,752,1.24,'point')+R(519,635,354,20,wood,5)+R(542,650,18,112,wood,4)+R(832,650,18,112,wood,4)+stand(678,623,1)+crown(680,537,1.2,'repair')+note(795,669,.48,'grid')+note(507,595,.45,'lines');
 case 13:return room()+r(296,753,1.22,'open')+person('visitor',829,754,.92,'point',true)+table(581,653,1.37)+stand(583,624,.85)+crown(583,545,1.11,'repair')+note(738,640,.52,'lines');
 case 14:return room('#D2C8AF')+kiln(757,608,1.18)+r(351,754,1.27,'low')+table(511,657,.7)+E(511,617,94,26,'#BACDBA')+note(636,304,.8,'grid')+R(230,642,110,50,'#A4B6AC',12);
 case 15:return room('#DDD6B7')+P('M866 167 L938 635 L438 635Z','#F3E3B5','',0,'opacity=".3"')+r(303,755,1.23,'write')+table(375,663,.8)+note(422,633,.65,'lines')+stand(733,674,1.2)+crown(735,578,1.16,'repair')+flower(831,451,1.3,'#D4AA9A')+P('M700 340 Q747 282 777 340 L799 342 Q813 293 841 340','none','#B6B9A1',11);
 default:throw new Error('crown scene');}
}
function key(x,y,s=1,rot=0){return G(x,y,s,E(-27,-3,19,19,'none','stroke="#C6AC6F" stroke-width="9"')+line(-8,-3,62,-3,'#C6AC6F',10)+line(38,-3,38,17,'#C6AC6F',9)+line(57,-3,57,12,'#C6AC6F',9),rot);}
function pack(x,y,s=1,showKey=false){return G(x,y,s,R(-50,-78,100,134,'#829D79',24)+P('M-32 -74 Q0 -129 31 -74','none','#718A69',10)+R(-37,-13,74,52,'#A6B493',9)+line(-31,-3,31,-3,'#D9D4AE',3)+(showKey?key(28,-39,.55,-70):''));}
function door(x,y,s=1,red=false){return G(x,y,s,R(-95,-271,190,281,'#A28F6C',65)+R(-80,-257,160,264,red?'#B58170':'#C2AF89',56)+[-49,-9,32,65].map(xx=>line(xx,-211,xx,1,'#AB9875',4)).join('')+E(57,-111,10,10,'#C5AA6B')+R(-104,8,208,18,'#8E8D70',4));}
function stage(empty=false){return R(0,0,1000,800,'#B3AD96',0)+R(0,589,1000,211,'#A79779',0)+R(181,109,641,474,'#CEC7A8',8)+P('M0 0 L202 0 Q265 291 112 590 L0 590Z','#A66F6B')+P('M1000 0 L800 0 Q735 288 888 590 L1000 590Z','#A66F6B')+(!empty?door(726,589,1.12):'')+line(0,600,1000,600,'#CAB68E',9);}
function traveler(x,y,s=1,p='stand'){return person('anan',x,y,s,p)+G(x,y,s,R(-63,-287,126,15,'#DCC17D',7)+R(-35,-324,72,43,'#E1C98B',14));}
function screwTool(x,y,s=1,rot=0){return G(x,y,s,R(-8,-45,16,67,'#B59C6B',5)+line(0,20,0,81,'#AAB7AE',10)+R(-18,76,36,10,'#AAB7AE',3),rot);}
function stageScene(i,cover){
 const l=(x=302,y=750,s=1.22,p='hold')=>person('lijian',x,y,s,p);const z=(x=802,y=752,s=1.17,p='hold')=>person('azhi',x,y,s,p);
 if(cover)return stage()+l(298,756,1.37,'point')+z(767,759,1.33,'hold')+key(526,432,1.22)+pack(503,676,.8,true)+note(378,611,.68,'key');
 switch(i){
 case 0:return field()+P('M471 748 L493 229 Q692 88 896 232 L927 748Z','#A69474')+door(699,730,1.56)+l(307,750,1.23,'hold')+z(781,753,1.17,'point')+note(443,602,.65,'key');
 case 1:return room('#D1D1B8')+l(294,752,1.21,'write')+z(822,751,1.13,'point')+table(548,653,1.4)+note(478,608,.9,'lines',-8)+note(668,621,.88,'key',8)+P('M425 573 L530 624 M426 595 L533 646','none','#B88A79',5);
 case 2:return stage()+traveler(382,586,1.02,'up')+person('visitor',741,586,.95,'open')+pack(431,568,.6)+l(260,800,.78,'hold')+z(829,800,.78,'write')+note(813,701,.5,'key');
 case 3:return room()+l(303,752,1.19,'think')+z(798,753,1.22,'up')+table(546,657,1.28)+note(480,609,.79,'lines',-7)+note(658,632,.79,'key',8);
 case 4:return room('#C7CFB7')+l(305,751,1.21,'hold')+z(809,752,1.23,'point')+table(558,655,1.37)+note(562,593,1.25,'grid')+G(562,632,.37,door(0,0,1))+note(755,645,.54,'grid');
 case 5:return stage()+traveler(366,590,1.05,'point')+pack(566,536,1.06,false)+key(573,445,.53,-67)+l(801,788,.8,'hold')+P('M607 414 L587 452','none','#C2B585',3);
 case 6:return room()+l(304,755,1.24,'low')+z(825,754,1.16,'point')+table(564,652,1.44)+pack(564,569,.81,true)+note(705,619,.51,'routes')+R(414,603,74,47,'#C9B180',9)+P('M431 546 L445 571 L483 570 L478 605 L449 605 L426 572Z','#AAB4A2');
 case 7:return room('#D0CCB4')+z(360,754,1.35,'reach')+table(638,654,1.37)+door(765,602,.81)+key(513,584,.94)+screwTool(645,565,.85,60)+note(478,671,.53,'key');
 case 8:return stage()+traveler(373,585,1.04,'hold')+pack(382,495,.77)+person('visitor',739,584,1,'low')+l(271,800,.81,'point')+z(802,800,.83,'hold')+P('M457 129 L236 584 L534 584Z','#E7DBB3','',0,'opacity=".15"');
 case 9:return stage()+l(241,755,1.08,'write')+note(369,637,.6,'lines')+[440,610,780].map((x,j)=>person('visitor',x,796,.83,j===1?'point':'hold')).join('')+pack(551,555,.56,true);
 case 10:return stage()+traveler(369,586,1.01,'low')+key(474,562,.78,-26)+pack(421,558,.62)+person('visitor',734,589,1.01,'reach')+stool(571,551,.62)+l(843,796,.74,'point');
 case 11:return stage()+door(575,592,1.12)+l(290,756,1.16,'point')+z(809,754,1.18,'hold')+note(743,600,.7,'grid')+P('M485 103 L420 594 L721 594Z','#E4DBAF','',0,'opacity=".14"');
 case 12:return room()+l(296,754,1.23,'write')+z(811,752,1.18,'hold')+table(561,656,1.45)+note(560,602,1.3,'columns')+note(748,654,.54,'key');
 case 13:return stage()+traveler(370,587,1.02,'think')+pack(443,558,.63,true)+person('visitor',742,590,.99,'low')+[202,391,580,769].map((x,j)=>person(j%2?'visitor':'anan',x,851,.81,'hold')).join('');
 case 14:return field(false,true)+l(337,754,1.3,'wave')+z(742,751,1.26,'hold')+R(743,605,104,71,'#B39B77',10)+P('M767 605 Q791 572 817 605','none','#8F876B',6)+note(480,641,.62,'lines');
 case 15:return stage(true)+l(390,757,1.37,'write')+stool(669,673,.92)+note(666,627,1.17,'key',11)+note(814,682,.7,'lines',-7)+P('M619 587 L651 573 L654 590 M709 646 L744 659','none','#AE9878',4);
 default:throw new Error('stage scene');}
}
function moonSnail(x,y,s=1,dim=false){return G(x,y,s,P('M-69 4 Q-74 -19 -57 -34 Q-43 -46 -33 -27 L-17 -4 L83 12 Q34 26 -35 21Z','#B4C8BC')+E(17,-35,49,47,dim?'#9CB6BC':'#AACBD0')+P('M43 -18 Q64 -56 21 -69 Q-25 -81 -25 -35 Q-20 -6 13 -14 Q36 -22 16 -45','none','#7FA4B3',5)+P('M25 -61 Q-4 -44 17 -22 Q-21 -34 1 -63Z',dim?'#CAD7CF':'#EEE8C4')+line(-62,-25,-73,-49,'#9CB6AA',4)+line(-43,-27,-32,-50,'#9CB6AA',4)+E(-73,-52,4,5,ink)+E(-32,-53,4,5,ink));}
function tank(x,y,s=1,live=true,low=false){return G(x,y,s,R(-120,-152,240,170,'#CEE1DA',12,'fill-opacity=".28" stroke="#8DB4B6" stroke-width="5"')+R(-114,low?-48:-108,228,low?60:121,'#9BC1C2',7,'opacity=".45"')+P('M-114 0 Q-55 -23 14 -1 L114 -4 L114 11 L-114 11Z','#C2C7AE')+(live?moonSnail(0,-21,.88,true):'')+leaf(-81,-1,.43,'#8DAB8C',15));}
function caseBox(x,y,s=1,empty=true){return G(x,y,s,R(-151,-252,302,266,'#D5E4D6',10,'fill-opacity=".19" stroke="#8FAC9F" stroke-width="7"')+R(-165,10,330,26,'#BCA988',6)+R(-144,32,22,115,'#A59C7F',4)+R(122,32,22,115,'#A59C7F',4)+(!empty?G(0,-105,1,line(-30,-58,26,52,'#9C9D8A',20)+R(-57,-76,63,22,'#969B85',5)):'')+P('M-136 -230 L-109 -230 L-136 -203','none','#E8ECDA',6));}
function sea(low=false,night=false){return R(0,0,1000,800,night?'#6C8D9B':'#BBD6D6',0)+cloud(237,131,1,'#E1E7D8')+R(0,343,1000,457,'#9BC0BF',0)+P('M0 590 Q240 485 514 632 Q790 514 1000 608 L1000 800 L0 800Z','#BAC2A8')+E(597,630,248,81,low?'#A9CBCA':'#90B9B9')+P('M376 613 Q581 584 797 612 M449 656 Q587 639 750 662','none','#D0DDD0',4)+rock(863,626,.38)+rock(280,656,.32);}
function museum(){return room('#B8CFCA')+R(64,134,281,302,'#A6C1B8',138)+R(81,150,247,269,'#97B8B6',122)+P('M87 303 Q198 272 322 308','none','#C7D8C9',4)+E(193,220,12,12,'none','stroke="#CEE1D1" stroke-width="3"');}
function museumScene(i,cover){
 const o=(x=328,y=754,s=1.26,p='hold')=>person('zhilan',x,y,s,p);
 if(cover)return sea(true)+o(340,753,1.43,'low')+moonSnail(659,643,1.9)+note(498,612,.7,'water',-8);
 switch(i){
 case 0:return museum()+o(333,755,1.3,'hold')+caseBox(719,586,1.2)+book(413,610,.6,true,'#A6B9A5');
 case 1:return sea(true)+o(334,756,1.3,'low')+moonSnail(659,627,1.13)+note(470,616,.7,'water',-9);
 case 2:return sea(true)+o(340,756,1.31,'reach')+tank(616,624,1.05,false)+moonSnail(614,602,.58)+R(836,436,72,51,'#C0AC7B',4)+line(868,484,868,573,'#AD9E77',5);
 case 3:return museum()+o(286,755,1.2,'hold')+octopus(813,746,1.07)+table(560,655,1.43)+tank(566,607,.79)+note(717,651,.58,'lines');
 case 4:return museum()+o(298,754,1.27,'think')+table(645,657,1.6)+tank(641,612,1.23,false)+moonSnail(711,525,.61,true)+leaf(563,609,.46,'#90A98B',30);
 case 5:return sea(true)+o(325,755,1.31,'write')+note(471,611,.72,'water')+moonSnail(678,601,.91)+moonSnail(780,631,.57)+P('M524 576 Q671 539 826 574','none','#8DA580',15);
 case 6:return museum()+o(289,754,1.24,'write')+octopus(826,752,1.06)+table(558,657,1.45)+note(555,602,1.4,'grid')+G(556,596,.48,tank(0,0,1,false))+clock(745,452,.61,1);
 case 7:return museum()+o(336,755,1.33,'think')+octopus(816,752,1.05)+table(581,655,1.17)+note(582,602,1.1,'water')+note(449,538,.65,'lines',-12);
 case 8:return museum()+o(320,755,1.33,'write')+table(640,657,1.52)+note(621,605,1.43,'grid')+tank(810,493,.51)+pencil(485,574,.76,44);
 case 9:return sea(true)+o(360,756,1.3,'low')+tank(492,713,.59,false)+moonSnail(679,615,.93)+rock(805,652,.41);
 case 10:return sea(true)+o(307,755,1.27,'write')+note(455,605,.7,'grid')+moonSnail(698,599,.83)+leaf(746,610,.28,'#8EA47E',45)+P('M447 714 L563 718','none','#D8D6B6',5);
 case 11:return museum()+o(315,755,1.29,'write')+table(641,657,1.55)+[513,668,823].map((x,j)=>note(x,610+j%2*28,.65,'water',j-1)).join('')+G(677,607,.34,moonSnail(0,0,1));
 case 12:return museum()+o(295,756,1.21,'point')+person('visitor',846,754,.93,'think',true)+caseBox(594,594,1.16)+note(500,449,.53,'water')+note(693,451,.53,'water')+note(705,665,.45,'grid');
 case 13:return museum()+o(299,755,1.22,'point')+person('visitor',836,754,1.15,'hold',true)+caseBox(579,582,1.07,false)+note(688,654,.5,'lines');
 case 14:return museum()+o(294,755,1.21,'write')+octopus(831,754,1.04)+table(558,657,1.43)+book(550,605,1.23,true,'#93B2A1')+note(707,641,.61,'grid');
 case 15:return museum()+R(0,0,1000,800,'#8BA6AA',0,'opacity=".13"')+caseBox(705,584,1.17)+note(611,442,.48,'water')+note(804,442,.48,'water')+o(372,757,1.34,'reach')+R(500,539,62,46,'#DCD5BA',8)+P('M0 180 L844 624 L602 624Z','#E5DFC0','',0,'opacity=".15"');
 default:throw new Error('museum scene');}
}
function bottle(x,y,s=1,c='#B9ACCE',full=true){return G(x,y,s,R(-33,-88,66,101,'#D2DDCF',18,'fill-opacity=".35" stroke="#99B5B4" stroke-width="3"')+R(-17,-110,34,26,'#B9A078',5)+(full?P('M-25 0 L-11 -26 L0 -14 L14 -39 L27 0Z',c):'')+P('M-23 -72 L-23 -31','none','#E9EADA',4));}
function bead(x,y,s=1,c='#BBA763'){return G(x,y,s,E(0,0,17,17,c)+E(-5,-6,5,5,'#F1E8CA','opacity=".7"')+P('M-11 6 Q0 10 12 1','none','#DCE3CA',2));}
function ship(x,y,s=1,state='gold'){return G(x,y,s,P('M-127 -17 L143 -17 L99 45 Q-4 69 -101 31Z','#BAA17A','#958768',4)+P('M-109 -13 Q-8 13 129 -13','none','#D4BD8F',6)+R(-37,-77,78,59,'#C6AF88',7)+line(-4,-77,-4,-142,'#A28D69',8)+P('M1 -137 L1 -77 L73 -77Z','#DCD3AE')+(state==='gold'?bead(106,-14,1.05,'#D1B86E'):state==='hole'?E(106,-14,19,13,'#897E64'):P('M82 -28 L131 -23 L113 0 L82 -3Z','#E0CEA7')));}
function radio(x,y,s=1){return G(x,y,s,R(-100,-83,200,113,'#AF9472',15)+R(-79,-64,111,70,'#877E65',6)+[-65,-48,-31,-14,3,20].map(xx=>line(xx,-54,xx,-4,'#B9AA84',3)).join('')+E(64,-38,18,18,'#D4C398')+E(64,4,12,12,'#D4C398')+line(-53,-85,-32,-161,'#98A59A',5));}
function stall(){return field()+R(95,146,812,34,'#A29577',6)+R(130,179,22,495,'#A49777',4)+R(849,179,22,495,'#A49777',4)+P('M75 146 L234 46 L788 46 L925 146Z','#B7A8BE')+[193,309,425,541,657,773].map((x,i)=>R(x,146,108,53,i%2?'#B8A6B8':'#CDBFCA',0)).join('')+R(168,392,661,20,'#A99475',6)+[227,340,453,566,679,792].map((x,i)=>bottle(x,384,.73,['#A5C6CD','#AFC39C','#D3BF86'][i%3])).join('');}
function platform(){return field()+R(0,635,1000,165,'#C0B796',0)+line(0,752,1000,752,'#979D8A',11)+line(0,790,1000,790,'#979D8A',11)+[30,120,210,300,390,480,570,660,750,840,930].map(x=>line(x,747,x+19,800,'#A99E7D',9)).join('')+R(623,208,187,191,paper,6)+G(718,300,.67,clock(0,0,1,1))+R(713,400,13,216,wood,4)+R(129,554,389,25,wood,8)+R(145,577,19,103,wood,4)+R(479,577,19,103,wood,4);}
function timeScene(i,cover){
 const k=(x=327,y=752,s=1.27,p='hold')=>person('qizhou',x,y,s,p);const g=(x=807,y=754,s=1.25,p='hold')=>person('sand',x,y,s,p);
 if(cover)return stall()+k(354,756,1.4,'hold')+g(756,752,1.25,'point')+table(561,654,1.25)+bottle(570,598,1.3)+ship(471,699,.68,'hole')+bead(690,653,1.1,'#D8BF76');
 switch(i){
 case 0:return stall()+k(374,754,1.4,'think')+note(743,284,1,'lines')+ship(692,676,.7,'hole');
 case 1:return stall()+k(293,754,1.18,'hold')+g(816,755,1.22,'point')+table(556,656,1.4)+bottle(561,595,1.1)+note(689,650,.65,'lines')+bead(429,628,1.1,'#89B4C4');
 case 2:return stall()+k(313,753,1.24,'write')+g(809,754,1.18,'hold')+table(557,656,1.45)+note(512,610,.9,'grid')+bottle(676,596,.83,'#A5C6CD')+bead(566,571,.86,'#86B3C5');
 case 3:return platform()+k(338,727,1.15,'think')+person('visitor',767,742,1.08,'wave')+note(672,600,.94,'lines')+G(665,590,.6,P('M-51 6 Q-22 -8 -30 -37 L5 -16 L42 -32 L32 -3 L66 7 L9 16Z','#DCE6D4'))+bead(400,583,.65,'#89B4C4');
 case 4:return room()+k(333,753,1.26,'point')+table(632,655,1.5)+ship(639,620,1.28,'gold')+bead(700,400,1,'#8BB4C4')+bead(752,400,1,'#A9BD91')+bead(805,400,1,'#D0B76E');
 case 5:return room('#D8CFB4')+person('grandpa',781,755,1.3,'open')+k(323,754,1.25,'think')+table(557,654,1.21)+radio(559,611,.9)+bead(397,597,.8,'#D0B76E');
 case 6:return stall()+k(291,755,1.22,'open')+g(810,754,1.22,'point')+table(555,655,1.42)+book(539,608,1.05,true,'#AAB6A2')+bottle(716,593,.85,'#D3BF86')+bottle(416,624,.62,'#AFC39C',false);
 case 7:return stall()+stool(411,651,1.1)+k(411,720,1.35,'sit')+ship(497,616,.85,'gold')+bottle(746,587,.94,'#D3BF86')+table(755,637,.75);
 case 8:return field()+stool(440,647,1.25)+k(440,716,1.4,'sit')+ship(480,619,.91,'gold')+G(804,563,.57,bottle(0,0,1,'#D3BF86'))+g(814,739,.86,'hold');
 case 9:return room()+k(292,754,1.22,'low')+person('grandpa',814,754,1.25,'point')+table(558,655,1.47)+ship(551,606,1.02,'hole')+bead(733,640,.9,'#D0B76E')+screwTool(397,639,.6,-66);
 case 10:return stall()+k(321,755,1.27,'reach')+g(812,754,1.23,'low')+bottle(528,533,.95,'#D3BF86',false)+glow(555,594,146)+[493,517,540,565,589].map((x,j)=>star(x,560+j*13,.35,'#D8C69A')).join('')+G(616,332,.56,radio(0,0,1))+E(614,300,137,106,'none','stroke="#D4D9BC" stroke-width="4"');
 case 11:return room()+k(308,755,1.26,'write')+table(633,657,1.5)+note(612,604,1.34,'lines')+bottle(826,605,.74,'#A5C6CD',false)+G(751,332,.57,P('M-51 6 Q-22 -8 -30 -37 L5 -16 L42 -32 L32 -3 L66 7 L9 16Z','#DCE6D4'));
 case 12:return room('#D4D0B6')+k(298,754,1.22,'hold')+person('grandpa',815,753,1.27,'open')+table(558,653,1.43)+E(553,607,80,36,'#D6BC86')+P('M501 600 L520 617 M539 582 L558 600 M578 588 L595 609','none','#BEA170',4)+note(706,648,.64,'lines');
 case 13:return platform()+k(374,654,1.22,'sit')+note(464,524,.62,'lines',-12)+cloud(483,266,.53,'#E6E7D0')+P('M0 623 L105 414 L262 401 L294 623Z','#9BAC9D');
 case 14:return room('#D5D0B7')+k(294,754,1.23,'point')+person('visitor',818,754,1.15,'think',true)+table(562,656,1.48)+ship(556,593,1.26,'patch')+note(714,660,.52,'lines');
 case 15:return room('#D5CAB0',true)+k(292,756,1.25,'low')+person('grandpa',812,754,1.25,'point')+table(559,655,1.43)+radio(549,596,1)+[431,691].map(x=>R(x,622,39,46,'#CCD5BF',8)+E(x+20,622,19,7,'#99B5AA')).join('')+line(373,702,488,661,'#B9A278',11);
 default:throw new Error('time scene');}
}
function bowl(x,y,s=1,uneven=false,grey=false){return G(x,y,s,P(uneven?'M-71 -27 Q-28 -4 71 -12 Q57 50 -1 47 Q-53 46 -71 -27Z':'M-71 -24 Q0 0 71 -24 Q57 50 0 48 Q-57 50 -71 -24Z','#93B6AE')+E(0,uneven?-20:-24,71,21,'#C7D9C5')+E(0,uneven?-20:-24,58,13,'#8CAEA5')+(grey?P('M24 -12 Q55 -9 61 -15 Q49 35 12 42 L8 9Z','#ADB7AE'):'')+P('M-46 4 Q-37 23 -19 28','none','#C1D4BD',4));}
function helmet(x,y,s=1){return G(x,y,s,P('M-59 8 Q-54 -64 0 -67 Q57 -63 59 8Z','#9EA995')+R(-73,5,146,20,'#879884',9)+E(0,-28,17,20,'#C9B676')+star(0,-29,1,'#E3D39F'));}
function torch(x,y,s=1,lit=false){return G(x,y,s,R(-13,-117,26,173,'#9F9277',5)+P('M-43 -132 L43 -132 L27 -94 L-28 -94Z','#BDA775')+(lit?P('M-27 -142 Q-38 -173 -7 -215 Q-5 -177 17 -190 Q42 -162 19 -136Z','#DAB47E')+glow(0,-174,80):''));}
function training(){return field()+R(64,389,310,24,'#B19E76',7)+R(89,413,18,187,'#A99B78',4)+R(330,413,18,187,'#A99B78',4)+[129,222,314].map(x=>torch(x,366,.6)).join('')+R(664,264,237,188,paper,7)+note(784,357,.89,'grid');}
function certificates(){return [201,427,653].map((x,j)=>R(x-64,151,127,143,'#A79576',8)+R(x-51,164,101,117,paper,3)+G(x,216,.33,torch(0,0,1,true))+line(x-31,258,x+31,258,'#A9AB8E',3)).join('');}
function dragonScene(i,cover){
 const d=(x=316,y=752,s=1.23,p='hold')=>person('lili',x,y,s,p);const dad=(x=803,y=754,s=1.23,p='hold')=>person('dragonDad',x,y,s,p);
 if(cover)return room('#D9CCB0')+kiln(782,556,.78)+d(369,755,1.45,'hold')+table(680,655,1.29)+bowl(672,611,1.45,false,true)+note(531,675,.6,'grid',-12);
 switch(i){
 case 0:return room()+certificates()+d(371,752,1.4,'think')+dad(783,753,1.17,'point')+helmet(681,652,.75);
 case 1:return room('#D3CEB6')+kiln(805,599,1.09,true)+d(306,753,1.27,'think')+person('turtle',744,750,1.25,'point')+table(525,654,1.1)+bowl(524,610,1.12)+note(589,478,.67,'grid');
 case 2:return room()+d(312,755,1.25,'hold')+dad(815,753,1.27,'point')+table(559,654,1.44)+helmet(550,596,1.11)+note(721,642,.66,'grid');
 case 3:return room()+d(325,753,1.31,'write')+table(642,657,1.5)+note(536,594,.93,'grid',-7)+note(747,624,.91,'grid',9)+G(535,577,.24,torch(0,0,1,true))+G(747,611,.3,bowl(0,0,1))+pack(840,690,.65);
 case 4:return training()+d(370,755,1.3,'low')+person('visitor',813,754,1.2,'point')+R(490,563,205,123,'#BCA780',12)+P('M491 565 L518 500 L707 533 L696 568Z','#CBB78F')+R(576,568,32,46,'#D5C69D',5);
 case 5:return room('#D6CDB2')+kiln(789,589,1.07)+stool(314,653,1.1)+d(314,716,1.25,'sit')+person('turtle',797,754,1.18,'stop')+table(556,656,1.24)+note(555,601,1.03,'grid');
 case 6:return room()+d(317,753,1.31,'think')+table(641,657,1.52)+note(531,594,1.04,'grid',-6)+note(752,617,.99,'grid',7)+G(530,580,.23,torch(0,0,1))+G(748,600,.29,bowl(0,0,1))+clock(652,368,.75,1);
 case 7:return room('#D5C9AF',true)+d(294,753,1.21,'open')+dad(813,752,1.29,'hold')+table(558,656,1.43)+note(478,611,.8,'grid',-8)+note(665,623,.8,'grid',8)+helmet(824,423,.43);
 case 8:return room()+certificates()+d(303,755,1.27,'open')+dad(779,754,1.34,'think')+helmet(567,639,.98)+table(568,672,.98);
 case 9:return room()+d(290,754,1.22,'write')+dad(808,752,1.27,'point')+table(559,654,1.44)+note(560,598,1.4,'columns')+note(739,654,.55,'grid');
 case 10:return training()+d(302,754,1.23,'hold')+person('visitor',817,754,1.16,'point')+table(559,655,1.39)+screwTool(515,606,.69,55)+mallet(624,593,.58,-72)+note(695,634,.61,'grid');
 case 11:return room('#D6CEB4')+kiln(822,582,.97)+d(326,754,1.3,'low')+table(640,656,1.5)+bowl(641,604,1.35,true)+note(814,655,.55,'grid')+R(455,638,113,13,'#CCB483',3);
 case 12:return room('#D8D0B8')+d(291,753,1.23,'point')+dad(814,753,1.25,'hold')+table(555,654,1.44)+bowl(546,601,1.39,false,true)+note(714,636,.59,'grid');
 case 13:return training()+R(483,397,15,169,'#A39572',4)+R(790,397,15,169,'#A39572',4)+R(459,346,369,51,'#BEAF89',5)+[516,637,758].map((x,j)=>person('visitor',x,349,.38,j%2?'hold':'wave')).join('')+d(330,756,1.17,'think')+dad(728,754,1.28,'stand');
 case 14:return room()+certificates()+d(370,754,1.34,'low')+R(564,580,306,158,'#AA9C7D',12)+bowl(713,548,1.25,false,true)+[-28,0,28].map(xx=>E(713+xx,528,12,8,'#E7D6B4')).join('');
 case 15:return room('#DCD5B9')+d(323,755,1.29,'write')+table(637,655,1.49)+note(549,611,1.03,'grid',-8)+note(756,631,.84,'columns',7)+helmet(245,333,.72)+bowl(810,415,.58,false,true);
 default:throw new Error('dragon scene');}
}
function lighthouse(x,y,s=1,lit=false){return G(x,y,s,P('M-77 0 L-52 -341 L51 -341 L78 0Z','#E5E1CE','#AEB9A6',4)+R(-61,-402,122,67,'#94B1AD',9)+R(-81,-408,162,13,'#829D98',4)+P('M-89 -413 L0 -469 L89 -413Z','#7D9691')+[-39,0,39].map(xx=>line(xx,-393,xx,-343,'#D1D7BD',5)).join('')+R(-23,-90,46,90,'#99ADA1',22)+E(0,-198,16,25,'#8CA8A3')+(lit?glow(0,-372,98)+E(0,-372,27,23,'#EEDCAC')+P('M-15 -382 L-425 -476 L-425 -284 L-15 -363Z','#E5DBAD','',0,'opacity=".23"'):'')+R(-89,-2,178,18,'#ADB8A2',5));}
function coast(night=false,lit=false){return R(0,0,1000,800,night?'#547282':'#C2D6D3',0)+cloud(174,170,.96,night?'#8499A0':'#E4E6D3')+R(0,398,1000,402,night?'#789D9F':'#A1C1BE',0)+P('M500 800 L675 444 L822 425 L1000 525 L1000 800Z','#A2AE96')+P('M561 800 L697 463 L737 461 L631 800Z','#C5BE9A')+lighthouse(790,460,.81,lit)+P('M21 481 Q212 456 425 479 M81 577 Q232 556 432 580 M104 697 Q270 678 438 694','none',night?'#ADC9BF':'#D1DDD0',4)+(night?[135,285,429,568,685,914].map((x,j)=>star(x,71+j%3*46,.45,'#E7D9AB')).join(''):'');}
function lens(x,y,s=1){return G(x,y,s,E(0,0,108,133,'#C3D6C5','fill-opacity=".35" stroke="#A2BAB0" stroke-width="5"')+[26,53,79].map(v=>E(0,0,v,v*1.23,'none','stroke="#A4BDB0" stroke-width="4"')).join('')+line(-106,0,106,0,'#A5B8A8',5)+line(0,-131,0,131,'#A5B8A8',5)+R(-13,132,26,88,'#9EA68B',4)+E(0,221,72,18,'#A4AD92'));}
function towerRoom(){return room('#D3D5C3')+R(66,182,288,19,'#ACAB91',5)+[96,143,190,237,284].map((x,j)=>R(x,101+j%2*17,31,80-j%2*17,['#91ACA7','#B6A785','#A8AF9C'][j%3],4)).join('');}
function voyage(x,y,s=1){return G(x,y,s,R(-40,-47,80,106,'#B9A181',11)+R(-30,-57,60,14,'#A99475',6)+P('M-20 -58 Q0 -85 20 -58','none','#958970',7)+line(-21,-35,-21,46,'#D8C5A1',4)+line(21,-35,21,46,'#D8C5A1',4));}
function towerScene(i,cover){
 const n=(x=326,y=754,s=1.26,p='hold')=>person('lanyin',x,y,s,p);const k=(x=810,y=754,s=1.22,p='hold')=>person('keeper',x,y,s,p);
 if(cover)return coast(true,false)+n(359,755,1.43,'hold')+note(462,603,.65,'routes',-9)+star(572,193,1.2,'#E6D5A3');
 switch(i){
 case 0:return towerRoom()+n(300,755,1.24,'hold')+k(814,753,1.27,'point')+table(559,655,1.45)+note(550,601,1.12,'lines')+book(733,638,.61,true,'#9DB29F');
 case 1:return towerRoom()+n(290,754,1.22,'think')+k(810,753,1.26,'point')+note(549,371,1.7,'routes')+table(558,657,1.35)+book(567,614,.89,true,'#A0B59F');
 case 2:return towerRoom()+n(395,755,1.43,'hold')+note(517,594,.84,'lines',-6)+table(682,651,1.1)+R(690,582,114,77,'#E6DCC0',6)+P('M692 586 L746 621 L802 586','none','#B4BFA7',3);
 case 3:return room('#C9D1BE')+n(292,754,1.22,'hold')+person('visitor',817,754,1.23,'point')+table(558,657,1.45)+note(552,601,1.3,'routes')+P('M480 555 L647 581 M491 582 L622 610 M512 611 L654 631','none','#AC9DB2',5)+G(741,383,.54,P('M-51 6 Q-22 -8 -30 -37 L5 -16 L42 -32 L32 -3 L66 7 L9 16Z','#8BA59B'));
 case 4:return towerRoom()+n(296,754,1.23,'think')+k(816,753,1.26,'open')+table(555,656,1.44)+book(548,613,1.02,true,'#A0B49E')+E(714,628,22,18,'none','stroke="#969B88" stroke-width="4"')+E(764,628,22,18,'none','stroke="#969B88" stroke-width="4"')+line(736,628,742,628,'#969B88',3);
 case 5:return towerRoom()+n(292,754,1.23,'point')+k(810,753,1.27,'hold')+table(556,654,1.44)+book(556,602,1.23,true,'#B1B8A0')+G(582,586,.54,P('M-80 35 Q0 -75 80 35','none','#ABA18A',18)+line(-78,35,78,35,'#C0B08C',6));
 case 6:return towerRoom()+n(296,754,1.24,'write')+k(814,753,1.25,'open')+table(559,655,1.45)+note(521,611,1.04,'grid')+book(717,618,.66,true,'#9BB19C');
 case 7:return towerRoom()+n(288,754,1.21,'write')+k(816,753,1.25,'point')+table(557,655,1.45)+note(487,610,.86,'lines',-5)+note(674,624,.86,'lines',7)+R(466,600,88,15,'#9EA99A',2)+R(648,619,91,15,'#A3AE9D',2);
 case 8:return towerRoom()+lens(267,353,1.09)+n(275,755,1.14,'hold')+k(748,753,1.2,'write')+table(571,655,1.27)+note(569,611,.97,'grid')+key(687,633,.64)+line(67,693,378,693,'#C3AD77',9);
 case 9:return coast(true,false)+G(123,517,.38,ship(0,0,1,'patch'))+n(377,756,1.39,'stand')+E(192,398,8,13,'#E7DDB5')+glow(192,398,52)+line(192,410,192,449,'#A7B9A7',5);
 case 10:return field()+n(302,754,1.24,'hold')+k(811,752,1.28,'open')+table(555,654,1.43)+book(557,612,.85,true,'#B4B79D')+[440,665].map(x=>R(x,598,38,46,'#D3DBBD',7)+E(x+19,598,19,6,'#9EB5A2')).join('');
 case 11:return room('#CAD0B9')+n(295,754,1.23,'point')+person('visitor',814,754,1.22,'hold')+table(558,655,1.43)+note(535,607,1.2,'routes')+note(725,643,.62,'lines')+G(535,575,.12,lighthouse(0,0,1,false));
 case 12:return towerRoom()+n(292,754,1.22,'hold')+person('visitor',815,753,1.17,'think',true)+table(555,655,1.41)+note(478,609,.9,'grid',-5)+note(671,622,.9,'routes',5);
 case 13:return platform()+n(330,752,1.28,'wave')+k(770,754,1.3,'hold')+voyage(664,696,.86)+note(551,599,.52,'grid',-11)+clock(828,573,.25,1);
 case 14:return coast(true,false)+n(367,755,1.32,'point')+person('visitor',578,751,1.3,'stand')+line(147,646,871,646,'#D0C6A6',10)+[183,363,543,723,865].map(x=>line(x,647,x,755,'#C5B99A',9)).join('');
 case 15:return room('#DAD6BC')+n(318,754,1.3,'write')+table(637,656,1.54)+note(566,610,1.06,'lines')+note(781,612,.75,'water',9)+G(777,603,.23,P('M-80 35 Q0 -75 80 35','none','#ABA18A',18))+R(499,262,153,196,paper,7)+lighthouse(576,439,.32,false)+note(758,337,.65,'routes',8);
 default:throw new Error('tower scene');}
}

const storyboards={
 'expansion-0032':clockScene,'expansion-0033':seedScene,'expansion-0034':boardScene,
 'expansion-0035':crownScene,'expansion-0036':stageScene,'expansion-0037':museumScene,
 'expansion-0038':timeScene,'expansion-0039':dragonScene,'expansion-0040':towerScene,
};
export function olderArtwork(story,index,cover=false){
 const draw=storyboards[story.id];
 if(!draw||story.pages.length!==16||(!cover&&(!Number.isInteger(index)||index<0||index>=16)))throw new Error(`No authored older storyboard for ${story.id}/${index}`);
 return svg(draw(index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);
}

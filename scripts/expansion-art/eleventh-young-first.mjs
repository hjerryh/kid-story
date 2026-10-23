// Original scene artwork for reviewed 0401–0408. Unregistered while under visual review.
import {E,R,P,G,line,leaf,tree,cloud,flower,svg} from '../render-illustrations.mjs';
const ink='#45615B',cream='#EFE7CF',wood='#AC916A';
const ring=(x,y,r,c=wood,w=4)=>E(x,y,r,r,'none',`stroke="${c}" stroke-width="${w}"`);
const arm=(x,y,xx,yy,c,w=14)=>P(`M${x} ${y}Q${(x+xx)/2} ${y+18} ${xx} ${yy}`,'none',c,w);
const poses={helpHat:[[-23,-77],[134,-217]],bubble:[[-40,-45],[96,-110]],cheekBubble:[[-24,-207],[96,-110]],dip:[[-40,-45],[100,-118]],lowBubble:[[-40,-45],[110,-62]],knees:[[-40,-45],[40,-45]],cartPull:[[-24,-78],[132,-76]],longHold:[[133,-151],[176,-151]],stoneSides:[[122,-45],[186,-45]],lanternKnob:[[-23,-77],[164,-73]],wash:[[145,-76],[192,-76]],rest:[[-23,-77],[23,-77]],hold:[[-18,-117],[18,-117]],read:[[-60,-115],[60,-115]],right:[[-22,-78],[129,-143]],down:[[-24,-78],[132,-48]],left:[[-129,-143],[23,-78]],wave:[[-94,-222],[21,-77]],point:[[-22,-78],[105,-218]],nose:[[-24,-79],[45,-215]],both:[[-51,-144],[51,-144]],draw:[[-58,-116],[88,-119]]};
function animal(x,y,s=1,kind='mouse',pose='rest',sit=false,carry=true){const fur=kind==='mouse'?'#BA9B78':kind==='mole'?'#6C7168':kind==='pig'?'#D9A69B':kind==='deer'?'#BB976F':kind==='rabbit'?'#E8E6D6':'#969887',cloth=kind==='mouse'?'#7DA7AD':kind==='mole'||kind==='deer'?'#99B28E':kind==='pig'?'#94B5BF':kind==='rabbit'?'#8BAFA3':'#8FAEB8';let a=E(0,0,78,10,ink,'opacity=".12"');if(kind==='mouse')a+=P('M42 -33Q145 3 126 -67','none','#C4A98B',9);if(kind==='raccoon')a+=G(-79,-70,1,E(0,0,25,90,'#8E9485')+[-46,-12,22,55].map(yy=>R(-24,yy,48,14,'#606F68',7)).join(''),-35);
if(kind==='rabbit')a+=E(-48,-292,20,70,fur)+E(48,-292,20,70,fur)+E(-48,-337,17,25,'#B5BBAE')+E(48,-337,17,25,'#B5BBAE');else if(kind==='deer')a+=G(-55,-268,1,E(0,0,21,43,fur),-39)+G(55,-268,1,E(0,0,21,43,fur),39);else if(kind==='pig')a+=P('M-55 -270Q-79 -300 -73 -246L-52 -236Z',fur)+P('M55 -270Q79 -300 73 -246L52 -236Z',fur);else a+=E(-48,-265,29,29,fur)+E(48,-265,29,29,fur)+E(-48,-265,16,17,'#CCB99A')+E(48,-265,16,17,'#CCB99A');
a+=P(sit?'M-25 -59L-51 -26L-40 -9M25 -59L51 -26L40 -9':'M-24 -69L-24 -11M24 -69L24 -11','none',kind==='pig'?'#839CA8':fur,24)+E(sit?-40:-24,-8,25,11,fur)+E(sit?40:24,-8,25,11,fur)+E(0,-120,61,83,fur);if(kind==='pig')a+=P('M-45 -185L-65 -164L-51 -139L-39 -145L-39 -86L39 -86L39 -145L51 -139L65 -164L45 -185Z',cloth)+R(-43,-86,86,39,'#6D8796',6);else if(kind==='raccoon')a+=P('M-48 -177L-16 -177L-6 -77L-52 -77ZM48 -177L16 -177L6 -77L52 -77Z',cloth);else if(kind==='rabbit')a+=P('M-48 -184L48 -184L68 -65Q0 -46 -68 -65Z',cloth);else a+=P('M-48 -177L-31 -177L-31 -135L31 -135L31 -177L48 -177L54 -58L-54 -58Z',cloth)+R(-21,-125,42,33,cloth,5);a+=E(0,-225,63,57,fur);if(kind==='raccoon')a+=E(-26,-229,25,19,ink)+E(26,-229,25,19,ink)+E(0,-205,35,24,'#DADAC3');a+=E(-21,-232,4,5,kind==='raccoon'?cream:ink)+E(21,-232,4,5,kind==='raccoon'?cream:ink)+(kind==='pig'?E(0,-209,27,18,'#CA938B')+E(-10,-209,3,4,'#9F7B70')+E(10,-209,3,4,'#9F7B70'):E(0,-211,8,7,'#8D7C65'))+P('M-12 -194Q0 -183 12 -194','none','#93795F',2);if(kind==='deer')a+=P('M-17 -273Q0 -291 17 -273L5 -251L-5 -251Z',cream);if(carry&&['mouse','rabbit'].includes(kind))a+=line(-44,-179,44,-80,'#DDD3B4',5)+R(26,-101,53,54,cream,7);const hands=poses[pose];for(let j=0;j<2;j++){const [xx,yy]=hands[j];a+=arm(j?44:-44,-169,xx,yy,fur,16)+E(xx,yy,9,9,fur);}return G(x,y,s,a);}
function sprite(x,y,s=1,pose='hold',sit=false,mushroom=false){const skin=mushroom?'#EAE0C9':'#D8BA95',hair='#8C6C50',shirt=mushroom?'#A7BE98':'#ACA0BE';let a=E(0,0,69,9,ink,'opacity=".13"')+P(sit?'M-22 -55L-49 -16M22 -55L49 -16':'M-23 -62L-23 -10M23 -62L23 -10','none','#9DAD83',21)+E(sit?-49:-23,-7,22,10,'#AA916D')+E(sit?49:23,-7,22,10,'#AA916D')+R(-43,-183,86,120,shirt,21)+E(0,-227,57,57,skin)+E(-53,-229,12,17,skin)+E(53,-229,12,17,skin);if(mushroom)a+=P('M-95 -253Q-93 -345 0 -346Q93 -345 95 -253Q0 -217 -95 -253Z','#9E7E59')+E(0,-253,94,23,'#C4AD83');else a+=P('M-57 -244Q-63 -303 0 -297Q62 -293 57 -242L29 -249L7 -270Q-12 -248 -57 -244Z',hair);a+=E(-20,-231,4,5,ink)+E(20,-231,4,5,ink)+P('M-11 -210Q0 -199 11 -210','none','#A08162',2);if(mushroom)a+=line(-42,-180,43,-84,'#C6B995',5)+R(22,-102,51,48,cream,6);for(let j=0;j<2;j++){const [xx,yy]=poses[pose][j];a+=arm(j?40:-40,-166,xx,yy,shirt,15)+E(xx,yy,9,9,skin);}return G(x,y,s,a);}
const ground=()=>R(0,0,1000,800,'#DDE5CE',0)+cloud(240,148,.9)+P('M0 506Q360 430 710 515Q901 470 1000 509L1000 800L0 800Z','#BBCEA5');
const inside=()=>R(0,0,1000,800,'#DCD5BA',0)+R(0,607,1000,193,'#BBAF90',0)+[170,460,760].map(x=>line(x,800,x+35,607,'#A89C80',2)).join('');
const window=(x=771,y=285,s=1)=>G(x,y,s,E(0,0,116,132,'#A4B59A')+E(0,0,99,115,'#C8D8BD')+line(-99,0,99,0,cream,7)+line(0,-115,0,115,cream,7)+R(-130,126,260,16,wood,5));
const bench=(x,y,s=1)=>G(x,y,s,line(-77,0,-87,72,wood,14)+line(77,0,87,72,wood,14)+R(-100,-17,200,21,'#BDA47B',5));
const table=(x,y,s=1)=>G(x,y,s,line(-136,4,-146,140,wood,18)+line(136,4,146,140,wood,18)+P('M-166 0L-146 -40L146 -40L166 0Z','#CAB38A')+R(-166,0,332,15,wood,5));
const mat=(x,y,s=1,c='#A4BBA5')=>G(x,y,s,E(0,0,105,29,c)+E(0,-3,94,22,'none','stroke="#D5DCC1" stroke-width="3"'));
const pencil=(x,y,s=1,r=0,c='#779CA7')=>G(x,y,s,R(-5,-80,10,76,c,2)+P('M-5 -4L0 13L5 -4Z','#746F58'),r);
const notebook=(x,y,s=1)=>G(x,y,s,R(-76,-51,152,102,cream,4)+line(-67,-48,-67,48,'#C5BA99',3)+[-34,-17,0,17,34].map(yy=>ring(-70,yy,4,'#9F9D82',1.5)).join(''));
const breeze=(x,y,s=1)=>G(x,y,s,P('M-80 -7Q-22 -48 78 -16M-55 22Q11 -9 95 13','none','#E7EAD5',5));
const pinwheel=(x,y,s=1,r=0)=>G(x,y,s,line(0,0,0,170,wood,7)+G(0,0,1,P('M0 0L-48 -64L0 -64Z','#B6BF8D')+P('M0 0L64 -48L64 0Z','#D0BA87')+P('M0 0L48 64L0 64Z','#95B4AD')+P('M0 0L-64 48L-64 0Z','#BDA78D')+E(0,0,7,7,cream),r));
const mouseHouse=()=>ground()+R(599,238,324,388,'#C7B998',91)+P('M568 265L757 112L948 265Z','#96AE8C')+G(754,353,.6,E(0,0,95,95,'#9BAF97')+E(0,0,78,78,'#D5DFC5')+line(-78,0,78,0,cream,7))+pinwheel(860,569,.55)+P('M0 748L217 649L537 649L780 800L0 800Z','#CFCCAD');
function drawing(x,y,s=1,kind=0){let a=R(-74,-57,148,114,cream,3);if(kind===0){a+=P('M-62 35Q0 -9 62 35L62 46L-62 46Z','#BACB9B');for(let j=0;j<8;j++)a+=P(`M${-52+j*15} 34q22 -34 32 -23`,'none','#82A378',2);}else if(kind===1){a+=E(0,8,62,33,'#ACCBC0')+[-12,3,18].map(yy=>P(`M-44 ${yy}q22 -8 45 0t29 0`,'none','#658F96',2)).join('');}else a+=G(0,40,.3,animal(0,0,1,'mouse','hold'))+P('M-18 -28L6 -36M-9 -22L12 -30','none','#A48B66',2);return G(x,y,s,a);}
function story401(i,c){if(c)return mouseHouse()+animal(338,750,1.09,'mouse','point')+[0,1,2].map((k,j)=>drawing(570+j*127,569-j%2*27,.78,k)).join('')+breeze(690,449,1.4);return [
()=>mouseHouse()+bench(350,702,.8)+animal(348,739,1,'mouse','read',true)+notebook(348,625,.7)+pencil(414,624,.7,-35)+pinwheel(154,500,.7,28),
()=>mouseHouse()+bench(351,702,.8)+animal(348,740,1,'mouse','draw',true)+notebook(319,626,.65)+pencil(436,620,.69,-23)+breeze(303,448,.65),
()=>mouseHouse()+table(650,627,1.0)+animal(347,749,1.05,'mouse','right')+G(489,576,.75,R(-31,-53,62,83,'#D2DFD2',9,'fill-opacity=".5" stroke="#93AAA0" stroke-width="3"')+E(0,-53,31,7,'none','stroke="#93AAA0" stroke-width="3"'))+P('M684 581L745 555L796 576L730 610Z',cream)+breeze(740,504,.8),
()=>ground()+P('M0 642Q500 404 1000 580L1000 800L0 800Z','#A8C198')+Array.from({length:15},(_,j)=>P(`M${395+j*38} ${668+(j%3)*29}q20 -75 64 -69`,'none','#7F9F74',4)).join('')+animal(294,749,.98,'mouse','draw',true)+drawing(283,634,.62,0)+pencil(380,631,.64,-35)+breeze(715,462,1.5),
()=>ground()+E(695,584,265,140,'#A8C9BB')+[-40,-10,23,52].map(yy=>P(`M507 ${570+yy}Q652 ${549+yy} 870 ${575+yy}`,'none','#7AABA4',3)).join('')+bench(282,711,.77)+animal(280,747,.99,'mouse','draw',true)+drawing(268,633,.65,1)+pencil(366,629,.6,-35),
()=>ground()+P('M267 800Q450 558 755 489L838 532Q531 642 430 800Z',cream)+animal(453,749,1.07,'mouse','draw')+drawing(439,624,.68,2)+pencil(546,620,.67,-31)+breeze(452,422,1.0),
()=>mouseHouse()+table(617,627,1.45)+animal(233,749,1.04,'mouse','right')+[0,1,2].map((k,j)=>drawing(459+j*143,590,.82,k)).join('')+breeze(682,473,.96),
()=>inside()+window(631,333,1.4)+line(404,546,855,546,wood,3)+[0,1,2].map((k,j)=>drawing(479+j*147,606,.82,k)+R(471+j*147,539,12,29,'#B5A27A',3)).join('')+animal(241,750,1.04,'mouse','point')+breeze(642,681,1.1)
][i]();}
function seedbag(x,y,s=1,sit=false){return G(x,y,s,(sit?E(-19,2,19,9,'#8B745B')+E(19,2,19,9,'#8B745B'):R(-25,-7,17,23,'#8B745B',6)+R(9,-7,17,23,'#8B745B',6))+P('M-33 -88L-21 -102L20 -102L34 -88L37 -13Q0 0 -37 -13Z','#C5AC7B')+P('M-28 -91L28 -91M-18 -97L-12 -83M10 -98L18 -83','none',cream,3)+flower(0,-45,.29,'#D5A75D')+E(-13,-69,2.8,3,ink)+E(13,-69,2.8,3,ink)+P('M-6 -58Q0 -53 6 -58','none',ink,1.6));}
const basket=(x,y,s=1)=>G(x,y,s,P('M-44 -29L-32 26Q0 40 32 26L44 -29Z','#B59B70')+P('M-32 -29Q-34 -79 0 -82Q34 -79 32 -29','none','#B59B70',6)+[-19,-2,15].map(yy=>line(-34,yy,34,yy,'#D0BA8F',3)).join(''));
const warehouse=(hall=false)=>inside()+R(61,146,332,434,wood,8)+R(76,160,302,402,'#CCBD99',3)+[0,1].map(row=>R(74,336+row*196,307,13,wood,3)+[0,1,2].map(j=>basket(126+j*100,304+row*196,.72)).join('')).join('')+(hall?R(718,151,223,456,'#9DA88F',50)+R(742,174,176,433,'#B9B696',40)+R(781,252,105,45,cream,6)+`<text x="833" y="282" text-anchor="middle" fill="${ink}" font-size="22" font-family="PingFang SC,sans-serif">厕所</text>`:R(704,170,232,437,'#A7B99A',64)+R(724,193,191,414,'#CDD6B8',53));
const sixSeeds=(x,y,s=1,sit=false,row=false)=>Array.from({length:6},(_,j)=>seedbag(x+(row?j*92:j%3*104)*s,y+(row?0:Math.floor(j/3)*92)*s,s,sit)).join('');
function story402(i,c){if(c)return warehouse(true)+mat(643,695,2.15)+sixSeeds(535,596,.95,true)+sprite(321,749,1.0,'right');return [
()=>warehouse()+sprite(374,749,1.0,'wave')+sixSeeds(508,628,.88),
()=>warehouse(true)+sprite(443,748,1.0,'hold')+sixSeeds(573,630,.82),
()=>warehouse(true)+sprite(332,749,1.0,'right')+sixSeeds(489,632,.85)+P('M436 707h-23M441 727h-30','none','#C6CBB0',3),
()=>warehouse(true)+mat(650,697,2.0)+sprite(362,749,1,'hold')+sixSeeds(551,624,.88),
()=>warehouse(true)+mat(650,697,2.0)+sprite(362,749,1,'right')+sixSeeds(548,627,.9,true),
()=>warehouse(true)+mat(560,696,2.15)+sixSeeds(452,606,1.0,true),
()=>warehouse(true)+R(853,446,77,103,'#A9B8A3',6)+E(890,446,44,16,cream)+line(891,417,891,433,ink,6)+R(827,454,17,64,cream,4)+mat(650,697,2.0)+sprite(362,749,1,'wave')+sixSeeds(548,627,.9,true),
()=>inside()+R(281,306,642,405,wood,9)+R(296,322,611,374,'#C6B796',3)+R(293,496,617,14,wood,3)+R(293,694,617,16,wood,3)+sixSeeds(342,685,.97,true,true)+sprite(163,748,.95,'hold',true)
][i]();}
const bowl=(x,y,s=1,chunks=false)=>G(x,y,s,P('M-49 -4Q-45 47 0 48Q45 47 49 -4Z','#BACAC0')+E(0,-4,49,13,cream)+(chunks?[-24,0,24].map((xx,j)=>R(xx-9,-11-j%2*4,20,15,'#C9AD72',4)).join(''):''));
const cake=(x,y,s=1,missing=false)=>G(x,y,s,missing?P('M0 0L48 -11A52 25 0 1 1 8 -25Z','#C8A56B'):E(0,0,53,25,'#C8A56B')+E(0,-4,45,20,'#D7B77A'));
const spoon=(x,y,s=1,r=0)=>G(x,y,s,line(0,0,0,-63,'#B9AA82',8)+E(0,-72,15,21,'#CBBE98'),r);
function pot(x,y,s=1,ears='up'){return G(x,y,s,R(-32,-15,18,35,'#6D7B70',7)+R(14,-15,18,35,'#6D7B70',7)+P(ears==='down'?'M-57 -76Q-100 -61 -80 -31M57 -76Q100 -61 80 -31':'M-57 -76Q-103 -112 -83 -60M57 -76Q103 -112 83 -60','none','#6A7A70',12)+P('M-66 -98L-56 -28Q0 11 56 -28L66 -98Z','#78877D')+E(0,-98,66,20,'#536C63')+E(-22,-66,4,5,cream)+E(22,-66,4,5,cream)+P('M-12 -44Q0 -34 12 -44','none',cream,2)+P('M-43 -113L-43 -144Q-79 -162 -45 -184Q-18 -208 0 -182Q26 -210 47 -182Q77 -157 43 -143L43 -113Z',cream)+R(-43,-128,86,17,'#D7D7C0',4));}
const breakfast=()=>inside()+P('M42 296Q153 75 500 91Q848 75 958 296L42 296Z','#93AE8A')+P('M85 296Q180 338 274 296Q387 338 500 296Q613 338 726 296Q820 338 915 296','none','#8BA582',14)+R(65,294,15,506,wood,3)+R(919,294,15,506,wood,3)+window(789,434,.7)+table(551,641,1.13)+bench(296,710,.7)+[0,1,2,3].map(j=>line(949+j*11,376+j*56,945+j*11,402+j*56,'#AEBDB0',3)).join('');
function story403(i,c){if(c)return breakfast()+sprite(304,748,.98,'draw',true,true)+pot(765,705,.94)+bowl(540,612,.85,true)+spoon(389,630,.7,-36);return [
()=>breakfast()+sprite(297,748,.97,'hold',true,true)+bowl(532,613,.85),
()=>breakfast()+sprite(297,749,.97,'hold',true,true)+bowl(298,635,.8)+pot(773,713,.94)+cake(562,611,.72),
()=>breakfast()+sprite(297,749,.97,'read',true,true)+bowl(529,612,.88)+cake(529,602,.7)+pot(773,713,.94),
()=>breakfast()+sprite(296,748,.97,'right',true,true)+bowl(528,613,.85)+cake(528,602,.7,true)+G(430,602,.7,R(-27,-45,54,62,'#CAD7C9',6,'fill-opacity=".65" stroke="#9CAD9E" stroke-width="2"')+E(0,-21,23,7,'#B0C4B8')+R(-12,-31,25,17,'#CCB483',4))+spoon(421,609,.64,20)+pot(773,713,.94),
()=>breakfast()+sprite(297,749,.97,'hold',true,true)+bowl(529,612,.85)+cake(529,602,.7,true)+pot(771,713,.94,'down')+spoon(443,612,.65,83),
()=>breakfast()+sprite(297,749,.97,'nose',true,true)+R(331,529,24,18,'#D5B67B',4)+bowl(529,612,.85)+cake(529,602,.7,true)+pot(773,713,.94),
()=>breakfast()+sprite(297,749,.97,'right',true,true)+bowl(529,612,.85,true)+spoon(421,610,.63,-20)+pot(773,713,.94),
()=>breakfast()+sprite(297,749,.97,'right',true,true)+bowl(529,612,.85)+cake(529,602,.7)+spoon(420,609,.63,-20)+pot(769,714,.96)
][i]();}
const hat=(x,y,s=1)=>G(x,y,s,P('M-44 2Q-43 -62 0 -63Q43 -62 44 2Z','#8BAEB7')+E(0,3,57,11,'#7DA0AC'));
const redbag=(x,y,s=1)=>G(x,y,s,P('M-25 -25Q-25 -77 0 -77Q25 -77 25 -25','none','#B78473',6)+R(-38,-30,76,62,'#B77E70',9)+R(-12,-34,24,20,'#BEA590',3));
function elephant(x,y,s=1,wearHat=true,wearBag=true,sit=false,trunk='down'){let a=E(0,0,139,14,ink,'opacity=".12"')+P('M94 -97Q150 -106 140 -55','none','#BB9A71',11)+[-66,-23,27,70].map((xx,j)=>R(xx,sit?-32:-73,34,sit?31:75,j%2?'#B69A73':'#C0A17A',11)).join('')+E(0,sit?-103:-124,108,sit?83:102,'#C5A980')+E(-65,sit?-143:-172,67,66,'#C7AD85')+E(-13,sit?-142:-174,53,65,'#B99B75')+E(-13,sit?-142:-174,39,49,'#D1B991')+E(-90,sit?-158:-185,4,5,ink);const ty=sit?-120:-149; a+=P(trunk==='back'?`M-117 ${ty}Q-164 ${ty+65} -112 ${ty+45}Q-65 ${ty+17} 22 ${ty-12}`:trunk==='out'?`M-117 ${ty}Q-150 ${ty+38} -197 ${ty+6}`:`M-117 ${ty}Q-157 ${ty+70} -135 ${ty+101}Q-115 ${ty+117} -107 ${ty+91}`,'none','#C7AD85',27)+P(`M-82 ${ty+26}q15 11 26 0`,'none','#9B815E',2)+P(sit?'M12 -105Q38 -132 71 -102M4 -76Q32 -91 57 -70':'M12 -142Q38 -169 71 -139M4 -113Q32 -128 57 -107','none','#B29770',2);if(wearBag)a+=line(47,sit?-172:-212,75,sit?-81:-99,'#AC7566',5)+redbag(72,sit?-110:-141,.68);if(wearHat)a+=hat(-65,sit?-211:-239,.8);return G(x,y,s,a);}
const rainyDoor=()=>inside()+R(55,148,362,480,'#9FB49C',75)+R(76,172,320,456,'#B9CBB1',63)+[110,165,220,275,330].map((x,j)=>line(x,250+j%2*53,x-10,276+j%2*53,'#8FADA4',3)).join('')+G(218,592,1.0,P('M0 0Q-17 -145 9 -235','none','#86A581',5)+leaf(-40,-137,1.3,'#8BA981',-68)+leaf(36,-186,1.25,'#99B78C',43))+R(49,619,374,20,wood,5)+bench(817,634,.75);
function story404(i,c){if(c)return rainyDoor()+mat(485,729,.9)+mat(711,729,1.28)+animal(467,749,.85,'mole','hold',true)+elephant(726,737,.83,true,true,true,'out');return [
()=>rainyDoor()+mat(465,738,.85)+mat(713,738,1.21)+animal(441,751,.86,'mole','wave')+elephant(701,738,.87),
()=>rainyDoor()+mat(465,738,.85)+mat(713,738,1.21)+animal(416,751,.86,'mole','wave')+elephant(684,737,.88)+P('M596 760h28M718 763h30','none','#D3C6A7',4),
()=>rainyDoor()+hat(812,610,.63)+mat(466,738,.85)+mat(713,738,1.21)+animal(414,751,.86,'mole','wave')+elephant(684,737,.87,false,true),
()=>rainyDoor()+hat(780,610,.55)+redbag(861,610,.54)+mat(466,738,.85)+mat(713,738,1.21)+animal(411,751,.87,'mole','hold')+elephant(677,738,.88,false,false,false,'back'),
()=>rainyDoor()+hat(780,610,.55)+redbag(861,610,.54)+mat(466,738,.85)+mat(713,738,1.21)+animal(423,751,.88,'mole','left')+elephant(694,737,.86,false,false),
()=>rainyDoor()+hat(780,610,.55)+redbag(861,610,.54)+mat(478,734,.9)+mat(710,733,1.25)+animal(463,747,.86,'mole','hold',true)+elephant(713,736,.87,false,false,true),
()=>rainyDoor()+hat(780,610,.55)+redbag(861,610,.54)+mat(478,734,.9)+mat(710,733,1.25)+animal(463,747,.86,'mole','hold',true)+elephant(713,736,.87,false,false,true,'out'),
()=>rainyDoor()+mat(478,734,.9)+mat(710,733,1.25)+elephant(713,736,.87,true,true,true,'out')+animal(541,739,.86,'mole','helpHat')
][i]();}
const bubble=(x,y,s=1,small=false)=>G(x,y,s,E(0,0,small?29:59,small?29:59,'#D5E0D1','fill-opacity=".35" stroke="#B5CCC3" stroke-width="3"')+P(small?'M-18 -14Q-7 -28 10 -22':'M-39 -27Q-15 -56 20 -44','none','#EED9C6',5)+P(small?'M10 21Q21 12 23 1':'M23 45Q48 31 49 5','none','#97BCAD',4)+E(small?-12:-25,small?-15:-30,small?3:6,small?5:9,cream));
const wand=(x,y,s=1,r=0,film=false)=>G(x,y,s,line(0,38,0,100,'#8FAB8D',10)+(film?E(0,0,36,36,'#CDDCCE','fill-opacity=".65"')+P('M-29 -12Q-7 -37 27 -21','none','#D8B7AF',5)+P('M-26 21Q-5 37 29 13','none','#94B8A2',4):'')+ring(0,0,38,'#D7BA79',7),r);
const porch=()=>inside()+R(500,98,457,512,'#AEC3AE',80)+R(520,122,415,465,'#C6D7C1',65)+[560,615,680,745,810,875].map((x,j)=>line(x,245+j%3*57,x-8,275+j%3*57,'#9BB9AF',3)).join('')+flower(822,536,1.8,'#D7B18C')+R(468,92,31,562,wood,6)+R(938,92,31,562,wood,6)+R(450,86,536,24,'#9CAB8D',5)+table(658,666,.92)+bench(321,710,.74);
const soapdish=()=>G(527,643,1,E(0,0,57,15,'#A3B7AB')+E(0,-4,49,10,'#C8D6C7')+[-23,2,24].map(x=>ring(x,-8,5,'#E2E4CF',2)).join(''));
function story405(i,c){const pig=(pose='bubble')=>animal(321,748,1,'pig',pose,true,false);if(c)return porch()+soapdish()+pig('knees')+bubble(448,533,1.5)+wand(650,636,.65,90);return [
()=>porch()+soapdish()+pig()+wand(417,538,1,0),
()=>porch()+soapdish()+pig()+wand(417,538)+[0,1,2,3,4].map((j)=>E(479+j*31,511+j%3*29,5,3,'#A4BCB1')).join('')+E(288,538,13,9,'#D2A096')+E(352,538,13,9,'#D2A096'),
()=>porch()+soapdish()+pig('cheekBubble')+wand(417,538,1,0,true)+bubble(445,538,.65,true),
()=>porch()+soapdish()+pig()+wand(417,538)+P('M456 513Q558 493 681 516M459 559Q568 580 645 557','none','#B5CFC0',3)+[[-1,0],[1,21],[0,43]].map(([j,k])=>E(688+j*21,509+k,5,4,'#B1C9BC')).join('')+E(321,554,7,7,'#A47D71'),
()=>porch()+soapdish()+pig('dip')+wand(521,630,1,90,true),
()=>porch()+soapdish()+pig('lowBubble')+wand(431,586)+bubble(525,532,1.08),
()=>porch()+soapdish()+pig('knees')+wand(658,631,.6,90)+bubble(406,536,.88),
()=>porch()+soapdish()+pig('dip')+wand(521,630,1,90,true)+E(489,752,37,9,'#99B4AB','opacity=".5"')
][i]();}
const stone=(x,y,s=1,pose='rest',buried=false)=>{let a=buried?'':line(-24,-15,-27,7,'#949B8E',12)+line(24,-15,27,7,'#949B8E',12);if(!buried)a+=P(pose==='spread'?'M-42 -53L-73 -74M42 -53L73 -74':'M-42 -53Q-70 -35 -53 -22M42 -53Q70 -35 53 -22','none','#949B8E',11);return G(x,y,s,a+E(0,-51,51,48,'#9BA297')+E(-17,-59,3,4,ink)+E(17,-59,3,4,ink)+E(29,-43,6,5,cream)+P('M-9 -37Q0 -29 9 -37','none',ink,2));};
const shell=(x,y,s=1)=>G(x,y,s,E(0,0,28,21,'#D2BD95')+P('M17 4Q26 -14 4 -17Q-19 -20 -19 1Q-16 19 1 14Q15 10 7 0Q2 -7 -4 0','none','#A48D69',3));
const goldenPetal=(x,y,s=1,r=0)=>G(x,y,s,P('M-27 1Q-20 -31 22 -25Q38 -1 0 10Z','#D6BA78'),r);
const crown=(x,y,s=1)=>G(x,y,s,P('M-59 -4Q0 10 59 -4','none','#8FA67C',6)+[-46,-22,2,26,50].map((xx,j)=>flower(xx,-7-j%2*5,.29,j%2?'#D2B67F':'#CFAD92')).join(''));
const trellis=()=>ground()+R(143,119,18,517,wood,4)+R(849,119,18,517,wood,4)+[170,230,290].map(yy=>R(117,yy,782,13,wood,4)).join('')+[0,1,2,3,4,5,6,7].map(j=>leaf(179+j*91,207+(j%2)*61,1.2,'#90AF85',(j%2?1:-1)*42)+leaf(213+j*82,133+(j%3)*36,.8,'#A9BF93',38)).join('')+P('M0 785Q429 582 1000 685L1000 800Z','#D0D2B5')+table(701,570,.74)+shell(757,551,.6)+flower(633,549,.47,'#CDAA8B');
const mud=()=>E(518,737,152,31,'#A99F7E');
const cart=(x,y,s=1,body='')=>G(x,y,s,E(-58,28,22,22,'#977F5C')+E(58,28,22,22,'#977F5C')+E(-58,28,8,8,'#CDB48C')+E(58,28,8,8,'#CDB48C')+P('M-87 -22L-68 21L68 21L87 -22Z','#B99D72')+body+R(-86,-18,172,30,'#C7AC80',5)+line(-88,-12,-190,-52,wood,6));
function story406(i,c){if(c)return trellis()+animal(293,742,1,'deer','cartPull')+crown(293,459,.9)+cart(596,713,.9,stone(0,-11,.68,'spread'))+leaf(846,721,1,'#9AAE7F',-32);return [
()=>trellis()+animal(416,746,1,'deer','right')+stone(651,732,.64)+goldenPetal(694,549,.7),
()=>trellis()+animal(430,748,1,'deer','longHold')+stone(585,581,.72)+goldenPetal(693,549,.7),
()=>trellis()+animal(428,748,1,'deer','point')+stone(687,551,.81)+goldenPetal(729,500,.72,41),
()=>trellis()+mud()+animal(303,750,1,'deer','hold')+leaf(541,726,1.35,'#A4B48A',66)+stone(492,738,.75,'rest',true)+goldenPetal(687,549,.7),
()=>trellis()+mud()+animal(350,748,.91,'deer','stoneSides',true)+leaf(541,726,1.35,'#A4B48A',66)+stone(492,738,.75,'rest',true)+goldenPetal(687,549,.7),
()=>trellis()+mud()+animal(350,748,.91,'deer','stoneSides',true)+leaf(557,739,1.27,'#A4B48A',76)+stone(509,730,.8,'spread')+goldenPetal(687,549,.7),
()=>trellis()+mud()+animal(359,747,1,'deer','longHold')+crown(359,464,.92)+cart(645,710,.85)+stone(514,583,.75,'spread')+leaf(489,736,.7,'#A4B48A',70),
()=>trellis()+animal(288,747,1,'deer','cartPull')+crown(288,464,.92)+cart(586,718,.9,stone(0,-11,.7,'spread'))+E(586,652,4,6,'#BBDBD0')+P('M586 552v61','none','#C2DBCD',2)
][i]();}
const moth=(x,y,s=1,nectar=false)=>G(x,y,s,P('M-5 -11Q-44 -48 -46 9L-7 27Z','#9C9C88')+P('M5 -11Q44 -48 46 9L7 27Z','#9C9C88')+P('M-35 -11Q-24 -2 -16 12M35 -11Q24 -2 16 12','none','#DBD8BF',3)+E(0,5,6,24,'#77867A')+E(0,-16,7,7,'#7F8D7E')+P('M-3 -21q-10 -16 -16 -10M3 -21q10 -16 16 -10','none','#AAA992',2)+(nectar?P('M0 29q10 23 28 17','none','#C7C8AE',2):''));
const lantern=(x,y,s=1,light=2)=>G(x,y,s,(light?E(0,-23,light===2?108:66,light===2?116:74,'#E6D997',`opacity="${light===2?.2:.09}"`):'')+P('M-27 -67Q-37 -120 0 -120Q37 -120 27 -67','none','#BD9C67',7)+E(0,-27,45,49,light===2?'#E7DAA8':light===1?'#BEBE9D':'#889E99','stroke="#BD9C67" stroke-width="5"')+R(-38,-78,76,19,'#B59A6B',5)+R(-38,14,76,17,'#B59A6B',5)+E(49,-23,9,9,'#BB9A66')+E(-15,-29,3,4,ink)+E(15,-29,3,4,ink)+P('M-8 -13q8 7 16 0','none',ink,2));
const chime=(x,y,s=1)=>G(x,y,s,line(0,-48,0,0,'#C4C6AB',2)+P('M-27 0Q-20 -41 0 -42Q20 -41 27 0Z','#AEB9A1')+line(0,0,0,47,'#BCC5AB',2)+R(-10,40,20,37,'#C9CCB2',2));
const nightGarden=(door=false)=>R(0,0,1000,800,'#506D72',0)+E(802,126,49,49,'#DEE1BD')+P('M0 520Q400 430 1000 506L1000 800L0 800Z','#718E7E')+P('M211 800Q351 566 848 555L906 612Q518 630 392 800Z','#B6C4B2')+(door?R(68,117,308,492,'#7C9386',60)+R(89,144,266,464,'#9BA48C',51)+E(323,390,7,7,'#BCB998')+chime(399,240,.85):R(657,535,313,68,'#A2B5A2',8))+[0,1,2,3,4].map(j=>flower(715+j*47,528+j%2*36,.9,'#E1E1C6')).join('');
const orbit=(x,y,s=1)=>G(x,y,s,P('M-82 10Q-94 -62 -21 -74M53 -49Q97 -5 62 41','none','#B2C3AE',2));
function story407(i,c){const rabbit=(x=361,y=749,s=1,p='right',sit=false)=>animal(x,y,s,'rabbit',p,sit);if(c)return nightGarden()+rabbit(323,748,1.0,'hold',true)+lantern(323,645,.68,0)+moth(781,443,1.1,true);return [
()=>nightGarden(true)+rabbit(436,749,.94,'hold',true)+lantern(580,692,.74,2)+moth(340,417,.62),
()=>nightGarden()+rabbit()+lantern(490,692,.72,2)+moth(577,621,.65)+orbit(506,652,.8),
()=>nightGarden()+rabbit(361,749,1,'wave')+lantern(386,758,.72,2)+moth(451,677,.67)+orbit(391,699,.7),
()=>nightGarden()+rabbit(375,749,1,'down',true)+lantern(508,777,.64,2)+moth(575,720,.64)+orbit(508,753,.7),
()=>nightGarden()+rabbit(350,749,1,'lanternKnob')+lantern(479,692,.7,1)+moth(549,630,.66)+orbit(479,664,.75),
()=>nightGarden()+rabbit(350,749,1,'lanternKnob')+lantern(479,692,.7,0)+moth(737,493,.7),
()=>nightGarden()+rabbit(336,749,1,'hold',true)+lantern(336,646,.67,0)+moth(787,456,.8,true),
()=>nightGarden(true)+rabbit(474,748,.98,'hold')+G(524,658,.53,P('M-27 -67Q-37 -120 0 -120Q37 -120 27 -67','none','#BD9C67',7)+R(-39,-76,78,20,'#B59A6B',5))+R(499,656,55,54,cream,7)+moth(790,461,.7,true)
][i]();}
const tassel=(x,y,s=1,r=0)=>G(x,y,s,P('M0 0L-8 25M0 0L0 29M0 0L8 25','none','#B47C6C',4),r);
const footprint=(x,y,s=1,r=0)=>G(x,y,s,E(0,0,12,20,'#95876B')+[-8,0,8].map((xx,j)=>E(xx,-21-(j===1?4:0),4,6,'#95876B')).join(''),r);
function blanket(x,y,s=1,state='flat',dirty=false,r=0){let a='';if(state==='roll'){a=R(-130,-41,260,82,cream,30)+E(130,0,24,41,'#D7D1B8')+P('M134 -26q-28 5 -13 32q18 18 21 -8q-1 -17 -13 -11','none','#B8B494',3)+tassel(-117,-32,.65,90)+tassel(-117,32,.65,90)+tassel(130,-32,.65,-65)+tassel(130,31,.65,-65)+[0,1,2,3].map(j=>E(126+j%2*8,-19+j*12,2,2,'#9D9071')).join('')+E(-104,-8,3,4,ink)+E(-104,10,3,4,ink)+P('M-88 -8q-7 7 0 14','none',ink,2);}else{const half=state==='half',fold=state==='fold',w=half?101:162;a=R(-w,-90,w*2,180,cream,8)+R(-w+9,-81,w*2-18,162,'none',4,'stroke="#D7D0B4" stroke-width="3"')+tassel(-w,-90,.8,-100)+tassel(w,-90,.8,100)+tassel(-w,90,.8,-15)+tassel(fold?15:w,90,.8,state==='foot'?105:15)+E(-w+26,-14,4,5,ink)+E(-w+26,14,4,5,ink)+P(`M${-w+40} -10q12 10 0 20`,'none',ink,2);if(dirty&&!fold)a+=footprint(91,36,.9,-20)+footprint(130,39,.9,15);if(fold)a+=P('M162 90L15 90L162 -70Z','#D9D3BB')+line(15,90,162,-70,'#BFBDA2',2);if(half)a+=line(21,-87,21,87,'#C8C2A8',2);}return G(x,y,s,a,r);}
const blanketHouse=()=>inside()+window(777,289,1.0)+R(96,509,281,94,'#B3A481',17)+R(91,593,12,79,wood,4)+R(359,593,12,79,wood,4)+R(96,487,281,44,'#BAC9B0',13)+R(115,480,88,32,cream,10);
const yard=()=>ground()+P('M0 678Q513 570 1000 686L1000 800L0 800Z','#CDD2B6')+R(69,192,196,412,'#C7BA98',54)+R(94,218,145,386,'#A4B59B',43);
const basin=(x,y,s=1)=>G(x,y,s,P('M-124 0Q-117 87 0 90Q117 87 124 0Z','#99B5AD')+E(0,0,124,43,'#C5D8CB')+E(0,1,111,34,'#B4CBBE'));
function story408(i,c){const rac=(x=385,y=749,s=1,pose='hold',sit=false)=>animal(x,y,s,'raccoon',pose,sit,false);if(c)return blanketHouse()+rac(339,748,1,'read')+blanket(656,628,1,'flat',false,-4);return [
()=>blanketHouse()+rac(404,748,1,'both')+blanket(403,604,.9,'half',false),
()=>yard()+blanket(573,670,1,'flat',true)+rac(703,717,1,'both'),
()=>blanketHouse()+rac(373,749,1,'down',true)+blanket(630,674,.94,'fold',true),
()=>blanketHouse()+bench(764,706,.72)+rac(435,748,1,'read')+blanket(435,621,.92,'roll'),
()=>blanketHouse()+rac(341,748,1,'down',true)+blanket(614,674,.97,'flat',true),
()=>yard()+basin(605,711,1)+P('M450 666L698 675L675 715Q566 734 521 709L505 754L441 742Z',cream)+tassel(450,666,.7,-90)+tassel(698,675,.7,90)+tassel(675,715,.7)+tassel(441,742,.7)+E(463,712,3,4,ink)+E(461,731,3,4,ink)+P('M478 713q9 9 -2 19','none',ink,2)+footprint(586,691,.49,-35)+footprint(615,696,.49,-35)+rac(350,748,1,'wash',true)+R(425,650,42,24,'#E0D7BC',7)+[507,537,564].map((x,j)=>ring(x,677-j%2*8,8,'#E8E6D3',3)).join(''),
()=>yard()+line(477,479,451,745,wood,12)+line(822,479,849,745,wood,12)+line(477,491,822,491,wood,12)+blanket(651,574,.91,'flat')+[548,701,761].map(x=>P(`M${x} 688q-8 13 0 17q8 -4 0 -17`,'#B2D1C3')).join('')+bench(305,712,.72)+rac(305,748,.96,'hold',true),
()=>R(0,0,1000,800,'#4C6872',0)+[0,1,2,3,4,5,6,7,8].map(j=>E(110+j*91,111+(j%3)*79,3,3,cream)).join('')+P('M0 569Q479 435 1000 570L1000 800L0 800Z','#7B987D')+blanket(567,647,1.1,'foot',false,-10)+G(740,706,.75,animal(0,0,1,'raccoon','hold',true,false),-80)+E(828,731,24,12,wood)+E(866,731,24,12,wood)+[130,241,883].map((x,j)=>E(x,628+j*19,4,4,'#DAD99F')).join('')
][i]();}

const scenes={'expansion-0401':story401,'expansion-0402':story402,'expansion-0403':story403,'expansion-0404':story404,'expansion-0405':story405,'expansion-0406':story406,'expansion-0407':story407,'expansion-0408':story408};
export function eleventhYoungFirstArtwork(story,index,cover=false){if(!Object.hasOwn(scenes,story?.id)||story.status!=='text-ready'||story.ageBand!=='3-5'||!Array.isArray(story.pages)||story.pages.length!==8||story.provenance?.review!=='full-text-reviewed'||typeof story.title!=='string'||!story.title.trim()||story.pages.some((p,j)=>p?.id!==`p${String(j+1).padStart(2,'0')}`||typeof p.text!=='string'||!p.text.trim()||typeof p.scene?.action!=='string'||!p.scene.action.trim())||!Number.isInteger(index)||index<0||index>=8||typeof cover!=='boolean')throw Error('Unsupported reviewed eleventh young first story');return svg(scenes[story.id](index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

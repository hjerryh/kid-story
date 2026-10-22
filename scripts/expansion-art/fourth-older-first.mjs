// Original scene-specific illustrations for 0151–0155; no shared module mutation.
import {E,R,P,G,line,leaf,cloud,tree,table,stool,book,lantern,basket,pear,flower,svg} from '../render-illustrations.mjs';
import {room,outdoors} from './middle.mjs';
const ink='#42564F',paper='#EEE5CB',skin='#D6AF8A',blue='#7F9DAA',green='#869C7E';
const arm=(x,y,dx,dy,c,w=19)=>P(`M${x} ${y} Q${x+dx*.6} ${y+dy*.2-7} ${x+dx} ${y+dy}`,'none',c,w);
const tx=(t,x,y,s=18,c=ink)=>`<text x="${x}" y="${y}" font-size="${s}" font-family="PingFang SC,sans-serif" text-anchor="middle" fill="${c}">${t}</text>`;
const bag=(x,y,s=1,c='#A58E6D')=>G(x,y,s,R(-32,-31,64,63,c,9)+R(-33,-34,66,28,c,5)+E(0,-9,4,4,'#C9B17D'));
const sheet=(x,y,s=1,a='',r=0)=>G(x,y,s,R(-80,-57,160,114,paper,3)+a,r);
const letter=(x,y,s=1)=>sheet(x,y,s,[-31,-9,13,33].map((yy,j)=>line(-55,yy,52-j*8,yy,'#9AA48E',3)).join(''));
const pencil=(x,y,s=1,r=20,c='#B59B6D')=>G(x,y,s,R(-3,-52,6,89,c,2)+P('M-3 37 L3 37 L0 48Z',ink),r);
const bowl=(x,y,s=1,full=false)=>G(x,y,s,P('M-43 -20 Q-34 26 0 28 Q34 26 43 -20Z','#B1BBA3')+E(0,-20,43,14,paper)+(full?E(0,-20,36,9,'#D0B880'):''));
const cup=(x,y,s=1)=>G(x,y,s,R(-22,-33,44,53,'#B0BDA8',7)+E(0,-33,22,7,'#8DA396')+P('M22 -25 Q48 -24 44 -3 Q39 8 22 3','none','#B0BDA8',6));
function kid(x,y,s=1,who='ye',pose='hold',sit=false){const c={ye:'#81A69C',di:'#80A9B5',ting:'#526D80',yu:'#829E7C'}[who],pants=['ye','yu'].includes(who)?'#647D89':'#8E978F',shoe=who==='di'?paper:'#917B60';let a=E(0,0,64,10,ink,'opacity=".12"');
 a+=sit?P('M-22 -64 L-51 -37 L-56 -11 M22 -64 L50 -37 L55 -11','none',pants,23):R(-30,-75,23,64,pants,8)+R(8,-75,23,64,pants,8);
 a+=E(sit?-56:-20,-8,24,11,shoe)+E(sit?55:22,-8,24,11,shoe)+P('M-39 -170 L39 -170 L47 -60 Q0 -45 -47 -60Z',c)+line(0,-160,0,-59,'#A6BAAF',3)+[-142,-118,-94].map(yy=>E(5,yy,3,3,'#D5C59B')).join('');
 a+=E(0,-224,60,61,'#4F554D')+R(-56,-221,112,36,'#4F554D',11)+E(0,-215,50,48,skin)+P('M-53 -225 Q-53 -280 0 -279 Q55 -277 54 -221 Q27 -222 10 -246 Q-16 -222 -53 -225Z','#4F554D');
 if(who==='di')a+=P('M-8 -273 Q-3 -306 15 -280 L31 -273Z','#4F554D');
 if(who==='ting')a+=G(-35,-250,.53,E(0,0,19,8,'#C9D6D0')+P('M15 0 L29 -10 L29 10Z','#C9D6D0'));
 a+=pose==='listen'||pose==='eyesclosed'?P('M-25 -216 Q-17 -208 -9 -216 M9 -216 Q17 -208 25 -216','none',ink,2):E(-17,-216,4,5,ink)+E(17,-216,4,5,ink);
 a+=pose==='speak'?E(0,-187,6,8,'#957965'):P(pose==='sad'||pose==='cry'||pose==='clothsad'?'M-11 -188 Q0 -195 11 -188':'M-11 -191 Q0 -181 11 -191','none','#967B63',2);
 if(pose==='cry')a+=P('M-18 -204 L-20 -181 M18 -204 L20 -181','none','#ABCBC5',5)+E(-21,-172,3,5,'#ABCBC5');
 const l=pose==='tie'?[-4,128]:pose==='draw'?[191,27]:pose==='raise'?[-20,-68]:pose==='ear'?[-7,-64]:pose==='open'?[-43,23]:pose==='chin'?[37,-23]:[25,40];
 const r=pose==='tie'?[-87,128]:pose==='draw'?[110,52]:pose==='point'?[67,-13]:pose==='write'?[110,52]:pose==='ear'?[7,-64]:pose==='open'?[43,23]:pose==='chin'?[-37,-23]:(pose==='cloth'||pose==='clothsad')?[65,30]:pose==='pinch'?[61,-4]:[-25,40];
 a+=arm(-39,-149,...l,c)+arm(39,-149,...r,c)+E(-39+l[0],-149+l[1],10,11,skin)+E(39+r[0],-149+r[1],10,11,skin);
 if(who==='ye')a+=line(-42,-77,43,-77,'#9D8969',4)+bag(43,-67,.61);
 if(['di','yu'].includes(who))a+=line(-41,-170,41,-70,who==='di'?'#C4B58F':'#A18864',5)+bag(42,-69,.71,who==='di'?'#D5C7A4':'#A78A65');
 return G(x,y,s,a);}
const pebbleFace=(mode='start',s=1)=>G(0,0,s,(mode==='smile'?[[-22,-11],[-7,-27],[14,-23],[25,-3],[3,12]]:mode==='close'?[[-9,-10],[4,-14],[11,0],[-5,9],[7,14]]:mode==='seek'?[[-24,-23],[9,-16],[21,6],[-10,18],[19,26]]:mode==='lean'?[[-33,-26],[-9,-30],[-25,-9],[-5,6],[-21,20]]:[[-24,-16],[0,-27],[24,-17],[-13,15],[14,15]]).map(([x,y])=>E(x,y,7,8,'#697C73')).join(''));
function rockGuest(x,y,s=1,mode='start',lower=false,holdSister=false,pose='hold'){let a=E(0,0,75,12,ink,'opacity=".12"')+E(-30,-18,31,24,'#B7C2AD')+E(34,-18,32,24,'#B7C2AD')+E(0,-111,69,85,'#C2C8B1')+E(0,-228,65,68,'#C5CCB8')+G(0,-222,1,pebbleFace(mode))+P('M-61 -276 Q-46 -323 14 -311 Q60 -311 65 -274Z','#7F9B76')+E(5,-274,74,13,'#87A17C')+P('M-59 -164 Q-21 -150 43 -168','none','#A08B6D',10)+arm(-57,-133,pose==='write'?-101:holdSister&&lower?42:lower?-13:45,pose==='write'?-6:holdSister&&lower?61:lower?89:32,'#BDC7B1',25)+arm(57,-133,lower?13:-45,lower?89:32,'#BDC7B1',25);
 a+=basket(lower?75:0,lower?-11:-73,lower?.54:.64,false);if(holdSister)a+=sister(0,-97,.52)+(lower?E(-13,-73,15,10,'#ADBCA6'):'');return G(x,y,s,a);}
function sister(x,y,s=1,awake=false,bottom=false){return G(x,y,s,E(0,0,84,40,'#BCC8B7','stroke="#A4B39F" stroke-width="2"')+P('M-67 7 Q-28 26 22 8 Q49 -1 66 8','none',bottom?'#A08B6D':'#B4C1AE',bottom?7:2)+(awake?G(0,-6,.72,pebbleFace('smile')):''));}
function yard(){return outdoors()+P('M0 0 L393 0 L393 591 L0 591Z','#C2BDA0')+R(91,108,277,340,'#9DAA91',8)+R(112,129,236,296,'#C8D5B9',4)+R(75,448,315,24,'#ABA584',5)+P('M0 664 Q496 542 1000 681 L1000 800 L0 800Z','#C4C5A1')+R(32,650,289,69,'#A39A76',12);}
function flowerbed(x,y,s=1,stone=true,awake=false){return G(x,y,s,E(0,0,141,39,'#9A9A77')+[-106,-61,72,117].map((xx,j)=>leaf(xx,-8,.37,green,j%2?25:-25)+leaf(xx+9,-18,.3,'#9BB28E',-30)).join('')+(stone?sister(0,-13,.78,awake):E(0,-10,67,22,'#888D6E')));}
const trowel=(x,y,s=1,r=0)=>G(x,y,s,R(-5,-48,10,58,'#AA9167',3)+P('M-20 8 L20 8 L14 39 L0 54 L-14 39Z','#9EAEA2'),r);
const facePaper=(x,y,s=1,mode='start',circle=false)=>sheet(x,y,s,E(0,0,44,42,'none','stroke="#A4AF98" stroke-width="2"')+G(0,0,.75,pebbleFace(mode))+(circle?E(0,0,56,47,'none','stroke="#B59C6C" stroke-width="3"'):''));
function yeStory(i,cover){if(cover)return yard()+kid(308,753,1.19,'ye','listen')+rockGuest(721,750,1.12,'smile',true)+flowerbed(487,755,.73,true,true);
 const meet=(pose='point',mode='start',lower=false)=>yard()+kid(292,754,1.17,'ye',pose)+rockGuest(750,753,1.08,mode,lower);
 return [
 ()=>meet('open')+R(355,595,187,29,'#ACA785',4),
 ()=>meet('point')+table(522,653,.62)+pear(516,602,.54),
 ()=>room()+table(610,648,1.15)+kid(304,753,1.17,'ye','write')+book(590,603,1.0,true,green)+facePaper(783,645,.48)+pencil(477,633,.55,-32)+bowl(459,667,.51),
 ()=>meet('open','close')+table(519,656,.68)+cup(479,629,.52)+R(569,601,44,45,'#B09C73',6)+leaf(592,601,.25,green,10),
 ()=>yard()+kid(292,754,1.17,'ye','listen')+R(402,594,225,33,'#ADB297',6)+tx('砾叔',509,615,25,'#7B958B')+rockGuest(750,753,1.08,'smile',false,false,'write'),
 ()=>meet('write','seek')+table(527,649,.87)+facePaper(493,605,.48)+facePaper(601,638,.47,'seek')+facePaper(439,636,.37)+pencil(466,635,.58,-28),
 ()=>meet('hold','seek')+table(512,654,.68)+bowl(511,625,.76,true)+P('M494 566 q-9 -23 4 -41 M526 564 q-9 -23 4 -41','none','#D5DCC3',3),
 ()=>room()+table(596,653,1.19)+kid(286,754,1.19,'ye','think')+facePaper(480,620,.49,'start',true)+facePaper(581,612,.49,'start',true)+facePaper(686,623,.49,'start',true)+bowl(786,645,.55,true)+pencil(459,674,.52,-52),
 ()=>yard()+stool(292,703,.72,true)+kid(292,753,1.05,'ye','listen',true)+rockGuest(749,754,1.08,'seek')+table(500,658,.61)+letter(502,620,.42)+pencil(512,627,.45,70),
 ()=>yard()+stool(292,703,.72,true)+kid(292,753,1.05,'ye','speak',true)+rockGuest(749,754,1.08,'lean',true)+flowerbed(531,755,.67),
 ()=>yard()+flowerbed(593,733,1.22)+kid(318,751,1.0,'ye','point',true)+trowel(791,732,.63,23),
 ()=>yard()+flowerbed(547,744,.99,false)+kid(310,752,1.03,'ye','hold',true)+sister(310,633,.63,false,true)+E(295,650,10,9,skin)+E(325,650,10,9,skin)+rockGuest(791,753,.97,'smile',true)+trowel(653,756,.65,-57)+R(417,684,115,39,paper,8),
 ()=>yard()+stool(303,704,.72,true)+kid(303,753,1.03,'ye','listen',true)+rockGuest(733,751,1.09,'smile',true,true)+flowerbed(530,755,.66,false),
 ()=>yard()+flowerbed(455,738,1.06,false)+kid(294,752,.99,'ye','write',true)+trowel(441,658,.67,17)+[640,690,733].map((x,j)=>E(x,754-j%2*12,17,11,'#B0BCA7')).join('')+rockGuest(842,644,.7,'smile',false,true),
 ()=>yard()+flowerbed(555,744,.91)+stool(292,702,.65,true)+kid(292,752,1.0,'ye','speak',true)+rockGuest(802,750,.99,'smile',true),
 ()=>yard()+flowerbed(629,744,1.12,true,true)+stool(327,702,.72,true)+kid(327,752,1.04,'ye','listen',true)+leaf(825,711,.5,green,-30),
 ][i]();}

function pool(evening=false){return R(0,0,1000,800,evening?'#C9C4A7':'#D2DCC3',0)+cloud(179,130,1.25,'#E6E6CE')+P('M0 335 Q253 245 541 330 Q779 264 1000 341 L1000 508 L0 508Z','#A9BE98')+R(0,490,1000,310,evening?'#A1B9AE':'#9CBEB6',0)+P('M0 489 Q232 445 486 488 L496 518 Q241 482 0 521Z','#B3BDA2')+[[-36,614],[134,750],[586,743],[898,581],[821,764]].map(([xx,yy],j)=>G(xx,yy,1,E(0,0,57,21,['#87AA8F','#A4BF9E'][j%2])+P('M0 0 L54 -6 L29 15Z','#9CBEB6'))).join('')+[579,688,807,925].map((x,j)=>P(`M${x} 0 Q${x-72} 185 ${x-24} ${289+j%2*34}`,'none','#8AA78B',7)+leaf(x-30,167,.3,green,37)).join('');}
const mapSheet=(x,y,s=1)=>sheet(x,y,s,P('M-62 27 Q-49 -36 -5 -12 Q31 11 66 -31','none','#9BB6A2',13)+P('M-56 -25 L4 20 L54 -6','none','#B19970',3,'stroke-dasharray="5 7"'));
function mirrorPair(pose='hold',object='',stand=false){const body=kid(326,475,stand?.65:.68,'di',pose,!stand)+object;return body+'<g transform="translate(0 980) scale(1 -1)" opacity=".76">'+body+'</g>'+P('M269 682 q17 5 35 0 M348 705 q25 4 43 -2','none','#D5E3D6',2);}
function thought(art,x=722,y=250,s=1){return G(x,y,s,R(-198,-161,396,322,'#E4E7D1',28,'stroke="#9FB5A0" stroke-width="3" stroke-dasharray="8 9"')+art)+E(496,354,13,10,'#DFE5D0')+E(460,367,8,7,'#DFE5D0');}
const littleCastle=(x,y,s=1)=>G(x,y,s,R(-63,-56,126,92,'#B7B38B',4)+[-59,0,59].map((xx,j)=>R(xx-17,-94-j%2*37,34,128+j%2*37,'#C5BC91',3)+P(`M${xx-25} ${-94-j%2*37} L${xx} ${-128-j%2*37} L${xx+25} ${-94-j%2*37}Z`,'#A7B49A')).join('')+R(-13,-15,26,50,'#879B88',11));
function teapot(x,y,s=1,wheels=false){return G(x,y,s,E(0,-6,44,34,'#AFC3AF')+R(-21,-47,42,12,'#B9C9AF',4)+E(0,-52,9,6,'#A1B99D')+P('M37 -16 Q80 -50 75 -58 Q86 -16 42 13Z','#AFC3AF')+P('M-38 -22 Q-76 -40 -72 1 Q-70 24 -39 12','none','#AFC3AF',10)+(wheels?[-35,-12,12,35].map(xx=>E(xx,38,10,10,'#859D8C')).join(''):'')+R(-9,-8,18,27,'#8A9F8B',8));}
function cookie(x,y,s=1,person=false,ghost=false){return G(x,y,s,P('M-66 37 A77 77 0 1 1 69 32 L40 29 L34 51 L13 47 L14 72 A77 77 0 0 1-66 37Z','#C7AA6E','#AF986A',3)+[[-26,-45],[23,-40],[-44,-8],[12,-7],[46,0],[-22,31]].map(([xx,yy])=>E(xx,yy,4,4,'#A98D5C')).join('')+(person?kid(37,71,.2,'di','open'):'')+(ghost?R(-17,-28,39,37,'none',3,'stroke="#C6C9AD" stroke-width="2" stroke-dasharray="5 6" opacity=".6"'):'')+P('M48 33 L63 54 L36 59Z','#E2D49D'));}
function shellBakery(x,y,s=1,exit=false){return G(x,y,s,P('M-117 76 Q-151 -41 -70 -107 Q36 -172 106 -73 Q157 14 80 81Z','#C4BC92','#A5AB87',4)+P('M-112 52 Q-101 -81 8 -95 Q91 -87 74 -18 Q66 35 10 19 Q-25 7 -4 -34','none','#A3AE91',7)+R(-85,18,169,19,'#A4936D',4)+R(-78,36,14,52,'#A4936D',3)+R(57,36,14,52,'#A4936D',3)+[-51,-10,34].map(xx=>E(xx,8,16,10,'#CFB77D')).join('')+cookie(17,-8,.5,exit));}
function diStory(i,cover){if(cover)return pool()+mirrorPair('speak')+thought(shellBakery(0,39,1.1),719,239,.95);
 return [
 ()=>pool()+mirrorPair('speak'),
 ()=>pool()+mirrorPair('ear'),
 ()=>pool()+mirrorPair('point',leaf(397,369,1.0,'#92B594',-40)),
 ()=>pool()+mirrorPair('hold',mapSheet(326,337,.82)),
 ()=>pool()+mirrorPair('chin',G(433,463,.66,R(-11,-56,22,112,'#BDBB94',5)+line(-12,-8,12,-8,'#9CAF91',4)))+leaf(505,570,.39,'#B9B589',70),
 ()=>pool()+mirrorPair('eyesclosed')+thought(littleCastle(0,35,1.1)),
 ()=>pool()+mirrorPair('speak')+thought(teapot(-108,-45,.67)+teapot(20,-45,.67,true)+P('M-70 -45 L-40 -45 M58 -14 L83 22','none','#91A58D',3)+P('M30 59 L132 59 L110 94 L54 94Z','#AA9B79')+P('M80 57 L80 2 L119 53Z',paper)),
 ()=>pool()+mirrorPair('sad'),
 ()=>pool()+mirrorPair('eyesclosed')+thought(shellBakery(0,30,1.13)),
 ()=>pool()+mirrorPair('speak')+thought(shellBakery(0,30,1.13)+[[-103,63],[-105,30],[-97,-8],[-79,-49]].map(([x,y])=>E(x,y,7,4,'#889F8C')).join('')),
 ()=>pool()+mirrorPair('speak')+thought(cookie(0,8,1.31,false,true)),
 ()=>pool()+mirrorPair('pinch')+thought(cookie(-17,-7,1.19)+[47,67,88].map((x,j)=>E(x,98+j%2*11,5,4,'#B69E6C')).join('')),
 ()=>pool()+mirrorPair('speak')+thought(shellBakery(0,26,1.1,true)),
 ()=>pool()+mirrorPair('chin'),
 ()=>pool()+mirrorPair('speak')+thought(P('M-64 -67 Q-58 -127 9 -123 Q85 -123 81 -64 Q79 -31 22 -8 L17 24','none','#9CB5AA',27)+E(16,97,38,38,'none','stroke="#9CB5AA" stroke-width="22"')+cloud(16,104,.19,'#F0EBD7')),
 ()=>pool(true)+mirrorPair('hold',G(435,473,.64,R(-11,-56,22,112,'#BDBB94',5)+line(-12,-8,12,-8,'#9CAF91',4)),true),
 ][i]();}

function valley(){return outdoors()+P('M0 592 Q204 475 404 598 Q642 713 1000 592 L1000 680 Q671 783 378 681 Q191 573 0 681Z','#9DBDB1')+[-20,155,317,642,813,956].map((x,j)=>E(x,675+j%2*63,38,20,['#B7B1A0','#A9BCAB','#A6B39B'][j%3])).join('');}
function moleKid(x,y,s=1,pose='hold',sit=false,glasses=true){let a=E(0,0,58,10,ink,'opacity=".12"')+(sit?P('M-20 -56 L-49 -28 L-52 -7 M20 -56 L47 -28 L52 -7','none','#6F7C75',19):R(-27,-62,21,51,'#6F7C75',7)+R(7,-62,21,51,'#6F7C75',7))+E(-22,-6,24,11,'#69766F')+E(24,-6,24,11,'#69766F')+P('M-42 -158 L42 -158 L47 -51 Q0 -34 -47 -51Z','#7BA2AD')+line(0,-147,0,-50,'#B2C6BB',2)+E(-41,-231,19,20,'#6F7D77')+E(42,-231,19,20,'#6F7D77')+E(0,-202,63,56,'#6F7D77')+E(0,-180,24,18,'#A6A99A')+E(0,-179,8,6,'#BCAC9B')+(pose==='listen'?P('M-28 -204 q7 7 14 0 M14 -204 q7 7 14 0','none',ink,3):E(-22,-204,4,5,ink)+E(22,-204,4,5,ink))+(glasses?E(-22,-204,20,22,'none','stroke="#C8BC95" stroke-width="4"')+E(22,-204,20,22,'none','stroke="#C8BC95" stroke-width="4"')+line(-3,-204,3,-204,'#C8BC95',3):'')+P('M-10 -158 Q0 -150 10 -158','none','#53675F',2)+arm(-38,-139,23,43,'#6F7D77',16)+arm(38,-139,pose==='point'?68:pose==='rub'?173:pose==='write'?102:-23,pose==='point'?-5:pose==='rub'?29:pose==='write'?45:43,'#6F7D77',16)+line(-39,-155,40,-58,'#A18B66',4)+bag(40,-59,.69);return G(x,y,s,a);}
function giant(x,y,s=1,sleep=false,pose='hold'){let a=E(0,0,175,24,ink,'opacity=".1"')+E(-69,-34,66,40,'#B4C2B0')+E(77,-34,70,40,'#B4C2B0')+E(-58,-100,45,80,'#B9C5B2')+E(63,-100,48,80,'#B9C5B2')+E(0,-222,135,132,'#BBC7B5')+E(-14,-391,107,104,'#C1CCBA')+E(-107,-384,24,38,'#B7C5B2')+E(81,-384,23,38,'#B7C5B2')+P('M-108 -406 l-10 23 l12 18','none','#D6DDCD',8)+[[-95,-299],[-65,-306],[61,-307],[94,-291]].map(([xx,yy])=>leaf(xx,yy,.43,green,xx<0?-30:30)).join('');
 a+=sleep?P('M-62 -394 q18 17 36 0 M10 -394 q18 17 36 0','none','#6F857A',5):E(-45,-394,8,11,'#6F857A')+E(27,-394,8,11,'#6F857A');a+=P('M-33 -350 Q-11 -332 12 -352','none','#7A8F80',4);
 a+=arm(-115,-262,pose==='cover'?63:(pose==='palm'||pose==='fist')?-112:-29,pose==='cover'?-95:(pose==='palm'||pose==='fist')?107:113,'#B8C6B2',55)+(pose==='fist'?G(-227,-155,1,E(0,0,35,35,'#C3CFBB')+P('M-19 -15 l8 29 M-3 -21 l7 30 M13 -18 l6 27','none','#A8BBA6',3)):E(pose==='cover'?-52:pose==='palm'?-227:-144,pose==='cover'?-357:pose==='palm'?-155:-149,42,31,'#C3CFBB'))+arm(114,-263,26,114,'#B8C6B2',55)+E(140,-149,44,31,'#C3CFBB');return G(x,y,s,a);}
function sleepingGiant(){return E(536,691,402,43,'#AAC0A0')+P('M432 546 Q397 645 289 669','none','#B9C8B4',56)+E(287,667,69,33,'#C3CFBB')+E(505,528,222,96,'#BCC8B5')+P('M662 556 L834 623 M668 508 L864 566','none','#B8C5B2',64)+E(870,628,68,35,'#C2CEB8')+E(887,572,69,33,'#C2CEB8')+E(256,482,94,89,'#C3CFBC')+E(174,482,22,29,'#B5C4AF')+P('M174 462 l-8 19 l10 17','none','#DCE1D0',7)+P('M219 485 q17 15 32 0 M267 485 q17 15 32 0','none','#6D8578',4)+P('M237 523 q20 13 40 -3','none','#7D9280',4)+[350,386,616,652].map((x,j)=>leaf(x,486+j%2*14,.42,green,j%2?35:-35)).join('');}
function palmClose(){return valley()+P('M1000 545 Q767 561 653 586 L648 778 L1000 800Z','#B4C6B2')+E(523,695,253,75,'#C4D1B9')+[[346,565,35,118],[422,538,39,146],[503,532,41,149],[588,555,39,128]].map(([x,y,rx,ry])=>E(x,y,rx,ry,'#C4D1B9')).join('')+P('M630 724 Q758 670 726 606 Q686 571 636 624','none','#C4D1B9',56);}
const recording=(x,y,s=1,wrapped=false)=>G(x,y,s,(wrapped?R(-31,-27,62,56,paper,9)+P('M-27 -17 Q0 1 27 -17 M0 0 L0 24','none','#CBCDB6',3):'')+E(0,0,wrapped?18:28,wrapped?14:22,'#A29BB2')+E(-7,-6,7,4,'#C2BECC'));
function stoneBox(x,y,s=1,states=[true,true,true,true,true,true],closed=false){return G(x,y,s,R(-135,-63,270,126,'#A68F6B',8)+R(-123,-51,246,103,'#C8B58A',5)+(closed?R(-133,-66,266,128,'#B69E75',7)+line(-113,-45,111,-45,'#CFB98E',3):states.map((w,j)=>recording(-78+(j%3)*77,-22+Math.floor(j/3)*50,.64,w)).join('')));}
const sound=(x,y,s=1)=>G(x,y,s,P('M0 -17 q25 13 0 26 M16 -28 q42 24 0 48','none','#A6BDA8',4));
const washBowl=(x,y,s=1)=>G(x,y,s,bowl(0,0,1)+E(0,-20,36,9,'#A7C6B7'));
function yanStory(i,cover){if(cover)return valley()+giant(698,756,1.1,true,'palm')+moleKid(284,751,1.05,'point')+stoneBox(470,726,.59,[true,true,true,true,true,true]);
 return [
 ()=>valley()+giant(700,755,1.13,false,'palm')+moleKid(280,751,1.09,'point'),
 ()=>valley()+giant(742,753,1.05)+moleKid(274,754,1.04,'point')+R(400,650,251,71,'#AAB79E',13)+stoneBox(523,640,.78,[false,false,false,false,false])+recording(383,605,.54)+sound(404,566,.6),
 ()=>valley()+giant(692,752,1.05,true)+moleKid(253,754,.98,'hold')+book(251,646,.53,true,green)+[[369,702],[438,647],[512,614],[592,607],[668,632],[735,690]].map(([x,y])=>recording(x,y,.57)).join(''),
 ()=>valley()+giant(720,756,1.09,false,'cover')+moleKid(276,753,1.04,'point')+stoneBox(500,708,.69,[true,true,true,true,true])+recording(389,603,.5)+sound(416,559,.8),
 ()=>valley()+G(780,529,.55,giant(0,0,1,true))+moleKid(294,753,1.11,'listen')+[[474,690],[607,671],[743,713]].map(([x,y])=>recording(x,y,.71)).join('')+R(452,744,147,32,paper,8),
 ()=>valley()+giant(720,754,1.07)+moleKid(281,753,1.05,'hold')+stoneBox(284,633,.58,[],true)+book(514,735,.58,false,green),
 ()=>palmClose()+G(654,710,.92,moleKid(0,0,1,'listen',true,false),-63)+book(425,748,.48,true,green)+stoneBox(191,746,.44,[],true)+G(312,713,.4,E(-22,0,20,22,'none','stroke="#C8BC95" stroke-width="4"')+E(22,0,20,22,'none','stroke="#C8BC95" stroke-width="4"')+line(-3,0,3,0,'#C8BC95',3)),
 ()=>palmClose()+G(665,710,.92,moleKid(0,0,1,'hold',true,false),-65)+sound(427,637,.6)+book(368,751,.52,false,green),
 ()=>valley()+moleKid(322,752,1.16,'hold',true)+stoneBox(323,634,.7)+P('M668 702 Q788 653 1000 685 L1000 800 L652 800Z','#B9C9B2'),
 ()=>valley()+giant(746,753,1.04,false,'palm')+moleKid(263,752,1.04,'point')+stoneBox(478,714,.71,[true,true,false,false,false,false])+washBowl(374,748,.57),
 ()=>valley()+sleepingGiant()+moleKid(138,753,.73,'point')+[[239,437],[495,502],[286,650],[885,610]].map(([x,y])=>recording(x,y,.5)).join('')+stoneBox(516,754,.44,[true,true]),
 ()=>valley()+giant(753,754,1.03)+moleKid(273,753,1.05,'point')+stoneBox(504,713,.72,[true,true,false,false,false])+recording(389,603,.53)+sound(419,572,.72),
 ()=>valley()+moleKid(316,754,1.15,'write')+R(431,646,310,70,'#AAB79F',15)+washBowl(485,629,.85)+recording(483,608,.5)+book(660,617,.66,true,green)+stoneBox(783,748,.49,[true,true,true,true,true]),
 ()=>valley()+giant(745,755,1.06,true)+R(422,671,286,77,'#AAB79E',15)+stoneBox(562,653,.79,[true,true,false,false,false,false])+moleKid(266,754,1.07,'rub')+sound(622,557,.77),
 ()=>valley()+giant(742,754,1.07,false,'fist')+moleKid(272,753,1.05,'point')+recording(388,602,.51)+stoneBox(500,718,.66,[true,true,true,true,true]),
 ()=>palmClose()+moleKid(406,720,.95,'listen',true)+recording(618,689,.71,true)+P('M687 675 Q647 625 620 672','none','#C4D1B9',32)+stoneBox(170,747,.42,[true,true,true,true,true])+book(408,618,.51,true,green),
 ][i]();}

function port(dusk=false){return R(0,0,1000,800,dusk?'#BDC5B7':'#CFDCD0',0)+cloud(802,147,1.3,'#E4E7D5')+R(0,430,1000,370,'#99BCB7',0)+P('M0 640 L1000 561 L1000 800 L0 800Z','#B9BA9F')+[[50,220],[255,266],[759,220]].map(([x,y],j)=>R(x,y,143,318-y+144,['#B7C6B7','#ADC0B6','#C4CCB7'][j],5)+P(`M${x-12} ${y} L${x+71} ${y-81} L${x+155} ${y}Z`,'#A3B7AA')+R(x+45,y+31,54,73,'#DCE5D4',17)+line(x+72,y+34,x+72,y+102,'#ACC4B9',4)).join('')+P('M57 666 L938 596','none','#8FA99D',13)+[97,337,576,816,936].map(x=>line(x,661-(x-97)*.084,x,743-(x-97)*.084,'#8FA99D',10)).join('');}
function harborWindow(){return room()+R(491,99,441,425,'#99ADA0',8)+R(511,119,400,383,'#C6D6C7',4)+R(512,309,398,193,'#91B6B2',0)+P('M549 416 L871 416 L820 464 L594 464Z','#A49B7C')+R(630,351,135,61,paper,4)+line(699,304,699,415,'#B29E78',5)+R(478,519,467,25,'#B1A580',5);}
function kerchief(x,y,s=1){return G(x,y,s,R(-41,-27,82,54,'#D2D5BC',5)+[-25,0,25].map(xx=>line(xx,-26,xx,26,'#9FAE99',2)).join('')+[-13,8].map(yy=>line(-39,yy,39,yy,'#9FAE99',2)).join(''));}
function otter(x,y,s=1,pose='hold',cry=false,sit=false,pocket=false){let a=P('M34 -49 Q135 -27 145 18 Q91 27 38 -14Z','#9EA9A0')+E(0,0,65,10,ink,'opacity=".1"')+(sit?P('M-22 -64 L-52 -35 L-57 -9 M22 -64 L52 -35 L57 -9','none','#9EA9A0',22):R(-29,-67,23,58,'#9EA9A0',7)+R(8,-67,23,58,'#9EA9A0',7))+E(-23,-6,27,11,'#8FA095')+E(24,-6,27,11,'#8FA095')+E(0,-109,56,85,'#9EA9A0')+P('M-43 -169 L43 -169 L47 -52 Q0 -36 -47 -52Z','#A29BAF')+E(-43,-242,18,19,'#9EA9A0')+E(43,-242,18,19,'#9EA9A0')+E(0,-210,64,55,'#A7B0A4')+E(0,-189,31,21,'#CAD1BD')+(pose==='laugh'?P('M-27 -216 q8 8 16 0 M11 -216 q8 8 16 0','none',ink,3):E(-22,-216,4,5,ink)+E(22,-216,4,5,ink))+E(0,-195,9,6,ink)+(pose==='laugh'?E(0,-175,12,9,'#758B7A'):P(cry?'M-12 -174 Q0 -183 12 -174':'M-12 -179 Q0 -169 12 -179','none','#7D927E',2))+P('M-32 -196 l-23 -6 M32 -196 l23 -6','none','#7C9181',2);
 if(cry)a+=P('M-23 -204 L-26 -171 M23 -204 L26 -171','none','#BAD6CF',5)+E(-27,-158,4,6,'#BAD6CF')+E(28,-145,4,6,'#BAD6CF');
 a+=arm(-38,-147,pose==='cloth'?-70:23,pose==='cloth'?30:41,'#A7B0A4',18)+arm(38,-147,-23,41,'#A7B0A4',18)+bag(43,-65,.42,'#A99B7D')+(pocket?kerchief(27,-115,.33):'');return G(x,y,s,a);}
function joinCloth(x1=422,y1=615,x2=631,y2=625){return P(`M${x1} ${y1} Q${(x1+x2)/2} ${y1+23} ${x2} ${y2} L${x2-15} ${y2+48} Q${(x1+x2)/2} ${y1+57} ${x1+9} ${y1+48}Z`,'#D2D5BC')+[.2,.4,.6,.8].map(t=>line(x1+(x2-x1)*t,y1+9+t*10,x1+(x2-x1)*t,y1+50+t*7,'#9EAD97',2)).join('')+P(`M${x1+4} ${y1+22} Q${(x1+x2)/2} ${y1+42} ${x2-6} ${y2+21} M${x1+6} ${y1+37} Q${(x1+x2)/2} ${y1+54} ${x2-11} ${y2+37}`,'none','#9EAD97',2)+E(x1,y1,10,11,skin)+E(x2,y2,10,11,'#A7B0A4');}
const whiteShell=(x,y,s=1)=>G(x,y,s,P('M-16 7 Q-22 -12 0 -21 Q23 -12 16 7Z',paper)+[-8,0,8].map(xx=>line(0,5,xx,-11,'#B3BDA6',2)).join(''));
const shellMoney=(x,y,s=1,n=2)=>G(x,y,s,Array.from({length:n},(_,j)=>whiteShell((j-(n-1)/2)*38,0,.83)).join(''));
function crab(x,y,s=1,wide=false){return G(x,y,s,E(0,-10,27,17,'#B79B7F')+[-1,1].map(k=>P(`M${k*21} -12 L${k*43} -33 L${k*55} -21 M${k*20} -1 L${k*43} 9 M${k*17} 6 L${k*35} 23`,'none','#AA9176',5)+line(k*13,-20,k*17,-35,'#AA9176',4)+E(k*17,-36,3,4,ink)).join('')+P('M54 -22 Q92 26 143 -6 Q176 -27 210 8','none','#91AC88',wide?22:12));}
function whaleSketch(x,y,s=1,crabShop=false){return sheet(x,y,s,P('M-55 0 Q-70 -38 -16 -39 Q25 -40 41 -6 L66 -29 L66 -3 L81 11 L43 14 Q-7 48 -55 0Z','none',blue,3)+R(-15,-15,24,34,'none',4,'stroke="#87A1A3" stroke-width="2"')+(crabShop?G(60,23,.38,R(-27,-29,54,42,'none',4,'stroke="#91A18A" stroke-width="3"')+crab(0,-35,.5)):''));}
const halfPear=(x,y,s=1)=>G(x,y,s,P('M0 -52 Q-14 -55 -20 -26 Q-45 6 -22 25 Q0 44 24 25 Q44 8 21 -26 Q15 -54 0 -52Z','#D3CB95')+line(0,-42,0,29,'#EEE1B5',4)+E(-5,1,3,5,'#8E906E')+E(6,1,3,5,'#8E906E'));
function tingStory(i,cover){if(cover)return port()+kid(330,754,1.2,'ting','speak')+otter(719,752,1.11,'laugh',false,false,true)+crab(479,751,.63,true);
 const linked=(bg=port(),girlPose='cloth',sit=false)=>bg+kid(300,754,1.17,'ting',girlPose,sit)+otter(750,754,1.1,'cloth',true,sit)+joinCloth();
 return [
 ()=>harborWindow()+kid(315,753,1.21,'ting','sad')+G(761,405,.33,kid(0,0,1,'yu','hold')+[[-42,-246],[-25,-267],[0,-274],[26,-267],[44,-246]].map(([x,y])=>E(x,y,20,21,'#8B745D')).join('')+P('M-47 -167 L47 -167 L64 -51 L-65 -51Z','#88A187')+bag(39,-82,.8,'#C19968')),
 ()=>room()+R(408,587,469,150,'#A39776',5)+[477,590,704,815].map((x,j)=>R(x-27,511,54,76,['#B1AE8C','#BB9D80'][j%2],9)+R(x-28,500,56,16,'#C3B98F',4)).join('')+kid(299,753,1.16,'ting','cry')+otter(775,753,1.03,'cloth')+kerchief(664,630,.76),
 ()=>port()+stool(301,703,.72,true)+stool(750,703,.72,true)+linked('', 'cloth',true)+shellMoney(518,744,.86,2),
 ()=>linked(room()+stool(300,705,.72,true)+stool(750,705,.72,true)+table(539,647,1.11)+stool(891,620,.68,true),'clothsad',true)+bowl(405,625,.64,true)+bowl(726,636,.69,false)+E(724,616,4,6,'#BAD6CF'),
 ()=>linked(port()+R(75,649,160,46,'#B6A27D',6)+pear(112,620,.4)+pear(180,619,.43)+stool(905,697,.58,true),'clothsad'),
 ()=>linked(room()+table(521,646,1.09),'clothsad')+whaleSketch(523,604,.88)+pencil(518,760,.59,73,blue),
 ()=>linked(port(),'clothsad')+crab(468,747,.7),
 ()=>port()+kid(324,754,1.03,'ting','tie',true)+otter(751,752,1.07,'laugh')+kerchief(738,638,.58)+P('M263 739 q-20 -17 -23 -1 q10 11 26 1 q17 -17 22 -2 q-9 13 -23 2','none',paper,3)+crab(453,748,.69),
 ()=>port()+kid(302,753,1.05,'ting','listen',true)+otter(749,753,1.06,'hold',false,true)+kerchief(748,645,.59),
 ()=>room(true)+kid(312,753,1.19,'ting','hold')+letter(313,612,.74)+table(631,651,1.08)+sheet(620,613,.85,P('M-39 -12 Q-63 -36 -63 0 Q-64 24 -29 15 Q-6 39 24 21 L24 2 L-3 -3 L-7 -25Z','#BCA575'))+R(761,643,94,60,paper,4),
 ()=>room()+kid(307,753,1.16,'ting','cry',true)+letter(309,632,.66)+E(270,587,3,5,'#BAD6CF')+otter(764,752,1.04,'hold',false,true)+kerchief(763,639,.6)+cup(532,739,.59),
 ()=>room()+table(537,649,1.1)+kid(303,754,1.14,'ting','hold')+otter(758,753,1.06,'hold')+halfPear(303,618,.66)+halfPear(758,629,.69)+shellMoney(506,652,.62,4)+bag(593,635,.42,'#B4A482'),
 ()=>room()+table(601,648,1.19)+kid(294,753,1.16,'ting','draw')+whaleSketch(552,610,1.15,true)+E(470,611,10,11,skin)+E(467,640,9,10,skin)+pencil(469,638,.58,-31,blue)+R(775,633,36,17,'#B5C1A9',4)+halfPear(822,658,.32),
 ()=>room(true)+table(600,648,1.15)+kid(286,754,1.18,'ting','write')+letter(486,625,.72)+pencil(462,642,.58,-28,blue)+whaleSketch(721,619,.72,true)+lantern(846,611,.58),
 ()=>room()+table(533,650,1.08)+kid(291,754,1.17,'ting','point')+book(536,607,.95,true,blue)+sheet(674,650,.45,P('M-31 -22 L-31 15 Q-20 30 13 22 L38 16 L34 -2 L-5 -4 L-5 -22Z','#BBA578'))+stool(841,705,.82,true),
 ()=>port()+kid(331,754,1.2,'ting','speak')+otter(731,752,1.08,'laugh',false,false,true)+crab(471,752,.69,true)+E(308,520,3,5,'#BAD6CF'),
 ][i]();}

function stamp(x,y,s=1,pose='wave'){const id=`stamp-${x}-${y}-${s}`;return G(x,y,s,R(-122,-101,244,202,paper,2)+[-104,-78,-52,-26,0,26,52,78,104].map(xx=>E(xx,-99,6,6,'#AABBA9')+E(xx,99,6,6,'#AABBA9')).join('')+[-78,-52,-26,0,26,52,78].map(yy=>E(-120,yy,6,6,'#AABBA9')+E(120,yy,6,6,'#AABBA9')).join('')+`<defs><clipPath id="${id}"><rect x="-105" y="-84" width="210" height="168" rx="2"/></clipPath></defs><g clip-path="url(#${id})">`+R(-105,-84,210,168,'#ADCBD0',2)+P('M-105 49 Q-80 36 -53 49 Q-25 36 0 49 Q27 36 53 49 Q80 36 105 49 L105 84 L-105 84Z','#7EAEB9')+line(-17,-69,-17,35,'#8C8A70',4)+P('M-22 -66 L-22 24 L-83 24Z','#BE8A75')+P('M-14 -59 L-14 21 L8 21Z','#CC9A82')+P('M-88 35 L89 35 L60 61 L-59 61Z','#9C8A67')+G(pose==='sit'?45:38,pose==='sit'?32:33,1,pose==='sit'?P('M-8 -17 L-17 -3 L-17 4 M8 -17 L21 -4 L21 4','none','#788F9D',6):R(-9,-20,7,22,'#788F9D',3)+R(3,-20,7,22,'#788F9D',3))+G(pose==='sit'?45:38,pose==='sit'?39:33,1,P('M-13 -44 L13 -44 L15 -17 L-15 -17Z','#7E98A7')+E(0,-57,14,14,skin)+(pose==='wave'?'':E(0,-69,20,5,paper)+R(-12,-77,24,9,paper,4))+E(-4,-58,2,2,ink)+E(6,-58,2,2,ink)+P('M-5 -50 q5 4 10 0','none','#957D62',1.5)+P(pose==='wave'?'M-12 -36 L-54 -22 M12 -36 L28 -60':pose==='sit'?'M-12 -36 L-21 -21 M12 -36 L20 -22':'M-12 -36 L-21 -17 M12 -36 L22 -18','none',skin,6)+(pose==='wave'?E(29,-64,19,5,paper)+R(17,-73,24,9,paper,4):''))+'</g>');}
function envelope(x,y,s=1,pose='wave',postmarked=false){return G(x,y,s,R(-199,-104,398,208,paper,5)+line(-183,-84,-18,17,'#C1B99A',2)+line(-18,17,164,-83,'#C1B99A',2)+[-28,-2,24].map((yy,j)=>line(-135,yy,28-j*13,yy,'#A5AD95',3)).join('')+stamp(126,-38,.47,pose)+(postmarked?E(80,21,34,34,'none','stroke="#8F9F8D" stroke-width="2"')+P('M99 28 l62 -6 M100 37 l60 -6','none','#8F9F8D',2):''));}
function glassBox(x,y,s=1,pose='wave'){return G(x,y,s,R(-151,-10,302,32,'#9FBEC0',5)+[-110,-45,20,85].map(xx=>P(`M${xx} 4 q27 -13 54 0`,'none','#7EA8B0',4)).join('')+R(-152,-174,304,174,'#D6E3D6',5,'fill-opacity=".12" stroke="#9FB9AE" stroke-width="3"')+stamp(0,-88,.66,pose)+line(-133,-148,-133,-33,'#DAE6D9',5));}
function postRoom(night=false){return room(night)+R(72,332,275,289,'#A59671',8)+[348,440,532].map(yy=>R(85,yy,249,76,'#BEAA7C',4)+E(211,yy+39,12,6,'#8D8B6A')).join('')+R(76,314,269,22,'#A08F68',4)+leaf(188,307,.43,'#A2B68C',-35);}
function openDrawer(x,y,s=1,withStamp=true){return G(x,y,s,R(-153,-80,306,136,'#A48E68',6)+R(-136,-64,272,103,'#C4B088',3)+(withStamp?stamp(0,-11,.42):'')+R(-154,33,308,50,'#B59E73',5)+E(0,57,16,7,'#8D8A67'));}
function aunt(x,y,s=1,pose='hold'){let a=E(0,0,62,10,ink,'opacity=".1"')+P('M-35 -163 L35 -163 L53 -18 Q0 2 -53 -18Z','#B7B29A')+P('M-31 -150 L31 -150 L40 -34 L-40 -34Z','#788F9E')+E(0,-209,52,55,skin)+P('M-54 -208 Q-60 -268 1 -271 Q60 -270 54 -207 Q25 -238 0 -247 Q-26 -224 -54 -208Z','#C6CCC0')+P('M41 -229 Q78 -178 50 -111 Q43 -85 63 -62','none','#C6CCC0',15)+E(-17,-210,16,18,'none','stroke="#7D8C7B" stroke-width="3"')+E(17,-210,16,18,'none','stroke="#7D8C7B" stroke-width="3"')+line(-2,-212,2,-212,'#7D8C7B',3)+E(-17,-210,3,4,ink)+E(17,-210,3,4,ink)+P('M-10 -183 Q0 -174 10 -183','none','#977E65',2)+arm(-35,-147,pose==='write'?-83:22,pose==='write'?39:42,'#B7B29A')+arm(35,-147,-22,42,'#B7B29A');return G(x,y,s,a);}
function seaRoom(night=false){return room(night)+R(508,100,424,399,'#9CAF9D',7)+R(526,118,389,363,night?'#9CB5AF':'#C6D8C6',4)+R(528,282,385,197,'#8FACAA',0)+P('M544 365 Q717 337 894 367','none','#D4DFCE',4)+R(496,494,448,24,'#B4A782',4)+P('M777 340 L841 340 L826 353 L793 353Z','#9C9E7E');}
function pouchEnvelope(x,y,s=1){return G(x,y,s,R(-210,-117,420,237,'#D7E6D8',10,'fill-opacity=".14" stroke="#9CB6A8" stroke-width="3"')+envelope(0,0,1,'hat',true)+line(-183,-110,179,-110,'#A5BCAC',5)+line(-190,-80,-190,87,'#DCE8DA',5));}
function snailTiny(x,y,s=1){return G(x,y,s,E(0,0,40,9,'#B3BE9C')+E(4,-26,28,29,'#C4B896')+P('M-7 -17 Q-17 -43 7 -44 Q30 -40 12 -26 Q1 -20 1 -31','none','#A89F7C',3)+P('M-27 0 L-39 -30 M-35 -25 l-8 -12 M-35 -25 l8 -13','none','#9BAE90',4));}
function yuStory(i,cover){if(cover)return seaRoom()+table(618,678,1.12)+kid(303,753,1.21,'yu','hold')+envelope(607,584,.8,'wave',true);
 const desk=(pose='point',night=false)=>postRoom(night)+table(601,650,1.2)+kid(286,754,1.18,'yu',pose);
 return [
 ()=>postRoom()+R(548,364,307,339,'#A59671',8)+[382,476].map(y=>R(563,y,277,77,'#BEAA7C',4)+E(702,y+38,12,6,'#8D8B6A')).join('')+kid(397,752,1.24,'yu','point')+openDrawer(703,665,.88),
 ()=>desk('hold')+stamp(604,526,1.2,'wave')+G(815,645,.8,E(0,-27,36,36,'#C5D8CD','fill-opacity=".48" stroke="#A79B75" stroke-width="5"')+R(-5,7,10,74,'#AA966C',4)),
 ()=>desk('point')+sheet(541,632,.82,P('M-56 32 Q-51 -39 -12 -6 Q27 17 63 -34','none','#9BB5A0',12)+line(-56,-26,53,19,'#A8946B',3))+stamp(788,582,.61,'hat')+R(731,639,117,11,'#A1916C',4)+R(481,701,97,46,paper,4),
 ()=>desk('point')+glassBox(630,606,.99,'hat')+R(753,710,118,29,'#9EB5B1',6),
 ()=>desk('write')+book(583,608,1.45,true,green)+sheet(645,603,.27,flower(0,24,.7))+stamp(785,589,.46,'hat')+R(732,638,106,10,'#A1916C',3),
 ()=>desk('sad',true)+glassBox(627,616,1.0,'sit')+book(489,711,.55,false,green)+lantern(844,609,.62),
 ()=>desk('hold',true)+sheet(505,622,.88)+pencil(452,656,.59,-34)+stamp(784,577,.65,'hat')+lantern(856,672,.48),
 ()=>desk('hold')+letter(287,621,.7)+letter(551,629,.61)+R(651,627,105,65,paper,4)+stamp(804,582,.66,'hat'),
 ()=>desk('write')+letter(482,634,.63)+letter(597,614,.63)+letter(710,641,.63)+pencil(463,642,.59,-31)+stamp(819,559,.48,'hat'),
 ()=>desk('point')+pouchEnvelope(613,582,.78)+G(819,689,.65,R(-24,-44,48,19,'#A38B66',6)+R(-7,-26,14,36,'#8D9478',3)+E(0,12,29,10,'#9B8B66')),
 ()=>outdoors()+P('M0 772 Q434 506 1000 643 L1000 800 L0 800Z','#D1CEAA')+kid(321,753,1.2,'yu','point')+pouchEnvelope(555,611,.57)+leaf(806,737,1.16,'#91AE86',-70)+snailTiny(780,676,.72)+[87,176,891].map((x,j)=>flower(x,746+j%2*19,.73)).join(''),
 ()=>seaRoom()+stool(311,704,.72,true)+kid(311,754,1.04,'yu','hold',true)+G(310,628,.65,E(0,0,42,24,'#C5AA75')+[-20,0,20].map(xx=>line(xx,-12,xx-9,8,'#DFCA96',3)).join(''))+envelope(735,454,.63,'hat',true)+cup(550,487,.7),
 ()=>seaRoom()+table(557,651,1.16)+kid(284,754,1.12,'yu','listen')+aunt(808,751,1.04)+letter(431,640,.57)+letter(546,614,.57)+letter(660,644,.57)+envelope(808,641,.42,'hat',true),
 ()=>seaRoom()+table(630,648,1.12)+kid(325,753,1.03,'yu','point',true)+R(426,471,393,196,'#DCE7D8',4,'fill-opacity=".12" stroke="#9CB6A9" stroke-width="3"')+envelope(621,564,.78,'hat',true)+book(365,706,.54,false,blue)+cup(846,662,.61),
 ()=>seaRoom()+table(552,648,1.2)+kid(265,753,1.1,'yu','sad')+aunt(831,752,1.04,'write')+R(378,469,363,198,'#DCE7D8',4,'fill-opacity=".12" stroke="#9CB6A9" stroke-width="3"')+envelope(558,563,.76,'wave',true)+letter(768,653,.5)+pencil(710,640,.55,-32)+P('M724 664 q12 -9 15 0 q6 -8 13 -2 q5 5 10 -3','none',ink,2)+E(247,536,4,6,'#B3D2C9'),
 ()=>postRoom()+openDrawer(211,570,.75,false)+table(601,650,1.2)+kid(286,754,1.18,'yu','write')+letter(483,636,.7)+pencil(463,643,.59,-30)+sheet(653,610,.63,P('M-45 4 L43 4 L22 25 L-24 25Z','#A4A084')+line(0,-35,0,5,'#9E9878',3)+P('M5 -30 L5 0 L29 0Z','#BDAB84')),
 ][i]();}

const registry={'expansion-0151':yeStory,'expansion-0152':diStory,'expansion-0153':yanStory,'expansion-0154':tingStory,'expansion-0155':yuStory};
export function fourthOlderFirstArtwork(story,index,cover=false){const render=registry[story?.id];if(!render||story.status!=='text-ready'||story.pages?.length!==16||!Number.isInteger(index)||index<0||index>=16)throw new Error('No reviewed fourth older first storyboard for this input');return svg(render(index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

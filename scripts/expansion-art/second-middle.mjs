// Original, individually composed storyboards for 0057–0065.
// Character-local left is preserved when a character turns away (story 0064).
import {E,R,P,G,line,leaf,grass,flower,cloud,table,book,basket,wateringCan,stool,svg} from '../render-illustrations.mjs';
import {outdoors,room,notes,animal} from './middle.mjs';
const ink='#40534F', skin='#DDB58D', paper='#EEE3C7';
const arm=(x,y,xx,yy,c,w=19)=>P(`M${x} ${y} Q${(x+xx)/2} ${Math.min(y,yy)-12} ${xx} ${yy}`,'none',c,w);
const smile=(x,y,s=1,sad=false)=>G(x,y,s,E(-18,0,3.8,5,ink)+E(18,0,3.8,5,ink)+P(sad?'M-9 25 Q0 17 9 25':'M-9 20 Q0 30 9 20','none','#8C7160',2));
const bow=(x,y,s,c)=>G(x,y,s,P('M0 0 Q-30 -28 -29 -5 Q-27 19 0 0 Q28 -28 29 -5 Q28 17 0 0',c)+E(0,0,6,7,c));
function human(x,y,s=1,who='garden',pose='hold',back=false){
 const old=who==='granny'||who==='ceng', boy=who==='boy', elfgirl=who==='elfgirl', night=who==='sleep', inn=who==='inn';
 const cloth=who==='ceng'?'#718CA0':old?'#ACA3BC':night?'#E8E3CD':inn?'#D9B975':elfgirl?'#D6B26D':'#E7D4A3';
 const pants=who==='ceng'?'#8F9590':old?'#ACA3BC':who==='kite'?'#6C87A0':inn?'#6EABA1':elfgirl?'#96785E':'#81966B';
 let a=E(0,0,71,11,ink,'opacity=".12"')+R(-35,-73,27,62,night?cloth:pants,9)+R(9,-73,27,62,night?cloth:pants,9)+E(-23,-8,25,11,who==='kite'||inn?'#EEE8D7':'#8C775C')+E(25,-8,25,11,who==='kite'||inn?'#EEE8D7':'#8C775C');
 a+=P('M-42 -173 L42 -173 L53 -67 Q0 -51 -53 -67Z',cloth);
 if(!old&&!night&&!inn&&!elfgirl)a+=R(-34,-158,13,67,pants,3)+R(21,-158,13,67,pants,3)+P('M-37 -128 L38 -128 L42 -64 L-43 -64Z',pants);
 if(inn||who==='granny')a+=P('M-37 -147 L37 -147 L63 -35 Q0 -17 -63 -35Z',pants);
 if(who==='garden')a+=P('M-28 -143 L29 -143 L42 -61 L-42 -61Z','#D8C48D')+R(-13,-126,30,20,'#B39268',3)+line(-7,-120,12,-120,'#E9D8AF',2);
 if(who==='shepherd')a+=P('M-43 -177 Q0 -154 42 -177 L29 -147 L0 -160 L-24 -143Z','#C78D5C')+R(41,-135,29,66,'#D8CBA7',8);
 if(boy)a+=R(30,-88,37,36,'#D9CBA7',8);
 const hair=old?'#B9BBB0':boy?'#8D7052':'#4D554E';
 if(old)a+=E(0,-284,27,26,hair);
 a+=E(0,-224,63,63,hair)+R(-60,-228,120,57,hair,16);
 if(!back){a+=E(0,-219,53,53,skin)+P('M-53 -231 Q-51 -281 4 -280 Q57 -275 55 -226 Q26 -230 9 -253 Q-14 -224 -53 -231Z',hair)+smile(0,-225,1,pose==='sad');
 if(old)a+=E(-19,-225,15,14,'none','stroke="#7C8576" stroke-width="3"')+E(19,-225,15,14,'none','stroke="#7C8576" stroke-width="3"')+line(-3,-225,3,-225,'#7C8576',3);
 }else a+=P('M-51 -212 Q0 -193 53 -212','none',hair,15);
 if(boy)a+=[-45,-24,0,25,45].map(xx=>E(xx,-270,18,18,hair)).join('');
 if(elfgirl)a+=E(56,-204,13,18,hair)+E(62,-184,11,15,hair);
 if(who==='kite')a+=G(back?-38:38,-258,1,P('M-12 4 Q-15 -15 0 -18 Q16 -15 14 4Z','#EFE7D4')+line(-6,1,-3,-12,'#C5BEAD',2)+line(5,1,3,-12,'#C5BEAD',2));
 if(inn||night)a+=leaf(back?-39:39,-248,.27,'#ABC18A',60);
 a+=pose==='raise'?arm(-41,-159,-67,-239,cloth):pose==='point'?arm(-41,-159,-90,-154,cloth):arm(-41,-159,-55,-114,cloth);
 a+=pose==='think'?arm(42,-157,16,-188,cloth):pose==='point'?arm(42,-157,96,-152,cloth):arm(42,-157,57,-111,cloth);
 a+=E(pose==='raise'?-67:pose==='point'?-90:-55,pose==='raise'?-239:pose==='point'?-154:-114,11,12,skin)+E(pose==='think'?16:pose==='point'?96:57,pose==='think'?-188:pose==='point'?-152:-111,11,12,skin);
 return G(x,y,s,a);
}
function bunny(x,y,s=1,who='tin',pose='hold',back=false){
 const gray=who==='tin'||who==='rong', old=who==='granny';
 const fur=gray?'#BEC5BF':old?'#AEB7AF':'#E8E5D1', cloth=who==='rong'?'#D0AA65':old?'#B0A2BB':who==='mother'?'#D8B792':who==='aunt'?'#91AEBA':'#779EAD';
 let a=E(0,0,73,11,ink,'opacity=".12"')+E(51,-51,22,22,'#EDE8D4')+E(-26,-9,27,14,fur)+E(27,-9,27,14,fur)+E(0,-100,52,88,fur)+P(['rong','hui'].includes(who)?'M-42 -161 L42 -161 L45 -66 L31 -28 L7 -28 L0 -68 L-7 -28 L-31 -28 L-45 -66Z':'M-42 -161 L42 -161 L54 -34 Q0 -19 -54 -34Z',cloth)+R(-33,-176,12,63,cloth,4)+R(21,-176,12,63,cloth,4);
 a+=G(-29,-254,1,E(0,0,17,66,fur)+E(0,-1,7,47,'#D4B9AB'),-9)+G(30,-258,1,E(0,0,17,68,fur)+E(0,-2,7,48,'#D4B9AB'),8)+E(0,-208,59,52,fur);
 if(!back)a+=E(0,-193,39,28,'#EBE7D5')+smile(0,-217,1,pose==='sad')+E(0,-203,7,5,'#B29487');
 const bx=back?-31:31;
 if(who==='tin')a+=G(bx,-295,1,P('M-12 5 Q-17 -13 0 -19 Q17 -14 13 5Z','#DDC779'));
 if(who==='rong')a+=bow(bx,-293,.67,'#7BADA0');
 if(who==='hui')a+=P('M-41 -168 L38 -67','none','#D5C49C',5)+R(28,-98,41,49,'#DAC9A3',6)+P('M-6 -131 L7 -131 L0 -111Z','#CF9360')+leaf(1,-129,.12,'#829469',25);
 if(old&&!back)a+=E(-19,-217,14,13,'none','stroke="#7C8576" stroke-width="3"')+E(19,-217,14,13,'none','stroke="#7C8576" stroke-width="3"');
 a+=pose==='raise'?arm(-41,-147,-63,-222,fur):arm(-41,-147,-35,-94,fur);
 a+=pose==='point'?arm(41,-146,95,-150,fur):pose==='think'?arm(41,-146,17,-186,fur):arm(41,-146,50,-98,fur);
 return G(x,y,s,a);
}
function rodent(x,y,s=1,old=false,pose='hold'){
 const fur=old?'#A29B88':'#AD7854';let a=P('M42 -43 Q160 -71 152 -196 Q135 -283 85 -266 Q42 -249 75 -212 Q114 -176 61 -143Z',fur)+E(0,-90,57,85,fur)+P('M-39 -152 L37 -152 L46 -39 Q0 -21 -47 -39Z',old?'#C69462':'#83986C')+E(-24,-10,27,14,fur)+E(26,-10,27,14,fur)+E(-39,-244,18,28,fur)+E(39,-244,18,28,fur)+E(0,-211,57,50,fur)+E(0,-189,36,25,'#E9D8B6')+smile(0,-218,1,pose==='sad');
 if(old)a+=E(-18,-218,14,13,'none','stroke="#6F7C6B" stroke-width="3"')+E(18,-218,14,13,'none','stroke="#6F7C6B" stroke-width="3"');else a+=G(40,-254,.5,P('M-26 -5 Q0 -49 27 -5 L5 6 L0 21 L-5 6Z','#C6B373'));
 a+=arm(-41,-145,-49,-97,fur)+arm(41,-145,pose==='point'?96:51,pose==='point'?-153:-97,fur);return G(x,y,s,a);
}
const bench=(x,y,s=1,legs=true)=>G(x,y,s,(legs?R(-118,-4,18,85,'#927C5C',5)+R(101,-4,18,85,'#927C5C',5):'')+R(-126,-112,18,127,'#927C5C',4)+R(108,-112,18,127,'#927C5C',4)+R(-126,-110,252,35,'#B69A6B',6)+R(-139,-17,278,31,'#C8AE7E',5)+line(-130,-6,130,-6,'#A68B64',3));
const sheet=(x,y,s=1,art='',rot=0)=>G(x,y,s,R(-84,-59,168,118,paper,5)+art,rot);
const pencil=(x,y,s=1,rot=-40)=>G(x,y,s,R(-4,-53,8,99,'#BCA063',1)+P('M-4 46 L4 46 L0 58Z','#5E6C5B'),rot);
const cloth=(x,y,s=1,c='#D9CCAA')=>G(x,y,s,P('M-123 -20 Q-103 -51 -74 -39 L113 -39 L133 33 Q63 18 4 38 Q-69 16 -129 34Z',c));
const orange=(x,y,s=1)=>G(x,y,s,E(0,0,20,19,'#D7A657')+leaf(4,-16,.18,'#8E9F6D',50));
function glasshouse(evening=false){return R(0,0,1000,800,evening?'#DBCDAB':'#D6DFCC',0)+P('M0 249 L500 25 L1000 249 L1000 631 L0 631Z',evening?'#D3D6BA':'#C2D7C7')+[0,250,500,750,1000].map(x=>line(500,25,x,249,'#9BB2A0',10)+line(x,249,x,631,'#9BB2A0',10)).join('')+line(0,250,1000,250,'#9BB2A0',10)+R(0,630,1000,170,'#B7B597',0)+[670,720,770].map(y=>line(0,y,1000,y,'#CAC4A6',2)).join('')+[160,310,460,610,760,910].map(x=>line(x,630,x,800,'#CAC4A6',2)).join('');}
function plant(x,y,s=1,state='old',face=true){const soil=state==='root',empty=state==='empty',newpot=state==='new'||state==='empty';let a='';
 if(soil)a+=P('M-55 -84 L-38 0 Q0 18 38 0 L55 -84Z','#857F60')+[-70,-50,-30,-10].map(yy=>P(`M-47 ${yy} Q0 ${yy+28} 47 ${yy}`,'none','#B7A67A',4)).join('');
 else a+=P('M-67 -90 L-49 -2 Q0 20 49 -2 L67 -90Z',newpot?'#C8A46D':'#BD8867')+E(0,-90,67,17,newpot?'#D6B680':'#CD9D79')+E(0,-91,55,11,'#7C8062');
 if(!empty){a+=P('M0 -87 Q9 -155 -4 -215 M1 -151 L-45 -192 M0 -163 L49 -207','none','#8D7C5B',13)+E(-49,-218,54,40,'#719568')+E(41,-243,60,42,'#7B9F6D')+E(5,-274,55,38,'#7B9F6D')+P('M15 -290 Q-3 -343 25 -346 Q56 -339 25 -321 Q14 -329 20 -336','none','#ADC185',10)+leaf(-78,-204,.46,'#9BB779',-42)+leaf(80,-218,.44,'#9BB779',40);
 if(face)a+=smile(0,-135,.53)+E(0,-122,3,3,'#867456');}
 if(state==='new')a+=G(-25,-37,.36,E(0,0,22,24,'#A78F68')+[-17,-6,6,17].map((xx,j)=>E(xx,-24,5,14-j%2*3,'#A78F68')).join(''))+G(27,-40,.25,E(0,0,22,24,'#A78F68')+[-17,-6,6,17].map(xx=>E(xx,-24,5,14,'#A78F68')).join(''));
 return G(x,y,s,a);}
const soilBucket=(x,y,s=1)=>G(x,y,s,P('M-47 -66 L-37 5 Q0 20 37 5 L47 -66Z','#9EAC91')+E(0,-66,47,15,'#828369')+P('M-44 -61 Q0 -135 44 -61','none','#83927C',7));
const doorway=()=>R(45,252,148,378,'#B5AA86',9)+R(59,268,120,362,'#8D9F89',5)+R(75,370,98,12,'#B5AD8A',2)+R(94,317,25,51,'#D4C196',4)+R(129,321,27,47,'#D8CAAA',4);
function gardenStory(i,cover){const b=glasshouse(i>8)+doorway();if(cover)return b+human(288,748,1.28,'garden','point')+table(635,635,1.22)+plant(636,597,1.12,'new')+wateringCan(813,692,.65);
 return [
 ()=>b+table(642,628,1.2)+plant(654,587,1.03)+human(332,748,1.35,'garden')+cloth(438,609,.4)+[237,369,624,828].map(x=>E(x,157,4,8,'#A4C3B8')).join(''),
 ()=>b+human(255,751,1.15,'garden','point')+human(816,748,1.3,'ceng','point')+table(553,632,1)+plant(554,594,.98),
 ()=>b+human(331,751,1.33,'garden')+table(649,645,1.45)+plant(565,606,.78)+plant(781,606,.79,'empty')+soilBucket(852,723,.8)+E(778,590,7,4,'#535F4E'),
 ()=>b+table(667,652,1.42)+plant(697,606,1.05,'empty')+human(345,750,1.35,'garden','point')+G(500,583,1,plant(0,0,.78),-18)+E(593,623,4,3,'#7D8065'),
 ()=>b+table(645,654,1.4)+cloth(602,609,.9)+human(361,749,1.4,'garden','think')+G(590,602,1,plant(0,0,.89),14)+plant(814,611,.75,'empty'),
 ()=>b+human(134,617,.75,'ceng')+human(370,751,1.36,'garden','sad')+cloth(381,576,.52)+table(734,647,1.1)+plant(679,604,.86)+plant(839,606,.61,'empty'),
 ()=>b+human(329,750,1.4,'garden','point')+table(663,642,1.18)+plant(661,601,1.07)+leaf(656,445,.33,'#92AA72',62)+R(196,350,17,275,'#D1BD92',4),
 ()=>b+human(265,746,1.23,'garden')+human(819,747,1.23,'ceng','point')+table(549,644,1.23)+plant(550,603,1.04)+G(616,532,1,R(-5,-66,10,124,'#CFBE8C',5),-16),
 ()=>b+table(560,657,1.5)+cloth(551,605,1.2)+human(294,750,1.24,'garden','point')+human(832,749,1.24,'ceng')+plant(543,602,1.02,'root')+G(779,607,1,plant(0,0,.65,'empty'),64),
 ()=>b+human(292,750,1.24,'garden','point')+human(821,749,1.24,'ceng','point')+table(563,650,1.24)+plant(567,609,1.04,'new')+soilBucket(407,614,.57)+E(452,591,6,5,'#898568'),
 ()=>b+table(649,649,1.3)+E(661,620,91,22,'#D3C099')+plant(661,602,1,'new')+human(323,750,1.32,'garden','point')+wateringCan(461,532,.7,-18)+P('M497 505 Q548 498 581 529','none','#91B8B0',4)+E(660,617,3,7,'#91B8B0'),
 ()=>b+stool(342,691,1)+human(342,727,.98,'garden','point')+table(664,645,1.2)+plant(660,604,1.06,'new')+P('M780 179 Q742 214 796 247','none','#B4C7B4',4),
 ][i]();}
function spirit(x,y,s=1,quiet=false){return G(x,y,s,P('M-26 7 Q-59 -23 -31 -67 Q-45 -92 -13 -96 Q6 -96 -4 -113 Q28 -101 13 -82 Q57 -52 29 -9 Q4 -23 -7 7Z','#A5C7BE','',0,'opacity=".92"')+smile(0,-55,.65,quiet)+P('M-30 -25 Q0 -7 29 -24 L23 -10 Q0 3 -31 -9Z','#CF9666')+P('M23 -16 Q57 -10 60 13 L34 8 L19 -7Z','#CF9666'));}
const inkpot=(x,y,s=1)=>G(x,y,s,R(-18,-37,36,37,'#788F89',6)+R(-20,-45,40,12,'#A49C7B',3));
function drawing(x,y,s=1,finished=false,bean=false){return sheet(x,y,s,G(0,8,.8,E(0,0,40,26,finished?'#C8916B':'none',finished?'':'stroke="#8E9177" stroke-width="3"')+[-1,1].map(k=>P(`M${k*32} 10 L${k*55} 16 M${k*33} 0 L${k*59} -2 M${k*30} -7 L${k*56} -17`,'none','#AA805D',4)).join('')+line(-17,-18,-18,-36,'#AA805D',5)+line(17,-18,18,-36,'#AA805D',5)+E(-18,-38,5,6,ink)+E(18,-38,5,6,ink)+P('M-29 -8 Q-53 -42 -57 -29 M32 -9 Q62 -45 64 -30','none','#AA805D',5)+(bean?P('M-57 -29 Q-95 -64 -88 -77 Q-63 -76 -57 -29Z','#B5B681'):E(-57,-31,14,10,'#D3B68A'))+(finished?R(-28,0,56,25,'#DFDAC0',6)+[-17,0,17].map(xx=>line(xx,2,xx,23,'#85A29A',4)).join('')+E(65,-39,29,20,'#CDAA75')+[50,62,74,83].map(xx=>line(xx,-45,xx+2,-49,'#E6D2A6',2)).join(''):'')),-3);}
const sketchBook=(x,y,s=1,open=false)=>open?book(x,y,s,true,'#839B73')+G(x,y,s,P('M-62 -15 Q-42 -36 -22 -15 Q-42 3 -62 -15 L-70 -25 L-70 -5Z','#94B2AB')+R(-51,-5,9,16,'#C3A579',2)+R(-35,-5,9,16,'#C3A579',2)+leaf(47,-11,.35,'#92A37A',20)):G(x,y,s,R(-81,-48,162,96,'#829B73',8)+R(-73,-40,145,80,'#92AA81',5)+line(-57,-39,-57,39,'#C6D0AB',2));
const seaside=(night=false)=>room(night)+R(656,266,231,130,night?'#5D8C91':'#A8C6BE',0)+P('M655 350 L705 300 L755 350 L806 302 L887 354Z','#D4B67E')+R(656,354,230,40,'#C4C3A1',0);
function bookStory(i,cover){const b=seaside(i>8);if(cover)return b+bunny(302,751,1.3)+table(632,640,1.3)+drawing(653,588,1.4,true)+spirit(773,361,1.6)+sketchBook(436,649,.6);
 return [
 ()=>b+table(632,644,1.4)+bunny(313,751,1.35)+sketchBook(617,596,1.3,true)+pencil(804,596,.6,57),
 ()=>b+table(619,646,1.35)+bunny(316,751,1.35,'tin','raise')+drawing(614,589,1.2)+spirit(798,412,1.36)+sheet(817,536,.42,'',13),
 ()=>b+table(623,649,1.4)+bunny(316,751,1.35,'tin','think')+sketchBook(559,595,1.1,true)+spirit(792,471,1.4)+sheet(765,615,.65),
 ()=>b+table(618,647,1.5)+bunny(317,751,1.35,'tin','sad')+drawing(643,590,1.45,false,true)+sketchBook(451,613,.59,true)+spirit(794,501,1.13)+pencil(561,522,.7,-43),
 ()=>b+table(611,653,1.4)+bunny(317,751,1.34,'tin')+drawing(572,602,1.1)+spirit(803,481,1.1)+[[694,342,'#BB8870'],[777,321,'#85AAB4'],[845,355,'#D1BC78']].map(([x,y,c])=>sheet(x,y,.4,P('M-38 0 L38 0 L23 22 L-23 22Z',c)+P('M0 -40 L0 -4 L27 -4Z',c),-8)).join(''),
 ()=>b+table(626,649,1.4)+bunny(329,751,1.4,'tin','sad')+sketchBook(424,547,.85,true)+spirit(803,578,1.06,true)+inkpot(794,611,.8)+sheet(630,600,.77),
 ()=>b+table(637,655,1.35)+bunny(341,751,1.4,'tin','think')+sketchBook(527,610,1.03)+spirit(799,570,1.14,true)+drawing(717,618,.7),
 ()=>b+table(637,648,1.4)+bunny(324,751,1.33,'tin','point')+sketchBook(517,607,.87)+drawing(690,594,1.0)+inkpot(829,599,.9)+spirit(828,563,.9,true),
 ()=>b+table(541,649,1.2)+bunny(276,751,1.3)+drawing(531,605,1.13)+sketchBook(373,626,.6)+spirit(811,397,.94)+E(799,421,26,7,'#B9C9A7')+E(819,302,32,35,'none','stroke="#D2E2C8" stroke-width="3"')+P('M752 203 Q707 248 738 270 Q789 294 792 248 Q791 216 771 202Z','none','#D2E2C8',3),
 ()=>b+table(649,651,1.35)+R(526,670,191,54,'#9C8E70',6)+R(541,682,164,37,'#CBC09E',5)+bunny(324,751,1.36,'tin','raise')+drawing(660,555,1.6,true)+pencil(826,616,.6,58),
 ()=>outdoors(true)+R(514,156,411,507,'#C9B48A',12)+R(579,206,279,294,'#E3CA8A',65)+R(612,243,210,220,'#F1D9A1',12)+bunny(310,751,1.27,'tin','point')+R(609,650,18,101,'#A09170',4)+R(803,650,18,101,'#A09170',4)+drawing(714,573,1.35,true)+spirit(814,450,1.3),
 ()=>b+table(628,646,1.38)+bunny(316,751,1.37)+sketchBook(631,598,1.2,true)+G(672,576,1,P('M-20 -10 Q0 6 21 -10 L18 2 L2 7 L16 30 L-3 26 L-12 6 L-21 2Z','#CE986C'))+pencil(798,610,.7,-65)+R(487,680,181,48,'#B4A483',5),
 ][i]();}
function tinyStar(x,y,s=1,sitting=false){return G(x,y,s,glowingStar()+E(-10,-1,2.6,3.5,ink)+E(10,-1,2.6,3.5,ink)+P('M-7 12 Q0 18 7 12','none','#A9905C',1.8)+line(-8,24,sitting?-18:-9,31,'#BAA168',4)+line(8,24,sitting?18:9,31,'#BAA168',4));}
function glowingStar(){return E(0,0,44,40,'#F3DB91','opacity=".14"')+P('M0 -30 Q5 -16 12 -11 L32 -9 Q17 5 19 11 L22 31 Q4 22 0 20 Q-7 23 -22 31 L-18 9 Q-22 3 -32 -9 L-11 -12Z','#E8CF84');}
const seven=(pts,s=.55,sit=false)=>{if(pts.length!==7)throw Error('Seven stars required');return pts.map(([x,y],j)=>tinyStar(x,y,s+(j%2)*.03,sit)).join('');};
const gate=(x,y,s=1,open=false)=>G(x,y,s,R(-100,-206,17,220,'#7197AA',6)+R(85,-206,17,220,'#7197AA',6)+(open?G(97,0,1,R(0,-181,48,156,'#8EAEBA',5)+line(5,-131,45,-131,'#B2C8C4',6),-9):R(-82,-181,167,156,'#8EAEBA',5)+[-52,-17,18,53].map(xx=>line(xx,-169,xx,-34,'#BED0C6',10)).join(''))+P('M-14 -208 Q-20 -176 -29 -170 L29 -170 Q20 -176 14 -208Z','#C7B47C')+E(0,-169,29,8,'#D9C28A'));
function pasture(night=false){return R(0,0,1000,800,night?'#3E606A':'#BDCDBB',0)+cloud(174,176,1.2,night?'#718D8A':'#E9E4C9')+cloud(862,130,1.4,night?'#718D8A':'#E9E4C9')+P('M0 540 Q255 341 490 493 Q774 347 1000 507 L1000 800 L0 800Z',night?'#7D987D':'#A8BC91')+P('M384 800 Q394 593 745 467 L801 486 Q543 638 605 800Z','#BCC4A3')+[75,143,222,801,891,954].map((x,j)=>flower(x,748-j%2*53,.75,night?'#B4B9C4':'#ECE5C8')+grass(x+23,773,.6,'#91AC8B')).join('');}
const starBook=(x,y,s=1)=>book(x,y,s,true,'#B4B08A')+G(x,y,s,[-63,-26,23,60].map((xx,j)=>E(xx,-17+j%2*16,12,10,'none','stroke="#BE8C75" stroke-width="2"')+notes(xx,-18,.16,'#82977A')).join(''));
function shepherdStory(i,cover){const b=pasture(i>5);const distant=gate(813,488,.55);if(cover)return b+gate(751,580,.95,true)+human(326,749,1.4,'shepherd','raise')+seven([[481,654],[560,626],[623,574],[694,485],[729,398],[737,309],[758,226]],.68)+notes(415,381,1.3);
 return [
 ()=>b+distant+human(332,751,1.4,'shepherd','think')+seven([[510,685],[588,713],[662,676],[735,719],[805,663],[875,699],[926,639]],.53,true),
 ()=>b+distant+human(300,750,1.4,'shepherd','raise')+notes(449,373,1.1)+seven([[450,685],[522,650],[591,625],[661,602],[728,578],[794,552],[857,532]],.56),
 ()=>b+distant+human(355,747,1.43,'shepherd','sad')+seven([[496,704],[559,659],[625,711],[692,676],[756,711],[820,650],[878,701]],.56,true)+flower(633,742,1.5),
 ()=>b+distant+human(319,751,1.4,'shepherd','point')+notes(414,401,.48)+seven([[459,702],[515,681],[574,657],[744,635],[803,680],[861,630],[913,678]],.56,true)+P('M667 335 Q766 301 880 333','none','#CBD5B8',6),
 ()=>b+distant+human(327,750,1.43,'shepherd')+starBook(347,576,.85)+seven([[490,713],[555,680],[617,709],[687,675],[755,713],[825,675],[887,710]],.56,true),
 ()=>b+human(323,750,1.4,'shepherd','sad')+starBook(517,663,1.15)+seven([[682,670],[738,716],[799,667],[858,711],[911,654],[672,753],[840,756]],.52,true)+leaf(687,692,.53,'#95AE83',36),
 ()=>b+distant+human(331,749,1.4,'shepherd','think')+starBook(229,710,.65)+seven([[399,734],[482,730],[564,727],[645,718],[725,706],[806,692],[878,668]],.6,true),
 ()=>b+distant+human(317,749,1.4,'shepherd','raise')+R(391,571,40,64,'#A0B8AB',12)+notes(433,386,.92)+seven([[449,693],[515,672],[582,645],[651,621],[720,596],[789,569],[849,547]],.56)+[703,782,875].map(x=>flower(x,746,.85,'#B9AAC3')).join(''),
 ()=>b+gate(815,541,.71)+human(323,748,1.4,'shepherd','point')+notes(459,395,1.1)+seven([[466,706],[530,680],[592,657],[654,629],[715,609],[777,585],[832,565]],.55)+leaf(612,687,.72,'#97AB7E',74),
 ()=>b+gate(747,585,1.15)+human(315,750,1.36,'shepherd','raise')+seven([[469,723],[534,700],[596,682],[658,661],[717,639],[778,621],[839,602]],.56)+notes(425,396,.85),
 ()=>b+gate(726,641,1.23,true)+human(319,750,1.37,'shepherd','raise')+seven([[605,580],[658,510],[701,440],[747,370],[779,296],[821,224],[849,156]],.6),
 ()=>room(true)+human(286,751,1.2,'shepherd')+human(812,751,1.3,'granny','point')+table(554,653,1.2)+starBook(559,606,1)+gate(596,593,.16)+R(413,584,30,42,'#ACC3B8',7)+seven([[684,176],[737,148],[786,181],[840,157],[703,222],[765,245],[835,225]],.24),
 ][i]();}
function squashHouse(x=700,y=647,s=1){return G(x,y,s,P('M-7 -364 Q-39 -420 12 -427 Q54 -423 21 -398 Q8 -385 20 -367Z','#7D9E70')+E(-80,-182,124,188,'#CF9E5B')+E(80,-182,124,188,'#D9AE68')+E(0,-185,126,189,'#E0BA75')+E(-114,-224,37,44,'#C9B98B')+E(114,-224,37,44,'#C9B98B')+E(-114,-224,27,33,'#DADCC0')+E(114,-224,27,33,'#DADCC0')+line(-141,-224,-87,-224,'#A38E67',5)+line(87,-224,141,-224,'#A38E67',5)+P('M-68 3 L-68 -118 Q-68 -192 0 -191 Q68 -192 68 -118 L68 3Z','#9E8761')+P('M-58 3 L-58 -114 Q-58 -178 0 -177 Q58 -178 58 -114 L58 3Z','#BDBB96')+E(0,2,61,12,'#C9B98D'));}
const roofGarden=(evening=false)=>outdoors(evening)+R(0,563,1000,40,'#B9B9A0',7)+[35,172,876,966].map(x=>R(x,593,24,85,'#ABB59D',3)).join('')+[76,157,886,956].map(x=>leaf(x,724,1.7,'#9AB381',x%2?24:-24)).join('');
const pumpkinRoom=()=>R(0,0,1000,800,'#DDC38B',0)+[130,310,500,690,870].map(x=>P(`M500 0 Q${x} 160 ${x} 657`,'none','#CBAE75',9)).join('')+R(0,656,1000,144,'#B8A787',0)+R(656,129,203,219,'#C4B381',90)+R(672,145,171,187,'#B4CCB3',80)+line(757,147,757,330,'#D4C599',8)+line(674,237,839,237,'#D4C599',8);
const jointBoard=(x,y,s=1,n=1,rot=0)=>G(x,y,s,R(-109,-13,218,26,'#C1A371',5)+Array.from({length:n},(_,j)=>G(-76+j*22,0,.55,P('M0 -11 L3 -3 L11 -3 L5 2 L7 10 L0 6 L-7 10 L-5 2 L-11 -3 L-3 -3Z','#826F53'))).join('')+E(89,0,5,5,'#8F805E'),rot);
const plan=(x,y,s=1)=>sheet(x,y,s,line(-56,-19,56,-19,'#87977D',4)+line(-56,13,56,13,'#87977D',4)+line(-45,-20,-45,39,'#87977D',4)+line(46,-20,46,39,'#87977D',4)+[[-55,-35],[0,-35],[56,-35]].map(([xx,yy],j)=>Array.from({length:j+1},(_,k)=>G(xx+k*10,yy,.25,P('M0 -11 L3 -3 L11 -3 L5 2 L7 10 L0 6 L-7 10 L-5 2 L-11 -3 L-3 -3Z','#B3925D'))).join('')).join(''));
const pin=(x,y,s=1)=>G(x,y,s,R(-5,-22,10,44,'#9D825C',4)+E(0,-22,5,3,'#C9B082'));
function seatedGranny(x,y,s=1){return G(x,y,s,E(0,-278,25,24,'#BCBDB2')+E(0,-227,62,62,'#BCBDB2')+E(0,-219,52,51,skin)+smile(0,-225)+E(-19,-225,15,14,'none','stroke="#7C8576" stroke-width="3"')+E(19,-225,15,14,'none','stroke="#7C8576" stroke-width="3"')+line(-3,-225,3,-225,'#7C8576',3)+P('M-40 -172 L41 -172 L58 -50 Q0 -34 -50 -50Z','#ACA3BC')+arm(-38,-157,-51,-99,'#ACA3BC')+arm(39,-157,57,-98,'#ACA3BC')+E(-51,-99,11,12,skin)+E(57,-98,11,12,skin)+P('M-21 -72 Q51 -96 132 -69 L175 -61 L176 -40 Q87 -30 3 -43Z','#C5B6CB')+E(180,-51,24,11,'#8D8172'));}
function benchStory(i,cover){const b=roofGarden(i>5)+squashHouse(710,655,1.1);if(cover)return pumpkinRoom()+bench(548,638,1.28)+seatedGranny(497,663,1.1)+human(271,754,.98,'boy','raise')+human(827,752,.98,'elfgirl','point')+plan(467,744,.6);
 return [
 ()=>b+human(284,751,1.18,'boy','point')+human(474,751,1.16,'elfgirl')+E(839,408,14,7,'#9A7A59'),
 ()=>roofGarden()+cloth(561,686,2)+bench(576,629,1.28)+human(287,753,1.19,'boy')+human(844,752,1.19,'elfgirl','point')+plan(260,612,.73)+R(449,699,156,16,'#CFBC86',3)+[493,522,550].map(x=>pin(x,733,.7)).join(''),
 ()=>b+human(286,754,1.2,'boy','sad')+human(887,751,1.14,'elfgirl')+bench(664,633,1.18)+plan(345,609,.72),
 ()=>b+human(284,754,1.18,'boy','point')+human(887,752,1.14,'elfgirl','point')+G(663,636,1,bench(0,0,1.17),-23)+cloth(531,617,.28)+cloth(790,528,.23),
 ()=>b+human(284,754,1.18,'boy','think')+bench(514,687,.86,false)+cloth(419,756,.8)+[-28,0,28,56].map(xx=>R(377+xx,691,13,72,'#B3996F',4)).join('')+human(724,645,.65,'elfgirl')+jointBoard(724,566,.37,0,71),
 ()=>b+human(301,751,1.22,'boy','think')+human(849,726,1.08,'elfgirl')+jointBoard(827,605,.43,0,53)+bench(538,723,.81,false)+cloth(588,754,.56),
 ()=>roofGarden(true)+human(300,753,1.26,'boy','point')+human(835,753,1.26,'elfgirl')+bench(558,653,1.35,false)+[500,539,578].map(x=>pin(x,715,.9)).join('')+P('M451 650 L659 650 M451 663 L659 663','none','#8C7D5A',4),
 ()=>b+human(275,752,1.2,'boy')+human(887,753,1.12,'elfgirl','point')+plan(344,605,.91)+jointBoard(593,716,.8,1)+jointBoard(638,673,.8,2)+jointBoard(709,604,.65,3,76)+[393,418,443].map(x=>pin(x,739,.6)).join(''),
 ()=>pumpkinRoom()+R(58,240,170,419,'#AD956F',75)+R(72,256,142,402,'#9BB18F',65)+human(344,751,1.25,'boy')+human(830,751,1.25,'elfgirl','point')+bench(585,654,1.25,false)+plan(385,588,.71)+jointBoard(694,573,.58,3,-17),
 ()=>pumpkinRoom()+bench(551,659,1.3)+human(353,726,1.02,'boy')+human(733,726,1.02,'elfgirl')+pin(822,712,.8)+plan(271,751,.69),
 ()=>pumpkinRoom()+bench(568,653,1.4)+seatedGranny(520,680,1.13)+human(275,752,1.03,'boy','point')+human(868,752,1.03,'elfgirl','point')+E(382,723,45,31,'#AA8761')+line(353,718,412,718,'#C3A37B',4)+plan(858,738,.55),
 ()=>pumpkinRoom()+bench(550,651,1.9)+seatedGranny(540,675,1.0)+human(320,710,.85,'boy')+human(790,710,.85,'elfgirl')+cloth(762,649,.38,'#CAD0B0'),
 ][i]();}
const slipper=(x,y,s=1,red=true,rot=0)=>G(x,y,s,E(0,0,32,18,'#BBA573')+P('M-32 -3 Q-39 -54 -7 -63 Q25 -64 32 -22 L31 -2Z','#E0C887')+E(-6,-44,18,11,'#B6A882')+E(15,-25,8,8,red?'#BC8974':'#7C9CA9')+E(15,-25,2,2,'#E7DDC0'),rot);
const pair=(x,y,s=1,rot=0)=>G(x,y,s,slipper(-38,0,1,true,-5)+slipper(39,0,1,false,5),rot);
const print=(x,y,c,rot=0)=>G(x,y,1,E(0,0,11,17,c,'opacity=".8"')+E(0,23,9,7,c,'opacity=".8"'),rot);
const footprintTrail=(dance=false)=>dance?[[398,540],[460,515],[534,533],[590,583],[569,650],[513,680],[437,659],[396,594],[463,567],[520,587],[504,631],[452,620]].map(([x,y],j)=>print(x,y,j%2?'#829DAA':'#BE8E7F',j*41)).join(''):[[320,731],[368,695],[413,653],[458,616],[508,581],[553,550],[605,521]].map(([x,y],j)=>print(x,y,j%2?'#829DAA':'#BE8E7F',38)).join('');
const bedroom=(night=false)=>room(night)+R(78,580,358,145,'#A58E6B',9)+R(78,484,30,233,'#A58E6B',7)+R(101,535,320,133,'#D5D6B9',12)+R(101,621,320,71,'#C1C9AB',10)+R(124,510,104,58,'#E2DEC4',15);
const hall=(night=false)=>R(0,0,1000,800,night?'#B4B59C':'#CFD0B6',0)+P('M0 800 L228 473 L777 473 L1000 800Z','#B7AB8E')+R(0,473,1000,327,'#B7AB8E',0)+R(729,139,171,335,'#B3BD9F',70)+R(747,157,135,318,night?'#4E7274':'#92B3A4',58)+line(812,165,812,462,'#CECAAA',7)+R(88,153,135,321,'#A4997D',10)+E(522,631,214,98,'#C6C8BA')+E(522,630,200,87,'#D0D0C2');
function shoeStory(i,cover){if(cover)return hall(true)+human(291,753,1.28,'inn','point')+sheet(605,659,1.8)+G(85,31,1,footprintTrail(true))+pair(718,552,1.23)+P('M751 512 Q771 494 766 478','none','#BFC9BE',3);
 return [
 ()=>bedroom()+human(312,700,1.16,'inn','think')+pair(577,678,1.4,85)+P('M555 641 Q578 616 574 604','none','#D0D7C8',3),
 ()=>room()+R(521,537,396,170,'#A59979',8)+R(502,521,436,35,'#C4B38B',9)+animal(733,565,1.0,'badger','point')+human(316,749,1.34,'inn','think')+pair(436,731,.79),
 ()=>bedroom(true)+G(301,602,.77,human(0,0,1,'sleep'),-78)+R(110,572,303,101,'#C7D0B4',18)+pair(541,714,1.3)+E(732,181,29,29,'#E8D8A9'),
 ()=>bedroom(true)+P('M327 781 L301 699 L625 485 L705 488 L423 800Z',paper)+human(415,746,1.32,'sleep')+pair(604,695,1.17)+R(480,687,53,12,'#BE8E7F',4)+R(481,713,53,12,'#829DAA',4)+R(354,736,39,17,'#C6BE9D',3),
 ()=>hall()+P('M265 800 L273 754 L338 681 L388 696 L337 800Z',paper)+[[300,771],[318,746],[337,719],[356,698]].map(([x,y],j)=>print(x,y,j%2?'#829DAA':'#BE8E7F',38)).join('')+human(240,748,1.31,'inn','point')+stool(697,670,.6)+P('M340 685 L379 698','none','#C6BE9D',8),
 ()=>hall()+human(313,750,1.33,'inn','think')+pair(455,696,.95)+P('M619 614 Q657 580 652 563 M621 621 Q675 606 684 583','none','#E1E1D2',4)+[772,802,842,871].map(x=>E(x,450,15,3,'#BACFC4')).join(''),
 ()=>hall(true)+E(522,629,207,91,paper)+human(287,751,1.32,'sleep')+pair(663,659,1.09)+R(389,628,260,10,'#CFC8A7',3)+R(509,550,9,157,'#CFC8A7',3)+R(719,698,46,12,'#829DAA',4)+R(720,723,46,12,'#BE8E7F',4),
 ()=>hall()+E(522,629,207,91,paper)+footprintTrail(true)+human(268,751,1.33,'inn','think')+print(336,693,'#BE8E7F',-45)+print(363,721,'#829DAA',130),
 ()=>hall()+E(522,629,207,91,paper)+footprintTrail(true)+human(525,673,1.14,'inn','raise')+P('M421 585 Q481 556 457 527 M601 613 Q651 638 620 669','none','#A7B59C',4),
 ()=>hall()+E(522,629,207,91,paper)+footprintTrail(true)+P('M398 540 Q526 477 569 650 Q524 707 437 659 Q376 608 398 540 M460 515 Q638 563 513 680 Q372 677 396 594 Q467 538 520 587 Q540 664 452 620','none','#B69783',3)+human(267,749,1.32,'inn','point')+pencil(365,565,.75,-36),
 ()=>bedroom()+sheet(629,710,1.6)+G(320,340,.55,footprintTrail(true))+human(487,695,1.26,'inn','raise')+pair(488,697,.92)+cloth(805,715,.35),
 ()=>hall(true)+R(88,153,135,321,'#8D9076',10)+pair(293,610,1.09,-18)+notes(405,416,.7,'#AFC0AA')+P('M454 602 Q497 578 526 592 M569 684 Q613 674 634 647','none','#E2E0CB',3),
 ][i]();}
function yarnHand(x,y,s=1,rot=0,point=false){return G(x,y,s,P(point?'M-26 22 L-26 -15 Q-26 -31 -14 -26 L-12 -68 Q-11 -82 -2 -77 L0 -31 Q6 -52 14 -41 L18 -25 Q29 -40 36 -22 L39 14 Q19 39 -4 38Z':'M-28 16 L-32 -22 Q-30 -38 -20 -31 L-12 -8 L-13 -57 Q-8 -72 1 -58 L5 -12 L11 -57 Q17 -69 24 -53 L25 -9 L33 -42 Q42 -48 45 -32 L39 17 Q23 42 -3 39Z','#D2B46F','#B59B65',2)+[-4,8,20].map(yy=>P(`M-20 ${yy} Q5 ${yy+8} 31 ${yy}`,'none','#E3CB91',3)).join(''),rot);}
function redDoor(mode='open',withLeaf=false){let a=R(513,187,335,471,'#C4AC85',133)+R(532,203,297,455,'#9B9E80',121)+R(545,218,272,440,'#B9B892',110)+R(686,228,129,422,'#B97965',19)+line(716,246,716,627,'#CB9478',3)+line(766,246,766,627,'#CB9478',3)+E(738,366,27,27,'none','stroke="#D5B97C" stroke-width="8"')+smile(737,300,.65);
 const rest=mode==='wave'||mode==='rest';
 a+=P(mode==='point'?'M711 433 Q696 475 667 530':rest?'M709 430 Q657 469 677 523':'M711 433 Q638 442 597 483','none','#CBB174',28)+P(rest?'M785 430 Q846 440 836 511':'M787 437 Q862 463 887 519','none','#CBB174',28);
 a+=yarnHand(mode==='point'?667:rest?679:597,mode==='point'?530:rest?508:483,.85,mode==='point'?-110:rest?-15:-43,mode==='point')+yarnHand(rest?836:887,rest?504:519,.85,18);
 if(withLeaf)a+=leaf(rest?677:597,rest?468:445,.62,'#9EAF7B',-24);
 return a;}
const bakery=(mode='open',hasLeaf=false)=>outdoors()+R(449,122,480,543,'#D6C49E',18)+P('M420 144 L697 23 L957 145Z','#879E7E')+redDoor(mode,hasLeaf)+P('M0 800 Q214 662 522 650 L551 691 Q258 731 139 800Z','#D2C6A2');
const snailBread=(x,y,s=1,half=false)=>G(x,y,s,P('M-41 9 Q-58 -10 -43 -30 Q-25 -44 -12 -11 Q16 -5 51 7 L44 18 L-28 18Z','#D4AD76')+E(14,-13,35,33,'#DCBC85')+P('M37 -3 Q46 -42 10 -41 Q-20 -25 2 -7 Q25 12 26 -15 Q19 -32 7 -20','none','#AF8C5F',4)+(half?P('M14 -44 L14 19 L46 14 Q65 -24 14 -44Z','#E8D4A8')+[[24,-25],[30,-12],[24,3],[44,-3]].map(([xx,yy])=>E(xx,yy,4,3,'#CDB581')).join(''):''));
const snailPlan=(x,y,s=1)=>sheet(x,y,s,snailBread(-35,3,.65)+snailBread(35,3,.55),7);
function doorStory(i,cover){if(cover)return bakery('wave',true)+bunny(358,751,1.36,'hui','raise')+snailPlan(357,589,.65)+flower(204,732,1.1);
 return [
 ()=>bakery()+bunny(304,752,1.4,'hui','think')+snailPlan(393,611,.6)+P('M0 631 Q126 652 207 605','none','#89A876',16),
 ()=>bakery()+bunny(325,751,1.4,'hui','sad')+P('M260 452 Q211 423 228 393','none','#C4B390',4)+flower(451,735,.8),
 ()=>bakery()+bunny(292,736,1.28,'hui','sad')+plant(431,741,.52,'empty')+[397,427,459].map(x=>flower(x,674,.72,'#E9E5CD')).join(''),
 ()=>bakery()+bunny(336,751,1.35,'hui','sad')+G(336,751,1.35,P('M-48 -226 Q-67 -293 -47 -334 Q0 -350 47 -334 Q67 -290 48 -226 L32 -248 Q0 -270 -32 -248Z','#A9BFA0')+R(36,-238,20,43,'#A9BFA0',7))+E(349,467,3,6,'#A5C3BA'),
 ()=>bakery('open',true)+bunny(334,751,1.35,'hui','point')+snailPlan(391,622,.48)+leaf(256,750,.6,'#A2AB79',70),
 ()=>bakery('open',true)+rodent(594,596,.49,false,'point')+table(596,558,.37)+E(594,538,28,12,'#E4D2AB')+bunny(326,752,1.37,'hui','sad')+snailPlan(384,596,.65),
 ()=>bakery('open',true)+bunny(332,752,1.36,'hui','point')+R(562,574,73,61,'#B4A17D',6)+E(574,641,12,12,'#897E60')+E(622,641,12,12,'#897E60'),
 ()=>bakery('open',true)+bunny(333,751,1.4,'hui','raise')+snailPlan(413,620,.45)+P('M433 367 Q461 366 483 387','none','#B3C5A3',3),
 ()=>bakery('wave',true)+bunny(454,751,1.34,'hui','raise')+P('M612 408 Q649 382 677 398','none','#B2BE9C',4),
 ()=>room()+table(567,648,1.5)+bunny(283,750,1.28,'hui')+rodent(839,750,1.25,false,'point')+R(486,578,177,66,'#A9B2A0',9)+snailBread(526,604,.8)+snailBread(619,604,.65)+snailPlan(421,640,.47)+R(68,325,164,216,'#AAA185',16)+R(83,370,132,120,'#777E69',12),
 ()=>bakery('point',false)+leaf(834,726,.6,'#9EAF7B',60)+bunny(482,750,1.3,'hui','point')+line(578,555,598,550,'#E6E4D0',10)+R(440,615,74,101,'#D6C29A',7)+snailBread(474,615,.6),
 ()=>room(true)+bunny(284,751,1.26,'hui')+bunny(814,750,1.35,'mother','point')+table(553,647,1.3)+snailBread(525,611,1.12,true)+snailBread(663,616,.76,true)+R(391,606,61,59,'#D1BF97',6)+G(500,180,.31,redDoor('rest',true)),
 ][i]();}
function windPear(x,y,s=1,net=false,rot=0){return G(x,y,s,P('M-6 -42 Q-27 -40 -22 -18 Q-24 -3 -39 12 Q-56 51 0 58 Q55 51 39 12 Q23 -6 20 -24 Q21 -46 -6 -42Z','#D7C779')+line(1,-41,7,-57,'#9B8C62',5)+leaf(12,-49,.24,'#9BAF7F',45)+[[-14,-10],[14,-20],[-25,21],[8,15],[28,35],[-8,41]].map(([xx,yy])=>E(xx,yy,3,3,'#EFDE91')).join('')+(net?P('M-17 -38 Q-53 5 -35 47 L0 65 L36 45 Q48 1 17 -39 M-30 -15 L28 44 M-39 10 L8 59 M-33 36 L11 -38 M-13 58 L32 -10 M-38 36 L35 36 M-43 10 L37 10','none','#9BA282',2.5)+line(-17,-38,0,66,'#A5AD8E',1):''),rot);}
const pearPositions=[[382,338],[473,315],[565,339],[656,309],[744,334],[832,313],[383,446],[473,465],[565,443],[655,468],[745,445],[835,466]];
const manyPears=(n=12,nets=false,positions=pearPositions)=>positions.slice(0,n).map(([x,y],j)=>(nets?line(x,y+46,x,615,'#A1A88C',2):'')+windPear(x,y,.69,nets,j%2?3:-4)).join('');
const closedBasket=(x,y,s=1)=>G(x,y,s,basket(0,0,1,false)+E(0,-52,66,19,'#BFA676')+line(-49,-52,48,-52,'#D7BE91',4));
const checked=(x,y,w=370,h=90)=>R(x,y,w,h,'#A3B7BA',5)+Array.from({length:Math.ceil(w/32)},(_,j)=>line(x+16+j*32,y,x+16+j*32,y+h,'#D2D6C4',8)).join('')+Array.from({length:Math.ceil(h/29)},(_,j)=>line(x,y+12+j*29,x+w,y+12+j*29,'#D2D6C4',7)).join('');
function market(){return R(0,0,1000,800,'#CED9C0',0)+R(0,389,1000,220,'#A3C3BB',0)+P('M0 638 Q511 546 1000 633 L1000 800 L0 800Z','#B8BB98')+R(111,189,30,467,'#A39B75',5)+R(887,189,30,467,'#A39B75',5)+P('M71 199 L513 73 L949 199Z','#9EAD81')+R(81,195,856,31,'#BFBD93',7)+R(316,626,558,110,'#A5916A',5)+R(296,602,600,35,'#C5AD7C',6)+line(128,294,902,294,'#C59179',5);}
function fruitStory(i,cover){const b=market();if(cover)return b+checked(319,604,551,94)+manyPears(12,true)+rodent(175,749,1.15,false,'point');
 return [
 ()=>b+rodent(269,748,1.27)+rodent(840,747,1.2,true,'point')+basket(555,608,1.55,false)+manyPears(12,false,[[487,499],[546,487],[606,500],[466,539],[524,530],[583,533],[639,541],[479,574],[535,570],[593,568],[649,578],[580,451]])+checked(332,671,208,63),
 ()=>b+rodent(255,751,1.4,false,'point')+checked(319,604,552,94)+manyPears(12,false,[[524,373],[467,425],[581,421],[414,478],[524,479],[636,476],[363,546],[468,541],[581,544],[689,542],[779,534],[826,440]]),
 ()=>b+stool(290,706,.8)+rodent(291,692,1.1,false,'point')+closedBasket(583,608,1.32)+manyPears(8,false,[[384,261],[467,258],[550,260],[635,263],[720,261],[803,261],[440,350],[728,389]]),
 ()=>b+rodent(276,750,1.38,false,'think')+closedBasket(736,604,1.2)+windPear(483,454,1.2,false,180)+windPear(620,350,.72,false,180),
 ()=>b+rodent(247,749,1.3,false,'point')+bunny(849,751,1.2,'aunt','think')+P('M366 600 Q365 540 408 553 Q437 507 470 552 Q509 514 546 553 Q584 514 626 552 Q671 516 704 555 Q750 526 775 601 L766 650 L367 650Z','#9DB3B7')+[383,470,562,652,752].map(x=>line(x,568,x,649,'#CCD3C3',6)).join('')+[[369,604],[773,604],[388,645],[752,645]].map(([x,y])=>E(x,y,17,9,'#A2AC98')).join('')+closedBasket(891,648,.62),
 ()=>b+rodent(264,750,1.35,false,'sad')+bunny(880,694,.86,'aunt')+cloth(568,611,1.61,'#9DB3B7')+P('M374 609 Q389 526 449 570 L459 616Z','#B7C8C5')+windPear(489,447,.86)+windPear(622,341,.78)+E(758,627,16,9,'#9EA58E'),
 ()=>b+rodent(333,751,1.45,false,'point')+P('M128 294 L680 253 L902 294','none','#C59179',5)+windPear(678,287,.91)+closedBasket(528,605,.96),
 ()=>b+checked(318,604,552,92)+rodent(297,750,1.41,false,'point')+line(612,464,612,615,'#98A286',4)+windPear(613,399,1.27,true)+closedBasket(802,605,.68),
 ()=>b+checked(318,604,552,93)+manyPears(12,true)+rodent(175,749,1.15,false,'raise'),
 ()=>b+checked(318,604,552,93)+manyPears(11,true)+rodent(230,750,1.27,false,'point')+bunny(855,751,1.2,'aunt')+basket(816,630,.9,false)+windPear(767,571,.68)+R(902,583,58,78,'#D7C69F',5),
 ()=>b+checked(318,604,552,93)+[384,475,567,660,750,834].map(x=>P(`M${x-23} 619 Q${x} 672 ${x+24} 621`,'none','#98A286',3)).join('')+rodent(264,750,1.33,false,'point')+rodent(851,750,1.21,true)+windPear(582,528,.78,true)+R(550,563,100,57,'#D7C6A0',7)+R(394,606,78,36,'#AC9670',5)+[413,438,459].map(x=>E(x,605,8,4,'#CAB27D')).join(''),
 ()=>b+checked(319,604,552,93)+rodent(394,750,1.34)+rodent(650,749,1.4,true,'point')+[477,531,585,639,693].map(x=>P(`M${x} 615 Q${x-33} 570 ${x+10} 535 M${x} 615 Q${x+42} 567 ${x+10} 535`,'none','#9DA789',3)).join(''),
 ][i]();}
function walkingBasket(x,y,s=1,{back=false,empty=false,lift=false,sad=false}={}){
 let a=E(0,0,103,13,ink,'opacity=".11"');
 // When front-facing, its own left legs are on the viewer's right.
 const left=back?-1:1;
 for(const side of [-1,1])for(const rear of [true,false]){const xx=side*(rear?42:65),yy=rear?-30:-9,up=lift&&side===left?-16:0;a+=P(`M${xx} -58 Q${xx+side*10} -34 ${xx+side*8} ${yy+up}`,'none','#AE9164',11)+E(xx+side*8,yy+up,17,7,'#A88D61');if(side===left&&!rear)a+=bow(xx+side*8,yy+up-13,.39,'#719FAD');}
 a+=P('M-85 -104 Q-71 -239 0 -234 Q78 -235 86 -104','none','#AC8D5F',12)+P('M-100 -113 L-79 -49 Q0 -17 79 -49 L100 -113Z','#B79B6D')+E(0,-113,100,29,'#D5BD91')+E(0,-113,87,20,'#E8DCC0');
 if(!empty)a+=[[-49,-113],[0,-122],[48,-112],[-46,-87],[2,-94],[46,-87]].map(([xx,yy])=>orange(xx,yy,.76)).join('');
 a+=P('M-86 -96 Q0 -69 86 -96 M-82 -78 Q0 -52 82 -78 M-76 -59 Q0 -36 76 -59','none','#D9BD8D',5)+[-59,-30,0,30,59].map(xx=>line(xx,-102,xx*.8,-45,'#A98E61',3)).join('');
 if(!back)a+=smile(0,-78,.76,sad);
 return G(x,y,s,a);
}
const potsAtSides=()=>[85,210,857,962].map((x,j)=>plant(x,668-j%2*55,.61,'old',false)).join('');
const pathFork=()=>P('M393 800 L451 640 L346 516 L387 500 L514 616 L685 512 L725 532 L557 658 L600 800Z','#D5C7A2');
const whiteDoor=()=>R(716,245,157,386,'#D8D8BD',57)+R(735,268,116,363,'#A1B29A',43)+R(738,276,26,351,'#E5DFCB',5)+E(756,467,4,5,'#AD9D79');
function basketStory(i,cover){const b=glasshouse(i===11)+potsAtSides()+pathFork();if(cover)return b+whiteDoor()+bunny(321,751,1.28,'rong','point')+walkingBasket(655,739,1.42)+wateringCan(824,608,.6);
 return [
 ()=>glasshouse()+R(75,304,170,290,'#AB9F7C',9)+[358,425,492].map(y=>line(87,y,232,y,'#D3BE94',7)+[110,157,205].map(x=>E(x,y-22,18,17,['#9EB1A1','#C6AB91','#B5ABC0'][(x+y)%3])).join('')).join('')+bunny(352,752,1.35,'rong','point')+walkingBasket(692,739,1.38),
 ()=>b+bunny(401,568,.89,'rong')+walkingBasket(587,743,1.34,{back:true})+cloth(750,714,.5),
 ()=>b+plant(677,654,.83,'old',false)+plant(914,677,.92,'old',false)+bunny(342,751,1.34,'rong','raise')+walkingBasket(727,714,1.2,{back:true})+leaf(741,474,.5,'#8DA875',70)+E(671,675,3,7,'#A3C5B7'),
 ()=>b+bunny(335,750,1.34,'rong','sad')+walkingBasket(686,739,1.37,{sad:true})+R(63,310,145,222,'#AA9F7F',8)+line(72,445,200,445,'#CEC099',6),
 ()=>b+bunny(365,713,1.23,'rong','point')+walkingBasket(702,743,1.48,{back:true,lift:true})+line(431,343,573,599,'#B6C4A0',2,'stroke-dasharray="6 12"'),
 ()=>b+bunny(340,749,1.38,'rong','think')+walkingBasket(694,741,1.4,{back:true})+P('M429 616 Q508 654 552 701','none','#C2CBA9',3,'stroke-dasharray="6 12"')+leaf(516,749,.53,'#99AF7B',66),
 ()=>b+whiteDoor()+bunny(333,745,1.27,'rong','point',true)+walkingBasket(652,743,1.32,{back:true})+P('M291 336 Q335 275 395 303 M565 702 Q605 675 649 699','none','#A8B999',3,'stroke-dasharray="5 10"'),
 ()=>b+bunny(373,750,1.35,'rong','point')+walkingBasket(669,741,1.36)+P('M470 548 Q503 451 557 446','none','#BECBAB',4),
 ()=>b+whiteDoor()+R(755,578,102,48,'#B4B29A',6)+wateringCan(803,570,.66)+[591,628,668,703,739].map((x,j)=>E(x,698-j*22,19,9,'#B0B4A0')).join('')+bunny(625,558,.89,'rong','point')+walkingBasket(414,747,1.27,{back:true}),
 ()=>b+whiteDoor()+R(783,576,92,45,'#B4B29A',6)+wateringCan(826,568,.61)+[633,665,697,729,761].map((x,j)=>E(x,726-j*24,19,9,'#B0B4A0')).join('')+bunny(728,610,.92,'rong','point')+walkingBasket(512,741,1.36,{back:true}),
 ()=>room()+table(587,649,1.1)+bunny(310,751,1.22,'rong','point')+bunny(844,749,1.29,'granny')+walkingBasket(400,759,.84,{empty:true})+[[503,611],[544,586],[588,608],[632,586],[668,613],[588,571]].map(([x,y])=>orange(x,y,.75)).join('')+E(763,608,36,13,'#D9CBAA')+P('M741 599 Q760 575 783 600Z','#C5A77B'),
 ()=>b+bunny(337,747,1.3,'rong','point',true)+walkingBasket(660,743,1.35,{back:true,empty:true})+cloud(739,166,.6,'#EBDEBB'),
 ][i]();}
function paperFlower(x,y,s=1,c='#C88E91',thick=false){return G(x,y,s,(thick?E(3,5,19,18,'#947E7B','opacity=".3"'):'')+[0,72,144,216,288].map(rot=>G(0,0,1,E(0,-10,9,12,c),rot)).join('')+E(0,0,6,6,'#E3C881'));}
function fishKite(x,y,s=1,stage='heavy',tail=false,rot=0,grassMouth=false){let a=P('M0 -105 Q38 -92 51 -51 L118 -67 Q153 -17 113 17 L51 -3 Q41 58 0 91 Q-42 58 -51 -3 L-113 17 Q-153 -17 -118 -67 L-51 -51 Q-38 -92 0 -105Z','#83B7C2','#659AA6',3)+P('M0 91 L-33 123 L0 113 L33 123Z','#75A8B6')+line(0,-96,0,108,'#C8BF93',3)+line(-120,-29,120,-29,'#C8BF93',3)+(stage==='blank'?'':E(-17,-61,6,7,ink)+E(17,-61,6,7,ink)+P('M-13 -42 Q0 -30 13 -42','none','#487D86',3))+P('M-118 -41 Q-97 -53 -73 -40 M-121 -24 Q-96 -38 -72 -25','none','#A8D0D0',3)+[-104,-89,-75].map((xx,j)=>E(xx,-2-j%2*7,4,4,'none','stroke="#C5DDCD" stroke-width="2"')).join('');
 if(stage==='heavy')a+=[[67,-50],[91,-62],[117,-41],[92,-22],[65,-22]].map(([xx,yy])=>paperFlower(xx,yy,.67,'#C78F94',true)).join('');
 if(stage==='balanced')a+=[-1,1].map(k=>paperFlower(k*86,-39,.68,'#D1A0A0')+leaf(k*100,0,.24,'#A9C18C',k*30)).join('')+paperFlower(0,5,.83,'#C88E98');
 if(tail)a+=P('M0 116 Q-49 143 -13 185 Q31 215 -4 250','none','#E8E0C5',10);
 if(grassMouth)a+=P('M1 -38 Q36 -57 55 -42','none','#8EA879',4);
 return G(x,y,s,a,rot);}
const kiteField=(sunset=false)=>R(0,0,1000,800,sunset?'#E0C6A1':'#C9DBCE',0)+cloud(731,176,1.05,sunset?'#E9D9B7':'#E8E8D0')+P('M0 478 Q231 387 507 465 Q767 383 1000 453 L1000 800 L0 800Z','#A6BA91')+P('M0 682 Q464 554 1000 654 L1000 800 L0 800Z','#B9C8A0')+[57,133,861,948].map(x=>grass(x,753,.9,'#8FA77C')).join('');
const spool=(x,y,s=1)=>G(x,y,s,R(-24,-17,48,34,'#C6AE77',5)+R(-28,-24,56,10,'#B49D6C',3)+R(-28,14,56,10,'#B49D6C',3)+[-8,0,8].map(yy=>line(-22,yy,22,yy,'#EEE5C6',3)).join(''));
const kiteNotebook=(x,y,s=1)=>sheet(x,y,s,fishKite(0,0,.3,'empty',false,27),5);
function kiteStory(i,cover){if(cover)return kiteField(true)+human(324,751,1.33,'kite','raise')+line(413,558,664,359,'#8D977B',2)+fishKite(664,267,1.55,'balanced',true,-5)+spool(414,558,.7);
 return [
 ()=>seaside()+human(318,751,1.35,'kite')+table(635,651,1.4)+fishKite(631,510,1,'blank')+basket(814,621,.67,false)+R(775,527,67,58,'#C88E98',3)+line(552,429,709,585,'#B8AE80',4),
 ()=>seaside()+table(637,655,1.4)+human(316,751,1.34,'kite','point')+fishKite(647,482,1.12,'heavy')+pencil(485,488,.8,54)+R(813,583,40,45,'#CAC7AA',6)+paperFlower(786,613,.9,'#C68F95'),
 ()=>kiteField()+human(310,749,1.35,'kite','raise',true)+basket(197,733,.7,false)+line(403,557,641,659,'#939C82',2)+fishKite(688,668,.89,'heavy',false,64,true)+P('M92 439 Q160 421 203 441 M104 469 Q160 450 207 465','none','#DCE2C4',5)+spool(405,555,.65),
 ()=>kiteField()+bench(787,684,.73)+human(314,750,1.36,'kite','point')+line(443,547,630,400,'#8C957A',2.5)+fishKite(656,359,1.18,'heavy',false,72)+P('M708 218 Q782 293 736 373','none','#B3C5A4',4)+spool(441,549,.7),
 ()=>kiteField()+bench(654,676,1.15)+human(332,749,1.32,'kite')+fishKite(681,401,1.02,'heavy',true,24)+kiteNotebook(445,619,.72)+pencil(469,581,.63,-36)+basket(833,733,.78,false),
 ()=>kiteField()+bench(510,671,1.42)+human(420,720,1.06,'kite','point')+fishKite(599,448,1.25,'heavy',true,24)+line(522,559,598,472,skin,14)+E(598,472,11,11,skin),
 ()=>kiteField()+bench(516,675,1.35)+human(410,750,1.25,'kite','point')+fishKite(610,407,1.11,'empty',true)+R(502,668,310,50,'#D2BE94',6)+[528,590,652,713,775].map(x=>paperFlower(x,676,1,'#C78F94',true)).join('')+line(530,560,608,462,skin,12),
 ()=>kiteField()+human(321,750,1.33,'kite','raise')+line(413,561,658,351,'#8D977B',2)+fishKite(658,277,1.21,'empty',true)+basket(782,728,.72,false)+paperFlower(772,681,.75)+spool(413,560,.68),
 ()=>kiteField()+table(622,657,1.5)+human(314,751,1.33,'kite','point')+fishKite(631,457,1.19,'balanced',true)+[801,848].map(x=>leaf(x,618,.33,'#9DB681',20))+paperFlower(477,619,.8)+R(823,549,37,45,'#D7D3AF',5),
 ()=>kiteField(true)+human(318,751,1.34,'kite','point')+line(448,547,685,426,'#8D977B',2)+fishKite(685,351,1.1,'balanced',true)+spool(448,547,.7)+P('M108 426 Q127 376 158 422 M843 447 Q889 399 937 443','none','#94AD83',19),
 ()=>kiteField(true)+R(0,425,1000,59,'#A2BEB2',0)+[31,110,200,817,914].map(x=>P(`M${x} 428 L${x+38} 384 L${x+76} 428Z`,'#CDAF76')).join('')+human(323,750,1.3,'kite','raise')+line(410,563,646,326,'#8D977B',2)+fishKite(646,257,1.18,'balanced',true)+G(250,221,.65,P('M0 0 Q-28 -39 -61 -23 L-13 9 L-28 37 L0 19 L30 37 L17 7 L63 -22 Q25 -37 0 0Z','#718E98'))+G(860,248,.7,E(-19,0,24,31,'#B5A4B8')+E(19,0,24,31,'#B5A4B8')+R(-3,-26,6,54,'#7F8778',3))+E(866,127,26,28,'#D3AD72'),
 ()=>seaside(true)+human(310,752,1.32,'kite')+table(584,650,1.2)+kiteNotebook(579,607,1.0)+paperFlower(609,585,.69)+fishKite(791,291,.87,'balanced',true)+stool(788,627,.75)+basket(824,729,.71,false)+P('M554 574 Q586 553 619 575','none','#C88E98',5),
 ][i]();}
const registry={
 'expansion-0057':gardenStory,'expansion-0058':bookStory,'expansion-0059':shepherdStory,
 'expansion-0060':benchStory,'expansion-0061':shoeStory,'expansion-0062':doorStory,
 'expansion-0063':fruitStory,'expansion-0064':basketStory,'expansion-0065':kiteStory,
};
export function secondMiddleArtwork(story,pageIndex,isCover=false){
 const render=registry[story.id];
 if(!render||story.pages?.length!==12)throw Error(`Missing second-middle storyboard ${story.id}`);
 if(!Number.isInteger(pageIndex)||pageIndex<0||pageIndex>=12)throw Error(`Invalid page ${pageIndex} for ${story.id}`);
 return svg(render(pageIndex,isCover),`${story.title} · ${isCover?'原创封面':story.pages[pageIndex].scene.action}`,isCover);
}

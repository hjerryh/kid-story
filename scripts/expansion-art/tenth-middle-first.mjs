// Original illustrations for reviewed stories 0377–0383. No public builder registration until review.
import {E,R,P,G,line,leaf,tree,cloud,flower,book,svg} from '../render-illustrations.mjs';
const ink='#405A57',paper='#EDE5CE',wood='#A68D69';
const label=(t,x,y,size=24,c=ink)=>`<text x="${x}" y="${y}" font-size="${size}" text-anchor="middle" font-family="PingFang SC,sans-serif" fill="${c}">${t}</text>`;
const ring=(x,y,r,c=wood,w=4)=>E(x,y,r,r,'none',`stroke="${c}" stroke-width="${w}"`);
const arm=(x,y,xx,yy,c,w=15)=>P(`M${x} ${y} Q${(x+xx)/2} ${y+20} ${xx} ${yy}`,'none',c,w);
const poses={rest:[[-22,-83],[22,-83]],read:[[-55,-116],[55,-116]],right:[[-25,-80],[132,-148]],left:[[-132,-148],[25,-80]],hold:[[-16,-117],[16,-117]],point:[[-25,-81],[105,-218]],wave:[[-93,-232],[24,-83]],comb:[[-24,-80],[166,-152]],mirror:[[-25,-80],[169,-136]],down:[[-20,-83],[144,-58]],up:[[-25,-83],[134,-277]]};
function human(x,y,s=1,kind='sang',pose='rest',sit=false){let fairy=kind==='jing',skin=fairy?'#B7C9A3':'#D8B897',hair=fairy?'#647F68':kind==='cen'?'#705D4A':'#414F4C',cloth=kind==='cen'?'#6E8098':'#7B9FAB';let a=E(0,0,75,10,ink,'opacity=".12"')+P(sit?'M-23 -67 L-54 -9 M23 -67 L54 -9':'M-22 -70 L-22 -11 M22 -70 L22 -11','none',kind==='jing'?'#91AEB1':'#DED8C3',22)+E(sit?-54:-23,-7,23,9,'#9C8261')+E(sit?54:23,-7,23,9,'#9C8261')+P(fairy?'M-43 -185 L43 -185 L49 -76 L-49 -76Z':'M-43 -185 L43 -185 L64 -65 Q0 -44 -64 -65Z',fairy?paper:cloth);if(fairy)a+=P('M-45 -181 Q-22 -159 0 -181 Q22 -159 45 -181 L33 -157 L-33 -157Z','#CEDABE');else if(kind!=='sang')a+=R(-34,-150,68,69,cloth,7)+line(-23,-184,-23,-133,cloth,11)+line(23,-184,23,-133,cloth,11);a+=E(0,-235,59,64,hair)+E(0,-225,49,52,skin)+P('M-53 -250 Q-43 -297 6 -294 Q53 -286 54 -244 Q21 -249 10 -270 Q-12 -243 -53 -250Z',hair)+E(-17,-231,3.7,4.5,ink)+E(17,-231,3.7,4.5,ink)+P('M-11 -210 Q0 -200 11 -210','none','#8F775D',2);if(fairy)a+=[[-43,-273],[-20,-286],[7,-287],[33,-276]].map(([xx,yy])=>E(xx,yy,17,16,hair)).join('')+line(-42,-181,45,-91,'#B8B18C',5)+E(44,-85,28,28,'#C8BFA0');if(kind==='cen')a+=[[-43,-273],[-20,-286],[7,-287],[33,-276]].map(([xx,yy])=>E(xx,yy,15,14,hair)).join('');if(kind==='cen')a+=P('M32 -277 Q14 -253 38 -240 Q18 -240 15 -260 Q15 -276 32 -277Z','#BB9F6E');const hands=poses[pose];for(let j=0;j<2;j++){const [xx,yy]=hands[j];a+=arm(j?43:-43,-172,xx,yy,fairy?paper:kind==='cen'?'#CFD0C3':kind==='zhen'?'#E8E5D5':cloth)+E(xx,yy,8,9,skin);}if(kind==='zhen')a+=line(-43,-181,43,-85,paper,5)+R(26,-104,53,53,paper,7);if(kind==='sang')a+=G(hands[1][0]-9,hands[1][1]-1,1,[-1,0,1].map(j=>E(j*4,0,2.4,3,'#B59A6D')).join(''));return G(x,y,s,a);}
function mammal(x,y,s=1,kind='squirrel',pose='rest',sit=false,bag=true){const squirrel=kind==='squirrel',fur=squirrel?'#AF7F5B':kind==='mole'?'#6C6154':'#A29880',cloth=kind==='mouse'?'#A192AC':'#7F9FA7';let a=E(0,0,81,11,ink,'opacity=".12"');if(squirrel)a+=P('M-43 -43 Q-175 -51 -154 -196 Q-143 -288 -82 -261 Q-39 -235 -88 -185 Q-120 -133 -42 -104Z',fur)+P('M-111 -231 Q-146 -174 -109 -120','none','#CEAA7E',21);else if(kind==='mouse')a+=P('M47 -33 Q133 -7 134 -72','none','#BAAA94',9);a+=P(sit?'M-25 -69 L-51 -12 M25 -69 L51 -12':'M-23 -69 L-23 -12 M23 -69 L23 -12','none',fur,23)+E(sit?-51:-23,-8,25,12,fur)+E(sit?51:23,-8,25,12,fur)+E(0,-116,57,85,fur)+E(0,-111,37,60,'#E3D5B7')+P('M-44 -180 L-6 -171 L-8 -70 L-50 -78Z',cloth)+P('M44 -180 L6 -171 L8 -70 L50 -78Z',cloth)+E(-45,-269,squirrel?22:29,squirrel?29:30,fur)+E(45,-269,squirrel?22:29,squirrel?29:30,fur)+E(-45,-270,13,17,'#C4A98E')+E(45,-270,13,17,'#C4A98E')+E(0,-225,62,57,fur)+E(0,-203,42,30,'#E5D8BA')+E(-21,-231,4,5,ink)+E(21,-231,4,5,ink)+E(0,-212,9,7,'#8C7762')+P('M-11 -194 Q0 -184 11 -194','none','#90775A',2);if(!squirrel)a+=ring(-21,-232,18,'#7A806B',3)+ring(21,-232,18,'#7A806B',3)+line(-3,-232,3,-232,'#7A806B',3);if(bag&&squirrel)a+=line(-44,-178,43,-77,'#C7B896',5)+R(26,-96,49,52,paper,8);for(let j=0;j<2;j++){const [xx,yy]=poses[pose][j];a+=arm(j?43:-43,-166,xx,yy,fur,18)+E(xx,yy,10,10,fur);}return G(x,y,s,a);}
const floor=()=>R(0,0,1000,800,'#DCD3B8',0)+R(0,629,1000,171,'#BBAF92',0)+[190,470,750].map(x=>line(x,800,x+45,629,'#A99F83',2)).join('');
const window=(x=786,y=277,s=1)=>G(x,y,s,R(-120,-163,240,326,'#9BAE96',110)+R(-102,-144,204,288,'#BDD2BC',98)+line(0,-140,0,140,paper,8)+line(-100,5,100,5,paper,8)+R(-137,147,274,18,wood,5));
const table=(x,y,s=1)=>G(x,y,s,line(-143,2,-152,132,wood,18)+line(143,2,152,132,wood,18)+P('M-177 0 L-155 -44 L155 -44 L177 0Z','#C9B38C')+R(-177,0,354,14,wood,5));
const bench=(x,y,s=1)=>G(x,y,s,line(-94,0,-103,63,wood,13)+line(94,0,103,63,wood,13)+R(-116,-16,232,20,'#C4AC81',6));
const bag=(x,y,s=1,full=false)=>G(x,y,s,P('M-33 -39 Q-38 -96 0 -99 Q37 -96 34 -39','none','#C6B694',6)+R(-48,-47,96,76,paper,11)+(full?R(-21,-52,42,39,'#C7AB79',4):'')+line(-38,-27,38,-27,'#C9BB9A',2));
const mat=(x,y,s=1,c='#AEC2BD')=>G(x,y,s,E(0,0,125,35,c)+E(0,-5,113,27,'none','stroke="#D4D8BD" stroke-width="3"'));
function fern(x,y,s=1,curled=true){let a='';for(const [xx,yy,r] of [[-29,-115,-20],[5,-164,8],[37,-134,24]]){a+=G(x+xx*s,y+yy*s,s,P('M0 150 Q-11 70 0 0','none','#789C73',4)+[18,36,54,72,90,108].map((v,j)=>P(`M0 ${v} Q${-29+j*2} ${v-24} ${-39+j*2} ${v-8} Q-18 ${v+6} 0 ${v+3} Q${27-j*2} ${v-23} ${38-j*2} ${v-7} Q19 ${v+8} 0 ${v+6}Z`,'#93B482')).join(''),r);}if(curled)a+=G(x+59*s,y+10*s,s,P('M0 0 Q-15 -72 -14 -103 C-14 -143 28 -142 28 -115 C28 -91 -1 -96 3 -115','none','#9DBD8D',9));return a;}
const library=()=>floor()+window()+R(66,152,252,432,wood,8)+R(78,164,228,408,'#C8BA95',3)+[0,1,2].map(row=>{let a='';for(let j=0;j<8;j++)a+=R(91+j*26,222+row*118-(37+j%3*15),18,37+j%3*15,['#8DAA9B','#B29776','#A2B18A'][j%3],2);return a+R(76,223+row*118,232,11,wood,3);}).join('');
function garden(open=false,name='蕨'){return R(0,0,1000,800,'#D9E1CA',0)+cloud(290,135,1.2)+P('M0 511 Q312 403 626 506 Q852 448 1000 509 L1000 800 L0 800Z','#BBCB9F')+P('M411 800 Q491 690 680 490 L787 490 Q629 716 562 800Z',paper)+[52,143,234,325,416,875,963].map(x=>R(x,405,15,272,'#9DAD84',5)).join('')+line(0,454,498,454,'#ACBB91',15)+line(0,555,498,555,'#ACBB91',15)+line(844,454,1000,454,'#ACBB91',15)+line(844,555,1000,555,'#ACBB91',15)+R(508,286,20,382,'#8FA883',5)+R(826,286,20,382,'#8FA883',5)+R(507,286,339,21,'#9DB28B',6)+(open?P('M531 316 L597 352 L597 658 L531 661Z','#A4BE91')+P('M822 316 L758 352 L758 658 L822 661Z','#A4BE91'):R(531,315,291,346,'#A4BE91',8)+line(676,318,676,658,'#7F9E7A',5))+R(620,258,114,64,'#D4C49E',6)+label(name,677,304,35)+fern(855,705,.82)+[165,265,921].map((x,j)=>flower(x,718+j%2*21,.55,'#E8D3AC')).join('');}
const miniatureGarden=(x,y,s=1)=>G(x,y,s,R(-128,-13,256,65,'#92AF85',15)+P('M-72 36 Q-25 -9 98 17','none',paper,12)+fern(64,-5,.3)+R(-60,-91,13,92,'#8CA582',3)+R(13,-91,13,92,'#8CA582',3)+R(-61,-94,87,10,'#8CA582',3)+R(-45,-81,56,79,'#B2C79C',4));
function story377(i,c){if(c)return garden(true)+mammal(350,750,1.05,'squirrel','point')+mammal(643,746,.83,'mouse','read');return [
()=>library()+table(610,614,1.32)+book(610,580,1.45,true)+miniatureGarden(614,528,.95)+mammal(274,750,1.03,'squirrel','right'),
()=>garden(true,'花园')+G(177,658,1,R(-100,-16,200,34,paper,3)+R(-88,-45,176,29,'#D7C9A7',2)+R(-74,-69,148,24,paper,2))+mammal(376,750,.96,'squirrel','read')+R(119,352,238,116,'#CCBA91',7)+line(236,467,236,621,wood,12)+label('读名字，再指植物',238,400,21)+label('每扇门都一样',238,433,19),
()=>garden()+mammal(371,750,1.03,'squirrel','point')+line(145,379,145,529,wood,9)+line(271,402,271,545,wood,9)+R(98,330,95,49,'#CDBC94',4)+label('柳',145,367,27)+R(224,353,95,49,'#CDBC94',4)+label('竹',271,390,27),
()=>garden()+mammal(398,749,1.02,'squirrel','right')+label('？',434,391,42,'#8D9B7E'),
()=>garden()+mammal(368,751,1.02,'squirrel','hold',true,false)+bag(507,735,.7)+P('M272 687 Q92 619 172 566','none','#D3DCC0',9),
()=>library()+table(677,603,1.1)+book(674,572,1.15,true)+miniatureGarden(676,531,.62)+mammal(299,749,1.02,'squirrel','hold')+mammal(823,748,.97,'mouse','read')+book(823,637,.62,true),
()=>garden()+mammal(328,750,.99,'squirrel','hold')+mammal(635,749,.94,'mouse','point'),
()=>garden()+fern(639,735,1.62)+mammal(315,749,.95,'squirrel','right',true)+mammal(876,748,.89,'mouse','left',true),
()=>library()+table(591,616,1.3)+book(590,584,1.65,true)+G(591,581,.8,fern(-33,16,.42)+label('蕨  jué',64,5,23))+mammal(268,750,1.03,'squirrel','right')+mammal(835,751,1.0,'mouse','left'),
()=>garden(true)+mammal(385,750,1.02,'squirrel','right')+mammal(238,750,.95,'mouse','hold'),
()=>R(0,0,1000,800,'#DAE2CD',0)+cloud(824,166,.75)+E(768,588,264,132,'#A9C6B9')+G(780,570,.8,cloud(0,0,.6,'#DCE2CC'))+P('M124 311 L381 112 L641 311Z','#94AA8B')+R(158,308,19,389,wood,4)+R(586,308,19,389,wood,4)+R(124,697,518,24,'#B6AA83',6)+bench(382,670,1.3)+mat(382,654,1.05)+mammal(300,675,.69,'squirrel','hold',true,false)+mammal(451,675,.69,'mouse','hold',true)+bag(574,689,.55),
()=>garden(true)+mammal(366,751,1.01,'squirrel','wave')+mammal(608,750,.92,'mouse','hold')+fern(806,741,.85)
][i]();}
const comb=(x,y,s=1,r=0)=>G(x,y,s,R(-35,-10,70,18,'#BBA47C',5)+[-27,-18,-9,0,9,18,27].map(xx=>R(xx,-5,5,29,'#BBA47C',2.5)).join(''),r);
const mirror=(x,y,s=1,r=0)=>G(x,y,s,E(0,-37,51,65,'#BCA883')+E(0,-37,42,55,'#C1D4C8')+R(-8,24,16,72,'#BCA883',5)+P('M-25 -67 L8 -87 M-27 -42 L26 -76','none','#E4E9D7',6),r);
function dragon(x,y,s=1,stage=0,pose='rest',withBag=false){let a=P('M-46 -34 Q-126 -19 -122 -76 Q-91 -60 -54 -71Z','#8FAB88')+E(0,-75,56,80,'#B2C4A0')+E(-21,-10,25,13,'#A0B68F')+E(30,-10,25,13,'#A0B68F')+P('M-29 -119 Q-95 -183 -83 -104 L-53 -54 L-23 -76Z','#789D7F')+E(28,-151,54,44,'#B7CCA7')+E(62,-143,26,25,'#C5D3AF')+E(43,-164,4,5,ink)+P(stage===1?'M38 -136 Q53 -114 64 -138':'M40 -135 Q52 -126 62 -137','none','#819674',3)+E(72,-146,3,3,'#8D9D77');for(let j=0;j<4;j++)a+=G(-41+j*13,-128-j%2*9,1,leaf(0,0,.24,'#86A478',stage===0?-58+j*34:j===3&&stage>=2?-35:0));const l=pose==='stop'?[-60,-153]:pose==='self'?[-8,-167]:[-23,-65],r=pose==='touch'?[98,-120]:[29,-64];a+=arm(-25,-91,...l,'#A7BC98',13)+E(...l,8,8,'#A7BC98')+arm(36,-97,...r,'#A7BC98',13)+E(...r,8,8,'#A7BC98');if(withBag)a+=line(-31,-129,40,-51,'#C6B993',4)+R(23,-68,45,47,paper,7);return G(x,y,s,a);}
const cottage=()=>floor()+window()+R(102,236,174,393,'#B9A581',65)+R(116,250,146,379,'#CCB893',57)+E(246,464,6,6,'#8B8F71')+table(704,579,.83)+R(624,594,167,31,'#B69D77',4)+E(704,610,6,5,'#8B8F71');
function story378(i,c){const a=cottage();const d=(x,y,stage=0,pose='rest',bag=false)=>dragon(x,y,.47,stage,pose,bag);if(c)return a+human(352,749,1,'sang','mirror')+mirror(521,613,.62)+d(610,650,2,'self')+comb(606,574,.27,-18);return [
()=>a+mat(382,735,1.05)+dragon(383,726,1.13,0,'rest',true),
()=>a+bench(586,692,.67)+human(359,751,.99,'sang','comb')+d(554,675)+comb(522,601,.39,12)+bag(750,563,.52),
()=>a+bench(586,692,.67)+human(359,751,1,'sang','comb')+d(554,675,1)+comb(524,601,.39,15)+bag(748,562,.5),
()=>a+bench(586,692,.67)+human(359,752,.99,'sang','comb')+d(554,675,1)+comb(524,602,.39)+bag(748,563,.51),
()=>a+bench(586,692,.67)+human(359,750,1,'sang','comb')+d(626,675,1)+comb(524,599,.39,20)+bag(749,563,.51),
()=>a+human(365,751,1,'sang','hold')+d(595,738,0,'stop')+bench(741,709,.53)+comb(633,555,.62)+bag(749,563,.51),
()=>a+mat(423,733,1.5)+human(362,746,.98,'sang','hold',true)+d(625,741)+comb(632,556,.62)+bag(748,564,.51),
()=>a+mat(511,735,1.5)+dragon(463,737,1.18,2,'self')+comb(454,540,.62,-17)+bag(747,563,.5),
()=>a+mat(536,735,1.7)+human(312,749,1,'sang','mirror')+mirror(480,614,.62,6)+bench(618,678,.65)+d(607,662,2,'self')+comb(603,583,.27,-25)+bag(748,563,.5),
()=>a+mat(535,735,1.7)+human(314,749,1,'sang','mirror')+mirror(484,614,.62)+bench(618,678,.65)+d(607,662,2,'self')+comb(603,583,.27,25)+bag(748,563,.5),
()=>a+human(343,749,.99,'sang','right')+bench(504,661,.67)+d(477,645,2,'rest',true)+G(482,606,.32,R(-28,-28,56,56,'#C7A979',5)+[-1,0,1].map(j=>E(j*15,0,2,2,'#9D8961')).join(''))+comb(702,610,.55),
()=>R(0,0,1000,800,'#D8E1C8',0)+P('M0 432 Q546 342 1000 456 L1000 800 L0 800Z','#B8C99D')+tree(822,665,1.3,'#9EB78B')+P('M0 479 Q398 389 1000 487 L1000 558 Q387 468 0 565Z','#B7CDBD')+mat(483,726,2,'#D5C9AA')+human(330,745,.96,'sang','down',true)+d(422,745,2,'touch',true)+R(541,716,73,49,'#C9AE7E',5)
][i]();}
const fishPoints=[[783,183],[793,229],[649,154],[533,195],[550,286],[676,288],[431,153],[353,105],[274,145]];
function starfish(showLines=false,scale=1,c='#EEE1B3'){let a=showLines?P('M783 183 L649 154 L533 195 L431 153 L353 105 L274 145 M533 195 L550 286 L676 288 L793 229 L783 183','none','#9BAC9F',2):'';return a+fishPoints.map(([x,y])=>E(x,y,3.3*scale,3.3*scale,c)).join('');}
const chart=(x,y,s=1,fold=false)=>G(x,y,s,R(-101,-64,202,128,paper,5)+G(-104,-75,.25,starfish(true,2,'#546D73'))+(fold?P('M47 -64 L99 -64 L99 -9Z','#C4CBB8'):'')+label('长尾鱼',0,56,14));
function snail(x,y,s=1){return G(x,y,s,E(0,-10,66,19,'#B4A487')+E(-12,-56,42,43,'#ECE9D5')+P('M-44 -70Q-14 -98 14 -69M-44 -53Q-14 -81 18 -51M-35 -36Q-10 -58 12 -36','none','#B8AB8F',4)+P('M26 -8 Q44 -45 43 -71','none','#B4A487',25)+line(36,-75,28,-103,'#B4A487',5)+line(50,-76,63,-102,'#B4A487',5)+E(28,-103,4,5,ink)+E(63,-102,4,5,ink)+R(29,-52,32,13,'#A99AB0',4)+R(46,-45,13,32,'#A99AB0',4));}
const brush=(x,y,s=1,r=0)=>G(x,y,s,line(0,0,0,-255,'#A89069',13)+P('M-29 -251 L-35 -319 Q0 -341 35 -319 L29 -251Z','#C6D5C6')+[-21,-7,7,21].map(xx=>line(xx,-255,xx,-314,'#E3E7D4',4)).join(''),r);
function pondSky(stage=0){let a=R(0,0,1000,800,'#4C6770',0)+starfish()+P('M0 457 Q410 379 1000 459 L1000 800 L0 800Z','#809C8F')+R(0,495,1000,305,'#AAC6B8',0)+[80,170,290,780,900].map((x,j)=>line(x,592+j%3*48,x+59,592+j%3*48,'#D0DBC2',3)).join('');let masks=stage===1?[[325,124,1.0],[645,254,.5]]:stage===2?[[784,191,.64],[386,122,.59]]:stage===3?[[793,206,.64],[603,259,.49]]:[[783,196,.7],[380,120,.75]];a+=masks.map(([x,y,s])=>cloud(x,y,s,'#8EAAA7')).join('');return a+P('M0 800 L95 559 L937 559 L1000 800Z','#B2A78B')+[0,1,2,3].map(j=>line(40,608+j*54,971,608+j*54,'#9B947C',2)).join('')+line(105,548,916,548,'#A59B7E',14)+[114,909].map(x=>line(x,492,x,662,'#948F76',15)).join('');}
function story379(i,c){if(c)return pondSky(3)+mat(487,733,1.7)+human(393,749,.98,'jing','point',true)+chart(393,635,.58)+snail(666,731,1.05);return [
()=>pondSky(0)+human(381,750,1.05,'jing','read')+chart(381,625,.69)+snail(797,548,.71),
()=>pondSky(0)+mat(582,730,1.25)+chart(582,723,.58)+human(329,750,1.04,'jing','point')+snail(776,549,.7),
()=>pondSky(0)+R(643,257,248,303,'#9A9D80',6)+P('M615 261 L769 137 L919 261Z','#809379')+R(669,330,181,229,'#777F66',4)+label('挥刷移云，停下随风',765,300,17,paper)+human(405,751,1.04,'jing','right')+brush(541,670,.89,-8),
()=>pondSky(1)+mat(563,732,1.19)+chart(559,725,.57)+human(311,751,1.04,'jing','up')+brush(450,464,.88,-35)+snail(760,738,.84),
()=>pondSky(1)+mat(563,732,1.19)+chart(559,725,.57)+human(330,751,1.04,'jing','up')+brush(469,464,.9,36)+snail(761,739,.84),
()=>pondSky(2)+mat(575,732,1.2)+human(344,751,1.05,'jing','right')+chart(320,651,.67,true)+brush(483,596,.92,27)+snail(762,739,.84),
()=>pondSky(3)+mat(573,732,1.2)+chart(574,724,.56)+human(332,750,1.04,'jing','right')+brush(469,680,.91,0)+snail(745,737,1.0),
()=>pondSky(0)+brush(835,727,.72,-90)+mat(491,734,1.9)+human(386,750,1.0,'jing','hold',true)+chart(406,626,.65)+snail(657,732,1.05),
()=>pondSky(1)+brush(835,728,.72,-90)+mat(491,734,1.9)+human(386,750,1.0,'jing','point',true)+chart(390,627,.65)+snail(660,732,1.04),
()=>pondSky(3)+brush(835,727,.72,-90)+mat(491,734,1.9)+human(386,750,1.0,'jing','point',true)+chart(388,626,.65)+snail(660,732,1.04),
()=>pondSky(2)+brush(835,727,.72,-90)+mat(491,734,1.9)+human(386,750,1.0,'jing','hold',true)+chart(390,627,.65)+snail(662,731,1.06),
()=>pondSky(3)+mat(491,734,1.9)+human(386,750,1.0,'jing','hold',true)+chart(390,627,.65)+snail(660,732,1.04)+R(810,364,112,161,'#83947E',5)+P('M791 371 L865 298 L942 371Z','#708570')+R(837,421,57,104,'#A8A385',5)
][i]();}
// Twenty-four identifiable stone tiles, preserving their painted patterns through rearrangement.
const stoneTiles=[
['M-175 -175 A55 55 0 0 0 -230 -120 L-175 -120Z',-202,-148],['M-175 -175 A55 55 0 0 1 -120 -120 L-175 -120Z',-148,-148],
['M-230 -120 A55 55 0 0 0 -175 -65 L-175 -120Z',-202,-93],['M-175 -120 L-120 -120 A55 55 0 0 1 -175 -65Z',-148,-93],
['M-120 -120 L-80 -90 L-80 -50 L-120 -65Z',-100,-85],['M-120 -65 L-80 -50 L-80 30 L-120 -5Z',-100,-30],
...Array.from({length:8},(_,j)=>{const x=-80+j%4*60,y=-90+Math.floor(j/4)*60;return [`M${x} ${y}h60v60h-60Z`,x+30,y+30];}),
...[-70,0,70,130].map(x=>[`M${x} 30h35v52q-17 12 -35 0Z`,x+17.5,58]),
['M160 -30 L210 -30 L210 20 L160 30Z',185,-5],['M210 -30 L260 -55 L260 -5 L210 20Z',235,-17],['M260 -55 L300 -105 L300 -55 L260 -5Z',280,-55],['M300 -105 L285 -158 L245 -135 L260 -55Z',273,-107],['M285 -158 L205 -180 L205 -137 L245 -135Z',243,-155],['M205 -180 L165 -150 L165 -108 L205 -137Z',183,-144]
];
function tile(k,x,y,s=1,r=0){const [d,cx,cy]=stoneTiles[k],colors=['#CBB26F','#7FA9A8','#CBB26F','#CBB26F','#CBB26F','#BD806B','#7FA9A8','#CBB26F','#BD806B','#CBB26F','#BD806B','#BD806B','#BD806B','#7FA9A8'];const fill=k===18?'#BD806B':colors[k]??(k%2?'#CBB26F':'#7FA9A8');const cid=`stone-${k}`;return G(x,y,s,`<defs><clipPath id="${cid}"><path d="${d}"/></clipPath></defs>`+G(-cx,-cy,1,P(d,fill,'#807F6D',2)+`<g clip-path="url(#${cid})">`+(k===5?P('M-120 -65 L-100 -57 L-100 13 L-120 -5Z','#CBB26F'):'')+ring(-175,-140,12,ink,5)+P('M-220 -101 Q-206 -88 -192 -100','none',ink,3)+P('M-119 -77 Q-74 -77 -50 -32','none','#B97260',13)+P('M15 -24 C-17 15 60 50 112 5 C66 29 19 19 15 -24Z','#F1E7C9')+'</g>'),r);}
const assembled=(x,y,s=1,skip=[],offset={})=>stoneTiles.map((t,k)=>skip.includes(k)?'':tile(k,x+t[1]*s+(offset[k]?.[0]??0),y+t[2]*s+(offset[k]?.[1]??0),s,offset[k]?.[2]??0)).join('');
const scattered=(x,y,s=1,ids=Array.from({length:24},(_,j)=>j))=>ids.map((k,j)=>tile(k,x+j%6*83*s,y+Math.floor(j/6)*79*s,s*.75,(j%3-1)*18)).join('');
function magpie(x,y,s=1,reach=false){return G(x,y,s,P('M34 -58 L178 3 L181 20 L21 -13Z','#4E6461')+line(-13,-27,-15,-2,ink,6)+line(21,-27,reach?-72:24,reach?-105:-2,ink,6)+E(0,-72,47,66,'#536965')+E(-11,-68,29,48,'#EAE6D1')+P('M12 -112 Q73 -98 34 -36 L4 -55Z','#8EABA0')+E(-18,-133,37,35,'#506561')+E(-31,-137,4,5,'#F4ECD4')+P('M-50 -133 L-78 -121 L-51 -118Z','#BCA276')+P('M-47 -106 L15 -108 L22 -89 L-41 -89Z','#B3C7A5')+P('M7 -96 L37 -65 L15 -60Z','#B3C7A5'));}
const streamBank=()=>R(0,0,1000,800,'#D9E1C9',0)+cloud(256,120,.9)+P('M0 404 Q472 341 1000 429 L1000 800 L0 800Z','#BCCBA5')+P('M0 484 Q405 423 1000 504 L1000 584 Q461 505 0 574Z','#A4C2B8')+P('M0 640 Q491 541 1000 648 L1000 800 L0 800Z','#D8CCAE')+E(604,566,310,147,'#ABA88E')+E(604,542,310,128,'#C5C2A6');
const stoneFriends=(pose='right')=>mammal(174,750,.81,'mole',pose)+magpie(904,735,.76);
function story380(i,c){if(c)return streamBank()+assembled(529,623,.95)+mammal(253,750,.7,'mole','point')+magpie(797,744,.74);return [
()=>streamBank()+assembled(564,584,.9)+stoneFriends('hold'),
()=>streamBank()+scattered(381,459,.9)+stoneFriends()+G(402,328,.6,flower(0,0,.45,paper)),
()=>streamBank()+stoneFriends('hold')+scattered(367,442,.79,[0,2,3,4,7,9,15,17,19,21,23,1,6,13,14,16,20,22])+[5,8,10,11,12,18].map((k,j)=>tile(k,466+j*41,684+(j===1?-24:0),.65)).join(''),
()=>streamBank()+stoneFriends()+[6,7,8,9,10,11,12,13].map((k,j)=>tile(k,371+j*42,513,.7)).join('')+scattered(350,620,.7,Array.from({length:24},(_,k)=>k).filter(k=>k<6||k>13)),
()=>streamBank()+mammal(231,749,.89,'mole','right')+magpie(431,712,1.05,true)+scattered(515,430,.7,Array.from({length:24},(_,k)=>k).filter(k=>k!==5))+tile(5,358,615,1.08),
()=>streamBank()+stoneFriends('hold')+scattered(370,428,.85,Array.from({length:24},(_,k)=>k).filter(k=>k!==0&&k!==1))+tile(0,413,700,.9)+tile(1,505,701,.9),
()=>streamBank()+stoneFriends('point')+scattered(360,405,.8,Array.from({length:24},(_,k)=>k).filter(k=>k!==0&&k!==1))+tile(0,457,696,1.25)+tile(1,524.5,696,1.25),
()=>streamBank()+stoneFriends('right')+assembled(590,738,.85,Array.from({length:20},(_,j)=>j+4))+tile(4,561,690,.9)+tile(6,659,692,.9)+scattered(369,414,.8,Array.from({length:24},(_,k)=>k).filter(k=>k>3&&k!==4&&k!==6)),
()=>streamBank()+stoneFriends('hold')+assembled(591,680,.84,[11,18])+tile(11,554,492,.94)+tile(18,665,492,.94),
()=>streamBank()+stoneFriends('right')+assembled(591,680,.84,[23])+tile(23,786,488,.86)+P('M490 729 Q522 716 538 704','none','#DBCFAB',5),
()=>streamBank()+assembled(550,680,.95)+stoneFriends('point'),
()=>streamBank()+fern(354,740,.48)+assembled(600,677,.92)+mammal(197,750,.72,'mole','hold',true)+magpie(895,732,.68)+G(943,507,.65,flower(0,0,.6,paper))+P('M924 515 Q957 483 972 453','none','#E7DFC5',3)
][i]();}
// A fixed pencil garden: erasures change the same map rather than moving its landmarks.
const graphite='#8B8E7D';
function pencilGarden(stage=0){let a=R(-360,-255,720,510,'#F0EBD7',8);a+=E(85,-125,130,77,'none',`stroke="${graphite}" stroke-width="3"`)+[[-7,-151],[60,-124],[132,-162]].map(([x,y])=>P(`M${x} ${y}q23 -10 46 0`,'none',graphite,2)).join('')+cloud(122,-130,.24,'#E0E2D1');for(let j=0;j<6;j++)a+=line(-303+j*45,-202,-303+j*45,-74,graphite,3)+P(`M${-313+j*45} -196l10 -19l10 19`,'none',graphite,2);a+=line(-305,-166,-64,-166,graphite,3)+line(-305,-112,-64,-112,graphite,3);for(let j=0;j<10;j++)a+=G(-260+j%5*47,-12+Math.floor(j/5)*72,.42,flower(0,0,1,'#EAE2CD')+P('M0 0v45','none',graphite,4));for(let j=0;j<3;j++)a+=G(224,13+j*65,.58,P('M-36 0Q-75 -41 -37 -57Q-16 -99 5 -57Q61 -77 43 -26Q77 4 29 12Z','none',graphite,4));for(let j=0;j<5;j++)a+=E(130+j*32,182,17,11,'none',`stroke="${graphite}" stroke-width="2"`);a+=P('M-290 168h130v-27h-130Z','none',graphite,3);for(let j=0;j<7;j++)a+=R(-109+j*37,100-j*17,30,22,'none',4,`stroke="${graphite}" stroke-width="2"`);
if(stage>=1)a+=R(-114,67,117,70,'#F0EBD7',0)+R(-179,132,31,35,'#F0EBD7',0);if(stage>=2)a+=P('M-60 118 Q19 43 103 -58','none','#B8B7A7',30)+P('M-60 118 Q-25 81 12 44','none','#F0EBD7',38);if(stage>=3)a+=P('M-140 16 Q-24 -87 79 -25 M-140 34 Q-24 -69 79 -7','none',graphite,3)+E(-140,9,8,8,'none',`stroke="${graphite}" stroke-width="2"`)+E(79,-33,8,8,'none',`stroke="${graphite}" stroke-width="2"`)+P('M-98 -4 Q-40 -37 3 -38','none','#F0EBD7',25);if(stage>=8)a+=P('M292 222 Q198 194 226 84 Q232 9 166 -63','none','#F0EBD7',58);if(stage>=9)a+=P('M166 -63 L153 -84','none','#F0EBD7',56);return a;}
function eraser(x,y,s=1,clean=false,lower=false){return G(x,y,s,P('M47 -15 Q95 -6 101 -26 Q78 -44 45 -38Z','#D5B6B0')+[-32,-10,21,42].map((xx,j)=>R(xx,-6,12,19,j%2?'#CFB0A9':'#E2C3B9',4)).join('')+R(-50,-55,105,58,'#E4C5BD',21)+E(-40,-57,18,20,'#E4C5BD')+E(-5,-62,18,20,'#E4C5BD')+E(-48,-35,27,25,'#ECD1C7')+E(-56,-43,3,4,ink)+E(-73,lower?-24:-32,11,9,clean?'#E8B8B1':'#96978A')+P('M-56 -23q10 9 17 0','none','#A98E82',2));}
const drawingDesk=()=>R(0,0,1000,800,'#D9DFBE',0)+P('M0 158 Q500 -90 1000 158L1000 231L0 231Z','#BEAA81')+[40,938].map(x=>R(x,197,17,603,wood,3)).join('')+R(143,282,790,488,'#C8B28D',15)+R(828,310,76,61,'#8EAFA5',7);
const pencil=(x,y,s=1,r=0)=>G(x,y,s,R(-5,-108,10,105,'#BCA577',2)+P('M-5 -3L0 15L5 -3Z',graphite),r);
function paperScene(stage,beastX,beastY,clean=false){return drawingDesk()+G(541,504,.9,pencilGarden(stage))+eraser(beastX,beastY,.45,clean)+human(118,760,.8,'zhen','right',true);}
function story381(i,c){if(c)return drawingDesk()+G(543,495,.94,pencilGarden(9))+human(158,759,.84,'zhen','point',true)+eraser(715,614,.8,true);return [
()=>paperScene(0,828,355)+pencil(224,635,.7,-26),
()=>drawingDesk()+G(541,504,.9,pencilGarden(0))+eraser(784,718,.86)+human(204,754,.93,'zhen','right'),
()=>paperScene(1,486,600)+pencil(223,636,.7,-23),
()=>paperScene(2,553,538)+pencil(225,633,.7,-28),
()=>paperScene(3,514,475)+pencil(225,634,.7,-23),
()=>paperScene(3,802,710)+pencil(223,614,.8,16),
()=>paperScene(3,799,706)+pencil(875,707,.6,81)+P('M761 719q-21 -33 13 -45','none','#C5C2AC',3),
()=>paperScene(3,804,709)+P('M794 680Q722 649 745 585Q760 524 691 459','none','#B7BAA1',3)+pencil(874,705,.6,81),
()=>drawingDesk()+G(541,504,.9,pencilGarden(8))+eraser(744,577,.45)+P('M1000 521L823 538L823 570L1000 594Z','#E8E5D5')+G(755,552,.8,P('M98 -20Q21 -24 -25 24Q-40 42 -18 45L22 21L45 32L77 17Z','#DBB996')),
()=>paperScene(9,711,466)+pencil(875,704,.6,81),
()=>drawingDesk()+G(541,504,.9,pencilGarden(9))+ring(666,433,17,'#ACADA0',3)+eraser(702,452,.45,true,true)+human(155,759,.83,'zhen','hold',true),
()=>paperScene(9,754,625,true)+pencil(865,352,.43,80)
][i]();}
const yarnColors=['#C7AB67','#BB8075','#9C8EA9','#91A582','#B9CCD1','#637E99','#ABADA4'];
function yarn(x,y,s=1,k=0,tail=true){const c=yarnColors[k];let a=E(0,0,33,32,c)+[-17,-6,7,18].map((n,j)=>P(`M${n} -27 Q${n-25} 0 ${n} 27`,'none','#E8DEC8',1.4)).join('')+E(-9,-3,2,2,ink)+E(9,-3,2,2,ink)+P('M-5 9Q0 13 5 9','none',ink,1.5);if(tail)a+=P('M24 19Q63 43 61 0Q61 -22 78 -16','none',c,4);return G(x,y,s,a);}
const yarnShelf=(full=true)=>R(54,157,273,427,wood,8)+R(67,171,247,400,'#C9BD9E',4)+[0,1,2].map(row=>{let a=R(66,269+row*127,250,12,wood,3);for(let j=0;j<3;j++){const k=(row*3+j)%7;if(full||k>=4)a+=yarn(107+j*82,240+row*127,.73,k,false);}return a;}).join('');
const basket=(x,y,s=1,full=false,quiet=false)=>G(x,y,s,P('M-75 -21Q-72 58 -48 70L48 70Q72 58 75 -21Z','#B29A72')+P('M-64 -19Q-68 -106 0 -108Q67 -106 64 -19','none','#B29A72',8)+(full?[0,1,2,3].map((k,j)=>yarn(-44+j*29,-27+j%2*14,.68,k,!quiet)).join(''):'')+P('M-75 -21Q0 -4 75 -21','none','#D5BC90',7)+[7,25,43,61].map(y=>P(`M-63 ${y}Q0 ${y+10} 63 ${y}`,'none','#CDB58B',3)).join(''));
const swatch=(x,y,s=1,light=false)=>G(x,y,s,R(-60,-38,120,76,light?'#B9CCD1':'#637E99',2)+[-29,-6,17].map((yy,j)=>R(-60,yy,120,j===1?15:7,'#B8BCB2',0)).join('')+Array.from({length:15},(_,j)=>line(-56+j*8,-38,-56+j*8,38,'#DAD5BF',.8)).join(''));
function loom(x,y,s=1,amount=.55){let a=R(-136,-170,272,231,wood,9)+R(-119,-154,238,199,paper,1);for(let j=0;j<24;j++)a+=line(-110+j*9.5,-158,-110+j*9.5,48,'#C4C2AD',2);a+=R(-114,48-180*amount,228,180*amount,'#637E99',0);for(let j=0;j<7*amount;j++)a+=R(-114,40-j*24,228,j%3===0?14:5,'#B7B9B0',0);a+=R(-141,-171,282,14,'#A28C69',4)+R(-141,48,282,14,'#A28C69',4)+P('M-50 -26Q0 -43 55 -26Q0 -8 -50 -26Z','#C2AA7C')+line(-50,-26,-113,48-180*amount,'#637E99',3);return G(x,y,s,a);}
const weavingRoom=(full=true)=>floor()+window()+yarnShelf(full)+table(612,651,1.17);
const puddle=()=>R(0,0,1000,800,'#D9E1CD',0)+R(86,121,221,528,'#B9A787',75)+R(105,146,183,489,'#738472',68)+R(62,628,276,27,wood,7)+P('M0 672Q550 555 1000 683L1000 800L0 800Z','#C9CEAE')+E(623,697,214,66,'#9BBCC4')+[[-89,15],[-37,-10],[31,25],[87,-3]].map(([x,y])=>E(623+x,697+y,22,12,'#929F9D')).join('')+P('M460 684Q541 650 586 678M682 707Q730 720 787 694','none','#DCE1D2',6);
function story382(i,c){if(c)return weavingRoom()+loom(610,600,.97,.85)+human(350,753,1,'cen','right')+yarn(770,651,.7,5)+yarn(810,641,.7,6);return [
()=>puddle()+human(400,747,1,'cen','hold',true),
()=>weavingRoom()+human(368,751,1,'cen','hold')+basket(368,662,.7)+loom(626,571,.64,.05),
()=>weavingRoom(false)+human(359,752,1,'cen','hold')+basket(359,661,.72,true)+loom(635,575,.64,.05),
()=>weavingRoom(false)+human(349,753,1,'cen','right')+R(474,557,283,68,paper,4)+yarnColors.slice(0,4).map((c,k)=>P(`M482 ${569+k*13}Q610 ${551+k*13} 748 ${572+k*13}`,'none',c,6)).join('')+basket(767,559,.65,true),
()=>floor()+window(718,283,1.12)+yarnShelf(false)+human(486,750,1,'cen','hold')+basket(486,658,.78,true),
()=>floor()+window(718,283,1.12)+yarnShelf(false)+bench(674,689,.8)+basket(674,649,.7,true)+human(426,750,1,'cen','hold'),
()=>puddle()+human(267,669,.92,'cen','hold',true)+basket(141,598,.57,true,true),
()=>weavingRoom(false)+human(373,752,1,'cen','hold')+yarn(373,643,.8,6,false)+yarn(469,601,.76,4)+yarn(562,600,.76,5)+basket(777,556,.6,true,true),
()=>puddle()+human(309,749,1,'cen','read',true)+swatch(369,634,.7,false)+swatch(270,634,.7,true)+yarn(331,735,.5,4,false)+P('M231 652Q193 705 309 739','none','#B9CCD1',3),
()=>weavingRoom()+human(382,751,1,'cen','left')+yarn(250,603,.8,0,false)+loom(618,597,.88,.35)+basket(778,697,.5),
()=>weavingRoom()+human(382,751,1,'cen','right')+loom(644,604,.96,.78)+yarn(760,640,.61,5,false)+yarn(807,637,.61,6,false),
()=>weavingRoom()+human(342,752,1,'cen','right')+G(631,627,1,'<g transform="scale(1 .3)">'+swatch(0,0,1.48)+'</g>')+G(629,621,.8,E(0,0,31,13,'#D7D7C2')+R(-29,-38,58,39,'#EEE9D6',8)+E(0,-38,29,11,'#EAE4CE')+E(0,-38,22,7,'#B8A080')+ring(36,-20,14,'#ECE6D2',8))
][i]();}
// Twelve wooden pieces form a sea containing the whale, with one fixed whale marking.
const whale=(x,y,s=1,r=0)=>G(x,y,s,P('M-104 -2Q-126 -52 -65 -68Q20 -91 86 -33Q129 -19 146 -54L146 -15L174 -25Q157 20 114 18Q58 80 -46 49Q-96 37 -104 -2Z','#769EAD')+P('M-94 10Q-22 39 73 10Q31 64 -42 43Q-83 30 -94 10Z','#E7E5D1')+P('M2 16Q29 44 39 69Q1 59 -21 26Z','#6E95A5')+E(-71,-16,4,5,ink)+P('M-77 -4Q-92 17 -63 20Q-81 11 -77 -4Z','#CED8C4')+P('M-99 9Q-84 20 -68 13','none','#4F7E8E',2),r);
const seaTile=(x,y,s=1,k=0,water=true)=>G(x,y,s,R(-43,-43,86,86,wood,4)+R(-39,-39,78,78,water?(k%3===0?'#9FBEC5':'#7FA6B5'):'#CFBF93',2)+(water?P('M-37 -16Q-16 -26 2 -15T38 -15M-38 16Q-17 5 3 16T38 16','none','#D4E0D2',2):P('M-38 5Q0 -12 38 5','none','#B8A984',3))+(k===0?P('M-25 26L-6 -24L12 3L27 -15L35 29Z','#B67E69'):'')+(k===3?E(0,2,28,15,'#CEC59A'):'')+(k===11?R(-39,22,78,17,'#698DA1',1):''));
function seaPuzzle(x,y,s=1,mode='old',phase=0){let a='',positions=[];for(let k=0;k<12;k++){let xx,yy;if(mode==='scatter'){xx=(k%4-1.5)*114;yy=(Math.floor(k/4)-1)*108;}else if(mode==='portrait'||mode==='almost'){xx=(k%3-1)*86;yy=(Math.floor(k/3)-1.5)*86;}else {xx=(k%4-1.5)*86;yy=(Math.floor(k/4)-1)*86;}positions.push([xx,yy]);}
if(mode==='pair'){positions[4]=[-43,0];positions[5]=[43,0];let j=0;for(let k=0;k<12;k++)if(k!==4&&k!==5){positions[k]=[(j%5-2)*92,(j<5?-1:1)*158];j++;}}
if(mode==='three'){positions[4]=[0,0];positions[5]=[0,-86];positions[1]=[0,-172];let j=0;for(let k=0;k<12;k++)if(![1,4,5].includes(k)){positions[k]=[j<4?-151:151,(-2+(j<4?j:j-4))*86];j++;}}
if(mode==='almost')positions[11]=[210,115];for(let k=0;k<12;k++){const [xx,yy]=positions[k];a+=seaTile(xx,yy,1,k,!(mode==='bad'&&k===7));}if(mode==='scatter')a+=G(...positions[8],1,P('M12 -12Q25 -10 39 -31L39 -3Q20 15 6 7Z','#6E98A8'));else if(mode==='pair')a+=whale(-23,4,.42);else if(mode==='three')a+=whale(0,-70,.5,-90);else if(mode==='portrait'||mode==='almost')a+=whale(4,-12,.68,phase===1?90:-90);else a+=whale(mode==='bad'?21:-20,6,mode==='bad'?.66:.67,mode==='bad'?17:0);return G(x,y,s,a);}
const lid=(x,y,s=1,face=true)=>G(x,y,s,R(-103,-84,206,168,wood,7)+(face?R(-94,-75,188,150,'#B9CAC4',3)+seaPuzzle(0,0,.45):R(-88,-69,176,138,'#BBA783',4)));
function sandelf(x,y,s=1,pose='hold',sit=true){let a=human(0,0,1,'jing',pose,sit);a=a.replaceAll('#B7C9A3','#C5A783').replaceAll('#647F68','#766149').replaceAll('#CEDABE','#6897AA').replaceAll('#C8BFA0','#C28867').replaceAll('#B8B18C','#C28867').replaceAll('#91AEB1','#E6DFCA').replaceAll('#EDE5CE','#6897AA');return G(x,y,s,a);}
const seaFloor=()=>R(0,0,1000,800,'#C6B697',0)+Array.from({length:9},(_,j)=>line(0,j*99,1000,j*99,'#B1A184',2)).join('')+[127,418,742].map((x,j)=>line(x,99*(j+1),x,99*(j+2),'#B1A184',2)).join('');
const seaRoom=()=>seaFloor()+R(294,353,488,425,'#B5B69C',25)+R(306,365,464,401,'none',20,'stroke="#D1D4B7" stroke-width="3"');
function story383(i,c){if(c)return seaRoom()+seaPuzzle(621,493,1.1,'portrait',1)+sandelf(294,748,.96,'point')+lid(279,683,.57);return [
()=>seaRoom()+seaPuzzle(488,614,1.06)+sandelf(202,747,.82,'right')+lid(773,648,.6),
()=>seaRoom()+seaPuzzle(503,572,.97,'scatter')+sandelf(201,750,.85,'point')+lid(810,677,.54),
()=>seaRoom()+seaPuzzle(503,614,1.04,'bad')+sandelf(201,749,.85,'right')+lid(810,681,.56),
()=>seaRoom()+seaPuzzle(503,614,1.04,'bad')+sandelf(201,749,.85,'right')+lid(810,681,.56)+P('M642 477Q606 434 566 466','none','#8EA69E',3),
()=>seaRoom()+seaPuzzle(539,625,.91,'scatter')+sandelf(247,681,.88,'read')+lid(247,579,.67),
()=>seaRoom()+seaPuzzle(538,562,.99,'pair')+sandelf(203,752,.85,'right')+lid(818,630,.52),
()=>seaRoom()+seaPuzzle(538,562,1.0,'pair')+sandelf(201,752,.88,'point')+lid(822,630,.5)+P('M548 497Q567 479 590 497','none','#DDDCC4',3),
()=>seaRoom()+seaPuzzle(539,548,.95,'three')+sandelf(201,752,.85,'hold')+lid(800,650,.55,false),
()=>seaRoom()+seaPuzzle(524,540,.92,'almost')+sandelf(201,750,.88,'right')+lid(796,649,.55,false),
()=>seaFloor()+mat(192,597,1.2,'#B5B69C')+seaPuzzle(634,510,1.2,'portrait')+sandelf(365,749,.88,'right')+lid(176,593,.6,false),
()=>seaFloor()+mat(170,624,1.1,'#B5B69C')+seaPuzzle(601,505,1.23,'portrait',1)+sandelf(366,749,.9,'point')+lid(173,609,.55,false),
()=>seaFloor()+mat(170,624,1.1,'#B5B69C')+seaPuzzle(619,508,1.18,'portrait')+sandelf(319,750,.94,'read')+lid(319,641,.7)
][i]();}
const scenes={'expansion-0377':story377,'expansion-0378':story378,'expansion-0379':story379,'expansion-0380':story380,'expansion-0381':story381,'expansion-0382':story382,'expansion-0383':story383};
export function tenthMiddleFirstArtwork(story,index,cover=false){if(!Object.hasOwn(scenes,story?.id)||story.status!=='text-ready'||story.ageBand!=='6-8'||!Array.isArray(story.pages)||story.pages.length!==12||story.provenance?.review!=='full-text-reviewed'||!story.title?.trim()||story.pages.some((p,j)=>p?.id!==`p${String(j+1).padStart(2,'0')}`||typeof p.text!=='string'||!p.text.trim()||typeof p.scene?.action!=='string'||!p.scene.action.trim())||!Number.isInteger(index)||index<0||index>=12||typeof cover!=='boolean')throw Error('Unsupported reviewed tenth middle first story');return svg(scenes[story.id](index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

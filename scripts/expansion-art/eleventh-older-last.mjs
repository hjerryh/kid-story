// Original scenes for 0436–0437. Source manuscripts read in full before drawing.
import {E,R,P,G,line,leaf,tree,cloud,flower,svg} from '../render-illustrations.mjs';
const ink='#405D59',cream='#EFE7D0',wood='#B19571';
const txt=(x,y,t,z=16,c=ink)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}" font-family="PingFang SC,sans-serif" text-anchor="middle">${t}</text>`;
const circle=(x,y,r,c=wood,w=3)=>E(x,y,r,r,'none',`stroke="${c}" stroke-width="${w}"`);
const arm=(x,y,xx,yy,c,w=14)=>P(`M${x} ${y}Q${(x+xx)/2} ${y+23} ${xx} ${yy}`,'none',c,w);
const hands={rest:[[-24,-79],[24,-79]],hold:[[-27,-121],[27,-121]],read:[[-58,-119],[58,-119]],right:[[-27,-82],[113,-133]],left:[[-114,-128],[27,-80]],down:[[-23,-78],[107,-54]],up:[[-23,-78],[89,-217]],point:[[-23,-78],[115,-171]],open:[[-94,-147],[94,-147]],push:[[91,-137],[111,-137]],lap:[[-30,-57],[30,-57]],draw:[[-29,-77],[102,-114]],touch:[[-25,-79],[140,-118]]};
function figure(x,y,s=1,kind='girl',pose='rest',sit=false,sad=false){let a=E(0,0,66,10,ink,'opacity=".12"');const animal=kind!=='girl'&&kind!=='south',fur=kind==='mole'?'#69736D':kind==='fox'||kind==='squirrel'?'#B88860':kind==='deer'?'#C4A57F':kind==='hedge'?'#C8B698':kind==='badger'?'#9B9D89':kind==='mouse'?'#A8B6A3':kind==='turtle'?'#8CA59A':'#D6B993',cloth=kind==='mole'?'#79A0AA':kind==='fox'||kind==='squirrel'?'#7F9C83':kind==='hedge'?'#738FA1':kind==='turtle'?'#A695B2':'#809BAA';
 if(kind==='squirrel')a+=P('M44 -51Q173 -57 148 -189Q122 -271 72 -209Q35 -169 88 -139Q129 -105 46 -95Z','#B8875D');if(kind==='fox')a+=P('M35 -49Q178 -45 150 -125Q131 -172 110 -149Q92 -84 36 -91Z','#B7875E')+P('M131 -153Q162 -150 159 -102Q151 -84 130 -80L112 -106Z',cream);
 if(kind==='turtle')a+=E(22,-128,82,96,'#A18C6D')+P('M0 -194L58 -164L62 -100L3 -66L-39 -102L-42 -157Z','none','#807C61',4);
 a+=P(sit?'M-24 -66L-55 -32L-47 -9M24 -66L55 -32L47 -9':'M-24 -66L-24 -12M24 -66L24 -12','none',kind==='south'?'#9F886D':animal?fur:'#B1B3A0',20)+E(sit?-47:-24,-7,22,10,animal?fur:'#8F7D65')+E(sit?47:24,-7,22,10,animal?fur:'#8F7D65');
 if(kind==='girl')a+=P('M-42 -177L42 -177L63 -61L-63 -61Z',cloth)+R(-45,-180,90,62,cream,9);else a+=R(-48,-180,96,117,cloth,17);
 if(kind==='deer')a+=line(-29,-178,-29,-116,'#6C8CA4',16)+line(29,-178,29,-116,'#6C8CA4',16)+R(-38,-137,76,65,'#6C8CA4',7);
 if(kind==='hedge'||kind==='turtle')a+=P('M-28 -147L28 -147L44 -62L-44 -62Z',kind==='turtle'?'#B0A0BD':cream)+line(-35,-132,35,-132,wood,3);
 if(kind==='hedge')a+=P('M-71 -194L-86 -228L-67 -238L-73 -270L-46 -267L-38 -298L-11 -282L8 -308L28 -285L55 -294L60 -266L82 -263L74 -233L89 -211L62 -191Z','#8C8170');
 if(kind==='fox')a+=P('M-54 -238L-61 -309L-17 -270M19 -271L63 -309L57 -236','#B7865F');else if(animal&&kind!=='turtle'&&kind!=='hedge')a+=E(-47,-264,22,29,fur)+E(47,-264,22,29,fur);
 a+=E(0,-225,57,61,fur);if(!animal)a+=P('M-60 -231Q-69 -300 0 -295Q68 -296 60 -231L47 -191L44 -249L16 -268L-3 -252L-33 -267L-46 -243L-48 -192Z','#4A5D55');
 if(kind==='deer')a+=P('M-39 -270Q0 -310 39 -270L15 -266L-7 -284L-24 -264Z','#8C7053');
 if(kind==='fox')a+=P('M-51 -232L0 -198L51 -232Q41 -178 0 -170Q-45 -182 -51 -232Z',cream);
 a+=E(-18,-228,4,5,ink)+E(18,-228,4,5,ink)+(animal?E(0,-207,kind==='mole'?16:10,8,kind==='mole'?'#B6A994':ink):'')+P(sad?'M-10 -191q10 -10 20 0':'M-10 -195q10 11 20 0','none','#8F7E67',2);
 if(kind==='mole'||kind==='deer')a+=circle(-19,-230,17,'#BEA46F',3)+circle(19,-230,17,'#BEA46F',3)+line(-2,-232,2,-232,'#BEA46F',3);
 if(kind==='girl')a+=P('M-27 -153L-15 -160L-6 -155L-14 -147L-2 -140L-18 -142L-25 -137L-23 -147Z','#BEA26A');
 if(kind==='south'||kind==='squirrel')a+=line(-42,-176,40,-87,'#C8C4A4',6)+R(25,-109,62,66,kind==='south'?'#ACC6AA':cream,9);
 const hp=hands[pose];for(let j=0;j<2;j++){const [xx,yy]=hp[j];a+=arm(j?42:-42,-164,xx,yy,kind==='girl'?cream:cloth,15)+E(xx,yy,10,9,fur);}return G(x,y,s,a);}
const book=(x,y,s=1,open=false,grid=false)=>G(x,y,s,open?R(-75,-48,150,96,cream,4)+line(0,-45,0,45,'#BDB79B',2)+(grid?[-42,-21,21,42].map(xx=>line(xx,-38,xx,38,'#B7C3AD',1)).join('')+[-25,0,25].map(yy=>line(-65,yy,65,yy,'#B7C3AD',1)).join(''):''):R(-39,-54,78,108,'#94AE9D',7)+R(-25,-34,50,38,cream,2));
const pencil=(x,y,s=1,r=0)=>G(x,y,s,line(0,-46,0,0,'#A98E68',6)+P('M-3 0L0 9L3 0Z',ink),r);
const stool=(x,y,s=1)=>G(x,y,s,line(-49,0,-58,65,wood,11)+line(49,0,58,65,wood,11)+R(-65,-16,130,20,'#C2AB84',5));
const table=(x,y,s=1)=>G(x,y,s,P('M-143 0L-122 -35L122 -35L143 0Z','#C5B18D')+R(-143,0,286,13,wood,5)+line(-121,10,-130,126,wood,14)+line(121,10,130,126,wood,14));
const room=()=>R(0,0,1000,800,'#DEDCC8',0)+R(0,612,1000,188,'#C3BDA0',0)+[140,430,720].map(x=>line(x,800,x+28,612,'#B4AC8E',2)).join('');
const window=(x=785,y=284,s=1,shade=false)=>G(x,y,s,R(-123,-137,246,274,'#A4B9A6',21)+R(-110,-124,220,248,shade?'#CBD0C8':'#D2E0CC',14)+line(0,-120,0,120,cream,6)+line(-106,0,106,0,cream,6)+R(-141,133,282,17,wood,5));
const tray=(x,y,s=1,c='#B7A584')=>G(x,y,s,E(0,0,91,26,c)+E(0,-6,83,20,'#D4C8A7'));
const cloth=(x,y,s=1)=>G(x,y,s,P('M-103 -31Q-49 -55 0 -32L90 -43L110 36Q47 49 2 31L-97 48Z','#B9C4B4')+P('M-96 27Q-33 13 20 25M-67 -27L-49 30','none','#9EADA1',2));
const hay=(x,y,s=1)=>G(x,y,s,Array.from({length:17},(_,j)=>line(-60+j*7,-15+(j%3)*8,-42+j*6,16+(j%4)*5,'#CDBB85',4)).join(''));
const label=(x,y,t,s=1)=>G(x,y,s,R(-34,-15,68,30,cream,4)+txt(0,6,t,17));
function curled(x,y,s=1,form='normal',pose='stand',thin=false){const fly=form==='fly'||form==='both',water=form==='water'||form==='both';let a=E(0,0,75,10,ink,'opacity=".12"');if(pose==='belly'){a+=E(0,-42,48,70,cream)+E(-39,-67,17,11,cream)+E(39,-67,17,11,cream)+E(-30,11,18,10,cream)+E(30,11,18,10,cream)+E(0,-100,35,31,cream)+P('M-24 -118q-20 -39 -30 -8q-2 18 16 12M21 -121q26 -37 31 -7q3 19 -16 13','none',cream,13)+E(-11,-101,3,4,ink)+E(11,-101,3,4,ink)+E(0,-91,6,4,'#C8BBA0')+E(0,-38,thin?2:6,24,'#D8BC7C');return G(x,y,s,a,-90);}
 const lie=pose==='sleep';if(fly)a+=P('M-35 -80Q-110 -174 -150 -100Q-132 -57 -70 -51M-15 -84Q48 -172 90 -119Q80 -72 25 -59',cream);
 a+=P(lie?'M-26 -26L-58 -8M2 -26L-21 -7M33 -26L51 -7M60 -26L80 -7':'M-28 -34L-28 -8M0 -34L0 -8M34 -34L34 -8M62 -34L62 -8','none',cream,15)+[-28,0,34,62].map(xx=>E(xx,-5,water?23:12,water?5:8,water?'#DCE5D7':cream)).join('')+E(21,lie?-35:-54,64,lie?35:43,cream)+E(-37,lie?-49:-82,34,36,cream);
 if(!fly)a+=P(`M-61 ${lie?-68:-102}q-30 -36 -33 -8q-1 21 19 13M-20 ${lie?-77:-111}q23 -34 31 -6q2 19 -15 12`,'none',cream,13);
 a+=(lie?P('M-53 -48q7 5 13 0','none',ink,2):E(-47,-84,3.5,4,ink))+E(-65,lie?-38:-71,7,5,'#C3B798')+P(`M-21 ${lie?-25:-44}Q4 ${lie?-10:-25} 34 ${lie?-24:-42}`,'none','#D9BF82',thin?2:5);
 if(form!=='normal')a+=label(29,-67,form==='water'?'水兽':'飞兽',.65)+(form==='both'?label(52,-43,'水兽',.65):'');return G(x,y,s,a);}
const shoe=(x,y,s=1)=>G(x,y,s,P('M-61 -46L-10 -49L13 -17Q66 -24 73 -3Q79 25 25 29L-67 22Z','#9AAB9F')+E(-37,-39,28,11,'#647E75')+line(-60,19,65,20,cream,3));
const shelf=()=>R(89,244,295,327,wood,8)+[271,400,534].map(y=>R(102,y,267,13,'#D0BE98',3)).join('')+R(220,261,12,302,wood,3);
const school=(shade=false)=>room()+window(782,283,1,shade)+R(75,219,267,324,'#C1C8AE',10)+R(91,242,235,275,'#D7D9BF',4);
const nest=(x,y,s=1)=>G(x,y,s,P('M-92 -32L92 -32L70 29L-70 29Z','#BBA17A')+hay(0,-20,.87));
const basin=(x,y,s=1)=>G(x,y,s,E(0,0,104,27,'#A8BFB7')+P('M-104 -2Q-98 63 0 64Q98 63 104 -2Z','#A8BFB7')+E(0,-1,96,21,'#C7DCD4')+P('M-49 0q24 8 48 0','none','#9FBDB7',2));
const spool=(x,y,s=1)=>G(x,y,s,R(-20,-26,40,52,'#C5B185',4)+E(0,-25,30,9,wood)+E(0,25,30,9,wood)+E(0,-25,8,3,'#7A8069'));
const crate=(x,y,s=1)=>G(x,y,s,R(-120,-104,240,142,'#B39770',6)+R(-104,-89,208,109,'#7D8E76',6)+cloth(0,12,.9)+R(-126,24,252,18,wood,4));
function story436(i,c){if(c)return school()+crate(671,691,1.1)+curled(666,715,.85,'normal','sleep')+figure(335,750,1,'mole','read',true)+book(335,631,.64,true,true);return [
()=>room()+shelf()+shoe(651,690,1.6)+curled(640,657,.68)+figure(330,750,1,'mole','down',true)+book(288,660,.45),
()=>school()+stool(367,712,.85)+figure(367,748,1,'mole','lap',true)+P('M323 658L411 658L423 713L311 713Z','#79A0AA')+curled(366,709,.67)+E(337,701,8,8,'#69736D')+E(397,701,8,8,'#69736D'),
()=>school()+table(630,612,1.5)+figure(344,748,1,'mole','read')+book(344,629,.66,true,true)+curled(709,595,.8)+label(558,581,'飞兽',.8)+R(790,565,46,42,'#B7C8B1',6),
()=>school()+R(623,487,262,17,wood,4)+R(642,500,17,119,wood,4)+R(847,500,17,119,wood,4)+curled(734,478,.8,'fly')+figure(343,748,1,'mole','open')+book(261,644,.44),
()=>school()+R(599,475,285,16,wood,4)+nest(748,446,1)+P('M639 487L610 710M687 487L658 710','none','#BAB59A',9)+[530,575,620,665,702].map((y,j)=>line(633-j*6,y,681-j*6,y,'#BAB59A',7)).join('')+curled(648,642,.66,'fly')+hay(807,731,.6)+figure(337,748,1,'mole','hold'),
()=>school()+basin(725,686,1)+curled(609,687,.81,'water')+figure(339,748,1,'mole','right')+label(786,752,'飞兽',.78),
()=>school()+cloth(687,737,1.3)+basin(805,656,.8)+figure(399,748,1,'mole','down',true)+curled(524,736,.8,'water'),
()=>school()+book(808,743,.58,true)+figure(331,749,1,'mole','right',true,true)+curled(670,735,1.0,'both'),
()=>school()+cloth(648,734,1.1)+figure(389,748,1,'mole','lap',true)+curled(389,700,.66,'normal','sleep')+E(359,695,8,8,'#69736D')+E(419,695,8,8,'#69736D')+label(662,705,'飞兽',.75)+label(746,720,'水兽',.75),
()=>school()+figure(353,748,1,'mole','right',true)+curled(666,737,.9)+book(332,650,.5)+R(446,600,105,53,cream,4),
()=>school()+figure(285,748,.98,'mole','read',true)+book(286,630,.62,true,true)+hay(481,734,.85)+tray(659,728,.65)+cloth(836,719,.75)+curled(817,718,.67,'normal','sleep'),
()=>school()+P('M740 422L890 422L887 756L489 756Z','#E9DDAA','none',0,'opacity=".5"')+cloth(688,721,1.35)+curled(684,706,.94,'normal','belly')+tray(861,728,.5)+E(852,721,13,8,'#B8A97D')+E(883,726,7,4,'#B8A97D')+basin(460,723,.33)+figure(287,748,.97,'mole','draw')+book(389,641,.51,true,true)+pencil(385,637,.65,-27),
()=>school(true)+cloth(728,725,.9)+curled(651,733,.95,'normal','stand',true)+spool(537,724,.63)+basin(840,722,.3)+figure(291,748,.98,'mole','read',true)+book(292,631,.6,true,true),
()=>school()+crate(730,694,1)+figure(515,748,1,'mole','push')+cloth(598,716,.55)+curled(631,717,.7)+E(852,739,20,6,'#9D8D6C'),
()=>school()+crate(716,689,1)+curled(670,718,.81)+book(580,718,.65,true,true)+line(647,697,632,710,cream,13)+figure(347,748,1,'mole','hold')+G(347,628,.7,R(-42,-31,84,62,'#A5B99D',6)+label(0,0,'纸签',.7)),
()=>school()+crate(715,685,1.1)+curled(708,710,.86,'normal','sleep')+E(754,725,13,5,'#8FAEA6','opacity=".55"')+figure(529,747,1,'mole','read',true)+book(529,628,.64,true,true)
][i]();}
function crow(x,y,s=1,pose='rest'){let a=E(0,0,59,9,ink,'opacity=".12"')+line(-21,-35,-25,-5,'#A6916A',10)+line(21,-35,28,-5,'#A6916A',10)+E(0,-105,49,79,'#50625B')+R(-42,-139,84,82,'#859F80',17)+E(0,-203,50,54,'#50625B')+P('M42 -211L83 -194L42 -182Z','#BDA777')+E(25,-209,4.5,5,cream)+line(13,-226,36,-230,cream,6)+line(-38,-144,33,-71,'#C7C6A6',5)+R(18,-94,54,52,'#A8B8A4',6);a+=pose==='left'?P('M-36 -127Q-70 -128 -112 -110L-101 -92Q-65 -102 -27 -88Z','#50625B'):pose==='write'?P('M-32 -122Q-23 -81 69 -83L70 -105L3 -135Z','#50625B'):P('M-35 -127Q-63 -86 -22 -67L-9 -86Z','#50625B');return G(x,y,s,a);}
const stitchDeer=(x,y,s=1,lie=false)=>G(x,y,s,P(lie?'M-36 -31L-49 -7M-7 -31L-12 -7M25 -31L38 -7M49 -31L57 -7':'M-36 -43L-36 -5M-7 -43L-7 -5M25 -43L25 -5M49 -43L49 -5','none','#B88368',9)+line(49,-26,49,-11,'#D4B59C',8)+E(11,-48,51,25,'#AE725B')+P('M-36 -48L-45 -101L-69 -111L-72 -130L-37 -126L-23 -101L-15 -53Z','#AE725B')+E(-61,-115,3,3,ink)+P('M-54 -128L-58 -161L-74 -172M-57 -151L-43 -165M-38 -128L-25 -155L-13 -162M-27 -150L-30 -171','none',cream,6)+P('M57 -51L74 -69L75 -50Z','#AE725B'));
const swallow=(x,y,s=1,c='#D8D8C2')=>G(x,y,s,P('M0 0Q-33 -39 -64 -25L-22 10L-35 33L2 15L29 28L17 8L62 -9Q26 -26 0 0Z',c));
const tapestry=(x=650,y=441,s=1,stage=0,deerX=12,back=false)=>G(x,y,s,R(-242,-210,484,420,'#C8B58F',4)+R(-227,-196,454,391,'#DED1B0',3)+[-205,-175,-145,-115,-85,-55,-25,5,35,65,95,125,155,185,215].map(xx=>line(xx,-193,xx,192,'#C4BDA1',.7)).join('')+[-180,-150,-120,-90,-60,-30,0,30,60,90,120,150,180].map(yy=>line(-224,yy,224,yy,'#C4BDA1',.7)).join('')+(back?P('M-201 110L102 -70L-83 -157L-24 126L-197 -111L76 84L-20 -77L183 11L-77 164','none','#B5A076',4)+P('M-197 52L2 -119L-102 -11L143 126','none','#90A6AD',3):tree(-160,21,.30)+tree(-39,-42,.22)+tree(-99,86,.34)+E(-105,105,55,25,'#A5BEB1')+P('M-184 139Q-208 4 -92 -9Q7 2 -26 128Q-54 180 -184 139Z','none','#A28C6A',6)+(stage>=1?P(stage>=5?'M-26 128L20 104L57 91':'M-26 128L104 46L-17 -16L-120 8','none','#C6AB6D',4):'')+(stage>=2&&stage<5?P('M-29 125L77 66L-49 22L-74 65L-10 100','none','#839CA6',4):'')+(stage<6?swallow(150,-123,.6):[0,1,2,3,4,5,6,7].map(j=>E(112+j%4*19,-133+Math.floor(j/4)*19,2,2,'#AC9A79')).join(''))+(stage>=7?P('M-26 128L30 104L87 84L129 37L148 -112L190 -58L192 100L160 100L220 100','none','#F1EAD4',5):'')+stitchDeer(deerX,stage>=7?(deerX>100?100:128-(deerX+26)*24/56):132,.4,stage===8)));
const hall=(night=false)=>room()+window(831,276,.82,night)+R(91,192,18,205,wood,5)+P('M53 209L148 209L128 158L74 158Z',cream);
const rack=(stage=4,deerX=12)=>R(377,196,17,477,wood,5)+R(868,196,17,477,wood,5)+line(367,211,899,211,wood,15)+tapestry(615,439,.9,stage,deerX)+P('M833 249L879 275L879 614L833 615Z','#B5A27D')+P('M843 280L871 379L844 447L869 574','none','#D0BD95',3);
const basket=(x,y,s=1)=>G(x,y,s,P('M-66 -50Q-64 -115 0 -116Q64 -115 66 -50','none',wood,8)+P('M-76 -46L76 -46L60 37L-60 37Z','#B69C76')+[-45,-22,0,22,45].map(xx=>line(xx,-40,xx,31,'#D4BF95',3)).join(''));
function story437(i,c){if(c)return hall(true)+tapestry(650,425,.9,7,189)+figure(288,747,.98,'girl','hold')+crow(806,747,.81);return [
()=>hall()+tapestry(647,432,1,0,27)+figure(282,748,1,'girl','down',true),
()=>hall()+tapestry(647,432,1,0,26)+figure(314,748,1,'girl','point'),
()=>hall()+tapestry(655,398,.74,0,18)+stool(334,709,.79)+figure(335,747,1,'girl','hold',true)+basket(335,653,.55)+crow(706,748,1,'left'),
()=>hall()+tapestry(644,430,1,1,-145)+figure(280,748,1,'girl','hold')+basket(289,744,.62),
()=>hall()+tapestry(644,430,1,2,-87)+figure(470,728,1,'girl','point')+pencil(585,557,.65,35)+P('M585 557Q601 565 615 555','none','#839CA6',3),
()=>hall()+tapestry(640,429,1,3,0,true)+figure(315,748,1,'girl','right',true,true)+basket(377,744,.56),
()=>hall()+tapestry(649,427,.96,3,29)+figure(297,748,1,'girl','hold',true,true)+G(341,732,.7,E(0,0,45,19,'#AB8E87')+line(-9,-5,-13,-55,'#C6CBB9',2)),
()=>room()+window(784,267,.92)+table(619,625,1.5)+figure(307,748,1,'girl','open')+crow(815,748,.99,'write')+R(493,584,179,44,'#AFA484',5)+[0,1,2,3].map(j=>circle(513+j*36,595,8,ink,3)).join(''),
()=>hall()+rack(4,-33)+figure(289,748,1,'girl','point',true)+stool(916,660,.7)+crow(916,646,.82,'left')+stool(285,708,.79)+pencil(824,556,.63,-43),
()=>hall()+rack(5,-104)+figure(342,748,1,'girl','point')+stool(916,660,.7)+crow(916,646,.82,'left')+P('M448 515Q447 611 508 677Q540 711 516 736','none','#879FA6',4)+pencil(824,556,.63,-43),
()=>hall()+rack(5,32)+figure(306,748,1,'girl','hold')+crow(916,747,.82)+basket(289,744,.65)+P('M247 704L263 718M276 706L285 720M300 703L315 714','none','#C9B183',3),
()=>hall()+tapestry(664,420,.87,6,33)+table(301,635,.76)+figure(305,748,1,'girl','draw',true)+book(407,635,.61,true)+swallow(408,633,.37)+pencil(407,632,.64,-32)+P('M798 320Q799 483 590 613','none',cream,3),
()=>hall()+rack(7,63)+figure(448,748,1,'girl','point')+line(558,581,574,564,'#CAD5C7',3)+P('M563 577Q573 565 592 554','none',cream,2)+stool(916,660,.7)+crow(916,646,.82,'left')+pencil(824,556,.63,-43),
()=>hall()+rack(7,190)+figure(308,748,1,'girl','hold',true)+stool(916,660,.7)+crow(916,646,.82,'left'),
()=>hall()+tapestry(649,426,.97,7,17)+figure(293,748,1,'girl','hold')+stool(338,709,.66)+stool(892,711,.66)+basket(257,744,.61),
()=>hall(true)+tapestry(650,398,.84,8,192)+table(508,675,1.3)+figure(277,748,.95,'girl','right')+crow(794,748,.95,'left')+book(703,654,.55,true)+P('M684 659L684 636M668 637Q684 608 700 637Z','none','#9A9D83',3)+pencil(689,644,.56,-30)+R(376,625,36,39,'#B3C3B3',6)+R(433,625,36,39,'#B3C3B3',6)
][i]();}
const scenes={'expansion-0436':story436,'expansion-0437':story437};
export function eleventhOlderLastArtwork(story,index,cover=false){if(!Object.hasOwn(scenes,story?.id)||story.status!=='text-ready'||story.ageBand!=='9-10'||!Array.isArray(story.pages)||story.pages.length!==16||story.provenance?.review!=='full-text-reviewed'||typeof story.title!=='string'||!story.title.trim()||story.pages.some((p,j)=>p?.id!==`p${String(j+1).padStart(2,'0')}`||typeof p.text!=='string'||!p.text.trim()||typeof p.scene?.action!=='string'||!p.scene.action.trim())||!Number.isInteger(index)||index<0||index>=16||typeof cover!=='boolean')throw Error('Unsupported reviewed eleventh older last story');return svg(scenes[story.id](index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

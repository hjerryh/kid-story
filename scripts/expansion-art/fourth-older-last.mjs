// Original page-specific art for reviewed manuscripts 0156–0160.
import {E,R,P,G,line,leaf,cloud,tree,table,stool,book,basket,pear,flower,svg} from '../render-illustrations.mjs';
import {room,outdoors} from './middle.mjs';
const ink='#42584F',paper='#EFE7CF',skin='#D4AF8C',teal='#759C8E';
const arm=(x,y,dx,dy,c,w=18)=>P(`M${x} ${y} Q${x+dx*.6} ${y+dy*.25-7} ${x+dx} ${y+dy}`,'none',c,w);
const txt=(s,x,y,z=18,c=ink)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${z}" font-family="PingFang SC,sans-serif" fill="${c}">${s}</text>`;
const bag=(x,y,s=1,c='#A58E69')=>G(x,y,s,R(-31,-29,62,59,c,7)+R(-32,-32,64,27,c,5)+E(0,-7,4,4,'#C9B581'));
const sheet=(x,y,s=1,a='',rot=0)=>G(x,y,s,R(-80,-57,160,114,paper,3)+a,rot);
const note=(x,y,s=1)=>sheet(x,y,s,[-31,-10,11,32].map((yy,i)=>line(-54,yy,53-i*7,yy,'#9CA68E',3)).join(''));
const pencil=(x,y,s=1,rot=-30)=>G(x,y,s,R(-3,-43,6,77,'#AD9469',2)+P('M-3 34 L3 34 L0 45Z',ink),rot);
const brush=(x,y,s=1,rot=-30)=>G(x,y,s,R(-4,-41,8,67,'#AB946F',3)+R(-10,21,20,25,'#C3BE9F',3)+[-6,0,6].map(xx=>line(xx,31,xx,46,'#A1A58A',1)).join(''),rot);
const cup=(x,y,s=1)=>G(x,y,s,R(-22,-33,44,53,'#A8B9AA',6)+E(0,-33,22,7,'#859F94')+P('M22 -25 Q45 -29 43 -4 Q37 8 22 2','none','#A8B9AA',6));
const bowl=(x,y,s=1,water=false)=>G(x,y,s,P('M-43 -20 Q-36 27 0 29 Q36 27 43 -20Z','#AFB8A2')+E(0,-20,43,13,paper)+(water?E(0,-20,36,8,'#99BCB4'):''));
const envelope=(x,y,s=1)=>sheet(x,y,s,line(-73,-46,0,12,'#B7B89B',2)+line(0,12,73,-46,'#B7B89B',2)+E(0,12,8,6,'#AFB794'));
function kid(x,y,s=1,who='yan',pose='hold',sit=false,accessory=true){const coats={yan:'#688F7C',wen:'#8099A4',wu:'#6F9F92',xi:'#769AA9',cen:'#789E8D',tao:'#B07D65'},c=coats[who],hair=who==='yan'||who==='xi'||who==='tao'?'#4D554B':'#635D4D',pants=['wen','cen'].includes(who)?'#DDD6BB':'#929E91';let a=E(0,0,64,10,ink,'opacity=".12"');
 a+=sit?P('M-21 -66 L-50 -35 L-55 -9 M21 -66 L48 -34 L54 -9','none',pants,22):R(-29,-74,22,64,pants,7)+R(8,-74,22,64,pants,7);a+=E(sit?-55:-19,-8,24,11,'#938268')+E(sit?54:21,-8,24,11,'#938268');
 a+=P(who==='wu'?'M-37 -170 L37 -170 L64 -44 Q0 -28 -64 -44Z':'M-39 -171 L39 -171 L47 -61 Q0 -46 -47 -61Z',c)+line(0,-160,0,who==='wu'?-48:-58,'#B4C6B0',3)+[-142,-118,-94].map(yy=>E(5,yy,3,3,'#CEBC8F')).join('');
 a+=E(0,-225,59,60,hair)+R(-56,-221,112,35,hair,12)+E(0,-214,50,48,skin)+P('M-53 -226 Q-53 -279 0 -279 Q54 -277 54 -222 Q28 -224 10 -246 Q-13 -225 -53 -226Z',hair);
 if(['wu','tao'].includes(who))a+=[[-42,-245],[-26,-267],[0,-274],[26,-267],[44,-245]].map(([xx,yy])=>E(xx,yy,17,18,hair)).join('');
 if(who==='wu')a+=leaf(-37,-240,.27,'#A6A27B',-60);
 a+=pose==='listen'||pose==='closed'?P('M-26 -216 q8 8 16 0 M10 -216 q8 8 16 0','none',ink,2):E(-17,-216,4,5,ink)+E(17,-216,4,5,ink);
 a+=pose==='hum'||pose==='talk'||pose==='signal'?E(0,-187,5,6,'#987E68'):P(pose==='sad'?'M-11 -186 Q0 -194 11 -186':'M-11 -191 Q0 -180 11 -191','none','#967C66',2);
 if(who==='tao')a+=E(-17,-216,17,19,'none','stroke="#ADAE92" stroke-width="3"')+E(17,-216,17,19,'none','stroke="#ADAE92" stroke-width="3"')+line(-2,-216,2,-216,'#ADAE92',3);
 const l=pose==='leftlow'?[-84,105]:pose==='signal'?[-10,-67]:pose==='open'?[-41,23]:pose==='draw'?[170,32]:[25,42],r=pose==='chess'?[200,-10]:pose==='farwrite'?[140,54]:pose==='point'?[66,-9]:pose==='write'||pose==='draw'?[110,54]:pose==='reach'?[115,14]:pose==='rope'?[70,43]:pose==='open'?[41,23]:[-25,42];
 a+=arm(-39,-149,...l,who==='tao'?'#B9C4B9':c)+arm(39,-149,...r,who==='tao'?'#B9C4B9':c)+E(-39+l[0],-149+l[1],10,11,skin)+E(39+r[0],-149+r[1],10,11,skin);
 if((who==='yan'||who==='xi')&&accessory)a+=line(-42,-77,44,-77,'#A38E6B',4)+bag(43,-65,.56,who==='xi'?'#8DA895':'#AD9D77');
 if(who==='wen'||who==='cen')a+=line(-42,-169,40,-68,who==='wen'?'#638474':'#B8B28E',5)+bag(40,-66,.73,who==='wen'?'#668775':'#C9BC94');
 return G(x,y,s,a);}
function fossil(x,y,s=1,side='left',black=true){const id=`fossil-${x}-${y}-${s}-${side}`;let a=P('M-83 -28 Q-60 -88 0 -86 Q60 -88 83 -28 L0 48Z','none','#9AA28C',3)+[-73,-53,-27,0,27,53,73].map(xx=>P(`M0 47 Q${xx*.42} -13 ${xx} ${-37-Math.sqrt(Math.max(0,1-(xx/83)**2))*48}`,'none','#9DA58F',2)).join('');if(black)a+=P('M-85 -12 L-55 -18 L-47 0 L-20 7 L0 4 L51 14 L84 5','none','#6D7E71',3);return G(x,y,s,side==='full'?a:`<defs><clipPath id="${id}"><rect x="${side==='left'?-92:0}" y="-92" width="92" height="150"/></clipPath></defs><g clip-path="url(#${id})">${a}</g>`);}
function mill(x,y,s=1,turn=false){return G(x,y,s,E(0,0,150,18,ink,'opacity=".1"')+R(-140,-117,280,108,'#B5BFAC',17)+E(0,-116,140,35,'#C1C9B5')+fossil(140,-30,.72,'left')+R(-111,-245,222,113,'#BDC8B6',4)+E(0,-244,111,33,'#CFD5C0')+E(0,-132,111,23,'#B6C2AD')+P('M-69 -194 q19 11 38 0 M8 -194 q19 11 38 0','none','#708677',4)+P('M-30 -160 Q-8 -148 14 -162','none','#839681',3)+E(0,-244,23,9,'#899F89')+line(74,-247,turn?166:127,-291,'#9B8869',10)+R(turn?156:117,-312,17,45,'#AF9A73',5));}
function slab(x,y,s=1,back=false,tilt=0){return G(x,y,s,E(0,20,169,19,ink,'opacity=".1"')+P('M-151 -76 L130 -76 L155 14 L-145 14Z','#C6CCB9','#A7B59F',2)+P('M-145 14 L155 14 L147 49 L-138 49Z','#ADBDA7')+E(-42,31,4,4,'#718575')+E(-9,31,4,4,'#718575')+P('M-37 40 q12 8 23 0','none','#85967F',2)+(back?fossil(-145,-21,.75,'right'):P('M-88 -67 L-79 7 M74 -67 L85 7','none','#B1BDA8',7)),tilt);}
function millRoom(){return room()+R(692,110,248,494,'#A5AD93',6)+R(712,130,208,455,'#C2D0B4',4)+P('M713 472 Q800 413 920 458 L920 584 L713 584Z','#9DB58D')+R(680,601,270,22,'#B0AA86',5)+R(67,645,122,91,'#C8BE99',17)+line(79,660,178,660,'#A79975',4);}
const butterfly=(x,y,s=1)=>sheet(x,y,s,E(-26,-5,29,39,'none','stroke="#A0AA8D" stroke-width="3"')+E(26,-5,29,39,'none','stroke="#A0AA8D" stroke-width="3"')+line(0,-43,0,44,'#869B86',3));
const pairedFossil=(x,y,s=1)=>G(x,y,s,R(-108,-70,108,140,paper,2)+R(0,-70,108,140,paper,2)+fossil(0,16,.77,'full')+line(0,-70,0,70,'#C3C5A7',1));
const fossilPaper=(x,y,s=1,side='left')=>sheet(x,y,s,fossil(side==='left'?39:side==='right'?-39:0,8,.63,side));
function shelf(x,y,s=1,empty=false){return G(x,y,s,[-83,83].map(xx=>R(xx,-255,12,268,'#9D8D6B',3)).join('')+[-222,-119,-16].map(yy=>R(-93,yy,196,13,'#AF9E77',4)).join('')+(empty?'':basket(-31,-151,.42,false)+[[-51,-239],[4,-239],[49,-240],[-51,-33],[16,-36]].map(([xx,yy],j)=>E(xx,yy,17,11,['#B8C1AB','#A8B8A5'][j%2])).join('')+P('M35 -239 L30 -263 L44 -253 L55 -265 L60 -240Z','#A4B6A1')));}
const rawStone=(x,y,s=1,kind=0)=>G(x,y,s,P('M-53 4 L-35 -46 L36 -39 L58 5Z','#BBC6B3')+(kind===0?line(-31,-12,28,-29,paper,5):kind===1?E(10,-16,13,9,'#9BAC98'):P('M-36 -7 Q0 -48 36 -7','none','#9CAF98',2))+E(-14,-11,3,3,ink)+E(11,-11,3,3,ink));
function yanStory(i,cover){if(cover)return millRoom()+mill(745,751,.96)+kid(311,752,1.12,'yan','open')+pairedFossil(480,674,.84);
 return [
 ()=>millRoom()+mill(615,753,1.04)+kid(869,754,.92,'yan','leftlow',true)+brush(756,695,.6,0),
 ()=>millRoom()+mill(723,755,1.05,true)+kid(316,754,.99,'yan','point',true)+stool(918,686,.53,true)+basket(521,747,.54,false),
 ()=>millRoom()+table(584,651,1.16)+kid(285,754,1.18,'yan','write')+butterfly(588,608,1.1)+line(588,548,588,669,'#BCB69A',2,'stroke-dasharray="5 5"')+pencil(461,640,.56),
 ()=>millRoom()+mill(763,660,.76)+kid(275,752,1.1,'yan','sad')+R(400,706,392,69,paper,9)+[476,598,715].map((x,j)=>rawStone(x,752,.82,j)).join('')+bag(347,694,.56),
 ()=>room()+shelf(837,624,1.1,true)+table(573,648,1.16)+kid(285,753,1.16,'yan','write')+book(593,602,1.3,true,'#8DAB94')+fossil(548,596,.38,'full',false)+P('M623 579 q-23 3 -14 23 q8 17 23 2 q-16 8 -13 -9','none','#9DA58C',3)+fossilPaper(752,658,.46)+pencil(460,640,.56),
 ()=>millRoom()+mill(758,754,.95)+kid(310,752,1.16,'yan','sad')+butterfly(309,622,.72),
 ()=>millRoom()+stool(310,704,.73,true)+kid(310,753,1.05,'yan','listen',true)+mill(748,754,1.01),
 ()=>millRoom()+mill(738,752,1.07)+kid(305,754,1.07,'yan','write',true)+fossilPaper(485,651,.62)+pencil(468,647,.52)+R(505,745,100,30,paper,7),
 ()=>millRoom()+shelf(813,652,1.07,true)+table(565,651,1.12)+kid(283,754,1.16,'yan','write')+book(585,603,1.32,true,'#A5A17A')+G(526,593,.35,E(0,0,16,21,'#DDD6BD')+[-13,-5,4,13].map((x,j)=>E(x,-24-Math.abs(j-1.5)*2,4,10,'#DDD6BD')).join(''))+txt('磨座',637,590,18)+txt('门前',637,619,18)+fossilPaper(741,657,.43),
 ()=>outdoors()+R(46,92,238,506,'#BAB798',6)+shelf(796,657,1.12)+slab(583,739,.82)+kid(286,753,1.06,'yan','point'),
 ()=>outdoors()+R(38,92,238,506,'#BAB798',6)+shelf(803,657,1.07,true)+kid(309,754,1.08,'yan','write')+R(428,641,182,99,'#B49F77',7)+[464,505,548].map((x,j)=>E(x,658+j%2*16,18,12,'#ACBBA4')).join('')+R(701,736,167,14,'#B09D75',4)+R(720,712,166,13,'#B09D75',4)+basket(667,757,.4,false),
 ()=>outdoors()+R(36,92,238,506,'#BAB798',6)+slab(739,707,1.12,true,-18)+stool(273,701,.71,true)+kid(273,752,.98,'yan','listen',true)+cup(421,740,.55),
 ()=>outdoors()+slab(683,714,1.24,true)+kid(303,753,1.01,'yan','farwrite',true)+brush(488,666,.63,-30)+bowl(498,754,.6,true)+fossilPaper(289,645,.46),
 ()=>millRoom()+mill(787,750,.88)+stool(493,697,.9,true)+R(389,496,230,172,'#A9966F',6)+pairedFossil(504,583,1)+kid(268,754,1.09,'yan','point'),
 ()=>millRoom()+slab(829,692,.64)+table(568,650,1.16)+kid(285,753,1.16,'yan','write')+pairedFossil(563,613,.74)+envelope(718,647,.56)+note(437,649,.41)+pencil(460,642,.56),
 ()=>millRoom()+mill(735,754,.88,true)+slab(501,763,.67)+kid(288,754,1.1,'yan','talk')+pairedFossil(764,368,.88)+R(710,310,13,26,'#A08F6E',3)+R(801,310,13,26,'#A08F6E',3),
 ][i]();}

function bridge(west=false){return R(0,0,1000,800,'#C9D7C8',0)+cloud(231,132,1.3,'#E4E4CD')+R(0,391,1000,409,'#A1BEB5',0)+P('M0 617 L1000 502 L1000 800 L0 800Z','#BEC2A7')+P('M0 625 L1000 509','none','#879E8F',14)+[60,260,460,660,860,986].map(x=>R(x-13,588-x*.112,26,158,'#9BAB95',7)+E(x,585-x*.112,24,13,'#B8C3A8')).join('')+(west?tree(869,488,.74,'#8BAA8C'):R(741,239,97,161,'#B6C0A8',4)+P('M731 238 L791 186 L847 238Z','#8EA18D')+R(873,278,96,115,'#BFCCB5',5));}
function cave(){return outdoors()+P('M461 800 L461 198 Q724 46 1000 201 L1000 800Z','#A7B39B')+P('M536 800 L536 319 Q727 150 939 321 L939 800Z','#879F8B')+P('M0 652 L1000 690 L1000 800 L0 800Z','#C1C7AC')+[573,907,960].map((x,j)=>leaf(x,641+j*17,.46,'#8AA886',j%2?30:-30)).join('');}
function fish(x,y,s=1,tail=false){return G(x,y,s,P(tail?'M-43 -17 Q-14 -27 16 -5 Q34 -9 43 -26 L43 18 Q28 3 16 4 Q-14 26 -43 14Z':'M-43 -17 Q-10 -32 27 -3 L61 -22 L61 22 L27 4 Q-10 31 -43 16Z','#D7E8DC','#AFCBC1',2,'fill-opacity=".45"')+(tail?'':E(-27,-4,3,4,'#799B8C')+P('M-15 -11 Q4 -1 26 -1','none','#EEF0D9',4)));}
const hum=(x1,y1,x2,y2,c='#E1E4CD')=>P(`M${x1} ${y1} Q${(x1+x2)/2} ${y1-24} ${x2} ${y2} M${x1+1} ${y1+11} Q${(x1+x2)/2} ${y1-9} ${x2} ${y2+11}`,'none',c,3);
function spring(){return outdoors()+R(0,578,1000,222,'#ABBFA2',0)+E(698,658,250,100,'#A2C6BE')+E(698,658,228,78,'#91B7B0')+P('M560 656 q70 -23 141 0 M647 681 q73 -23 143 0','none','#D8E3D0',4)+[586,670,755,845,933].map((x,j)=>P(`M${x} 0 Q${x-87} 185 ${x-36} ${309+j%2*63}`,'none','#86A88A',6)+leaf(x-48,183,.34,'#90AE8D',-35)).join('');}
function wenStory(i,cover){if(cover)return bridge(true)+kid(290,754,1.12,'wen','hum')+kid(720,754,1.12,'tao','signal')+fish(516,579,.76)+hum(304,545,506,578)+hum(704,545,532,578);
 const solo=(pose='hum')=>bridge()+kid(302,754,1.15,'wen',pose);
 return [
 ()=>cave()+kid(318,753,1.03,'wen','open',true)+fish(653,537,.89)+book(355,723,.53,true,'#8DA993'),
 ()=>cave()+kid(321,753,1.08,'wen','listen',true)+fish(653,535,.88)+book(321,632,.62,false,'#8DA993'),
 ()=>cave()+kid(602,754,1.13,'wen','hum')+fish(379,599,.78)+hum(586,547,396,598)+book(743,752,.45,false,'#8DA993'),
 ()=>bridge()+kid(737,669,.93,'wen','sad')+fish(305,702,.76)+P('M158 746 L494 651','none','#D7D9BD',5),
 ()=>solo()+stool(519,690,.72,true)+cup(513,647,.61)+fish(752,590,.76)+hum(319,542,489,564),
 ()=>bridge()+table(536,650,.85)+kid(300,754,1.15,'wen','hum')+bowl(524,616,.87)+hum(316,542,503,585)+fish(591,563,.68)+P('M530 552 q-45 -35 -64 3 q-6 33 27 44','none','#DAE4D0',3),
 ()=>bridge()+kid(313,754,1.15,'wen','hold')+fish(426,607,.74)+kid(806,705,.9,'tao','point'),
 ()=>bridge()+kid(290,754,1.13,'wen','sad')+fish(648,583,.76)+P('M432 729 L674 699','none','#D7D9BE',4),
 ()=>bridge()+stool(747,700,.75,true)+kid(307,754,1.15,'wen','talk')+kid(747,752,1.02,'tao','listen',true),
 ()=>bridge()+kid(721,753,1.15,'wen','hum')+kid(307,753,1.01,'tao','listen',true)+fish(426,594,.77)+hum(704,540,448,591),
 ()=>bridge()+kid(284,754,1.15,'wen','hum')+kid(752,754,1.13,'tao','hum')+fish(515,597,.77)+hum(301,541,421,564)+hum(734,544,619,572)+cup(527,747,.6),
 ()=>bridge()+kid(288,754,1.15,'wen','signal')+kid(753,754,1.13,'tao','hum')+fish(526,597,.77)+hum(301,541,535,591)+hum(734,544,511,593),
 ()=>bridge()+kid(310,754,1.15,'wen','listen')+kid(753,752,1.13,'tao','hum')+fish(528,603,.78)+hum(736,542,548,601)+cup(418,748,.5),
 ()=>spring()+kid(296,754,1.12,'wen','listen')+kid(585,751,1.08,'tao','hum')+fish(439,611,.73)+hum(568,551,455,608),
 ()=>spring()+hum(290,560,622,609)+stool(274,702,.71,true)+kid(274,752,1.03,'wen','hum',true)+kid(418,741,.79,'tao','listen')+fish(644,610,.72)+fish(796,624,.46,true)+fish(856,595,.43,true)+P('M612 589 q58 -19 115 -1 M629 677 q79 -16 153 -1','none','#CADCC9',3),
 ()=>bridge()+kid(318,754,1.15,'wen','hum')+kid(748,754,1.13,'tao','signal')+hum(335,540,716,543)+R(72,561,130,71,'#B9A47C',7)+E(98,647,16,16,'#8DA18C')+E(176,647,16,16,'#8DA18C')+[93,126,159,187].map(x=>E(x,554,12,8,'#D6BD89')).join(''),
 ][i]();}

function stumpRoom(rain=false){return room(rain)+R(527,103,373,366,'#A39A76',168)+R(548,124,330,324,rain?'#A9BEB3':'#C7D7BD',151)+P('M552 358 Q718 287 874 358 L874 443 L552 443Z','#9CB58E')+R(512,466,403,26,'#B4A67C',5)+[605,696,794].map((x,j)=>G(x,413+j%2*12,.46,R(-9,-35,18,40,'#D5CEAB',5)+P('M-45 -35 Q0 -100 45 -35Z','#B3977A')+E(-12,-49,7,5,paper)+E(13,-59,6,4,paper))).join('')+(rain?[570,618,670,722,774,826].map(x=>line(x,166,x-9,221,'#DCE7D6',3)).join(''):'')+P('M89 574 Q159 543 243 574 L243 746 Q166 776 89 745Z','#A08D69')+E(166,573,78,27,'#C5B18C')+P('M118 610 L120 732 M164 609 L164 753 M210 611 L210 735','none','#B5A17B',3);}
function copperFox(x,y,s=1,pose='hold',purple=false){let a=E(0,0,70,10,ink,'opacity=".1"')+P(pose==='tuck'?'M34 -61 Q124 -37 108 -105 Q92 -138 25 -126':'M30 -53 Q139 -8 147 -99 Q149 -135 125 -131 Q121 -71 44 -91','#BB8D70','#A77D62',2);if(purple&&pose!=='tuck')a+=P('M126 -130 Q149 -140 147 -100 L132 -92Z','#9B8FA7');
 a+=(pose==='tuck'?'':G(136,-98,.46,E(0,0,15,17,'#BCA36E')+R(-14,9,28,7,'#A88F61',3)+E(0,17,4,4,'#877D58')))+R(-28,-62,21,54,'#B58B6E',7)+R(7,-62,21,54,'#B58B6E',7)+E(-20,-6,24,11,'#A98166')+E(23,-6,24,11,'#A98166')+E(0,-110,53,76,'#BF9273')+P('M-50 -220 L-45 -282 L-11 -237 M13 -237 L48 -282 L55 -219Z','#BC8D6D')+P('M-44 -268 L-24 -242 L-41 -244Z','#90A58D')+P('M43 -269 L25 -242 L45 -246Z','#90A58D')+E(0,-207,62,51,'#C69978')+P('M-49 -195 L0 -163 L49 -195 Q0 -210 -49 -195Z','#DBC5A2')+E(0,-172,8,6,ink)+(pose==='listen'?P('M-27 -213 q8 8 16 0 M11 -213 q8 8 16 0','none',ink,2):E(-21,-214,4,5,ink)+E(21,-214,4,5,ink))+P(pose==='sad'?'M-9 -162 Q0 -169 9 -162':'M-9 -166 Q0 -156 9 -166','none','#927E60',2)+P('M-45 -159 Q0 -143 45 -159 L38 -137 L6 -141 L-9 -115 L-30 -122 L-23 -141 L-40 -137Z','#6D8796')+arm(-38,-132,pose==='point'?-75:23,pose==='point'?25:36,'#B88C6D',16)+arm(38,-132,pose==='reach'?73:-23,pose==='reach'?18:36,'#B88C6D',16);if(pose==='tuck')a+=P('M42 -65 Q86 -74 47 -128 L12 -147 L5 -130 Q34 -103 42 -65Z','#BF9273')+(purple?P('M12 -147 L29 -139 L20 -124 L5 -130Z','#9B8FA7'):'')+P('M6 -149 L30 -146 L28 -140 L5 -142Z','#6D8796')+G(14,-123,.31,E(0,0,15,17,'#BCA36E')+R(-14,9,28,7,'#A88F61',3)+E(0,17,4,4,'#877D58'));return G(x,y,s,a);}
function giantBook(x,y,s=1,open=true,art=''){return G(x,y,s,book(0,0,1.45,open,'#8EA290')+(open?art:''));}
function bookWorld(inkPool=false){return R(0,0,1000,800,'#D5DDC4',0)+cloud(210,134,1.2,'#EEE5CE')+P('M0 474 L191 294 L326 440 L534 257 L714 461 L876 313 L1000 454 L1000 800 L0 800Z','#A8BA98')+P('M0 657 Q245 560 480 675 Q729 545 1000 638 L1000 800 L0 800Z','#BAC5A3')+(inkPool?E(714,659,240,92,'#AAA2B7')+E(710,650,214,74,'#9E9AB1'):P('M435 800 Q508 626 426 460 L516 448 Q624 613 591 800Z','#97BEB6'))+P('M7 800 L7 709 Q27 753 93 746 L7 800Z',paper,'#B8C2A6',2);}
const corner=(x,y,s=1,lift=false)=>G(x,y,s,P(lift?'M-53 43 L-53 -46 Q12 -62 62 -34 L-53 43Z':'M-53 43 L-53 -34 Q-30 18 62 -5 L-53 43Z',paper,'#ABB9A1',2));
function umbrella(x,y,s=1){return G(x,y,s,P('M-130 -122 Q-111 -259 0 -276 Q111 -258 130 -122 Q101 -151 66 -122 Q32 -150 0 -122 Q-34 -150 -66 -122 Q-103 -150 -130 -122Z','#92AEA4')+P('M0 -276 Q-59 -211 -66 -122 M0 -276 L0 -124 M0 -276 Q59 -211 66 -122','none','#BBD0B9',3)+line(0,-279,0,-305,'#8C9B7E',5)+P('M0 -126 L0 -4 Q0 33 28 26 Q45 23 40 4','none','#9A8868',9)+E(-22,-171,4,5,ink)+E(22,-171,4,5,ink)+E(0,-150,7,8,'#6D897E'));}
const bird=(x,y,s=1,plump=true)=>G(x,y,s,E(0,-17,plump?37:22,plump?30:36,'#B5BC9E')+P('M-28 -15 L-51 -29 L-40 -3Z','#9DAD90')+E(19,-26,3,4,ink)+P('M32 -25 L49 -17 L32 -11Z','#B79E6D')+P('M-7 8 l-3 12 M10 8 l3 12','none','#9B936E',3));
function garden(){return bookWorld()+P('M0 690 Q503 600 1000 690 L1000 800 L0 800Z','#BBC7A4')+[135,294,454,614,774,933].map((x,j)=>P(`M${x} 740 Q${x-44} ${399-j%2*30} ${x+81} 245 Q${x+122} 213 ${x+146} 247`,'none','#E5E4C9',16)+[0,1,2].map(k=>P(`M${x+7-k*10} ${491-k*68} Q${x+85} ${474-k*77} ${x+126} ${524-k*72}`,'none','#E5E4C9',9)).join('')).join('');}
function wuStory(i,cover){if(cover)return garden()+kid(318,754,1.14,'wu','closed')+copperFox(743,751,1.03,'tuck',true)+book(492,737,.58,true,'#8AA38D');
 return [
 ()=>stumpRoom()+table(557,649,1.12)+kid(281,753,1.15,'wu','write')+copperFox(818,752,1.02,'point')+giantBook(562,599,1.06,true,P('M-32 10 Q-24 -51 21 -45 M-29 -5 Q-5 -13 14 11','none','#E6E2C4',5)),
 ()=>stumpRoom()+table(543,651,1.14)+kid(279,753,1.14,'wu','write')+copperFox(805,751,1.02,'point')+giantBook(550,602,1.09,true,P('M-83 19 Q-19 -35 71 16','none','#BEC6A5',10)+txt('合拢 · 重来',0,-20,15))+E(449,641,10,11,skin)+E(691,640,10,8,'#B88C6D'),
 ()=>bookWorld()+P('M602 658 L776 555 L804 570 L628 691Z','#C8C5A3')+[0,1,2,3].map(k=>line(625+k*41,646-k*25,650+k*41,661-k*25,'#A8B799',3)).join('')+kid(300,753,1.12,'wu','point')+copperFox(757,751,1.02,'hold')+G(500,586,.6,R(-4,-130,8,130,'#9A8E6C',3)+P('M-67 -125 L43 -125 L65 -108 L43 -91 L-67 -91Z',paper)+leaf(-28,-94,.24,'#9DB59A',-90)),
 ()=>stumpRoom()+table(569,650,1.16)+stool(282,704,.72,true)+kid(282,753,1.0,'wu','open',true)+copperFox(811,752,1.02,'point')+giantBook(569,603,1.1,true)+G(423,656,.4,E(0,0,14,20,'#C3B98D')+line(0,-18,5,-36,'#9C976B',3)),
 ()=>bookWorld(true)+umbrella(759,650,.91)+hum(772,516,524,536)+kid(296,752,1.11,'wu','listen')+copperFox(554,747,.89,'sad',true),
 ()=>stumpRoom()+table(571,651,1.15)+kid(281,754,1.14,'wu','write')+copperFox(819,751,1.01,'sad')+note(471,624,.73)+pencil(451,641,.56)+giantBook(672,600,.7,true),
 ()=>stumpRoom()+kid(311,752,1.13,'wu','talk')+note(311,624,.74)+copperFox(729,752,1.03,'tuck')+giantBook(513,745,.7,true),
 ()=>bookWorld()+R(579,241,369,348,'#A4B49B',25)+kid(291,751,1.02,'wu','hold',true)+bird(347,734,.5)+copperFox(759,752,1.01,'reach')+corner(886,641,.8,true),
 ()=>stumpRoom()+E(751,746,92,32,'#A9B69B')+kid(751,752,1.01,'wu','sad',true)+note(751,631,.62)+copperFox(284,751,1.02,'sad')+giantBook(491,719,.88,false),
 ()=>stumpRoom(true)+E(747,746,93,31,'#A6B59C')+kid(747,752,1.0,'wu','sad',true)+note(747,631,.63)+copperFox(275,752,1.02,'hold')+giantBook(274,628,.72,false),
 ()=>bookWorld(true)+umbrella(739,656,.92)+copperFox(325,752,1.08,'sad')+[445,486,531,578].map((x,j)=>E(x,749-j*13,9,6,'#B29D7C')+E(x-13,751-j*13,5,4,'#B29D7C')).join(''),
 ()=>stumpRoom()+table(560,651,1.13)+kid(291,754,1.13,'wu','hold')+note(291,627,.72)+copperFox(813,752,1.02,'sad')+giantBook(558,604,1.08,true),
 ()=>bookWorld(true)+umbrella(794,645,.88)+hum(801,510,526,529)+kid(285,751,1.0,'wu','write',true)+note(436,638,.6)+pencil(438,651,.52)+copperFox(550,749,.88,'hold',true),
 ()=>bookWorld()+kid(309,752,1.12,'wu','point')+copperFox(738,752,1.02,'sad',true)+corner(884,734,.7,false)+P('M459 783 Q556 680 645 583','none','#DBD7B6',26),
 ()=>garden()+kid(320,753,1.12,'wu','closed')+copperFox(737,751,1.03,'listen',true)+[432,507,568,630].map((x,j)=>leaf(x,756-j%2*17,.19,paper,j%2?65:-45)).join(''),
 ()=>garden()+kid(316,753,1.03,'wu','write',true)+note(470,638,.7)+pencil(471,651,.54)+copperFox(740,751,1.04,'tuck',true),
 ][i]();}

function chessHall(){return room()+R(588,103,345,383,'#A3B39D',143)+R(610,125,301,339,'#BED3C4',123)+R(613,302,295,159,'#95B8B1',0)+P('M628 354 q120 -18 263 3','none','#D1DEC9',4)+R(575,485,374,25,'#B7AA84',5)+P('M587 104 Q650 246 587 476 L558 476 L558 104Z','#AEC1AA')+P('M930 104 Q869 246 930 476 L959 476 L959 104Z','#AEC1AA');}
function salt(x,y,s=1,sad=false,base=true){return G(x,y,s,(base?E(0,0,43,11,'#D9D7BB')+R(-32,-17,64,17,'#D5D5BA',5):'')+P('M-25 -19 Q-27 -54 -1 -80 L-24 -86 L-36 -69 L-50 -80 L-28 -115 L-19 -125 L-14 -143 L-3 -135 L14 -151 L20 -127 Q55 -111 43 -75 Q33 -44 31 -18Z','#E0DFC4','#B3BDA5',2)+P('M20 -128 Q52 -108 38 -76 L24 -89 L27 -104 L13 -115Z','#ADB8AE')+E(-17,-111,4,4,ink)+P(sad?'M-38 -85 q7 -8 13 -2':'M-39 -88 q8 5 14 -2','none','#98A68F',2)+P('M-3 -64 Q23 -49 43 -62 L51 -26 L22 -39 L2 -27Z','#6E9079'));}
function piece(x,y,s=1,t='p',white=true){const c=white?'#ECE4C7':'#5E786D',edge=white?'#A3B19A':'#446557';let a=E(0,0,15,5,c)+R(-11,-7,22,7,c,2);if(t==='p')a+=P('M-8 -7 L-5 -23 L5 -23 L8 -7Z',c)+E(0,-29,8,8,c);if(t==='r')a+=R(-9,-29,18,23,c,2)+R(-14,-37,28,11,c,1)+[-11,0,11].map(xx=>R(xx-3,-44,6,9,c,0)).join('');if(t==='b')a+=P('M-10 -7 L-5 -26 Q-16 -37 0 -51 Q16 -37 5 -26 L10 -7Z',c)+line(0,-43,5,-34,edge,2);if(t==='k'||t==='q')a+=P('M-10 -7 L-6 -30 L-14 -42 L-4 -36 L0 -49 L6 -36 L15 -43 L7 -29 L11 -7Z',c)+(t==='k'?line(0,-51,0,-64,c,4)+line(-6,-58,6,-58,c,4):[-12,0,12].map(xx=>E(xx,-45-(xx===0?6:0),3,3,c)).join(''));if(t==='n')a+=P('M-10 -7 Q-12 -29 3 -35 L-7 -39 L-15 -31 L-20 -36 L-8 -51 L-7 -58 L1 -53 Q21 -51 15 -30 L13 -7Z',c)+E(-5,-46,2,2,edge);return G(x,y,s,a);}
const basePosition=[['g1','k',1],['d1','q',1],['a1','r',1],['f1','r',1],['c1','b',1],['c4','b',1],['f3','salt',1],...['a2','b2','c2','d3','e4','f2','g2','h2'].map(a=>[a,'p',1]),['g8','k',0],['d8','q',0],['a8','r',0],['f8','r',0],['a6','b',0],['e7','b',0],['c6','n',0],['f6','n',0],...['a5','b7','c7','d6','e6','f7','g7','h7'].map(a=>[a,'p',0])];
function board(x,y,s=1,state='new',hideSalt=false){let pos=state==='start'?['r','salt','b','q','k','b','n','r'].flatMap((t,j)=>[[String.fromCharCode(97+j)+'1',t,1],[String.fromCharCode(97+j)+'2','p',1],[String.fromCharCode(97+j)+'7','p',0],[String.fromCharCode(97+j)+'8',t==='salt'?'n':t,0]]):basePosition.map(a=>[...a]);if(hideSalt)pos=pos.filter(a=>a[1]!=='salt');if(state!=='new')pos=pos.map(a=>a[0]==='d6'?['d5',...a.slice(1)]:a);if(['left','chase','captured','review'].includes(state))pos=pos.map(a=>a[1]==='salt'?[state==='left'||state==='review'?'d4':'b5',...a.slice(1)]:a);if(['chase','captured'].includes(state))pos=pos.map(a=>a[0]==='a8'?['a7',...a.slice(1)]:a);if(state==='captured')pos=pos.filter(a=>a[1]!=='salt').map(a=>a[0]==='a6'?['b5',...a.slice(1)]:a);let a=R(-150,-207,300,213,'#A3916C',5);for(let row=0;row<8;row++)for(let col=0;col<8;col++)a+=R(-136+col*34,-194+row*24,34,24,(row+col)%2?'#9BAA8E':'#DEDAC0',0);for(const [sq,t,w]of pos){const col=sq.charCodeAt(0)-97,row=8-Number(sq[1]),xx=-119+col*34,yy=-173+row*24;a+=t==='salt'?salt(xx,yy,.25,false):piece(xx,yy,.48,t,!!w);}return G(x,y,s,a);}
function octopus(x,y,s=1,pose='hold'){let a=E(0,8,135,17,ink,'opacity=".1"');const ends=[[-146,-111],[-143,-30],[-104,11],[-51,21],[21,25],[80,18],[132,-12],[pose==='shake'?-354:141,pose==='shake'?-143:-107]];for(let j=0;j<8;j++){const [xx,yy]=ends[j],startX=(j<4?-1:1)*(24+(j%4)*7);a+=P(`M${startX} -82 Q${xx*.5} ${yy-61} ${xx} ${yy}`,'none','#A29098',22)+P(`M${startX} -82 Q${startX+(xx-startX)*.2} ${-100} ${startX+(xx-startX)*.36} ${-83+(yy+83)*.35}`,'none','#D0C6A9',26);}a+=E(0,-126,83,86,'#A4949B')+P('M-62 -152 Q0 -131 62 -152 L68 -61 Q0 -31 -68 -61Z','#D0C6A9')+R(-29,-111,58,34,'#B6B99F',8)+E(0,-225,70,64,'#A99AA1')+E(-24,-225,21,23,'none','stroke="#D3CBB0" stroke-width="4"')+E(24,-225,21,23,'none','stroke="#D3CBB0" stroke-width="4"')+line(-3,-225,3,-225,'#D3CBB0',3)+E(-24,-225,4,5,ink)+E(24,-225,4,5,ink)+P('M-13 -196 Q0 -186 13 -196','none','#786F73',3);return G(x,y,s,a);}
function smallCrab(x,y,s=1){return G(x,y,s,E(0,-72,62,44,'#BEA18A')+[-1,1].map(k=>P(`M${k*44} -64 L${k*84} -100 L${k*93} -139 M${k*49} -45 L${k*93} -17 M${k*41} -30 L${k*67} 0`,'none','#AA927C',9)+P(`M${k*94} -139 l${k*16} -20 M${k*94} -139 l${k*-8} -25`,'none','#AA927C',8)+line(k*24,-102,k*30,-125,'#AA927C',6)+E(k*30,-129,5,6,ink)).join(''));}
const chessNote=(x,y,s=1,circle=false)=>sheet(x,y,s,[-33,-13,7,27].map((yy,j)=>line(-55,yy,47-j*5,yy,'#9AA78E',2)).join('')+(circle?E(12,7,27,10,'none','stroke="#859F93" stroke-width="2"'):''));
function xiStory(i,cover){if(cover)return chessHall()+table(558,655,1.21)+board(565,645,.91,'left',true)+kid(280,754,1.13,'xi','point')+salt(818,746,1.03);
 const match=(state='changed',pose='hold',octopose='hold',accessory=true)=>chessHall()+table(565,658,1.31)+kid(278,754,1.14,'xi',pose,false,accessory)+octopus(841,749,.9,octopose)+board(566,650,1.01,state);
 return [
 ()=>chessHall()+table(642,656,1.04)+board(646,648,.78,'new',true)+kid(306,753,1.19,'xi','hold',false,false)+bag(306,657,.93,'#8CA68E')+salt(309,638,.49),
 ()=>chessHall()+table(697,642,1.08)+board(701,633,.79,'new',true)+kid(302,754,1.16,'xi','point')+salt(250,581,.30)+chessNote(836,674,.4),
 ()=>chessHall()+table(553,657,1.31)+kid(278,754,1.14,'xi','sad')+smallCrab(823,727,.92)+board(563,649,.99,'new'),
 ()=>chessHall()+table(697,648,1.0)+octopus(816,746,.9)+board(682,639,.69,'new',true)+kid(303,754,1.16,'xi','point')+salt(419,650,.5)+cup(553,739,.59),
 ()=>outdoors()+P('M0 642 L1000 642 L1000 800 L0 800Z','#B9C2A7')+kid(311,754,1.01,'xi','listen',true,false)+salt(676,752,1.0,true)+bag(477,748,.64,'#89A38C'),
 ()=>room()+table(586,658,1.4)+kid(263,754,1.16,'xi','write')+book(484,609,1.0,true,'#89A48C')+board(673,649,.72,'left')+pencil(439,641,.56),
 ()=>match('new','hold')+chessNote(407,665,.46)+pencil(401,660,.5,65),
 ()=>match('changed','write')+pencil(449,627,.6,-15)+chessNote(403,679,.42),
 ()=>match('changed','point')+chessNote(409,674,.42)+pencil(403,667,.5,65),
 ()=>match('changed','listen')+chessNote(406,671,.41),
 ()=>match('left','chess')+G(278,754,1.14,arm(39,-149,200,-10,'#769AA9')+E(239,-159,10,11,skin))+chessNote(409,674,.4),
 ()=>match('captured','sad','hold',false)+bag(397,660,.57,'#8DA58D')+salt(439,674,.44,true)+chessNote(699,685,.42),
 ()=>chessHall()+table(564,658,1.31)+board(566,650,.97,'captured')+kid(284,754,1.12,'xi','reach',false,false)+octopus(818,751,1.0,'shake')+bag(397,660,.57,'#8DA58D')+salt(439,674,.45)+chessNote(707,687,.43),
 ()=>match('review','write')+chessNote(409,678,.45,true)+pencil(448,644,.5),
 ()=>room()+table(577,652,1.18)+kid(287,754,1.16,'xi','write',false,false)+chessNote(498,620,.82,true)+pencil(459,642,.54)+R(590,643,32,15,'#ADBAA2',3)+bag(701,640,.74,'#8BA48C')+salt(700,613,.47),
 ()=>match('start','point')+cup(706,682,.5),
 ][i]();}

function crow(x,y,s=1,pose='hold'){let a=E(0,0,48,8,ink,'opacity=".12"')+P('M15 -44 L70 -26 L57 -6 L13 -20Z','#657A73')+line(-17,-28,-19,-2,'#A99A76',7)+line(16,-28,18,-2,'#A99A76',7)+P('M-19 -2 l-14 6 M-19 -2 l15 4 M18 -2 l-14 6 M18 -2 l16 4','none','#A99A76',4)+E(0,-87,44,61,'#5D716C')+P('M-35 -125 L35 -125 L39 -47 Q0 -33 -39 -47Z','#AD7D65')+P('M-17 -128 L0 -108 L18 -128Z','#9EACA1')+E(0,-164,43,41,'#60746C')+P('M32 -173 L67 -156 L34 -147Z','#B39E74')+E(12,-168,17,19,'none','stroke="#C6B891" stroke-width="3"')+E(-23,-168,14,18,'none','stroke="#C6B891" stroke-width="3"')+line(-9,-170,-3,-170,'#C6B891',3)+E(13,-168,3,4,ink)+E(-21,-168,3,4,ink)+P('M-31 -108 Q-51 -87 -12 -62','none','#5D716C',16)+P(pose==='signal'?'M31 -109 Q75 -146 63 -190':pose==='point'?'M31 -109 Q62 -106 91 -82':'M31 -109 Q52 -83 13 -61','none','#5D716C',16);return G(x,y,s,a);}
function mailbox(x,y,s=1){return G(x,y,s,E(0,0,80,12,ink,'opacity=".12"')+R(-35,-36,20,31,'#AA9169',5)+R(16,-36,20,31,'#AA9169',5)+E(-27,-5,24,9,'#9A8764')+E(28,-5,24,9,'#9A8764')+R(-69,-223,138,192,'#8EA27B',29)+R(-45,-177,90,17,'#BCA06A',6)+R(-35,-172,70,6,'#7C8D67',3)+E(-20,-132,5,5,ink)+E(20,-132,5,5,ink)+P('M-12 -108 Q0 -98 12 -108','none','#637F65',3)+R(-34,-77,68,28,'#A0AE89',7)+E(0,-224,82,17,'#B49A67')+P('M-61 -228 Q-52 -279 0 -276 Q55 -277 61 -228Z','#BEA36F')+E(0,-273,10,6,'#A68E5F'));}
function foldedMountain(){return outdoors()+P('M363 737 L546 235 L647 438 L760 188 L973 736Z','#B3C5AE')+P('M546 235 L559 628 L647 438Z','#C7D3B8')+P('M760 188 L729 470 L973 736Z','#C8D4BA')+P('M363 737 L704 83 L986 737Z','#D7E3CC','#99B3A2',3,'fill-opacity=".09"')+P('M704 83 L725 737','none','#BCD1BA',2,'opacity=".5"');}
function platform(x,y,s=1){return G(x,y,s,R(-84,-3,168,24,'#9CAD96',9)+E(0,0,84,26,'#C5CEB6')+E(0,-3,74,19,'#D2D6BD'));}
const road=(d)=>P(d,'none','#A7B69A',37)+P(d,'none',paper,28);
function roads(state=0){let a=state===0?road('M366 738 Q449 665 554 628')+road('M729 470 Q809 431 846 347')+P('M609 593 q51 -21 55 -53 q-15 -17 -39 1','none',paper,24):road('M554 628 Q627 563 729 470')+P('M779 435 q44 -4 52 -32 q-14 -19 -38 -3','none',paper,24);a+=platform(367,737,.8)+platform(554,628,1)+platform(729,470,.9)+platform(846,347,.75)+E(337,728,12,8,paper);return a;}
function windmill(x=150,y=700,s=.85,mode='held',endpoint=[409,648]){let a=G(x,y,s,R(-12,-204,24,207,'#A18E69',5)+P('M-56 0 L0 -87 L56 0Z','#A99670')+G(0,-187,1,[0,90,180,270].map(r=>G(0,0,1,P('M0 0 L-19 -104 L82 -64Z','#C8D0AF','#A6B79B',2)+P('M0 0 L82 -64 L21 -13Z','#A9BDA3'),r+(mode==='free'?27:0))).join('')+E(0,0,15,15,'#B69C6F')));const end=mode==='tied'?[304,704]:mode==='free'?[234,723]:endpoint;a+=P(`M${x+16*s} ${y-177*s} Q266 592 ${end[0]} ${end[1]}`,'none','#A88F66',5);if(mode==='tied')a+=R(295,685,17,63,'#9D8963',4)+P('M294 700 Q316 691 315 706 Q316 720 295 712','none','#BDAB81',4);return a;}
const mountainStage=(state=0,mode='held',endpoint)=>foldedMountain()+roads(state)+windmill(150,700,.85,mode,endpoint);
function pathMap(x,y,s=1,state=0,fold=false){return sheet(x,y,s,(state===0?P('M-55 38 L-11 5 M28 -23 L55 -41','none','#93AA91',5):P('M-11 5 L28 -23','none','#93AA91',5))+[[-55,38],[-11,5],[28,-23],[55,-41]].map(([xx,yy])=>E(xx,yy,7,7,'none','stroke="#869E87" stroke-width="2"')).join('')+(fold?P('M-80 18 L-38 57 L-80 57Z','#D4D6BA')+line(-80,18,-38,57,'#AEBBA2',2):''));}
function pots(grown=false){return Array.from({length:8},(_,j)=>G(154+j*99,756,1,P('M-31 -25 L31 -25 L24 24 L-24 24Z','#B2997C')+R(-35,-33,70,13,'#C0AB89',4)+E(0,-27,29,6,'#8E9777')+(grown?line(0,-27,0,j===0?-91:-62,'#7D9D79',4)+leaf(0,j===0?-43:-32,j===0?.28:.18,'#92AE87',-53)+leaf(0,j===0?-58:-43,j===0?.24:.16,'#A2BB90',51)+(j===3||j===6?R(21,-58,5,32,'#8DADAE',2):''):j===0?E(0,-31,6,5,'#D1BA83'):''))).join('');}
const bread=(x,y,s=1)=>G(x,y,s,E(0,0,45,26,'#C5AC7D')+[-22,0,22].map(xx=>line(xx,-12,xx-9,9,'#E0CEA1',3)).join(''));
const blueFlowers=(x,y,s=1)=>G(x,y,s,[-45,-15,15,45].map((xx,j)=>flower(xx,j%2*14,.62,'#9FBEC4')).join(''));
function cenStory(i,cover){if(cover)return mountainStage(1,'held')+kid(300,754,1,'cen','rope')+crow(529,624,.62,'signal')+mailbox(602,626,.48)+blueFlowers(845,349,.4);
 return [
 ()=>foldedMountain()+kid(296,668,.99,'cen','sad',true)+pots(false)+G(78,497,.46,R(-5,-146,10,146,'#A39068',3)+G(0,-142,1,[0,90,180,270].map(r=>G(0,0,1,P('M0 0 L-12 -59 L49 -36Z','#BAC9A8'),r)).join(''))),
 ()=>foldedMountain()+P('M48 623 L510 623 M77 623 L77 752 M492 623 L492 752','none','#A99C76',12)+kid(286,752,1.08,'cen','listen')+crow(449,624,.68,'point')+E(337,736,13,8,paper),
 ()=>mountainStage(0,'held')+kid(300,754,1,'cen','rope')+crow(724,749,.95,'point'),
 ()=>mountainStage(0,'tied')+kid(552,627,.63,'cen','write')+pathMap(652,554,.39,0)+pencil(647,566,.35)+crow(603,628,.43,'hold'),
 ()=>mountainStage(1,'free')+kid(391,737,.72,'cen','point')+crow(304,736,.57,'point'),
 ()=>foldedMountain()+R(169,688,657,87,'#A5B39A',15)+R(148,747,701,36,'#BCC7AA',10)+kid(302,751,.98,'cen','sad',true)+crow(735,749,.89,'hold')+bread(302,636,.6)+bread(735,669,.49)+pathMap(512,740,.62,0)+E(426,767,12,8,paper),
 ()=>foldedMountain()+road('M748 493 Q755 628 514 653')+kid(316,752,1.04,'cen','hold')+crow(735,751,.94,'hold')+envelope(316,632,.73)+note(534,657,.69)+R(624,746,94,23,paper,5),
 ()=>mountainStage(1,'tied')+table(423,679,.8)+kid(282,752,1.01,'cen','write')+pathMap(373,650,.44,0)+pathMap(468,675,.44,1)+pencil(432,650,.49)+crow(754,750,.91,'hold'),
 ()=>foldedMountain()+R(401,627,348,91,'#A7B69D',13)+kid(282,753,1.07,'cen','write')+G(795,751,.99,'<g transform="scale(-1 1)">'+crow(0,0,1,'point')+'</g>')+pathMap(486,628,.78,0)+pathMap(642,628,.78,1)+E(572,723,13,8,paper),
 ()=>mountainStage(0,'tied')+kid(320,754,1.05,'cen','hold')+pathMap(320,632,.73,0,true)+crow(789,751,.98,'hold'),
 ()=>mountainStage(1,'held')+kid(300,754,1,'cen','rope')+crow(554,626,.66,'signal'),
 ()=>mountainStage(0,'tied')+kid(297,754,1,'cen','write')+note(450,643,.63)+pencil(446,653,.5)+crow(730,468,.52,'signal'),
 ()=>foldedMountain()+E(683,732,253,67,'#A6BD98')+[-1,1].map(k=>blueFlowers(686+k*178,751,1.0)).join('')+blueFlowers(760,625,.76)+mailbox(757,749,.9)+crow(635,698,1.08,'hold')+envelope(756,663,.49)+envelope(779,680,.44),
 ()=>mountainStage(1,'held')+kid(300,754,1,'cen','rope')+crow(508,626,.52,'hold')+mailbox(588,626,.55)+bag(620,637,.42,'#A2B18C')+envelope(620,624,.14)+blueFlowers(637,612,.25),
 ()=>mountainStage(0,'held',[390,676])+crow(308,750,.9,'point')+mailbox(544,748,.82)+kid(789,754,.98,'cen','hold')+note(789,635,.65)+envelope(533,622,.49)+envelope(591,671,.43),
 ()=>foldedMountain()+R(68,306,330,22,'#AFAB86',5)+G(229,289,.86,book(0,0,1,true,'#91AA92')+P('M4 -30 Q39 -53 76 -45 L76 33 Q39 22 4 42Z','#E9DCC0'))+kid(306,703,.9,'cen','listen',true)+crow(782,704,.86,'hold')+pots(true)+E(899,764,14,9,paper)+G(452,720,.37,E(0,0,31,7,'#AAB79A')+E(4,-17,20,20,'#C3B894')+P('M-1 -6 Q-15 -28 7 -29 Q24 -24 10 -13','none','#A59D7E',3)+P('M-23 -1 L-31 -24','none','#9CAE91',3)),
 ][i]();}
const registry={'expansion-0156':yanStory,'expansion-0157':wenStory,'expansion-0158':wuStory,'expansion-0159':xiStory,'expansion-0160':cenStory};
export function fourthOlderLastArtwork(story,index,cover=false){const render=registry[story?.id];if(!render||story.status!=='text-ready'||story.pages?.length!==16||!Number.isInteger(index)||index<0||index>=16)throw new Error('No reviewed fourth older last storyboard for this input');return svg(render(index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

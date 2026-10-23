// Original storyboard illustrations for reviewed 0431–0435; not registered until review is complete.
import {E,R,P,G,line,leaf,tree,cloud,flower,svg} from '../render-illustrations.mjs';
const ink='#425E5C',paper='#EEE6CF',wood='#AD936D';
const ring=(x,y,r,c=wood,w=3)=>E(x,y,r,r,'none',`stroke="${c}" stroke-width="${w}"`);
const ar=(x,y,xx,yy,c,w=15)=>P(`M${x} ${y}Q${(x+xx)/2} ${y+25} ${xx} ${yy}`,'none',c,w);
const handPos={placePine:[[-24,-80],[169,-135]],unclip:[[-24,-80],[127,-125]],rest:[[-25,-78],[25,-78]],hold:[[-21,-120],[21,-120]],open:[[-67,-119],[67,-119]],right:[[-24,-80],[116,-145]],down:[[-24,-80],[111,-56]],point:[[-24,-80],[103,-223]],left:[[-109,-146],[23,-80]],up:[[-78,-229],[24,-80]],draw:[[-55,-115],[87,-116]],read:[[-52,-129],[52,-129]],cup:[[-20,-80],[102,-158]],push:[[99,-124],[122,-124]],inspect:[[88,-69],[116,-52]]};
function person(x,y,s=1,kind='deer',pose='rest',sit=false,bag=true,sad=false){const female=!['host','maker'].includes(kind),hair=['sand','host','maker'].includes(kind)?'#7D654E':'#4F5E57',cloth=kind==='sand'?'#6F8997':kind==='case'?'#A0776E':kind==='host'?'#A4AD8D':kind==='maker'?'#939D8F':'#657F8B',skin='#D5B591';let a=E(0,0,68,10,ink,'opacity=".12"')+P(sit?'M-22 -62L-57 -31L-48 -8M22 -62L57 -31L48 -8':'M-24 -66L-24 -11M24 -66L24 -11','none',kind==='case'?'#726F5E':kind==='sand'?'#D7D7C0':'#ADB3A5',22)+E(sit?-48:-24,-7,24,11,'#8E7C62')+E(sit?48:24,-7,24,11,'#8E7C62')+R(-48,-181,96,123,cloth,19);if(kind==='case')a+=P('M-45 -180L-29 -180L-29 -79L29 -79L29 -180L45 -180L45 -64L-45 -64Z','#A0776E')+E(0,-152,7,8,wood);if(kind==='maker')a+=P('M-36 -147L36 -147L45 -63L-45 -63Z','#B19975');a+=E(0,-230,59,61,skin)+P(female?'M-62 -240Q-69 -304 0 -298Q69 -300 62 -237L49 -194L44 -249L17 -268L-2 -251L-32 -267L-47 -244L-50 -193L-62 -220Z':'M-59 -245Q-52 -300 0 -292Q60 -295 61 -236L25 -250L5 -270L-33 -246Z',hair)+E(-19,-231,4,5,ink)+E(19,-231,4,5,ink)+P(sad?'M-11 -201q11 -12 22 0':'M-11 -208q11 12 22 0','none','#9A7B61',2);if(kind==='snow')a+=P('M-45 -187Q0 -166 45 -187L44 -170Q3 -149 -45 -170Z','#B17C6C')+R(16,-169,19,74,'#B17C6C',4);if(kind==='sand')a+=ring(35,-265,9,'#C2A570',4);if(bag&&kind==='whale')a+=line(-42,-179,43,-89,'#B89C7B',5)+R(27,-104,53,57,'#C99A6C',8);const hands=handPos[pose];for(let j=0;j<2;j++){const [xx,yy]=hands[j];a+=ar(j?42:-42,-166,xx,yy,kind==='case'?paper:cloth,16)+E(xx,yy,9,9,skin);}return G(x,y,s,a);}
const book=(x,y,s=1,open=false,c='#8EAA8D')=>G(x,y,s,open?R(-82,-52,164,104,paper,4)+line(0,-49,0,48,'#C3B99E',3):R(-42,-60,84,120,c,6)+line(-31,-57,-31,57,'#708A78',3)+R(-24,-38,48,28,paper,2));
const pencil=(x,y,s=1,r=0)=>G(x,y,s,line(0,-57,0,-3,'#899E91',7)+P('M-4 -3L0 11L4 -3Z','#7C735C'),r);
const bench=(x,y,s=1)=>G(x,y,s,line(-91,0,-98,82,wood,13)+line(91,0,98,82,wood,13)+R(-114,-19,228,23,'#C1AB84',5));
const table=(x,y,s=1)=>G(x,y,s,line(-126,0,-137,138,wood,16)+line(126,0,137,138,wood,16)+P('M-154 0L-132 -39L132 -39L154 0Z','#C9B591')+R(-154,0,308,14,wood,4));
const room=()=>R(0,0,1000,800,'#DFD8C1',0)+R(0,606,1000,194,'#C0B494',0)+[150,450,750].map(x=>line(x,800,x+29,606,'#B2A586',2)).join('');
const win=(x=771,y=287,s=1,snow=false)=>G(x,y,s,R(-116,-133,232,266,'#ADBAA4',25)+R(-103,-120,206,240,snow?'#CAD5CD':'#D5DBC1',18)+line(0,-118,0,118,paper,7)+line(-102,0,102,0,paper,7)+R(-132,128,264,17,wood,5)+(snow?[[-66,-75],[67,-91],[-48,55],[77,73],[26,27]].map(([xx,yy])=>E(xx,yy,3,4,paper)).join(''):''));
const mug=(x,y,s=1)=>G(x,y,s,P('M24 -26Q61 -42 56 -9Q49 10 25 1','none','#B8C5BA',7)+R(-32,-41,64,65,'#BAC8BD',10)+E(0,-40,32,9,paper));
const grass=(x,y,s=1,c='#83A485')=>G(x,y,s,P('M0 0Q-12 -72 -33 -98M0 0Q5 -83 25 -114M0 0Q36 -58 59 -65','none',c,5));
const hay=(x,y,s=1)=>G(x,y,s,R(-53,-25,106,51,'#CFBC83',15)+[-37,-22,-7,8,23,38].map(xx=>line(xx,-21,xx,21,'#E0CF9F',3)).join('')+line(-20,-26,-20,26,'#A5966F',5)+line(22,-26,22,26,'#A5966F',5));
const wheelbarrow=(x,y,s=1,full=false)=>G(x,y,s,E(53,38,29,29,'#8D7E60')+ring(53,38,18,'#CCBB93',4)+line(-72,-6,-78,54,wood,10)+line(-74,-11,-164,-32,wood,9)+(full?hay(0,-39,.95)+hay(14,-77,.7):'')+P('M-96 -27L-71 26L60 26L105 -27Z','#A9AA82')+line(-91,-26,102,-26,'#849779',6));
function fogSheep(x,y,s=1,fade=1,short=false){return G(x,y,s,`<g opacity="${fade}">`+P('M86 -90Q144 -126 151 -86Q139 -61 108 -60',paper)+[-68,-27,22,64].map(xx=>R(xx,short?-37:-68,21,short?37:68,paper,9)).join('')+[-71,-30,16,63].map((xx,j)=>E(xx,-88-j%2*8,52,58,paper)).join('')+E(-86,-113,39,48,paper)+P('M-119 -143Q-156 -195 -117 -182L-108 -174L-116 -167L-105 -165L-99 -146Z',paper)+E(-57,-160,17,32,paper)+E(-100,-116,3.6,4.5,ink)+E(-75,-116,3.6,4.5,ink)+P('M-93 -96q8 7 16 0','none','#9A9E8A',2)+'</g>');}
const dew=(x,y,s=1,sheep=false)=>G(x,y,s,E(0,0,24,27,'#BDD4C5','fill-opacity=".7" stroke="#E6E9D4" stroke-width="2"')+E(-8,-9,5,7,paper)+(sheep?G(2,8,.14,fogSheep(0,0)) :''));
const pasture=(time='day')=>R(0,0,1000,800,time==='night'?'#536E75':time==='dusk'?'#A3B6A8':'#D5DFCB',0)+(time==='night'?E(795,118,46,46,'#E0E1BA'):cloud(657,135,.9))+P('M0 450Q380 376 1000 487L1000 800L0 800Z','#A2BB98')+P('M0 701Q456 491 915 640L1000 800L0 800Z','#86AA8A')+[0,1,2,3,4,5,6].map(j=>grass(439+j*68,714+(j%2)*21,.55)).join('');
const barn=(time='day')=>pasture(time)+R(67,223,300,387,'#C7BA98',9)+P('M42 244L214 100L392 244Z','#8BA387')+R(157,379,125,231,'#9DAC8F',51)+R(80,600,297,17,wood,4);
const route=(x,y,s=1)=>G(x,y,s,R(-115,-75,230,150,paper,5)+E(18,3,61,40,'#A3B696')+P('M-91 55L52 -27L96 -54','none','#BB8F74',4)+P('M-90 56Q-91 -45 1 -52T96 -54','none','#6D9B91',4));
const dewPatch=(x=627,y=667,s=1)=>grass(x,y,s,'#89A68A')+leaf(x+43*s,y-47*s,.65*s,'#98B092',50)+dew(x+65*s,y-68*s,.7*s,true);
function story431(i,c){if(c)return pasture('night')+person(282,753,.94,'deer','hold')+book(282,636,.64)+dewPatch(668,732,2.0);return [
()=>barn()+person(348,748,.97,'deer','hold')+book(348,631,.65)+fogSheep(665,731,.83)+fogSheep(861,597,.49),
()=>barn()+wheelbarrow(615,695,1,true)+E(672,734,54,13,'#9F9D7C')+person(340,748,.97,'deer','right')+person(829,747,1,'host','hold')+R(777,758,72,13,'#B6B79D',6),
()=>room()+R(88,222,352,373,'#ACB99E',15)+R(117,389,290,177,'#BEB091',7)+[145,200,255,310,365].map(x=>R(x,394,13,172,wood,4)).join('')+hay(675,713,1.7)+fogSheep(688,710,.83)+person(367,748,.97,'deer','down')+book(349,670,.48),
()=>barn('dusk')+person(350,749,.99,'deer','down',true)+fogSheep(685,720,.85,.38)+P('M425 694Q493 680 530 717L519 735Q474 701 425 709Z','#DDD099'),
()=>pasture('dusk')+P('M0 704Q280 491 464 557L1000 800Z','#A8BB9A')+tree(782,602,1.0)+person(377,700,.94,'deer','point')+book(347,607,.5)+cloud(659,186,.9)+cloud(410,164,.57),
()=>room()+win()+table(602,637,1.2)+person(345,748,.97,'deer','draw')+route(492,595,.71)+pencil(430,635,.65,-35)+hay(821,719,.6),
()=>pasture('dusk')+bench(253,688,.56)+person(347,749,.99,'deer','down',true)+pencil(458,694,.8,78)+fogSheep(676,734,.91,.83,true),
()=>pasture('night')+person(336,749,.95,'deer','inspect',true)+dewPatch(626,742,1.5)+P('M587 637Q566 594 584 581L591 593L586 599L597 603L602 636Z',paper,'none',0,'opacity=".4"'),
()=>pasture('night')+bench(323,704,.65)+person(324,747,.97,'deer','cup',true)+mug(424,594,.57)+dewPatch(627,742,1.5),
()=>barn('dusk')+R(0,602,436,198,'#B7AD8D',0)+bench(254,716,.96)+person(254,747,.93,'deer','hold',true)+P('M201 578Q254 599 307 578L327 714L181 714Z','#C7C6A6')+mug(125,709,.65)+dewPatch(661,714,1.1)+P('M695 636q-36 -40 -7 -66M705 633q26 -51 0 -75','none',paper,7),
()=>barn()+person(349,749,.96,'deer','hold',true)+book(350,634,.55)+fogSheep(641,737,.93)+dewPatch(770,730,.68),
()=>pasture('night')+person(302,748,.96,'deer','read',true)+book(302,625,.58,true)+dewPatch(473,716,.8)+dewPatch(714,741,1.25)+dewPatch(868,670,.74),
()=>pasture()+P('M0 743Q267 609 434 642Q604 673 1000 546L1000 608Q611 729 418 693Q201 679 0 800Z','#C6C6AA')+person(340,740,.96,'deer','push')+wheelbarrow(593,652,.96,false),
()=>pasture()+P('M0 743Q267 609 434 642Q604 673 1000 546L1000 608Q611 729 418 693Q201 679 0 800Z','#C6C6AA')+person(235,748,.97,'deer','open')+route(235,630,.59)+person(510,727,.91,'host','push')+wheelbarrow(748,643,.91,true),
()=>pasture('dusk')+P('M0 748Q250 642 1000 701L1000 765Q250 707 0 800Z','#C7C9AC')+person(284,742,.94,'deer','push')+wheelbarrow(531,655,.94,true)+fogSheep(817,608,.65,.33)+dewPatch(793,672,.75),
()=>pasture('night')+P('M0 746Q280 641 655 758L715 800L0 800Z','#CDD2B6')+person(320,747,.98,'deer','hold')+book(320,628,.62)+dewPatch(687,738,1.8)
][i]();}
const dryLeaf=(x,y,s=1,r=0)=>G(x,y,s,P('M0 56Q-45 24 -32 -27L-23 -20L-9 -57L0 -42L19 -64L25 -32L40 -42L35 0Q31 39 0 56Z','#C4AA70')+line(0,65,0,-35,'#998D62',3)+P('M0 1L-20 -15M0 18L25 -1','none','#A69665',2),r);
const arrow=(x,y,s=1,r=0)=>G(x,y,s,P('M-6 10L0 0L6 10','none','#8D9682',2),r);
const sandRoom=(night=false)=>room()+G(772,285,1,win(0,0,1,false)+R(-99,-114,198,222,night?'#6D8385':'#D7CB9F',12)+P('M-96 72Q-45 -22 12 49Q75 13 99 94L99 106L-99 106Z','#BEAA7D'))+table(248,640,.84)+R(112,421,15,180,wood,5)+P('M65 427L164 427L143 376L86 376Z',paper);
const grains=(points,amount=1)=>points.map(([x,y],i)=>E(x,y,2.3+((i*7)%3)*.4,2.5,'#D0AC67',`opacity="${amount}"`)).join('');
const loopLeaf=(x,y,s=1,lit=false)=>G(x,y,s,P('M0 -24Q-24 -15 -21 3Q-13 25 0 24Q24 18 21 -2Q15 -22 0 -24Z','none',lit?'#C6A568':'#A7A58D',lit?5:2)+arrow(-19,4,.8,180)+arrow(16,-7,.8));
function sandBoard(stage=0){let a=R(-170,-220,340,400,paper,4),paths='',lit='';const coords=[[-88,-135],[0,-171],[88,-130],[-97,-57],[17,-73],[95,-32],[-91,34],[15,22],[96,46]];if(stage===0)a+=grains(Array.from({length:45},(_,j)=>[-51+j%15*7,155+Math.floor(j/15)*8]));else{paths+=P('M0 167L0 -169','none','#A6A68D',3)+arrow(0,61)+arrow(0,-44);if(stage<3)lit+=grains(Array.from({length:40},(_,j)=>[(j%3-1)*4,155-j*7]));else if(stage<=7){coords.forEach(([xx,yy],j)=>{paths+=(stage===6&&j===0?line(0,yy+20,xx+31,yy+20,'#A6A68D',2):line(0,yy+20,xx,yy+20,'#A6A68D',2))+loopLeaf(xx,yy,1,false);if(stage===6&&j!==0)lit+=loopLeaf(xx,yy,1,true);if(stage===3||stage===4||stage===5&&j<5)lit+=loopLeaf(xx,yy,1,j>3||stage===4);});if(stage===5)lit+=loopLeaf(-88,-135,1,true);if(stage===6){paths+=P('M-88 -111Q-157 -116 -153 -45L-153 145Q-153 165 -88 165','none','#A6A68D',3)+arrow(-153,71,1,180);lit+=grains([[-88,-113],[-124,-100],[-145,-78],[-153,-29],[-153,7],[-153,42],[-153,76],[-153,117]]);}if(stage===7){paths=P('M0 167L0 -169M0 -80L87 -80M0 -132L-83 -132','none','#A6A68D',3)+loopLeaf(87,-104,1,true)+loopLeaf(-83,-156,1,true);}}
else{const branches=[[-92,-132],[0,-170],[92,-132]];for(let j=0;j<3;j++){let [xx,yy]=branches[j];paths+=P(`M0 125L0 -92L${xx} ${yy}Q${xx-30} ${yy+30} ${xx} ${yy+61}Q${xx+28} ${yy+94} ${xx} ${yy+121}Q${xx-26} ${yy+159} ${xx} ${yy+193}L${xx} 144L-145 144L-145 166L0 166`,'none','#A1A38C',3)+arrow(xx,yy+90,1,180);for(let k=0;k<3;k++)paths+=loopLeaf(xx,yy+45+k*63,.6,false);const count=stage===9?(j===0?31:5):16;for(let k=0;k<count;k++){const yy2=yy+10+(k/(count-1))*181;lit+=E(xx+Math.sin(k*.7+j)*11,yy2,stage===9&&j===0?3:2.6,3,'#CFAB62');}}lit+=grains(Array.from({length:18},(_,j)=>[-144+j*8,164]));}}
return a+paths+lit;}
function cabinet(x=682,y=470,s=1,stage=0,open=false){return G(x,y,s,R(-198,-248,396,478,wood,13)+sandBoard(stage)+R(-183,190,366,18,'#AD956C',3)+R(-173,204,346,26,'#C1AB80',4)+label(0,223,'画路 · 关门走 · 开门停',17)+(open?P('M198 -244L255 -222L255 241L198 227Z','none','#8B9B8C',6):R(-178,-229,356,413,'none',4,'stroke="#B5BFA5" stroke-width="5"')+E(165,-4,5,5,'#8E987D')));}
function story432(i,c){if(c)return sandRoom()+cabinet(689,483,.93,10,false)+person(315,748,1,'sand','hold')+dryLeaf(315,623,.44,25);const girl=(p='right',sit=false,x=323)=>person(x,748,.98,'sand',p,sit);return [
()=>sandRoom()+girl('read',true)+book(323,621,.65,true)+dryLeaf(352,603,.4,-12),
()=>sandRoom()+cabinet(694,470,.93,0,true)+girl('point'),
()=>sandRoom()+cabinet(694,470,.93,1,false)+girl('hold'),
()=>sandRoom()+cabinet(694,470,.93,3,true)+girl('right',false,482)+pencil(596,606,.67,-35)+dryLeaf(181,603,.37,27),
()=>sandRoom()+cabinet(694,470,.93,3,false)+girl('point',true),
()=>sandRoom()+cabinet(694,470,.93,4,false)+girl('hold'),
()=>sandRoom()+cabinet(724,454,.79,3,false)+girl('draw',true)+G(251,607,.62,R(-101,-66,202,132,paper,4)+loopLeaf(-51,-34,.5)+loopLeaf(-11,-4,.5)+loopLeaf(36,37,.5))+pencil(405,636,.65,-30),
()=>sandRoom()+cabinet(694,470,.93,6,false)+girl('point'),
()=>sandRoom()+cabinet(760,449,.73,6,false)+girl('draw',true)+G(253,605,.7,R(-115,-67,230,134,paper,4)+P('M0 -43L65 8L21 49L-80 46L-80 -44Z','none','#8BA492',3))+pencil(407,634,.67,-30),
()=>sandRoom()+cabinet(694,470,.93,7,true)+girl('right',false,482)+R(583,597,30,21,'#D8C6AD',5)+[0,1,2,3].map(j=>E(491+j*13,705+j%2*5,3,2,'#BDB393')).join(''),
()=>sandRoom()+cabinet(694,470,.93,8,true)+girl('point',false,482)+pencil(583,529,.69,10),
()=>sandRoom()+cabinet(694,470,.93,9,false)+girl('hold'),
()=>sandRoom()+cabinet(694,470,.93,10,true)+girl('right',false,482)+pencil(596,606,.67,-35),
()=>sandRoom()+cabinet(694,470,.93,10,false)+bench(321,710,.68)+girl('hold',true),
()=>sandRoom(true)+cabinet(734,463,.8,10,false)+girl('draw',true)+book(257,609,.6,true)+pencil(408,635,.66,-35)+dryLeaf(162,594,.33,24),
()=>sandRoom(true)+cabinet(694,470,.93,10,false)+bench(321,710,.68)+girl('hold',true)+dryLeaf(322,633,.51,70)
][i]();}
const label=(x,y,t,size=16,c=ink)=>`<text x="${x}" y="${y}" fill="${c}" font-family="PingFang SC,sans-serif" font-size="${size}" text-anchor="middle">${t}</text>`;
const coin=(x,y,s=1)=>G(x,y,s,E(0,0,7,5,'#C4A66C')+E(0,-1,4,2,'none','stroke="#DDC18A" stroke-width="1"'));
const coins=(x,y,n,s=1,cols=10)=>Array.from({length:n},(_,j)=>coin(x+j%cols*16*s,y+Math.floor(j/cols)*12*s,s)).join('');
const letter=(x,y,s=1,r=0,text='')=>G(x,y,s,R(-49,-34,98,68,paper,4)+P('M-46 -31L0 3L46 -31','none','#B9B294',2)+(text?label(0,22,text,12):''),r);
const pouch=(x,y,s=1)=>G(x,y,s,P('M-32 -45L32 -45L25 -18Q61 40 0 43Q-61 40 -25 -18Z','#B4AA85')+line(-29,-19,29,-19,'#837E63',5));
const pine=(x,y,s=1)=>G(x,y,s,E(0,0,21,29,'#9E855F')+[-12,0,12].map(yy=>P(`M-16 ${yy}q8 9 16 0q8 9 16 0`,'none','#C5AC7B',3)).join(''));
function suitcase(x,y,s=1,open=false,rented=true,tilt=0,inside=''){let a=E(0,7,119,13,ink,'opacity=".12"')+[-79,-34,26,70].map((xx,j)=>R(xx,-32,21,36,j%2?'#9A805E':'#AC8F66',7)).join('');if(open)a+=P('M-111 -135L-105 -218Q0 -238 105 -218L111 -135Z','#937757')+P('M-99 -141L-94 -207Q0 -223 94 -207L99 -141Z','#C4AE86');else a+=R(-112,-159,224,50,'#9B7755',14)+P('M-28 -162Q-30 -195 0 -197Q30 -195 28 -162','none','#846E51',8);a+=R(-111,-142,222,114,'#AC8560',15)+R(-98,-129,196,86,'#BC936A',9)+P('M-70 -116Q-96 -99 -75 -77Q-84 -94 -65 -110Z','#D3B990')+R(-19,-116,38,33,'#C7AA70',6)+line(-12,-98,12,-98,'#8D7B59',3)+line(-70,-142,-70,-30,'#8D7054',4)+line(70,-142,70,-30,'#8D7054',4);if(open)a+=E(0,-141,101,24,'#806E52')+inside;if(rented)a+=R(45,-77,42,31,paper,3)+label(66,-56,'出租',12);else a+=R(45,-77,42,31,'#C1A47C',3);return G(x,y,s,a,tilt);}
const belt=(x,y,s=1,r=0,broken=false)=>G(x,y,s,R(-68,-9,136,18,'#A28A67',4)+R(37,-16,29,32,'none',5,'stroke="#C4AD78" stroke-width="5"')+(broken?line(40,-12,59,-27,'#C4AD78',5):line(43,0,61,0,'#C4AD78',3)),r);
const bag=(x,y,s=1)=>G(x,y,s,P('M-30 -51Q-33 -113 0 -114Q33 -113 30 -51','none','#8C9D8A',8)+R(-61,-61,122,109,'#9EAF97',14)+R(-34,-29,68,53,'#B3BDA1',8)+R(-12,-66,24,20,'#BFA77B',4));
const lodge=()=>room()+win(774,280,1,true)+R(47,225,206,379,'#A29F86',12)+R(71,409,158,166,'#6E7E70',38)+P('M110 548Q83 493 128 455Q111 493 157 513Q192 451 184 547Z','#C5A77B')+R(34,586,232,19,wood,5)+table(563,623,1.25);
const smallBedroom=()=>room()+win(766,273,.95,true)+R(444,577,443,92,'#BAC6B0',16)+R(444,651,20,90,wood,4)+R(866,651,20,90,wood,4)+R(750,564,112,34,paper,8);
const map=(x,y,s=1)=>G(x,y,s,R(-102,-66,204,132,paper,4)+E(33,-3,51,37,'#9DBEB5')+P('M-79 39Q-24 14 -43 -34L-8 -45','none','#B58E70',3)+label(33,4,'盐湖',17));
function story433(i,c){if(c)return lodge()+person(336,748,.99,'case','hold')+suitcase(664,745,1,true,false,0,pine(0,-148,.48));return [
()=>lodge()+person(334,748,1,'case','down',true)+suitcase(671,747,.98,false,true)+coins(465,722,10,.65,5),
()=>lodge()+person(334,748,1,'case','hold',true)+suitcase(672,747,.98,true,true),
()=>lodge()+person(319,748,1,'case','right')+suitcase(804,747,.78,false,true)+G(578,590,.85,R(-115,-63,230,126,paper,4)+label(0,-36,'100 − 76 = 24',20))+coins(511,575,76,.8,10),
()=>smallBedroom()+person(351,749,1,'case','read',true)+map(357,620,.7)+letter(643,575,.7,0,'预约')+book(539,585,.65),
()=>lodge()+person(335,749,1,'case','open',true)+suitcase(676,746,1,false,true)+G(567,590,.8,R(-82,-35,164,70,paper,4)+label(0,7,'24 ÷ 2 = 12',20)),
()=>lodge()+person(335,749,1,'case','right')+suitcase(752,746,.88,false,true)+pouch(686,583,.65)+coins(501,580,24,.82,6)+G(561,529,.7,R(-67,-28,134,56,paper,3)+label(0,6,'十二趟',21)+line(-48,-6,48,9,'#A77867',3)),
()=>lodge()+person(330,749,1,'case','hold')+suitcase(674,747,1,false,true)+belt(617,647,.9,0,true),
()=>lodge()+person(322,749,.98,'case','right')+suitcase(770,747,.82,false,true)+[-1,0,1].map(k=>belt(561,578+k*26,.8,0,k===-1)).join(''),
()=>lodge()+person(310,749,.97,'case','right')+bag(447,640,.55)+suitcase(728,747,.94,false,true)+coin(728,653,.9)+person(892,748,.9,'host','left'),
()=>smallBedroom()+person(345,749,1,'case','right')+bag(541,571,.65)+book(642,575,.48)+book(660,682,.7,false,'#9EA986')+R(723,606,119,54,paper,6)+pouch(831,589,.4),
()=>lodge()+person(334,748,1,'case','draw')+suitcase(769,746,.86,false,true)+bag(520,712,.65)+letter(576,585,.7,0,'预约已撤')+pouch(689,583,.5),
()=>lodge()+person(286,749,.94,'case','hold')+suitcase(658,746,.93,false,true)+G(490,603,.56,R(-79,-93,158,89,'#97826A',10)+P('M-44 -81L-8 -55L-25 -31L27 -7','none','#6E6857',4))+coins(509,584,6,1.0,6)+person(861,748,.93,'host','hold'),
()=>lodge()+person(320,749,.98,'case','draw',true)+book(310,630,.56,true)+pencil(405,635,.65,-35)+suitcase(716,746,.97,false,true)+belt(662,650,.8)+pouch(597,587,.66)+coin(661,581,1.0),
()=>lodge()+person(309,748,.97,'case','right')+suitcase(713,746,.96,false,false)+person(882,748,.92,'maker','left')+coins(494,550,100,.78,10)+letter(397,596,.6,0,'结束出租')+G(431,609,.8,R(-24,-17,48,34,paper,3)+label(0,5,'出租',15)),
()=>lodge()+person(473,747,1,'case','placePine')+suitcase(709,746,.96,true,false,0,pine(-67,-146,.47))+E(642,614,8,8,'#D5B591'),
()=>lodge()+person(339,748,.98,'case','read',true)+book(339,623,.64,true)+suitcase(715,746,.96,true,false,0,pine(0,-147,.49))+E(568,594,12,8,'#DDE1D1')+bag(189,726,.55)+mug(609,583,.5)
][i]();}
const ball=(x,y,s=1)=>G(x,y,s,E(0,0,28,28,'#B87B6C')+P('M-23 -15Q-1 -27 21 -13','none','#D5A08A',3));
const bell=(x,y,s=1)=>G(x,y,s,P('M-16 8Q-17 -28 0 -29Q17 -28 16 8Z','#C8B07B')+E(0,8,20,6,'#B7A16F')+E(0,15,5,6,'#887E63'));
function snowDog(x,y,s=1,collar=false,pose='stand',blue=0){let a=E(0,0,119,12,'#9BB9B8','opacity=".2"')+P('M82 -92Q135 -145 142 -99Q133 -64 108 -61',paper);const lie=pose==='lie',raise=pose==='raise';a+=P(lie?'M-60 -35L-103 -12M-22 -35L-52 -12M29 -35L57 -12M71 -35L98 -12':(raise?'M-62 -62L-109 -57M-23 -62L-23 -13M26 -62L26 -13M67 -62L67 -13':'M-62 -62L-62 -13M-23 -62L-23 -13M26 -62L26 -13M67 -62L67 -13'),'none',paper,22)+E(lie?-103:raise?-109:-62,raise?-57:-9,26,12,paper)+E(lie?-52:-23,-9,20,11,paper)+E(lie?57:26,-9,20,11,paper)+E(lie?98:67,-9,20,11,paper)+E(20,lie?-52:-87,95,lie?46:66,paper);const hy=lie?-68:-125;a+=E(-67,hy,47,51,paper)+P(`M-104 ${hy-25}L-113 ${hy-85}Q-76 ${hy-68} -78 ${hy-32}Z`,blue===3?'#B5AFBF':blue===1||blue===3?'#B5AFBF':blue===2?'#A9C5D1':'#CDDCD8','none',0,'opacity=".8"')+P(`M-60 ${hy-36}L-42 ${hy-87}Q-17 ${hy-48} -42 ${hy-22}Z`,blue===3?'#B5AFBF':blue===2?'#A9C5D1':'#CDDCD8')+E(-83,hy-3,4,5,'#728F9B')+E(-57,hy-3,4,5,'#728F9B')+E(-88,hy+20,10,7,'#8EABA9')+P(`M-79 ${hy+29}q12 10 23 0`,'none','#9FAF9E',2);if(collar)a+=P(`M-99 ${hy+38}Q-58 ${hy+61} -31 ${hy+25}`,'none','#A4A381',11)+bell(-62,hy+59,.5);return G(x,y,s,a);}
const paw=(x,y,s=1)=>G(x,y,s,E(0,0,13,10,'#A7BFC0')+[-12,-4,5,13].map((xx,j)=>E(xx,-13-j%2*3,4,5,'#A7BFC0')).join(''));
const pawTile=(x,y,s=1)=>G(x,y,s,P('M-53 -40L51 -37L49 41L-48 42Z','#C6AA82')+G(0,3,1,paw(0,0,1.6)));
const snowGarden=(shadow=false)=>R(0,0,1000,800,'#C4D6D2',0)+cloud(704,139,.98)+P('M0 519Q504 439 1000 523L1000 800L0 800Z','#E5E6D5')+R(75,413,289,166,'#BBC7BE',10)+R(66,406,307,22,'#E8E8D8',10)+bench(715,638,1.0)+[805,892].map(x=>P(`M${x} 566L${x-2} 264M${x-1} 379L${x-63} 313M${x} 407L${x+44} 344`,'none','#929F8A',12)).join('')+(shadow?P('M833 572L582 782M846 631L957 752M704 670L619 631M691 687L774 724','none','#ADBFD0',17):'');
const snowBag=(x,y,s=1)=>bag(x,y,s)+pawTile(x+3*s,y-37*s,.55*s);
function story434(i,c){if(c)return snowGarden(true)+person(352,748,1,'snow','hold',true)+snowDog(677,752,.92,false,'lie',1);return [
()=>snowGarden()+person(386,748,1,'snow','hold',false,true,true)+R(609,610,214,17,'#E8E8D8',7),
()=>room()+win(766,284,1,true)+R(485,484,325,152,wood,8)+R(502,529,290,85,'#CCBB98',4)+person(333,748,1,'snow','read')+pawTile(333,621,.7),
()=>snowGarden()+[[-81,-4],[-28,19],[30,-4],[81,19]].map(([x,y])=>paw(666+x,734+y,.75)).join('')+snowDog(684,732,.9,false)+person(355,748,.98,'snow','read',true)+pawTile(355,624,.6),
()=>snowGarden()+person(343,748,1,'snow','right')+snowDog(656,751,.9,false,'lie')+ball(807,737,.75)+E(746,746,18,6,'#B2C6C5'),
()=>snowGarden()+person(394,748,.97,'snow','down',true)+snowDog(676,750,.95,true,'lie')+ball(836,734,.68),
()=>snowGarden(true)+person(385,748,.98,'snow','hold')+snowDog(676,750,.92,true)+ball(813,734,.69),
()=>snowGarden()+person(379,748,.98,'snow','hold',true,true,true)+snowDog(685,751,.93,true)+ball(442,731,.74)+P('M398 532Q390 543 398 547Q406 543 398 532Z','#B4CED1'),
()=>snowGarden(true)+person(365,748,.98,'snow','hold',true)+snowDog(675,751,.95,true)+ball(595,743,.65),
()=>snowGarden()+person(421,748,1,'snow','unclip',true)+snowDog(675,749,.95,false)+bell(548,623,.6)+P('M528 617Q540 602 557 613','none','#A4A381',8)+ball(801,735,.65),
()=>snowGarden()+bench(365,711,.69)+person(364,748,.97,'snow','hold',true)+bell(366,632,.55)+ball(476,741,.65)+snowDog(753,752,.9,false,'lie'),
()=>snowGarden(true)+person(334,748,.99,'snow','right')+snowBag(327,704,.58)+snowDog(688,751,.95,false),
()=>snowGarden(true)+person(365,749,.98,'snow','down',true)+snowDog(683,750,.96,false,'lie',2),
()=>snowGarden(true)+person(314,748,1,'snow','point')+snowBag(315,704,.57)+snowDog(681,749,.98,false,'stand',1),
()=>snowGarden(true)+person(353,748,.98,'snow','hold',true)+snowBag(354,673,.57)+snowDog(714,750,.96,false,'lie',1),
()=>snowGarden(true)+person(716,678,.95,'snow','hold',true)+snowBag(839,703,.53)+snowDog(559,749,.82,false,'lie',1),
()=>snowGarden(true)+P('M578 742L862 694','none','#B5AFBF',33)+person(324,748,.98,'snow','right')+snowDog(706,747,.95,false,'raise',3)+[0,1,2,3].map(j=>paw(499+j*38,757+j%2*10,.52)).join('')
][i]();}
const mailBag=(x,y,s=1,open=false,letters=0)=>G(x,y,s,R(-56,-52,112,94,'#819FAE',11)+(open?P('M-57 -51L-44 -91L44 -91L57 -51Z','#A4B9BF'):R(-58,-59,116,37,'#91ABB7',7))+[-27,27].map(xx=>R(xx-8,-31,16,26,'#C1AE80',3)).join('')+(letters?Array.from({length:letters},(_,j)=>letter(-20+j*20,-51-j%2*5,.32)).join(''):''));
function whale(x,y,s=1,tail=false,badge=false,bags=true){let a=P(tail?'M139 -57Q234 -28 219 -125Q173 -153 159 -98L183 -82Q199 -106 204 -83Q217 -49 152 -76Z':'M131 -72L203 -135Q224 -152 224 -123L216 -87Q263 -65 249 -44L199 -54L141 -45Z',paper)+E(0,-73,159,86,paper)+E(-76,-63,63,38,'#DBE1D2')+E(-114,-95,6,7,ink)+P('M-145 -47Q-112 -29 -86 -47','none','#8E9E8D',3)+P('M-4 -28Q24 20 58 -1Q44 -34 20 -50Z','#D4DDD0')+[-121,-108,-94].map((xx,j)=>E(xx,-77+j%2*7,3.5,4,'#B0BCAF')).join('');if(bags)a+=line(80,-139,97,-42,'#8EA5A7',5)+mailBag(86,-57,.78);if(badge)a+=G(-73,-20,.62,R(-36,-24,72,48,'#C4AE7F',4)+label(0,-4,'邮差',17)+label(0,15,'阿渡',16));return G(x,y,s,a);}
const rail=(which='fork')=>which==='fork'?P('M13 736Q268 645 492 585Q630 464 974 411M492 585Q711 681 987 651','none','#C6D7D3',17):P('M0 697Q427 546 1000 701','none','#C6D7D3',17);
const sky=()=>R(0,0,1000,800,'#B9D1CC',0)+cloud(143,182,1)+cloud(818,180,1.1)+cloud(496,374,.5);
function station(x,y,s=1,name='榛子',curtain=false){return G(x,y,s,R(-101,-192,202,184,'#C6C5A2',14)+P('M-126 -191L0 -277L126 -191Z',name==='白帆'?'#E0E2CB':'#9AB29C')+R(-40,-122,80,114,name==='榛子'?'#93AD91':'#A9C2BA',16)+R(-90,-168,180,31,paper,5)+label(0,-147,name+'站',21)+R(58,-85,44,51,'#9B9580',4)+line(66,-73,95,-73,ink,4)+R(-140,-6,280,22,paper,7)+(curtain?P('M-41 -122L41 -122L41 -68L22 -79L0 -69L-22 -80L-41 -68Z','#B49BA1'):'')+line(-141,11,-141,65,wood,8)+line(141,11,141,65,wood,8));}
const postOffice=()=>room()+R(75,155,588,370,'#A5C4BD',28)+R(95,175,548,330,'#C3D7CC',20)+cloud(323,274,.9)+R(62,519,614,24,wood,5)+table(706,643,1.1)+R(65,544,11,143,wood,4)+R(652,544,11,143,wood,4);
const modelHouse=(x,y,s=1,done=false)=>G(x,y,s,R(-67,-82,134,84,'#C3AD86',6)+P('M-84 -82L0 -141L84 -82Z','#8FA88F')+R(-46,-59,35,44,'#AAC4BA',4)+R(16,-59,35,44,'#AAC4BA',4)+line(-30,-59,-30,-15,paper,3)+(done?line(33,-59,33,-15,paper,3):P('M18 -61L53 -46L41 -10L7 -25Z','none',wood,5)));
const riding=(x=514,y=676,s=.95,p='right',curl=false,badge=true,bags=true)=>whale(x,y,s,curl,badge,bags)+person(x-12*s,y-137*s,.59*s,'whale',p,true);
function story435(i,c){if(c)return sky()+rail()+station(822,401,.6,'榛子')+whale(511,649,1.12,false,true)+person(240,748,.91,'whale','hold');return [
()=>postOffice()+person(774,748,.98,'whale','hold')+mailBag(723,603,.67,true)+whale(387,548,.85,false,false),
()=>sky()+R(120,654,765,65,paper,12)+person(333,748,.94,'whale','right')+whale(660,644,.9,false,false)+[0,1,2].map(j=>letter(474+j*65,690,.5)).join(''),
()=>sky()+rail()+station(789,377,.56,'榛子')+station(844,618,.46,'白帆')+riding(505,644,.99,'left',false,false),
()=>sky()+rail('single')+station(790,534,.71,'白帆')+riding(394,666,.97,'right',false,false)+letter(847,480,.36),
()=>postOffice()+person(779,748,.98,'whale','hold')+whale(383,548,.85,false,true)+letter(690,605,.6,0,'回执'),
()=>sky()+rail()+station(789,377,.56,'榛子')+station(844,618,.46,'白帆')+E(360,659,172,45,'#CFDCD1')+riding(457,645,1,'hold',true),
()=>sky()+rail()+E(360,659,172,45,'#CFDCD1')+riding(459,647,1,'hold',true)+whale(849,315,.28,false,true),
()=>sky()+rail()+station(789,377,.56,'榛子')+station(844,618,.46,'白帆')+riding(482,644,1,'hold',false),
()=>sky()+rail('single')+station(211,541,.8,'榛子')+riding(570,661,.96,'hold',false,true,false)+mailBag(652,606,.75,true,2)+R(264,586,143,14,wood,4)+line(335,600,335,659,wood,8)+letter(330,563,.63,0,'榛子站'),
()=>postOffice()+person(775,748,.98,'whale','draw')+whale(384,548,.85,false,true)+modelHouse(746,600,.55)+book(625,603,.5,true)+pencil(859,631,.61,-32),
()=>sky()+rail('single')+station(791,514,.75,'松果')+riding(398,660,.95,'hold',true)+P('M366 718Q301 772 267 709','none','#879E97',3)+arrow(269,708,1.1,-100),
()=>sky()+rail('single')+station(242,538,.8,'白帆')+bench(271,683,.65)+person(271,721,.84,'whale','hold',true)+whale(655,646,.98,false,true)+letter(740,561,.39,0,'回执'),
()=>postOffice()+person(779,748,.98,'whale','hold')+whale(385,548,.85,false,true),
()=>postOffice()+person(839,748,.98,'whale','left',true)+modelHouse(690,607,.8)+mailBag(554,603,.51)+R(743,588,24,25,paper,4),
()=>postOffice()+person(779,748,.98,'whale','hold')+whale(385,548,.85,false,true)+[0,1,2].map(j=>letter(704+j*57,605,.44,0,'回执')).join(''),
()=>postOffice()+person(779,748,.98,'whale','hold')+whale(385,548,.85,false,true)+modelHouse(188,520,.69,true)+P('M258 508Q237 499 211 489L173 489Q147 489 127 477','none','#EBEDDC',7)
][i]();}

const scenes={'expansion-0431':story431,'expansion-0432':story432,'expansion-0433':story433,'expansion-0434':story434,'expansion-0435':story435};
export function eleventhOlderFirstArtwork(story,index,cover=false){if(!Object.hasOwn(scenes,story?.id)||story.status!=='text-ready'||story.ageBand!=='9-10'||!Array.isArray(story.pages)||story.pages.length!==16||story.provenance?.review!=='full-text-reviewed'||typeof story.title!=='string'||!story.title.trim()||story.pages.some((p,j)=>p?.id!==`p${String(j+1).padStart(2,'0')}`||typeof p.text!=='string'||!p.text.trim()||typeof p.scene?.action!=='string'||!p.scene.action.trim())||!Number.isInteger(index)||index<0||index>=16||typeof cover!=='boolean')throw Error('Unsupported reviewed eleventh older first story');return svg(scenes[story.id](index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

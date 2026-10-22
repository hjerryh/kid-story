// Page-specific original vector storyboards for the first middle-age batch.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,table,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384A48';
const arm=(x,y,dx,dy,c)=>P(`M${x} ${y} Q${x+dx*.3} ${y+dy*.1-12} ${x+dx} ${y+dy}`,'none',c,22);
function animal(x,y,s=1,kind='hedgehog',pose='hold',flip=false){
 const coat={hedgehog:'#D5B78B',panda:'#B57D56',badger:'#87908A',otter:'#89684F',squirrel:'#B47A51',mole:'#595F5C'}[kind];
 const cloth={hedgehog:'#C28D59',panda:'#7C9A78',badger:'#C3A16D',otter:'#86A074',squirrel:'#82956E',mole:'#AEA1B4'}[kind];
 let a=E(0,0,90,12,'#3B5446','opacity=".15"');
 if(kind==='hedgehog')a+=P('M-58 -23 L-103 -71 L-88 -85 L-116 -127 L-98 -137 L-116 -178 L-95 -187 L-99 -231 L-73 -239 L-63 -275 L-37 -263 L-12 -289 L10 -265 L39 -279 L54 -249 L80 -244 L83 -205 L104 -187 L86 -149 L100 -116 L75 -86 L64 -34Z','#98714F');
 if(kind==='panda')a+=G(48,-55,.95,P('M0 0 Q101 -17 93 -139 Q68 -198 30 -169 Q16 -146 45 -115 Q62 -63 0 -57Z','#B57D56')+P('M48 -67 L89 -59 M51 -100 L95 -97 M35 -139 L82 -149','none','#D8AA72',19));
 if(kind==='squirrel')a+=P('M34 -48 Q147 -75 140 -201 Q139 -288 85 -281 Q34 -267 74 -225 Q103 -203 84 -176 Q53 -160 39 -114Z','#AC724D')+P('M111 -246 Q131 -232 132 -209','none','#F1E5C9',24);
 if(kind==='otter')a+=P('M46 -48 Q145 -4 136 24 Q86 22 39 -10Z','#89684F');
 a+=E(-29,-11,32,19,coat)+E(30,-11,32,19,coat)+E(0,-108,62,101,coat);
 a+=P('M-47 -181 L47 -181 L57 -44 Q0 -23 -58 -44Z',cloth);
 if(kind==='badger')a+=P('M-57 -179 L-33 -190 L-19 -75 L19 -75 L34 -190 L56 -180 L54 -66 Q0 -44 -53 -66Z','#6F94A1');
 if(['otter','squirrel'].includes(kind))a+=R(-40,-183,14,69,cloth,3)+R(26,-183,14,69,cloth,3)+R(-26,-111,53,39,'#A3B58D',7);
 if(kind==='panda')a+=P('M-37 -157 L37 -157 L41 -47 Q0 -35 -43 -47Z','#E7DDC2')+leaf(-48,-269,.24,'#9AAF7C',-45);
 a+=E(-47,-260,22,24,coat)+E(48,-260,22,24,coat)+E(0,-222,68,59,coat);
 if(kind==='hedgehog')a+=E(6,-217,61,49,'#EEE1BF');
 if(kind==='panda')a+=E(-37,-219,27,28,'#EEE1BF')+E(38,-219,27,28,'#EEE1BF')+E(0,-194,35,21,'#EEE1BF');
 if(kind==='badger')a+=P('M-37 -271 L-10 -245 L-15 -193 L-43 -209Z','#E6E5D1')+P('M36 -270 L10 -245 L16 -193 L44 -208Z','#E6E5D1')+R(-60,-272,122,15,'#B77964',5)+P('M49 -272 L86 -277 L67 -247Z','#B77964');
 a+=E(-24,-226,4,6,ink)+E(25,-226,4,6,ink)+E(0,-207,11,8,kind==='mole'?'#CCA39A':'#685C4C')+P(pose==='sad'?'M-12 -188 Q0 -197 12 -188':'M-12 -192 Q0 -181 12 -192','none','#876C53',2);
 if(['otter','panda'].includes(kind))a+=line(-36,-205,-62,-211,'#786B56',2)+line(35,-205,61,-211,'#786B56',2);
 if(kind==='hedgehog')a+=P('M-45 -181 Q0 -156 43 -179 L46 -160 Q0 -138 -47 -160Z','#CF9156')+R(31,-165,22,55,'#C58A51',6);
 if(kind==='squirrel')a+=line(-43,-180,42,-68,'#D1BE92',5)+book(44,-78,.38,false,'#C7B58D')+line(52,-265,65,-285,'#665C4F',5);
 if(kind==='otter')a+=line(-24,-179,5,-126,'#D3B991',3)+line(25,-179,5,-126,'#D3B991',3)+E(6,-121,13,10,'#B78D63');
 a+=pose==='point'?arm(45,-158,75,-21,coat):pose==='think'?arm(43,-156,-33,-42,coat):arm(45,-157,32,45,coat);
 a+=pose==='raise'?arm(-44,-157,-36,-98,coat):arm(-44,-157,25,48,coat);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function outdoors(night=false){return R(0,0,1000,800,night?'#314E55':'#D3DDC2',0)+cloud(182,177,1.2,night?'#506B67':'#E8E8CF')+P('M0 498 Q246 288 597 422 Q826 322 1000 402 L1000 800 L0 800Z',night?'#527262':'#A8BD95')+P('M0 618 Q530 427 1000 588 L1000 800 L0 800Z',night?'#69836A':'#BACAA2')+[80,167,836,932].map((x,i)=>grass(x,745+i%2*31,.8,night?'#8AA07C':'#8EA67D')).join('');}
function room(blue=false){return R(0,0,1000,800,blue?'#C0CFBC':'#D8CFAD',0)+R(0,641,1000,159,'#AEA88B',0)+R(635,80,274,339,'#97AC96',133)+R(654,99,235,300,blue?'#3A5E60':'#C2D8C4',112)+line(771,102,771,396,'#D9CAA6',10)+line(656,262,887,262,'#D9CAA6',10)+R(65,196,370,17,'#9E9475',5);}
function notes(x,y,s=1,c='#D6BB77'){return G(x,y,s,[-1,0,1].map((j)=>line(j*42,-27-j%2*16,j*42,-67-j%2*16,c,4)+E(j*42-7,-25-j%2*16,10,7,c)).join(''));}
function littleFly(x,y,s=1,lit=true){return G(x,y,s,(lit?glow(0,0,32):'')+E(-5,-8,6,11,'#C5D6BD')+E(6,-8,6,11,'#C5D6BD')+E(0,-3,5,10,'#515B49')+E(0,4,5,7,'#D8DF91')+E(0,-12,4,4,'#C29464'));}
function lights(strong=false){return [[88,495],[178,571],[272,467],[463,422],[601,470],[722,411],[892,524],[783,607]].map(([x,y],i)=>littleFly(x,y,.6+(i%3)*.15,!strong)).join('');}
function mushroomLamp(x,y,s=1,on=true){return G(x,y,s,(on?glow(0,-75,180):'')+R(-17,-77,34,83,'#C3B895',9)+P('M-73 -65 Q-71 -166 0 -168 Q74 -165 75 -65Z',on?'#EBD399':'#AA9D7C')+E(-27,-108,11,9,'#F0DDB5')+E(26,-124,11,9,'#F0DDB5')+E(29,-84,9,8,'#F0DDB5'));}
function leafHouse(x,y,s=1){return G(x,y,s,P('M-71 9 Q-90 -120 9 -121 Q85 -92 75 10Z','#A6BA83','#809A6C',3)+R(-18,-58,42,68,'#657F61',20)+P('M-60 2 Q-4 -17 60 2','none','#BCCD96',14)+E(21,-93,7,10,'#DCE5CF'));}
function picnic(x,y,s=1){return G(x,y,s,R(-156,-51,312,102,'#D7C5A0',8)+[-100,-50,0,50,100].map(xx=>line(xx,-50,xx,50,'#B19C7B',3)).join('')+[-25,0,25].map(yy=>line(-156,yy,156,yy,'#B19C7B',3)).join('')+R(-51,-81,102,57,'#E6D9B8',7)+E(0,-83,51,16,'#D0AC78')+E(-21,-89,8,5,'#A9865C')+E(16,-82,8,5,'#A9865C')+R(83,-114,45,74,'#9BB8A6',16));}
function hedgeScene(i,cover){let a=outdoors(true);if(cover)return a+lights()+animal(418,743,1.48,'hedgehog','point')+littleFly(681,433,2)+picnic(718,707,.8);
 if(i===0)return a+lights()+rock(376,740,1)+animal(359,698,1.3,'hedgehog')+littleFly(602,465,1.5);
 if(i===1)return a+animal(392,744,1.45,'hedgehog','raise')+P('M569 415 C676 317 823 439 698 516 C611 551 554 483 569 415','none','#B6D68F',4,'stroke-dasharray="8 16"')+littleFly(692,339,1.7);
 if(i===2)return a+tree(840,606,.98)+R(790,520,72,84,'#8A946F',25)+animal(361,746,1.4,'hedgehog','point')+littleFly(590,456,1.6)+star(650,435,.65,'#C1D88F')+star(676,436,.65,'#C1D88F');
 if(i===3)return outdoors()+animal(350,749,1.4,'hedgehog')+table(603,633,1.1)+leafHouse(605,579,1.25)+leaf(807,650,.6,'#9EBA80',40);
 if(i===4)return a+animal(420,755,1.42,'hedgehog','sad')+leafHouse(434,617,.74)+littleFly(798,413,.7)+line(172,662,245,631,'#8DA486',4);
 if(i===5)return a+animal(328,746,1.38,'hedgehog','point')+mushroomLamp(619,655,1.4)+rock(798,687,.72);
 if(i===6)return a+mushroomLamp(300,698,1.4)+lights(true)+animal(554,753,1.42,'hedgehog','think')+leaf(803,582,.7,'#849A76',-20)+littleFly(804,536,.8);
 if(i===7)return a+lights()+animal(396,750,1.2,'hedgehog')+mushroomLamp(213,728,.8,false)+littleFly(658,474,1.4);
 if(i===8)return a+lights()+animal(396,750,1.5,'hedgehog','think')+littleFly(656,454,1.5)+littleFly(751,342,1.1)+littleFly(832,451,1.2);
 if(i===9)return a+animal(436,752,1.55,'hedgehog','raise')+P('M334 308 Q435 234 570 332 Q631 412 540 468','none','#C0D79A',4,'stroke-dasharray="8 14"')+littleFly(564,329,1.7);
 if(i===10)return a+lights()+picnic(564,703,1.5)+animal(320,738,1.12,'hedgehog')+littleFly(643,570,1.5);
 if(i===11)return a+lights()+picnic(645,739,1)+animal(362,750,1.38,'hedgehog')+R(365,586,65,35,'#D4B581',8)+littleFly(745,415,1.3)+P('M582 511 Q656 433 724 414','none','#B6CF91',3,'stroke-dasharray="4 10"');
 throw Error('Missing hedgehog scene');}
function bamboo(){return [65,132,216,903,965].map((x,j)=>R(x,26,16,597,'#849C71',7)+[109,231,363,493].map(y=>line(x-4,y,x+20,y,'#ADB58A',5)+leaf(x+12,y,.45,'#9BB582',j%2?55:-55)).join('')).join('');}
function cup(x,y,s=1,cracked=false){return G(x,y,s,R(-35,-69,70,75,'#C3B27C',8)+E(0,-67,35,12,'#D9C795')+E(0,-65,27,7,'#8B9F88')+(cracked?P('M8 -66 L-3 -44 L7 -27 L-7 4','none','#8A795B',3):'')+line(-22,-51,-22,-8,'#D6C18D',3));}
function tray(x,y,s=1){return G(x,y,s,E(0,0,101,26,'#A5916B')+E(0,-6,92,22,'#D3BC8C'));}
function chick(x,y,s=1){return G(x,y,s,E(0,-56,40,55,'#D6D8C9')+E(7,-112,35,35,'#454E48')+E(15,-102,27,21,'#E7E6D4')+E(22,-114,4,5,ink)+P('M39 -108 L70 -101 L40 -93Z','#B6A078')+R(-27,-83,62,15,'#D9C58F',6)+R(16,-80,15,37,'#CDBB87',4)+E(-18,-8,16,8,'#9C9173')+E(20,-8,16,8,'#9C9173'));}
function teaScene(i,cover){let a=room(i>=6);if(cover)return a+bamboo()+table(560,646,1.2)+tray(561,612,1.1)+cup(555,596,1.3,true)+animal(286,751,1.3,'panda','point')+chick(797,655,1.4)+notes(610,474,1.1);
 if(i===0)return a+bamboo()+cup(302,181,.8)+table(546,650,.9)+animal(413,753,1.3,'panda')+animal(796,750,1.2,'panda','think',true)+E(513,621,77,26,'#97B5A6')+cup(515,611,.7);
 if(i===1)return a+animal(336,753,1.4,'panda','point')+animal(739,753,1.4,'panda','hold',true)+R(536,509,74,70,'#D2C493',5)+leaf(572,565,.3,'#8B9E73');
 if(i===2)return a+table(602,658,1.25)+animal(345,752,1.5,'panda','raise')+G(583,609,1,cup(0,0,1,true),26)+R(747,603,90,28,'#E3DBC0',7)+line(564,494,590,540,'#ADAC91',4);
 if(i===3)return a+table(655,652,1.3)+animal(398,752,1.5,'panda','think')+cup(674,614,1.3,true)+E(682,646,5,8,'#9DBAB1')+notes(769,505,.7);
 if(i===4)return a+animal(304,752,1.4,'panda','sad')+animal(809,754,1.4,'panda','point',true)+table(558,650,1)+tray(556,618,.9)+cup(556,601,.9,true)+P('M509 612 Q437 565 432 634 Q446 668 500 640','#DDD5BA')+R(624,608,27,23,'#B3AE8B',6);
 if(i===5)return outdoors()+bamboo()+table(558,651,1.15)+animal(294,751,1.35,'panda')+animal(818,751,1.4,'panda','point',true)+cup(579,613,1.2)+tray(411,614,.7)+cup(411,602,.7,true);
 if(i===6)return a+R(94,157,240,475,'#939275',12)+R(116,186,174,400,'#A7AA86',8)+animal(561,751,1.5,'panda','sad')+cup(494,602,.82,true)+cup(633,602,.82);
 if(i===7)return a+table(571,655,1.2)+animal(316,754,1.37,'panda')+tray(539,610,.9)+cup(538,592,.9,true)+cup(747,613,.9)+chick(819,603,1.18)+[690,730,810,855].map(x=>line(x,139,x-8,173,'#97B5AE',3)).join('');
 if(i===8)return a+table(627,657,1.4)+animal(338,752,1.4,'panda','sad')+tray(596,622,1.1)+cup(592,600,1.3,true)+E(586,615,5,7,'#96B9B0')+notes(589,466,1.05)+chick(850,599,1.1)+cup(790,619,.7);
 if(i===9)return a+animal(335,752,1.4,'panda','point')+chick(813,600,1.5)+E(595,704,75,29,'#DADBC4')+E(594,691,70,21,'#A6C4B5')+line(595,292,595,307,'#95B7AB',5)+E(594,481,6,9,'#95B7AB');
 if(i===10)return a+table(609,654,1.2)+animal(347,753,1.45,'panda','raise')+chick(827,608,1.3)+cup(779,619,.8)+tray(551,623,.8)+cup(551,608,.9,true);
 if(i===11)return a+R(146,574,430,161,'#A59F7B',19)+animal(360,738,.95,'panda')+R(155,637,416,94,'#A7B79B',24)+tray(752,413,.77)+cup(752,397,.7,true)+cup(856,255,.65)+line(854,90,854,210,'#D6C69D',3);
 throw Error('Missing tea scene');}
function jar(x,y,s=1,shape='full',fired=false){let d=shape==='flat'?'M-79 -22 Q-99 14 0 20 Q97 16 80 -22 L-79 -22Z':shape==='crooked'?'M-58 -135 Q-110 -80 -58 12 Q13 34 82 12 Q114 -91 39 -135Z':'M-66 -190 Q-112 -133 -87 0 Q0 46 87 0 Q112 -133 66 -190Z';return G(x,y,s,P(d,fired?'#B78461':'#A69B7E','#8C826C',4)+E(shape==='crooked'?-10:0,shape==='flat'?-22:shape==='crooked'?-135:-190,shape==='flat'?79:64,18,'#C0AD87')+E(shape==='crooked'?-10:0,shape==='flat'?-22:shape==='crooked'?-135:-190,shape==='flat'?69:54,12,'#7C8874')+(shape==='full'?[-160,-130,-100,-70].map(yy=>P(`M-80 ${yy} Q0 ${yy+16} 81 ${yy}`,'none',fired?'#CBA47B':'#BDB092',3)).join(''):''));}
function turtle(x,y,s=1){return G(x,y,s,E(0,-85,73,91,'#7B8B67')+E(-34,-12,32,16,'#A5B18A')+E(38,-12,32,16,'#A5B18A')+E(27,-179,51,48,'#AFBD96')+E(48,-185,4,6,ink)+E(30,-223,86,12,'#D2C18F')+R(-9,-265,83,41,'#C3B481',12)+arm(56,-123,45,17,'#AFBD96'));}
function wheel(x,y,s=1){return G(x,y,s,R(-21,-15,42,110,'#8E8D72',6)+E(0,-18,120,24,'#AC9C79')+E(0,64,104,19,'#B8A783'));}
function potsScene(i,cover){let a=outdoors();if(cover)return a+animal(282,751,1.28,'badger','point')+animal(766,751,1.28,'otter')+jar(532,720,1.35,'full',true)+notes(510,414,1.4);
 if(i===0)return a+P('M650 398 Q509 588 1000 660 L1000 800 L633 800 Q577 591 650 398Z','#94B8AF')+animal(326,748,1.4,'badger')+animal(723,748,1.4,'otter')+E(352,601,31,22,'#A69B7E')+E(750,600,31,22,'#A69B7E');
 if(i===1)return a+animal(261,755,1.2,'badger','point')+animal(510,750,1.16,'otter','raise')+animal(811,749,1.3,'mole')+jar(814,602,.7,'full',true)+P('M817 466 L800 512 L818 553','none','#725F4B',4);
 if(i===2)return a+animal(284,751,1.4,'badger','point')+animal(760,753,1.4,'otter','point',true)+wheel(555,668,1)+P('M320 514 Q384 479 414 543','none','#B6A78B',22);
 if(i===3)return a+animal(365,752,1.43,'otter','sad')+wheel(650,658,1.3)+jar(649,615,1.3,'flat')+P('M561 597 Q505 487 593 456 Q677 534 748 547 L741 595Z','#A69B7E')+notes(751,455,.8);
 if(i===4)return a+animal(399,750,1.4,'badger','sad')+jar(660,717,1.16,'crooked')+P('M602 754 Q652 736 700 765 M727 740 Q786 711 822 747','none','#B6A78B',18);
 if(i===5)return a+animal(289,753,1.25,'badger','point')+animal(761,753,1.25,'otter','point',true)+jar(415,723,.8,'crooked')+jar(631,720,1,'flat')+notes(458,529,.7)+notes(692,593,.8,'#8FACA1');
 if(i===6)return a+animal(241,752,1.18,'badger','point')+animal(526,750,1.17,'otter','point')+turtle(810,740,1.18)+jar(501,729,1.05,'flat')+jar(343,748,.6,'crooked');
 if(i===7)return a+wheel(550,669,1.2)+jar(551,625,.9)+animal(289,752,1.23,'otter','point')+R(720,686,121,65,'#A69C7A',8)+animal(768,695,1.2,'badger','point',true)+E(659,675,32,13,'#B1A184')+P('M653 542 Q698 520 724 555','none','#B6A78B',15);
 if(i===8)return outdoors(true)+P('M609 627 L617 381 Q770 210 919 381 L928 627Z','#927F64')+R(705,444,121,183,'#514F43',55)+glow(765,560,82)+turtle(832,730,1.03)+animal(219,753,1,'badger')+animal(442,753,1,'otter')+R(165,613,112,89,'#A8B89B',13)+R(387,613,112,89,'#ACB7AA',13);
 if(i===9)return a+R(423,687,261,26,'#A69370',7)+E(460,744,34,34,'#8D896C')+E(651,744,34,34,'#8D896C')+line(439,711,664,711,'#A69370',12)+jar(551,674,1.1,'full',true)+animal(277,752,1.25,'badger','point')+animal(795,753,1.2,'otter','point',true);
 if(i===10)return a+animal(273,750,1.15,'mole','point')+jar(511,724,1.3,'full',true)+animal(759,750,1.1,'badger')+animal(908,750,.95,'otter')+leaf(811,443,1.3,'#90A775',72)+notes(468,429,.9)+notes(598,401,.85,'#7E9F91')+[100,230,410,583,697,882].map(x=>line(x,138,x-16,177,'#88B2AA',4)).join('');
 if(i===11)return a+jar(534,739,1.35,'full',true)+animal(280,751,1.3,'badger','raise')+animal(771,751,1.3,'otter','point')+animal(912,590,.6,'mole')+[60,140,852,941].map(x=>leaf(x,750,.7,'#829E74',x%3?25:-25)).join('');
 throw Error('Missing pottery scene');}
function owl(x,y,s=1){return G(x,y,s,E(0,-85,71,93,'#8F9A8A')+E(0,-190,82,68,'#9DA798')+E(-32,-194,32,34,'#D7D8BF')+E(33,-194,32,34,'#D7D8BF')+E(-31,-194,7,9,ink)+E(32,-194,7,9,ink)+P('M-9 -168 L10 -168 L0 -152Z','#C1A979')+E(-30,-8,27,10,'#B3A17C')+E(31,-8,27,10,'#B3A17C'));}
function reeds(x,y,s=1){return G(x,y,s,[[-43,92],[-20,120],[4,149],[28,182]].map(([xx,len])=>R(xx,-len,17,len,'#C2B27C',5)+line(xx,-12,xx+16,-12,'#8E986F',3)).join(''));}
function drum(x,y,s=1){return G(x,y,s,R(-62,-81,124,81,'#B5916D',12)+E(0,-82,62,24,'#DFD2AE')+[-42,-14,14,42].map(xx=>line(xx,-57,-xx,0,'#D8BF90',3)).join(''));}
function hollowTree(){return P('M596 800 Q615 533 596 62 L741 39 Q708 532 804 800Z','#A79B79')+P('M637 345 Q524 252 485 154 M711 278 Q809 198 852 102','none','#A79B79',41)+[[660,273],[684,416],[647,553]].map(([x,y])=>E(x,y,34,48,'#636E5B')).join('')+P('M618 99 Q692 211 621 387 M714 82 Q660 236 746 529','none','#BCAD85',5);}
function feather(x,y,s=1,wind=false){return G(x,y,s,line(0,-106,wind?48:0,-30,'#9C9979',3)+G(wind?47:0,0,1,P('M0 29 Q-37 -14 3 -44 Q37 -11 0 29Z','#E2DFCB')+line(0,-36,0,41,'#AEBCA2',3),wind?-50:0));}
function musicScene(i,cover){let a=room();if(cover)return outdoors()+hollowTree()+animal(353,754,1.5,'squirrel','point')+reeds(423,603,.77)+notes(726,398,1.3);
 if(i===0)return a+animal(758,705,1.1,'squirrel')+book(771,574,.7,true,'#C5B88D')+drum(275,680,1.4)+reeds(449,672,1.1)+owl(194,641,.8);
 if(i===1)return a+animal(323,751,1.4,'squirrel','think')+owl(787,749,1.3)+notes(570,387,1.4)+drum(593,692,.8);
 if(i===2)return a+animal(405,752,1.45,'squirrel','think')+drum(678,697,1.4)+table(201,647,.85)+book(204,605,.95,true,'#C5B88D');
 if(i===3)return a+animal(389,751,1.4,'squirrel','point')+drum(641,671,1.2)+reeds(792,720,.9)+book(242,715,.85,true,'#C5B88D')+line(216,682,236,702,'#9B8665',3)+line(236,682,216,702,'#9B8665',3);
 if(i===4)return a+R(474,647,276,123,'#626F58',13)+P('M474 647 L545 531 L797 560 L749 648Z','#C3B28D')+animal(331,749,1.17,'squirrel','think')+E(621,706,67,38,'#A3B590')+E(664,688,22,22,'#A3B590')+P('M654 682 Q666 691 676 680','none','#5D785D',3);
 if(i===5)return a+feather(759,319,1.1,true)+animal(490,751,1.5,'squirrel','point')+notes(845,468,.8);
 if(i===6)return outdoors()+hollowTree()+animal(343,752,1.5,'squirrel','point')+notes(791,407,.7)+rock(213,745,.7);
 if(i===7)return outdoors()+hollowTree()+animal(595,635,1.15,'squirrel','point')+E(676,412,15,11,'#B47A51')+book(431,701,.8,true,'#C5B88D');
 if(i===8)return outdoors()+hollowTree()+animal(384,711,1.3,'squirrel','think')+P('M744 680 Q871 582 1000 635 L1000 800 L722 800Z','#9BBEB0')+[809,854,918].map(x=>line(x,699,x+14,480,'#99AA7C',7)+E(x+14,487,12,46,'#BDA876')).join('');
 if(i===9)return a+animal(327,752,1.4,'squirrel')+owl(815,750,1.35)+table(564,653,1.1)+reeds(550,619,.8)+G(389,474,.8,R(-8,-76,16,153,'#C2B27C',5),48)+notes(466,432,.7);
 if(i===10)return room(true)+R(182,685,635,50,'#AE9B78',8)+animal(465,685,1.28,'squirrel')+G(510,424,.8,R(-8,-66,16,145,'#C2B27C',5),53)+owl(817,735,1)+[244,406,599].map((x,j)=>E(x,755,57,33,['#D7D9C0','#CDBBA1','#C7D5BC'][j])+E(x-22,734,23,22,'#E6D7B8')+P(`M${x-30} 732 Q${x-22} 737 ${x-15} 731`,'none','#8D896E',2)).join('');
 if(i===11)return room(true)+feather(759,321,1.1,true)+animal(416,750,1.47,'squirrel','point')+table(652,656,1)+book(636,614,.9,true,'#C5B88D')+reeds(796,648,.8)+notes(845,460,.8);
 throw Error('Missing music scene');}
const registry={'expansion-0018':hedgeScene,'expansion-0019':teaScene,'expansion-0020':potsScene,'expansion-0021':musicScene};
export function middleArtwork(story,index,cover=false){const render=registry[story.id];if(!render||story.pages.length!==12)throw Error(`Missing middle storyboard ${story.id}`);return svg(render(index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

export {animal,outdoors,room,notes,littleFly,lights,mushroomLamp,leafHouse,picnic,bamboo,cup,tray,chick,jar,turtle,wheel,owl,reeds,drum,hollowTree,feather};

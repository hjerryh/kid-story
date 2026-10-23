import {E,R,P,G,line,leaf,grass,flower,cloud,svg} from '../render-illustrations.mjs';
// Compositions authored after reading complete frozen manuscripts and editorial review.
const ink='#506358',cream='#EBE5D0',wood='#B79D75';
const eye=(x,y,closed=false)=>closed?P(`M${x-4} ${y} Q${x} ${y+5} ${x+4} ${y}`,'none',ink,2.5):E(x,y,3.5,4.5,ink);
const arm=(x,y,tx,ty,c,w=14)=>P(`M${x} ${y} Q${(x+tx)/2} ${ty+12} ${tx} ${ty}`,'none',c,w)+E(tx,ty,w/2,w/2,c);
const hat=(x,y,s=1,r=0)=>G(x,y,s,P('M-53 0 Q-56 -45 -18 -45 Q-1 -70 28 -43 Q52 -40 51 0Z',cream)+E(0,1,61,10,'#D8D3BF'),r);
function animal(kind,x,y,s=1,o={}){
 const mole=kind==='mole',badger=kind==='badger',cat=kind==='cat'||kind==='civet',squirrel=kind==='squirrel',rabbit=kind==='rabbit',q=o.sit?35:0,hy=-205+q,c=mole?'#B3A58E':badger?'#AB9F8A':kind==='civet'?'#A69D89':squirrel?'#B38A6D':'#BBC2B6';let z=E(0,1,70,11,'#899780','opacity=".14"');
 if(!o.noTail){if(squirrel)z+=P('M25 -27 Q143 19 145 -119 Q146 -208 85 -180 Q42 -157 99 -125 Q127 -70 20 -62Z',c)+P('M106 -153 Q148 -95 77 -51','none','#D1AF85',6);else if(kind==='civet')z+=P('M29 -25 Q136 19 138 -64 Q123 -105 88 -75 Q112 -44 28 -55Z',c)+P('M63 -46 L64 -16 M90 -48 L102 -13 M116 -70 L134 -47','none','#788273',12);else if(!mole&&!badger&&!rabbit)z+=P('M29 -17 Q104 23 120 -31','none',c,7);}
 let fc=o.shoes?'#EAE3CE':c;
 if(o.chair)z+=R(-27,-32,20,65,c,8)+R(7,-32,20,65,c,8)+E(-24,34,25,11,fc)+E(24,34,25,11,fc);else z+=o.sit?E(-29,-9,29,13,fc)+E(29,-9,29,13,fc):R(-27,-57,20,46,c,7)+R(7,-57,20,46,c,7)+E(-24,-6,25,11,fc)+E(24,-6,25,11,fc);
 if(o.socks)z+=E(-29,o.chair?34:-9,29,13,'#DAD6BF')+E(29,o.chair?34:-9,29,13,'#DAD6BF')+line(-46,o.chair?33:-10,-15,o.chair?33:-10,'#94ACB4',5)+line(13,o.chair?33:-10,46,o.chair?33:-10,'#94ACB4',5);
 z+=E(0,-105+q,49,68,c);
 const cloth=o.old?'#B7A2BE':kind==='mouse'?'#B98597':squirrel?'#8FACB9':kind==='cat'?'#84A7B7':'#A4B593';
 z+=P(`M-35 ${-157+q} L35 ${-157+q} L${o.old||kind==='mouse'?54:43} ${-58+q} L${o.old||kind==='mouse'?-54:-43} ${-58+q}Z`,cloth);
 if(squirrel)z+=E(0,-120+q,24,28,'#E3D6B9')+R(-30,-168+q,12,38,cloth,4)+R(18,-168+q,12,38,cloth,4)+E(0,-85+q,19,18,'#789EAF');
 if(badger&&!o.old||mole&&o.overalls)z+=R(-32,-167+q,12,40,cloth,4)+R(20,-167+q,12,40,cloth,4)+R(-22,-102+q,44,28,'#8FA67F',5);
 if(cat)z+=P(`M-43 ${hy-23} L-48 ${hy-74} L-10 ${hy-39} M12 ${hy-39} L49 ${hy-74} L45 ${hy-22}Z`,c);else if(rabbit)z+=E(-24,hy-65,16,58,c)+E(24,hy-65,16,58,c)+E(-24,hy-68,7,38,'#C5AC9B')+E(24,hy-68,7,38,'#C5AC9B');else z+=E(-38,hy-28,23,23,c)+E(38,hy-28,23,23,c)+E(-38,hy-28,11,12,'#CEB9A3')+E(38,hy-28,11,12,'#CEB9A3');
 z+=E(0,hy,49,44,c);
 if(badger)z+=o.old?P(`M-11 ${hy-42} L11 ${hy-42} L25 ${hy+21} Q0 ${hy+38} -25 ${hy+21}Z`,cream):P(`M-35 ${hy-34} L-13 ${hy-40} L-8 ${hy+20} L-31 ${hy+16}Z M14 ${hy-40} L36 ${hy-34} L31 ${hy+16} L9 ${hy+20}Z`,'#6D7B70');
 if(cat||squirrel)z+=E(0,hy+23,30,19,cream);
 if(o.profile){z+=eye(17,hy-4,o.closed)+E(49,hy+10,mole?12:8,7,'#897E67')+P(`M22 ${hy+27} Q35 ${hy+34} 44 ${hy+24}`,'none','#8D806A',2.5);}else z+=eye(-17,hy-3,o.closed)+eye(17,hy-3,o.closed)+E(0,hy+14,mole?12:7,mole?9:5,'#897E67')+P(o.sad?`M-10 ${hy+32} Q0 ${hy+24} 10 ${hy+32}`:`M-10 ${hy+28} Q0 ${hy+36} 10 ${hy+28}`,'none','#8D806A',2.5);
 if(o.old)z+=E(-18,hy-3,15,15,'none','stroke="#8A9480" stroke-width="3"')+E(18,hy-3,15,15,'none','stroke="#8A9480" stroke-width="3"')+line(-3,hy-3,3,hy-3,'#8A9480',3);
 if(kind==='mouse')z+=blossom(41,hy-36,.48,cream);if(o.flower)z+=blossom(43,hy-42,.55,'#CFABB7');
 if(o.hat)z+=hat(0,hy-35,1);
 const poses={hold:[[-20,-108+q],[20,-108+q]],rest:[[-28,-68+q],[28,-68+q]],wide:[[-87,-130+q],[87,-130+q]],think:[[-28,-68+q],[25,hy+24]],wave:[[-29,-70+q],[76,-242+q]]},a=o.arms||poses[o.pose||'rest'];if(o.arms!==false)z+=arm(-35,-145+q,...a[0],c)+arm(35,-145+q,...a[1],c);
 return G(x,y,s,z,o.rotate||0);
}
const stool=(x,y,s=1)=>G(x,y,s,R(-34,-2,15,67,wood,4)+R(20,-2,15,67,wood,4)+E(0,-10,51,16,'#CFB58C'));
const cushion=(x,y,s=1,c='#D5C38A')=>G(x,y,s,E(0,-5,100,23,c)+P('M-78 -3 Q0 20 79 -3','none','#E4D6A5',3));
const cloth=(x,y,s=1,c='#91B1BE')=>G(x,y,s,P('M-84 -22 L83 -22 L100 29 L-100 29Z',c)+P('M-74 -9 Q0 5 73 -9','none','#CCD6CA',3));
function pot(x,y,s=1,flowers=false){return G(x,y,s,P('M-48 -58 L-36 16 L36 16 L48 -58Z','#B89D79')+E(0,-57,49,10,'#CDB28A')+(flowers?line(0,-56,0,-171,'#8EA87E',6)+leaf(-1,-104,.5,'#A3B78C',-52)+blossom(0,-177,1.1,'#B59BBC'):leaf(0,-61,.7,'#91AC7F',-42)+leaf(9,-59,.65,'#A0B98B',42)+leaf(-3,-90,.57,'#95AE7D',-4)));}
function blossom(x,y,s=1,c='#D0AAB9'){return G(x,y,s,[-1,1].map(k=>E(k*11,0,12,12,c)+E(k*6,-11,11,12,c)).join('')+E(0,11,12,12,c)+E(0,0,6,6,'#D6BD86'));}
function star(x,y,s=1,c='#D8DFD9'){return G(x,y,s,P('M0 -13 L4 -4 L14 -3 L6 4 L8 14 L0 8 L-8 14 L-6 4 L-14 -3 L-4 -4Z',c));}
function embroideredRabbit(x,y,s=1,part='full'){
 const tail=E(-95,34,20,20,'none','stroke="#D0DAD9" stroke-width="3"'),ears=P('M3 -42 Q-12 -121 4 -126 Q21 -119 23 -43 M25 -43 Q34 -122 49 -117 Q59 -106 45 -34','none','#D0DAD9',3);
 if(part==='tail')return G(x,y,s,tail+star(-95,13,.6)+star(-112,39,.5));if(part==='ears')return G(x,y,s,ears+star(5,-119,.55)+star(45,-111,.55));if(part==='three')return G(x,y,s,[[-60,0],[0,-16],[60,0]].map(([xx,yy])=>star(xx,yy,.8)).join(''));
 return G(x,y,s,tail+ears+P('M-76 35 Q-101 -26 -44 -42 Q-18 -48 1 -33 Q-10 -72 26 -76 Q70 -73 64 -35 Q71 -15 38 -10 L67 12 L48 31 L15 14 Q-5 68 -62 62 L-96 88 L-117 74 L-76 35 M-18 58 L9 85 L-15 96 L-44 63','none','#D0DAD9',3)+E(43,-50,3,3,'#DFE7DF')+[[-76,35],[-64,-31],[-32,-42],[5,-118],[45,-111],[26,-76],[62,-36],[38,-10],[49,28],[-18,58],[-91,83],[-12,92]].map(([xx,yy])=>star(xx,yy,.55)).join('')+star(81,3,1.1));
}
function meadow(){return R(0,0,1000,800,'#CCD9CF',0)+cloud(177,141,.72,'#E5E7D7')+P('M0 493 Q259 365 493 488 T1000 466 L1000 800 L0 800Z','#A7BF99')+P('M0 766 Q191 645 418 772 L1000 800 L0 800Z','#BBC6A1')+[[61,748],[127,719],[205,754]].map(([x,y])=>E(x,y,24,12,'#C9C6AD')).join('')+grass(909,747,.7);}
function lowUmbrella(part='three',openView=false){return P('M370 522 Q389 303 650 294 Q907 307 930 522Z','#7D99B2')+P('M650 295 Q523 364 491 519 M650 295 Q772 359 811 519','none','#91ACC0',3)+E(650,525,279,65,'#617C9F')+(openView?embroideredRabbit(616,515,.44):embroideredRabbit(614,525,.35,part))+P('M650 531 L650 690 Q649 737 608 722 Q575 712 590 680','none','#A38963',14)+P('M648 713 L628 752 M647 718 L675 751 M646 725 L649 762','none','#9D8E6B',8)+eye(826,487)+eye(850,483)+P('M831 504 Q842 511 854 500','none','#BAC8CE',3);}
function proneMole(x,y,s=1,o={}){return G(x,y,s,E(115,0,177,12,'#8C9C80','opacity=".14"')+E(122,-29,100,38,'#A4B593')+E(224,-16,38,14,'#B3A58E')+E(236,-34,35,14,'#B3A58E')+E(8,-46,48,44,'#B3A58E')+E(-24,-74,19,20,'#B3A58E')+E(43,-67,18,18,'#B3A58E')+E(4,-49,12,9,'#897E67')+eye(-10,-63,o.closed)+eye(19,-63,o.closed)+P('M-4 -34 Q7 -27 19 -35','none','#8D806A',2.5)+(o.point?arm(66,-42,73,-137,'#B3A58E'):arm(66,-42,102,-44,'#B3A58E'))+arm(144,-39,122,-46,'#B3A58E'));}
function bentMole(x,y,s=1){return G(x,y,s,E(-25,-6,29,12,'#B3A58E')+E(26,-6,29,12,'#B3A58E')+R(-36,-51,20,43,'#B3A58E',7)+R(15,-51,20,43,'#B3A58E',7)+P('M-45 -51 Q-72 -127 -17 -167 L30 -136 Q6 -88 16 -48Z','#A4B593')+E(49,-150,46,43,'#B3A58E')+E(22,-181,19,20,'#B3A58E')+eye(64,-160)+E(91,-145,12,9,'#897E67')+P('M62 -126 Q76 -120 88 -130','none','#8D806A',2.5)+hat(49,-187,.94,10)+arm(-34,-117,-19,-57,'#B3A58E')+arm(18,-125,100,-110,'#B3A58E'));}
function lowMole(x,y,s=1){return G(x,y,s,E(6,-25,79,39,'#A4B593')+E(-57,-8,36,15,'#B3A58E')+arm(-24,-28,32,2,'#B3A58E')+E(74,-43,47,43,'#B3A58E')+E(52,-75,21,21,'#B3A58E')+E(90,-82,18,18,'#B3A58E')+eye(71,-58)+eye(96,-52)+E(111,-42,12,9,'#897E67')+P('M86 -23 Q98 -18 106 -27','none','#8D806A',2.5));}
function umbrellaInside(){return meadow()+E(536,294,399,249,'#627C9E')+'<defs><clipPath id="umbrella-inner-clip"><ellipse cx="536" cy="294" rx="399" ry="249"/></clipPath></defs><g clip-path="url(#umbrella-inner-clip)">'+[-2,-1,0,1,2].map(j=>P(`M826 347 Q${620+j*91} ${134+Math.abs(j)*38} ${185+j*26} ${261+j*74}`,'none','#7892AA',2)).join('')+'</g>'+embroideredRabbit(493,316,1.27)+P('M825 348 L825 710 Q826 756 789 740','none','#A78F6B',12)+P('M824 735 L803 765 M825 739 L848 765 M825 743 L826 774','none','#9D8E6B',7);}
function umbrellaStory(i,cover){if(cover)return umbrellaInside()+cloth(445,740,1.9,'#BBAFC0')+proneMole(325,735,1)+hat(721,739,.64);return [
 ()=>meadow()+lowUmbrella()+animal('mole',273,748,1.04,{hat:true,pose:'think'}),
 ()=>meadow()+lowUmbrella('three')+bentMole(355,748,.97),
 ()=>meadow()+lowUmbrella('three')+animal('mole',469,747,.91,{hat:true,arms:[[-22,-99],[164,-75]]}),
 ()=>meadow()+lowUmbrella('tail')+animal('mole',410,746,.95,{sit:true,profile:true,arms:[[-24,-61],[83,-125]]})+hat(315,750,.64,15),
 ()=>meadow()+lowUmbrella('ears')+hat(477,743,.65)+lowMole(349,734,.88),
 ()=>meadow()+lowUmbrella('ears')+cloth(465,747,1.9,'#BBAFC0')+proneMole(329,737,1)+hat(720,744,.64),
 ()=>umbrellaInside()+cloth(450,747,1.9,'#BBAFC0')+proneMole(314,735,1,{point:true})+hat(708,745,.62),
 ()=>meadow()+lowUmbrella('full',true)+cloth(445,747,1.9,'#BBAFC0')+proneMole(308,737,1,{closed:true})+hat(707,745,.63)+P('M88 638 Q154 614 217 638 M807 628 Q855 607 911 624','none','#C9D6BE',4)
 ][i]();}

function musicRoom(){return R(0,0,1000,800,'#D0C8AF',0)+R(0,653,1000,147,'#BBA47F',0)+[107,334,574,809].map(x=>line(x,654,x-58,800,'#A7926E',2)).join('')+R(78,80,294,342,'#AB9670',13)+R(95,97,261,308,'#B7CBA9',4)+leaf(159,256,1,'#98B384',-41)+leaf(289,335,.85,'#91AB7F',35)+R(214,97,13,308,'#C9AF82',3)+R(761,497,190,159,'#AD916A',8)+R(749,485,212,25,'#C4AA80',5)+R(784,525,64,100,'#C1A67D',5)+R(866,525,62,100,'#C1A67D',5)+E(835,573,5,5,'#897B5D')+E(880,573,5,5,'#897B5D');}
function xylophone(){return R(114,619,249,23,'#B49A73',6)+R(134,642,19,104,'#9D8866',4)+R(326,642,19,104,'#9D8866',4)+[0,1,2,3,4,5,6].map(j=>R(129+j*30,563+j*5,25,59-j*4,j%2?'#C2A678':'#CFB789',4)).join('')+R(84,424,95,84,'#E7DFCA',4)+line(98,441,166,441,'#A8AF97',2)+line(98,457,166,457,'#A8AF97',2)+line(98,473,166,473,'#A8AF97',2)+P('M112 474 L112 443 Q127 447 127 457 M148 479 L148 450','none','#8DA39A',3);}
function aunt(play=false){return animal('badger',228,673,.98,{old:true,arms:[[-69,-87],[67,-94]]})+line(160,588,180,551,wood,6)+E(181,551,12,10,'#D4BD91')+line(294,581,315,play?599:549,wood,6)+E(315,play?599:549,12,10,'#D4BD91')+xylophone();}
function chair(x=559,y=743,s=1,pad=false){return G(x,y,s,R(-73,-289,146,182,'#B29A73',9)+R(-88,-106,176,27,'#CCB58D',7)+[-65,65].map(xx=>R(xx-8,-79,16,81,'#A68C65',4)).join('')+(pad?cushion(0,-107,.8):''));}
function ceramicDragon(x,y,s=1,o={}){let c='#8FAC9C',q=o.sit?27:0,hy=-188+q,z=E(0,0,75,12,'#81947E','opacity=".12"');
 if(o.tail==='long')z+=P('M37 -24 Q128 -19 185 -36 Q241 -65 262 -44 Q248 -4 173 -4 Q98 13 40 -5Z',c);else if(o.tail==='cramped')z+=P('M30 -18 Q84 -13 88 -91 L81 -151 Q105 -168 105 -131 L107 -59 Q106 11 45 2Z',c);
 z+=o.chair?R(-26,-26,20,67,c,7)+R(8,-26,20,67,c,7)+E(-23,39,25,12,c)+E(24,39,25,12,c):o.sit?E(-30,-8,31,13,c)+E(30,-8,31,13,c):R(-26,-55,20,46,c,7)+R(8,-55,20,46,c,7)+E(-23,-6,25,11,c)+E(24,-6,25,11,c);
 z+=E(0,-91+q,53,65,c)+P(`M-36 ${-140+q} L-2 ${-124+q} L-7 ${-53+q} L-45 ${-45+q}Z M36 ${-140+q} L2 ${-124+q} L7 ${-53+q} L45 ${-45+q}Z`,cream)+P(`M-39 ${hy-23} L-45 ${hy-59} L-17 ${hy-39} M17 ${hy-39} L45 ${hy-59} L39 ${hy-23}Z`,'#799C8D')+E(0,hy,52,45,c)+E(6,hy+20,46,26,'#ABC1AE')+eye(-19,hy-3,o.closed)+eye(19,hy-3,o.closed)+P(o.sad?`M-7 ${hy+37} Q7 ${hy+29} 23 ${hy+37}`:`M-7 ${hy+34} Q8 ${hy+43} 23 ${hy+34}`,'none','#698A7C',2.5);
 const a=o.arms||[[-22,-91+q],[22,-91+q]];z+=arm(-39,-129+q,...a[0],c)+arm(39,-129+q,...a[1],c);
 if(o.tail==='lap')z+=G(0,o.sit?35:0,1,P('M35 -14 Q118 -38 82 -111 Q53 -151 -22 -120 Q-79 -98 -45 -62 Q-4 -34 43 -71 Q66 -86 66 -56 Q68 -6 35 19Z',c)+P('M-29 -82 Q16 -113 56 -91','none','#AAC2AE',4));
 return G(x,y,s,z);}
function dragonStory(i,cover){if(cover)return musicRoom()+aunt(true)+cushion(620,747,1.18)+ceramicDragon(620,741,1.0,{sit:true,tail:'long',closed:true});return [
 ()=>musicRoom()+aunt()+chair(615,743,.86)+ceramicDragon(454,748,1.03,{tail:'lap',arms:[[-25,-79],[25,-80]]}),
 ()=>musicRoom()+aunt()+chair(591,743,.95)+ceramicDragon(562,645,1.01,{sit:true,chair:true,tail:'cramped',sad:true,arms:[[-27,-53],[30,-51]]}),
 ()=>musicRoom()+aunt()+chair(597,743,.95)+ceramicDragon(574,645,1.01,{sit:true,chair:true,tail:'lap',sad:true,arms:[[-45,-37],[47,-38]]}),
 ()=>musicRoom()+aunt()+chair(591,743,.95,true)+ceramicDragon(563,632,1.01,{sit:true,chair:true,tail:'cramped',sad:true,arms:[[-24,-52],[72,-34]]}),
 ()=>musicRoom()+aunt()+chair(453,743,.83,true)+ceramicDragon(629,748,1.01,{tail:'long',arms:[[-24,-95],[29,-94]]}),
 ()=>musicRoom()+aunt()+chair(454,743,.83,true)+ceramicDragon(605,747,1.02,{tail:'long',arms:[[-24,-96],[125,-62]]}),
 ()=>musicRoom()+aunt(true)+chair(448,744,.7)+cushion(667,747,1.1)+ceramicDragon(666,742,1.01,{sit:true,tail:'long',arms:[[-68,-105],[70,-105]]}),
 ()=>musicRoom()+aunt(true)+chair(436,743,.68)+cushion(689,749,1.1)+ceramicDragon(689,744,.98,{sit:true,tail:'long',closed:true,arms:[[-27,-55],[46,-40]]})+P('M320 535 Q333 514 342 533 M347 545 Q359 524 368 542','none','#BCC7AB',3)
 ][i]();}

function corridor(){return R(0,0,1000,800,'#C8D5CA',0)+R(0,333,1000,271,'#AEC4AD',0)+P('M67 800 L67 268 L967 268 L967 800Z','#CAB998')+R(110,300,836,291,'#B8CBB9',2)+P('M111 590 L946 590 L1000 800 L0 800Z','#C0AC86')+[189,371,553,735,917].map(x=>line(x,592,x-100,800,'#AA9573',2)).join('')+[118,382,646,911].map(x=>R(x,291,18,336,'#A18B67',4)).join('')+R(83,263,883,34,'#AE9670',4)+R(1,173,116,470,'#AE9875',6)+R(19,192,75,421,'#C2AE88',5)+E(76,423,7,7,'#897E60')+P('M226 332 L215 366 M467 327 L457 361 M705 337 L695 369 M837 331 L828 362','none','#D7E2D5',3);}
function mint(x,y,s=1){return G(x,y,s,P('M-53 -58 L-39 19 L39 19 L53 -58Z','#B59975')+E(0,-58,54,11,'#CAB18B')+line(0,-58,0,-175,'#84A274',6)+[-1,1].map(k=>leaf(k*20,-100,.56,'#94B282',k*52)+leaf(k*13,-142,.51,'#A7BD91',k*48)).join('')+P('M-16 -157 Q-26 -143 -17 -137 Q-7 -143 -16 -157Z','#C8DFD5'));}
function shoe(x,y,s=1,white=false,r=0){return G(x,y,s,P('M-57 -26 Q-27 -48 10 -29 Q30 -20 48 -9 Q72 13 38 24 L-45 24 Q-72 14 -57 -26Z',white?'#EAE3D0':'#A88661')+E(-26,-25,28,14,white?'#B4BBA6':'#756F57')+P('M-57 16 Q0 29 54 13','none',white?'#CECBB5':'#C7AC82',4)+(white?P('M-5 -16 L13 -5 M1 -21 L20 -10','none','#C3C8B3',3):leaf(28,-4,.23,'#D0B386',55)+eye(11,8)+eye(35,8)),r);}
function sock(x,y,s=1,r=0){return G(x,y,s,P('M-18 -55 L17 -55 L17 -12 Q45 -12 43 5 Q37 23 -16 17Z','#D8D3BF')+line(-16,-41,16,-41,'#92ADB4',6)+line(-16,-24,16,-24,'#92ADB4',6),r);}
function shoesStory(i,cover){if(cover)return corridor()+mint(804,602,.78)+animal('badger',450,743,1.1,{shoes:true,arms:[[-24,-102],[88,-145]]})+shoe(641,737,.69)+shoe(747,742,.69);return [
 ()=>corridor()+mint(838,589,.7)+stool(354,699,1)+animal('badger',354,704,1.04,{sit:true,chair:true,socks:true,pose:'wide'})+shoe(545,745,.71)+shoe(642,746,.71),
 ()=>corridor()+mint(841,588,.68)+stool(357,694,1)+animal('badger',357,700,1.04,{sit:true,chair:true,socks:true,arms:[[-34,-50],[73,20]],sad:true})+shoe(452,749,.69)+shoe(558,748,.69),
 ()=>corridor()+mint(840,589,.69)+stool(356,694,1)+animal('badger',356,700,1.04,{sit:true,chair:true,arms:[[-26,-51],[89,36]]})+shoe(477,747,.69)+shoe(584,748,.69)+sock(244,749,.68,-32)+sock(276,748,.64,19),
 ()=>corridor()+mint(844,588,.68)+animal('badger',463,748,1.08,{shoes:true,arms:[[-49,-105],[49,-105]]})+shoe(425,627,.62,false,-8)+shoe(498,631,.62,false,8),
 ()=>corridor()+mint(844,591,.68)+animal('badger',435,749,1.08,{sit:true,shoes:true,arms:[[-22,-48],[124,-15]]})+shoe(610,746,.7)+shoe(708,732,.7),
 ()=>corridor()+mint(842,594,.72)+animal('badger',427,745,1.08,{shoes:true,arms:[[-31,-98],[38,-91]]})+shoe(609,742,.71,false,-3)+shoe(713,735,.71,false,4)+P('M545 751 L567 751 M752 747 L775 747','none','#DDCFAB',3),
 ()=>corridor()+mint(679,666,1.1)+animal('badger',588,749,1.07,{sit:true,shoes:true,closed:true,pose:'hold'})+shoe(499,745,.68)+shoe(679,744,.68),
 ()=>R(0,0,1000,800,'#D2C8B1',0)+R(0,652,1000,148,'#BAA680',0)+R(96,147,245,505,'#A9906B',13)+R(114,164,209,486,'#B4C9BD',5)+P('M146 252 L136 285 M236 311 L225 344 M284 216 L273 249','none','#D7E3D6',3)+stool(476,698,1)+animal('badger',476,703,1.04,{sit:true,chair:true,pose:'wide'})+shoe(649,742,.58)+shoe(723,742,.58)+shoe(797,742,.58,true)+shoe(871,742,.58,true)
 ][i]();}

function pond(){return R(0,0,1000,800,'#C9D7C5',0)+P('M0 455 Q240 351 480 449 T1000 444 L1000 800 L0 800Z','#B0C29E')+P('M0 649 Q224 579 433 638 T1000 652 L1000 800 L0 800Z','#C3BC95')+E(638,657,313,112,'#A59E7F')+E(638,642,293,96,'#97BAB8')+P('M383 640 Q612 582 892 632 M417 683 Q645 723 861 678','none','#C2D6C9',4)+mint(911,598,.62)+grass(88,746,.6);}
function boatLeaf(x,y,s=1,r=0){return G(x,y,s,P('M-62 1 Q-6 -45 60 -6 Q19 38 -62 1Z','#B7B17B')+P('M-56 2 Q0 -5 53 -7','none','#D4C68F',3)+line(56,-7,71,-12,'#9D9B6C',3),r);}
function duck(x,y,s=1,flip=false){return G(x,y,s,G(0,0,1,E(0,0,83,12,'#709F9F','opacity=".23"')+P('M-48 -24 Q-10 -4 59 -36 Q95 -57 84 -21 Q77 17 -4 20 Q-60 17 -63 -8Z','#B89B72')+E(-51,-53,29,37,'#C7AA7B')+P('M-75 -60 L-118 -52 L-79 -39Z','#C49A62')+eye(-59,-60)+P('M-31 -12 Q14 -34 62 -20','none','#947F5E',5)+P('M-21 -3 Q11 -17 42 -9','none','#D6BF92',3)),0,flip?'transform="scale(-1 1)"':'');}
function woodDuck(x,y,s=1,flip=false){const d=duck(0,0,1);return `<g transform="translate(${x} ${y}) scale(${flip?-s:s} ${s})">${d}</g>`;}
function leafStory(i,cover){if(cover)return pond()+animal('civet',298,748,1.12,{sit:true,pose:'hold'})+woodDuck(794,654,.85)+boatLeaf(558,675,.51,-11)+boatLeaf(650,691,.51,12)+boatLeaf(705,660,.51,-8);return [
 ()=>pond()+animal('civet',237,746,1.02,{sit:true,arms:[[-25,-55],[81,-43]]})+boatLeaf(350,744,.47,-8)+boatLeaf(423,740,.47,6)+boatLeaf(495,746,.47,-10)+woodDuck(689,643,.79),
 ()=>pond()+animal('civet',253,748,1.02,{sit:true,arms:[[-23,-53],[136,-88]]})+boatLeaf(260,757,.48,-8)+boatLeaf(336,755,.48,8)+woodDuck(538,653,.8)+boatLeaf(410,617,.5,-5),
 ()=>pond()+animal('civet',251,748,1.04,{sit:true,sad:true,arms:[[-24,-55],[131,-95]]})+woodDuck(593,648,.78)+boatLeaf(405,667,.48,-14)+boatLeaf(452,646,.48,8)+boatLeaf(470,687,.48,-4),
 ()=>pond()+animal('civet',689,548,.8,{sit:true,sad:true,arms:[[-22,-48],[-142,49]]})+woodDuck(681,618,.73)+boatLeaf(563,586,.45,-15)+boatLeaf(605,652,.45,15)+boatLeaf(538,648,.45,-3),
 ()=>pond()+animal('civet',329,748,1.03,{arms:[[-25,-102],[104,-84]]})+woodDuck(567,660,.78)+boatLeaf(443,625,.48,-7)+boatLeaf(333,757,.47,-14)+boatLeaf(405,754,.47,7),
 ()=>pond()+animal('civet',272,747,1.04,{arms:[[-23,-99],[172,-172]]})+woodDuck(565,647,.81)+boatLeaf(403,691,.46,-7)+boatLeaf(469,700,.46,7)+boatLeaf(530,697,.46,-4)+P('M461 558 Q616 531 792 566','none','#D4DABB',3,'stroke-dasharray="8 11"'),
 ()=>pond()+animal('civet',255,748,1.04,{sit:true,arms:[[-22,-54],[133,-91]]})+woodDuck(848,616,.72)+boatLeaf(535,657,.49,-9)+boatLeaf(646,674,.49,8)+boatLeaf(757,650,.49,-4)+P('M342 592 Q403 579 458 601 M355 607 Q409 596 452 615','none','#D2DDC5',3),
 ()=>pond()+animal('civet',578,749,1.04,{sit:true,closed:true,arms:[[-26,-55],[91,-127]]})+woodDuck(851,620,.73)+boatLeaf(718,692,.46,-10)+boatLeaf(795,687,.46,7)+boatLeaf(859,672,.46,-6)+leaf(891,594,.38,'#A7BD91',-56)
 ][i]();}

function fishRoom(){return R(0,0,1000,800,'#D2CCB7',0)+R(0,664,1000,136,'#BEA780',0)+R(632,62,303,381,'#AE9470',11)+R(649,79,269,347,'#B9CEC4',4)+R(776,80,13,347,'#CDB28A',3)+line(876,89,876,179,'#90A69B',2)+P('M851 181 Q876 141 901 181 L897 202 L855 202Z','#B5AA8C')+line(876,202,876,269,'#90A69B',2)+R(859,258,34,55,'#D9CFAB',3)+R(174,616,782,29,'#C6AD85',6)+R(200,645,23,112,'#A98E68',4)+R(912,645,23,112,'#A98E68',4)+pot(863,598,.72,true);}
function tower(x,count){return Array.from({length:count},(_,j)=>R(x-36,616-(j+1)*32,72,30,j%2?'#B1BDA2':'#C7B38D',3)).join('');}
function paperFish(x,y,s=1,r=0){return G(x,y,s,P('M-52 0 L-94 -32 L-94 32Z','#7DAABA')+P('M-55 0 L8 -35 L68 0 L8 35Z','#8EBECD')+P('M-52 0 L8 35 L8 -35Z','#A6CED7')+P('M-89 -21 L-65 0 L-89 21 M-52 0 L46 0','none','#D6E7DD',2.5)+eye(43,-6),r);}
function bridge(extra=false,taut=false,withFish=true){const start=extra?392:424;return tower(351,extra?7:6)+tower(780,4)+P(taut?`M351 ${start} L780 488`:`M351 ${start} Q560 650 780 488`,'none','#C3AC71',5)+(withFish?paperFish(taut?750:extra?619:609,taut?503:extra?571:579,.63):'');}
function fishStory(i,cover){if(cover)return fishRoom()+bridge(true,true)+stool(472,697,.78)+animal('mouse',472,703,1.04,{sit:true,chair:true,arms:[[-24,-65],[98,-178]]})+cloth(280,593,.57);return [
 ()=>fishRoom()+animal('mouse',443,747,1.08,{arms:[[-22,-105],[100,-127]]})+paperFish(559,588,.58)+P('M568 558 Q670 472 799 442','none','#C5D2BB',3,'stroke-dasharray="7 9"'),
 ()=>fishRoom()+bridge()+stool(216,681,.7)+animal('mouse',216,669,.95,{arms:[[-23,-99],[142,-253]]}),
 ()=>fishRoom()+bridge()+stool(890,710,.62)+animal('mouse',890,699,.85,{arms:[[-82,-237],[22,-97]]})+cloth(820,493,.48),
 ()=>fishRoom()+bridge(true)+stool(218,682,.7)+animal('mouse',218,669,.96,{arms:[[-23,-100],[140,-284]]}),
 ()=>fishRoom()+bridge(true)+animal('mouse',232,748,1.06,{sit:true,profile:true,arms:[[-24,-56],[110,-160]]}),
 ()=>fishRoom()+bridge(true,true,false)+cloth(520,593,.62)+paperFish(520,586,.56)+stool(885,712,.66)+animal('mouse',885,699,.86,{arms:[[-122,-245],[22,-97]]})+P('M782 489 Q808 503 825 492','none','#C3AC71',4),
 ()=>fishRoom()+bridge(true,true)+animal('mouse',462,747,1.07,{arms:[[-24,-100],[98,-211]]})+cloth(280,594,.56)+P('M646 485 L672 491 M674 493 L694 499','none','#CADACC',3),
 ()=>fishRoom()+bridge(true,true)+stool(660,671,.7)+animal('mouse',660,677,1,{sit:true,chair:true,profile:true,closed:true,arms:[[-100,-235],[28,-55]]})+cloth(274,594,.54)
 ][i]();}

function doorway(){return R(0,0,1000,800,'#D4CBB6',0)+R(0,654,1000,146,'#BFA984',0)+R(660,144,240,515,'#A58D69',13)+R(680,162,202,491,'#B3C5A8',6)+R(684,169,151,482,'#C4B08C',4)+E(810,421,7,7,'#8C805E')+R(115,508,241,25,'#C5AD83',6)+R(134,532,18,129,'#A88D65',4)+R(318,532,18,129,'#A88D65',4)+E(498,746,258,35,'#B8BBA1')+stool(283,700,.62);}
function antler(x,y,s=1){return G(x,y,s,P('M0 0 L-7 -76 M-7 -76 L-59 -145 L-74 -153 M-7 -76 L59 -123 Q93 -151 71 -163 Q57 -167 60 -148 M-38 -116 L-28 -151 M30 -106 L39 -145','none','#A18764',8));}
function vase(x,y,s=1,o={}){let z=E(0,3,97,13,'#87967E','opacity=".14"')+E(-31,-4,26,12,'#DBD5BE')+E(31,o.step?-20:-4,26,12,'#DBD5BE')+P('M-38 -183 L38 -183 L43 -150 Q116 -137 95 -52 Q80 -10 0 -12 Q-80 -10 -95 -52 Q-116 -137 -43 -150Z','#E4DDC5')+E(0,-182,43,12,'#C9C6AF')+E(0,-185,30,6,'#9FAD9B')+eye(-27,-108,o.closed)+eye(27,-108,o.closed)+E(0,-90,4,4,'#A28C6E')+(o.open?E(0,-68,13,17,'#A58E70'):P('M-11 -70 Q0 -60 11 -70','none','#A58E70',2.5));
 if(o.flowers)z+=P('M-12 -187 L-52 -262 M8 -188 L51 -269 M-8 -187 Q-80 -234 -37 -139','none','#91A681',5)+blossom(-52,-267,.82,'#D0AAB9')+blossom(51,-274,.82,'#D0AAB9')+blossom(-37,-139,.7,'#D0AAB9')+P('M-24 -130 Q-9 -122 -2 -94','none','#D0AAB9',10);
 if(o.leaves)z+=leaf(-8,-184,.85,'#9FB78B',-42)+leaf(15,-187,.83,'#9FB78B',39)+leaf(0,-200,.64,'#AFC198',1);
 if(o.branch)z+=antler(0,-183,1);return G(x,y,s,z);}
function branchPile(x,y,s=1){return G(x,y,s,line(-102,-17,87,-43,'#AA916A',7)+line(-73,-44,99,-13,'#B39A72',7)+line(-98,6,68,-23,'#AA916A',6)+G(47,-23,.5,antler(0,0,1),72));}
function pinkThree(x,y,s=1){return G(x,y,s,[-40,0,40].map((xx,j)=>line(xx,-1,xx+20,27,'#94AA81',4)+blossom(xx,-3+j%2*7,.6,'#D0AAB9')).join(''));}
function slope(night=false){return R(0,0,1000,800,night?'#91A7AF':'#BDCBBF',0)+P('M0 575 Q273 388 494 521 Q761 374 1000 469 L1000 800 L0 800Z',night?'#95AD8E':'#A4BB91')+P('M0 734 Q219 623 453 699 T1000 693 L1000 800 L0 800Z',night?'#A6B695':'#B5C19A')+grass(112,747,.7)+grass(890,748,.72);}
function vaseStory(i,cover){if(cover)return slope(true)+E(645,389,24,24,'#DFDFC1')+animal('cat',353,748,1.13,{sit:true,flower:true,pose:'hold'})+vase(650,746,1.12,{branch:true,closed:true})+[[181,565],[796,632],[513,701]].map(([x,y])=>E(x,y,4,4,'#E8DCAE')).join('');return [
 ()=>doorway()+animal('cat',428,749,1.07,{sit:true,pose:'wide'})+vase(690,745,.95),
 ()=>doorway()+animal('cat',419,749,1.07,{arms:[[-24,-99],[210,-245]]})+vase(696,746,.98,{flowers:true}),
 ()=>doorway()+pinkThree(237,497,.83)+vase(699,746,.97,{leaves:true})+animal('cat',429,748,1.07,{sad:true,arms:[[-20,-99],[211,-190]]}),
 ()=>doorway()+pinkThree(236,497,.83)+animal('cat',399,749,1.07,{arms:[[-22,-110],[22,-110]]})+leaf(399,624,.65,'#A0B88B',-20)+leaf(430,628,.58,'#9BB386',29)+branchPile(756,745,.85)+vase(644,743,.86,{step:true}),
 ()=>doorway()+pinkThree(236,497,.83)+animal('cat',421,749,1.08,{sit:true,arms:[[-25,-52],[138,-32]]})+line(516,747,594,713,'#A18764',6)+line(528,761,608,730,'#A18764',6)+G(619,746,.55,antler(0,0,1),71)+vase(758,742,.87,{step:true}),
 ()=>doorway()+pinkThree(238,497,.82)+animal('cat',435,748,1.05,{arms:[[-24,-101],[217,-212]]})+vase(667,744,.99,{branch:true,step:true}),
 ()=>slope()+animal('cat',402,748,1.12,{flower:true,arms:[[-31,-99],[45,-102]]})+vase(691,746,1.06,{branch:true,step:true,open:true})+P('M806 532 Q850 513 898 535 M803 549 Q858 533 916 553','none','#D4DEC6',4),
 ()=>slope(true)+E(654,415,22,22,'#DFDFC1')+animal('cat',405,748,1.11,{sit:true,flower:true,arms:[[-23,-55],[35,-187]],closed:true})+vase(663,745,1.05,{branch:true})+[[183,617],[533,689],[845,588],[786,736]].map(([x,y])=>E(x,y,4,4,'#E8DCAE')).join('')
 ][i]();}

function bamboo(x,y,s=1){return G(x,y,s,[-28,12,47].map((xx,j)=>line(xx,0,xx-10,-477+j*28,'#8FA77A',13)+[-87,-183,-278,-371].map(yy=>line(xx-7,yy,xx+7,yy,'#C0CBA3',4)).join('')+leaf(xx-1,-265+j*30,.63,'#9AB384',-57)+leaf(xx-2,-356+j*31,.68,'#8FA97B',49)).join(''));}
function yard(){return R(0,0,1000,800,'#D0D8BF',0)+R(0,610,1000,190,'#B6BB96',0)+bamboo(880,692,1.02)+bamboo(99,656,.84)+R(161,81,197,431,'#B7A17B',7)+R(182,101,155,402,'#879E86',5)+R(154,504,213,24,'#C9B28B',5)+P('M79 704 L101 635 L126 704Z','#A1AE7B')+P('M86 682 L115 678 M92 661 L109 660','none','#C8CB9C',3);}
function snackTable(){return R(331,603,413,27,'#C8AF84',6)+R(355,629,22,121,'#A68C64',4)+R(697,629,22,121,'#A68C64',4);}
function wrap(x,y,s=1,stone=false){return G(x,y,s,P('M-37 -22 Q0 -30 37 -22 L43 17 Q0 30 -43 17Z',cream)+P('M-33 -16 L0 5 L33 -16 M0 5 L0 22','none','#C8C8AE',2.5)+(stone?E(0,-16,18,10,'#A1AA92'):''));}
function emptyPaper(x,y,s=1,r=0){return G(x,y,s,P('M-42 -25 Q-6 -13 36 -29 L46 26 Q5 13 -41 31Z',cream)+P('M-30 -12 Q0 -4 31 -17 M-23 16 L15 3','none','#CECFB6',2),r);}
function cake(x,y,s=1){return G(x,y,s,R(-27,-19,54,37,'#E5D9B6',8)+E(0,-16,27,10,'#EEE4C8')+[[-12,-18],[4,-20],[14,-14]].map(([xx,yy])=>E(xx,yy,2.5,2,'#C8B58B')).join(''));}
function plate(x,y,s=1,food=false){return G(x,y,s,E(0,0,46,14,'#A6BDB8')+E(0,-2,35,8,'#C8D8CB')+(food?cake(0,-19,.7):''));}
function smallWind(x,y,s=1,blush=false){return G(x,y,s,P('M-47 -54 Q-86 -13 -42 13 Q-15 35 -27 72 Q37 62 47 29 Q81 3 50 -42','none','#B7CDB0',3,'opacity=".76"')+E(-26,-10,24,23,blush?'#D4B9AA':'#D6E2CB','opacity=".56"')+E(26,-10,24,23,blush?'#D4B9AA':'#D6E2CB','opacity=".56"')+eye(-16,-21)+eye(16,-21)+P('M-9 2 Q0 10 9 2','none','#92AB89',2)+P('M-59 29 Q-113 49 -64 68 Q-22 85 21 71 M32 81 Q81 73 98 45','none','#B8CFAC',4));}
function teaInside(){return R(0,0,1000,800,'#D0C7AE',0)+R(0,659,1000,141,'#BBA580',0)+R(619,160,294,380,'#A58C67',9)+R(641,182,248,142,'#D8D4BA',4)+R(641,344,248,175,'#D8D4BA',4)+[0,1,2,3].map(j=>plate(759,301-j*13,.96)).join('')+R(203,599,707,30,'#C4AB80',6)+R(228,629,654,101,'#B19A74',5)+R(608,640,244,65,'#C9B18A',5)+R(343,640,218,65,'#C9B18A',5)+E(454,672,6,6,'#8C7D5B')+E(730,672,6,6,'#8C7D5B');}
function basin(x,y,s=1){return G(x,y,s,E(0,-15,108,29,'#A8BDB5')+E(0,-19,91,19,'#C4D8CE')+P('M-108 -14 Q0 19 108 -14 L89 38 Q0 67 -89 38Z','#94B2AD'));}
function snackStory(i,cover){if(cover)return yard()+snackTable()+plate(421,596,.9,true)+plate(563,596,.9,true)+animal('squirrel',269,749,1.1,{pose:'hold'})+smallWind(669,458,.92);return [
 ()=>yard()+snackTable()+[430,520,610,700].map(x=>wrap(x,583,.85)).join('')+animal('squirrel',243,749,1.05,{arms:[[-22,-101],[148,-155]]})+smallWind(675,467,.83),
 ()=>yard()+snackTable()+[490,580,670].map(x=>wrap(x,584,.85)).join('')+stool(761,696,.83)+animal('rabbit',761,699,.9,{sit:true,chair:true,pose:'hold'})+cake(760,623,.63)+animal('squirrel',310,750,1.05,{arms:[[-25,-103],[171,-208]]})+emptyPaper(610,456,.77,22)+smallWind(578,390,.7,true),
 ()=>yard()+snackTable()+[470,570,670].map(x=>wrap(x,584,.85,true)).join('')+animal('squirrel',247,749,1.05,{arms:[[-21,-101],[211,-174]]})+smallWind(690,456,.8)+R(710,566,31,35,'#B7C9C0',6),
 ()=>yard()+snackTable()+[470,570].map(x=>wrap(x,583,.85,true)).join('')+E(600,587,18,10,'#A1AA92')+stool(761,696,.83)+animal('rabbit',761,699,.9,{sit:true,chair:true,pose:'hold'})+cake(760,623,.63)+animal('squirrel',235,748,1.04,{arms:[[-23,-102],[69,-221]]})+emptyPaper(320,476,.75,16)+smallWind(625,396,.73),
 ()=>teaInside()+basin(439,588,.85)+animal('squirrel',287,747,1.07,{arms:[[103,-162],[155,-168]]})+G(430,548,.75,E(0,0,48,20,'#A9C0B9')+E(0,0,36,11,'#D0DECF'),-21)+P('M449 568 Q456 580 450 585 Q443 578 449 568Z','#B8D3CC')+emptyPaper(862,583,.42),
 ()=>teaInside()+plate(510,589,.87,true)+plate(645,589,.87,true)+R(607,649,242,71,'#9F8A65',5)+R(621,657,220,63,'#BDAB86',3)+[0,1,2].map(j=>R(666,678-j*5,98,12,cream,2)).join('')+animal('squirrel',303,747,1.06,{arms:[[105,-154],[138,-154]]})+emptyPaper(430,582,.45),
 ()=>yard()+snackTable()+plate(422,596,.9,true)+plate(566,596,.9)+stool(761,696,.83)+animal('rabbit',761,699,.9,{sit:true,chair:true,pose:'hold'})+cake(760,622,.63)+animal('squirrel',197,750,1.05,{sit:true,arms:[[-26,-50],[-82,-46]]})+smallWind(370,482,.73)+P('M225 716 Q248 700 269 711 L238 735Z','#8FACB9'),
 ()=>yard()+snackTable()+R(480,541,242,19,'#B9A179',4)+R(493,559,12,44,'#AB916B',3)+R(697,559,12,44,'#AB916B',3)+[503,561,619,677].map(x=>G(x,547,.65,E(0,-39,33,50,'#A9C0B9')+E(0,-39,23,38,'#CEDDD0'),12)).join('')+stool(264,698,.84)+animal('squirrel',264,703,1.03,{sit:true,chair:true,closed:true,pose:'hold'})+stool(806,701,.82)+smallWind(806,600,.92)
 ][i]();}

function village(){return R(0,0,1000,800,'#CFD6C7',0)+R(0,589,1000,211,'#C5B18A',0)+P('M81 440 L81 251 Q195 95 309 251 L309 440Z','#C7AB85')+P('M59 252 Q192 80 331 252Z','#B58D6D')+R(148,326,92,114,'#94AC9E',36)+P('M742 453 L742 227 Q834 126 927 227 L927 453Z','#C4AA84')+P('M722 228 Q833 106 947 228Z','#B58D6D')+R(792,340,83,112,'#91AA9C',33)+P('M309 220 L389 220','none','#A38C6B',9)+leaf(353,278,.37,'#94AC83',0);}
function sandbox(){return R(229,499,654,159,'#DBC99E',5)+R(212,483,688,23,'#B69A70',5)+R(212,651,688,42,'#B49A71',6)+R(213,504,18,150,'#C7AB7E',4)+R(883,504,18,150,'#A78D66',4)+R(250,693,23,62,'#A58B64',4)+R(837,693,23,62,'#A58B64',4);}
const sandInk='#B59D74';
function sandDrawing(kind){if(kind==='partial')return E(397,567,44,32,'none',`stroke="${sandInk}" stroke-width="4"`)+P('M340 583 Q319 600 342 610 M447 554 Q466 544 474 554','none',sandInk,4);if(kind==='circle')return E(393,567,44,32,'none',`stroke="${sandInk}" stroke-width="4"`);if(kind==='frog')return sandDrawing('circle')+P('M366 587 L327 623 M375 591 L359 628 M413 592 L436 628 M430 584 L475 619','none',sandInk,4);if(kind==='bigwhale')return P('M579 612 Q539 521 648 526 Q757 524 792 582 L844 549 M792 582 L852 613','none',sandInk,4);if(kind==='snail')return P('M319 610 Q343 582 366 603 L372 569 Q376 533 433 530 Q504 535 492 578 Q481 612 427 598 Q387 589 403 562 Q422 546 443 560 Q456 573 436 579 M369 603 Q449 630 530 603 L553 614 L315 624 M330 601 L319 586 M347 600 L351 582','none',sandInk,4);return P('M670 610 Q652 566 698 562 Q749 556 778 588 L816 568 L808 594 L835 605 L795 614 Q727 645 670 610 M700 564 L694 547 M692 549 L680 542 M697 549 L706 541','none',sandInk,4)+E(689,590,3,3,sandInk);}
function tileFriend(x,y,s=1,o={}){let z=E(0,0,60,10,'#89997F','opacity=".13"')+P('M-28 -32 L-33 0 M29 -32 L35 0','none','#B77959',10)+P('M-47 -170 Q0 -199 47 -170 L43 -29 Q0 -9 -43 -29Z','#C58A66')+P('M-32 -160 Q0 -179 32 -160 L29 -40 Q0 -26 -29 -40Z','#D09A73')+P('M-26 -153 Q-34 -92 -25 -46','none','#E1B48C',3)+eye(-17,-126,o.closed)+eye(17,-126,o.closed)+P(o.sad?'M-10 -96 Q0 -105 10 -96':'M-10 -101 Q0 -92 10 -101','none','#8C7158',2.5);const a=o.arms||[[-61,-71],[61,-71]];z+=arm(-43,-119,...a[0],'#B77959',9)+arm(43,-119,...a[1],'#B77959',9);if(o.hat!==false)z+=hat(0,-175,.72);return G(x,y,s,z);}
function stick(x,y,tx,ty){return line(x,y,tx,ty,'#947E5C',6);}
function sandStory(i,cover){if(cover)return village()+R(309,464,459,23,'#C5AA7D',5)+R(337,487,17,55,'#A38B65',4)+R(724,487,17,55,'#A38B65',4)+animal('mole',380,475,.92,{sit:true,overalls:true,pose:'wide'})+tileFriend(716,482,.82,{closed:true})+sandbox()+sandDrawing('snail')+sandDrawing('smallwhale')+stick(481,679,556,665);return [
 ()=>village()+sandbox()+sandDrawing('partial')+stool(887,706,.6)+animal('mole',149,748,1.01,{overalls:true,arms:[[-22,-101],[101,-178]]})+stick(251,568,320,520)+tileFriend(917,748,.81,{hat:false}),
 ()=>village()+sandbox()+sandDrawing('bigwhale')+P('M308 566 Q376 545 456 566 M303 583 Q371 565 458 581','none','#E3D2AC',7)+animal('mole',151,747,1.01,{overalls:true,arms:[[-22,-101],[196,-176]],sad:true})+stick(487,677,552,665)+tileFriend(919,747,.84),
 ()=>village()+sandbox()+sandDrawing('bigwhale')+E(610,567,4,4,sandInk)+animal('mole',154,748,1.02,{overalls:true,arms:[[-22,-102],[116,-178]],sad:true})+stick(273,567,338,535)+tileFriend(869,736,.95,{arms:[[-72,-119],[53,-117]]}),
 ()=>village()+sandbox()+sandDrawing('bigwhale')+E(610,567,4,4,sandInk)+sandDrawing('frog')+animal('mole',151,748,1.02,{overalls:true,arms:[[-22,-103],[144,-178]]})+stick(299,566,390,567)+tileFriend(919,747,.84,{arms:[[-71,-117],[39,-81]]}),
 ()=>village()+sandbox()+sandDrawing('bigwhale')+E(610,567,4,4,sandInk)+sandDrawing('circle')+stick(323,674,405,664)+animal('mole',314,748,1.04,{overalls:true,sad:true,pose:'wide'})+tileFriend(772,747,.9,{sad:true}),
 ()=>village()+sandbox()+sandDrawing('bigwhale')+E(610,567,4,4,sandInk)+sandDrawing('circle')+stick(323,674,405,664)+animal('mole',300,749,1.04,{overalls:true,pose:'hold'})+tileFriend(745,746,.92,{arms:[[-35,-195],[33,-196]]})+P('M714 543 Q744 519 775 543','none','#BCA37A',3,'stroke-dasharray="5 6"'),
 ()=>village()+sandbox()+sandDrawing('snail')+animal('mole',153,748,1.02,{overalls:true,arms:[[-22,-102],[146,-149]]})+stick(302,596,350,584)+tileFriend(918,748,.83,{arms:[[-60,-110],[34,-77]]}),
 ()=>village()+R(309,464,459,23,'#C5AA7D',5)+R(337,487,17,55,'#A38B65',4)+R(724,487,17,55,'#A38B65',4)+animal('mole',384,466,.86,{sit:true,chair:true,overalls:true,pose:'hold'})+tileFriend(678,487,.75,{arms:[[-29,-75],[28,-76]]})+sandbox()+sandDrawing('snail')+sandDrawing('smallwhale')+stick(505,679,574,670)
 ][i]();}
const scenes={481:umbrellaStory,482:dragonStory,483:shoesStory,484:leafStory,485:fishStory,486:vaseStory,487:snackStory,488:sandStory};
export function thirteenthYoungFirstArtwork(story,index,cover=false){
 const n=Number(typeof story?.id==='string'?story.id.replace('expansion-',''):NaN);
 if(!scenes[n]||story.id!==`expansion-${String(n).padStart(4,'0')}`)throw Error('Unsupported story');
 if(story.status!=='text-ready'||story.ageBand!=='3-5'||story.provenance?.review!=='full-text-reviewed'||!Array.isArray(story.pages)||story.pages.length!==8||story.pages.some((p,j)=>p?.id!==`p${String(j+1).padStart(2,'0')}`||typeof p.text!=='string'||!p.text.trim()||typeof p.scene?.action!=='string'||!p.scene.action.trim())||!Number.isInteger(index)||index<0||index>=8||typeof cover!=='boolean')throw Error('Reviewed text-ready age 3–5 eight-page story and valid index required');
 return svg(scenes[n](index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

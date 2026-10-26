// Original compositions after reading all reviewed text and editorial notes, 0506–0507.
import {E,R,P,G,line,leaf,cloud,grass,svg} from '../render-illustrations.mjs';
const ink='#485D57',blue='#8BACAC',fur='#B5A58D',cream='#E7DFC7';
const arm=(x,y,a,b,c=blue)=>P(`M${x} ${y}Q${(x+a)/2} ${y+24} ${a} ${b}`,'none',c,15)+E(a,b,10,9,fur);
const poses={rest:[[-57,-106],[57,-106]],open:[[-95,-138],[104,-137]],point:[[-47,-105],[125,-175]],hold:[[-5,-121],[77,-121]],low:[[-48,-97],[144,-62]],touch:[[-48,-100],[166,-76]]};
function mouse(x,y,s=1,pose='rest',o={}){const f=o.gray?'#A8ADA1':fur;let a=E(0,0,79,12,ink,'opacity=".12"')+P('M-42 -71Q-143 -3 -121 -78','none',f,11)+P(o.sit?'M-24 -67L-60 -22L-46 -8M24 -67L57 -22L45 -8':'M-24 -68L-24 -9M24 -68L24 -9','none',f,18)+E(o.sit?-48:-24,-5,26,10,f)+E(o.sit?48:24,-5,26,10,f)+E(0,-116,52,66,f)+P('M-43 -174L-7 -160L-7 -79L-44 -83ZM8 -159L43 -174L47 -83L8 -79Z',blue)+E(-45,-252,33,38,f)+E(45,-252,33,38,f)+E(-45,-254,19,25,'#CCB6A1')+E(45,-254,19,25,'#CCB6A1')+E(0,-209,60,57,f)+E(21,-195,43,28,'#D5C8AE')+E(52,-200,10,8,ink)+(o.close?P('M-23 -220q8 8 16 0M15 -218q8 8 16 0','none',ink,2):E(-15,-220,4,6,ink)+E(25,-218,4,6,ink))+P(o.sad?'M12 -184q10 -8 21 -2':'M12 -186q10 12 21 0','none','#7E8472',2)+line(48,-191,74,-198,'#8F9883',2)+line(48,-184,75,-180,'#8F9883',2)+line(-38,-160,42,-71,o.gray?'#A58D6C':cream,6)+R(17,-94,65,50,o.gray?'#B29776':cream,9);const [l,r]=o.hands??poses[pose];return G(x,y,s,a+arm(-36,-145,...l)+arm(36,-145,...r));}
function camel(x,y,s=1,o={}){
 let a=E(0,0,101,11,ink,'opacity=".12"');
 for(const xx of [-54,-24,35,65])a+=P(o.sit?`M${xx} -39L${xx+10} -15L${xx+22} -8`:`M${xx} -43L${xx-4} -7`,'none','#B37D65',13)+E(o.sit?xx+20:xx-4,-5,13,7,'#9F705D');
 a+=P('M-84 -52Q-110 -76 -104 -96','none','#A67460',7)+P('M-73 -60C-82 -105 -56 -133 -35 -94C-10 -145 23 -130 31 -85Q65 -105 81 -72L87 -44Q-9 -15 -73 -60Z','#BD8B72');
 if(o.bow)a+=P('M55 -74Q65 -130 -7 -133Q-71 -132 -73 -56','none','#C19076',25)+E(-84,-49,33,22,'#C7967D')+P('M-68 -68l-3 -18l15 14','#B88870')+E(-96,-56,4,5,ink)+E(-78,-63,6,6,cream)+P('M-110 -37q10 5 18 0','none','#8C705F',2)+P('M4 -119L11 -142L24 -139L18 -116Z','#6D8D79')+R(6,-117,14,34,'#6D8D79',3);
 else a+=P('M55 -74Q51 -132 65 -174Q72 -198 94 -180L94 -107L83 -56Z','#C19076')+E(90,-176,34,23,'#C7967D')+P('M67 -192l-6 -25l19 20M94 -196l10 -17l2 23','#B88870')+E(94,-183,4,5,ink)+E(77,-184,6,6,cream)+P(o.sad?'M104 -163q9 -6 17 -1':'M103 -167q10 7 18 0','none','#8C705F',2)+P('M64 -134L94 -137L94 -122L64 -118Z','#6D8D79')+R(71,-121,15,37,'#6D8D79',3);
 if(o.touch)a+=P('M55 -49L85 -24L122 -36','none','#B37D65',13);
 return G(x,y,s,o.flip?`<g transform="scale(-1 1)">${a}</g>`:a);
}
function palm(x,y,s=1){return G(x,y,s,P('M-16 0Q-22 -191 8 -360L33 -359Q-6 -163 12 0Z','#B39B76')+Array.from({length:10},(_,j)=>line(-10+j*2,-j*32,15+j,-j*32-8,'#958567',4)).join('')+[-70,-35,0,35,70].map((r,j)=>G(17,-350,1,P('M0 0Q-32 -88 -166 -79Q-62 -45 0 0Z',j%2?'#9BA783':'#8F9F7B'),r)).join('')+[[-12,-321],[11,-316],[28,-329]].map(([a,b])=>E(a,b,8,15,'#B58C60')).join(''));}
function house(x=802,y=478,s=1){return G(x,y,s,R(-118,-158,236,163,'#C4AA85',10)+P('M-140 -154Q-112 -223 0 -230Q112 -221 142 -154Z','#B99A77')+R(-44,-123,88,128,'#8C9F88',36)+R(65,-112,32,35,'#D7C99E',7)+line(81,-111,81,-79,'#A28E6D',3)+R(-58,2,116,12,'#BFA780',4));}
function oasis(kind='home'){return R(0,0,1000,800,'#DFDDC4',0)+cloud(506,106,1.12,'#EDE6CF')+P('M0 346Q263 245 533 347Q781 257 1000 336L1000 800L0 800Z','#D3C29D')+P('M0 536Q480 454 1000 528L1000 800L0 800Z','#DCCDAB')+(kind==='pond'?E(767,432,192,59,'#AEC5B8')+E(768,430,164,42,'#BDD0BF')+palm(922,478,.83):house()+palm(910,484,.93))+grass(57,700,.68,'#A5B18A')+grass(901,741,.7,'#A5B18A');}
function stone(x,y,s=1,half=false,roughRight=false){let a=P('M-150 -17Q-150 -53 -84 -60L102 -57Q156 -47 158 -16L148 21Q-8 58 -146 19Z','#A2A897')+E(3,-21,153,43,'#B4B9A7');if(half)a+=P(roughRight?'M0 -62Q-135 -62 -150 -22Q-146 8 0 21Z':'M0 -62Q138 -62 156 -20Q150 8 0 21Z','#CACDB9')+P(roughRight?'M-119 -21Q-79 -43 -24 -40':'M29 -41Q98 -39 130 -15','none','#E2E1CC',4);for(let j=0;j<17;j++){const xx=-125+(j*47)%258,yy=-42+(j*17)%55;if(!half||(roughRight?xx>8:xx<-8))a+=E(xx,yy,9+(j%3)*3,4+(j%2)*2,'#929E8A')+P(`M${xx-9} ${yy+6}q9 6 19 0`,'none','#C8CCB7',2);}return G(x,y,s,a);}
const pebble=(x,y,s=1,white=false)=>G(x,y,s,E(0,0,33,19,white?'#E0DAC5':'#B9C7BE')+P('M-19 6Q-15 -19 11 -13','none',white?'#F2E9CE':'#E1E5D3',4)+E(12,-4,4,3,cream));
const bagCloth=(x,y,s=1)=>G(x,y,s,P('M-105 -30Q0 -54 114 -20L97 45Q-4 62 -111 26Z',cream)+P('M-99 -22L-111 -46M104 -11l20 -25','none','#BDB699',4));
const bowl=(x,y,s=1)=>G(x,y,s,P('M-83 -17L83 -17L62 30Q0 55 -63 30Z','#A4BAB1')+E(0,-17,83,24,'#CAD5C3')+E(0,-17,69,16,'#A2C1B9'));
const stool=(x,y,s=1)=>G(x,y,s,R(-61,-72,122,18,'#B7A076',5)+R(-50,-54,12,59,'#A48F6B',3)+R(39,-54,12,59,'#A48F6B',3));
const grind=(x,y,s=1)=>G(x,y,s,E(0,0,30,18,'#919D90')+P('M-21 -4Q0 -19 22 -5','none','#BAC0AC',3));
function s506(i,c){if(c)return oasis()+stone(596,683,1.15,true,true)+camel(674,666,.74,{sit:true})+mouse(326,735,1.05,'low',{sit:true,hands:[[-48,-96],[108,-22]]});return [
()=>oasis()+mouse(315,745,1.05,'point')+camel(765,518,.66)+P('M540 706q86 -20 181 0','none','#C4B58F',3),
()=>oasis('pond')+mouse(314,748,1.06,'hold',{hands:[[-22,-107],[110,-107]]})+bagCloth(360,643,.65)+pebble(337,637,.45)+pebble(382,642,.43)+camel(711,727,.7),
()=>oasis('pond')+stone(611,689,1.03)+camel(811,723,.75,{bow:true})+mouse(330,747,1.08,'hold')+pebble(410,617,1,true),
()=>oasis('pond')+bagCloth(561,693,1.35)+stone(568,673,.99)+mouse(329,748,1.05,'open')+camel(853,546,.53),
()=>oasis()+bowl(775,729,.71)+stone(579,698,1.06,true)+stool(329,754,1.1)+mouse(329,747,1.07,'touch',{sit:true,hands:[[-49,-100],[136,-63]]})+grind(475,680,.76)+camel(850,622,.52),
()=>oasis()+stool(320,756,1.0)+mouse(320,747,1.06,'hold',{sit:true,sad:true})+grind(401,619,.71)+stone(584,699,1.08,true)+camel(803,727,.77,{sad:true})+bowl(747,768,.5),
()=>oasis()+mouse(310,748,1.06,'touch',{sit:true,sad:true,hands:[[-45,-98],[158,-100]]})+stone(585,704,1.07,true,true)+camel(670,739,.76,{touch:true,sad:true,flip:true})+grind(367,751,.65)+Array.from({length:21},(_,j)=>E(481+(j*7)%70,647+(j*17)%81,1.8,2.1,'#BBAA80')).join(''),
()=>oasis()+stone(589,700,1.08,true)+camel(620,682,.65,{touch:true,flip:true})+mouse(306,747,1.04,'touch',{sit:true,close:true,hands:[[-50,-98],[163,-71]]})+bowl(762,774,.45),
()=>oasis()+bagCloth(456,721,1.0)+pebble(396,706,.5)+pebble(454,717,.55)+pebble(505,708,.4)+stone(716,694,.8,true)+camel(836,731,.66)+mouse(296,748,1.02,'open',{sit:true,sad:true}),
()=>oasis()+stone(652,699,1.2,true)+camel(575,673,.67,{sit:true})+mouse(316,748,1.08,'open'),
()=>oasis()+bagCloth(601,716,1.38)+stone(605,698,1.08,true,true)+mouse(328,747,1.03,'low',{hands:[[-46,-102],[155,-29]]})+P('M487 717L507 700','none',cream,10)+camel(802,550,.61),
()=>oasis()+stone(612,698,1.15,true,true)+camel(692,673,.72,{sit:true})+mouse(364,742,1.04,'low',{sit:true,hands:[[-48,-101],[103,-23]]})+P('M514 688Q581 725 662 697M628 656L679 741','none','#B4B898',11,'opacity=".4"')
][i]();}
const water=(d,w=7)=>P(d,'none','#9BBDB4',w)+P(d,'none','#C7DAC7',Math.max(1,w*.25));
function wheel(x,y,s=1,turn=false){let a=R(-49,0,13,92,'#A99877',4)+R(36,0,13,92,'#A99877',4)+line(-58,92,57,92,'#A99877',13)+E(0,0,54,54,'none','stroke="#AD9773" stroke-width="9"');for(let j=0;j<8;j++)a+=G(0,0,1,line(0,0,0,-52,'#BAA47F',5)+R(-18,-60,36,16,'#B9A17A',3),j*45+(turn?15:0));a+=E(0,0,11,11,'#8E826B');if(turn)a+=P('M-76 -14Q-79 -57 -50 -75M-50 -75L-65 -72M-50 -75L-49 -60','none','#9CAF9F',3);return G(x,y,s,a);}
function fish(x,y,s=1,rot=0){return G(x,y,s,P('M56 0L98 -36L88 9L103 28L56 12Z',cream)+E(0,0,66,32,cream)+P('M-23 -26Q6 -54 36 -25Z','#D9D9C5')+E(-38,-8,4,5,ink)+P('M-59 5q8 7 15 0','none','#9AA28F',2)+[-7,17,40].map((xx,j)=>E(xx,-11+j%2*3,7,7,'#6A8193')).join('')+P('M-20 10Q-6 28 5 10','none','#ABB5A4',2),rot);}
const dish=(x,y,s=1)=>G(x,y,s,E(0,2,94,24,'#B5B8A1')+E(0,-7,89,22,'#E2DFC5')+E(0,-8,69,14,'#CCD1B8'));
const cup=(x,y,s=1,rot=0)=>G(x,y,s,R(-28,-43,56,56,cream,5)+E(0,-43,28,9,'#B7C9B9')+P('M28 -31Q66 -36 55 -4Q47 8 29 3','none','#D2CEB3',7),rot);
const jug=(x,y,s=1,low=false)=>G(x,y,s,P('M-37 -74L33 -74L43 19Q4 39 -43 18Z','#B6A687')+E(-2,-75,35,10,'#D4C6A6')+P('M37 -57Q83 -67 76 -13Q69 9 44 -4','none','#AA9A7A',10)+P('M-35 -60L-62 -65L-38 -22Z','#B6A687')+P(`M-29 ${low?6:-43}L29 ${low?6:-43}`,'none','#93B4AA',4));
const bamboo=(x,y,s=1,rot=0)=>G(x,y,s,R(-137,-14,274,28,'#BCA772',7)+P('M-130 -9L132 -9L126 8L-129 8Z','#8FAE9F')+[-90,-20,49,113].map(xx=>line(xx,-11,xx,11,'#9C9168',3)).join(''),rot);
function cave({dry=false,trough=false,half=false,lower=false,flow=true,early=false}={}){let a=R(0,0,1000,800,'#CAD4C2',0)+P('M0 800L0 0L1000 0L1000 800L935 800L935 270Q857 82 587 127Q302 138 91 434L91 800Z','#A3ADA0')+P('M0 610Q481 547 1000 633L1000 800L0 800Z','#B3B8A0')+P('M605 205Q682 169 807 211L847 537L685 688L469 688Q601 444 605 205Z',dry?'#A3AA87':'#93AC83')+P('M685 688L845 538L871 550L709 711L473 710L469 688Z','#8D9D82')+P('M733 126l-17 45l25 22l-23 34','none','#788F85',9)+P('M707 698L711 740Q844 778 1000 739','none','#8B9F91',32)+P('M707 698L711 740Q844 778 1000 739','none','#B6C5B0',15);
for(let j=0;j<35;j++){const yy=272+(j*47)%398,xx=624-(yy-272)*.2+(j*19)%170;a+=grass(xx,yy,.16+(j%3)*.025,dry?'#8C9978':'#718F6D');}
a+=water('M731 190L721 245',5);
if(trough){a+=P('M769 444L960 444L958 630L803 616Z','#A4B09E')+R(807,410,82,34,'#B2B9A2',3)+bamboo(790,266,.69,8)+water('M880 278L875 325',half?3:7)+water('M846 392L910 431Q977 469 942 573L969 644',half?3:7)+P('M956 624l18 24l-20 32','none','#83988B',6);if(half)a+=water('M718 243L691 315Q724 450 642 570L677 651',3);}
else if(flow){a+=water(early?'M721 245Q712 292 683 339L685 398':'M721 245Q712 292 683 339Q749 441 658 522Q613 581 679 654L709 688',early?3:7);if(!early)a+=water('M709 688L711 740Q844 778 1000 739',7);else a+=E(708,737,23,7,'#9CBEB0');}
if(lower)a+=P('M662 729L805 729L832 761L655 761Z','#A7AD98');return a;}
function book(x,y,s=1){return G(x,y,s,P('M-82 -42Q-44 -60 0 -36Q45 -60 82 -42L82 45Q44 28 0 49Q-44 28 -82 45Z',cream)+line(0,-36,0,47,'#B7B496',3)+P('M15 3q22 -20 50 0q-21 28 -50 0M65 3l10 -12l-2 23Z','#95B4AC')+[-19,0,19].map(yy=>line(-65,yy,-17,yy+3,'#B7BDA6',3)).join(''));}
function s507(i,c){if(c)return cave({lower:true})+wheel(717,671,.64,true)+dish(845,744,.63)+fish(815,538,.59,-18)+mouse(322,744,1.08,'point',{gray:true});return [
()=>cave()+mouse(325,745,1.05,'hold',{gray:true})+fish(400,617,.61)+dish(858,740,.52),
()=>cave()+R(535,550,345,28,'#B6B79F',6)+R(560,577,28,167,'#9BA78F',5)+R(828,577,28,167,'#9BA78F',5)+R(569,461,117,86,'#B29E7D',6)+R(571,390,112,70,'#C4B28E',4)+wheel(753,485,.71)+dish(828,548,.42)+fish(826,532,.4)+mouse(333,746,1.02,'point',{gray:true,hands:[[-45,-104],[168,-204]]}),
()=>cave({trough:true})+wheel(846,355,.61,true)+dish(876,440,.47)+fish(442,405,.65,-14)+mouse(337,747,1.1,'open',{gray:true,hands:[[-70,-244],[108,-248]]}),
()=>cave({trough:true,dry:true})+wheel(846,355,.61,true)+dish(876,440,.47)+fish(844,508,.53,9)+mouse(392,745,1.02,'touch',{gray:true,sit:true,hands:[[-48,-102],[180,-151]]}),
()=>cave({trough:true,dry:true})+wheel(846,355,.61,true)+dish(877,441,.46)+fish(819,520,.49,-9)+mouse(355,746,1.01,'point',{gray:true,hands:[[-59,-110],[169,-181]]})+cup(526,563,.66,-24)+water('M545 542Q602 531 637 578',4)+jug(267,760,.7,true),
()=>cave({trough:true,half:true,dry:true})+wheel(846,355,.61)+dish(876,440,.47)+fish(872,416,.42)+R(595,530,160,145,'#ABB39D',4)+mouse(663,535,.94,'point',{gray:true,hands:[[-50,-105],[54,-273]],sad:true}),
()=>cave({trough:true,half:true,dry:true})+wheel(846,355,.61)+dish(876,440,.47)+fish(872,416,.42)+R(658,600,155,109,'#A9B19C',5)+mouse(750,612,.94,'point',{gray:true,hands:[[-49,-103],[170,-165]]})+cup(927,466,.56),
()=>cave({early:true,lower:true})+bamboo(541,755,.54,-6)+mouse(343,744,1.05,'hold',{gray:true,hands:[[15,-115],[125,-115]]})+dish(414,623,.63)+fish(414,604,.54)+wheel(780,659,.62),
()=>cave({early:true,lower:true})+wheel(717,671,.64)+dish(847,743,.59)+fish(847,724,.51)+bamboo(547,761,.43,-7)+mouse(518,747,1.04,'touch',{gray:true,sit:true,hands:[[-45,-104],[145,-72]]}),
()=>cave({early:true,lower:true})+wheel(717,671,.64)+dish(849,743,.59)+fish(849,724,.51)+mouse(416,744,1.04,'low',{gray:true,sit:true}),
()=>cave({lower:true})+wheel(717,671,.64,true)+dish(849,743,.59)+mouse(415,743,1.06,'open',{gray:true})+fish(537,701,.56,-9)+[614,644,672].map((xx,j)=>E(xx,589+j*8,5,8,'#D0E2CE')).join(''),
()=>cave({lower:true,early:true})+wheel(717,671,.64)+dish(850,743,.58)+fish(850,724,.5)+mouse(459,742,1.03,'hold',{gray:true,sit:true,hands:[[-22,-122],[106,-119]]})+book(503,624,.77)
][i]();}
const scenes={'expansion-0506':s506,'expansion-0507':s507};
export function thirteenthMiddleLastExtraArtwork(story,index,cover=false){if(!Object.hasOwn(scenes,story?.id)||story.status!=='text-ready'||story.ageBand!=='6-8'||!Array.isArray(story.pages)||story.pages.length!==12||story.provenance?.review!=='full-text-reviewed'||typeof story.title!=='string'||!story.title.trim()||story.pages.some((p,j)=>p?.id!==`p${String(j+1).padStart(2,'0')}`||typeof p.text!=='string'||!p.text.trim()||typeof p.scene?.action!=='string'||!p.scene.action.trim())||!Number.isInteger(index)||index<0||index>=12||typeof cover!=='boolean')throw Error('Unsupported reviewed thirteenth middle last extra story');return svg(scenes[story.id](index,cover),`${story.title} · ${cover?'封面':story.pages[index].scene.action}`,cover);}

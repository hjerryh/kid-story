// Independent page compositions for expansion-0281…0288; original vector artwork.
import {E,R,P,G,line,leaf,grass,flower,tree,cloud,svg} from '../render-illustrations.mjs';
const ink='#43534E',cream='#F1E9D5',skin='#E1C2A4';
const cfg={豆芽:['human',skin,'#A6BE99'],芦米:['raccoon','#ABA38D','#A4C4D5'],杏耳:['fox','#D8BD88','#88ACBD'],梨米:['mouse','#BAA384','#B67F91'],茸杏:['mouse','#BBA788','#A997BE'],苇芽:['wind',skin,'#EAEBDD'],墨团:['mole','#7D827B','#A99ABD'],芽点:['sprout','#B8A07E','#89ADBF'],蒲蒲:['raccoon','#AAA18C','#82B0BE']};
function a(x,y,dx,dy,c,w=20){return P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.6-8} ${x+dx} ${y+dy}`,'none',c,w);}
function hat(x,y,s=1,c=cream){return G(x,y,s,P('M-54 0 Q-69 -38 -34 -55 Q-6 -77 24 -51 Q59 -47 55 -4Z',c)+E(0,0,67,13,c)+P('M-46 -7 Q0 6 47 -7','none','#C8C0A6',3));}
function stripesTail(x,y,s=1,low=false){return G(x,y,s,P(low?'M0 0 Q85 4 75 69':'M0 0 Q-105 33 -99 -86','none','#AAA18C',38)+(low?P('M34 8 L30 32 M60 21 L42 43 M75 45 L51 55','none','#62665D',13):P('M-36 -1 L-39 25 M-67 -9 L-80 15 M-82 -35 L-108 -25 M-84 -61 L-112 -57','none','#62665D',13)));}
function kid(name,x,y,s=1,pose='stand',opts={}){
 const [t,f,c]=cfg[name],arms={stand:[[-12,63],[12,63]],hold:[[38,45],[-38,45]],point:[[-10,64],[80,-18]],wave:[[-11,62],[44,-80]],think:[[35,-32],[10,64]],wide:[[-45,20],[45,20]],up:[[-26,-64],[26,-64]]}[pose];
 let z=E(0,0,83,13,'#687866','opacity=".12"');
 if(t==='raccoon'&&!opts.hideTail)z+=stripesTail(-38,-48,1,opts.lowTail);
 if(t==='mouse'&&!opts.hideTail)z+=P('M42 -47 Q111 -7 123 -65','none',f,8);
 if(t==='fox'&&!opts.hideTail)z+=P('M42 -49 Q130 -13 146 -103 Q112 -99 91 -73 Q70 -79 42 -49Z',f)+P('M121 -92 Q135 -101 146 -103 Q140 -73 124 -57 L113 -71Z','#EAE1C7');
 if(t==='sprout')z+=R(44,-169,50,91,cream,12)+line(-40,-169,50,-65,'#CDBD97',9);
 z+=E(-29,-10,27,16,f)+E(29,-10,27,16,f)+E(0,-105,61,89,f);
 if(name==='芦米')z+=R(-54,-82,108,56,c,9)+R(-54,-39,44,20,c,5)+R(10,-39,44,20,c,5);
 else if(name==='苇芽')z+=R(-53,-85,47,63,'#9EB8CC',20)+R(6,-85,47,63,'#9EB8CC',20)+P('M-46 -178 L46 -178 L59 -76 Q0 -57 -59 -76Z',c)+line(0,-166,0,-78,'#C8D0BB',3);
 else if(name==='梨米')z+=P('M-47 -161 L47 -161 L70 -29 Q0 -12 -70 -29Z',c)+line(-30,-181,-27,-132,c,15)+line(30,-181,27,-132,c,15)+R(-21,-119,42,31,'#C396A1',5);
 else if(name==='豆芽')z+=P('M-45 -177 L45 -177 L72 -30 Q0 -13 -72 -30Z',c)+R(-43,-31,26,24,'#F3EFDD',4)+R(17,-31,26,24,'#F3EFDD',4)+E(-30,-9,28,14,'#987F61')+E(30,-9,28,14,'#987F61');
 else if(name==='茸杏')z+=P('M-50 -177 L50 -177 L62 -31 Q0 -11 -62 -31Z',c)+line(0,-169,0,-34,'#8F80A8',3)+[-142,-106,-69].map(yy=>line(-51,yy,51,yy,'#BDB0CC',3)).join('')+R(-49,-27,40,26,'#6C899E',6)+R(9,-27,40,26,'#6C899E',6);
 else z+=P('M-48 -177 L48 -177 L57 -58 Q0 -39 -57 -58Z',c)+(name==='墨团'?line(-30,-183,-30,-139,c,12)+line(30,-183,30,-139,c,12):'');
 if(t==='mouse'||t==='raccoon'||t==='mole')z+=E(-49,-267,t==='mouse'?30:23,t==='mouse'?32:24,f)+E(49,-267,t==='mouse'?30:23,t==='mouse'?32:24,f)+(t==='mouse'?E(-49,-267,18,20,'#D4B1A6')+E(49,-267,18,20,'#D4B1A6'):'');
 if(t==='fox')z+=P('M-57 -246 L-74 -328 Q-29 -321 -19 -272Z',f)+P('M57 -246 L74 -328 Q29 -321 19 -272Z',f)+P('M-52 -271 L-63 -306 L-33 -278Z','#E5CCB0')+P('M52 -271 L63 -306 L33 -278Z','#E5CCB0');
 z+=E(0,-222,64,59,f);
 if(t==='human')z+=P('M-63 -211 L-65 -267 Q-39 -305 0 -296 Q45 -298 65 -265 L63 -211 L49 -216 L44 -257 L15 -253 L-7 -267 L-43 -252 L-49 -214Z','#454A42');
 if(t==='wind')z+=P('M-62 -220 Q-71 -280 -34 -289 Q13 -310 53 -274 L64 -220 L43 -241 L15 -256 L-8 -244 L-37 -259 L-49 -229Z','#AEC8A1')+hat(0,-282,.83,'#9CB993');
 if(t==='sprout')z+=P('M-58 -246 L-61 -270 L-31 -265 L-20 -287 L0 -275 L27 -287 L38 -266 L61 -272 L57 -247Z',f)+leaf(-22,-290,.5,'#AEC695',-45)+leaf(0,-305,.53,'#92B27D',0)+leaf(24,-289,.5,'#A8C48D',47)+P('M-39 -235 L-33 -220 M31 -254 L35 -240 M-21 -123 L-17 -93 M31 -107 L27 -84','none','#9C8768',3);
 if(t==='raccoon')z+=E(-26,-229,26,19,'#575F54','transform="rotate(-17 -26 -229)"')+E(26,-229,26,19,'#575F54','transform="rotate(17 26 -229)"');
 if(['raccoon','mole','mouse'].includes(t))z+=E(0,-201,33,25,'#E4D5B9');
 if(t==='fox')z+=P('M-59 -222 Q-35 -232 0 -208 Q35 -232 59 -222 L27 -184 L0 -170 L-27 -184Z','#EEE5CE');
 z+=opts.closed?P('M-32 -230 Q-23 -223 -14 -230 M14 -230 Q23 -223 32 -230','none',ink,3):E(-23,-229,5,7,t==='raccoon'?'#EEE7D4':ink)+E(23,-229,5,7,t==='raccoon'?'#EEE7D4':ink);
 z+=E(0,-206,t==='mole'?17:8,t==='mole'?11:6,['mole','mouse'].includes(t)?'#C99D97':'#82735A')+(opts.worried?P('M-11 -186 Q0 -194 11 -186','none','#7F725D',3):P('M-11 -187 Q0 -179 11 -187','none','#7F725D',3));
 if(t==='fox')z+=hat(0,-284,.76);
 if(arms)z+=a(-44,-152,...arms[0],name==='茸杏'?c:f,22)+a(44,-152,...arms[1],name==='茸杏'?c:f,22)+(name==='茸杏'?E(-44+arms[0][0],-152+arms[0][1],14,17,'#95B18C')+E(44+arms[1][0],-152+arms[1][1],14,17,'#95B18C'):'');
 if(name==='墨团')z+=line(-49,-172,52,-76,'#C6B797',8)+R(34,-96,63,58,cream,11)+P('M46 -96 Q46 -124 65 -124 Q85 -124 85 -96','none','#B6A584',5);
 return G(x,y,s,z+(opts.extra||''),opts.rotate||0);
}
function sit(name,x,y,s=1,pose='hold',opts={}){const id=`seat-${name}-${x}-${y}`,f=cfg[name][1],t=cfg[name][0];const tail=t==='raccoon'?stripesTail(x-44*s,y+2*s,s):t==='mouse'?G(x,y,s,P('M42 2 Q113 31 125 -47','none',f,8)):'';return tail+`<defs><clipPath id="${id}"><rect x="${x-180*s}" y="${y-480*s}" width="${360*s}" height="${492*s}"/></clipPath></defs><g clip-path="url(#${id})">${kid(name,x,y+80*s,s,pose,{...opts,hideTail:true})}</g>`+G(x,y,s,a(-27,0,-6,52,f)+a(27,0,6,52,f)+(name==='豆芽'?R(-45,35,25,22,'#F2EFDF',4)+R(20,35,25,22,'#F2EFDF',4):'')+E(-34,58,25,14,name==='豆芽'?'#987F61':name==='茸杏'?'#6C899E':f)+E(34,58,25,14,name==='豆芽'?'#987F61':name==='茸杏'?'#6C899E':f));}
function floorKid(name,x,y,s=1,pose='hold',opts={}){const id=`floor-${name}-${x}-${y}`,f=cfg[name][1],t=cfg[name][0];const tail=t==='mouse'?G(x,y,s,P('M42 -3 Q113 23 125 -49','none',f,8)):t==='fox'?G(x,y,s,P('M40 -10 Q128 8 144 -71 Q110 -67 89 -41 Q68 -47 40 -10Z',f)+P('M119 -61 Q133 -69 144 -71 Q138 -41 122 -25 L111 -39Z','#EEE5CE')):'';return tail+`<defs><clipPath id="${id}"><rect x="${x-190*s}" y="${y-480*s}" width="${380*s}" height="${485*s}"/></clipPath></defs><g clip-path="url(#${id})">${kid(name,x,y+80*s,s,pose,{...opts,hideTail:true})}</g>`+G(x,y,s,E(-30,0,53,19,f,'transform="rotate(12 -30 0)"')+E(30,0,53,19,f,'transform="rotate(-12 30 0)"')+(name==='豆芽'?E(-65,2,18,13,'#987F61')+E(65,2,18,13,'#987F61'):name==='茸杏'?E(-65,2,19,13,'#6C899E')+E(65,2,19,13,'#6C899E'):''));}
function stool(x,y,s=1){return G(x,y,s,R(-43,0,13,80,'#A58C68',4)+R(30,0,13,80,'#A58C68',4)+E(0,-7,61,20,'#CEB58C'));}
function table(x,y,s=1){return G(x,y,s,R(-149,0,18,125,'#A58C69',4)+R(131,0,18,125,'#A58C69',4)+P('M-173 -43 L149 -43 L179 0 L-143 0Z','#D8BF92')+R(-144,0,323,16,'#BA9D72',5));}
function room(night=false){return R(0,0,1000,800,'#DED3B9',0)+R(0,615,1000,185,'#BFAE8F',0)+line(0,615,1000,615,'#A99776',6)+[180,410,660,880].map(x=>line(x,615,x+27,800,'#AC9B7D',2)).join('')+R(660,111,258,339,'#AEAC92',48)+R(678,128,222,304,night?'#63808A':'#C7D8CC',38)+(night?E(824,209,30,30,'#E9DEB4'):cloud(780,222,.43,'#F1ECDA'))+line(790,129,790,432,'#D6C7A8',7)+R(640,432,295,22,'#B59C74',5);}
function towel(x,y,s=1,c='#E2D4A3',r=0){return G(x,y,s,R(-44,-65,88,130,c,8)+[-27,-9,9,27].map(xx=>line(xx,-53,xx,55,'#C5BF99',3)).join('')+P('M-33 61 L-33 73 M-11 61 L-11 73 M11 61 L11 73 M33 61 L33 73','none','#B9B58E',3),r);}
function plate(x,y,s=1){return G(x,y,s,E(0,0,70,22,'#EAE1C2')+E(0,0,54,14,'#D7D4AF'));}
function daisy(x,y,s=1){return G(x,y,s,[0,60,120,180,240,300].map(r=>G(0,0,1,E(0,-13,8,15,'#F3EBD6'),r)).join('')+E(0,0,7,7,'#D9C18A'));}
function attic(){return room()+P('M0 0 L500 0 L0 236Z','#BCA788')+P('M500 0 L1000 0 L1000 236Z','#BCA788')+line(0,238,500,17,'#AA9271',20)+line(500,17,1000,238,'#AA9271',20)+E(496,706,405,70,'#B6BA96')+E(496,704,371,52,'none','stroke="#CFD0A9" stroke-width="5"')+R(688,501,223,140,'#BDA47D',9)+R(677,483,245,25,'#D6BE94',5)+R(706,532,188,66,'#C8AF88',7)+E(800,565,7,7,'#A28A62')+tree(846,416,.35,'#A4B88D')+flower(719,418,.45,'#D7AD77');}
function hen(x,y,s=1,c='#C59083',part='whole',offset=0){
 const lower=P('M-68 -65 L68 -65 Q70 -3 0 0 Q-70 -3 -68 -65Z',c)+E(0,-65,68,13,'#BBAA8A')+E(0,-65,54,8,'#8F816A');
 const upper=P('M-68 -65 Q-73 -130 -39 -152 Q-43 -197 -10 -203 Q24 -210 37 -175 Q74 -161 68 -65Z',c)+P('M-26 -197 Q-38 -220 -23 -222 Q-10 -225 -6 -210 Q3 -235 16 -221 Q24 -212 13 -199Z','#B87C71')+E(-6,-177,4.5,5.5,ink)+E(23,-176,4.5,5.5,ink)+P('M4 -164 L23 -157 L6 -150Z','#D7B477')+P('M-50 -104 Q-30 -126 -9 -101 Q-25 -73 -50 -104Z','#E2B7A0');
 const petalLow=`<g clip-path="url(#hen-l-${x}-${y})">${daisy(-13,-65,.55)}</g>`,petalTop=`<g clip-path="url(#hen-u-${x}-${y})">${daisy(-13+offset,-65,.55)}</g>`;
 let z=`<defs><clipPath id="hen-l-${x}-${y}"><rect x="-90" y="-65" width="180" height="100"/></clipPath><clipPath id="hen-u-${x}-${y}"><rect x="-90" y="-230" width="180" height="165"/></clipPath></defs>`;
 if(part==='lower')z+=lower+petalLow;else if(part==='upper')z+=upper+E(0,-65,68,10,'#A38B69')+petalTop;else z+=lower+upper+line(-66,-65,66,-65,'#997F62',2.2)+petalLow+petalTop;
 return G(x,y,s,z);
}
function chick(x,y,s=1){return G(x,y,s,E(0,-30,32,33,'#E9D6A3')+E(0,-60,25,25,'#E9D6A3')+P('M-7 -82 Q-19 -100 -7 -102 Q7 -101 7 -84 Q16 -104 22 -96 L17 -80Z','#D8AA70')+E(-9,-62,3,4,ink)+E(9,-62,3,4,ink)+P('M-4 -53 L8 -49 L-4 -44Z','#C6955E')+E(-15,-3,12,5,'#C7A16D')+E(15,-3,12,5,'#C7A16D'));}
function shells(y=719){return hen(627,y,.72,'#C58D81','lower')+hen(747,y-4,.72,'#C58D81','upper')+hen(547,y+18,.53,'#DBC17F','lower')+hen(832,y+17,.53,'#DBC17F','upper');}
function nestedScene(i,cover){
 if(cover)return attic()+floorKid('豆芽',350,704,1.18,'wave')+hen(553,706,.77)+hen(696,714,.58,'#DBC17F')+hen(810,719,.4,'#92B5C8')+chick(753,746,.5);
 return [
 ()=>attic()+floorKid('豆芽',451,711,1.12,'think')+hen(798,485,.77),
 ()=>attic()+floorKid('豆芽',437,710,1.16,'back')+hen(440,714,.55)+P('M387 625 Q391 682 409 686 M487 625 Q492 682 473 686','none',skin,24),
 ()=>attic()+floorKid('豆芽',405,709,1.16,'back')+hen(574,707,.79,'#C58D81','whole',19)+P('M455 624 Q491 613 541 591 M355 624 Q405 710 548 695','none',skin,23),
 ()=>attic()+floorKid('豆芽',388,711,1.17,'back')+hen(569,704,.5,'#DBC17F')+hen(569,711,.81,'#C58D81','lower')+hen(584,661,.81,'#C58D81','upper')+P('M438 626 Q472 580 543 553 M338 626 Q407 708 540 699','none',skin,23)+P('M645 575 Q675 590 657 614','none','#C4B58E',3),
 ()=>attic()+floorKid('豆芽',389,711,1.16,'back')+hen(574,720,.78,'#C58D81','lower')+hen(750,714,.78,'#C58D81','upper')+hen(457,682,.52,'#DBC17F')+P('M339 626 Q374 680 431 672 M439 626 Q482 649 481 672','none',skin,23),
 ()=>attic()+floorKid('豆芽',385,709,1.16,'back')+shells()+hen(472,684,.38,'#92B5C8')+P('M435 624 Q450 672 487 678 M335 624 Q371 687 455 680','none',skin,22),
 ()=>attic()+floorKid('豆芽',370,710,1.15,'back')+shells()+hen(523,745,.39,'#92B5C8','lower')+hen(884,750,.39,'#92B5C8','upper')+P('M419 626 Q454 630 489 603 M321 626 Q341 672 375 679','none',skin,23)+chick(488,602,.55),
 ()=>attic()+floorKid('豆芽',341,703,1.12,'hold')+hen(552,710,.76)+hen(695,718,.57,'#DBC17F')+hen(822,720,.39,'#92B5C8')+chick(764,736,.5)
 ][i]();
}
function bathBasin(x=535,y=733,s=1,front=false){return G(x,y,s,front?P('M-216 2 Q0 67 216 2 L200 32 Q0 94 -200 32Z','#AEC4B6')+P('M-216 2 Q0 67 216 2','none','#8FAE9F',6):E(0,0,220,54,'#BFD3C7')+E(0,-1,201,41,'#A7C6C2'));}
function waterBucket(x,y,s=1){return G(x,y,s,P('M-51 -62 L51 -62 L42 27 Q0 47 -42 27Z','#BCA57D')+E(0,-62,51,16,'#D4C09B')+E(0,-62,41,11,'#A5C7C5')+[-27,-9,9,27].map(xx=>line(xx,-45,xx*.8,22,'#A38B66',3)).join('')+P('M-48 -54 Q-54 -110 0 -111 Q54 -110 48 -54','none','#A38D6A',5));}
function rainFlower(cx=552,cy=269,closed=false){return P(`M823 647 Q835 477 ${cx+118} ${cy+94} Q${cx+63} ${cy+35} ${cx} ${cy}`,'none','#8DAB82',15)+leaf(787,510,.9,'#A4BF98',-57)+leaf(804,558,.79,'#A1B98D',55)+G(cx,cy,1,(closed?P('M-73 -15 Q-64 -78 -32 -51 Q0 -94 28 -51 Q63 -78 75 -15 Q0 46 -73 -15Z','#CAA0B0'):[0,60,120,180,240,300].map(r=>G(0,0,1,E(0,-47,37,62,'#D4ADBB'),r)).join(''))+E(0,0,34,34,'#E6D2A6')+E(-11,-4,3.7,4.5,ink)+E(11,-4,3.7,4.5,ink)+P('M-10 11 Q0 19 10 11','none','#887351',3));}
function rainLines(coords){return coords.map(([x,y,len])=>P(`M${x} ${y} Q${x-2} ${y+len*.4} ${x+2} ${y+len}`,'none','#94BFC4',3)).join('');}
function yard(night=false){return R(0,0,1000,800,night?'#647F88':'#C9DBD1',0)+E(852,132,38,38,night?'#ECE1BA':'#E5D9AE')+R(0,245,300,438,'#D9CEAF',9)+P('M0 261 L160 151 L332 261Z','#A5AE8A')+R(90,365,144,303,'#9CA78B',62)+R(108,383,108,275,night?'#D7BC86':'#CFD4B0',50)+P('M0 676 Q488 590 1000 667 L1000 800 L0 800Z','#B8C5A4')+grass(53,703,.7)+grass(927,702,.85);}
function raccoonBack(x,y,s=1,clean=false,point=false){let z=stripesTail(24,-45,.83,true)+P('M-45 -191 Q-21 -177 -14 -157','none','#ABA38D',37)+E(-30,-8,28,15,'#ABA38D')+E(35,-8,28,15,'#ABA38D')+P('M-34 -171 Q11 -208 51 -158 L62 -65 L-48 -66Z','#ABA38D')+R(-48,-76,110,55,'#A4C4D5',12)+E(-47,-240,22,24,'#ABA38D')+E(-111,-221,21,24,'#ABA38D')+E(-78,-212,58,53,'#ABA38D')+E(-101,-212,26,18,'#576052')+E(-106,-212,5,6,'#F0E8D6')+E(-122,-186,31,22,'#E5D7BA')+E(-142,-191,7,6,'#81725A')+P('M-128 -174 Q-115 -169 -105 -176','none','#84735B',3)+P('M-39 -148 Q-69 -103 -102 -105','none','#ABA38D',23)+(point?P('M38 -150 Q76 -193 21 -180','none','#ABA38D',23):P('M38 -151 Q50 -107 5 -113','none','#ABA38D',23));if(!clean)z+=P('M6 -172 L16 -187 L20 -170 L33 -183 L36 -164 L47 -174','none','#9D8C62',5);return G(x,y,s,z);}
function bathScene(i,cover){
 const body=(stage)=>yard()+waterBucket(823,691,.9)+rainFlower(stage>=5?682:557,stage>=5?431:269,stage===4||stage===6);
 if(cover)return yard(true)+waterBucket(823,690,.82)+rainFlower(714,379,true)+kid('芦米',398,738,1.15,'wave')+P('M343 549 Q398 578 453 549 L465 646 Q398 665 331 646Z','#EDE5CB')+towel(220,498,.77,'#E2D4A3')+line(163,444,277,444,'#A39675',4);
 return [
 ()=>room()+R(642,474,140,171,'#BBA27A',8)+R(660,492,104,112,'#CCB68D',6)+P('M684 520 L697 542 L713 522','none','#B39D69',7)+table(776,684,.65)+plate(770,653,.6)+P('M765 613 Q751 628 765 639 L780 639 Q794 626 780 613Z','#E8D7A4')+line(773,612,777,599,'#8C7E5D',4)+kid('芦米',445,723,1.14,'back')+P('M495 550 Q521 588 493 609 M395 550 Q362 569 350 590','none','#ABA38D',23)+towel(339,635,.64)+P('M484 560 L500 547 L503 565 L517 554','none','#9D8C62',5),
 ()=>body(1)+bathBasin()+kid('芦米',535,729,1.05,'wide')+P('M486 549 Q536 585 585 549 L596 606 L474 606Z','#E2D4A3')+rainLines([[475,358,45],[525,376,38],[585,365,42]])+bathBasin(535,733,1,true),
 ()=>body(2)+bathBasin()+kid('芦米',550,729,1.05,'hold',{closed:true,worried:true})+rainLines([[522,359,108],[550,377,132],[579,362,132],[542,496,48]])+towel(719,715,.55)+bathBasin(535,733,1,true),
 ()=>body(3)+bathBasin()+kid('芦米',543,730,1.04,'back',{closed:true,worried:true})+P('M497 572 Q510 522 516 501 M589 572 Q583 532 572 504','none','#ABA38D',22)+P('M503 494 Q543 485 585 494 L583 716 L546 743 L511 717Z','#D7D0AA')+line(524,516,530,708,'#B7BFAC',3)+line(567,518,560,717,'#B7BFAC',3)+rainLines([[514,359,122],[554,377,107],[578,361,123],[596,526,91]])+bathBasin(535,733,1,true)+P('M596 583 L609 571 L612 589 L624 579','none','#9D8C62',5),
 ()=>body(4)+bathBasin()+kid('芦米',525,730,1.07,'point')+towel(732,718,.61)+bathBasin(535,733,1,true),
 ()=>body(5)+bathBasin()+raccoonBack(585,731,1.07,false,true)+bathBasin(535,733,1,true)+towel(734,715,.59),
 ()=>body(6)+bathBasin()+raccoonBack(585,731,1.07,true,false)+E(618,525,5,7,'#9BBFC5')+bathBasin(535,733,1,true)+towel(734,715,.59),
 ()=>yard(true)+waterBucket(823,692,.81)+rainFlower(710,398,true)+line(164,443,278,443,'#AA9A78',4)+towel(220,498,.77,'#E2D4A3')+stool(408,675,1.08)+sit('芦米',408,653,1.13,'hold')+P('M355 548 Q409 577 461 548 L474 637 Q410 658 342 637Z','#ECE4CB')
 ][i]();
}
function station(x=123,y=522,s=1,lit=false){return G(x,y,s,R(-111,-247,222,247,'#C5B795',14)+P('M-129 -243 L0 -342 L130 -243Z','#A49F83')+E(0,-172,49,49,'#918F78')+E(0,-172,36,36,lit?'#E7D39A':'#D7DDC5')+line(0,-207,0,-137,'#B9AA87',5)+line(-34,-172,34,-172,'#B9AA87',5)+R(-36,-84,72,84,'#A09274',30));}
function desert(stage=0,reverse=false){const night=stage>=5;return R(0,0,1000,800,night?'#7D8E96':'#CABDB0',0)+(stage===7?E(839,125,37,37,'#ECE0B4'):E(824,153,48,48,'#E6CCA0'))+P('M0 439 Q200 358 421 446 Q685 335 1000 425 L1000 800 L0 800Z','#D1B98C')+P('M0 686 Q369 603 1000 686 L1000 800 L0 800Z','#DCC79A')+(reverse?station(867,423,.53,true):station(137,528,.89,stage>=2));}
function dune(face='none',bump=false,reverse=false){let z=P(reverse?'M38 666 Q76 479 291 402 Q506 369 645 535 Q693 607 704 666Z':'M293 671 Q330 453 563 397 Q769 366 942 545 L998 674Z','#CDAF76')+P(reverse?'M64 658 Q371 589 682 659':'M318 662 Q634 587 978 662','none','#D8BA83',5);
 if(face==='round')z+=P('M537 530 Q562 547 587 530 M649 530 Q674 547 699 530','none','#967A52',5)+E(615,588,43,34,'#DEC18A')+P('M587 630 Q614 641 642 629','none','#A38559',4);
 if(face==='point')z+=P('M402 529 Q427 544 451 529 M503 529 Q527 544 551 529','none','#967A52',5)+P('M470 560 Q497 555 534 594 Q490 615 466 593Z','#DFC18A')+P('M457 626 Q483 639 509 625','none','#A38559',4);
 if(bump)z+=E(576,644,35,19,'#DFBF84');return z;}
function duneScene(i,cover){
 if(cover)return desert(6,true)+dune('point',false,true)+kid('杏耳',705,742,1.06,'wave')+[[794,748],[836,739],[871,726]].map(([x,y])=>E(x,y,9,4,'#BFA57B')).join('');
 return [
 ()=>desert()+dune('round')+kid('杏耳',407,727,1.07,'back')+P('M453 564 Q513 571 580 586 M361 564 Q343 611 367 631','none','#D8BD88',23),
 ()=>desert(1)+dune()+kid('杏耳',397,728,1.07,'back',{worried:true})+P('M443 565 Q499 584 558 597 M351 565 Q330 609 352 632','none','#D8BD88',23),
 ()=>desert(2)+dune()+kid('杏耳',414,727,1.08,'think',{worried:true}),
 ()=>desert(3)+dune('none',true)+floorKid('杏耳',448,726,1.1,'back')+P('M495 646 Q534 644 563 632 M400 646 Q395 689 430 696','none','#D8BD88',23)+[540,549,558].map((x,j)=>E(x,667+j*4,3,2,'#BDA16C')).join(''),
 ()=>desert(4)+dune('none',true)+kid('杏耳',427,729,1.06,'think')+P('M764 511 Q788 499 808 511 M765 527 Q795 517 814 531','none','#AD9670',3),
 ()=>desert(5,true)+dune('point',false,true)+kid('杏耳',797,723,.99,'wave')+P('M708 737 Q749 756 795 751 M726 758 L745 761 M757 769 L775 769','none','#B99F77',3),
 ()=>desert(6,true)+dune('point',false,true)+kid('杏耳',680,726,1.06,'back')+P('M634 565 Q595 574 531 594 M726 565 Q746 606 727 632','none','#D8BD88',23),
 ()=>desert(7)+dune('none',true)+kid('杏耳',275,732,1.0,'wave')+[[346,739],[389,752],[432,744],[476,759],[521,745],[565,754],[611,740],[657,749],[700,731]].map(([x,y])=>E(x,y,10,4,'#C0A77E')).join('')
 ][i]();
}
function snowRoom(){return room(true)+[[-66,-78],[-24,-105],[39,-68],[60,-132],[-53,25],[20,53],[63,1],[-14,1]].map(([dx,dy])=>E(792+dx,298+dy,3,4,'#D9E0D3')).join('')+R(100,337,185,246,'#BCAB8F',9)+R(116,355,153,194,'#D6C5A3',6)+R(99,578,189,20,'#A89372',4);}
function yarnLion(x,y,s=1,pose='stand',tail='up'){
 const f='#D8BB7A';let z=E(0,0,88,14,'#8C8F72','opacity=".13"');if(tail==='up')z+=P('M44 -88 Q145 -98 124 -224','none',f,15)+E(122,-227,24,25,f);else if(tail==='wave')z+=P('M43 -92 Q124 -102 143 -133','none',f,15)+E(143,-137,24,25,f);else if(tail==='hidden')z+=P('M39 -54 Q73 -53 69 -89','none',f,13);
 z+=E(-29,-12,31,19,f)+E(29,-12,31,19,f)+E(0,-105,67,94,f)+E(0,-222,82,79,'#C7A76A')+Array.from({length:12},(_,j)=>{let ang=j*Math.PI/6;return E(Math.cos(ang)*69,-223+Math.sin(ang)*66,24,25,'#D3B476')+P(`M${Math.cos(ang)*69-11} ${-223+Math.sin(ang)*66} q8 -13 16 -2 q4 10 -5 12`,'none','#B99B60',2);}).join('')+E(0,-219,56,52,'#E6CD95')+E(-19,-229,5,6,ink)+E(19,-229,5,6,ink)+E(0,-208,10,7,'#B38E5C')+P('M-12 -190 Q0 -180 12 -190','none','#997A50',3)+P('M0 -164 L-27 -179 L-27 -150Z','#A5BE99')+P('M0 -164 L27 -179 L27 -150Z','#A5BE99')+E(0,-165,7,8,'#8FAE84')+P('M-28 -119 q27 18 54 0 M-29 -95 q27 19 56 0','none','#C6A66A',2);
 if(tail==='hug')z+=P('M44 -63 Q96 -93 34 -112 Q15 -123 -11 -100','none','#B99B60',19)+P('M44 -63 Q96 -93 34 -112 Q15 -123 -11 -100','none',f,14)+E(-12,-100,25,25,f);
 const arms=pose==='mane'?[[-10,-84],[10,-84]]:pose==='hold'?[[38,40],[-38,40]]:pose==='point'?[[-9,61],[-56,-22]]:[[-8,62],[8,62]];
 if(pose!=='back')z+=a(-49,-144,...arms[0],f,22)+a(49,-144,...arms[1],f,22);if(tail==='hug')z+=P('M-49 -144 Q-42 -117 -12 -104 M49 -144 Q42 -113 12 -104','none','#C3A469',2.5)+E(-12,-103,24,24,f,'stroke="#B99B60" stroke-width="2.5"')+P('M-25 -111 Q-8 -127 3 -109 Q13 -94 -8 -88 Q-25 -83 -24 -98 Q-22 -109 -11 -104','none','#B99B60',2.3);
 return G(x,y,s,z);
}
function lionSit(x,y,s=1,pose='hold',tail='hug'){const id=`lion-seat-${x}-${y}`;return `<defs><clipPath id="${id}"><rect x="${x-180*s}" y="${y-400*s}" width="${360*s}" height="${414*s}"/></clipPath></defs><g clip-path="url(#${id})">${yarnLion(x,y+75*s,s,pose,tail)}</g>`+G(x,y,s,a(-28,0,-8,51,'#D8BB7A')+a(28,0,8,51,'#D8BB7A')+E(-36,59,25,15,'#D8BB7A')+E(36,59,25,15,'#D8BB7A'));}
function crayon(x,y,s=1,c='#90B4C7',r=0){return G(x,y,s,R(-7,-35,14,59,c,3)+P('M-7 24 L7 24 L0 37Z',c)+line(-6,-19,6,-19,'#E5DEC7',3)+line(-6,13,6,13,'#E5DEC7',3),r);}
function crayonsBox(x,y,s=1){return G(x,y,s,R(-65,-23,130,47,'#B39C79',6)+R(-58,-17,116,32,'#E2D2AC',4)+['#90B4C7','#D9BC79','#A7BD93','#C79BA1'].map((c,j)=>crayon(-42+j*27,-1,.42,c,90)).join(''));}
function portrait(x,y,s=1,stage=0,r=0){let z=R(-113,-133,226,266,'#F2EAD4',5);if(stage>=1)z+=E(-80,-104,9,10,'none','stroke="#BEA16A" stroke-width="3"')+E(-52,-104,9,10,'none','stroke="#BEA16A" stroke-width="3"')+P('M-80 -96 Q-67 -77 -52 -96','none','#BEA16A',2);if(stage===2)z+=P('M-34 81 Q-60 8 -7 -27 Q45 -51 48 23 L45 80 M34 55 Q86 35 73 -68','none','#D0AE6D',5)+E(73,-68,14,15,'none','stroke="#D0AE6D" stroke-width="5"');if(stage>=3)z+=G(0,100,.59,yarnLion(0,0,1,'stand','up'));return G(x,y,s,z,r);}
function portraitBase(){return snowRoom()+stool(309,682,.98)+stool(769,682,.98);}
function portraitScene(i,cover){
 if(cover)return snowRoom()+stool(775,678,1.03)+lionSit(773,661,1.08,'hold','hug')+kid('梨米',300,734,1.1,'wave')+table(530,713,.67)+portrait(533,565,.91,3,-3);
 return [
 ()=>portraitBase()+sit('梨米',309,662,1.06,'wide')+lionSit(769,662,1.06,'stand','wave')+table(529,715,1.12)+portrait(535,629,.46)+crayonsBox(650,686,.61),
 ()=>portraitBase()+sit('梨米',309,662,1.06,'back')+lionSit(769,662,1.06,'hold','hidden')+table(529,715,1.12)+portrait(529,631,.47)+crayonsBox(651,687,.6)+P('M355 586 Q398 566 417 537 M263 586 Q240 620 264 640','none','#BAA384',23)+crayon(425,518,.72,'#90B4C7',22),
 ()=>portraitBase()+sit('梨米',309,662,1.06,'back')+lionSit(769,662,1.06,'mane','hidden')+table(529,715,1.12)+portrait(529,631,.47)+crayonsBox(651,687,.6)+P('M355 586 Q393 567 417 537 M263 586 Q243 620 263 638','none','#BAA384',23)+crayon(425,518,.72,'#D9BC79',22),
 ()=>portraitBase()+sit('梨米',309,662,1.06,'think')+lionSit(769,662,1.06,'hold','hug')+table(529,715,1.12)+portrait(529,631,.47)+crayon(436,687,.7,'#D9BC79',77)+crayonsBox(650,687,.61),
 ()=>portraitBase()+sit('梨米',309,662,1.06,'back')+lionSit(769,662,1.06,'point','wave')+table(530,714,1.13)+portrait(532,603,.65,1,-8)+P('M355 586 Q411 582 454 565 M263 586 Q249 626 277 645','none','#BAA384',23)+crayon(461,577,.62,'#D9BC79',-24),
 ()=>portraitBase()+sit('梨米',309,662,1.06,'back')+lionSit(769,662,1.06,'stand','up')+table(530,714,1.13)+portrait(531,592,.72,2)+P('M355 586 Q415 596 472 630 M263 586 Q247 625 276 643','none','#BAA384',23)+crayon(478,642,.61,'#D9BC79',-22),
 ()=>portraitBase()+sit('梨米',309,662,1.06,'back')+lionSit(769,662,1.06,'point','up')+table(530,714,1.13)+portrait(535,586,.77,3)+P('M355 586 Q414 588 473 615 M263 586 Q244 623 274 645','none','#BAA384',23)+crayon(485,624,.65,'#A7BD93',-33)+crayonsBox(651,686,.5),
 ()=>snowRoom()+stool(755,675,1.03)+lionSit(755,657,1.09,'hold','hug')+stool(319,684,.96)+sit('梨米',319,665,1.07,'hold')+table(538,713,.65)+portrait(541,564,.98,3,-3)
 ][i]();
}
function snowGarden(night=false){return R(0,0,1000,800,night?'#82969F':'#C9DCDB',0)+E(822,133,44,44,night?'#ECE5CC':'#E4DBB7')+cloud(308,145,.7,'#EBEBDB')+P('M0 482 Q239 419 501 497 Q755 418 1000 485 L1000 800 L0 800Z','#E5E8DB')+tree(82,529,1.0,'#A8BCAD')+P('M70 279 L72 322 L83 281 M105 279 L109 316 L120 278 M39 300 L43 336 L52 297Z','#D3E0DC')+R(496,382,453,222,'#A99576',4)+R(496,404,453,31,'#C7B18A',5)+R(496,540,453,31,'#C7B18A',5)+[525,604,683,762,841,920].map(x=>P(`M${x-23} 590 L${x-23} 348 L${x} 322 L${x+23} 348 L${x+23} 590Z`,'#C7AF86')+line(x-12,369,x-12,551,'#B29972',2)).join('')+E(672,418,5,6,ink)+E(698,418,5,6,ink)+P('M670 437 Q684 450 700 437','none','#8D7756',3)+P('M481 607 Q742 589 972 614','none','#F2F0E1',18);}
function softCup(x,y,s=1,full=true){return G(x,y,s,P('M-36 -28 L36 -28 L28 31 Q0 45 -28 31Z','#C7B7CA')+E(0,-28,36,11,'#DDD2DC')+E(0,-28,28,7,full?'#AED1D3':'#A592AA')+P('M-27 -15 L-21 24 M27 -15 L21 24','none','#AD9DB5',2));}
function iceDisk(x,y,s=1,embedded=false){return G(x,y,s,E(0,0,37,35,'#BED9DA')+E(0,0,32,30,'#D7E7DF')+P('M-22 -9 L-6 -23 M-21 7 L14 -24 M7 21 L24 4','none','#EEF2E6',3)+(embedded?P('M-31 -9 Q0 13 31 -9','none','#C98684',4):''));}
function cupsAt(y=643,full=false){return [552,646,740].map(x=>softCup(x,y,.82,full)).join('');}
function threeIce(y=657){return [555,646,736].map(x=>iceDisk(x,y,.75)).join('');}
function necklace(x,y,s=1){return G(x,y,s,P('M-176 -89 Q-142 -67 -111 -9 Q-76 60 -35 43 Q0 55 35 43 Q76 60 111 -9 Q144 -65 176 -89','none','#C27D7D',5)+iceDisk(-111,-8,.97,true)+iceDisk(0,43,.97,true)+iceDisk(111,-8,.97,true));}
function mittenHand(x1,y1,x2,y2){return P(`M${x1} ${y1} Q${(x1+x2)/2} ${y2+10} ${x2} ${y2}`,'none','#A997BE',24)+E(x2,y2,15,17,'#95B18C');}
function iceScene(i,cover){
 if(cover)return snowGarden()+necklace(723,517,.79)+kid('茸杏',343,737,1.16,'wave')+line(584,447,584,460,'#C27D7D',5)+line(862,447,862,460,'#C27D7D',5);
 return [
 ()=>snowGarden()+kid('茸杏',355,731,1.1,'point')+table(647,702,1.14)+cupsAt(642,true)+P('M800 580 L847 580 L851 624 Q824 646 798 621Z','#A9BEC0')+P('M847 589 Q875 588 872 610 Q864 622 850 617','none','#A9BEC0',8),
 ()=>snowGarden()+kid('茸杏',355,732,1.1,'back')+table(648,703,1.15)+cupsAt(610,false)+iceDisk(601,666,.75)+iceDisk(714,668,.75)+mittenHand(403,565,465,603)+mittenHand(307,565,427,640)+iceDisk(461,618,.75)+P('M494 647 Q503 697 569 684 Q586 668 563 661','none','#C27D7D',4),
 ()=>snowGarden()+kid('茸杏',354,732,1.1,'back')+table(648,703,1.15)+cupsAt(610,false)+threeIce(666)+mittenHand(402,565,472,554)+P('M472 555 Q485 594 507 630 Q541 660 568 626 Q591 602 553 582 Q524 569 503 607 Q529 631 563 598 M472 555 Q480 674 528 687','none','#C27D7D',4)+P('M558 636 L557 648 M570 632 L569 645','none','#B2C7C3',3),
 ()=>snowGarden()+kid('茸杏',343,732,1.1,'hold',{worried:true})+table(647,702,1.15)+cupsAt(609,false)+threeIce(666)+P('M790 646 Q814 623 840 640 Q851 667 818 675 Q796 669 811 654 Q840 648 854 678','none','#C27D7D',4),
 ()=>snowGarden()+R(113,477,306,90,'#C3C6B4',10)+line(125,520,405,520,'#DFDFCF',5)+floorKid('茸杏',417,721,1.1,'think')+E(665,697,145,44,'#A5BABB')+E(665,687,135,34,'#CBDDD7')+P('M554 678 L591 664 M586 700 L681 671 M687 701 L757 677','none','#E8EEE0',3)+P('M638 690 Q597 669 615 626 Q652 629 666 654 Q676 674 651 691Z','#BCA87A')+line(646,689,623,639,'#948A62',3)+P('M625 681 Q642 676 663 683 L652 699 L639 699Z','#C5DDDA','',0,'opacity=".72"'),
 ()=>snowGarden(true)+kid('茸杏',352,732,1.1,'back')+table(649,703,1.18)+[565,660,755].map(x=>softCup(x,636,.85,true)).join('')+[565,654,745].map(x=>iceDisk(x,684,.6)).join('')+P('M470 571 Q485 615 538 611 Q559 616 590 611 Q608 595 635 611 Q658 616 684 611 Q712 595 729 611 Q754 616 782 611 Q826 620 844 660','none','#C27D7D',4)+mittenHand(400,565,471,571)+mittenHand(304,565,333,632),
 ()=>snowGarden()+table(808,711,.78)+[740,810,880].map(x=>softCup(x,659,.62,false)).join('')+kid('茸杏',442,734,1.13,'back')+necklace(442,648,.66)+mittenHand(392,562,326,589)+mittenHand(492,562,558,589),
 ()=>snowGarden()+necklace(723,517,.79)+stool(364,670,1.08)+sit('茸杏',364,649,1.13,'hold')+line(584,447,584,460,'#C27D7D',5)+line(862,447,862,460,'#C27D7D',5)
 ][i]();
}
function weatherTicket(x,y,s=1,type='sun',r=0){let z=R(-28,-37,56,74,'#E9DFC2',7)+line(-17,24,17,24,'#C3B28B',2);if(type==='sun')z+=E(0,-10,12,12,'#D9BC71')+[0,60,120,180,240,300].map(a=>G(0,-10,1,line(0,-17,0,-23,'#D0B169',2),a)).join('');else z+=P('M0 -28 Q-22 -4 0 9 Q22 -4 0 -28Z','#8EB3C3')+E(-11,12,3,5,'#9DBBC6')+E(12,12,3,5,'#9DBBC6');return G(x,y,s,z,r);}
function ticketBox(x,y,s=1,extra='rain'){return G(x,y,s,R(-65,-10,130,62,'#B69D75',6)+E(0,-10,65,16,'#988460')+weatherTicket(-25,-26,.63,'sun',-13)+weatherTicket(22,-26,.63,extra,12)+R(-65,12,130,38,'#CDB68A',6));}
function cloudPlatform(){return R(0,0,1000,800,'#CCDDE0',0)+cloud(158,161,.9,'#E9EBDD')+cloud(844,120,.64,'#EDEBDD')+P('M0 585 Q55 523 123 573 Q221 497 297 573 Q398 510 460 576 Q557 510 635 578 Q745 509 812 576 Q922 518 1000 580 L1000 800 L0 800Z','#E6E8DB')+P('M15 747 Q501 726 984 745','none','#BDCDD0',6)+P('M15 764 Q501 743 984 762','none','#BDCDD0',4);}
function train(x=675,y=716,s=1){return G(x,y,s,R(-218,-291,357,232,'#A6C1BE',18)+R(-196,-263,307,153,'#DCE3CE',15)+R(-178,-139,271,49,'#C5B7CE',13)+R(-230,-315,380,35,'#7E9D9C',13)+R(103,-147,121,79,'#B1C5AA',16)+R(167,-218,41,85,'#8CA7A0',7)+R(160,-233,55,21,'#7F9C96',7)+R(127,-151,59,13,'#5D7771',4)+R(-236,-79,466,35,'#8A9B8E',10)+[-159,18,172].map(xx=>E(xx,-28,38,38,'#85998F')+E(xx,-28,22,22,'#BCBFA3')+E(xx,-28,7,7,'#889887')).join('')+R(-167,-262,12,134,'#9DB5B1',4)+R(-49,-262,12,134,'#9DB5B1',4)+R(73,-262,12,134,'#9DB5B1',4));}
function insideTrain(rain=false){return R(0,0,1000,800,'#D4DCCB',0)+R(0,609,1000,191,'#AABAB0',0)+R(104,93,793,348,'#87A5A4',31)+R(123,112,754,309,rain?'#91ADB6':'#D1E2D5',22)+(rain?cloud(577,197,1.33,'#9AB0B8')+rainLines([[190,156,80],[261,275,74],[394,143,72],[621,198,100],[780,136,78]]):E(760,195,58,58,'#EAD69A')+cloud(359,201,.8,'#EBEADA'))+R(128,456,747,180,'#B9AFC9',23)+R(108,621,787,51,'#A79CB7',12)+[217,480,738].map(x=>R(x-81,601,162,38,'#CFC4DA',13)).join('')+R(154,668,20,95,'#859A8D',5)+R(825,668,20,95,'#859A8D',5)+line(510,113,510,421,'#A9C0B8',9);}
function weatherScene(i,cover){
 if(cover)return cloudPlatform()+train(686,716,.91)+kid('苇芽',303,729,1.04,'back')+kid('墨团',506,732,1.06,'back')+P('M349 570 Q375 564 387 541','none',skin,21)+P('M460 570 Q433 566 421 542','none','#7D827B',21)+weatherTicket(383,523,.74,'sun',-15)+weatherTicket(424,523,.74,'rain',15);
 return [
 ()=>cloudPlatform()+train(698,718,.94)+kid('苇芽',261,729,1.04,'point')+kid('墨团',438,731,1.03,'hold')+ticketBox(849,692,.62),
 ()=>cloudPlatform()+train(733,717,.84)+table(506,705,.57)+ticketBox(507,664,.73)+kid('苇芽',326,731,1.05,'back')+kid('墨团',685,730,1.07,'back')+P('M372 571 Q409 574 421 559','none',skin,22)+weatherTicket(433,541,.77,'sun',12)+P('M638 567 Q602 572 591 554','none','#7D827B',23)+weatherTicket(583,535,.77,'rain',-9),
 ()=>cloudPlatform()+train(682,718,1.0)+sit('苇芽',588,579,.84,'hold')+weatherTicket(588,550,.62,'sun',-10)+kid('墨团',299,731,1.07,'hold',{worried:true})+weatherTicket(300,612,.75,'sun')+table(863,728,.46)+ticketBox(864,693,.67,'rain'),
 ()=>cloudPlatform()+train(710,718,.91)+kid('苇芽',311,731,1.06,'think')+kid('墨团',529,731,1.07,'back')+P('M482 568 Q466 612 481 635 M576 568 Q599 606 580 625','none','#7D827B',22)+weatherTicket(482,620,.67,'sun',-17)+weatherTicket(344,638,.53,'sun',10),
 ()=>cloudPlatform()+train(721,718,.89)+table(850,729,.49)+ticketBox(851,692,.73,'sun')+kid('苇芽',317,731,1.06,'back')+kid('墨团',560,731,1.07,'back')+weatherTicket(336,639,.51,'sun')+R(317,634,39,27,'#EAEBDD',5)+P('M363 570 Q398 584 437 568','none',skin,22)+P('M513 568 Q481 580 450 568','none','#7D827B',22)+weatherTicket(443,553,.75,'rain'),
 ()=>insideTrain(true)+sit('苇芽',331,621,1.12,'point')+sit('墨团',683,621,1.14,'point')+weatherTicket(348,521,.48,'sun')+R(330,518,37,26,'#EAEBDD',4)+P('M571 251 Q549 285 566 312 Q579 327 594 308 Q610 281 583 264 Q587 248 578 234','none','#D9E6DD',4)+E(580,323,13,17,'#C9DDE0')+P('M581 340 Q570 359 580 391','none','#C9DDE0',5),
 ()=>insideTrain(false)+P('M490 419 L544 419 L350 622 L287 622Z','#F0DCA0','',0,'opacity=".15"')+P('M754 420 L808 420 L715 635 L638 635Z','#F0DCA0','',0,'opacity=".14"')+sit('苇芽',331,621,1.12,'hold')+sit('墨团',683,621,1.14,'back')+E(332,579,22,12,'#F0DEA8','opacity=".76"')+E(683,606,41,18,'#F0DEA8','opacity=".76"')+P('M633 538 Q626 593 654 605 M733 538 Q746 594 712 605','none','#7D827B',23)+E(469,634,26,12,'#EBD6A1','opacity=".7"'),
 ()=>cloudPlatform()+train(713,718,.91)+kid('苇芽',292,732,1.06,'back')+kid('墨团',480,731,1.05,'wave')+P('M338 571 Q376 487 313 439 M246 571 Q225 613 251 638','none',skin,23)+R(535,586,83,31,'#CFC4DA',11)+R(627,586,83,31,'#CFC4DA',11)
 ][i]();
}
function crayonTree(x=743,y=666,s=1){return G(x,y,s,P('M-67 0 Q-42 -177 -59 -361 L-36 -390 L-9 -238 L7 -438 L37 -446 L36 -293 Q99 -333 130 -406 L155 -392 Q126 -289 48 -241 L60 0Z','#AA9E84')+P('M-28 -247 Q-123 -315 -192 -267 L-214 -282 Q-123 -351 -48 -295Z','#AA9E84')+P('M40 -337 Q150 -395 209 -348 L221 -366 Q143 -436 35 -374Z','#AA9E84')+E(-19,-176,5,7,ink)+E(23,-176,5,7,ink)+P('M-13 -153 Q3 -139 21 -153','none','#7D775D',3)+P('M-43 -115 Q-24 -79 -39 -43 M24 -225 L30 -197 M15 -100 L10 -41','none','#90866D',3)+[[-198,-282,-55],[-158,-298,24],[-106,-307,-38],[-61,-334,-10],[13,-443,-5],[45,-422,46],[136,-397,42],[173,-378,-27],[215,-359,57]].map(([xx,yy,r])=>leaf(xx,yy,.82,'#A5BF91',r)).join(''));}
function schoolYard(){return R(0,0,1000,800,'#CFDDD0',0)+cloud(290,151,.8,'#ECEAD8')+P('M0 516 Q500 429 1000 528 L1000 800 L0 800Z','#B8C79E')+R(36,211,275,396,'#DAC9A4',12)+P('M8 224 L178 105 L339 224Z','#A6B48D')+R(87,388,132,218,'#A3AF8D',56)+E(174,301,49,49,'#C3D4C2')+E(174,301,52,52,'none','stroke="#AA9977" stroke-width="10"')+P('M95 608 L251 608 L352 800 L17 800Z','#D5C5A1');}
function classRoom(){return R(0,0,1000,800,'#DFD4B9',0)+R(0,617,1000,183,'#C2B191',0)+E(745,290,176,176,'#ADAC90')+E(745,290,159,159,'#C6D8C5')+G(699,417,.62,crayonTree(0,0,.66))+line(745,134,745,447,'#D1C09A',8)+line(587,291,903,291,'#D1C09A',8)+R(568,449,354,22,'#B59C75',5)+R(76,347,179,249,'#BAA781',9)+R(91,367,148,73,'#D5C39E',4)+R(91,451,148,72,'#D5C39E',4)+E(166,404,6,6,'#A08C68')+E(166,488,6,6,'#A08C68');}
function creekPicture(x,y,s=1,stage=0,r=0){let z=R(-185,-120,370,240,'#EFE9D4',4)+P('M-175 -34 Q-125 -114 -71 -33 L-175 -34Z','#B9C3A0')+P('M-133 -34 Q-86 -88 -36 -34Z','#C6CEAF')+[-7,31,69].map((xx,j)=>tree(83+xx,41-j%2*20,.18,'#9FB58B')).join('')+grass(-84,41,.42)+grass(25,77,.41);if(stage===1)z+=P('M-130 -31 Q-99 -23 -93 -4','none','#83B1C7',9);if(stage===2)z+=P('M-130 -31 Q-59 -26 -77 14 Q-96 47 -22 41 Q53 35 44 67 Q38 98 102 89 Q137 83 185 103','none','#83B1C7',12);return G(x,y,s,z,r);}
function nib(x,y,s=1,r=0){return G(x,y,s,R(-6,-7,12,14,'#82AFC7',2)+P('M-6 7 L6 7 L0 15Z','#82AFC7'),r);}
function holder(x,y,s=1,filled=true,r=0){return G(x,y,s,R(-10,-55,20,108,'#C4AE87',5)+E(0,53,10,5,'#8A7E62')+line(-6,-43,-6,38,'#DDC59A',3)+(filled?R(-10,43,20,12,'#DDD4B7',2)+nib(0,58,1):''),r);}
function clothBox(x,y,s=1){return G(x,y,s,R(-58,-31,116,65,'#AE9B79',6)+E(0,-30,57,14,'#918364')+P('M-41 -24 Q-40 -56 -15 -39 L19 -6 L38 -37 L51 -28 L32 25 L2 20 L-20 -20Z','#D8D0B5')+line(-28,-27,9,9,'#BABAA0',3)+R(-58,-6,116,39,'#C7AF85',6));}
function pencilCase(x,y,s=1){return G(x,y,s,R(-77,-27,154,55,'#A3B9AA',9)+R(-68,-20,136,38,'#D4DDC9',5)+R(-77,-70,154,35,'#AEC1B3',8)+holder(0,0,.79,true,90));}
function creekScene(i,cover){
 if(cover)return classRoom()+table(610,713,1.22)+creekPicture(602,588,1.05,2,-2)+kid('芽点',309,734,1.12,'back')+P('M358 564 Q383 566 409 585 M260 564 Q243 605 278 632','none','#B8A07E',23)+pencilCase(820,685,.64);
 return [
 ()=>classRoom()+kid('芽点',342,733,1.1,'back')+table(606,710,1.5)+creekPicture(610,626,.93,0,-3)+P('M390 566 Q441 600 499 629 M294 566 Q276 608 303 635','none','#B8A07E',23),
 ()=>schoolYard()+crayonTree(738,704,1.08)+floorKid('芽点',397,727,1.12,'back')+P('M445 645 Q489 690 540 700 M349 645 Q334 688 362 702','none','#B8A07E',23)+nib(545,697,.88,34)+leaf(574,724,.62,'#C8B67D',51)+leaf(488,734,.55,'#B1B989',-24)+crayon(670,733,.42,'#BC9599',68)+crayon(786,745,.49,'#D0BB77',-67),
 ()=>classRoom()+kid('芽点',336,733,1.1,'back',{worried:true})+table(606,710,1.5)+creekPicture(610,625,.94,1,-3)+P('M384 566 Q427 585 478 601 M288 566 Q272 609 303 635','none','#B8A07E',23)+nib(514,641,.95,71)+E(478,601,7,6,'#8DB4C7')+E(467,596,4,4,'#8DB4C7'),
 ()=>schoolYard()+crayonTree(737,704,1.08)+P('M560 390 Q545 442 519 510','none','#AA9E84',13)+kid('芽点',450,731,1.13,'back')+leaf(519,510,.65,'#A5BF91',-80)+P('M499 559 Q527 544 511 525 M401 559 Q386 607 409 632','none','#B8A07E',23)+nib(411,630,.9,10),
 ()=>schoolYard()+crayonTree(738,704,1.08)+kid('芽点',368,735,1.11,'hold')+nib(367,616,.92,68)+leaf(534,499,.64,'#CBB67B',35)+P('M287 741 L307 741 M261 723 L279 723','none','#B1AA83',3),
 ()=>classRoom()+kid('芽点',333,734,1.12,'back')+table(598,711,1.47)+creekPicture(657,643,.65,1,6)+clothBox(793,646,.68)+P('M382 564 Q427 565 479 601 M284 564 Q330 647 480 638','none','#B8A07E',23)+holder(487,619,.92,true,-12)+P('M504 655 Q527 667 538 651 L549 662 Q537 684 509 673Z','#D8D0B5'),
 ()=>classRoom()+kid('芽点',333,734,1.12,'back')+table(606,711,1.49)+creekPicture(610,626,.94,2,-3)+P('M382 564 Q442 566 505 588 M284 564 Q275 607 301 634','none','#B8A07E',23)+holder(518,595,.87,true,-19),
 ()=>classRoom()+kid('芽点',337,733,1.11,'back')+creekPicture(632,447,.86,2,-4)+P('M385 564 Q442 532 475 526 M289 564 Q381 614 476 551','none','#B8A07E',23)+table(717,733,.71)+pencilCase(717,697,.77)
 ][i]();
}
function six(x,y,s=1,c='#7F6D50'){return G(x,y,s,P('M16 -24 Q-15 -29 -17 7 Q-18 28 3 28 Q24 28 22 10 Q20 -6 2 -5 Q-13 -4 -16 7','none',c,6));}
function slipper(x,y,s=1,r=0){return G(x,y,s,E(0,0,34,17,'#D9C580')+P('M-32 -1 Q-23 -33 12 -27 Q35 -24 34 0 Q11 15 -32 -1Z','#E5D59A')+E(-12,-10,3,3.5,'#9B8B5D')+E(3,-11,3,3.5,'#9B8B5D')+P('M-16 -13 L-9 -7 M-1 -14 L6 -8','none','#C2AE71',1.5),r);}
function turtle(x,y,s=1,pose='stand',cap=false,shoes=true){const f='#A5B18A';let z=E(0,0,91,14,'#75846B','opacity=".12"')+E(33,-113,78,98,'#A28D6C')+E(37,-114,65,84,'#B6A07B')+P('M37 -197 L2 -146 L14 -91 L68 -69 L94 -117 L68 -169Z','none','#917E5D',4)+P('M2 -146 L-19 -159 M14 -91 L-5 -62 M68 -69 L69 -32 M94 -117 L108 -120','none','#917E5D',4)+E(-10,-98,57,79,f)+E(-34,-8,28,17,f)+(pose==='lift'?'':E(30,-8,28,17,f))+E(-13,-222,58,54,f)+E(-35,-231,5,7,ink)+E(7,-231,5,7,ink)+E(-14,-206,14,10,'#B9C49A')+P('M-27 -188 Q-13 -178 1 -188','none','#74815E',3)+(cap?hat(-14,-265,.88):'');if(shoes)z+=slipper(-37,-6,.98)+(pose==='lift'?'':slipper(35,-6,.98));if(pose==='lift')z+=P('M30 -47 Q74 -64 90 -32','none',f,23)+slipper(98,-28,.98,-13);else if(pose!=='back'){const ar=pose==='hold'?[[36,42],[-36,42]]:pose==='point'?[[-6,62],[74,-30]]:[[-7,62],[12,61]];z+=a(-53,-151,...ar[0],f,23)+a(35,-151,...ar[1],f,23);}return G(x,y,s,z);}
function turtleSit(x,y,s=1,cap=false){const id=`turtle-seat-${x}-${y}`;return `<defs><clipPath id="${id}"><rect x="${x-160*s}" y="${y-400*s}" width="${320*s}" height="${410*s}"/></clipPath></defs><g clip-path="url(#${id})">${turtle(x,y+76*s,s,'hold',cap,false)}</g>`+G(x,y,s,a(-27,0,-5,49,'#A5B18A')+a(27,0,5,49,'#A5B18A')+E(-33,57,24,14,'#A5B18A')+E(33,57,24,14,'#A5B18A'));}
function lamp(x,y,s=1){return G(x,y,s,P('M-33 -31 L33 -31 L43 21 L-43 21Z','#E3CC95')+line(0,22,0,43,'#A28E67',7)+R(-15,39,30,8,'#A28E67',4)+E(0,-3,68,67,'#EAD6A1','opacity=".12"'));}
function key(x,y,s=1,r=0){return G(x,y,s,E(0,-23,19,23,'#CDB47A')+E(0,-23,10,13,'#E9DEC0')+line(0,-1,0,48,'#BEA168',9)+P('M1 31 L16 31 L16 39 L1 39 M1 45 L13 45','none','#BEA168',6)+R(-25,-75,50,35,'#D8C28B',7)+six(0,-59,.37,'#8E794D'),r);}
function teaLobby(){return room(true)+lamp(435,282,1.02)+R(105,480,194,177,'#AFB9A3',23)+R(91,605,221,53,'#C1C9B0',18)+R(117,655,18,78,'#A08C68',4)+R(268,655,18,78,'#A08C68',4)+table(727,678,.76)+R(805,587,39,43,'#EAE1C8',7)+E(825,587,19,6,'#CDBB94')+P('M844 595 Q862 589 864 606 Q865 622 844 621','none','#EAE1C8',6);}
function hallway(open=false){return R(0,0,1000,800,'#D8CDB4',0)+P('M0 616 L500 529 L1000 616 L1000 800 L0 800Z','#BAA98A')+P('M373 554 L626 554 L833 800 L168 800Z','#ACA991')+lamp(499,265,1.1)+R(52,218,231,408,'#BDA47C',19)+R(75,245,184,354,'#C8B18B',12)+E(241,468,9,9,'#9B875D')+R(736,218,231,408,'#BDA47C',19)+(open?R(756,239,192,368,'#8D8068',9)+[323,424,526].map(y=>R(767,y,170,12,'#B4A17E',3)+[0,1,2].map(j=>R(784,y-19-j*18,132,17,'#EAE6D5',5)).join('')).join('')+R(878,579,43,17,'#B1C3A3',5)+P('M736 224 L650 269 L650 643 L736 621Z','#C7B08A'):R(758,244,188,355,'#C8B18B',12)+E(777,469,9,9,'#9B875D'));}
function roomSix(){return room(true)+R(521,519,377,164,'#A48C69',12)+R(501,506,414,87,'#D7DCC6',22)+R(535,516,134,59,'#EFE9D5',25)+P('M658 514 L893 514 L908 589 L658 589Z','#B4C4B1')+R(518,679,20,77,'#947F60',5)+R(876,679,20,77,'#947F60',5)+P('M666 121 Q693 263 675 419 L729 419 Q753 265 724 121Z','#B2AF9D')+P('M856 121 Q832 265 851 419 L902 419 L902 121Z','#B2AF9D')+lamp(332,252,.9);}
function innScene(i,cover){
 if(cover)return hallway()+R(337,123,328,445,'#B49D77',18)+R(359,148,283,398,'#CFBA93',13)+six(501,251,1.23)+kid('蒲蒲',316,734,1.1,'wave')+turtle(666,733,1.12,'hold',true)+E(613,405,10,10,'#A18A5B');
 return [
 ()=>teaLobby()+turtleSit(205,626,1.15,false)+slipper(167,691,1.04)+slipper(243,691,1.04)+kid('蒲蒲',470,734,1.12,'point')+hat(702,626,.81),
 ()=>hallway()+kid('蒲蒲',355,735,1.1,'hold')+turtle(641,734,1.13,'lift',false),
 ()=>hallway()+kid('蒲蒲',375,736,1.1,'back')+turtle(640,735,1.12,'stand',false)+P('M327 569 Q270 560 232 525 M423 569 Q445 614 419 635','none','#AAA18C',23)+P('M688 749 L708 749 M727 739 L745 739','none','#A49C7F',3),
 ()=>hallway(true)+kid('蒲蒲',422,735,1.1,'think',{lowTail:true,worried:true})+turtle(632,736,1.11,'hold',false),
 ()=>hallway()+kid('蒲蒲',381,735,1.1,'hold',{lowTail:true,worried:true})+turtle(638,736,1.12,'hold',false),
 ()=>teaLobby()+kid('蒲蒲',345,735,1.1,'think')+turtle(555,735,1.12,'back',false)+hat(735,548,.82)+P('M594 566 Q643 521 687 541 M496 566 Q478 607 494 632','none','#A5B18A',24)+key(726,634,.73,61),
 ()=>hallway()+R(650,229,301,389,'#8F846A',8)+R(676,446,244,111,'#B69E7A',8)+R(673,441,245,50,'#D2D9C2',16)+R(691,445,81,35,'#EFE7D2',16)+P('M642 222 L552 279 L552 638 L642 619Z','#C5AC83')+six(598,350,.74)+kid('蒲蒲',330,735,1.1,'point')+turtle(527,735,1.12,'back',true)+P('M566 566 Q600 547 615 498 M468 566 Q451 611 475 633','none','#A5B18A',24)+key(618,494,.55,-90)+E(643,494,7,10,'#8C7856'),
 ()=>roomSix()+R(679,129,221,303,'#B2AF9D',10)+[711,741,788,826,861].map(x=>line(x,143,x,413,'#9D9F8D',3)).join('')+line(783,137,783,421,'#D5C8A9',4)+turtleSit(743,582,1.13,true)+stool(382,677,.98)+sit('蒲蒲',382,656,1.09,'hold')+slipper(702,726,1.09)+slipper(783,726,1.09)
 ][i]();
}
const scenes={281:nestedScene,282:bathScene,283:duneScene,284:portraitScene,285:iceScene,286:weatherScene,287:creekScene,288:innScene};
export function eighthYoungFirstArtwork(story,index,cover=false){const n=Number(story?.id?.replace('expansion-',''));if(!scenes[n]||story.id!==`expansion-${String(n).padStart(4,'0')}`)throw Error('Unsupported story');if(story.pages?.length!==8||!Number.isInteger(index)||index<0||index>7)throw Error('Eight pages and page index 0…7 required');return svg(scenes[n](index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);}

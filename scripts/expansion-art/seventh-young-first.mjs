// Independent eight-page storyboards and covers for expansion-0241 through 0248.
// Pure artwork renderer; catalogue integration is owned by the publisher.
import {E,R,P,G,line,leaf,grass,flower,tree,cloud,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F2E9D4';
const C={穗团:['mouse','#B6BCB5','#AE7569','vest','whiskers'],芦团:['otter','#AD8D69','#A6BD9C','coat','bag'],芦团坐:['otter','#AD8D69','#A6BD9C','coat'],苓苓:['human','#E1C6A8','#B9AAC9','dress','leaf'],苓苓睡:['human','#E1C6A8','#9DBACB','sleep','leaf'],浅浅:['sand','#DEC394','#A9C6B2','vest','curl'],阿拂:['wind','#E2D2B4','#F1EFE3','coat','wind'],麦粒:['mouse','#B99D7E','#89ADBD','vest'],乌圆:['mole','#737C76','#91AA84','apron','glasses'],麦铃:['human','#E2C7A9','#B5A6C6','dress','lampgirl'],栗莓:['raccoon','#A29984','#AE99BB','apron','mask']};
for(const [name,cfg] of Object.entries(C))if(!name.endsWith('坐')&&!C[name+'坐'])C[name+'坐']=cfg;
function arm(x,y,dx,dy,c,w=21){return P(`M${x} ${y} Q${x+dx*.4} ${y+dy*.65-6} ${x+dx} ${y+dy}`,'none',c,w);}
function actor(name,x,y,s=1,pose='stand',flip=false,extra=''){
 const [t,f,c,k,d]=C[name],q=({stand:[[-8,64],[9,65]],hold:[[42,42],[-42,42]],point:[[-8,65],[81,-12]],wave:[[-15,60],[39,-82]],think:[[43,-34],[10,65]],up:[[-30,-64],[31,-64]],wide:[[-52,21],[53,21]],low:[[38,81],[47,80]]})[pose]||[[0,0],[0,0]];
 let a=E(0,0,80,12,'#596957','opacity=".12"');
 if(t==='mouse'&&!name.endsWith('坐'))a+=P('M43 -46 Q117 -9 131 -71','none',f,8);
 if(t==='otter'&&!name.endsWith('坐'))a+=P('M44 -48 Q139 -60 113 -131 Q155 -48 71 -10Z',f);
 if(t==='raccoon'&&!name.endsWith('坐')){a+=P('M-44 -51 Q-155 -19 -137 -147','none',f,43);a+=[[-1,0],[7,-26],[8,-53]].map(([dx,dy])=>P(`M${-91-dx} ${-53+dy} Q${-114-dx} ${-63+dy} ${-134-dx} ${-57+dy}`,'none','#5D625C',15)).join('');}
 a+=E(-29,-10,29,16,f)+E(29,-10,29,16,f)+E(0,-105,61,87,f);
 a+=k==='dress'?P('M-48 -179 L48 -179 L76 -27 Q0 -7 -76 -27Z',c):P(`M-48 -179 L48 -179 L60 ${k==='coat'?-31:-58} Q0 -40 -60 ${k==='coat'?-31:-58}Z`,c);
 if(k==='apron')a+=R(-22,-108,44,34,'#C8C39F',7)+line(-43,-173,42,-173,'#D7CFB5',5);
 if(k==='sleep'){a+=R(-48,-65,39,54,c,6)+R(9,-65,39,54,c,6);a+=[-35,-10,15,40].map(xx=>line(xx,-173,xx,-60,'#E7EAE0',4)).join('')+[-155,-131,-107,-83].map(yy=>line(-49,yy,49,yy,'#E7EAE0',4)).join('');}
 if(['mouse','otter','raccoon'].includes(t))a+=E(-48,-266,t==='mouse'?28:22,t==='mouse'?31:23,f)+E(48,-266,t==='mouse'?28:22,t==='mouse'?31:23,f)+(t==='mouse'?E(-48,-266,17,20,'#CFADA4')+E(48,-266,17,20,'#CFADA4'):'');
 a+=E(0,-221,64,58,f);
 if(['mouse','otter','raccoon'].includes(t))a+=E(0,-201,35,25,'#E4D6BA');
 if(t==='raccoon')a+=E(-26,-228,25,19,'#4D5852','transform="rotate(-18 -26 -228)"')+E(26,-228,25,19,'#4D5852','transform="rotate(18 26 -228)"');
 if(t==='human')a+=P('M-63 -217 L-65 -264 Q-44 -299 0 -295 Q43 -299 65 -263 L64 -217 L48 -219 L45 -261 L21 -251 L-6 -265 L-43 -252 L-48 -218Z',d==='lampgirl'?'#424B46':'#A78A6A');
 if(t==='wind')a+=[[-51,-248],[-43,-274],[-17,-289],[12,-288],[40,-275],[53,-249]].map(([xx,yy])=>E(xx,yy,22,22,'#B3CED0')).join('');
 if(t==='sand')a+=P('M-16 -275 Q-32 -311 -5 -311 Q17 -315 18 -295 Q9 -283 -2 -296','none','#D1B17A',12);
 a+=pose==='sleep'?P('M-31 -228 Q-22 -222 -13 -228 M13 -228 Q22 -222 31 -228','none',ink,3):E(-23,-227,5,7,t==='raccoon'?'#E9E7D6':ink)+E(23,-227,5,7,t==='raccoon'?'#E9E7D6':ink);
 a+=E(0,-204,t==='mole'?19:8,t==='mole'?12:5,t==='mole'||t==='mouse'?'#C99E98':'#756653')+P('M-10 -188 Q0 -181 11 -188','none','#7B715F',2.5);
 if(d==='whiskers')a+=P('M-21 -202 L-60 -211 M-22 -195 L-63 -191 M21 -202 L60 -211 M22 -195 L63 -191','none','#F4F0DE',3);
 if(d==='glasses')a+=E(-24,-227,20,19,'none','stroke="#C6C8B6" stroke-width="3"')+E(24,-227,20,19,'none','stroke="#C6C8B6" stroke-width="3"')+line(-4,-227,4,-227,'#C6C8B6',3);
 if(d==='leaf')a+=E(0,-291,18,14,'#9CB68C','transform="rotate(-15 0 -291)"')+line(-13,-288,13,-296,'#718E6A',2)+(k==='sleep'?'':E(-29,-10,29,16,'#89A77E')+E(29,-10,29,16,'#89A77E'));
 if(d==='wind')a+=R(-47,-64,38,42,'#8BAFBF',5)+R(9,-64,38,42,'#8BAFBF',5)+R(-52,-90,104,14,'#ABC49B',4)+P('M40 -88 L77 -78 L63 -53 L43 -66Z','#ABC49B')+E(-29,-10,29,16,'#A8B6AD')+E(29,-10,29,16,'#A8B6AD');
 if(d==='lampgirl')a+=R(-45,-35,30,23,'#F2EFE0',5)+R(15,-35,30,23,'#F2EFE0',5)+E(-29,-10,29,14,'#9A7D5F')+E(29,-10,29,14,'#9A7D5F');
 if(pose!=='back'&&pose!=='sleep')a+=arm(-43,-153,...q[0],d==='lampgirl'?'#A99ABD':f)+arm(43,-153,...q[1],d==='lampgirl'?'#A99ABD':f)+(d==='lampgirl'?E(-43+q[0][0],-153+q[0][1],11,12,f)+E(43+q[1][0],-153+q[1][1],11,12,f):'');
 a+=extra;
 if(d==='bag')a+=line(-47,-176,50,-72,'#B9A785',7)+bag(58,-78,.62);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function seated(name,x,y,s=1,pose='hold',extra=''){
 const f=C[name][1],d=C[name][4],id=`seat-${x}-${y}`;return G(x,y,s,arm(-27,0,-7,53,f)+arm(27,0,7,53,f)+(d==='lampgirl'?R(-45,37,23,21,'#F2EFE0',5)+R(22,37,23,21,'#F2EFE0',5):'')+E(-34,59,24,13,d==='lampgirl'?'#9A7D5F':d==='wind'?'#A8B6AD':f)+E(34,59,24,13,d==='lampgirl'?'#9A7D5F':d==='wind'?'#A8B6AD':f))+`<defs><clipPath id="${id}"><rect x="${x-170*s}" y="${y-480*s}" width="${340*s}" height="${492*s}"/></clipPath></defs><g clip-path="url(#${id})">${actor(name.endsWith('坐')?name:name+'坐',x,y+80*s,s,pose,false,extra)}</g>`;
}
function floorKid(name,x,y,s=1,pose='hold'){const f=C[name][1],id=`floor-${x}-${y}`;return `<defs><clipPath id="${id}"><rect x="${x-180*s}" y="${y-460*s}" width="${360*s}" height="${464*s}"/></clipPath></defs><g clip-path="url(#${id})">${actor(name.endsWith('坐')?name:name+'坐',x,y+80*s,s,pose)}</g>`+G(x,y,s,E(-30,0,51,18,f,'transform="rotate(14 -30 0)"')+E(30,0,51,18,f,'transform="rotate(-14 30 0)"'));}
function bag(x,y,s=1){return G(x,y,s,R(-37,-30,74,60,'#E3D7B9',11)+P('M-22 -31 Q-22 -65 0 -65 Q22 -65 22 -31','none','#B8A381',6));}
function room(wall='#DDD5BE',night=false){return R(0,0,1000,800,wall,0)+R(0,614,1000,186,'#C4B597',0)+line(0,614,1000,614,'#A99B80',6)+[160,380,620,840].map((x,j)=>line(x,614,x+(j-2)*30,800,'#B6A78B',2)).join('')+R(690,85,217,318,'#AAAD96',90)+R(704,99,188,289,night?'#5F7882':'#CCDDD1',80)+(night?E(820,170,31,31,'#EDE2BB'):cloud(794,188,.4,'#F1EDDC'))+line(797,100,797,387,'#D4C5A5',8)+R(671,391,254,19,'#B5A07C',5);}
function outdoors(night=false){return R(0,0,1000,800,night?'#526A76':'#CFDED3',0)+E(812,136,52,52,night?'#ECE3BD':'#EAD9A7')+cloud(260,159,.7,night?'#70888C':'#EFEBD9')+P('M0 444 Q220 331 485 455 Q738 337 1000 445 L1000 800 L0 800Z',night?'#809681':'#BDCCA9')+tree(45,612,1.07,night?'#647E6A':'#9FB896')+tree(949,583,.92,night?'#728C74':'#ACC09D')+P('M0 694 Q505 558 1000 672 L1000 800 L0 800Z',night?'#8B9F86':'#AFBF98');}
function desk(x=520,y=659,s=1){return G(x,y,s,R(-142,0,18,132,'#A58D69',5)+R(124,0,18,132,'#A58D69',5)+P('M-167 -43 L142 -43 L177 0 L-136 0Z','#D6BE94')+R(-136,0,313,17,'#B69D75',5));}
function stool(x,y,s=1){return G(x,y,s,R(-42,0,13,79,'#A38B69',4)+R(29,0,13,79,'#A38B69',4)+E(0,-6,59,19,'#CEB58B'));}
function bench(x,y,s=1){return G(x,y,s,R(-160,-112,320,77,'#BCA37E',7)+R(-148,-4,19,98,'#A38C6A',4)+R(129,-4,19,98,'#A38C6A',4)+R(-173,-20,346,24,'#D4BC92',6));}
function bowl(x,y,s=1,c='#A8B9AE'){return G(x,y,s,P('M-65 0 Q-51 74 0 72 Q51 74 65 0Z',c)+E(0,0,65,19,'#E4DEC3')+E(0,0,54,13,'#C5C3A6'));}
function cup(x,y,s=1){return G(x,y,s,R(-21,-39,42,40,'#E9E4D1',6)+E(0,-39,21,7,'#CBBEA0')+P('M21 -32 Q43 -35 43 -17 Q42 -4 21 -7','none','#E9E4D1',7));}
function plate(x,y,s=1){return G(x,y,s,E(0,0,65,21,'#E8E2CC')+E(0,0,48,13,'#D7D3BA'));}
function millet(x,y,s=1,n=18){return G(x,y,s,Array.from({length:n},(_,j)=>E((j*19%86)-43,(j*13%28)-14,2.9,1.9,'#D3B96F')).join(''));}
function bean(x,y,s=1){return G(x,y,s,E(0,0,8,5,'#9E5E4E','transform="rotate(-18)"')+P('M-3 -2 Q0 0 -2 2','none','#CC9782',1.2));}
function sieve(x,y,s=1,beans=0,mil=0){return G(x,y,s,E(0,0,112,37,'#C2B084')+E(0,-5,102,31,'#E6DABD')+[-78,-58,-38,-18,2,22,42,62,82].map(xx=>line(xx,-25,xx,17,'#B3A780',2)).join('')+[-20,-8,4,16].map(yy=>line(-94,yy,94,yy,'#B3A780',2)).join('')+E(0,-5,105,32,'none','stroke="#AA9067" stroke-width="8"')+(mil?millet(0,-7,1.6,mil):'')+Array.from({length:beans},(_,j)=>bean((j*31%133)-61,(j%3)*10-17,1.2)).join(''));}
function jar(x,y,s=1,filled='mix'){return G(x,y,s,R(-44,-88,88,117,'#BA9D77',17)+E(0,-89,44,14,'#8E775B')+E(0,-91,34,9,'#DFCAA3')+(filled?millet(0,-92,.67,17):'')+(filled==='mix'?[bean(-12,-93),bean(16,-91)]:filled==='beans'?[bean(-12,-93),bean(8,-94),bean(18,-91)]:'')+R(-29,-63,58,52,'#DDC79D',8));}
function goose(x,y,s=1,pose='stand',r=0){return G(x,y,s,P('M-17 -7 Q-29 -14 -25 -34 Q-12 -45 8 -31 Q17 -24 15 -9Z','#F2EFE1')+P('M4 -30 Q-2 -50 7 -61 Q18 -68 25 -58 L23 -29Z','#F2EFE1')+E(17,-58,12,11,'#F2EFE1')+P('M25 -59 L42 -54 L25 -50Z','#D9A366')+E(21,-60,2.5,3,ink)+E(-9,-25,12,7,'#8CAFC4',pose==='wide'?'transform="rotate(-30 -9 -25)"':'')+line(-13,-7,-13,0,'#D3A061',4)+line(6,-7,6,0,'#D3A061',4)+P('M-18 -29 L0 -29','none','#CFD3C6',1.4),r);}
function bedcloth(x,y,s=1,full=false){return G(x,y,s,R(-66,-27,132,56,full?'#ECE2C8':'#DED7C0',full?24:6)+P('M-54 -17 L52 -17 L54 15 L-52 17Z','none','#C5B99A',2)+(full?P('M-48 24 L-39 27 M-27 25 L-19 28 M-6 25 L3 28 M16 25 L25 27 M38 24 L47 26','none','#A59C86',2):P('M-63 -23 L-61 22','none','#AFA18A',4)));}
function mill(hung=true){return room('#DDD7C1')+[94,218,356,483].map((x,j)=>R(x,178+j%2*62,88,37,'none',8,'stroke="#CEC8B2" stroke-width="3"')).join('')+(hung?G(275,255,1,sieve(0,0,.72),-82):line(275,224,275,238,'#9E8866',5));}
function grainScene(i,cover){
 if(cover)return mill()+actor('穗团',340,714,1.12,'back')+desk(610,663,1.1)+bedcloth(629,624,.95,true)+goose(628,624,.85,'stand',-16)+jar(768,590,.66,'beans')+P('M388 543 Q439 573 524 597 M292 543 Q300 582 325 596','none','#B6BCB5',22);
 return [
 ()=>mill()+actor('穗团',338,719,1.07,'point')+desk(625,663,1.16)+bedcloth(617,625,1.04)+goose(684,610,.8,'wide'),
 ()=>mill()+actor('穗团',337,715,1.05,'back')+desk(628,662,1.2)+jar(754,599,.72)+bowl(582,600,.85)+millet(582,599,.9,22)+bean(569,596)+bean(597,601)+goose(648,606,.81)+P('M382 554 Q433 576 520 570 M292 554 Q303 580 339 593','none','#B6BCB5',22)+G(523,570,.8,P('M0 0 L63 -24','none','#B09A74',9)+E(66,-26,19,12,'#C5B18C')),
 ()=>mill()+stool(350,650)+seated('穗团',350,642,1.05,'back')+desk(622,662,1.22)+bowl(572,597,.79)+millet(572,595,1,25)+bean(595,596)+plate(735,628,.5)+bean(723,627)+bean(741,628)+bedcloth(782,571,.56)+goose(638,606,.79)+P('M395 565 Q426 600 532 596 M305 565 Q332 599 361 603','none','#B6BCB5',22)+bean(537,594),
 ()=>mill(false)+actor('穗团',338,718,1.07,'back')+desk(622,667,1.16)+bowl(601,611,.94)+sieve(601,546,.89)+millet(596,579,.48,6)+goose(758,618,.85)+P('M384 554 Q433 537 507 542 M292 554 Q314 584 348 604','none','#B6BCB5',22),
 ()=>mill(false)+actor('穗团',319,722,1.06,'back')+desk(623,676,1.23)+bowl(601,617,1)+sieve(601,537,1.04)+bean(617,531,1.4)+millet(575,581,.7,9)+goose(753,606,.9)+P('M365 560 Q420 535 490 535 M273 560 Q268 600 287 622','none','#B6BCB5',22),
 ()=>mill(false)+actor('穗团',322,721,1.07,'back')+desk(631,678,1.25)+bowl(617,597,1.45,'#A7B5A8')+sieve(617,505,1.18,6,20)+millet(610,555,1.1,19)+goose(802,622,.84)+P('M368 557 Q421 516 484 508 M276 557 Q299 591 325 598','none','#B6BCB5',22)+P('M494 488 L482 483 M748 486 L761 480','none','#AA9A7A',3),
 ()=>mill(false)+actor('穗团',339,715,1.06,'hold')+desk(622,663,1.16)+bedcloth(584,621,1.03,true)+goose(609,600,.84)+jar(742,594,.67,'beans')+R(737,637,76,33,'#B89479',8)+R(734,628,82,17,'#CCA98B',5)+sieve(442,680,.55),
 ()=>mill()+actor('穗团',344,715,1.07,'think')+desk(629,663,1.17)+bedcloth(613,621,1.06,true)+goose(611,623,.84,'stand',-68)+jar(774,594,.67,'beans')+R(738,645,78,25,'#B89479',6)
 ][i]();
}
function woodbox(x,y,s=1,open=0,turn=false){let a=E(0,7,92,13,'#546556','opacity=".14"')+[-60,-27,28,61].map((xx,j)=>R(xx,-7,12,25,'#8F7155',4)).join('')+R(-80,-88,160,91,'#A98460',9)+line(-70,-42,69,-42,'#8B6D52',3)+line(-24,-83,-24,-7,'#BE9B72',2);if(open){a+=P(`M-81 -88 L-67 ${-106-open*62} L75 ${-106-open*62} L81 -88Z`,'#C4A17A')+P(`M-24 ${-98-open*32} Q0 ${-84-open*32} 24 ${-98-open*32}`,'none','#705F4C',3)+R(-54,-82,104,16,'#C0B3C5',4);}else a+=R(-83,-102,166,18,'#BA966E',7);a+=E(0,-72,11,11,'#D7BE75')+E(0,-72,5,5,'#9D8756');return G(x,y,s,`<g transform="scale(${turn?-1:1} 1)">${a}</g>`);}
function bridge(){return outdoors()+P('M0 475 Q500 416 1000 469 L1000 760 Q500 667 0 731Z','#9EBAB6')+P('M0 518 L1000 500 L1000 715 L0 730Z','#C4AD86')+[100,240,380,520,660,800,940].map(x=>line(x,516,x+29,722,'#AB936F',3)).join('')+line(0,468,1000,449,'#9B8868',12)+[60,218,376,534,692,850].map(x=>line(x,463,x+5,568,'#9B8868',11)).join('')+R(27,283,93,146,'#C9BCA0',15)+P('M15 289 L75 241 L133 289Z','#B38572')+R(893,268,100,154,'#D6C4A2',15)+P('M881 274 L946 224 L1008 274Z','#A7B58A');}
function westHome(){return outdoors()+R(680,208,234,410,'#D8C5A0',18)+P('M638 231 L788 111 L948 231Z','#B38770')+R(724,379,114,239,'#A5AD8C',60)+E(818,508,6,6,'#C4AF78')+P('M0 694 Q507 602 777 619 L893 694 L1000 800 L0 800Z','#D2C4A4');}
function quietScene(i,cover){
 if(cover)return bridge()+bench(468,640,1.13)+seated('芦团坐',429,626,1.12,'hold')+woodbox(730,716,1.03)+bag(291,704,.66)+leaf(590,601,.6,'#CBB676',17);
 return [
 ()=>bridge()+actor('芦团',443,685,1.09,'wave',true)+woodbox(710,701,1.1,.8)+P('M771 664 Q792 654 800 632','none','#A28F70',3),
 ()=>bridge()+actor('芦团',484,690,1.1,'stand',true)+woodbox(743,700,1.05,1)+G(747,326,.95,E(0,0,95,75,'#F0E7CE','opacity=".85"')+P('M-48 15 Q-58 -38 0 -35 Q66 -35 50 18 L3 61Z','#D6A77D')+leaf(7,-36,.45,'#9FB57D',-20)),
 ()=>bridge()+bench(316,617,.95)+actor('芦团',526,698,1.07,'think',true)+woodbox(755,710,1.04,.8),
 ()=>bridge()+bench(421,639,1.08)+seated('芦团坐',410,626,1.09,'think')+bag(257,700,.7)+woodbox(739,711,1.03,.12,true),
 ()=>bridge()+bench(441,638,1.12)+seated('芦团坐',391,626,1.09,'back')+P('M438 547 Q493 582 544 609 M344 547 Q334 586 356 600','none','#AD8D69',22)+bag(258,700,.7)+woodbox(729,711,1.03,.23),
 ()=>bridge()+bench(435,638,1.12)+seated('芦团坐',405,626,1.1,'hold')+bag(255,701,.7)+woodbox(710,709,1.03)+leaf(567,580,.5,'#C6B175',20),
 ()=>bridge()+actor('芦团',384,699,1.07,'stand',true)+woodbox(649,711,1.08)+leaf(247,659,.45,'#C6B175',43),
 ()=>westHome()+R(215,665,337,77,'#BDADBF',35)+R(199,526,134,181,'#D0C1CF',35)+floorKid('芦团坐',406,687,1.1,'hold')+bag(361,743,.66)+woodbox(664,736,1.05,.09)
 ][i]();
}
function suitcase(x,y,s=1,open=0){let a=E(0,9,99,13,'#506154','opacity=".12"')+R(-88,-91,176,100,'#9F785B',13)+R(-74,-77,149,73,'none',7,'stroke="#C0A17A" stroke-width="3"')+P('M-24 -94 Q-25 -123 0 -124 Q26 -124 25 -94','none','#88684F',8);if(open)a+=P(`M-88 -91 L-76 ${-102-open*99} L79 ${-102-open*99} L88 -91Z`,'#B79A76')+P('M-75 -89 L73 -89 L58 -60 L-59 -60Z','#D5C4A1');else a+=R(-91,-99,182,18,'#B08A65',6);a+=R(-58,-104,20,27,'#D9BD72',4)+R(38,-104,20,27,'#D9BD72',4)+E(-48,-90,3,3,'#876F46')+E(48,-90,3,3,'#876F46');return G(x,y,s,a);}
function mushroom(x,y,s=1){return G(x,y,s,R(-7,-16,14,36,'#E9DEC3',4)+P('M-32 -15 Q-26 -48 0 -50 Q28 -48 32 -15Z','#B98070')+E(-12,-29,5,4,'#EAE1CC')+E(11,-35,4,4,'#EAE1CC'));}
function bedroom(old=false,night=false){return R(0,0,1000,800,old?'#D6CDB6':'#DED4BD',0)+R(0,616,1000,184,'#BCAE90',0)+P('M0 619 Q36 400 23 112 M1000 615 Q965 406 976 89','none','#A99A7B',30)+E(763,240,126,126,'#A9A78B')+E(763,240,111,111,night?'#596E7C':'#B9D2C2')+(night?E(785,185,25,25,'#E9DFB9'):'')+(old?mushroom(763,295,.68):mushroom(704,298,.62)+mushroom(762,279,.62)+mushroom(818,297,.62))+R(626,360,274,18,'#AC9774',5)+(old?R(129,368,195,251,'#A78D69',8)+R(143,386,167,211,'#B59A73',6)+E(286,500,7,7,'#D4BD83'):R(93,498,319,159,'#B5A17E',9)+R(78,473,24,239,'#A38D6D',7)+R(400,539,22,176,'#A38D6D',7)+R(99,514,302,106,'#D8C7CC',16)+R(112,514,95,57,'#EFE7D2',13));}
function pajamas(x,y,s=1){return G(x,y,s,P('M-39 -27 L-18 -39 L18 -39 L39 -27 L56 3 L37 14 L25 -3 L26 33 L-26 33 L-25 -3 L-37 14 L-56 3Z','#9FBAC9')+[-20,0,20].map(xx=>line(xx,-26,xx,27,'#E5EADF',3)).join('')+[-14,5,23].map(yy=>line(-26,yy,26,yy,'#E5EADF',3)).join(''));}
function goodbyeScene(i,cover){
 if(cover)return bedroom()+actor('苓苓',470,727,1.12,'hold')+suitcase(700,705,1.13,.85)+R(659,621,83,32,'#F0E7D3',12)+pajamas(704,592,.86);
 return [
 ()=>bedroom()+actor('苓苓',501,722,1.1,'back')+suitcase(710,713,1.08)+P('M548 554 Q591 585 651 604 M454 554 Q466 594 486 611','none','#E1C6A8',22),
 ()=>bedroom()+R(601,704,227,33,'#B8C6AF',11)+floorKid('苓苓',490,689,1.06,'hold')+suitcase(710,699,1.05),
 ()=>bedroom()+floorKid('苓苓',491,687,1.06,'point')+R(605,706,219,29,'#B8C6AF',10)+suitcase(714,700,1.04),
 ()=>bedroom()+floorKid('苓苓',501,686,1.06,'back')+R(606,706,220,29,'#B8C6AF',10)+suitcase(714,700,1.04)+P('M546 606 Q587 571 688 573 M455 606 Q447 638 476 655','none','#E1C6A8',21)+line(654,591,654,580,'#DDC377',6),
 ()=>outdoors()+P('M0 640 Q421 514 1000 634 L1000 800 L0 800Z','#D3C4A2')+actor('苓苓',438,706,1.13,'back')+suitcase(600,691,.93)+P('M487 533 Q513 550 550 568 Q575 573 600 576 M389 533 Q365 584 365 614','none','#E1C6A8',22),
 ()=>bedroom(true)+actor('苓苓',605,722,1.1,'hold')+suitcase(390,718,1.08,.10)+R(99,729,315,16,'#9E896A',4),
 ()=>bedroom()+actor('苓苓',483,725,1.1,'back')+suitcase(718,711,1.08,.91)+R(666,628,98,35,'#F0E7D2',12)+pajamas(601,561,1.02)+P('M530 557 Q550 534 567 545 M436 557 Q465 593 553 574','none','#E1C6A8',22),
 ()=>bedroom(false,true)+G(340,566,.72,actor('苓苓睡',0,0,1,'sleep'),-80)+R(235,578,156,47,'#D8C7CC',14)+suitcase(624,722,1.08,.07)
 ][i]();
}
function crab(x,y,s=1,back=false){let a=[-1,1].map(k=>[-2,0,2].map(j=>P(`M${k*26} ${-8+j*6} Q${k*50} ${-14+j*8} ${k*61} ${4+j*8}`,'none','#C98271',6)).join('')+P(`M${k*21} -20 Q${k*58} -45 ${k*67} -48`,'none','#C98271',8)+P(`M${k*62} -41 Q${k*85} -53 ${k*73} -72 L${k*68} -55 L${k*58} -67 Q${k*47} -54 ${k*62} -41Z`,'#D99983')).join('')+E(0,-12,41,26,'#CF8F7D')+P('M-25 -25 L-29 -42 M25 -25 L29 -42','none','#C47E6B',5)+E(-29,-45,9,10,'#CF8F7D')+E(29,-45,9,10,'#CF8F7D');if(!back)a+=E(-28,-45,4,5,ink)+E(28,-45,4,5,ink)+P('M-10 -9 Q0 -1 10 -9','none','#8C6357',3);a+=P('M-23 -34 Q-25 -68 0 -69 Q26 -68 24 -34Z','#E5E9DE')+[-60,-48,-37].map(yy=>R(-20,yy,40,6,'#8FABBF',1)).join('')+R(-29,-36,58,9,'#89ABBC',4);return G(x,y,s,a);}
function peach(x,y,s=1){return G(x,y,s,P('M0 -17 Q-30 -35 -31 -5 Q-26 22 0 31 Q29 21 32 -5 Q31 -35 0 -17Z','#D5A0AA')+P('M0 -16 Q9 3 0 28','none','#B98291',2.5)+leaf(10,-22,.25,'#A9BC8B',36));}
function fan(x,y,s=1,r=0){return G(x,y,s,line(0,0,0,54,'#AF9370',7)+P('M0 5 L-52 -38 Q0 -80 52 -38Z','#B4C6BE')+[-35,-16,16,35].map(xx=>line(0,5,xx,-45,'#8FAAA7',2)).join(''),r);}
function sandyard(){return outdoors()+R(115,195,19,421,'#A8916C',5)+R(795,195,19,421,'#A8916C',5)+P('M69 204 L464 89 L860 204Z','#C7B99A')+P('M114 218 L812 218 L725 666 L159 666Z','#697B67','',0,'opacity=".10"')+R(130,541,747,192,'#BBA17A',18)+R(147,551,713,157,'#D9C494',13)+P('M725 551 L860 551 L860 708 L692 708Z','#E9D29C')+G(268,605,1,P('M-23 8 Q-28 -25 0 -29 Q29 -22 24 8Z','#F2EBD6')+P('M-17 4 L-7 -20 M0 4 L0 -22 M15 4 L10 -17','none','#D0C5AA',2));}
function sandKid(x,y,s=1,pose='stand',flip=false){return `<defs><clipPath id="sand-person-${x}"><rect x="0" y="0" width="1000" height="551"/></clipPath></defs><g clip-path="url(#sand-person-${x})">${actor('浅浅',x,y+130,s,pose,flip,pose==='turned'?E(0,-221,64,58,'#DEC394'):'')}</g>`;}
function sandScene(i,cover){
 if(cover)return sandyard()+sandKid(385,562,.94,'hold')+P('M345 548 Q362 567 375 575 M425 548 Q411 567 398 575','none','#DEC394',19)+peach(388,575,.7)+crab(675,579,1.06)+fan(799,675,.65,65)+E(590,645,49,12,'#C9AD79');
 return [
 ()=>sandyard()+sandKid(317,548,.98,'turned',true)+P('M269 529 Q267 491 293 459 M359 529 Q366 491 338 459','none','#DEC394',20)+crab(663,581,1.04)+P('M608 616 Q641 585 684 616Z','#D8C294')+peach(645,600,.45),
 ()=>sandyard()+sandKid(364,552,.98,'back')+crab(660,573,1.03)+P('M406 532 Q436 553 449 565 Q455 579 467 586 M322 532 Q313 554 325 565','none','#DEC394',20)+fan(806,657,.64,58),
 ()=>sandyard()+sandKid(685,549,.95,'back')+P('M644 533 Q617 560 644 579 M725 533 Q753 560 764 581','none','#DEC394',20)+E(742,624,49,17,'#C1A673')+crab(469,574,1.02)+fan(799,689,.62,67),
 ()=>sandyard()+sandKid(388,553,.97,'back')+crab(678,574,1.04)+P('M430 535 Q460 580 493 606 M346 535 Q343 555 363 572','none','#DEC394',20)+fan(516,570,.79,33)+P('M541 577 Q562 596 580 599 M550 565 Q585 580 598 579','none','#A2B6AA',3),
 ()=>sandyard()+sandKid(412,549,.98,'back')+crab(694,575,1.04)+P('M454 529 Q505 563 572 586 M370 529 Q366 551 390 572','none','#DEC394',20)+fan(796,666,.63,64),
 ()=>sandyard()+sandKid(395,550,.98,'wide')+crab(672,577,1.08)+fan(805,664,.63,64),
 ()=>sandyard()+sandKid(416,552,.98,'back')+crab(690,578,1.04)+E(581,626,49,15,'#C2A774')+P('M458 532 Q489 551 548 562 M374 532 Q383 553 530 571','none','#DEC394',20)+peach(557,559,.72)+fan(802,665,.63,64),
 ()=>sandyard()+sandKid(412,551,.98,'hold')+P('M370 531 Q384 561 402 572 M454 531 Q440 561 422 572','none','#DEC394',20)+peach(412,572,.69)+crab(700,579,1.05,true)+fan(803,666,.63,64)
 ][i]();
}
function pinwheel(x,y,s=1){return G(x,y,s,line(0,0,0,64,'#A48A65',5)+P('M0 0 L-37 -36 L0 -37Z','#D6B481')+P('M0 0 L36 -36 L37 0Z','#B1C8AF')+P('M0 0 L37 36 L0 37Z','#A7BFCE')+P('M0 0 L-36 37 L-37 0Z','#CE9C9E')+E(0,0,5,5,'#D3BE83'));}
function stone(x=780,y=501,s=1){return G(x,y,s,E(0,18,66,19,'#B7A8BE')+P('M-62 11 Q-64 -1 -48 -8 L49 -8 Q66 1 63 12Z','#C7BAD0')+E(0,-8,49,29,'#CFD2C7')+E(-25,-2,8,7,'#A38C71')+E(25,-2,8,7,'#A38C71')+E(-16,-15,4,5,ink)+E(16,-15,4,5,ink)+P('M-8 2 Q0 9 9 2','none','#7D8273',2));}
function pot(x,y,s=1,bent=false){return G(x,y,s,P('M-36 0 L36 0 L26 55 L-26 55Z','#C29B7D')+line(0,0,bent?22:0,-79,'#849A73',5)+leaf(bent?22:0,-65,.55,'#9DB48A',bent?60:25)+leaf(bent?10:0,-39,.44,'#AFC297',-55));}
function bubbleYard(){return outdoors()+R(627,248,305,370,'#DDD1AF',12)+P('M588 258 L778 120 L965 258Z','#B88375')+R(671,303,215,235,'#A09F87',34)+R(686,317,184,205,'#DCE0C9',25)+R(650,529,262,23,'#AE9872',6)+pinwheel(572,343,.54)+P('M549 422 L594 422 L607 445 L531 445Z','#B8B58D');}
function ring(x,y,s=1,r=0){return G(x,y,s,E(0,0,29,33,'none','stroke="#A9B8A2" stroke-width="5"')+line(0,33,0,78,'#A9B8A2',6),r);}
function bubble(x,y,r=46,reflection=true){const k=r/60;return G(x,y,k,E(0,0,60,60,'#D9E9DB','fill-opacity=".32" stroke="#D2AABF" stroke-width="3"')+P('M-46 -34 Q-18 -67 18 -53','none','#F4EEE1',6)+P('M36 43 Q62 18 53 -16','none','#A9C7B0',4)+(reflection?G(1,4,.55,R(-37,-8,58,40,'#E6D4A9',3)+P('M-48 -8 L-8 -41 L33 -8Z','#BC8373')+R(-13,9,12,22,'#AAB792',2)+pinwheel(48,-8,.47)+P('M-56 36 Q0 19 67 36 L50 46 L-35 47Z','#AFC293')):''));}
function bubbleScene(i,cover){
 if(cover)return bubbleYard()+stone(787,502,1.13)+actor('阿拂',395,728,1.12,'back')+desk(450,679,.52)+bowl(452,640,.54,'#A7B9C1')+P('M443 557 Q484 598 519 632 M347 557 Q330 585 345 610','none','#E2D2B4',23)+ring(502,583,.65,-15)+bubble(650,449,85);
 return [
 ()=>bubbleYard()+stone()+actor('阿拂',413,725,1.1,'hold')+bowl(413,602,.6,'#A7B9C1')+ring(548,647,.65,50)+desk(545,706,.49),
 ()=>bubbleYard()+stone()+actor('阿拂',420,725,1.08,'back')+desk(399,691,.53)+bowl(397,648,.58,'#A7B9C1')+P('M466 559 Q501 573 504 566 M374 559 Q353 586 359 607','none','#E2D2B4',22)+ring(505,518,.65)+P('M490 504 L501 493 M513 506 L525 495 M519 531 L533 536','none','#A2C2BF',3)+E(426,505,4,4,'#A6C1C5')+E(440,513,3,3,'#A6C1C5')+P('M441 524 L482 518','none','#DFD9BE',5),
 ()=>bubbleYard()+stone()+actor('阿拂',420,725,1.08,'back')+desk(399,691,.53)+bowl(397,648,.58,'#A7B9C1')+P('M466 559 Q501 573 504 566 M374 559 Q353 586 359 607','none','#E2D2B4',22)+ring(505,518,.65)+bubble(557,499,21)+bubble(600,473,25)+bubble(640,511,19),
 ()=>bubbleYard()+stone()+stool(429,652,.97)+seated('阿拂',429,643,1.08,'back')+P('M475 565 Q492 577 535 558 M382 565 Q355 581 363 610','none','#E2D2B4',22)+desk(647,697,.52)+bowl(619,653,.54,'#A7B9C1')+ring(660,645,.55,60)+pot(558,641,.7,true)+P('M489 523 Q527 506 568 517 M500 537 Q542 526 580 533','none','#B2C7B5',3),
 ()=>bubbleYard()+stone()+actor('阿拂',420,725,1.08,'back')+desk(399,691,.53)+bowl(397,648,.58,'#A7B9C1')+P('M466 559 Q501 573 504 566 M374 559 Q353 586 359 607','none','#E2D2B4',22)+ring(505,518,.65)+P('M505 497 Q572 461 577 513 Q575 568 505 540Z','#DBE8DB','#D3ADB9',2.6,'fill-opacity=".40"')+P('M442 522 Q466 516 485 520','none','#DADCC4',3),
 ()=>bubbleYard()+stone()+actor('阿拂',420,725,1.08,'back')+desk(399,691,.53)+bowl(397,648,.58,'#A7B9C1')+P('M466 559 Q486 594 494 625 M374 559 Q353 588 359 608','none','#E2D2B4',22)+ring(506,630,.62,33)+bubble(642,497,49),
 ()=>bubbleYard()+stone(791,502,1.13)+actor('阿拂',372,733,1.08,'hold')+desk(449,694,.5)+bowl(449,652,.58,'#A7B9C1')+ring(517,629,.61,24)+bubble(701,494,55),
 ()=>bubbleYard()+stone()+actor('阿拂',421,726,1.08,'back')+desk(399,691,.53)+bowl(397,648,.58,'#A7B9C1')+P('M467 560 Q502 574 505 567 M375 560 Q353 586 359 608','none','#E2D2B4',22)+ring(506,519,.65)+P('M506 500 Q553 483 551 520 Q551 551 506 539Z','#DCE8DC','#D3ADB9',2.6,'fill-opacity=".4"')+E(499,584,3,5,'#A6C1C5')+P('M443 523 Q465 517 486 521','none','#DADCC4',3)
 ][i]();
}
function sack(x,y,s=1,c='#C6BC94'){return G(x,y,s,P('M-29 -52 Q-47 -16 -41 25 Q0 43 41 25 Q47 -17 29 -52Z',c)+R(-28,-57,56,11,'#9F9C78',4)+E(0,-6,16,20,'#E3D9B5')+line(0,-20,0,7,'#A9AF86',2));}
function warehouse(){return R(0,0,1000,800,'#DCD6BF',0)+R(0,619,1000,181,'#C0B395',0)+R(767,266,181,350,'#BAA681',9)+R(752,418,211,16,'#A48F6B',5)+R(752,605,211,17,'#A48F6B',5)+sack(806,374,.59)+sack(889,373,.65,'#C6C2A0')+sack(810,565,.73,'#C6C2A0')+sack(895,562,.66)+R(88,174,608,286,'#D4D0BA',6);}
function bloom(x,y,s=1,type='daisy'){const petal=type==='sun'?'#D6BB72':'#F5F0DF';return G(x,y,s,line(0,0,0,70,'#8FA980',5)+leaf(0,44,.38,'#A1B68D',-55)+leaf(0,29,.3,'#A9BB8E',45)+Array.from({length:type==='sun'?11:9},(_,j)=>G(0,0,1,E(0,-24,10,23,petal,type==='daisy'?'stroke="#D9D7BF" stroke-width="1.5"':''),j*360/(type==='sun'?11:9))).join('')+E(0,0,type==='sun'?19:12,type==='sun'?19:12,type==='sun'?'#9E8B59':'#DBC47F'));}
function paper(x,y,s=1,type='blank',r=0){let a=R(-90,-117,180,234,'#F1EDDA',4);if(type==='sun')a+=bloom(0,-29,1.26,'sun');if(type==='daisy')a+=bloom(0,-24,.61)+grass(-51,64,.5)+grass(32,70,.5);if(type==='giant')a+=bloom(0,-31,1.66);if(type==='crowd')a+=[[-54,-75],[0,-75],[53,-75],[-54,3],[0,3],[53,3]].map(([xx,yy])=>bloom(xx,yy,.62,'sun')).join('')+bloom(0,74,.37);return G(x,y,s,a,r);}
function brush(x,y,s=1,r=0){return G(x,y,s,line(0,0,0,70,'#A18D68',6)+P('M-6 0 L-7 -19 L0 -33 L7 -19 L6 0Z','#8AA792'),r);}
function paintpot(x,y,s=1,c='#D5BC76'){return G(x,y,s,R(-18,-23,36,33,'#C5B692',6)+E(0,-22,18,7,c));}
function artPair(p1='hold',p2='hold'){return actor('麦粒',307,724,1.06,p1)+actor('乌圆',697,729,1.06,p2);}
function galleryScene(i,cover){
 if(cover)return warehouse()+paper(329,321,.89,'sun')+paper(585,321,.89,'daisy')+bench(460,666,1.36)+seated('麦粒',335,649,1.02,'hold')+seated('乌圆',598,650,1.02,'hold')+cup(367,560,.63)+cup(563,563,.63);
 return [
 ()=>warehouse()+actor('麦粒',358,728,1.1,'hold')+paper(360,596,.59)+actor('乌圆',703,731,1.08,'point')+sack(824,698,.87)+desk(548,687,.8),
 ()=>warehouse()+artPair('hold','hold')+desk(512,672,1.11)+paper(414,588,.48,'sun',-8)+paper(615,588,.48,'daisy',8)+paintpot(522,620,.65)+brush(544,617,.63,69),
 ()=>warehouse()+artPair('point','think')+desk(512,691,1.12)+paper(507,559,.85,'giant')+paintpot(650,649,.64,'#F5F0DF')+brush(388,642,.7,-70),
 ()=>warehouse()+artPair('hold','think')+desk(512,693,1.12)+paper(507,559,.85,'crowd')+paintpot(650,650,.64)+brush(388,643,.7,-70),
 ()=>warehouse()+artPair('think','back')+desk(512,694,1.12)+paper(507,559,.85,'crowd')+P('M651 567 Q613 510 550 498 M742 567 Q650 562 550 563','none','#C4A19B',28)+R(433,469,148,56,'#C4A19B',23)+R(433,536,148,56,'#C4A19B',23)+P('M442 484 L476 484 M440 499 L476 499 M442 550 L476 550 M440 566 L476 566','none','#B98F89',2)+paintpot(650,650,.64)+brush(388,643,.7,-70),
 ()=>warehouse()+artPair('back','hold')+desk(511,703,1.48)+paper(402,624,.48)+paper(607,624,.48)+paper(721,652,.31,'crowd',9)+P('M353 562 Q400 551 473 566 M261 562 Q245 591 265 615','none','#B99D7E',22)+brush(473,564,.65,80)+brush(643,617,.64,8)+paintpot(523,663,.65),
 ()=>warehouse()+actor('麦粒',305,726,1.03,'hold')+actor('乌圆',699,730,1.03,'hold')+paper(405,432,.83,'sun')+paper(604,432,.83,'daisy')+desk(511,703,1.1)+paper(515,656,.25,'crowd',10)+brush(417,653,.7,72)+brush(612,653,.7,-74),
 ()=>warehouse()+paper(329,321,.87,'sun')+paper(583,321,.87,'daisy')+stool(330,660,1.1)+stool(585,660,1.1)+seated('麦粒',330,648,1.03,'back')+seated('乌圆',585,648,1.03,'back')+P('M374 572 Q410 558 446 573 M286 572 Q279 598 299 618','none','#B99D7E',21)+P('M541 572 Q511 557 477 573 M629 572 Q640 598 621 618','none','#C4A19B',22)+cup(445,579,.68)+cup(477,579,.68)
 ][i]();
}
function lantern(x,y,s=1,lit=1){return G(x,y,s,(lit?E(0,-31,93,93,'#E7D395',`opacity="${lit*.18}"`)+E(0,-31,68,70,'#F1DE99',`opacity="${lit*.22}"`):'')+P('M-25 -83 Q-40 -139 0 -139 Q40 -139 25 -83','none','#A89E72',7)+E(0,-32,51,57,lit?'#E9CE7B':'#B7AF88')+R(-30,-91,60,15,'#B4A378',6)+R(-33,16,66,13,'#A79B73',6)+E(-16,-40,4,5,ink)+E(16,-40,4,5,ink)+P('M-8 -23 Q0 -17 9 -23','none','#746E53',2.5)+E(49,-15,10,10,'#978864')+line(49,-20,49,-10,'#D2C5A1',2));}
function moth(x,y,s=1,drinking=false,r=0){return G(x,y,s,E(-19,0,23,15,'#ACA38C','transform="rotate(-31 -19 0)"')+E(19,0,23,15,'#B7AD96','transform="rotate(31 19 0)"')+E(-16,12,15,11,'#9D9582')+E(16,12,15,11,'#A9A18B')+E(0,0,5,19,'#787A6A')+E(0,-17,6,6,'#82816D')+P('M-3 -22 L-10 -33 M3 -22 L10 -33','none','#808170',2)+(drinking?P('M0 -20 Q-16 -18 -29 -41','none','#757967',1.8):''),r);}
function primrose(x,y,s=1){return G(x,y,s,line(0,0,0,80,'#8CA17C',5)+leaf(0,54,.38,'#9FAE85',-55)+[0,90,180,270].map(r=>G(0,0,1,E(0,-17,17,21,'#DAC684'),r)).join('')+E(0,0,7,7,'#B59F65'));}
function eveningGarden(){return outdoors(true)+P('M0 719 Q421 618 1000 700 L1000 800 L0 800Z','#AFB59E')+[150,320,504,690,867].map((x,j)=>E(x,737+j%2*28,71,21,'#C0C3AE')).join('')+P('M66 531 L83 196','none','#69765E',20)+P('M-44 222 Q66 52 205 215 Q65 265 -44 222Z','#74866E')+[728,791,845,901].map((x,j)=>primrose(x,575+j%2*24,.72)).join('');}
function flowerScene(i,cover){
 if(cover)return eveningGarden()+bench(431,661,1.2)+seated('麦铃',390,646,1.12,'hold')+lantern(582,628,.76,0)+moth(759,578,.63,true,-50);
 return [
 ()=>eveningGarden()+actor('麦铃',390,730,1.12,'back')+P('M438 559 Q476 558 509 588 M342 559 Q325 600 340 626','none','#B5A6C6',24)+E(511,588,12,12,'#E2C7A9')+lantern(511,686,.73,1),
 ()=>eveningGarden()+bench(432,658,1.15)+seated('麦铃',389,643,1.1,'hold')+lantern(584,627,.72,1)+moth(623,525,.58,false,-26),
 ()=>eveningGarden()+bench(432,658,1.15)+seated('麦铃',389,643,1.1,'back')+lantern(584,627,.72,1.65)+P('M436 563 Q505 580 620 614 M342 563 Q321 598 339 620','none','#B5A6C6',23)+E(620,614,12,12,'#E2C7A9')+moth(654,521,.6,false,-25),
 ()=>eveningGarden()+actor('麦铃',396,729,1.1,'back')+P('M443 561 Q471 552 497 559 M349 561 Q326 597 341 625','none','#B5A6C6',24)+E(498,559,12,12,'#E2C7A9')+lantern(499,655,.72,1)+moth(595,572,.59,false,17)+P('M452 674 Q426 663 419 643 M566 678 Q594 667 602 648','none','#A7B3A1',3),
 ()=>eveningGarden()+bench(432,658,1.15)+seated('麦铃',389,643,1.1,'back')+lantern(584,627,.72,1)+P('M436 563 Q505 580 620 614 M342 563 Q321 598 339 620','none','#B5A6C6',23)+E(620,614,12,12,'#E2C7A9')+moth(641,518,.6,false,-24),
 ()=>eveningGarden()+bench(432,658,1.15)+seated('麦铃',389,643,1.1,'hold')+lantern(584,627,.72,0)+moth(754,490,.6,false,17),
 ()=>eveningGarden()+bench(407,666,1.14)+seated('麦铃',365,650,1.1,'hold')+lantern(562,634,.72,0)+moth(759,578,.63,true,-50),
 ()=>eveningGarden()+P('M178 692 L420 670 L514 768 L135 768Z','#E1D29F','',0,'opacity=".23"')+actor('麦铃',337,738,1.09,'back',true)+P('M290 571 Q255 581 238 609 M384 571 Q401 612 384 632','none','#B5A6C6',23)+E(237,608,12,12,'#E2C7A9')+lantern(237,703,.72,.32)+moth(760,579,.55,true,-50)
 ][i]();
}
function clothBloom(x,y,s=1){return G(x,y,s,[-72,0,72,144,216].map(r=>G(0,0,1,E(0,-27,22,28,'#CCA2AF'),r)).join('')+E(0,0,20,19,'#E5CF95')+P('M-10 -1 Q0 11 10 -1','none','#967966',3));}
function carpet(x,y,s=1,rolled=false,r=0,sneeze=false){let a;if(rolled){a=R(-125,-32,250,64,'#B4C5A5',28)+E(126,0,29,32,'#9DAF91')+E(126,0,18,22,'#CFD8BD')+clothBloom(-13,-1,.69)+[-14,0,14].map(yy=>line(-126,yy,-148,yy+4,'#93AA8B',4)).join('');}else{a=R(-202,-76,404,152,'#BACBAA',15)+R(-185,-58,370,117,'none',9,'stroke="#A5BA98" stroke-width="3"')+[-1,1].map(k=>[-1,1].map(j=>[-9,0,9].map(d=>line(k*197+d,j*66,k*218+d,j*87,'#94AC8B',4)).join('')).join('')).join('')+clothBloom(0,0,1);if(sneeze)a+=P('M-10 0 L0 15 L10 0Z','#9B7C69')+P('M30 3 L58 4 M27 15 L53 27','none','#D5C5A2',3);}return G(x,y,s,a,r);}
function dust(x,y,s=1,n=19){return G(x,y,s,Array.from({length:n},(_,j)=>E((j*29%103)-51,(j*17%29)-14,4+j%3,2+j%2,'#928C79','opacity=".6"')).join(''));}
function broom(x,y,s=1,r=0){return G(x,y,s,line(0,-175,0,-18,'#A48C66',9)+P('M-10 -25 L10 -25 L43 27 Q0 40 -43 27Z','#C6B27F')+[-23,-10,4,18].map(xx=>line(xx*.5,-10,xx,28,'#AE9A6A',3)).join('')+R(-14,-24,28,10,'#9E9671',3),r);}
function pan(x,y,s=1,r=0,filled=false){return G(x,y,s,P('M-47 9 L-31 -38 L34 -38 L52 9Z','#9CAFA7')+P('M-31 -38 L34 -38 L34 -25 L-31 -25Z','#859A93')+line(0,-38,0,-84,'#8C9F95',8)+(filled?dust(0,-12,.55,19):''),r);}
function bin(x,y,s=1,closed=true){return G(x,y,s,P('M-46 -89 L46 -89 L34 17 L-34 17Z','#A2B19E')+line(-20,-76,-15,5,'#81967F',3)+line(20,-76,15,5,'#81967F',3)+(closed?R(-54,-99,108,15,'#8EA08C',6)+R(-19,-113,38,14,'#82957E',5):E(0,-91,47,12,'#6D826E')));}
function musicRoom(){return room('#DDD4BE')+R(106,300,156,233,'#B59F7C',7)+R(106,507,156,22,'#CDB58D',6)+R(110,524,16,121,'#A18C69',4)+R(241,524,16,121,'#A18C69',4)+P('M368 146 L368 219 Q343 204 330 225 Q330 249 354 241 Q369 236 368 219 M368 147 L408 133 L408 201 Q383 188 370 209 Q370 234 394 227 Q410 222 408 201','none','#AAB298',6);}
function cleaningScene(i,cover){
 if(cover)return musicRoom()+carpet(631,656,1.03,false,-10)+actor('栗莓',393,725,1.16,'wide')+broom(224,648,.9,-4)+bin(800,708,.68)+pan(838,732,.58);
 return [
 ()=>musicRoom()+carpet(622,683,1.04)+actor('栗莓',358,729,1.1,'back')+broom(439,674,1.02,24)+P('M405 561 Q434 573 478 598 M311 561 Q316 599 343 621','none','#A29984',23)+dust(463,713,.8),
 ()=>musicRoom()+broom(306,677,.9,-17)+actor('栗莓',376,729,1.1,'back')+carpet(663,681,1.03)+P('M453 640 Q489 593 522 628 L522 683 L453 683Z','#BCCCAD')+dust(501,686,.55)+P('M423 561 Q442 604 469 632 M329 561 Q306 586 302 608','none','#A29984',23),
 ()=>musicRoom()+actor('栗莓',365,728,1.1,'wide')+broom(253,678,.93,-5)+carpet(659,679,1.03,false,180,true)+dust(500,626,1.1,24)+dust(744,592,.85,16)+P('M759 718 Q797 693 804 661','none','#A8B79D',4),
 ()=>musicRoom()+broom(256,654,.9,-5)+actor('栗莓',411,725,1.07,'back')+carpet(673,682,1.01)+P('M457 561 Q489 604 507 654 M365 561 Q395 619 459 659','none','#A29984',22)+dust(834,685,.72,21),
 ()=>musicRoom()+broom(255,654,.9,-5)+floorKid('栗莓',421,699,1.08,'hold')+carpet(682,683,1)+dust(586,752,.7,14),
 ()=>musicRoom()+carpet(691,623,1.04,true)+actor('栗莓',400,728,1.1,'back')+P('M447 560 Q500 580 547 607 M353 560 Q364 605 393 622','none','#A29984',23)+broom(547,705,.91,0)+dust(586,710,.81,24)+pan(791,744,.71)+bin(840,699,.67),
 ()=>musicRoom()+carpet(633,680,1.02)+actor('栗莓',375,729,1.1,'back')+P('M422 561 Q451 580 478 600 M328 561 Q309 602 333 626','none','#A29984',23)+pan(479,675,.79,10,false)+bin(814,707,.72,true)+broom(255,653,.9,-5),
 ()=>musicRoom()+carpet(638,677,1.01,false,18)+actor('栗莓',382,726,1.12,'up')+P('M282 691 Q264 666 275 643 M765 716 Q800 689 798 657','none','#ABB497',4)+bin(831,710,.67)+pan(838,743,.56)+broom(252,653,.9,-5)
 ][i]();
}
const scenes={241:grainScene,242:quietScene,243:goodbyeScene,244:sandScene,245:bubbleScene,246:galleryScene,247:flowerScene,248:cleaningScene};
export function seventhYoungFirstArtwork(story,index,cover=false){
 const n=Number(story?.id?.replace('expansion-',''));if(!scenes[n]||story.id!==`expansion-${String(n).padStart(4,'0')}`)throw Error('Unsupported story');
 if(story.pages?.length!==8||!Number.isInteger(index)||index<0||index>7)throw Error('Eight pages and page index 0…7 required');
 return svg(scenes[n](index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

// Independent eight-page storyboards and covers for expansion-0249 through 0256.
// Pure artwork renderer; catalogue integration is owned by the publisher.
import {E,R,P,G,line,leaf,grass,flower,tree,cloud,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F2E9D4';
const C={榛圆:['hedgehog','#B6A07A','#8CAEBE','vest','spines'],苓芽:['fairy','#E3C8AB','#B39AC3','coat','pockets'],苓芽轻:['fairy','#E3C8AB','#B39AC3','coat','empty'],苓芽舞:['fairy','#E3C8AB','#B39AC3','dancecoat','empty'],芽裙:['fairy','#E3C8AB','#B39AC3','dress','leafhair'],奶奶:['fairy','#E1C7AC','#A7C1D1','dress','silver'],绒芽:['rabbit','#EDEBDC','#8CB7C4','vest','buttons'],绯绯:['pig','#D9B3A4','#9EBFB2','dress','pigcurl'],绯绯风:['pig','#D9B3A4','#9EBFB2','dancedress','pigwind'],苔婆婆:['mouse','#BEC4B8','#7C98AD','apron','glasses'],莓灯:['fairy','#E2C7AD','#B8A5C4','petaldress','pinkwing']};
for(const [name,cfg] of Object.entries(C))if(!name.endsWith('坐')&&!C[name+'坐'])C[name+'坐']=cfg;
function arm(x,y,dx,dy,c,w=21){return P(`M${x} ${y} Q${x+dx*.4} ${y+dy*.65-6} ${x+dx} ${y+dy}`,'none',c,w);}
function actor(name,x,y,s=1,pose='stand',flip=false,extra=''){
 const [t,f,c,k,d]=C[name],q=({stand:[[-8,64],[9,65]],hold:[[42,42],[-42,42]],point:[[-8,65],[81,-12]],wave:[[-15,60],[39,-82]],think:[[43,-34],[10,65]],up:[[-30,-64],[31,-64]],wide:[[-52,21],[53,21]],low:[[38,81],[47,80]]})[pose]||[[0,0],[0,0]];
 let a=E(0,0,80,12,'#596957','opacity=".12"');
 if(d==='pinkwing')a+=E(-70,-150,45,65,'#D8E5DC','opacity=".55" transform="rotate(-30 -70 -150)"')+E(70,-150,45,65,'#D8E5DC','opacity=".55" transform="rotate(30 70 -150)"');
 if(t==='hedgehog')a+=P('M-70 -170 L-93 -202 L-75 -219 L-98 -246 L-72 -254 L-81 -287 L-53 -282 L-52 -312 L-26 -296 L-5 -320 L13 -297 L42 -311 L47 -282 L76 -286 L72 -258 L99 -247 L79 -222 L95 -202 L70 -170Z','#AB9470');

 if(t==='mouse'&&!name.endsWith('坐'))a+=P('M43 -46 Q117 -9 131 -71','none',f,8);
 if(t==='otter'&&!name.endsWith('坐'))a+=P('M44 -48 Q139 -60 113 -131 Q155 -48 71 -10Z',f);
 if(t==='raccoon'&&!name.endsWith('坐')){a+=P('M-44 -51 Q-155 -19 -137 -147','none',f,43);a+=[[-1,0],[7,-26],[8,-53]].map(([dx,dy])=>P(`M${-91-dx} ${-53+dy} Q${-114-dx} ${-63+dy} ${-134-dx} ${-57+dy}`,'none','#5D625C',15)).join('');}
 a+=E(-29,-10,29,16,f)+E(29,-10,29,16,f)+E(0,-105,61,87,f);
 a+=['dress','dancedress','petaldress'].includes(k)?P('M-48 -179 L48 -179 L76 -27 Q0 -7 -76 -27Z',c):P(`M-48 -179 L48 -179 L60 ${k==='coat'?-31:-58} Q0 -40 -60 ${k==='coat'?-31:-58}Z`,c);
 if(k==='dancecoat'||k==='dancedress')a+=P('M-47 -145 Q-91 -98 -103 -34 L-52 -47 L-26 -26 L0 -43 L26 -26 L52 -47 L103 -34 Q91 -98 47 -145Z',c);
 if(k==='petaldress')a+=P('M-48 -155 L48 -155 L77 -34 L49 -18 L26 -36 L0 -17 L-26 -36 L-49 -18 L-77 -34Z',c);
 if(['pockets','empty'].includes(d))a+=R(-47,-118,37,d==='pockets'?55:36,d==='pockets'?'#A88DB9':'#BEA6CC',12)+R(10,-118,37,d==='pockets'?55:36,d==='pockets'?'#A88DB9':'#BEA6CC',12)+R(-20,-169,40,30,'#C3ACCE',7)+R(-45,-49,32,32,'#EAE6D6',6)+R(13,-49,32,32,'#EAE6D6',6);
 if(k==='apron')a+=R(-22,-108,44,34,'#C8C39F',7)+line(-43,-173,42,-173,'#D7CFB5',5);
 if(k==='sleep'){a+=R(-48,-65,39,54,c,6)+R(9,-65,39,54,c,6);a+=[-35,-10,15,40].map(xx=>line(xx,-173,xx,-60,'#E7EAE0',4)).join('')+[-155,-131,-107,-83].map(yy=>line(-49,yy,49,yy,'#E7EAE0',4)).join('');}
 if(['mouse','otter','raccoon'].includes(t))a+=E(-48,-266,t==='mouse'?28:22,t==='mouse'?31:23,f)+E(48,-266,t==='mouse'?28:22,t==='mouse'?31:23,f)+(t==='mouse'?E(-48,-266,17,20,'#CFADA4')+E(48,-266,17,20,'#CFADA4'):'');
 if(t==='rabbit')a+=E(-28,-302,19,65,f,'transform="rotate(-11 -28 -302)"')+E(28,-302,19,65,f,'transform="rotate(11 28 -302)"')+E(-28,-306,8,40,'#D5C3BC')+E(28,-306,8,40,'#D5C3BC');
 if(t==='pig')a+=E(-49,-270,24,25,f)+E(49,-270,24,25,f);
 a+=E(0,-221,64,58,f);
 if(t==='hedgehog')a+=P('M-58 -236 Q0 -272 58 -236 L49 -196 Q0 -164 -49 -196Z','#EAE3CD');
 if(t==='fairy'){
 const hc=d==='silver'?'#E4E6DC':d==='pinkwing'?'#D3ABB7':'#AFCAA1';
 a+=P('M-62 -221 Q-73 -277 -45 -289 Q0 -316 45 -289 Q73 -277 62 -221 L47 -242 L25 -258 L-1 -245 L-27 -258 L-47 -242Z',hc);
 if(d==='silver')a+=[[-50,-262],[-27,-286],[0,-291],[28,-285],[50,-263]].map(([xx,yy])=>E(xx,yy,21,21,hc)).join('');
 a+=E(-15,-304,15,23,'#A2BB8C','transform="rotate(-42 -15 -304)"')+E(15,-304,15,23,'#A2BB8C','transform="rotate(42 15 -304)"');
 if(d!=='silver')a+=E(-29,-10,29,16,'#91AB82')+E(29,-10,29,16,'#91AB82');
 }

 if(['mouse','otter','raccoon'].includes(t))a+=E(0,-201,35,25,'#E4D6BA');
 if(t==='raccoon')a+=E(-26,-228,25,19,'#4D5852','transform="rotate(-18 -26 -228)"')+E(26,-228,25,19,'#4D5852','transform="rotate(18 26 -228)"');
 if(t==='human')a+=P('M-63 -217 L-65 -264 Q-44 -299 0 -295 Q43 -299 65 -263 L64 -217 L48 -219 L45 -261 L21 -251 L-6 -265 L-43 -252 L-48 -218Z',d==='lampgirl'?'#424B46':'#A78A6A');
 if(t==='wind')a+=[[-51,-248],[-43,-274],[-17,-289],[12,-288],[40,-275],[53,-249]].map(([xx,yy])=>E(xx,yy,22,22,'#B3CED0')).join('');
 if(t==='sand')a+=P('M-16 -275 Q-32 -311 -5 -311 Q17 -315 18 -295 Q9 -283 -2 -296','none','#D1B17A',12);
 a+=['sleep','closed'].includes(pose)?P('M-31 -228 Q-22 -222 -13 -228 M13 -228 Q22 -222 31 -228','none',ink,3):E(-23,-227,5,7,t==='raccoon'?'#E9E7D6':ink)+E(23,-227,5,7,t==='raccoon'?'#E9E7D6':ink);
 a+=E(0,-204,t==='mole'?19:8,t==='mole'?12:5,t==='mole'||t==='mouse'?'#C99E98':'#756653')+P('M-10 -188 Q0 -181 11 -188','none','#7B715F',2.5);
 if(t==='pig')a+=E(0,-202,24,17,'#C3988E')+E(-8,-203,3,4,'#976E65')+E(8,-203,3,4,'#976E65');
 if(d==='pigcurl'||d==='pigwind')a+=P(d==='pigwind'?'M-8 -274 Q34 -308 46 -287 Q52 -269 34 -269':'M-13 -273 Q-29 -312 -2 -312 Q25 -315 17 -293 Q8 -282 -1 -297','none','#C79E8C',12)+G(-45,-272,.39,[-72,0,72,144,216].map(r=>G(0,0,1,E(0,-16,10,16,'#F2EFDE'),r)).join('')+E(0,0,7,7,'#D8C17B'));
 if(d==='buttons')a+=E(-23,-227,9,10,'#404B45')+E(23,-227,9,10,'#404B45')+[-23,23].map(xx=>E(xx-2,-229,1.5,1.5,'#B5B9A8')+E(xx+2,-225,1.5,1.5,'#B5B9A8')).join('')+P('M-41 -247 L-37 -244 M37 -245 L42 -248 M-18 -100 L18 -100','none','#C7C9BB',2);
 if(d==='whiskers')a+=P('M-21 -202 L-60 -211 M-22 -195 L-63 -191 M21 -202 L60 -211 M22 -195 L63 -191','none','#F4F0DE',3);
 if(d==='glasses')a+=E(-24,-227,20,19,'none','stroke="#C6C8B6" stroke-width="3"')+E(24,-227,20,19,'none','stroke="#C6C8B6" stroke-width="3"')+line(-4,-227,4,-227,'#C6C8B6',3);
 if(d==='leaf')a+=E(0,-291,18,14,'#9CB68C','transform="rotate(-15 0 -291)"')+line(-13,-288,13,-296,'#718E6A',2)+(k==='sleep'?'':E(-29,-10,29,16,'#89A77E')+E(29,-10,29,16,'#89A77E'));
 if(d==='wind')a+=R(-47,-64,38,42,'#8BAFBF',5)+R(9,-64,38,42,'#8BAFBF',5)+R(-52,-90,104,14,'#ABC49B',4)+P('M40 -88 L77 -78 L63 -53 L43 -66Z','#ABC49B')+E(-29,-10,29,16,'#A8B6AD')+E(29,-10,29,16,'#A8B6AD');
 if(d==='lampgirl')a+=R(-45,-35,30,23,'#F2EFE0',5)+R(15,-35,30,23,'#F2EFE0',5)+E(-29,-10,29,14,'#9A7D5F')+E(29,-10,29,14,'#9A7D5F');
 if(!['back','sleep','closed'].includes(pose))a+=arm(-43,-153,...q[0],d==='lampgirl'?'#A99ABD':f)+arm(43,-153,...q[1],d==='lampgirl'?'#A99ABD':f)+(d==='lampgirl'?E(-43+q[0][0],-153+q[0][1],11,12,f)+E(43+q[1][0],-153+q[1][1],11,12,f):'');
 a+=extra;
 if(d==='bag')a+=line(-47,-176,50,-72,'#B9A785',7)+bag(58,-78,.62);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function seated(name,x,y,s=1,pose='hold',extra=''){
 const f=C[name][1],d=C[name][4],id=`seat-${x}-${y}`;return G(x,y,s,arm(-27,0,-7,53,f)+arm(27,0,7,53,f)+(d==='lampgirl'?R(-45,37,23,21,'#F2EFE0',5)+R(22,37,23,21,'#F2EFE0',5):'')+E(-34,59,24,13,d==='lampgirl'?'#9A7D5F':C[name][0]==='fairy'&&d!=='silver'?'#91AB82':d==='wind'?'#A8B6AD':f)+E(34,59,24,13,d==='lampgirl'?'#9A7D5F':C[name][0]==='fairy'&&d!=='silver'?'#91AB82':d==='wind'?'#A8B6AD':f))+`<defs><clipPath id="${id}"><rect x="${x-170*s}" y="${y-480*s}" width="${340*s}" height="${492*s}"/></clipPath></defs><g clip-path="url(#${id})">${actor(name.endsWith('坐')?name:name+'坐',x,y+80*s,s,pose,false,extra)}</g>`;
}
function floorKid(name,x,y,s=1,pose='hold'){const f=C[name][1],id=`floor-${x}-${y}`;return `<defs><clipPath id="${id}"><rect x="${x-180*s}" y="${y-460*s}" width="${360*s}" height="${464*s}"/></clipPath></defs><g clip-path="url(#${id})">${actor(name.endsWith('坐')?name:name+'坐',x,y+80*s,s,pose)}</g>`+G(x,y,s,E(-30,0,51,18,f,'transform="rotate(14 -30 0)"')+E(30,0,51,18,f,'transform="rotate(-14 30 0)"')+(C[name][0]==='fairy'&&C[name][4]!=='silver'?E(-62,4,19,12,'#91AB82')+E(62,4,19,12,'#91AB82'):''));}
function bag(x,y,s=1){return G(x,y,s,R(-37,-30,74,60,'#E3D7B9',11)+P('M-22 -31 Q-22 -65 0 -65 Q22 -65 22 -31','none','#B8A381',6));}
function room(wall='#DDD5BE',night=false){return R(0,0,1000,800,wall,0)+R(0,614,1000,186,'#C4B597',0)+line(0,614,1000,614,'#A99B80',6)+[160,380,620,840].map((x,j)=>line(x,614,x+(j-2)*30,800,'#B6A78B',2)).join('')+R(690,85,217,318,'#AAAD96',90)+R(704,99,188,289,night?'#5F7882':'#CCDDD1',80)+(night?E(820,170,31,31,'#EDE2BB'):cloud(794,188,.4,'#F1EDDC'))+line(797,100,797,387,'#D4C5A5',8)+R(671,391,254,19,'#B5A07C',5);}
function outdoors(night=false){return R(0,0,1000,800,night?'#526A76':'#CFDED3',0)+E(812,136,52,52,night?'#ECE3BD':'#EAD9A7')+cloud(260,159,.7,night?'#70888C':'#EFEBD9')+P('M0 444 Q220 331 485 455 Q738 337 1000 445 L1000 800 L0 800Z',night?'#809681':'#BDCCA9')+tree(45,612,1.07,night?'#647E6A':'#9FB896')+tree(949,583,.92,night?'#728C74':'#ACC09D')+P('M0 694 Q505 558 1000 672 L1000 800 L0 800Z',night?'#8B9F86':'#AFBF98');}
function desk(x=520,y=659,s=1){return G(x,y,s,R(-142,0,18,132,'#A58D69',5)+R(124,0,18,132,'#A58D69',5)+P('M-167 -43 L142 -43 L177 0 L-136 0Z','#D6BE94')+R(-136,0,313,17,'#B69D75',5));}
function stool(x,y,s=1){return G(x,y,s,R(-42,0,13,79,'#A38B69',4)+R(29,0,13,79,'#A38B69',4)+E(0,-6,59,19,'#CEB58B'));}
function bench(x,y,s=1){return G(x,y,s,R(-160,-112,320,77,'#BCA37E',7)+R(-148,-4,19,98,'#A38C6A',4)+R(129,-4,19,98,'#A38C6A',4)+R(-173,-20,346,24,'#D4BC92',6));}
function bowl(x,y,s=1,c='#A8B9AE'){return G(x,y,s,P('M-65 0 Q-51 74 0 72 Q51 74 65 0Z',c)+E(0,0,65,19,'#E4DEC3')+E(0,0,54,13,'#C5C3A6'));}
function cup(x,y,s=1){return G(x,y,s,R(-21,-39,42,40,'#E9E4D1',6)+E(0,-39,21,7,'#CBBEA0')+P('M21 -32 Q43 -35 43 -17 Q42 -4 21 -7','none','#E9E4D1',7));}
function plate(x,y,s=1){return G(x,y,s,E(0,0,65,21,'#E8E2CC')+E(0,0,48,13,'#D7D3BA'));}
function bow(x,y,s=1){return G(x,y,s,P('M0 0 Q-34 -27 -34 -6 Q-35 16 0 0 Q34 -27 34 -6 Q35 16 0 0Z','#8FAA82')+E(0,0,7,7,'#77976D')+P('M-6 3 L-20 28 L-3 21 L5 5 M6 3 L20 28 L3 21 L-5 5Z','#98B58C'));}
function sweeper(x,y,s=1,pose='happy',r=0){let a=P('M0 -172 L0 -69','none','#BB9F73',12)+R(-8,-180,16,23,'#CFB68A',8)+P('M-18 -80 L18 -80 L57 -7 Q28 5 0 -3 Q-28 5 -57 -7Z','#D6C185')+[-35,-20,-6,8,23,37].map(xx=>line(xx*.33,-68,xx,-8,'#BAA66F',3)).join('')+R(-22,-82,44,13,'#AB9B6F',4)+E(-15,-49,5,6,ink)+E(15,-49,5,6,ink)+P(pose==='sad'?'M-11 -23 Q0 -32 11 -23':'M-11 -28 Q0 -16 11 -28','none','#8B7954',2.5)+bow(0,-109,.67);if(pose==='hop')a+=P('M-60 2 L-69 -10 M57 0 L68 -13','none','#BCAD82',3);return G(x,y,s,a,r);}
function giantPot(x,y,s=1){return G(x,y,s,P('M-91 -112 L91 -112 L67 22 L-67 22Z','#BA997D')+E(0,-112,99,26,'#C9AC8D')+E(0,-116,83,18,'#8D8B69')+[-1,1].map(k=>P(`M${k*8} -114 Q${k*24} -199 ${k*78} -247`,'none','#839B77',7)+leaf(k*48,-197,.76,'#9CB38A',k*49)+leaf(k*15,-150,.59,'#B1C39D',k*-60)).join('')+line(0,-114,0,-285,'#849A74',7)+leaf(0,-249,.8,'#A4BB93',22));}
function porch(rain=true){return R(0,0,1000,800,'#D5D8C7',0)+R(0,408,1000,392,'#A4B7A4',0)+R(73,105,863,446,'#DDD3B8',0)+R(73,545,863,255,'#C0AD8C',0)+[180,340,500,660,820].map(x=>line(x,547,x+36,800,'#AA9879',2)).join('')+R(55,82,25,585,'#A28D6B',5)+R(923,82,25,585,'#A28D6B',5)+P('M0 101 L506 9 L1000 101 L1000 145 L0 145Z','#A69F83')+R(104,245,170,310,'#A6B49B',62)+P('M113 250 L188 268 L262 250 L262 554 L226 527 L188 549 L151 528 L113 554Z','#C2B7C5')+R(104,236,169,15,'#A28E6F',5)+(rain?[20,40,971,987].map((x,j)=>[205,301,425,554,683].map(y=>line(x,y+j*8,x-4,y+21+j*8,'#8AA9AA',3)).join('')).join(''):'');}
function pillar(){return R(345,140,28,533,'#B09C79',5)+R(335,652,48,20,'#C8B490',5);}
function hideScene(i,cover){
 if(cover)return porch()+pillar()+bench(567,600,1.0)+giantPot(795,678,.84)+floorKid('榛圆',460,681,1.2,'wave')+sweeper(631,707,1.05,'happy',-8);
 return [
 ()=>porch()+pillar()+bench(585,597,.9)+giantPot(808,685,.84)+floorKid('榛圆',479,697,1.1,'wide')+sweeper(666,709,1.02,'hop',-8),
 ()=>porch()+pillar()+P('M581 505 L589 485 L600 494 L611 476 L624 493 L637 484 L646 505Z','#AB9470')+bench(605,644,1.3)+sweeper(361,728,1.05,'happy',12)+giantPot(835,677,.78),
 ()=>porch()+pillar()+bench(610,575,.82)+actor('榛圆',441,729,1.09,'point')+sweeper(655,720,1.06,'sad')+giantPot(821,705,.86),
 ()=>porch()+pillar()+bench(603,578,.82)+actor('榛圆',438,729,1.1,'closed',false,P('M-43 -153 Q-59 -186 -52 -211 M43 -153 Q59 -188 59 -208','none','#B6A07A',22))+sweeper(757,690,1.04,'hop')+giantPot(831,707,.89),
 ()=>porch()+pillar()+bench(576,580,.85)+giantPot(844,706,.88)+floorKid('榛圆',471,714,1.12,'point')+sweeper(635,718,1.1,'hop',-5),
 ()=>porch()+bench(625,582,.88)+giantPot(829,705,.88)+actor('榛圆',403,727,1.08,'back',true,E(0,-220,61,55,'#B6A07A')+P('M-56 -235 Q0 -270 56 -235 L43 -195 Q0 -168 -43 -195Z','#B6A07A'))+pillar()+P('M357 561 Q335 538 354 513 M450 561 Q411 529 373 515','none','#B6A07A',22)+sweeper(699,712,1.03,'hop',-7),
 ()=>porch()+pillar()+bench(549,579,.84)+sweeper(834,696,1.05,'happy',8)+giantPot(735,717,.9)+actor('榛圆',509,729,1.08,'wave'),
 ()=>porch()+pillar()+bench(637,586,.88)+giantPot(833,702,.85)+actor('榛圆',257,731,1.03,'wide')+P('M113 250 L189 269 L226 250 Q203 430 186 527 L151 528 L113 554Z','#C2B7C5')+sweeper(398,737,1.09,'happy',-6)
 ][i]();
}
function pinecone(x,y,s=1,r=-10){return G(x,y,s,E(0,0,24,37,'#A58A61')+[-18,0,18].map((yy,j)=>[-10,8].map(xx=>P(`M${xx-9} ${yy-6} Q${xx} ${yy+11} ${xx+9} ${yy-6}`,'none','#CEB488',3)).join('')).join('')+line(0,-35,2,-44,'#8F7856',5),r);}
function pebble(x,y,s=1){return G(x,y,s,E(0,0,28,19,'#E9E6D6')+P('M-13 -8 Q-2 -15 12 -9','none','#F6F1DF',3));}
function acornCap(x,y,s=1,r=0){return G(x,y,s,P('M-24 -5 Q0 34 24 -5Z','#AF9165')+E(0,-6,24,8,'#CDB587')+E(0,-7,17,4,'#8D7959')+line(0,17,3,27,'#9B7F59',4),r);}
function gardenWindow(){return outdoors()+R(605,145,328,435,'#DCD0B1',12)+R(652,235,220,220,'#A8AE96',45)+R(666,249,191,191,'#BED2C3',35)+line(761,249,761,440,'#D1C2A0',8)+R(621,445,286,25,'#AF9870',6)+P('M85 672 L899 604 L964 791 L67 791Z','#C3B99E')+[175,351,529,706,881].map(x=>line(x,664,x+21,786,'#ACAA90',3)).join('')+[170,254,876].map((x,j)=>flower(x,584-j*16,.58,'#D1ADBA')).join('');}
function tokens(stage=3){return (stage>=1?pinecone(710,420,.64,-13):'')+(stage>=3?pebble(790,436,.55)+acornCap(837,432,.66):'');}
function memoryScene(i,cover){
 if(cover)return gardenWindow()+tokens()+actor('苓芽舞',384,737,1.05,'back')+actor('奶奶',607,738,1.27,'back')+P('M429 576 Q467 549 501 559 M339 576 Q307 550 291 582','none','#E3C8AB',22)+P('M553 544 Q529 541 501 559 M662 544 Q705 548 723 579','none','#E1C7AC',25);
 return [
 ()=>gardenWindow()+actor('苓芽',381,731,1.07,'back')+actor('奶奶',655,732,1.27,'hold')+P('M335 567 Q302 601 331 663 M427 567 Q460 601 431 663','none','#E3C8AB',22)+stool(821,665,.8),
 ()=>gardenWindow()+actor('苓芽',378,731,1.13,'hold')+pebble(342,611,.44)+acornCap(410,610,.51)+pinecone(390,553,.45)+actor('奶奶',680,734,1.27,'think'),
 ()=>gardenWindow()+actor('苓芽',425,733,1.1,'back')+actor('奶奶',686,733,1.27,'back')+P('M472 565 Q512 551 559 552 M378 565 Q357 605 387 628','none','#E3C8AB',22)+P('M631 539 Q599 535 559 552 M741 539 Q766 586 747 625','none','#E1C7AC',25)+P('M336 688 Q321 657 336 641','none','#B8AC91',3),
 ()=>gardenWindow()+actor('苓芽',405,734,1.11,'back')+P('M357 564 Q336 612 372 659 M453 564 Q476 612 438 659','none','#E3C8AB',23)+stool(690,667,1.05)+seated('奶奶',691,650,1.23,'back')+P('M638 560 Q610 583 577 604 M744 560 Q766 597 746 618','none','#E1C7AC',24),
 ()=>gardenWindow()+tokens(1)+actor('苓芽',578,731,1.05,'back')+P('M623 570 Q672 514 701 430 M533 570 Q517 610 537 631','none','#E3C8AB',21)+stool(355,668,1.02)+seated('奶奶',355,653,1.16,'hold'),
 ()=>gardenWindow()+tokens()+actor('苓芽轻',401,731,1.09,'closed',false,P('M-43 -153 Q-61 -116 -44 -88 M43 -153 Q60 -117 43 -89','none','#E3C8AB',21))+stool(658,667,1.04)+seated('奶奶',658,651,1.18,'hold')+P('M497 730 L519 730 M538 719 L559 719 M580 707 L601 707','none','#B0AA90',3),
 ()=>gardenWindow()+tokens()+actor('苓芽舞',381,737,1.06,'back')+actor('奶奶',612,737,1.27,'back')+P('M427 575 Q462 549 500 560 M335 575 Q299 548 290 581','none','#E3C8AB',22)+P('M557 543 Q533 541 500 560 M667 543 Q712 550 731 580','none','#E1C7AC',25)+P('M289 712 Q263 689 270 665 M698 705 Q731 686 725 662','none','#B3AC91',3),
 ()=>gardenWindow()+pinecone(710,420,.64,-13)+pebble(790,436,.55)+bench(508,670,1.35)+seated('苓芽轻',365,654,1.03,'back')+seated('奶奶',632,654,1.21,'back')+P('M410 576 Q456 563 513 530 M321 576 Q306 610 327 629','none','#E3C8AB',22)+P('M580 565 Q552 532 518 530 M684 565 Q711 602 689 626','none','#E1C7AC',24)+acornCap(516,525,.48,-14)
 ][i]();
}
function towel(x,y,s=1,r=0){return G(x,y,s,R(-43,-58,86,116,'#E3D9B8',8)+[-32,-12,8,28].map(xx=>line(xx,-48,xx,46,'#C8C2A1',3)).join('')+P('M-35 54 L-35 67 M-19 54 L-19 66 M-3 54 L-3 67 M13 54 L13 65 M29 54 L29 66','none','#C4BB9A',3),r);}
function basin(x,y,s=1,water=true){return G(x,y,s,P('M-240 0 Q-213 70 0 71 Q212 70 240 0Z','#9EBAAF')+E(0,0,240,54,'#BBCFC2')+E(0,0,220,44,water?'#A8C6C1':'#CBD5BF')+E(0,1,239,53,'none','stroke="#8FAF9F" stroke-width="7"'));}
function umbrella(x,y,s=1,open=false,wet=false,peel=false){let a=line(0,-295,0,7,'#A48A63',9)+P('M0 -295 Q-2 -338 31 -338 Q64 -338 64 -307 Q64 -287 47 -284','none','#B69A6D',14)+E(31,-317,3.2,4,ink)+E(48,-317,3.2,4,ink)+P('M32 -302 Q40 -296 48 -302','none','#7F6C51',2.5);if(open){a+=P('M-190 -170 Q-142 -195 -95 -171 Q-48 -195 0 -170 Q48 -195 95 -171 Q143 -195 190 -170 Q0 170 -190 -170Z','#BCAFCB')+P('M-190 -170 Q-105 -54 0 0 M-95 -171 Q-67 -61 0 0 M0 -170 L0 0 M95 -171 Q67 -61 0 0 M190 -170 Q105 -54 0 0','none','#9C91AC',3)+[[-142,-153],[-91,-107],[-49,-143],[0,-71],[50,-142],[91,-108],[141,-153],[-42,-58],[42,-58]].map(([xx,yy])=>E(xx,yy,7,7,'#EDE9DE')).join('');}else{a+=P('M-24 -248 L-43 -194 L-9 -10 L9 -10 L43 -194 L24 -248Z','#BCAFCB')+P('M-21 -233 L-6 -16 M0 -240 L0 -13 M21 -233 L6 -16','none','#9C91AC',3)+[[-17,-220],[14,-196],[-16,-164],[13,-131],[-8,-96],[7,-60]].map(([xx,yy])=>E(xx,yy,5,5,'#F0ECE1')).join('');if(peel)a+=P('M-17 -219 Q-78 -193 -63 -113 L-6 -15 L-19 -174Z','#D0C3DB')+P('M-19 -208 Q-48 -174 -16 -93','none','#A9BBC0',4);}
 if(wet)a+=(open?[[-73,-17],[-25,18],[43,-5],[88,-26]]:[[-10,14],[12,-45]]).map(([xx,yy])=>P(`M${xx} ${yy-8} Q${xx-9} ${yy+6} ${xx} ${yy+9} Q${xx+9} ${yy+6} ${xx} ${yy-8}Z`,'#99BFC4')).join('');return G(x,y,s,a);}
function chimes(){return G(836,182,.82,line(0,0,0,36,'#9A9476',3)+P('M-47 46 Q0 12 47 46Z','#AFB9A2')+[-29,-11,11,29].map((xx,j)=>line(xx,46,xx,118-j%2*17,'#A39F83',2)+R(xx-4,75-j%2*17,8,40,'#BEC6AE',3)).join(''));}
function rabbitPorch(){return porch(false)+chimes()+R(73,550,863,250,'#CAC1A7',0)+[120,300,480,660,840].map(x=>line(x,550,x+50,800,'#B7AE94',2)).join('')+line(74,671,936,671,'#B7AE94',2)+line(74,751,936,751,'#B7AE94',2);}
function pearSlice(x,y,s=1,r=0){return G(x,y,s,P('M-22 -25 Q2 -49 27 -23 Q42 11 2 35 Q-34 18 -22 -25Z','#E8D8A2')+P('M-15 -20 Q2 -37 20 -19 Q31 8 2 27 Q-23 15 -15 -20Z','#F2E7C1')+E(4,1,3,5,'#9C865A'),r);}
function pictureBook(x,y,s=1,r=0){return G(x,y,s,P('M0 -43 Q-47 -63 -84 -45 L-84 43 Q-40 27 0 44 Q40 27 84 43 L84 -45 Q47 -63 0 -43Z','#EFE8D3')+line(0,-40,0,42,'#C9C2A7',3)+E(42,0,28,24,'#D3AA72')+E(31,0,14,23,'none','stroke="#B88F5B" stroke-width="2"')+E(52,0,14,23,'none','stroke="#B88F5B" stroke-width="2"')+line(42,-24,47,-35,'#9F9C70',5)+P('M-65 -21 L-20 -21 M-65 -3 L-17 -3 M-65 15 L-25 15','none','#B9C1A3',3),r);}
function dryingScene(i,cover){
 if(cover)return rabbitPorch()+basin(678,718,.89)+umbrella(682,715,.91,true,false)+floorKid('绒芽',370,722,1.02,'wave')+pictureBook(370,661,.63)+stool(232,712,.68)+towel(232,667,.59,12);
 return [
 ()=>rabbitPorch()+actor('绒芽',425,732,1.06,'back')+umbrella(603,733,.92,false,true)+P('M470 570 Q514 543 605 457 M379 570 Q367 608 385 630','none','#EDEBDC',22),
 ()=>rabbitPorch()+actor('绒芽',405,733,1.06,'wide')+umbrella(621,726,.95,false,true)+stool(772,673,.79)+towel(772,629,.64),
 ()=>rabbitPorch()+floorKid('绒芽',421,712,1.02,'back')+umbrella(622,723,.96,false,true)+P('M465 637 Q511 607 590 588 M377 637 Q363 674 390 681','none','#EDEBDC',22)+towel(578,590,.63,20)+stool(792,669,.77),
 ()=>rabbitPorch()+basin(668,719,.95)+umbrella(672,714,.91,false,true)+stool(307,670,.92)+seated('绒芽',307,656,.97,'hold')+desk(422,722,.43)+plate(424,693,.53)+pearSlice(416,688,.36)+pearSlice(439,689,.34,23)+stool(814,638,.7)+towel(814,596,.59,5),
 ()=>rabbitPorch()+basin(680,724,.96)+umbrella(682,714,.99,false,true,true)+floorKid('绒芽',481,722,1.06,'back')+P('M527 645 Q570 621 620 602 M435 645 Q425 681 452 691','none','#EDEBDC',23)+stool(221,670,.78)+towel(221,624,.64),
 ()=>rabbitPorch()+basin(671,722,.99)+umbrella(675,716,1.0,true,true)+stool(283,668,.94)+seated('绒芽',283,653,.99,'hold')+P('M398 608 Q430 593 457 603 M405 630 Q437 617 469 625','none','#ADBEAE',3)+stool(153,672,.66)+towel(153,632,.55,10),
 ()=>rabbitPorch()+basin(681,724,.96)+umbrella(683,718,.98,true,false)+floorKid('绒芽',383,725,1.02,'back')+pictureBook(378,666,.66)+P('M427 650 Q464 617 513 567 M339 650 Q332 670 355 676','none','#EDEBDC',22)+stool(203,696,.67)+towel(203,655,.56,-5),
 ()=>rabbitPorch()+basin(767,731,.61)+floorKid('绒芽',448,725,1.1,'back')+umbrella(525,717,.77,false,false)+P('M401 644 Q455 670 525 646 M495 644 Q532 619 500 617','none','#EDEBDC',25)+pictureBook(652,749,.62,-8)+stool(243,711,.67)+towel(243,671,.56)
 ][i]();
}
function grassBend(x,y,s=1){return G(x,y,s,P('M-39 20 Q-39 -12 -10 -35 M-12 24 Q-13 -29 20 -49 M15 23 Q20 -15 47 -26 M38 23 Q45 5 65 -3','none','#8EA77B',6));}
function windRoom(){return R(0,0,1000,800,'#DED6C0',0)+R(0,626,1000,174,'#C1B296',0)+R(532,118,382,422,'#A8AD93',46)+R(549,135,348,388,'#C7D8C9',35)+P('M551 455 Q730 327 895 422 L895 523 L551 523Z','#A9BE94')+grassBend(637,473,.62)+grassBend(766,449,.72)+R(508,523,427,24,'#B5A17C',6)+P('M533 145 Q573 228 537 316 Q579 389 536 478 L606 448 Q644 376 602 312 Q641 228 604 145Z','#E6E4D1','',0,'opacity=".9"')+line(515,124,926,124,'#AC9A76',9)+[687,719,823].map((x,j)=>E(x,370+j*28,7,13,'#D5ADBA',`transform="rotate(${j*24-20} ${x} ${370+j*28})"`)).join('');}
function pencil(x,y,s=1,r=0,c='#88AFA9'){return G(x,y,s,line(0,0,0,67,c,6)+P('M-4 67 L4 67 L0 79Z','#9F8969'),r);}
function windDrawing(x,y,s=1,type='blank',r=0){let a=R(-90,-117,180,234,'#F0EBD6',4);if(type==='round')a+=E(0,-17,56,57,'none','stroke="#AAA47D" stroke-width="4"')+E(-17,-27,4,5,'#878C72')+E(17,-27,4,5,'#878C72')+E(0,-6,20,13,'#D7BAA4');if(type==='blue')a+=P('M-20 -72 Q17 -91 22 -60 L18 49 Q46 43 51 60 Q56 79 20 81 L-21 81Z','#96B7CB');if(type==='wind')a+=grassBend(-54,62,.52)+grassBend(35,74,.52)+G(9,18,.36,actor('绯绯风',0,0,1,'wide'))+[[-51,-56],[57,-64],[-38,-9]].map(([xx,yy],j)=>E(xx,yy,5,10,'#D3A4B0',`transform="rotate(${j*35-22} ${xx} ${yy})"`)).join('');return G(x,y,s,a,r);}
function windScene(i,cover){
 if(cover)return windRoom()+line(564,208,851,208,'#A89B7C',3)+windDrawing(720,307,.86,'wind')+R(672,201,10,24,'#BAA17B',3)+R(758,201,10,24,'#BAA17B',3)+actor('绯绯风',385,735,1.17,'wave')+desk(474,708,.67)+pencil(470,679,.62,68);
 return [
 ()=>windRoom()+stool(326,658,.97)+seated('绯绯',326,645,1.09,'hold')+desk(531,696,1.13)+windDrawing(533,604,.62)+pencil(433,638,.72,-31)+pebble(644,655,.5),
 ()=>windRoom()+actor('绯绯',369,734,1.11,'back')+P('M417 564 Q453 540 480 512 M321 564 Q296 606 320 630','none','#D9B3A4',23)+pencil(480,512,.78,-16)+stool(516,679,.93)+desk(680,706,.8)+windDrawing(680,640,.44),
 ()=>windRoom()+actor('绯绯',347,735,1.11,'think')+desk(584,699,1.1)+windDrawing(581,574,.88,'round')+pencil(725,667,.75,72),
 ()=>windRoom()+actor('绯绯',351,736,1.11,'back')+P('M399 566 Q429 603 441 649 M303 566 Q291 609 312 634','none','#D9B3A4',23)+pencil(444,649,.69,18)+desk(594,706,1.17)+windDrawing(594,580,.88,'blue')+windDrawing(756,655,.28,'round',9)+pebble(522,666,.5),
 ()=>windRoom()+actor('绯绯风',436,737,1.12,'point')+desk(652,710,.84)+windDrawing(655,631,.48,'blue')+windDrawing(757,664,.27,'round',10)+pencil(590,675,.65,72)+pebble(700,679,.47),
 ()=>windRoom()+stool(346,669,1.0)+seated('绯绯风',346,653,1.09,'back')+desk(571,710,1.15)+windDrawing(582,602,.71,'wind')+pebble(531,668,.52)+P('M393 573 Q450 590 484 605 M299 573 Q281 611 309 636','none','#D9B3A4',23)+pencil(484,605,.64,-31)+windDrawing(741,674,.26,'blue',12)+windDrawing(777,675,.23,'round',-6),
 ()=>windRoom()+actor('绯绯风',425,735,1.1,'back')+windDrawing(670,438,.87,'wind',-6)+P('M472 567 Q512 531 593 513 M378 567 Q444 592 592 539','none','#D9B3A4',23)+desk(664,721,.81)+pencil(665,690,.66,70)+pebble(733,691,.49),
 ()=>windRoom()+line(558,209,853,209,'#AB9D7C',3)+windDrawing(730,307,.84,'wind')+R(684,200,10,23,'#B69E78',3)+R(765,200,10,23,'#B69E78',3)+actor('绯绯风',457,735,1.09,'back')+P('M504 569 Q544 548 590 535 M410 569 Q471 591 563 543','none','#D9B3A4',23)+desk(345,738,.57)+pencil(343,710,.63,72)
 ][i]();
}
function basketEmpty(x,y,s=1){return G(x,y,s,P('M-63 -9 L63 -9 L49 48 Q0 64 -49 48Z','#BDA67D')+E(0,-9,63,21,'#D4C19A')+E(0,-11,49,13,'#AA936A')+P('M-47 -14 Q-47 -87 0 -88 Q47 -87 47 -14','none','#B49B70',9)+[-36,-18,0,18,36].map(xx=>line(xx,2,xx*.76,46,'#A68F66',3)).join('')+line(-54,21,54,21,'#D5C19A',3)+line(-49,39,49,39,'#D5C19A',3));}
function leafFriend(x,y,s=1,r=0){return G(x,y,s,P('M0 -65 Q53 -32 34 18 Q25 44 0 60 Q-40 39 -37 -8 Q-36 -41 0 -65Z','#D6BC70')+P('M0 76 L0 -47 M0 -18 L-23 -34 M0 9 L27 -15 M0 30 L-21 10','none','#A68E53',3)+E(-11,-15,3.5,4.5,'#7A6546')+E(11,-15,3.5,4.5,'#7A6546')+P('M-7 3 Q0 9 7 3','none','#8C744C',2),r);}
function hoop(x,y,s=1,r=0){return G(x,y,s,E(0,0,67,80,'none','stroke="#AC926A" stroke-width="12"')+E(0,0,55,68,'none','stroke="#CAB088" stroke-width="3"'),r);}
function swing(){return P('M716 449 L758 189 L901 189 L946 449','none','#A18D6C',12)+line(782,195,781,415,'#B9AC86',5)+line(877,195,876,415,'#B9AC86',5)+R(766,409,125,22,'#C3AA82',7);}
function playground(showHoop=true){return outdoors()+R(76,187,222,341,'#D8CCAC',12)+P('M48 208 L185 88 L320 208Z','#A9BA92')+R(109,309,140,218,'#9EAD90',68)+P('M0 652 Q340 594 511 646 L540 800 L0 800Z','#C8BC9C')+swing()+P('M119 602 L645 559 L763 729 L161 778Z','#B29B75')+P('M144 611 L628 578 L731 717 L180 757Z','#D9C494')+(showHoop?hoop(847,655,.67,13):'')+[54,90,934,963].map((x,j)=>P(`M${x} 550 L${x+8} 264`,'none','#A4B98C',8)+leaf(x,362,.5,'#A7BC94',j%2?55:-55)).join('');}
function mound(x,y,s=1){return G(x,y,s,P('M-75 22 Q-43 -55 0 -58 Q43 -55 75 22 Q0 51 -75 22Z','#CAB078')+P('M-50 22 Q0 6 50 22','none','#B69B67',2));}
function sandCake(x,y,s=1,holes=false){return G(x,y,s,P('M-40 -25 L40 -25 L43 20 Q0 36 -43 20Z','#C5AB75')+E(0,-25,40,13,'#D8BE87')+(holes?[-18,0,18].map(xx=>E(xx,-25,5,4,'#AC915F')).join(''):E(0,-25,7,5,'#C1A471')));}
function treats(){return P('M428 670 L696 652 L747 729 L446 752Z','#BB9F73')+sandCake(528,697,.82,true)+sandCake(620,677,.61)+sandCake(671,715,.61);}
function choiceScene(i,cover){
 if(cover)return playground()+floorKid('芽裙',355,693,1.09,'wave')+treats()+basketEmpty(807,729,.73)+leafFriend(802,699,.52,-18);
 return [
 ()=>playground()+actor('芽裙',383,730,1.1,'think')+basketEmpty(260,729,.68),
 ()=>playground()+actor('芽裙',399,734,1.09,'back')+P('M446 567 Q478 571 521 554 M352 567 Q335 609 351 632','none','#E3C8AB',23)+leafFriend(568,546,.63,80)+basketEmpty(255,730,.69),
 ()=>playground()+floorKid('芽裙',372,698,1.07,'back')+mound(542,698,.64)+P('M418 620 Q453 654 504 675 M326 620 Q294 617 286 587','none','#E3C8AB',22)+leafFriend(328,579,.57,80)+basketEmpty(742,735,.65),
 ()=>playground(false)+actor('芽裙',570,720,1.09,'back')+hoop(693,680,.74)+P('M617 553 Q641 571 668 619 M523 553 Q481 542 464 526','none','#E3C8AB',22)+leafFriend(491,491,.59,47)+mound(325,687,.58)+basketEmpty(235,727,.65),
 ()=>playground()+actor('芽裙',585,723,1.09,'hold')+leafFriend(587,587,.57,-23)+mound(330,686,.58)+basketEmpty(234,727,.65),
 ()=>playground()+floorKid('芽裙',386,702,1.06,'back')+mound(601,697,.64)+basketEmpty(502,727,.73)+leafFriend(498,693,.53,-19)+P('M432 624 Q459 650 474 680 M341 624 Q328 658 351 678','none','#E3C8AB',22),
 ()=>playground()+floorKid('芽裙',358,701,1.07,'back')+treats()+basketEmpty(812,733,.73)+leafFriend(808,700,.53,-19)+P('M404 623 Q449 655 518 669 M312 623 Q297 663 326 679','none','#E3C8AB',22),
 ()=>playground()+floorKid('芽裙',352,704,1.08,'hold')+treats()+basketEmpty(804,732,.73)+leafFriend(800,698,.53,-19)
 ][i]();
}
function elephant(x,y,s=1,mood='neutral',pose='stand'){
 const f='#B78368',shirt='#A6BD99';let a=E(0,0,88,15,'#807D65','opacity=".15"')+P('M46 -67 Q94 -40 103 -92','none',f,10)+E(-35,-12,32,19,f)+E(35,-12,32,19,f)+E(0,-106,68,94,f)+P('M-49 -174 L49 -174 L60 -67 Q0 -47 -60 -67Z',shirt)+E(-67,-223,38,47,f)+E(67,-223,38,47,f)+E(-66,-224,23,31,'#C69A7B')+E(66,-224,23,31,'#C69A7B')+E(0,-221,67,63,f)+E(-24,-236,5,7,ink)+E(24,-236,5,7,ink);
 if(mood==='angry')a+=P('M-39 -253 L-15 -248 M15 -248 L39 -253','none','#85634E',4)+P('M-21 -185 Q-8 -195 4 -186','none','#845D4C',3);else if(mood==='forced')a+=P('M-34 -192 Q0 -156 34 -192','none','#7D5C48',4);else if(mood==='calm')a+=P('M-21 -188 Q-8 -181 5 -188','none','#815D4B',3);else a+=line(-22,-188,2,-188,'#875F4A',3);
 const trunk=pose==='lap'?'M7 -205 Q29 -151 51 -111 Q65 -88 30 -79':pose==='up'?'M7 -205 Q35 -160 64 -184 Q84 -207 71 -229':'M7 -205 Q24 -163 55 -172 Q73 -181 63 -195';a+=P(trunk,'none','#A5745C',31)+P(trunk,'none',f,28);
 const q=pose==='up'?[[-35,-74],[38,-80]]:pose==='hold'?[[43,39],[-43,39]]:pose==='loose'?[[-19,66],[20,66]]:[[-9,64],[9,64]];
 if(pose!=='back')a+=arm(-46,-145,...q[0],f,24)+arm(46,-145,...q[1],f,24);
 return G(x,y,s,a);
}
function elephantSit(x,y,s=1,mood='neutral',pose='lap'){const id=`ele-seat-${x}-${y}`;return `<defs><clipPath id="${id}"><rect x="${x-150*s}" y="${y-350*s}" width="${300*s}" height="${354*s}"/></clipPath></defs><g clip-path="url(#${id})">${elephant(x,y+69*s,s,mood,pose)}</g>`+G(x,y,s,E(-35,0,52,21,'#B78368')+E(35,0,52,21,'#B78368'));}
function mint(x,y,s=1,bent=false){return G(x,y,s,P('M-48 0 L48 0 L34 70 L-34 70Z','#BA9B79')+E(0,0,48,13,'#C8AD8C')+line(0,-2,bent?22:0,-95,'#89A078',5)+leaf(bent?24:2,-77,.6,'#9FB78F',bent?69:35)+leaf(bent?12:0,-44,.58,'#A9BE97',-63)+leaf(bent?24:0,-108,.48,'#AFC39A',bent?59:-21));}
function clayRoom(){return room('#D9CEB4')+R(106,519,382,214,'#B3C2A7',13)+R(126,539,342,173,'none',7,'stroke="#D2D8BB" stroke-width="4"')+P('M691 420 L846 420 L768 676 L613 676Z','#E4D8AF','',0,'opacity=".27"');}
function block(x,y,s=1,c='#D1B27F',r=0){return G(x,y,s,R(-24,-24,48,48,c,4)+P('M-24 -24 L-12 -35 L36 -35 L24 -24Z','#DFC699')+P('M24 -24 L36 -35 L36 13 L24 24Z','#B99B6B'),r);}
function blocksBox(x,y,s=1,closed=false){return G(x,y,s,R(-83,-43,166,80,'#B2946E',8)+R(-72,-30,144,52,'#C4A77C',5)+(closed?R(-88,-57,176,18,'#C7AC83',6):E(0,-43,77,13,'#8E7B58')));}
function scattered(){return block(279,687,.34,'#D1B27F',11)+block(363,683,.34,'#C4AB87',-17)+block(316,626,.34,'#BAC29A',23)+block(405,639,.34,'#CEA18E',-12)+block(225,641,.34,'#B6C2BA',19);}
function pearPlate(x,y,count=4,s=1){return plate(x,y,s)+Array.from({length:count},(_,j)=>pearSlice(x+(j-(count-1)/2)*24*s,y-8*s,.43*s,j*12-15)).join('');}
function emotionScene(i,cover){
 if(cover)return clayRoom()+mint(803,672,.75,true)+floorKid('苔婆婆',411,708,1.16,'hold')+elephantSit(613,714,.38,'calm','up')+desk(601,754,.66)+pearPlate(600,726,3,.75)+blocksBox(257,737,.67,true);
 const frames=[
 ()=>clayRoom()+elephant(340,694,.42,'neutral','up')+block(405,677,.34)+block(405,658,.34,'#C4AB87')+block(405,639,.34,'#BAC29A')+block(405,620,.34,'#CEA18E')+block(374,596,.34,'#B6C2BA')+desk(698,691,.74)+pearPlate(699,658,4,.75)+mint(844,676,.72),
 ()=>clayRoom()+scattered()+elephant(340,706,.42,'angry','loose')+desk(698,692,.74)+pearPlate(699,658,4,.75)+mint(844,676,.72)+P('M271 710 L259 718 M399 710 L413 718','none','#AA9877',3),
 ()=>clayRoom()+scattered()+actor('苔婆婆',650,732,1.2,'back')+elephantSit(343,715,.4,'forced','hold')+desk(512,741,.75)+pearPlate(512,709,4,.75)+P('M598 548 Q563 620 521 692 M702 548 Q729 601 714 630','none','#BEC4B8',24)+mint(849,675,.71),
 ()=>clayRoom()+scattered()+elephant(618,717,.42,'angry','loose')+mint(772,684,.72,true)+P('M650 634 Q690 630 718 640 M650 646 Q691 642 719 650','none','#C2C7AE',3)+desk(424,771,.59)+pearPlate(423,746,4,.64),
 ()=>clayRoom()+scattered()+elephant(614,718,.42,'neutral','loose')+mint(773,683,.74,true)+P('M646 634 Q689 630 718 640','none','#C2C7AE',3)+desk(421,770,.59)+pearPlate(420,745,4,.64),
 ()=>clayRoom()+scattered()+elephantSit(634,716,.42,'neutral','lap')+mint(785,682,.74,true)+desk(429,770,.59)+pearPlate(428,745,4,.64),
 ()=>clayRoom()+blocksBox(435,703,.60,false)+block(415,673,.28,'#BAC29A')+block(450,671,.28,'#CEA18E')+elephant(554,716,.42,'calm','back')+P('M535 655 Q512 650 489 661 M573 655 Q588 676 577 686','none','#B78368',17)+block(489,661,.28)+desk(756,727,.66)+pearPlate(756,698,4,.7)+mint(845,603,.57,true),
 ()=>clayRoom()+blocksBox(245,735,.64,true)+mint(815,671,.73,true)+floorKid('苔婆婆',422,710,1.16,'hold')+elephantSit(633,717,.38,'calm','up')+desk(611,756,.69)+pearPlate(612,727,3,.77)+pearSlice(659,656,.18,-14)
 ];const art=frames[i]();return [0,1,3,4,5,6].includes(i)?G(-150,-110,1.2,art):art;
}
function crab(x,y,s=1,pose='plain'){let a=[-1,1].map(k=>[-2,0,2].map(j=>P(`M${k*27} ${-8+j*6} Q${k*50} ${-16+j*8} ${k*65} ${3+j*8}`,'none','#C88167',6)).join('')+P(`M${k*24} -23 Q${k*53} -39 ${k*67} -53`,'none','#C88167',8)+P(`M${k*61} -45 Q${k*84} -57 ${k*74} -75 L${k*68} -57 L${k*58} -70 Q${k*47} -58 ${k*61} -45Z`,'#D6997B')).join('')+E(0,-13,43,29,'#CE8B71')+P('M-25 -25 L-29 -45 M25 -25 L29 -45','none','#C88167',6)+E(-29,-46,9,10,'#CE8B71')+E(29,-46,9,10,'#CE8B71')+E(-29,-46,4,5,ink)+E(29,-46,4,5,ink)+P('M-10 -22 Q0 -14 11 -22','none','#8C634E',3)+P('M-31 -18 L-11 -18 L0 -7 L11 -18 L31 -18 L31 6 Q0 22 -31 6Z','#8CB3BE')+P('M-27 -34 Q-30 -72 0 -73 Q30 -72 27 -34Z','#EEEBDD')+R(-33,-39,66,11,'#D8DFD3',5);return G(x,y,s,a);}
function bucket(x,y,s=1,up=false){return G(x,y,s,P('M-34 -47 L34 -47 L25 13 L-25 13Z','#A0BCC0')+E(0,-47,34,10,'#C3D4CB')+E(0,-47,26,5,'#8BA3A4')+P('M-28 -43 Q-40 -89 0 -94 Q40 -89 28 -43','none','#8BA4A2',5),up?180:0);}
function shovel(x,y,s=1,r=0){return G(x,y,s,R(-9,-95,18,18,'none',5,'stroke="#A38D66" stroke-width="5"')+line(0,-77,0,-13,'#B89D73',6)+P('M-18 -15 L18 -15 L14 18 L0 30 L-14 18Z','#A4B8AC'),r);}
function shore(){return R(0,0,1000,800,'#D0DED6',0)+E(799,118,53,53,'#ECDBAE')+cloud(223,153,.6,'#EDEAD9')+P('M0 344 Q487 290 1000 346 L1000 800 L0 800Z','#A9C5C3')+P('M0 410 Q489 354 1000 400 L1000 800 L0 800Z','#DDC99F')+P('M0 392 Q489 335 1000 382','none','#D9E5DB',12);}
function castle(){return shore()+P('M196 389 L806 389 L883 718 L117 718Z','#D6BE87')+R(226,248,547,243,'#D4BC82',8)+[226,316,406,496,586,676,736].map(x=>R(x,215,37,55,'#DBC58E',4)).join('')+E(390,337,32,34,'#93876A')+E(612,337,32,34,'#93876A')+E(383,330,8,8,'#CBB57F')+E(605,330,8,8,'#CBB57F')+P('M226 391 L126 626 L126 740 L226 494Z','#C4AB74')+P('M773 391 L874 626 L874 740 L773 494Z','#C4AB74')+[185,154,800,829].map((x,j)=>R(x,473+j%2*80,38,57,'#D9C18A',4)).join('');}
function frontWall(){return P('M126 692 L454 692 L454 758 L126 758Z','#D4BB82')+P('M550 692 L874 692 L874 758 L550 758Z','#D4BB82')+P('M454 758 L454 699 Q454 639 503 639 Q550 639 550 699 L550 758Z','#A19473')+P('M441 756 L441 699 Q441 626 503 626 Q563 626 563 699 L563 756','none','#DEC793',12)+[126,194,262,330,590,658,726,794,840].map(x=>R(x,676,33,28,'#DFC994',3)).join('');}
function sandMountain(x=627,y=596,s=1,low=false){return G(x,y,s,P(low?'M-85 20 Q-53 -40 0 -45 Q53 -40 85 20 Q0 56 -85 20Z':'M-85 20 Q-50 -97 0 -122 Q50 -97 85 20 Q0 56 -85 20Z','#CBB17B')+P(low?'M-57 14 Q0 -5 58 14':'M-60 15 Q20 -14 47 -17 Q-44 -20 -31 -41 Q24 -50 24 -62 Q-14 -64 -7 -84','none','#AD945F',3));}
function hole(x=368,y=598,s=1,shallow=false){return G(x,y,s,E(0,0,80,39,'#BEA16D')+E(0,5,65,shallow?12:28,shallow?'#C9B07C':'#AA8E61')+P('M-66 -16 Q0 -42 66 -16','none','#DCC48D',5));}
function castleScene(i,cover){
 if(cover)return castle()+sandMountain(618,565,.78)+hole(376,591,.81)+crab(502,590,.9)+shovel(417,580,.65,38)+bucket(563,607,.6)+frontWall();
 const frames=[
 ()=>castle()+frontWall()+crab(674,770,.91)+shovel(735,768,.62,0)+bucket(613,785,.57),
 ()=>castle()+sandMountain(629,581,.83)+hole(371,608,.86)+crab(490,595,.91)+shovel(410,585,.64,38)+bucket(549,610,.59)+frontWall(),
 ()=>castle()+sandMountain(629,581,.83)+hole(371,608,.86)+crab(501,605,.88)+shovel(423,596,.62,38)+bucket(563,615,.6)+frontWall(),
 ()=>castle()+sandMountain(638,577,.83)+hole(374,617,1.06,true)+crab(507,598,.9)+shovel(428,588,.65,38)+bucket(569,614,.59)+frontWall(),
 ()=>castle()+sandMountain(629,580,.83)+hole(371,611,1.06)+bucket(371,620,.61)+crab(513,600,.91)+shovel(584,608,.62,72)+frontWall(),
 ()=>castle()+sandMountain(629,589,.83,true)+hole(371,614,.9,true)+crab(508,598,.91)+shovel(428,588,.65,38)+G(422,599,.49,E(0,0,18,7,'#D7BF87'))+bucket(566,613,.59)+frontWall(),
 ()=>castle()+crab(502,600,.92)+bucket(558,615,.6,false)+shovel(422,590,.65,38)+[352,383,412].map((x,j)=>E(x,635+j*4,8,4,'#BEA570')).join('')+frontWall(),
 ()=>castle()+frontWall()+crab(681,770,.92)+bucket(625,785,.58)+shovel(743,768,.62,0)
 ];const art=frames[i]();return [3,4,5,6].includes(i)?G(-234,-210,1.45,art):art;
}
function slug(x,y,s=1){return G(x,y,s,`<g transform="scale(-1 1)">`+P('M-94 18 Q-56 -3 -25 -9 Q7 -51 44 -29 Q76 -4 73 20 Q7 37 -94 18Z','#A7A28C')+P('M-71 16 Q-15 -4 20 -13 Q47 -17 62 9','none','#7E8674',3)+P('M43 -22 L59 -58 M61 -14 L86 -46','none','#949A84',5)+E(59,-59,5,6,'#7F8A74')+E(86,-47,5,6,'#7F8A74')+E(60,-60,2,2,ink)+E(87,-48,2,2,ink)+P('M65 2 L89 -4 M65 11 L88 16','none','#949A84',4)+`</g>`);}
function fallenPear(x,y,s=1,bite=1){let a=P('M-8 -64 Q-29 -66 -30 -37 Q-64 6 -43 39 Q-7 67 35 45 Q67 19 41 -20 Q25 -38 19 -56 Q11 -68 -8 -64Z','#D9C178')+P('M1 -61 Q-2 -85 10 -91','none','#9E8558',6)+leaf(11,-78,.27,'#99AF7C',48)+P('M-30 -22 Q-51 9 -34 30','none','#E9D597',4);if(bite)a+=P(bite===1?'M40 -19 Q19 -16 23 -2 Q40 1 41 13 L55 16 L54 -18Z':bite===2?'M33 -33 Q9 -29 16 -12 Q-2 -7 18 12 Q37 11 39 28 L61 22 L57 -21Z':'M31 -35 Q2 -35 9 -18 Q-13 -11 4 6 Q-10 18 13 29 Q33 25 36 42 L65 24 L61 -28Z','#F0E1AF')+P(bite===1?'M40 -19 Q19 -16 23 -2 Q40 1 41 13':bite===2?'M33 -33 Q9 -29 16 -12 Q-2 -7 18 12 Q37 11 39 28':'M31 -35 Q2 -35 9 -18 Q-13 -11 4 6 Q-10 18 13 29 Q33 25 36 42','none','#C8B276',2);return G(x,y,s,a);}
function carrot(x,y,s=1,r=0){return G(x,y,s,P('M-22 -34 Q0 -47 22 -34 L4 59 Q-2 66 -7 53Z','#D3A375')+P('M0 -37 L-12 -65 M2 -37 L6 -72 M5 -36 L27 -58','none','#8FA77C',5)+P('M-13 -14 L7 -9 M-9 9 L7 13','none','#BC8E63',2),r);}
function roll(x,y,s=1,bitten=false){return G(x,y,s,E(0,0,43,29,'#C4A16C')+P('M-20 -17 Q-10 -25 -7 -13 M2 -20 Q15 -25 16 -10','none','#E6CEA1',6)+(bitten?P('M35 -18 Q14 -16 20 -2 Q34 -4 31 11 L47 13 L46 -17Z','#EBD9AD'):''));}
function petalShawl(x,y,s=1,worn=false){return G(x,y,s,worn?P('M-60 -42 Q-31 -16 0 -29 Q31 -16 60 -42 L79 37 L35 23 L0 39 L-35 23 L-79 37Z','#D3B3C0'):P('M-57 23 Q-72 -36 -19 -40 Q5 -66 37 -30 Q76 -13 59 30 Q9 54 -57 23Z','#D3B3C0'));}
function mossGarden(night=false){return outdoors(night)+P('M0 678 Q381 518 1000 662 L1000 800 L0 800Z',night?'#8BA182':'#A8BD91')+P('M169 626 L196 158 Q166 97 221 82 L240 625Z','#A99572')+E(208,202,175,150,night?'#6D886E':'#A0B88E')+leaf(733,670,1.12,night?'#849C79':'#A0B88A',-68)+[291,359,438,867].map((x,j)=>flower(x,677+j%2*36,.35,night?'#BBAEC1':'#D2B9C6')).join('')+(night?[[490,113],[601,204],[361,262],[876,252]].map(([x,y])=>P(`M${x-5} ${y} L${x+5} ${y} M${x} ${y-5} L${x} ${y+5}`,'none','#E6DCB9',2)).join(''):'');}
function nightGuestScene(i,cover){
 if(cover)return mossGarden(true)+floorKid('莓灯',394,708,1.12,'hold')+petalShawl(395,663,.9,true)+fallenPear(656,700,1.02,3)+slug(755,723,.75)+roll(394,671,.43,true);
 return [
 ()=>mossGarden()+floorKid('莓灯',405,705,1.09,'back')+fallenPear(616,703,1.0,1)+P('M452 625 Q493 662 560 680 M358 625 Q339 666 365 684','none','#E2C7AD',22),
 ()=>mossGarden()+floorKid('莓灯',365,707,1.09,'hold')+fallenPear(625,703,1.0,2)+carrot(501,727,.6,78)+roll(372,664,.46)+leaf(508,754,.42,'#BAC48F',76)+leaf(444,735,.4,'#C0BC87',-62),
 ()=>mossGarden()+floorKid('莓灯',374,706,1.08,'think')+fallenPear(628,703,1.0,2)+carrot(506,729,.6,78)+roll(431,744,.46),
 ()=>mossGarden(true)+floorKid('莓灯',387,707,1.09,'hold')+petalShawl(387,654,.63)+fallenPear(628,705,1.0,2),
 ()=>mossGarden(true)+floorKid('莓灯',381,708,1.09,'hold')+petalShawl(382,655,.63)+fallenPear(615,707,.99,2)+P('M792 738 Q840 754 887 723','none','#CAD6BE',3)+slug(783,720,.74),
 ()=>mossGarden(true)+floorKid('莓灯',382,709,1.09,'point')+petalShawl(384,658,.62)+fallenPear(617,706,.99,2)+slug(754,722,.74)+P('M813 738 Q853 746 884 725','none','#C7D4BA',3),
 ()=>mossGarden(true)+floorKid('莓灯',386,709,1.1,'hold')+petalShawl(386,659,.61)+roll(386,673,.45,true)+fallenPear(617,706,.99,3)+slug(714,723,.74),
 ()=>mossGarden(true)+floorKid('莓灯',386,710,1.1,'think')+petalShawl(386,666,.89,true)+fallenPear(617,706,.99,3)+slug(714,723,.74)
 ][i]();
}
const scenes={249:hideScene,250:memoryScene,251:dryingScene,252:windScene,253:choiceScene,254:emotionScene,255:castleScene,256:nightGuestScene};
export function seventhYoungLastArtwork(story,index,cover=false){
 const n=Number(story?.id?.replace('expansion-',''));if(!scenes[n]||story.id!==`expansion-${String(n).padStart(4,'0')}`)throw Error('Unsupported story');
 if(story.pages?.length!==8||!Number.isInteger(index)||index<0||index>7)throw Error('Eight pages and page index 0…7 required');
 return svg(scenes[n](index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

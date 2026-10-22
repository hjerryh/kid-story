// Eight explicit, independent eight-page storyboards for expansion-0081 through 0088.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
芽铃:['elf','#DCC29F','#E5CF86','dress',null,'bare'],
茸米睡:['mole','#968F7C','#E2CC83','vest'],
茸米:['mole','#968F7C','#E2CC83','vest',null,'greenbag'],
泡栗:['otter','#B79A77','#B6A0C0','overall',null,'orangebag'],
杏球裸:['hedgehog','#B99E79','#91AC84','vest'],
杏球袖:['hedgehog','#B99E79','#91AC84','vest',null,'feathersleeve'],杏球袋:['hedgehog','#B99E79','#91AC84','vest',null,'featherpocket'],
麦团:['mouse','#C2A580','#DFBC7B','overall',null,'greenapron'],奶奶:['mouse','#B8C0B9','#9EBCC8','dress',null,'glasses'],
绵丁:['cloud','#EBECDD','#E0C67C','vest',null,'greenbag'],杏杏:['fox','#C99970','#E4D6B4','dress'],蓝蓝:['otter','#AF9473','#A0BBC8','overall'],
小穗:['elf','#DFC4A0','#EEE4CF','shirt',null,'greenshoes'],小穗裙:['elf','#DFC4A0','#EEE4CF','shirt',null,'paperdress'],小穗舞:['elf','#DFC4A0','#EEE4CF','shirt',null,'paperdance'],
圆点:['seal','#ACB9B7','#E0C77E','overall',null,'spots'],贝贝:['seal','#E5E5D6','#B8CDD1','shirt',null,'bluehatstripe']};
function arm(x,y,dx,dy,c,w=22){return P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.55-9} ${x+dx} ${y+dy}`,'none',c,w);}
function kid(name,x,y,s=1,pose='stand',flip=false,extras=''){
 const cfg=C[name];if(!cfg)throw Error(`Unknown character ${name}`);const [t,f,cloth,kind,scarf,detail]=cfg;
 let a=E(0,0,81,12,'#53675A','opacity=".12"');
 if(t==='hedgehog')a+=P('M-73 -161 L-97 -195 L-78 -209 L-105 -233 L-79 -244 L-90 -278 L-61 -274 L-64 -308 L-35 -296 L-15 -323 L4 -302 L32 -319 L41 -289 L72 -300 L68 -270 L96 -273 L82 -241 L108 -222 L83 -207 L100 -177 L72 -162Z','#9A8668');
 if(['squirrel','chipmunk'].includes(t))a+=P('M44 -48 Q145 -77 121 -204 Q102 -250 64 -227 Q21 -202 68 -160','none',f,53);
 if(t==='chipmunk')a+=[0,1,2,3,4].map(j=>P(`M${70+j*8} -203 Q${89+j*6} -151 ${70+j*8} -87`,'none','#665C48',3)).join('');
 if(['fox','fennec'].includes(t))a+=P('M39 -57 Q139 -36 137 -133 Q93 -144 52 -101Z',f)+P('M137 -133 Q146 -90 123 -67 L102 -103Z','#958062');
 if(['mouse','jerboa','monster'].includes(t))a+=P(t==='monster'?'M44 -50 Q103 -35 101 -82 Q91 -106 78 -87':'M42 -40 Q124 -10 132 -76','none',f,t==='monster'?14:8)+(t==='jerboa'?E(133,-79,12,10,cream):'');
 if(t==='otter')a+=P('M45 -49 Q128 -64 107 -123 Q139 -45 74 -8Z',f);
 if(t==='sheep')a+=[[-48,-155],[0,-167],[48,-153],[-52,-85],[0,-75],[51,-86]].map(([xx,yy])=>E(xx,yy,39,42,f)).join('');
 a+=E(-30,-10,30,17,detail==='boots'||detail==='shoes'?'#967557':t==='duck'?'#D6A35B':f)+E(30,-10,30,17,detail==='boots'||detail==='shoes'?'#967557':t==='duck'?'#D6A35B':f)+E(0,-106,62,92,f);
 if(detail==='greenshoes'||detail==='paperdress'||detail==='paperdance')a+=P('M-57 -96 L57 -96 L70 -25 L-70 -25Z','#AA8E6F');
 if(['shirt','vest','apron','overall','coat'].includes(kind))a+=P(`M-48 -181 L48 -181 L61 ${kind==='coat'?-26:-58} Q0 -37 -61 ${kind==='coat'?-26:-58}Z`,cloth);
 if(t==='jerboa')a+=E(0,-105,43,68,'#EAE2CB');
 if(kind==='dress')a+=P('M-48 -180 L48 -180 L78 -27 Q0 -5 -78 -27Z',cloth);
 if(kind==='overall'||kind==='dress')a+=R(-46,-188,16,58,cloth,4)+R(30,-188,16,58,cloth,4)+E(-37,-156,4,4,'#EAD6A5')+E(38,-156,4,4,'#EAD6A5');
 if(kind==='apron'||detail==='shoes')a+=R(-23,-109,46,36,'#D6C990',7);
 if(kind==='shawl')a+=P('M-58 -181 L0 -157 L58 -181 L72 -106 L0 -126 L-72 -106Z',cloth);
 if(detail==='button')a+=E(0,-149,7,7,'#E1C775');
 if(detail==='moon')a+=E(0,-116,18,18,cream)+E(8,-122,16,17,cloth);
 if(['bear','mouse','jerboa','monster'].includes(t))a+=E(-49,-266,t==='mouse'?29:23,t==='mouse'?32:t==='jerboa'?43:24,f)+E(49,-266,t==='mouse'?29:23,t==='mouse'?32:t==='jerboa'?43:24,f)+(t==='mouse'?E(-49,-266,18,21,'#D6B5AE')+E(49,-266,18,21,'#D6B5AE'):'');
 if(['fox','fennec','squirrel','chipmunk','badger'].includes(t))a+=P(`M-49 -244 L${t==='fennec'?-99:-69} ${t==='fennec'?-366:-309} Q-21 -300 -15 -263Z`,f)+P(`M49 -244 L${t==='fennec'?99:69} ${t==='fennec'?-366:-309} Q21 -300 15 -263Z`,f)+(t==='fennec'?P('M-46 -268 L-82 -344 L-27 -278Z','#D9B8AD')+P('M46 -268 L82 -344 L27 -278Z','#D9B8AD'):'');
 if(t==='rabbit')a+=E(-28,-295,19,65,f,'transform="rotate(-12 -28 -295)"')+E(26,-297,18,66,f,'transform="rotate(9 26 -297)"')+E(-28,-302,7,40,'#D3B7B1')+E(26,-305,7,40,'#D3B7B1')+(detail==='whiteEar'?E(-40,-345,13,14,'#F1EFE1'):'');
 if(t==='sheep')a+=E(-68,-236,28,15,f)+E(68,-236,28,15,f)+[-43,-14,16,44].map(xx=>E(xx,-269,24,24,f)).join('');
 a+=E(0,-220,65,58,f);
 if(t==='elf')a+=P('M-62 -222 Q-72 -284 -25 -278 L-21 -307 L-1 -279 L21 -302 L26 -276 Q73 -275 63 -223 L45 -244 L31 -260 L14 -244 L-8 -257 L-35 -243 L-48 -222Z','#A6BE87');
 if(t==='cloud')a+=[[-54,-232],[-38,-272],[0,-283],[37,-273],[58,-236]].map(([xx,yy])=>E(xx,yy,28,28,f)).join('');
 if(t==='hedgehog')a+=P('M-58 -234 Q0 -276 58 -234 L46 -195 Q0 -161 -46 -195Z','#E9DFC6');
 if(t==='otter'||t==='seal')a+=E(-34,-211,28,19,'#E7DDC8')+E(34,-211,28,19,'#E7DDC8');
 if(detail==='spots')a+=E(-41,-209,13,9,'#7F9695')+E(41,-209,13,9,'#7F9695');
 if(['bear','mouse','jerboa','otter','monster'].includes(t))a+=E(0,-201,36,26,'#E4D5B7');
 if(['fox','fennec','chipmunk','squirrel'].includes(t))a+=P('M-59 -225 L-8 -204 L0 -214 L9 -204 L59 -225 Q43 -163 0 -166 Q-43 -163 -59 -225Z','#EBDFC5');
 if(t==='badger')a+=P('M-56 -246 Q-35 -269 -24 -259 L-13 -192 L-31 -181Z','#56615D')+P('M56 -246 Q35 -269 24 -259 L13 -192 L31 -181Z','#56615D');
 if(t==='mole')a+=E(-15,-210,46,31,f)+E(0,-200,20,13,'#D3A6A3');
 const sleeping=pose==='sleep';a+=sleeping?P('M-29 -226 Q-21 -220 -13 -226 M13 -226 Q21 -220 29 -226','none',ink,3):E(-23,-226,5,7,ink)+E(23,-226,5,7,ink);
 if(t==='duck')a+=P('M-31 -211 Q0 -224 35 -211 L41 -194 Q0 -179 -35 -195Z','#D5A05F')+P('M-11 -276 Q-27 -307 6 -283 Q30 -308 25 -279Z',f);
 else if(t!=='mole')a+=E(0,-204,8,5,t==='mouse'?'#CA9E98':'#756653');
 a+=P('M-10 -188 Q0 -180 11 -188','none','#7D7461',2);
 if(detail==='glasses')a+=E(-24,-226,20,18,'none','stroke="#827F70" stroke-width="3"')+E(24,-226,20,18,'none','stroke="#827F70" stroke-width="3"')+line(-4,-227,4,-227,'#827F70',3);
 if(detail==='greenapron')a+=P('M-31 -171 L31 -171 L48 -62 L-48 -62Z','#92AC85')+R(-20,-112,40,28,'#C2CC9E',6);
 if(detail==='bluehatstripe'){a+=P('M-61 -260 Q-59 -311 0 -310 Q61 -308 62 -259Z','#8FAFBE')+R(-65,-267,130,18,'#ACC9D0',8);a+=[-151,-126,-101,-76].map(yy=>R(-50,yy,100,10,'#E4E8D9',2)).join('');}
 if(detail==='greenshoes'||detail==='paperdress'||detail==='paperdance')a+=E(-30,-10,30,17,'#88A579')+E(30,-10,30,17,'#88A579');
 if(detail==='paperdress'||detail==='paperdance')a+=paperSkirt(0,-61,.84,detail==='paperdance');
 if(kind==='scarf'||scarf)a+=R(-52,-179,104,23,scarf||cloth,9)+P('M29 -161 L52 -161 L60 -109 L35 -115Z',scarf||cloth);
 if(name==='鸭')a+=[-36,-14,8,30].map(xx=>R(xx,-178,8,21,'#EFE9D6',1)).join('');
 if(detail==='yellowHat')a+=R(-62,-277,124,14,'#DDC275',6)+P('M-43 -278 Q-46 -329 0 -329 Q46 -329 43 -278Z','#E6CD87');
 if(detail==='leafclip')a+=leaf(-48,-264,.34,'#DBBC72',-55);
 if(detail==='headcloth')a+=P('M-62 -231 Q-66 -292 0 -287 Q66 -292 62 -231 L49 -263 L-49 -263Z','#A5C4D1')+P('M-58 -248 L-89 -211 L-52 -218Z','#A5C4D1');
 const poses={stand:[[-12,67],[10,67]],hold:[[45,42],[-43,42]],reach:[[64,30],[58,24]],up:[[-35,-85],[36,-82]],point:[[-12,65],[87,-16]],think:[[45,-36],[12,65]],wave:[[-20,60],[37,-102]],sleep:[[32,37],[-31,37]],low:[[39,89],[58,74]],wide:[[-58,19],[58,19]]};
 const q=poses[pose]||poses.stand,af=t==='mole'?'#CBA7A0':f;a+=arm(-43,-154,...q[0],af,t==='mole'?26:22)+arm(43,-154,...q[1],af,t==='mole'?26:22)+extras;
 if(detail==='greenbag'||detail==='orangebag')a+=line(-48,-178,50,-70,detail==='greenbag'?'#A2B799':'#C79F77',8)+R(31,-112,59,61,detail==='greenbag'?'#B5C8A5':'#D2A374',12);
 if(detail==='feathersleeve')a+=feather(74,-109,.54,25);
 if(detail==='featherpocket')a+=R(20,-101,32,30,'#B8C69A',5)+feather(36,-102,.48,-12);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function sitKid(name,x,y,s=1,pose='hold',extras=''){
 const f=C[name][1],shoe=['greenshoes','paperdress','paperdance'].includes(C[name][5])?'#88A579':f,id=`seat-${x}-${y}-${Math.round(s*100)}`;
 return `<defs><clipPath id="${id}"><rect x="${x-210*s}" y="${y-500*s}" width="${420*s}" height="${512*s}"/></clipPath></defs>`+G(x,y,s,arm(-27,0,-8,55,f,23)+arm(27,0,8,55,f,23)+E(-35,60,25,13,shoe)+E(35,60,25,13,shoe))+`<g clip-path="url(#${id})">${kid(name,x,y+80*s,s,pose,false,extras)}</g>`;
}
function face(x,y,s=1){return G(x,y,s,E(-18,0,5,6,ink)+E(18,0,5,6,ink)+P('M-11 20 Q0 28 11 20','none',ink,3));}
function outdoor(mode='green'){const snow=mode==='snow',gold=mode==='gold',night=mode==='night';return R(0,0,1000,800,night?'#526C79':gold?'#E6D7B6':'#D0DED5',0)+E(800,140,61,61,night?'#EDE1B7':'#EEDFAD')+cloud(266,172,.7,night?'#708B91':'#ECEAD6')+P('M0 480 Q210 330 480 468 Q720 340 1000 465 L1000 800 L0 800Z',snow?'#DCE6DF':gold?'#D0C794':'#BCCBA6')+tree(62,606,1.16,gold?'#D8BE71':snow?'#B2C3B8':'#9EB494')+tree(944,576,.9,gold?'#C8AD68':snow?'#C4D1C6':'#AAC099')+P('M0 675 Q500 568 1000 683 L1000 800 L0 800Z',snow?'#EEF0E1':gold?'#C4B786':'#AFC39D')+(snow?[65,192,297,774,878].map((x,j)=>E(x,632+j%3*49,5,4,'#F8F6E9')).join(''):'');}
function interior(night=false,wall='#DED5BC'){return R(0,0,1000,800,wall,0)+R(0,620,1000,180,'#BEB397',0)+line(0,620,1000,620,'#A99D83',7)+R(672,80,234,346,'#A5AB94',100)+R(687,95,204,316,night?'#617C88':'#CADCD4',90)+(night?E(813,179,34,34,'#EFE4BB'):cloud(782,213,.45,'#EBECD8'))+line(788,96,788,410,'#D4C4A4',9)+line(690,260,890,260,'#D4C4A4',9)+R(654,412,268,20,'#BAA581',5)+R(68,257,246,16,'#B2A282',5)+[98,142,184,226].map((x,j)=>R(x,183-j%2*19,28,73+j%2*19,['#B4BE9E','#CEB383','#A8B3BE'][j%3],3)).join('');}
function desk(x,y,s=1){return G(x,y,s,R(-141,0,18,132,'#A18A68',5)+R(124,0,18,132,'#A18A68',5)+P('M-170 -44 L143 -44 L178 0 L-136 0Z','#D5BC90')+R(-136,0,314,17,'#B69C74',5));}
function stool(x,y,s=1){return G(x,y,s,R(-44,0,14,80,'#9E896D',4)+R(30,0,14,80,'#9E896D',4)+E(0,-5,59,20,'#C9AF83'));}
function bench(x,y,s=1){return G(x,y,s,R(-161,-111,323,77,'#BAA17B',8)+R(-149,-3,20,98,'#A18B69',4)+R(129,-3,20,98,'#A18B69',4)+R(-172,-19,344,24,'#D3BA8F',7));}
function cup(x,y,s=1){return G(x,y,s,R(-22,-40,44,42,'#E8E5D1',7)+E(0,-40,22,6,'#A3B8B0')+P('M23 -34 Q47 -37 42 -17 Q38 -8 24 -13','none','#D2D8C5',6));}
function plate(x,y,s=1){return G(x,y,s,E(0,0,64,20,'#F3EBD6')+E(0,0,49,12,'none','stroke="#B7C7B4" stroke-width="3"'));}
function bag(x,y,s=1){return G(x,y,s,R(-30,-37,60,63,'#D7C2A0',13)+P('M-21 -36 Q0 -74 21 -36','none','#B7A07C',7));}
function paper(x,y,s=1,art=''){return G(x,y,s,R(-104,-78,208,156,'#F4EBD6',4,'stroke="#D0C5AA" stroke-width="2"')+art);}
function acorn(x,y,s=1){return G(x,y,s,E(0,4,17,23,'#BE9A63')+P('M-22 -4 Q-22 -30 0 -30 Q22 -30 22 -4Z','#8D805D')+line(0,-29,4,-38,'#8D805D',5));}
function cone(x,y,s=1){return G(x,y,s,P('M0 -40 Q-42 -13 -25 27 Q0 48 25 27 Q42 -13 0 -40Z','#AB8C60')+[-19,0,18].map(yy=>P(`M-22 ${yy} Q0 ${yy+16} 22 ${yy}`,'none','#D0B17E',4)).join(''));}
function ginkgo(x,y,s=1,art=''){return G(x,y,s,P('M0 29 L-65 -27 Q-72 -65 -34 -66 Q-8 -86 10 -67 Q53 -78 69 -31Z','#E1C16E')+line(0,29,0,49,'#B49C66',3)+art);}
function spiral(x,y,s=1){return G(x,y,s,P('M21 16 Q40 -13 13 -28 Q-22 -40 -30 -7 Q-35 23 -9 27 Q16 30 17 8 Q18 -8 2 -10 Q-12 -9 -9 4','none','#856C4D',5));}
function snailSign(x,y,s=1,complete=false){return ginkgo(x,y,s,spiral(-5,-19,.8)+P('M-18 6 Q12 12 38 6 Q54 -7 36 -13','none','#856C4D',4)+(complete?P('M37 -11 L32 -24 M43 -8 L52 -21','none','#856C4D',3):''));}
function insect(x,y,s=1,lady=false){return G(x,y,s,lady?E(0,-5,14,17,'#C18E77')+E(0,-23,8,7,ink)+line(0,-21,0,11,ink,2)+[[-7,-11],[7,-4],[-6,4],[6,-14]].map(([xx,yy])=>E(xx,yy,3,3,ink)).join(''):E(-14,-5,8,7,'#8D7458')+E(0,-5,7,7,'#8D7458')+E(13,-5,7,7,'#8D7458')+[-13,0,12].map(xx=>P(`M${xx} -5 L${xx-5} 6 M${xx} -5 L${xx+4} -16`,'none','#8D7458',2)).join(''));}
function snailGran(x,y,s=1){return G(x,y,s,P('M-52 -5 Q-73 -27 -52 -67 Q-38 -74 -30 -51 L-19 -17 L67 -4Z','#B9BA90')+E(17,-41,40,39,'#AD9670')+spiral(17,-42,.82)+line(-52,-61,-59,-84,'#8B9D7F',4)+line(-34,-63,-25,-84,'#8B9D7F',4)+E(-59,-85,3,4,ink)+E(-25,-85,3,4,ink)+P('M-59 -67 Q-48 -95 -26 -67Z','#EEE2CA')+E(-46,-77,3,3,'#C08372')+E(-36,-73,3,3,'#C08372'));}
function stall(x,y,s=1,color='#B3BD97',goods=''){return G(x,y,s,R(-140,-10,20,154,'#AC9069',5)+R(120,-10,20,154,'#AC9069',5)+R(-153,-174,13,174,'#B39B78',3)+R(140,-174,13,174,'#B39B78',3)+P('M-170 -177 L-127 -238 L127 -238 L170 -177Z',color)+R(-165,-178,330,26,color,6)+R(-156,-21,312,26,'#D3B68B',5)+goods);}
function feather(x,y,s=1,r=0){return G(x,y,s,P('M0 28 Q-43 -10 -11 -67 Q22 -67 20 -22 Q13 12 0 28Z','#EDEDDD')+P('M0 42 L-2 -52','none','#B7C4B0',3)+[-35,-17,1].map(yy=>P(`M-2 ${yy} L11 ${yy-10} M-2 ${yy+6} L-17 ${yy-6}`,'none','#D2D7C5',2)).join(''),r);}
function bowl(x,y,s=1,fill='#C9D7C8'){return G(x,y,s,P('M-65 -11 Q-54 49 0 51 Q54 49 65 -11Z','#C4AC85')+E(0,-11,65,20,'#E2CDA7')+E(0,-13,54,13,fill));}
function pond(){return R(0,0,1000,800,'#D0DED2',0)+cloud(266,154,.78,'#E9EBD6')+E(839,129,54,54,'#ECE0AB')+P('M0 431 Q435 312 1000 405 L1000 800 L0 800Z','#A1C1B5')+P('M0 410 Q405 322 1000 383 L1000 427 Q432 358 0 452Z','#B8C99F')+grass(90,458,1.7,'#9FB788')+grass(927,420,1.4,'#9FB788')+[508,601,736].map((yy,j)=>P(`M${65+j*75} ${yy} q146 -33 289 0 M746 ${yy-48} q99 -23 180 0`,'none','#CEDDCA',4)).join('');}
function budHouse(x,y,s=1){return G(x,y,s,P('M-77 -17 Q-111 -120 -23 -218 Q3 -251 22 -218 Q114 -126 77 -17Z','#D8C3B6')+P('M-62 -19 Q-74 -138 0 -231 Q63 -143 62 -19','none','#B7AB9C',4)+P('M-91 -7 Q-111 -62 -164 -56 Q-151 0 -91 -7 M78 -6 Q113 -63 163 -48 Q137 14 78 -6Z','#A7BC91')+R(-27,-97,55,93,'#9CAE95',27)+E(21,-48,4,4,'#D9CA95'));}
function lily(x,y,s=1,{tilt=0,dream=false,bowl:falseBowl=false}={}){let a=falseBowl?P('M-271 -10 Q0 161 271 -10 Q171 -54 0 -39 Q-171 -54 -271 -10Z','#9BB98A')+P('M-271 -10 Q0 42 271 -10','none','#CAD6A6',7):E(0,0,273,dream?115:62,dream?'#D8E0CF':'#9AB98C');if(dream)a+=P('M-214 37 L-114 -59 L-29 19 L44 -83 L171 38Z','#B4C6B9')+P('M-114 -59 L-154 -17 L-114 -28 L-83 -12Z','#F1F0DF')+P('M44 -83 L-6 -21 L42 -40 L89 -23Z','#F2F0DF')+E(49,-87,58,13,'#9AB58A')+[-155,-77,6,103,176].map((xx,j)=>star(xx,-69+j%2*96,.31,'#F6F5E7')).join('');else a+=P('M-226 0 Q0 -37 245 0 M-100 -5 L-153 -34 M-90 3 L-143 35 M23 -12 L-2 -49 M33 9 L43 43 M135 -8 L174 -31 M125 6 L174 29','none','#BED1A5',3)+P('M244 0 L273 -17 L273 18Z','#A2C1B4');return G(x,y,s,a,tilt);}
function dragonfly(x,y,s=1){return G(x,y,s,E(-22,-10,27,9,'#DDE6D2','transform="rotate(18 -22 -10)"')+E(22,-10,27,9,'#DDE6D2','transform="rotate(-18 22 -10)"')+line(0,-31,0,32,'#8CA38D',6)+E(0,-34,9,8,'#A1B89A'));}
function leafDreamScene(i,cover){
 if(cover)return pond()+budHouse(166,479,.66)+lily(480,568,1.08,{dream:true,tilt:-19})+lily(795,737,.57)+kid('芽铃',790,724,.89,'low');
 return [
 ()=>pond()+P('M0 458 Q315 415 420 601 L320 800 L0 800Z','#B1C49A')+budHouse(221,545,1.0)+lily(683,664,.93)+kid('芽铃',291,707,.91,'point')+E(776,634,10,6,'#D9E7D2'),
 ()=>pond()+lily(510,713,1.30)+kid('芽铃',487,703,1.03,'low')+P('M563 634 Q649 586 727 666','none','#A7C294',19)+P('M591 670 L673 630','none','#DCC3A0',15)+E(601,698,11,7,'#D7E5D2'),
 ()=>pond()+lily(510,708,1.3,{bowl:true})+kid('芽铃',502,685,.9,'low')+P('M168 695 Q505 827 850 695','none','#B0C998',16)+P('M539 612 Q584 649 612 706','none','#DDC3A0',13),
 ()=>pond()+lily(431,706,1.11)+sitKid('芽铃',420,653,.93,'think')+G(854,586,.44,P('M-240 -8 Q-17 95 235 9 L175 51 Q-4 126 -210 29Z','#D9C77B'),-20)+lily(854,579,.44,{tilt:-20})+dragonfly(819,430,1.1),
 ()=>pond()+lily(422,725,1.1,{tilt:-5})+lily(833,704,.54)+kid('芽铃',524,720,1.03,'wide')+P('M221 738 Q448 792 668 749','none','#D6E2CB',5)+E(562,733,7,8,'#DCE8D1'),
 ()=>pond()+lily(421,630,1.04,{dream:true,tilt:-18})+lily(832,732,.56)+kid('芽铃',806,722,.88,'reach',true)+P('M723 611 L681 582','none','#DDC4A0',13),
 ()=>pond()+lily(421,527,1.19,{dream:true,tilt:-18})+lily(835,749,.52)+kid('芽铃',835,736,.90,'up')+budHouse(121,440,.47),
 ()=>pond()+lily(401,675,1.02)+lily(824,718,.57)+sitKid('芽铃',824,664,.84,'hold')+budHouse(152,479,.63)+dragonfly(547,417,.69)
 ][i]();
}
function singingStone(x,y,s=1,color='blue',sing=false){const c={blue:'#88B1C3',red:'#C89385',yellow:'#DCC783'}[color];return G(x,y,s,E(0,0,color==='red'?65:color==='yellow'?49:57,color==='red'?34:color==='yellow'?45:58,c)+E(-15,-13,4,5,ink)+E(15,-13,4,5,ink)+(sing?E(0,10,10,13,'#698783'):P('M-11 9 Q0 17 11 9','none',ink,3))+(color==='blue'?E(-29,1,8,6,'#E3E8D9')+E(29,1,8,6,'#E3E8D9'):''));}
function brush(x,y,s=1,r=0){return G(x,y,s,R(-7,-80,14,84,'#B49A6F',5)+R(-23,-4,46,17,'#CFB98D',5)+P('M-23 12 L-27 43 Q0 58 27 43 L23 12Z','#E3D8B8')+[-17,-8,1,10,19].map(xx=>line(xx,16,xx,43,'#C5BCA0',2)).join(''),r);}
function music(x,y,s=1){return G(x,y,s,E(0,0,10,7,'#79958A')+line(7,-2,7,-40,'#79958A',4)+P('M7 -40 Q28 -39 23 -22','none','#79958A',5));}
function stoneStream(){return outdoor()+P('M0 483 Q355 400 1000 485 L1000 603 Q355 518 0 591Z','#A5C2B9')+P('M17 539 Q231 488 393 536 M725 541 Q856 502 992 542','none','#D4DECB',5)+R(395,637,504,51,'#AFB5A1',17)+P('M395 637 L429 601 L871 601 L900 637Z','#C4CAB2');}
function stoneFriends(active=''){return singingStone(491,604,1,'red',active==='red')+singingStone(646,591,1,'yellow',active==='yellow')+singingStone(814,580,1,'blue',active==='blue');}
function singingBrushScene(i,cover){
 if(cover)return stoneStream()+stoneFriends('blue')+kid('茸米',257,753,1.37,'reach')+brush(456,592,.72,-75)+P('M392 590 L402 578','none','#C5A49A',17)+music(784,447,1.1)+music(610,470,.73);
 return [
 ()=>outdoor()+P('M0 494 Q377 377 1000 481 L1000 800 L0 800Z','#A5C2B9')+P('M0 629 Q412 519 706 691 L561 800 L0 800Z','#B5C69F')+kid('茸米',317,749,1.3,'hold')+singingStone(728,650,1.13,'blue',true)+P('M784 648 Q806 587 765 538','none','#A5BA8B',12)+music(762,514,.84),
 ()=>stoneStream()+stoneFriends()+kid('茸米',260,751,1.28,'hold')+brush(273,613,.73,70),
 ()=>stoneStream()+stoneFriends('blue')+kid('茸米',255,751,1.29,'think')+brush(365,620,.77,23)+P('M326 637 L375 596','none','#C5A49A',16)+[433,602,761].map((x,j)=>music(x,448+j%2*37,.6)).join(''),
 ()=>stoneStream()+stoneFriends('blue')+kid('茸米',259,752,1.28,'low')+brush(446,589,.76,-75)+P('M388 647 L398 578','none','#C5A49A',16)+[508,539,569].map((x,j)=>music(x,424+j%2*19,.74)).join('')+P('M428 574 Q594 490 840 551','none','#B8C9AE',5),
 ()=>stoneStream()+stoneFriends('red')+kid('茸米',261,751,1.28,'reach')+brush(453,592,.72,-75)+P('M391 584 L401 578','none','#C5A49A',15)+music(485,475,.76),
 ()=>stoneStream()+stoneFriends('yellow')+kid('茸米',258,751,1.28,'reach')+brush(610,576,.67,-78)+P('M386 587 Q470 548 559 568','none','#C4A59B',19)+music(638,461,.90)+[473,505].map(x=>E(x,656,6,6,'#C2907F')).join(''),
 ()=>stoneStream()+stoneFriends('blue')+kid('茸米',259,751,1.27,'hold')+brush(289,616,.76,77)+music(814,445,1.05)+P('M514 477 Q628 447 695 468','none','#CED8BC',4),
 ()=>interior(true)+R(161,527,538,189,'#C2AA81',12)+R(141,413,26,319,'#AC9270',8)+R(676,466,25,265,'#AC9270',8)+E(273,543,107,65,'#E6DFC7')+G(290,577,.77,kid('茸米睡',0,80,1,'sleep'),-85)+P('M315 518 Q521 465 673 545 L673 708 L311 708Z','#B2C5B1')+P('M359 544 Q471 580 631 546','none','#D8DFBC',7)+stool(824,644,.8)+brush(817,618,.66,76)+music(442,377,.65)
 ][i]();
}
function port(){return R(0,0,1000,800,'#C8DCD9',0)+cloud(290,147,.83,'#E9EBDD')+E(829,140,53,53,'#E9D9A5')+P('M0 356 Q381 271 1000 365 L1000 800 L0 800Z','#9FBFC0')+P('M0 487 Q336 441 507 632 Q466 753 619 800 L0 800Z','#D2C5A6')+P('M0 481 Q229 452 350 514','none','#E9ECDC',18)+P('M647 513 Q786 480 952 517 M615 697 Q790 669 974 707','none','#D1E1D3',5)+R(78,176,219,255,'#C2CDB8',9)+P('M58 176 L188 75 L319 176Z','#A5B9AA')+R(117,224,133,150,'#8DAAAD',6)+R(129,231,49,129,'#E1C988',3)+R(191,231,47,129,'#E1C988',3)+line(182,228,182,370,'#C6B58F',7);}
function lampFish(x,y,s=1,green=true,laugh=false){return G(x,y,s,P('M42 -14 L83 -38 L83 36 L43 13Z','#BAD1CC')+E(0,0,63,54,'#C6DDD3','fill-opacity=".65" stroke="#91B7BA" stroke-width="3"')+glow(0,18,50)+E(0,18,25,23,green?'#B2CB8C':'#E2C780')+line(0,-1,0,36,green?'#8EAF79':'#BDAC75',3)+E(-24,-17,4,5,ink)+E(11,-17,4,5,ink)+(laugh?P('M-18 -1 Q-7 19 5 -1Z','#658580'):P('M-17 -2 Q-6 6 5 -2','none',ink,3)));}
function shell(x,y,s=1,type='stripe',reverse=false){return G(x,y,s,P('M-40 15 Q-55 -18 -28 -39 Q-15 -54 0 -43 Q16 -54 29 -38 Q55 -17 39 15 L16 34 L-16 34Z',reverse?'#EEEBDC':type==='stripe'?'#D7C3AD':'#E5D7B7')+(reverse?'':type==='stripe'?[-24,-12,0,12,24].map(xx=>P(`M${xx} -34 Q${xx*.7} 2 ${xx*.45} 26`,'none','#A7B6B0',4)).join(''):[[-19,-24],[14,-27],[0,-8],[-23,4],[23,3],[0,17]].map(([xx,yy])=>E(xx,yy,4,4,'#B69C79')).join('')));}
function bubbles(x,y,s=1){return G(x,y,s,[[-14,0],[10,-32],[-6,-68]].map(([xx,yy],j)=>E(xx,yy,9+j*2,9+j*2,'none','stroke="#D8E9DC" stroke-width="3"')).join(''));}
function greenFishScene(i,cover){
 if(cover)return port()+kid('泡栗',346,749,1.38,'low')+lampFish(717,626,1.59,true,true)+shell(441,726,.62)+shell(525,741,.6,'dot')+bubbles(710,487,.85);
 return [
 ()=>port()+kid('泡栗',340,746,1.35,'wave')+shell(429,705,.65)+shell(510,724,.62,'dot')+P('M692 613 Q756 603 798 618','none','#D7E4D4',5),
 ()=>port()+kid('泡栗',366,749,1.32,'stop')+lampFish(730,633,1.23)+rock(873,559,.25),
 ()=>port()+P('M115 450 Q174 430 233 453 L270 549 Q187 534 126 569Z','#DEC88E','',0,'opacity=".65"')+P('M112 493 Q192 469 273 489 M107 528 Q182 513 270 530','none','#B6CFBF',11)+kid('泡栗',373,751,1.29,'low')+lampFish(691,646,1.17)+P('M494 651 L580 639','none','#B99E79',17),
 ()=>port()+stool(327,665,.80)+sitKid('泡栗',327,667,1.04,'hold')+bag(198,733,1.03)+shell(473,729,.77)+shell(580,754,.72,'dot')+lampFish(791,641,1.1),
 ()=>port()+kid('泡栗',327,750,1.27,'think')+shell(483,724,.78)+shell(588,755,.76,'dot',true)+lampFish(784,624,1.27,true,true)+bubbles(777,502,1.1),
 ()=>port()+kid('泡栗',370,749,1.34,'low')+lampFish(704,592,1.45,true,true)+bubbles(736,464,.75)+shell(452,731,.66)+shell(554,752,.63,'dot'),
 ()=>port()+kid('泡栗',368,750,1.32,'wide')+shell(234,570,.66)+shell(500,568,.66,'dot')+lampFish(738,613,1.38,true,true)+glow(509,606,80),
 ()=>port()+G(320,667,1.0,kid('泡栗',0,0,1.03,'low'),75)+lampFish(759,671,1.28,true,true)+rock(884,758,.39)+shell(883,747,.48)+bubbles(585,585,.60)+P('M574 701 Q622 723 670 709','none','#D0E0CF',5)
 ][i]();
}
function envelope(x,y,s=1,laugh=false){return G(x,y,s,P(laugh?'M-85 -70 L85 -70 L92 48 L53 65 L-85 65Z':'M-85 -70 L85 -70 L85 65 L-85 65Z','#ADC7D2')+P('M-85 -70 L0 -7 L85 -70','none','#819FAB',4)+E(-29,-32,6,7,ink)+E(29,-32,6,7,ink)+(laugh?P('M-31 -6 Q0 52 31 -6Z','#6D8D99'):P('M-26 7 Q0 20 26 7','none','#6D8D99',4))+P('M-85 65 L-27 19 M85 65 L27 19','none','#90AEBA',3));}
function moonDrawing(x,y,s=1,cat=false,smallFeather=false){return paper(x,y,s,E(-7,-16,43,37,'#DFC679')+(cat?P('M-37 -41 L-34 -72 L-12 -50 M15 -46 L33 -70 L31 -31Z','#DFC679')+E(-21,-19,4,5,ink)+E(5,-19,4,5,ink)+P('M-15 -4 Q-9 3 -3 -4','none',ink,2):E(17,-33,19,14,'#DFC679'))+G(63,35,.29,E(0,-14,20,19,'#BBA582')+P('M-20 -23 L-31 -39 L-7 -31 L8 -41 L17 -25Z','#9D8B70')+P('M-18 4 L18 4 L24 45 L-24 45Z','#A9BA90'))+(smallFeather?feather(-65,43,.35,-20):''));}
function postRoom(){return interior(false,'#DAD9BF')+R(48,345,281,193,'#B7BBA0',10)+[0,1,2].flatMap(j=>[0,1].map(k=>R(66+j*85,366+k*81,66,62,'#D7D7BC',4)+P(`M${76+j*85} ${391+k*81} l23 17 23 -17`,'none','#B4BCA4',3))).join('')+G(528,151,.87,line(0,-37,0,32,'#A9B593',4)+[-1,0,1].map(j=>line(0,-37,j*30,-69+Math.abs(j)*13,'#BFC8A3',3)+E(j*30,-69+Math.abs(j)*13,7,7,'#EBE7CF')).join(''));}
function letterFeetScene(i,cover){
 const counter=()=>desk(660,681,1.42);
 if(cover)return postRoom()+kid('杏球裸',316,752,1.35,'reach')+counter()+envelope(665,546,1.11,true)+moonDrawing(525,640,.64,true)+P('M451 577 Q489 598 548 612','none','#BCA17B',18)+feather(551,616,.60,25);
 return [
 ()=>postRoom()+kid('杏球袖',300,752,1.28,'hold')+counter()+moonDrawing(462,634,.68)+envelope(716,554,.92)+basket(844,648,.43,false),
 ()=>postRoom()+kid('杏球裸',310,752,1.28,'reach')+counter()+moonDrawing(487,613,.78)+envelope(725,551,1.0,true)+P('M439 586 Q511 602 625 600','none','#BDA17E',18)+feather(632,603,.57,34),
 ()=>postRoom()+kid('杏球袖',315,750,1.30,'hold')+counter()+moonDrawing(397,599,.71,true)+envelope(736,552,1.0,true)+R(519,633,54,11,'#D8BE75',3),
 ()=>postRoom()+moonDrawing(270,653,.53,true)+kid('杏球裸',346,751,1.30,'reach')+counter()+envelope(730,550,1.0,true)+P('M477 580 Q567 589 645 606','none','#BDA17E',18)+feather(626,614,.54,29),
 ()=>postRoom()+kid('杏球袖',324,751,1.32,'think')+counter()+envelope(726,548,1.0)+moonDrawing(518,642,.54,true),
 ()=>postRoom()+kid('杏球袋',307,751,1.31,'reach')+counter()+moonDrawing(510,604,.78,true)+envelope(747,553,.96),
 ()=>postRoom()+kid('杏球袋',308,751,1.29,'reach')+counter()+moonDrawing(616,529,.66,true,true)+envelope(654,594,.98)+R(709,548,25,30,'#D7BF83',3)+basket(843,651,.43,false),
 ()=>outdoor('gold')+R(636,198,293,397,'#C7C9AF',14)+E(779,365,104,108,'#A5B9B2')+E(779,365,89,93,'#D7DAC4')+G(777,400,.61,bag(0,66,2.4)+envelope(0,12,.76))+kid('杏球袋',339,753,1.31,'wave')
 ][i]();
}
function riceMill(x,y,s=1,smile=false){return G(x,y,s,E(0,0,149,29,'#A0AAA0')+R(-120,-105,240,105,'#ABB5AB',16)+E(0,-102,122,39,'#C9D1BF')+P('M-122 -103 L-122 -139 Q0 -185 122 -139 L122 -103 Q0 -63 -122 -103Z','#B7C3B7')+E(0,-139,122,36,'#D9DECC')+E(0,-139,23,11,'#7E9488')+P('M-34 -133 L-173 -72 L-175 -42','none','#AE946B',13)+E(-175,-39,14,17,'#C6AC7E')+P('M-64 -106 Q-48 -119 -33 -107 M32 -107 Q48 -119 64 -106','none','#6B8178',5)+E(-48,-93,5,5,ink)+E(48,-93,5,5,ink)+P(smile?'M-24 -69 Q0 -44 24 -69':'M-23 -67 Q0 -56 23 -67','none','#6B8178',4)+P('M-18 -50 Q0 -34 18 -50 L10 -23 L-15 -28Z','#EBEAD7')+P('M114 -75 L159 -61 L158 -39 L113 -51Z','#B6C1B0'));
}
function grain(x,y,s=1){return G(x,y,s,E(0,0,4,7,'#EEE9D5','transform="rotate(28)"'));}
function flour(x,y,s=1,coarse=false){return bowl(x,y,s,'#E3DDC4')+G(x,y,s,P('M-46 -13 Q-10 -58 14 -40 Q37 -35 47 -13Z','#EDE9D7')+(coarse?[[-21,-20],[-7,-34],[13,-20],[27,-18]].map(([xx,yy])=>E(xx,yy,4,3,'#BEB89C')).join(''):''));}
function sieve(x,y,s=1,coarse=true){return G(x,y,s,E(0,0,88,24,'#BCA57A')+E(0,-4,77,17,'#D7D5B9')+[-52,-26,0,26,52].flatMap(xx=>[-7,4].map(yy=>E(xx,yy,5,3,'#A5B49D'))).join('')+(coarse?[[-38,-10],[-14,-1],[13,-11],[40,0]].map(([xx,yy])=>grain(xx,yy,.9)).join(''):'')+P('M-88 0 Q0 36 88 0','none','#C8AF82',10));}
function spoon(x,y,s=1,color='#B49A71',r=0){return G(x,y,s,R(-6,-68,12,70,color,5)+E(0,7,17,26,color),r);}
function millRoom(){return interior(false,'#DCD6BB')+R(38,442,298,139,'#C5C8AC',9)+line(102,443,102,357,'#B1A07F',4)+sieve(103,350,.50,false)+R(221,439,48,137,'#B2B99D',6)+[0,1,2].map(j=>P(`M${235+j*9} 444 q-14 -67 -3 -129`,'none','#D5C18A',5)).join('');}
function millWhiskersScene(i,cover){
 if(cover)return millRoom()+riceMill(696,720,1.29,true)+kid('麦团',309,752,1.31,'hold')+flour(309,604,.78)+sieve(519,726,.80,true);
 return [
 ()=>millRoom()+riceMill(699,723,1.22,true)+kid('麦团',298,752,1.32,'hold')+bowl(298,600,.84,'#E8E1C6')+[-16,0,16].map(x=>grain(298+x,588,.7)).join(''),
 ()=>millRoom()+riceMill(701,721,1.22)+kid('麦团',299,752,1.29,'reach')+P('M429 596 L489 664','none','#C2A680',17)+flour(908,745,.74,true)+spoon(414,701,.52,'#BDA37A',35),
 ()=>millRoom()+riceMill(714,718,1.18)+stool(279,668,.87)+sitKid('麦团',279,667,1.12,'low')+flour(488,734,.81,true)+P('M608 464 Q715 418 814 467 M616 437 Q714 393 808 438','none','#B5BCA2',5),
 ()=>millRoom()+riceMill(708,722,1.19,true)+kid('麦团',322,753,1.27,'point')+flour(495,734,.81,true)+sieve(497,445,.8,true)+line(497,445,497,408,'#AD9B7B',3),
 ()=>millRoom()+riceMill(798,646,.73)+kid('麦团',311,751,1.27,'reach')+flour(656,717,1.38)+sieve(656,585,1.24,true)+[-49,-28,-7,14,35,56].map((x,j)=>grain(656+x,637+j%2*26,.56)).join('')+P('M446 594 L550 584','none','#C3A580',18),
 ()=>millRoom()+riceMill(691,720,1.22,true)+kid('麦团',291,751,1.27,'reach')+spoon(598,504,.62,'#B9A078',59)+P('M426 590 L582 524','none','#C5A982',16)+sieve(440,726,.81,true)+grain(671,547,.8)+flour(887,744,.72),
 ()=>interior()+kid('奶奶',764,655,1.11,'reach')+R(681,581,257,162,'#A8B2A0',8)+R(664,576,289,20,'#C2BCA0',6)+E(806,566,81,22,'#747F73')+E(806,561,61,17,'#DCD3A6')+P('M795 524 Q776 501 795 479 M830 524 Q850 498 831 473','none','#D5DBC5',4)+stool(294,666,.87)+sitKid('麦团',294,666,1.08,'hold')+desk(479,676,.83)+bowl(504,636,.61,'#E4E4CE')+R(464,623,81,13,'#D6DCC6',4),
 ()=>millRoom()+riceMill(702,724,1.24,true)+stool(297,665,.87)+sitKid('麦团',297,664,1.12,'hold')+E(297,627,33,20,'#E5DAB7')+E(310,614,11,10,'#DCD6BC')+plate(481,749,.77)+E(481,745,25,14,'#DED5AE')
 ][i]();
}
function sunny(x,y,s=1){return G(x,y,s,E(0,0,42,42,'#DFC572')+[0,45,90,135].map(r=>G(0,0,1,line(-65,0,-49,0,'#DFC572',7)+line(49,0,65,0,'#DFC572',7),r)).join(''));}
function moonBlue(x,y,s=1){return G(x,y,s,P('M25 -53 Q-56 -55 -56 7 Q-52 67 28 47 Q-15 37 -18 -8 Q-16 -35 25 -53Z','#8CB0C1'));}
function flagCloth(x,y,s=1,side='sun',corners=false){return G(x,y,s,R(-107,-91,214,182,'#EFE7D1',5,'stroke="#C8C2A4" stroke-width="3"')+(side==='sun'?sunny(0,0,.92):moonBlue(0,0,.97))+(corners?[[-105,-89],[105,-89],[-105,89],[105,89]].map(([xx,yy])=>P(`M${xx} ${yy} q${xx<0?-21:21} -12 ${xx<0?-28:28} 5`,'none','#BAC4A5',8)).join(''):''));}
function bridge(side='sun',flag=true){return R(0,0,1000,800,'#CEDCD0',0)+cloud(273,145,.8,'#EBEAD4')+E(833,139,52,52,'#E9DBA5')+P('M0 471 Q487 379 1000 464 L1000 800 L0 800Z','#B3C6A3')+P('M306 446 Q522 402 689 451 L804 800 L202 800Z','#9FBEB6')+P('M65 650 Q496 572 934 650 L934 719 Q500 643 65 719Z','#C4AD84')+P('M66 569 Q499 486 934 569','none','#AD9B77',12)+[96,245,394,543,692,841,920].map(x=>line(x,565-Math.sin(x/1000*Math.PI)*56,x,700-Math.sin(x/1000*Math.PI)*58,'#A99975',13)).join('')+(flag?R(487,375,16,277,'#A99670',5)+R(810,375,16,277,'#A99670',5)+line(487,381,826,381,'#B39C74',13)+flagCloth(656,493,1.1,side,true):'');}
function twoSides(){return `<defs><clipPath id="sun-view"><rect x="25" y="191" width="460" height="418" rx="14"/></clipPath><clipPath id="moon-view"><rect x="515" y="191" width="460" height="418" rx="14"/></clipPath></defs>`+R(0,0,1000,800,'#D5DECE',0)+cloud(257,113,.58,'#F0EDDA')+R(15,181,480,438,'#BAC5AD',18)+R(505,181,480,438,'#BAC5AD',18)+`<g clip-path="url(#sun-view)">${G(25,210,.46,bridge('sun')+kid('杏杏',316,746,1.26,'wave'))}</g><g clip-path="url(#moon-view)">${G(515,210,.46,bridge('moon')+kid('蓝蓝',324,746,1.26,'wave'))}</g>`+kid('绵丁',502,780,.60,'wide');}
function twoSidedFlagScene(i,cover){
 if(cover)return bridge('sun')+kid('绵丁',304,754,1.35,'wave')+kid('杏杏',567,749,.80,'hold')+kid('蓝蓝',818,751,.82,'hold');
 return [
 ()=>bridge('sun',false)+kid('绵丁',500,752,1.22,'wide')+kid('杏杏',235,751,1.05,'point')+kid('蓝蓝',796,752,1.07,'wave'),
 ()=>outdoor()+kid('绵丁',495,745,1.20,'hold')+kid('杏杏',188,748,1.0,'hold')+kid('蓝蓝',842,747,1.0,'hold')+desk(493,663,1.53)+R(287,608,184,63,'#EEE6D1',4)+R(523,608,184,63,'#EEE6D1',4)+cup(197,629,.58)+E(197,605,13,4,'#D8C171')+cup(821,629,.58)+E(821,605,13,4,'#8DB1C1'),
 ()=>outdoor()+kid('绵丁',307,752,1.25,'think')+desk(645,680,1.36)+paper(635,603,1.01,sunny(-46,0,.30)+moonBlue(40,3,.31))+kid('杏杏',754,750,.75,'point')+kid('蓝蓝',905,752,.71,'hold'),
 ()=>bridge('sun',false)+kid('绵丁',482,752,1.16,'wide')+flagCloth(340,561,.83,'sun')+flagCloth(670,562,.83,'moon')+kid('杏杏',151,754,.90,'hold')+kid('蓝蓝',867,752,.92,'low'),
 ()=>bridge('sun',false)+kid('绵丁',319,753,1.24,'reach')+flagCloth(572,542,1.02,'sun')+G(734,546,.76,flagCloth(0,0,.83,'moon'),-7)+kid('蓝蓝',863,752,.99,'point')+P('M692 437 Q726 418 769 439','none','#E1E6CB',6),
 ()=>interior()+kid('绵丁',308,751,1.27,'reach')+desk(644,678,1.50)+flagCloth(627,604,.76,'sun',true)+P('M540 572 L546 588 M542 604 L548 620 M550 635 L560 640','none','#98AC98',3)+P('M446 598 Q478 634 534 615 Q568 604 556 573','none','#A0B39B',3)+R(805,630,37,27,'#B9C5A4',7),
 ()=>twoSides(),
 ()=>bridge('moon')+kid('杏杏',827,753,.89,'point',true)+kid('蓝蓝',226,750,.92,'point')+stool(456,680,.68)+sitKid('绵丁',456,678,1.0,'hold')+P('M899 398 Q924 417 902 441','none','#CBD6BC',5)
 ][i]();
}
function paperSkirt(x,y,s=1,fan=false){return G(x,y,s,R(-78,-8,156,14,'#CBA175',4)+[-65,-39,-13,13,39,65].map((xx,j)=>G(xx,0,1,P('M-8 0 L8 0 Q23 35 3 91 Q-18 52 -8 0Z','#DCC77F')+P('M0 8 L3 78','none','#B8AD72',2),fan?(j-2.5)*-12:0)).join(''));}
function rolledLeaf(x,y,s=1,bug=false,sleep=false){return G(x,y,s,P('M-88 24 Q-91 -45 -15 -45 Q62 -45 80 9 Q33 -3 8 32 Q-17 52 -88 24Z','#C9B775')+E(39,0,42,31,'#9F9E6C')+P('M43 -23 Q4 -18 18 17 Q30 35 58 18','none','#E3CE90',9)+(bug?G(39,10,.8,E(0,0,23,15,'#9CA67D')+E(21,-8,14,13,'#ACB58A')+line(25,-16,31,-33,'#71886E',3)+line(35,-13,45,-27,'#71886E',3)+(sleep?P('M21 -8 L27 -8 M32 -8 L38 -8','none',ink,2):E(25,-9,2,3,ink)+E(35,-8,2,3,ink))):''));}
function mushroomWood(night=false){return outdoor(night?'night':'gold')+P('M319 0 L498 0 Q482 354 574 637 Q474 675 421 628 Q332 689 230 648 Q345 460 319 0Z','#A58F6C')+P('M390 163 Q367 477 343 605 M443 257 Q416 501 490 623','none','#8A795C',7)+G(832,619,.66,R(-23,-153,46,153,'#DFD5B8',14)+P('M-133 -143 Q-125 -283 0 -289 Q128 -284 133 -143Z','#C4A181')+[-65,-16,36,82].map((xx,j)=>E(xx,-186-j%2*45,15,13,'#E3D8BB')).join(''));}
function greenShoesScene(i,cover){
 if(cover)return mushroomWood(true)+kid('小穗舞',441,750,1.42,'wide')+rolledLeaf(784,741,.74,true,true)+[183,271,690].map((x,j)=>flower(x,722+j%2*36,.50,'#D6C58F')).join('');
 return [
 ()=>mushroomWood()+kid('小穗',414,751,1.25,'low')+P('M385 649 Q430 683 498 652','none','#C9A075',13)+rolledLeaf(710,729,.84)+leaf(829,739,.49,'#D0BA78',63),
 ()=>mushroomWood()+kid('小穗',376,748,1.24,'low')+rolledLeaf(614,664,1.04,true)+P('M498 649 L541 651','none','#DCC2A0',18)+P('M376 673 Q403 710 456 690','none','#CCA476',10),
 ()=>mushroomWood()+kid('小穗',386,750,1.25,'hold')+rolledLeaf(714,725,.94,true,true)+P('M337 659 Q380 700 434 659','none','#C9A177',12)+leaf(595,737,.54,'#D8BE78',55),
 ()=>mushroomWood()+stool(381,665,.87)+sitKid('小穗',381,664,1.10,'hold')+G(531,605,.65,R(-104,-78,208,156,'#E2CB84',4))+E(385,615,30,19,'#D5B783')+P('M462 651 Q503 671 550 646','none','#C7A076',10)+[487,519,546].map((x,j)=>E(x,623+j%2*11,3,3,'#B6A078')).join(''),
 ()=>mushroomWood()+stool(375,665,.87)+sitKid('小穗',375,664,1.08,'low')+R(457,669,323,82,'#D7C6A0',9)+[-2.5,-1.5,-.5,.5,1.5,2.5].map(q=>G(622+q*48,685,.57,P('M-8 0 L8 0 Q23 35 3 91 Q-18 52 -8 0Z','#DDC87F')+line(0,7,3,73,'#BCB077',2),-7)).join('')+paper(806,728,.37,P('M-73 -34 L-9 -12 L-46 42Z','#D8C179')),
 ()=>mushroomWood()+kid('小穗裙',414,751,1.34,'wide')+P('M280 714 Q254 682 272 656 M553 663 Q573 689 555 719','none','#C7C9A6',5)+R(721,672,62,44,'#C6B186',8)+rolledLeaf(806,747,.65,true,true),
 ()=>mushroomWood(true)+kid('小穗裙',572,750,1.28,'low')+rolledLeaf(283,748,.85,true)+P('M413 759 Q458 784 497 765','none','#D0D4B3',4),
 ()=>mushroomWood(true)+kid('小穗舞',470,751,1.41,'wide')+rolledLeaf(810,748,.71,true,true)+G(190,720,.72,R(-39,-66,78,66,'#B09E76',6)+E(0,-66,43,15,'#DDD1AB')+line(-54,-108,-11,-70,'#A88D67',7)+line(58,-108,15,-70,'#A88D67',7))+P('M295 739 Q317 768 348 773 M616 737 Q640 713 633 682','none','#D8D9B5',5)
 ][i]();
}
function shellBay(){return R(0,0,1000,800,'#C9DDD7',0)+cloud(262,149,.83,'#E9ECD8')+E(833,133,52,52,'#E8D9A5')+R(0,359,1000,441,'#9CBEB8',0)+P('M0 472 Q464 433 1000 571 L1000 800 L0 800Z','#D5C29C')+P('M0 460 Q462 419 1000 557','none','#E0E5D0',12)+R(80,176,228,245,'#C5D0BA',8)+P('M61 177 L194 80 L327 177Z','#A7B9A7')+R(148,273,87,148,'#9DAF98',35)+R(101,215,50,61,'#DDE1C5',8);}
function sandBucket(x,y,s=1){return G(x,y,s,P('M-55 -53 L55 -53 L46 47 Q0 64 -46 47Z','#BEA37C')+E(0,-53,56,16,'#D8C094')+E(0,-53,45,10,'#D5C29E')+P('M-52 -41 Q0 -117 52 -41','none','#9E8C6C',6)+[-30,0,30].map(xx=>line(xx,-41,xx*.85,41,'#A98F69',3)).join(''));}
function pear(x,y,s=1){return G(x,y,s,P('M-11 -25 Q-16 -2 -25 8 Q-34 42 0 44 Q36 43 25 8 Q15 -5 12 -25Z','#C1C68C')+P('M0 -24 Q-3 -39 8 -44','none','#9B946D',4)+leaf(10,-33,.18,'#A4B78B',60));}
function snackTable(){return desk(728,574,1.22)+P('M522 520 L903 520 L946 574 L564 574Z','#E6DDC0')+R(563,574,381,33,'#E3DAC0',4)+plate(722,546,.80);}
function sandPit(x=631,y=728){return E(x,y,167,48,'#BDAD89')+E(x+4,y+5,133,32,'#CFBB93');}
function colander(x,y,s=1,contents=''){return G(x,y,s,P('M-85 -27 Q-72 56 0 59 Q73 54 85 -27Z','#B9AC82')+E(0,-27,85,25,'#D9CB9E')+E(0,-28,72,17,'#BDAE85')+[-42,-14,14,42].flatMap(xx=>[7,27].map(yy=>E(xx,yy,5,5,'#E8DBC0'))).join('')+contents+P('M-81 -24 Q0 15 81 -24','none','#B7A17A',8));}
function thirdBasketScene(i,cover){
 if(cover)return shellBay()+sandPit(623,758)+kid('圆点',316,752,1.37,'hold')+spoon(318,590,.71,'#EEE5CF',-8)+kid('贝贝',775,749,1.14,'wave')+colander(529,714,.92,spoon(0,-27,.61,'#F0E6CF',58));
 return [
 ()=>shellBay()+snackTable()+kid('圆点',409,749,1.25,'reach')+spoon(626,526,.67,'#EEE6D1',69)+P('M535 589 L604 555','none','#AEBBB7',20)+sandBucket(299,729,.75),
 ()=>shellBay()+snackTable()+sandPit()+kid('圆点',341,749,1.30,'low')+G(495,659,1,sandBucket(0,0,.86),72)+[558,638,711].map((x,j)=>leaf(x,730+j%2*13,.29,'#B5B18A',j*40)).join(''),
 ()=>shellBay()+snackTable()+kid('贝贝',801,745,1.13,'hold')+plate(801,614,.66)+pear(787,595,.48)+pear(823,601,.43)+sandBucket(452,724,.72)+sandPit(598,755)+kid('圆点',432,749,1.23,'think'),
 ()=>shellBay()+snackTable()+kid('贝贝',838,710,.83,'low')+P('M786 604 Q839 546 900 603 L922 664 L816 660Z','#E9DEC1')+sandPit()+kid('圆点',329,750,1.28,'low')+E(470,652,22,16,'#A9B4A3')+[513,567,761].map((x,j)=>leaf(x,746-j%2*30,.30,'#B6B38B',j*34)).join('')+sandBucket(230,735,.66),
 ()=>shellBay()+snackTable()+kid('圆点',331,751,1.26,'wide')+kid('贝贝',752,749,1.22,'hold')+P('M708 630 Q751 610 798 630 L796 667 L711 667Z','#E8DDC1')+sandPit(554,751)+sandBucket(196,737,.63),
 ()=>shellBay()+snackTable()+kid('圆点',293,749,1.19,'point')+kid('贝贝',771,749,1.19,'low')+sandPit(598,752)+colander(472,676,.80)+P('M711 662 Q682 688 659 710','none','#DED1AF',5)+leaf(727,661,.25,'#BAB38A',22),
 ()=>shellBay()+kid('贝贝',833,748,1.0,'hold')+stool(314,666,.83)+sitKid('圆点',314,665,1.12,'low')+sandPit(665,765)+P('M414 679 Q448 648 485 635 M349 701 Q437 716 486 676','none','#AEBBB7',17)+colander(568,655,1.03,spoon(0,-30,.70,'#EFE8D2',63))+[492,521,550,579,608,637].map((x,j)=>E(x,721+j%2*17,3,4,'#C4B28D')).join('')+leaf(146,741,.35,'#B7B28A',50)+leaf(189,747,.31,'#B7B28A',25)+leaf(228,744,.28,'#B7B28A',5)+E(404,748,25,15,'#A8B19E')+E(436,753,14,10,'#A8B19E'),
 ()=>shellBay()+stool(298,665,.82)+stool(768,663,.87)+sitKid('圆点',298,663,1.06,'hold')+sitKid('贝贝',768,661,1.07,'hold')+desk(543,663,1.04)+plate(542,628,.73)+pear(526,608,.50)+pear(565,611,.46)+spoon(774,569,.58,'#EFE7D1',-22)+spoon(306,574,.58,'#AE926B',20)+bowl(493,750,.74,'#A8C3C0')+colander(647,741,.64)+sandBucket(897,750,.61)
 ][i]();
}
const scenes={'expansion-0081':leafDreamScene,'expansion-0082':singingBrushScene,'expansion-0083':greenFishScene,'expansion-0084':letterFeetScene,'expansion-0085':millWhiskersScene,'expansion-0086':twoSidedFlagScene,'expansion-0087':greenShoesScene,'expansion-0088':thirdBasketScene};
export function thirdYoungFirstArtwork(story,index,cover=false){
 const scene=scenes[story?.id];if(!scene)throw Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw Error('Expected eight pages');
 if(!Number.isInteger(index)||index<0||index>=8)throw Error('Page index must be an integer from 0 to 7');
 return svg(scene(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

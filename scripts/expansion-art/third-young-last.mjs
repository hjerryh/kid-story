// Eight explicit, independent eight-page storyboards for expansion-0089 through 0096.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
呼呼:['wind','#DFC6A3','#EDEBDD','coat',null,'windcap'],栗栗:['hedgehog','#B69A75','#9AB38B','overall',null,'redbag'],
栗铃:['chipmunk','#BA966E','#ACC099','overall',null,'button'],爷爷:['chipmunk','#9F9D8C','#9BB4C0','vest',null,'glasses'],
麦绒:['badger','#ACAB99','#DFBF80','overall',null,'roundpocket'],绒果:['bear','#BCA07B','#95BCC6','overall',null,'whitebutton'],
兔听众:['rabbit','#DBDECD','#C3ACBC','vest'],鼠听众:['mouse','#C2B297','#B8C5A1','vest'],狐听众:['fox','#C4A17B','#D1BA88','vest'],
杏米:['mouse','#C5A783','#DFCC86','overall',null,'greenbag'],蓬蓬:['squirrel','#AF8A64','#ACC29C','overall'],蓬蓬围:['squirrel','#AF8A64','#ACC29C','overall'],蓬蓬卧:['squirrel','#AF8A64','#ACC29C','overall'],妈妈:['squirrel','#8D7158','#DFCFAD','dress',null,'orangecloth'],
杏尾:['fox','#CD9B72','#AAC09B','overall'],獾店主:['badger','#A4A99A','#8097AB','apron'],
栗绵围:['badger','#A1A896','#A9BF9D','overall','#D6A47C','whitebars'],栗绵:['badger','#A1A896','#A9BF9D','overall',null,'whitebars']};
function arm(x,y,dx,dy,c,w=22){return P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.55-9} ${x+dx} ${y+dy}`,'none',c,w);}
function kid(name,x,y,s=1,pose='stand',flip=false,extras=''){
 const cfg=C[name];if(!cfg)throw Error(`Unknown character ${name}`);const [t,f,cloth,kind,scarf,detail]=cfg;
 let a=E(0,0,81,12,'#53675A','opacity=".12"');
 if(t==='hedgehog')a+=P('M-73 -161 L-97 -195 L-78 -209 L-105 -233 L-79 -244 L-90 -278 L-61 -274 L-64 -308 L-35 -296 L-15 -323 L4 -302 L32 -319 L41 -289 L72 -300 L68 -270 L96 -273 L82 -241 L108 -222 L83 -207 L100 -177 L72 -162Z','#9A8668');
 if(['squirrel','chipmunk'].includes(t)&&!['蓬蓬围','蓬蓬卧'].includes(name))a+=P('M44 -48 Q145 -77 121 -204 Q102 -250 64 -227 Q21 -202 68 -160','none',f,53);
 if(t==='chipmunk')a+=[0,1,2].map(j=>P(`M${70+j*8} -203 Q${89+j*6} -151 ${70+j*8} -87`,'none','#665C48',3)).join('');
 if(['fox','fennec'].includes(t))a+=P('M39 -57 Q139 -36 137 -133 Q93 -144 52 -101Z',f)+P('M137 -133 Q146 -90 123 -67 L102 -103Z','#EDEBDD');
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
 if(detail==='roundpocket')a+=E(0,-108,25,23,'#EFE0B9');
 if(detail==='whitebutton')a+=E(0,-149,8,8,'#F0EDDA');
 if(detail==='button')a+=E(0,-149,7,7,'#E1C775');
 if(detail==='moon')a+=E(0,-116,18,18,cream)+E(8,-122,16,17,cloth);
 if(['bear','mouse','jerboa','monster'].includes(t))a+=E(-49,-266,t==='mouse'?29:23,t==='mouse'?32:t==='jerboa'?43:24,f)+E(49,-266,t==='mouse'?29:23,t==='mouse'?32:t==='jerboa'?43:24,f)+(t==='mouse'?E(-49,-266,18,21,'#D6B5AE')+E(49,-266,18,21,'#D6B5AE'):'');
 if(['fox','fennec','squirrel','chipmunk','badger'].includes(t))a+=P(`M-49 -244 L${t==='fennec'?-99:-69} ${t==='fennec'?-366:-309} Q-21 -300 -15 -263Z`,f)+P(`M49 -244 L${t==='fennec'?99:69} ${t==='fennec'?-366:-309} Q21 -300 15 -263Z`,f)+(t==='fennec'?P('M-46 -268 L-82 -344 L-27 -278Z','#D9B8AD')+P('M46 -268 L82 -344 L27 -278Z','#D9B8AD'):'');
 if(t==='rabbit')a+=E(-28,-295,19,65,f,'transform="rotate(-12 -28 -295)"')+E(26,-297,18,66,f,'transform="rotate(9 26 -297)"')+E(-28,-302,7,40,'#D3B7B1')+E(26,-305,7,40,'#D3B7B1')+(detail==='whiteEar'?E(-40,-345,13,14,'#F1EFE1'):'');
 if(t==='sheep')a+=E(-68,-236,28,15,f)+E(68,-236,28,15,f)+[-43,-14,16,44].map(xx=>E(xx,-269,24,24,f)).join('');
 a+=E(0,-220,65,58,f);
 if(t==='wind')a+=[[-46,-254],[-25,-275],[0,-283],[27,-273],[49,-252]].map(([xx,yy])=>E(xx,yy,24,24,'#AAC8D0')).join('');
 if(t==='elf')a+=P('M-62 -222 Q-72 -284 -25 -278 L-21 -307 L-1 -279 L21 -302 L26 -276 Q73 -275 63 -223 L45 -244 L31 -260 L14 -244 L-8 -257 L-35 -243 L-48 -222Z','#A6BE87');
 if(t==='cloud')a+=[[-54,-232],[-38,-272],[0,-283],[37,-273],[58,-236]].map(([xx,yy])=>E(xx,yy,28,28,f)).join('');
 if(t==='hedgehog')a+=P('M-58 -234 Q0 -276 58 -234 L46 -195 Q0 -161 -46 -195Z','#E9DFC6');
 if(t==='otter'||t==='seal')a+=E(-34,-211,28,19,'#E7DDC8')+E(34,-211,28,19,'#E7DDC8');
 if(detail==='spots')a+=E(-41,-209,13,9,'#7F9695')+E(41,-209,13,9,'#7F9695');
 if(['bear','mouse','jerboa','otter','monster'].includes(t))a+=E(0,-201,36,26,'#E4D5B7');
 if(['fox','fennec','chipmunk','squirrel'].includes(t))a+=P('M-59 -225 L-8 -204 L0 -214 L9 -204 L59 -225 Q43 -163 0 -166 Q-43 -163 -59 -225Z','#EBDFC5');
 if(t==='badger')a+=P('M-56 -246 Q-35 -269 -24 -259 L-13 -192 L-31 -181Z',detail==='whitebars'?'#E9E8D9':'#56615D')+P('M56 -246 Q35 -269 24 -259 L13 -192 L31 -181Z',detail==='whitebars'?'#E9E8D9':'#56615D');
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
 if(detail==='windcap')a+=P('M-61 -276 L17 -368 L62 -276Z','#DFC575')+R(-65,-280,130,17,'#E7D38A',7)+E(-30,-10,30,17,'#92B4C0')+E(30,-10,30,17,'#92B4C0');
 if(detail==='orangecloth')a+=P('M-61 -237 Q-67 -294 0 -291 Q68 -294 62 -237 L48 -262 L-47 -262Z','#CF9B73')+P('M-59 -252 L-86 -210 L-51 -218Z','#CF9B73');
 if(detail==='yellowHat')a+=R(-62,-277,124,14,'#DDC275',6)+P('M-43 -278 Q-46 -329 0 -329 Q46 -329 43 -278Z','#E6CD87');
 if(detail==='leafclip')a+=leaf(-48,-264,.34,'#DBBC72',-55);
 if(detail==='headcloth')a+=P('M-62 -231 Q-66 -292 0 -287 Q66 -292 62 -231 L49 -263 L-49 -263Z','#A5C4D1')+P('M-58 -248 L-89 -211 L-52 -218Z','#A5C4D1');
 const poses={stand:[[-12,67],[10,67]],hold:[[45,42],[-43,42]],reach:[[64,30],[58,24]],up:[[-35,-85],[36,-82]],point:[[-12,65],[87,-16]],think:[[45,-36],[12,65]],wave:[[-20,60],[37,-102]],sleep:[[32,37],[-31,37]],low:[[39,89],[58,74]],wide:[[-58,19],[58,19]]};
 const q=poses[pose]||poses.stand,af=t==='mole'?'#CBA7A0':f;a+=arm(-43,-154,...q[0],af,t==='mole'?26:22)+arm(43,-154,...q[1],af,t==='mole'?26:22)+extras;
 if(detail==='redbag')a+=line(-48,-178,50,-70,'#BC8174',8)+R(31,-112,59,61,'#BF887B',12);
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
function pinwheel(x,y,s=1,r=0){return G(x,y,s,line(0,0,0,123,'#B19A70',7)+G(0,0,1,P('M0 0 L-87 -33 L-31 -91Z','#D9C080')+P('M0 0 L33 -87 L91 -31Z','#A6BDB0')+P('M0 0 L87 33 L31 91Z','#C7ABB2')+P('M0 0 L-33 87 L-91 31Z','#B4C7CC')+E(0,0,9,9,'#ECD9AA'),r));}
function windyIsland(){return outdoor()+P('M0 611 Q467 460 1000 630 L1000 800 L0 800Z','#B3C397')+pinwheel(759,334,.91,15)+pinwheel(169,425,.55,-15)+pinwheel(906,465,.48,37);}
function cake(x,y,w=134,d=59){return G(x,y,1,R(-w/2,-d/2,w,d,'#F0E9CF',12)+P(`M${-w/2} 0 L${-w/2} ${d/2+17} Q0 ${d/2+31} ${w/2} ${d/2+17} L${w/2} 0 Q0 16 ${-w/2} 0Z`,'#E1D7B6')+R(-w/2,-d/2,w,d,'#F1ECD7',12)+[0,1,2,3].map(j=>E(-w*.31+j*w*.20,-d*.20+j%2*13,4,3,'#D5C9A7')).join(''));}
function cakeBox(x=537,y=696){return G(x,y,1,P('M-233 -72 L216 -72 L244 50 L-211 50Z','#D0BB90')+P('M-219 -62 L206 -62 L231 38 L-201 38Z','#EAE1C3')+P('M-212 42 L241 42 L241 63 L-211 63Z','#BEA57C'));}
function fairCakeScene(i,cover){
 const pair=(p='hold',q='hold')=>kid('呼呼',263,751,1.15,p)+kid('栗栗',820,750,1.15,q,true);
 const parts=(equal=false,corner=false)=>equal?cake(430,681,156,50)+cake(669,675,155,31)+cake(648,715,120,17)+(corner?cake(733,715,30,17):''):cake(426,679,corner?164:165,corner?72:76)+cake(669,678,165,32)+(corner?cake(723,724,34,22):'');
 if(cover)return windyIsland()+kid('呼呼',300,751,1.15,'wide')+kid('栗栗',752,750,1.05,'hold',true)+cakeBox()+parts(true,true);
 return [
 ()=>windyIsland()+stall(667,505,1.10,'#B1C3A4',cake(0,-30,117,46))+kid('呼呼',272,753,1.11,'hold')+kid('栗栗',568,752,1.07,'hold')+G(393,612,.64,cakeBox(0,0)+cake(0,-20,191,62))+E(598,474,12,8,'#E8DCC1')+E(646,474,12,8,'#E8DCC1'),
 ()=>windyIsland()+pair('low','point')+cakeBox()+parts()+P('M358 650 L390 650','none','#DCC3A0',14),
 ()=>windyIsland()+pair('point','low')+cakeBox()+parts()+line(341,755,510,755,'#B4B390',4)+line(587,755,753,755,'#B4B390',4),
 ()=>windyIsland()+pair('hold','hold')+cakeBox()+parts(false,true)+P('M375 627 Q432 607 474 630','none','#DCC3A0',14),
 ()=>windyIsland()+pair('think','point')+cakeBox()+parts(false,true),
 ()=>windyIsland()+pair('reach','hold')+cakeBox()+parts(true,true)+P('M380 619 Q464 626 506 682','none','#DCC3A0',15)+P('M551 686 L575 686','none','#B5B79B',3),
 ()=>windyIsland()+pair('hold','hold')+cakeBox()+cake(266,611,106,49)+cake(817,610,105,44)+cake(871,644,29,17)+E(287,593,13,10,'#DEC39D'),
 ()=>windyIsland()+G(394,655,1,kid('呼呼',0,0,1.04,'hold'),-63)+G(611,659,1,kid('栗栗',0,0,1.03,'hold'),61)+G(512,746,.53,cakeBox(0,0))+P('M319 340 Q360 314 401 333','none','#DAE0C3',5)
 ][i]();
}
function storeRoom(){return interior(false,'#D9D3B7')+R(48,332,268,237,'#BDA985',8)+[0,1,2].map(j=>R(63,349+j*67,237,49,'#D4BD94',4)+R(161,366+j*67,42,11,'#A48E69',4)).join('')+R(684,337,227,283,'#B5B99D',8)+R(699,352,197,268,'#CED7B9',3)+R(673,611,252,20,'#B59B72',5)+[0,1,2,3,4,5].map(j=>P(`M${64+j*157} 623 L${32+j*166} 800`,'none','#A69573',3)).join('')+line(0,703,1000,703,'#AD9E7C',3)+line(0,761,1000,761,'#AD9E7C',3)+P('M458 696 Q522 671 579 700 Q529 732 477 713','none','#C9B88F',3)+G(611,558,.76,line(0,0,0,-196,'#B09A76',8)+P('M-24 -10 L24 -10 L49 48 L-47 48Z','#CFBD8F'))+bag(375,585,.94);}
function soundWave(x,y,s=1){return G(x,y,s,P('M-35 0 Q0 26 35 0 M-54 16 Q0 57 54 16 M-76 32 Q0 86 76 32','none','#B5C0A0',4));}
function highBag(x,y,s=1){return G(x,y,s,P('M-65 -84 Q-72 -116 -37 -117 L38 -117 Q74 -115 65 -84 L80 42 Q0 69 -80 42Z','#D6C29B')+P('M-61 -87 Q0 -60 61 -87','none','#BBA580',5)+P('M-40 -106 Q0 -89 40 -106','none','#E6D4B1',8));}
function rememberedFloorScene(i,cover){
 if(cover)return storeRoom()+kid('栗铃',401,752,1.35,'hold')+highBag(397,585,.94)+soundWave(665,713,1.15)+[491,530,625].map((x,j)=>E(x,743-j%2*24,j===2?23:13,j===2?11:7,'#9BA689','opacity=".5"')).join('');
 return [
 ()=>storeRoom()+kid('栗铃',413,752,1.32,'low')+P('M549 642 Q569 668 595 689','none','#BC9B74',18)+soundWave(598,713,.66),
 ()=>storeRoom()+kid('栗铃',402,751,1.29,'think')+plate(543,721,.62)+acorn(534,706,.53)+acorn(554,711,.44),
 ()=>storeRoom()+kid('栗铃',405,752,1.31,'wide')+[492,594,702].map((x,j)=>E(x,737-j%2*22,25,12,'#A8AD91','opacity=".6"')).join('')+soundWave(652,690,.95)+P('M703 537 L737 546 M701 556 L739 565 M704 577 L736 583','none','#C5CAB0',4),
 ()=>storeRoom()+stool(381,667,.86)+sitKid('栗铃',381,665,1.11,'think')+[490,531,571,615].map((x,j)=>E(x,745-j%2*13,12,7,'#B0B89B','opacity=".55"')).join('')+P('M626 616 Q671 631 714 608','none','#C8CEB1',4),
 ()=>storeRoom()+kid('栗铃',476,751,1.30,'point')+P('M660 646 Q718 666 781 646','none','#D3C29C',6)+highBag(793,584,.61),
 ()=>storeRoom()+kid('栗铃',586,749,1.25,'hold')+highBag(586,626,1.1)+[669,710,782].map((x,j)=>E(x,748-j%2*23,j===2?24:13,j===2?11:7,'#A4B195')).join('')+soundWave(453,711,1.03),
 ()=>storeRoom()+kid('栗铃',426,751,1.34,'wide')+highBag(720,696,.80)+soundWave(560,699,1.23)+[382,437,491].map((x,j)=>line(x,446-j%2*19,x-8,471-j%2*19,'#B4C6BE',3)).join(''),
 ()=>storeRoom()+stool(726,659,1.0)+sitKid('爷爷',726,658,1.20,'hold')+kid('栗铃',523,750,1.04,'hold')+P('M720 603 Q662 582 578 607','none','#9F9D8C',22)+highBag(374,712,.64)+soundWave(504,725,.70)
 ][i]();
}
function sheepCookie(x,y,s=1,step=false){return G(x,y,s,[-24,-8,8,24].map((xx,j)=>line(xx,10,xx+(step&&j===0?-9:0),step&&j===0?14:27,'#C4B999',7)).join('')+[-26,-10,8,25].map((xx,j)=>E(xx,-7-j%2*7,17,18,'#F0E8CF')).join('')+E(39,-14,19,21,'#ECE3C8')+E(50,-31,9,11,'#E5D7B7')+E(44,-16,3,3,ink)+P('M46 -5 Q52 -1 56 -6','none','#9C977B',2)+spiral(-4,-13,.29));}
function foodBox(x,y,s=1,tall=false,inside=''){return G(x,y,s,P(tall?'M-104 -137 L103 -137 L121 -15 L-91 -15Z':'M-104 -44 L103 -44 L121 26 L-91 26Z','#D9C497')+inside+P(tall?'M-91 -15 L121 -15 L121 70 L-91 70Z':'M-91 26 L121 26 L121 54 L-91 54Z','#BEA57C')+R(tall?-91:-91,tall?-15:26,212,9,'#D5BD90',3));}
function bakingRoom(){return interior()+R(59,352,243,205,'#A8B5A0',9)+R(79,371,203,102,'#8C9E8D',12)+R(89,385,182,72,'#BBC6AD',8)+[108,174,240].map(x=>E(x,518,12,12,'#D5CCAD')).join('');}
function wideSpoon(x,y,s=1,r=0){return G(x,y,s,R(-7,-114,14,113,'#B19A72',5)+E(0,17,33,48,'#CEB68C'),r);}
function coolingSheepScene(i,cover){
 const table=()=>desk(630,686,1.65)+P('M348 613 L864 613 L925 683 L407 683Z','#E7DDC0');
 const six=(x,y,s=1)=>[-1,0,1].flatMap((q,j)=>[0,1].map(k=>sheepCookie(x+q*108+k*16,y+k*61,s,true))).join('');
 if(cover)return bakingRoom()+kid('麦绒',258,752,1.37,'low')+table()+G(646,621,1,E(0,0,201,64,'#F0E9D3')+E(0,0,180,53,'none','stroke="#B3C5B5" stroke-width="3"'))+six(631,579,.67)+wideSpoon(480,603,.60,-65)+P('M394 630 L419 575','none','#AAAB99',16);
 return [
 ()=>bakingRoom()+kid('麦绒',260,752,1.32,'up')+table()+R(446,555,371,102,'#9EABA0',10)+six(612,571,.68)+P('M552 499 Q537 479 552 459 M685 491 Q700 474 685 452','none','#CCD4BA',4),
 ()=>bakingRoom()+kid('麦绒',260,752,1.32,'reach')+table()+foodBox(656,596,.82,false,sheepCookie(-14,-22,.76,true))+wideSpoon(424,575,.63,-55)+sheepCookie(460,607,.68,true)+sheepCookie(532,664,.64,true)+sheepCookie(811,644,.64,true)+R(702,546,122,51,'#A6B3A4',6)+sheepCookie(726,553,.54,true)+sheepCookie(794,557,.54,true),
 ()=>bakingRoom()+kid('麦绒',258,752,1.32,'low')+table()+plate(781,636,1.03)+sheepCookie(775,614,.74)+[467,540,614,693,847].map((x,j)=>sheepCookie(x,585+j%2*70,.62,true)).join('')+wideSpoon(500,610,.60,-80)+P('M391 645 L433 598','none','#AAAB99',17),
 ()=>bakingRoom()+stool(267,667,.89)+sitKid('麦绒',267,665,1.12,'think')+table()+foodBox(606,581,.85,true,sheepCookie(-41,-108,.58,true)+sheepCookie(37,-103,.58,true))+plate(804,635,.91)+sheepCookie(800,615,.63)+sheepCookie(457,650,.58,true)+sheepCookie(731,660,.57,true)+sheepCookie(865,573,.56,true),
 ()=>bakingRoom()+kid('麦绒',260,751,1.31,'reach')+table()+foodBox(750,558,.67,true,sheepCookie(-41,-108,.58,true)+sheepCookie(37,-103,.58,true))+plate(579,639,1.03)+sheepCookie(577,615,.74)+sheepCookie(703,662,.63,true)+sheepCookie(823,661,.63,true)+sheepCookie(864,583,.58,true)+P('M394 583 Q465 574 551 594','none','#A9AA99',18),
 ()=>bakingRoom()+kid('麦绒',257,752,1.32,'reach')+table()+G(649,620,1,E(0,0,201,65,'#F1EAD6')+E(0,0,179,54,'none','stroke="#B3C6B5" stroke-width="3"'))+six(633,579,.67)+wideSpoon(480,603,.60,-65)+P('M390 581 L418 574','none','#AAAB99',16),
 ()=>bakingRoom()+kid('麦绒',260,752,1.32,'hold')+table()+foodBox(660,602,1.32,false,six(0,-30,.60))+plate(439,640,.60)+[724,770,828].map((x,j)=>line(x,156+j*37,x-4,178+j*37,'#AFBCB5',3)).join(''),
 ()=>outdoor()+P('M120 495 Q298 194 479 495 Q386 453 298 495 Q212 454 120 495Z','#89AEBF')+line(299,380,299,726,'#A79676',10)+stool(345,666,.85)+sitKid('麦绒',345,664,1.13,'hold')+sheepCookie(346,625,.67)+P('M345 604 L359 590 L365 608Z','#BFA981')+G(659,719,.89,foodBox(0,0,1.05,false,[-70,0,70].map(x=>sheepCookie(x,-28,.48)).join('')+[-37,37].map(x=>sheepCookie(x,15,.48)).join('')))+[75,552,730,876].map((x,j)=>line(x,320+j%2*100,x-13,366+j%2*100,'#B6C7BD',4)).join('')
 ][i]();
}
function softCloud(x,y,s=1,hold=false){return G(x,y,s,E(0,0,99,54,'#EBECDE')+E(-66,-9,46,45,'#EBECDE')+E(-27,-44,49,44,'#EBECDE')+E(36,-38,50,48,'#EBECDE')+E(79,-5,42,43,'#EBECDE')+E(-29,-7,5,6,ink)+E(28,-7,5,6,ink)+E(-49,10,12,7,'#DBBDB2')+E(49,10,12,7,'#DBBDB2')+P('M-15 17 Q0 28 15 17','none','#8E9E90',3)+P(hold?'M-71 20 Q-90 70 -57 76 M73 18 Q96 68 59 76':'M-74 16 Q-104 37 -113 6 M73 18 Q106 40 114 5','none','#E8EBDB',18));}
function paperSnow(x,y,s=1,r=0){return G(x,y,s,P('M-29 -10 L18 -18 L34 11 L-10 23 L-37 3Z','#F2EFDD'),r);}
function musicRoom(night=false){return interior(night)+R(318,660,606,75,'#BAA17B',8)+P('M318 660 L354 618 L892 618 L924 660Z','#D0B58B')+R(60,368,235,213,'#9DAE9D',8)+R(79,389,197,70,'#D7DFC7',4)+[0,1,2,3,4,5].map(j=>R(84+j*30,394,24,56,'#EFE8D1',2)).join('');}
function fallingFlakes(n=4){return [0,1,2,3,4].slice(0,n).map((j)=>paperSnow(469+j*71,461+j%3*65,.52,j*23)).join('');}
function snowSkirtsScene(i,cover){
 if(cover)return musicRoom()+kid('绒果',446,647,1.16,'wide')+softCloud(691,324,1.01,true)+plate(691,410,1.29)+fallingFlakes(5)+basket(266,728,.46,false);
 return [
 ()=>musicRoom()+kid('绒果',462,648,1.18,'up')+softCloud(789,381,.99)+paper(322,735,.53,P('M-65 -23 Q-40 -43 -10 -23 M0 5 Q33 -15 64 5','none','#A9B89E',3)),
 ()=>musicRoom()+kid('绒果',463,648,1.18,'up')+softCloud(789,382,.95)+basket(301,744,.55,false)+[451,504,553,601,662].map((x,j)=>E(x,744-j%2*21,15,13,'#EEEAD7')).join('')+E(509,605,14,13,'#EEEAD7'),
 ()=>musicRoom()+kid('绒果',413,648,1.17,'point')+softCloud(702,405,.99)+E(699,360,14,13,'#EEEAD7')+E(699,442,14,13,'#EEEAD7')+E(699,555,14,13,'#EEEAD7')+E(699,647,14,13,'#EEEAD7')+P('M698 473 L698 510','none','#C1CBB5',3)+basket(277,744,.5,false),
 ()=>musicRoom()+stool(411,576,.79)+sitKid('绒果',411,575,1.05,'hold')+paper(512,503,.58,P('M-70 -20 Q0 -35 70 -20 M-65 15 Q0 0 65 15','none','#B0B99E',3))+paperSnow(644,474,.70,18)+P('M572 513 Q603 494 631 513','none','#BDCDB4',4)+softCloud(800,381,.83),
 ()=>musicRoom()+kid('绒果',405,648,1.16,'wide')+E(286,587,14,13,'#EDEAD7')+paperSnow(537,567,.73,27)+P('M286 615 L286 648','none','#C2CBB3',3)+P('M541 605 Q574 629 536 650','none','#C2CBB3',3)+softCloud(800,381,.82)+basket(271,742,.5,false)+paperSnow(632,738,.71,-10),
 ()=>musicRoom()+kid('绒果',411,648,1.16,'wide')+softCloud(691,324,1.01,true)+plate(691,410,1.29)+[646,686,725].map((x,j)=>paperSnow(x,405,.45,j*17)).join('')+fallingFlakes(3)+basket(271,742,.5,false),
 ()=>musicRoom()+kid('绒果',492,648,1.10,'wide')+softCloud(712,313,.99,true)+G(712,395,1,plate(0,0,1.25),-9)+fallingFlakes(5)+bench(460,729,1.08)+sitKid('兔听众',286,712,.62,'hold')+sitKid('鼠听众',453,712,.63,'hold')+sitKid('狐听众',614,712,.64,'hold'),
 ()=>musicRoom()+kid('绒果',455,744,1.23,'low')+softCloud(769,382,.87)+plate(612,658,1.02)+paperSnow(472,677,.56,34)+paperSnow(606,723,.62,-7)+basket(320,735,.54,false)+paperSnow(333,705,.44,11)
 ][i]();
}
function blanket(x,y,s=1,curl=0,dots=true){let a='';if(curl===0)a=P('M-180 -59 L156 -59 L186 67 L-157 67Z','#C5B7CE')+P('M-157 -39 L140 -39 L161 49 L-139 49Z','none','#DAD0DC',3);else a=P(curl===2?'M-147 48 Q-203 -142 -75 -157 L-37 -7 L38 -7 L77 -157 Q205 -141 149 48Z':'M-167 52 Q-221 -70 -92 -95 L-51 18 L68 18 L100 -95 Q214 -65 172 52Z','#C5B7CE')+P(curl===2?'M-75 -157 Q-118 -51 -55 10 M77 -157 Q119 -52 58 9':'M-92 -95 Q-132 -33 -67 22 M100 -95 Q139 -32 73 22','none','#DFD1DE',10);a+=P('M-14 23 Q0 36 15 23','none','#8D8197',3);const pts=curl===2?[[-76,-157],[77,-157],[-147,48],[149,48]]:curl?[[-92,-95],[100,-95],[-167,52],[172,52]]:[[-180,-59],[156,-59],[-157,67],[186,67]];return G(x,y,s,a+(dots?pts.map(([xx,yy])=>E(xx,yy,14,14,'#EFEBDD')).join(''):''));}
function porch(inner=false){return R(0,0,1000,800,'#CFD7C7',0)+R(0,343,1000,457,'#ACBEAA',0)+[63,137,318,509,674,848,951].map((x,j)=>line(x,254+j%2*51,x-13,303+j%2*51,'#A6BDB7',3)).join('')+flower(229,398,1.14,'#CA9786')+line(229,415,229,489,'#90AA83',6)+leaf(229,456,.42,'#A7BC8E',42)+R(0,102,1000,150,'#C7B896',5)+R(0,235,1000,27,'#B19B77',5)+R(0,562,1000,238,'#CCBEA0',0)+[593,664,738].map(yy=>line(0,yy,1000,yy,'#B8A688',3)).join('')+[145,478,911].map(x=>R(x,252,35,337,'#B6A27F',5)).join('')+(inner?R(229,252,35,337,'#B5A380',0)+R(277,425,246,190,'#AF9671',8)+P('M277 425 L319 392 L567 392 L523 425Z','#CBB48B')+R(302,456,195,100,'#C2AA80',5):'');}
function breeze(x,y,s=1){return G(x,y,s,P('M-101 -17 Q-33 -47 65 -13 Q107 4 86 24 M-114 19 Q-41 -7 53 25','none','#E0E7CF',5));}
function redFlowerPlaceScene(i,cover){
 if(cover)return porch(true)+blanket(540,700,1.1)+sitKid('杏米',501,657,1.18,'hold')+plate(657,737,.69)+E(644,731,15,9,'#D7BA88')+E(673,736,12,8,'#D7BA88')+bag(318,746,.8);
 return [
 ()=>porch()+kid('杏米',468,751,1.35,'hold')+G(470,609,.54,blanket(0,0,1,0),17)+breeze(806,472,.79),
 ()=>porch()+blanket(475,703,1.02,0,false)+kid('杏米',477,748,1.18,'up')+blanket(475,703,1.02,1)+breeze(754,506,.96),
 ()=>porch()+blanket(484,703,1.02,0,false)+sitKid('杏米',484,660,1.13,'wide')+blanket(484,703,1.02,2)+breeze(746,470,1.04),
 ()=>porch()+blanket(598,703,1.02,0,false)+sitKid('杏米',598,665,1.10,'think')+blanket(598,703,1.02,2)+breeze(407,534,.74),
 ()=>porch(true)+kid('杏米',365,751,1.29,'reach')+G(386,635,.50,blanket(0,0,1,0),22)+breeze(316,511,.74)+P('M498 610 L554 598','none','#C7A986',17),
 ()=>porch(true)+blanket(574,700,1.07)+sitKid('杏米',543,667,1.13,'hold')+breeze(336,503,.64)+bag(803,744,.78),
 ()=>porch(true)+blanket(574,700,1.07)+sitKid('杏米',518,665,1.12,'low')+plate(684,741,.73)+E(667,731,18,10,'#D6BA89')+E(697,739,17,10,'#D6BA89')+G(611,741,.63,P('M-26 -12 Q0 -30 28 -7 L20 17 L-19 14Z','#E5D9B1'))+bag(815,738,.8),
 ()=>porch(true)+blanket(574,700,1.07)+sitKid('杏米',518,665,1.12,'hold')+E(517,621,24,15,'#D8BC8C')+E(577,743,10,7,'#D8BC8C')+plate(690,738,.73)+G(687,733,.60,P('M-26 -12 Q0 -30 28 -7 L20 17 L-19 14Z','#E5D9B1'))+bag(815,738,.8)
 ][i]();
}
function hugNut(x,y,s=1,open=false,full=false){return G(x,y,s,(full?glow(0,0,105):'')+E(0,14,55,62,'#BA9B68')+P('M-43 -2 Q0 23 43 -2','none','#CEB685',4)+E(0,-19,53,20,'#D7BD87')+(open?E(0,-19,38,13,'#8B805E')+G(80,-59,1,P('M-60 7 Q-58 -43 0 -44 Q57 -42 60 7Z','#A38E65')+line(0,-44,6,-61,'#96815C',7),30):P('M-60 -13 Q-58 -63 0 -64 Q57 -62 60 -13Z','#A38E65')+line(0,-64,6,-81,'#96815C',7))+(full?E(-13,-4,11,17,'#EDDAA1','opacity=".65"'):''));}
function hugGlow(x,y,s=1){return G(x,y,s,glow(0,0,180)+P('M-100 -45 Q-116 81 0 96 Q116 81 100 -45 M-84 -42 Q-49 9 0 12 Q50 9 84 -42','none','#E7D59B',13,'opacity=".66"'));}
function littleBed(){return interior(false)+R(403,521,481,191,'#C1A77F',12)+R(390,446,25,286,'#A9916F',8)+R(872,472,25,260,'#A9916F',8)+E(493,546,85,58,'#E5DDC6')+P('M533 522 Q704 484 871 547 L871 702 L532 702Z','#B2C5AD')+P('M563 548 Q721 587 848 548','none','#D6DEBA',7);}
function tailHugScene(i,cover){
 const yard=()=>outdoor()+bench(476,662,1.28);
 if(cover)return yard()+kid('蓬蓬围',440,752,1.42,'hold')+hugNut(441,603,.84,false,true)+hugGlow(441,592,.79)+P('M510 736 Q628 713 584 646','none','#AC8762',35);
 return [
 ()=>interior()+kid('妈妈',564,750,1.56,'hold')+kid('蓬蓬',444,751,1.00,'hold')+hugNut(447,639,.56,false,true)+P('M497 524 Q376 572 409 646 M631 565 Q614 659 484 664','none','#907358',23)+hugGlow(465,613,.76),
 ()=>yard()+sitKid('蓬蓬',405,643,1.16,'hold')+hugNut(405,604,.73,false,true)+kid('妈妈',825,620,.51,'wave')+basket(857,569,.31,false)+cone(857,554,.3),
 ()=>yard()+sitKid('蓬蓬',405,643,1.16,'hold')+hugNut(405,607,.74,true,false)+hugGlow(405,589,1.0),
 ()=>yard()+sitKid('蓬蓬',404,643,1.16,'low')+hugNut(443,634,.78,true,false)+P('M387 511 Q378 532 387 540 Q400 533 387 511Z','#B7CED0')+E(422,680,8,9,'#839F83'),
 ()=>yard()+sitKid('蓬蓬围',405,643,1.16,'hold')+P('M350 568 Q391 599 449 562 M452 577 Q409 606 356 571','none','#AE8963',20)+hugNut(405,612,.69,false,true)+P('M487 709 Q584 751 543 655','none','#AF8A64',39),
 ()=>yard()+sitKid('蓬蓬围',405,643,1.16,'hold')+hugNut(405,610,.75,false,true)+hugGlow(405,594,.72)+P('M488 709 Q584 751 543 655','none','#AF8A64',39),
 ()=>littleBed()+G(609,567,.79,kid('蓬蓬卧',0,70,1,'sleep'),-85)+P('M533 522 Q704 484 871 547 L871 702 L532 702Z','#B2C5AD')+P('M706 671 Q782 650 754 588','none','#AF8A64',38)+hugNut(648,618,.48,true,false)+hugGlow(497,568,.56),
 ()=>littleBed()+stool(311,665,1.0)+sitKid('妈妈',311,663,1.34,'hold')+kid('蓬蓬',424,750,1.01,'hold',true)+P('M321 590 Q437 544 476 632 M293 618 Q335 683 426 672','none','#907358',22)+hugNut(653,573,.53,true,false)+[219,236,253].map((x,j)=>line(x,705+j*7,x+20,711+j*7,'#A0A17A',3)).join('')
 ][i]();
}
function moonBall(x,y,s=1,mud='none',tilt=0){return G(x,y,s,E(0,0,71,71,'#E8DBA9')+E(-22,-31,18,11,'#F2E5B8','opacity=".7"')+(mud==='bottom'?P('M-65 23 Q-39 -7 -8 26 Q18 5 67 27 Q46 81 -4 69 Q-49 72 -65 23Z','#AE926F'):mud==='spread'?P('M-66 18 Q-47 -34 -13 -14 Q13 9 47 -18 Q78 10 64 36 Q37 79 -10 68 Q-55 65 -66 18Z','#AE926F')+E(0,11,10,9,'#A38665'):mud==='top'?P('M-64 -27 Q-40 -78 0 -70 Q55 -64 66 -26 Q45 3 14 -20 Q-18 10 -64 -27Z','#B79F7B'):mud==='small'?P('M44 7 Q69 -3 70 19 Q65 45 45 44 Q35 23 44 7Z','#B39A75'):'')+E(-24,-8,5,6,ink)+E(24,-8,5,6,ink)+E(0,11,6,5,mud==='spread'?'#8A7156':'#AB9C73')+P('M-15 28 Q0 39 15 28','none','#8C876A',3),tilt);}
function toyShop(){return interior()+R(54,352,262,196,'#B7B69B',8)+R(69,370,231,61,'#D4CEAC',4)+R(69,452,231,68,'#D4CEAC',4)+[113,183,253].map((x,j)=>G(x,412,.40,book(0,0,.8)+E(0,-19,17,17,['#C5AB98','#A8B6A0','#B5B0C0'][j]))).join('')+G(162,501,.52,R(-52,-31,105,30,'#AF9B74',6)+E(-28,8,14,14,'#899D8D')+E(28,8,14,14,'#899D8D'));}
function yardBall(){return outdoor()+R(702,452,244,168,'#B5A27B',8)+P('M683 450 L751 408 L951 408 L968 450Z','#C2AE86')+R(700,454,246,19,'#D0B98F',4)+[735,791,847,903].map((x,j)=>flower(x,406-j%2*34,.66,['#D0AD9C','#E0C88F'][j%2])).join('')+E(698,705,179,52,'#A78E6B');}
function washTub(x,y,s=1,mud='spread',tilt=0){return G(x,y,s,P('M-111 -17 L111 -17 L96 65 Q0 102 -96 65Z','#BBA37C')+E(0,-17,112,36,'#DAC49C')+E(0,-20,99,28,'#A9C6C1')+moonBall(0,-61,1,mud,tilt)+P('M-109 -10 Q0 42 109 -10 L96 65 Q0 102 -96 65Z','#BBA37C')+P('M-106 -9 Q0 43 106 -9','none','#D7C39D',9)+P('M-88 -4 Q0 27 88 -4','none','#BDD8CB',5));}
function muddyMoonScene(i,cover){
 if(cover)return interior()+kid('杏尾',323,752,1.38,'reach')+washTub(699,666,1.32,'small')+P('M497 591 Q562 574 616 583','none','#CC9B72',19)+R(588,568,58,37,'#D9DDD0',10)+E(764,712,5,8,'#B8CEBF');
 return [
 ()=>toyShop()+kid('杏尾',294,750,1.29,'hold')+kid('獾店主',787,750,1.38,'hold')+desk(589,682,1.23)+E(580,626,106,30,'#C4ADBA')+moonBall(580,559,1.10),
 ()=>yardBall()+kid('杏尾',325,751,1.31,'low')+moonBall(700,663,1.18,'bottom')+P('M545 616 Q607 585 624 630','none','#C2CBAA',5),
 ()=>yardBall()+kid('杏尾',324,751,1.31,'reach')+moonBall(689,652,1.20,'spread')+P('M489 593 L595 613','none','#CD9B72',19)+R(568,602,69,45,'#D7D7C4',9)+P('M577 617 L621 628','none','#AC9270',5),
 ()=>interior()+kid('杏尾',319,752,1.33,'reach')+washTub(692,666,1.31,'spread',-17)+P('M487 591 Q548 539 644 546','none','#CD9B72',20)+E(546,525,7,13,'#ADC9C3')+E(473,527,6,10,'#ADC9C3')+E(772,533,6,10,'#ADC9C3'),
 ()=>interior()+kid('杏尾',322,752,1.33,'reach')+washTub(693,666,1.31,'top')+P('M490 590 Q553 570 632 573','none','#CD9B72',19)+P('M772 609 Q804 633 790 653','none','#C2D5C4',5)+R(818,724,65,37,'#D5DAC9',9),
 ()=>interior()+kid('杏尾',321,752,1.33,'reach')+washTub(693,666,1.31,'small')+P('M488 592 Q551 579 622 594','none','#CD9B72',18)+R(593,579,58,40,'#D9DDD0',10)+E(725,677,6,8,'#B3CDC2'),
 ()=>toyShop()+kid('杏尾',312,751,1.28,'reach')+kid('獾店主',800,750,1.36,'hold')+desk(574,681,1.20)+moonBall(582,588,.91)+R(546,651,77,34,'#D9DFCE',9)+P('M713 589 L650 581','none','#A4A99A',19),
 ()=>toyShop()+kid('獾店主',789,749,1.30,'hold')+desk(580,682,1.26)+E(578,630,112,29,'#C5AFBC')+moonBall(578,561,1.11)+kid('杏尾',275,752,1.26,'wave')+G(154,173,.64,line(0,-77,0,-27,'#B3A177',4)+P('M-25 0 Q-25 -48 0 -52 Q25 -48 25 0Z','#C4B384')+E(0,5,29,9,'#A59670'))
 ][i]();
}
function stoneFriend(x,y,s=1,open=true,gold=false){return G(x,y,s,E(0,0,46,39,'#C7CEC2')+E(-15,-7,4,5,ink)+E(15,-7,4,5,ink)+(open?E(0,14,9,11,gold?'#E1C173':'#7D8F84'):P('M-10 15 Q0 21 10 15','none','#7D8F84',3)));}
function dawnHill(stage=0){const cs=['#526B7A','#657F87','#7E989A','#ACB6AA','#CCC8AD','#D9CCAD','#E1D0AE'];return R(0,0,1000,800,cs[Math.min(stage,6)],0)+P('M0 398 L164 307 L327 382 L499 287 L657 381 L813 319 L1000 392 L1000 800 L0 800Z',stage>=5?'#9EAC97':'#78958D')+(stage>=3?P('M0 398 L164 307 L327 382 L499 287 L657 381 L813 319 L1000 392','none',stage===3?'#DFDFCD':stage===4?'#D8B8AF':'#E9D19B',stage===3?5:12):'')+(stage>=5?P('M659 353 Q704 304 749 344 L746 359Z','#F0D99F'):'')+P('M0 581 Q478 452 1000 600 L1000 800 L0 800Z',stage>=5?'#ABB98D':'#91AA8D')+[85,169,813,921].map((x,j)=>grass(x,732-j%2*53,.64,'#A1B58D')).join('')+(stage<2?[146,273,651,819].map((x,j)=>star(x,139+j%2*67,.30,'#CEDAC8')).join(''):'');}
function foldedScarf(x,y,s=1,high=false){return G(x,y,s,R(-79,high?-54:-24,158,high?66:36,'#D4A27B',13)+P(high?'M-69 -29 Q0 -15 69 -29 M-66 -7 Q0 6 66 -7':'M-68 -7 Q0 7 68 -7','none','#E6BF94',5)+[-50,-28,-6,16,38,60].map(xx=>line(xx,12,xx-3,28,'#CE9A76',5)).join(''));}
function dawnWaitingScene(i,cover){
 const seat=(scarf=true)=>stool(379,665,.92)+sitKid(scarf?'栗绵围':'栗绵',379,664,1.20,'hold');
 if(cover)return dawnHill(5)+seat(false)+foldedScarf(649,714,1.15,true)+stoneFriend(649,634,1.19,true,true)+glow(667,621,99);
 return [
 ()=>interior()+kid('栗绵围',344,751,1.34,'point')+stoneFriend(780,379,.95)+R(689,109,198,134,'#CBD3BF',4)+P('M892 95 L928 95 L928 410 L892 410Z','#B5B6A0'),
 ()=>dawnHill()+seat()+stoneFriend(378,641,.82)+bag(577,744,.91)+E(298,713,8,6,'#9ABAB1'),
 ()=>dawnHill()+seat()+stoneFriend(378,641,.82)+[535,557,579,601,623].map(x=>E(x,728,5,5,'#CDD4B7')).join('')+[535,557,579,601,623].map(x=>E(x,748,5,5,'#CDD4B7')).join('')+bag(719,745,.78),
 ()=>dawnHill(1)+stool(379,665,.92)+sitKid('栗绵围',379,664,1.2,'think')+stoneFriend(377,643,.82,false)+P('M350 486 Q364 472 382 486','none','#A1A896',14)+bag(611,744,.88),
 ()=>dawnHill(2)+stool(379,665,.92)+sitKid('栗绵',379,664,1.20,'low')+foldedScarf(650,736,1.06)+stoneFriend(651,695,.94,false)+grass(650,751,1.30,'#9BB18D')+bag(799,744,.78),
 ()=>dawnHill(3)+seat(false)+foldedScarf(650,731,1.10,true)+stoneFriend(651,656,1.05)+grass(650,751,1.30,'#9BB18D')+bag(799,745,.78),
 ()=>dawnHill(5)+seat(false)+foldedScarf(650,731,1.10,true)+stoneFriend(651,656,1.05,true,true)+grass(650,751,1.30,'#9BB18D')+glow(641,639,78)+bag(799,745,.78),
 ()=>interior()+kid('栗绵',347,751,1.33,'wave')+bag(534,740,.80)+P('M695 298 Q790 264 883 299 L883 406 L695 406Z','#BED0B3')+foldedScarf(780,404,.68)+stoneFriend(780,362,.83)
 ][i]();
}
const scenes={'expansion-0089':fairCakeScene,'expansion-0090':rememberedFloorScene,'expansion-0091':coolingSheepScene,'expansion-0092':snowSkirtsScene,'expansion-0093':redFlowerPlaceScene,'expansion-0094':tailHugScene,'expansion-0095':muddyMoonScene,'expansion-0096':dawnWaitingScene};
export function thirdYoungLastArtwork(story,index,cover=false){
 const scene=scenes[story?.id];if(!scene)throw Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw Error('Expected eight pages');
 if(!Number.isInteger(index)||index<0||index>=8)throw Error('Page index must be an integer from 0 to 7');
 return svg(scene(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

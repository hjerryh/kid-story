// Eight explicit, independent eight-page storyboards for expansion-0121 through 0128.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
弯弯:['elf','#DDC6A6','#E6CD87','dress',null,'fairy'],
麦扣卧:['badger','#A9A696','#DDC184','overall',null,'button'],麦扣背:['badger','#A9A696','#DDC184','overall',null,'woodbag'],麦扣:['badger','#A9A696','#DDC184','overall',null,'button'],风婆婆:['human','#DCC9AF','#BBB1CB','dress',null,'silver'],
沙芽卧:['human','#E0C2A2','#E6D196','shirt',null,'curlflower'],沙芽:['human','#E0C2A2','#E6D196','shirt',null,'curlflower'],
米丘:['badger','#AAA38F','#DDC184','overall',null,'brownbag'],米丘赤:['badger','#AAA38F','#DDC184','overall',null,'barebag'],
麦绒卧:['mouse','#C2A584','#E3C98A','overall'],麦绒:['mouse','#C2A584','#E3C98A','overall'],蓬月:['sheep','#E8E4D1','#BEB0D0','dress'],栗丁:['hedgehog','#AB8965','#9CB58C','vest'],
麦沙:['fennec','#DBC290','#A3C6D2','vest',null,'whitecap'],杏团:['squirrel','#AC855F','#E5CC8A','overall']};
function arm(x,y,dx,dy,c,w=22){return P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.55-9} ${x+dx} ${y+dy}`,'none',c,w);}
function kid(name,x,y,s=1,pose='stand',flip=false,extras=''){
 const cfg=C[name];if(!cfg)throw Error(`Unknown character ${name}`);const [t,f,cloth,kind,scarf,detail]=cfg;
 let a=name.endsWith('卧')?'':E(0,0,81,12,'#53675A','opacity=".12"');
 if(t==='hedgehog')a+=P('M-73 -161 L-97 -195 L-78 -209 L-105 -233 L-79 -244 L-90 -278 L-61 -274 L-64 -308 L-35 -296 L-15 -323 L4 -302 L32 -319 L41 -289 L72 -300 L68 -270 L96 -273 L82 -241 L108 -222 L83 -207 L100 -177 L72 -162Z','#9A8668');
 if(['squirrel','chipmunk'].includes(t)&&!['蓬蓬围','蓬蓬卧'].includes(name))a+=P('M44 -48 Q145 -77 121 -204 Q102 -250 64 -227 Q21 -202 68 -160','none',f,53);
 if(t==='chipmunk')a+=[0,1,2].map(j=>P(`M${70+j*8} -203 Q${89+j*6} -151 ${70+j*8} -87`,'none','#665C48',3)).join('');
 if(['fox','fennec'].includes(t))a+=P('M39 -57 Q139 -36 137 -133 Q93 -144 52 -101Z',f)+P('M137 -133 Q146 -90 123 -67 L102 -103Z','#EDEBDD');
 if(['mouse','jerboa','monster'].includes(t)&&!name.endsWith('卧'))a+=P(t==='monster'?'M44 -50 Q103 -35 101 -82 Q91 -106 78 -87':'M42 -40 Q124 -10 132 -76','none',f,t==='monster'?14:8)+(t==='jerboa'?E(133,-79,12,10,cream):'');
 if(t==='otter')a+=P('M45 -49 Q128 -64 107 -123 Q139 -45 74 -8Z',f);
 if(t==='sheep')a+=[[-48,-155],[0,-167],[48,-153],[-52,-85],[0,-75],[51,-86]].map(([xx,yy])=>E(xx,yy,39,42,f)).join('');
 a+=(name.endsWith('卧')?'':E(-30,-10,30,17,detail==='boots'||detail==='shoes'?'#967557':t==='duck'?'#D6A35B':f)+E(30,-10,30,17,detail==='boots'||detail==='shoes'?'#967557':t==='duck'?'#D6A35B':f))+E(0,-106,62,92,f);
 if(detail==='greenshoes'||detail==='paperdress'||detail==='paperdance')a+=P('M-57 -96 L57 -96 L70 -25 L-70 -25Z','#AA8E6F');
 if(['shirt','vest','apron','overall','coat'].includes(kind))a+=P(`M-48 -181 L48 -181 L61 ${kind==='coat'?-26:-58} Q0 -37 -61 ${kind==='coat'?-26:-58}Z`,cloth);
 if(t==='jerboa')a+=E(0,-105,43,68,'#EAE2CB');
 if(kind==='dress')a+=P('M-48 -180 L48 -180 L78 -27 Q0 -5 -78 -27Z',cloth);
 if(kind==='overall'||kind==='dress')a+=R(-46,-188,16,58,cloth,4)+R(30,-188,16,58,cloth,4)+E(-37,-156,4,4,'#EAD6A5')+E(38,-156,4,4,'#EAD6A5');
 if(kind==='apron'||detail==='shoes')a+=R(-23,-109,46,36,'#D6C990',7);
 if(kind==='shawl')a+=P('M-58 -181 L0 -157 L58 -181 L72 -106 L0 -126 L-72 -106Z',cloth);
 if(detail==='curlflower')a+=R(-47,-65,34,59,cloth,9)+R(13,-65,34,59,cloth,9);
 if(detail==='roundpocket')a+=E(0,-108,25,23,'#EFE0B9');
 if(detail==='whitebutton')a+=E(0,-149,8,8,'#F0EDDA');
 if(detail==='button')a+=E(0,-149,7,7,'#E1C775');
 if(detail==='moon')a+=E(0,-116,18,18,cream)+E(8,-122,16,17,cloth);
 if(['bear','mouse','jerboa','monster'].includes(t))a+=E(-49,-266,t==='mouse'?29:23,t==='mouse'?32:t==='jerboa'?43:24,f)+E(49,-266,t==='mouse'?29:23,t==='mouse'?32:t==='jerboa'?43:24,f)+(t==='mouse'?E(-49,-266,18,21,'#D6B5AE')+E(49,-266,18,21,'#D6B5AE'):'');
 if(['fox','fennec','squirrel','chipmunk','badger'].includes(t))a+=P(`M-49 -244 L${t==='fennec'?-99:-69} ${t==='fennec'?-366:-309} Q-21 -300 -15 -263Z`,f)+P(`M49 -244 L${t==='fennec'?99:69} ${t==='fennec'?-366:-309} Q21 -300 15 -263Z`,f)+(t==='fennec'?P('M-46 -268 L-82 -344 L-27 -278Z','#D9B8AD')+P('M46 -268 L82 -344 L27 -278Z','#D9B8AD'):'');
 if(t==='rabbit')a+=E(-28,-295,19,65,f,'transform="rotate(-12 -28 -295)"')+E(26,-297,18,66,f,'transform="rotate(9 26 -297)"')+E(-28,-302,7,40,'#D3B7B1')+E(26,-305,7,40,'#D3B7B1')+(detail==='whiteEar'?E(-40,-345,13,14,'#F1EFE1'):'');
 if(t==='sheep')a+=E(-68,-236,20,23,f)+E(68,-236,20,23,f)+[-43,-14,16,44].map(xx=>E(xx,-269,24,24,f)).join('');
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
 const q=poses[pose]||poses.stand,af=t==='mole'?'#CBA7A0':f;if(pose!=='back')a+=arm(-43,-154,...q[0],af,t==='mole'?26:22)+arm(43,-154,...q[1],af,t==='mole'?26:22);a+=extras;
 if(detail==='redbag')a+=line(-48,-178,50,-70,'#BC8174',8)+R(31,-112,59,61,'#BF887B',12);
 if(detail==='greenbag'||detail==='orangebag')a+=line(-48,-178,50,-70,detail==='greenbag'?'#A2B799':'#C79F77',8)+R(31,-112,59,61,detail==='greenbag'?'#B5C8A5':'#D2A374',12);
 if(detail==='fairy')a+=E(-30,-10,30,17,'#89A477')+E(30,-10,30,17,'#89A477')+line(-44,-175,51,-69,'#9B805D',7)+R(30,-111,59,62,'#AC8D67',11);
 if(['woodbag','brownbag','barebag'].includes(detail))a+=line(-46,-177,51,-67,detail==='woodbag'?'#90A480':'#9E845E',7)+R(29,-105,59,60,detail==='woodbag'?'#A9BE98':'#B69B74',11)+(detail==='woodbag'?E(0,-149,8,8,'#9E8259'):'')+(detail==='brownbag'?E(-30,-10,31,17,'#8E785B')+E(30,-10,31,17,'#8E785B'):'');
 if(detail==='silver'||detail==='curlflower'){
  const hair=detail==='silver'?'#DBDED6':'#8B7157';a+=[[-56,-248],[-45,-277],[-19,-289],[11,-291],[38,-278],[56,-249]].map(([xx,yy])=>E(xx,yy,22,23,hair)).join('');
  if(detail==='silver')a+=line(-47,-161,53,-70,'#9A8D92',6)+R(27,-107,62,71,'#C8BCAC',13);
  else a+=flower(-46,-268,.48,'#F3EDDA');
 }
 if(detail==='whitecap')a+=P('M-99 -366 L-88 -321 L-72 -340Z','#927B5F')+P('M99 -366 L88 -321 L72 -340Z','#927B5F')+P('M-64 -268 Q-63 -314 0 -312 Q62 -313 64 -268Z','#EEEBDC')+R(-69,-274,138,17,'#E4E3D2',7)+P('M42 -262 Q55 -209 88 -200','none','#EEEBDC',7);
 if(detail==='feathersleeve')a+=feather(74,-109,.54,25);
 if(detail==='featherpocket')a+=R(20,-101,32,30,'#B8C69A',5)+feather(36,-102,.48,-12);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function sitKid(name,x,y,s=1,pose='hold',extras=''){
 const f=C[name][1],shoe=['greenshoes','paperdress','paperdance','fairy'].includes(C[name][5])?'#88A579':f,id=`seat-${x}-${y}-${Math.round(s*100)}`;
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
function fiveStar(x,y,s=1,c='#DBC477',faceOn=false){return G(x,y,s,P('M0 -54 L16 -18 L55 -17 L25 10 L35 50 L0 29 L-35 50 L-25 10 L-55 -17 L-16 -18Z',c)+(faceOn?face(0,-5,.55):''));}
function maple(x,y,s=1,c='#D3B475',r=0){return G(x,y,s,P('M0 33 L-53 1 L-35 -12 L-68 -47 L-28 -44 L-26 -85 L0 -60 L28 -87 L30 -43 L70 -48 L39 -10 L55 5Z',c)+line(0,31,0,-55,'#A39265',3)+line(0,31,2,56,'#A39265',4),r);}
function leafMaze(dusk=false,starsOn=false){return R(0,0,1000,800,dusk?'#AAA8BB':'#D9DEBF',0)+(starsOn?[star(340,93,.48),star(587,136,.41),star(766,89,.55),star(865,215,.42)].join(''):E(783,143,57,57,dusk?'#DCD5B4':'#EADCA6'))+P('M0 423 Q271 333 493 467 Q740 344 1000 440 L1000 800 L0 800Z',dusk?'#A5AE91':'#BBC595')+maple(107,478,3.4,'#B6AF77',-14)+maple(910,469,3.8,'#BFB27B',11)+maple(101,699,2.3,'#C7B17C',-53)+maple(927,714,2.4,'#C2A774',45)+P('M258 800 Q291 582 485 496 Q554 471 584 499 Q413 603 473 800Z','#D5C496')+maple(409,724,2.0,'#DFC37D',-79);}
function nightFlower(x=674,y=710,s=1,stage=0){return G(x,y,s,P('M0 0 Q-19 -155 3 -282','none','#899F79',12)+leaf(0,-119,.85,'#A6B68E',-64)+leaf(1,-192,.78,'#9AB087',70)+(stage===0?P('M0 -270 Q-80 -331 0 -432 Q80 -331 0 -270Z','#EEEEDA')+P('M0 -422 Q-29 -352 0 -282','none','#D4D9C2',4):stage===1?P('M0 -276 Q-92 -303 -91 -379 Q-49 -366 -8 -414 Q22 -369 88 -381 Q92 -314 0 -276Z','#EEEEDE')+P('M0 -403 Q-25 -341 0 -288 M4 -395 Q34 -334 5 -286','none','#D2D7C3',4):G(0,-324,1,[-60,0,60,120,180,240].map(r=>G(0,0,1,E(0,-61,43,81,'#F2F0DD'),r)).join('')+E(0,0,39,35,'#E6D592')+face(0,-4,.65))));}
function flowerDrawing(x,y,open=false,s=1){return paper(x,y,s,line(0,42,0,-10,'#94A480',4)+(open?[-72,0,72,144,216].map(r=>G(0,-25,1,E(0,-17,13,23,'#E5E3C8','stroke="#B7BCA5" stroke-width="1"'),r)).join('')+E(0,-25,11,10,'#E2CA7E'):P('M0 -1 Q-25 -22 0 -56 Q25 -22 0 -1Z','#EAE8D4','#B8BCA5',2))+leaf(0,24,.31,'#A1B28C',64));}
function flowerOpeningScene(i,cover){
 if(cover)return leafMaze(true,true)+nightFlower(679,710,1,2)+kid('弯弯',343,742,1.15,'wide')+flowerDrawing(497,714,true,.53);
 return [
 ()=>leafMaze()+nightFlower()+kid('弯弯',325,739,1.10,'up')+maple(284,358,1.03,'#D8C189',-31),
 ()=>leafMaze()+nightFlower()+sitKid('弯弯',461,664,1.02,'think')+P('M431 470 Q459 438 496 424','none','#BBC4A0',3),
 ()=>leafMaze()+nightFlower()+kid('弯弯',434,739,1.10,'think')+P('M490 438 Q518 421 543 433 M490 463 Q520 443 542 456','none','#C3CAAE',3),
 ()=>leafMaze()+nightFlower()+sitKid('弯弯',351,675,1.05,'hold')+flowerDrawing(378,641,false,.52)+line(419,605,433,634,'#B28D65',7)+P('M0 146 L316 398 L201 601 L0 432Z','#F2E5B7','',0,'opacity=".15"'),
 ()=>leafMaze(true)+nightFlower(674,710,1,1)+sitKid('弯弯',350,674,1.05,'hold')+flowerDrawing(468,736,false,.45)+line(537,731,569,742,'#B28D65',7),
 ()=>leafMaze(true)+nightFlower(674,710,1,2)+kid('弯弯',347,742,1.15,'wide')+P('M592 418 Q532 409 514 458','none','#D9DCC3',4),
 ()=>leafMaze(true,true)+nightFlower(674,710,1,2)+sitKid('弯弯',346,675,1.08,'hold')+flowerDrawing(467,709,false,.49)+flowerDrawing(591,716,true,.49)+line(392,642,541,682,'#DDC6A6',16)+line(544,682,559,703,'#E0C67D',8),
 ()=>leafMaze(true,true)+nightFlower(674,710,1,2)+sitKid('弯弯',351,674,1.08,'hold')+G(467,741,.47,R(-95,-60,190,120,'#BCB892',5)+line(-72,-45,73,-45,'#D6CDA9',3))
 ][i]();
}
function shell(x,y,s=1,open=false,color='#EAE8D6',large=false){return G(x,y,s,(open?G(0,-27,1,P('M-57 0 Q-63 -70 0 -82 Q63 -70 57 0Z',color)+[-35,-18,0,18,35].map(xx=>P(`M0 -3 Q${xx} -38 ${xx} -58`,'none','#B7BFAF',2)).join(''),-8):'')+P('M-61 -19 Q-51 32 0 36 Q51 32 61 -19Z',color)+E(0,-18,60,19,open?'#B6C9C4':color)+[-38,-19,0,19,38].map(xx=>P(`M${xx} -4 Q${xx*.8} 14 0 30`,'none','#CAD0BA',2)).join('')+(large?spiral(0,3,.57):''));}
function breeze(x,y,s=1,strong=false){return G(x,y,s,[0,22,44].map((yy,j)=>P(`M0 ${yy} Q${strong?77:42} ${yy-17} ${strong?177:98} ${yy+5} Q${strong?229:133} ${yy+16} ${strong?277:159} ${yy-5}`,'none',strong?'#CADDDD':'#D3DFCB',strong?6:3)).join(''));}
function windMarket(){return R(0,0,1000,800,'#B9D2D9',0)+cloud(144,186,.86,'#E8EDDF')+cloud(842,186,.93,'#EDF0E3')+P('M0 571 Q119 530 245 566 Q455 512 627 566 Q838 526 1000 570 L1000 800 L0 800Z','#E5E9D7')+stall(590,597,1.38,'#C3B4CD')+R(386,299,29,263,'#D7CAD9',8)+R(761,299,31,263,'#D7CAD9',8)+shell(489,559,.50,false,'#D3C3B3',true)+shell(624,562,.38,false,'#D3D6BD')+shell(724,563,.27,false);}
function greenBag(x,y,s=1,flipped=false){return G(x,y,s,R(-52,-57,104,83,'#ADC095',16)+P('M-37 -53 Q0 -102 37 -53','none','#8EA47A',9)+(flipped?P('M-52 -55 Q-11 -113 55 -55 Q9 -68 -52 -55Z','#D3D7B1'):E(0,-56,47,11,'#94A880')));}
function bedsideWind(sleep=false){let a=interior(sleep)+R(216,486,21,255,'#AD8F68',9)+R(815,532,21,209,'#AD8F68',9)+R(237,544,577,155,'#D8C69E',22)+E(345,569,87,63,'#EEE3C7');
 a+=G(600,577,1,kid('麦扣卧',0,0,.94,sleep?'sleep':'hold'),-90)+P('M438 546 Q622 507 815 555 L815 696 L438 696Z','#B7C59F')+R(230,696,605,20,'#B59B74',7)+desk(875,529,.40)+shell(862,499,.43,!sleep)+pinwheel(911,436,.37,sleep?0:24);
 return a;
}
function gentleWindScene(i,cover){
 if(cover)return windMarket()+kid('麦扣',323,748,1.12,'hold')+kid('风婆婆',783,743,1.04,'hold')+shell(566,566,.67,true)+pinwheel(447,461,.56,30)+breeze(589,489,.55)+greenBag(678,742,.64);
 return [
 ()=>interior()+R(213,551,479,114,'#D9C39B',18)+R(211,665,481,21,'#B59A75',6)+R(217,685,19,66,'#AD9069',5)+R(663,685,19,66,'#AD9069',5)+sitKid('麦扣',392,628,1.12,'hold')+pinwheel(510,491,.48,0)+P('M438 552 Q478 570 510 550','none','#A9A696',16)+greenBag(676,728,.72)+P('M605 300 L657 300 M605 324 L657 324','none','#D4DBC6',3),
 ()=>windMarket()+kid('麦扣背',285,748,1.18,'point')+kid('风婆婆',817,746,1.08,'reach',true)+shell(575,556,1.0,true,'#D6C6B6',true)+breeze(602,453,.63,true)+P('M761 297 Q815 381 782 492 L752 489 L761 297Z','#D9CBD9'),
 ()=>windMarket()+kid('麦扣背',276,747,1.18,'wide')+kid('风婆婆',811,748,1.08,'reach',true)+shell(571,556,1,true,'#D6C6B6',true)+G(545,466,1,breeze(0,0,.89,true),180)+P('M239 547 L197 536 M301 547 L267 530','none','#E6D5AD',7)+E(252,501,15,10,'#BDB29C')+E(302,501,15,10,'#BDB29C'),
 ()=>windMarket()+kid('麦扣',290,748,1.13,'back')+kid('风婆婆',815,747,1.03,'hold')+shell(570,557,.75,true,'#D8DBC1')+greenBag(435,577,.65,true)+pinwheel(430,513,.35,12)+breeze(594,491,.50,true)+P('M241 574 Q276 612 319 603 M339 574 Q382 584 410 558','none','#A9A696',17),
 ()=>windMarket()+kid('麦扣',304,748,1.16,'point')+kid('风婆婆',812,744,1.03,'hold')+shell(667,557,.45,true)+P('M626 556 Q616 520 644 526','none','#C5B699',3)+greenBag(438,586,.61)+pinwheel(415,514,.45,0),
 ()=>windMarket()+kid('麦扣',331,747,1.13,'back')+kid('风婆婆',809,746,1.03,'hold')+shell(596,556,.48,true)+pinwheel(505,490,.51,34)+G(577,480,1,breeze(0,0,.46),180)+greenBag(435,625,.65)+P('M282 573 Q332 626 405 624 M380 573 Q456 575 505 548','none','#A9A696',17),
 ()=>windMarket()+kid('麦扣',361,748,1.14,'back')+kid('风婆婆',807,744,1.04,'hold')+greenBag(481,624,.70)+shell(467,581,.42,false)+pinwheel(530,529,.40,0)+P('M312 572 Q363 620 414 625 M410 572 Q438 615 461 625','none','#A9A696',17)+E(577,568,13,8,'#DEC784')+E(610,570,13,8,'#DEC784'),
 ()=>bedsideWind(true)+greenBag(190,733,.59)
 ][i]();
}
function oasisRoom(){return R(0,0,1000,800,'#DCD3B3',0)+R(0,661,1000,139,'#C7B18A',0)+line(0,661,1000,661,'#B69E78',6)+R(699,102,210,311,'#B9B496',98)+R(715,119,179,279,'#C8D8CC',84)+P('M716 306 Q794 244 893 291 L893 396 L716 396Z','#D6C68F')+P('M807 374 L821 210','none','#9C9870',9)+[[-61,-36],[-46,-65],[37,-63],[65,-27]].map(([dx,dy])=>P(`M820 211 Q${820+dx*.5} ${211+dy} ${820+dx} ${220+dy}`,'none','#93AD88',14)).join('')+R(680,407,247,21,'#BDA27A',5)+R(72,244,295,19,'#B6A27C',5)+cup(122,242,.69)+bowl(236,224,.70,'#D6B685');}
function camel(x,y,s=1,r=0){return G(x,y,s,P('M-62 22 L-63 -17 Q-63 -43 -42 -43 Q-23 -44 -20 -17 Q-13 -43 7 -43 Q29 -43 33 -15 L44 -16 L48 -60 Q48 -78 63 -78 L81 -66 L76 -48 L64 -49 L68 24Z','#EEE7D3')+R(-51,11,14,32,'#E3DBC5',6)+R(30,11,14,32,'#E3DBC5',6)+E(60,-77,7,13,'#EAE1C9')+P('M59 -62 L65 -58 M59 -58 L65 -62','none','#7E9FAC',2)+P('M-63 0 Q-85 -13 -77 -27','none','#E3DBC5',7),r);}
function seedBed(long=true){return (long?[R(273,602,22,121,'#9C805B',6),R(715,602,22,121,'#9C805B',6),R(244,646,24,111,'#9C805B',6),R(848,646,24,111,'#9C805B',6)].join(''):P('M262 628 Q473 831 729 628 Q476 728 262 628Z','#A68A64'))+P(long?'M231 533 Q212 504 213 468 Q243 463 257 516 L848 516 Q862 473 888 477 L877 665 Q555 710 243 666Z':'M248 531 Q224 493 228 466 Q261 459 275 515 L690 515 Q706 478 732 481 L725 658 Q477 713 260 654Z','#B2946B')+R(263,528,long?585:426,109,'#E4D5B2',33)+E(342,558,78,54,'#F1E7CB')+leaf(232,499,.7,'#99AE7F',-42)+leaf(235,499,.65,'#B1BF8F',53)+P('M221 534 Q233 549 247 533','none','#796C53',3);}
function bedGirl(sleep=false,cramped=false){return G(591,563,1,kid('沙芽卧',0,0,.98,sleep?'sleep':'hold'),-90)+P(cramped?'M444 533 Q511 491 548 524 Q579 478 624 534 L691 554 L691 648 L444 648Z':'M446 533 Q622 508 846 552 L846 649 L446 649Z','#C5CBA5');}
function growingBedScene(i,cover){
 if(cover)return oasisRoom()+seedBed()+bedGirl()+camel(496,552,.79,-9)+line(451,563,477,557,'#DDC2A0',17)+line(453,587,496,577,'#DDC2A0',17);
 return [
 ()=>oasisRoom()+seedBed(false)+bedGirl(false,true)+camel(482,555,.73,-12)+P('M307 739 Q483 784 674 738','none','#C1B18C',4),
 ()=>oasisRoom()+seedBed()+sitKid('沙芽',535,581,1.08,'point')+camel(539,541,.68),
 ()=>oasisRoom()+seedBed()+sitKid('沙芽',523,584,1.08,'hold')+camel(520,540,.69,-12)+P('M433 360 Q463 345 484 364 M561 360 Q590 345 613 364','none','#C3BEA1',4),
 ()=>oasisRoom()+seedBed()+sitKid('沙芽',517,586,1.08,'low')+camel(521,541,.70)+E(234,538,12,15,'#796C53'),
 ()=>oasisRoom()+seedBed()+sitKid('沙芽',516,586,1.08,'hold')+camel(514,481,.83,-10)+P('M431 524 Q412 506 426 486 M608 482 Q623 503 609 524','none','#BCBCA1',3),
 ()=>oasisRoom()+seedBed()+bedGirl()+camel(496,552,.79,-9)+line(451,563,477,557,'#DDC2A0',17)+line(453,587,496,577,'#DDC2A0',17)+P('M507 484 Q542 488 552 508','none','#B8BCA2',3),
 ()=>oasisRoom()+seedBed()+bedGirl(true)+camel(468,551,.80,-11)+line(449,564,487,563,'#DDC2A0',17)+line(450,584,496,579,'#DDC2A0',17),
 ()=>oasisRoom()+seedBed()+sitKid('沙芽',570,585,1.08,'up')+camel(355,550,.70,-10)+leaf(235,498,.75,'#A2B783',-65)+leaf(235,498,.70,'#B4C18D',70)
 ][i]();
}
function cave(){return R(0,0,1000,800,'#9AA997',0)+P('M0 800 L0 0 L1000 0 L1000 800 L884 800 L869 344 Q846 113 564 123 Q280 131 198 368 L167 800Z','#7B8C7D')+P('M180 638 Q512 558 881 651 L900 800 L164 800Z','#C2BC9B')+[205,247,315,391,488,620,729,812,863].map((x,j)=>leaf(x,228-j%3*28,.69+j%3*.11,'#9CAF81',j%2?32:-27)).join('')+rock(70,708,1.4,'#8C9D8A')+rock(929,721,1.3,'#91A08B');}
function stonePal(x,y,s=1,pose='stand'){return G(x,y,s,(pose==='step'?'':E(-37,2,27,24,'#AEB4A3'))+(pose==='foot'?'':E(37,2,27,24,'#AEB4A3'))+E(0,-98,85,111,'#B6BDAB')+arm(-67,-104,pose==='touch'?-73:pose==='rim'?30:-18,pose==='touch'?91:pose==='rim'?96:60,'#B6BDAB',27)+arm(67,-104,13,57,'#B6BDAB',27)+E(-25,-126,6,7,ink)+E(24,-126,6,7,ink)+P('M-13 -105 Q0 -92 14 -105','none',ink,3)+R(-61,-79,122,22,'#92B6C6',8)+P('M26 -62 L51 -62 L55 -29 L28 -36Z','#92B6C6')+grass(-7,-195,.68,'#8EA577')+(pose==='foot'?E(38,-29,29,28,'#C2C8B7'):pose==='step'?P('M-35 -33 Q-55 -25 -94 -24','none','#B6BDAB',25)+E(-96,-23,27,22,'#C2C8B7'):''));}
function footprint(x,y,s=1){return G(x,y,s,E(0,3,16,25,'#AA916D')+[-17,-6,6,17].map((xx,j)=>E(xx,-23-Math.sin(j)*4,5,6,'#AA916D')).join(''));}
function mudTray(x=505,y=691,s=1,marks='none'){return G(x,y,s,P('M-191 -54 L175 -54 L207 48 L-170 48Z','#AD8B60')+P('M-174 -44 L161 -44 L187 34 L-158 34Z','#C9AD85')+(marks==='two'?footprint(-66,-7,.73)+footprint(29,2,.73):marks==='deep'?footprint(-64,-8,.89)+footprint(31,1,.89):marks==='one'?E(110,-12,28,19,'#AB916C'):marks==='path'?footprint(-119,8,.72)+E(-59,-3,24,18,'#AB916C')+footprint(4,-11,.72)+E(68,-15,24,18,'#AB916C')+footprint(121,-22,.72):'')+P('M-171 36 L207 36 L207 55 L-171 55Z','#A98A62'));}
function shoes(){return E(189,746,29,16,'#8E785B')+E(223,719,28,16,'#8E785B');}
function footprintScene(i,cover){
 if(cover)return cave()+kid('米丘赤',315,747,1.08,'hold')+stonePal(738,706,1.22,'rim')+mudTray(504,687,1,'path')+G(738,706,1.22,arm(-67,-104,30,96,'#B6BDAB',27))+shoes();
 return [
 ()=>cave()+kid('米丘',305,745,1.13,'low')+stonePal(747,705,1.19)+mudTray()+line(358,629,401,650,'#AAA38F',17),
 ()=>cave()+kid('米丘赤',308,745,1.10,'reach',true)+stonePal(746,705,1.17,'touch')+mudTray(505,691,1,'two')+G(746,705,1.17,arm(-67,-104,-73,91,'#B6BDAB',27))+P('M511 675 Q547 654 582 674','none','#C9AD85',21)+shoes()+R(218,595,56,40,'#D9D9BD',8),
 ()=>cave()+kid('米丘赤',305,744,1.10,'low')+stonePal(745,703,1.17,'touch')+mudTray(505,691,1,'deep')+G(745,703,1.17,arm(-67,-104,-73,91,'#B6BDAB',27))+E(545,676,28,19,'#C9AD85')+E(729,749,39,23,'#C9AD85')+shoes(),
 ()=>cave()+sitKid('米丘赤',294,660,1.06,'hold')+stonePal(741,701,1.17,'step')+mudTray(505,691,1,'one')+G(741,701,1.17,P('M-35 -33 Q-55 -25 -94 -24','none','#B6BDAB',25)+E(-96,-23,27,22,'#C2C8B7'))+shoes(),
 ()=>cave()+sitKid('米丘赤',297,661,1.06,'point')+stonePal(741,704,1.17,'touch')+mudTray()+G(741,704,1.17,arm(-67,-104,-73,91,'#B6BDAB',27))+shoes(),
 ()=>cave()+kid('米丘赤',305,742,1.10,'point')+stonePal(739,697,1.19,'foot')+mudTray()+P('M363 556 Q428 584 443 654','none','#AAA38F',16)+shoes(),
 ()=>cave()+kid('米丘赤',302,740,1.11,'low')+stonePal(750,701,1.18,'rim')+mudTray(504,690,1,'path')+G(750,701,1.18,arm(-67,-104,30,96,'#B6BDAB',27))+shoes(),
 ()=>cave()+kid('米丘',330,746,1.14,'hold')+stonePal(755,707,1.15,'foot')+mudTray(387,612,.78,'path')+R(553,728,65,42,'#D5D6BA',9)
 ][i]();
}
function attic(night=false){return interior(night,'#D5C8AA')+P('M0 158 L500 0 L1000 158','none','#AA916D',24)+line(80,0,80,618,'#B9A27D',12)+line(487,0,487,615,'#B9A27D',12)+R(70,386,211,166,'#B8A580',8)+R(78,404,194,18,'#D0BA94',5)+book(167,416,.61)+R(103,505,146,17,'#D0BA94',5);}
function blueBlob(x,y,s=1,big=false){return G(x,y,s,P(big?'M-54 -8 Q-70 -35 -31 -42 Q-1 -62 29 -35 Q64 -40 67 -10 Q86 17 43 31 Q10 44 -19 30 Q-61 39 -62 12Z':'M-36 -6 Q-45 -28 -16 -32 Q9 -46 31 -26 Q53 -23 45 3 Q58 26 18 29 Q-12 34 -35 19Z','#83AFBE'))}
function curtainCloth(x=589,y=653,s=1,count=0,blobs=0,old=false){return G(x,y,s,P('M-186 -91 L173 -91 L210 51 L-159 51Z',old?'#D7CEAA':'#F1ECD7')+(blobs?blueBlob(-107,-35,.60)+(blobs>1?blueBlob(0,-24,.70,true):''):'')+[[91,-47],[-79,20],[49,22],[126,5],[-22,-67],[5,23]].slice(0,count).map(([xx,yy],j)=>fiveStar(xx,yy,.28,j%2?'#A7C2C5':'#80AABA')).join(''));}
function paintPlate(x,y,s=1){return G(x,y,s,E(0,0,64,20,'#C4CEBD')+E(0,-1,53,12,'#80ADBB')+P('M-56 0 Q0 24 56 0','none','#A8BAAD',5));}
function artTable(){return desk(594,688,1.30);}
function stampScene(i,cover){
 if(cover)return attic()+kid('麦绒',311,745,1.19,'hold')+artTable()+curtainCloth(591,666,1,4,2)+fiveStar(451,600,.83,'#84B0BF',true)+paintPlate(793,568,.66);
 return [
 ()=>attic()+kid('麦绒',308,744,1.20,'point')+artTable()+curtainCloth()+fiveStar(466,570,.83,'#DEC477',true)+paintPlate(779,571,.68),
 ()=>attic()+kid('麦绒',309,745,1.21,'back')+artTable()+curtainCloth(589,653,1,0,1)+paintPlate(752,567,.90)+fiveStar(482,605,.70,'#7EAABB',true)+P('M257 559 Q322 580 457 595 M361 559 Q421 579 499 602','none','#C2A584',18),
 ()=>attic()+kid('麦绒',308,745,1.20,'back')+artTable()+curtainCloth(589,653,1,0,2)+fiveStar(587,630,.78,'#7BAAB9',true)+P('M256 560 Q414 593 548 616 M360 560 Q438 644 560 642','none','#C2A584',18)+E(641,651,12,5,'#82ACBA')+paintPlate(791,570,.67),
 ()=>attic()+kid('麦绒',310,746,1.20,'back')+artTable()+curtainCloth(589,653,1,0,2)+paintPlate(522,575,.94)+fiveStar(522,477,.84,'#7BAAB9',true)+[[-15,533],[15,548],[0,565]].map(([dx,yy])=>E(522+dx,yy,4,7,'#7AA7B8')).join('')+P('M258 560 Q260 605 270 635 M362 560 Q431 504 490 487','none','#C2A584',18),
 ()=>attic()+kid('麦绒',311,745,1.20,'back')+artTable()+curtainCloth(589,653,1,0,2)+paper(761,568,.48,R(-90,-64,180,128,'#D8CEAC',1)+fiveStar(0,0,.66,'#81ACBA'))+paintPlate(477,563,.69)+fiveStar(442,531,.67,'#7FAAB8',true)+P('M259 560 Q273 604 300 613 M363 560 Q397 531 422 536','none','#C2A584',17)+line(444,554,466,565,'#7FAAB8',4),
 ()=>attic()+kid('麦绒',380,744,1.20,'back')+artTable()+curtainCloth(589,653,1,3,2)+paper(789,565,.41,R(-90,-64,180,128,'#D8CEAC',1)+fiveStar(0,0,.66,'#81ACBA'))+paintPlate(462,563,.58)+fiveStar(600,552,.72,'#81ACBA',true)+P('M329 559 Q335 601 350 625 M432 559 Q500 576 578 570','none','#C2A584',18),
 ()=>attic()+kid('麦绒',310,744,1.20,'think')+artTable()+curtainCloth(589,653,1,6,2)+fiveStar(480,551,.74,'#84AFBB',true)+paintPlate(785,566,.65),
 ()=>attic(true)+R(224,534,410,154,'#D3BF98',23)+R(210,509,21,230,'#AE926C',7)+R(629,551,21,187,'#AE926C',7)+E(308,572,73,55,'#EEE4CA')+G(527,577,1,kid('麦绒卧',0,0,.95,'sleep'),-90)+P('M384 540 Q503 518 628 565 L628 688 L384 688Z','#B8C39B')+R(666,273,226,417,'#F1ECD7',6)+line(651,258,908,258,'#AB926C',9)+[685,730,775,820,865].map(x=>line(x,259,x,283,'#D5CBAA',4)).join('')+blueBlob(717,360,.47)+blueBlob(811,413,.49,true)+[[758,313],[851,348],[713,458],[817,504],[749,567],[857,622]].map(([x,y],j)=>fiveStar(x,y,.32,j%2?'#9EBEC2':'#80AABA')).join('')+desk(748,720,.48)+plate(748,699,.61)+fiveStar(748,685,.56,'#DEC477',true)
 ][i]();
}
function bubble(x,y,r=31,moon=false){return E(x,y,r,r,'#D3E4DD','fill-opacity=".25" stroke="#B8D5D7" stroke-width="3"')+P(`M${x-r*.59} ${y-r*.18} Q${x-r*.48} ${y-r*.65} ${x-r*.04} ${y-r*.71}`,'none','#ECF0DF',4)+(moon?E(x+2,y-3,r*.40,r*.40,'#EFE6BF')+E(x+r*.17,y-r*.18,r*.34,r*.34,'#BDCFC5'):'');}
function pop(x,y,s=1){return G(x,y,s,[0,60,120,180,240,300].map(r=>G(0,0,1,line(15,0,27,0,'#BCD5D3',3),r)).join(''));}
function kettle(x,y,s=1,rot=0){return G(x,y,s,P('M-43 -36 Q-91 -73 -92 -22 Q-83 2 -47 -13','none','#8EABB7',12)+P('M36 -39 Q72 -50 79 -83 L98 -87 Q102 -41 47 -7Z','#A9CBD1')+E(0,-11,57,49,'#A9CBD1')+E(0,-52,44,12,'#91B4C0')+E(0,-58,34,9,'#C2DADB')+E(0,-65,7,8,'#E8ECD8')+P('M-12 -59 Q-3 -68 10 -59 Q0 -61 -1 -55 Q-9 -54 -12 -59Z','#F1EEDA'),rot);}
function bubbleRoom(){return R(0,0,1000,800,'#DCD4BF',0)+R(0,628,1000,172,'#BFB295',0)+E(502,255,155,155,'#ADA991')+E(502,255,137,137,'#688592')+E(537,207,41,43,'#E8DEB3')+E(555,196,37,39,'#688592')+line(502,124,502,387,'#D1C0A1',8)+line(367,255,637,255,'#D1C0A1',8)+E(494,717,352,76,'#C6C7AA')+E(494,717,316,61,'none','stroke="#DCDAC0" stroke-width="4"');}
function chair(x=797,y=665,s=1){return G(x,y,s,R(-56,-131,112,81,'#BEA17A',7)+R(-49,-63,15,147,'#A9906B',5)+R(34,-63,15,147,'#A9906B',5)+R(-66,-17,132,22,'#D3B98E',6));}
function blocks(){return R(510,671,78,52,'#B2C5B9',4)+R(539,620,53,50,'#C8B38F',4)+P('M533 620 L566 575 L600 620Z','#B8A7BF')+R(595,687,48,36,'#C7B585',4);}
function bubbleTrainScene(i,cover){
 const sheep=(pose='hold')=>kid('蓬月',286,747,1.10,pose),hog=(pose='hold')=>kid('栗丁',773,745,1.02,pose,true);
 if(cover)return bubbleRoom()+chair()+blocks()+sheep()+hog('point')+kettle(338,606,.64,-16)+[[419,518],[479,492],[543,473],[609,480],[675,510]].map(([x,y])=>bubble(x,y,31)).join('')+pop(715,564,.73);
 return [
 ()=>bubbleRoom()+sheep()+sitKid('栗丁',720,663,1.01,'hold')+kettle(339,607,.68,-17)+[[414,538],[470,515],[524,492],[580,472]].map(([x,y])=>bubble(x,y,29)).join(''),
 ()=>bubbleRoom()+sheep('hold')+hog('back')+kettle(337,610,.65,-15)+[[416,524],[472,502],[639,492]].map(([x,y])=>bubble(x,y,28)).join('')+pop(529,484,.93)+pop(585,483,.8)+P('M729 588 Q658 537 585 483','none','#AB8965',15),
 ()=>bubbleRoom()+sheep('hold')+hog('point')+kettle(334,610,.65,-24)+pop(772,536,1.85)+P('M700 502 Q719 477 752 470','none','#BCD5D3',4)+P('M805 475 Q845 493 851 525','none','#BCD5D3',4),
 ()=>bubbleRoom()+sheep('think')+hog('back')+kettle(398,714,.67)+[[419,512],[477,490],[535,479],[593,485],[649,506]].map(([x,y])=>bubble(x,y,29)).join('')+P('M745 753 L760 751','none','#B6B89B',3),
 ()=>bubbleRoom()+chair(836,665,.91)+sheep('point')+kid('栗丁',555,746,.96,'back')+kettle(339,611,.64)+[[667,492],[728,496],[789,506]].map(([x,y])=>bubble(x,y,29)).join('')+P('M596 598 Q626 555 649 529','none','#AB8965',15),
 ()=>bubbleRoom()+chair()+blocks()+sheep()+sitKid('栗丁',792,657,.99,'back')+kettle(337,608,.65,-17)+[[419,518],[479,491],[541,473],[604,480]].map(([x,y])=>bubble(x,y,29)).join('')+P('M749 584 Q708 577 708 531 M835 584 Q850 619 841 644','none','#AB8965',13),
 ()=>bubbleRoom()+chair()+blocks()+sitKid('蓬月',292,670,1.06,'hold')+sitKid('栗丁',793,657,.99,'back')+kettle(383,723,.61)+[[544,471],[604,479],[663,504]].map(([x,y])=>bubble(x,y,29)).join('')+pop(714,542,.94)+pop(736,589,.75)+P('M750 584 Q719 575 714 545 M836 584 Q850 620 842 644','none','#AB8965',13),
 ()=>bubbleRoom()+chair()+blocks()+sitKid('蓬月',288,669,1.05,'hold')+sitKid('栗丁',793,657,.99,'hold')+kettle(298,612,.66)+bubble(669,484,44,true)
 ][i]();
}
function sandBase(){return R(0,0,1000,800,'#D9DDD0',0)+E(804,147,57,57,'#EADDAB')+P('M0 427 Q154 292 354 433 Q565 325 747 430 Q887 343 1000 410 L1000 800 L0 800Z','#D8C797')+P('M0 618 Q245 510 490 622 Q730 531 1000 601 L1000 800 L0 800Z','#CDBB8C')+[122,252,725,841].map((x,j)=>P(`M${x} ${731-j%2*75} q28 -10 59 0`,'none','#B8A77E',3)).join('');}
function station(corner=true){return sandBase()+(corner?P('M647 0 L1000 0 L1000 675 L767 671 L648 580Z','#D9C494')+P('M647 0 L763 36 L763 670 L647 580Z','#C5B185')+line(763,36,763,665,'#B6A47C',7):R(0,0,244,625,'#CFBB8E',0)+R(20,332,150,293,'#A5AB8B',66)+R(2,622,265,27,'#B8A078',4)+R(0,650,297,31,'#C5AD83',4))+[94,155,211].map((x,j)=>grass(x,686-j%2*27,.47,'#A8B189')).join('');}
function tumble(x,y,s=1,roll=0){return G(x,y,s,E(0,0,90,88,'#B9A572','fill-opacity=".22"')+Array.from({length:14},(_,j)=>{const a=j*2.399,xx=Math.cos(a)*72,yy=Math.sin(a)*69;return P(`M${xx} ${yy} Q${-xx*.4} ${yy*.13} ${-xx*.88} ${-yy*.9}`,'none',j%3?'#A08B5F':'#C8B27B',3)+P(`M${xx*.7} ${yy*.7} l${Math.cos(a+1)*25} ${Math.sin(a+1)*25}`,'none','#AA9566',2);}).join('')+E(0,0,85,83,'none','stroke="#B59E6A" stroke-width="3"')+[[-45,-36],[36,-38],[-22,40],[52,23],[4,-5],[-58,12],[8,-56]].map(([xx,yy])=>E(xx,yy,5,8,'#8B805D')).join('')+face(0,-13,.75),roll);}
function windFlag(x=536,y=372){return line(x,y,x,y-244,'#A28F68',9)+P(`M${x} ${y-229} Q${x+43} ${y-242} ${x+99} ${y-223} L${x+95} ${y-186} Q${x+43} ${y-211} ${x} ${y-197}Z`,'#C6AFBF');}
function wagon(x,y,s=1,loaded=false){return G(x,y,s,line(-93,-26,-156,-77,'#9F8864',9)+E(-49,36,28,28,'#A28E68')+E(59,36,28,28,'#A28E68')+E(-49,36,11,11,'#CDC3A3')+E(59,36,11,11,'#CDC3A3')+R(-105,-75,214,104,'#BCA578',9)+(loaded?tumble(0,-74,.86):'')+R(-105,-26,214,32,'#CCB58C',7));}
function tumbleDepartureScene(i,cover){
 if(cover)return station(false)+kid('麦沙',373,747,1.11,'wave')+tumble(678,634,1.05,18)+wagon(330,724,.48)+breeze(443,373,.9)+[514,557,603].map((x,j)=>E(x,719-j*13,6,9,'#938260')).join('');
 return [
 ()=>station()+sitKid('麦沙',402,664,1.10,'hold')+tumble(711,650,1.01),
 ()=>station()+kid('麦沙',371,746,1.12,'point')+tumble(697,639,1.22)+P('M454 574 Q537 550 626 599','none','#DBC290',17),
 ()=>station()+kid('麦沙',400,747,1.10,'hold')+tumble(709,652,1.01)+breeze(470,496,.67)+P('M460 507 Q487 503 514 505','none','#E8E2C9',4),
 ()=>station()+kid('麦沙',378,746,1.11,'wide')+tumble(710,651,1.02,13)+P('M551 738 Q602 708 663 727','none','#AE9D76',4)+breeze(428,535,.96,true),
 ()=>station()+windFlag()+kid('麦沙',383,746,1.09,'point')+tumble(710,651,1.01)+breeze(430,378,.80),
 ()=>station(false)+[414,486,563,641,718].map((x,j)=>E(x,706-j*11,37,14,'#B4B19A')).join('')+kid('麦沙',354,746,1.10,'reach')+wagon(614,668,.97,true)+line(458,635,464,598,'#DBC290',17),
 ()=>station(false)+kid('麦沙',347,746,1.10,'wave')+wagon(404,724,.55)+tumble(758,615,.87,31)+breeze(482,440,.83)+[547,594,649,701].map((x,j)=>E(x,715-j*15,6,9,'#948563')).join(''),
 ()=>station(false)+sitKid('麦沙',223,623,1.03,'wave')+wagon(110,576,.39)+tumble(850,480,.23,33)+E(660,740,46,14,'#B8A67B')+E(659,736,8,11,'#96805B')
 ][i]();
}
function snowWindow(jam=0){
 const snow=P('M484 447 Q652 391 845 443 L845 532 L484 532Z','#E8ECDF')+P('M721 439 L785 439 L758 407 L781 407 L757 372 L776 372 L747 322 L718 372 L736 372 L712 407 L735 407Z','#9DB2A3')+P('M719 374 L747 323 L771 365 L751 356 L747 340 L738 361Z','#F2EFDF')+line(746,437,746,463,'#A7A58C',8)+[[534,210],[621,170],[778,196],[815,281],[546,345],[650,443],[692,244],[588,482]].map(([x,y])=>E(x,y,5,6,'#F0F0E2')).join('');
 let a=R(460,123,410,440,'#B39772',9)+R(483,146,364,388,'#C3D6D6',3)+snow+E(473,283,12,17,'#8E7C5D')+E(856,283,12,17,'#8E7C5D')+E(473,280,3,4,ink)+E(856,280,3,4,ink)+P('M629 547 Q661 560 694 547','none','#7C7059',3)+R(443,561,444,21,'#B2966F',6);
 if(jam===1)a+=G(663,331,1,[0,72,144,216,288].map(r=>G(0,0,1,E(0,-39,28,41,'#BD8278','fill-opacity=".88"'),r)).join('')+E(0,0,22,21,'#C38A79'));
 if(jam>=2){if(jam===3)a+='<defs><mask id="jam-clear"><rect width="1000" height="800" fill="white"/><ellipse cx="588" cy="373" rx="37" ry="49" fill="black"/></mask></defs>';
 a+=P('M538 307 Q521 263 565 256 Q608 215 657 250 Q703 223 739 278 Q804 273 806 325 Q831 368 780 403 Q740 449 699 419 Q643 451 601 412 Q529 427 520 367Z','#BF8279','',0,`fill-opacity=".84" ${jam===3?'mask="url(#jam-clear)"':''}`);}
 return a;
}
function snowyRoom(jam=0){return R(0,0,1000,800,'#DCD2B6',0)+R(0,637,1000,163,'#BAAC8D',0)+line(0,637,1000,637,'#A99A7C',7)+R(73,207,235,17,'#B8A17A',5)+cup(127,201,.66)+book(240,202,.47)+snowWindow(jam);}
function jamBread(x,y,s=1){return G(x,y,s,P('M-38 -25 Q-48 -68 0 -67 Q48 -68 38 -25 L38 26 L-38 26Z','#C8AD7B')+P('M-30 -22 Q-40 -56 0 -56 Q40 -56 30 -22 L30 17 L-30 17Z','#E8D5A4')+P('M-20 -27 Q0 -45 23 -21 L21 6 Q0 17 -22 4Z','#BF8279'));}
function washBowl(x,y,s=1,pink=false){return bowl(x,y,s,pink?'#DAB7AD':'#C4DAD6');}
function cloth(x,y,s=1,red=false){return G(x,y,s,P('M-31 -21 L25 -26 L38 21 L-25 29Z',red?'#D0B4AA':'#E3E5D3')+line(-24,-13,20,-17,red?'#BD8E83':'#BDCCBD',3));}
function jamWindowScene(i,cover){
 if(cover)return snowyRoom()+kid('杏团',314,745,1.14,'wave')+desk(646,716,.75)+paper(670,669,.56,G(0,0,1,[0,72,144,216,288].map(r=>G(0,0,1,E(0,-22,17,24,'#C38A79'),r)).join('')+E(0,0,12,11,'#E1C27A')))+line(763,670,800,684,'#C38A79',8);
 return [
 ()=>snowyRoom()+chair(290,659,.96)+sitKid('杏团',290,658,1.09,'hold')+jamBread(309,575,.66)+desk(622,716,.74)+plate(622,687,.61),
 ()=>snowyRoom(1)+kid('杏团',317,745,1.15,'back')+desk(626,716,.74)+plate(622,688,.63)+jamBread(622,675,.54)+E(390,660,9,9,'#BF8279'),
 ()=>snowyRoom(1)+kid('杏团',315,745,1.15,'reach')+desk(626,716,.74)+cloth(548,683,.77)+plate(682,686,.52)+jamBread(682,673,.47)+P('M413 603 Q477 643 531 674','none','#AC855F',18),
 ()=>snowyRoom(2)+kid('杏团',435,745,1.35,'back')+desk(651,725,.72)+P('M493 537 Q510 445 536 368','none','#906D50',25)+P('M377 537 Q384 588 423 584 M493 537 Q510 445 536 368','none','#AC855F',19)+cloth(544,361,.83,true)+P('M504 394 Q495 360 509 334','none','#DBCAB4',4),
 ()=>snowyRoom(2)+kid('杏团',324,745,1.15,'hold')+desk(652,725,.72)+cloth(605,693,.86,true),
 ()=>snowyRoom(3)+kid('杏团',435,745,1.35,'back')+desk(679,724,.73)+washBowl(701,680,.74)+P('M493 537 Q527 451 573 373','none','#906D50',25)+P('M377 537 Q384 588 423 584 M493 537 Q527 451 573 373','none','#AC855F',19)+cloth(590,373,.83,true),
 ()=>snowyRoom()+kid('杏团',435,745,1.35,'back')+desk(679,724,.73)+washBowl(701,680,.74,true)+P('M493 537 Q523 464 558 420','none','#906D50',25)+P('M377 537 Q384 588 423 584 M493 537 Q523 464 558 420','none','#AC855F',19)+cloth(574,416,.82),
 ()=>snowyRoom()+kid('杏团',373,746,1.15,'hold')+desk(670,716,.76)+paper(674,668,.56,G(0,0,1,[0,72,144,216,288].map(r=>G(0,0,1,E(0,-22,17,24,'#C38A79'),r)).join('')+E(0,0,12,11,'#E1C27A')))+line(764,670,799,683,'#C38A79',8)
 ][i]();
}
const scenes={'expansion-0121':flowerOpeningScene,'expansion-0122':gentleWindScene,'expansion-0123':growingBedScene,'expansion-0124':footprintScene,'expansion-0125':stampScene,'expansion-0126':bubbleTrainScene,'expansion-0127':tumbleDepartureScene,'expansion-0128':jamWindowScene};
export function fourthYoungFirstArtwork(story,index,cover=false){
 const scene=scenes[story?.id];if(!scene)throw Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw Error('Expected eight pages');
 if(!Number.isInteger(index)||index<0||index>=8)throw Error('Page index must be an integer from 0 to 7');
 return svg(scene(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

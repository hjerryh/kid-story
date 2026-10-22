// Eight explicit, independent eight-page storyboards for expansion-0129 through 0136.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
小絮:['human','#E0CEB7','#C1B4D0','coat',null,'snowcap'],雾桃:['bear','#BEA080','#E4CB8C','overall',null,'bluebag'],雾桃卧:['bear','#BEA080','#E4CB8C','overall'],
乌米:['elf','#D9C7A6','#E5D394','dress',null,'leafkid'],乌米背:['elf','#D9C7A6','#E5D394','dress',null,'leafbottle'],
杏绒:['fox','#C99670','#B4C89F','overall'],栗芽坐:['mouse','#C2A485','#9EB88D','overall',null,'yellowbag'],栗芽:['mouse','#C2A485','#9EB88D','overall',null,'yellowbag'],
梨芽:['otter','#B19879','#A6C6D0','dress'],河狸:['beaver','#967B5E','#9CB58F','apron',null,'beavercap'],
橘栗:['badger','#AAA695','#DDC388','overall',null,'roundbadger'],梨泡:['otter','#B9A183','#9BBCC9','overall'],
小猪:['pig','#D2B7A5','#C6B0C5','vest'],小鸭:['duck','#D8C48E','#ABC0A0','vest']};
function arm(x,y,dx,dy,c,w=22){return P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.55-9} ${x+dx} ${y+dy}`,'none',c,w);}
function kid(name,x,y,s=1,pose='stand',flip=false,extras=''){
 const cfg=C[name];if(!cfg)throw Error(`Unknown character ${name}`);const [t,f,cloth,kind,scarf,detail]=cfg;
 let a=name.endsWith('卧')?'':E(0,0,81,12,'#53675A','opacity=".12"');
 if(t==='hedgehog')a+=P('M-73 -161 L-97 -195 L-78 -209 L-105 -233 L-79 -244 L-90 -278 L-61 -274 L-64 -308 L-35 -296 L-15 -323 L4 -302 L32 -319 L41 -289 L72 -300 L68 -270 L96 -273 L82 -241 L108 -222 L83 -207 L100 -177 L72 -162Z','#9A8668');
 if(['squirrel','chipmunk'].includes(t)&&!['蓬蓬围','蓬蓬卧'].includes(name))a+=P('M44 -48 Q145 -77 121 -204 Q102 -250 64 -227 Q21 -202 68 -160','none',f,53);
 if(t==='chipmunk')a+=[0,1,2].map(j=>P(`M${70+j*8} -203 Q${89+j*6} -151 ${70+j*8} -87`,'none','#665C48',3)).join('');
 if(['fox','fennec'].includes(t))a+=P('M39 -57 Q139 -36 137 -133 Q93 -144 52 -101Z',f)+P('M137 -133 Q146 -90 123 -67 L102 -103Z','#EDEBDD');
 if(['mouse','jerboa','monster'].includes(t)&&!name.endsWith('卧')&&!name.endsWith('坐'))a+=P(t==='monster'?'M44 -50 Q103 -35 101 -82 Q91 -106 78 -87':'M42 -40 Q124 -10 132 -76','none',f,t==='monster'?14:8)+(t==='jerboa'?E(133,-79,12,10,cream):'');
 if(t==='beaver')a+=P('M46 -47 Q153 -54 126 -127 Q89 -162 61 -121Z','#876F55')+P('M74 -91 L117 -120 M81 -69 L130 -101 M80 -126 L118 -73','none','#AD9571',3);
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
 if(['fox','fennec','squirrel','chipmunk','badger'].includes(t)&&detail!=='roundbadger')a+=P(`M-49 -244 L${t==='fennec'?-99:-69} ${t==='fennec'?-366:-309} Q-21 -300 -15 -263Z`,f)+P(`M49 -244 L${t==='fennec'?99:69} ${t==='fennec'?-366:-309} Q21 -300 15 -263Z`,f)+(t==='fennec'?P('M-46 -268 L-82 -344 L-27 -278Z','#D9B8AD')+P('M46 -268 L82 -344 L27 -278Z','#D9B8AD'):'');
 if(detail==='roundbadger'||t==='pig'||t==='beaver')a+=E(-48,-266,24,24,f)+E(48,-266,24,24,f);
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
 if(t==='pig')a+=E(0,-204,24,17,'#C49F92')+E(-8,-205,3,4,'#986F64')+E(8,-205,3,4,'#986F64');
 if(t==='beaver')a+=E(0,-202,36,22,'#CDBB96')+R(-10,-190,20,22,'#EDE6D2',4)+line(0,-189,0,-170,'#BEB69D',2);
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
 if(detail==='snowcap'){a+=[[-43,-256],[-23,-278],[0,-282],[24,-273],[47,-254]].map(([xx,yy])=>E(xx,yy,23,22,'#E8E9DF')).join('')+P('M-62 -278 L13 -365 L64 -278Z','#92B6CB')+R(-66,-284,132,19,'#B3CDDA',6)+E(-30,-10,30,19,'#EFECDD')+E(30,-10,30,19,'#EFECDD');}
 if(['bluebag','yellowbag'].includes(detail))a+=line(-48,-179,53,-68,detail==='bluebag'?'#8FAEBB':'#BCA25E',7)+R(29,-110,63,66,detail==='bluebag'?'#A9C8D3':'#D8BC78',12);
 if(['leafkid','leafbottle'].includes(detail))a+=E(-30,-10,30,17,'#987B58')+E(30,-10,30,17,'#987B58');
 if(detail==='leafbottle')a+=line(-47,-177,55,-78,'#BB8574',7)+R(35,-119,45,65,'#BD897C',16)+R(43,-132,29,18,'#D1AD91',4);
 if(detail==='beavercap')a+=P('M-65 -263 Q-69 -308 0 -310 Q68 -309 64 -263Z','#D6CCB3')+R(-69,-267,137,17,'#E5DBC1',7);
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
 const f=C[name][1],shoe=['greenshoes','paperdress','paperdance','fairy'].includes(C[name][5])?'#88A579':['leafkid','leafbottle'].includes(C[name][5])?'#987B58':C[name][5]==='snowcap'?'#EFECDD':f,id=`seat-${x}-${y}-${Math.round(s*100)}`;
 return (name==='栗芽坐'?G(x,y,s,P('M44 -8 Q116 18 136 -27','none',f,8)):'')+`<defs><clipPath id="${id}"><rect x="${x-210*s}" y="${y-500*s}" width="${420*s}" height="${512*s}"/></clipPath></defs>`+G(x,y,s,arm(-27,0,-8,55,f,23)+arm(27,0,8,55,f,23)+E(-35,60,25,13,shoe)+E(35,60,25,13,shoe))+`<g clip-path="url(#${id})">${kid(name,x,y+80*s,s,pose,false,extras)}</g>`;
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
function snowCastle(x=295,y=704,s=1,flag=false){return G(x,y,s,R(-128,-163,256,160,'#E8ECE0',24)+R(-144,-213,67,216,'#E8ECE0',28)+R(78,-213,67,216,'#E8ECE0',28)+R(-39,-259,79,257,'#EDF0E3',33)+E(-110,-139,20,27,'#B5CBD0')+E(110,-139,20,27,'#B5CBD0')+E(0,-181,22,29,'#B5CBD0')+P('M-34 -6 L-34 -68 Q0 -105 34 -68 L34 -6Z','#BED1D1')+(flag?line(3,-255,3,-357,'#A5A084',5)+P('M5 -354 Q45 -370 87 -350 L79 -309 Q39 -330 5 -315Z','#92B4CB'):'')+E(0,1,155,17,'#F0F1E5'));}
function snowSeat(x,y,s=1,high=false,wide=false,armrest=false){return G(x,y,s,R(-77,high?-205:-111,154,high?205:111,'#E8EDDF',22,'stroke="#CAD9D4" stroke-width="3"')+R(wide?-104:-78,high?-123:-36,wide?208:156,high?147:67,'#EFF1E5',18,'stroke="#CEDBD7" stroke-width="3"')+E(0,high?-123:-35,wide?104:78,24,'#F5F4E9')+(armrest?R(-64,8,42,37,'#E5EADD',16)+E(-43,8,21,13,'#F4F3E6'):'')+E(0,33,wide?126:100,15,'#E9EDE0'));}
function knot(x,y,s=1){return G(x,y,s,P('M0 0 Q-31 -28 -31 -5 Q-28 12 0 0 Q30 -28 32 -5 Q27 13 0 0Z','#91B4CB')+E(0,0,7,6,'#7099B6'));}
function glove(x,y,s=1,band='long',r=0){let a=P('M-49 -126 L48 -126 L48 -51 Q78 -63 82 -44 Q85 -27 52 -7 L49 24 Q47 44 33 43 Q20 42 20 24 L20 2 L15 2 L15 36 Q13 55 -1 52 Q-15 51 -14 34 L-14 2 L-19 2 L-19 28 Q-21 47 -35 44 Q-47 42 -46 24 L-46 -3 Q-56 7 -66 -4 Q-74 -16 -58 -40 L-49 -59Z','#E1CF8F')+R(-51,-133,101,31,'#E9DAA3',9)+line(-45,-109,44,-109,'#8EAFCA',10)+knot(23,-108,.64)+face(-1,-61,.65)+(band==='short'?P('M30 -105 L45 -75','none','#92B4CB',10):P(band==='spread'?'M31 -106 Q51 -48 92 -26 L143 129 L197 132':'M31 -106 Q46 -60 89 -26 Q120 -5 121 25','none','#92B4CB',11)+knot(90,-26,.40));return G(x,y,s,r===-90?'<g transform="scale(-1 1)">'+a+'</g>':a,r);}
function ribbonScene(i,cover){
 const ground=()=>outdoor('snow')+bench(805,490,.66);
 if(cover)return ground()+snowCastle(310,719,.79,true)+snowSeat(699,711,1.05,false,true,true)+glove(693,647,.88,'short',-90)+kid('小絮',466,747,1.02,'wave');
 return [
 ()=>ground()+snowCastle(353,728,.95)+sitKid('小絮',212,675,1.03,'reach')+glove(793,449,.58,'long'),
 ()=>ground()+snowCastle(242,729,.65)+kid('小絮',434,748,1.14,'point')+glove(761,663,.97,'long')+P('M792 550 Q784 564 762 560','none','#E1CF8F',11),
 ()=>ground()+snowCastle(227,731,.62)+kid('小絮',417,749,1.13,'low')+snowSeat(662,707,1.05,true)+glove(847,717,.81,'long')+E(507,738,42,25,'#EDF0E4'),
 ()=>ground()+snowCastle(227,731,.62)+sitKid('小絮',419,674,1.07,'low')+snowSeat(704,710,1.08,false)+glove(713,623,.77,'long')+P('M475 651 Q540 681 610 675','none','#E0CEB7',16),
 ()=>ground()+snowCastle(225,731,.62)+kid('小絮',421,749,1.10,'think')+snowSeat(705,713,1.06,false,true)+glove(700,650,.87,'long',-90),
 ()=>ground()+snowCastle(224,731,.62)+kid('小絮',415,749,1.11,'wide')+snowSeat(705,713,1.06,false,true)+glove(694,628,.85,'spread'),
 ()=>ground()+snowCastle(224,731,.62)+kid('小絮',414,748,1.12,'hold')+snowSeat(706,713,1.06,false,true,true)+glove(700,649,.87,'short',-90)+P('M430 616 Q481 604 515 640 Q537 662 567 644','none','#91B4CB',12),
 ()=>ground()+snowCastle(299,723,.94,true)+sitKid('小絮',492,681,1.03,'hold')+snowSeat(734,714,1.04,false,true,true)+glove(729,650,.87,'short',-90)
 ][i]();
}
function travelWindow(j,x,y,s=1){let a=R(-32,-40,64,80,'#DBBF80',5)+R(-26,-34,52,68,'#BDD5D1',3);if(j===0)a+=cloud(1,-9,.14,'#F0EFE0');if(j===1)a+=R(-26,5,52,29,'#ABC196',0)+[[-16,15],[1,6],[16,22]].map(([xx,yy])=>flower(xx,yy,.21,'#DDB69E')).join('');if(j===2)a+=R(-26,-2,52,36,'#98BEC9',0)+P('M-19 6 L23 6 L14 17 L-11 17Z','#B7A078')+line(2,6,2,-18,'#AE9773',2)+P('M4 -17 L4 3 L20 3Z','#E8DFB9');if(j===3)a+=P('M-26 29 L-8 -18 L6 2 L20 -12 L26 27Z','#9EB59D')+E(14,-21,8,8,'#E8D9A7');if(j===4)a+=tree(-3,30,.13,'#91AA8C');if(j===5)a+=E(0,-2,19,22,'#D8C6AB')+[-17,-7,6,17].map(xx=>E(xx,-21,9,9,'#D7DCD3')).join('')+E(-6,-5,2,2,ink)+E(6,-5,2,2,ink)+P('M-5 6 Q0 11 6 5','none','#82745E',2)+E(11,24,11,9,'#E0B994')+leaf(12,15,.10,'#99B18D',20);return G(x,y,s,a);}
function ticket(x,y,s=1,mode='flat'){
 if(mode==='roll')return G(x,y,s,E(0,0,54,65,'#E8DDC1')+R(-42,-52,84,107,'#F2EBD5',12)+E(0,-53,43,14,'#D3C9AC')+E(0,-53,31,9,'#EDE3CA')+travelWindow(5,0,7,.81));
 const pts=mode==='tucked'?[[-152,272,0],[-152,160,0],[-152,48,0],[-54,0,0],[44,0,0],[142,40,56]]:mode==='drape'?[[-168,94,-80],[-131,5,-31],[-44,0,0],[44,0,0],[131,5,31],[168,94,80]]:Array.from({length:6},(_,j)=>[(j-2.5)*(mode==='fold'?51:87),mode==='fold'?(j%2?8:-8):0,0]);
 return G(x,y,s,pts.map(([xx,yy,r],j)=>G(xx,yy,1,mode==='fold'?P(j%2?'M-28 -62 L28 -46 L28 62 L-28 46Z':'M-28 -46 L28 -62 L28 46 L-28 62Z',j%2?'#EEE6CF':'#F4EEDB')+travelWindow(j,0,0,.67):R(-45,-56,90,112,'#F4EDDA',3)+travelWindow(j,0,0,.96),r)).join(''));
}
function ticketBed(night=false){return interior(night)+R(221,533,602,142,'#D8C39A',21)+R(204,505,23,238,'#B39872',7)+R(820,540,23,203,'#B39872',7)+E(315,577,82,55,'#EEE5CD')+R(263,400,250,20,'#B8A079',5)+R(294,419,18,89,'#A38E6C',5)+R(477,419,18,89,'#A38E6C',5);}
function ticketScene(i,cover){
 if(cover)return interior()+kid('雾桃',346,748,1.18,'hold')+ticket(592,600,1.12,'fold')+desk(609,710,1.01);
 return [
 ()=>R(0,0,1000,800,'#BAD1D5',0)+cloud(260,191,.76,'#E9ECE0')+cloud(796,249,.87,'#EDF0E3')+P('M0 615 Q220 544 441 609 Q701 539 1000 598 L1000 800 L0 800Z','#E9E9D6')+R(730,277,15,335,'#A3AC96',5)+R(632,277,207,86,'#D4D6B8',15)+kid('雾桃',504,750,1.15,'hold')+ticket(508,594,1,'flat'),
 ()=>ticketBed()+kid('雾桃',623,748,1.10,'reach',true)+ticket(389,345,.70,'drape'),
 ()=>ticketBed()+sitKid('雾桃',611,643,1.10,'point')+ticket(389,345,.70,'tucked')+E(315,577,82,55,'#EEE5CD'),
 ()=>ticketBed()+sitKid('雾桃',543,623,1.12,'hold')+ticket(550,556,.94,'roll'),
 ()=>ticketBed()+sitKid('雾桃',527,624,1.12,'back')+ticket(534,568,.79,'flat')+P('M479 539 Q476 563 499 569 M575 539 Q557 569 530 569','none','#BEA080',17)+line(534,527,534,609,'#D5C8A6',3),
 ()=>ticketBed()+sitKid('雾桃',521,625,1.12,'hold')+ticket(525,561,1,'fold'),
 ()=>ticketBed()+kid('雾桃',622,748,1.10,'reach',true)+ticket(389,350,.76,'fold'),
 ()=>ticketBed(true)+G(564,579,1,kid('雾桃卧',0,0,.97,'sleep'),-90)+P('M398 542 Q606 520 821 562 L821 677 L398 677Z','#BBC6A3')+ticket(389,350,.76,'fold')
 ][i]();
}
function seedPassenger(x,y,s=1,open=true){let a=E(0,-67,33,51,'#C1AE87')+E(-12,-77,4,5,ink)+E(12,-77,4,5,ink)+E(0,-65,5,3,'#A58C67')+P('M-7 -51 Q0 -45 8 -51','none','#7F7B64',2)+P('M-13 -23 Q-29 -4 -29 15 M13 -23 Q33 -4 34 15','none','#8D9271',5);if(open){a+=line(0,-116,0,-228,'#A7B99B',4)+Array.from({length:11},(_,j)=>{const ang=(j*15+15)*Math.PI/180,xx=Math.cos(ang)*105,yy=-224-Math.sin(ang)*54;return line(0,-216,xx,yy,'#DCE3D0',3)+E(xx,yy,13,8,'#EEEEDF');}).join('');}else a+=P('M0 -112 Q29 -159 31 -224','none','#A8B89B',4)+[-11,-5,0,5,11].map(dx=>P(`M31 -167 Q${31+dx} -204 ${31+dx*.7} -242`,'none','#E5E9D8',5)).join('')+P('M34 -240 Q53 -261 61 -244','none','#E6E9D8',3);return G(x,y,s,a);}
function redBottle(x,y,s=1){return G(x,y,s,R(-22,-50,44,64,'#BF897A',15)+R(-14,-62,28,18,'#D3B296',4)+P('M22 -41 Q43 -58 42 -19 Q42 0 23 -6','none','#AD7F6F',6));}
function peaTrain(x,y,s=1){return G(x,y,s,E(-91,9,25,25,'#7E9476')+E(20,9,25,25,'#7E9476')+P('M-137 -14 Q-160 -64 -103 -98 Q-19 -134 79 -66 Q97 -26 34 -14Z','#A7C48E')+R(-51,-103,66,61,'#D5E2BD',19)+P('M87 -82 L221 -82 L222 -15 L84 -15Z','#B3CB97')+E(111,8,23,23,'#7E9476')+E(193,8,23,23,'#7E9476')+R(104,-65,38,33,'#DCE7CA',8)+R(162,-65,38,33,'#DCE7CA',8)+line(45,-14,87,-14,'#8C9D78',8));}
function leafStation(){return R(0,0,1000,800,'#CFDEC8',0)+tree(95,725,1.6,'#93AE89')+P('M129 650 Q309 254 979 303 Q958 642 514 796Z','#A3BC84')+P('M221 729 Q555 450 925 337','none','#D1D9AD',18)+[0,1,2,3].map(j=>P(`M${353+j*128} ${626-j*80} Q${414+j*132} ${690-j*74} ${512+j*129} ${717-j*74}`,'none','#BDCEA0',7)).join('')+R(176,663,254,21,'#C8C69F',9)+line(203,685,203,756,'#A9B18A',12)+line(399,685,399,756,'#A9B18A',12);}
function leafCabin(half=false,moving=false,lake=false){let a=R(0,0,1000,800,'#C9D5AE',0)+R(0,637,1000,163,'#A7B78D',0)+P('M0 75 Q490 -88 1000 76','none','#9BAF83',33)+R(505,118,382,350,'#92A783',32)+R(522,135,348,316,lake?'#BFD7D5':'#B2C9A0',21)+(lake?R(524,314,344,135,'#A9C8C8',0)+[579,692,803].map((x,j)=>lotusFlower(x,401+j%2*26,.34)).join(''):P('M524 368 Q654 192 868 238 L868 450 L524 450Z','#8FB180')+P('M527 401 Q680 310 869 351','none','#CDD9AD',12));
 a+=R(920,248,72,390,moving?'#9DB38B':'#8C9F80',24)+R(moving?931:955,269,moving?49:34,348,'#BFD1AA',14)+E(907,178,18,22,'#D8C181')+R(887,159,40,9,'#B8A16D',4);
 if(half)a+=R(693,137,175,312,'#DEE7D4',4,'fill-opacity=".40"')+line(694,138,694,449,'#DADEC3',8)+P('M747 150 L846 251 M747 185 L842 280','none','#E4EDDC',5);
 a+=line(819,294,819,322,'#8DA27F',5)+P(half?'M819 313 Q827 348 820 391 L798 390 Q805 346 809 314Z':'M818 313 Q853 298 881 336 L871 363 Q846 329 809 335Z','#8DB2C7');
 if(moving)a+=P('M885 145 L873 130 M928 144 L940 131','none','#D6C284',4);
 return a;}
function leafSeat(x,y,s=1){return G(x,y,s,R(-73,-130,146,117,'#A6BB8E',18)+R(-83,-24,166,27,'#C3CFA4',10)+R(-66,2,15,85,'#95A77F',5)+R(52,2,15,85,'#95A77F',5));}
function lotusFlower(x,y,s=1){return G(x,y,s,E(0,18,92,23,'#89B098')+P('M0 16 Q-84 13 -64 -54 Q-31 -53 0 -19 Q-32 -88 0 -114 Q34 -86 0 -19 Q37 -55 66 -51 Q80 11 0 16Z','#D6B0B2')+E(0,5,25,11,'#DEC88F'));}
function leafTrainScene(i,cover){
 const pair=(open=true,pose='hold',hx=330)=>leafSeat(hx,673,1.05)+sitKid('乌米',hx,670,1.10,pose)+leafSeat(735,673,.92)+seedPassenger(735,660,.99,open)+redBottle(hx-58,744,.73);
 if(cover)return leafCabin(true,true,true)+pair(false,'point')+leafSeat(128,674,.49)+seedPassenger(128,674,.55,false);
 return [
 ()=>leafStation()+peaTrain(728,476,1.05)+kid('乌米背',309,665,1.02,'wave'),
 ()=>leafCabin()+pair()+leafSeat(136,671,.55)+seedPassenger(136,671,.61,false)+leafSeat(462,641,.47)+seedPassenger(462,641,.50,false),
 ()=>leafCabin()+pair(true,'think')+leafSeat(137,672,.55)+seedPassenger(137,672,.61,false)+leafSeat(462,641,.47)+seedPassenger(462,641,.50,false)+P('M308 749 Q330 768 351 749','none','#8FA680',3),
 ()=>leafCabin()+pair(true,'think',500)+P('M708 642 Q686 554 731 494 M764 641 Q788 551 747 493','none','#8D9271',5)+P('M841 344 Q792 367 776 411','none','#D1DFCB',4),
 ()=>leafCabin()+pair(true,'point',500)+P('M841 344 Q757 365 661 560','none','#D1DFCB',4),
 ()=>leafCabin(true)+pair(false,'hold'),
 ()=>leafCabin(true,true)+pair(false,'point')+G(596,233,.26,E(0,0,98,100,'#C7DFD7','fill-opacity=".7"')+G(0,0,.40,peaTrain(0,0,1),180)+P('M-53 -54 Q-72 -23 -61 -3','none','#EDF0DF',12))+G(808,221,.18,E(0,0,98,100,'#C7DFD7','fill-opacity=".7"')+G(0,0,.40,peaTrain(0,0,1),180)),
 ()=>leafCabin(true,true,true)+pair(false,'point')+P('M725 608 Q736 622 748 609','none','#8D9271',3)
 ][i]();
}
function rainyRoom(){return interior(false,'#DCD1B4')+R(690,99,197,307,'#B8CBCD',78)+[-1,0,1,2].map(j=>line(720+j*43,153+j%2*67,709+j*43,180+j%2*67,'#93AEB8',3)).join('')+line(788,102,788,405,'#D4C4A4',8)+line(692,260,886,260,'#D4C4A4',8)+E(486,719,348,74,'#BFC4A2')+E(486,719,306,56,'none','stroke="#DED8BA" stroke-width="4"')+G(188,573,.9,R(-52,-153,104,139,'#BBA17A',8)+R(-63,-21,126,23,'#D2B88D',6)+R(-45,1,15,103,'#A98E69',5)+R(32,1,15,103,'#A98E69',5));}
function blanket(x,y,s=1,mode='flat',r=0){let a='';if(mode==='roll')a=R(-124,-27,248,55,'#E4D18C',24)+E(-116,0,21,26,'#CEB778')+E(-116,0,12,17,'#E8D596')+R(89,-25,22,52,'#CF9C72',7)+face(0,-3,.62);else if(mode==='elephant'||mode==='tickle')a=P('M-66 -35 Q-49 -103 29 -92 Q109 -78 99 -13 L81 35 Q44 59 -19 32 L-63 14Z','#E4D18C')+P('M-53 -47 Q-103 -77 -110 -12 Q-119 35 -69 46 L-30 11Z','#EBD995')+P('M55 -45 Q111 -63 128 -10 Q141 33 99 50 L66 11Z','#EBD995')+P(mode==='tickle'?'M-67 -41 Q-139 -39 -132 36 Q-127 70 -88 52 Q-64 39 -73 10':'M-67 -41 Q-139 -39 -129 32 L-126 75','none','#DBC57F',27)+P('M-109 30 L-83 44 M109 33 L91 46 M35 -82 L61 -77','none','#D29C70',12)+P(mode==='tickle'?'M-79 25 L-74 11':'M-129 66 L-126 76','none','#D29C70',13)+face(-23,-39,.68);else a=R(-141,-84,282,168,'#E6D38E',12)+P('M-137 -57 L-137 -80 L-110 -80 M111 -80 L137 -80 L137 -55 M-138 57 L-138 80 L-111 80 M110 80 L137 80 L137 57','none','#D09B71',12)+face(-8,-4,.78)+(mode==='corner'?P('M133 66 Q171 62 164 99 Q151 116 132 99','none','#D2BB79',18):'');return G(x,y,s,a,r);}
function elephantBook(x,y,s=1){return paper(x,y,s,P('M-86 -67 L0 -49 L86 -67 L86 64 L0 78 L-86 64Z','#EEE6CE')+P('M5 -20 Q39 -53 62 -12 L60 26 L20 26 L12 9 L9 38','none','#9BAFB0',14)+E(35,-7,20,24,'#ADBDC0')+line(0,-49,0,78,'#C5B999',2));}
function blanketScene(i,cover){
 if(cover)return rainyRoom()+kid('杏绒',354,746,1.14,'back')+P('M305 570 Q410 611 495 589 M403 570 Q486 567 548 572','none','#C99670',19)+blanket(586,555,1.24,'elephant')+elephantBook(280,742,.44);
 return [
 ()=>rainyRoom()+sitKid('杏绒',441,677,1.11,'hold')+elephantBook(459,635,.62)+blanket(188,475,.55,'flat'),
 ()=>rainyRoom()+sitKid('杏绒',360,676,1.10,'point')+blanket(602,703,.92)+elephantBook(756,739,.48),
 ()=>rainyRoom()+kid('杏绒',442,746,1.17,'hold')+blanket(450,610,1.18,'roll',-8)+elephantBook(755,709,.48),
 ()=>rainyRoom()+sitKid('杏绒',363,676,1.10,'low')+blanket(606,700,.96)+elephantBook(779,738,.48)+P('M421 655 Q454 674 490 690','none','#C99670',16),
 ()=>rainyRoom()+stool(439,661,1.10)+sitKid('杏绒',439,658,1.10,'hold')+blanket(469,666,.75,'corner',9)+P('M481 575 Q527 596 545 655','none','#C99670',17),
 ()=>rainyRoom()+kid('杏绒',354,746,1.14,'back')+P('M305 570 Q410 611 495 589 M403 570 Q486 567 548 572','none','#C99670',19)+blanket(586,555,1.24,'elephant')+elephantBook(277,741,.44),
 ()=>rainyRoom()+sitKid('杏绒',342,675,1.10,'back')+R(549,660,164,75,'#B8A7BB',31)+P('M295 592 Q419 610 489 610 M389 592 Q451 567 552 587','none','#C99670',19)+blanket(599,563,1.20,'tickle')+elephantBook(812,704,.44),
 ()=>rainyRoom()+R(322,545,244,161,'#C3B2C6',47)+sitKid('杏绒',435,674,1.11,'hold')+blanket(444,699,.87,'corner')+elephantBook(760,709,.49)
 ][i]();
}
function cloudCar(x,y,s=1,open=false){return G(x,y,s,P('M-219 39 Q-273 32 -254 -17 Q-271 -69 -220 -89 Q-224 -153 -160 -152 Q-122 -216 -61 -173 Q-2 -224 56 -175 Q126 -213 161 -156 Q230 -163 233 -97 Q287 -75 257 -19 Q275 36 219 41Z','#EBEDE0')+E(-126,-76,47,49,'#B4CDD0')+E(-12,-86,49,50,'#B4CDD0')+R(98,-112,81,150,open?'#A4BAB2':'#D4DFCE',33)+line(138,-105,138,29,open?'#BDD0BF':'#BBCDBA',4)+E(162,-35,5,5,'#AD9B75')+R(-69,-200,135,26,'#96B7C8',10)+P('M-53 -202 Q-65 -250 1 -252 Q67 -247 53 -202Z','#A9C8D3')+E(-217,-31,5,6,ink)+P('M-228 -15 Q-215 -3 -202 -15','none','#7D8B7C',3));}
function rideTicket(x,y,s=1,back=false){return G(x,y,s,R(-55,-35,110,70,'#F0E4C6',5,'stroke="#C5B58D" stroke-width="2"')+(back?E(-31,-13,9,9,'#DAC081')+P('M-8 -15 Q15 -31 29 -13 L21 -13 M29 -13 L28 -23 M28 8 Q7 26 -9 8 L0 8 M-9 8 L-9 18','none','#98AE94',4)+line(-32,25,35,25,'#B7C19F',3):cloud(-1,-2,.21,'#BCD1CA')+E(25,17,8,8,'#CDBD87')));}
function vinePlatform(){return outdoor()+P('M0 670 Q473 603 996 664 L1000 800 L0 800Z','#BDCAA0')+R(70,628,767,32,'#A8B38A',12)+line(95,551,808,551,'#90A47D',12)+[119,283,455,622,785].map(x=>line(x,549,x,636,'#8DA279',10)+leaf(x,571,.34,'#A4B68C',-49)).join('');}
function cloudCabin(candy=false){return R(0,0,1000,800,'#E3E5D4',0)+R(0,640,1000,160,'#C5CDB4',0)+E(748,274,148,155,'#C7D8CE')+E(748,274,129,136,'#B6D1D3')+(candy?P('M632 292 L748 211 L861 291Z','#D7B6B3')+R(651,294,192,105,'#E6D5B9',8)+R(686,316,121,70,'#B8C5A6',8):cloud(765,241,.53,'#EBECDF')+P('M632 367 Q740 302 862 352 L862 401 L633 401Z','#BBCDA5'))+line(748,144,748,406,'#DCE4D1',8)+line(624,275,871,275,'#DCE4D1',8)+bench(310,652,.88)+bench(673,650,.76);}
function flowerCake(x,y,s=1){return G(x,y,s,[0,72,144,216,288].map(r=>G(0,0,1,E(0,-17,16,22,'#E7CB98'),r)).join('')+E(0,0,12,11,'#CAAB7A'));}
function candyStreet(){return R(0,0,1000,800,'#D2DDD2',0)+R(0,626,1000,174,'#C2BB99',0)+R(595,254,341,365,'#DBC8A5',15)+P('M561 254 L765 102 L972 254Z','#C3A8AF')+R(630,328,270,174,'#A5B9AD',16)+R(642,341,245,147,'#D6DFCA',9)+[682,759,836].map(x=>flowerCake(x,444,.71)).join('')+R(618,503,296,20,'#B9A079',4)+line(574,309,574,373,'#A89976',3)+E(574,391,15,20,'#DAC286')+[0,1,2,3,4].map(j=>flowerCake(93+j*180,721+j%2*33,.36)).join('');}
function lakeDock(){return R(0,0,1000,800,'#CEDDD4',0)+P('M0 419 Q233 310 477 432 Q736 327 1000 408 L1000 800 L0 800Z','#ADC4A3')+R(0,535,1000,265,'#AAC8C4',0)+P('M0 596 L486 596 L530 800 L0 800Z','#BAA681')+[88,180,272,364,456].map(x=>line(x,602,x+21,800,'#A18D6D',3)).join('')+line(26,535,445,535,'#A79773',9)+[40,165,291,420].map(x=>line(x,535,x,599,'#A79773',8)).join('')+[0,1,2].map(j=>P(`M${572+j*140} ${741-j%2*43} q44 -12 87 0`,'none','#D1DFCE',4)).join('');}
function waterDrop(x,y,s=1){return G(x,y,s,P('M0 -33 Q-29 2 -18 19 Q0 40 18 19 Q29 2 0 -33Z','#BCDDE0','',0,'fill-opacity=".90"')+E(-7,7,5,9,'#EFF2E2'));}
function lilyLeaf(x,y,s=1,drop=false){return G(x,y,s,P('M-103 -7 Q-80 -67 23 -46 Q104 -41 111 10 Q34 64 -78 33 Q-108 17 -103 -7Z','#98B794')+P('M-78 31 L12 7 L84 -24 M11 7 L-56 -31 M11 7 L44 43','none','#C1D0AB',3)+(drop?waterDrop(34,-2,.69):''));}
function lakeDestinationScene(i,cover){
 if(cover)return lakeDock()+sitKid('栗芽坐',310,685,1.17,'hold')+lilyLeaf(741,667,1.24,true)+cloudCar(748,297,.42)+P('M674 679 Q703 657 724 666','none','#D3DFC4',4);
 return [
 ()=>vinePlatform()+cloudCar(681,514,.94,true)+kid('栗芽',292,747,1.15,'hold')+rideTicket(308,611,.65),
 ()=>cloudCabin()+sitKid('栗芽坐',273,649,1.11,'hold')+sitKid('小猪',603,647,.90,'point')+sitKid('小鸭',799,647,.90,'hold'),
 ()=>candyStreet()+cloudCar(337,441,.73,true)+kid('小猪',505,744,.83,'wave')+kid('小鸭',665,742,.85,'hold')+kid('栗芽',331,746,1.07,'hold'),
 ()=>candyStreet()+kid('栗芽',411,745,1.18,'think')+cloudCar(363,166,.15),
 ()=>candyStreet()+bench(292,671,.97)+sitKid('栗芽坐',287,669,1.13,'hold')+rideTicket(298,614,.83,true)+line(117,375,117,625,'#98A783',8)+R(67,368,103,66,'#CBD5B7',12)+cloud(119,392,.17,'#F0EFDF'),
 ()=>vinePlatform()+cloudCar(686,512,.93,true)+kid('栗芽',293,747,1.15,'point')+rideTicket(430,540,.68)+pinwheel(867,337,.44,23),
 ()=>lakeDock()+cloudCar(733,433,.65,true)+sitKid('栗芽坐',309,686,1.17,'hold')+lilyLeaf(741,676,1.02,true),
 ()=>lakeDock()+sitKid('栗芽坐',309,686,1.17,'hold')+lilyLeaf(741,667,1.24,true)+P('M674 679 Q703 657 724 666','none','#D3DFC4',4)
 ][i]();
}
function fruitIsland(){return R(0,0,1000,800,'#D4DFD4',0)+E(801,143,61,61,'#E9DCAC')+R(0,421,1000,379,'#ADC7C5',0)+P('M163 800 L197 559 Q520 462 874 556 L927 800Z','#C2C69D')+stall(745,563,1.03,'#BCBFA0')+basket(746,531,.67,false)+leaf(744,532,.16,'#A6B286',-33)+[63,923].map(x=>P(`M${x} 606 q26 -10 53 0 M${x-7} 655 q31 -13 63 0`,'none','#CEDCCB',4)).join('');}
function sadStone(x,y,s=1,mood='neutral',mark=0,pose='hold'){let a=E(-35,-6,29,23,'#ACB3A2')+E(35,-6,29,23,'#ACB3A2')+E(0,-118,89,121,'#B6BEAE')+P('M-72 -104 L72 -104 L68 -23 Q0 4 -68 -23Z','#DCC78A')+R(-51,-132,17,66,'#E2CF96',5)+R(34,-132,17,66,'#E2CF96',5)+E(-43,-88,5,5,'#A49265')+E(43,-88,5,5,'#A49265')+line(-62,-141,66,-56,'#8DA07B',7)+R(43,-85,56,65,'#9BB58A',12)+[[-34,-217],[0,-229],[34,-217]].map(([xx,yy])=>E(xx,yy,9,7,'#E8EBDD')).join('');a+=(mood==='eyesClosed'?P('M-37 -165 Q-27 -159 -17 -165 M17 -165 Q27 -159 37 -165','none',ink,3):E(-27,-165,6,7,ink)+E(27,-165,6,7,ink))+E(0,-148,8,5,'#87927D');a+=P(mood==='sad'||mood==='tear'?'M-15 -120 Q0 -136 16 -120':mood==='smile'?'M-16 -128 Q0 -111 17 -128':mood==='effort'?'M-17 -128 Q0 -119 17 -128':'M-14 -123 Q0 -121 15 -123','none','#6F7F6D',3);if(mood==='tear')a+=waterDrop(-34,-132,.27);if(mark)a+=E(-18,-51,10,9,mark===2?'#C4B881':'#ADAC7E');if(pose!=='none')a+=arm(-71,-109,pose==='point'?63:47,pose==='point'?-15:53,'#B6BEAE',24)+arm(71,-109,pose==='point'?54:-47,pose==='point'?-18:53,'#B6BEAE',24);return G(x,y,s,a);}
function pearSlice(x,y,s=1,bitten=false){return G(x,y,s,P('M-23 17 Q-36 -12 -8 -44 Q-1 -58 9 -40 Q30 -13 25 17 Q0 34 -23 17Z','#E3DFB6')+P('M-14 16 Q-26 -12 -5 -41 Q0 -52 5 -38 Q22 -10 17 16 Q0 27 -14 16Z','#F2ECD2')+E(0,-4,3,6,'#A7986B')+(bitten?E(19,-20,10,9,'#D2DDCF')+E(23,-6,10,10,'#D2DDCF'):''));}
function pearPlates(left=3,right=3){return plate(497,656,.82)+plate(666,656,.82)+Array.from({length:left},(_,j)=>pearSlice(472+j*24,642,.48)).join('')+Array.from({length:right},(_,j)=>pearSlice(641+j*24,642,.48)).join('');}
function stoneSnackPair(mood='sad',mark=0){return stool(352,653,.98)+sadStone(352,682,1.12,mood,mark)+stool(792,651,.95)+sitKid('梨芽',792,650,1.02,'hold')+desk(584,692,.86);}
function pearFeelingsScene(i,cover){
 if(cover)return fruitIsland()+stoneSnackPair('smile',2)+pearPlates(1,1)+pearSlice(375,590,.73,true)+pearSlice(755,587,.72)+P('M379 620 L375 595','none','#B6BEAE',21)+P('M756 613 L755 590','none','#B19879',18);
 return [
 ()=>fruitIsland()+P('M0 756 L341 606 L403 659 L191 800Z','#BCA57C')+line(41,661,302,546,'#A79771',11)+line(188,744,420,641,'#A79771',11)+[88,176,264].map((x,j)=>line(x,642-j*38,x,709-j*38,'#A79771',9)).join('')+sadStone(342,748,1.15,'smile')+stool(801,655,.93)+sitKid('梨芽',801,655,1.04,'hold')+plate(393,670,.44)+plate(411,690,.44),
 ()=>fruitIsland()+kid('河狸',802,675,.94,'point',true)+R(599,566,290,110,'#BFC3A1',5)+R(584,540,320,28,'#D3B68B',5)+basket(746,531,.67,false)+leaf(744,532,.16,'#A6B286',-33)+sadStone(406,747,1.17,'sad')+plate(411,681,.65)+plate(439,711,.65)+stool(583,666,.86),
 ()=>fruitIsland()+stoneSnackPair('effort')+pearPlates(3,3),
 ()=>fruitIsland()+stoneSnackPair('eyesClosed')+pearPlates(2,3)+pearSlice(390,536,.77)+P('M379 621 Q393 583 390 541','none','#B6BEAE',21),
 ()=>fruitIsland()+stool(372,653,.98)+sadStone(372,682,1.12,'tear',1)+stool(726,651,.95)+sitKid('梨芽',726,650,1.02,'hold')+desk(584,692,.86)+pearPlates(3,3),
 ()=>fruitIsland()+stoneSnackPair('neutral',1)+pearPlates(2,3)+pearSlice(392,566,.76)+P('M379 620 Q392 604 392 570','none','#B6BEAE',21)+E(385,556,4,7,'#D5E2D2'),
 ()=>fruitIsland()+stoneSnackPair('smile',1)+pearPlates(1,2)+pearSlice(375,590,.73,true)+pearSlice(755,587,.72)+P('M379 620 L375 595','none','#B6BEAE',21)+P('M756 613 L755 590','none','#B19879',18),
 ()=>fruitIsland()+stoneSnackPair('smile',2)+pearPlates(0,0)
 ][i]();
}
function greenhouse(){return R(0,0,1000,800,'#D3E0D1',0)+P('M0 262 L500 0 L1000 262 M0 451 L1000 451 M90 215 L90 620 M319 96 L319 620 M680 96 L680 620 M913 215 L913 620','none','#A6B6A0',13)+R(0,624,1000,176,'#C2B99A',0)+tree(822,622,.79,'#A7BD8E')+[[763,370],[830,332],[895,371],[777,432],[860,435]].map(([x,y])=>E(x,y,18,21,'#D8B575')+leaf(x,y-15,.17,'#8FA679',18)).join('')+R(75,402,259,28,'#B4C7BD',7)+R(95,430,19,187,'#A0AD9B',4)+R(294,430,19,187,'#A0AD9B',4)+E(201,405,97,25,'#8FAEA9')+E(201,403,80,17,'#B3D1CF')+P('M153 371 L153 330 Q153 302 184 302 Q216 302 216 333','none','#91AAA6',10)+R(728,613,166,23,'#B49C72',6)+R(743,635,17,111,'#9F8966',5)+R(862,635,17,111,'#9F8966',5);}
function waterCan(x,y,s=1,full=true){return G(x,y,s,P('M-64 -71 Q-125 -114 -127 -36 Q-123 11 -67 -21','none','#91AC8B',16)+P('M56 -71 Q107 -82 114 -137 L141 -141 Q148 -73 68 -23Z','#A8C09C')+E(0,-39,82,79,'#A8C09C')+E(0,-108,58,19,'#879C7E')+E(0,-108,48,12,full?'#B1D2CF':'#6F8775')+G(4,-40,.77,[0,72,144,216,288].map(r=>G(0,0,1,E(0,-16,11,17,'#EBEDDD'),r)).join('')+E(0,0,9,9,'#D9C68D'))+E(-27,-73,5,6,ink)+E(26,-73,5,6,ink)+P('M-10 -56 Q0 -47 11 -56','none','#6F866F',3));}
function pail(x,y,s=1,half=false){return G(x,y,s,P('M-55 -58 Q-58 -123 0 -123 Q58 -123 55 -58','none','#A7A78A',7)+P('M-63 -62 L-48 44 Q0 66 48 44 L63 -62Z','#C1BE9C')+E(0,-61,63,19,'#9AAB98')+(half?E(0,-10,53,16,'#B4D6D1'):'')+P('M-61 -60 Q-55 37 -48 44 Q0 66 48 44 Q55 37 61 -60 L49 -45 L40 31 Q0 49 -40 31 L-49 -45Z','#D1CAA8')+P('M-61 -60 Q0 -34 61 -60','none','#B7B697',6));}
function waterCup(x,y,s=1,full=true,r=0){return G(x,y,s,R(-25,-37,50,44,'#E1DFBF',6)+E(0,-37,25,8,full?'#AED1D0':'#C3CBB1')+P('M25 -28 Q48 -33 44 -11 Q38 2 26 -4','none','#C9CFB4',7),r);}
function waterTravelScene(i,cover){
 if(cover)return greenhouse()+kid('橘栗',378,746,1.17,'hold')+waterCan(788,584,.72,true)+pail(555,711,.69,false)+pail(663,733,.68,false)+waterCup(440,618,.68,false);
 return [
 ()=>greenhouse()+kid('橘栗',392,747,1.17,'hold')+waterCan(604,706,1.01,true)+waterCup(285,399,.64,false),
 ()=>greenhouse()+kid('橘栗',419,747,1.17,'back')+waterCan(611,704,1.02,true)+P('M369 567 Q409 659 546 683 M469 567 Q520 619 652 686','none','#AAA695',19),
 ()=>greenhouse()+sitKid('橘栗',391,674,1.14,'low')+waterCan(609,703,1.02,true)+E(544,749,43,12,'#B4D1CB')+P('M451 655 Q470 709 521 744','none','#AAA695',18)+R(516,734,57,30,'#E1E3CC',7)+E(621,575,5,8,'#ACCFCB'),
 ()=>greenhouse()+sitKid('橘栗',409,674,1.14,'think')+waterCan(613,706,1.02,true)+waterCup(285,399,.64,false),
 ()=>greenhouse()+kid('橘栗',403,745,1.15,'hold')+waterCan(608,706,1.02,true)+waterCup(421,607,.80,true)+pail(178,713,.61,false)+pail(298,740,.61,false),
 ()=>greenhouse()+kid('橘栗',626,747,1.14,'back')+waterCan(801,577,.91,false)+P('M577 572 Q640 624 741 615 M675 572 Q742 570 817 621','none','#AAA695',18)+pail(344,727,.72,true)+pail(487,728,.72,true)+waterCup(285,399,.64,false),
 ()=>greenhouse()+kid('橘栗',604,746,1.14,'back')+waterCan(802,577,.91,true)+pail(568,735,.71,false)+pail(414,736,.71,false)+waterCup(755,449,.72,true,28)+P('M653 570 Q706 500 745 463 M555 570 Q566 623 582 641','none','#AAA695',18)+P('M774 446 Q791 450 804 489','none','#ACCFCB',6),
 ()=>greenhouse()+sitKid('橘栗',634,684,1.07,'hold')+waterCan(802,577,.91,true)+pail(429,738,.69,false)+pail(550,738,.69,false)+waterCup(285,399,.64,false)+P('M680 604 Q719 565 773 558','none','#AAA695',17)
 ][i]();
}
function friendBubble(x,y,r=40,gold=false){return E(x,y,r,r,gold?'#E8D498':'#D8BBC3','fill-opacity=".30" stroke="'+(gold?'#D8C17F':'#C6B6CA')+'" stroke-width="3"')+P(`M${x-r*.63} ${y-r*.1} Q${x-r*.58} ${y-r*.63} ${x-r*.07} ${y-r*.75}`,'none','#F0EBDD',4)+E(x-r*.23,y-r*.09,3.5,4.5,ink)+E(x+r*.23,y-r*.09,3.5,4.5,ink)+P(`M${x-r*.15} ${y+r*.24} Q${x} ${y+r*.34} ${x+r*.16} ${y+r*.24}`,'none','#857C7D',2);}
function seaRoom(ball=true){return interior(false,'#DDD6BF')+R(690,100,195,308,'#BFD9D8',78)+P('M693 318 Q732 300 773 318 Q816 296 882 317 L882 402 L693 402Z','#9DBFC6')+P('M704 348 q33 -14 64 0 M792 378 q33 -14 64 0','none','#D2E1D5',4)+line(788,101,788,405,'#D4C4A4',8)+line(690,260,888,260,'#D4C4A4',8)+basket(144,735,.75,false)+(ball?E(144,701,36,35,'#DFCA85')+P('M125 675 Q145 700 164 678 M113 713 Q146 698 177 711','none','#BDAB77',3):'');}
function toyCar(x,y,s=1){return G(x,y,s,E(-59,14,23,24,'#939D8A')+E(59,14,23,24,'#939D8A')+R(-91,-55,182,57,'#B8C1A0',5)+R(-40,-112,82,58,'#C9AF92',6)+R(-27,-98,55,34,'#D5DCC2',4));}
function gate(x,y,s=1,c='#C49288'){return G(x,y,s,R(-102,-145,38,145,c,4)+R(64,-145,38,145,c,4)+R(-107,-182,214,39,c,4));}
function whisper(x,y,s=1){return G(x,y,s,P('M0 0 Q35 -9 60 5 M4 17 Q38 11 59 25','none','#D3DDCD',3));}
function bubbleDoorScene(i,cover){
 const table=()=>desk(627,706,1.66);
 if(cover)return seaRoom()+kid('梨泡',319,747,1.16,'think')+table()+gate(550,644,.65,'#9EB9C5')+gate(774,644,.71,'#D9C486')+friendBubble(774,564,39,true)+P('M858 100 L842 578 L718 578Z','#EEE2AD','',0,'opacity=".22"');
 return [
 ()=>seaRoom()+kid('梨泡',402,747,1.18,'low')+stool(607,662,1.03)+friendBubble(726,445,43)+P('M464 636 L555 652','none','#B9A183',18),
 ()=>seaRoom(false)+kid('梨泡',402,748,1.19,'hold')+E(412,606,59,59,'#E0CB88')+P('M371 565 Q416 606 455 571 M354 624 Q413 599 469 627','none','#C2AF7C',4)+friendBubble(553,487,43),
 ()=>seaRoom()+sitKid('梨泡',392,675,1.14,'reach')+toyCar(650,705,1.08)+friendBubble(513,489,43)+P('M486 637 Q544 660 579 670','none','#B9A183',18)+whisper(728,483,1),
 ()=>seaRoom()+stool(358,662,1.01)+sitKid('梨泡',358,661,1.15,'think')+desk(659,691,1.09)+friendBubble(473,504,42)+toyCar(806,736,.54),
 ()=>seaRoom()+kid('梨泡',389,748,1.19,'hold')+friendBubble(627,510,44)+whisper(464,497,1.13)+toyCar(809,736,.54),
 ()=>seaRoom()+kid('梨泡',306,747,1.15,'think')+table()+gate(646,646,1,'#C59389')+friendBubble(797,470,42)+whisper(385,494,1.35)+toyCar(896,749,.43),
 ()=>seaRoom()+kid('梨泡',275,747,1.13,'point')+table()+gate(490,646,.64,'#C59389')+gate(670,646,.64,'#9CB8C6')+gate(850,646,.64,'#D9C486')+friendBubble(490,571,37)+whisper(354,507,.82)+toyCar(897,749,.43),
 ()=>seaRoom()+table()+gate(490,646,.64,'#C59389')+gate(670,646,.64,'#9CB8C6')+gate(850,646,.64,'#D9C486')+kid('梨泡',606,747,1.04,'think')+friendBubble(850,571,37,true)+P('M865 112 L913 624 L785 624Z','#EEE2AD','',0,'opacity=".23"')+whisper(689,529,.75)+toyCar(896,749,.43)
 ][i]();
}
const scenes={'expansion-0129':ribbonScene,'expansion-0130':ticketScene,'expansion-0131':leafTrainScene,'expansion-0132':blanketScene,'expansion-0133':lakeDestinationScene,'expansion-0134':pearFeelingsScene,'expansion-0135':waterTravelScene,'expansion-0136':bubbleDoorScene};
export function fourthYoungLastArtwork(story,index,cover=false){
 const scene=scenes[story?.id];if(!scene)throw Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw Error('Expected eight pages');
 if(!Number.isInteger(index)||index<0||index>=8)throw Error('Page index must be an integer from 0 to 7');
 return svg(scene(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

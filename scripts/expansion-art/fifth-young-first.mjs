// Eight explicit, independent eight-page storyboards for expansion-0161 through 0168.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
圆梨:['seal','#C1C8C3','#9DBCC7','coat',null,'sealcap'],
团绵:['cloud','#EEF0E5','#A8C5D3','vest',null,'greenbag'],
麦桃:['mouse','#C3A486','#A3B78D','dress'],麦桃坐:['mouse','#C3A486','#A3B78D','dress'],
豆叶:['human','#E1C4A6','#99B68D','dress',null,'beanGirl'],
朵盐:['elf','#E4CCAD','#8BB7C7','dress',null,'purpleCurl'],
蒲果:['hedgehog','#BD9F7E','#9AB38A','vest',null,'linenbag'],
豆绒:['mouse','#BDA282','#91B5C7','vest',null,'greenbag'],豆绒坐:['mouse','#BDA282','#91B5C7','vest',null,'greenbag'],
豆芽:['elf','#DFCBAC','#F0ECD8','shirt',null,'leafBoy']};
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
 if(t==='elf'&&detail!=='purpleCurl')a+=P('M-62 -222 Q-72 -284 -25 -278 L-21 -307 L-1 -279 L21 -302 L26 -276 Q73 -275 63 -223 L45 -244 L31 -260 L14 -244 L-8 -257 L-35 -243 L-48 -222Z','#A6BE87');
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
 if(detail==='sealcap')a+=P('M-62 -266 Q-62 -316 0 -316 Q63 -316 63 -266Z','#F0EFE2')+R(-66,-274,132,21,'#E2E6DB',7)+E(0,-324,15,14,'#F0EFE2')+[-43,-21,0,21,43].map(xx=>line(xx,-281,xx,-296,'#D4DED7',2)).join('');
 if(detail==='beanGirl')a+=P('M-65 -214 L-67 -266 Q-44 -302 0 -296 Q47 -303 67 -267 L66 -213 L49 -215 L47 -264 L22 -252 L-8 -266 L-45 -252 L-48 -213Z','#484C47')+R(-47,-29,30,22,'#F3EFDF',7)+R(17,-29,30,22,'#F3EFDF',7)+E(-30,-9,31,14,'#987B5F')+E(30,-9,31,14,'#987B5F')+line(-46,-177,51,-64,'#BEA05E',7)+R(31,-108,57,59,'#D7BB76',12);
 if(detail==='purpleCurl')a+=P('M-66 -224 Q-72 -290 0 -300 Q71 -291 65 -223 L47 -247 L-46 -245Z','#B9A8C7')+[[-53,-260],[-34,-282],[-8,-290],[20,-286],[46,-269]].map(([xx,yy])=>E(xx,yy,20,19,'#B9A8C7')).join('')+G(47,-265,.65,P('M-22 7 Q-24 -18 -15 -18 Q-8 -28 0 -18 Q10 -28 16 -16 Q28 -15 22 7Z','#F1EFE0')+P('M-13 3 L-13 -12 M0 3 L0 -15 M13 3 L13 -11','none','#CBCAB9',2));
 if(detail==='linenbag')a+=line(-48,-176,53,-72,'#B5A17F',7)+R(31,-112,62,65,'#DACBAB',13);
 if(detail==='leafBoy')a+=R(-48,-61,40,39,'#9B795A',5)+R(8,-61,40,39,'#9B795A',5)+P('M-14 -284 Q-67 -326 -43 -343 Q-6 -354 -5 -291 M7 -290 Q17 -347 48 -338 Q69 -306 7 -290','#A9C38F');
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function sitKid(name,x,y,s=1,pose='hold',extras=''){
 const f=C[name][1],shoe=C[name][5]==='beanGirl'?'#987B5F':['greenshoes','paperdress','paperdance','fairy'].includes(C[name][5])?'#88A579':['leafkid','leafbottle'].includes(C[name][5])?'#987B58':C[name][5]==='snowcap'?'#EFECDD':f,id=`seat-${x}-${y}-${Math.round(s*100)}`;
 return (name==='栗芽坐'?G(x,y,s,P('M44 -8 Q116 18 136 -27','none',f,8)):'')+`<defs><clipPath id="${id}"><rect x="${x-210*s}" y="${y-500*s}" width="${420*s}" height="${512*s}"/></clipPath></defs>`+G(x,y,s,arm(-27,0,-8,55,f,23)+arm(27,0,8,55,f,23)+(C[name][5]==='beanGirl'?R(-46,39,23,20,'#F3EFDF',5)+R(23,39,23,20,'#F3EFDF',5):'')+E(-35,60,25,13,shoe)+E(35,60,25,13,shoe))+`<g clip-path="url(#${id})">${kid(name,x,y+80*s,s,pose,false,extras)}</g>`;
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

function breeze(x,y,s=1){return G(x,y,s,P('M-90 -20 Q-30 -44 35 -22 Q77 -8 88 -32 M-65 10 Q-13 -6 54 15 M-16 39 Q31 26 72 40','none','#E6E8D4',5));}
function cloth(x,y,s=1,c='#E5DFC7'){return G(x,y,s,P('M-101 -23 Q-42 -7 8 -31 L109 -8 L86 53 Q9 34 -91 53Z',c)+P('M-83 36 Q0 16 91 37','none','#C9C4AD',3));}
function ship(x,y,s=1){return G(x,y,s,P('M-64 0 L69 0 L43 31 L-40 31Z','#AD9174')+line(0,-83,0,0,'#9C967B',5)+P('M-5 -80 L-5 -10 L-51 -10Z','#EEE7CC')+P('M4 -68 L46 -11 L4 -11Z','#AFC3CB'));}
function harbor(){return R(0,0,1000,800,'#D5E0D9',0)+cloud(264,172,.86,'#EFF0E1')+E(811,143,58,58,'#EAE2BA')+R(0,398,1000,402,'#ADC8CC',0)+ship(735,405,.67)+ship(413,468,.38)+P('M0 549 L1000 549 L1000 800 L0 800Z','#C4BA9D')+[64,245,426,607,788].map(x=>line(x,552,x-45,800,'#AEA487',3)).join('')+line(0,525,1000,525,'#AAA58A',10)+[60,300,600,940].map(x=>line(x,484,x,552,'#AAA58A',10)).join('');}
function seaHome(){return interior(false,'#DFD9C5')+R(690,285,199,122,'#ACC8CE',0)+ship(836,365,.25)+ship(739,390,.18)+line(788,96,788,410,'#D4C4A4',9);}
function saltStone(x,y,s=1,stage=0){let a=E(0,0,77,48,stage===3?'#A6ADA3':'#ECECE0');if(stage===1)a+=E(-30,-16,12,10,'#9FA99F');if(stage===2)a+=P('M-49 -15 Q-28 -31 -8 -13 Q7 1 24 -15','none','#737F78',10)+E(38,16,25,16,'#DFE4D8');if(stage===3)a+=[-25,0,25].map(xx=>P(`M${xx-11} -29 Q${xx+5} -14 ${xx-6} -1 Q${xx-17} 13 ${xx-2} 29`,'none','#65736D',7)).join('');a+=E(-43,1,4,5,ink)+E(43,1,4,5,ink)+P('M-10 29 Q0 36 10 29','none',ink,2);if(stage===0)a+=[[-46,-27],[-13,-35],[31,-31],[-58,22],[53,21]].map(([xx,yy])=>E(xx,yy,5,3,'#F7F5E8')).join('');return G(x,y,s,a);}
function brush(x,y,s=1,r=0){return G(x,y,s,R(-16,-42,32,58,'#C5A77C',8)+R(-23,7,46,32,'#E1D4AE',4)+[-14,-4,6,16].map(xx=>line(xx,12,xx,38,'#B9AF91',2)).join(''),r);}
function saltScene(i,cover){
 const table=()=>desk(644,663,1.22);const child=(pose='hold')=>kid('圆梨',329,742,1.16,pose);
 if(cover)return seaHome()+child('point')+desk(687,650,1.08)+plate(689,618,1.58)+saltStone(686,599,1.40,3)+cup(850,607,.78);
 return [
 ()=>harbor()+bench(655,616,1.0)+sitKid('圆梨',359,655,1.10,'low')+saltStone(659,686,.72,0),
 ()=>harbor()+bench(775,611,.65)+kid('圆梨',431,745,1.35,'hold')+saltStone(433,566,.89,0),
 ()=>seaHome()+kid('圆梨',470,742,1.16,'back')+table()+cloth(643,622,.99)+saltStone(635,610,.83,0)+brush(797,628,.57,87)+P('M420 563 Q478 611 559 621 M520 563 Q557 557 594 595','none','#C1C8C3',21)+E(702,629,3,3,'#F4F1E6')+E(715,635,3,3,'#F4F1E6'),
 ()=>seaHome()+kid('圆梨',443,742,1.16,'back')+table()+cloth(638,624,1.02)+saltStone(636,606,.91,1)+P('M393 563 Q419 573 456 570 M493 563 Q540 581 586 596','none','#C1C8C3',21)+cup(456,570,.8)+P('M476 547 Q534 554 600 578','none','#BDD8D9',4)+E(604,582,4,6,'#C2DFDF')+brush(804,624,.55,86),
 ()=>seaHome()+child('point')+table()+cloth(627,629,.88)+saltStone(627,608,.82,1)+cup(785,610,.71)+plate(843,411,.55)+P('M816 410 Q841 419 867 410','none','#F5F4E8',6),
 ()=>seaHome()+stool(335,659,.9)+sitKid('圆梨',335,659,1.12,'hold')+table()+bowl(648,610,1.54,'#B5D5D5')+saltStone(648,591,.79,2)+P('M550 600 Q648 648 746 600','none','#D1BA91',9)+brush(823,638,.5,90),
 ()=>seaHome()+kid('圆梨',440,742,1.16,'back')+table()+bowl(792,609,.9,'#B6D8D8')+P('M390 563 Q454 594 524 574 M490 563 Q551 577 609 580','none','#C1C8C3',21)+cloth(588,583,.9)+saltStone(586,568,.96,3),
 ()=>seaHome()+stool(366,658,1.0)+sitKid('圆梨',366,659,1.14,'hold')+plate(791,411,1.25)+saltStone(791,387,.90,3)+R(647,426,275,17,'#BAA581',5)
 ][i]();
}
function beetle(x,y,s=1,kind='friend',pose='hold',flip=false,forward=false){const c=kind==='gran'?'#806B53':'#A58260';let a=E(0,0,84,12,'#61715D','opacity=".12"')+E(-27,-11,28,14,c)+E(27,-11,28,14,c)+E(0,-99,71,87,c)+line(0,-174,0,-30,'#7C684E',4)+E(0,-209,59,53,c)+(forward?P('M-31 -246 Q-33 -283 -17 -311 M31 -246 Q61 -285 67 -312','none',c,7)+E(-17,-312,7,7,c)+E(67,-312,7,7,c):P('M-31 -246 Q-61 -290 -53 -311 M31 -246 Q61 -290 53 -311','none',c,7)+E(-53,-312,7,7,c)+E(53,-312,7,7,c));a+=P('M-50 -174 L50 -174 L62 -63 Q0 -47 -62 -63Z',kind==='gran'?'#EBE4CB':kind==='sesame'?'#AAC5AF':'#B4BFA0')+face(0,-211,.89);if(kind==='friend')a+=P('M-60 -244 Q-53 -299 6 -291 Q52 -294 61 -244Z','#BF8D7D')+R(-64,-249,128,18,'#D0A08D',7);if(kind==='gran')a+=R(-28,-125,56,32,'#D9CCAA',6);const poses={hold:[[40,48],[-40,48]],wave:[[-18,55],[44,-69]],point:[[-7,65],[79,-2]],back:null};if(poses[pose])a+=arm(-49,-143,...poses[pose][0],c,19)+arm(49,-143,...poses[pose][1],c,19);return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);}
function letter(x,y,s=1,green=false,opened=false,r=0){return G(x,y,s,opened?paper(0,0,.85,P('M-61 -36 L52 -36 M-61 -12 L65 -12 M-61 12 L38 12 M-61 36 L55 36','none','#A4B2A5',4)):R(-84,-53,168,106,green?'#AAC49A':'#F0E7CE',8,'stroke="#BCC3A8" stroke-width="3"')+P('M-79 -48 L0 8 L79 -48 M-79 47 L-22 -6 M79 47 L22 -6','none',green?'#829D7A':'#BAC5AF',3)+(green?cucumber(53,-30,.35,true):E(0,8,9,9,'#D0B879')),r);}
function cucumber(x,y,s=1,bent=false){return G(x,y,s,P(bent?'M-41 -22 Q-23 47 43 17 Q7 76 -48 20 Q-65 -9 -41 -22Z':'M-13 -77 Q-31 -63 -26 -22 L-18 65 Q-8 84 9 72 L22 -29 Q26 -69 7 -78Z','#86A578')+(bent?P('M-43 -7 Q-27 43 25 26','none','#B7C78F',3):P('M-5 -64 L-2 59','none','#B9CB99',4)) );}
function mailbox(x,y,s=1,open=false,post=true,inside=''){return G(x,y,s,(post?R(-10,14,20,119,'#A99470',4):'')+R(-90,-125,180,143,'#B6C6B2',21)+R(-73,-103,145,98,open?'#718B80':'#CAD7BE',12)+inside+(open?P('M-73 -5 L72 -5 L105 43 L-46 43Z','#D6DFC7'):line(-49,-66,50,-66,'#91AA96',8))+R(81,-117,13,41,'#B99A73',4)+P('M92 -117 L127 -117 L127 -94 L92 -94Z','#C9A27F'));}
function postHome(sunset=false){return interior(false,sunset?'#E1CEB7':'#DADBC2')+E(787,242,114,153,'#B8C8B8')+E(787,242,98,137,sunset?'#DDAF94':'#C6DBD2')+(sunset?P('M719 210 Q757 154 870 230 Q837 255 758 238Z','#CD937B')+leaf(719,212,.28,'#BDA77F',-70):cloud(785,236,.46,'#EBEDD9'))+R(654,412,268,20,'#BAA581',5);}
function postOutside(){return outdoor()+R(563,253,398,401,'#D5CFAB',38)+P('M529 265 L745 115 L985 265Z','#AEB89B')+R(683,373,179,280,'#9CAC93',82)+E(611,351,32,37,'#A9C6C4')+P('M613 321 L613 382 M584 352 L641 352','none','#DACCAF',5)+R(583,650,348,21,'#B3A17C',7);}
function mailScene(i,cover){
 if(cover)return postOutside()+kid('团绵',405,738,1.23,'hold')+letter(414,577,.94,true)+mailbox(725,591,1.1,true)+cucumber(812,707,.39);
 return [
 ()=>postHome()+kid('团绵',366,742,1.15,'hold')+letter(369,601,.59)+bag(548,659,1.87)+letter(548,581,.54)+mailbox(783,628,1.0,true),
 ()=>postOutside()+kid('团绵',430,743,1.19,'back')+mailbox(663,613,1.16,true)+P('M379 560 Q420 595 466 573 M481 560 Q521 536 571 555','none','#EEF0E5',22)+leaf(481,593,.44,'#D8BB75',-36),
 ()=>postHome()+kid('团绵',450,742,1.16,'back')+desk(639,670,1.25)+letter(621,618,.75,false,true,-4)+P('M400 564 Q455 608 533 614 M500 564 Q530 555 552 590','none','#EEF0E5',22)+line(551,589,584,541,'#AF946A',9)+letter(781,629,.50),
 ()=>postOutside()+stool(381,655,1.10)+sitKid('团绵',381,653,1.13,'hold')+letter(389,623,.66,false,true)+letter(518,720,.44)+mailbox(700,586,1.03,true),
 ()=>postOutside()+kid('团绵',337,744,1.17,'hold')+mailbox(337,642,.72,false,false)+beetle(724,745,1.05,'friend','back')+P('M673 595 Q632 574 587 564','none','#A58260',19)+cucumber(581,551,.65)+arm(774,595,8,61,'#A58260',19),
 ()=>postOutside()+kid('团绵',317,744,1.13,'point')+mailbox(532,619,.85,true)+beetle(767,744,1.06,'friend','hold')+letter(768,631,.44,false,true)+cucumber(579,733,.44),
 ()=>postOutside()+kid('团绵',395,745,1.28,'hold')+letter(398,570,1.02,true)+mailbox(733,602,1.07,true),
 ()=>postHome(true)+kid('团绵',362,742,1.16,'hold')+letter(364,600,.70,false,true)+R(689,537,241,151,'#B4BBA2',32)+R(700,546,128,61,'#E7E2C9',23)+letter(782,593,.50,true)+desk(595,697,.91)+paper(591,657,.51)+line(657,636,673,684,'#AD9069',6)
 ][i]();
}
function bread(x,y,s=1,bitten=false){return G(x,y,s,P('M-40 6 Q-51 -37 -13 -44 Q28 -55 43 -15 L41 15 Q0 33 -40 6Z','#D4AD73')+P('M-22 -29 L-10 -14 M-3 -35 L9 -19 M17 -31 L28 -17','none','#EBD19E',6)+(bitten?E(35,-20,10,9,'#D0D2AC')+E(42,-4,11,10,'#D0D2AC'):''));}
function wheat(x,y,s=1,color='#8EAEB8'){return G(x,y,s,line(0,24,0,-39,color,3)+[-27,-10,7].map(yy=>P(`M0 ${yy} Q-22 ${yy-20} -21 ${yy-5} Q-12 ${yy+9} 0 ${yy+6} M0 ${yy+7} Q22 ${yy-13} 21 ${yy+2} Q12 ${yy+16} 0 ${yy+13}`,color)).join(''));}
function clothBag(x,y,s=1,state='full',unbutton=false){const short=['short','eat'].includes(state),flat=state==='flat',h=short?154:flat?170:284,w=state==='slim'?65:state==='wind'?124:98;let a=E(-36,-9,25,17,'#DAD6BD')+E(36,-9,25,17,'#DAD6BD')+P(`M${-w} ${-h} Q0 ${-h-21} ${w} ${-h} L${w-6} -40 Q0 4 ${-w+6} -40Z`,'#E9E4CE','none');a+=P(`M${-w+6} ${-h+22} Q0 ${-h+4} ${w-6} ${-h+22}`,'none','#CCC8B0',4);if(!short){a+=E(0,-h+4,w-8,16,'#A9AB93');if(state==='slim')a+=bread(-24,-h+3,.43)+bread(24,-h+1,.43);a+=E(-57,-h+28,8,8,'#967E5D')+E(57,-h+28,8,8,'#967E5D')+E(-57,-121,10,5,'none','stroke="#B0AA8A" stroke-width="3"')+E(57,-121,10,5,'none','stroke="#B0AA8A" stroke-width="3"');}else{a+=P('M-96 -151 Q0 -180 96 -151 L85 -91 Q0 -68 -85 -91Z','#DFDBC3')+line(-82,-106,83,-106,'#C8C3A9',3)+E(-57,-100,9,9,'#967E5D')+E(57,unbutton?-148:-100,9,9,'#967E5D')+(unbutton?E(57,-100,10,5,'none','stroke="#AAA180" stroke-width="3"'):'');}a+=face(0,short?-65:flat?-105:-174,.70)+wheat(0,short?-35:flat?-54:-92,.52);if(state==='straw')a+=[-62,-29,5,34,62].map((xx,j)=>line(xx,-h+9,xx+(j%2?17:-12),-h-75-j%3*10,'#CBB274',4)).join('');if(flat)a+=P('M-95 -165 L-58 -107 L82 -90 L98 -137','none','#CCC8B0',5);return G(x,y,s,a,state==='wind'?12:0);}
function mill(){return interior(false,'#DAD5BF')+R(71,482,261,143,'#B2B7A3',22)+E(201,482,148,51,'#C6C9B5')+E(201,473,125,35,'#DADCC9')+R(186,422,20,61,'#A39271',5)+R(195,419,118,15,'#B19C79',6)+basket(800,662,.77,false);}
function millDoor(){return outdoor()+R(0,190,445,479,'#D4CBB0',5)+P('M-20 190 L210 68 L460 190Z','#B0AD8D')+R(200,355,190,315,'#A7AF96',85)+P('M420 800 Q469 642 718 578 L788 618 Q557 717 582 800Z','#D0C5A1')+tree(831,560,.78,'#ACC08E')+[[768,312],[838,278],[885,348]].map(([x,y])=>E(x,y,18,23,'#D4C57D')).join('');}
function bagScene(i,cover){
 if(cover)return millDoor()+kid('麦桃',366,735,1.16,'wave')+clothBag(654,733,1.37,'short')+plate(688,738,.64)+bread(671,723,.44)+bread(709,725,.44);
 return [
 ()=>mill()+kid('麦桃',426,741,1.13,'point')+clothBag(689,739,1.16,'full')+E(689,413,70,13,'#D8BF84')+[0,1,2,3,4].map(j=>E(643+j*24,413+j%2*4,5,3,'#B99D65')).join(''),
 ()=>mill()+kid('麦桃',435,741,1.18,'back')+clothBag(656,741,1.15,'slim')+P('M384 559 Q464 581 547 518 M486 559 Q537 522 581 498','none','#C3A486',21)+plate(588,496,.65),
 ()=>millDoor()+clothBag(537,743,1.14,'wind')+kid('麦桃',287,738,1.07,'wide')+breeze(785,476,1.05)+leaf(772,681,.3,'#CFBF80',71),
 ()=>millDoor()+kid('麦桃',381,742,1.13,'back')+clothBag(562,741,1.13,'straw')+P('M332 568 Q400 517 480 457 M430 568 Q474 498 511 424','none','#C3A486',20)+line(510,423,544,363,'#CBB274',4),
 ()=>millDoor()+R(201,651,465,53,'#BCBCA1',20)+sitKid('麦桃坐',298,653,1.03,'hold')+clothBag(554,701,1.13,'flat')+[-13,0,16].map(d=>line(724+d,698,822+d,639,'#CBB274',4)).join('')+breeze(783,469,.9),
 ()=>millDoor()+kid('麦桃',487,742,1.14,'back')+clothBag(638,740,1.36,'short')+P('M438 567 Q477 632 554 604 M536 567 Q619 558 706 604','none','#C3A486',20),
 ()=>millDoor()+kid('麦桃',405,740,1.10,'wave')+clothBag(649,744,1.32,'short')+breeze(763,454,1.0)+leaf(783,621,.26,'#D2C287',82),
 ()=>outdoor()+tree(771,523,1.01,'#A5BD8D')+E(683,216,18,24,'#D5C783')+E(836,239,18,24,'#D5C783')+sitKid('麦桃坐',340,666,1.14,'hold')+clothBag(640,741,1.31,'eat',true)+bread(346,607,.69,true)+bread(636,648,.68,true)+plate(500,729,.71)+[[-13,2],[2,7],[13,0]].map(([x,y])=>E(640+x,696+y,3,3,'#B99C66')).join('')
 ][i]();
}
function cloudHorse(x,y,s=1,low=false,flip=false){let a=E(0,0,209,18,'#56735D','opacity=".11"');const h=low?62:126;
 a+=P(`M-108 ${-h+19} L-111 ${low?-23:-17} Q-97 4 -73 -7 L-73 ${-h+13} M48 ${-h+19} L48 ${low?-21:-15} Q65 4 87 -8 L88 ${-h+18}`,'#CDD7CD');
 a+=P(`M-159 ${-h-15} Q-214 ${-h-14} -211 ${-h-70} Q-169 ${-h-60} -148 ${-h-44}Z`,'#E2E7DB');
 a+=E(-18,-h-48,156,70,'#F0F0E3')+[-122,-67,-5,58,109].map((xx,j)=>E(xx,-h-88+j%2*8,43,30,'#F0F0E3')).join('');
 a+=P(`M88 ${-h-47} Q113 ${-h-154} 157 ${-h-169} Q188 ${-h-145} 182 ${-h-80} L151 ${-h-14}Z`,'#F0F0E3')+E(153,-h-167,49,50,'#F0F0E3')+E(187,-h-141,47,31,'#F0F0E3')+E(125,-h-209,15,25,'#E7EBDE')+E(168,-h-213,14,25,'#F0F0E3');
 a+=P(`M128 ${-h-208} Q94 ${-h-195} 104 ${-h-171} Q78 ${-h-151} 99 ${-h-129} Q76 ${-h-105} 95 ${-h-83}`,'none','#C6D0C7',18)+E(171,-h-174,5,7,ink)+E(218,-h-139,4,4,'#9FAC9E')+P(`M193 ${-h-124} Q204 ${-h-116} 216 ${-h-126}`,'none','#88988B',3);
 a+=low?P('M-118 -71 Q-153 -23 -116 -19 L-72 -19 M39 -73 Q11 -25 41 -20 L83 -20','none','#EFF0E2',27):P(`M-127 ${-h+2} L-134 -19 Q-122 5 -96 -10 L-94 ${-h+2} M29 ${-h+4} L28 -17 Q42 4 68 -10 L69 ${-h+6}`,'#EFF0E2');
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);}
function longBridge(){return outdoor()+P('M0 438 L1000 438 L1000 607 L0 607Z','#ABC9CB')+P('M422 483 L1000 483 L1000 622 L423 622Z','#CBC6AD')+line(426,460,1000,460,'#B6B7A1',14)+line(426,587,1000,587,'#B4B29B',13)+[455,575,695,815,935].map(x=>line(x,458,x,495,'#B7B7A0',12)+line(x,583,x,621,'#AEAE96',12)).join('')+P('M20 717 Q365 633 636 675 L711 800 L0 800Z','#B9CAA1');}
function lily(x,y,s=1){return G(x,y,s,E(0,0,77,23,'#94B392')+P('M-66 5 L0 0 L52 -15','none','#B8CCA6',3)+[-65,-33,0,33,65].map(r=>G(0,-7,1,E(0,-20,12,29,'#F2F0DE'),r)).join('')+E(0,-7,14,9,'#DCCC94'));}
function horseScene(i,cover){
 if(cover)return longBridge()+cloudHorse(565,740,1.20,false)+sitKid('豆叶',543,482,.93,'wave')+flower(784,744,.88,'#E9EDD9');
 return [
 ()=>longBridge()+kid('豆叶',286,741,1.08,'point')+cloudHorse(656,745,1.03,true),
 ()=>longBridge()+cloudHorse(646,746,1.05,true)+kid('豆叶',398,746,1.06,'wide'),
 ()=>longBridge()+cloudHorse(582,746,1.07,true)+kid('豆叶',837,742,.95,'back')+P('M796 596 Q807 547 771 511 M878 596 Q865 618 858 642','none','#E1C4A6',18)+cloth(765,503,.43,'#E8E6D2'),
 ()=>longBridge()+kid('豆叶',284,741,1.10,'think')+cloudHorse(644,744,1.09,false)+P('M500 758 Q660 789 825 751','none','#DDE0C5',5),
 ()=>longBridge()+kid('豆叶',336,742,1.14,'wide')+cloudHorse(673,744,.97,false,true),
 ()=>longBridge()+cloudHorse(577,744,1.15,true)+sitKid('豆叶',544,546,.95,'back')+P('M503 476 Q509 516 528 541 M585 476 Q617 498 606 538','none','#E1C4A6',17),
 ()=>R(0,0,1000,800,'#D5E0D5',0)+cloud(281,159,.9,'#EFEEDF')+R(0,368,1000,432,'#ABCBCD',0)+[0,1,2].map(j=>P(`M${75+j*300} ${426+j%2*42} q77 -17 145 0`,'none','#DAE5D8',4)).join('')+P('M0 521 L1000 521 L1000 777 L0 777Z','#C7C3A9')+line(0,478,1000,478,'#A9AC96',19)+[48,213,378,543,708,873].map(x=>line(x,476,x,555,'#B3B59E',17)).join('')+cloudHorse(540,740,1.13,false)+sitKid('豆叶',518,497,.92,'hold')+line(0,767,1000,767,'#ACA88F',13),
 ()=>outdoor()+E(725,672,258,106,'#A9C6C1')+E(735,667,230,84,'#8CB6B9')+lily(773,665,1.05)+lily(618,719,.55)+cloudHorse(319,729,.77,true)+kid('豆叶',474,741,.95,'hold')
 ][i]();
}
function bow(x,y,s=1){return G(x,y,s,P('M0 0 Q-31 -29 -34 -8 Q-32 11 0 0 Q33 -31 35 -7 Q31 13 0 0Z','#8EAFCA')+E(0,0,8,7,'#6F96B6')+P('M-5 3 L-18 29 L-2 24 L6 6 L19 31 L29 22 L7 0Z','#9BBDD0'));}
function longSpoon(x,y,s=1,r=0,mood='smile'){return G(x,y,s,R(-173,-12,382,24,'#D8BE94',12)+E(-161,0,52,45,'#E3CDA6')+E(-161,0,37,31,'#D8BD91')+G(-161,0,1,E(-15,-8,4,5,ink)+E(15,-8,4,5,ink)+(mood==='bean'?E(0,11,4,4,ink):P('M-10 11 Q0 21 12 11','none',ink,2)),-r)+bow(190,0,.75),r);}
function mushroomHome(open=false){return outdoor()+R(241,265,645,397,'#D9CFB3',59)+P('M191 278 Q234 63 557 65 Q835 83 935 280 Q555 349 191 278Z','#C4A38C')+[[353,163],[551,124],[772,183]].map(([x,y])=>E(x,y,36,21,'#E8DBC0')).join('')+R(348,357,416,307,'#AAB29C',112)+R(368,377,376,287,'#9BA58E',99)+(open?R(775,384,75,273,'#B7A37D',10)+line(812,404,812,638,'#9A896A',4):R(772,380,35,274,'#B7A37D',5))+E(293,402,33,45,'#A6BFBC')+P('M271 402 L315 402 M293 368 L293 439','none','#E0D2B1',5)+R(309,662,492,29,'#BCB197',7)+R(289,691,532,31,'#CDC1A4',8);}
function spoonRoom(){return interior(false,'#DDCEB4')+R(59,284,226,349,'#B9AC8D',94)+R(75,300,194,332,'#A1BFAE',82)+P('M77 552 Q170 503 268 547 L268 632 L77 632Z','#B9C8A1')+R(59,631,226,17,'#AA9674',4);}
function porridge(x,y,s=1,mixed=false){return G(x,y,s,P('M-91 -9 Q-81 69 0 70 Q81 69 91 -9Z','#EAE5CD')+E(0,-10,91,29,'#F4EFDC')+E(0,-12,77,19,'#F5EBDA')+(mixed?P('M-57 -9 Q-17 -35 43 -14 Q67 3 5 7 Q-37 8 -33 -6 Q-30 -18 17 -11','none','#CD9B94',7):E(29,-13,30,10,'#BC817E')+E(-14,-5,16,8,'#C58B85')));}
function spoonScene(i,cover){
 if(cover)return mushroomHome(true)+beetle(483,742,1.28,'sesame','hold')+longSpoon(506,591,1.47,-15);
 return [
 ()=>outdoor('gold')+P('M0 800 Q390 561 1000 656 L1000 800Z','#C8B990')+beetle(473,744,1.23,'sesame','hold')+longSpoon(492,593,1.24,-3)+leaf(771,730,.40,'#CBA974',60),
 ()=>mushroomHome()+beetle(551,744,1.05,'sesame','hold')+longSpoon(552,572,1.09)+P('M337 523 L326 509 M330 538 L311 532 M782 522 L795 507 M787 538 L805 534','none','#C6B376',4),
 ()=>mushroomHome(true)+beetle(551,744,1.05,'sesame','hold')+longSpoon(551,589,1.09)+P('M276 392 L309 417 M307 390 L277 415','none','#E0D2B1',4),
 ()=>mushroomHome(true)+beetle(540,716,1.03,'sesame','hold')+longSpoon(542,636,1.10,0,'bean'),
 ()=>mushroomHome(true)+beetle(532,701,1.00,'sesame','hold',false,true)+longSpoon(535,627,1.09),
 ()=>mushroomHome(true)+beetle(338,747,1.08,'sesame','back')+P('M285 592 Q358 641 429 659 M391 592 Q449 576 488 614','none','#A58260',20)+longSpoon(532,573,1.14,135),
 ()=>spoonRoom()+beetle(470,744,1.04,'sesame','hold')+longSpoon(470,592,1.05,180)+beetle(820,699,.98,'gran','hold')+desk(812,690,.71)+porridge(813,655,.73),
 ()=>spoonRoom()+beetle(440,742,1.17,'sesame','back')+beetle(848,699,.83,'gran','hold')+desk(674,683,1.22)+porridge(685,624,1.17,true)+P('M383 575 Q370 605 373 643 M497 575 Q515 536 549 501','none','#A58260',21)+longSpoon(540,490,1.08,-137)+P('M579 626 Q685 654 791 626 Q779 706 685 706 Q591 706 579 626Z','#EAE5CD')+P('M588 628 Q685 654 782 628','none','#F5EFDC',7)
 ][i]();
}
function pearPiece(x,y,s=1,powder=false){return G(x,y,s,P('M-31 -7 Q-4 -41 26 -17 Q19 17 -12 24 Q-29 20 -31 -7Z','#F1EDD5')+P('M-30 -5 Q-25 27 -11 24 Q18 16 26 -17','none','#D8D6AF',4)+(powder?[[-16,-7],[1,-15],[10,-4],[-4,6],[-17,10],[7,7]].map(([xx,yy])=>E(xx,yy,2,2,'#AA8B65')).join(''):''));}
function pearDish(x,y,s=1,powder=false,n=3){return plate(x,y,s)+Array.from({length:n},(_,j)=>pearPiece(x+(j-1)*27*s,y-11*s,.66*s,powder)).join('');}
function cinnamon(x,y,s=1,closed=true,r=0){return G(x,y,s,R(-24,-44,48,63,'#C7AD86',8)+R(-17,-24,34,27,'#E4D5B6',5)+P('M-8 -4 L7 -18 M-4 2 L11 -13','none','#AA8B63',4)+(closed?R(-29,-56,58,16,'#B09870',5):E(0,-44,23,8,'#9A825D')),r);}
function fork(x,y,s=1,r=0){return G(x,y,s,P('M0 21 L0 -29 M-10 -42 L-10 -23 Q0 -13 10 -23 L10 -42 M0 -42 L0 -25','none','#9EAA9C',5),r);}
function picnicBay(){return outdoor()+R(0,377,1000,174,'#B1CBCC',0)+P('M0 541 Q400 530 1000 549','none','#E5ECE0',8)+P('M159 701 L748 595 L921 768 L135 787Z','#B3CDCD')+[0,1,2,3,4].map(j=>line(178+j*143,696-j*25,216+j*155,786,'#E0E5D4',11)).join('')+P('M170 730 L785 631 M153 762 L851 695','none','#E0E5D4',10);}
function pearBasket(x,y,s=1,n=5){return basket(x,y,s,false)+Array.from({length:n},(_,j)=>pearPiece(x+(j-2)*22*s,y-23*s-(j%2)*13*s,.59*s)).join('');}
function pearPair(pose='hold',rpose='hold'){return sitKid('朵盐',309,647,1.02,pose)+sitKid('蒲果',761,647,1.02,rpose);}
function plainPearScene(i,cover){
 if(cover)return picnicBay()+pearPair('hold','hold')+pearDish(343,720,.95,true)+pearDish(730,720,.95,false)+pearBasket(539,689,.80)+cinnamon(222,736,.64,true)+pearPiece(326,556,.72,true)+pearPiece(751,559,.72,false);
 return [
 ()=>picnicBay()+kid('朵盐',345,741,1.15,'low')+pearBasket(626,684,1.0)+plate(511,745,.76)+plate(760,727,.76),
 ()=>picnicBay()+sitKid('朵盐',321,649,1.04,'back')+kid('蒲果',814,692,.99,'wave')+pearDish(419,721,.9,true)+pearDish(650,709,.9,true)+pearBasket(732,610,.73)+P('M276 572 Q344 565 411 611 M366 572 Q398 620 472 650','none','#E4CCAD',18)+cinnamon(476,635,.71,false,-30)+[0,1,2,3].map(j=>E(452-j*6,668+j*9,2,2,'#A68B69')).join(''),
 ()=>picnicBay()+pearPair('think','hold')+pearDish(350,717,.94,true)+pearDish(728,717,.94,true,2)+pearBasket(538,646,.75)+fork(791,710,.65,80),
 ()=>picnicBay()+sitKid('朵盐',511,647,1.02,'back')+sitKid('蒲果',761,647,1.02,'hold')+pearDish(347,720,.92,true)+pearDish(673,710,.97,true)+pearBasket(530,648,.74)+P('M467 572 Q481 651 535 706 M555 572 Q584 614 616 653','none','#E4CCAD',18)+line(612,654,663,678,'#B39D78',8)+E(673,682,20,8,'#E4D5B2')+R(535,705,28,48,'#DDE2C5',7)+R(541,695,16,16,'#C4BD94',4),
 ()=>picnicBay()+pearPair('hold','point')+pearDish(347,720,.93,true)+pearDish(730,720,.93,true)+pearBasket(534,653,.87)+cinnamon(315,592,.69,false),
 ()=>picnicBay()+sitKid('朵盐',490,647,1.02,'back')+sitKid('蒲果',761,647,1.02,'hold')+pearDish(338,726,.9,true)+pearDish(531,769,.74,true,2)+pearBasket(528,638,.75)+P('M446 572 Q501 633 575 659 M534 572 Q598 600 657 656','none','#E4CCAD',18)+pearDish(616,656,.92,false)+cinnamon(221,724,.67,true),
 ()=>picnicBay()+pearPair('hold','hold')+pearDish(343,721,.94,true,2)+pearDish(731,721,.94,false,2)+pearBasket(535,649,.75)+cinnamon(222,736,.64,true)+fork(324,588,.65,0)+pearPiece(324,555,.72,true)+fork(752,590,.65,0)+pearPiece(752,557,.72,false),
 ()=>picnicBay()+pearPair('hold','back')+pearDish(340,727,.95,true,2)+pearDish(735,727,.95,false,2)+pearBasket(536,699,.82)+cinnamon(217,742,.64,true)+P('M717 572 Q649 627 592 653 M805 572 Q825 620 799 652','none','#BD9F7E',18)+fork(577,667,.64,-45)+fork(332,602,.65,12)
 ][i]();
}
function foldWheel(x,y,s=1,r=0){return G(x,y,s,line(0,0,0,248,'#B3A17B',10)+G(0,0,1,P('M0 0 L-91 -34 L-33 -97Z','#BE8D7E')+P('M0 0 L34 -91 L97 -33Z','#F1EBDA')+P('M0 0 L91 34 L33 97Z','#BE8D7E')+P('M0 0 L-34 91 L-97 33Z','#F1EBDA')+E(0,0,24,24,'#D9C58F')+face(0,-5,.35),r));}
function wrapper(x,y,s=1,r=0,c='#EDE2C2'){return G(x,y,s,P('M-35 -25 L-15 -31 L4 -23 L31 -29 L36 24 L16 19 L-6 29 L-32 21Z',c)+P('M-21 -15 L17 -18 M-16 1 L23 -3 M-21 14 L12 12','none','#C8BC9B',3),r);}
function lunchBox(x,y,s=1,open=true,wrappers=0){let a=R(-87,-23,174,63,'#A5BFC0',15)+E(0,-22,86,25,'#7FA5A5');if(open)a+=P('M-87 -32 L-75 -106 Q0 -127 75 -106 L87 -32 Q0 -51 -87 -32Z','#BFD3CF')+P('M-70 -41 L-61 -93 Q0 -108 61 -93 L70 -41','none','#94B4AF',4);for(let j=0;j<wrappers;j++)a+=wrapper(-45+j*44,-21-j%2*5,.44,j*18-15);if(!open)a+=R(-92,-40,184,30,'#C4D5CE',13)+R(-14,-15,28,20,'#D9D6AE',6);return G(x,y,s,a);}
function flowerField(){return outdoor()+foldWheel(806,414,1.07,-11)+P('M483 636 Q738 563 1000 652 L1000 800 L483 800Z','#A6BF91')+[[570,723,.83],[649,642,.72],[747,730,.98],[871,656,.70],[944,737,.80],[560,788,.65]].map(([x,y,s])=>flower(x,y,s,'#F2F0E0')).join('')+R(104,680,346,102,'#D7CB9D',15)+P('M119 702 L429 702 M119 758 L429 758','none','#B6BDA0',8);}
function handkerchief(x,y,s=1,lift=false){return G(x,y,s,P(lift?'M-84 11 Q-41 -36 21 -13 Q65 -9 81 -70 L100 -23 L74 32 Q0 4 -77 32Z':'M-86 -9 L71 -15 L93 32 Q0 11 -77 33Z','#E3D295')+P('M-67 21 Q0 0 74 19','none','#C8B67F',3));}
function paperTripScene(i,cover){
 if(cover)return flowerField()+sitKid('豆绒坐',378,649,1.19,'hold')+lunchBox(390,632,1.10,false)+basket(223,744,.64,false)+flower(633,746,1.12,'#F6F2E1');
 return [
 ()=>flowerField()+sitKid('豆绒坐',310,648,1.11,'wide')+basket(464,753,.60,false)+lunchBox(186,746,.62,true)+wrapper(513,540,.80,-17)+wrapper(652,590,.76,24)+wrapper(796,571,.74,-26)+breeze(596,431,.75),
 ()=>flowerField()+kid('豆绒',392,748,1.11,'low')+basket(518,756,.66,false)+wrapper(573,746,.69,-8)+wrapper(651,608,.63,19)+wrapper(420,730,.57,-9)+E(645,605,4,5,'#D7EBDE'),
 ()=>flowerField()+kid('豆绒',393,747,1.11,'wide')+basket(427,631,.68,false)+wrapper(544,520,.78,-17)+wrapper(676,568,.74,25)+wrapper(788,607,.73,-15)+breeze(563,408,.87),
 ()=>flowerField()+sitKid('豆绒坐',341,660,1.10,'low')+basket(552,745,.90,false)+wrapper(517,723,.42,-12)+wrapper(551,719,.42,0)+wrapper(584,723,.42,12)+handkerchief(553,705,.93,true)+lunchBox(181,744,.63,true)+breeze(683,521,.74),
 ()=>flowerField()+sitKid('豆绒坐',344,657,1.11,'back')+basket(528,737,.87,false)+handkerchief(526,708,.87)+lunchBox(286,736,.75,false)+P('M296 575 Q374 635 463 704 M392 575 Q358 654 304 704','none','#BDA282',19),
 ()=>flowerField()+sitKid('豆绒坐',362,657,1.17,'back')+basket(571,747,.86,false)+handkerchief(594,727,.55,true)+lunchBox(376,681,.93,true,2)+P('M312 571 Q308 608 351 626 M412 571 Q470 604 422 625','none','#BDA282',20)+wrapper(390,625,.64,-12),
 ()=>flowerField()+kid('豆绒',378,744,1.20,'hold')+lunchBox(378,607,.85,false)+basket(193,743,.64,false)+G(196,688,.65,R(-45,-15,90,33,'#D7CB9D',14)+line(-31,-15,-31,16,'#B8B694',5))+handkerchief(196,719,.42)+breeze(630,505,.94),
 ()=>flowerField()+sitKid('豆绒坐',352,659,1.14,'hold')+lunchBox(387,723,.95,true,0)+flower(576,743,.97,'#F6F2E4')+breeze(499,371,.9)
 ][i]();
}
function seedDots(x,y,s=1,n=18){return G(x,y,s,Array.from({length:n},(_,j)=>E(-53+(j*31)%107,-10+Math.floor(j/7)*8+(j%2)*3,4,2.5,['#AA8962','#C0A577','#977D5E'][j%3],`transform="rotate(${j*29%90} ${-53+(j*31)%107} ${-10+Math.floor(j/7)*8+(j%2)*3})"`)).join(''));}
function paperGran(x,y,s=1,state='full',broken=false){const flat=state==='flat',h=flat?115:258,w=flat?103:state==='empty'?71:102;let a=P(`M${-w} ${-h} L${w} ${-h} L${w-8} -16 Q0 11 ${-w+8} -16Z`,'#DFCEA2')+P(`M${-w+12} ${-h+16} L${-w+16} -24 M${w-13} ${-h+14} L${w-17} -23`,'none','#CAB78C',3);if(state!=='open')a+=R(-w-2,-h,2*w+4,24,'#D2BF92',4)+line(-w+3,-h+12,w-3,-h+12,'#BBA77E',3);else a+=E(0,-h+1,w,20,'#AA9671')+P(`M${-w} ${-h-1} L${-w+8} ${-h-35} L${w-9} ${-h-32} L${w} ${-h-1}`,'none','#CFBB8E',12);a+=P(`M-43 ${-h*.53} Q-31 ${-h*.48} -18 ${-h*.53} M18 ${-h*.53} Q31 ${-h*.48} 43 ${-h*.53}`,'none',ink,3)+P(`M-13 ${-h*.36} Q0 ${-h*.31} 13 ${-h*.36}`,'none',ink,3)+P(`M${-w+8} -23 L0 -36 L${w-8} -23`,'none','#BEAC82',3);if(broken)a+=P(`M${w-32} -33 L${w+24} -14 L${w-6} 4 L${w-39} -19Z`,'#EADDAD')+P(`M${w-31} -19 L${w-5} -5 L${w+6} -14Z`,'#907B5D');return G(x,y,s,a);}
function flatPaperGran(x,y,s=1){return G(x,y,s,P('M-110 -35 L110 -30 L111 29 L-106 37Z','#E2D1A6')+line(84,-30,84,30,'#BFAC81',4)+line(95,-31,95,30,'#C8B48A',3)+P('M-45 -9 Q-33 -3 -21 -9 M13 -9 Q25 -3 37 -9 M-14 12 Q0 19 12 12','none',ink,3)+line(-95,-26,-95,29,'#B8A37A',3));}
function seedRoom(){return interior(false,'#DDD6B9')+R(69,390,220,227,'#B4A180',12)+R(83,405,86,198,'#C7B58E',4)+R(177,405,96,198,'#A19677',4)+line(175,402,175,607,'#8F8267',5)+E(157,507,5,6,'#8E7D60')+E(191,507,5,6,'#8E7D60');}
function seedBowl(x,y,s=1,full=true){return bowl(x,y,s,full?'#CDB688':'#AD936E')+(full?seedDots(x,y-14*s,.90*s,25):'');}
function waterpot(x,y,s=1){return G(x,y,s,E(0,-20,45,50,'#ACC3A3')+P('M-31 -45 Q-83 -64 -76 -19 Q-73 6 -40 -1','none','#8FA786',9)+P('M35 -29 L82 -76 L100 -64 L42 3Z','#ACC3A3')+E(90,-70,18,8,'#8FA786')+E(0,-60,30,11,'#809F83')) ;}
function seedScene(i,cover){
 if(cover)return outdoor()+kid('豆芽',364,744,1.20,'hold')+basket(663,735,1.42,false)+paperGran(663,713,.94,'full')+P('M532 706 Q663 756 794 706 L778 758 Q663 792 548 758Z','#B79A6C')+flower(793,750,.85,'#F0E2BF');
 return [
 ()=>seedRoom()+kid('豆芽',360,742,1.14,'point')+paperGran(637,739,1.10)+basket(838,735,.79,false),
 ()=>seedRoom()+sitKid('豆芽',788,656,1.11,'back')+paperGran(543,738,1.11,'full',true)+P('M740 574 Q708 647 672 717 M836 574 Q856 611 828 641','none','#DFCBAC',20)+E(676,746,5,3,'#B09165')+E(703,763,5,3,'#A98C61')+E(642,772,5,3,'#B59A6C')+basket(287,739,.68,false),
 ()=>seedRoom()+sitKid('豆芽',361,657,1.12,'low')+paperGran(641,738,1.10,'full',true)+E(748,753,5,3,'#B09165')+E(421,740,5,3,'#A98C61')+basket(859,737,.69,false),
 ()=>seedRoom()+R(176,403,97,201,'#6F7560',5)+P('M176 402 L124 429 L124 626 L176 605Z','#B5A27E')+kid('豆芽',419,742,1.13,'think')+paperGran(686,739,1.07,'full',true)+E(773,753,5,3,'#B09165')+basket(837,740,.68,false),
 ()=>seedRoom()+kid('豆芽',436,741,1.14,'back')+desk(665,686,1.23)+seedBowl(727,637,1.16,true)+G(558,515,1,paperGran(0,0,.65,'open',true),126)+P('M387 565 Q458 610 541 592 M485 565 Q540 583 603 555','none','#DFCBAC',20)+P('M664 606 Q686 623 699 630','none','#BEA273',3)+E(684,618,4,3,'#A98D63'),
 ()=>seedRoom()+stool(325,666,.94)+sitKid('豆芽',325,664,1.08,'hold')+desk(666,688,1.24)+flatPaperGran(642,624,1.03)+R(529,594,56,63,'#BAA17A',5)+line(539,603,576,603,'#D8BD8E',3)+seedBowl(811,626,.72,true)+R(470,606,36,46,'#D9DCC4',7)+R(467,597,42,12,'#AEB89B',4)+E(489,630,9,11,'#F3EDDA'),
 ()=>seedRoom()+kid('豆芽',356,743,1.15,'hold')+basket(653,733,1.22,false)+paperGran(653,711,.94)+P('M540 709 Q653 750 767 709 L750 762 Q653 786 555 762Z','#B79A6C')+desk(827,628,.48)+seedBowl(827,600,.55,false),
 ()=>outdoor()+P('M531 620 L943 671 L877 786 L490 734Z','#B1A184')+P('M558 652 L896 697 M542 680 L876 729 M531 707 L859 755','none','#8A8D72',9)+kid('豆芽',332,743,1.14,'hold')+basket(690,717,1.02,false)+G(730,720,1,paperGran(0,0,.45,'empty'),-79)+P('M596 700 Q690 741 785 700 L771 746 Q690 771 612 746Z','#B79A6C')+waterpot(457,739,.65)+E(862,730,12,3,'#9BAE98')
 ][i]();
}
const scenes={'expansion-0161':saltScene,'expansion-0162':mailScene,'expansion-0163':bagScene,'expansion-0164':horseScene,'expansion-0165':spoonScene,'expansion-0166':plainPearScene,'expansion-0167':paperTripScene,'expansion-0168':seedScene};
export function fifthYoungFirstArtwork(story,index,cover=false){
 const scene=scenes[story?.id];if(!scene)throw Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw Error('Expected eight pages');
 if(!Number.isInteger(index)||index<0||index>=8)throw Error('Page index must be an integer from 0 to 7');
 return svg(scene(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

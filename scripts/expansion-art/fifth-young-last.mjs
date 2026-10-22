// Eight explicit, independent eight-page storyboards for expansion-0169 through 0176.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
松果:['squirrel','#B39370','#A2B68E','vest'],松果坐:['squirrel','#B39370','#A2B68E','vest'],
泥豆:['mole','#929C95','#8EAFBF','overall'],泥豆坐:['mole','#929C95','#8EAFBF','overall'],
绒栗:['mouse','#C1A081','#9BBAC7','overall'],绒栗坐:['mouse','#C1A081','#9BBAC7','overall'],绒栗新:['mouse','#C1A081','#9BBAC7','overall',null,'brownshoes'],
爸爸:['mouse','#947D61','#D6C9A9','shirt'],爸爸坐:['mouse','#947D61','#D6C9A9','shirt'],
米朵:['human','#E2C8AC','#B6A7C3','coat',null,'rainGirl'],
芋朵:['pig','#D5B4A6','#AAC19A','dress',null,'rainboots'],芋朵并:['pig','#D5B4A6','#AAC19A','dress',null,'rainboots'],
梨朵:['human','#E2C8AC','#C5B7CE','shirt',null,'sleepGirl'],梨朵卧:['human','#E2C8AC','#C5B7CE','shirt',null,'sleepGirl'],
米芹:['mouse','#C0A385','#BFAEC6','dress',null,'creamBag'],米芹坐:['mouse','#C0A385','#BFAEC6','dress',null,'creamBag'],
绒枣:['mouse','#BEA184','#B58E9E','apron'],绒枣坐:['mouse','#BEA184','#B58E9E','apron'],
蒲蒲:['hedgehog','#ABA18E','#ADB793','vest',null,'greenbag'],蒲蒲镜:['hedgehog','#ABA18E','#ADB793','vest',null,'silverGlasses'],
兔婆婆:['rabbit','#EEEADA','#B0C8D1','coat',null,'glasses'],
客熊:['bear','#AC967A','#B9C2A1','vest'],客鸭:['duck','#D8C89C','#B5BBCB','vest'],
陶小桃:['clay','#BD8C71','#A2BA91','shirt',null,'clayCurl']};
function arm(x,y,dx,dy,c,w=22){return P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.55-9} ${x+dx} ${y+dy}`,'none',c,w);}
function kid(name,x,y,s=1,pose='stand',flip=false,extras=''){
 const cfg=C[name];if(!cfg)throw Error(`Unknown character ${name}`);const [t,f,cloth,kind,scarf,detail]=cfg;
 let a=name.endsWith('卧')?'':E(0,0,81,12,'#53675A','opacity=".12"');
 if(t==='hedgehog')a+=P('M-73 -161 L-97 -195 L-78 -209 L-105 -233 L-79 -244 L-90 -278 L-61 -274 L-64 -308 L-35 -296 L-15 -323 L4 -302 L32 -319 L41 -289 L72 -300 L68 -270 L96 -273 L82 -241 L108 -222 L83 -207 L100 -177 L72 -162Z','#9A8668');
 if(['squirrel','chipmunk'].includes(t)&&!name.endsWith('坐')&&!['蓬蓬围','蓬蓬卧'].includes(name))a+=P('M44 -48 Q145 -77 121 -204 Q102 -250 64 -227 Q21 -202 68 -160','none',f,53);
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
 if(['rainGirl','sleepGirl'].includes(detail))a+=P('M-65 -214 L-67 -266 Q-44 -302 0 -296 Q47 -303 67 -267 L66 -213 L49 -215 L47 -264 L22 -252 L-8 -266 L-45 -252 L-48 -213Z','#494C48')+R(-48,-59,40,47,detail==='rainGirl'?'#EBE5CE':'#C5B7CE',6)+R(8,-59,40,47,detail==='rainGirl'?'#EBE5CE':'#C5B7CE',6)+(name.endsWith('卧')?'':E(-30,-9,31,14,detail==='rainGirl'?'#B8877C':'#EEEBDC')+E(30,-9,31,14,detail==='rainGirl'?'#B8877C':'#EEEBDC'));
 if(detail==='brownshoes')a+=E(-30,-10,31,16,'#9C8062')+E(30,-10,31,16,'#9C8062');
 if(detail==='rainboots')a+=R(-50,-57,38,50,'#9D8468',7)+R(12,-57,38,50,'#9D8468',7)+E(-35,-10,30,16,'#9D8468')+E(35,-10,30,16,'#9D8468');
 if(detail==='creamBag')a+=line(-48,-178,50,-70,'#BCA987',7)+R(31,-112,59,61,'#E4D9BA',12);
 if(detail==='silverGlasses')a+=line(-48,-178,50,-70,'#A2B799',8)+R(31,-112,59,61,'#B5C8A5',12)+E(-24,-226,20,18,'none','stroke="#B8C3BD" stroke-width="4"')+E(24,-226,20,18,'none','stroke="#B8C3BD" stroke-width="4"')+line(-4,-227,4,-227,'#B8C3BD',4);
 if(detail==='clayCurl')a+=P('M-13 -273 Q-29 -315 0 -316 Q29 -320 18 -297 Q9 -281 -1 -296','none','#B18067',14)+R(-48,-59,40,47,'#EAE2C9',6)+R(8,-59,40,47,'#EAE2C9',6);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function sitKid(name,x,y,s=1,pose='hold',extras=''){
 const f=C[name][1],shoe=['rainboots','brownshoes'].includes(C[name][5])?'#9D8468':C[name][5]==='rainGirl'?'#B8877C':C[name][5]==='sleepGirl'?'#EEEBDC':C[name][5]==='beanGirl'?'#987B5F':['greenshoes','paperdress','paperdance','fairy'].includes(C[name][5])?'#88A579':['leafkid','leafbottle'].includes(C[name][5])?'#987B58':C[name][5]==='snowcap'?'#EFECDD':f,id=`seat-${x}-${y}-${Math.round(s*100)}`,close=name==='芋朵并';
 return (name==='栗芽坐'?G(x,y,s,P('M44 -8 Q116 18 136 -27','none',f,8)):'')+`<defs><clipPath id="${id}"><rect x="${x-210*s}" y="${y-500*s}" width="${420*s}" height="${512*s}"/></clipPath></defs>`+G(x,y,s,arm(close?-12:-27,0,close?-5:-8,55,f,23)+arm(close?12:27,0,close?5:8,55,f,23)+(['rainboots','rainGirl','sleepGirl','clayCurl'].includes(C[name][5])?R(close?-29:-46,10,24,46,C[name][5]==='rainboots'?'#9D8468':C[name][5]==='sleepGirl'?'#C5B7CE':'#EBE5CE',5)+R(close?5:23,10,24,46,C[name][5]==='rainboots'?'#9D8468':C[name][5]==='sleepGirl'?'#C5B7CE':'#EBE5CE',5):'')+(C[name][5]==='beanGirl'?R(-46,39,23,20,'#F3EFDF',5)+R(23,39,23,20,'#F3EFDF',5):'')+E(close?-17:-35,60,25,13,shoe)+E(close?17:35,60,25,13,shoe))+`<g clip-path="url(#${id})">${kid(name,x,y+80*s,s,pose,false,extras)}</g>`;
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

function drop(x,y,s=1){return G(x,y,s,P('M0 -18 Q-17 4 -10 14 Q0 25 10 14 Q17 4 0 -18Z','#B6D4D3')+E(-4,7,3,5,'#E7EEE1'));}
function rain(){return [[75,128],[131,212],[923,146],[878,280],[77,365],[944,463],[113,521],[875,558]].map(([x,y])=>line(x,y,x-9,y+29,'#B5C6C2',3)).join('');}
function umbrella(x,y,s=1,c='#C18F7F'){return G(x,y,s,line(0,0,0,380,'#A29877',12)+P('M-300 28 Q-250 -141 0 -174 Q246 -145 300 28 Q225 -11 152 31 Q75 -8 0 31 Q-75 -8 -152 31 Q-225 -11 -300 28Z',c)+P('M0 -172 Q-109 -101 -152 27 M0 -172 L0 28 M0 -172 Q109 -101 152 27','none','#AB7F70',4)+E(0,-180,9,13,'#A48F6D'));}
function rockChair(x,y,s=1,double=false,cushion=false){const w=double?245:93;return G(x,y,s,R(-w,-155,w*2,114,'#BBA078',15)+[-1,1].map(k=>line(k*(w-24),-36,k*(w-8),97,'#A9916E',13)).join('')+P(`M${-w-29} 82 Q0 146 ${w+29} 82`,'none','#AA9371',15)+R(-w-14,-39,w*2+28,25,'#D1B78C',10)+(cushion?R(-w+6,-61,w*2-12,28,'#DACC9B',13):'')+line(-w-11,-111,-w-11,-25,'#AD9471',12)+line(w+11,-111,w+11,-25,'#AD9471',12)+R(-w-27,-120,47,14,'#C9AF84',7)+R(w-20,-120,47,14,'#C9AF84',7));}
function creamBag(x,y,s=1,open=false){return G(x,y,s,R(-56,-38,112,79,'#E9E0C7',13)+P('M-44 -37 Q0 -87 44 -37','none','#CDBF9C',7)+(open?P('M-55 -35 L-49 -83 Q0 -100 49 -83 L55 -35Z','#D8CCAB'):P('M-56 -32 L56 -32 L48 7 Q0 28 -48 7Z','#E0D5B8'))+R(-8,4,16,20,'#BCA77F',5));}
function pencil(x,y,s=1,r=0){return G(x,y,s,R(-5,-48,10,77,'#B69C73',3)+P('M-5 29 L5 29 L0 44Z','#E9D7AF')+P('M-2 39 L2 39 L0 45Z','#6B7568'),r);}
function puddleArt(x,y,s=1,state=0){let a=state===0?P('M-40 8 Q-51 -28 -10 -32 Q45 -32 40 7 Q23 34 -18 23 L62 45','none','#9EB9BA',4):state===1?P('M-35 23 Q-61 9 -42 -23 Q-1 -49 37 -20 Q59 8 34 21','none','#9EB9BA',4):E(0,0,49,32,'none','stroke="#9EB9BA" stroke-width="4"');if(state===2)a+=P('M-28 4 Q-3 -14 28 5 Q0 26 -28 4Z','#B4BB8B')+line(0,-24,0,4,'#AB9871',3)+P('M2 -22 L25 -1 L2 -1Z','#E8D9AF');return paper(x,y,s,a);}
function umbrellaHill(){return R(0,0,1000,800,'#CCD6CB',0)+P('M0 504 Q250 352 522 490 Q738 352 1000 463 L1000 800 L0 800Z','#AEBE9E')+umbrella(122,349,.36,'#B9BE94')+umbrella(906,293,.33,'#A7BFC0')+rain()+E(503,731,336,65,'#C6C6A5')+E(195,741,99,30,'#AEC7C4')+E(195,741,66,17,'none','stroke="#C4D5CA" stroke-width="3"')+umbrella(520,289,1.18);}
function squirrelTail(x,y,s=1){return G(x,y,s,P('M-9 8 Q-136 -8 -124 -112 Q-119 -176 -62 -161 Q-16 -139 -53 -95 Q-85 -59 -9 -26Z','#B39370'));}
function rockingPair(leftPose='hold',rightPose='hold',tilt=0,art='',bagOnLap=false){return G(515,650,1,rockChair(0,0,1,true)+(bagOnLap?'':squirrelTail(-122,9,.88))+sitKid('松果坐',-119,-30,1.00,leftPose)+sitKid('泥豆坐',122,-30,1.00,rightPose)+art+(bagOnLap?creamBag(125,-9,.64):''),tilt);}
function circleBoatScene(i,cover){
 if(cover)return umbrellaHill()+rockingPair('wave','hold',0,puddleArt(123,-19,.69,2))+leaf(201,744,.28,'#B3BB8F',72);
 return [
 ()=>umbrellaHill()+rockChair(511,650,1,true)+squirrelTail(391,658,.86)+sitKid('松果坐',392,620,1.03,'wave')+kid('泥豆',815,744,1.03,'hold')+creamBag(841,650,.62),
 ()=>umbrellaHill()+rockingPair('wide','hold',-4,puddleArt(123,-10,.67,0)+pencil(184,-50,.52,30))+P('M702 748 q54 17 95 -8','none','#DDE1C5',4),
 ()=>umbrellaHill()+rockingPair('low','hold',0,puddleArt(123,-10,.67,0)+pencil(175,-57,.52,16))+creamBag(813,733,.57),
 ()=>umbrellaHill()+rockingPair('hold','think',3,puddleArt(123,-10,.67,0)+pencil(179,-70,.51,12))+P('M238 724 q-29 -14 -26 -38','none','#DDE1C5',4),
 ()=>umbrellaHill()+rockingPair('think','point',0,puddleArt(123,-10,.69,1)+pencil(191,-8,.51,64)),
 ()=>umbrellaHill()+rockingPair('low','hold',0,puddleArt(123,-9,.69,1)+pencil(177,-45,.52,27))+drop(169,336,.50)+drop(874,337,.50),
 ()=>umbrellaHill()+rockingPair('hold','hold',0,puddleArt(124,-89,.83,2))+creamBag(811,735,.63,true),
 ()=>umbrellaHill()+rockingPair('hold','hold',-2,'',true)+P('M430 645 Q459 673 497 679 Q545 688 595 675 Q624 673 617 697 Q583 735 516 738 Q445 739 423 701 Q415 673 430 645Z','#B39370')+leaf(197,744,.28,'#B3BB8F',72)+drop(169,338,.52)+drop(874,340,.52)
 ][i]();
}
function redShoe(x,y,s=1,r=0){return G(x,y,s,P('M-48 -18 Q-38 -42 -16 -37 L6 -27 Q48 -29 56 -4 Q59 19 37 23 L-41 23 Q-61 10 -48 -18Z','#BF8D7E')+E(-18,-29,24,11,'#967568')+P('M-20 -21 L3 -10 M-12 -26 L10 -15 M-12 -15 Q-41 -28 -32 -9 Q-18 0 -9 -12 Q17 -34 21 -16 Q19 -5 -7 -12 M-10 -9 L-23 20 M-7 -9 L8 27','none','#EEE6D1',3)+P('M27 7 Q38 18 47 7','none','#745C50',3),r);}
function shoePair(x,y,s=1,r=0){return G(x,y,s,redShoe(-45,0,.78,-6)+redShoe(45,3,.78,7),r);}
function socks(x,y,s=1){return G(x,y,s,P('M-41 -44 L-21 -44 L-21 -6 Q5 -5 -1 13 L-29 13 Q-45 9 -41 -6Z','#E6E5D4')+P('M12 -41 L33 -41 L33 -5 Q58 -3 52 15 L25 15 Q11 12 12 -6Z','#E6E5D4')) ;}
function toyCart(x,y,s=1,shoes=true){return G(x,y,s,line(-82,-10,-122,-116,'#9B9E7E',8)+R(-140,-132,52,17,'#B1B08D',7)+E(-64,31,25,26,'#8C9B8A')+E(69,31,25,26,'#8C9B8A')+E(-64,31,11,12,'#C5CDAE')+E(69,31,11,12,'#C5CDAE')+R(-105,-63,212,80,'#B8C4A3',15)+(shoes?shoePair(0,-51,.88):R(-42,-95,46,40,'#C5A68B',5)+R(18,-88,39,35,'#B1BAC7',5))+R(-106,-19,213,40,'#A6B898',9));}
function dormRoom(){return interior(false,'#DFD7BF')+R(66,420,265,217,'#BBA886',14)+R(82,438,233,75,'#D2BC95',7)+E(198,475,10,7,'#9D8967')+P('M81 540 L313 540 L343 620 L57 620Z','#A38C68')+P('M58 619 L342 619 L342 652 L58 652Z','#C7AE83')+R(413,660,382,111,'#C4C5A2',45)+R(72,556,209,49,'#DDD6B7',17);}
function forestRoad(){return outdoor()+P('M162 800 Q470 566 818 566 L898 626 Q505 683 403 800Z','#C7B997')+rock(736,690,.51,'#AFB5A0');}
function crookedPear(){return P('M134 635 Q121 456 202 350 Q265 276 326 319','none','#998768',27)+P('M198 357 Q123 284 99 264','none','#998768',15)+E(133,259,121,105,'#A8BD94')+E(284,238,140,114,'#A1B68B')+[[70,268],[197,281],[287,230],[341,281]].map(([x,y])=>E(x,y,17,23,'#D4C783')).join('');}
function shoeScene(i,cover){
 if(cover)return forestRoad()+kid('绒栗新',405,742,1.08,'hold')+kid('爸爸',712,712,1.24,'wave')+toyCart(591,725,.83,true);
 return [
 ()=>dormRoom()+sitKid('绒栗坐',452,661,1.16,'hold')+shoePair(458,602,.92),
 ()=>dormRoom()+kid('绒栗',442,743,1.09,'hold')+shoePair(442,601,.75)+kid('爸爸',747,742,1.29,'point'),
 ()=>dormRoom()+sitKid('绒栗坐',516,651,1.18,'low')+R(450,702,28,43,'#E6E5D4',8)+R(545,702,28,43,'#E6E5D4',8)+redShoe(466,746,.79)+redShoe(629,744,.80),
 ()=>dormRoom()+sitKid('绒栗坐',452,651,1.16,'low')+shoePair(598,742,.90)+socks(790,728,.78),
 ()=>dormRoom()+kid('绒栗',548,744,1.14,'back')+toyCart(697,727,.96,true)+P('M499 568 Q540 615 595 646 M597 568 Q635 606 680 641','none','#C1A081',20)+R(812,721,43,43,'#C5A68B',5)+R(864,733,40,32,'#B1BAC7',4),
 ()=>forestRoad()+kid('爸爸',306,743,1.30,'hold')+kid('绒栗新',535,745,1.07,'back')+toyCart(776,722,.87,true)+P('M489 580 Q535 618 626 619 M581 580 Q623 597 666 608','none','#C1A081',18),
 ()=>forestRoad()+crookedPear()+kid('爸爸',304,744,1.30,'back')+kid('绒栗新',543,744,1.08,'back')+toyCart(779,723,.86,true)+P('M249 544 Q224 589 239 629 M360 544 Q397 591 440 605','none','#947D61',22)+P('M497 578 Q466 607 440 605 M589 578 Q628 603 669 609','none','#C1A081',18),
 ()=>outdoor()+R(604,202,342,434,'#D5CAB0',28)+P('M574 207 L778 61 L969 207Z','#B0B79B')+R(707,338,144,295,'#AAB79E',71)+P('M727 478 L794 478 L811 519 L735 519Z','#B8A17D')+R(737,519,12,57,'#A88E6A',4)+R(793,519,12,57,'#A88E6A',4)+bench(335,648,1.12)+sitKid('爸爸坐',267,646,1.13,'hold')+sitKid('绒栗坐',436,647,.91,'hold')+E(405,702,23,12,'#9C8062')+E(468,702,23,12,'#9C8062')+toyCart(694,726,.83,true)
 ][i]();
}
function tinySnail(x,y,s=1){return G(x,y,s,P('M-30 8 L39 8 Q53 4 43 -13 L32 -26 Q22 -23 26 -7 Q-8 -6 -30 8Z','#B6BE97')+E(0,-14,22,21,'#B69B78')+P('M12 -9 Q21 -31 -2 -31 Q-19 -28 -13 -12 Q-3 1 5 -11 Q10 -20 0 -21','none','#8E7D61',3)+P('M33 -22 L29 -35 M40 -20 L47 -31','none','#91A387',3)+E(29,-36,2.5,3,ink)+E(48,-32,2.5,3,ink));}
function mistCat(x,y,s=1,pose='sit'){const c='#8EADA9',h=pose==='lie'?-115:-157;let a=P(pose==='lie'?'M-53 -8 Q-77 -72 -29 -88 Q12 -98 49 -61 L69 -14 Q5 7 -53 -8Z':'M-43 -7 Q-58 -56 -30 -97 L-17 -130 L32 -129 Q64 -73 53 -10 Q9 5 -43 -7Z','none',c,6)+E(-31,h-27,16,18,'none',`stroke="${c}" stroke-width="6"`)+E(26,h-29,16,18,'none',`stroke="${c}" stroke-width="6"`)+E(0,h,44,37,'none',`stroke="${c}" stroke-width="6"`)+E(17,h-4,3,5,c)+E(38,h+9,4,3,c)+P(`M-3 ${h+8} L-22 ${h+4} M0 ${h+16} L-22 ${h+18}`,'none',c,3)+P(`M-43 -18 Q-99 -33 -92 -87 Q-75 -110 -68 -87`,'none',c,6)+(pose==='reach'?[-40,-16,16]:[-40,-16,16,40]).map(xx=>P(`M${xx-8} -13 Q${xx} -3 ${xx+8} -13`,'none',c,5)).join('');if(pose==='reach')a+=P('M28 -98 Q63 -144 51 -203','none',c,5);return G(x,y,s,a);}
function gardenGlass(final=false){return R(458,103,482,530,'#B2CAC3',0)+leaf(832,459,1.40,'#94B292',-39)+leaf(855,452,1.27,'#A7BE95',43)+P('M723 483 L890 483 L871 601 Q808 624 743 601Z','#94B4B2')+E(808,483,84,24,'#ADC9C3')+line(731,488,886,488,'#7FA5A5',4)+(final?leaf(761,478,.54,'#91AD89',-38):tinySnail(757,456,.38))+[[520,170],[615,285],[877,222],[826,357],[553,548],[913,570]].map(([x,y])=>drop(x,y,.47)).join('');}
function rainGallery(stage=0,final=false){const outside=gardenGlass(final),id=`clear-${stage}-${final}`;let a=interior(false,'#D6D5C0')+R(433,78,530,582,'#AEA98C',20)+outside+R(458,103,482,530,'#DFE6DC',0,'opacity=".87"');if(stage){a+=`<defs><clipPath id="${id}">${R(722,318,95,76,'#fff',3)}${stage>=2?E(757,454,20,20,'#fff'):''}</clipPath></defs><g clip-path="url(#${id})">${outside}</g>`+R(722,318,95,76,'none',3,'stroke="#B4CDC7" stroke-width="3"')+(stage>=2?E(757,454,20,20,'none','stroke="#ADC8C0" stroke-width="3"'):'');}return a+R(428,636,541,22,'#B7A483',6)+bench(277,655,.84);}
function hanky(x,y,s=1){return G(x,y,s,P('M-47 -25 L43 -29 L54 26 L-39 32Z','#ECE7D1')+P('M-31 22 L34 18 L32 -17','none','#C9D1BC',3));}
function mistScene(i,cover){
 if(cover)return rainGallery(2)+sitKid('米朵',333,654,1.13,'hold')+mistCat(684,613,1.04)+hanky(346,637,.62);
 return [
 ()=>rainGallery()+kid('米朵',492,742,1.12,'back')+mistCat(686,613,1.0)+P('M444 570 Q468 612 505 626 M540 570 Q608 581 641 574','none','#E2C8AC',20),
 ()=>rainGallery()+kid('米朵',419,742,1.13,'point')+mistCat(686,613,1.0)+tinySnail(758,456,.38),
 ()=>rainGallery(1)+kid('米朵',594,742,1.14,'back')+mistCat(684,613,1.0,'reach')+P('M545 566 Q546 612 560 636 M643 566 Q665 456 701 398','none','#E2C8AC',20)+hanky(710,385,.65),
 ()=>rainGallery(1)+kid('米朵',545,742,1.13,'back')+mistCat(684,598,1.0,'reach')+P('M496 568 Q507 612 530 632 M594 568 Q623 485 641 425','none','#E2C8AC',20)+hanky(650,414,.46),
 ()=>rainGallery(1)+sitKid('米朵',326,654,1.13,'hold')+hanky(336,630,.70)+mistCat(684,613,1.0),
 ()=>rainGallery(2)+kid('米朵',543,741,1.10,'back')+mistCat(684,613,1.0)+P('M496 572 Q512 620 533 640 M590 572 Q658 496 738 457','none','#E2C8AC',19)+hanky(744,455,.31),
 ()=>rainGallery(2)+sitKid('米朵',444,655,1.14,'hold')+mistCat(690,613,1.0)+hanky(454,632,.59),
 ()=>rainGallery(2,true)+sitKid('米朵',333,654,1.13,'hold')+mistCat(686,574,1.0,'lie')+drop(814,519,.61)
 ][i]();
}
function mintGarden(){return outdoor()+P('M0 638 Q423 571 1000 628 L1000 800 L0 800Z','#C7C7A9')+P('M0 700 L1000 700 M0 764 L1000 764 M110 638 L110 800 M361 620 L361 800 M611 620 L611 800 M861 629 L861 800','none','#B5B89A',3)+[0,1,2,3,4].map(j=>leaf(619+j*64,664,.70,'#95B18E',-40+j*14)+leaf(647+j*64,663,.60,'#AAC197',35)).join('')+drop(688,605,.44)+drop(818,573,.40);}
function sleepyStone(x,y,s=1,mood='open'){return G(x,y,s,E(0,0,85,51,'#C8CDBD')+(mood==='sleep'?P('M-39 -7 Q-26 1 -14 -7 M14 -7 Q26 1 39 -7','none',ink,3):mood==='drowse'?P('M-39 -9 L-14 -9 M14 -9 L39 -9','none',ink,3):E(-26,-10,5,mood==='wide'?8:5,ink)+E(26,-10,5,mood==='wide'?8:5,ink))+P('M-11 18 Q0 27 11 18','none',ink,3));}
function yellowHat(x,y,s=1,rest=false){return G(x,y,s,E(0,5,54,15,'#DCC481')+P('M-33 0 L-29 -44 Q0 -70 29 -44 L33 0Z','#E4CD8B')+P('M-33 -8 Q0 6 33 -8','none','#BFAE7D',5)+P(rest?'M-24 8 Q-44 31 -62 14 M22 8 Q44 29 63 14':'M-22 7 Q-34 41 -13 46 M22 7 Q35 41 15 45','none','#C6B888',5));}
function thought(art){return R(470,71,452,344,'#EAE5CE',76,'stroke="#D3D4B7" stroke-width="3"')+E(454,426,17,13,'#EAE5CE')+E(424,449,10,8,'#EAE5CE')+art;}
function hatBed(x,y,s=1,covered=false){return G(x,y,s,R(-110,-52,220,94,'#BDB397',16)+R(-117,-74,18,136,'#A79B7C',7)+R(100,-46,18,108,'#A79B7C',7)+R(-95,-64,84,44,'#EAE5CE',15)+(covered?yellowHat(-48,-65,.70,true)+P('M-8 -51 L98 -51 L98 32 L-92 32 L-92 -10 Q-54 -35 -8 -51Z','#B5C8B1'):R(-91,-24,184,54,'#B5C8B1',11)));}
function hatTaleScene(i,cover){
 const pair=(pose='hold',mood='open',close=false)=>R(248,643,187,84,'#B8A27D',25)+E(342,643,93,22,'#D1B58A')+P('M266 671 L266 713 M416 671 L416 711','none','#A58E6D',4)+sitKid(close?'芋朵并':'芋朵',342,659,1.17,pose)+sleepyStone(657,704,1.22,mood);
 if(cover)return mintGarden()+pair('hold','sleep')+thought(hatBed(698,310,1.35,true));
 return [
 ()=>mintGarden()+sitKid('芋朵',387,658,1.18,'low')+sleepyStone(687,705,1.22),
 ()=>mintGarden()+pair('point','wide')+thought(R(491,263,411,105,'#B5CFCC',35)+leaf(695,323,1.00,'#A2BA91',87)+yellowHat(701,262,1.13)+P('M527 327 q44 -10 78 0 M747 352 q47 -12 86 0','none','#D5E3D4',4)),
 ()=>mintGarden()+pair('wide','wide')+thought(P('M502 356 L596 218 Q626 196 656 229 L735 356Z','#CFB88C')+P('M526 358 Q690 232 884 358','none','#D9C89B',32)+P('M532 358 Q690 252 878 358','none','#B8A577',4)+yellowHat(743,258,.83)+E(560,374,36,13,'#AEC6C6')+P('M527 374 L504 357 L504 391Z','#AEC6C6')),
 ()=>mintGarden()+pair('think','wide')+thought(tree(569,357,.47,'#B3C19B')+tree(823,356,.48,'#A3B993')+yellowHat(705,348,.84)+P('M634 397 Q671 338 730 335','none','#D4C4A2',15)),
 ()=>mintGarden()+pair('low','open')+drop(689,622,.57)+P('M619 722 Q657 742 696 722','none','#D8DAC1',4),
 ()=>mintGarden()+pair('wide','drowse')+thought(R(531,190,324,198,'#D4C8A9',11)+P('M510 193 L694 87 L877 193Z','#B5BD9B')+R(550,244,87,145,'#ADB69A',43)+hatBed(752,335,.79,false)+yellowHat(622,366,.62,true)),
 ()=>mintGarden()+pair('hold','sleep')+thought(hatBed(698,311,1.36,true)),
 ()=>mintGarden()+pair('hold','sleep',true)+leaf(786,639,.95,'#ABC197',41)+P('M400 751 Q462 762 521 746','none','#DCE0C7',4)
 ][i]();
}
function trainIcon(x,y,s=1){return G(x,y,s,R(-52,-37,66,40,'#B4C8BD',7)+R(9,-71,40,73,'#8EAAA8',7)+R(-42,-57,13,22,'#9BAF9F',3)+R(18,-63,21,24,'#DDE3CD',4)+E(-33,9,13,13,'#7D9892')+E(31,9,13,13,'#7D9892')+E(-32,-77,11,9,'#D9DECB')+E(-15,-95,15,11,'#D9DECB')) ;}
function cakeIcon(x,y,s=1){return G(x,y,s,Array.from({length:9},(_,j)=>R(-64+j*5,-j*12,128-j*10,11,j%2?'#E8D6A5':'#D8B894',3)).join('')+E(0,-113,8,8,'#BE8B7C')+line(0,-121,4,-130,'#9EAD83',3));}
function bootIcon(x,y,s=1,sleep=false){return G(x,y,s,P('M-35 -100 L24 -100 L24 -22 Q88 -22 87 14 Q84 36 58 36 L-29 36 Q-48 26 -41 -3Z','#91B4C8')+R(-40,-111,68,20,'#ABC9D2',6)+P('M-34 28 L78 28','none','#739AAE',5)+(sleep?E(-8,-83,22,16,'#E8E5D0')+E(-13,-89,14,12,'#B6A081')+E(-22,-100,6,7,'#B6A081')+E(-3,-100,6,7,'#B6A081')+P('M-15 -90 Q-10 -86 -5 -90','none',ink,2)+P('M-18 -78 Q10 -101 26 -80 L20 -56 Q0 -41 -18 -78Z','#CCAFB9'):E(46,48,4,6,'#B1B49C')+E(60,62,4,6,'#B1B49C')+E(72,76,4,6,'#B1B49C')));}
const bookColors={train:'#C18E7D',cake:'#D8C58C',boot:'#96B7CA'};
function pictureBook(x,y,s=1,type='boot',open=false,sleep=false){const icon=type==='train'?trainIcon:type==='cake'?cakeIcon:bootIcon;return G(x,y,s,open?P('M-108 -71 Q-49 -90 0 -65 Q49 -90 108 -71 L108 77 Q49 59 0 85 Q-49 59 -108 77Z',bookColors[type])+P('M-100 -64 Q-49 -81 -3 -58 L-3 74 Q-49 51 -100 70Z','#F1E8D0')+P('M3 -58 Q49 -81 100 -64 L100 70 Q49 51 3 74Z','#F1E8D0')+icon(50,20,.62,sleep)+P('M-80 -36 L-23 -36 M-80 -14 L-19 -14 M-80 8 L-29 8 M-80 30 L-23 30','none','#AAB6A3',3):R(-70,-90,140,180,bookColors[type],9)+line(-58,-80,-58,80,'#DED4B9',4)+icon(7,31,.79,sleep));}
function bedtimeRoom(){return interior(true,'#D7CCB6')+line(842,94,842,137,'#A99E7D',3)+P('M819 139 Q842 104 865 139Z','#D9C58E')+E(842,139,23,7,'#B9AA7F')+line(842,145,842,197,'#B5B195',3)+R(834,190,17,32,'#D7DAC0',3)+R(110,538,225,105,'#B7A27F',10)+R(124,548,197,78,'#9B8F71',3)+R(513,501,402,224,'#B5AE91',26)+R(522,518,384,191,'#C5CFB5',21)+R(545,523,153,76,'#E9E2C9',27)+R(508,489,20,259,'#A99D7C',9)+R(899,538,20,210,'#A99D7C',9)+R(421,551,51,22,'#B6A17D',5)+line(447,550,447,476,'#AB9773',7)+P('M403 483 L417 434 L478 434 L491 483Z','#DDCA99')+E(446,482,46,11,'#E8DAB4')+E(351,728,262,65,'#C9C2A2');}
function trioBooks(open=false){return pictureBook(210,699,.65,'train',open)+pictureBook(461,706,.65,'cake',open)+pictureBook(714,704,.65,'boot',open);}
function booksScene(i,cover){
 if(cover)return bedtimeRoom()+sitKid('梨朵',669,622,1.05,'hold')+pictureBook(671,581,.87,'boot',true,true)+pictureBook(165,582,.35,'train')+pictureBook(269,582,.35,'cake');
 return [
 ()=>bedtimeRoom()+kid('梨朵',391,743,1.14,'hold')+pictureBook(344,599,.47,'train')+pictureBook(395,623,.47,'cake')+pictureBook(449,642,.47,'boot'),
 ()=>bedtimeRoom()+sitKid('梨朵',484,619,1.07,'point')+trioBooks(true),
 ()=>bedtimeRoom()+sitKid('梨朵',470,617,1.09,'wide')+trioBooks(true)+P('M284 629 Q362 603 414 632 M538 632 Q606 604 663 635','none','#DDDCC0',4),
 ()=>bedtimeRoom()+sitKid('梨朵',423,615,1.10,'back')+trioBooks(true)+P('M376 534 Q330 603 255 675 M470 534 Q507 549 482 512','none','#E2C8AC',18),
 ()=>bedtimeRoom()+sitKid('梨朵',467,620,1.08,'hold')+trioBooks(false),
 ()=>bedtimeRoom()+pictureBook(164,582,.35,'train')+pictureBook(269,582,.35,'cake')+sitKid('梨朵',672,622,1.04,'hold')+pictureBook(673,589,.79,'boot',true),
 ()=>bedtimeRoom()+pictureBook(164,582,.35,'train')+pictureBook(269,582,.35,'cake')+sitKid('梨朵',656,620,1.05,'hold')+pictureBook(658,591,1.16,'boot',true,true),
 ()=>bedtimeRoom()+pictureBook(164,582,.35,'train')+pictureBook(269,582,.35,'cake')+G(840,591,1,kid('梨朵卧',0,0,.91,'sleep'),-90)+P('M696 549 Q779 526 899 556 L899 697 L665 697 L665 610Z','#B9C8B0')+pictureBook(542,555,.30,'boot')+P('M811 668 q17 -7 32 0 M846 674 q16 -7 30 0','none','#A4B89E',3)
 ][i]();
}
function nest(x,y,s=1){return G(x,y,s,P('M-58 -18 Q-47 37 0 33 Q47 37 58 -18 Q0 6 -58 -18Z','#B49A73')+E(0,-17,57,17,'#98886B')+P('M-53 -8 L42 18 M-39 19 L48 -1 M-43 4 L23 28 M-18 27 L53 -3','none','#CEB58B',4));}
function livingBench(x,y,s=1,mood='cry'){let a=R(-224,-15,20,98,'#B09168',5)+R(204,-15,20,98,'#B09168',5)+R(-172,-25,17,87,'#BA9D73',4)+R(155,-25,17,87,'#BA9D73',4)+P('M-245 -115 Q0 -170 245 -115 L238 -38 Q0 -75 -238 -38Z','#C9AA76')+P('M-228 -91 Q0 -134 228 -91 M-220 -67 Q0 -108 220 -67','none','#B39568',3)+R(-255,-20,510,28,'#DDC28C',9)+E(-150,-97,7,8,ink)+E(150,-97,7,8,ink)+E(0,-86,8,5,'#9D815B')+P(mood==='cry'?'M-17 -62 Q0 -78 17 -62':'M-17 -72 Q0 -55 17 -72','none','#8D795A',3);if(mood!=='calm')a+=drop(-156,-58,.60)+drop(156,-58,.60);return G(x,y,s,a);}
function firefly(x,y,s=1){return G(x,y,s,E(0,0,18,18,'#E1D998','opacity=".17"')+E(0,0,4,5,'#EADFA4')+E(-5,-7,5,7,'#B5C8B7')+E(5,-7,5,7,'#B5C8B7'));}
function benchHill(night=false){return outdoor(night?'night':'gold')+P('M0 673 Q438 566 1000 662 L1000 800 L0 800Z',night?'#849B85':'#C2C69D')+P('M684 551 Q672 269 721 145 M696 337 Q602 267 517 272 M705 262 Q788 199 866 239','none','#90816A',27)+E(585,176,162,133,night?'#78968B':'#A7B391')+E(804,154,177,138,night?'#749186':'#A0AF8B')+nest(681,294,.82)+(night?[[96,627],[242,704],[899,643],[838,745],[585,759]].map(([x,y])=>firefly(x,y,.90)).join(''):'');}
function benchScene(i,cover){
 const bench=(mood='cry')=>livingBench(633,652,1.0,mood);const sitting=(pose='hold')=>sitKid('米芹坐',395,634,1.08,pose);
 if(cover)return benchHill(true)+bench('calm')+sitting('hold')+flower(643,642,.78,'#99B9CF');
 return [
 ()=>benchHill()+bench()+kid('米芹',243,744,1.10,'low')+E(414,752,37,13,'#9AA37D')+E(841,751,38,13,'#9AA37D'),
 ()=>benchHill()+bench()+kid('米芹',247,744,1.13,'point')+P('M309 435 Q462 355 633 307','none','#D7D5B5',3),
 ()=>benchHill()+bench()+kid('米芹',360,743,1.13,'back')+P('M311 569 Q350 611 398 636 M409 569 Q484 612 557 627','none','#C0A385',20)+flower(572,641,.82,'#99B9CF'),
 ()=>benchHill()+bench()+kid('米芹',282,744,1.16,'up')+E(248,511,15,11,'#CDB091')+E(315,511,15,11,'#CDB091')+flower(631,641,.81,'#99B9CF'),
 ()=>benchHill()+bench()+sitting('hold')+flower(632,641,.80,'#99B9CF'),
 ()=>benchHill()+bench('smile')+sitKid('米芹坐',416,634,1.08,'think')+flower(643,641,.78,'#99B9CF'),
 ()=>benchHill(true)+bench('smile')+sitting('hold')+flower(643,641,.78,'#99B9CF')+P('M339 714 q-14 13 -26 5 M445 713 q12 12 23 4','none','#C6CCAB',3),
 ()=>benchHill(true)+bench('calm')+sitKid('米芹坐',410,634,1.09,'hold')+flower(643,641,.78,'#99B9CF')+firefly(719,703,1.00)
 ][i]();
}
function woodChair(x,y,s=1){return G(x,y,s,R(-71,-176,142,134,'#BDA47D',13)+R(-64,-158,128,18,'#D5BB8F',5)+line(-61,-31,-63,104,'#A38D6A',12)+line(61,-31,63,104,'#A38D6A',12)+R(-82,-41,164,28,'#D2B78C',8));}
function teaCurtain(){return R(672,83,236,346,'#BCCFBF',24)+[686,719,752,785,818,851,884].map(x=>line(x,91,x,410,'#9DAE8D',4)+leaf(x,165,.35,'#A9BD98',-31)+leaf(x,266,.38,'#B9C9A4',41)).join('')+R(654,412,270,20,'#B7A482',6);}
function teaRoom(busy=false){return interior(false,'#DCD3B8')+teaCurtain()+R(53,469,354,131,'#BDAE88',10)+R(42,453,375,25,'#CEB68A',7)+(busy?woodChair(116,472,.49)+woodChair(304,472,.49)+sitKid('客熊',116,451,.55,'hold')+sitKid('客鸭',304,451,.55,'hold')+desk(213,497,.53)+cup(166,476,.48)+cup(256,476,.48):cup(132,444,.64)+cup(242,444,.64));}
function carrot(x,y,s=1,r=0){return G(x,y,s,P('M-25 -32 Q0 -53 25 -32 L0 58Z','#D6AF7E')+P('M-17 -11 L9 -5 M-9 15 L7 21','none','#BA9669',3)+leaf(-2,-33,.33,'#A9BA8D',-23)+leaf(4,-33,.30,'#99B087',28),r);}
function bearPicture(x,y,s=1){return G(x,y,s,E(-34,-46,16,17,'#B79B77')+E(15,-46,16,17,'#B79B77')+E(-9,-21,38,35,'#C0A480')+E(-11,40,33,46,'#C0A480')+E(-32,75,20,12,'#C0A480')+E(12,75,20,12,'#C0A480')+E(-22,-24,3,4,ink)+E(2,-24,3,4,ink)+E(-9,-10,4,3,'#8E7457')+carrot(40,19,1.35,-13)+P('M13 15 Q21 36 51 29','none','#C0A480',12));}
function bearBook(x,y,s=1){return G(x,y,s,P('M-101 -63 Q-46 -81 0 -60 Q46 -81 101 -63 L101 71 Q46 54 0 76 Q-46 54 -101 71Z','#EEE3C8','none')+line(0,-58,0,72,'#CABB99',3)+bearPicture(39,-1,.61)+P('M-79 -35 L-21 -35 M-79 -13 L-24 -13 M-79 9 L-17 9 M-79 31 L-29 31','none','#AEB99F',3));}
function woodBox(x,y,s=1){return G(x,y,s,R(-68,-73,136,74,'#C4AC83',5)+P('M-68 -73 L-50 -91 L83 -91 L68 -73Z','#D8BF93')+line(-62,-49,62,-49,'#B49A70',3)+line(-62,-24,62,-24,'#B49A70',3));}
function reservedSeat(occupied=false,showBook=true){return woodChair(800,601,.89)+(occupied?sitKid('蒲蒲镜',800,578,.98,'hold'):'')+desk(748,661,.79)+(showBook?bearBook(748,618,.59):'');}
function floorKid(name,x,y,s=1,pose='hold'){
 const f=C[name][1],pants=name==='陶小桃'?'#EAE2C9':f,id=`floor-${name}-${x}-${y}`;
 return G(x,y,s,E(-30,12,50,24,pants)+E(30,12,50,24,pants)+E(-54,24,23,12,f)+E(54,24,23,12,f))+`<defs><clipPath id="${id}"><rect x="${x-180*s}" y="${y-450*s}" width="${360*s}" height="${457*s}"/></clipPath></defs><g clip-path="url(#${id})">${kid(name,x,y+55*s,s,pose)}</g>`;
}
function tailOnMat(x,y,s=1){return G(x,y,s,P('M30 -33 Q109 -37 114 6 Q104 45 40 25','none','#BEA184',8));}
function teaScene(i,cover){
 if(cover)return teaRoom(true)+rockChair(267,651,1.03,false,true)+sitKid('兔婆婆',267,620,.97,'hold')+reservedSeat(true)+E(553,754,98,27,'#D6C495')+tailOnMat(531,725,.90)+floorKid('绒枣坐',530,718,.98,'hold');
 return [
 ()=>teaRoom()+rockChair(253,652,.96,false,true)+woodChair(799,601,.89)+sitKid('蒲蒲',799,579,.98,'point')+desk(748,661,.79)+bearBook(748,618,.59)+kid('绒枣',465,742,1.12,'back')+P('M417 570 Q450 616 493 632 M513 570 Q570 599 634 617','none','#BEA184',19)+hanky(635,619,.53),
 ()=>teaRoom()+rockChair(264,651,1.04,false,true)+reservedSeat()+kid('绒枣',431,742,1.13,'back')+P('M382 568 Q334 541 327 534 M480 568 Q489 607 496 633','none','#BEA184',20),
 ()=>teaRoom(true)+rockChair(255,651,.97,false,true)+reservedSeat()+kid('绒枣',441,742,1.04,'hold')+kid('兔婆婆',616,741,1.03,'low')+basket(677,733,.56,false)+carrot(675,695,.43,13),
 ()=>teaRoom(true)+rockChair(254,651,.97,false,true)+reservedSeat()+woodBox(694,753,.80)+kid('兔婆婆',586,739,1.06,'hold')+kid('绒枣',429,742,1.05,'back')+P('M384 580 Q370 621 391 644 M474 580 Q507 593 539 590','none','#BEA184',19)+basket(818,741,.56,false),
 ()=>teaRoom(true)+rockChair(270,651,1.02,false,true)+reservedSeat()+kid('绒枣',456,742,1.10,'back')+P('M409 573 Q368 584 336 593 M503 573 Q540 608 563 638','none','#BEA184',19)+kid('兔婆婆',623,741,1.00,'hold')+basket(687,738,.53,false),
 ()=>teaRoom(true)+rockChair(268,651,1.02,false,true)+sitKid('兔婆婆',268,620,.96,'hold')+basket(151,734,.56,false)+reservedSeat()+E(530,754,99,27,'#D6C495')+tailOnMat(504,723,.9)+floorKid('绒枣坐',505,718,.99,'hold')+woodBox(665,747,.67)+cup(671,680,.60),
 ()=>teaRoom(true)+rockChair(267,651,1.02,false,true)+sitKid('兔婆婆',267,620,.96,'hold')+reservedSeat(true,false)+E(552,755,99,28,'#D6C495')+tailOnMat(529,724,.90)+floorKid('绒枣坐',529,718,.98,'point')+bearBook(737,586,.75),
 ()=>teaRoom(true)+rockChair(267,651,1.02,false,true)+sitKid('兔婆婆',267,620,.96,'hold')+reservedSeat(true)+E(553,754,99,27,'#D6C495')+tailOnMat(531,725,.90)+floorKid('绒枣坐',530,718,.98,'hold')+cup(650,742,.55)+leaf(855,411,.54,'#A9BB93',32)
 ][i]();
}
function porcelainFrog(x,y,s=1,pose='hold'){let a=E(0,0,84,12,'#56786C','opacity=".10"')+E(47,-90,49,75,'#A3C7CE')+[-112,-87,-62].map((yy,j)=>E(65+j%2*12,yy,9,9,'#EEF0E4')).join('')+E(-49,-24,35,25,'#AFCCD1')+E(49,-24,35,25,'#AFCCD1')+E(0,-82,57,73,'#B5D3D5')+E(0,-75,38,48,'#DCE6D8')+E(-35,-188,25,31,'#B5D3D5')+E(35,-188,25,31,'#B5D3D5')+E(0,-153,65,49,'#B5D3D5')+E(-35,-188,6,9,ink)+E(35,-188,6,9,ink)+P('M-20 -139 Q0 -120 20 -139','none','#668F8B',3)+P('M0 -108 L-29 -127 L-30 -99Z','#F0EBDD')+P('M0 -108 L29 -127 L30 -99Z','#F0EBDD')+E(0,-110,7,7,'#D9E2D5');const q=pose==='clap'?[[49,31],[-49,31]]:pose==='point'?[[-3,68],[63,-4]]:[[39,45],[-39,45]];a+=arm(-45,-99,...q[0],'#AFCCD1',18)+arm(45,-99,...q[1],'#AFCCD1',18);return G(x,y,s,a);}
function clayYard(){return R(0,0,1000,800,'#D3DDCF',0)+cloud(264,154,.86,'#ECEAD8')+R(0,333,1000,218,'#C8AB8A',0)+P('M0 390 L1000 390 M0 454 L1000 454 M125 337 L125 390 M375 337 L375 390 M625 337 L625 390 M875 337 L875 390 M0 390 L0 454 M250 390 L250 454 M500 390 L500 454 M750 390 L750 454 M125 455 L125 519 M375 455 L375 519 M625 455 L625 519 M875 455 L875 519','none','#B99E7E',3)+R(0,328,1000,20,'#D8BD98',5)+R(0,548,1000,252,'#D4BE9C',0)+P('M0 625 L1000 625 M0 704 L1000 704 M170 550 L170 625 M420 550 L420 625 M670 550 L670 625 M920 550 L920 625 M40 625 L40 704 M290 625 L290 704 M540 625 L540 704 M790 625 L790 704 M170 704 L170 800 M420 704 L420 800 M670 704 L670 800 M920 704 L920 800','none','#C3AD8C',3)+tree(55,552,.90,'#ADBF9B');}
function fiveCircles(){return [230,380,530,680,830].map(x=>E(x,714,59,29,'none','stroke="#F1ECD8" stroke-width="6"')).join('');}
function waterBasin(x,y,s=1,reflection=false){return G(x,y,s,P('M-87 -5 Q-77 70 0 71 Q77 70 87 -5Z','#B69675')+E(0,-6,87,32,'#D2B491')+E(0,-8,73,23,'#B6D2CF')+(reflection?E(-28,-10,16,12,'#C89F83','opacity=".72"')+E(25,-10,17,12,'#B2D2D3','opacity=".75"')+P('M-36 -10 L-34 -10 M-23 -10 L-21 -10 M17 -10 L19 -10 M30 -10 L32 -10','none','#6B8E87',3):'')+P('M-58 0 Q0 -12 59 1','none','#E0E8D7',3));}
function hopArc(from,to,y=605){return P(`M${from} ${y+67} Q${(from+to)/2} ${y-77} ${to} ${y+67}`,'none','#9CB9AB',4,'stroke-dasharray="9 12"')+P(`M${to-16} ${y+53} L${to} ${y+67} L${to+3} ${y+45}`,'none','#9CB9AB',4);}
function hopScene(i,cover){
 if(cover)return clayYard()+fiveCircles()+kid('陶小桃',642,650,1.05,'hold')+porcelainFrog(356,709,1.17,'clap')+waterBasin(852,526,.60,true);
 return [
 ()=>clayYard()+fiveCircles()+floorKid('陶小桃',366,590,1.02,'hold')+porcelainFrog(747,568,1.01,'point')+R(784,591,29,9,'#EFE9D5',4),
 ()=>clayYard()+fiveCircles()+porcelainFrog(230,713,1.06,'hold')+kid('陶小桃',581,595,1.08,'hold')+R(325,752,26,9,'#EFE9D5',4),
 ()=>clayYard()+fiveCircles()+kid('陶小桃',380,711,1.02,'low')+porcelainFrog(771,566,1.03,'point')+E(231,715,15,7,'#BFAE8D'),
 ()=>clayYard()+fiveCircles()+kid('陶小桃',380,711,1.02,'hold')+porcelainFrog(719,571,1.04,'hold')+waterBasin(905,567,.58),
 ()=>clayYard()+fiveCircles()+kid('陶小桃',254,570,1.00,'hold')+porcelainFrog(530,712,1.09,'hold')+hopArc(230,530,572)+waterBasin(893,566,.58),
 ()=>clayYard()+fiveCircles()+kid('陶小桃',443,572,1.03,'wide')+porcelainFrog(830,713,1.06,'hold')+hopArc(530,830,578),
 ()=>clayYard()+fiveCircles()+kid('陶小桃',830,711,1.04,'hold')+porcelainFrog(431,569,1.08,'clap')+E(519,715,14,6,'#BCAA86')+E(542,718,13,6,'#BCAA86')+hopArc(530,830,581),
 ()=>clayYard()+fiveCircles()+floorKid('陶小桃',535,588,1.04,'hold')+porcelainFrog(230,713,1.05,'hold')+waterBasin(830,558,.83,true)
 ][i]();
}
const scenes={'expansion-0169':circleBoatScene,'expansion-0170':shoeScene,'expansion-0171':mistScene,'expansion-0172':hatTaleScene,'expansion-0173':booksScene,'expansion-0174':benchScene,'expansion-0175':teaScene,'expansion-0176':hopScene};
export function fifthYoungLastArtwork(story,index,cover=false){
 const scene=scenes[story?.id];if(!scene)throw Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw Error('Expected eight pages');
 if(!Number.isInteger(index)||index<0||index>=8)throw Error('Page index must be an integer from 0 to 7');
 return svg(scene(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

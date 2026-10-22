// Eight explicit, independent eight-page storyboards for expansion-0209 through 0216.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
栗酥:['chipmunk','#BA9D74','#B98079','vest'],栗酥坐:['chipmunk','#BA9D74','#B98079','vest'],
绵豆:['mole','#8E9691','#8AAAB9','overall'],绵豆坐:['mole','#8E9691','#8AAAB9','overall'],
米苔:['mouse','#BAA084','#B18B9A','coat',null,'blueShoesBag'],米苔坐:['mouse','#BAA084','#B18B9A','coat'],米苔鞋:['mouse','#BAA084','#B18B9A','coat',null,'blueshoes'],
奶奶:['mouse','#B4B9AE','#C7B998','coat',null,'glasses'],奶奶坐:['mouse','#B4B9AE','#C7B998','coat',null,'glasses'],幼米苔:['mouse','#BAA084','#BD9AAA','dress'],
荞团:['mouse','#A8A294','#B1C5A1','vest'],荞团坐:['mouse','#A8A294','#B1C5A1','vest'],荞团包:['mouse','#A8A294','#B1C5A1','vest',null,'creamBag'],
萄萄:['elf','#DFC7A7','#B4A1C4','coat',null,'fruitgirl'],萄萄坐:['elf','#DFC7A7','#B4A1C4','coat',null,'fruitgirl'],
柚芽:['human','#E1C7AB','#BEB0CA','dress',null,'flowergirl'],柚芽坐:['human','#E1C7AB','#BEB0CA','dress',null,'flowergirl'],
苔桃:['human','#E1C7AB','#AEC3A2','dress',null,'coastgirl'],苔桃坐:['human','#E1C7AB','#AEC3A2','dress',null,'coastgirl'],
芋圆:['pig','#D9B7AC','#88AEBB','overall',null,'beanpocket'],芋圆坐:['pig','#D9B7AC','#88AEBB','overall',null,'beanpocket'],
星绵:['sheep','#E8E5D3','#B9ADC8','scarf'],星绵坐:['sheep','#E8E5D3','#B9ADC8','scarf'],
蓬蓬:['mouse','#BAC2BC','#BCAFCC','vest',null,'creamBag'],蓬蓬无包:['mouse','#BAC2BC','#BCAFCC','vest'],蓬蓬坐:['mouse','#BAC2BC','#BCAFCC','vest']};
function arm(x,y,dx,dy,c,w=22){return P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.55-9} ${x+dx} ${y+dy}`,'none',c,w);}
function kid(name,x,y,s=1,pose='stand',flip=false,extras=''){
 const cfg=C[name];if(!cfg)throw Error(`Unknown character ${name}`);const [t,f,cloth,kind,scarf,detail]=cfg;
 let a=name.endsWith('卧')?'':E(0,0,81,12,'#53675A','opacity=".12"');if(detail==='flowergirl')a+=E(-60,-144,42,64,'#DDE9DF','opacity=".55" transform="rotate(-28 -60 -144)"')+E(60,-144,42,64,'#DDE9DF','opacity=".55" transform="rotate(28 60 -144)"');
 if(t==='hedgehog')a+=P('M-73 -161 L-97 -195 L-78 -209 L-105 -233 L-79 -244 L-90 -278 L-61 -274 L-64 -308 L-35 -296 L-15 -323 L4 -302 L32 -319 L41 -289 L72 -300 L68 -270 L96 -273 L82 -241 L108 -222 L83 -207 L100 -177 L72 -162Z','#9A8668');
 if(['squirrel','chipmunk'].includes(t)&&(!name.endsWith('坐')||t==='chipmunk')&&!['蓬蓬围','蓬蓬卧'].includes(name))a+=P('M44 -48 Q145 -77 121 -204 Q102 -250 64 -227 Q21 -202 68 -160','none',f,53);
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
 if(t==='elf'&&!['purpleCurl','fruitgirl'].includes(detail))a+=P('M-62 -222 Q-72 -284 -25 -278 L-21 -307 L-1 -279 L21 -302 L26 -276 Q73 -275 63 -223 L45 -244 L31 -260 L14 -244 L-8 -257 L-35 -243 L-48 -222Z','#A6BE87');
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
 if(detail==='whiteclip')a+=R(-56,-270,32,9,'#F2EFE0',4,'transform="rotate(-22 -40 -266)"');
 if(detail==='sleepcap')a+=P('M-58 -268 Q-48 -322 8 -316 Q48 -311 61 -268 L88 -252 Q65 -258 51 -248Z','#F1EEDF')+R(-62,-276,123,18,'#E3E3D7',7)+E(88,-253,11,10,'#F1EEDF');
 if(detail==='strawhat')a+=E(0,-275,89,15,'#D6C18B')+P('M-53 -278 L-44 -315 Q0 -344 44 -315 L53 -278Z','#E2CE99')+P('M-50 -286 Q0 -271 50 -286','none','#B6A578',6)+[-28,-6,16,38].map(xx=>line(xx,-305,xx-6,-280,'#C7B580',2)).join('');
 if(detail==='backpack')a+=P('M-55 -177 Q-81 -178 -87 -125 L-81 -61 L-49 -51Z','#D5C4A0')+line(-48,-177,-38,-74,'#B6A27E',8);
 if(detail==='stationcap')a+=R(-58,-276,115,23,'#879F7C',6)+P('M-53 -278 Q-52 -319 0 -317 Q52 -317 53 -278Z','#96AF8D')+R(-19,-299,38,22,'#D4C383',4)+E(0,-273,75,10,'#758E6E');
 if(detail==='mittens'&&pose!=='back')a+=E(-43+q[0][0],-154+q[0][1],16,18,'#BE837A')+E(43+q[1][0],-154+q[1][1],16,18,'#BE837A');
 if(detail==='blueshoes'||detail==='blueShoesBag')a+=E(-30,-10,31,17,'#7F9FB5')+E(30,-10,31,17,'#7F9FB5');
 if(detail==='blueShoesBag')a+=line(-48,-178,50,-70,'#BCA987',7)+R(31,-112,59,61,'#E4D9BA',12);
 if(detail==='fruitgirl')a+=[[-53,-246],[-48,-274],[-20,-287],[11,-288],[40,-276],[57,-247]].map(([xx,yy])=>E(xx,yy,21,23,'#AEC69A')).join('')+E(-30,-10,31,17,'#F0EEE0')+E(30,-10,31,17,'#F0EEE0');
 if(detail==='flowergirl'||detail==='coastgirl')a+=P('M-64 -218 L-66 -263 Q-42 -302 0 -296 Q44 -300 65 -265 L64 -218 L48 -219 L45 -260 L22 -251 L-3 -265 L-43 -251 L-48 -218Z','#A78A6A')+(detail==='flowergirl'?P('M-2 -292 Q-43 -341 -54 -323 Q-60 -295 -4 -289 M4 -290 Q12 -337 40 -327 Q56 -305 4 -290','#9DBB8B')+E(-30,-10,31,17,'#8FA87F')+E(30,-10,31,17,'#8FA87F'):R(-47,-44,30,28,'#EEEBDC',5)+R(17,-44,30,28,'#EEEBDC',5)+E(-30,-10,31,17,'#9D805F')+E(30,-10,31,17,'#9D805F'));
 if(detail==='beanpocket')a+=R(-40,-113,30,31,'#779FAD',6)+P('M-28 -109 Q-40 -99 -27 -91 Q-10 -96 -17 -108 Q-20 -99 -28 -109Z','#F2EBDC');
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function sitKid(name,x,y,s=1,pose='hold',extras=''){
 const f=C[name][1],shoe=['blueShoesBag','blueshoes'].includes(C[name][5])?'#7F9FB5':C[name][5]==='coastgirl'?'#9D805F':C[name][5]==='fruitgirl'?'#F0EEE0':C[name][5]==='flowergirl'?'#8FA87F':['rainboots','brownshoes'].includes(C[name][5])?'#9D8468':C[name][5]==='rainGirl'?'#B8877C':C[name][5]==='sleepGirl'?'#EEEBDC':C[name][5]==='beanGirl'?'#987B5F':['greenshoes','paperdress','paperdance','fairy'].includes(C[name][5])?'#88A579':['leafkid','leafbottle'].includes(C[name][5])?'#987B58':C[name][5]==='snowcap'?'#EFECDD':f,id=`seat-${x}-${y}-${Math.round(s*100)}`,close=name==='芋朵并';
 return (name==='栗芽坐'?G(x,y,s,P('M44 -8 Q116 18 136 -27','none',f,8)):'')+`<defs><clipPath id="${id}"><rect x="${x-210*s}" y="${y-500*s}" width="${420*s}" height="${512*s}"/></clipPath></defs>`+G(x,y,s,arm(close?-12:-27,0,close?-5:-8,55,f,23)+arm(close?12:27,0,close?5:8,55,f,23)+(['rainboots','rainGirl','sleepGirl','clayCurl'].includes(C[name][5])?R(close?-29:-46,10,24,46,C[name][5]==='rainboots'?'#9D8468':C[name][5]==='sleepGirl'?'#C5B7CE':'#EBE5CE',5)+R(close?5:23,10,24,46,C[name][5]==='rainboots'?'#9D8468':C[name][5]==='sleepGirl'?'#C5B7CE':'#EBE5CE',5):'')+(['beanGirl','coastgirl'].includes(C[name][5])?R(-46,39,23,20,'#F3EFDF',5)+R(23,39,23,20,'#F3EFDF',5):'')+E(close?-17:-35,60,25,13,shoe)+E(close?17:35,60,25,13,shoe))+`<g clip-path="url(#${id})">${kid(name,x,y+80*s,s,pose,false,extras)}</g>`;
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


function floorKid(name,x,y,s=1,pose='hold'){
 const f=C[name][1],id=`floor-${name}-${x}-${y}`;
 return G(x,y,s,E(-30,12,50,24,f)+E(30,12,50,24,f)+E(-54,24,23,12,f)+E(54,24,23,12,f))+`<defs><clipPath id="${id}"><rect x="${x-180*s}" y="${y-450*s}" width="${360*s}" height="${457*s}"/></clipPath></defs><g clip-path="url(#${id})">${kid(name,x,y+55*s,s,pose)}</g>`;
}
function cloth(x,y,s=1,c='#E7DFC6',r=0){return G(x,y,s,P('M-48 -28 L43 -31 L54 29 L-42 33Z',c)+P('M-34 24 L36 21 L33 -20','none','#CEC5A8',3),r);}
function creamBag(x,y,s=1,open=false){return G(x,y,s,R(-48,-31,96,69,'#E8DFC5',12)+P('M-38 -31 Q0 -75 38 -31','none','#C4B492',7)+(open?E(0,-29,44,13,'#BBAA87'):P('M-47 -25 L47 -25 L41 8 Q0 24 -41 8Z','#DCD2B6')));}
function snackRoom(){return interior(false,'#E1D5BA')+R(81,421,219,139,'#C1AE8B',14)+[130,190,250].map((x,j)=>acorn(x,456+(j%2)*27,.78)).join('')+leaf(822,291,.76,'#99B18D',35)+R(202,698,585,60,'#C5C7A4',27);}
function bread(x,y,s=1,type='whole',r=0){let a=type==='whole'?R(-89,-46,178,93,'#C29A61',25)+R(-73,-33,146,66,'#E2C28A',22):type==='half'?R(-46,-46,92,93,'#C29A61',18)+P('M-46 -32 L18 -32 Q34 -30 34 -12 L34 17 Q30 33 15 34 L-46 34Z','#E3C68F'):type==='soft'?P('M-55 17 Q-73 -14 -45 -27 Q-32 -48 -6 -33 Q20 -49 40 -26 Q68 -24 61 8 Q51 38 13 32 Q-24 47 -55 17Z','#E2C68F'):type==='flat'?E(0,6,64,20,'#DDC18A'):type==='crumb'?E(0,0,12,9,'#E2C68F'):P('M-64 -25 Q-35 -41 9 -28 L58 -29 L58 -11 L7 -9 Q-33 -22 -50 -8 L-50 21 L-69 21Z','#BE9358');if(['whole','half','soft'].includes(type))a+=[[-24,-8],[12,10],[22,-14],[-10,21]].map(([xx,yy])=>E(xx,yy,3,2,'#D2AD74')).join('');return G(x,y,s,a,r);}
function snackTable(left='soft',right='crust',small=false){return desk(510,680,1.20)+plate(400,639,.75)+plate(616,639,.75)+(left?bread(400,622,small?.47:.65,left):'')+(right?bread(616,622,small?.47:.65,right):'');}
function snackPair(pose1='hold',pose2='hold'){return stool(308,648,.98)+stool(752,648,.98)+sitKid('栗酥坐',308,640,1.08,pose1)+sitKid('绵豆坐',752,640,1.06,pose2);}
function breadScene(i,cover){
 if(cover)return snackRoom()+snackPair('wave','hold')+snackTable('crust','soft')+bread(754,546,.19,'crumb');
 return [
 ()=>snackRoom()+kid('栗酥',361,737,1.09,'hold')+bread(361,601,.87)+kid('绵豆',745,736,1.08,'wave')+desk(569,696,.97)+R(486,641,183,33,'#C5AA7F',9),
 ()=>snackRoom()+snackPair('point','hold')+desk(510,680,1.20)+R(391,605,240,66,'#C5AA7F',12)+bread(461,637,.63,'half')+bread(561,637,.63,'half',180),
 ()=>snackRoom()+snackPair('hold','hold')+snackTable()+bread(310,544,.24,'crust')+bread(751,544,.28,'soft'),
 ()=>snackRoom()+snackPair('back','think')+snackTable('flat','')+P('M262 560 Q299 599 366 624 M354 560 Q383 585 411 618','none','#BA9D74',20)+bread(699,561,.48,'crust',42),
 ()=>snackRoom()+snackPair('point','point')+snackTable('flat','crust'),
 ()=>snackRoom()+snackPair('back','back')+snackTable('soft','crust',true)+P('M262 560 Q280 594 304 602 M354 560 Q418 575 504 586','none','#BA9D74',20)+P('M706 561 Q635 598 539 618 M798 561 Q811 588 792 610','none','#BFA09B',23)+bread(507,585,.29,'soft')+bread(537,616,.26,'crust'),
 ()=>snackRoom()+snackPair('hold','wide')+snackTable('crust','soft')+bread(753,511,.14,'crumb'),
 ()=>snackRoom()+stool(500,649,.98)+stool(695,649,.98)+sitKid('栗酥坐',500,641,1.08,'back')+sitKid('绵豆坐',695,641,1.06,'hold')+desk(509,691,1.15)+R(393,640,225,38,'#C5AA7F',10)+plate(495,655,.75)+plate(495,646,.75)+P('M454 561 Q460 609 482 620 M546 561 Q600 537 688 512','none','#BA9D74',20)+bread(698,513,.13,'crumb')
 ][i]();
}
function inn(){return interior(false,'#DBD2BB')+R(30,199,194,430,'#B4A487',66)+R(45,219,164,411,'#8F9D91',59)+line(91,379,91,559,'#D6C8A2',7)+R(457,90,15,154,'#A79978',5)+E(464,261,64,60,'#E7D6A0')+E(464,261,43,40,'#EFDEAD')+[715,751,817,850].map((x,j)=>line(x,137+j*43,x-8,161+j*43,'#9FB7B5',3)).join('');}
function clothBloom(x,y,s=1,c='#C69CA7'){return G(x,y,s,[-72,0,72,144,216].map(r=>G(0,0,1,E(0,-13,9,14,c),r)).join('')+E(0,0,6,6,'#E9D49C'));}
function carpet(x=562,y=682,s=1,blooms=0){const coords=[[-151,36],[-86,8],[10,39],[92,0],[160,38],[-28,-32],[118,-44],[-160,-32]];return G(x,y,s,R(-226,-86,452,172,'#EBE7D4',20)+R(-207,-67,414,134,'none',14,'stroke="#C3CDAE" stroke-width="4"')+[-1,1].map(k=>[-1,1].map(j=>[-15,-5,5,15].map(d=>line(k*220+d,j*73,k*236+d,j*100,'#91AD86',5)).join('')).join('')).join('')+E(-17,0,3,4,'#8D9D82')+E(17,0,3,4,'#8D9D82')+P('M-16 18 Q0 34 16 18','none','#8D9D82',3)+coords.slice(0,blooms).map(([xx,yy],j)=>clothBloom(xx,yy,.63,['#C69CA7','#DFC582','#98B6C7'][j%3])).join(''));}
function shoe(x,y,s=1,r=0){return G(x,y,s,P('M-38 -9 Q-29 -29 -11 -23 L10 -13 Q48 -14 47 9 Q42 24 12 24 L-34 24Q-47 12 -38 -9Z','#7F9FB5')+E(-9,-15,19,8,'#5E8097'),r);}
function carpetTail(d){return P(d,'none','#BAA084',8);}
function carpetScene(i,cover){
 if(cover)return inn()+carpet(573,680,1.04,8)+carpetTail('M431 669 Q343 705 386 752 Q450 778 491 724')+floorKid('米苔坐',530,662,1.16,'hold')+shoe(265,731,.66,-9)+shoe(317,747,.66,9)+creamBag(809,719,.73);
 return [
 ()=>inn()+carpet(609,678,.95)+kid('米苔',310,741,1.13,'wave'),
 ()=>inn()+carpet(613,673,.98)+floorKid('米苔坐',325,701,1.07,'think')+shoe(292,725,.52)+shoe(355,725,.52)+creamBag(243,729,.64),
 ()=>inn()+carpet(582,694,1.07)+kid('米苔鞋',543,677,1.12,'wide')+P('M496 711 l-13 14 M585 707 l13 15','none','#BFC5A8',4)+creamBag(824,744,.69),
 ()=>inn()+carpet(596,697,1.02)+floorKid('米苔坐',375,664,1.11,'back')+P('M327 554 Q361 610 457 651 M423 554 Q466 606 505 647','none','#BAA084',20)+shoe(337,688,.54)+shoe(406,688,.54)+creamBag(832,745,.69),
 ()=>inn()+carpet(598,687,1.03,1)+carpetTail('M397 656 Q335 699 391 744 Q433 761 442 724')+floorKid('米苔坐',380,675,1.11,'low')+shoe(440,702,.55)+shoe(252,741,.65,-9)+creamBag(838,743,.69),
 ()=>inn()+carpet(601,687,1.02,1)+floorKid('米苔坐',381,682,1.11,'think')+shoe(253,740,.64,-9)+shoe(309,752,.64,8)+creamBag(837,742,.69)+R(488,53,440,371,'#E8E1C9',72,'stroke="#CBCDB2" stroke-width="3"')+E(470,437,15,12,'#E8E1C9')+E(445,457,9,8,'#E8E1C9')+carpet(725,343,.73,6)+floorKid('奶奶坐',610,311,.54,'hold')+kid('幼米苔',809,321,.50,'up')+P('M625 318 Q661 361 700 346','none','#B4B9AE',5),
 ()=>inn()+carpet(594,690,1.04,8)+carpetTail('M413 666 Q342 703 392 749 Q464 783 508 717')+floorKid('米苔坐',510,663,1.16,'wide')+shoe(265,730,.65,-9)+shoe(318,745,.65,9)+creamBag(843,740,.69),
 ()=>inn()+carpet(588,691,1.04,8)+carpetTail('M514 699 Q450 747 462 763 Q484 777 514 748')+floorKid('米苔坐',543,669,1.16,'hold')+shoe(266,731,.66,-9)+shoe(319,746,.66,9)+creamBag(840,741,.69)+clothBloom(622,724,.60,'#98B6C7')
 ][i]();
}
function vineRail(){return P('M829 424 Q816 588 856 775 M859 427 Q840 587 883 775','none','#849F75',17)+[447,500,553,606,659,712].map(y=>P(`M803 ${y} Q897 ${y+43} 826 ${y+88} M875 ${y} Q791 ${y+43} 864 ${y+88}`,'none','#9AB38A',12)).join('')+leaf(843,425,.70,'#A3BA8F',-18)+leaf(883,722,.68,'#A3BA8F',52);}
function vineBridge(awake=true){return outdoor()+P('M0 733 Q512 663 1000 721 L1000 800 L0 800Z','#A7C9C3')+P('M109 766 L178 471 L827 471 L890 766Z','#C9B38A')+R(106,760,788,31,'#A78F69',6)+[493,527,563,603,646,695,748].map(y=>line(140,y,865,y,'#AE956F',3)).join('')+[174,280,387,494,601,708,817].map(x=>line(x,380,x,483,'#8DA67E',13)).join('')+P('M175 384 Q479 433 818 384 M177 447 Q477 483 826 447','none','#8DA67E',18)+vineRail()+R(146,385,47,220,'#9AAE84',20)+leaf(138,392,.72,'#A8BD91',awake?-49:-91)+leaf(206,390,.72,'#A8BD91',awake?48:90)+(awake?E(160,434,4,5,ink)+E(179,434,4,5,ink):P('M155 434 q6 6 11 0 M173 434 q6 6 11 0','none',ink,2))+P('M162 455 q8 8 14 0','none','#6C8769',2);}
function dryPod(x,y,s=1,r=0){return G(x,y,s,P('M-49 21 Q-25 -21 6 -23 Q41 -21 49 -59 Q60 -9 22 17 Q-9 38 -49 21Z','#A98D62')+P('M-38 18 Q14 16 46 -45','none','#D0B485',3),r);}
function curledLeaf(x=833,y=555,s=1,open=false){return G(x,y,s,open?leaf(0,0,1.0,'#B2C394',-34):P('M-49 38 Q-82 -49 1 -75 Q74 -37 16 31 Q-18 65 -49 38Z','#A9BD8E')+P('M-48 32 Q-12 -15 27 -31 Q45 0 12 18','none','#7F9F72',5));}
function grassWhisk(x,y,s=1,r=0){return G(x,y,s,line(0,38,0,-46,'#B9AF79',5)+[-28,-15,-2,11].map(yy=>P(`M0 ${yy} l-14 -15 M0 ${yy} l14 -15`,'none','#D7CCA0',5)).join(''),r);}
function bridgeScene(i,cover){
 if(cover)return vineBridge(false)+kid('荞团包',490,739,1.16,'wave')+curledLeaf(835,553,.87,true)+dryPod(520,616,.74,-24);
 return [
 ()=>vineBridge(false)+curledLeaf()+kid('荞团',403,741,1.13,'wave')+creamBag(352,741,.67),
 ()=>vineBridge()+curledLeaf()+kid('荞团',631,744,1.08,'back')+P('M585 578 Q608 620 625 642 M677 578 Q746 549 804 551','none','#A8A294',20)+cloth(799,545,.57)+creamBag(532,741,.67),
 ()=>vineBridge()+curledLeaf()+kid('荞团',619,741,1.09,'back')+P('M572 573 Q607 613 637 622 M666 573 Q710 580 756 577','none','#A8A294',20)+grassWhisk(771,560,.85,37)+creamBag(520,741,.67,true),
 ()=>vineBridge()+curledLeaf(832,553,.91)+floorKid('荞团坐',544,704,1.12,'hold')+creamBag(402,741,.67)+P('M675 504 Q720 478 759 503 M688 526 Q732 508 773 525','none','#D6DEC4',4),
 ()=>vineBridge()+dryPod(825,564,.98,-20)+curledLeaf(879,506,.82,true)+kid('荞团',650,744,1.10,'back')+P('M603 574 Q619 628 643 640 M697 574 Q766 539 831 502','none','#A8A294',20)+creamBag(529,742,.67),
 ()=>vineBridge()+curledLeaf(836,543,.91,true)+kid('荞团',645,744,1.10,'back')+P('M598 574 Q636 612 675 620 M692 574 Q741 588 782 584','none','#A8A294',20)+dryPod(782,582,.91,-48)+creamBag(529,742,.67),
 ()=>vineBridge(false)+curledLeaf(835,553,.87,true)+kid('荞团',607,742,1.10,'hold')+creamBag(609,626,.75,true)+dryPod(614,582,.69,-22)+P('M683 518 Q725 494 766 515','none','#DAE1C8',4),
 ()=>vineBridge(false)+curledLeaf(835,553,.87,true)+kid('荞团包',635,612,.81,'wave')+P('M698 520 Q740 494 778 516','none','#D9E1C8',4)
 ][i]();
}
function pear(x,y,s=1){return G(x,y,s,P('M-14 -36 Q-20 -53 -3 -56 Q14 -59 18 -35 Q48 -4 32 22 Q1 49 -31 22 Q-48 -5 -14 -36Z','#D3C688')+line(1,-57,6,-72,'#9C8864',5)+leaf(10,-59,.29,'#AAC08D',55));}
function cherry(x,y,s=1){return G(x,y,s,P('M-14 0 Q-6 -40 5 -48 Q11 -16 23 -5','none','#8EAA7E',4)+E(-15,6,17,17,'#C58A78')+E(23,10,17,17,'#BB7D72')+E(-20,0,4,4,'#E4B29A'));}
function strawberry(x,y,s=1){return G(x,y,s,P('M-30 -14 Q-41 -49 0 -43 Q41 -49 30 -14 L0 30Z','#BE8178')+P('M-26 -40 L-11 -51 L0 -39 L13 -50 L28 -40 L11 -30 L-11 -31Z','#92AD7D')+[[-16,-23],[9,-22],[-2,-7],[12,1],[-6,10]].map(([xx,yy])=>E(xx,yy,2,3,'#E9D0A0')).join(''));}
function peach(x,y,s=1){return G(x,y,s,P('M-34 5 Q-42 -27 -14 -36 Q5 -39 33 -15 Q11 -17 1 6 Q-7 26 -34 5Z','#E2BD8E')+P('M-28 0 Q-26 -18 -13 -22 Q5 -24 22 -14','none','#C89277',6));}
function woodPig(x,y,s=1,pose='stand',flip=false){let a=E(0,-45,68,44,'#C6A479')+P('M-49 -63 L-59 -94 L-30 -77Z','#B68E62')+R(-45,-25,17,32,'#B48F64',5)+(pose==='hold'?'':R(22,-25,17,32,'#B48F64',5))+R(-19,-18,17,30,'#CAA87C',5)+(pose==='hold'?P('M43 -25 Q62 -47 86 -35 M71 -26 Q91 -34 90 -46','none','#CAA87C',10):R(48,-18,17,30,'#CAA87C',5))+E(62,-54,39,35,'#CBA97E')+P('M47 -77 L40 -108 L64 -87Z','#B68E62')+E(92,-49,20,16,'#B58C61')+E(99,-53,3,3,'#886C4E')+E(99,-44,3,3,'#886C4E')+(pose==='sleep'?P('M61 -63 q8 7 15 0','none',ink,3):E(69,-64,4,5,ink))+P('M68 -35 q9 6 16 -1','none','#886C4E',3)+[-43,-11,21].map((xx,j)=>E(xx,-62-j%2*5,10,10,'#83A9BC')).join('')+P('M37 -31 L58 -28 L47 -10 L36 -20Z','#96AF84')+P('M-64 -47 Q-92 -67 -83 -42 Q-76 -31 -66 -44','none','#AC875E',5)+P('M-43 -37 l13 4 M-7 -31 l14 -4 M19 -84 l11 3','none','#AE885E',2);return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);}
function islandMarket(){return R(0,0,1000,800,'#D6E2D5',0)+cloud(246,128,.8,'#EEECD8')+P('M0 412 Q492 384 1000 418 L1000 800 L0 800Z','#B2CFC6')+E(491,648,475,145,'#B4C39D')+P('M12 548 L988 548 M23 500 L23 624 M172 500 L172 624 M828 500 L828 624 M978 500 L978 624','none','#9AAE8A',13)+stall(254,488,.80,'#ACBC97',basket(0,-55,.83,false)+pear(-13,-102,.52)+cherry(36,-83,.48))+P('M19 701 q86 -12 145 0 M843 733 q77 -17 124 -4','none','#E2E8D4',4);}
function fruitTable(){return desk(647,668,1.31);}
function paperOrchard(x,y,s=1,stage=0,food=true){let a=P('M-157 -166 L-130 -174 L-130 7 L-157 -1Z','#D4C9AB')+R(-130,-174,260,181,'#EEE3C8',4)+P('M130 -174 L158 -158 L158 20 L130 7Z','#DCD0B2')+R(-11,-103,22,103,'#BA9E70',4)+P('M-115 -100 Q-134 -150 -81 -151 Q-63 -189 -21 -158 Q17 -187 51 -155 Q104 -169 116 -121 L108 -41 L-111 -41Z','#A9C08B')+[[-95,-116],[-51,-143],[2,-129],[67,-141],[101,-103]].map(([xx,yy])=>E(xx,yy,7,7,'#C88E7B')).join('');for(let j=0;j<3;j++){const xx=-87+j*87,opened=stage===3||(stage===2&&j===0);if(stage>0)a+=opened?R(xx-31,-90,62,79,'#B4B99A',4)+(food?plate(xx,-17,.34)+(j===0?strawberry(xx,-26,.35):j===1?cherry(xx,-29,.38):peach(xx,-28,.50)):plate(xx,-17,.34))+P(`M${xx-31} -90 L${xx+31} -90 L${xx+27} -123 L${xx-31} -113Z`,'#B9CB98')+line(xx-31,-90,xx+31,-90,'#8EAC7B',2):R(xx-31,-90,62,79,'#AAC18D',3,'stroke="#86A276" stroke-width="2"')+E(xx,-48,7,7,'#C88E7B');}return G(x,y,s,a);}
function twigTrees(x,y,s=1){return G(x,y,s,R(-135,8,270,37,'#C2A77D',9)+[-77,0,77].map((xx,j)=>E(xx,7,31,17,'#B19D76')+G(xx,0,1,P('M0 0 L0 -116 M0 -70 L-22 -96 M0 -93 L24 -112','none','#A48A61',7)+(j===1?cherry(12,-116,.62):''),j===1?57:0)).join(''));}
function orchardScene(i,cover){
 if(cover)return islandMarket()+kid('萄萄',344,738,1.12,'point')+fruitTable()+paperOrchard(674,620,1.10,2,false)+woodPig(591,665,.78,'hold')+strawberry(654,636,.40);
 return [
 ()=>islandMarket()+kid('萄萄',363,737,1.14,'low')+fruitTable()+basket(709,611,1.12,false)+pear(696,544,.70)+woodPig(595,635,.81)+pear(492,617,.82),
 ()=>islandMarket()+kid('萄萄',358,738,1.13,'point')+fruitTable()+twigTrees(668,623,.95)+woodPig(605,680,.77),
 ()=>islandMarket()+kid('萄萄',360,738,1.12,'hold')+fruitTable()+paperOrchard(705,615,.97,0)+woodPig(569,649,.78)+P('M402 599 l50 10','none','#B88E75',9),
 ()=>islandMarket()+kid('萄萄',360,739,1.12,'think')+fruitTable()+plate(787,617,.53)+cherry(784,603,.57)+paperOrchard(657,616,.94,0)+P('M747 542 L782 526 L782 601 L747 611Z','#D5C9AA')+G(780,597,.63,E(0,-31,32,25,'#CBA97E')+E(25,-26,17,13,'#B58C61')+E(31,-29,3,3,'#886C4E')+E(31,-22,3,3,'#886C4E')+E(4,-39,3,4,ink)),
 ()=>islandMarket()+kid('萄萄',389,739,1.10,'back')+fruitTable()+paperOrchard(702,620,1.06,1)+P('M342 570 Q368 612 423 621 M436 570 Q510 546 568 541','none','#DFC7A7',20)+woodPig(578,691,.75),
 ()=>islandMarket()+kid('萄萄',379,738,1.10,'hold')+fruitTable()+paperOrchard(715,615,1.00,3,true)+woodPig(511,661,.77,'sleep',true),
 ()=>islandMarket()+kid('萄萄',354,737,1.12,'hold')+fruitTable()+paperOrchard(724,617,1.02,2,false)+woodPig(566,663,.78,'hold')+strawberry(633,631,.44),
 ()=>islandMarket()+stool(355,653,1.00)+sitKid('萄萄坐',355,645,1.10,'hold')+fruitTable()+paperOrchard(712,617,1.03,3,false)+woodPig(573,666,.80,'sleep')
 ][i]();
}
function greenhouse(){return R(0,0,1000,800,'#D9E0CE',0)+P('M31 620 L31 205 L500 30 L969 205 L969 620 M31 205 L969 205 M500 31 L500 621 M265 117 L265 621 M735 117 L735 621','none','#A5B8A0',13)+R(0,623,1000,177,'#C3B18D',0)+[675,730,785].map(y=>line(0,y,1000,y,'#B09E7B',3)).join('')+P('M771 642 Q776 413 667 367 M774 496 Q892 432 925 352','none','#A08F6D',22)+E(697,330,143,80,'#A7BE94')+E(889,326,110,78,'#B4C69C')+[[642,350],[721,365],[809,346],[897,363]].map(([x,y])=>E(x,y,23,23,'#D7AC73')+leaf(x+6,y-21,.25,'#97B284',53)).join('');}
function blockBox(x,y,s=1,roof=false){return G(x,y,s,P('M-99 -51 L75 -51 L108 -22 L-65 -22Z','#9D8663')+R(-65,-22,174,57,'#C3A77E',6)+P('M-99 -51 L-65 -22 L-65 35 L-99 9Z','#AD9068')+(roof?P('M-47 -23 L-8 -76 L28 -23Z','#BF8278'):'')+R(-49,-11,39,33,'#A2B8AA',5)+R(41,-30,36,51,'#C2AE87',5));}
function blockCastle(x,y,s=1,roof=true,short=false){return G(x,y,s,R(-105,-83,210,83,'#AEC0AB',5)+R(-101,-157,94,74,'#D8C08D',5)+R(8,-157,93,74,'#B39FB9',5)+(short?'':R(-72,-229,144,72,'#92B0BD',5))+(roof?P(short?'M-116 -157 L0 -245 L116 -157Z':'M-92 -229 L0 -305 L92 -229Z','#BF8278'):'')+R(-28,-62,56,62,'#8EA394',28));}
function blockBeast(x,y,s=1,alive=true,step=false){return G(x,y,s,[-106,-20,66].map((xx,j)=>R(xx,-29,28,64+(step&&j===1?-8:0),['#9FAD93','#BA9E7C','#93AAB7'][j],5)).join('')+R(-136,-84,260,66,'#D6BB82',7)+R(-139,-82,65,64,'#AABAA4',5)+R(-16,-132,61,49,'#CF9E70',5)+[-79,7,93].map((xx,j)=>R(xx,-22,28,68+(step&&j!==1?-7:0),['#BBA5C3','#9BB6C0','#ADC498'][j],5)).join('')+R(112,-116,75,83,'#A2BDBB',7)+(alive?E(133,-89,5,6,ink)+E(164,-89,5,6,ink)+P('M135 -64 q14 12 29 -1','none',ink,3):'')+P('M-136 -48 Q-179 -56 -167 -87','none','#BD9B77',13));}
function ladybug(x,y,s=1,r=0){return G(x,y,s,E(-14,-4,15,28,'#D4E0CA','opacity=".7" transform="rotate(-35 -14 -4)"')+E(14,-4,15,28,'#D4E0CA','opacity=".7" transform="rotate(35 14 -4)"')+E(0,0,22,26,'#C07C71')+line(0,-24,0,22,'#725D50',3)+[[-10,-9],[11,-4],[-8,12],[10,13]].map(([xx,yy])=>E(xx,yy,4,4,'#5B5850')).join('')+E(0,-29,13,12,'#675F50')+E(-5,-32,2,2,'#E8E6D1')+E(5,-32,2,2,'#E8E6D1')+P('M-17 -35 Q-14 -55 2 -51 Q17 -53 18 -35Z','#EEECDC')+R(-20,-37,40,7,'#D9DECC',3),r);}
function blocksScene(i,cover){
 if(cover)return greenhouse()+kid('柚芽',353,739,1.14,'wave')+blockBeast(666,696,.93,true,true)+ladybug(676,548,.80)+blockBox(210,734,.71,true);
 return [
 ()=>greenhouse()+floorKid('柚芽坐',366,704,1.17,'hold')+blockBox(634,705,1.11)+R(681,736,79,26,'#D6BB82',4)+R(795,704,41,46,'#93B0BB',4),
 ()=>greenhouse()+kid('柚芽',382,739,1.13,'hold')+blockBox(792,724,.70)+blockCastle(633,706,.86,false,true)+ladybug(572,365,.90,-17)+P('M398 620 L440 558 L482 620Z','#BF8278'),
 ()=>greenhouse()+kid('柚芽',414,741,1.12,'think')+blockCastle(609,716,1.24,true,false)+blockBox(827,736,.68)+ladybug(811,410,.91,20),
 ()=>greenhouse()+kid('柚芽',366,741,1.11,'low')+blockCastle(665,707,1.05,true,false)+R(360,711,160,31,'#D6BB82',5)+R(424,683,97,27,'#AABAA4',5)+blockBox(853,739,.60)+ladybug(773,347,.76),
 ()=>greenhouse()+kid('柚芽',368,740,1.10,'point')+blockCastle(665,704,.98,false,true)+blockBox(513,726,.76,true)+R(651,749,168,28,'#D6BB82',5)+ladybug(817,455,.88,-12),
 ()=>greenhouse()+kid('柚芽',480,739,1.11,'back')+blockBeast(688,701,.83,true,false)+P('M432 568 Q449 621 482 634 M528 568 Q590 567 674 585','none','#E1C7AB',20)+blockBox(226,739,.65,true)+ladybug(252,689,.66),
 ()=>greenhouse()+G(450,726,1.03,kid('柚芽',0,0,1,'low'),17)+blockBeast(723,703,.79,true,true)+P('M560 464 Q692 421 892 474','none','#A08F6D',17)+leaf(627,458,.77,'#ADC297',57)+leaf(832,465,.72,'#ADC297',-51),
 ()=>greenhouse()+kid('柚芽',361,740,1.12,'back')+P('M313 567 Q309 486 342 408 M409 567 Q425 616 444 633','none','#E1C7AB',20)+leaf(341,408,.44,'#C2B487',-24)+blockBeast(702,698,.85,true,false)+ladybug(714,567,.73)
 ][i]();
}
function harbourRoom(){return R(0,0,1000,800,'#DED8C3',0)+R(0,629,1000,171,'#C1B394',0)+R(583,94,367,464,'#B1BAA7',18)+R(599,111,335,429,'#C5D9D4',8)+R(600,293,333,246,'#ABCAC6',0)+P('M602 396 Q766 371 933 402','none','#DCE5D7',4)+P('M761 322 L855 322 L839 348 L784 348Z','#B7A986')+line(806,320,806,234,'#A2997C',4)+P('M800 238 L752 312 L800 312Z','#EEEAD6')+P('M813 252 L850 312 L813 312Z','#E4E6D3')+line(600,374,934,374,'#D5CCAF',9)+line(769,113,769,539,'#D5CCAF',9)+P('M580 112 L621 112 Q615 226 587 343 L557 342Z','#A6BFC2')+R(82,412,230,221,'#B7A17D',14)+R(96,426,202,94,'#D0B88C',8)+E(197,469,10,6,'#A28B67')+R(94,535,206,83,'#C8B087',7);}
function rayKite(x,y,s=1){return G(x,y,s,P('M0 -93 Q-18 -70 -42 -38 Q-92 -31 -123 28 Q-48 47 0 81 Q47 47 123 28 Q91 -31 41 -38 Q18 -69 0 -93Z','#92B7CA')+P('M0 -46 Q-35 4 -69 30 Q-22 43 0 67 Q23 43 69 30 Q35 4 0 -46Z','#E9E9D8')+E(-28,-4,6,8,ink)+E(28,-4,6,8,ink)+P('M-13 23 Q0 35 13 23','none','#547C8E',3)+P('M0 -88 L0 62 M-114 27 L112 27','none','#B8D0D2',3,'opacity=".55"'));}
function knot(x,y,s=1,loose=0){return G(x,y,s,loose===0?P('M-82 18 Q-33 -2 -12 -24 Q29 -59 48 -19 Q65 16 8 23 Q-38 30 -26 -9 Q-8 -37 16 2 Q25 37 77 9','none','#80A8BE',17)+P('M-16 -20 Q27 -3 9 22','none','#A4C1D0',4):loose===1?P('M-91 17 Q-23 12 -44 -28 Q-54 -64 -2 -63 Q57 -61 41 -11 Q17 36 -21 7 Q-43 -13 -5 -34 Q31 -51 62 -9 L99 22','none','#80A8BE',14)+P('M-30 -49 Q2 -67 25 -46','none','#ABC5D0',3):P('M-95 22 Q-63 -45 -14 -32 Q19 -14 -9 12 Q-35 34 -44 0 Q-43 -32 3 -18 Q43 -3 93 14','none','#80A8BE',13));}
function girlAt(x,y,s=1,pose='hold',mood='calm',seated=true){const extra=mood==='sad'?E(-39,-206,12,8,'#D6A393','opacity=".7"')+E(39,-206,12,8,'#D6A393','opacity=".7"')+E(0,-187,16,10,'#E1C7AB')+P('M-10 -181 Q0 -191 11 -181','none','#8B7661',2)+E(-35,-212,4,8,'#A8CBCD')+E(35,-212,4,8,'#A8CBCD'):'';return seated?sitKid('苔桃坐',x,y,s,pose,extra):kid('苔桃',x,y,s,pose,false,extra);}
function knotTable(stage=0){const end=[[645.6,660.2],[663.2,670.6],[658.4,664.2]][stage];return desk(640,695,1.40)+G(770,666,.76,'<g transform="scale(1 .48)">'+rayKite(0,0,1)+'</g>')+P(`M770 695 Q724 689 ${end[0]} ${end[1]}`,'none','#80A8BE',15)+knot(584,653,.80,stage);}
function kiteScene(i,cover){
 if(cover)return harbourRoom()+P('M752 318 Q751 292 769 292 Q785 294 775 312','none','#A19173',6)+line(769,313,768,331,'#A19173',3)+rayKite(768,416,.93)+P('M768 491 Q804 604 706 635 Q642 657 620 720','none','#80A8BE',15)+girlAt(420,728,1.17,'wave','calm',false);
 return [
 ()=>harbourRoom()+girlAt(419,739,1.13,'hold','calm',false)+rayKite(505,592,.70)+P('M505 649 Q661 662 623.29 718.93','none','#80A8BE',15)+knot(564,712,.77),
 ()=>harbourRoom()+stool(424,681,1.10)+girlAt(424,673,1.11,'back')+knotTable()+P('M376 591 Q417 634 514 666 M472 591 Q551 602 651 662','none','#E1C7AB',21),
 ()=>harbourRoom()+stool(424,681,1.10)+girlAt(424,673,1.11,'back','sad')+knotTable()+P('M376 591 Q414 636 546 650 M472 591 Q532 614 587 645','none','#E1C7AB',21),
 ()=>harbourRoom()+stool(424,681,1.10)+girlAt(424,673,1.11,'hold')+knotTable()+P('M487 627 L572 627 L611 675 L498 675Z','#EADBB1','',0,'opacity=".46"'),
 ()=>harbourRoom()+stool(424,681,1.10)+girlAt(424,673,1.11,'think')+knotTable(1)+cloth(382,573,.53)+P('M560 646 l34 0 M564 656 l22 0','none','#B19C74',2),
 ()=>harbourRoom()+stool(424,681,1.10)+girlAt(424,673,1.11,'back')+knotTable(2)+P('M376 591 Q419 634 545 639 M472 591 Q528 605 610 655','none','#E1C7AB',21),
 ()=>harbourRoom()+girlAt(526,741,1.12,'back','calm',false)+P('M752 318 Q751 292 769 292 Q785 294 775 312','none','#A19173',6)+line(769,313,768,331,'#A19173',3)+rayKite(768,416,.93)+P('M768 491 Q820 603 731 648 Q659 682 688 735','none','#80A8BE',15)+P('M478 569 Q495 615 514 637 M574 569 Q640 500 689 460','none','#E1C7AB',20),
 ()=>harbourRoom()+stool(434,677,1.10)+girlAt(434,668,1.12,'point')+P('M752 318 Q751 292 769 292 Q785 294 775 312','none','#A19173',6)+line(769,313,768,331,'#A19173',3)+rayKite(768,416,.93)+P('M768 491 Q772 620 683 625 Q624 630 579 567','none','#80A8BE',15)+P('M713 608 l-8 10 M684 619 l-7 12 M655 619 l-5 12','none','#A7C4D1',3)
 ][i]();
}
function meadow(){return outdoor()+P('M0 696 Q491 599 1000 677 L1000 800 L0 800Z','#B6CAA6')+P('M88 484 L915 484 M88 545 L915 545','none','#A5AC8D',12)+[96,217,338,459,580,701,822,907].map(x=>R(x,457,15,118,'#B6B99B',5)).join('')+[[87,690],[203,756],[865,712],[935,766],[731,624]].map(([x,y])=>flower(x,y,.25,'#EBECD9')).join('');}
function cloudBall(x,y,s=1,state=0){let a=state===1?E(0,0,109,31,'#F0EFE1'):state===2?P('M-83 35 Q-111 10 -77 -13 Q-87 -49 -45 -38 Q-25 -67 1 -43 Q35 -67 55 -38 Q100 -42 83 -5 Q111 24 78 40 Q54 66 24 45 Q-12 66 -39 44 Q-65 59 -83 35Z','#F0EFE1'):state===3?P('M-75 24 Q-93 -29 -54 -49 Q-27 -72 0 -59 Q32 -74 61 -46 Q92 -16 75 29 Q64 63 0 64 Q-63 62 -75 24Z','#F0EFE1'):E(0,0,77,77,'#F0EFE1');if(state===2)a+=P('M-61 1 q18 16 34 0 M12 -23 q16 14 31 -1 M26 31 q16 13 31 -3','none','#D1DBC8',5);if(state===3)a+=P('M-34 -2 q13 8 24 0','none','#DCE3D1',4);if(state===0)a+=E(-24,-25,25,28,'#F7F5E8','opacity=".58"');return G(x,y,s,a);}
function snackBox(x,y,s=1,open=false){return G(x,y,s,R(-43,-24,86,44,'#C9B896',9)+(open?R(-43,-69,86,46,'#DED1B1',9)+pear(-2,-15,.36):R(-46,-30,92,15,'#E2D3AF',6)) );}
function pearPiece(x,y,s=1){return G(x,y,s,P('M-21 -23 Q12 -35 31 -8 Q8 25 -21 23Z','#E5DBAC')+P('M-20 -21 Q-31 1 -20 22','none','#C4BB83',5));}
function cloudBallScene(i,cover){
 if(cover)return meadow()+floorKid('芋圆坐',358,688,1.16,'wide')+floorKid('星绵坐',751,686,1.10,'hold')+cloudBall(568,710,.78)+snackBox(230,751,.60);
 return [
 ()=>meadow()+kid('芋圆',377,742,1.14,'back')+kid('星绵',733,740,1.12,'back')+P('M328 566 Q365 614 445 614 M426 566 Q482 588 512 595','none','#D9B7AC',22)+P('M685 568 Q631 606 584 596 M781 568 Q752 617 649 617','none','#E8E5D3',22)+cloudBall(553,596,.78),
 ()=>meadow()+cloudBall(485,693,.93,1)+sitKid('芋圆坐',485,640,1.19,'hold')+pearPiece(491,539,.72)+snackBox(720,723,.72,true),
 ()=>meadow()+kid('芋圆',475,742,1.14,'back')+cloudBall(631,678,1.0,2)+P('M426 566 Q458 635 553 678 M524 566 Q592 594 704 673','none','#D9B7AC',22)+snackBox(807,733,.66),
 ()=>meadow()+floorKid('芋圆坐',397,687,1.15,'hold')+cloudBall(662,688,.99,2)+snackBox(812,734,.66)+P('M622 676 q15 8 29 0','none','#E7EBDD',4),
 ()=>meadow()+kid('芋圆',355,743,1.13,'back')+P('M307 569 Q278 626 322 660 M404 569 Q431 626 390 660','none','#D9B7AC',22)+kid('星绵',799,742,1.12,'hold')+cloudBall(592,698,.95,3)+snackBox(237,744,.62),
 ()=>meadow()+floorKid('芋圆坐',369,685,1.15,'back')+floorKid('星绵坐',772,686,1.09,'hold')+P('M320 571 Q306 618 337 624 M418 571 Q436 613 404 624','none','#D9B7AC',22)+cloudBall(588,710,.88,3)+snackBox(230,744,.62)+grass(448,747,.51,'#92AC83'),
 ()=>meadow()+floorKid('芋圆坐',459,686,1.15,'back')+floorKid('星绵坐',772,686,1.09,'wide')+P('M410 572 Q422 620 460 630 M508 572 Q552 615 606 680','none','#D9B7AC',22)+cloudBall(654,711,.78)+P('M535 733 q30 8 51 -1','none','#D2DEC1',4)+snackBox(230,744,.62),
 ()=>meadow()+floorKid('芋圆坐',361,687,1.16,'back')+floorKid('星绵坐',756,685,1.10,'hold')+cloudBall(548,713,.78)+P('M311 572 Q291 645 300 726 M411 572 Q451 636 490 700','none','#D9B7AC',22)+snackBox(230,744,.62)+P('M628 739 q-30 7 -48 0','none','#D6E1C7',4)
 ][i]();
}
function roofGarden(){return R(0,0,1000,800,'#D6E2D7',0)+cloud(279,108,.82,'#EDECD9')+R(0,445,1000,355,'#C6C2A4',0)+[514,590,672,760].map(y=>line(0,y,1000,y,'#B7B49A',3)).join('')+[74,237,400,563,726,889].map(x=>line(x,445,x,800,'#B7B49A',3)).join('')+P('M11 309 L989 309 M11 407 L989 407','none','#9EB292',16)+[21,115,209,303,397,491,585,679,773,867,979].map(x=>R(x,288,18,169,'#B2C1A1',5)).join('')+P('M135 611 L135 164 M880 611 L880 164 M111 165 L903 165 M144 194 L873 194','none','#A69877',17)+[178,296,414,532,650,768,862].map(x=>line(x,147,x+11,216,'#B5A584',10)).join('')+[174,249,336,424,512,611,711,813].map((x,j)=>leaf(x,191,.73,'#A7BC91',j%2?66:-52)).join('')+mintPot(225,673,1.1)+mintPot(891,612,.84);}
function mintPot(x,y,s=1){return G(x,y,s,P('M-63 -12 L63 -12 L49 75 L-49 75Z','#B69E80')+E(0,-12,65,18,'#D4B995')+[-39,-14,14,39].map((xx,j)=>line(xx,0,xx+(j-1)*5,-82-j%2*14,'#8CA67C',4)+leaf(xx,-37,.54,'#A4BE8C',j%2?51:-51)+leaf(xx,-68,.47,'#95B180',j%2?-40:45)).join(''));}
function cabinet(x=683,y=650,s=1,open=false,mat=true){let a=R(-143,-256,286,259,'#8FAFA3',13)+R(-131,-246,262,230,'#6F9689',9)+R(-135,-18,17,55,'#7A9E8C',5)+R(119,-18,17,55,'#7A9E8C',5);if(open)a+=R(-127,-160,254,12,'#A9BFA5',4)+R(-127,-81,254,12,'#A9BFA5',4)+cloth(-55,-192,.70)+R(16,-212,86,41,'#DCD4B8',5)+plate(39,-105,.61)+(mat?R(-84,-60,168,43,'#ABC095',8)+line(-74,-39,74,-39,'#D4DEBE',3):'')+P('M-132 -246 L-205 -213 L-205 14 L-132 -17Z','#A3BDB0')+P('M132 -246 L205 -213 L205 14 L132 -17Z','#A3BDB0')+P('M-190 -168 q20 -21 39 -4 M153 -173 q21 -19 36 4','none','#C8B17D',8)+E(-175,-104,14,19,'#597F74');else a+=R(-128,-243,127,229,'#A3BDB0',8)+R(2,-243,126,229,'#9BB8AA',8)+P('M-78 -167 Q-55 -190 -27 -166 M27 -166 Q55 -190 78 -167','none','#CEB580',9)+E(0,-106,24,27,'#678E80')+E(0,-104,14,18,'#E3D5AD');return G(x,y,s,a);}
function foldedMat(x,y,s=1){return G(x,y,s,R(-88,-38,176,76,'#ABC095',12)+line(-78,-7,78,-7,'#D8E0BF',4)+line(-78,14,78,14,'#8FAF87',3));}
function dateCake(x,y,s=1,bitten=false){return G(x,y,s,P(bitten?'M-45 0 Q-19 -30 16 -21 Q11 -11 24 -7 Q12 2 24 9 Q9 12 16 21 Q-18 30 -45 0Z':'M-45 0 Q0 -49 45 0 Q0 49 -45 0Z','#CBAD7A')+P(bitten?'M-33 0 Q-8 -16 12 -7 M-33 0 Q-7 16 11 7':'M-33 0 Q0 -23 33 0 Q0 23 -33 0Z',bitten?'none':'#9C7656','#9C7656',3));}
function riddleScene(i,cover){
 if(cover)return roofGarden()+cabinet(704,644,.90,true,false)+R(296,676,338,106,'#B1C49B',31)+floorKid('蓬蓬坐',451,693,1.10,'hold')+dateCake(452,594,.67,true)+plate(576,737,.55)+dateCake(576,724,.57)+creamBag(306,742,.59);
 return [
 ()=>roofGarden()+cabinet()+kid('蓬蓬',398,744,1.13,'point')+stool(460,731,.61),
 ()=>roofGarden()+cabinet()+kid('蓬蓬',387,742,1.14,'think')+stool(465,731,.61),
 ()=>roofGarden()+cabinet()+kid('蓬蓬',394,742,1.13,'point')+cup(400,600,.71)+stool(467,731,.61),
 ()=>roofGarden()+cabinet()+stool(411,666,1.03)+sitKid('蓬蓬坐',411,660,1.10,'hold')+creamBag(416,615,.78),
 ()=>roofGarden()+cabinet()+stool(411,666,1.03)+sitKid('蓬蓬坐',411,660,1.10,'wide')+creamBag(341,729,.68)+P('M373 530 L373 503 L426 503 L426 530','none','#DDE2C6',3),
 ()=>roofGarden()+cabinet()+kid('蓬蓬无包',421,740,1.13,'up')+stool(324,731,.64)+creamBag(340,735,.69)+R(220,85,296,227,'#E8E5CF',55)+E(329,331,13,10,'#E8E5CF')+cloth(366,194,1.46)+[290,321,356].map((x,j)=>E(x,246-j*14,5,8,'#A9CBCB')).join(''),
 ()=>roofGarden()+cabinet(704,650,.95,true,false)+kid('蓬蓬无包',415,740,1.12,'hold')+foldedMat(424,610,.88)+creamBag(336,738,.66)+stool(309,730,.61),
 ()=>roofGarden()+cabinet(735,639,.89,true,false)+R(297,679,347,105,'#B1C49B',31)+floorKid('蓬蓬坐',450,695,1.09,'hold')+dateCake(452,595,.66,true)+plate(582,741,.56)+dateCake(582,726,.57)+creamBag(308,744,.60)
 ][i]();
}
const scenes={'expansion-0209':breadScene,'expansion-0210':carpetScene,'expansion-0211':bridgeScene,'expansion-0212':orchardScene,'expansion-0213':blocksScene,'expansion-0214':kiteScene,'expansion-0215':cloudBallScene,'expansion-0216':riddleScene};
export function sixthYoungLastArtwork(story,index,cover=false){
 const scene=scenes[story?.id];if(!scene)throw Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw Error('Expected eight pages');
 if(!Number.isInteger(index)||index<0||index>=8)throw Error('Page index must be an integer from 0 to 7');
 return svg(scene(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

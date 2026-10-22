// Eight explicit, independent eight-page storyboards for expansion-0201 through 0208.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,rock,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
小耳:['fennec','#CBB086','#7FAAB5','vest',null,'creamBag'],小耳坐:['fennec','#CBB086','#7FAAB5','vest',null,'creamBag'],
穗穗:['hedgehog','#B7A080','#85A8B9','vest'],穗穗帽:['hedgehog','#B7A080','#85A8B9','vest',null,'strawhat'],
米栗:['mouse','#B99F81','#B4C6A2','dress',null,'whiteclip'],米栗坐:['mouse','#B99F81','#B4C6A2','dress',null,'whiteclip'],
米芙:['mouse','#B0B4AE','#C4B5CE','shirt',null,'sleepcap'],米芙坐:['mouse','#B0B4AE','#C4B5CE','shirt',null,'sleepcap'],
米粒:['jerboa','#C1A182','#98B18A','vest',null,'glasses'],米粒坐:['jerboa','#C1A182','#98B18A','vest',null,'glasses'],米粒无镜:['jerboa','#C1A182','#98B18A','vest'],
米米:['mouse','#BEC5BF','#B58A9B','dress'],米米坐:['mouse','#BEC5BF','#B58A9B','dress'],
栗绒:['mole','#A29D92','#89ABB9','coat',null,'mittens'],栗绒坐:['mole','#A29D92','#89ABB9','coat',null,'mittens'],
栗绵:['fox','#C89573','#80AAB8','dress',null,'backpack'],栗绵坐:['fox','#C89573','#80AAB8','dress',null,'backpack'],
婆婆:['mouse','#B6BEBB','#B3A3C1','coat',null,'glasses'],婆婆坐:['mouse','#B6BEBB','#B3A3C1','coat',null,'glasses'],
站长:['bear','#A78D6D','#96AF8D','coat',null,'stationcap']};
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
 if(detail==='whiteclip')a+=R(-56,-270,32,9,'#F2EFE0',4,'transform="rotate(-22 -40 -266)"');
 if(detail==='sleepcap')a+=P('M-58 -268 Q-48 -322 8 -316 Q48 -311 61 -268 L88 -252 Q65 -258 51 -248Z','#F1EEDF')+R(-62,-276,123,18,'#E3E3D7',7)+E(88,-253,11,10,'#F1EEDF');
 if(detail==='strawhat')a+=E(0,-275,89,15,'#D6C18B')+P('M-53 -278 L-44 -315 Q0 -344 44 -315 L53 -278Z','#E2CE99')+P('M-50 -286 Q0 -271 50 -286','none','#B6A578',6)+[-28,-6,16,38].map(xx=>line(xx,-305,xx-6,-280,'#C7B580',2)).join('');
 if(detail==='backpack')a+=P('M-55 -177 Q-81 -178 -87 -125 L-81 -61 L-49 -51Z','#D5C4A0')+line(-48,-177,-38,-74,'#B6A27E',8);
 if(detail==='stationcap')a+=R(-58,-276,115,23,'#879F7C',6)+P('M-53 -278 Q-52 -319 0 -317 Q52 -317 53 -278Z','#96AF8D')+R(-19,-299,38,22,'#D4C383',4)+E(0,-273,75,10,'#758E6E');
 if(detail==='mittens'&&pose!=='back')a+=E(-43+q[0][0],-154+q[0][1],16,18,'#BE837A')+E(43+q[1][0],-154+q[1][1],16,18,'#BE837A');
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


function floorKid(name,x,y,s=1,pose='hold'){
 const f=C[name][1],id=`floor-${name}-${x}-${y}`;
 return G(x,y,s,E(-30,12,50,24,f)+E(30,12,50,24,f)+E(-54,24,23,12,f)+E(54,24,23,12,f))+`<defs><clipPath id="${id}"><rect x="${x-180*s}" y="${y-450*s}" width="${360*s}" height="${457*s}"/></clipPath></defs><g clip-path="url(#${id})">${kid(name,x,y+55*s,s,pose)}</g>`;
}
function drops(x,y,s=1){return G(x,y,s,[-24,0,24].map((xx,j)=>E(xx,j%2*16,4,7,'#A9CACB')).join(''));}
function cloth(x,y,s=1,c='#EAE3CC',r=0){return G(x,y,s,P('M-49 -27 L43 -31 L54 30 L-43 33Z',c)+P('M-34 24 L36 21 L33 -20','none','#CEC8AA',3),r);}
function pot(x,y,s=1){return G(x,y,s,P('M-31 -7 L31 -7 L24 38 Q0 47 -24 38Z','#BD9B7C')+E(0,-7,35,10,'#D1B18E')+[-19,0,20].map((xx,j)=>line(xx,0,xx+(j-1)*9,-66-j%2*20,'#9EAE83',4)+flower(xx+(j-1)*9,-66-j%2*20,.43,'#DDC477')).join(''));}
function kettle(x,y,s=1,r=0){return G(x,y,s,E(0,-26,37,33,'#BBCABB')+P('M24 -39 L61 -61 L52 -12 L29 -6Z','#BBCABB')+P('M-31 -44 Q-66 -55 -62 -19 Q-55 -4 -32 -13','none','#A2B5A9',8)+E(0,-54,24,6,'#D3DCC7')+E(0,-63,7,8,'#A2B5A9'),r);}
function mugSteam(x,y){return P(`M${x-9} ${y-46} q-12 -16 0 -31 M${x+8} ${y-51} q-11 -14 0 -28`,'none','#E0E4D3',3);}
function waterFlask(x,y,s=1,r=0){return G(x,y,s,R(-23,-43,46,65,'#92B6BB',14)+R(-12,-61,24,26,'#BDD4CD',5)+E(0,-61,12,4,'#718F96')+P('M22 -33 Q45 -34 41 -3 L23 4','none','#749AA4',6),r);}
function palm(x,y,s=1,r=0){return G(x,y,s,P('M-17 0 Q-2 -155 30 -302 L56 -297 Q18 -147 18 0Z','#B69B72')+[-72,-122,-172,-222,-272].map(yy=>line(1+(-yy)/12,yy,29+(-yy)/12,yy+10,'#988362',4)).join('')+[-82,-44,0,43,81].map((a,j)=>G(44,-293,1,P('M0 0 Q-67 -115 -143 -81 Q-82 -70 0 0Z',j%2?'#9CB48B':'#88A582'),a)).join(''),r);}
function oasis(){return R(0,0,1000,800,'#D6E0CF',0)+E(796,111,55,55,'#EBDDAD')+P('M0 467 Q231 349 483 458 Q746 324 1000 451 L1000 800 L0 800Z','#D8C69A')+E(813,518,194,70,'#A9C8C4')+E(813,518,160,49,'#B8D6CA')+palm(136,632,1.42,-9)+palm(910,598,1.11,10)+R(221,615,524,125,'#D6D1AC',48)+[648,675,702].map(yy=>line(251,yy,711,yy,'#BDBD98',3)).join('');}
function fishMark(stage=3){let a='';if(stage===1||stage===3)a+=P('M36 -2 L71 -23 Q80 -10 70 4 L78 22 L34 12Z','#BE7C70');if(stage===2)a+=E(-38,-10,6,6,ink)+P('M-12 -25 Q11 -33 28 -10 M-15 20 Q7 30 30 11','none','#B88B73',4);if(stage===3)a+=E(0,0,48,29,'#D7B37F')+E(-27,-8,5,6,ink)+P('M-3 -24 L14 -43 L26 -19Z','#BE9E78')+P('M-8 25 L14 41 L24 20Z','#BE9E78')+P('M-43 7 q9 7 15 0','none','#947E66',3)+[[-73,-33],[-89,-57],[-66,-77]].map(([x,y],j)=>E(x,y,7+j*2,7+j*2,'none','stroke="#8DAEB0" stroke-width="3"')).join('');return a;}
function magicStone(x,y,s=1,stage=0,back=false,r=0){return G(x,y,s,E(0,8,111,65,'#A8B2AC')+E(0,0,111,62,'#CDD0C3')+(back?E(0,0,77,38,'#AABAB6')+E(0,-3,64,25,'#BDDBD2'):G(8,17,.72,fishMark(stage))),r);}
function stoneBowl(x,y,s=1,stage=3){return G(x,y,s,P('M-143 -10 Q-124 76 0 78 Q124 76 143 -10Z','#C6AD87')+E(0,-10,143,69,'#E4D2AE')+E(0,-12,130,59,'#AECAC8')+magicStone(0,-9,.95,stage)+P('M-117 13 Q0 64 117 13','none','#D1E3D5',5));}
function waterStoneScene(i,cover){
 if(cover)return oasis()+kid('小耳',360,728,1.17,'hold')+stoneBowl(653,642,1.20,3)+waterFlask(795,710,.7);
 return [
 ()=>oasis()+floorKid('小耳坐',390,692,1.13,'low')+magicStone(613,678,.86,0),
 ()=>oasis()+kid('小耳',367,734,1.17,'back')+magicStone(627,667,1.10,1)+P('M317 554 Q357 600 427 610 M417 554 Q448 578 489 575','none','#CBB086',22)+waterFlask(488,573,.85,65)+P('M520 562 Q556 578 606 639','none','#AECFCA',5)+E(657,638,29,12,'#B6D5CD','opacity=".3"'),
 ()=>oasis()+kid('小耳',419,733,1.19,'back')+P('M368 550 Q396 607 501 625 M470 550 Q531 574 630 599','none','#CBB086',22)+magicStone(583,622,1.03,1,false,16)+P('M685 657 Q715 690 702 715','none','#A4C8C7',5)+E(708,730,39,13,'#AEAD8A')+waterFlask(787,714,.72),
 ()=>oasis()+floorKid('小耳坐',370,700,1.16,'think')+magicStone(622,658,1.23,0,true)+waterFlask(796,709,.76)+drops(656,611,.7),
 ()=>oasis()+kid('小耳',391,735,1.18,'back')+P('M340 553 Q370 597 407 618 M442 553 Q495 578 559 636','none','#CBB086',22)+magicStone(637,661,1.15,2)+E(559,637,12,12,'#CBB086')+drops(543,619,.55)+waterFlask(800,710,.75),
 ()=>oasis()+kid('小耳',369,732,1.17,'back')+stoneBowl(655,661,1.10,2)+P('M319 552 Q351 601 411 617 M419 552 Q455 567 490 572','none','#CBB086',22)+waterFlask(499,571,.85,61)+P('M531 560 Q593 578 626 614','none','#A5C7C6',5),
 ()=>oasis()+floorKid('小耳坐',356,698,1.20,'wide')+stoneBowl(656,657,1.22,3)+waterFlask(804,727,.69),
 ()=>interior(false,'#E1D7B9')+palm(813,394,.72,10)+stool(345,643,1.14)+sitKid('小耳坐',345,635,1.10,'hold')+desk(652,683,1.02)+stoneBowl(655,634,.92,3)+P('M657 598 l-41 38 m41 -38 l-5 43 m5 -43 l37 33','none','#8DAA89',5,'opacity=".28"')
 ][i]();
}
function caveBase(mood='open'){return outdoor()+P('M57 687 Q41 228 243 141 Q425 49 620 166 Q759 269 744 687Z','#A4B19A')+[[-5,0],[104,-32],[209,-17],[303,35],[375,98]].map(([x,y])=>E(213+x,179+y,84,46,'#8AA283')).join('')+P('M229 690 L229 434 Q236 306 411 306 Q581 307 592 434 L592 690Z','#647D70')+E(348,250,10,mood==='sneeze'?3:9,ink)+E(467,250,10,mood==='sneeze'?3:9,ink)+E(408,289,40,30,'#BEC4B0')+E(398,281,11,7,'#D0D2BD')+P('M304 689 Q415 631 575 689Z','#A2BA90')+P('M717 800 Q854 655 1000 648','none','#D6C49D',68);}
function caveHands(left='table',right='table'){const a={table:[324,584],nose:[389,295],wave:[739,420],cup:[493,435],wipe:[436,593],pour:[491,546],low:[245,574]};const l=a[left],r=a[right];return P(`M206 469 Q${l[0]-48} ${l[1]-18} ${l[0]} ${l[1]}`,'none','#B0B9A4',31)+E(...l,22,18,'#B0B9A4')+P(`M644 469 Q${r[0]+39} ${r[1]-8} ${r[0]} ${r[1]}`,'none','#B0B9A4',31)+E(...r,22,18,'#B0B9A4');}
function teaTable(){return R(314,570,16,118,'#A28C69',4)+R(511,570,16,118,'#A28C69',4)+R(342,594,16,124,'#B39A73',4)+R(542,594,16,124,'#B39A73',4)+P('M301 557 L522 557 L567 596 L331 596Z','#D8BE91')+R(331,596,236,14,'#BEA078',4);}
function strawHat(x,y,s=1){return G(x,y,s,E(0,0,68,17,'#D6C18B')+P('M-43 -5 L-36 -43 Q0 -66 36 -43 L43 -5Z','#E2CE99')+P('M-41 -14 Q0 0 41 -14','none','#B6A578',5));}
function flowerShelf(){return R(529,390,72,14,'#B0A286',5);}
function outsideFlower(){return R(808,577,86,47,'#A6B09B',15)+E(851,578,44,12,'#BCC5B1')+pot(850,546,.88);}
function caveScene(i,cover){
 const table=(p=0)=>teaTable()+cup(386,570+p,.73)+cup(474,570-p,.73);
 if(cover)return caveBase()+caveHands('table','cup')+teaTable()+kettle(414,575,.63)+cup(493,422,.78)+stool(705,648,.74)+sitKid('穗穗帽',705,641,.99,'hold')+cup(705,570,.78)+outsideFlower()+mugSteam(493,422);
 return [
 ()=>caveBase()+caveHands()+table()+kid('穗穗帽',750,720,1.01,'hold')+pot(750,592,.91),
 ()=>caveBase('sneeze')+caveHands('low','table')+table(-14)+flowerShelf()+pot(563,360,.78)+kid('穗穗帽',779,718,.99,'think')+[[513,305],[481,287],[449,294]].map(([x,y])=>E(x,y,3,3,'#DCC37A')).join('')+P('M354 329 l-26 19 M461 326 l29 19','none','#C7D3BC',4),
 ()=>caveBase()+caveHands('nose','table')+table()+kettle(438,586,.60)+flowerShelf()+pot(563,360,.78)+stool(733,650,.73)+sitKid('穗穗帽',733,643,.99,'hold'),
 ()=>caveBase('sneeze')+caveHands()+table()+kettle(438,578,.61)+E(433,596,31,8,'#A6BCAD')+flowerShelf()+pot(563,360,.78)+kid('穗穗帽',779,718,.98,'think')+P('M361 325 l-30 22 M459 327 l27 20','none','#D3DAC4',4),
 ()=>caveBase()+caveHands('nose','wave')+table()+kettle(438,582,.59)+flowerShelf()+pot(563,360,.78)+kid('穗穗',788,724,1.0,'hold')+strawHat(786,600,.75),
 ()=>caveBase()+caveHands('low','table')+table()+kettle(438,582,.59)+kid('穗穗帽',722,733,.98,'back')+P('M680 582 Q714 624 782 578 M764 582 Q799 602 828 578','none','#B7A080',20)+outsideFlower(),
 ()=>caveBase()+caveHands('wipe','pour')+teaTable()+cloth(429,593,.54)+cup(535,572,.73)+kettle(494,531,.62,-20)+P('M528 508 Q542 523 536 549','none','#B5CBBB',3)+stool(716,650,.72)+sitKid('穗穗帽',716,643,.98,'hold')+cup(716,576,.74)+outsideFlower(),
 ()=>caveBase()+caveHands('table','cup')+teaTable()+kettle(412,579,.61)+cup(493,422,.78)+stool(715,650,.72)+sitKid('穗穗帽',715,643,.98,'point')+cup(699,575,.75)+outsideFlower()+mugSteam(493,422)+mugSteam(699,575)
 ][i]();
}
function loft(){return R(0,0,1000,800,'#DCD2B9',0)+P('M0 187 L500 13 L1000 187','none','#AD9977',26)+P('M500 16 L500 317 M58 176 L58 590 M942 177 L942 590','none','#C1AC87',19)+R(0,580,1000,220,'#C6B18E',0)+[620,675,730,785].map(y=>line(0,y,1000,y,'#B7A17D',3)).join('')+R(708,159,166,196,'#BAA581',77)+R(721,172,140,170,'#CADBD0',66)+line(790,175,790,343,'#DACBA6',7)+P('M723 342 L861 342 L965 763 L411 763Z','#E7D8B1','',0,'opacity=".29"')+basket(208,613,.8,false);}
function cushion(x,y,s=1,c='#D3BE82',r=0){return G(x,y,s,R(-94,-58,188,116,c,30)+R(-78,-43,156,86,'none',23,'stroke="#E8DCB8" stroke-width="3"')+E(0,0,7,5,'#B8AA81'),r);}
function scarfPath(d,sx,sy,ex,ey,eyes=true){return P(d,'none','#B97A78',53)+P(d,'none','#D49D90',3,'stroke-dasharray="4 14"')+[-18,-6,6,18].map(xx=>line(sx+xx,sy,sx+xx-4,sy+28,'#B97A78',5)+line(ex+xx,ey,ex+xx+3,ey+28,'#B97A78',5)).join('')+(eyes?E(ex-10,ey-13,4,5,ink)+E(ex+9,ey-13,4,5,ink):'');}
function scarfRoll(x,y,s=1){return G(x,y,s,E(0,0,62,56,'#B97A78')+P('M39 18 Q68 -26 17 -43 Q-40 -59 -47 -4 Q-51 37 -10 40 Q25 40 27 13 Q28 -13 5 -17 Q-16 -20 -19 2','none','#D69B8F',6)+R(-25,22,78,42,'#B97A78',14)+E(-1,40,4,5,ink)+E(18,40,4,5,ink)+[-13,2,17,32,47].map(xx=>line(xx,59,xx+3,78,'#B97A78',5)).join(''));}
function blockBoat(x,y,s=1,r=0){return G(x,y,s,P('M-58 -16 L38 -16 L62 0 L-35 0Z','#DCC389')+P('M-35 0 L62 0 L62 24 L-35 24Z','#BFA071')+P('M-58 -16 L-35 0 L-35 24 L-58 9Z','#CBB17B'),r);}
function scarfScene(i,cover){
 const river=()=>scarfPath('M284 686 Q387 642 468 676 Q589 729 640 621 Q674 564 767 642',284,686,767,642);
 if(cover)return loft()+cushion(387,571,.80,'#D4BD83',-13)+cushion(673,713,.80,'#A8BAC1',9)+floorKid('米栗坐',337,701,1.03,'point')+river()+blockBoat(704,611,.60,-10);
 return [
 ()=>loft()+kid('米栗',614,729,1.13,'hold')+cushion(598,593,.62,'#D4BD83',-7)+cushion(624,639,.63,'#A8BAC1',9)+scarfPath('M188 584 Q196 502 295 510 Q335 515 347 553',188,584,347,553)+blockBoat(832,722,.55),
 ()=>loft()+cushion(714,696,.8,'#D4BD83',-4)+cushion(797,637,.75,'#A8BAC1',10)+floorKid('米栗坐',485,696,1.17,'back')+scarfPath('M185 591 Q201 510 292 534 Q358 555 349 624',185,591,349,624)+P('M435 580 Q388 592 352 600 M535 580 Q560 631 570 646','none','#B99F81',20),
 ()=>loft()+cushion(634,693,1.15,'#D4BD83',-13)+cushion(713,625,1.06,'#A8BAC1',-18)+kid('米栗',428,739,1.15,'back')+P('M379 562 Q410 603 480 600 M477 562 Q518 549 568 555','none','#B99F81',20)+scarfRoll(623,550,.84),
 ()=>loft()+cushion(634,693,1.15,'#D4BD83',-13)+cushion(713,625,1.06,'#A8BAC1',-18)+floorKid('米栗坐',362,715,1.12,'low')+scarfPath('M743 562 Q682 601 614 664 Q557 733 467 682',743,562,467,682),
 ()=>loft()+cushion(819,596,.75,'#D4BD83',12)+cushion(772,700,.76,'#A8BAC1',-8)+floorKid('米栗坐',389,579,1.07,'wide')+scarfPath('M243 712 Q328 634 463 692 Q575 752 694 682',243,712,694,682)+blockBoat(840,756,.57),
 ()=>loft()+cushion(815,508,.70,'#D4BD83',13)+cushion(842,745,.70,'#A8BAC1',-6)+floorKid('米栗坐',392,592,1.07,'back')+river()+blockBoat(498,690,.62,15)+P('M346 486 Q347 547 379 572 M438 486 Q468 577 496 668','none','#B99F81',19),
 ()=>loft()+cushion(430,567,.85,'#D4BD83',-13)+cushion(657,738,.80,'#A8BAC1',9)+floorKid('米栗坐',314,695,1.04,'point')+river()+blockBoat(758,654,.60),
 ()=>loft()+cushion(319,695,.91,'#D4BD83',-7)+cushion(722,699,.93,'#A8BAC1',9)+floorKid('米栗坐',513,703,1.25,'hold')+scarfPath('M441 579 Q478 611 559 578 Q587 610 555 657',441,579,555,657)+blockBoat(507,683,.68)
 ][i]();
}
function moonRoom(state='open'){return R(0,0,1000,800,'#D8D5C5',0)+R(0,624,1000,176,'#B3B1A0',0)+line(0,625,1000,625,'#A0A28F',7)+R(33,150,139,472,'#B4A88B',58)+R(49,169,112,452,'#8E9386',48)+R(142,214,9,409,'#E1CC9F',2)+E(862,235,112,141,'#A6ABA0')+E(862,235,98,127,'#647D8B')+E(887,198,31,31,'#E8DDAE')+P('M787 293 Q855 248 948 302 L948 344 L787 344Z','#9AAFA8')+line(752,88,972,88,'#A0947C',9)+(state==='closed'?R(756,98,211,282,'#8DA7B3',12)+line(862,106,862,373,'#7B95A3',4):state==='gap'?R(756,98,98,282,'#8DA7B3',12)+R(869,98,98,282,'#8DA7B3',12):P('M756 99 L809 99 Q794 241 765 375 L742 375Z','#8DA7B3')+P('M914 99 L967 99 L983 375 L960 375 Q927 235 914 99Z','#8DA7B3'));}
function dragonHead(x,y,s=1,left=true,mood='open'){return G(x,y,s,P('M-42 -42 L-49 -77 Q-37 -83 -28 -49Z',left?'#DBC17C':'#A88B64')+P('M26 -49 L39 -80 Q52 -76 43 -42Z',left?'#DBC17C':'#A88B64')+E(0,0,66,59,'#ADC598')+E(23,22,49,28,'#BED1A5')+(mood==='sleep'||mood==='squint'?P('M-29 -10 Q-20 -4 -11 -10 M12 -10 Q21 -4 30 -10','none',ink,3):E(-22,-12,5,7,ink)+E(21,-12,5,7,ink))+E(40,15,3,3,'#7D9571')+P('M10 37 Q25 45 39 35','none','#7D9571',3));}
function dragonStanding(x,y,s=1){return G(x,y,s,P('M45 -54 Q149 -48 129 -107 Q157 -77 107 -13 L50 -19Z','#ADC598')+E(-34,-8,34,20,'#ADC598')+E(34,-8,34,20,'#ADC598')+E(0,-112,83,103,'#9CB6C6')+P('M-49 -168 Q-80 -194 -76 -225 M49 -168 Q80 -194 76 -225','none','#ADC598',43)+dragonHead(-76,-248,.86,true)+dragonHead(76,-248,.86,false)+P('M-68 -137 Q-30 -104 -5 -96 M68 -137 Q33 -104 5 -96','none','#ADC598',21)+bag(0,-91,.79));}
function guestBed(x,y,s=1,occupied=true,divider=false,leftMood='open',rightMood='open'){
 return G(x,y,s,R(-262,-220,23,301,'#A99472',8)+R(239,-220,23,301,'#A99472',8)+R(-245,-190,490,252,'#C6B795',19)+R(-231,-210,462,92,'#D1C5AB',22)+R(-218,-220,201,91,'#EAE4CE',29)+R(17,-220,201,91,'#EAE4CE',29)+(occupied?P('M-114 -175 Q-88 -127 -34 -112 M114 -175 Q88 -127 34 -112','none','#ADC598',59)+E(0,-100,153,83,'#95B3C5')+dragonHead(-115,-219,.90,true,leftMood)+dragonHead(115,-219,.90,false,rightMood):'')+R(-237,-103,474,158,'#B7C7BD',20)+P('M-230 -77 Q0 -55 230 -77','none','#D5DEC9',6)+(divider?R(-8,-321,12,230,'#AC9878',4)+line(-34,-320,38,-320,'#AC9878',10)+P('M-32 -311 L37 -311 L43 -142 L-40 -142Z','#CCC2AD')+P('M-24 -304 L-31 -152 M11 -304 L18 -152','none','#B7AD98',3):'')+R(-267,36,534,31,'#B4A17E',8));
}
function dormouseHead(x,y,s=1,sleep=false){return G(x,y,s,E(-46,-31,25,28,'#B0B4AE')+E(46,-31,25,28,'#B0B4AE')+E(0,0,58,50,'#B0B4AE')+E(0,18,28,21,'#D9D4C2')+(sleep?P('M-27 -7 Q-19 0 -11 -7 M11 -7 Q19 0 27 -7','none',ink,3):E(-21,-8,4,6,ink)+E(21,-8,4,6,ink))+E(0,14,6,4,'#C59B98')+P('M-54 -34 Q-39 -83 10 -77 Q44 -76 55 -34 L79 -21 L48 -15Z','#F1EEDF')+R(-56,-41,112,16,'#E3E3D7',7)+E(80,-22,9,9,'#F1EEDF'));}
function ownBed(x,y,s=1){return G(x,y,s,R(-112,-138,22,221,'#AF9975',7)+R(94,-72,20,153,'#AF9975',7)+R(-99,-101,198,145,'#C8B897',18)+R(-91,-122,180,62,'#ECE5CE',22)+dormouseHead(0,-105,.75,true)+R(-96,-58,192,113,'#BDAEC7',15)+R(-113,42,226,20,'#AD9877',6));}
function dragonScene(i,cover){
 if(cover)return G(-40,0,1,moonRoom())+guestBed(609,653,.94,true,true,'sleep','open')+kid('米芙',260,721,.93,'hold');
 return [
 ()=>moonRoom()+guestBed(453,669,.79,false)+kid('米芙',215,724,1.02,'point')+dragonStanding(781,709,.79),
 ()=>moonRoom('closed')+guestBed(564,655,.96,true,false,'squint','open')+kid('米芙',884,736,.86,'back')+P('M847 604 Q820 534 826 438 M921 604 Q944 509 945 379','none','#B0B4AE',17),
 ()=>moonRoom()+guestBed(564,655,.96,true,false,'squint','open')+P('M392 508 Q444 474 499 508 L502 555 L395 555Z','#B7C7BD')+kid('米芙',884,736,.86,'up'),
 ()=>moonRoom('gap')+guestBed(602,636,.92)+sitKid('米芙坐',352,707,.96,'low'),
 ()=>moonRoom('gap')+guestBed(609,638,.92,true,false,'squint','open')+kid('米芙',269,733,1.01,'think')+P('M452 353 l-17 -14 M726 350 l19 -15','none','#E2D6B5',4),
 ()=>moonRoom('gap')+guestBed(609,644,.92)+kid('米芙',267,734,1.03,'hold')+cloth(279,614,.87,'#CCC2AD'),
 ()=>moonRoom()+guestBed(609,647,.95,true,true,'sleep','open')+kid('米芙',263,736,1.01,'point'),
 ()=>moonRoom()+ownBed(247,703,1.0)+guestBed(654,646,.85,true,true,'sleep','sleep')+E(884,199,9,11,'#F3E9CA','opacity=".4"')
 ][i]();
}
function moonDisk(x,y,s=1,clarity=2){let a=E(0,0,93,93,'#E9E1BF');if(clarity===0)a=E(0,0,112,104,'#DDE0CA','opacity=".40"')+E(0,0,102,96,'#E7E3C8','opacity=".55"')+E(0,0,87,82,'#ECE8D2');else if(clarity===1)a+=E(-21,-7,43,41,'#D5D2B4','opacity=".40"');else a+=E(-31,-22,31,27,'#CBCDB1')+E(22,-15,22,25,'#C2C7AD')+E(12,42,31,21,'#D2D2B4')+E(-31,-22,21,18,'none','stroke="#B6BDA5" stroke-width="3"')+E(22,-15,14,16,'none','stroke="#B1B9A1" stroke-width="3"')+E(-55,27,9,9,'#BFC5AB')+E(51,39,8,9,'#BFC5AB');return G(x,y,s,a);}
function observatory(){return R(0,0,1000,800,'#BFC7BA',0)+R(0,645,1000,155,'#A4AA98',0)+E(749,264,204,221,'#9CA99F')+E(749,264,185,202,'#526F82')+moonDisk(839,172,.37,2)+P('M565 338 Q674 266 753 340 Q837 282 928 357 L928 455 L568 455Z','#9AA79C')+P('M581 397 Q741 334 909 411 L909 445 L581 445Z','#B5B499')+line(566,266,930,266,'#C6C4A8',7)+R(74,485,177,21,'#AA9776',6)+R(97,503,16,143,'#988B70',5)+R(213,503,16,143,'#988B70',5)+R(144,409,26,75,'#B9AA82',7)+P('M111 412 L131 354 L184 354 L204 412Z','#E4D5A4')+E(157,412,50,14,'#EDDDB1');}
function scope(){return P('M663 477 L590 717 M663 477 L747 717 M663 477 L672 704','none','#B49E72',14)+E(663,479,23,22,'#C4B07D')+G(668,465,1,R(-145,-36,292,72,'#668497',16)+R(-171,-20,32,40,'#496B7F',8)+R(116,-44,44,88,'#9EADB0',8)+E(159,0,14,39,'#C7D6D0')+E(160,0,8,28,'#7798A6')+E(43,-13,5,6,'#283F4E')+E(75,-13,5,6,'#283F4E')+P('M44 9 Q59 22 77 8','none','#BBCBC5',3),-24)+focusWheel(587,531);}
function focusWheel(x,y){return G(x,y,1,Array.from({length:12},(_,j)=>G(0,0,1,R(-4,-33,8,15,'#B5A071',2),j*30)).join('')+E(0,0,26,26,'#CFBA84')+E(0,0,13,13,'#A48F64')+E(0,0,5,5,'#E7D7A6'));}
function glassesProp(x,y,s=1){return G(x,y,s,E(-24,0,21,18,'none','stroke="#827F70" stroke-width="4"')+E(24,0,21,18,'none','stroke="#827F70" stroke-width="4"')+line(-4,0,4,0,'#827F70',4)+line(-45,-4,-58,-12,'#827F70',4)+line(45,-4,58,-12,'#827F70',4));}
function moonView(clarity=0,x=291,y=224){return E(x,y,133,133,'#819CAC')+E(x,y,121,121,'#526F82')+moonDisk(x,y,.91,clarity)+P(`M${x+92} ${y+98} Q${x+140} ${y+149} 509 515`,'none','#8CA69F',3,'stroke-dasharray="7 10"');}
function scopeViewer(pose='hold',back=false){
 let a=stool(444,672,1.15)+P('M482 669 Q543 698 533 737 Q522 762 479 738','none','#C1A182',7)+E(477,737,10,8,cream)+P('M418 663 L412 718 M467 663 L478 719','none','#C1A182',25)+E(410,724,27,14,'#C1A182')+E(479,724,27,14,'#C1A182')+E(447,612,57,78,'#C1A182')+P('M402 552 L475 552 L498 657 L396 657Z','#98B18A')+E(447,613,35,55,'#EAE2CB')+E(430,468,21,42,'#C1A182')+E(465,469,21,43,'#C1A182')+E(454,517,54,51,'#C1A182')+E(486,536,34,24,'#E6D9BF')+E(511,531,7,5,'#8F7961')+E(485,515,5,6,ink)+E(485,515,19,18,'none','stroke="#827F70" stroke-width="3"')+line(466,513,427,506,'#827F70',3)+P('M485 552 Q497 558 506 549','none','#8F7961',2);
 if(!back)a+=pose==='point'?P('M410 576 Q407 612 438 626 M479 576 Q510 595 548 584','none','#C1A182',20):P('M410 576 Q409 614 441 623 M479 576 Q490 615 454 626','none','#C1A182',20);
 return a;
}
function scopeScene(i,cover){
 if(cover)return observatory()+moonView(2,300,223)+scope()+scopeViewer('hold');
 return [
 ()=>observatory()+scope()+kid('米粒',370,736,1.08,'back')+stool(413,627,.69)+P('M324 570 Q352 611 380 619 M416 570 Q445 587 449 619','none','#C1A182',21),
 ()=>observatory()+moonView(0)+scope()+scopeViewer('think'),
 ()=>observatory()+scope()+stool(327,672,.98)+sitKid('米粒坐',327,668,1.03,'think')+P('M421 739 L467 739 M421 739 l10 -6 M421 739 l10 6','none','#C4CBB4',4),
 ()=>observatory()+scope()+stool(444,672,.98)+sitKid('米粒无镜',444,668,1.03,'hold')+cloth(444,608,.62)+glassesProp(449,591,.69),
 ()=>observatory()+moonView(0)+scope()+scopeViewer('hold',true)+P('M410 576 Q410 614 444 619 M479 576 Q531 572 574 539','none','#C1A182',20)+P('M606 493 Q625 507 624 531','none','#D8C893',4)+P('M624 531 l-8 -9 M624 531 l5 -12','none','#D8C893',3),
 ()=>observatory()+moonView(1)+scope()+scopeViewer('hold',true)+P('M410 576 Q413 617 442 622 M479 576 Q529 574 577 548','none','#C1A182',20)+P('M608 513 Q605 503 599 499','none','#DDCCA0',4)+P('M599 499 l12 0 M599 499 l4 9','none','#DDCCA0',3),
 ()=>observatory()+moonView(2)+scope()+scopeViewer('hold'),
 ()=>observatory()+moonView(2,288,224)+scope()+scopeViewer('point')
 ][i]();
}
function snowRoom(dark=false){return interior(true,dark?'#C2C7BE':'#DCD7C3')+R(689,98,200,310,'#9DAFAF',88)+[[-64,-90],[-23,-114],[39,-72],[61,-15],[-48,5],[7,56],[-47,104],[64,109]].map(([x,y])=>E(790+x,244+y,4,5,'#F0EFDF')).join('')+P('M690 374 Q787 327 890 382 L890 410 L690 410Z','#E8EBDD')+line(789,98,789,410,'#D1C6A8',8)+line(690,260,890,260,'#D1C6A8',8)+R(229,651,572,104,'#C3C6A4',46)+[237,359,481,603,725,847].map(x=>line(x,624,x,800,'#AB9E81',2)).join('');}
function cotton(x,y,s=1){return G(x,y,s,E(0,8,48,27,'#ECECDA')+[[-34,-3],[-11,-20],[18,-18],[39,0]].map(([xx,yy])=>E(xx,yy,24,22,'#F2F0DF')).join(''));}
function cottonPile(x,y,s=1){return G(x,y,s,cotton(-40,0,.8)+cotton(36,2,.8)+cotton(-5,-28,.77));}
function woodDoll(x,y,s=1,pose='stand',hat=true){const sleep=pose==='sleep';return G(x,y,s,(pose==='stand'?E(-19,-4,20,10,'#B88D65')+E(19,-4,20,10,'#B88D65')+R(-31,-49,23,46,'#C9A77E',6)+R(8,-49,23,46,'#C9A77E',6):P('M-19 -43 L-20 -8 M18 -43 L28 -9','none','#C9A77E',19))+P('M-37 -105 L37 -105 L43 -39 L-43 -39Z','#81A7BD')+P('M-38 -91 Q-56 -69 -49 -52 M38 -91 Q55 -68 49 -50','none','#CAA67D',14)+E(0,-132,43,40,'#D0AE85')+E(0,-120,11,10,'#B78D63')+(sleep?P('M-25 -138 Q-18 -133 -11 -138 M11 -138 Q18 -133 25 -138','none',ink,2):E(-18,-140,4,5,ink)+E(18,-140,4,5,ink))+P('M-10 -107 Q0 -101 11 -107','none','#8E7157',2)+P('M-29 -121 l8 5 M26 -126 l8 -2 M-12 -154 l12 5','none','#B8946D',2)+(hat?dollHat(0,-162,1):''));}
function dollHat(x,y,s=1,r=0){return G(x,y,s,P('M-45 4 L6 -74 Q22 -40 45 4Z','#8BA67A')+R(-47,-1,94,13,'#ACC092',6),r);}
function woodBox(x,y,s=1,empty=false,inverted=false){return G(x,y,s,P('M-130 -43 L95 -43 L131 -10 L-98 -10Z',inverted?'#D2B88F':'#A28B68')+P('M-98 -10 L131 -10 L131 58 L-98 58Z','#BFA27A')+P('M-130 -43 L-98 -10 L-98 58 L-130 25Z','#AC9069')+P('M-91 11 L124 11 M-91 33 L124 33','none','#AB8E66',3)+(inverted?P('M-110 -30 L108 -30 M-90 -18 L123 -18','none','#B69A71',3):empty?P('M-116 -37 L-95 -18 L116 -18 L90 -37Z','#8F7C5F'):'') );}
function flowerQuilt(x,y,s=1,r=0){return G(x,y,s,R(-77,-35,154,70,'#D8C3AB',12)+[[-48,-15],[-6,9],[38,-14],[57,18]].map(([xx,yy])=>flower(xx,yy,.20,'#B4868E')).join('')+P('M-66 -26 L65 -26 L65 25','none','#EBD9BD',3),r);}
function dollLying(x,y,s=1,hat=true,curved=false){return G(x,y,s,woodDoll(0,0,1,'sleep',hat),curved?-67:-90);}
function hardBed(x,y,s=1){return G(x,y,s,woodBox(0,0,1,false,true)+dollLying(74,-37,.71,false)+flowerQuilt(43,-36,.64)+dollHat(-101,65,.40,-13));}
function dollScene(i,cover){
 if(cover)return snowRoom()+floorKid('米米坐',330,693,1.18,'hold')+hardBed(655,654,1.14)+cottonPile(768,744,.58);
 return [
 ()=>snowRoom()+stool(344,644,.98)+sitKid('米米坐',344,639,1.12,'hold')+E(599,588,187,48,'#D7BE94')+R(582,600,26,125,'#B39B75',6)+E(599,601,188,35,'#BA9F77')+woodDoll(668,590,.54,'sit')+cup(503,579,.81)+cup(660,572,.29),
 ()=>snowRoom()+kid('米米',359,738,1.15,'back')+woodBox(642,669,1.09)+cottonPile(647,645,1.11)+flowerQuilt(641,650,1.03)+woodDoll(819,705,.66)+P('M310 561 Q350 605 416 615 M408 561 Q467 599 522 618','none','#BEC5BF',21)+cotton(538,620,.65),
 ()=>snowRoom()+floorKid('米米坐',355,707,1.16,'think')+woodBox(650,672,1.13)+cottonPile(652,646,1.13)+G(678,660,.78,woodDoll(0,0,1,'sit',true),-55)+flowerQuilt(653,674,.72),
 ()=>snowRoom()+floorKid('米米坐',355,706,1.16,'hold')+cotton(367,615,.70)+woodBox(649,675,1.14)+cotton(646,642,1.04)+woodDoll(657,651,.71,'sit')+flowerQuilt(664,672,.70),
 ()=>snowRoom()+kid('米米',363,742,1.16,'hold')+cottonPile(378,621,.75)+woodBox(767,633,.73)+cotton(766,610,.59)+flowerQuilt(781,628,.59)+dollLying(683,738,.82,true),
 ()=>snowRoom()+floorKid('米米坐',362,709,1.15,'point')+woodBox(631,672,1.08,true)+cottonPile(804,685,.99)+woodDoll(632,752,.72,'sit')+flowerQuilt(808,755,.62),
 ()=>snowRoom()+floorKid('米米坐',354,706,1.13,'hold')+hardBed(654,657,1.13)+cottonPile(811,745,.68),
 ()=>snowRoom(true)+E(329,686,151,72,'#ACB693')+cottonPile(327,676,1.96)+G(326,633,.79,E(-46,-31,26,29,'#BEC5BF')+E(46,-31,26,29,'#BEC5BF')+E(0,0,60,49,'#BEC5BF')+E(0,17,32,22,'#E0D9C4')+P('M-28 -8 Q-20 -2 -12 -8 M12 -8 Q20 -2 28 -8','none',ink,3)+E(0,14,7,5,'#C69C98'))+cotton(328,704,1.80)+hardBed(670,664,1.03)
 ][i]();
}
function snowGarden(){return R(0,0,1000,800,'#D5E2DE',0)+P('M0 430 Q231 349 475 452 Q726 361 1000 424 L1000 800 L0 800Z','#E7EBDE')+tree(61,562,1.05,'#A4B9AB')+tree(936,528,.87,'#B7CBBE')+P('M145 800 Q320 639 757 555','none','#CCD6CC',85)+P('M112 800 Q307 626 754 550','none','#DDE4D6',65)+P('M421 672 Q580 584 885 651 L920 773 L432 773Z','#BDB8A1')+P('M417 661 Q578 574 884 640 L909 748 Q626 711 438 751Z','#F0F1E4');}
function stoneMushroom(x,y,s=1,snow=false){return G(x,y,s,R(-46,-136,92,144,'#B9C2B8',28)+E(0,-146,112,49,'#B3BEB4')+E(0,-159,107,43,'#CAD1C5')+(snow?P('M-111 -170 Q-109 -220 -64 -230 Q-37 -275 17 -260 Q66 -266 85 -227 Q118 -219 115 -173 Q70 -149 0 -157 Q-73 -146 -111 -170Z','#F3F2E7'):'')+E(-21,-117,5,6,ink)+E(21,-117,5,6,ink)+P('M-11 -94 Q0 -85 11 -94','none','#81958A',3));}
function gardenEntrance(x,y,s=1,snow=false){return G(x,y,s,R(-191,-324,34,335,'#AFAD95',8)+R(151,-324,34,335,'#AFAD95',8)+P('M-223 -319 L-187 -394 L185 -394 L222 -319Z','#9BAE9E')+R(-223,-327,445,28,'#B4C4B2',9)+P('M-208 -391 Q-65 -418 181 -394 L207 -367 Q-9 -387 -211 -367Z','#EFF0E2')+R(-212,-93,94,102,'#B7BEAB',8)+P('M-218 -92 Q-165 -116 -115 -92 L-118 -69 L-214 -69Z','#EEF0E2')+stoneMushroom(0,0,1,snow));}
function snowyBench(x,y,s=1,cleared=false){return G(x,y,s,bench(0,0,1)+P('M-173 -121 Q-35 -136 162 -121 L162 -103 L-173 -103Z','#F1F2E5')+(cleared?P('M-173 -35 Q-127 -52 -84 -39 L-84 -13 L-173 -13Z','#F0F1E4')+P('M45 -37 Q98 -49 171 -33 L171 -13 L45 -13Z','#F0F1E4'):P('M-173 -35 Q-91 -59 4 -44 Q95 -62 171 -33 L171 -10 L-173 -10Z','#F0F1E4')));}
function mittHand(x,y,s=1){return G(x,y,s,E(0,0,19,21,'#BE837A')+E(13,-3,9,12,'#BE837A'));}
function rootPatch(open=false){return (open?E(650,681,83,41,'#B8AA86')+P('M621 685 Q605 659 626 652 M634 684 Q633 657 645 648 M648 686 Q662 660 673 653','none','#C9BD8B',5)+P('M640 688 Q628 711 651 716 Q676 717 673 695','none','#A28B62',7)+E(651,703,2,3,ink)+E(662,704,2,3,ink)+cotton(778,715,.87):cotton(648,683,1.63));}
function mushroomScene(i,cover){
 if(cover)return snowGarden()+gardenEntrance(365,653,.96,true)+kid('栗绒',680,744,1.12,'wave')+snowyBench(833,586,.54,true);
 return [
 ()=>snowGarden()+gardenEntrance(355,652,.98)+kid('栗绒',652,741,1.13,'wide')+snowyBench(834,585,.56),
 ()=>snowGarden()+gardenEntrance(274,537,.62)+snowyBench(826,557,.58)+kid('栗绒',444,738,1.11,'think')+E(372,754,27,20,'#E5E7D6')+[[359,746],[380,748],[372,760]].map(([x,y])=>E(x,y,3,3,'#AA9674')).join('')+P('M499 697 Q544 677 579 677','none','#CCD4BF',4),
 ()=>snowGarden()+gardenEntrance(266,527,.62)+snowyBench(826,557,.58)+kid('栗绒',467,739,1.12,'back')+rootPatch(true)+P('M419 567 Q458 624 545 674 M515 567 Q556 623 599 661','none','#A29D92',22)+mittHand(545,674,.85)+mittHand(599,661,.85),
 ()=>snowGarden()+gardenEntrance(266,527,.62)+snowyBench(826,557,.58)+kid('栗绒',474,740,1.12,'back')+rootPatch(false)+P('M426 568 Q468 626 554 669 M522 568 Q561 626 607 662','none','#A29D92',22)+mittHand(554,669,.85)+mittHand(607,662,.85),
 ()=>snowGarden()+gardenEntrance(244,515,.59)+snowyBench(708,660,1.04)+kid('栗绒',397,744,1.13,'point')+leaf(207,702,.76,'#A7BAA6',-35)+cotton(204,677,.83),
 ()=>snowGarden()+gardenEntrance(281,605,.80)+snowyBench(825,567,.61,true)+kid('栗绒',536,739,1.13,'hold')+cotton(536,613,.68)+cottonPile(365,645,.68)+[[603,706],[646,676],[683,643],[726,619]].map(([x,y])=>E(x,y,9,4,'#C5CFC3')).join(''),
 ()=>snowGarden()+gardenEntrance(372,655,1.0,true)+kid('栗绒',660,742,1.14,'back')+P('M611 566 Q543 551 467 535 M709 566 Q714 621 698 644','none','#A29D92',22)+mittHand(467,535,.90)+mittHand(698,644,.90)+cottonPile(381,725,.57)+snowyBench(861,565,.48,true),
 ()=>snowGarden()+gardenEntrance(268,526,.65,true)+snowyBench(700,679,1.15,true)+sitKid('栗绒坐',688,663,.97,'hold')
 ][i]();
}
function cloudPillow(x,y,s=1,sleep=false,r=0){return G(x,y,s,E(0,2,55,28,'#EAEFE2')+E(-38,-7,24,25,'#F1F2E8')+E(-15,-24,29,28,'#F1F2E8')+E(18,-23,28,27,'#F1F2E8')+E(42,-5,23,25,'#F1F2E8')+(sleep?P('M-23 -2 Q-17 4 -11 -2 M11 -2 Q17 4 23 -2','none',ink,2):E(-17,-3,4,5,ink)+E(17,-3,4,5,ink))+P('M-7 14 Q0 20 7 14','none',ink,2),r);}
function fishBook(x,y,s=1,open=false){return G(x,y,s,open?P('M-95 -62 Q-47 -79 0 -56 Q47 -79 95 -62 L95 69 Q47 50 0 75 Q-47 50 -95 69Z','#A6C1BC')+P('M-88 -56 Q-42 -68 -4 -49 L-4 65 Q-45 46 -88 60Z','#EFE6CB')+P('M4 -49 Q42 -68 88 -56 L88 60 Q45 46 4 65Z','#EFE6CB')+G(44,10,.40,fishMark(3))+P('M-69 43 Q-86 -4 -66 -27 M-51 48 Q-35 4 -52 -23 M-30 46 Q-46 14 -27 -10','none','#95B18A',5):R(-58,-80,116,160,'#94B7B6',8)+line(-46,-74,-46,73,'#D1D9C2',4)+G(5,0,.50,fishMark(3)));}
function lostBasket(x=348,y=645,s=1,pillow=false){return G(x,y,s,R(-74,26,14,76,'#A48E6B',4)+R(60,26,14,76,'#A48E6B',4)+R(-99,15,198,17,'#C3AC82',6)+basket(0,0,.80,false)+(pillow?cloudPillow(0,-62,.80):''));}
function cloudStation(){return R(0,0,1000,800,'#D7DED0',0)+R(0,644,1000,156,'#B7C1AD',0)+R(61,112,503,350,'#A9BDB2',28)+R(77,128,471,317,'#B9D6D3',22)+cloud(231,214,.85,'#E9EDDB')+cloud(443,303,.73,'#E9EDDB')+R(123,319,353,96,'#E1E7D7',34)+R(161,338,57,43,'#A1C3C7',10)+R(236,338,57,43,'#A1C3C7',10)+R(311,338,57,43,'#A1C3C7',10)+E(173,412,24,18,'#9AB3AA')+E(420,412,24,18,'#9AB3AA')+R(663,134,204,98,'#C2CAA8',20)+E(712,183,22,22,'none','stroke="#8CA192" stroke-width="4"')+line(713,164,713,184,'#8CA192',4)+line(713,184,728,190,'#8CA192',4)+P('M755 172 L830 172 M755 188 L815 188 M755 204 L829 204','none','#9BAD96',5)+bench(727,648,1.06);}
function cloudHome(){return interior(false,'#E0D8BF')+R(400,468,216,151,'#BDA67F',18)+R(407,618,19,108,'#A58F6D',5)+R(591,618,19,108,'#A58F6D',5)+R(383,595,251,31,'#D4BB91',10)+R(367,548,29,78,'#AF9671',7)+R(623,548,29,78,'#AF9671',7);}
function cloudPillowScene(i,cover){
 if(cover)return cloudStation()+lostBasket(242,642,.68,false)+G(-35,0,1.08,sitKid('栗绵坐',459,605,1.04,'hold')+fishBook(459,571,.64,true)+sitKid('婆婆坐',690,605,1.10,'sleep')+cloudPillow(748,508,.61,true,-10));
 return [
 ()=>cloudStation()+lostBasket(361,638,1.04,true)+kid('栗绵',618,739,1.10,'hold')+fishBook(617,611,.57),
 ()=>cloudStation()+lostBasket(325,644,.92,false)+kid('站长',511,738,1.14,'point')+kid('栗绵',761,739,1.07,'hold')+cloudPillow(762,602,.75)+fishBook(722,650,.36),
 ()=>cloudHome()+cloudPillow(558,528,.65)+sitKid('栗绵坐',491,607,1.14,'hold')+fishBook(485,586,.64,true),
 ()=>cloudHome()+cloudPillow(517,568,.76)+cloth(517,594,.77,'#E0CA87')+kid('栗绵',759,739,1.10,'think')+fishBook(507,711,.67,true),
 ()=>cloudHome()+kid('栗绵',738,739,1.10,'hold')+cloudPillow(741,603,.75)+fishBook(484,589,.55,false)+cloth(564,602,.47,'#E0CA87'),
 ()=>cloudStation()+lostBasket(304,645,.95,true)+kid('站长',499,739,1.12,'hold')+sitKid('栗绵坐',743,641,1.05,'hold')+fishBook(744,604,.52,false),
 ()=>cloudStation()+lostBasket(282,645,.87,false)+kid('栗绵',492,740,1.08,'hold')+kid('婆婆',767,742,1.19,'back')+P('M716 559 Q706 539 711 502 M818 559 Q805 538 763 511','none','#B6BEBB',22)+cloudPillow(724,502,.74,false,-4)+fishBook(490,612,.46),
 ()=>cloudStation()+lostBasket(232,641,.76,false)+sitKid('栗绵坐',472,640,1.04,'hold')+fishBook(472,606,.64,true)+sitKid('婆婆坐',707,640,1.10,'sleep')+cloudPillow(765,543,.61,true,-10)+P('M810 424 q12 -14 24 0 M818 405 q11 -13 20 0','none','#96AB9E',3)
 ][i]();
}
const scenes={'expansion-0201':waterStoneScene,'expansion-0202':caveScene,'expansion-0203':scarfScene,'expansion-0204':dragonScene,'expansion-0205':scopeScene,'expansion-0206':dollScene,'expansion-0207':mushroomScene,'expansion-0208':cloudPillowScene};
export function sixthYoungFirstArtwork(story,index,cover=false){
 const scene=scenes[story?.id];if(!scene)throw Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw Error('Expected eight pages');
 if(!Number.isInteger(index)||index<0||index>=8)throw Error('Page index must be an integer from 0 to 7');
 return svg(scene(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

// Original, explicit eight-page storyboards for expansion-0041 through 0056.
// The renderer is pure: the publisher owns exports and asset manifests.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,svg} from '../render-illustrations.mjs';
const ink='#384B4B',cream='#F3E8CF';
const C={
芽芽:['rabbit','#C9CEC9','#DBAC54','dress','#91AC79','whiteEar'],兔妈:['rabbit','#8D9996','#D6C9AD','coat','#A98F73'],
鸭:['duck','#E9CE7E','#90B7C5','scarf'],熊摊主:['bear','#AF885E','#9AA789','vest'],羊摊主:['sheep','#E8E3CE','#B0A2B6','dress'],
兔友:['rabbit','#E6DBCB','#A8BDA1','vest'],猪友:['pig','#D8AC9E','#D7BD84','shirt'],羊友:['sheep','#EBE4D1','#B2BACB','vest'],
麦麦:['chipmunk','#B18C65','#D49B5C','scarf'],鼹鼠:['mole','#77837E','#D99859','overall',null,'yellowHat'],奶奶鼹:['mole','#A3AAA2','#B6A4BE','shawl',null,'glasses'],
阿朵:['fennec','#E1CBA5','#CA8B67','scarf'],豆豆:['jerboa','#C4A580','#D5C6A0','none'],
茸茸:['monster','#C3A178','#D9B66E','vest',null,'blueHat'],卷卷:['monster','#BDB0CB','#A7BEAA','overall',null,'yellowHat3'],
米绒:['mouse','#C6CDC8','#DEBF75','vest',null,'shoes'],阿蒲:['rabbit','#C3CDC9','#A8BD95','vest',null,'button'],
米米:['mouse','#D3BF9B','#8AB5BF','overall'],蓬蓬:['fox','#D4BD8E','#9DB58C','vest'],鼠奶奶:['mouse','#ADB3AC','#E6DDC5','shirt',null,'glasses'],
栗团:['bear','#A87D57','#ECE3CE','shirt'],熊妈:['bear','#816B56','#D4C6AA','shirt'],熊妈外:['bear','#816B56','#657D68','coat'],
杏杏:['bear','#B69B75','#849B75','coat','#E2CC92','boots'],穗穗:['squirrel','#AD7E59','#A5BC91','dress',null,'leafclip'],
布熊:['bear','#D5C5AA','#91B4CA','shirt'],獾同学:['badger','#A1A69C','#CEA783','vest'],
团果:['badger','#A5ACA4','#DCC28D','shirt',null,'moon'],獾妈:['badger','#8A9692','#7C8DA2','dress'],
兔婆婆:['rabbit','#E9E1D0','#AE94B5','vest',null,'headcloth'],绒豆:['rabbit','#B9C4BD','#DBBD79','vest',null,'whiteEar'],
水獭:['otter','#A58C6A','#A6B68D','apron'],兔奶奶:['rabbit','#BCC8C3','#BEADC7','shirt',null,'glasses']};
function arm(x,y,dx,dy,c,w=22){return P(`M${x} ${y} Q${x+dx*.45} ${y+dy*.55-9} ${x+dx} ${y+dy}`,'none',c,w);}
function kid(name,x,y,s=1,pose='stand',flip=false,extras=''){
 const cfg=C[name];if(!cfg)throw Error(`Unknown character ${name}`);const [t,f,cloth,kind,scarf,detail]=cfg;
 let a=E(0,0,81,12,'#53675A','opacity=".12"');
 if(['squirrel','chipmunk'].includes(t))a+=P('M44 -48 Q145 -77 121 -204 Q102 -250 64 -227 Q21 -202 68 -160','none',f,53);
 if(t==='chipmunk')a+=[0,1,2,3,4].map(j=>P(`M${70+j*8} -203 Q${89+j*6} -151 ${70+j*8} -87`,'none','#665C48',3)).join('');
 if(['fox','fennec'].includes(t))a+=P('M39 -57 Q139 -36 137 -133 Q93 -144 52 -101Z',f)+P('M137 -133 Q146 -90 123 -67 L102 -103Z','#958062');
 if(['mouse','jerboa','monster'].includes(t))a+=P(t==='monster'?'M44 -50 Q103 -35 101 -82 Q91 -106 78 -87':'M42 -40 Q124 -10 132 -76','none',f,t==='monster'?14:8)+(t==='jerboa'?E(133,-79,12,10,cream):'');
 if(t==='otter')a+=P('M45 -49 Q128 -64 107 -123 Q139 -45 74 -8Z',f);
 if(t==='sheep')a+=[[-48,-155],[0,-167],[48,-153],[-52,-85],[0,-75],[51,-86]].map(([xx,yy])=>E(xx,yy,39,42,f)).join('');
 a+=E(-30,-10,30,17,detail==='boots'||detail==='shoes'?'#967557':t==='duck'?'#D6A35B':f)+E(30,-10,30,17,detail==='boots'||detail==='shoes'?'#967557':t==='duck'?'#D6A35B':f)+E(0,-106,62,92,f);
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
 if(['bear','mouse','jerboa','otter','monster'].includes(t))a+=E(0,-201,36,26,'#E4D5B7');
 if(['fox','fennec','chipmunk','squirrel'].includes(t))a+=P('M-59 -225 L-8 -204 L0 -214 L9 -204 L59 -225 Q43 -163 0 -166 Q-43 -163 -59 -225Z','#EBDFC5');
 if(t==='badger')a+=P('M-56 -246 Q-35 -269 -24 -259 L-13 -192 L-31 -181Z','#56615D')+P('M56 -246 Q35 -269 24 -259 L13 -192 L31 -181Z','#56615D');
 if(t==='mole')a+=E(-15,-210,46,31,f)+E(0,-200,20,13,'#D3A6A3');
 const sleeping=pose==='sleep';a+=sleeping?P('M-29 -226 Q-21 -220 -13 -226 M13 -226 Q21 -220 29 -226','none',ink,3):E(-23,-226,5,7,ink)+E(23,-226,5,7,ink);
 if(t==='duck')a+=P('M-31 -211 Q0 -224 35 -211 L41 -194 Q0 -179 -35 -195Z','#D5A05F')+P('M-11 -276 Q-27 -307 6 -283 Q30 -308 25 -279Z',f);
 else if(t!=='mole')a+=E(0,-204,8,5,t==='mouse'?'#CA9E98':'#756653');
 a+=P('M-10 -188 Q0 -180 11 -188','none','#7D7461',2);
 if(detail==='glasses')a+=E(-24,-226,20,18,'none','stroke="#827F70" stroke-width="3"')+E(24,-226,20,18,'none','stroke="#827F70" stroke-width="3"')+line(-4,-227,4,-227,'#827F70',3);
 if(kind==='scarf'||scarf)a+=R(-52,-179,104,23,scarf||cloth,9)+P('M29 -161 L52 -161 L60 -109 L35 -115Z',scarf||cloth);
 if(name==='鸭')a+=[-36,-14,8,30].map(xx=>R(xx,-178,8,21,'#EFE9D6',1)).join('');
 if(detail==='yellowHat')a+=R(-62,-277,124,14,'#DDC275',6)+P('M-43 -278 Q-46 -329 0 -329 Q46 -329 43 -278Z','#E6CD87');
 if(detail==='leafclip')a+=leaf(-48,-264,.34,'#DBBC72',-55);
 if(detail==='headcloth')a+=P('M-62 -231 Q-66 -292 0 -287 Q66 -292 62 -231 L49 -263 L-49 -263Z','#A5C4D1')+P('M-58 -248 L-89 -211 L-52 -218Z','#A5C4D1');
 const poses={stand:[[-12,67],[10,67]],hold:[[45,42],[-43,42]],reach:[[64,30],[58,24]],up:[[-35,-85],[36,-82]],point:[[-12,65],[87,-16]],think:[[45,-36],[12,65]],wave:[[-20,60],[37,-102]],sleep:[[32,37],[-31,37]],low:[[39,89],[58,74]],wide:[[-58,19],[58,19]]};
 const q=poses[pose]||poses.stand,af=t==='mole'?'#CBA7A0':f;a+=arm(-43,-154,...q[0],af,t==='mole'?26:22)+arm(43,-154,...q[1],af,t==='mole'?26:22)+extras;
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function sitKid(name,x,y,s=1,pose='hold',extras=''){
 const f=C[name][1],id=`seat-${x}-${y}-${Math.round(s*100)}`;
 return `<defs><clipPath id="${id}"><rect x="${x-210*s}" y="${y-500*s}" width="${420*s}" height="${512*s}"/></clipPath></defs>`+G(x,y,s,arm(-27,0,-8,55,f,23)+arm(27,0,8,55,f,23)+E(-35,60,25,13,f)+E(35,60,25,13,f))+`<g clip-path="url(#${id})">${kid(name,x,y+80*s,s,pose,false,extras)}</g>`;
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
function marketScene(i,cover){
 const root=()=>outdoor('gold')+P('M380 0 L602 0 Q565 415 717 626 Q607 661 495 590 Q380 674 252 631 Q423 493 380 0Z','#B39A72')+P('M478 168 Q451 407 427 544 M530 279 Q498 501 583 586','none','#957E60',9);
 const tiny=(x,y,s=1,flag=false)=>G(x,y,s,R(-62,-28,124,15,'#B99B72',4)+R(-51,-13,11,37,'#968465',3)+R(39,-13,11,37,'#968465',3)+snailGran(97,17,.55)+[-36,0,36].map(xx=>spiral(xx,-34,.27)).join('')+(flag?line(-64,-18,-64,-140,'#94815F',6)+snailSign(-64,-153,.5,true):''));
 if(cover)return root()+kid('芽芽',365,746,1.3,'low')+tiny(650,708,1.35,true)+insect(807,735,1.2)+insect(853,741,1,true)+snailSign(509,496,.74,true);
 return [
 ()=>outdoor('gold')+stall(279,553,.9,'#B6BC8F',E(-47,-43,24,24,'#C48A6C')+E(20,-40,25,24,'#C78F6E'))+stall(738,551,.9,'#A7BCC1',R(-62,-66,77,35,'#BC9C6D',14)+R(-75,-35,104,11,'#BC9C6D',5))+ginkgo(280,319,.6,E(0,-20,24,22,'#C48A6C'))+ginkgo(730,319,.6,R(-28,-38,56,28,'#AA8F69',10))+kid('芽芽',468,753,.87,'up')+ginkgo(419,160,.5),
 ()=>outdoor('gold')+kid('兔妈',746,748,1.38,'low',true)+kid('芽芽',369,749,1.32,'hold')+snailSign(370,595,.67)+basket(474,716,.42,false),
 ()=>outdoor('gold')+kid('熊摊主',715,748,.84,'hold')+stall(698,666,1,'#B6C29D',[-80,-20,40,98].map((x,j)=>line(x,-25,x,-95-j%2*30,'#A7906B',5)+E(x,-112-j%2*30,23,24,['#D7B177','#C5959B','#A5B6A0'][j%3])+spiral(x,-113-j%2*30,.51)).join(''))+kid('芽芽',302,752,1.27,'up')+snailSign(423,444,.64)+ginkgo(695,415,.75,spiral(0,-21,.75)+line(0,0,0,26,'#856C4D',5)),
 ()=>outdoor('gold')+stall(696,520,1,'#C0B4CA',[-90,-24,47,106].map((x,j)=>E(x,-48,31,29,['#CCAD8B','#AABBA2','#BB9EAC'][j%3])+spiral(x,-48,.63)).join(''))+kid('羊摊主',697,457,.56,'stand')+kid('芽芽',451,750,1.04,'stand')+snailSign(448,635,.51)+kid('兔妈',206,780,1.55,'stand')+kid('熊摊主',801,795,1.55,'stand')+basket(680,679,.65,false),
 ()=>root()+G(405,729,1,kid('芽芽',0,0,1.3,'hold'),8)+snailSign(462,458,1.0,true)+P('M581 768 Q743 721 631 675 Q528 656 737 607','none','#EAECE0',7)+E(611,737,48,11,'#A6B7A2','opacity=".5"'),
 ()=>root()+kid('兔妈',198,687,.87,'low')+G(426,738,1,kid('芽芽',0,0,1.08,'low'),24)+tiny(705,718,1.23)+P('M391 773 Q593 742 653 757','none','#E5E8D7',4),
 ()=>root()+kid('芽芽',329,750,1.22,'reach')+tiny(651,715,1.2,true)+insect(817,744,1.12)+insect(871,728,1.0,true)+line(483,590,574,543,'#B8A27C',4),
 ()=>outdoor('gold')+tree(228,492,.8,'#CCB570')+tiny(287,505,.55,true)+[185,213,245].map(x=>insect(x,522,.5)).join('')+kid('兔妈',739,750,1.33,'low',true)+G(421,748,1,kid('芽芽',0,0,1.13,'low'),15)+grass(512,739,1.3)+insect(574,756,1,true)+E(284,763,48,20,'#A3A991'),
 ][i]();
}
function openBook(x,y,s=1){return G(x,y,s,P('M0 7 Q-28 -12 -55 -3 L-55 -60 Q-26 -71 0 -51 Q26 -71 55 -60 L55 -3 Q27 -12 0 7Z','#DFDCC0','#96ABA2',3)+line(0,-51,0,6,'#96ABA2',3)+[-45,-29,-13].map(xx=>line(xx,-45,xx,-17,'#B0BDAA',2)).join(''));}
function captain(x,y,s=1,pose=false){return G(x,y,s,line(-20,-73,-24,0,'#C5A46B',9)+line(20,-73,25,0,'#C5A46B',9)+E(0,-117,46,64,'#ECE9D9')+P('M-10 -149 Q18 -187 1 -227','none','#ECE9D9',28)+E(0,-236,39,39,'#F0ECDD')+P('M28 -242 L102 -225 L28 -217Z','#D2B071')+E(12,-244,4,5,ink)+R(-44,-272,87,14,'#526F87',5)+P('M-32 -273 L-34 -303 Q0 -326 35 -303 L31 -273Z','#617F98')+E(0,-290,7,8,'#D5BC78')+arm(-30,-140,pose?-38:-8,pose?-43:47,'#E5E4D3',23)+arm(30,-140,39,24,'#E5E4D3',23)+bell(74,-96,.4));}
function bell(x,y,s=1){return G(x,y,s,P('M-17 4 Q-15 -27 0 -28 Q15 -27 17 4Z','#D2B479')+E(0,7,22,6,'#B39C6F')+E(0,13,5,5,'#A58C64')+line(0,-28,0,-36,'#A58C64',4));}
function boatScene(i,cover){
 const base=()=>R(0,0,1000,800,'#CADDD9',0)+cloud(199,183,.9,'#EDF0E0')+cloud(811,127,.7,'#E5EBDD')+R(0,523,1000,277,'#9BBFC0',0)+[559,631,728].map((y,j)=>P(`M15 ${y} Q259 ${y-27} 491 ${y} T990 ${y}`,'none','#D2DDD0',6)).join('')+P('M75 641 L941 641 L851 747 L186 747Z','#AC8B65')+P('M91 620 L932 620 L945 648 L77 648Z','#C6A47C')+R(73,593,870,27,'#DBBD91',6);
 const sail=(half=false,wind=false)=>R(525,112,14,487,'#A58B66',4)+P(half?'M538 130 Q652 220 788 283 L540 287Z':wind?'M538 130 Q812 275 827 532 L540 538Z':'M538 130 L822 532 L540 538Z','#F2EFDC')+openBook(half?647:675,half?261:412,half?.46:.8)+line(537,131,822,535,'#B4A389',3)+(half?[0,1,2].map(j=>P(`M541 ${287+j*11} Q662 ${298+j*11} 785 ${283+j*11}`,'none','#DFDCCB',10)).join(''):'');
 const guests=()=>kid('兔友',359,586,.54,'stand')+kid('猪友',450,601,.57,'stand')+kid('羊友',548,613,.56,'stand');
 if(cover)return base()+sail(true)+captain(718,621,1.0,true)+kid('鸭',381,723,1.42,'wave')+book(306,624,.7)+bell(486,303,1.0);
 return [
 ()=>base()+sail()+captain(217,602,.8)+[0,1,2].map(j=>book(320+j*59,605-j%2*21,.35)).join('')+kid('鸭',854,669,.76,'wave',true),
 ()=>base()+captain(215,604,.8)+guests()+kid('鸭',794,678,.92,'stand')+sail(),
 ()=>base()+captain(215,604,.8,true)+guests()+sail(false,true)+kid('鸭',806,713,1.07,'think',true)+P('M870 272 Q906 319 870 363 M899 289 Q931 332 899 375','none','#94B4B9',5),
 ()=>base()+captain(215,604,.8)+guests()+sail(false,true)+kid('鸭',842,720,1.08,'up',true)+P('M811 533 Q853 554 883 517','none','#DFE1CF',10),
 ()=>base()+sail()+captain(215,604,.8)+kid('兔友',413,656,.81,'think',true)+kid('鸭',770,718,1.07,'wide')+kid('猪友',544,634,.63,'stand'),
 ()=>base()+sail()+kid('羊友',774,671,.74,'stand')+kid('猪友',630,659,.66,'stand')+captain(223,650,1.03)+kid('鸭',423,696,.99,'point')+book(293,552,.48),
 ()=>base()+sail(true)+captain(703,620,.84,true)+kid('兔友',480,690,.89,'point')+kid('鸭',297,724,1.17,'wave')+stool(301,663,.75)+book(739,550,.43),
 ()=>base()+sail(true)+captain(733,640,.96,true)+kid('猪友',540,688,.69,'stand')+kid('羊友',419,695,.65,'stand')+kid('兔友',234,716,.82,'hold')+kid('鸭',356,741,1.13,'up')+book(691,526,.62)+E(843,197,38,38,'#E5D9A7'),
 ][i]();
}
function chrysanthemum(x,y,s=1){return G(x,y,s,line(0,0,0,-51,'#87A375',5)+Array.from({length:10},(_,j)=>G(0,-56,1,E(0,-17,6,20,'#DCC16B'),j*36)).join('')+E(0,-56,11,11,'#B99B54'))}
function mazeScene(i,cover){
 const wall=(x,y,s=1)=>G(x,y,s,P('M-175 0 L-176 -118 Q-120 -145 -75 -123 Q-30 -164 22 -131 Q81 -157 118 -121 Q182 -139 176 -2Z','#B5AA72')+Array.from({length:11},(_,j)=>leaf(-145+j*29,-10-(j%3)*28,.55,['#CDB577','#C0A06C','#D6C48A'][j%3],j%2?50:-40)).join(''));
 const base=()=>outdoor('gold')+wall(231,509,1.2)+wall(788,507,1.2)+P('M330 800 L450 482 L557 482 L695 800Z','#DDC994');
 const berry=(x,y)=>E(x,y,8,9,'#BC7A66');
 const quail=(x,y,s=1)=>G(x,y,s,E(0,-53,44,48,'#9A8C70')+E(-13,-105,31,31,'#A59678')+P('M-40 -107 L-62 -96 L-40 -91Z','#C7AE79')+E(-23,-112,4,5,ink)+P('M-18 -137 Q-39 -165 -43 -146','none','#7F775F',7)+[-23,0,23].map(xx=>E(xx,-57,5,7,'#E6D9B8')).join('')+line(-17,-16,-20,0,'#A6916B',5)+line(16,-16,18,0,'#A6916B',5));
 if(cover)return base()+kid('麦麦',386,738,1.44,'hold')+bag(395,583,.65)+quail(755,733,1.35)+[649,714,799].map(x=>chrysanthemum(x,619,.9)).join('')+cone(561,731,.77);
 return [
 ()=>base()+kid('麦麦',396,737,1.2,'hold')+bag(395,603,.9)+[375,394,415].map(x=>berry(x,579)).join('')+leaf(517,708,.7,'#BC7E64',75)+leaf(557,604,.5,'#BC7E64',30),
 ()=>base()+kid('麦麦',471,748,1.26,'think')+[176,351,668,852].map((x,j)=>leaf(x,256+j%2*74,.6,'#D5BB75',j*50-60)).join('')+P('M122 245 Q298 176 410 243 M701 326 Q804 291 934 319','none','#C0AD80',4),
 ()=>base()+wall(503,552,.66)+P('M458 469 L526 429 L565 473','none','#8B7E5C',13)+kid('麦麦',431,749,1.23,'point')+leaf(553,712,.75,'#BE8569',80),
 ()=>base()+wall(500,564,.8)+kid('麦麦',449,751,1.22,'up')+[[-22,-268],[35,-118],[83,-146]].map(([x,y],j)=>leaf(449+x*1.2,751+y*1.2,.32,'#D9C282',j*54)).join(''),
 ()=>base()+wall(382,719,.9)+kid('麦麦',442,710,1.04,'think')+P('M620 523 Q744 482 703 437 M641 550 Q790 503 772 458','none','#B6C58D',5)+chrysanthemum(843,510,.45),
 ()=>base()+kid('麦麦',402,739,1.17,'point')+E(622,684,79,23,'#A9C0BA')+cone(744,725,.72)+P('M613 541 Q701 488 803 503','none','#C5C99C',6)+[779,833,877].map(x=>chrysanthemum(x,526,.75)).join(''),
 ()=>outdoor('gold')+[572,631,692,754,816].map((x,j)=>chrysanthemum(x,560+j%2*35,1)).join('')+kid('麦麦',359,743,1.28,'hold')+quail(727,743,1.48)+plate(530,718,.75)+[514,530,545].map(x=>berry(x,714)).join('')+cone(588,751,.76),
 ()=>outdoor('gold')+kid('麦麦',342,739,1.15,'low')+quail(711,743,1.42)+cone(545,749,.8)+P('M470 757 Q488 739 505 754','none','#A58D63',4)+plate(449,740,.5)+[622,682,751].map(x=>chrysanthemum(x,566,.85)).join('')+leaf(804,339,.52,'#D3BA77',58),
 ][i]();
}
function parrot(x,y,s=1){return G(x,y,s,line(-24,-20,-28,0,'#A88F5F',8)+line(25,-20,29,0,'#A88F5F',8)+E(0,-93,56,87,'#87AB7F')+P('M-46 -132 L46 -132 L53 -35 L-53 -35Z','#8FB8C7')+E(0,-177,51,51,'#C78F75')+P('M-27 -218 L-28 -251 L-8 -229 L5 -260 L14 -229 L35 -244 L29 -214Z','#DCC477')+P('M29 -177 Q76 -194 67 -145 Q50 -149 36 -160Z','#D7BE78')+E(16,-190,5,6,ink)+arm(-41,-118,-18,49,'#88A67A',23)+arm(41,-118,34,7,'#88A67A',23));}
function fruit(x,y,s=1,type='cloud'){const c=type==='cloud'?'#ACC9D3':type==='thunder'?'#A59BC0':type==='sun'?'#E0BC71':'#E7D497';return G(x,y,s,type==='star'?star(0,0,2.2,c):E(0,0,19,18,c)+(type==='sun'?Array.from({length:8},(_,j)=>G(0,0,1,line(0,-22,0,-28,c,3),j*45)).join(''):type==='thunder'?P('M1 -12 L-6 1 L3 1 L-2 12','none','#DDD6E8',3):leaf(0,-13,.18,'#93B38B',35)));}
function cloudMarketScene(i,cover){
 const base=()=>R(0,0,1000,800,'#D0E0DF',0)+cloud(213,231,1.3,'#EBEEE0')+cloud(835,211,1.1,'#EEF0E4')+cloud(460,713,3.6,'#E4E8D9');
 const counter=(n=0,type='cloud')=>parrot(785,714,.73)+stall(713,683,1.06,'#A9BCA7',[-128,-80,-32,16,64].map((x,j)=>fruit(x,-51,.7,j<2?'cloud':j===2?'thunder':j===3?'sun':'star')).join(''))+(n?plate(595,653,.83)+Array.from({length:n},(_,j)=>fruit(567+j*22,648,.55,type)).join(''):'');
 const balloon=(x,y,s=1)=>G(x,y,s,E(0,-206,105,130,'#C2B2CB')+P('M-66 -102 L-37 -16 M66 -102 L37 -16','none','#A59A79',4)+basket(0,0,.95,false));
 if(cover)return base()+counter(3)+kid('鼹鼠',344,750,1.38,'hold')+fruit(344,591,1.45)+balloon(200,308,.43);
 return [
 ()=>base()+balloon(326,677,1.52)+kid('鼹鼠',326,667,.75,'wave')+basket(326,699,1.2,false)+stall(763,573,.72,'#A8BAC0',fruit(0,-53,1.15))+parrot(762,474,.43),
 ()=>base()+counter(3)+kid('鼹鼠',325,752,1.27,'hold')+bag(318,606,.65)+ginkgo(317,559,.24),
 ()=>base()+counter()+stall(321,701,1.1,'#C8B2C7',[-50,27].map(x=>line(x,-24,x,-90,'#A99373',4)+cloud(x,-100,.24,'#F3E5D7')).join(''))+kid('鼹鼠',228,747,1.07,'think'),
 ()=>base()+counter()+kid('鼹鼠',330,753,1.37,'hold')+fruit(330,507,.94,'thunder')+star(413,494,.38,'#B4A0BD')+star(282,471,.4,'#B4A0BD'),
 ()=>base()+counter(4,'sun')+kid('熊摊主',385,731,1.24,'point')+kid('鼹鼠',172,751,.83,'stand')+ginkgo(410,586,.25),
 ()=>base()+counter(1,'star')+kid('兔友',396,735,1.1,'up')+kid('鼹鼠',175,751,.86,'think'),
 ()=>base()+counter(3)+kid('鼹鼠',329,751,1.26,'reach')+[575,596,617].map(x=>ginkgo(x,652,.23)).join('')+bag(283,685,.62),
 ()=>interior()+kid('鼹鼠',338,748,1.18,'hold')+kid('奶奶鼹',770,743,1.35,'reach',true)+desk(552,658,1.1)+plate(555,631,.94)+[526,556,586].map(x=>fruit(x,627,.76)).join('')+flower(534,533,.9),
 ][i]();
}
function dates(x,y,s=1,half=false){return G(x,y,s,half?P('M-14 -26 Q19 -27 15 18 Q-8 31 -14 -26Z','#B88F65')+E(2,-3,5,12,'#C9A775'):E(0,0,16,26,'#AB7B58')+line(-3,-19,-4,17,'#C2966C',3));}
function leafBoat(x,y,s=1,state=0,showDate=true){return G(x,y,s,E(0,9,111,18,'#81B3B3','opacity=".5"')+P(state===0?'M-94 0 Q0 -49 96 -3 Q0 40 -94 0Z':'M-94 -12 Q0 35 96 -12 L68 31 Q0 55 -71 31Z','#A0B88B')+P('M-72 1 Q0 22 75 1','none','#D0D6A0',4)+(state>0?P('M-70 -1 Q0 31 70 -1','none','#87966B',4):'')+(state>=2?line(state===3?54:0,-8,state===3?54:0,-120,'#958362',6)+P(state===3?'M57 -120 Q126 -102 122 -45 L58 -45Z':'M3 -120 Q72 -101 68 -45 L4 -45Z','#CBD6A4'):'')+(state!==-1&&showDate?dates(state===2?-44:0,state===0?-8:4,.74):''));}
function oasisScene(i,cover){
 const base=()=>R(0,0,1000,800,'#DDDCC4',0)+E(810,132,62,62,'#EDDBA7')+P('M0 442 Q246 295 469 435 Q735 298 1000 439 L1000 800 L0 800Z','#D8C392')+E(554,587,378,145,'#A8C4B9')+P('M203 544 Q542 400 906 569 Q709 667 496 629 Q280 621 203 544Z','#98BBBB')+P('M0 671 Q235 559 453 692 Q790 625 1000 702 L1000 800 L0 800Z','#E2CAA0')+P('M166 632 Q187 369 164 252','none','#AB9167',25)+[-70,-34,0,34,70].map(r=>leaf(164,255,1.5,'#9EAE7D',r)).join('');
 if(cover)return base()+kid('阿朵',355,751,1.28,'wave')+leafBoat(634,573,1.4,3)+kid('豆豆',835,678,.7,'wave');
 return [
 ()=>base()+kid('阿朵',336,750,1.27,'hold')+dates(338,606,1.18)+kid('豆豆',845,496,.47,'wave')+bag(440,722,.6),
 ()=>base()+kid('阿朵',329,751,1.3,'think')+dates(321,602,.9)+leaf(538,690,.95,'#A8BB87',75)+kid('豆豆',839,498,.42,'stand'),
 ()=>base()+kid('阿朵',323,753,1.21,'reach')+line(431,599,653,574,'#AC9C6E',7)+leafBoat(660,582,.82,-1)+dates(615,605,.76)+E(616,607,25,7,'none','stroke="#D5DFCA" stroke-width="3"'),
 ()=>base()+kid('阿朵',325,750,1.2,'low')+leafBoat(594,671,1.22,1)+P('M530 682 Q502 728 467 694','none','#8B996D',4)+grass(714,726,.7),
 ()=>base()+kid('阿朵',360,750,1.27,'wide')+leafBoat(613,593,1.0,1)+P('M530 312 Q441 299 489 348 M532 354 Q441 340 483 388','none','#B8AC83',5)+leaf(704,708,.56,'#B2C291',78),
 ()=>base()+kid('阿朵',319,750,1.19,'think')+leafBoat(620,590,1.3,2)+P('M752 626 Q768 687 673 692 Q598 692 584 653','none','#D5DECB',5),
 ()=>base()+kid('阿朵',291,747,1.13,'point')+leafBoat(635,553,1.08,3)+kid('豆豆',826,494,.5,'up')+P('M463 605 Q518 600 561 578 M452 631 Q498 628 537 609','none','#D4E0CE',5),
 ()=>base()+kid('阿朵',343,753,1.18,'hold')+kid('豆豆',735,751,1.07,'hold',true)+dates(343,620,.8,true)+dates(735,632,.8,true)+leafBoat(559,583,.7,3,false)+E(565,737,23,8,'#B4966C')+E(565,733,5,10,'#907454'),
 ][i]();
}
function softMoon(x,y,s=1){return G(x,y,s,P('M18 -34 Q-34 -20 -25 20 Q3 60 37 20 Q-2 31 -2 -4 Q-1 -24 18 -34Z','#F1E4BC','#D7C99F',3)+P('M-14 -15 Q-34 21 -3 34','none','#DED0AA',2));}
function cap(x,y,s=1,blue=true,mode='moon'){return G(x,y,s,P('M-64 3 Q-59 -60 2 -68 Q52 -60 64 3Z',blue?'#8BAFC2':'#DFBF77')+R(-71,0,142,19,blue?'#719AB4':'#C8A45F',7)+(mode==='moon'?softMoon(4,-74,.62):mode==='one'?bell(1,-79,.58):mode==='three'?[-35,0,35].map((xx,j)=>bell(xx,-74+(j===1?-13:0),.43)).join(''):''));}
function hatScene(i,cover){
 const dressed=(n,x,y,s,pose,mode)=>kid(n,x,y,s,pose,false,cap(0,-275,1,n==='茸茸',mode));
 if(cover)return outdoor()+dressed('茸茸',340,749,1.4,'wave','moon')+dressed('卷卷',734,746,1.18,'up','three')+softMoon(504,228,1.4);
 return [
 ()=>interior()+kid('茸茸',271,751,1.16,'point')+kid('卷卷',798,744,1.11,'hold')+desk(539,654,1.2)+cap(450,602,.56,true,'none')+cap(626,602,.56,false,'none')+softMoon(548,613,.56)+bell(500,649,.42)+bell(590,646,.42),
 ()=>interior()+dressed('茸茸',344,749,1.4,'up','one')+dressed('卷卷',747,747,1.32,'wave','three')+P('M674 318 Q653 341 669 359 M799 329 Q821 348 805 371','none','#B6A77F',4),
 ()=>outdoor()+dressed('茸茸',363,748,1.36,'think','one')+dressed('卷卷',765,726,1.06,'wave','three')+grass(498,740,1.4)+flower(572,723,1.0),
 ()=>interior()+kid('茸茸',377,750,1.42,'hold')+cap(558,626,.88,true,'none')+bell(383,581,.65)+desk(687,668,.85)+dressed('卷卷',846,748,.95,'stand','three'),
 ()=>interior()+kid('茸茸',357,751,1.41,'hold')+softMoon(356,587,1.26)+desk(675,660,1.1)+cap(672,610,.8,true,'none')+bell(601,641,.48)+dressed('卷卷',856,748,.94,'stand','three'),
 ()=>interior()+dressed('茸茸',351,750,1.43,'up','moon')+dressed('卷卷',749,748,1.34,'point','three')+desk(532,680,.5)+bell(533,654,.49),
 ()=>outdoor()+P('M395 800 Q557 536 622 449 L740 457 Q670 579 588 800Z','#D4CAA5')+dressed('茸茸',294,749,1.26,'low','moon')+dressed('卷卷',785,732,1.07,'wave','three')+grass(419,740,1.2)+flower(479,714,1.15),
 ()=>interior(true)+line(219,176,506,176,'#A18F71',11)+line(287,175,287,213,'#A18F71',8)+line(433,175,433,213,'#A18F71',8)+cap(287,275,.85,true,'moon')+cap(433,275,.85,false,'three')+kid('茸茸',346,759,.86,'sleep')+kid('卷卷',719,759,.88,'sleep')+R(208,649,255,119,'#B7CAB5',24)+R(587,649,257,119,'#C8BAD0',24),
 ][i]();
}
function hanky(x,y,s=1,state='flat'){let a='';if(state==='bundle')a=P('M-62 -10 Q-80 73 0 82 Q80 73 62 -10 L13 -31 L-13 -31Z','#E6EAD8')+P('M-4 -26 Q-51 -89 -64 -52 Q-55 -22 -4 -26 Q47 -93 63 -52 Q56 -21 -4 -26','none','#99BAC7',17)+[-40,-10,20,50].map(xx=>line(xx,-9,xx,64,'#A4C3CC',10)).join('')+[-2,24,51].map(yy=>line(-54,yy,54,yy,'#A4C3CC',10)).join('');else a=R(-85,-55,170,110,'#F1EFDD',4)+[-62,-28,6,40,74].map(xx=>R(xx,-49,15,98,'#A5C3CF',0)).join('')+[-37,-3,31].map(yy=>R(-78,yy,156,14,'#A5C3CF',0)).join('')+R(-85,-55,170,110,'none',4,'stroke="#F5EFDE" stroke-width="7"')+(state==='knots'?P('M-67 -44 Q0 -7 67 44 M67 -44 Q0 -7 -67 44','none','#83A9BD',13)+E(0,0,16,11,'#99BAC7'):'');return G(x,y,s,a);}
function wrapper(x,y,s=1,c='#D1A7AD'){return G(x,y,s,R(-18,-11,36,22,c,4)+P('M-18 -8 L-31 -16 L-30 17 L-17 8 M18 -8 L30 -16 L30 17 L17 8Z',c)+line(-7,-8,8,7,'#E9DBC2',3));}
function handkerchiefScene(i,cover){
 const garden=()=>outdoor()+[201,743,841].map((x,j)=>tree(x,526,.8,j===0?'#B7C09A':'#AAB88D')+[0,1,2,3,4].map(k=>flower(x-60+k*27,373+k%2*28,.35,'#E4CE97')).join('')).join('')+P('M0 752 Q397 631 1000 743','none','#D4C7A4',75);
 if(cover)return garden()+kid('米绒',406,748,1.48,'hold')+hanky(407,581,1.22,'bundle')+wrapper(757,705,.7)+flower(736,569,.9,'#E2C992');
 return [
 ()=>interior()+R(694,503,208,143,'#AB9573',9)+P('M694 506 L737 460 L943 460 L901 505Z','#C2AB84')+kid('米绒',386,749,1.39,'hold')+hanky(381,578,1.0),
 ()=>garden()+kid('米绒',341,748,1.24,'low')+hanky(384,537,.52)+[[517,703],[687,651],[756,744],[855,619]].map(([x,y],j)=>wrapper(x,y,.8,['#CFA8AD','#A8BDAD','#D8BF88'][j%3])).join(''),
 ()=>garden()+kid('米绒',399,749,1.43,'hold')+wrapper(397,595,.9)+wrapper(438,670,.72)+wrapper(482,742,.8)+hanky(454,507,.47),
 ()=>garden()+kid('米绒',335,750,1.22,'low')+hanky(622,690,1.47)+wrapper(583,675,.74)+wrapper(659,704,.7)+wrapper(799,704,.8)+P('M743 526 Q817 512 888 552','none','#AAB9A0',4),
 ()=>garden()+kid('米绒',378,750,1.31,'low')+hanky(598,690,1.4,'knots')+wrapper(587,686,.52)+P('M519 666 Q548 621 576 667 M626 667 Q651 623 677 663','none','#A4C3CF',11),
 ()=>garden()+kid('米绒',413,750,1.47,'hold')+hanky(413,581,1.19,'bundle')+bench(770,630,.7)+flower(695,457,.8,'#E4CE97'),
 ()=>interior()+kid('米绒',358,751,1.22,'low')+R(520,596,99,131,'#91A49A',13)+R(510,585,119,20,'#7C9388',8)+wrapper(544,590,.5)+line(667,174,913,174,'#9B9579',5)+hanky(782,245,.95)+R(726,166,10,26,'#B69D73',3)+R(828,166,10,26,'#B69D73',3)+E(706,713,71,24,'#B6C9C8'),
 ()=>garden()+bench(525,677,1.5)+hanky(421,642,1.03)+sitKid('米绒',426,652,.91,'hold')+flower(794,554,1.1,'#E6CD92')+flower(842,583,.9,'#E6CD92'),
 ][i]();
}
function cloudSheep(x,y,s=1,sleep=false){return G(x,y,s,[-40,0,40].map(xx=>E(xx,-61,44,42,'#ECECDF')).join('')+E(0,-93,43,36,'#F2F0E2')+E(-47,-111,29,15,'#E8EBDD')+E(47,-111,29,15,'#E8EBDD')+E(-28,-20,11,19,'#D8DED0')+E(28,-20,11,19,'#D8DED0')+(sleep?P('M-21 -96 Q-15 -90 -9 -96 M9 -96 Q15 -90 21 -96','none',ink,3):E(-15,-98,4,5,ink)+E(15,-98,4,5,ink))+P('M-7 -78 Q0 -73 7 -78','none',ink,2)+P('M-40 -116 L-66 -134 L-67 -103 L-40 -116 L-20 -133 L-18 -103Z','#B7A4CA')+E(-41,-116,7,7,'#A68EB8'));}
function nest(x,y,s=1,state=0){return G(x,y,s,E(0,12,170,54,'#AF986D')+E(0,-9,165,49,'#CAB187')+(state===0?[-95,-40,10,66,109].map((xx,j)=>cone(xx,-18-j%2*30,.82)).join(''):state===1?P('M-151 -1 L-101 -60 L-53 -33 L-14 -79 L30 -41 L90 -67 L151 0 Q0 47 -151 -1Z','#A4BED0'):state===2?P('M-151 -1 L-101 -60 L-53 -33 L-14 -79 L30 -41 L90 -67 L151 0 Q0 47 -151 -1Z','#A4BED0')+[-83,-30,32,89].map(xx=>grass(xx,-31,.46,'#D5CE9C')).join(''):E(0,-9,154,41,'#D2CF9F')+E(0,-16,143,34,'#AEC7D2')));}
function sheepBedScene(i,cover){
 const room=()=>interior(true,'#D3D6BC')+R(65,378,214,101,'#B7B291',7)+[-30,0,30].map((xx,j)=>P(`M${100+xx} 403 L${140+xx} 466 M${126+xx} 393 L${180+xx} 461`,'none','#D3CB99',6)).join('');
 const toybox=(x,y,s=1,closed=false)=>G(x,y,s,R(-70,-55,140,75,'#B8A17D',8)+(closed?R(-77,-65,154,14,'#D0B78D',5):P('M-70 -55 L-53 -91 L88 -91 L70 -55Z','#C8AF84')+cone(-30,-51,.55)+cone(22,-54,.55)));
 if(cover)return room()+kid('阿蒲',324,750,1.35,'low')+nest(670,698,1.35,3)+cloudSheep(670,667,1.2,true)+toybox(476,751,.65,true);
 return [
 ()=>room()+kid('阿蒲',327,751,1.21,'hold')+cone(325,614,.85)+nest(725,690,1.24,0)+cone(486,731,.85)+cone(490,682,.74)+cone(489,635,.6),
 ()=>room()+kid('阿蒲',355,751,1.21,'low')+nest(676,687,1.32,1)+cloudSheep(857,474,.9),
 ()=>room()+kid('阿蒲',319,752,1.18,'think')+nest(673,692,1.39,1)+G(670,626,1,cloudSheep(0,0,1.12),17),
 ()=>room()+kid('阿蒲',316,751,1.18,'reach')+nest(673,692,1.39,2)+cloudSheep(852,509,.86)+grass(454,640,.73,'#D7D09F'),
 ()=>room()+kid('阿蒲',357,751,1.34,'wide')+nest(672,701,1.22,2)+stool(793,577,.85)+cloudSheep(793,576,.94),
 ()=>room()+kid('阿蒲',351,750,1.28,'low')+nest(690,697,1.33,3)+toybox(512,750,.8)+P('M386 583 L487 700','none','#A68C63',8)+P('M464 688 L506 669 L527 709 L483 732Z','#C6BE8D')+stool(832,493,.7)+cloudSheep(831,493,.76),
 ()=>room()+kid('阿蒲',339,750,1.27,'low')+nest(696,699,1.35,3)+cloudSheep(696,668,1.11,true)+P('M610 621 Q704 643 784 620 L812 676 Q700 720 590 675Z','#C5D4BD')+toybox(476,751,.64,true),
 ()=>room()+kid('阿蒲',331,751,1.15,'think')+nest(693,697,1.34,3)+cloudSheep(693,665,1.07,true)+P('M610 624 Q704 646 784 624 L812 678 Q700 718 590 675Z','#C5D4BD')+toybox(457,751,.73,true)+E(297,519,6,9,'#A2B6AC'),
 ][i]();
}
function telescope(x=626,y=620,s=1){return G(x,y,s,line(0,-88,-82,115,'#8D9288',11)+line(0,-88,80,115,'#8D9288',11)+line(0,-88,0,125,'#A6AAA0',10)+line(0,-88,0,-206,'#9DAEAC',12)+G(0,-206,1,R(-131,-24,266,48,'#B9C5C6',13)+R(-151,-14,29,28,'#81949B',6)+R(121,-35,29,70,'#9BAFB5',9)+E(143,0,10,27,'#728C9A')+line(-75,-16,104,-16,'#E6E8DA',6),-23)+E(0,-88,19,19,'#A6B6B6'));}
function moonDrawing(x,y,s=1,done=false){return paper(x,y,s,done?E(-17,-5,51,51,'#DAD6BE')+E(-37,-22,15,15,'#B8B8A4')+E(-4,14,19,17,'#B6B9A8')+E(8,-30,10,9,'#BDC0AA')+P('M45 40 L76 40 L76 54 M46 40 L46 53','none','#AC8E69',4)+P('M56 11 Q92 5 88 -29','none','#B8A07B',8):'');}
function tenCountScene(i,cover){
 const obs=()=>interior(true,'#D3D3BD')+R(591,45,361,455,'#82968F',170)+R(608,61,327,422,'#546F80',155)+E(785,166,60,60,'#E9DFB9')+E(768,158,13,15,'#CEC9AE')+E(810,180,15,13,'#D5CFB3')+[670,874,708,840].map((x,j)=>star(x,111+j*72,.45,'#E7DAB2')).join('');
 if(cover)return obs()+stool(454,672,1.0)+kid('米米',454,672,.96,'hold')+telescope(632,616,1.12)+kid('蓬蓬',815,748,1.18,'wave')+moonDrawing(540,711,.52,true);
 return [
 ()=>obs()+telescope()+kid('蓬蓬',381,751,1.17,'up')+kid('米米',220,751,.84,'hold')+moonDrawing(219,657,.43),
 ()=>obs()+kid('蓬蓬',459,745,1.20,'hold')+telescope()+kid('米米',837,751,.96,'up')+desk(236,691,.58)+R(224,652,67,47,'#B9786B',4),
 ()=>obs()+stool(463,690,.95)+kid('米米',463,690,.96,'low')+telescope()+kid('蓬蓬',808,748,1.19,'up')+P('M369 677 L341 703','none','#C8B89A',5),
 ()=>obs()+kid('米米',273,750,1.10,'hold')+moonDrawing(272,624,.72)+kid('蓬蓬',838,748,1.21,'low')+stool(719,683,.93)+telescope(),
 ()=>obs()+kid('米米',319,749,1.11,'point')+stool(458,672,.9)+kid('蓬蓬',782,749,1.29,'think')+telescope(651,537,.68)+R(221,689,68,44,'#B77C71',4),
 ()=>obs()+stool(463,690,.95)+kid('米米',463,690,.96,'hold')+telescope()+kid('蓬蓬',842,747,1.18,'hold')+moonDrawing(831,623,.43),
 ()=>obs()+kid('蓬蓬',459,745,1.2,'hold')+telescope()+kid('米米',821,750,1.10,'hold')+moonDrawing(821,624,.85,true)+line(728,613,768,598,'#9DAFAF',6)+stool(251,681,.82),
 ()=>interior(true)+bench(511,660,1.8)+sitKid('鼠奶奶',663,642,1.09,'hold')+sitKid('米米',408,652,.90,'hold')+moonDrawing(545,615,1.03,true)+E(367,685,62,15,'#CAC8AB'),
 ][i]();
}
C.栗蓝=['bear','#A87D57','#86AFC4','vest'];C.栗黄=['bear','#A87D57','#DBBD71','coat'];
function bluePocket(x,y,s=1){return G(x,y,s,P('M-29 -23 L29 -23 L29 5 Q27 35 0 35 Q-27 35 -29 5Z','#739FB9')+P('M-24 -18 L24 -18 L24 4 Q23 27 0 29 Q-23 27 -24 4Z','none','#B0CDDA',2));}
function coat(x,y,s=1,yellow=false,pocket=true){return G(x,y,s,P('M-51 -90 L-93 -33 L-67 -10 L-42 -45 L-45 79 L47 79 L43 -45 L67 -10 L93 -33 L52 -90 L0 -70Z',yellow?'#DCC076':'#8AB1C6')+line(0,-69,0,76,yellow?'#C7A967':'#769BAF',3)+[-35,0,35].map(yy=>E(8,yy,4,4,'#E9D5A8')).join('')+(pocket?bluePocket(23,17,.65):''));}
function chestnut(x,y,s=1){return G(x,y,s,P('M0 -17 Q28 -10 20 14 Q0 30 -20 14 Q-28 -10 0 -17Z','#9F7951')+P('M-17 12 Q0 3 17 12 Q0 29 -17 12Z','#D4B889'));}
function coatScene(i,cover){
 const cabin=()=>interior(false,'#DDD3B8')+R(62,495,187,182,'#B49A73',10)+R(77,513,158,61,'#C5AD85',5)+R(77,591,158,61,'#C5AD85',5)+E(157,543,7,5,'#947C5D')+E(157,622,7,5,'#947C5D')+[717,751,832,872].map((x,j)=>star(x,128+j*57,.48,'#F0EDDA')).join('');
 const yellow=(x,y,s=1,pose='hold',out=false)=>kid('栗黄',x,y,s,pose,false,bluePocket(24,-89,.85)+(out?R(-52,-179,104,23,'#87A286',8)+P('M29 -160 L51 -160 L60 -111 L33 -119Z','#87A286'):''));
 if(cover)return outdoor('snow')+yellow(385,748,1.52,'hold',true)+chestnut(386,575,1.2)+kid('熊妈外',748,746,1.30,'reach',true)+E(295,775,20,7,'#CCD7CB');
 return [
 ()=>cabin()+kid('栗蓝',438,750,1.52,'hold',false,bluePocket(25,-88,.79)+P('M-4 -177 L-27 -54 L27 -54 L4 -177Z','#CBB38D')+E(-17,-111,4,4,'#E6D2A0')+E(22,-83,4,4,'#E6D2A0'))+kid('熊妈',785,749,1.19,'stand'),
 ()=>cabin()+kid('栗团',347,750,1.33,'reach')+kid('熊妈',759,747,1.39,'hold')+coat(709,591,1.18,true,false)+coat(626,627,.48,false,true)+P('M645 605 Q601 652 592 683','none','#88AEC4',18),
 ()=>cabin()+kid('栗团',450,748,1.43,'low')+G(480,628,1,coat(0,0,1.1,false,true),19)+P('M514 678 Q549 729 571 749','none','#85AAC0',31)+E(556,753,56,9,'#AA9E83','opacity=".35"'),
 ()=>cabin()+bench(519,674,1.7)+sitKid('熊妈',703,650,1.07,'hold')+sitKid('栗团',424,650,1.03,'hold')+coat(448,630,.76,false,true)+chestnut(463,638,.38)+chestnut(482,636,.38),
 ()=>cabin()+kid('栗团',266,749,1.2,'point')+kid('熊妈',818,747,1.29,'hold')+desk(548,673,1.55)+G(447,613,.8,coat(0,0,.79,false,true),-12)+G(638,613,.8,coat(0,0,.79,true,false),12),
 ()=>cabin()+yellow(397,750,1.43,'hold')+kid('熊妈',778,745,1.30,'hold')+basket(795,711,.58,false)+coat(578,688,.56,false,false)+bench(760,676,.8),
 ()=>outdoor('snow')+yellow(366,750,1.42,'reach',true)+kid('熊妈外',749,748,1.46,'reach',true)+chestnut(519,567,.68)+chestnut(401,626,.55)+[[257,782],[287,760],[671,782],[699,759]].map(([x,y])=>E(x,y,17,6,'#BDCFC5')).join(''),
 ()=>cabin()+bench(605,674,1.5)+sitKid('熊妈',737,650,1.07,'hold')+sitKid('栗黄',472,650,1.07,'hold',bluePocket(24,-89,.85))+R(77,593,156,65,'#9F8867',4)+G(154,622,.58,coat(0,0,.57,false,false),90)+P('M803 562 Q840 586 819 634','none','#87A286',23),
 ][i]();
}
function snowWorm(x,y,s=1,state='arch',hat=true){let d=state==='arch'?'M-91 -7 Q-65 -94 -12 -111 Q48 -109 91 -9':state==='flat'?'M-93 -8 Q0 -35 95 -8':state==='droop'?'M-92 -8 Q-38 -64 20 -56 Q64 -41 94 -8':'M-75 -3 Q-35 -48 9 -29 Q61 -15 75 -3';let a=P(d,'none','#DCE4DD',36)+P(d,'none','#F1F2E7',28)+E(91,-9,25,24,'#F1F2E7')+(state==='sleep'?P('M91 -15 Q98 -9 104 -15','none',ink,3):E(101,-16,4,5,ink))+P('M102 -2 Q109 3 114 -2','none','#83948A',2);if(hat)a+=R(69,-35,49,10,'#A99CB8',5)+P('M77 -35 Q77 -64 94 -64 Q112 -64 111 -35Z','#BCACCA');return G(x,y,s,a);}
function wormDrawing(x,y,s=1,stage=0){return paper(x,y,s,stage===0?line(-67,15,68,15,'#99A5A1',4):stage===1?P('M-76 22 L-54 -7 L-31 16 L-4 -19 L18 4 L41 -16 L70 12','none','#9CA7A2',4):stage===2?P('M-71 30 Q-31 -60 25 -40 Q51 -31 68 30','none','#B4C0B8',7):snowWorm(0,45,.77,'arch'));}
function snowBridgeScene(i,cover){
 const garden=()=>outdoor('snow')+[60,151,242,761,852,943].map(x=>R(x,418,18,142,'#BBB89D',5)).join('')+R(50,457,910,14,'#C9C6AD',3)+R(50,514,910,12,'#C9C6AD',3);
 if(cover)return garden()+kid('杏杏',369,748,1.37,'hold')+wormDrawing(370,590,1.07,3)+snowWorm(721,721,1.18,'arch')+stool(239,664,.7);
 return [
 ()=>garden()+kid('杏杏',392,749,1.42,'low')+snowWorm(639,746,1.03,'arch')+line(456,665,478,642,'#AC9A78',7),
 ()=>garden()+stool(366,662,1.15)+sitKid('杏杏',366,645,1.12,'hold')+wormDrawing(459,601,.97,0)+snowWorm(741,741,1.1,'flat')+line(416,562,472,589,'#A79878',7),
 ()=>garden()+stool(349,663,1.09)+sitKid('杏杏',349,646,1.1,'wide')+wormDrawing(355,600,.74,0)+snowWorm(738,734,1.21,'droop'),
 ()=>garden()+kid('杏杏',421,751,1.32,'hold')+wormDrawing(425,598,1.05,1)+snowWorm(760,736,1.04,'flat')+stool(212,675,.73)+P('M605 756 Q642 740 682 756','none','#CCD9D0',5),
 ()=>garden()+stool(287,662,.95)+sitKid('杏杏',288,647,1.02,'hold')+snowWorm(706,724,1.26,'arch')+G(711,386,.8,snowWorm(-82,0,.58,'flat')+snowWorm(130,0,.58,'droop'))+P('M607 423 Q689 452 764 422','none','#B3C6B8',4),
 ()=>garden()+stool(350,665,1.05)+sitKid('杏杏',350,649,1.13,'hold')+wormDrawing(429,606,1.02,2)+line(407,569,462,592,'#A79779',7)+snowWorm(752,736,1.09,'arch')+R(532,735,82,31,'#B8C3AA',5),
 ()=>garden()+kid('杏杏',368,751,1.39,'hold')+wormDrawing(459,589,1.15,3)+snowWorm(749,733,1.15,'arch')+stool(616,665,.85)+P('M673 766 Q628 783 578 756','none','#CDD9CE',5),
 ()=>garden()+bench(539,606,1.65)+sitKid('杏杏',547,580,1.04,'sleep')+wormDrawing(530,713,.7,3)+R(514,649,13,22,'#AA9271',3)+snowWorm(763,750,.68,'sleep')+R(620,571,72,25,'#B9C5AA',4),
 ][i]();
}
function human(x,y,s=1,who='girl',pose='hold'){let c=who==='dad'?'#A3BDA8':who==='boy'?'#91B4C7':'#DCC17E';let a=E(0,0,66,10,'#667561','opacity=".12"')+R(-37,-79,24,69,'#DBC2A3',9)+R(14,-79,24,69,'#DBC2A3',9)+E(-28,-6,29,13,'#8B9180')+E(28,-6,29,13,'#8B9180')+P('M-49 -179 L49 -179 L67 -76 L-66 -76Z','#EDE9D7')+(who==='dad'?R(-37,-79,24,67,'#9DA89D',6)+R(14,-79,24,67,'#9DA89D',6)+P('M-49 -179 L49 -179 L60 -74 L-60 -74Z',c):who==='boy'?R(-43,-126,86,76,c,12)+R(-32,-174,15,75,c,3)+R(19,-174,15,75,c,3)+line(0,-81,0,-50,'#6F96AA',3):P('M-32 -167 L32 -167 L60 -53 L-58 -53Z',c))+E(0,-229,61,65,'#3D4641')+E(0,-216,53,55,'#DCC3A4')+P('M-52 -238 Q-45 -289 12 -275 Q49 -279 56 -237 L30 -250 L19 -236 L-7 -253 L-21 -238Z','#414B44')+E(-20,-218,4,6,ink)+E(20,-218,4,6,ink)+P('M-10 -192 Q0 -184 11 -192','none','#8F7460',2)+(who==='girl'?cloud(45,-244,.10,'#86B2C5'):'')+arm(-45,-156,pose==='hold'?43:26,pose==='hold'?43:77,'#DCC3A4',18)+arm(45,-156,pose==='hold'?-43:41,pose==='hold'?43:15,'#DCC3A4',18);return G(x,y,s,a);}
function sitHuman(x,y,s=1,who='girl'){
 const id=`human-seat-${x}-${y}`,leg=who==='dad'?'#9DA89D':'#DCC3A4';
 return `<defs><clipPath id="${id}"><rect x="${x-180*s}" y="${y-450*s}" width="${360*s}" height="${462*s}"/></clipPath></defs>`+G(x,y,s,arm(-25,0,-6,52,leg,20)+arm(25,0,6,52,leg,20)+E(-31,57,24,12,'#8B9180')+E(31,57,24,12,'#8B9180'))+`<g clip-path="url(#${id})">${human(x,y+80*s,s,who)}</g>`;
}
function horse(x,y,s=1){return G(x,y,s,E(0,-13,32,20,'#A87A54')+P('M17 -23 L23 -61 L48 -55 L49 -35 L27 -29Z','#A87A54')+P('M22 -59 L18 -68 L30 -65 L39 -70 L44 -57Z','#715E49')+E(46,-40,9,8,'#E9E3CF')+E(37,-53,2,3,ink)+P('M-29 -18 Q-51 -31 -47 -8','none','#705A45',7)+[[-21,0,-26,24],[-8,1,-4,25],[12,1,8,25],[24,-2,34,21]].map(([a,b,c,d])=>line(a,b,c,d,'#A87A54',7)+line(c,d-4,c,d,'#F1EADC',8)).join(''));}
function strip(x,y,s=1,length=1,where=0){return G(x,y,s,R(-130,-52,260*length,104,'#F3EEE0',6,'stroke="#C6D4CA" stroke-width="3"')+(length>1?line(130,-51,130,51,'#CBD9CE',2)+R(120,34,22,17,'#D9DFCA',3):'')+horse(-75+where*100,-2,.72));}
function paperLoop(x,y,s=1,joined=true,pos=0){return G(x,y,s,P('M-121 0 A121 131 0 0 1 121 0 L85 0 A85 76 0 0 0 -85 0Z','#DFE6D5')+P('M-121 0 A121 131 0 0 0 121 0 L85 0 A85 76 0 0 1 -85 0Z','#F6F0DF')+P('M-121 0 A121 131 0 0 0 121 0','none','#BCCFC6',3)+(joined?R(-12,107,24,22,'#D2DEC9',3):P('M-17 99 L-17 134 M-3 100 L-3 134','none','#C3D3C7',4))+G(pos===1?75:0,pos===1?77:112,pos===1?.48:.57,horse(0,0,1),pos===1?-49:0));}
function cloudStation(i,cover){
 const station=()=>interior(false,'#DBDFCD')+R(58,75,312,161,'#ADC2BB',42)+cloud(218,176,.85,'#F2F0E0')+E(497,166,64,64,'#B7C3AE')+E(497,166,54,54,'#E8E4CD')+line(497,166,497,131,'#879986',5)+line(497,166,521,182,'#879986',5);
 const deskbase=(pose='hold')=>station()+human(332,747,1.25,'girl',pose)+desk(613,670,1.57);
 if(cover)return station()+human(338,749,1.41,'girl')+human(777,748,1.12,'boy')+paperLoop(548,556,1.37,true,0)+cloud(546,332,.4,'#ECEEDC');
 return [
 ()=>deskbase()+strip(581,599,.75,1,0)+strip(727,606,.47,1,0).replace(horse(-75,-2,.72),'')+R(430,640,55,17,'#AFBF9F',4)+line(411,592,450,579,'#B7A075',7),
 ()=>deskbase('point')+strip(634,602,1.18,1,1.43)+R(698,674,48,20,'#B1C29E',4),
 ()=>deskbase()+strip(494,613,.74,2,4.1)+line(591,650,605,661,'#CFDCCA',9)+bag(822,610,.5),
 ()=>station()+human(353,747,1.21,'girl','point')+desk(617,671,1.51)+strip(469,617,.78,2,4.1)+bag(831,604,.5),
 ()=>station()+human(365,749,1.35,'girl')+desk(711,671,1.0)+paperLoop(532,531,1.30,false,0)+E(753,616,20,20,'#BCD0C8')+E(753,616,10,10,'#E1DEC7'),
 ()=>station()+human(325,749,1.15,'girl','point')+desk(638,670,1.3)+paperLoop(636,484,1.23,true,1)+P('M787 450 Q824 480 793 518','none','#A8BCB3',4),
 ()=>station()+R(680,141,215,150,'#C7D3BE',22)+R(706,162,64,62,'#ECEDDE',12)+R(789,162,70,62,'#ECEDDE',12)+human(831,746,1.23,'dad')+human(706,747,.89,'boy','point')+human(253,746,1.12,'girl')+desk(504,664,1.08)+paperLoop(505,501,1.09,true,0),
 ()=>interior(false,'#D8DCC8')+R(156,505,691,212,'#AABEB5',34)+R(160,683,691,61,'#8FA99F',15)+sitHuman(310,673,.99,'girl')+sitHuman(505,673,.88,'boy')+sitHuman(739,673,1.19,'dad')+paperLoop(445,582,.78,true,1)+cloud(772,218,.54,'#F0EEDC'),
 ][i]();
}
function storyMat(sleep=false,bearAt=0){let a=E(520,660,389,125,'#AABDA1')+P('M358 713 Q521 671 758 592','none','#DBD1A7',27)+G(752,600,.79,R(-79,-146,158,147,'#DDCEAB',8)+P('M-101 -146 L0 -228 L101 -146Z','#B8AD90')+R(-39,-94,78,94,'#A5B89F',34)+R(-65,-70,130,64,'#D4D6BA',13)+[-50,-18,14,46].map(xx=>line(xx,-68,xx,-8,'#A2B7AC',7)).join('')+[-49,-25].map(yy=>line(-63,yy,63,yy,'#A2B7AC',7)).join(''))+G(296,634,.69,R(-77,-140,154,140,'#D7B1A0',8)+P('M-92 -140 L0 -214 L92 -140Z','#BE9891')+R(-39,-91,78,91,'#E9DBBE',9)+E(0,-107,14,18,'#C58579')+leaf(0,-121,.16,'#9BB08B',12))+G(505,654,.8,E(0,0,103,31,'#B49B7A')+E(0,-14,103,31,'#D2BC92')+R(-88,-15,10,40,'#B59B78',3)+R(78,-15,10,40,'#B59B78',3))+[376,407,446,626,663].map((x,j)=>flower(x,701-j%3*30,.59,'#E0C49C')).join('');
 if(sleep)a+=kid('布熊',752,565,.35,'sleep')+R(720,538,64,32,'#C5D1B8',7)+[-29,-11,7,25].map(xx=>line(752+xx,540,752+xx,568,'#95AFA5',4)).join('');else{let pos=[[219,722],[296,637],[505,642],[505,641],[501,645],[568,658],[707,607]][bearAt]||[219,722];a+=kid('布熊',pos[0],pos[1],.43,bearAt===2?'up':bearAt===6?'wave':'stand');}return a;}
function clothBearScene(i,cover){
 const school=()=>interior(false,'#DDD7BF')+E(185,128,63,63,'#B2C6B4')+E(185,128,48,48,'#DCE6D7')+R(109,394,150,17,'#B7A17C',4);
 if(cover)return school()+storyMat(false,6)+kid('穗穗',350,748,1.45,'hold')+acorn(351,583,1.4)+kid('布熊',662,748,.86,'wave');
 return [
 ()=>school()+storyMat(false,0)+stool(503,550,.85)+sitKid('穗穗',503,540,.87,'hold')+acorn(502,512,.7)+basket(851,696,.44,false),
 ()=>school()+storyMat(false,1)+stool(504,550,.85)+sitKid('穗穗',504,540,.87,'hold')+acorn(502,512,.7)+kid('兔友',163,715,.85,'point'),
 ()=>school()+storyMat(false,2)+stool(486,550,.85)+sitKid('穗穗',486,540,.87,'hold')+acorn(485,512,.7)+kid('獾同学',899,724,.85,'up')+P('M472 524 Q515 513 544 539','none','#CCD6BB',4),
 ()=>school()+storyMat(false,3)+stool(486,550,.85)+sitKid('穗穗',486,540,.87,'hold')+acorn(490,512,.7)+kid('兔友',152,715,.8,'point')+kid('獾同学',899,724,.85,'point'),
 ()=>school()+storyMat(false,4)+stool(488,550,.85)+sitKid('穗穗',488,540,.87,'hold')+acorn(489,512,.72)+P('M454 638 Q477 615 494 631 M553 639 Q535 617 519 630','none','#BAC7AA',5)+kid('兔友',156,716,.79,'up')+kid('獾同学',900,725,.84,'up'),
 ()=>school()+P('M704 107 L840 112 L830 575 L653 601Z','#EFE7BC','',0,'opacity=".27"')+storyMat(false,5)+stool(438,550,.9)+sitKid('穗穗',438,540,.91,'hold')+acorn(437,510,.8),
 ()=>school()+storyMat(true,6)+kid('穗穗',233,750,1.1,'hold')+acorn(233,625,.9)+P('M480 695 Q578 668 678 620','none','#EAE1BD',4)+E(694,608,8,5,'#A7896A')+E(710,608,8,5,'#A7896A'),
 ()=>school()+storyMat(true)+kid('穗穗',312,748,1.19,'hold')+plate(312,613,.58)+basket(175,695,.43,false)+acorn(174,675,.49)+bell(489,131,.85)+P('M448 123 Q433 144 445 161 M532 124 Q548 142 535 159','none','#C5B28A',4),
 ][i]();
}
function pillow(x,y,s=1,tilt=0){return G(x,y,s,[-1,1].flatMap(xx=>[-1,1].map(yy=>P(`M${xx*72} ${yy*49} Q${xx*94} ${yy*57} ${xx*96} ${yy*70} M${xx*72} ${yy*49} Q${xx*102} ${yy*51} ${xx*102} ${yy*65} M${xx*72} ${yy*49} Q${xx*88} ${yy*69} ${xx*87} ${yy*74}`,'none','#8AB2C6',5))).join('')+P('M-76 -54 Q0 -39 76 -54 Q59 0 76 54 Q0 39 -76 54 Q-59 0 -76 -54Z','#E7DAB3')+face(0,-7,.82),tilt);}
function softBed(){return R(196,509,617,246,'#B4A186',19)+R(214,507,579,174,'#DAD9BD',23)+R(217,680,576,67,'#B5C6B8',15)+R(215,744,18,51,'#9F8D70',4)+R(776,744,18,51,'#9F8D70',4);}
function pillowScene(i,cover){
 const hotel=(day=false)=>interior(!day,'#DAD2B7')+glow(145,351,130)+R(104,331,83,16,'#B9A172',6)+P('M103 332 L122 277 L170 277 L190 332Z','#E6CF9D')+softBed()+(day?'':[714,754,824,868].map((x,j)=>line(x,128+j*28,x-9,173+j*28,'#B0C7C7',3)).join(''));
 const memory=()=>G(216,280,.68,E(0,0,234,163,'#E6E5C9','opacity=".75"')+tree(0,137,.69,'#B5C297')+[[-55,-54],[51,-79],[65,-10]].map(([x,y])=>P(`M${x} ${y} q-13 -17 -17 0 q-23 30 1 33 q30 -1 16 -33Z`,'#D2C780')).join(''));
 if(cover)return hotel()+kid('团果',470,675,1.45,'hold')+pillow(471,511,1.52)+kid('獾妈',788,746,1.15,'hold')+memory();
 return [
 ()=>hotel()+kid('团果',434,677,1.10,'stand')+pillow(652,590,1.16,-9)+kid('獾妈',892,745,1.17,'low')+R(838,687,119,78,'#B69A78',12)+P('M874 687 Q898 659 925 687','none','#967E60',7),
 ()=>hotel()+G(431,615,1,kid('团果',0,0,1.03,'hold'),-28)+pillow(548,563,1.16)+memory()+P('M270 453 Q208 440 190 403','none','#DEDCC1',5),
 ()=>hotel()+kid('团果',429,683,1.2,'hold')+pillow(632,576,1.07,32)+P('M407 438 Q398 454 405 462 Q418 461 407 438Z','#A2C6CB')+R(448,638,162,49,'#BCCDC0',10),
 ()=>hotel()+sitKid('獾妈',701,636,1.27,'hold')+sitKid('团果',478,636,1.03,'point')+pillow(478,586,1.04)+P('M430 440 Q400 401 365 413','none','#D7D9BF',4),
 ()=>R(0,0,1000,800,'#E4E3CA',0)+outdoor()+tree(400,507,1.4,'#ACC19B')+kid('獾妈',735,737,1.24,'hold')+kid('团果',345,744,1.14,'hold')+desk(542,649,1.12)+plate(537,620,.72)+[-37,-18,1,20,39].map(xx=>E(541+xx,643,6,5,'#A2B687')).join('')+P('M514 604 Q532 573 563 597 Q550 623 514 604Z','#A4B98B')+[175,225,283].map((x,j)=>E(x,708+j*23,28,14,'#B8BEA6')).join(''),
 ()=>hotel()+sitKid('獾妈',724,636,1.20,'hold')+sitKid('团果',460,636,1.14,'hold')+pillow(460,562,1.27)+E(182,519,84,97,'#E4DDC2','opacity=".5"')+P('M141 563 L191 479 M132 547 L159 571 L179 561','none','#BCB28B',6),
 ()=>hotel()+kid('獾妈',836,746,1.21,'low')+G(455,650,1,kid('团果',0,0,1.04,'sleep'),-27)+pillow(475,538,1.23,-15)+P('M264 580 Q449 565 686 615 L745 700 L286 706Z','#B9CCBE'),
 ()=>hotel(true)+sitKid('团果',466,638,1.26,'hold')+pillow(468,534,1.32,-10)+R(847,684,111,78,'#B69A78',11)+P('M874 684 Q902 654 931 684','none','#967E60',7)+E(728,411,4,7,'#A4C0BE')+E(843,410,4,7,'#A4C0BE'),
 ][i]();
}
function breadTwist(x,y,s=1){return G(x,y,s,R(-62,-15,124,30,'#C7A169',15)+[-1,0,1].map((k)=>P(`M-55 ${k*6} Q-30 ${-24+k*4} -5 ${k*5} T50 ${k*6}`,'none',['#D7B67D','#E3C48D','#BB955F'][k+1],8)).join(''));}
function breadCart(x,y,s=1,brake=true){return G(x,y,s,[[-78,11],[68,11],[-54,38],[92,38]].map(([xx,yy])=>E(xx,yy,17,22,'#8C8167')+E(xx,yy,8,11,'#C5B18A')).join('')+P('M-98 -59 L75 -59 L115 -26 L-59 -26Z','#D3B58A')+P('M-59 -26 L115 -26 L115 19 L-59 19Z','#BA9B70')+P('M-98 -59 L-59 -26 L-59 19 L-98 -14Z','#AA8E67')+R(-83,-82,166,23,'#C8AD82',5)+breadTwist(-34,-90,.61)+breadTwist(30,-90,.58)+breadTwist(-5,-109,.61)+line(-95,-37,-139,-83,'#9A845F',9)+line(-140,-83,-165,-83,'#9A845F',9)+line(89,18,brake?86:107,brake?43:5,'#7A806B',5));}
function braid(d){return P(d,'none','#769871',20)+P(d,'none','#B6C59A',5,'stroke-dasharray="5 10"');}
function livingBridge(state=0){let a=outdoor()+P('M0 640 Q499 551 1000 634 L1000 800 L0 800Z','#93B7B1')+P('M0 574 Q231 568 293 680 L530 800 L0 800Z','#AFC39D')+P('M665 388 Q846 364 1000 443 L1000 569 L885 489 L694 441Z','#B7C8A4')+P('M178 674 L695 441 L885 489 L369 751Z','#B8A57C')+Array.from({length:11},(_,j)=>line(190+j*47,669-j*21,374+j*46,748-j*24,'#927F5F',5)).join('')+P('M171 636 Q460 387 695 394 M372 710 Q616 526 887 441','none','#77956C',17)+[[185,631,187,671],[311,535,319,615],[449,455,453,557],[584,408,591,495],[691,395,699,441],[378,703,378,746],[525,603,531,669],[680,518,686,591],[874,444,879,492]].map(([x1,y1,x2,y2])=>line(x1,y1,x2,y2,'#8DA57A',11)).join('')+E(215,519,66,51,'#AEC397')+face(214,514,1.16)+flower(178,487,.65,'#F2EBD3');
 if(state<3)a+=P(state===0?'M188 543 Q129 631 236 656 M239 542 Q362 544 320 651':state===1?'M188 543 Q114 652 364 713 M239 542 Q443 515 531 659 Q494 715 353 700':'M188 543 Q100 590 171 622 M239 542 Q397 472 395 628 Q436 691 511 681','none','#89A875',13)+[277,355,445].map((x,j)=>leaf(x,697-j%2*36,.37,'#99B780',j*43-52)).join('');else a+=braid('M188 543 Q130 566 171 636 Q460 387 695 394')+braid('M372 710 Q616 526 887 441')+P('M681 397 Q702 374 711 398 Q704 420 684 398 M861 451 Q879 424 897 441 Q906 460 880 460','none','#8EAB7B',7);
 return a;}
function vineBridgeScene(i,cover){
 if(cover)return livingBridge(3)+kid('兔婆婆',780,520,.8,'wave')+breadCart(511,579,1.03,false)+leaf(340,314,.65,'#9AB581',60);
 return [
 ()=>livingBridge(0)+kid('兔婆婆',181,749,.94,'point')+E(827,149,60,60,'#E4CD9D'),
 ()=>livingBridge(1)+[247,333,427,529].map((x,j)=>P(`M${x} ${620+j%2*46} q-8 15 0 19 q10 -5 0 -19Z`,'#BED6CC')).join(''),
 ()=>livingBridge(2)+P('M137 548 Q109 556 113 585 M397 574 Q427 589 421 618','none','#A5BB92',5),
 ()=>livingBridge(1)+kid('兔婆婆',151,760,.88,'hold')+breadCart(339,752,1.02,true)+line(424,758,424,786,'#6D7C68',5),
 ()=>livingBridge(2)+G(536,630,1.25,E(0,0,187,110,'#E1D9B6','opacity=".92"')+breadTwist(-28,9,1.75)+P('M-80 -66 Q-20 -102 35 -67 T112 -66 M-80 -49 Q-20 -91 35 -49 T112 -49 M-80 -33 Q-20 -75 35 -33 T112 -33','none','#8CA977',8)),
 ()=>livingBridge(3)+P('M657 368 Q686 353 716 371 M845 420 Q877 402 902 420','none','#D3DDAB',4)+leaf(548,369,.49,'#A1BA83',42),
 ()=>livingBridge(3)+kid('兔婆婆',419,574,.73,'reach')+breadCart(625,545,.8,false)+P('M738 283 Q799 255 872 284','none','#BBCBA4',5),
 ()=>livingBridge(3)+kid('兔婆婆',836,463,.52,'wave')+breadCart(926,467,.48,false)+leaf(359,328,.68,'#A4BD87',64)+leaf(501,292,.7,'#AFC691',-34)+E(801,133,61,61,'#EFDFAC'),
 ][i]();
}
function huggingFruit(x,y,s=1,open=false,full=true){return G(x,y,s,open?Array.from({length:6},(_,j)=>G(0,0,1,P('M0 0 Q-38 -37 -22 -67 Q0 -92 22 -67 Q38 -37 0 0Z','#D5A2A5','#BD8D94',2),j*60)).join('')+(full?Array.from({length:6},(_,j)=>G(0,0,1,P('M0 -9 Q-25 -31 -12 -52 Q2 -68 13 -48 Q23 -28 0 -9Z','#F0D3A8')+line(-4,-28,-4,-44,'#FAE5C4',3),j*60)).join(''):''):E(0,0,45,44,'#D4A0A3')+[-22,0,22].map(xx=>P(`M${xx} -38 Q${xx-14} -8 ${xx} 35`,'none','#E8BBC1',3)).join('')+leaf(0,-36,.32,'#91AE82',40));}
function fruitSegment(x,y,s=1){return G(x,y,s,P('M-15 -20 Q19 -40 22 -6 Q21 24 -10 21 Q-28 13 -15 -20Z','#F0D2A7')+line(-4,-13,4,12,'#F9E6C4',4));}
function fruitStoryScene(i,cover){
 const lake=()=>R(0,0,1000,800,'#D2E0D6',0)+cloud(230,169,.9,'#EFF0DD')+cloud(790,183,.7,'#EFF0DD')+R(0,443,1000,357,'#A6C6BF',0)+P('M463 493 L964 425 L1000 790 L460 790Z','#CDBA94')+[536,602,668,734].map(yy=>line(478,yy,986,yy-41,'#B8A17A',3)).join('')+P('M0 746 L626 462 L765 500 L229 800Z','#CAB58C')+[0,1,2,3,4,5,6].map(j=>line(65+j*70,715-j*31,253+j*65,783-j*36,'#A5916C',5)).join('')+P('M31 649 L623 393 M238 713 L763 433','none','#AC9972',10)+[150,310,465,625].map((x,j)=>line(x,596-j*69,x+5,698-j*70,'#B2A17C',9)).join('');
 const shop=()=>lake()+kid('水獭',755,712,.84,'wide')+stall(724,644,1.15,'#89AEBD',[-100,-40,85].map(x=>huggingFruit(x,-49,.65)).join(''));
 const tea=()=>interior()+kid('绒豆',320,748,1.24,'hold')+kid('兔奶奶',771,746,1.33,'hold')+desk(550,665,1.21)+cup(646,630,.7)+cup(481,634,.65);
 if(cover)return shop()+kid('绒豆',367,750,1.41,'hold')+huggingFruit(367,588,1.28,true,true)+basket(533,735,.48,false);
 return [
 ()=>lake()+kid('水獭',770,620,.53,'stand')+stall(742,561,.72,'#8AAEBD',[-80,-25,82].map(x=>huggingFruit(x,-44,.53)).join(''))+kid('绒豆',317,751,1.17,'stand')+basket(440,668,.49,false),
 ()=>shop()+kid('绒豆',337,751,1.24,'hold')+basket(336,612,.62,false)+huggingFruit(335,562,.72)+G(331,603,.49,P('M-61 -12 L64 -17 L51 17 L-51 26Z','#EBE5CB'))+E(490,631,8,5,'#D8C58D'),
 ()=>tea()+huggingFruit(550,602,1.15)+plate(562,645,.83)+P('M501 585 Q481 573 469 583 M598 585 Q616 574 628 583','none','#B6C7AE',4),
 ()=>interior()+kid('绒豆',421,750,1.31,'hold')+basket(423,601,.77,false)+huggingFruit(423,549,.76)+R(717,410,205,282,'#B0BEA4',95)+P('M752 684 L875 684 L1000 756 L885 756Z','#CAB58C')+kid('兔奶奶',192,688,.82,'stand'),
 ()=>shop()+kid('绒豆',337,751,1.27,'point')+huggingFruit(533,613,.87)+basket(377,733,.46,false)+P('M590 312 Q718 289 848 317','none','#B5CDD0',7),
 ()=>lake()+bench(518,672,1.62)+sitKid('绒豆',506,650,1.12,'hold')+huggingFruit(506,588,1.15,true,true)+basket(741,669,.53,false)+G(473,614,1,E(0,0,9,15,'#B9C4BD'))+G(539,614,1,E(0,0,9,15,'#B9C4BD')),
 ()=>tea()+huggingFruit(550,617,.76,true,false)+plate(479,638,.64)+plate(649,640,.68)+[[-18,-8],[2,5],[21,-5]].map(([x,y])=>fruitSegment(479+x,627+y,.38)).join('')+[[-17,-6],[3,6],[23,-5]].map(([x,y])=>fruitSegment(648+x,628+y,.4)).join('')+basket(886,710,.45,false),
 ()=>tea()+huggingFruit(551,615,.8,true,false)+fruitSegment(319,469,.67)+fruitSegment(771,448,.69)+plate(478,638,.6)+plate(650,639,.6)+fruitSegment(468,633,.44)+fruitSegment(490,634,.44)+fruitSegment(639,634,.44)+fruitSegment(661,635,.44)+P('M701 349 L873 349 M710 329 L710 367 M859 329 L859 367','none','#BCC7AE',6),
 ][i]();
}
const scenes={41:marketScene,42:boatScene,43:mazeScene,44:cloudMarketScene,45:oasisScene,46:hatScene,47:handkerchiefScene,48:sheepBedScene,49:tenCountScene,50:coatScene,51:snowBridgeScene,52:cloudStation,53:clothBearScene,54:pillowScene,55:vineBridgeScene,56:fruitStoryScene};
export function secondYoungArtwork(story,index,cover=false){
 const n=Number(story.id?.split('-')[1]);if(!scenes[n])throw new Error(`Unsupported second-young story: ${story.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw new Error(`${story.id}: expected eight reviewed pages`);
 if(!Number.isInteger(index)||index<0||index>=8)throw new Error(`${story.id}: invalid page index ${index}`);
 const page=story.pages[index];const description=cover?`${story.title}，原创封面。${story.character}`:`${story.title}，第${index+1}页。${page.scene.setting} ${page.scene.action} ${page.scene.mood}`;
 return svg(scenes[n](index,cover),description,cover);
}

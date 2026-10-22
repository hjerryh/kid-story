// Five independent, explicitly staged 16-page picture-book sequences, IDs 0071–0075.
// No filesystem writes or edits to previously frozen artwork modules.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,book,rock,svg} from '../render-illustrations.mjs';
const ink='#354C4D',paper='#F1E8D1',wood='#B49C77';
const arm=(x,y,dx,dy,c,w=21)=>P(`M${x} ${y} Q${x+dx*.6} ${y+dy*.4-12} ${x+dx} ${y+dy}`,'none',c,w);
const specs={
 cheng:{type:'human',skin:'#DFC19F',hair:'#444D46',cloth:'#DDBD79',pants:'#6D7D91'},
 chengCloak:{type:'human',skin:'#DFC19F',hair:'#444D46',cloth:'#DDBD79',pants:'#6D7D91',cape:'long'},
 chengJacket:{type:'human',skin:'#DFC19F',hair:'#444D46',cloth:'#DDBD79',pants:'#6D7D91',cape:'short'},
 sang:{type:'human',skin:'#DCC09D',hair:'#414A43',cloth:'#E1D4AB',pants:'#91A47D',apron:'#8EA47C',bag:'#CB9A67'},
 gran:{type:'human',skin:'#D9B998',hair:'#D0D0C1',cloth:'#AB7E71',pants:'#8E9588',glasses:true},
 fox:{type:'fox',skin:'#657D8B',cloth:'#A1A69A',pants:'#657D8B',glasses:true},
 badger:{type:'badger',skin:'#B6B7A7',cloth:'#BDA582',pants:'#939985'},
 gardener:{type:'rabbit',skin:'#DADCCB',cloth:'#AAB892',pants:'#98A583',apron:true},
 washer:{type:'otter',skin:'#B29D7D',cloth:'#A2BBC0',pants:'#8DA3A7',apron:true},
 baker:{type:'badger',skin:'#B6BAAC',cloth:'#D7CBAC',pants:'#9B9D8C',apron:true},
 post:{type:'rabbit',skin:'#D3D8CC',cloth:'#8DA9B6',pants:'#7E95A2',bag:'#B69D73'},
 linsui:{type:'human',skin:'#DFC19E',hair:'#444D46',cloth:'#E8E2CC',pants:'#8DA17C',apron:'#8DA17C',fish:true},
 ferryman:{type:'human',skin:'#D9BD9D',hair:'#C6CABC',cloth:'#758A9D',pants:'#758A9D',curly:true,hat:true},
 ayao:{type:'human',skin:'#DCC09D',hair:'#454C43',cloth:'#A4C1CA',pants:'#A58B6E',curly:true},
 mother:{type:'human',skin:'#D9B894',hair:'#6D6555',cloth:'#B99A8C',pants:'#949B85',apron:'#D7C7A4'},
 father:{type:'human',skin:'#D8BA96',hair:'#62664F',cloth:'#A7BAA0',pants:'#83948D'},
 sangli:{type:'human',skin:'#E0C2A0',hair:'#424C44',cloth:'#DDBF7E',pants:'#6B8192',ribbon:true},
 sangliPlain:{type:'human',skin:'#E0C2A0',hair:'#424C44',cloth:'#DDBF7E',pants:'#6B8192'},
 pu:{type:'human',skin:'#D6B796',hair:'#D8D7C4',cloth:'#A68D71',pants:'#8F998A',beard:true,hat:true},
 cen:{type:'human',skin:'#DFC1A0',hair:'#444D45',cloth:'#E7E1CB',pants:'#8CA27C',apron:'#8CA27C',bag:'#A48A68'},
};
function fish(x,y,s=1,c='#D8C38C'){return G(x,y,s,E(0,0,14,7,c)+P('M-12 0 L-24 -11 L-24 11Z',c)+E(7,-1,2,2,'#617963'));}
function wornCloak(kind){const short=kind==='short';return P(short?'M-49 -186 L49 -186 L65 -75 L-62 -75Z':'M-50 -187 L50 -187 L91 -22 Q0 7 -91 -22Z','#567C68')+P(short?'M-11 -175 L11 -175 L19 -75 L-19 -75Z':'M-12 -177 L12 -177 L35 -16 L-35 -16Z','#DDBD79')+fish(0,-167,.48,'#B39A70')+(short?[-44,-28,-12,12,28,44].map(xx=>fish(xx,-86,.3)).join('')+fish(49,-124,.32):[-65,-44,-22,0,22,44,65].map(xx=>fish(xx,-32,.34)).join(''));}
function person(name,x,y,s=1,pose='stand',flip=false){
 const c=specs[name];if(!c)throw new Error(name);const f=c.skin;let a=E(0,pose==='sit'?37:2,83,12,'#52675C','opacity=".13"');
 if(c.type==='squirrel')a+=P('M43 -51 Q147 -55 135 -180 Q118 -247 74 -216 Q29 -183 89 -142','none',f,45);
 if(c.type==='fox')a+=P('M38 -46 Q131 -39 133 -129 Q93 -145 55 -97Z',f)+P('M131 -130 Q137 -97 111 -65 L94 -103Z','#ECE9D8');
 if(c.type==='otter')a+=P('M38 -39 Q127 -20 153 21 Q95 42 44 -2Z','#8A6F52');
 if(c.type==='beaver')a+=E(79,-36,42,69,'#77664F','transform="rotate(-38 79 -36)"')+line(64,-76,99,4,'#9E8A6A',3);
 if(c.type==='dragon')a+=P('M47 -57 Q128 -52 130 -132 L166 -115 Q146 25 35 -5Z',f)+P('M-48 -160 L-117 -237 L-121 -127 L-78 -137 L-63 -94Z','#D9B18D')+P('M44 -160 L114 -236 L121 -124 L79 -138 L62 -94Z','#D9B18D');
 if(c.type==='turtle')a+=E(33,-107,83,103,'#697F6B');
 a+=(pose==='sit'?P('M-41 -61 L-12 -61 L-13 -17 L-53 -17 L-53 24 L-77 24 L-77 -37 L-40 -39Z',c.pants)+P('M13 -61 L42 -61 L42 -39 L78 -37 L78 24 L54 24 L54 -17 L13 -17Z',c.pants)+E(-66,24,25,12,c.type==='human'?'#7A7468':f)+E(67,24,25,12,c.type==='human'?'#7A7468':f):R(-40,-61,28,60,c.pants,10)+R(13,-61,28,60,c.pants,10)+E(-30,0,29,13,c.type==='human'?'#7A7468':f)+E(29,0,29,13,c.type==='human'?'#7A7468':f))+P('M-48 -182 L48 -182 L59 -50 Q0 -32 -58 -50Z',c.cloth);
 if(c.apron)a+=P('M-30 -182 L-24 -122 L24 -122 L30 -182 L43 -182 L49 -51 L-48 -51 L-43 -182Z',typeof c.apron==='string'?c.apron:c.cloth)+R(-24,-103,48,29,'#E4D7B5',7);
 if(c.cape)a+=wornCloak(c.cape);
 if(c.bag)a+=R(35,-108,48,54,c.bag,9)+line(37,-93,80,-93,'#C7B58C',3);
 if(c.fish)a+=fish(37,-113,.3,'#AC8E62');
 if(c.ribbon)a+=R(-55,-65,110,11,'#C0CACC',3)+P('M30 -62 Q59 -14 41 31','none','#C0CACC',11);
 if(c.type==='human'&&c.longHair)a+=R(-62,-274,124,121,c.hair,45);
 if(c.type==='rabbit')a+=E(-27,-298,19,65,f,'transform="rotate(-10 -27 -298)"')+E(27,-302,18,67,f,'transform="rotate(8 27 -302)"')+E(-27,-304,7,42,'#BEAEB0')+E(27,-309,7,40,'#BEAEB0');
 if(['fox','deer','badger'].includes(c.type))a+=P('M-48 -248 L-68 -303 L-13 -268Z',f)+P('M48 -248 L68 -303 L13 -268Z',f);
 if(['squirrel','beaver','otter'].includes(c.type))a+=E(-49,-267,20,24,f)+E(49,-267,20,24,f);
 if(c.type==='dragon')a+=P('M-43 -269 L-46 -312 L-20 -280Z','#DEC9A0')+P('M43 -269 L46 -312 L20 -280Z','#DEC9A0');
 a+=E(0,-224,65,59,f);
 if(c.type==='human')a+=P('M-61 -238 Q-66 -302 -7 -301 Q61 -307 63 -240 L48 -229 L37 -269 Q7 -244 -29 -256 L-48 -228Z',c.hair);
 if(c.braid)a+=P('M-50 -246 Q-80 -215 -57 -180 Q-75 -152 -52 -132','none',c.hair,15)+R(-54,-267,29,7,'#C9AD6C',3);
 if(c.bun)a+=E(0,-305,32,25,c.hair);
 if(c.curly)a+=[-43,-20,3,26,44].map(xx=>E(xx,-276+Math.abs(xx)*.13,18,18,c.hair)).join('');
 if(c.type==='badger')a+=P('M-55 -264 L-22 -276 L-8 -186 L-34 -179Z','#65706A')+P('M55 -264 L22 -276 L8 -186 L34 -179Z','#65706A')+E(0,-201,33,25,'#E4DECA');
 if(c.type==='fox')a+=P('M-59 -229 L-16 -210 L0 -217 L16 -210 L59 -229 Q39 -170 0 -172 Q-39 -170 -59 -229Z','#F0ECDD');
 if(c.type==='otter')a+=E(0,-201,43,28,'#E7DBC2');
 if(c.type==='beaver')a+=E(0,-202,36,27,'#B79C78')+R(-11,-188,22,15,'#EBE2C7',3);
 if(c.type==='owl')a+=E(-26,-231,29,33,'#D1D7CD')+E(26,-231,29,33,'#D1D7CD')+P('M-8 -210 L8 -210 L0 -196Z','#C4AB75');
 if(c.type==='dragon')a+=E(0,-201,43,28,'#DDB996')+E(-19,-205,4,3,'#92735C')+E(19,-205,4,3,'#92735C');
 a+=(pose==='sleep'?P('M-29 -231 Q-23 -225 -17 -231 M17 -231 Q23 -225 29 -231','none',ink,3):E(-23,-231,5,6,ink)+E(23,-231,5,6,ink))+P(['think','stop'].includes(pose)?'M-9 -189 L9 -189':'M-11 -190 Q0 -184 12 -191','none','#91775F',2);
 if(!['human','dragon','owl'].includes(c.type))a+=E(0,-211,8,6,'#796C59');
 if(c.hat)a+=R(-80,-277,160,16,'#BCAA7F',9)+P('M-48 -277 L-36 -322 Q0 -341 39 -322 L50 -277Z','#CEBF92');
 if(c.beard)a+=P('M-30 -191 Q0 -159 32 -191 Q9 -148 -18 -168Z',c.hair||'#D1CBB5');
 if(c.glasses)a+=E(-24,-232,21,18,'none','stroke="#847F6A" stroke-width="3"')+E(24,-232,21,18,'none','stroke="#847F6A" stroke-width="3"')+line(-3,-232,3,-232,'#847F6A',3);
 if(c.scarf)a+=R(-49,-180,98,21,c.scarf,8)+P('M21 -165 L46 -165 L57 -106 L29 -115Z',c.scarf);
 const poses={sleep:[[39,41],[-39,41]],sit:[[39,41],[-39,41]],stand:[[-10,64],[10,64]],point:[[-9,66],[81,-20]],hold:[[39,41],[-39,41]],reach:[[70,25],[59,20]],think:[[40,-38],[9,65]],up:[[-36,-87],[39,-90]],low:[[34,83],[57,72]],wave:[[-7,64],[36,-100]],open:[[-59,21],[61,18]],write:[[44,46],[83,44]],stop:[[-8,65],[70,-56]]};
 const v=poses[pose]||poses.stand;a+=arm(-43,-155,...v[0],f)+arm(43,-155,...v[1],f);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function room(night=false){return R(0,0,1000,800,night?'#C1C5B3':'#D9D7BF',0)+R(0,622,1000,178,'#B6B294',0)+line(0,622,1000,622,'#A4A084',6)+R(671,78,238,344,'#B4AC8F',100)+R(688,95,204,310,night?'#587684':'#C1D8D1',87)+line(789,98,789,404,'#D5C8A6',9)+line(692,258,889,258,'#D5C8A6',9)+R(652,409,277,20,'#BDA77F',5)+(night?E(826,167,32,32,'#E9DBB3'):cloud(778,196,.48,'#ECECD8'))+R(58,271,245,16,'#AC9C7A',4)+[91,133,174,216].map((x,j)=>R(x,190-j%2*27,29,80+j%2*27,['#9CAF9C','#BBA17C','#A4A9B3'][j%3],3)).join('');}
function desk(x,y,s=1){return G(x,y,s,R(-147,0,18,133,'#A18A6A',4)+R(124,0,18,133,'#A18A6A',4)+P('M-178 -47 L142 -47 L185 0 L-138 0Z','#D2B991')+R(-138,0,323,17,'#B39A73',5));}
function stool(x,y,s=1){return G(x,y,s,R(-42,-4,13,80,'#A48E6D',3)+R(29,-4,13,80,'#A48E6D',3)+E(0,-6,59,20,'#C8AF85'));}
function sheet(x,y,s=1,a=''){return G(x,y,s,R(-102,-74,204,148,paper,5,'stroke="#CFC5A9" stroke-width="2"')+a);}
function basin(x,y,s=1,art=''){return G(x,y,s,P('M-85 -17 Q-72 54 0 58 Q72 54 85 -17Z','#B79C73')+E(0,-18,85,26,'#C9B084')+E(0,-20,72,18,'#A6C4C2')+art+P('M-79 -5 Q0 38 79 -5','none','#A28863',4));}
function cup(x,y,s=1){return G(x,y,s,R(-24,-39,48,42,'#E6E3CD',8)+E(0,-40,24,7,'#B6C5B6')+P('M25 -33 Q51 -37 45 -15 Q41 -7 25 -13','none','#CDD5C2',6));}
function plate(x,y,s=1){return G(x,y,s,E(0,0,64,21,'#EAE4CF')+E(0,0,49,13,'none','stroke="#B3C2AB" stroke-width="3"'));}
function pencil(x,y,s=1,rot=0){return G(x,y,s,R(-4,-55,8,94,'#BA9E71',2)+P('M-4 39 L4 39 L0 52Z','#6A7566'),rot);}
function lamp(x,y,s=1){return G(x,y,s,glow(0,-51,95)+R(-26,0,52,12,'#B49E73',5)+line(0,0,0,-49,'#A6916D',8)+P('M-43 -40 L-24 -91 L23 -91 L43 -40Z','#E4CD9E'));}
function moonLady(x,y,s=1,pose='hold'){return G(x,y,s,E(0,0,112,15,'#96AFAE','opacity=".25"')+P('M-43 -206 L43 -206 Q72 -103 105 -6 Q0 30 -105 -6Z','#DDE5DD')+[-54,-27,0,27,54].map(xx=>P(`M${xx*.6} -191 Q${xx} -90 ${xx*1.5} -10`,'none','#F1EFDA',3)).join('')+E(0,-244,72,71,'#E9EADA')+E(-24,-251,5,7,ink)+E(24,-251,5,7,ink)+P(pose==='sad'?'M-12 -219 Q0 -226 12 -219':'M-12 -223 Q0 -215 12 -223','none','#839490',3)+arm(-38,-190,pose==='point'?70:29,pose==='point'?31:72,'#DDE5DC',20)+arm(38,-190,pose==='up'?42:59,pose==='up'?-95:62,'#DDE5DC',20));}
function cloak(x,y,s=1,split=false,draped=false){let a=P(draped?'M-145 40 Q-151 -90 -60 -95 Q0 -145 72 -90 Q147 -70 145 40 Q71 79 0 41 Q-69 77 -145 40Z':split?'M0 -105 L-130 66 L-12 82 L0 -21 L13 82 L130 66Z':'M0 -105 L-130 66 Q0 110 130 66Z','#567B65')+P(draped?'M0 -90 Q-29 -14 0 41':split?'M0 -21 L0 -95':'M0 -91 L0 76','none','#3F6554',4)+[-93,-63,-31,0,31,63,93].map((xx,j)=>fish(xx,(draped?44:66)+Math.abs(xx)*-.035,.45)).join('')+fish(0,-86,.54,'#B49A71');return G(x,y,s,a);}
function knot(x,y,s=1,state='tight'){const wide=state==='loose',a=wide?30:18;return G(x,y,s,P(`M-60 30 Q-12 6 ${-a} -21 Q-52 -52 -65 -12 Q-65 12 -13 1 Q42 -10 36 -40 Q5 -64 -4 -27 Q-2 9 47 18 Q88 26 77 -16 Q67 -49 27 -2 Q10 18 85 45`,'none','#E3E2CB',wide?6:8)+P('M-23 6 L-13 -69 L20 -4Z','#667774')+P(`M-60 30 Q-12 6 ${-a} -21 Q-52 -52 -65 -12 Q-65 12 -13 1 Q42 -10 36 -40 Q5 -64 -4 -27 Q-2 9 47 18 Q88 26 77 -16 Q67 -49 27 -2 Q10 18 85 45`,'none','#F0ECD8',wide?4:5));}
function beach(stage=0){const dark=stage>=9;return R(0,0,1000,800,dark?'#71858B':'#D8CFB4',0)+P('M0 325 Q384 301 1000 345 L1000 800 L0 800Z',dark?'#789E9F':'#A6C2BB')+P('M0 497 Q343 431 534 570 Q723 681 1000 552 L1000 800 L0 800Z','#D2BE97')+P(`M0 ${455+Math.min(stage,13)*8} Q309 ${401+stage*7} 532 ${539+stage*6} Q718 ${649+stage*4} 1000 ${517+stage*4}`,'none','#D7E0CB',11)+cloud(251,148,.75,dark?'#91A1A0':'#E4DEBF')+P('M452 684 L484 571 L668 557 L757 684Z','#99A69A')+P('M596 621 L609 541 L642 621Z','#667875')+[119,183,813,895].map((x,j)=>star(x,714+j%2*31,.37,'#ECE1B5')).join('');}
function moonKnotScene(i,cover){
 const trail=(raised=false,free=false)=>P(free?'M745 563 Q645 496 508 590 Q640 637 746 611Z':raised?'M803 503 Q745 450 651 587 L620 618 Q758 567 820 572Z':'M832 655 Q770 652 624 620 Q662 705 852 688Z','#DBE3D7');
 const sewing=(x,y,s=1,scissors=false)=>G(x,y,s,R(-48,-23,96,55,'#B7A17E',10)+R(-28,-40,56,25,'#CDB891',5)+(scissors?E(-12,6,12,10,'none','stroke="#829AA1" stroke-width="4"')+E(16,6,12,10,'none','stroke="#829AA1" stroke-width="4"')+P('M-4 1 L26 -26 M7 0 L-17 -26','none','#829AA1',5):''));
 if(cover)return beach(9)+moonLady(767,709,1.18,'up')+trail(true)+person('cheng',335,750,1.43,'low')+cloak(580,644,.92,true,true)+star(528,271,1.1,'#D9D6B5');
 switch(i){
 case 0:return beach()+trail()+moonLady(805,672,1.05,'sad')+person('chengCloak',330,752,1.31,'low');
 case 1:return beach(1)+moonLady(805,681,1.10,'point')+trail()+person('chengCloak',335,750,1.28,'low')+knot(617,616,.74);
 case 2:return beach(2)+moonLady(800,681,1.10)+trail()+person('chengCloak',346,751,1.25,'hold')+knot(617,616,.9)+P('M489 618 L573 618','none','#DDDBC2',5);
 case 3:return beach(3)+moonLady(820,671,1.13,'up')+trail(true)+person('chengCloak',346,751,1.27,'reach')+knot(616,615,.66)+P('M490 589 Q552 592 581 604','none','#E3DDC4',7)+P('M816 170 L739 476 L652 556Z','#E6D5A1','',0,'opacity=".14"');
 case 4:return beach(4)+moonLady(838,681,.99,'up')+trail(true)+person('chengCloak',329,752,1.31,'low')+knot(608,615,1.01)+E(520,693,83,16,'#9DB8B2');
 case 5:return beach(5)+cloud(707,168,1.0,'#96A8A6')+moonLady(840,687,.97,'up')+trail(true)+person('chengCloak',326,753,1.26,'think')+knot(614,616,1.09,'loose')+P('M569 590 L553 575 M651 580 L664 564','none','#D5DBC3',4);
 case 6:return beach(6)+moonLady(838,685,.97)+trail(true)+person('chengCloak',335,751,1.29,'reach')+knot(614,615,.89,'loose')+P('M563 611 Q557 561 609 558 Q654 558 668 604','none','#DABD9C',20);
 case 7:return beach(7)+moonLady(844,685,.94)+trail(true)+person('cheng',330,750,1.29,'reach')+cloak(606,615,.88,false,true)+P('M485 591 L534 614','none','#DABD9B',19)+P('M541 614 L557 634','none','#EADFC0',6);
 case 8:return beach(8)+moonLady(827,682,1.02,'up')+trail(true)+stool(352,668,.85)+person('cheng',352,707,1.20,'sit')+cloak(453,635,.69,false)+sewing(606,718,.85,true);
 case 9:return beach(9)+moonLady(842,685,.96,'up')+trail(true)+person('cheng',333,752,1.30,'point')+knot(610,616,1.11)+cloak(375,719,.51,false)+sewing(771,735,.58,true);
 case 10:return beach(10)+moonLady(837,684,.96,'up')+trail(true)+person('cheng',335,752,1.30,'reach')+cloak(606,618,.95,true,true)+P('M485 590 Q517 614 547 642 M492 608 Q520 645 565 656','none','#D9BB99',17)+sewing(772,735,.6);
 case 11:return beach(11)+moonLady(837,684,.96,'up')+trail(true)+person('cheng',330,752,1.31,'sleep')+cloak(608,621,.98,true,true)+P('M465 603 Q513 617 555 646 M386 611 Q456 662 581 657','none','#D9BB99',18)+sewing(792,741,.58);
 case 12:return beach(12)+moonLady(823,701,1.03,'hold')+trail()+person('cheng',335,753,1.31,'reach')+cloak(611,632,.98,true,true)+P('M486 590 Q526 632 557 653 M493 612 Q522 654 581 662','none','#D9BB99',18)+P('M503 696 Q616 677 746 700','none','#C8DCD0',12)+E(666,698,5,9,'#C6D9CB');
 case 13:return beach(13)+moonLady(834,684,1.02,'up')+trail(true,true)+person('cheng',336,752,1.29,'reach')+cloak(557,646,.80,true,true)+P('M615 672 Q695 714 753 674','none','#E5E5D0',10)+P('M617 623 L622 581 L637 620Z','#667875');
 case 14:return beach(14)+moonLady(741,420,.93,'up')+P('M674 398 Q594 521 789 504 Q905 491 804 388Z','#DBE4D9')+person('cheng',340,751,1.34,'wave')+cloak(447,662,.73,true)+[530,617,822].map((x,j)=>star(x,300+j*57,.75,'#DCE0BC')).join('');
 case 15:return room(true).replace(E(826,167,32,32,'#E9DBB3'),'')+person('chengJacket',430,751,1.54,'hold')+moonLady(816,317,.42,'up')+desk(714,665,.92)+sewing(716,626,.62);
 default:throw Error('moonKnot page');}
}
function inkBottle(x,y,s=1){return G(x,y,s,R(-22,-34,44,44,'#728B99',8)+R(-15,-49,30,18,'#4F6878',4)+E(-6,-15,7,11,'#A9C0C7','opacity=".6"'));}
function pearlBox(x,y,s=1,stage='dirt'){return G(x,y,s,P('M-58 -45 L35 -45 Q26 -22 58 -28 L58 28 L-58 28Z','#B69B72')+P('M35 -45 Q26 -22 58 -28','none','#D8C7A0',3)+R(-53,-39,84,26,'#927D5B',3)+(stage==='empty'?'':E(-8,-26,37,13,'#B7A484'))+(stage==='pearl'?E(0,-29,17,17,'#EAE8D2')+E(-5,-34,5,5,'#FAF1DB'):stage==='flower'?line(-12,-30,-12,-88,'#90A67A',5)+flower(-12,-86,.9,'#DEBB8C')+leaf(-12,-59,.32,'#A9BD8E',45):''));}
function littleShop(x,y,s=1,type='flower',open=false){const color=type==='flower'?'#B5C4A3':type==='wash'?'#A6BFC1':'#CBB193';return G(x,y,s,R(-98,-224,196,227,'#D9CFAC',8)+P('M-118 -225 L0 -303 L118 -225Z',color)+R(-43,-118,86,119,open?'#8A9F87':'#B0B99A',35)+R(-79,-193,51,48,'#EFE5BD',8)+R(29,-193,51,48,'#EAE1BB',8)+(type==='flower'?flower(0,-247,.8,'#DFC394'):type==='wash'?P('M-32 -270 L32 -270 L37 -240 L-35 -240Z','#E9E7D4')+line(-42,-272,41,-272,'#8FA59A',4):P('M-33 -252 Q0 -291 34 -252 Q0 -232 -33 -252Z','#BA9663'))+(type==='bread'?P('M-43 -117 L43 -117 L43 -60 Q0 -47 -43 -60Z','#BDAE8B'):''));}
function street(light=false){return R(87,290,826,430,'#E9E5D0',8)+R(94,565,813,147,'#D6CEAA',4)+littleShop(251,611,.66,'flower')+littleShop(504,611,.66,'wash',light)+littleShop(757,611,.66,'bread')+P('M121 676 Q503 624 884 679','none','#C1B78F',4);}
function wheelTracks(start=390,end=825){return P(`M${start} 645 Q${(start+end)/2} 605 ${end} 637 M${start} 665 Q${(start+end)/2} 625 ${end} 657`,'none','#A99D78',4);}
function paperStage(a,night=false,pose='hold'){return room(night)+person('sang',197,458,1.0,pose)+desk(499,722,2.5)+R(68,274,866,468,'#BAAA89',6)+R(79,283,846,447,paper,4)+`<defs><clipPath id="paper-world"><rect x="87" y="290" width="826" height="430" rx="4"/></clipPath></defs><g clip-path="url(#paper-world)">${a}</g>`+inkBottle(945,713,.66);}
function laundryCart(x,y,s=1){return G(x,y,s,E(-57,0,20,23,'#8B8C74')+E(57,0,20,23,'#8B8C74')+R(-78,-77,156,66,'#C1AC83',6)+R(-83,-20,166,13,'#9F8E6C',4)+line(77,-47,123,-94,'#9D8D6A',7)+R(108,-97,28,8,'#9D8D6A',3));}
function backYard(empty=false){return R(94,300,812,412,'#EEE8D1',4)+R(106,561,789,142,'#D8CFAC',4)+littleShop(260,602,.9,'flower',true)+(empty?'':P('M460 561 L872 561 L872 655','none','#B5B49A',34)+[490,545,600,655,710,765,820].map(x=>line(x,550,x,575,'#DAD5B6',3)).join(''));}
function illustratedBook(x,y,s=1,a=''){return G(x,y,s,R(-211,-123,422,253,'#A9B5A0',7)+R(-203,-117,406,239,paper,3)+line(0,-113,0,119,'#C6CCB4',3)+G(-250,-227,.5,a));}
function pearlCaseScene(i,cover){
 const fox=(x=568,y=691,s=.61,pose='hold')=>person('fox',x,y,s,pose);
 const powder=(x,y,s=1)=>G(x,y,s,[-29,-13,5,23,36,-4,18].map((xx,j)=>E(xx,j%2*9,5,3,'#F7F0DB')).join(''));
 if(cover)return room()+person('sang',320,751,1.38,'point')+desk(672,668,1.27)+illustratedBook(659,575,1.03,street()+fox(603,686,.76)+pearlBox(425,647,.8,'pearl'))+inkBottle(860,655,.65);
 switch(i){
 case 0:return room()+person('sang',302,750,1.24,'write')+person('gran',816,747,1.24,'hold')+desk(552,667,1.24)+illustratedBook(551,603,.57,fox(500,673,.88))+book(820,589,.62)+inkBottle(651,636,.63)+pencil(428,564,.7,52);
 case 1:return paperStage(fox(525,676,1.04,'up')+P('M627 354 L546 423','none','#AD936B',10)+E(548,423,6,7,'#6C8595')+star(582,443,.45,'#C1C9B0'));
 case 2:return paperStage(street()+fox(577,691,.69,'low')+person('badger',371,682,.68,'open')+P('M348 620 Q355 646 369 623 M389 621 Q401 645 407 620','none','#E2D6B4',5)+P('M712 372 L444 555','none','#B59B70',9));
 case 3:return paperStage(street()+person('gardener',258,692,.57,'stand')+person('post',485,692,.57,'stand')+fox(672,696,.68,'low')+[[328,676],[365,658],[403,641],[431,627]].map(([x,y])=>E(x,y,10,5,'#AB9876')).join('')+E(241,696,16,9,'none','stroke="#8D8E73" stroke-width="3"')+E(468,696,16,9,'none','stroke="#8D8E73" stroke-width="3"'));
 case 4:return paperStage(street()+pearlBox(486,658,1.0,'pearl')+P('M694 357 L532 612','none','#B89D73',10)+E(529,612,5,7,'#6D8796')+R(429,626,25,41,'#CBA078',5));
 case 5:return paperStage(street(true)+wheelTracks(399,848)+fox(503,695,.65,'point')+person('baker',777,616,.40,'low'),true,'open');
 case 6:return paperStage(street(true)+wheelTracks()+fox(552,697,.65,'hold')+person('washer',498,610,.4,'hold')+cup(496,566,.22),true)+plate(196,750,.65)+G(196,742,.58,P('M-62 -17 L47 -27 L62 19 L-45 26Z','#B4C6BC'));
 case 7:return paperStage(street(true)+wheelTracks(334,861)+powder(689,653,1.7)+powder(764,604,1.05)+fox(590,694,.74,'low'),true);
 case 8:return paperStage(R(94,300,812,412,'#EEE8D1',4)+R(106,561,789,142,'#D8CFAC',4)+littleShop(260,602,.9,'wash',true)+person('washer',615,681,.80,'point')+laundryCart(396,657,.83)+fox(802,695,.63,'low')+powder(499,670,1.9)+basin(514,690,.42)+pencil(520,634,.45,17),true);
 case 9:return paperStage(backYard(true)+R(461,306,433,397,paper,4)+fox(449,692,.69,'stop')+P('M706 379 L586 518','none','#B8A079',9)+E(581,520,4,6,'#6A8596'),true,'think');
 case 10:return paperStage(backYard()+person('gardener',556,684,.77,'hold')+pearlBox(558,610,.75,'dirt')+fox(787,691,.68,'wave')+P('M743 373 L866 543','none','#B9A078',9),true);
 case 11:return paperStage(backYard()+person('gardener',477,684,.73,'low')+pearlBox(577,665,1.02,'pearl')+fox(780,691,.73,'hold')+E(779,608,11,11,'#EFEAD4')+line(528,601,575,642,'#9B967C',5)+leaf(850,694,.39,'#ACBD91',25),true);
 case 12:return room(true)+person('sang',318,750,1.29,'write')+desk(625,669,1.55)+sheet(540,602,.78,G(0,-650,1,wheelTracks(-75,77)))+sheet(741,617,.63,pearlBox(0,6,.76))+inkBottle(681,641,.58)+pencil(461,561,.75,48)+R(230,702,65,42,'#CCAB7B',4)+lamp(828,641,.65);
 case 13:return room(true)+person('sang',315,750,1.30,'hold')+desk(635,670,1.56)+illustratedBook(640,593,.96,street()+fox(620,689,.7))+R(641,483,184,229,'#F2EBD9',5,'opacity=".97"')+P('M454 480 L454 709','none','#A58D6B',4)+inkBottle(843,653,.55);
 case 14:return room()+person('gran',741,743,1.27,'hold')+person('sang',324,747,1.17,'hold')+desk(536,665,1.15)+illustratedBook(537,594,.81,street()+fox(660,687,.62)+pearlBox(428,654,.64))+cup(319,613,.78)+plate(628,644,.57)+E(613,637,12,8,'#C7AE7C')+E(640,637,12,8,'#C7AE7C');
 case 15:return room()+stool(337,670,.95)+stool(757,669,1.0)+person('gran',757,710,1.12,'sit')+person('sang',338,709,1.05,'sit')+desk(550,668,1.13)+illustratedBook(550,594,.86,backYard()+pearlBox(537,661,.8,'flower')+fox(773,687,.62))+cup(662,647,.60);
 default:throw Error('pearlCase page');}
}
function key(x,y,s=1,color='#B7A174'){return G(x,y,s,E(0,-22,17,17,'none',`stroke="${color}" stroke-width="7"`)+line(0,-7,0,39,color,8)+line(0,26,17,26,color,7)+line(0,38,12,38,color,7));}
function smallHouse(x,y,s=1,type='square'){let a='';if(type==='tower')a=R(-60,-287,120,292,'#D1C6A4',9)+P('M-82 -285 L0 -409 L82 -285Z','#9CAF9A')+R(-26,-240,52,94,'#9FBFC0',26)+R(-25,-82,50,87,'#A4AD8E',22);else if(type==='round')a=E(0,-133,122,145,'#D8CBA9')+P('M-132 -183 Q-113 -316 0 -316 Q113 -316 132 -183Z','#BAAAAB')+R(-32,-77,64,83,'#A5B297',25)+[-77,0,77].map((xx,j)=>R(xx-18,-227,36,76,['#CFB48D','#A6BEC0','#C6B1C3'][j],17)).join('');else a=R(-135,-205,270,210,'#D7C8AA',8)+P('M-153 -202 L-113 -256 L117 -256 L154 -202Z','#999F93')+R(24,-116,70,121,'#9FAE93',8)+R(-104,-157,85,78,'#BDD1C4',5)+line(-63,-154,-63,-80,'#B4AA8C',6);return G(x,y,s,E(0,9,type==='tower'?80:147,18,'#88B0AC','opacity=".5"')+a);}
function riverBank(sunset=false){return R(0,0,1000,800,sunset?'#DCD3B5':'#CDDDD5',0)+cloud(244,148,.76,'#EAE8D2')+E(805,155,55,55,'#E5D5A4')+P('M0 419 Q312 349 1000 432 L1000 800 L0 800Z','#A4C2BC')+P('M0 640 L1000 640 L1000 800 L0 800Z','#C1C0A2')+R(0,619,1000,28,'#AAB09A',5)+[80,240,400,560,720,880].map(x=>R(x,530,15,107,'#A2A88E',3)).join('')+line(0,541,1000,541,'#AFB49A',11);}
function woodLegs(x,y,s=1,bent=false){return G(x,y,s,P(bent?'M-23 -125 L-38 -60 L-10 -10 M23 -125 L42 -55 L64 -11':'M-23 -125 L-29 -61 L-34 -9 M23 -125 L28 -61 L34 -9','none','#B79A69',11)+E(-23,-125,12,12,'#D2B98A')+E(23,-125,12,12,'#D2B98A')+E(bent?-38:-29,-60,9,9,'#8D8E6F')+E(bent?42:28,-60,9,9,'#8D8E6F')+line(bent?-11:-34,-8,bent?17:-5,-8,'#A78E63',8)+line(bent?64:34,-8,bent?90:61,-8,'#A78E63',8)+line(-23,-126,23,-126,'#C4AA7A',13)+P('M-23 -125 L0 -166 L23 -125','none','#938F6A',3));}
function woodNeck(x,y,s=1,fold=false){return G(x,y,s,P(fold?'M15 -134 Q83 -173 28 -235 Q-12 -267 -19 -220':'M15 -134 Q52 -201 29 -306 L31 -345','none','#C5AA79',20)+E(fold?28:29,fold?-230:-285,11,11,'#948F6F')+E(fold?-18:31,fold?-218:-352,25,22,'#CFB788')+P(fold?'M-2 -223 L66 -204 L-3 -204Z':'M48 -356 L119 -338 L48 -336Z','#A98E62')+E(fold?-12:38,fold?-223:-357,3,4,'#626D59'))}
function neckStand(x,y,s=1){return G(x,y,s,R(-29,-137,71,14,'#B69D71',4)+R(2,-125,14,125,'#BBA478',4)+R(-48,0,117,12,'#A99167',4));}
function woodHeron(x,y,s=1,fold=false){return G(x,y,s,woodLegs(0,0,1,fold)+E(0,-133,49,35,'#CBB184')+P('M-38 -144 Q-68 -162 -63 -132 L-38 -119Z','#B79C6E')+woodNeck(0,0,1,fold)+P('M-27 -133 L20 -164 L27 -130Z','#D8C399'))}
function wildHeron(x,y,s=1){return G(x,y,s,line(-9,-32,-12,0,'#B29F76',5)+line(10,-32,14,0,'#B29F76',5)+E(0,-58,30,37,'#EAEBDD')+P('M13 -82 Q-18 -105 3 -132 Q25 -145 28 -119','none','#EAEBDD',12)+P('M27 -124 L61 -111 L28 -112Z','#C7B17D')+E(23,-129,3,3,ink));}
function squareRoom(){return room()+R(63,98,276,282,'#AAA98F',6)+R(77,112,248,254,'#BCD1C3',4)+R(81,264,239,98,'#9BBDB5',0)+[114,156,211,267].map((x,j)=>line(x,365,x-9,302-j%2*22,'#92A581',5)+P(`M${x-9} ${302-j%2*22} q-16 -15 -8 -38`,'none','#B8AD7E',6)).join('')+line(201,114,201,364,'#D1C5A4',8)+R(47,369,309,22,'#BAA580',4)+R(705,350,209,351,'#ABA98A',5)+R(722,365,174,336,'#B8CAB0',3)+P('M721 615 Q798 557 897 621 L897 701 L721 701Z','#9FB8A0');}
function towerRoom(){return R(0,0,1000,800,'#D6CFB3',0)+P('M0 800 Q114 524 94 0 L214 0 Q181 481 213 800Z','#BDB89C')+R(505,54,350,406,'#A7A68A',162)+R(524,73,312,366,'#BCD4CC',146)+P('M527 283 Q670 227 833 286 L833 435 L527 435Z','#A0C2B8')+[578,687,760].map((x,j)=>wildHeron(x,352+j%2*27,.28)).join('')+R(0,651,1000,149,'#B9B195',0)+[0,1,2,3,4,5].map(j=>P(`M86 ${697-j*68} Q256 ${760-j*68} 401 ${682-j*68} L402 ${701-j*68} Q256 ${781-j*68} 84 ${717-j*68}Z`,'#C7B58F')).join('')+P('M103 309 Q318 284 406 357 L407 744 M105 309 L105 740','none','#9D987C',10);}
function roundRoom(){return R(0,0,1000,800,'#D8CBB6',0)+E(503,664,536,142,'#B9AF94')+[127,382,637,892].map((x,j)=>R(x-61,111,122,338,'#AEA48E',60)+R(x-47,126,94,304,['#B9CCBF','#C7BAC9','#DEC99A','#AAC6CC'][j],46)+line(x,129,x,428,'#ECE4C9',6)+line(x-42,279,x+42,279,'#ECE4C9',6)).join('')+P('M52 523 Q499 676 951 523','none','#C4B99C',7);}
function partsBox(x,y,s=1){return G(x,y,s,R(-63,-36,126,69,'#B59C74',7)+woodLegs(0,-22,.53)+line(-60,-11,61,-11,'#D2BC91',7));}
function roomChoicesScene(i,cover){
 if(cover)return riverBank(true)+smallHouse(269,540,.64,'tower')+smallHouse(545,532,.62,'round')+smallHouse(821,539,.57,'square')+person('linsui',399,752,1.32,'hold')+key(400,605,.58,'#8D9C92')+woodHeron(683,744,.79,true);
 switch(i){
 case 0:return room()+person('linsui',321,750,1.27,'write')+desk(609,670,1.6)+woodLegs(599,617,.78)+G(754,586,.56,woodNeck(0,0,1),88)+basin(450,625,.4)+sheet(718,645,.41,woodHeron(0,52,.27));
 case 1:return riverBank()+smallHouse(243,579,.65,'tower')+smallHouse(504,572,.66,'round')+smallHouse(797,572,.61,'square')+person('ferryman',846,755,1.22,'hold')+line(719,312,916,765,'#A8B9B7',10)+person('linsui',344,752,1.14,'hold')+[-23,0,23].map((xx,j)=>key(344+xx,620,.34,['#BDAB7C','#B7C4C0','#8B9A8F'][j])).join('');
 case 2:return towerRoom()+person('linsui',573,749,1.31,'point')+key(514,651,.52)+P('M432 652 L432 464 L887 464 L887 654','none','#B6A780',15);
 case 3:return roundRoom()+person('linsui',475,750,1.37,'open')+person('ayao',832,714,.94,'wave')+P('M304 394 Q241 439 272 494 M654 389 Q721 438 687 496','none','#C2B4A0',6);
 case 4:return squareRoom()+person('linsui',439,751,1.32,'think')+[-23,0,23].map((xx,j)=>key(481+xx,626,.34,['#BDAB7C','#B7C4C0','#8B9A8F'][j])).join('');
 case 5:return room()+person('linsui',307,751,1.23,'hold')+person('mother',825,748,1.28,'low')+desk(572,670,1.31)+[-88,0,88].map((xx,j)=>sheet(571+xx,620,.38,smallHouse(0,48,.3,['tower','round','square'][j]))).join('')+basin(754,615,.49);
 case 6:return towerRoom()+person('linsui',289,679,1.12,'hold')+partsBox(291,549,1.06)+P('M343 574 L399 557','none','#B5A179',7);
 case 7:return roundRoom()+person('linsui',337,750,1.28,'reach')+woodLegs(595,725,1.28,true)+P('M494 584 L596 557','none','#8E9476',3)+person('ayao',823,734,1.0,'hold')+E(823,624,29,34,'#E1C697')+E(814,618,5,6,'#A18E6A')+E(832,618,5,6,'#A18E6A')+P('M680 593 Q720 628 684 662','none','#B8B5A0',5);
 case 8:return riverBank(true)+R(151,649,502,68,'#ABA98E',8)+R(132,708,543,49,'#C4BE9F',8)+person('linsui',392,724,1.22,'sit')+[-30,0,30].map((xx,j)=>key(392+xx,609,.42,['#BDAB7C','#B7C4C0','#8B9A8F'][j])).join('')+partsBox(748,724,.72);
 case 9:return squareRoom()+person('linsui',338,750,1.26,'reach')+woodLegs(580,733,1.37,true)+P('M489 589 L580 508','none','#929576',3)+partsBox(202,377,.59)+line(664,737,828,737,'#BAA375',9);
 case 10:return squareRoom()+person('linsui',393,750,1.27,'point')+neckStand(782,700,1.15)+woodNeck(782,700,1.15)+line(676,702,676,311,'#B9A271',8)+[350,400,450,500,550,600,650].map(y=>line(668,y,685,y,'#8F8D70',3)).join('')+key(368,623,.51,'#8F9D92');
 case 11:return riverBank(true)+smallHouse(231,574,.62,'tower')+smallHouse(523,575,.60,'round')+smallHouse(818,574,.55,'square')+person('linsui',344,752,1.16,'reach')+person('ferryman',748,752,1.23,'hold')+line(835,319,914,758,'#A6B5B3',10)+key(467,607,.51,'#B6A475')+key(506,612,.48,'#BAC9C4')+key(358,631,.49,'#8F9D92');
 case 12:return riverBank(true)+smallHouse(259,582,.84,'square')+smallHouse(569,582,.72,'square')+P('M393 456 L393 570','none','#BEB79B',10)+person('ferryman',820,753,1.20,'reach')+line(875,390,660,572,'#AABBB9',10)+person('linsui',405,751,1.12,'point')+person('father',185,753,1.12,'hold')+desk(202,638,.62);
 case 13:return squareRoom()+person('linsui',329,752,1.24,'write')+desk(546,670,1.23)+sheet(560,616,.86,woodNeck(0,66,.34,true))+pencil(448,569,.7,42)+wildHeron(241,326,.44)+neckStand(814,700,1.13)+woodNeck(814,700,1.13);
 case 14:return squareRoom()+person('linsui',335,750,1.25,'reach')+woodHeron(790,700,1.04,true)+P('M487 588 L772 526','none','#909576',3)+person('ayao',923,747,.75,'wave')+G(593,746,.69,R(-55,-36,110,72,paper,4)+E(0,0,19,19,'#B6A079')+R(14,-7,31,14,'#C7AF7F',3));
 case 15:return squareRoom()+R(722,366,175,335,'#718C8A',3)+woodHeron(789,700,.98,true)+stool(416,668,.99)+person('linsui',416,713,1.15,'sit')+P('M391 591 Q455 557 475 594 Q470 623 414 609 Q386 602 422 586','none','#989A7A',4)+cup(318,378,.48)+G(248,347,.22,E(0,0,33,22,'#B8AC8A')+E(12,-21,23,23,'#B99F7D')+P('M24 -15 Q31 -31 12 -35 Q-1 -31 8 -19','none','#8C825E',4));
 default:throw Error('roomChoices page');}
}
function moonPot(x,y,s=1,open=false){return G(x,y,s,P('M-25 -14 L-19 31 Q0 42 19 31 L25 -14Z','#BA9970')+E(0,-14,26,8,'#D2B78D')+E(0,-15,20,5,'#928A68')+P('M-23 -5 Q-43 -12 -38 11 Q-33 22 -23 12 M23 -5 Q43 -12 38 11 Q33 22 23 12','none','#AB916D',5)+line(0,-14,0,-62,'#8CA17B',5)+leaf(0,-39,.22,'#ADC18E',-50)+(open==='half'?glow(0,-78,36)+P('M-16 -65 Q0 -47 16 -65 L15 -98 Q0 -82 -15 -98Z','#E5D5AB')+E(0,-85,11,8,'#EFE2B8'):open?glow(0,-78,59)+P('M-31 -79 Q0 -48 31 -79 L22 -103 Q0 -83 -22 -103Z','#E6D3A0')+E(0,-80,26,10,'#F5E3B1')+E(0,-83,18,6,'#F7EDC5'):E(0,-77,12,25,'#D7D4B0')+P('M-8 -98 Q-19 -73 -6 -55 M8 -98 Q19 -73 6 -55','none','#B5C09C',4)));}
const potPositions=[[-196,-62],[-107,-72],[-18,-62],[-169,9],[-80,0],[9,10]];
function reedBoat(x,y,s=1,{n=6,open=false,bound=false,oars='fold',girl=false,grandpa=false}={}){
 let a=E(0,67,321,33,'#6F9997','opacity=".25"')+P('M-306 -35 Q0 152 306 -35 L252 83 Q0 188 -252 83Z','#A5845F')+E(0,-35,304,72,'#D1B58B')+E(0,-39,284,59,'#BEA27A')+[-215,-130,-45,40,125,210].map(xx=>line(xx,-85,xx,11,'#A88B65',3)).join('');
 if(oars==='fold')a+=P('M-236 33 L-100 57 M53 58 L220 32','none','#897A59',12);else a+=P(oars==='brace'?'M-230 -14 L-354 -63 M225 -12 L356 -96':'M-230 -14 L-355 123 M225 -12 L349 119','none','#9D885F',11)+G(-352,oars==='brace'?-64:123,1,E(0,0,14,39,'#B59B70'),oars==='brace'?-66:42)+G(350,oars==='brace'?-94:118,1,E(0,0,14,39,'#B59B70'),oars==='brace'?62:-44);
 for(let j=0;j<n;j++){const [px,py]=potPositions[j];a+=moonPot(px,py,.72,open);}
 if(bound&&n===6)a+=P('M-212 -67 L-180 -62 L-123 -77 L-91 -72 L-34 -67 L-2 -62 L25 5 L-7 10 L-64 0 L-96 -5 L-153 9 L-185 4 L-213 29','none','#C2CCCC',7);
 if(girl)a+=person(girl==='plain'?'sangliPlain':'sangli',151,-53,.68,'sit');
 if(grandpa)a+=person('pu',159,-65,.77,'sit');
 a+=P('M-305 -35 Q0 91 306 -35','none','#D5BE97',15)+[-248,-195,-140,-85,-29,29,85,140,195,248].map(xx=>E(xx,23-Math.pow(xx/270,2)*40,7,10,'#E8DDC0','transform="rotate(13 '+xx+' '+(23-Math.pow(xx/270,2)*40)+')"')).join('')+G(258,-25,1,P('M4 -16 Q-24 -12 -19 8 Q-3 27 14 9 Q-8 12 -7 -3 Q-6 -10 4 -16Z','#E4CE9D')+E(-35,4,4,5,ink)+E(-6,10,4,5,ink)+P('M-30 21 Q-19 27 -9 23','none','#695F48',3));
 return G(x,y,s,a);
}
function pondBackdrop(night=false,east=false){return R(0,0,1000,800,night?'#68848C':'#CCDCD2',0)+cloud(264,148,.83,night?'#94A8A7':'#E8E7D0')+P('M0 391 Q312 298 1000 403 L1000 800 L0 800Z',night?'#668F8E':'#A5C3B7')+P('M0 375 Q428 290 1000 359 L1000 405 Q423 335 0 421Z','#A0B699')+tree(69,399,.76,'#9DB18E')+tree(920,402,.71,'#9EB38D')+[0,1,2,3].map(j=>P(`M${104+j*230} ${503+j%2*97} q72 -19 145 0`,'none',night?'#A1B7B0':'#CEDDCD',4)).join('')+(east?P('M703 452 L1000 452 L1000 800 L704 800Z','#B8A27F')+[490,551,612,673,734].map(yy=>line(704,yy,1000,yy,'#9E8B69',4)).join(''):P('M0 594 L312 525 L420 631 L0 750Z','#BEA983')+[579,618,657,697].map(yy=>line(0,yy,317,yy-47,'#A28E6B',4)).join('')+R(283,511,24,162,'#9E8A64',8));}
function tiedRope(x,y,s=1){return G(x,y,s,P('M-46 1 Q-28 -27 2 -11 Q29 1 7 15 Q-24 28 -34 9 Q-39 -6 -12 -8 Q21 -8 43 19','none','#D2C49D',5));}
function willow(x,y,s=1){return G(x,y,s,P('M0 0 Q40 -202 0 -342','none','#899478',21)+[-80,-40,0,40,80].map(xx=>P(`M0 -297 Q${xx} -410 ${xx*1.7} -243 Q${xx*1.8} -168 ${xx*1.5} -84`,'none','#90A88B',11)).join(''));}
function farewellBoatScene(i,cover){
 const stage=(night=false,east=false)=>pondBackdrop(night,east);
 const lights=()=>[654,732,810,888].map((x,j)=>R(x,274+j%2*19,28,50,'#D7C494',14)+glow(x+14,304+j%2*19,53)+line(x+14,273,x+14,236,'#9BA58C',3)).join('');
 if(cover)return stage(true)+lights()+reedBoat(500,616,1.11,{open:true,bound:true,oars:'row',girl:'plain'})+E(820,125,43,43,'#D6D9B8');
 switch(i){
 case 0:return stage()+reedBoat(714,601,.71,{n:0})+person('sangli',102,745,.92,'low')+[0,1,2].flatMap((q,j)=>[0,1].map(k=>moonPot(215+q*72,624+k*102,.62))).join('')+tiedRope(302,563,.72);
 case 1:return stage()+reedBoat(566,633,1.04,{n:6,girl:true})+tiedRope(308,567,.8)+P('M308 568 Q330 580 354 607','none','#C9B98B',5);
 case 2:return stage()+reedBoat(566,635,1.04,{girl:true})+tiedRope(307,564,.8)+P('M308 569 Q330 583 354 610','none','#C9B98B',5)+lights();
 case 3:return stage()+reedBoat(566,635,1.04,{girl:false,oars:'fold'})+person('sangli',721,581,.80,'up')+P('M740 364 Q785 368 803 400','none','#C3BEA0',5);
 case 4:return stage(true)+lights()+reedBoat(566,635,1.04,{girl:true})+tiedRope(307,563,.8)+P('M310 566 Q330 579 353 610','none','#C9B98B',5);
 case 5:return stage(true)+lights()+P('M0 541 Q186 475 439 418 Q639 356 1000 406','none','#C4C5A5',22)+reedBoat(650,611,.90,{n:5})+person('sangli',239,749,1.05,'hold')+moonPot(237,629,.85);
 case 6:return stage(true)+reedBoat(616,611,.96,{n:5,oars:'brace'})+person('sangli',220,747,1.06,'hold')+moonPot(219,628,.84)+rock(306,651,.30)+P('M279 580 Q265 578 255 571','none','#BCCEC1',5);
 case 7:return stage(true)+lights()+reedBoat(566,635,1.04,{girl:true})+P('M708 513 Q738 533 716 579','none','#C7D0CC',9)+tiedRope(307,565,.75);
 case 8:return stage(true)+lights()+reedBoat(566,635,1.04,{bound:true,girl:'plain'})+P('M685 496 Q664 520 599 565','none','#C7D0CE',8)+tiedRope(306,566,.75);
 case 9:return stage(true)+willow(83,451,.84)+reedBoat(580,608,1.01,{bound:true,oars:'row',girl:'plain'})+tiedRope(732,578,.48)+leaf(264,489,.29,'#A9BA90',65)+P('M198 671 Q176 683 147 676','none','#BBD0C2',5);
 case 10:return stage(true)+[222,847].map((x,j)=>G(x,653+j*48,.7,E(0,0,78,20,'#98B39A')+leaf(4,0,.55,'#A6BEA4',-70)+flower(-15,-8,.75,'#D7C8AD'))).join('')+reedBoat(524,595,.94,{open:'half',bound:true,oars:'fold',girl:'plain'});
 case 11:return stage(true)+lights()+[0,1,2].map(j=>person('ayao',710+j*75,417,.29,'up')+P(`M${720+j*75} 342 q34 -29 61 -2`,'none',['#CCABAB','#D5C597','#A6B9CB'][j],8)).join('')+reedBoat(507,614,.99,{open:'half',bound:true,oars:'row',girl:'plain'})+P('M241 493 Q229 515 237 523','none','#BBD0CC',4);
 case 12:return stage(true,true)+lights()+person('pu',866,542,.82,'hold')+reedBoat(438,632,.91,{open:true,bound:true,oars:'row',girl:'plain'})+P('M701 513 Q716 505 732 517','none','#CAD3BB',4);
 case 13:return stage(true,true)+reedBoat(414,646,.91,{n:3,open:true,oars:'fold'})+person('pu',825,640,.92,'low')+person('sangliPlain',893,750,.94,'hold')+moonPot(893,644,.79,true)+moonPot(777,719,.72,true)+moonPot(706,744,.72,true)+tiedRope(697,603,.76);
 case 14:return stage(true,true)+reedBoat(418,644,.91,{n:0,grandpa:true})+stool(909,669,.73)+person('sangliPlain',909,713,1.0,'sit')+[0,1,2,3,4,5].map(j=>moonPot(725+(j%2)*80,559+Math.floor(j/2)*89,.53,true)).join('')+P('M734 751 Q786 779 845 753','none','#BCC6C7',8);
 case 15:return stage(true,true)+reedBoat(411,644,.91,{n:0,grandpa:true})+person('sangliPlain',880,746,1.0,'open')+[0,1,2,3,4,5].map(j=>moonPot(724+(j%2)*78,516+Math.floor(j/2)*81,.49,true)).join('')+P('M360 638 Q362 689 400 735','none','#B9C5C6',13)+E(377,690,4,8,'#A59575')+E(388,718,5,9,'#A59575')+P('M775 767 Q850 790 913 766','none','#C6B893',5);
 default:throw Error('farewellBoat page');}
}
function banban(x,y,s=1,sleep=false,arms='open'){
 return G(x,y,s,E(0,1,47,32,'#829CA7')+E(-12,-12,25,12,'#A1B5B6','opacity=".5"')+[0,1,2].map(j=>P(`M-29 ${5+j*7} Q0 ${13+j*7} 29 ${3+j*7}`,'none','#E2C48B',3)).join('')+(sleep?P('M-23 -13 Q-16 -7 -9 -13 M9 -13 Q16 -7 23 -13','none',ink,3):E(-16,-13,4,5,ink)+E(16,-13,4,5,ink))+P(arms==='down'?'M-41 -1 Q-51 8 -47 22 M41 -1 Q51 8 47 22':'M-41 -1 Q-64 5 -66 -10 M41 -1 Q64 5 66 -10','none','#829CA7',12));
}
function walnutHouse(x,y,s=1){return G(x,y,s,R(-25,-49,50,48,'#D2BD92',4)+P('M-36 -50 Q-34 -89 0 -92 Q34 -89 36 -50Z','#9F8666')+P('M-21 -53 Q-24 -77 -7 -86 M0 -54 Q-3 -78 4 -87 M19 -53 Q23 -74 16 -84','none','#BA9E77',3)+R(-15,-37,13,16,'#EBDBAC',2)+R(7,-30,11,29,'#B59E77',3));}
function southTower(x,y,s=1){return G(x,y,s,E(0,5,53,10,'#BBA67F')+R(-32,-162,64,165,'#D4BF93',6)+P('M-44 -162 Q-45 -215 0 -221 Q45 -215 44 -162Z','#9B8264')+P('M-26 -166 Q-30 -195 -7 -212 M1 -168 L3 -213 M25 -166 Q29 -190 16 -208','none','#B99B74',3)+[[-14,-142],[14,-142],[-14,-107],[14,-107],[-14,-72],[14,-72],[0,-37]].map(([xx,yy],j)=>R(xx-7,yy,14,21,j%2?'#E6CF94':'#EFE0B2',4)).join(''));}
function tinyChair(x,y,s=1,rot=0){return G(x,y,s,R(-12,-28,24,24,'#BEA77A',3)+R(-17,-5,34,9,'#D4BE92',3)+line(-12,1,-12,19,'#AD946F',5)+line(12,1,12,19,'#AD946F',5),rot);}
function wheel(x,y,s=1){return G(x,y,s,E(0,0,51,51,'none','stroke="#B39A72" stroke-width="11"')+[0,45,90,135].map(r=>G(0,0,1,line(-49,0,49,0,'#A98F69',6),r)).join('')+E(0,0,10,10,'#D2B784'));}
function city(x,y,s=1,{stone=true,water=true,clamped=false,covered=false,partial=false,bare=false,wobble=false,sleep=false}={}){
 let a=water?P('M-236 42 L207 42 L237 82 L-215 82Z','#BDA67E')+R(-215,82,452,16,'#AA916F',4)+P('M-212 48 L195 48 L216 76 L-197 76Z','#9DBDBC'):R(-105,35,19,66,'#B39A70',4)+R(86,35,19,66,'#B39A70',4)+line(-130,101,130,101,'#B69D76',9);
 a+=wheel(-200,37,.9)+R(-198,25,166,13,'#AE966C',3)+E(0,0,192,47,'#C6AF83')+P('M-192 0 Q0 80 192 0 L192 25 Q0 109 -192 25Z','#AD946C')+E(0,0,192,41,'#DCC79B');
 if(stone)a+=banban(0,49,.68,sleep,sleep?'down':'open');else a+=R(-9,25,18,44,'#AD9369',4);
 if(clamped)a+=P('M-67 29 Q-42 20 -29 46 M67 29 Q42 20 29 46','none','#C4A77B',11)+R(-67,19,26,13,'#907D5A',3)+R(41,19,26,13,'#907D5A',3);
 if(!bare){a+=P('M-168 -2 L154 -2 M-22 -30 L35 25','none','#E8D7AC',12);if(!partial)a+=[[-113,-20],[-52,-33],[15,-33],[-130,15],[-61,18],[9,19]].map(([xx,yy])=>walnutHouse(xx,yy,.72)).join('');a+=G(112,-6,1,southTower(0,0,.86),wobble?-5:0);}
 if(covered)a+=P('M-150 30 Q0 77 150 30','none','#E2CC9C',10)+[-135,-90,-45,0,45,90,135].map(xx=>line(xx,34-Math.pow(xx/160,2)*10,xx,12-Math.pow(xx/160,2)*10,'#B59A71',4)).join('');
 return G(x,y,s,a);
}
function spring(night=false,moon=false){return R(0,0,1000,800,night?'#7C9397':'#D1D5BD',0)+P('M0 322 L177 159 L361 301 L562 136 L767 298 L1000 178 L1000 480 L0 480Z',night?'#7D9890':'#ABB69A')+(night?P('M0 322 L177 159 L361 301 L562 136 L767 298 L1000 178','none','#D9C697',8):'')+(moon?E(694,166,44,44,'#E5DFBF'):'')+P('M0 413 Q500 327 1000 424 L1000 800 L0 800Z','#BDC4A2')+P('M379 482 Q705 336 1000 463 L1000 800 L388 800 Q256 654 379 482Z','#9DBDB7')+P('M405 507 Q718 392 1000 487','none','#D0DBBE',6)+[0,1,2,3,4,5].map(j=>rock(425+j*102,686+j%2*62,.33,['#A6B6AA','#B8AD8F','#A9B6B2'][j%3])).join('')+leaf(188,692,.62,'#C6B286',43)+grass(78,741,.77,'#98AD87')+E(705,639,114,43,'#8BA9A5')+E(706,646,85,27,'#A6C1B6');}
function shed(night=false){return room(night)+R(686,104,207,296,night?'#6C8993':'#CADACE',80)+P('M690 306 Q797 225 891 289 L891 396 L690 396Z',night?'#89A5A4':'#B4CBBB')+P('M690 352 Q802 272 890 318 L890 387 Q787 333 690 395Z','#8FAFAC')+[711,746,790,834,869].map((x,j)=>rock(x,362-j%2*27,.12,['#B9AF95','#A6B4AB','#C6B79A'][j%3])).join('')+line(789,104,789,404,'#D5C8A6',9)+line(692,258,889,258,'#D5C8A6',9);}
function winterGuestScene(i,cover){
 const table=(opts={})=>desk(625,685,1.5)+city(625,547,1.04,opts);
 const boardParts=()=>R(380,618,471,56,'#D9D7C2',8)+[0,1,2].map(j=>walnutHouse(440+j*77,638,.51)).join('')+P('M391 657 L568 657 M391 646 L532 646','none','#B49A71',5)+plate(780,650,.64)+tinyChair(780,640,.6);
 if(cover)return shed(true)+desk(683,664,1.0)+city(686,549,.72,{stone:false,water:false,partial:true})+person('cen',327,755,1.4,'hold')+basin(327,597,1.0,banban(0,-21,.76));
 switch(i){
 case 0:return shed()+person('cen',246,764,1.27,'write')+table({stone:false,water:false})+pencil(413,610,.55,46)+sheet(427,650,.38,R(-36,-29,72,58,'#EDE0B5',3))+tinyChair(832,657,.56);
 case 1:return shed()+person('cen',245,765,1.26,'reach')+table({stone:false,wobble:true})+tinyChair(772,620,.63,84)+P('M717 323 L708 306 M764 324 L778 309','none','#9D9A7D',4)+[0,1,2].map(j=>R(393+j*27,641,12,60,'#B0976F',3,'transform="rotate(31 '+(399+j*27)+' 671)"')).join('');
 case 2:return spring()+rock(254,684,1.14)+person('cen',253,697,1.17,'sit')+banban(597,594,1.18)+P('M521 624 Q597 644 677 622','none','#D2DEC7',4);
 case 3:return spring()+person('cen',277,751,1.24,'reach')+banban(537,637,.9)+P('M405 591 L478 625','none','#D9BD9D',17)+basin(782,672,.9)+sheet(334,731,.49,city(0,24,.38,{stone:false,water:false}));
 case 4:return shed()+person('cen',245,765,1.26,'point')+table({wobble:true})+P('M473 570 Q410 539 446 510 M771 583 Q830 553 800 517','none','#ADB799',4);
 case 5:return shed()+person('cen',246,766,1.26,'reach')+table({clamped:true,covered:true})+P('M395 608 Q466 602 553 582','none','#DABD99',17)+line(423,637,485,649,'#C8AF82',11)+tinyChair(821,650,.54);
 case 6:return shed()+person('cen',245,765,1.26,'reach')+table({clamped:true,covered:true})+P('M394 609 Q478 621 555 582','none','#D9BB99',16)+P('M558 598 L546 608 M684 597 L697 605','none','#A59C7D',4)+R(815,635,54,35,'#D6D7C1',8);
 case 7:return shed()+person('cen',246,765,1.26,'low')+table({water:false,clamped:true,covered:true})+lamp(833,655,.9)+R(461,626,63,40,'#D8D6BD',8)+P('M417 658 L458 647','none','#D9BB99',16);
 case 8:return shed()+R(59,82,257,498,'#A69E80',14)+R(74,96,226,470,'#B9C9B0',7)+G(191,435,.46,desk(0,0,1.2)+P('M-213 -56 L170 -56 L222 3 L-166 3Z','#EEE6CB')+R(-167,0,388,45,'#E4DBC1',4))+[106,155,205,255].map((xx,j)=>line(xx,135,xx,172+j%2*22,'#9EAA8A',3)+E(xx,180+j%2*22,10,17,'#E3D2A0')).join('')+person('cen',344,765,1.15,'think')+table({water:false,clamped:true,covered:true})+tinyChair(650,515,.4);
 case 9:return shed(true)+person('cen',245,765,1.26,'low')+table({water:false,clamped:true,covered:true,sleep:true})+P('M391 673 Q479 642 594 593','none','#DBBE9D',17)+lamp(838,653,.72);
 case 10:return shed(true)+person('cen',245,765,1.26,'reach')+desk(625,685,1.5)+city(667,528,1.04,{water:false,clamped:true,partial:true})+boardParts()+P('M403 604 L483 584','none','#DCC09E',17)+walnutHouse(491,595,.58);
 case 11:return shed(true)+person('cen',255,764,1.26,'hold')+desk(625,685,1.5)+city(687,548,.88,{stone:false,water:false,bare:true})+boardParts()+southTower(459,589,.68)+P('M555 571 Q582 563 601 584 M820 573 Q798 562 776 583','none','#C5A97E',10)+R(585,573,25,14,'#9B835F',3)+R(771,573,25,14,'#9B835F',3)+P('M246 622 Q305 646 369 622 L372 647 Q309 675 242 647Z','#E4DFC7')+banban(308,622,.7)+P('M256 650 Q300 665 346 650','none','#DFC1A0',13);
 case 12:return spring(true)+P('M0 491 Q267 432 402 800 L0 800Z','#CEBD99')+G(797,427,.45,R(-190,-211,380,214,'#B6AA86',5)+P('M-220 -211 L0 -317 L220 -211Z','#9C9474')+R(-83,-180,166,180,'#D8D4B3',4))+[711,753,795,837,879].map(xx=>E(xx,391,7,12,'#E8D2A0')).join('')+person('cen',326,756,1.31,'hold')+basin(326,607,.91,banban(0,-22,.67))+P('M303 593 Q325 606 351 592','none','#CADACC',3);
 case 13:return spring(true)+person('cen',274,750,1.23,'low')+basin(153,742,.63)+banban(661,626,.92)+P('M596 656 Q661 673 732 652','none','#CCDCCC',4)+P('M445 674 Q492 695 543 676','none','#D7E0C8',4);
 case 14:return spring(true,true)+rock(264,700,1.16)+person('cen',265,712,1.17,'sit')+basin(123,748,.62)+banban(706,641,.89,true,'down')+E(713,593,8,9,'none','stroke="#CCDCCB" stroke-width="3"');
 case 15:return shed(true)+person('cen',246,765,1.26,'reach')+desk(625,685,1.5)+R(390,618,454,55,'#D8D7C3',8)+[0,1,2].map(j=>walnutHouse(441+j*82,641,.48)).join('')+southTower(823,626,.57)+G(581,580,1,P('M-117 -19 Q-177 16 -117 49 L-33 49 L-33 -19Z','#C9B183')+P('M39 -19 L126 -19 Q181 16 126 49 L39 49Z','#C9B183')+P('M-104 13 L-39 13 M45 13 L113 13','none','#9B865F',7)+line(-147,70,155,70,'#AD9670',7))+plate(780,655,.63)+tinyChair(780,644,.61)+lamp(376,649,.58)+sheet(493,655,.4,R(-47,-49,94,100,'none',3,'stroke="#A99D7B" stroke-width="4"')+R(-32,-18,64,70,'#D4C69F',4));
 default:throw Error('winterGuest page');}
}
const scenes={'expansion-0071':moonKnotScene,'expansion-0072':pearlCaseScene,'expansion-0073':roomChoicesScene,'expansion-0074':farewellBoatScene,'expansion-0075':winterGuestScene};
export function secondOlderArtwork(story,index,cover=false){
 const render=scenes[story?.id];if(!render)throw new Error(`Unsupported story: ${story?.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==16)throw new Error('Expected 16 pages');
 if(!Number.isInteger(index)||index<0||index>=16)throw new Error('Page index must be an integer from 0 to 15');
 return svg(render(index,cover),cover?`${story.title}：${story.description}`:`${story.title}，第${index+1}页：${story.pages[index].scene.action}`,cover);
}

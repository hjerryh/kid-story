// 15 original eight-page storyboards. Geometry, poses and props are authored per page.
// Each returned scene is standalone SVG; this module has no filesystem writes.
import {E,R,P,G,line,star,glow,leaf,grass,flower,tree,cloud,basket,book,svg} from '../render-illustrations.mjs';
const ink='#374A4B',paper='#F1E5C9';
const h=(x,y,dx,dy,c,w=22)=>P(`M${x} ${y} Q${x+dx*.55} ${y-12+dy*.35} ${x+dx} ${y+dy}`,'none',c,w);
const eyes=(sleep=false)=>sleep?P('M-29 -225 Q-21 -218 -13 -225 M13 -225 Q21 -218 29 -225','none',ink,3):E(-23,-225,5,7,ink)+E(23,-225,5,7,ink);
const configs={
 bear:{type:'bear',fur:'#BA9064',cloth:'#BF766C',kind:'rain'},bearMom:{type:'bear',fur:'#80644E',cloth:'#9EB8BF',kind:'apron'},
 hedge:{type:'hedge',fur:'#C7AE89',cloth:'#8FA786',kind:'vest'},hedgeGran:{type:'hedge',fur:'#ABA08C',cloth:'#A69DAD',kind:'vest',glasses:true},
 rabbit:{type:'rabbit',fur:'#F0E8D4',cloth:'#CE96A1',kind:'dress'},rabbitBlue:{type:'rabbit',fur:'#F2E8D5',cloth:'#86A6BD',kind:'shorts'},
 rabbitNight:{type:'rabbit',fur:'#D7D6CB',cloth:'#D0A5B2',kind:'shirt'},rabbitDad:{type:'rabbit',fur:'#E1E1D6',cloth:'#667E98',kind:'shirt'},
 fox:{type:'fox',fur:'#BC7D58',cloth:'#E1CE9B',kind:'apron'},foxDad:{type:'fox',fur:'#A56D4E',cloth:'#8FAEB9',kind:'apron'},
 squirrel:{type:'squirrel',fur:'#AB795A',cloth:'#74A3A2',kind:'shorts'},squirrelGran:{type:'squirrel',fur:'#988D7A',cloth:'#A295B0',kind:'shawl'},
 frog:{type:'frog',fur:'#98B17D',cloth:'#D8A16B',kind:'vest'},duck:{type:'duck',fur:'#E4CA7E',cloth:'#8AA984',kind:'scarf'},
 duckSnow:{type:'duck',fur:'#EACF82',cloth:'#86ABB9',kind:'shirt',scarf:'#BB7C6A'},duckMom:{type:'duck',fur:'#E6D59B',cloth:'#AE937B',kind:'shirt'},
 ant:{type:'ant',fur:'#A77B61',cloth:'#DCC581',kind:'vest'},antMom:{type:'ant',fur:'#8C6853',cloth:'#7EA9BC',kind:'scarf'},
 deer:{type:'deer',fur:'#BD9670',cloth:'#D8B4BB',kind:'none',flowers:true},deerMom:{type:'deer',fur:'#AC896A',cloth:'#A5B48D',kind:'dress'},
 panda:{type:'panda',fur:'#EFE6D1',cloth:'#D6BD78',kind:'overall'},pandaMom:{type:'panda',fur:'#E6E2CE',cloth:'#A6B99D',kind:'dress'},
 goat:{type:'goat',fur:'#EEE9D5',cloth:'#8CAFC1',kind:'apron'},
 hippo:{type:'hippo',fur:'#ADA7B5',cloth:'#D3A16E',kind:'shirt'},hippoGran:{type:'hippo',fur:'#929596',cloth:'#99ADA1',kind:'shirt',hat:true},
 elephant:{type:'elephant',fur:'#A6AFAC',cloth:'#75AAA1',kind:'overall'},elephantMom:{type:'elephant',fur:'#8D9998',cloth:'#D9CB9D',kind:'apron'},
 monkey:{type:'monkey',fur:'#AD8B66',cloth:'#C17B69',kind:'shorts'},monkeyMom:{type:'monkey',fur:'#9E7B59',cloth:'#E8E6CF',kind:'apron',dots:true},
 owl:{type:'owl',fur:'#B9A17D',cloth:'#B8A6C3',kind:'cape'},owlGran:{type:'owl',fur:'#9F9887',cloth:'#9AAE9E',kind:'cape',glasses:true},
 friendBear:{type:'bear',fur:'#BB966D',cloth:'#8EA68A',kind:'vest'},
};
function kid(name,x,y,s=1,pose='stand',flip=false){
 const c=configs[name];if(!c)throw new Error(`Unknown character ${name}`);
 const f=c.fur,t=c.type,dark='#57615B';let a=E(0,0,84,12,'#526A57','opacity=".12"');
 if(t==='squirrel')a+=P('M49 -47 Q153 -96 118 -204 Q88 -255 53 -204 Q16 -168 77 -150','none',f,54);
 if(t==='fox')a+=P('M40 -57 Q137 -42 133 -135 Q92 -140 55 -107Z',f)+P('M132 -135 Q145 -97 116 -66 L98 -101Z','#F0E4C8');
 if(t==='monkey')a+=P('M43 -64 Q135 -34 123 -109 Q115 -151 84 -127','none',f,17);
 if(t==='hedge')a+=P('M-66 -24 L-88 -73 L-73 -93 L-90 -123 L-65 -135 L-74 -170 L-47 -173 L-39 -206 L-12 -196 L10 -216 L30 -192 L58 -200 L66 -174 L90 -163 L76 -136 L91 -111 L77 -87 L83 -47Z','#8B7458');
 if(t==='ant')a+=E(36,-76,57,57,f)+[-76].map(yy=>h(-38,yy,-44,28,f,9)+h(41,yy,46,30,f,9)).join('');
 a+=E(-30,-9,30,16,t==='duck'?'#C99357':t==='panda'?dark:f)+E(31,-9,30,16,t==='duck'?'#C99357':t==='panda'?dark:f)+E(0,-108,62,95,f);
 if(c.kind==='shirt'||c.kind==='rain'||c.kind==='vest'||c.kind==='apron'||c.kind==='overall')a+=P(`M-48 -181 L48 -181 L60 ${c.kind==='rain'?-28:-58} Q0 -39 -60 ${c.kind==='rain'?-28:-58}Z`,c.cloth);
 if(c.kind==='dress'||c.kind==='cape')a+=P('M-48 -183 L48 -183 L78 -26 Q0 -4 -78 -26Z',c.cloth);
 if(c.kind==='shorts')a+=R(-56,-84,112,63,c.cloth,14)+line(0,-60,0,-20,'#E5D8BE',3);
 if(c.kind==='overall')a+=R(-45,-191,16,69,c.cloth,3)+R(29,-191,16,69,c.cloth,3)+R(-26,-113,52,35,'#B5C9AA',8);
 if(c.kind==='apron')a+=R(-25,-106,50,32,'#EBDDC0',8);
 if(c.kind==='rain')a+=[-30,0,30].map(xx=>line(xx,-172,xx,-37,'#D2A397',3)).join('')+[-151,-113,-74].map(yy=>line(-51,yy,51,yy,'#D2A397',3)).join('');
 if(c.dots)a+=[[-29,-153],[24,-132],[-18,-84],[35,-59]].map(([xx,yy])=>E(xx,yy,6,6,'#81A58B')).join('');
 if(c.kind==='shawl')a+=P('M-57 -183 L0 -157 L57 -183 L73 -109 L0 -130 L-70 -109Z',c.cloth);
 // Ear shapes and head details intentionally differ for each animal.
 if(['bear','panda','monkey','hippo'].includes(t))a+=E(-49,-269,23,24,t==='panda'?dark:f)+E(49,-269,23,24,t==='panda'?dark:f);
 if(['fox','deer','squirrel'].includes(t))a+=P('M-48 -245 L-69 -311 Q-21 -300 -15 -263Z',f)+P('M48 -245 L69 -311 Q21 -300 15 -263Z',f);
 if(t==='rabbit')a+=E(-28,-293,19,64,f,'transform="rotate(-12 -28 -293)"')+E(26,-298,18,66,f,'transform="rotate(9 26 -298)"')+E(-28,-300,7,39,'#D3B7B1')+E(26,-306,6,40,'#D3B7B1');
 if(t==='goat')a+=P('M-33 -265 Q-65 -316 -30 -319 M33 -265 Q65 -316 30 -319','none','#B8AE91',12)+E(-67,-242,29,14,f)+E(67,-242,29,14,f);
 if(t==='elephant')a+=E(-63,-224,47,57,f)+E(63,-224,47,57,f)+E(-68,-224,28,38,'#BAC1B7')+E(68,-224,28,38,'#BAC1B7');
 a+=E(0,-220,65,58,f);
 if(t==='fox')a+=P('M-57 -224 L-9 -204 L0 -216 L10 -204 L57 -224 Q44 -162 0 -165 Q-44 -162 -57 -224Z','#E7D9BC');
 if(t==='bear'||t==='monkey')a+=E(0,-201,36,27,'#DFCCAA');
 if(t==='hippo')a+=E(0,-196,59,34,f)+E(-20,-199,6,5,'#7E8583')+E(20,-199,6,5,'#7E8583');
 if(t==='panda')a+=E(-23,-225,19,24,dark,'transform="rotate(23 -23 -225)"')+E(23,-225,19,24,dark,'transform="rotate(-23 23 -225)"');
 if(t==='frog')a+=E(-35,-267,25,27,f)+E(35,-267,25,27,f)+E(-35,-268,14,17,'#ECE9CC')+E(35,-268,14,17,'#ECE9CC')+E(-35,-267,5,7,ink)+E(35,-267,5,7,ink);
 else if(t==='owl')a+=E(-25,-228,29,35,'#E4D9BA')+E(25,-228,29,35,'#E4D9BA')+eyes(pose==='sleep');
 else a+=eyes(pose==='sleep');
 if(t==='panda')a+=E(-23,-225,3,4,'#F9EFCE')+E(23,-225,3,4,'#F9EFCE');
 if(t==='ant')a+=P('M-24 -269 L-38 -297 M24 -269 L38 -297','none',f,6)+E(-38,-299,6,6,f)+E(38,-299,6,6,f);
 if(t==='duck')a+=P('M-27 -210 Q0 -221 34 -210 L43 -195 Q0 -177 -35 -195Z','#D4A163');
 else if(t==='elephant')a+=P('M0 -203 Q-1 -127 39 -148 Q57 -158 45 -174','none',f,26);
 else if(t==='owl')a+=P('M-8 -207 L8 -207 L0 -195Z','#C99D60');
 else if(t!=='hippo')a+=E(0,-204,t==='frog'?0:8,5,'#766855');
 if(!['duck','elephant','owl'].includes(t))a+=P('M-10 -188 Q0 -180 11 -188','none','#81745F',2);
 if(c.glasses)a+=E(-24,-226,20,18,'none','stroke="#817F6C" stroke-width="3"')+E(24,-226,20,18,'none','stroke="#817F6C" stroke-width="3"')+line(-4,-227,4,-227,'#817F6C',3);
 if(c.hat)a+=R(-61,-284,122,15,'#947D63',8)+R(-37,-324,76,44,'#A58D70',15);
 if(c.flowers)a+=P('M-55 -260 Q0 -291 56 -260','none','#8EAA80',7)+[-40,-13,16,43].map(xx=>daisy(xx,-273+Math.abs(xx)*.12,.35,'#D7A6B3')).join('');
 if(c.kind==='scarf'||c.scarf)a+=R(-52,-178,104,22,c.scarf||c.cloth,9)+P('M29 -160 L53 -160 L61 -103 L36 -112Z',c.scarf||c.cloth);
 if(t==='deer')a+=[[-37,-112],[-21,-94],[30,-122],[42,-87]].map(([xx,yy])=>E(xx,yy,5,7,'#EBDCC1')).join('');
 const arm= t==='panda'?dark:f;
 const poses={stand:[[-12,67],[10,67]],reach:[[64,30],[58,24]],hold:[[45,42],[-43,42]],up:[[-35,-85],[36,-82]],point:[[-12,65],[87,-16]],think:[[45,-36],[12,65]],wave:[[-20,60],[37,-102]],sleep:[[32,37],[-31,37]],low:[[39,89],[58,74]]};
 const v=poses[pose]||poses.stand;a+=h(-43,-154,...v[0],arm,t==='ant'?11:22)+h(43,-154,...v[1],arm,t==='ant'?11:22);
 return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${a}</g>`);
}
function daisy(x,y,s=1,c='#F1E6C7'){return G(x,y,s,[-1,1].map(k=>E(k*11,0,12,8,c)+E(0,k*11,8,12,c)).join('')+E(0,0,7,7,'#D1B16E'));}
function room(wall='#DAD4BB',night=false){return R(0,0,1000,800,wall,0)+R(0,619,1000,181,night?'#929C93':'#B9B497',0)+line(0,619,1000,619,'#AAA48A',8)+R(653,87,249,336,'#ABA992',112)+R(670,104,216,301,night?'#587782':'#C4D6CD',96)+line(779,107,779,404,'#D2C6A5',10)+line(673,254,884,254,'#D2C6A5',10)+R(633,408,289,21,'#B7A17A',6)+(night?E(823,173,35,35,'#EFE1B3'):cloud(760,198,.45,'#E6E7D0'))+R(55,292,253,16,'#AEA081',5)+[95,144,192,237].map((x,i)=>R(x,208-i%2*25,30,83+i%2*25,['#9EB6A7','#D0B383','#A5A8B5'][i%3],3)).join('');}
function meadow(snow=false,sunset=false){return R(0,0,1000,800,sunset?'#E6D4B4':'#CBDCD4',0)+E(793,149,61,61,'#ECDDAD')+cloud(310,167,.7,'#E8E6CF')+P('M0 486 Q263 343 528 460 Q744 375 1000 449 L1000 800 L0 800Z',snow?'#DDE4DC':'#B7C7A0')+tree(66,591,1.15,snow?'#B1C0B0':'#91AB8A')+tree(945,568,.86,snow?'#C0CDC0':'#A3B68E')+P('M0 667 Q470 580 1000 680 L1000 800 L0 800Z',snow?'#EEF0DF':'#A9BD93')+(snow?'':[150,840,903].map(x=>grass(x,746,.7)).join(''));}
function porch(rainy=true){return R(0,0,1000,800,'#CAD7D0',0)+R(0,0,425,800,'#D2C3A3',0)+R(33,173,310,298,'#ACA58A',18)+R(51,191,273,260,'#9EB8B6',10)+line(185,192,185,450,'#D7C5A2',10)+line(54,319,323,319,'#D7C5A2',10)+R(0,641,1000,159,'#B9B193',0)+P('M0 0 L1000 0 L1000 105 L0 143Z','#9A8B70')+R(441,106,25,540,'#B8A080',4)+(rainy?Array.from({length:27},(_,i)=>line(503+(i%9)*57,140+Math.floor(i/9)*157,494+(i%9)*57,184+Math.floor(i/9)*157,'#9BB5B4',3)).join(''):cloud(736,217,.9,'#E9E7D3'));}
function stool(x,y,s=1){return G(x,y,s,R(-48,0,14,85,'#A48D6D',4)+R(34,0,14,85,'#A48D6D',4)+E(0,-4,62,22,'#C7AD81'));}
function desk(x,y,s=1,color='#BDA77E',short=false){return G(x,y,s,R(-156,-31,15,144,color,4)+R(108,-31,15,144,color,4)+R(-141,-3,20,150,color,4)+R(121,-3,20,short?131:150,color,4)+P('M-163 -42 L128 -42 L167 0 L-126 0Z',color)+P('M-163 -42 L-126 0 L-126 16 L-163 -27Z','#A49376')+R(-126,0,293,16,'#AC9A78',3));}
function bowl(x,y,s=1,lining=false,water=false){return G(x,y,s,P('M-61 -23 Q-55 47 0 48 Q55 47 61 -23Z','#B2BABA')+E(0,-23,61,18,'#79A3B3')+E(0,-23,49,11,water?'#A8CDD0':'#D3D9CF')+(lining?P('M-43 -22 Q-12 -45 4 -25 Q30 -46 45 -21 L25 6 L-26 4Z','#B3C4B0'):''));}
function cloth(x,y,s=1,c='#C2D0B7'){return G(x,y,s,P('M-52 -29 L31 -35 L58 20 L-32 34Z',c)+line(-39,-20,24,-23,'#DFDFBE',3)+line(-27,23,40,13,'#DFDFBE',3));}
function sheet(x,y,s=1,art=''){return G(x,y,s,R(-108,-77,216,154,'#F5ECD6',5,'stroke="#D3C7A8" stroke-width="2"')+art);}
function rainbow(x,y,s=1){return G(x,y,s,['#C99788','#D6B575','#A6BA94','#95B7B7'].map((c,i)=>P(`M${-75+i*10} 25 A${75-i*10} ${75-i*10} 0 0 1 ${75-i*10} 25`,'none',c,10)).join(''));}
function bag(x,y,s=1){return G(x,y,s,P('M-30 -45 L30 -45 Q48 -7 36 31 Q0 49 -36 31 Q-48 -7 -30 -45Z','#EDE6D0')+P('M-31 -44 Q0 -32 31 -44 M0 -40 Q-32 -84 -39 -57 Q-36 -37 0 -40 Q35 -74 39 -51 Q30 -36 0 -40','none','#7299AF',5));}
function plate(x,y,s=1){return G(x,y,s,E(0,0,70,23,'#EEE8D2')+E(0,-2,53,15,'none','stroke="#C8D2BB" stroke-width="3"'));}
function bread(x,y,s=1,round=false){return G(x,y,s,round?E(0,0,48,29,'#D6B67B'):P('M-76 -11 Q-23 38 70 -13 Q52 54 -7 48 Q-60 42 -76 -11Z','#D9B77D','#C59F67',3));}
function soup(x,y,s=1,spoon=false){return G(x,y,s,P('M-60 -7 Q-45 63 37 50 L60 -7Z','#D8DFCD')+E(0,-8,61,21,'#B7C7BC')+E(0,-8,50,15,'#D6AF71')+(spoon?E(8,-9,14,9,'#A5B7B0')+line(9,-12,66,-53,'#A5B7B0',7):''));}
function cup(x,y,s=1,water=.5,rot=0){return G(x,y,s,R(-24,-48,48,48,'#CFE0D9',8,'fill-opacity=".55" stroke="#93B1B3" stroke-width="3"')+R(-20,-44*water,40,40*water,'#A6C7CD',5,'opacity=".7"')+P('M25 -40 Q50 -43 47 -21 Q43 -9 26 -15','none','#9AB7BC',5),rot);}
function teacup(x,y,s=1){return G(x,y,s,R(-27,-42,54,45,'#E6E2CC',8)+E(0,-42,27,7,'#82A3B5')+P('M28 -34 Q56 -38 48 -16 Q43 -6 27 -11','none','#C6D1C3',7));}
function snugBed(x=340,y=691,s=1){return G(x,y,s,R(-200,-122,392,171,'#9EAF9C',20)+R(-195,-127,112,61,'#E7DBC2',23)+P('M-188 -71 Q-31 -128 184 -70 L184 43 L-188 43Z','#B4C7BC')+R(-205,-2,15,95,'#9B8C70',4)+R(180,-2,15,95,'#9B8C70',4));}
function lamp(x,y,s=1){return G(x,y,s,glow(0,-41,120)+R(-25,0,50,10,'#C1A875',5)+R(-5,-39,10,39,'#BDA16B',3)+P('M-42 -34 L-22 -83 L23 -83 L43 -34Z','#EBD3A0'));}
function carrot(x,y,s=1){return G(x,y,s,P('M-26 -26 Q0 -40 26 -26 L0 52Z','#CEA172')+grass(0,-27,.5,'#8FAA87'));}
function doorScene(open=false){return meadow()+P('M197 800 L233 282 Q510 44 793 287 L824 800Z','#B4A080')+R(335,241,350,485,open?'#777C65':'#AEC09B',170)+R(360,275,300,447,open?'#D7CCAA':'#ADC098',145)+(!open?[408,473,538,603].map(x=>line(x,321,x,706,'#96AB88',5)).join(''):'')+E(620,525,12,12,'#C5A772')+R(712,395,22,40,'#C6B17C',10)+E(723,445,19,12,'#BD9C66')+line(724,457,724,482,'#9E8C66',3);}
function snail(x,y,s=1,hat=true,flip=false){return G(x,y,s,`<g transform="scale(${flip?-1:1} 1)">${P('M-115 -12 Q-125 -52 -103 -95 Q-77 -112 -64 -79 L-48 -24 Q14 -21 108 -8 Q69 12 -52 7Z','#B1C59A')}${E(18,-74,70,68,'#A18965')}${P('M62 -57 Q78 -110 21 -118 Q-43 -123 -27 -63 Q-9 -24 24 -47 Q49 -67 20 -88 Q-6 -101 -8 -74','none','#C2AC81',7)}${line(-104,-94,-116,-123,'#A1B88B',5)}${line(-79,-97,-67,-125,'#A1B88B',5)}${E(-116,-126,5,6,ink)}${E(-67,-128,5,6,ink)}${P('M-103 -73 Q-93 -66 -83 -75','none','#708765',2)}${hat?R(-111,-108,49,12,'#86A9B7',6)+P('M-110 -108 Q-91 -147 -66 -108Z','#94B7C2'):''}</g>`);}
function scarf(x,y,s=1,folded=false){return G(x,y,s,P(folded?'M-35 -85 L34 -85 L39 70 L-40 70Z':'M-34 -136 L31 -136 L40 152 L-35 152Z','#DAB56C')+daisy(-6,folded?37:117,.75)+daisy(7,folded?-20:-99,.75)+(folded?R(-44,-2,88,18,'#AD9368',6):''));}
function snowman(x,y,s=1,melt=0){return G(x,y,s,(melt>1?E(0,0,88,19,'#A8C4C6'):E(0,-48,62,60,'#F2F0DD')+E(melt?9:0,melt?-116:-131,melt?40:44,melt?37:43,'#F4F2E1'))+(melt>1?E(-19,-3,7,5,'#737D74')+E(18,1,7,5,'#737D74'):E(-15,melt?-116:-132,5,6,'#6F7B72')+E(15,melt?-113:-132,5,6,'#6F7B72')+P(`M-10 ${melt?-101:-115} Q0 ${melt?-95:-109} 10 ${melt?-102:-116}`,'none','#8B9585',2)+leaf(-54,-53,.44,'#A7B28B',-45)+leaf(54,-53,.44,'#A7B28B',52)));}
function cloudPal(x,y,s=1){return G(x,y,s,cloud(0,0,1,'#EDF0DF')+E(-32,-8,5,7,'#7CA1B5')+E(25,-8,5,7,'#7CA1B5')+P('M-14 12 Q0 23 15 12','none','#8BA9B5',3));}
function riceCake(x,y,s=1){return G(x,y,s,R(-27,-25,54,33,'#E3CA94',7)+P('M-27 -25 L-13 -40 L39 -40 L27 -25Z','#EED9A8')+P('M27 -25 L39 -40 L39 -8 L27 8Z','#CDAF76')+E(5,-31,9,5,'#AD7765'));}
function plant(x,y,s=1,wet=false,stage=2){return G(x,y,s,E(0,18,77,17,'#B6B397')+P('M-56 -54 L-41 17 Q0 37 41 17 L56 -54Z','#BE8C71')+R(-62,-63,124,21,'#D0A080',7)+E(0,-59,53,12,wet?'#7F7861':'#A39876')+line(0,-58,0,-136,'#87A478',6)+leaf(0,-100,.47,'#A5BC8B',-60)+leaf(0,-122,.49,'#98B686',56)+(stage===3?leaf(0,-135,.34,'#B7CC95',-10):''));}
function ginkgo(x,y,s=1,curled=false){return G(x,y,s,P(curled?'M0 23 Q-78 -15 -50 -61 Q-17 -29 0 -58 Q41 -87 51 -38 Q40 -13 0 23Z':'M0 23 L-64 -36 Q-62 -70 -31 -67 Q-8 -87 10 -66 Q51 -82 67 -40 L0 23Z','#D8BB73')+P('M0 48 L0 22 M0 22 L-42 -43 M0 22 L-18 -57 M0 22 L12 -57 M0 22 L45 -42','none','#BBA267',2));}
function rainBowlScene(i,cover){
 const rainDrop=(x,y)=>P(`M${x} ${y-14} Q${x-12} ${y+3} ${x} ${y+10} Q${x+12} ${y+3} ${x} ${y-14}Z`,'#A2C2C7');
 if(cover)return porch()+kid('bear',342,747,1.42,'hold')+bowl(573,669,1.4,true)+kid('bearMom',768,738,1.18,'reach')+rainDrop(570,599)+rainDrop(587,541);
 return [
 ()=>porch()+stool(818,641,.7)+kid('bear',339,747,1.37,'low')+kid('friendBear',817,642,.36,'sleep')+bowl(626,681,1.1)+rainDrop(626,557)+rainDrop(624,625),
 ()=>porch()+kid('bearMom',191,462,.67,'sleep')+R(82,386,231,65,'#C7D2BD',18)+kid('bear',558,748,1.35,'hold')+bowl(320,667,1.0)+line(320,520,320,601,'#9BB5B4',3),
 ()=>porch()+kid('bearMom',187,466,.70,'reach')+kid('bear',533,748,1.33,'think',true)+bowl(366,689,.9)+R(76,417,233,31,'#D3DBC3',8),
 ()=>porch()+kid('bear',366,751,1.38,'low')+bowl(635,675,1.3)+G(628,643,1,leaf(0,0,1,'#9EB58D',87))+rainDrop(623,561)+rainDrop(673,627),
 ()=>porch()+G(363,744,1,kid('bear',0,0,1.15,'low'),18)+bowl(635,674,1.5,true)+rainDrop(638,610)+R(105,202,208,224,'#BACAB7',8),
 ()=>porch()+kid('bear',276,749,1.12,'hold')+desk(547,627,1.25)+sheet(560,578,.86,bowl(-7,21,.65)+rainDrop(-8,-29)+R(22,35,27,9,'#A7B99D',3))+line(390,608,433,561,'#C49F72',8)+kid('friendBear',859,703,.46,'stand'),
 ()=>porch(false)+kid('bear',326,748,1.2,'point')+kid('bearMom',789,743,1.38,'low',true)+bowl(568,665,1.1)+cloth(444,592,.65)+rainDrop(569,594),
 ()=>porch(false)+stool(709,677,.9)+kid('bearMom',701,747,1.19,'hold',true)+kid('bear',481,751,1.09,'hold')+bowl(278,712,.8)+line(565,237,933,237,'#A49B7D',5)+cloth(727,283,1.0)+R(697,224,10,28,'#A48B66',3)+R(745,224,10,28,'#A48B66',3),
 ][i]();
}
function scarfScene(i,cover){
 const worn=(x,y,s=1,fold=false)=>scarf(x+8*s,y-99*s,.72*s,fold);
 const mirror=()=>R(453,105,214,418,'#AFA58A',95)+R(468,120,184,387,'#D5DED0',81);
 if(cover)return meadow(false,true)+kid('hedge',420,744,1.6,'wave')+worn(420,744,1.6,true)+kid('hedgeGran',758,730,1.08,'hold')+daisy(253,597,1.8)+daisy(708,314,1.15);
 return [
 ()=>room()+mirror()+kid('hedge',334,745,1.45,'hold')+worn(334,745,1.45)+kid('hedgeGran',768,747,1.31,'stand')+basket(814,703,.62,false),
 ()=>room()+stool(482,649,.8)+kid('hedge',360,748,1.45,'reach')+scarf(365,651,1.05)+P('M348 790 Q388 764 409 769','none','#DAB56C',24),
 ()=>room()+kid('hedge',368,751,1.4,'think')+R(302,503,133,32,'#DAB56C',13)+kid('hedgeGran',750,744,1.42,'reach',true)+scarf(542,617,.6),
 ()=>room()+kid('hedge',344,747,1.3,'hold')+kid('hedgeGran',778,744,1.35,'hold',true)+desk(556,641,1.1)+scarf(557,574,.77,true)+daisy(557,628,.6),
 ()=>room()+kid('hedge',397,750,1.55,'hold')+worn(397,750,1.55,true)+kid('hedgeGran',748,747,1.3,'reach',true)+G(515,565,1.8,R(-31,-7,62,14,'#AE9163',5)),
 ()=>room()+kid('hedge',422,747,1.38,'low')+worn(422,747,1.38,true)+E(523,717,33,32,'#B9B6CE')+P('M500 694 Q532 720 505 739','none','#DFD3BF',6)+R(805,115,190,512,'#AFBA9F',90),
 ()=>meadow()+kid('hedge',337,746,1.45,'reach')+worn(337,746,1.45,true)+kid('rabbit',775,748,1.03,'hold',true)+basket(555,675,.95,false)+[520,557,588].map(x=>carrot(x,625,.55)).join(''),
 ()=>room()+mirror()+kid('hedge',369,745,1.38,'up')+kid('hedgeGran',772,744,1.28,'stand')+line(553,147,553,582,'#A89470',15)+line(510,229,596,229,'#A89470',13)+scarf(553,365,1.0)+R(477,653,56,15,'#AD9368',5),
 ][i]();
}
function snailDoorScene(i,cover){
 const prompt=(x=723,y=584)=>sheet(x,y,.48,snail(13,24,.43,false)+kid('rabbit',-61,31,.21,'stand'));
 if(cover)return doorScene(true)+kid('rabbit',362,758,1.2,'hold')+snail(700,731,1.2,true,true)+sheet(523,586,.84,rainbow(0,15,.83))+flower(804,707,.9);
 return [
 ()=>doorScene()+kid('rabbit',729,754,1.1,'up',true)+G(727,487,.8,P('M-25 2 Q-24 -38 0 -38 Q24 -38 25 2Z','#C59D7A')+R(-9,0,18,20,'#D2BB95',4))+sheet(470,620,.5,rainbow(0,15,.8)),
 ()=>doorScene(true)+snail(501,704,.72,true,true)+kid('rabbit',833,766,.91,'stand')+P('M785 757 Q869 689 1000 749','none','#D3C29B',36),
 ()=>doorScene()+kid('rabbit',784,752,1.14,'hold')+bag(740,622,.65)+G(512,520,.8,snail(0,0,1,true,true),'0')+R(360,275,300,447,'#ADC098',145)+line(694,511,714,499,'#D8C79F',4),
 ()=>meadow()+kid('rabbit',375,749,1.13,'think')+snail(756,729,1.35,false)+stool(805,628,.5)+leaf(841,630,.75,'#A6BB91',90),
 ()=>doorScene()+kid('rabbit',747,751,1.08,'stand')+leaf(641,720,.47,'#A5B78C',30)+line(679,526,690,526,'#E1D0A6',5)+line(677,546,693,551,'#E1D0A6',5),
 ()=>room()+kid('rabbit',324,750,1.17,'hold')+snail(763,737,1.23,true,true)+sheet(543,578,1.05,rainbow(0,15,1.05))+E(736,754,126,30,'#B7C6AC'),
 ()=>doorScene(true)+kid('rabbit',762,751,1.05,'up',true)+snail(494,730,1.07,true,true)+prompt()+sheet(495,374,.64,rainbow(0,15,.9)),
 ()=>doorScene(true)+kid('rabbit',770,751,1.08,'hold')+basket(743,618,.59,false)+[708,742,773].map((x,j)=>flower(x,606,.68,j===1?'#D4AAB4':'#E5D3A0')).join('')+snail(494,728,1.07,true,true)+prompt(),
 ][i]();
}
function foxBreadScene(i,cover){
 const oven=()=>R(677,388,226,251,'#A8ACA0',12)+R(699,444,183,142,'#717E75',10)+E(712,418,9,9,'#D3C39C')+E(750,418,9,9,'#D3C39C')+line(723,462,859,462,'#D0C7AC',8);
 if(cover)return room('#DDD2B4')+kid('fox',352,752,1.5,'hold')+desk(617,650,1.3)+plate(617,597,1.1)+bread(607,587,1.2)+soup(798,574,.8,true)+daisy(755,328,.8);
 return [
 ()=>room('#DDD2B4')+kid('fox',312,749,1.24,'hold')+kid('foxDad',788,747,1.38,'hold')+desk(546,645,1.28)+E(492,602,43,23,'#E9D7B0')+E(633,596,39,31,'#EDDEBC')+R(462,620,196,10,'#C0A783',3),
 ()=>room('#DDD2B4')+kid('fox',386,754,1.45,'hold')+desk(618,655,1.27)+bread(589,603,1.0)+E(727,609,36,24,'#E9D7B0')+E(487,650,10,4,'#EEE1C1'),
 ()=>room('#DDD2B4')+kid('fox',340,747,1.25,'reach')+kid('foxDad',783,747,1.35,'point',true)+desk(538,647,1.11)+R(452,579,192,51,'#939F99',9)+bread(547,584,.85),
 ()=>room('#DDD2B4')+oven()+kid('fox',320,751,1.3,'stand')+kid('foxDad',608,746,1.28,'reach')+R(715,500,149,27,'#ADAC91',4)+bread(788,487,.64)+line(203,752,494,752,'#D3BA87',6)+R(649,595,47,56,'#B1BDA3',12),
 ()=>room('#DDD2B4')+kid('fox',287,752,1.27,'point')+desk(595,655,1.65)+plate(522,598,1.3)+bread(520,585,1.08)+soup(671,560,1.05)+line(672,551,532,584,'#94A59F',9)+E(674,550,15,9,'#94A59F'),
 ()=>room('#DDD2B4')+kid('fox',295,751,1.23,'hold')+kid('foxDad',805,748,1.3,'hold',true)+desk(547,652,1.12)+soup(588,600,1.0)+bread(450,604,.7)+E(395,586,17,12,'#D9B77D'),
 ()=>room('#DDD2B4')+kid('fox',316,748,1.3,'up')+kid('foxDad',794,746,1.29,'hold')+desk(553,647,1.22)+book(560,596,.96,true,'#A8BCA9')+G(560,585,.5,bread(0,0,1)+line(10,-5,48,-39,'#9EAAA0',6))+bread(380,492,.36),
 ()=>room('#DDD2B4')+kid('fox',377,751,1.4,'reach')+desk(652,642,1.28)+R(587,564,154,65,'#A4B1AB',9)+P('M489 569 L533 569 L550 630 L473 630Z','#E0CEA2')+plate(825,607,.58)+oven(),
 ][i]();
}
function squirrelScentScene(i,cover){
 const scentTree=()=>tree(802,607,1.2,'#A4B08B')+Array.from({length:14},(_,j)=>daisy(700+(j%4)*55,229+Math.floor(j/4)*55,.25,'#DDC082')).join('');
 const towels=(n=3)=>Array.from({length:n},(_,j)=>cloth(0,-j*13,.67,j%2?'#D5D8BD':'#D7DAC8')).join('');
 if(cover)return meadow()+scentTree()+kid('squirrel',350,753,1.42,'hold')+kid('squirrelGran',751,750,1.18,'reach',true)+bag(496,578,1.02)+daisy(566,265,.9,'#DCC58A');
 return [
 ()=>room()+kid('squirrel',344,751,1.4,'hold')+desk(614,647,1.3)+bag(597,558,1.16)+E(738,592,39,18,'#D8C18B')+daisy(734,583,.43),
 ()=>meadow()+kid('squirrel',385,753,1.45,'up')+basket(710,725,1.08,false)+G(712,643,1,towels())+R(653,603,127,49,'#B1C5AC',15)+line(107,269,590,269,'#A99F83',5)+cloth(278,315,1.05),
 ()=>meadow()+kid('squirrel',342,751,1.29,'think')+kid('squirrelGran',760,748,1.42,'reach',true)+P('M95 726 Q430 589 638 742','none','#C6B48D',29)+leaf(538,714,.33,'#B2BD94',40),
 ()=>meadow()+scentTree()+kid('squirrel',498,750,1.47,'up')+[412,599,706,843].map((x,j)=>daisy(x,713+j%2*19,.26,'#D8C181')).join(''),
 ()=>meadow()+kid('squirrel',355,752,1.47,'low')+basket(663,728,1.28,false)+G(658,637,1.2,towels(3))+R(585,589,152,58,'#B4C5AC',15)+tree(929,444,.57,'#A4B08B'),
 ()=>meadow()+kid('squirrel',323,752,1.39,'hold')+basket(670,727,1.27,false)+bag(640,621,1.0)+cloth(487,730,1.02)+R(798,636,135,53,'#B4C5AC',15),
 ()=>room()+R(589,105,291,510,'#AF9F81',35)+R(614,132,240,454,'#DBD4B8',22)+line(642,196,826,196,'#A99473',9)+kid('squirrel',358,750,1.25,'up')+kid('squirrelGran',790,749,1.25,'stand')+bag(658,294,.72)+line(659,203,659,254,'#A99473',5),
 ()=>meadow(false,true)+kid('squirrel',335,754,1.35,'wave')+kid('squirrelGran',755,750,1.31,'wave',true)+cloth(384,613,.62)+scentTree(),
 ][i]();
}
function frogPlayScene(i,cover){
 const rings=()=>[0,1,2,3,4].map((j)=>E(410+j*80,686-j*34,42,17,'none',`stroke="${['#CBA395','#B7C5A0','#D9BF8B','#95B7BC','#B1A9C3'][j]}" stroke-width="12"`)).join('');
 const leafPath=()=>[0,1,2,3,4].map(j=>leaf(532+j*70,753-j*38,.58,'#91AD85',64)).join('');
 const bug=(x,y,s=1)=>G(x,y,s,E(0,0,13,17,'#BB7F6C')+E(0,-15,8,7,ink)+line(0,-9,0,16,ink,2)+E(-6,-2,3,3,ink)+E(6,7,3,3,ink));
 if(cover)return meadow()+rings()+leafPath()+kid('frog',387,750,1.4,'hold')+kid('rabbitBlue',694,665,.84,'wave')+flower(481,556,.9)+bug(715,721,1.5);
 return [
 ()=>meadow()+rings()+kid('rabbitBlue',299,751,1.1,'wave')+kid('frog',670,735,.98,'stand')+kid('duck',855,754,.83,'stand')+basket(419,707,.65,false)+flower(415,640,.75),
 ()=>meadow()+rings()+G(620,672,.94,kid('rabbitBlue',0,0,1,'up'),-10)+kid('frog',303,750,1.38,'hold')+flower(452,737,.55),
 ()=>meadow()+kid('frog',349,753,1.33,'think')+kid('rabbitBlue',744,752,1.02,'reach',true)+kid('duck',850,756,.73,'stand')+basket(567,716,.68,false)+flower(561,648,.68),
 ()=>meadow()+rings()+kid('frog',314,751,1.18,'point')+kid('duck',681,748,1.02,'low')+leafPath()+kid('rabbitBlue',815,623,.68,'low',true),
 ()=>meadow()+rings()+leafPath()+kid('frog',622,741,1.12,'hold')+flower(670,574,.7)+kid('rabbitBlue',812,592,.65,'up')+kid('duck',382,753,.96,'hold')+flower(426,610,.6),
 ()=>meadow()+leaf(553,652,1.25,'#96B58A',85)+bug(540,623,2.15)+G(310,744,1,kid('frog',0,0,1.1,'low'),15)+G(822,749,1,kid('rabbitBlue',0,0,.95,'low'),-12)+kid('duck',690,757,.82,'low',true),
 ()=>meadow()+kid('rabbitBlue',318,749,1.06,'hold')+[0,1,2,3,4].map(j=>E(366,617-j*9,63,23,'none',`stroke="${['#CBA395','#B7C5A0','#D9BF8B','#95B7BC','#B1A9C3'][j]}" stroke-width="9"`)).join('')+kid('frog',651,748,1.15,'hold')+kid('duck',837,748,.88,'hold')+basket(800,638,.57,false),
 ()=>meadow()+tree(180,699,1.57,'#8FAA85')+E(466,753,238,37,'#91AB86')+kid('frog',466,747,1.2,'hold')+leaf(474,634,.48,'#B6C690',65)+kid('duck',748,750,.82,'sleep')+[810,859,909].map(x=>flower(x,702,.65,'#D4B28E')).join(''),
 ][i]();
}
function raincoat(x,y,s=1,shadow=false,fold=false){return G(x,y,s,fold?R(-62,-52,124,75,shadow?'#87948D':'#D7BD77',17):P('M-29 -216 Q-56 -274 -33 -279 Q-9 -278 -9 -226 L9 -226 Q7 -282 31 -284 Q58 -279 31 -216 Q62 -198 54 -164 L87 -142 L64 -104 L43 -118 L47 17 L-47 17 L-43 -118 L-64 -104 L-87 -142 L-54 -164 Q-64 -198 -29 -216Z',shadow?'#83928C':'#D7BD77')+(!shadow&&!fold?line(0,-134,0,15,'#EBD8A3',4):''));}
function bedroom(lit=false,withLamp=true){return R(0,0,1000,800,lit?'#D4D4C1':'#A9BBB7',0)+R(0,640,1000,160,lit?'#B6B8A1':'#8C9F98',0)+R(60,111,247,291,'#8CA49F',110)+R(77,128,213,255,'#577784',95)+E(213,204,38,38,'#E6D7AB')+line(181,128,181,381,'#B0B5A1',9)+line(77,272,290,272,'#B0B5A1',9)+R(757,121,198,522,'#939E8C',35)+line(856,152,856,618,'#B9B79C',4)+E(841,389,7,7,'#CCB984')+E(870,389,7,7,'#CCB984')+(withLamp?stool(635,651,.65)+lamp(633,636,.75):'');}
function nightRabbitScene(i,cover){
 if(cover)return bedroom()+kid('rabbitNight',357,716,1.18,'hold')+snugBed(361,737,1.0)+carrot(400,614,.55)+kid('rabbitDad',743,748,1.2,'stand')+raincoat(816,390,.35);
 return [
 ()=>bedroom()+raincoat(653,506,1.38,true)+kid('rabbitNight',332,724,1.08,'hold')+snugBed(331,743,1.0)+carrot(379,630,.52)+raincoat(882,602,.37),
 ()=>bedroom()+raincoat(701,503,1.12,true)+kid('rabbitNight',322,714,1.08,'hold')+snugBed(330,742,1.0)+kid('rabbitDad',635,748,1.17,'hold',true)+carrot(395,653,.48),
 ()=>bedroom(true)+kid('rabbitNight',350,727,1.02,'think')+snugBed(327,744,1.0)+kid('rabbitDad',642,751,1.19,'point')+raincoat(883,600,.83)+E(504,59,50,15,'#E6DCC1'),
 ()=>bedroom()+kid('rabbitDad',718,751,1.16,'up')+raincoat(710,443,.64)+raincoat(517,420,1.08,true)+kid('rabbitNight',320,740,.99,'point')+snugBed(283,756,.85),
 ()=>bedroom(false,false)+kid('rabbitNight',450,751,1.24,'up')+P('M551 274 Q516 227 535 211 Q552 204 566 250 Q591 203 605 220 Q611 240 590 277 L606 309 L552 311Z','#788D87')+kid('rabbitDad',785,747,1.1,'stand')+lamp(278,669,.94),
 ()=>bedroom(false,false)+R(780,142,150,469,'#C0BEA5',20)+raincoat(855,511,.65)+kid('rabbitDad',662,749,1.15,'reach')+kid('rabbitNight',325,734,.99,'point')+snugBed(293,750,.85)+lamp(515,649,.6),
 ()=>bedroom(false,false)+kid('rabbitNight',332,724,1.08,'hold')+snugBed(333,741,1.0)+carrot(382,628,.55)+stool(750,691,.75)+kid('rabbitDad',750,749,1.08,'hold',true)+lamp(578,652,.65),
 ()=>bedroom(false,false)+G(343,646,1,kid('rabbitNight',0,0,.84,'sleep'),-77)+snugBed(338,749,1.06)+carrot(269,634,.48)+lamp(611,650,.75)+E(533,68,37,11,'#ADBDB1'),
 ][i]();
}
function antHome(x,y,s=1){return G(x,y,s,E(0,-103,200,110,'#B6BBA4')+P('M-200 -102 Q-100 -153 103 -110 Q169 -89 200 -102','none','#C7CCB4',7)+R(-63,-104,126,164,'#A7BB94',60)+E(32,-28,7,7,'#C6AD75')+line(164,-86,164,-242,'#9AAA7A',6)+E(164,-253,36,36,'#E1E1BD')+Array.from({length:10},(_,j)=>{const a=j*Math.PI/5;return line(164,-253,164+Math.cos(a)*42,-253+Math.sin(a)*42,'#EEE9CE',2)}).join(''));}
function routeBase(){return meadow()+P('M175 800 Q312 604 555 631 Q699 578 802 378','none','#CBBE99',78)+P('M548 630 Q675 692 1000 678','none','#CBBE99',68)+leaf(286,619,2.2,'#A7BB91',-29)+leaf(344,564,1.65,'#92AE84',25)+P('M626 542 L772 535 M683 538 L699 505','none','#A38D68',17);}
function stones(x,y,n,s=1){return G(x,y,s,Array.from({length:n},(_,j)=>E(j*27,0,12,9,'#ABB2A1')).join(''));}
function antRoadScene(i,cover){
 if(cover)return routeBase()+antHome(727,476,.68)+kid('ant',365,754,1.25,'point')+stones(567,709,3,1.7)+stones(497,593,2,1.2)+stones(727,466,1,.8);
 return [
 ()=>routeBase()+antHome(752,502,.82)+kid('ant',369,752,1.33,'hold')+R(356,565,84,52,'#D0C5B2',16),
 ()=>routeBase()+kid('ant',390,750,1.23,'low')+basket(767,698,.56,false)+P('M497 720 L540 691 L541 713 M540 691 L516 690','none','#F2E8CB',7)+R(481,686,14,35,'#ECE3C8',4),
 ()=>routeBase()+P('M470 677 L496 659 M508 650 L520 643','none','#D7D4B5',5)+E(616,694,90,18,'#B8CCC5')+kid('ant',439,752,1.28,'think')+basket(496,635,.5,false)+cloud(620,164,1.26,'#B5C8C1'),
 ()=>routeBase()+antHome(787,469,.69)+kid('ant',394,754,1.15,'reach')+kid('antMom',629,749,1.36,'reach',true)+basket(354,651,.45,false),
 ()=>meadow()+antHome(784,490,.75)+kid('ant',365,752,1.2,'low')+kid('antMom',735,749,1.3,'low',true)+stones(515,703,3,2.0)+E(575,753,43,10,'#A7A37D')+basket(443,736,.55,false),
 ()=>routeBase()+stones(363,652,1,1.5)+stones(636,565,2,1.4)+stones(638,663,3,1.45)+kid('ant',370,756,1.16,'point')+kid('antMom',807,749,1.21,'stand')+antHome(808,359,.49),
 ()=>routeBase()+stones(364,649,1,1.5)+stones(637,562,2,1.4)+stones(638,661,3,1.45)+kid('ant',454,753,1.19,'low')+cloth(573,679,.44)+kid('antMom',788,751,1.2,'stand')+E(813,718,78,17,'#B7CBC3'),
 ()=>room('#D0C8A9',true)+kid('ant',354,708,.99,'sleep')+snugBed(357,741,.85)+R(300,583,105,47,'#D0C5B2',15)+antHome(784,411,.44)+basket(786,715,.75,false)+lamp(571,618,.7),
 ][i]();
}
function duckSnowScene(i,cover){
 const basin=(x,y,s=1)=>G(x,y,s,P('M-105 -10 Q-88 43 79 31 L105 -10Z','#9EBABC')+E(0,-10,105,29,'#BFD5D2'));
 const snowPic=(x,y,s=1)=>sheet(x,y,s,snowman(-3,44,.61)+kid('duckSnow',62,48,.24,'stand'));
 if(cover)return meadow(true)+kid('duckSnow',356,754,1.37,'hold')+snowman(656,694,1.65)+kid('duckMom',813,750,1.08,'wave')+snowPic(548,466,.63);
 return [
 ()=>meadow(true)+kid('duckSnow',337,752,1.26,'reach')+snowman(596,707,1.45)+kid('duckMom',815,748,1.27,'low',true)+leaf(535,706,.46,'#A7B28B',-48),
 ()=>room()+kid('duckSnow',319,748,1.27,'hold')+desk(676,634,1.25)+basin(674,599,.9)+snowman(676,594,.88)+cloth(489,609,.62,'#E6E4CC'),
 ()=>room()+kid('duckSnow',278,751,1.32,'think')+desk(642,656,1.6)+basin(649,605,1.2)+snowman(645,598,1.05,1)+E(630,476,6,8,'#F4F2E1')+E(616,601,7,5,'#737D74')+E(688,606,30,7,'#9CBFC6'),
 ()=>room()+kid('duckSnow',323,754,1.19,'point')+kid('duckMom',792,751,1.39,'reach',true)+desk(551,647,.96)+basin(552,615,.74)+snowman(551,606,.69,1)+R(15,100,181,520,'#BDD2C6',88),
 ()=>meadow(true)+kid('duckSnow',363,752,1.3,'reach')+snowman(630,710,1.38)+kid('duckMom',807,746,1.23,'low',true)+E(574,668,29,25,'#F0F0DF')+R(468,553,31,33,'#C1B5C5',9),
 ()=>room()+kid('duckSnow',318,753,1.29,'hold')+desk(580,651,1.33)+snowPic(584,574,1.1)+line(431,592,475,558,'#D1AE77',7)+G(780,372,.45,snowman(0,0,1.1)),
 ()=>meadow(false,true)+E(548,716,135,29,'#E3E5D4')+snowman(550,720,1.0,2)+kid('duckSnow',318,753,1.25,'low')+kid('duckMom',781,752,1.32,'low',true)+leaf(715,722,.41,'#A7B28B',70)+grass(651,738,.51),
 ()=>room('#D6D0B7',true)+snowPic(474,330,1.18)+kid('duckSnow',380,749,1.22,'point')+kid('duckMom',784,746,1.35,'hold')+R(555,671,100,61,'#C0A982',10)+E(584,674,8,6,'#7B8276')+E(618,673,8,6,'#7B8276'),
 ][i]();
}
function roundTable(x,y,s=1){return G(x,y,s,R(-105,0,18,129,'#AC9672',5)+R(87,0,18,129,'#AC9672',5)+R(-57,-15,15,111,'#AC9672',5)+R(43,-15,15,111,'#AC9672',5)+E(0,0,166,45,'#B8A17B')+E(0,-12,166,45,'#D0BA90'));}
function teaTable(x,y,s=1){return roundTable(x,y,s)+teacup(x-70*s,y-48*s,.64*s)+teacup(x+70*s,y-48*s,.64*s)+G(x,y-38*s,s,R(-19,-58,38,57,'#ABC1B2',8)+flower(0,-53,.7,'#D6B4BB'));}
function cloudTeaScene(i,cover){
 const home=()=>R(0,0,481,800,'#D7C8AA',0)+R(110,152,298,350,'#9BAE9C',115)+R(132,173,253,304,'#D8E1C8',96)+line(257,180,257,469,'#BEAD87',12)+line(136,331,383,331,'#BEAD87',12)+R(0,641,481,159,'#B9B195',0);
 if(cover)return meadow()+cloudPal(690,379,1.33)+kid('deer',354,749,1.5,'hold')+teaTable(572,658,1.12)+P('M705 427 Q755 511 655 571','none','#E9ECDC',27);
 return [
 ()=>meadow()+home()+kid('deer',345,751,1.39,'up')+cloudPal(746,285,1.13)+teacup(436,431,.8)+teaTable(648,667,1.04),
 ()=>meadow()+home()+cloudPal(503,318,1.28)+R(392,157,29,339,'#B1A285',4)+kid('deer',279,751,1.2,'think')+teacup(319,596,.68),
 ()=>meadow()+R(0,0,520,800,'#D5C6A5',0)+R(247,166,247,477,'#B6BEA0',121)+cloudPal(590,360,1.27)+kid('deer',285,750,1.2,'reach')+teacup(376,594,.69)+R(232,644,290,24,'#AB9E7F',5),
 ()=>meadow()+home()+kid('deer',297,752,1.2,'point')+cloudPal(692,319,1.16)+teaTable(592,655,1.08)+line(597,361,628,354,'#BFCAB5',4),
 ()=>meadow()+kid('deer',302,753,1.24,'hold')+kid('deerMom',797,751,1.36,'hold',true)+roundTable(547,654,1.23)+stool(358,701,.62)+teacup(574,602,.69)+G(639,609,.75,R(-20,-48,40,48,'#ABC1B2',7)+flower(0,-41,.71,'#D6B4BB')),
 ()=>meadow()+kid('deer',323,751,1.32,'hold')+teaTable(594,655,1.2)+cloudPal(761,356,1.1)+P('M759 395 Q772 488 686 548','none','#E9ECDC',23)+teacup(680,548,.73)+cloth(461,616,.56)+E(702,598,5,8,'#A8C6C8'),
 ()=>meadow()+cloudPal(611,214,1.4)+kid('deer',340,751,1.28,'hold')+teaTable(586,657,1.3)+P('M713 248 Q861 391 730 561','none','#E9ECDC',24)+teacup(730,559,.72)+P('M540 344 Q570 329 585 348 Q602 329 623 339','none','#8EAA94',5),
 ()=>meadow(false,true)+kid('deer',362,751,1.42,'wave')+cloudPal(728,236,.94)+teaTable(654,669,1.05)+stool(803,694,.65)+P('M671 403 Q704 381 727 356','none','#BAC8B6',5),
 ][i]();
}
function menu(x,y,s=1){return sheet(x,y,s,E(-58,6,23,19,'#D7BE83')+P('M-16 11 Q-19 -20 7 -20 Q33 -14 20 8 Q13 27 -16 11Z','#E8D9AF')+P('M-8 5 Q-7 -11 9 -7','none','#C9BC91',3)+riceCake(61,10,.62));}
function paperBag(x,y,s=1){return G(x,y,s,P('M-46 -70 L-32 -81 L-17 -69 L0 -82 L17 -70 L35 -80 L49 -66 L49 36 L-47 36Z','#CFB88C')+line(-33,-62,-33,24,'#E0CBA1',3));}
function bakeryCounter(){return R(374,427,546,218,'#B7B59A',10)+R(393,449,510,124,'#BDD2C8',8,'fill-opacity=".5" stroke="#9FAF9D" stroke-width="4"')+line(395,574,901,574,'#A7AD94',6)+[442,480].map(x=>E(x,528,26,18,'#D7BE83')).join('')+G(597,531,.8,P('M-40 10 Q-54 -34 -16 -35 Q15 -54 40 -24 Q67 6 28 23 L-40 10Z','#E8D9AF')+P('M-20 4 Q-20 -20 4 -18 Q22 -14 17 5','none','#C9BC91',4))+riceCake(738,531,.9)+riceCake(819,531,.9);}
function bakery(clerkPose=null){return room('#DED5BA')+(clerkPose?kid('goat',754,477,1.05,clerkPose,true):'')+bakeryCounter();}
function pandaCakeScene(i,cover){
 if(cover)return bakery('wave')+kid('panda',366,756,1.52,'hold')+paperBag(474,586,1.05)+riceCake(568,576,1.35);
 return [
 ()=>bakery()+kid('panda',294,752,1.3,'point')+kid('pandaMom',804,750,1.28,'stand')+basket(839,621,.55,false),
 ()=>bakery('point')+kid('panda',306,753,1.37,'hold')+paperBag(562,438,.59),
 ()=>bakery('point')+kid('panda',289,754,1.27,'think')+kid('pandaMom',510,750,1.42,'reach',true),
 ()=>bakery('reach')+kid('panda',305,755,1.36,'point')+menu(583,422,1.05),
 ()=>bakery('hold')+kid('panda',314,755,1.37,'point')+paperBag(595,423,.75)+riceCake(675,394,.8)+line(681,375,707,355,'#9BA99A',6),
 ()=>meadow()+R(568,0,432,641,'#D3C3A2',0)+R(690,179,232,445,'#B4C1A6',114)+kid('goat',808,606,.79,'wave')+kid('panda',343,754,1.43,'wave')+paperBag(319,612,.82),
 ()=>meadow()+kid('panda',338,751,1.29,'hold')+kid('pandaMom',711,751,1.45,'reach',true)+paperBag(385,611,.78)+P('M172 800 Q406 611 1000 709','none','#D0C29B',39),
 ()=>room()+kid('panda',315,752,1.29,'hold')+kid('pandaMom',808,751,1.36,'hold',true)+desk(551,649,1.2)+plate(542,606,.93)+riceCake(540,592,.85)+riceCake(426,586,.31)+line(393,577,436,588,'#A4B5AC',6)+paperBag(685,610,.51),
 ][i]();
}
function moonDrawing(x,y,s=1,wonky=false){return sheet(x,y,s,wonky?P('M-44 29 Q-81 -35 -20 -42 Q30 -64 49 -8 L70 9 L42 15 Q12 57 -44 29Z','none','#D6BA6F',8):E(0,0,51,51,'#D9BE78')+[-73,-50,62,79].map((xx,j)=>star(xx,j%2?-46:47,.5,'#D9BE78')).join(''));}
function greenDesk(x=572,y=617,s=1,shim=false){return desk(x,y,s,'#91AE97',true)+(shim?R(x+121*s,y+128*s,21*s,19*s,'#B7A17B',2):'');}
function hippoDeskScene(i,cover){
 if(cover)return room()+kid('hippo',326,750,1.46,'point')+greenDesk(622,618,1.14,true)+moonDrawing(621,567,.93)+kid('hippoGran',821,744,.94,'hold')+R(774,751,30,20,'#B7A17B',3);
 return [
 ()=>room()+kid('hippo',312,750,1.4,'hold')+greenDesk(629,619,1.13)+moonDrawing(620,568,.86,true)+line(457,585,496,557,'#D6BA6F',8)+R(769,578,68,31,'#AFB99C',6),
 ()=>room()+kid('hippo',323,752,1.38,'think')+greenDesk(630,619,1.12)+moonDrawing(617,568,.86,true)+line(742,572,795,564,'#B37F73',8)+line(737,595,793,586,'#8FAEBD',8)+P('M816 647 L828 653 M814 668 L830 670','none','#B8A682',4),
 ()=>room()+kid('hippo',314,751,1.35,'point')+G(815,747,1,kid('hippoGran',0,0,1.1,'low'),-13)+greenDesk(594,610,1.08)+moonDrawing(588,559,.75,true),
 ()=>room()+kid('hippo',313,754,1.29,'low')+kid('hippoGran',831,746,1.25,'low',true)+greenDesk(565,584,1.17)+cloth(720,754,.56)+E(719,750,43,15,'none','stroke="#DBC695" stroke-width="3" stroke-dasharray="5 6"'),
 ()=>room()+kid('hippo',296,752,1.3,'hold')+greenDesk(574,593,1.16)+cloth(749,756,.6)+kid('hippoGran',843,749,1.12,'hold',true)+R(446,610,93,9,'#BBA582',2)+R(453,597,93,9,'#C7B18C',2),
 ()=>room()+kid('hippo',331,753,1.39,'reach')+greenDesk(619,600,1.13,true)+kid('hippoGran',893,750,1.05,'low',true)+R(674,571,60,28,'#AFB99C',5),
 ()=>room()+kid('hippo',317,751,1.34,'hold')+greenDesk(607,610,1.1,true)+moonDrawing(610,558,.9)+stool(841,673,.69)+kid('hippoGran',843,747,1.07,'hold',true)+line(453,575,483,541,'#D6BA6F',8),
 ()=>room()+moonDrawing(364,261,.93,true)+moonDrawing(621,263,.93)+kid('hippo',371,752,1.35,'point')+kid('hippoGran',784,747,1.36,'hold',true)+greenDesk(573,621,.84,true),
 ][i]();
}
function elephantPlantScene(i,cover){
 const ledge=()=>R(511,520,391,31,'#BAA17B',8)+R(535,550,22,153,'#AB9674',4)+R(851,550,22,153,'#AB9674',4);
 const drops=(x,y)=>[0,1,2].map(j=>E(x+j*7,y+j*19,4,7,'#9FBFC4')).join('');
 if(cover)return room()+kid('elephant',353,752,1.45,'hold')+ledge()+plant(716,504,1.34,true,3)+cup(513,576,1.0,.4)+daisy(796,293,.5);
 return [
 ()=>room()+ledge()+plant(713,503,1.07,false)+kid('elephant',339,753,1.45,'hold')+cup(496,560,1.04,.19),
 ()=>room()+ledge()+plant(716,502,1.05,false)+kid('elephant',316,750,1.24,'reach')+kid('elephantMom',777,749,1.4,'reach',true)+cup(513,558,1.2,.93),
 ()=>room()+kid('elephant',300,754,1.39,'reach')+desk(663,653,1.28)+plant(690,596,1.28,true)+cup(534,482,1.02,.55,28)+P('M551 451 Q583 470 620 520','none','#9EBFC3',7),
 ()=>room()+kid('elephant',321,752,1.28,'low')+desk(663,589,1.38)+plant(693,530,1.18,true)+cup(516,476,.82,.32,31)+drops(694,565)+E(691,606,65,15,'#AFCCC6'),
 ()=>room()+ledge()+plant(714,503,1.06,true)+kid('elephant',322,751,1.28,'reach')+cloth(482,550,.73)+cup(530,517,.67,.18)+kid('elephantMom',829,750,1.19,'hold')+G(855,611,.8,plate(0,0,1),30)+drops(904,643),
 ()=>room()+ledge()+plant(720,502,1.05,true)+kid('elephant',355,750,1.44,'point')+cup(526,518,.82,.7)+R(250,677,91,72,'#A9BBB1',12),
 ()=>room()+ledge()+plant(716,501,1.05,true)+kid('elephant',324,752,1.27,'reach')+kid('elephantMom',823,748,1.27,'stand')+cup(539,470,.85,.42,22)+P('M555 443 Q606 461 664 474','none','#A9C7C7',6),
 ()=>room()+ledge()+plant(715,503,1.21,true,3)+kid('elephant',338,753,1.37,'point')+kid('elephantMom',825,751,1.16,'hold')+cup(549,519,.76,0),
 ][i]();
}
function cakeTable(count=4,napkins=0){let a=desk(544,608,1.7);for(let j=0;j<4;j++){const x=354+j*128;a+=plate(x,569,.75);if(j<count)a+=riceCake(x,555,.69);if(j<napkins)a+=cloth(x,617,.37,'#E8E3CD');}return a;}
function fourFriends(pose='hold'){return kid('monkey',242,754,1.12,pose)+kid('rabbitBlue',812,752,.92,'hold')+kid('friendBear',715,508,.7,'hold')+kid('duck',405,495,.72,'hold');}
function monkeyCakesScene(i,cover){
 if(cover)return meadow()+kid('monkey',344,753,1.54,'hold')+desk(661,650,1.13)+plate(657,597,1.22)+[0,1,2,3].map((j)=>riceCake(619+j%2*72,572+Math.floor(j/2)*28,.68)).join('')+kid('duck',821,748,.89,'wave');
 return [
 ()=>room()+kid('monkey',353,753,1.45,'hold')+kid('monkeyMom',785,750,1.31,'stand')+plate(476,564,1.14)+[0,1,2,3].map(j=>riceCake(443+j%2*61,543+Math.floor(j/2)*25,.57)).join(''),
 ()=>meadow()+kid('monkey',312,753,1.26,'think')+kid('duck',793,751,1.08,'wave')+desk(565,630,1.15)+plate(568,574,1.0)+[0,1,2,3].map(j=>riceCake(538+j%2*61,553+Math.floor(j/2)*24,.56)).join('')+kid('rabbitBlue',844,435,.53,'low')+flower(774,427,.5),
 ()=>meadow()+kid('monkey',259,754,1.1,'reach')+kid('monkeyMom',826,751,1.35,'hold',true)+cakeTable(0)+plate(548,539,1.0)+[0,1,2,3].map(j=>riceCake(520+j%2*61,518+Math.floor(j/2)*24,.56)).join(''),
 ()=>meadow()+kid('monkey',238,755,1.13,'point')+kid('duck',828,748,1.0,'point',true)+cakeTable(3)+plate(553,539,.79)+riceCake(552,525,.62),
 ()=>meadow()+fourFriends()+cakeTable(4),
 ()=>meadow()+fourFriends()+cakeTable(4)+kid('monkeyMom',871,483,.74,'hold')+plate(833,381,.65),
 ()=>meadow()+fourFriends()+cakeTable(0,3)+cloth(680,543,.39,'#E8E3CD')+cloth(315,601,.39,'#E8E3CD'),
 ()=>meadow(false,true)+kid('monkey',330,754,1.39,'hold')+kid('monkeyMom',793,748,1.37,'hold',true)+G(514,672,1.1,bowl(0,0,1.2,false,true)+[0,1,2,3].map(j=>plate(j*7-17,-27-j*9,.53)).join(''))+[582,660,738,816].map((x,j)=>stool(x,731-j*10,.45)).join(''),
 ][i]();
}
function leafBookmark(x,y,s=1){return G(x,y,s,R(-42,-112,84,224,'#A4BFCE',9)+P('M-21 90 Q27 19 -22 -71','none','#D6DAB8',5)+ginkgo(0,-14,.67)+P('M-33 -101 L-23 -101 L35 69 L35 95Z','#F2F1DB','',0,'opacity=".35"'));}
function owlLeafScene(i,cover){
 const autumn=()=>meadow(false,true)+tree(109,600,1.2,'#C3BD89')+[229,692,804,894].map((x,j)=>ginkgo(x,748-j%2*23,.35)).join('');
 if(cover)return autumn()+kid('owl',358,753,1.6,'hold')+book(642,660,1.5,true,'#A5B7A3')+leafBookmark(628,549,1.04)+ginkgo(711,262,.72);
 return [
 ()=>autumn()+kid('owl',405,752,1.52,'up')+ginkgo(498,368,1.33)+E(501,365,123,123,'#EFDC9B','opacity=".12"'),
 ()=>room('#D0C9AB')+kid('owl',386,752,1.44,'think')+snugBed(674,723,.78)+ginkgo(658,622,1.07,true)+lamp(820,494,.6),
 ()=>room('#D0C9AB')+kid('owl',328,752,1.27,'hold')+kid('owlGran',794,751,1.42,'hold',true)+desk(555,647,1.15)+book(613,597,.82,false,'#9FAE9A')+sheet(482,590,.53)+ginkgo(424,569,.57,true),
 ()=>room('#D0C9AB')+kid('owl',295,750,1.31,'low')+kid('owlGran',812,748,1.38,'reach',true)+desk(560,657,1.2)+book(553,601,1.2,true,'#9FB49F')+sheet(553,579,.76,ginkgo(0,-9,.66))+book(704,521,.6,false,'#B6A48B'),
 ()=>room('#D0C9AB')+kid('owl',321,752,1.36,'hold')+desk(573,653,1.36)+book(728,594,.89,false,'#9FB49F')+book(729,573,.81,false,'#B6A48B')+G(503,584,.62,R(-43,-108,86,216,'#A4BFCE',7)+P('M-21 90 Q27 19 -22 -71','none','#D6DAB8',5),-72)+line(394,594,433,565,'#C3A578',7),
 ()=>room('#D0C9AB')+kid('owl',303,752,1.29,'hold')+kid('owlGran',818,750,1.4,'stand')+desk(569,655,1.22)+book(575,600,1.15,true,'#9FB49F')+sheet(568,579,.75,ginkgo(0,-7,.82)),
 ()=>room('#D0C9AB')+kid('owl',319,753,1.34,'hold')+kid('owlGran',806,750,1.35,'reach',true)+desk(561,653,1.27)+book(567,603,1.02,true,'#9FB49F')+G(574,557,.72,leafBookmark(0,0,1),-67)+R(715,558,75,52,'#D8DFD0',5,'fill-opacity=".3" stroke="#AABCB5" stroke-width="2"'),
 ()=>room('#C5C8B1',true)+kid('owl',346,743,1.18,'hold')+kid('owlGran',748,748,1.45,'hold',true)+book(626,571,1.0,true,'#9FB49F')+leafBookmark(387,603,.6)+lamp(523,704,.79)+ginkgo(800,312,.3),
 ][i]();
}
const scenes={
 'expansion-0002':rainBowlScene,'expansion-0003':scarfScene,'expansion-0004':snailDoorScene,
 'expansion-0005':foxBreadScene,'expansion-0006':squirrelScentScene,'expansion-0007':frogPlayScene,
 'expansion-0008':nightRabbitScene,'expansion-0009':antRoadScene,'expansion-0010':duckSnowScene,
 'expansion-0011':cloudTeaScene,'expansion-0012':pandaCakeScene,'expansion-0013':hippoDeskScene,
 'expansion-0014':elephantPlantScene,'expansion-0015':monkeyCakesScene,'expansion-0016':owlLeafScene,
};
export function youngArtwork(story,index,cover=false){
 const scene=scenes[story.id];
 if(!scene)throw new Error(`No young storyboard for ${story.id}`);
 if(!Array.isArray(story.pages)||story.pages.length!==8)throw new Error(`Storyboard for ${story.id} requires exactly eight pages`);
 if(!Number.isInteger(index)||index<0||index>=8)throw new Error(`Invalid page ${index} for ${story.id}`);
 const art=scene(index,cover);
 if(typeof art!=='string'||art.length<1000)throw new Error(`Empty illustration: ${story.id}/${index}`);
 return svg(art,`${story.title} · ${cover?'原创封面':story.pages[index].scene.action}`,cover);
}

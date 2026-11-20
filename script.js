/* RaevYoU — script.js */
(function(){
'use strict';
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var H=document.documentElement,B=document.body,TG='https://t.me/RaevYoU';
var L=function(r,e){return'<span class="ru">'+r+'</span><span class="en">'+e+'</span>'};
var st={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

/* avatar -> top pill + favicon */
var av=$('#av').src;$('#pa').src=av;var fi=document.createElement('link');fi.rel='icon';fi.href=av;document.head.appendChild(fi);

/* marquee */
var g='NFT • CRYPTO • WEB • TELEGRAM • ';$('#mq').innerHTML='<div>'+g.repeat(6)+'</div><div>'+g.repeat(6)+'</div>';

/* modal */
var md=$('#md'),mb=$('#mb');
function modal(h){mb.innerHTML=h;md.classList.add('o')}
md.addEventListener('click',function(e){if(e.target===md||e.target.closest('[data-x]'))md.classList.remove('o')});
addEventListener('keydown',function(e){if(e.key==='Escape')md.classList.remove('o')});
var X='<button class="btn o" data-x>'+L('Закрыть','Close')+'</button>';
function buy(t){modal('<div class="mt">'+t+'</div><p>'+L('Нажмите кнопку «Купить», чтобы перейти в личные сообщения для покупки','Press the “Buy” button to go to private messages and make a purchase')+'</p><a class="btn sh" target="_blank" rel="noopener" href="'+TG+'">'+L('Купить','Buy')+'</a>'+X)}

/* numbers */
var N=[['+1','США','USA',79],['+56','Чили','Chile',79],['+1','Канада','Canada',79],['+62','Индонезия','Indonesia',79],['+880','Бангладеш','Bangladesh',99],['+998','Узбекистан','Uzbekistan',99],['+91','Индия','India',99],['+55','Бразилия','Brazil',99],['+593','Эквадор','Ecuador',129],['+54','Аргентина','Argentina',139],['+351','Португалия','Portugal',139],['+44','Великобритания','United Kingdom',159],['+372','Эстония','Estonia',159],['+66','Таиланд','Thailand',179],['+33','Франция','France',199],['+81','Япония','Japan',199],['+49','Германия','Germany',229],['+371','Латвия','Latvia',299],['+7','Россия','Russia',399],['+7 7','Казахстан','Kazakhstan',399]];
var A=[['США [+1]','USA [+1]','6-8 лет','6-8 yrs',399],['Казахстан [+7 7]','Kazakhstan [+7 7]','2020','2020',990],['США [+1]','USA [+1]','2015','2015',1299],['Казахстан [+7 7]','Kazakhstan [+7 7]','2016','2016',1499],['Россия [+7]','Russia [+7]','2016','2016',1499]];
var car=$('#car');
function nc(top,mid,price,fn){var b=document.createElement('div');b.className='nc';b.tabIndex=0;b.innerHTML='<b>'+top+'</b><span>'+mid+'</span><em>'+price+'</em>';b.onclick=fn;b.onkeydown=function(e){if(e.key==='Enter')fn()};car.appendChild(b);return b}
N.forEach(function(n){nc(n[0],L(n[1],n[2]),n[3]+'₽',function(){buy(n[0]+' '+L(n[1],n[2])+' · '+n[3]+'₽')})});
nc('+888','<i class="dot"></i> '+L('2 шт в наличии','2 in stock'),L('от 23.900₽','from 23,900₽'),function(){buy('+888 · '+L('от 23.900₽','from 23,900₽'))});
var ac=nc('<i class="dot"></i>',L('Аккаунты с отлегой','Aged accounts'),'<span class="btn sh">'+L('Посмотреть','View')+'</span>',function(){
 modal('<div class="mt">'+L('Аккаунты с отлегой','Aged accounts')+'</div>'+A.map(function(a,i){return'<button class="ln" data-i="'+i+'"><span>'+L(a[0],a[1])+' '+L(a[2],a[3])+'</span><span>'+a[4]+'₽</span></button>'}).join('')+X)});
ac.querySelector('em').style.color='inherit';
mb.addEventListener('click',function(e){var r=e.target.closest('[data-i]');if(r){var a=A[r.dataset.i];buy(L(a[0],a[1])+' '+L(a[2],a[3])+' · '+a[4]+'₽')}});
$('#pl').onclick=function(){car.scrollBy({left:-car.clientWidth*.8,behavior:'smooth'})};
$('#pr').onclick=function(){car.scrollBy({left:car.clientWidth*.8,behavior:'smooth'})};
var dn=0,mv=0,x0=0,s0=0;
car.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;dn=1;mv=0;x0=e.clientX;s0=car.scrollLeft;car.classList.add('drag')});
addEventListener('pointermove',function(e){if(!dn)return;var d=e.clientX-x0;if(Math.abs(d)>4)mv=1;car.scrollLeft=s0-d});
addEventListener('pointerup',function(){if(dn){dn=0;car.classList.remove('drag')}});
car.addEventListener('click',function(e){if(mv){e.stopPropagation();e.preventDefault();mv=0}},true);

/* flip cards */
$$('.fl').forEach(function(c){var f=function(){c.classList.toggle('f')};c.onclick=f;c.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();f()}}});

/* FAQ (25) */
var F=[['Как с вами связаться?','How can I contact you?','Напишите в Telegram: @RaevYoU или откройте вкладку «Контакты».','Message me on Telegram: @RaevYoU or open the “Contacts” tab.'],
['Какие способы оплаты?','Which payment methods do you accept?','$, СБП, Crypto, на карту и на некастодиальный кошелёк.','$, SBP, crypto, bank card and non-custodial wallet.'],
['Как купить номер?','How do I buy a number?','Нажмите на номер в каталоге, затем «Купить» — откроется личный чат.','Tap a number in the catalog, then “Buy” — a private chat will open.'],
['Сколько стоят номера?','How much do numbers cost?','От 79₽ в зависимости от страны, весь список с ценами — в каталоге.','From 79₽ depending on the country; the full list is in the catalog.'],
['Что за номер +888?','What is the +888 number?','Коллекционный номер, от 23.900₽, сейчас 2 шт в наличии.','A collectible number from 23,900₽, 2 in stock.'],
['Что такое аккаунты с отлегой?','What are aged accounts?','Аккаунты с давней датой регистрации — возраст и цены указаны в каталоге.','Accounts with an old registration date — ages and prices are in the catalog.'],
['Продаёте ли вы симки?','Do you sell SIM cards?','Да, симки продаются отдельно.','Yes, SIM cards are sold separately.'],
['Как работает доставка?','How does delivery work?','Доставка в ваш город варьируется — уточняйте в личных или анонимных сообщениях.','Delivery to your city varies — ask in private or anonymous messages.'],
['Сколько стоит сайт на заказ?','How much does a custom website cost?','От 350₽, далее цена зависит от сложности и времени создания.','From 350₽; the final price depends on complexity and time.'],
['Входит ли хостинг в цену?','Is hosting included?','Нет, хостинг оплачивается отдельно.','No, hosting is paid separately.'],
['Как заказать сайт?','How do I order a website?','Пришлите описание, ссылки и всё, что нужно, — оплата по факту.','Send a description, links and anything you have — payment on completion.'],
['Что такое франшиза?','What is the franchise?','Помогаю создать вашего бота и предлагаю выгодные условия франшизы с моим ботом по покупке Telegram stars.','I help you create your bot and offer good franchise terms with my Telegram stars bot.'],
['Какие верификации вы делаете?','Which verifications do you offer?','Верификация TON кошельков и бирж, прохождение KYC.','TON wallet and exchange verification, KYC.'],
['Сколько стоит верификация?','How much does verification cost?','От 700 рублей, детали обсуждаем в ЛС.','From 700 RUB; details are discussed in DM.'],
['Вы покупаете NFT?','Do you buy NFTs?','Да, покупаю NFT подарки за вашу или рыночную цену.','Yes, I buy NFT gifts at your price or the market price.'],
['Что входит в рекламу?','What does advertising include?','Рекламирую вас, вашего бота и услуги в своих сервисах и на некоторых сайтах.','I promote you, your bot and services in my services and on some sites.'],
['Сколько стоит реклама?','How much does advertising cost?','От 50₽ за показ, есть пакеты на месяц, 3 месяца и год — цены в каталоге.','From 50₽ per view; monthly, 3-month and yearly packages — prices in the catalog.'],
['Где посмотреть отзывы?','Where can I read reviews?','Во вкладке «Отзывы» и в канале с отзывами во вкладке «Контакты».','In the “Reviews” tab and the reviews channel in “Contacts”.'],
['Где купить Telegram stars?','Where can I buy Telegram stars?','В боте «Дешевые stars» — ссылка во вкладке «Контакты».','In the “Cheap stars” bot — the link is in the “Contacts” tab.'],
['Работает ли чат на сайте?','Does the site chat work?','Анонимный чат временно не работает, обращайтесь в личные сообщения.','The anonymous chat is temporarily unavailable, please use private messages.'],
['Как сменить язык?','How do I change the language?','Кнопками RU / EN вверху слева или в настройках.','With the RU / EN buttons at the top left or in Settings.'],
['Как включить светлую тему?','How do I enable the light theme?','Переключателем темы вверху справа или в настройках.','With the theme switch at the top right or in Settings.'],
['Как отключить анимации?','How do I turn animations off?','В настройках включите «Отключить анимации».','Turn on “Disable animations” in Settings.'],
['Вы всегда на связи?','Are you always online?','Я почти всегда в сети, но иногда могу ответить не сразу.','I am online almost 24/7, but may sometimes reply with a delay.'],
['Как связаться с партнёром?','How do I contact your partner?','Партнёр указан во вкладке «Контакты» — номера я продаю вместе с ним.','The partner is listed in “Contacts” — I sell numbers together with them.']];
$('#faq').innerHTML=F.map(function(f){return'<details class="rv"><summary><span>'+L(f[0],f[1])+'</span></summary><p>'+L(f[2],f[3])+'</p></details>'}).join('');

/* language (RU / EN native, 25 more through Google Translate) */
var GL=[['ru','Русский'],['en','English'],['zh-CN','中文'],['es','Español'],['pt','Português'],['de','Deutsch'],['fr','Français'],['it','Italiano'],['tr','Türkçe'],['ar','العربية'],['hi','हिन्दी'],['ja','日本語'],['ko','한국어'],['pl','Polski'],['uk','Українська'],['cs','Čeština'],['nl','Nederlands'],['sv','Svenska'],['fi','Suomi'],['ro','Română'],['hu','Magyar'],['el','Ελληνικά'],['iw','עברית'],['th','ไทย'],['vi','Tiếng Việt'],['id','Bahasa Indonesia'],['kk','Қазақша']];
var ls=$('#ls');ls.innerHTML=GL.map(function(l){return'<option value="'+l[0]+'" translate="no">'+l[1]+'</option>'}).join('');
var gm=(document.cookie.match(/googtrans=\/en\/([\w-]+)/)||[])[1];
function ck(v){var e=v?'':';expires=Thu, 01 Jan 1970 00:00:00 GMT';document.cookie='googtrans='+v+';path=/'+e;document.cookie='googtrans='+v+';path=/;domain='+location.hostname+e}
function lang(l){
 if(l==='ru'||l==='en'){st.set('lang',l);if(gm){ck('');location.reload();return}H.lang=l}
 else{st.set('lang','en');ck('/en/'+l);location.reload();return}
 $$('#lg .sb').forEach(function(b){b.classList.toggle('on',b.dataset.l===l)});ls.value=l}
if(gm){H.lang='en';var gs=document.createElement('script');window.gtI=function(){new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false},'gte')};gs.src='https://translate.google.com/translate_a/element.js?cb=gtI';document.head.appendChild(gs)}
else H.lang=st.get('lang')==='en'?'en':'ru';
$$('#lg .sb').forEach(function(b){b.onclick=function(){lang(b.dataset.l)}});
ls.onchange=function(){lang(ls.value)};
$$('#lg .sb').forEach(function(b){b.classList.toggle('on',!gm&&b.dataset.l===H.lang)});ls.value=gm||H.lang;

/* theme + toggles */
function theme(t){H.dataset.theme=t;st.set('theme',t);$$('#th .sb').forEach(function(b){b.classList.toggle('on',b.dataset.t===t)});$('#tt').classList.toggle('on',t==='light');draw()}
$$('#th .sb').forEach(function(b){b.onclick=function(){theme(b.dataset.t)}});
$('#tt').onclick=function(){theme(H.dataset.theme==='light'?'dark':'light')};
function tgl(id,key,def,fn){var e=$(id),v=st.get(key);v=v===null?def:v==='1';function ap(){e.classList.toggle('on',v);fn(v)}e.onclick=function(){v=!v;st.set(key,v?'1':'0');ap()};ap();return ap}
var stars=true;
tgl('#ta','noanim',matchMedia('(prefers-reduced-motion:reduce)').matches,function(v){B.classList.toggle('noanim',v);run()});
tgl('#ts','stars',true,function(v){stars=v;$('#stars').style.display=v?'':'none';run()});
tgl('#tm','mq',true,function(v){B.classList.toggle('nomq',!v)});
var fs=+st.get('fs')||12;function size(n){fs=Math.max(10,Math.min(15,n));H.style.fontSize=fs+'px';st.set('fs',fs);$('#fv').textContent=Math.round(fs/12*100)+'%'}
$('#fm').onclick=function(){size(fs-1)};$('#fp').onclick=function(){size(fs+1)};size(fs);
$('#rs').onclick=function(){['lang','theme','noanim','stars','mq','fs'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});ck('');location.reload()};

/* tabs + nav */
var T=[['home','Главная','Home'],['catalog','Каталог','Catalog'],['reviews','Отзывы','Reviews'],['chat','Чат','Chat'],['contacts','Контакты','Contacts'],['settings','Настройки','Settings']];
var nav=$('#nav');nav.innerHTML=T.map(function(t){return'<button data-go="'+t[0]+'">'+L(t[1],t[2])+'</button>'}).join('');
function show(){nav.classList.add('show')}
function go(id){if(!T.some(function(t){return t[0]===id}))id='home';
 $$('.tab').forEach(function(x){x.classList.toggle('act',x.id==='t-'+id)});
 $$('#nav button').forEach(function(b){b.classList.toggle('on',b.dataset.go===id)});
 try{history.replaceState(null,'','#'+id)}catch(e){}
 scrollTo(0,0);if(id!=='home')show()}
document.addEventListener('click',function(e){var a=e.target.closest('[data-go]');if(a){e.preventDefault();go(a.dataset.go)}});
addEventListener('scroll',function(){if(scrollY>40)show()},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('in',e.isIntersecting)})},{threshold:.06});
$$('.rv').forEach(function(x){io.observe(x)});
go(location.hash.slice(1));

/* stars + constellations */
var cv=$('#stars'),cx=cv.getContext('2d'),S=[],W=0,HH=0,raf=0;
function rs(){var d=Math.min(devicePixelRatio||1,2);W=innerWidth;HH=innerHeight;cv.width=W*d;cv.height=HH*d;cx.setTransform(d,0,0,d,0,0);var n=Math.max(45,Math.min(110,Math.round(W*HH/13000)));S=[];for(var i=0;i<n;i++)S.push({x:Math.random()*W,y:Math.random()*HH,r:Math.random()*1.2+.4,vx:(Math.random()-.5)*.14,vy:(Math.random()-.5)*.14,p:Math.random()*6.3});draw()}
function draw(t){if(!W)return;t=t||0;cx.clearRect(0,0,W,HH);var c=H.dataset.theme==='light'?'0,0,0':'255,255,255',i,j,a,b,d;
 for(i=0;i<S.length;i++){a=S[i];if(!B.classList.contains('noanim')){a.x+=a.vx;a.y+=a.vy;if(a.x<0)a.x=W;if(a.x>W)a.x=0;if(a.y<0)a.y=HH;if(a.y>HH)a.y=0}
  cx.fillStyle='rgba('+c+','+(.35+.3*Math.sin(t/900+a.p))+')';cx.beginPath();cx.arc(a.x,a.y,a.r,0,6.3);cx.fill();
  for(j=i+1;j<S.length;j++){b=S[j];d=Math.hypot(a.x-b.x,a.y-b.y);if(d<95){cx.strokeStyle='rgba('+c+','+(1-d/95)*.16+')';cx.lineWidth=.6;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}}}
function loop(t){draw(t);raf=requestAnimationFrame(loop)}
function run(){cancelAnimationFrame(raf);if(stars&&!B.classList.contains('noanim')&&!document.hidden)raf=requestAnimationFrame(loop);else draw()}
document.addEventListener('visibilitychange',run);addEventListener('resize',rs);
theme(st.get('theme')==='light'?'light':'dark');rs();run();
})();

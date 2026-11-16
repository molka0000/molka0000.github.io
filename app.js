(function(){
"use strict";
var C=window.CONFIG, P=window.PROJECTS;
var app=document.getElementById('app');
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var byId=function(id){for(var i=0;i<P.length;i++)if(P[i].id===id)return P[i];return null};

var ICON={
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14"/></svg>',
  mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  li:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
  pin:'<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  gh:'<svg viewBox="0 0 24 24"><path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5a3 3 0 0 0-.9-2.3c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C5.9 1.6 4.8 1.9 4.8 1.9a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.3 9c0 5.2 3.2 6.4 6.2 6.7a3 3 0 0 0-.9 2.3V22"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'
};

/* ---------- generated artwork for projects without images ---------- */
function art(kind){
  var g='<defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#2f5fd0"/><stop offset="1" stop-color="#5a3fc0"/></linearGradient><radialGradient id="glow" cx=".2" cy=".1" r=".9"><stop offset="0" stop-color="#dfe6f5" stop-opacity=".9"/><stop offset="1" stop-color="#fff3ec" stop-opacity="0"/></radialGradient></defs><rect width="400" height="240" fill="#f5f6fa"/><rect width="400" height="240" fill="url(#glow)"/>';
  var t='font-family="DM Sans,sans-serif" font-weight="700" fill="#1f2340"';
  var s={
    robot:'<g '+t+' font-size="12"><rect x="24" y="40" width="100" height="44" rx="10" fill="#ffffff" stroke="#dbe1ee"/><text x="74" y="67" text-anchor="middle">E-mail</text><rect x="150" y="40" width="100" height="44" rx="10" fill="#ffffff" stroke="#dbe1ee"/><text x="200" y="67" text-anchor="middle">Regex</text><rect x="276" y="40" width="100" height="44" rx="10" fill="#ffffff" stroke="#dbe1ee"/><text x="326" y="67" text-anchor="middle">Règles</text><path d="M124 62h26m100 0h26M326 84v40H110v30m216-30v30" stroke="url(#g1)" stroke-width="3" fill="none"/><rect x="40" y="154" width="140" height="48" rx="12" fill="url(#g1)"/><text x="110" y="183" text-anchor="middle" fill="#ffffff">Même consultant</text><rect x="256" y="154" width="140" height="48" rx="12" fill="url(#g1)" transform="translate(-30 0)"/><text x="296" y="183" text-anchor="middle" fill="#ffffff">Le moins chargé</text></g>',
    star:'<g '+t+' font-size="11"><rect x="150" y="96" width="100" height="48" rx="12" fill="url(#g1)"/><text x="200" y="125" text-anchor="middle" fill="#ffffff" font-size="13">Fact_Client</text>'+
      [[60,40,'Agence'],[200,30,'Compte'],[340,40,'Produit'],[50,120,'Calendrier'],[350,120,'Équipement'],[60,200,'Service'],[200,210,'Client'],[340,200,'Ressources']].map(function(d){return '<path d="M200 120L'+d[0]+' '+d[1]+'" stroke="#dbe1ee" stroke-width="2"/><rect x="'+(d[0]-42)+'" y="'+(d[1]-14)+'" width="84" height="28" rx="14" fill="#ffffff" stroke="#dbe1ee"/><text x="'+d[0]+'" y="'+(d[1]+4)+'" text-anchor="middle">'+d[2]+'</text>'}).join('')+'<rect x="150" y="96" width="100" height="48" rx="12" fill="url(#g1)"/><text x="200" y="125" text-anchor="middle" fill="#ffffff" font-size="13">Fact_Client</text></g>',
    bars:(function(){var o='';var h=[120,90,150,70,110,60,40,30,20];for(var i=0;i<h.length;i++){o+='<rect x="'+(40+i*38)+'" y="'+(210-h[i])+'" width="24" height="'+h[i]+'" rx="6" fill="'+(i<3?'url(#g1)':'#dbe1ee')+'"/>'}return o+'<path d="M40 210h340" stroke="#dbe1ee"/><text x="40" y="40" '+t+' font-size="13">Types de défauts les plus fréquents</text>'})(),
    diff:'<rect x="40" y="40" width="140" height="170" rx="10" fill="#ffffff" stroke="#dbe1ee"/><rect x="220" y="40" width="140" height="170" rx="10" fill="#ffffff" stroke="#dbe1ee"/>'+[60,80,100,150,170].map(function(y){return '<rect x="56" y="'+y+'" width="108" height="8" rx="4" fill="#dbe1ee"/><rect x="236" y="'+y+'" width="108" height="8" rx="4" fill="#dbe1ee"/>'}).join('')+'<rect x="56" y="118" width="60" height="22" rx="4" fill="#2f5fd0"/><rect x="236" y="118" width="60" height="22" rx="4" fill="#ff7a45"/><rect x="230" y="112" width="72" height="34" rx="6" fill="none" stroke="#ff7a45" stroke-width="3"/>',
    wave:(function(){var p='M20 140';for(var x=20;x<=380;x+=10){var y=140+Math.sin(x/22)*24+(x>230&&x<280?-70*Math.sin((x-230)/50*Math.PI):0);p+=' L'+x+' '+y.toFixed(1)}return '<path d="'+p+'" stroke="url(#g1)" stroke-width="3" fill="none"/><circle cx="255" cy="74" r="16" fill="none" stroke="#ff7a45" stroke-width="3"/><text x="280" y="60" '+t+' font-size="13" fill="#5a3fc0">anomalie</text>'})(),
    trophy:'<path d="M160 50h80v40a40 40 0 0 1-80 0z" fill="url(#g1)"/><path d="M160 60h-24a24 24 0 0 0 24 30M240 60h24a24 24 0 0 1-24 30" stroke="#2f5fd0" stroke-width="6" fill="none"/><rect x="190" y="130" width="20" height="30" fill="#2f5fd0"/><rect x="164" y="160" width="72" height="16" rx="4" fill="#7fb2ff"/><text x="200" y="76" text-anchor="middle" '+t+' font-size="24" fill="#ffffff">2</text><text x="200" y="210" text-anchor="middle" '+t+' font-size="14">Hackathon FST 3.0</text>'
  };
  return '<div class="art"><svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'+g+(s[kind]||'')+'</svg></div>';
}
function visual(p){return p.cover?'<img src="'+p.cover+'" alt="" loading="lazy">':art(p.art)}
var ICONS=[[/^power ?bi/i,'powerbi'],[/^uipath/i,'uipath-mark'],[/^python/i,'python'],[/^(qlik|qvd)/i,'qlik'],[/^power automate/i,'powerautomate'],[/^ssis/i,'ssis'],[/^talend/i,'talend'],[/^postgre/i,'postgresql']];
function icon(x){for(var i=0;i<ICONS.length;i++){if(ICONS[i][0].test(x))return 'assets/stack/'+ICONS[i][1]+'.png'}return null}
function chips(list){return '<ul class="chips">'+list.map(function(x){var ic=icon(x);return '<li'+(ic?' class="has-ico"':'')+'>'+(ic?'<img src="'+ic+'" alt="" loading="lazy">':'')+esc(x)+'</li>'}).join('')+'</ul>'}

/* ---------- pages ---------- */
function pageHome(){
  var featured=P.filter(function(p){return p.featured});
  var photo=C.photo?'<img src="'+C.photo+'" alt="Portrait de '+esc(C.name)+'">':'<span class="initials" aria-hidden="true">MA</span>';
  var btns='<a class="btn btn-grad" href="#projets">Voir mes projets '+ICON.arrow+'</a>';
  if(C.cv) btns+='<a class="btn btn-ghost" href="'+C.cv+'" target="_blank" rel="noopener">'+ICON.down+' Télécharger mon CV</a>';
  else btns+='<a class="btn btn-ghost" href="#contact">Me contacter</a>';
  var stats=[['4','stages en entreprise'],['6','projets détaillés'],['4','robots RPA en production'],['35+','KPI conçus pour une banque'],['3','langues parlées'],['2','outils BI maîtrisés']];
  var tick=stats.concat(stats).map(function(s){return '<span class="tick"><b>'+s[0]+'</b> '+s[1]+'</span>'}).join('<span class="tick-dot" aria-hidden="true"></span>');
  return ''+
  '<div class="page">'+
  '<section class="hero" aria-label="Présentation">'+
   '<div class="wrap hero-in">'+
    '<div class="hero-txt"><span class="role-badge">'+esc(C.role)+'</span>'+
    '<h1><span class="w">Molka</span> <span class="w">Amara</span></h1>'+
    '<p class="tagline">Je transforme des données dispersées en tableaux de bord, en modèles et en automatisations que les équipes utilisent vraiment.</p>'+
    '<div class="actions">'+btns+'</div>'+
    '<div class="hero-meta"><span>'+esc(C.city)+'</span>'+(C.openToWork?'<span class="open">Disponible</span>':'')+'</div></div>'+
    '<div class="portrait"><canvas id="sky" aria-hidden="true"></canvas><div class="arch"></div>'+photo+
    '<span class="tag t1">Power BI · Qlik</span><span class="tag t2">RAG · LLM</span><span class="tag t3">UiPath</span></div>'+
   '</div></section>'+
  '<div class="ticker" aria-label="Chiffres clés"><div class="ticker-track">'+tick+'</div></div>'+'<section class="logos-sec"><div class="wrap"><p class="logos-title">Ils m\'ont fait confiance</p><div class="logos">'+window.EXPERIENCES.filter(function(x){return x.logo}).map(function(x){return '<a href="#experience" class="logo-tile" title="'+esc(x.org)+'"><img src="'+x.logo+'" alt="'+esc(x.org)+'" loading="lazy"></a>'}).join('')+'</div></div></section>'+
  '<section class="reveal"><div class="wrap"><div class="sec-head"><div><h2 class="sec-title">Projets sélectionnés</h2><p class="sec-sub">Une sélection, de la BI à l\'IA générative. Survolez une ligne pour l\'aperçu, cliquez pour le détail.</p></div><a class="btn btn-ghost" href="#projets">Tous les projets '+ICON.arrow+'</a></div>'+
    '<ol class="plist">'+featured.map(function(p,i){return '<li><a class="prow" href="#projet-'+p.id+'"><span class="pnum">0'+(i+1)+'</span><span class="ptitle"><b>'+esc(p.title)+'</b><small>'+esc(p.ctx)+'</small></span><span class="pdom">'+esc(p.domain)+'</span><span class="parrow">'+ICON.arrow+'</span><span class="pprev">'+visual(p)+'</span></a></li>'}).join('')+'</ol>'+
  '</div></section>'+
  '<section class="reveal about-sec"><div class="wrap about-grid">'+
    '<div class="about-photo">'+photo+'</div>'+
    '<div class="about-text"><h2 class="sec-title">Une matheuse qui a pris goût à la data</h2>'+
    '<p>J\'ai commencé par une licence en maths appliquées, puis j\'ai fait mon école d\'ingénieur à ESPRIT, option BI. Depuis, je touche à tout ce qui concerne la donnée : la ranger, la modéliser, la rendre lisible, en tirer des prédictions, et automatiser ce qui peut l\'être.</p>'+
    '<p>À chaque stage, il a fallu apprendre un outil que je ne connaissais pas : Qlik Sense chez Talan, le RAG chez Amayas, la RPA chez Amaris. C\'est ce que je préfère dans ce métier. Aujourd\'hui, c\'est moi qui enseigne Power BI chez GOMYCODE.</p>'+
    '<a class="btn btn-ghost" style="margin-top:24px" href="#experience">Mon parcours '+ICON.arrow+'</a></div>'+
  '</div></section>'+
  ctaBand()+
  '</div>';
}
function ctaBand(){return '<div class="wrap"><div class="cta-band reveal"><h2>Travaillons ensemble</h2><p>Je cherche mon prochain poste en data, BI, IA ou RPA. Écrivez-moi, je réponds avec plaisir.</p><a class="btn btn-grad" href="#contact">Me contacter '+ICON.arrow+'</a></div></div>'}

function pageProjects(){
  var f=[["all","Tous"],["bi","Business Intelligence"],["de","Data engineering"],["ia","IA & machine learning"],["rpa","RPA & automatisation"]];
  return '<div class="page"><div class="wrap"><div class="page-top"><span class="kicker">Mon travail</span><h1 class="page-title">Projets</h1><p class="page-lede">Stages, missions et projets d\'école. Cliquez sur un projet pour voir comment je m\'y suis prise, étape par étape.</p></div>'+
  '<div class="filters" role="group" aria-label="Filtrer les projets">'+f.map(function(x,i){return '<button class="filter" data-filter="'+x[0]+'" aria-pressed="'+(i===0)+'">'+x[1]+'</button>'}).join('')+'</div>'+
  '<div class="grid" id="grid">'+P.map(function(p){return '<a class="card" href="#projet-'+p.id+'" data-cats="'+p.cats.join(' ')+'"><div class="thumb">'+(p.hot?'<span class="badge-hot">'+p.hot+'</span>':'')+visual(p)+'</div><div class="body"><span class="domain">'+esc(p.domain)+'</span><h3>'+esc(p.title)+'</h3><p>'+esc(p.short)+'</p>'+chips(p.tags.slice(0,4))+'</div></a>'}).join('')+'</div>'+
  '<section class="others"><h2 class="sec-title">Autres projets</h2><ul class="other-list">'+window.OTHER_PROJECTS.map(function(o){return '<li class="reveal"><div><b>'+esc(o[0])+'</b><p>'+esc(o[1])+'</p></div>'+(o[2]?'<span class="badge-hot static">'+o[2]+'</span>':'')+'</li>'}).join('')+'</ul></section>'+
  '</div></div>';
}

function pageProject(p){
  var i=P.indexOf(p), prev=P[(i-1+P.length)%P.length], next=P[(i+1)%P.length];
  var media=p.gallery.map(function(g){return {type:'img',src:g.src,cap:g.cap}}).concat((p.videos||[]).map(function(v){return {type:'video',src:v.src,poster:v.poster,cap:v.cap}}));
  var actions='';
  if(media.length) actions+='<a class="btn btn-grad" href="#gal-'+p.id+'" data-scroll="gal-'+p.id+'">Les captures '+ICON.arrow+'</a>';
  if(p.report) actions+='<a class="btn btn-ghost" href="'+p.report+'" target="_blank" rel="noopener">Lire le rapport</a>';
  if(p.repo) actions+='<a class="btn btn-ghost" href="'+p.repo+'" target="_blank" rel="noopener">Code sur GitHub</a>';
  var html='<div class="page"><div class="wrap"><div class="proj-hero"><a class="back" href="#projets">‹ Tous les projets</a><div class="ctx">'+esc(p.ctx)+'</div><h1 tabindex="-1">'+esc(p.title)+'</h1><p class="lede">'+esc(p.lede)+'</p>'+chips(p.tags)+(actions?'<div class="actions">'+actions+'</div>':'')+
    '<div class="cover">'+(p.cover?'<img src="'+p.cover+'" alt="'+esc(p.title)+'">':'<div style="position:relative;height:340px">'+art(p.art)+'</div>')+'</div>'+
    (p.kpis?'<div class="kpis">'+p.kpis.map(function(k){return '<div class="kpi"><b class="grad-text">'+k[0]+'</b><span>'+k[1]+'</span></div>'}).join('')+'</div>':'')+
  '</div>'+
  '<div class="parts">'+p.parts.map(function(pt,n){return '<article class="part reveal"><span class="num">Étape '+(n+1)+'</span><h3>'+pt.t+'</h3><p class="sub">'+pt.s+'</p><div class="pbody">'+pt.h+'</div></article>'}).join('')+
  (p.results?'<article class="part reveal"><span class="num">Résultats</span><h3>Évaluation</h3><p class="sub">Les chiffres clés</p><div class="pbody"><table class="results"><thead><tr><th>Module</th><th>Mesure</th><th>Résultat</th></tr></thead><tbody>'+p.results.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td></tr>'}).join('')+'</tbody></table></div></article>':'')+
  '</div>'+
  (p.next?'<div class="callout reveal"><p><b>Prochaines étapes.</b> '+p.next+'</p></div>':'')+
  '<section id="gal-'+p.id+'" style="padding-bottom:0"><h2 class="sec-title" style="margin-bottom:20px">Galerie</h2>'+
  (media.length?'<div class="gallery">'+media.map(function(m,n){return '<button class="g-item'+(m.type==='video'?' video':'')+'" data-gal="'+p.id+'" data-i="'+n+'" aria-label="Agrandir : '+esc(m.cap)+'"><img src="'+(m.poster||m.src)+'" alt="" loading="lazy"><span class="cap">'+esc(m.cap)+'</span></button>'}).join('')+'</div>':'<div class="empty-media">'+(p.id==='amaris'||p.id==='talan'?'Les captures de ce projet ne sont pas publiées, par confidentialité envers le client.':'Captures et vidéos à venir.')+'</div>')+
  '</section>'+
  '<nav class="proj-nav" aria-label="Autres projets"><a href="#projet-'+prev.id+'"><small>Projet précédent</small><b>'+esc(prev.title)+'</b></a><a href="#projet-'+next.id+'"><small>Projet suivant</small><b>'+esc(next.title)+'</b></a></nav>'+
  '</div><section></section></div>';
  currentMedia[p.id]=media;
  return html;
}

function pageExperience(){
  return '<div class="page"><div class="wrap"><div class="page-top"><span class="kicker">Parcours</span><h1 class="page-title">Expérience</h1><p class="page-lede">Mon parcours, en commençant par ce que je fais aujourd\'hui.</p></div>'+
  '<div class="xp-list">'+window.EXPERIENCES.map(function(x){return '<article class="xp reveal"><div>'+(x.logo?'<img class="xp-logo" src="'+x.logo+'" alt="Logo '+esc(x.org)+'" loading="lazy">':'')+'<div class="when">'+x.when+'</div><span class="where">'+x.where+'</span>'+(x.now?'<span class="now">En cours</span>':'')+'</div><div><h3>'+x.title+'</h3><div class="org">'+x.org+'</div><ul>'+x.bullets.map(function(b){return '<li>'+b+'</li>'}).join('')+'</ul>'+chips(x.tags)+(x.link?'<a class="more" href="#projet-'+x.link+'">Voir le projet ›</a>':'')+'</div></article>'}).join('')+'</div>'+
  '<section><h2 class="sec-title" style="margin-bottom:24px">Formation</h2><div class="edu">'+window.EDUCATION.map(function(e){return '<article class="edu-card reveal"><h3>'+e.title+'</h3><div class="org">'+e.org+'</div><p style="color:var(--dim);font-weight:700;font-size:13.5px;margin-bottom:8px">'+e.when+'</p><p>'+e.text+'</p></article>'}).join('')+'</div></section>'+
  '</div>'+ctaBand()+'</div>';
}

function pageSkills(){
  return '<div class="page"><div class="wrap"><div class="page-top"><span class="kicker">Boîte à outils</span><h1 class="page-title">Compétences</h1><p class="page-lede">Uniquement des outils que j\'ai vraiment utilisés. Pour chacun, le projet où vous pouvez le voir à l\'œuvre.</p></div>'+'<div class="stack-wall">'+window.STACK.map(function(s){return '<div class="stack-tile reveal"><img src="assets/stack/'+s[1]+'.png" alt="" loading="lazy"><span>'+s[0]+'</span></div>'}).join('')+'</div>'+
  '<div class="skills">'+window.SKILLS.map(function(s){return '<article class="skill reveal" style="--c:'+s.c+'"><h3>'+s.t+'</h3>'+chips(s.items)+'<p class="proof">Vu dans : '+s.proof.map(function(id){var p=byId(id);return '<a href="#projet-'+id+'">'+esc(p.title)+'</a>'}).join(', ')+'</p></article>'}).join('')+'</div>'+
  '<p class="notions"><b>Notions acquises pendant mon cursus :</b> Hadoop, Hive, Spark, SAP (BW, HANA, Fiori), Dynamics 365 CRM, Java / Spring Boot, .NET, réseaux et sécurité (EVE-NG, FortiGate).</p>'+
  '<section><h2 class="sec-title">Langues</h2><div class="langs">'+window.LANGS.map(function(l){return '<div class="lang reveal"><b>'+l[0]+'</b><span>'+l[1]+'</span><div class="meter"><i style="width:'+l[2]+'%"></i></div></div>'}).join('')+'</div></section>'+
  '</div></div>';
}

function pageCerts(){
  return '<div class="page"><div class="wrap"><div class="page-top"><span class="kicker">Formation continue</span><h1 class="page-title">Certifications</h1><p class="page-lede">Parce qu\'on n\'a jamais fini d\'apprendre. Cliquez sur un certificat pour l\'agrandir.</p></div>'+
  '<div class="certs">'+window.CERTS.map(function(c,n){return '<article class="cert reveal"><button class="c-img" data-cert="'+n+'" aria-label="Agrandir le certificat : '+esc(c.title)+'">'+(c.img?'<img src="'+c.img+'" alt="" loading="lazy">':'<div class="c-ph"><div><b>'+esc(c.issuer)+'</b><small>Certificat</small></div></div>')+'</button><div class="c-body"><h3>'+esc(c.title)+'</h3><div class="issuer">'+esc(c.issuer)+(c.date?' · '+c.date:'')+'</div><div class="c-foot"><span class="state '+c.state+'">'+c.stateLabel+'</span>'+(c.url?'<a class="verify" href="'+c.url+'" target="_blank" rel="noopener">Vérifier</a>':'')+'</div></div></article>'}).join('')+'</div>'+
  '</div><section></section></div>';
}

function pageContact(){
  var cards='<button class="c-card" data-copy="'+C.email+'"><span class="c-ico">'+ICON.mail+'</span><span><small>E-mail · cliquer pour copier</small><b>'+C.email+'</b></span></button>'+
    '<a class="c-card" href="'+C.linkedin+'" target="_blank" rel="noopener"><span class="c-ico">'+ICON.li+'</span><span><small>LinkedIn</small><b>'+C.linkedinLabel+'</b></span></a>'+
    (C.github?'<a class="c-card" href="'+C.github+'" target="_blank" rel="noopener"><span class="c-ico">'+ICON.gh+'</span><span><small>GitHub</small><b>'+C.github.replace('https://','')+'</b></span></a>':'')+
    '<div class="c-card"><span class="c-ico">'+ICON.pin+'</span><span><small>Localisation</small><b>'+C.city+'</b></span></div>';
  return '<div class="page"><div class="wrap"><div class="contact-hero"><span class="kicker">Contact</span><h1>On en <span class="grad-text">parle ?</span></h1><p>Je cherche un poste en data analytics, BI, IA ou RPA (CDI, CDD ou CIVP). Une question sur un projet, une opportunité, ou juste envie d\'échanger ? Le plus simple, c\'est l\'e-mail.</p></div>'+
  '<div class="contact-cards">'+cards+'</div>'+
  '<div class="contact-actions"><a class="btn btn-grad" href="mailto:'+C.email+'">'+ICON.mail.replace('<svg','<svg fill="none" stroke="currentColor" stroke-width="2"')+' M\'écrire un e-mail</a></div>'+
  '</div><section></section></div>';
}

/* ---------- router ---------- */
var currentMedia={}, sky=null;
var routes={accueil:pageHome,projets:pageProjects,experience:pageExperience,competences:pageSkills,certifications:pageCerts,contact:pageContact};
var lastPage=null;
function route(){
  var h=(location.hash||'#accueil').slice(1)||'accueil';
  var key=h, html, focusTitle=true;
  if(h.indexOf('projet-')===0 && byId(h.slice(7))){html=pageProject(byId(h.slice(7)));key='projets'}
  else if(routes[h]){html=routes[h]()}
  else {
    var el=document.getElementById(h);
    if(el){el.scrollIntoView({behavior:reduce?'auto':'smooth'});return}
    html=pageHome();key='accueil';h='accueil';
  }
  if(sky){sky.stop();sky=null}
  app.innerHTML=html;
  window.scrollTo(0,0);
  $$('.menu a').forEach(function(a){a.classList.toggle('active',a.dataset.page===key);a.setAttribute('aria-current',a.dataset.page===key?'page':'false')});
  closeMenu();
  document.title=(h==='accueil'?'':(($('h1',app)||{}).textContent||'')+' · ')+'Molka Amara — Data, IA & RPA';
  if(lastPage!==null && focusTitle){var t=$('h1',app);if(t){t.setAttribute('tabindex','-1');t.focus({preventScroll:true})}}
  lastPage=h;
  enhance();
}
window.addEventListener('hashchange',route);

/* ---------- enhancements after render ---------- */
function enhance(){
  var c=$('#sky');if(c)sky=startSky(c);
  initCarousel();
  initFilters();
  initReveal();
  $$('[data-scroll]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var t=document.getElementById(a.dataset.scroll);if(t)t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})})});
  $$('[data-gal]').forEach(function(b){b.addEventListener('click',function(){openLB(currentMedia[b.dataset.gal],+b.dataset.i,b)})});
  $$('[data-zoom]').forEach(function(f){f.addEventListener('click',function(){var im=f.querySelector('img');openLB([{type:'img',src:im.getAttribute('src'),cap:im.alt}],0,f)})});
  $$('[data-cert]').forEach(function(b){b.addEventListener('click',function(){
    var list=window.CERTS.map(function(c){return c.img?{type:'img',src:c.img,cap:c.title+' · '+c.issuer}:{type:'none',cap:c.title+' · '+c.issuer+' · '+c.stateLabel}});
    openLB(list,+b.dataset.cert,b)})});
  $$('[data-copy]').forEach(function(b){b.addEventListener('click',function(){
    var v=b.dataset.copy;
    try{navigator.clipboard.writeText(v).then(function(){toast('Adresse e-mail copiée')},function(){toast(v)})}catch(e){toast(v)}
  })});
  var intro=$('[data-intro]');
  if(intro)intro.addEventListener('click',function(){openLB([{type:'video',src:C.introVideo,cap:'Vidéo de présentation'}],0,intro)});
}

function toast(msg){var t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove('show')},2200)}

function initReveal(){
  var els=$$('.reveal');
  if(!('IntersectionObserver' in window)||reduce){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(e){io.observe(e)});
}

function initFilters(){
  var btns=$$('.filter');if(!btns.length)return;
  btns.forEach(function(b){b.addEventListener('click',function(){
    btns.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    var f=b.dataset.filter;
    $$('#grid .card').forEach(function(card){card.classList.toggle('hide',f!=='all'&&card.dataset.cats.split(' ').indexOf(f)<0)});
  })});
}

function initCarousel(){
  var root=$('#carousel');if(!root)return;
  var track=$('.car-track',root),n=track.children.length,i=0,timer;
  function go(k){i=(k+n)%n;track.style.transform='translateX('+(-100*i)+'%)';$('#car-count').textContent=('0'+(i+1)).slice(-2)+' / '+('0'+n).slice(-2);$('#car-bar').style.width=((i+1)/n*100)+'%';
    Array.prototype.forEach.call(track.children,function(s,j){s.setAttribute('aria-hidden',j!==i);$$('a,button',s).forEach(function(a){if(!a.classList.contains('vis'))a.tabIndex=j===i?0:-1})})}
  $('#car-prev').addEventListener('click',function(){go(i-1);stop()});
  $('#car-next').addEventListener('click',function(){go(i+1);stop()});
  function stop(){clearInterval(timer)}
  if(!reduce)timer=setInterval(function(){if(document.hidden||!document.body.contains(root)){stop();return}go(i+1)},6500);
  root.addEventListener('mouseenter',stop);root.addEventListener('focusin',stop);
  var x0=null;track.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
  track.addEventListener('touchend',function(e){if(x0===null)return;var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40){go(i+(d<0?1:-1));stop()}x0=null});
  go(0);
}

/* ---------- lightbox ---------- */
var lb=$('#lightbox'),lbMedia=$('#lb-media'),lbCap=$('#lb-cap'),lbList=[],lbI=0,lbBack=null;
function renderLB(){
  var m=lbList[lbI];
  if(m.type==='video')lbMedia.innerHTML='<video src="'+m.src+'" controls autoplay playsinline'+(m.poster?' poster="'+m.poster+'"':'')+'></video>';
  else if(m.type==='img')lbMedia.innerHTML='<img src="'+m.src+'" alt="'+esc(m.cap)+'">';
  else lbMedia.innerHTML='<div class="empty-media" style="min-width:min(520px,80vw);padding:60px 30px">L\'image de ce certificat sera ajoutée prochainement.</div>';
  lbCap.textContent=m.cap+(lbList.length>1?'  ·  '+(lbI+1)+' / '+lbList.length:'');
  $('#lb-prev').style.visibility=$('#lb-next').style.visibility=lbList.length>1?'visible':'hidden';
}
function openLB(list,i,from){lbList=list;lbI=i;lbBack=from;renderLB();lb.hidden=false;document.body.style.overflow='hidden';$('#lb-close').focus()}
function closeLB(){lb.hidden=true;lbMedia.innerHTML='';document.body.style.overflow='';if(lbBack)lbBack.focus()}
$('#lb-close').addEventListener('click',closeLB);
$('#lb-prev').addEventListener('click',function(){lbI=(lbI-1+lbList.length)%lbList.length;renderLB()});
$('#lb-next').addEventListener('click',function(){lbI=(lbI+1)%lbList.length;renderLB()});
lb.addEventListener('click',function(e){if(e.target===lb)closeLB()});
document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')closeLB();if(e.key==='ArrowRight')$('#lb-next').click();if(e.key==='ArrowLeft')$('#lb-prev').click();
  if(e.key==='Tab'){var f=$$('button',lb).filter(function(b){return b.style.visibility!=='hidden'});var a=f.indexOf(document.activeElement);if(e.shiftKey&&a<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&a===f.length-1){e.preventDefault();f[0].focus()}}});

/* ---------- mobile menu ---------- */
var burger=$('#burger'),menu=$('#menu');
function closeMenu(){menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}
burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});

/* ---------- data constellation ---------- */
function startSky(cv){
  var ctx=cv.getContext('2d'),W,H,dpr=Math.min(window.devicePixelRatio||1,2),pts=[],raf=null,mouse={x:-999,y:-999},alive=true;
  var cols=['47,95,208','90,63,192','255,122,69'];
  function size(){W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    var n=Math.round(Math.min(120,W*H/11000));pts=[];for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.8+.8,c:cols[i%3]})}
  function frame(){
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<pts.length;i++){var p=pts[i];
      if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
        var dx=mouse.x-p.x,dy=mouse.y-p.y,d=Math.sqrt(dx*dx+dy*dy);if(d<160){p.x-=dx/d*.6;p.y-=dy/d*.6}}
      for(var j=i+1;j<pts.length;j++){var q=pts[j],ex=p.x-q.x,ey=p.y-q.y,e=ex*ex+ey*ey;if(e<15000){ctx.strokeStyle='rgba('+p.c+','+(0.28*(1-e/15000))+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}
      ctx.fillStyle='rgba('+p.c+',.9)';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}
    if(!reduce&&alive)raf=requestAnimationFrame(frame);
  }
  function mv(e){var r=cv.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top}
  function out(){mouse.x=mouse.y=-999}
  size();frame();
  window.addEventListener('resize',size);cv.parentNode.addEventListener('mousemove',mv);cv.parentNode.addEventListener('mouseleave',out);
  return {stop:function(){alive=false;cancelAnimationFrame(raf);window.removeEventListener('resize',size)}};
}

route();
})();

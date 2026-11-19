/* NextOS demo shell helpers. All data shown in these demos is fictional. */
(function(){
  var W = window.NX = {};
  var AGENTS = [
    ['CFO Analyst','QuickBooks vendor cost review','today','radial-gradient(circle at 35% 35%,#E07A5F,#8C2F1F)'],
    ['Insurance Posting Agent','Post for practice day Sep 30','now','radial-gradient(circle at 35% 35%,#5B7BD6,#1F2E6B)'],
    ['Insurance Billing Agent','Coverage lookups · Riverside','1h','radial-gradient(circle at 35% 35%,#6FB7A8,#1F5D52)'],
    ['Growth Analyst','Referral growth research','2d','radial-gradient(circle at 35% 35%,#E6A2B8,#9C4A66)'],
    ['Front Desk Support','Patient email drafts','3d','radial-gradient(circle at 35% 35%,#C9A35E,#6E5223)']
  ];
  W.wsName='Lakeview Surgery Center'; W.me=['JP','Jordan Park','Billing Lead']; W.sample='Fictional practice · sample data';
  W.STAFFING={name:'Northfield Staffing', me:['ML','Morgan Lee','Operations Lead'], sample:'Fictional company · sample data', agents:[
    ['Staffing Assistant','Active job orders audit','now','radial-gradient(circle at 35% 35%,#E26D5A,#8E2A1F)'],
    ['Email Support','Client response drafts','5h','radial-gradient(circle at 35% 35%,#E87A9A,#9C3456)'],
    ['Finance Agent','Vendor cost review','5h','radial-gradient(circle at 35% 35%,#7FC3A0,#2F7354)'],
    ['CEO Analyst','Weekly readiness report','1d','radial-gradient(circle at 35% 35%,#6FB7A8,#1F5D52)'],
    ['Northfield Assistant','Order schedule ideas','4d','radial-gradient(circle at 35% 35%,#5B7BD6,#1F2E6B)'],
    ['Northfield CMO','Marketing plan research','3w','radial-gradient(circle at 35% 35%,#8C9BE8,#3A3F8F)']]};
  W.setWs=function(c){ W.wsName=c.name; W.me=c.me; W.sample=c.sample; AGENTS.length=0; c.agents.forEach(function(a){ AGENTS.push(a); }); };
  W.agentColor = function(name){ for(var i=0;i<AGENTS.length;i++) if(AGENTS[i][0]===name) return AGENTS[i][3]; return '#999'; };
  W.appSide = function(activeAgent, activeNav, badge){
    var ag = AGENTS.map(function(a){ return '<div class="ag'+(a[0]===activeAgent?' on':'')+'"><i style="background:'+a[3]+'"></i><div><b>'+a[0]+'</b><span>'+a[1]+'</span></div><em>'+a[2]+'</em></div>'; }).join('');
    var nav = [['Home'],['Needs attention','<span class="badge" id="nxBadge">'+(badge==null?3:badge)+'</span>'],['Agents'],['Routines'],['Work'],['Help'],['Settings']]
      .map(function(n){ return '<div'+(n[0]===activeNav?' class="on"':'')+'>'+n[0]+(n[1]||'')+'</div>'; }).join('');
    return '<div class="ws"><div><b>'+W.wsName+'</b><small>Powered by NextOS</small></div><span class="plus">+</span></div><div class="search">Search…</div>'+ag+'<div class="nav">'+nav+'</div><div class="me"><i>'+W.me[0]+'</i><div><b>'+W.me[1]+'</b><span>'+W.me[2]+'</span></div></div>';
  };
  W.adminSide = function(active){
    var g = [['','← Back to app','back'],['','Overview'],['Workspace','People'],['','Connections'],['','Skills'],['','Apps &amp; tools'],['Safety','Safety rules'],['','Audit'],['','Health'],['Advanced','Credentials'],['','Computers'],['','Company sign-in (SSO)']];
    var h = '<div class="ws"><div><b>'+W.wsName+'</b><small>Workspace admin</small></div></div><div class="adm">';
    g.forEach(function(x){ if(x[0]) h += '<div class="grp">'+x[0]+'</div>'; h += '<div class="'+(x[2]||'')+(x[1]===active?' on':'')+'">'+x[1]+'</div>'; });
    return h + '</div><div class="me" style="margin-top:auto"><i>'+W.me[0]+'</i><div><b>'+W.me[1]+'</b><span>'+W.me[2]+'</span></div></div>';
  };
  W.baseW = 1280;
  if (/[?&]final=1/.test(location.search)) document.documentElement.classList.add('nxfinal');
  W.init = function(){
    var fit = document.getElementById('fit');
    var focus = /[?&]focus=1/.test(location.search);
    if (focus) { document.body.classList.add('focus'); W.baseW = 920; }
    var bw = focus ? 940 : 1300, bh = focus ? 680 : 820;
    function scale(){ var s = Math.min(innerWidth/bw, innerHeight/bh); fit.style.transform = 'translate(-50%,-50%) scale('+s+')'; }
    addEventListener('resize', scale); scale();
    W.fit = fit;
    W.reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  };
  var timers = [];
  W.at = function(t, fn){ timers.push(setTimeout(fn, t*1000)); };
  W.clear = function(){ timers.forEach(function(t){ clearTimeout(t); clearInterval(t); }); timers = []; };
  W.every = function(ms, fn){ var iv = setInterval(fn, ms); timers.push(iv); return iv; };
  W.$ = function(id){ return document.getElementById(id); };
  W.pos = function(el){ var r = el.getBoundingClientRect(), m = document.querySelector('.main').getBoundingClientRect(), s = W.fit.getBoundingClientRect().width/W.baseW; return [(r.left-m.left+r.width/2)/s, (r.top-m.top+r.height/2)/s]; };
  W.move = function(x, y){ if (W.baseW !== 1280) { x = Math.min(x, W.baseW - 40); y = Math.min(y, 620); } W.$('cursor').style.transform = 'translate('+x+'px,'+y+'px)'; };
  W.moveTo = function(el, dx, dy){ var p = W.pos(el); W.move(p[0]+(dx||0), p[1]+(dy||0)); };
  W.click = function(el){ var c = W.$('cursor'); c.classList.remove('click'); void c.offsetWidth; c.classList.add('click'); if(el){ el.classList.add('pressed'); setTimeout(function(){ el.classList.remove('pressed'); }, 220); } };
  W.cap = function(n, t){ var c = W.$('cap'); c.classList.remove('on'); setTimeout(function(){ W.$('capN').textContent = n; W.$('capT').textContent = t; c.classList.add('on'); }, 250); };
  W.type = function(el, str, dur){ var i = 0, step = Math.max(28, dur*1000/Math.max(1,str.length)); el.textContent = ''; var iv = setInterval(function(){ el.textContent = str.slice(0, ++i); if(i >= str.length) clearInterval(iv); }, step); timers.push(iv); };
  Object.defineProperty(W,'cursorHTML',{get:function(){ return '<div class="cursor" id="cursor"><svg viewBox="0 0 18 18"><path d="M2 1 L2 15 L6 11 L9 17 L11.5 16 L8.5 10 L14 10 Z" fill="#1D1F1E" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/></svg></div><div class="cap" id="cap"><i id="capN">01</i><span id="capT"></span></div><div class="sample">'+W.sample+'</div>'+(W.tag?'<div class="htag">'+W.tag+'</div>':''); }});
  W.loop = function(play, length){ function go(){ W.clear(); play(); W.at(length, go); } if(W.reduce || /[?&]final=1/.test(location.search)){ play(true); var c=document.getElementById('cursor'); if(c) c.style.display='none'; } else { go(); } };
})();

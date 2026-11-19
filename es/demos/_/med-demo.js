/* Nextcore Medical demo engines, built on the NextOS demo shell (shell.js).
   Every practice, person, payer, patient and number shown is fictional sample data. */
(function(){
  var NX = window.NX, $ = NX.$;
  var G = function(a,b){ return 'radial-gradient(circle at 35% 35%,'+a+','+b+')'; };
  NX.WS = {
    lake:{name:'Lakeview Surgery Center', me:['JP','Jordan Park','Gerente de la oficina administrativa'], sample:'Centro quirúrgico ficticio · datos de muestra', agents:[
      ['Agente de autorización previa','Solicitudes de autorización · próxima semana','now',G('#5B7BD6','#1F2E6B')],
      ['Agente telefónico','Llamadas a aseguradoras y pacientes','now',G('#3FA59A','#0F5C57')],
      ['Agente de citas','Tablero de quirófanos y lista de espera','12m',G('#E0A35E','#8A5B0B')],
      ['Agente de registro de pagos','Registro de pagos de seguros · 31 oct','1h',G('#7FC3A0','#2F7354')],
      ['Agente de expedientes','Búsqueda de expedientes externos','3h',G('#E87A9A','#9C3456')],
      ['Analista financiero','Preparación del cierre de mes','1d',G('#8C9BE8','#3A3F8F')]]},
    harbor:{name:'Harbor Regional Hospital', me:['AM','Avery Morgan','Directora de Acceso de Pacientes'], sample:'Hospital ficticio · datos de muestra', agents:[
      ['Agente de acceso de pacientes','Registros de mañana','now',G('#5B7BD6','#1F2E6B')],
      ['Agente de denegaciones','Lista de apelaciones','now',G('#E26D5A','#8E2A1F')],
      ['Agente telefónico','Llamadas de estado a aseguradoras','8m',G('#3FA59A','#0F5C57')],
      ['Agente de acreditación','Reacreditación · T1','2h',G('#C9A35E','#6E5223')],
      ['Analista de ingresos','Tendencias semanales de denegaciones','1d',G('#8C9BE8','#3A3F8F')]]},
    harborAccess:{name:'Harbor Regional Hospital', sample:'Hospital ficticio · datos de muestra', me:['AM','Avery Morgan','Directora de Acceso de Pacientes'], agents:[
      ['Agente de ingreso','Paquetes de mañana','now',G('#5B7BD6','#1F2E6B')],
      ['Agente de estimaciones','Procedimientos de la próxima semana','now',G('#C9A35E','#6E5223')],
      ['Agente de acceso de pacientes','Registros de mañana','12m',G('#8C9BE8','#3A3F8F')],
      ['Agente de autorización previa','Autorizaciones de cirugía e imagenología','1h',G('#6FB7A8','#1F5D52')],
      ['Agente telefónico','Llamadas de estado a aseguradoras','2h',G('#3FA59A','#0F5C57')]]},
    harborPeri:{name:'Harbor Regional Hospital', sample:'Hospital ficticio · datos de muestra', me:['CW','Casey Ward','Gerente de Servicios Perioperatorios'], agents:[
      ['Agente de paquetes preoperatorios','Casos de la próxima semana','now',G('#E87A9A','#9C3456')],
      ['Agente de mesa de cirugía','Solicitudes de caso nuevas','now',G('#5B7BD6','#1F2E6B')],
      ['Agente de autorización previa','Autorizaciones de cirugía','40m',G('#6FB7A8','#1F5D52')],
      ['Agente telefónico','Llamadas de consultorios de cirujanos','3h',G('#3FA59A','#0F5C57')]]},
    harborRev:{name:'Harbor Regional Hospital', sample:'Hospital ficticio · datos de muestra', me:['DS','Drew Santos','Director, Ciclo de Ingresos'], agents:[
      ['Agente de supervisión de facturación','Facturación tercerizada','now',G('#E0A35E','#8A5B0B')],
      ['Agente de denegaciones','Lista de apelaciones','now',G('#E26D5A','#8E2A1F')],
      ['Agente de registro de pagos','Pagos y EOB','1h',G('#5B7BD6','#1F2E6B')],
      ['Agente telefónico','Llamadas de estado a aseguradoras','2h',G('#3FA59A','#0F5C57')]]},
    harborFin:{name:'Harbor Regional Hospital', sample:'Hospital ficticio · datos de muestra', me:['RL','Robin Lee','Contralor'], agents:[
      ['Agente de conciliación','Cierre diario','now',G('#3FA59A','#0F5C57')],
      ['Agente de registro de pagos','Pagos y EOB','30m',G('#5B7BD6','#1F2E6B')],
      ['Analista financiero','Paquete de cierre mensual','1d',G('#8C9BE8','#3A3F8F')]]},
    harborComp:{name:'Harbor Regional Hospital', sample:'Hospital ficticio · datos de muestra', me:['MB','Morgan Blake','Oficial de Cumplimiento'], agents:[
      ['Agente de cumplimiento de proveedores','Expedientes de proveedores','now',G('#C9A35E','#6E5223')],
      ['Agente de acreditación','Reacreditación · T1','2h',G('#6FB7A8','#1F5D52')]]},
    harborExec:{name:'Harbor Regional Hospital', sample:'Hospital ficticio · datos de muestra', me:['SH','Sam Hale','Director de Operaciones'], agents:[
      ['Agente de informe matutino','Informe de las 7:45 AM','now',G('#3B3F3D','#0E120F')],
      ['Agente de autorización previa','38 solicitudes abiertas','now',G('#6FB7A8','#1F5D52')],
      ['Agente de autorización médica','22 paquetes preoperatorios','5m',G('#E87A9A','#9C3456')],
      ['Agente de citas','Quirófano · próxima semana','10m',G('#5B7BD6','#1F2E6B')],
      ['Agente de cumplimiento de proveedores','86 expedientes de proveedores','1h',G('#8C9BE8','#3A3F8F')],
      ['Agente de EOB','64 EOB por registrar','1h',G('#E0A35E','#8A5B0B')]]},
    cedar:{name:'Cedar Orthopedic Group', me:['RS','Riley Shah','Administradora del consultorio'], sample:'Consultorio ficticio · datos de muestra', agents:[
      ['Agente de referidos','Nuevos referidos · 4 consultorios','now',G('#E87A9A','#9C3456')],
      ['Agente de recepción','Elegibilidad para mañana','now',G('#5B7BD6','#1F2E6B')],
      ['Agente telefónico','Devolución de llamadas a pacientes','20m',G('#3FA59A','#0F5C57')],
      ['Agente de autorización previa','Autorizaciones de imagen y cirugía','1h',G('#6FB7A8','#1F5D52')],
      ['Agente de facturación','Denegaciones y reenvíos','4h',G('#E0A35E','#8A5B0B')]]},
    north:{name:'Northgate Imaging', me:['TK','Taylor Kim','Responsable de operaciones de imagenología'], sample:'Centro de imagenología ficticio · datos de muestra', agents:[
      ['Agente de autorizaciones de imagen','Autorizaciones de resonancia y tomografía','now',G('#5B7BD6','#1F2E6B')],
      ['Cola de lectura','Estudios pendientes de revisión','now',G('#3B3F3D','#0E120F')],
      ['Agente telefónico','Llamadas de agenda','15m',G('#3FA59A','#0F5C57')],
      ['Agente de citas','Tablero de equipos','1h',G('#E0A35E','#8A5B0B')],
      ['Agente de facturación','Seguimiento con aseguradoras','1d',G('#E26D5A','#8E2A1F')]]},
    ortho:{name:'Cedar Orthopedic Group', me:['ER','Dr. Elena Reyes','Cirujana ortopédica'], sample:'Consultorio ficticio · datos de muestra', agents:[
      ['IA para resonancia','Resonancias de rodilla de hoy','now',G('#3B3F3D','#0E120F')],
      ['Cola de entrenamiento','Toques del cirujano · próximo modelo','2h',G('#E0A35E','#8A5B0B')],
      ['Agente telefónico','Devolución de llamadas a pacientes','20m',G('#3FA59A','#0F5C57')],
      ['Agente de autorización previa','Autorizaciones de cirugía','1h',G('#5B7BD6','#1F2E6B')],
      ['Agente de citas','Consulta y quirófano','3h',G('#E87A9A','#9C3456')]]},
    lab:{name:'Harbor Regional · Laboratorio de IA', me:['DC','Dr. Dana Cole','Director médico de informática'], sample:'Hospital ficticio · datos de muestra', agents:[
      ['Asistente del laboratorio','Modelo de resonancia de rodilla · entrenamiento 7','now',G('#3FA59A','#0F5C57')],
      ['Desidentificación','Extracción del archivo de imágenes','2h',G('#8C9BE8','#3A3F8F')],
      ['Cola de etiquetado','Revisión clínica','5h',G('#E0A35E','#8A5B0B')]]}
  };
  var FINAL = /[?&]final=1/.test(location.search);
  function el(h){ var d=document.createElement('div'); d.innerHTML=h.trim(); return d.firstChild; }
  function esc(s){ return String(s); }
  function shell(spec, agent){
    NX.init(); NX.setWs(NX.WS[spec.ws]); NX.tag = spec.tag || '';
    $('side').innerHTML = NX.appSide(agent, spec.nav||'', spec.badge==null?2:spec.badge);
    var m = document.querySelector('.main');
    m.insertAdjacentHTML('afterbegin','<div class="top"><i style="background:'+NX.agentColor(agent)+'"></i>'+agent+(spec.topSub?'<span class="sub">'+spec.topSub+'</span>':'')+'<div class="acts">'+(spec.acts||['Aplicaciones y accesos','Ver en vivo']).map(function(a){return '<span>'+a+'</span>';}).join('')+'</div></div>');
    return m;
  }
  function finish(m){ m.insertAdjacentHTML('beforeend', NX.cursorHTML); NX.pillsToTop(); }
  NX.pillsToTop = function(){ var top=document.querySelector('.top'), sm=document.querySelector('.sample'); if(!sm) return; var w=document.createElement('div'); w.className=top?'pills':'pills pills-abs'; var host=sm.parentNode; ['htag','sample'].forEach(function(c){ var e=document.querySelector('.'+c); if(e) w.appendChild(e); }); if(top) top.insertBefore(w, top.querySelector('.acts')); else host.appendChild(w); };
  NX.FINAL = FINAL;
  function tagify(c){ var m = /^\[(ok|wt|no|bl|gy)\](.*)$/.exec(c); return m ? '<span class="tag '+m[1]+'">'+m[2]+'</span>' : c; }

  /* ── 1. Agent conversation with its own browser, an approval, and a read-back ── */
  NX.agentDemo = function(S){
    var m = shell(S, S.agent);
    var P = S.portal, views = P.views;
    var pv = Object.keys(views).map(function(id){
      var v = views[id], h = '<div class="pv" id="v_'+id+'"><div class="ph">'+v.title+'<em>'+(v.sub||'')+'</em></div>';
      if (v.type==='table'){
        var gt = 'grid-template-columns:'+(v.w||v.cols.map(function(){return '1fr';}).join(' '));
        h += '<div class="tr h" style="'+gt+'">'+v.cols.map(function(c){return '<span>'+c+'</span>';}).join('')+'</div>';
        v.rows.forEach(function(r,i){ var cls=(v.hl||[]).indexOf(i)>=0?' hl':((v.okr||[]).indexOf(i)>=0?' ok':''); h += '<div class="tr'+cls+'" id="r_'+id+'_'+i+'" style="'+gt+'">'+r.map(function(c){return '<span>'+tagify(c)+'</span>';}).join('')+'</div>'; });
      } else if (v.type==='form'){
        h += '<div class="fm">'+v.fields.map(function(f,i){ return '<label>'+f[0]+'</label><div class="fv'+(f[2]?' '+f[2]:'')+'" id="f_'+id+'_'+i+'" data-v="'+String(f[1]).replace(/"/g,'&quot;')+'"></div>'; }).join('')+'</div>';
        if (v.btns) h += '<div class="btns">'+v.btns.map(function(b,i){return '<span class="'+(i===0?'pr':'')+'" id="b_'+id+'_'+i+'">'+b+'</span>';}).join('')+'</div>';
      } else if (v.type==='doc'){
        h += '<div class="doc">'+v.html+'</div>';
      } else if (v.type==='code'){
        h += '<div style="color:var(--grey)">'+v.text+'</div><div class="code" id="c_'+id+'">'+v.code.split('').map(function(){return '<span></span>';}).join('')+'</div><div class="btns"><span class="pr">Verificar</span></div>';
      }
      return h+'</div>';
    }).join('');
    var nav = P.nav.map(function(n){ return '<span data-n="'+n+'">'+n+'</span>'; }).join('');
    var steps = S.steps.map(function(s,i){ return '<div class="st" id="s'+i+'"><span class="ic">✓</span><b>'+s.k+'</b><span>'+s.d+'</span></div>'; }).join('');
    var ans = S.answer.map(function(a){ return a; }).join('');
    var apv = S.approve ? '<div class="apv fade" id="apv"><div class="h">'+S.approve.title+'<span class="chip wt" id="apvChip">Esperando su aprobación</span></div><ul>'+S.approve.lines.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul><div class="row"><span class="btn dark" id="apvBtn">'+(S.approve.btn||'Aprobar')+'</span><span class="btn">Cambiar</span><span class="who" id="apvWho">Solo '+NX.me[1]+' puede aprobar esto</span></div></div>' : '';
    var res = '<div class="res fade" id="res">'+(S.result||[]).map(function(r){ return '<span class="chip '+r[0]+'">'+r[1]+'</span>'; }).join('')+'</div>'+(S.after?'<div class="ans" id="aft">'+S.after.join('')+'</div>':'');
    m.insertAdjacentHTML('beforeend','<div class="thread"><div class="col" id="col"><div class="u fade" id="uq"></div><div class="steps">'+steps+'</div>'+
      '<div class="scr fade" id="scr"><span class="livetag">'+(S.live||'Su propio navegador · en vivo')+'</span><div class="bw"><div class="url"><i></i><i></i><i></i><em id="url">'+P.url+'</em></div><div class="bd"><div class="pn"><b>'+P.name+'</b>'+nav+'</div><div class="pc">'+pv+'</div></div></div>'+
      '<div class="moved"><b>'+P.name+'</b><span>'+P.url+'</span><span>'+(S.movedNote||'Abierto durante este turno. Cada paso queda en el registro.')+'</span></div></div>'+
      '<div class="ans" id="ans">'+ans+'</div>'+apv+res+'</div></div><div class="inp"><span class="plus">+</span><span class="t" id="inT"></span><span class="go" id="go"></span></div>');
    finish(m);
    function view(id){ document.querySelectorAll('.pv').forEach(function(p){ p.classList.toggle('on', p.id==='v_'+id); }); var nv = views[id] && views[id].nav; document.querySelectorAll('.bw .pn span').forEach(function(s){ s.classList.toggle('on', s.getAttribute('data-n')===nv); }); if (views[id] && views[id].url) $('url').textContent = views[id].url; var pb=document.querySelector('.bw .pn b'); if(pb) pb.textContent=(views[id]&&views[id].site)||P.name; }
    function fill(id, instant){ var v = views[id]; v.fields.forEach(function(f,i){ var e=$('f_'+id+'_'+i); if(instant){ e.textContent=e.getAttribute('data-v'); e.classList.add('f'); } else NX.at(0.05+i*0.28, function(){ e.textContent=e.getAttribute('data-v'); e.classList.add('f'); }); }); }
    function code(id, instant){ var c = views[id].code, sp = $('c_'+id).children; for (var i=0;i<c.length;i++) (function(i){ if(instant) sp[i].textContent=c[i]; else NX.at(0.2+i*0.16,function(){ sp[i].textContent=c[i]; }); })(i); }
    function blocks(){ return [].slice.call(document.querySelectorAll('#ans > *, #aft > *')); }
    function scrollTo(px){ $('col').style.transform='translateY('+(-px)+'px)'; }
    function fitScroll(){ var th=document.querySelector('.thread').getBoundingClientRect().height, s=NX.fit.getBoundingClientRect().width/NX.baseW, ch=$('col').scrollHeight; scrollTo(Math.max(0, ch - th/s)); }
    function reset(){
      $('uq').textContent=S.q; ['uq','scr','res'].forEach(function(i){ $(i).classList.remove('on'); }); $('scr').classList.remove('done');
      document.querySelectorAll('.st').forEach(function(e){ e.classList.remove('on','done','run'); });
      blocks().forEach(function(b){ b.classList.remove('on'); });
      document.querySelectorAll('.fv').forEach(function(e){ e.textContent=''; e.classList.remove('f'); });
      document.querySelectorAll('.code span').forEach(function(e){ e.textContent=''; });
      if ($('apv')){ $('apv').classList.remove('on','ok'); $('apvChip').className='chip wt'; $('apvChip').textContent='Esperando su aprobación'; $('apvWho').textContent='Solo '+NX.me[1]+' puede aprobar esto'; }
      $('inT').textContent=''; $('go').classList.remove('ready'); view(S.steps[0].v); scrollTo(0);
    }
    function approved(){ $('apv').classList.add('ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Aprobado'; $('apvWho').textContent='Aprobado por '+NX.me[1]+' · justo ahora'; }
    NX.loop(function(isFinal){
      reset();
      if (isFinal || FINAL){
        ['uq','scr','res'].forEach(function(i){ $(i).classList.add('on'); }); $('scr').classList.add('done');
        document.querySelectorAll('.st').forEach(function(e){ e.classList.add('on','done'); }); blocks().forEach(function(b){ b.classList.add('on'); });
        if ($('apv')){ $('apv').classList.add('on'); approved(); }
        setTimeout(fitScroll,60); $('cursor').style.display='none'; $('cap').classList.add('on'); $('capN').textContent='04'; $('capT').textContent=S.caps[3]; return;
      }
      $('cursor').style.display='';
      NX.move(640,640); NX.cap('01', S.caps[0]);
      NX.at(0.5,function(){ NX.moveTo($('inT')); });
      NX.at(1.1,function(){ NX.click($('inT')); NX.type($('inT'), S.q, 1.9); $('go').classList.add('ready'); });
      NX.at(3.4,function(){ NX.moveTo($('go')); });
      NX.at(3.9,function(){ NX.click($('go')); $('inT').textContent=''; $('go').classList.remove('ready'); $('uq').classList.add('on'); NX.move(1060,330); });
      var t = 4.6;
      NX.at(t,function(){ $('scr').classList.add('on'); NX.cap('02', S.caps[1]); });
      S.steps.forEach(function(s,i){
        var d = s.fill ? 2.6 : (s.code ? 1.8 : 1.45);
        NX.at(t,function(){ if(i>0) $('s'+(i-1)).classList.replace('run','done'); $('s'+i).classList.add('on','run'); view(s.v); if(s.fill) fill(s.v); if(s.code) code(s.v); if(s.flash!=null){ var r=$('r_'+s.v+'_'+s.flash); if(r){ r.classList.remove('flash'); void r.offsetWidth; r.classList.add('flash'); } } setTimeout(fitScroll,60); });
        t += d;
      });
      NX.at(t,function(){ $('s'+(S.steps.length-1)).classList.replace('run','done'); $('scr').classList.add('done'); NX.cap('03', S.caps[2]); });
      t += 0.6;
      [].slice.call(document.querySelectorAll('#ans > *')).forEach(function(b,i){ NX.at(t+i*0.95,function(){ b.classList.add('on'); setTimeout(fitScroll,80); }); });
      t += document.querySelectorAll('#ans > *').length*0.95 + 0.4;
      if ($('apv')){
        NX.at(t,function(){ $('apv').classList.add('on'); setTimeout(fitScroll,80); NX.cap('04', S.caps[3]); });
        NX.at(t+1.6,function(){ NX.moveTo($('apvBtn')); });
        NX.at(t+2.5,function(){ NX.click($('apvBtn')); approved(); });
        t += 3.2;
      }
      NX.at(t,function(){ $('res').classList.add('on'); setTimeout(fitScroll,80); NX.move(1100,360); });
      [].slice.call(document.querySelectorAll('#aft > *')).forEach(function(b,i){ NX.at(t+0.8+i*0.95,function(){ b.classList.add('on'); setTimeout(fitScroll,80); }); });
      t += 0.8 + document.querySelectorAll('#aft > *').length*0.95;
      NX.at(t+4.5,function(){});
    }, S.len || 36);
  };

  /* ── 2. Phone agent: a live call through a phone menu, hold, and a person ── */
  NX.callDemo = function(S){
    var m = shell(S, S.agent);
    var bars = ''; for (var i=0;i<28;i++) bars += '<i></i>';
    m.insertAdjacentHTML('beforeend','<div class="call"><div class="pane"><h5>Llamada</h5><div class="dial"><div class="who">'+S.to+'</div><div class="num">'+S.num+'</div><span class="stat" id="stat">Listo</span><div class="tm" id="tm">00:00</div><div class="wave" id="wave">'+bars+'</div><div style="font-size:10.5px;color:var(--grey)">'+S.voiceNote+'</div></div><div class="menu" id="menu">'+S.menu.map(function(x){ return '<div><b>'+x[0]+'</b>'+x[1]+'</div>'; }).join('')+'</div></div>'+
      '<div class="pane"><h5>Transcripción en vivo</h5><div class="tx" id="tx">'+S.lines.map(function(l){ return l[0]==='sys' ? '<div class="sys">'+l[1]+'</div>' : '<div class="ln'+(l[0]==='AI'?' ai':'')+'"><b>'+(l[0]==='AI'?'NextOS':l[0])+'</b><span>'+l[1]+'</span></div>'; }).join('')+'</div></div>'+
      '<div class="pane"><h5>Datos tomados de la llamada</h5><div class="capt">'+S.fields.map(function(f,i){ return '<div id="cf'+i+'"><span>'+f[0]+'</span><b></b></div>'; }).join('')+
      '<div class="apv fade" id="apv"><div class="h">'+S.approve.title+'</div><ul>'+S.approve.lines.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul><div class="row"><span class="btn dark" id="apvBtn">'+S.approve.btn+'</span><span class="chip wt" id="apvChip">En espera</span></div></div></div></div></div>');
    finish(m);
    var waveIv = null, clockIv = null, sec = 0;
    function scrollTx(){ var tx=$('tx'), pane=tx.parentNode, avail=pane.clientHeight-110-tx.offsetTop, over=tx.scrollHeight-avail; tx.style.transition='transform .5s'; tx.style.transform='translateY('+(-Math.max(0,over))+'px)'; }
    function wave(on){ var w=$('wave'); w.classList.toggle('on',!!on); if(waveIv){ clearInterval(waveIv); waveIv=null; } if(on){ waveIv = NX.every(160,function(){ [].forEach.call(w.children,function(b){ b.style.height=(6+Math.random()*34)+'px'; }); }); } else [].forEach.call(w.children,function(b){ b.style.height='6px'; }); }
    function stat(t,c){ var s=$('stat'); s.textContent=t; s.className='stat'+(c?' '+c:''); }
    function clock(start){ if(clockIv){ clearInterval(clockIv); clockIv=null; } if(start){ clockIv = NX.every(1000,function(){ sec += S.speed||7; var mm=Math.floor(sec/60), ss=sec%60; $('tm').textContent=(mm<10?'0':'')+mm+':'+(ss<10?'0':'')+ss; }); } }
    function reset(){ sec=0; $('tm').textContent='00:00'; stat('Listo'); wave(false); clock(false);
      document.querySelectorAll('.menu div, .tx .ln, .tx .sys').forEach(function(e){ e.classList.remove('on'); }); $('tx').style.transition='none'; $('tx').style.transform='none';
      S.fields.forEach(function(f,i){ $('cf'+i).classList.remove('got'); $('cf'+i).querySelector('b').textContent=''; });
      $('apv').classList.remove('on','ok'); $('apvChip').className='chip wt'; $('apvChip').textContent='Pendiente'; }
    var lines = [].slice.call(document.querySelectorAll('.tx > *')), items = [].slice.call(document.querySelectorAll('.menu div'));
    NX.loop(function(isFinal){
      reset();
      if (isFinal || FINAL){ stat('Llamada terminada · '+S.endNote,''); $('tm').textContent=S.dur; lines.forEach(function(l){ l.classList.add('on'); }); items.forEach(function(l){ l.classList.add('on'); }); scrollTx();
        S.fields.forEach(function(f,i){ $('cf'+i).classList.add('got'); $('cf'+i).querySelector('b').textContent=f[1]; }); $('apv').classList.add('on','ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Aprobado';
        $('cursor').style.display='none'; $('cap').classList.add('on'); $('capN').textContent='04'; $('capT').textContent=S.caps[3]; return; }
      $('cursor').style.display=''; NX.move(700,700);
      NX.cap('01',S.caps[0]); NX.at(0.6,function(){ stat('Marcando…'); });
      NX.at(1.6,function(){ stat(S.connected||'Conectado · menú telefónico','live'); clock(true); wave(true); NX.cap('02',S.caps[1]); });
      var t = 2.2, mi = 0, fi = 0;
      S.script.forEach(function(ev){
        NX.at(t,function(){
          if (ev.menu!=null) items[ev.menu].classList.add('on');
          if (ev.line!=null) lines[ev.line].classList.add('on');
          if (ev.hold) { stat('En espera · esperando a una persona','hold'); wave(false); }
          if (ev.talk) { stat('Hablando con un representante','live'); wave(true); }
          if (ev.field!=null) { var f=S.fields[ev.field]; $('cf'+ev.field).classList.add('got'); $('cf'+ev.field).querySelector('b').textContent=f[1]; }
          if (ev.cap) NX.cap('03', S.caps[2]);
          scrollTx();
        });
        t += ev.d || 1.3;
      });
      NX.at(t,function(){ stat('Llamada terminada · '+S.endNote); wave(false); clock(false); $('apv').classList.add('on'); NX.cap('04',S.caps[3]); });
      NX.at(t+1.4,function(){ NX.moveTo($('apvBtn')); });
      NX.at(t+2.3,function(){ NX.click($('apvBtn')); $('apv').classList.add('ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Aprobado'; });
      NX.at(t+7,function(){});
    }, S.len || 40);
  };

  /* ── 3. Schedule board: a cancellation backfilled from the waitlist ── */
  NX.calDemo = function(S){
    var m = shell(S, S.agent);
    var g = '<div class="dh"><span></span>'+S.cols.map(function(c){return '<span>'+c+'</span>';}).join('')+'</div>';
    S.rows.forEach(function(r,ri){ g += '<div class="rw"><span>'+r[0]+'</span>'+r.slice(1).map(function(c,ci){ var p=c.split('|'); return '<div class="slot '+(p[0]||'op')+'" id="sl'+ri+'_'+ci+'"><b>'+(p[1]||'Abrir')+'</b><span>'+(p[2]||'')+'</span></div>'; }).join('')+'</div>'; });
    m.insertAdjacentHTML('beforeend','<div class="cal"><div class="grid"><h5 style="margin:0 0 10px;font-size:10.5px;font-family:var(--mono);font-weight:500;color:var(--grey);letter-spacing:.04em;text-transform:uppercase">'+S.title+'</h5>'+g+'</div><div class="side2"><h5 style="margin:0 0 10px;font-size:10.5px;font-family:var(--mono);font-weight:500;color:var(--grey);letter-spacing:.04em;text-transform:uppercase">Lo que hace el agente</h5><div class="feed" id="feed">'+S.feed.map(function(f){ return '<div class="'+(f[2]||'')+'"><em>'+f[0]+'</em>'+f[1]+'</div>'; }).join('')+'</div><div class="apv fade" id="apv" style="margin-top:10px"><div class="h">'+S.approve.title+'</div><ul>'+S.approve.lines.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul><div class="row"><span class="btn dark" id="apvBtn">'+S.approve.btn+'</span><span class="chip wt" id="apvChip">En espera</span></div></div></div></div>');
    finish(m);
    var feed = [].slice.call(document.querySelectorAll('#feed div'));
    function setSlot(id, cls, b, s){ var e=$(id); e.className='slot '+cls; e.querySelector('b').textContent=b; e.querySelector('span').textContent=s; }
    function reset(){ S.rows.forEach(function(r,ri){ r.slice(1).forEach(function(c,ci){ var p=c.split('|'); setSlot('sl'+ri+'_'+ci, p[0]||'op', p[1]||'Abrir', p[2]||''); }); }); feed.forEach(function(f){ f.classList.remove('on'); }); $('apv').classList.remove('on','ok'); $('apvChip').className='chip wt'; $('apvChip').textContent='Pendiente'; }
    NX.loop(function(isFinal){
      reset();
      if (isFinal || FINAL){ S.events.forEach(function(ev){ if(ev.slot) setSlot(ev.slot[0], ev.slot[1], ev.slot[2], ev.slot[3]); }); (S.onApprove||[]).forEach(function(ev){ setSlot(ev[0],ev[1],ev[2],ev[3]); }); feed.forEach(function(f){ f.classList.add('on'); }); $('apv').classList.add('on','ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Aprobado';
        $('cursor').style.display='none'; $('cap').classList.add('on'); $('capN').textContent='04'; $('capT').textContent=S.caps[3]; return; }
      $('cursor').style.display=''; NX.move(700,700); NX.cap('01',S.caps[0]);
      var t = 1.2;
      S.events.forEach(function(ev){ NX.at(t,function(){ if(ev.slot) setSlot(ev.slot[0], ev.slot[1], ev.slot[2], ev.slot[3]); if(ev.feed!=null) feed[ev.feed].classList.add('on'); if(ev.cap) NX.cap(ev.cap[0], S.caps[ev.cap[1]]); }); t += ev.d || 1.6; });
      NX.at(t,function(){ $('apv').classList.add('on'); NX.cap('04',S.caps[3]); });
      NX.at(t+1.3,function(){ NX.moveTo($('apvBtn')); });
      NX.at(t+2.2,function(){ NX.click($('apvBtn')); $('apv').classList.add('ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Aprobado'; S.onApprove && S.onApprove.forEach(function(ev){ setSlot(ev[0],ev[1],ev[2],ev[3]); }); });
    }, S.len || 34);
  };

  /* ── 4. Imaging review: AI-drafted measurements, a radiologist confirms each one ── */
  NX.readDemo = function(S){
    var m = shell(S, S.agent);
    m.insertAdjacentHTML('beforeend','<div class="rd"><div class="vw">'+S.images.map(function(im,i){ return '<div class="im"><span class="ilab">'+im.lab+'</span>'+im.svg+'<span class="ilab2">'+(im.note||'Ilustración · no es una imagen de paciente')+'</span></div>'; }).join('')+'</div><div class="pnl"><div class="rchips">'+S.chips.map(function(c){ return '<span class="chip '+c[0]+'">'+c[1]+'</span>'; }).join('')+'</div><div style="font-weight:700;font-size:13px;margin-bottom:2px">'+S.study+'</div><div style="font-size:11px;color:var(--grey);margin-bottom:10px">'+S.studySub+'</div>'+
      S.fields.map(function(f,i){ return '<div class="fld dr" id="fd'+i+'"><span>'+f[0]+'</span><b id="fv'+i+'">'+f[1]+'</b><em id="fe'+i+'">Borrador de IA · esperando al radiólogo</em></div>'; }).join('')+
      '<div class="apv fade" id="apv"><div class="h">'+S.approve.title+'</div><ul>'+S.approve.lines.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul><div class="row"><span class="btn dark" id="apvBtn">'+S.approve.btn+'</span><span class="chip wt" id="apvChip">Sin firmar</span></div></div></div></div>');
    finish(m);
    function reset(){ document.querySelectorAll('.meas').forEach(function(e){ e.classList.remove('on'); }); S.fields.forEach(function(f,i){ var d=$('fd'+i); d.className='fld dr'; $('fv'+i).textContent=f[1]; $('fe'+i).textContent='Borrador de IA · esperando al radiólogo'; }); $('apv').classList.remove('on','ok'); $('apvChip').className='chip wt'; $('apvChip').textContent='Sin firmar'; }
    function confirm(i, inst){ var f=S.fields[i], d=$('fd'+i); if (f[2]){ d.className='fld on ed'; $('fv'+i).textContent=f[2]; $('fe'+i).textContent='Cambiado por el radiólogo; antes: '+f[1]; } else { d.className='fld on ok'; $('fe'+i).textContent='Confirmado por el radiólogo'; } }
    NX.loop(function(isFinal){
      reset();
      if (isFinal || FINAL){ document.querySelectorAll('.meas').forEach(function(e){ e.classList.add('on'); }); S.fields.forEach(function(f,i){ confirm(i,true); }); $('apv').classList.add('on','ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Firmado';
        $('cursor').style.display='none'; $('cap').classList.add('on'); $('capN').textContent='04'; $('capT').textContent=S.caps[3]; return; }
      $('cursor').style.display=''; NX.move(700,700); NX.cap('01',S.caps[0]);
      document.querySelectorAll('.meas').forEach(function(e,i){ NX.at(1.2+i*0.9,function(){ e.classList.add('on'); }); });
      S.fields.forEach(function(f,i){ NX.at(2+i*0.6,function(){ $('fd'+i).classList.add('on'); }); });
      var t = 2 + S.fields.length*0.6 + 0.8;
      NX.at(t,function(){ NX.cap('02',S.caps[1]); });
      S.fields.forEach(function(f,i){ NX.at(t+0.6+i*1.25,function(){ NX.moveTo($('fd'+i), 60, 0); }); NX.at(t+1.1+i*1.25,function(){ NX.click($('fd'+i)); confirm(i); if(f[2]) NX.cap('03',S.caps[2]); }); });
      t += 1.4 + S.fields.length*1.25;
      NX.at(t,function(){ $('apv').classList.add('on'); NX.cap('04',S.caps[3]); });
      NX.at(t+1.2,function(){ NX.moveTo($('apvBtn')); });
      NX.at(t+2.1,function(){ NX.click($('apvBtn')); $('apv').classList.add('ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Firmado'; });
    }, S.len || 34);
  };

  /* ── 5. AI Lab: a hospital trains a model on its own data, in its own cloud account ── */
  NX.labDemo = function(S){
    var m = shell(S, S.agent);
    m.insertAdjacentHTML('beforeend','<div class="lab"><div class="kp">'+S.kpis.map(function(k,i){ return '<div><span>'+k[0]+'</span><b id="k'+i+'">'+k[1]+'</b><em>'+k[2]+'</em></div>'; }).join('')+'</div><div class="two"><div class="card"><h6>'+S.pipeTitle+'</h6><div class="pipe">'+S.pipe.map(function(p,i){ return '<div id="p'+i+'"><i></i><span>'+p[0]+'</span><em>'+p[1]+'</em></div>'; }).join('')+'</div><div class="bar"><i id="bar"></i></div></div><div class="card chart" id="chart"><h6>'+S.chartTitle+'</h6>'+S.chart+'</div></div><div class="apv fade" id="apv" style="margin-top:12px"><div class="h">'+S.approve.title+'</div><ul>'+S.approve.lines.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul><div class="row"><span class="btn dark" id="apvBtn">'+S.approve.btn+'</span><span class="chip wt" id="apvChip">Esperando al comité de revisión</span></div></div></div>');
    finish(m);
    function reset(){ S.pipe.forEach(function(p,i){ $('p'+i).className=''; }); $('chart').classList.remove('on'); $('bar').style.transition='none'; $('bar').style.width='0'; void $('bar').offsetWidth; $('bar').style.transition=''; $('apv').classList.remove('on','ok'); $('apvChip').className='chip wt'; $('apvChip').textContent='Esperando al comité de revisión'; }
    NX.loop(function(isFinal){
      reset();
      if (isFinal || FINAL){ S.pipe.forEach(function(p,i){ $('p'+i).className='done'; }); $('chart').classList.add('on'); $('bar').style.width='100%'; $('apv').classList.add('on','ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Aprobado para el piloto';
        $('cursor').style.display='none'; $('cap').classList.add('on'); $('capN').textContent='04'; $('capT').textContent=S.caps[3]; return; }
      $('cursor').style.display=''; NX.move(700,700); NX.cap('01',S.caps[0]);
      var t = 1;
      S.pipe.forEach(function(p,i){ NX.at(t,function(){ if(i>0) $('p'+(i-1)).className='done'; $('p'+i).className='run'; $('bar').style.width=Math.round((i+1)/S.pipe.length*100)+'%'; if(i===1) NX.cap('02',S.caps[1]); if(i===3){ $('chart').classList.add('on'); NX.cap('03',S.caps[2]); } }); t += 2.2; });
      NX.at(t,function(){ $('p'+(S.pipe.length-1)).className='done'; $('apv').classList.add('on'); NX.cap('04',S.caps[3]); });
      NX.at(t+1.4,function(){ NX.moveTo($('apvBtn')); });
      NX.at(t+2.3,function(){ NX.click($('apvBtn')); $('apv').classList.add('ok'); $('apvChip').className='chip ok'; $('apvChip').textContent='Aprobado para el piloto'; });
    }, S.len || 30);
  };

  /* ── 6. Surgeon one-look: MRI AI measures and sorts; the surgeon checks, decides, and every tap is a label ── */
  NX.surgeonDemo = function(S){
    var m = shell(S, S.agent);
    var lanes = S.lanes.map(function(l,i){ return '<div class="ln'+(i===0?' on':'')+'"><b>'+l[0]+'</b><span id="lc'+i+'">'+l[1]+'</span></div>'+
      (l[2]||[]).map(function(it,j){ return '<div class="wi'+(i===0&&j===0?' cur':'')+'"'+(i===0&&j===0?' id="wcur"':'')+'><b>'+it[0]+'</b><span'+(i===0&&j===0?' id="wsub"':'')+'>'+it[1]+'</span></div>'; }).join(''); }).join('');
    var spark = S.steps, mx = Math.max.apply(null, spark), pts = spark.map(function(v,i){ return (i*(200/(spark.length-1))).toFixed(1)+','+(34-v/mx*30).toFixed(1); }).join(' ');
    m.insertAdjacentHTML('beforeend','<div class="sg"><div class="wl"><h6>'+S.listTitle+'</h6>'+lanes+'</div>'+
      '<div class="cx"><div class="rs">'+S.banner+'</div><div class="pt"><b>'+S.patient+'</b><span>'+S.patientSub+'</span></div>'+
      '<div class="sug" id="sug"><i>'+S.sugLead+'</i> <b>'+S.sugLane+'</b> <span>· '+S.sugWhy+'</span></div>'+
      '<div class="ims">'+S.images.map(function(im){ return '<div class="im"><span class="ilab">'+im.lab+'</span>'+im.svg+'<span class="ilab2">'+im.note+'</span></div>'; }).join('')+'</div>'+
      '<div class="ms">'+S.rows.map(function(r,i){ return '<div class="mr" id="mr'+i+'"><span>'+r[0]+'</span><b id="mv'+i+'">'+r[1]+'</b><div class="bt"><em id="mR'+i+'">'+S.btns[0]+'</em><em id="mC'+i+'">'+S.btns[1]+'</em><em id="mM'+i+'">'+S.btns[2]+'</em></div><small id="mn'+i+'"></small></div>'; }).join('')+'</div>'+
      '<div class="lbl" id="lbl">'+S.labelNote+'</div></div>'+
      '<div class="rp"><div class="bx"><h6>'+S.saysTitle+' <span class="hid">'+S.sampleWord+'</span></h6><div class="ps">'+S.says.map(function(p){ return '<div><span>'+p[0]+'</span><b>'+p[1]+'</b></div>'; }).join('')+'</div>'+
      '<div class="sp"><span>'+S.stepsLabel+'</span><svg viewBox="0 0 200 36" preserveAspectRatio="none"><polyline points="'+pts+'"/></svg><em>'+S.stepsNote+'</em></div></div>'+
      '<div class="bx"><h6>'+S.callTitle+'</h6><div class="yc">'+S.calls.map(function(c,i){ return '<em id="yc'+i+'">'+c+'</em>'; }).join('')+'</div></div>'+
      '<div class="bx msg" id="msg"><h6>'+S.msgTitle+' <span class="chip gy" id="msgChip">'+S.msgDraft+'</span></h6><p id="msgT"></p><div class="sig">'+S.msgSig+'</div><div class="row"><span class="btn dark" id="sendBtn">'+S.sendBtn+'</span><small>'+S.msgNote+'</small></div></div></div></div>');
    finish(m);
    function reset(){
      $('sug').className='sug'; $('lbl').classList.remove('on'); $('wsub').textContent=S.lanes[0][2][0][1]; $('wcur').className='wi cur'; $('lc0').textContent=S.lanes[0][1];
      S.rows.forEach(function(r,i){ $('mr'+i).className='mr'; $('mv'+i).textContent=r[1]; $('mn'+i).textContent=''; ['R','C','M'].forEach(function(k){ $('m'+k+i).className=''; }); });
      S.calls.forEach(function(c,i){ $('yc'+i).className=''; }); $('msg').classList.remove('on','ok'); $('msgT').textContent=''; $('msgChip').className='chip gy'; $('msgChip').textContent=S.msgDraft;
      document.querySelectorAll('.sg .meas').forEach(function(e){ e.classList.remove('on'); });
    }
    function rowRight(i){ $('mr'+i).className='mr on ok'; $('mR'+i).className='sel'; $('mn'+i).textContent=S.rightNote; }
    function rowChange(i){ var r=S.rows[i]; $('mr'+i).className='mr on ed'; $('mC'+i).className='sel'; $('mv'+i).textContent=r[2]; $('mn'+i).textContent=S.changedNote+' '+r[1]; $('wsub').textContent=S.changedBy; $('wcur').className='wi cur ed'; }
    function decide(){ $('yc'+S.pick).className='sel'; $('msg').classList.add('on'); }
    function sent(){ $('msg').classList.add('ok'); $('msgChip').className='chip ok'; $('msgChip').textContent=S.msgSent; $('wsub').textContent=S.doneBy; $('wcur').className='wi cur ok'; $('lc0').textContent=S.lanes[0][3]; $('lbl').classList.add('on'); }
    NX.loop(function(isFinal){
      reset();
      if (isFinal || FINAL){ $('sug').className='sug on'; document.querySelectorAll('.sg .meas').forEach(function(e){ e.classList.add('on'); });
        S.rows.forEach(function(r,i){ if(r[2]) rowChange(i); else rowRight(i); }); decide(); $('msgT').textContent=S.msg; sent();
        $('cursor').style.display='none'; $('cap').classList.add('on'); $('capN').textContent='04'; $('capT').textContent=S.caps[3]; return; }
      $('cursor').style.display=''; NX.move(700,700); NX.cap('01',S.caps[0]);
      document.querySelectorAll('.sg .meas').forEach(function(e,i){ NX.at(0.8+i*0.7,function(){ e.classList.add('on'); }); });
      NX.at(2.6,function(){ $('sug').className='sug on'; });
      S.rows.forEach(function(r,i){ NX.at(3+i*0.3,function(){ $('mr'+i).classList.add('in'); }); });
      var t=5.2, ch=S.rows.map(function(r,i){ return r[2]?i:-1; }).filter(function(i){ return i>=0; });
      NX.at(t,function(){ NX.cap('02',S.caps[1]); });
      ch.forEach(function(i){ NX.at(t+0.5,function(){ NX.moveTo($('mC'+i)); }); NX.at(t+1.3,function(){ NX.click($('mC'+i)); rowChange(i); }); t+=2.4; });
      S.rows.forEach(function(r,i){ if(r[2]) return; NX.at(t,function(){ NX.moveTo($('mR'+i)); }); NX.at(t+0.55,function(){ NX.click($('mR'+i)); rowRight(i); }); t+=1.0; });
      t+=0.4;
      NX.at(t,function(){ NX.cap('03',S.caps[2]); NX.moveTo($('yc'+S.pick)); });
      NX.at(t+1.0,function(){ NX.click($('yc'+S.pick)); decide(); NX.type($('msgT'), S.msg, 2.6); });
      t+=4.4;
      NX.at(t,function(){ NX.moveTo($('sendBtn')); });
      NX.at(t+0.9,function(){ NX.click($('sendBtn')); sent(); NX.cap('04',S.caps[3]); });
    }, S.len || 34);
  };

  /* ── 7. Surgeons teach the model: taps become labels, an overnight retrain, a locked test, a named approval ── */
  NX.trainDemo = function(S){
    var m = shell(S, S.agent);
    m.insertAdjacentHTML('beforeend','<div class="tn"><div class="kp">'+S.kpis.map(function(k,i){ return '<div><span>'+k[0]+'</span><b id="k'+i+'">0</b><em>'+k[2]+'</em></div>'; }).join('')+'</div>'+
      '<div class="three"><div class="card"><h6>'+S.queueTitle+'</h6><div class="fq">'+S.queue.map(function(q,i){ return '<div id="q'+i+'" class="'+q[3]+'"><b>'+q[0]+'</b><span>'+q[1]+'</span><em>'+q[2]+'</em></div>'; }).join('')+'</div></div>'+
      '<div class="card"><h6>'+S.pipeTitle+'</h6><div class="pipe">'+S.pipe.map(function(p,i){ return '<div id="p'+i+'"><i></i><span>'+p[0]+'</span><em>'+p[1]+'</em></div>'; }).join('')+'</div><div class="nt">'+S.pipeNote+'</div></div>'+
      '<div class="card"><h6>'+S.resTitle+' <span class="hid">'+S.sampleWord+'</span></h6>'+S.metrics.map(function(x,i){ return '<div class="mt" id="mt'+i+'"><div class="h"><b>'+x[0]+'</b><span>'+x[1]+'</span></div><div class="vs"><span>v7 <b>'+x[2]+'</b></span><i>→</i><span class="nw">v8 <b>'+x[3]+'</b></span></div>'+(x[4]==null?'<em class="m0">'+x[5]+'</em>':'<div class="bar2"><i style="--w:'+x[4]+'%"></i></div>')+'</div>'; }).join('')+'</div></div>'+
      '<div class="apv fade" id="apv"><div class="h">'+S.approve.title+'<span class="chip gy" id="ver">'+S.verOld+'</span></div><ul>'+S.approve.lines.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul><div class="row"><span class="btn dark" id="apvBtn">'+S.approve.btn+'</span><span class="chip wt" id="apvChip">'+S.approve.wait+'</span></div></div></div>');
    finish(m);
    var timers=[];
    function count(i, to, dur){ var n=0, steps=Math.max(1,Math.round(dur*10)); var iv=setInterval(function(){ n++; $('k'+i).textContent=Math.round(to*n/steps); if(n>=steps) clearInterval(iv); }, 100); timers.push(iv); }
    function reset(){ timers.forEach(clearInterval); timers=[]; S.kpis.forEach(function(k,i){ $('k'+i).textContent='0'; }); S.queue.forEach(function(q,i){ $('q'+i).classList.remove('on'); }); S.pipe.forEach(function(p,i){ $('p'+i).className=''; }); S.metrics.forEach(function(x,i){ $('mt'+i).classList.remove('on'); });
      $('apv').classList.remove('on','ok'); $('apvChip').className='chip wt'; $('apvChip').textContent=S.approve.wait; $('ver').className='chip gy'; $('ver').textContent=S.verOld; }
    NX.loop(function(isFinal){
      reset();
      if (isFinal || FINAL){ S.kpis.forEach(function(k,i){ $('k'+i).textContent=k[1]; }); S.queue.forEach(function(q,i){ $('q'+i).classList.add('on'); }); S.pipe.forEach(function(p,i){ $('p'+i).className='done'; }); S.metrics.forEach(function(x,i){ $('mt'+i).classList.add('on'); });
        $('apv').classList.add('on','ok'); $('apvChip').className='chip ok'; $('apvChip').textContent=S.approve.done; $('ver').className='chip ok'; $('ver').textContent=S.verNew;
        $('cursor').style.display='none'; $('cap').classList.add('on'); $('capN').textContent='04'; $('capT').textContent=S.caps[3]; return; }
      $('cursor').style.display=''; NX.move(700,700); NX.cap('01',S.caps[0]);
      S.kpis.forEach(function(k,i){ NX.at(0.3,function(){ count(i, k[1], 4.5); }); });
      S.queue.forEach(function(q,i){ NX.at(0.6+i*0.8,function(){ $('q'+i).classList.add('on'); }); });
      var t=0.8+S.queue.length*0.8+0.4;
      S.pipe.forEach(function(p,i){ NX.at(t,function(){ if(i>0) $('p'+(i-1)).className='done'; $('p'+i).className='run'; if(i===1) NX.cap('02',S.caps[1]); if(i===2) NX.cap('03',S.caps[2]); }); t+=1.9; });
      NX.at(t,function(){ $('p'+(S.pipe.length-1)).className='done'; S.metrics.forEach(function(x,i){ $('mt'+i).classList.add('on'); }); });
      t+=1.6;
      NX.at(t,function(){ $('apv').classList.add('on'); NX.cap('04',S.caps[3]); });
      NX.at(t+1.3,function(){ NX.moveTo($('apvBtn')); });
      NX.at(t+2.2,function(){ NX.click($('apvBtn')); $('apv').classList.add('ok'); $('apvChip').className='chip ok'; $('apvChip').textContent=S.approve.done; $('ver').className='chip ok'; $('ver').textContent=S.verNew; });
    }, S.len || 30);
  };
})();

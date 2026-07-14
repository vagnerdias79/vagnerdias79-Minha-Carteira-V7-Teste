'use strict';
// ── INICIALIZAÇÃO APÓS LOGIN ──────────────────────────
var appInicializado = false;
window.iniciarCarteira = function () {
  if (appInicializado) return;
  appInicializado = true;
  try {
    load();
    renderAll();
    Promise.resolve(refresh()).catch(function(e) {
      console.error('Falha ao atualizar cotações:', e);
      setSt('e', 'Carteira aberta — atualização indisponível');
    });
  } catch (e) {
    console.error('Falha ao inicializar o Dashboard:', e);
    try { setSt('e', 'Carteira aberta com atualização parcial'); } catch (_) {}
  }
};

// ── TEMA ───────────────────────────────────────────────
function toggleTheme() {
  var dark = document.body.classList.contains('dark');
  document.body.className = dark ? 'light' : 'dark';
  document.getElementById('btnTheme').textContent = dark ? '\u2600\uFE0F' : '\uD83C\uDF19';
  localStorage.setItem('mc-theme', dark ? 'light' : 'dark');
  if (Object.keys(precos).length > 0) renderAll();
}
(function() {
  var t = localStorage.getItem('mc-theme') || 'dark';
  document.body.className = t;
  document.getElementById('btnTheme').textContent = t === 'dark' ? '\uD83C\uDF19' : '\u2600\uFE0F';
})();

// ── CONSTANTES ─────────────────────────────────────────
var TOK = 'd5EMVrjrWTQMD6crf7PH4N';
var SK = 'mc-v5'; // mantém compatibilidade com V6.3.1 // mantido para preservar os dados existentes
var POLICY_DEFAULT = {
  global:{BR:70,US:30},
  BR:{renda:60,acao:30,caixa:10},
  US:{etf:55,acao:45,caixa:0}
};
var policy = JSON.parse(JSON.stringify(POLICY_DEFAULT));
var MUS=30, MBR=70, METF=55, MACAO=45, MCXUSD=0, MRF=60, MABR=30, MCAIXA=10;
function syncPolicyGlobals(){
  MBR=Number(policy.global.BR)||0; MUS=Number(policy.global.US)||0;
  MRF=Number(policy.BR.renda)||0; MABR=Number(policy.BR.acao)||0; MCAIXA=Number(policy.BR.caixa)||0;
  METF=Number(policy.US.etf)||0; MACAO=Number(policy.US.acao)||0; MCXUSD=Number(policy.US.caixa)||0;
}
var CORES = ['#4f8ef7','#36d399','#f59e0b','#f87171','#a78bfa','#34d399','#fb923c','#60a5fa','#e879f9','#2dd4bf','#fbbf24','#818cf8'];

var PADRAO = [
  {ticker:'BRK.B',nome:'Berkshire Hathaway',tipo:'acao',mercado:'US',qtd:0.073544,pmedio:490.7227,pesoAlvo:5,setor:'Holding/Qualidade'},
  {ticker:'COST',nome:'Costco',tipo:'acao',mercado:'US',qtd:0.031081,pmedio:950.4435,pesoAlvo:4,setor:'Consumo Defensivo'},
  {ticker:'DE',nome:'Deere & Company',tipo:'acao',mercado:'US',qtd:0.069737,pmedio:600.9700,pesoAlvo:3,setor:'Agro/Maquinas'},
  {ticker:'FCX',nome:'Freeport-McMoRan',tipo:'acao',mercado:'US',qtd:0.406341,pmedio:68.7600,pesoAlvo:2,setor:'Cobre/Mineracao'},
  {ticker:'INDA',nome:'iShares MSCI India ETF',tipo:'etf',mercado:'US',qtd:0.647394,pmedio:49.9078,pesoAlvo:5,setor:'India'},
  {ticker:'MELI',nome:'Mercado Libre',tipo:'acao',mercado:'US',qtd:0.014046,pmedio:1607.5876,pesoAlvo:3,setor:'E-commerce/Fintech'},
  {ticker:'MSFT',nome:'Microsoft',tipo:'acao',mercado:'US',qtd:0.073037,pmedio:373.3743,pesoAlvo:4,setor:'Tecnologia'},
  {ticker:'NTR',nome:'Nutrien',tipo:'acao',mercado:'US',qtd:0.184776,pmedio:62.4000,pesoAlvo:3,setor:'Fertilizantes/Agro'},
  {ticker:'NVDA',nome:'Nvidia',tipo:'acao',mercado:'US',qtd:0.131692,pmedio:210.6425,pesoAlvo:4,setor:'Semicondutores'},
  {ticker:'PWR',nome:'Quanta Services',tipo:'acao',mercado:'US',qtd:0.016147,pmedio:714.0500,pesoAlvo:3,setor:'Infraestrutura Energia'},
  {ticker:'QQQM',nome:'Invesco NASDAQ 100 ETF',tipo:'etf',mercado:'US',qtd:0.104892,pmedio:732.5600,pesoAlvo:10,setor:'Tecnologia'},
  {ticker:'RACE',nome:'Ferrari',tipo:'acao',mercado:'US',qtd:0.100845,pmedio:350.0404,pesoAlvo:5,setor:'Luxo/Consumo Premium'},
  {ticker:'SCHD',nome:'Schwab Dividend ETF',tipo:'etf',mercado:'US',qtd:2.370142,pmedio:32.4200,pesoAlvo:10,setor:'Dividendos/Qualidade'},
  {ticker:'SHLD',nome:'Global X Defense Tech ETF',tipo:'etf',mercado:'US',qtd:0.542984,pmedio:60.7016,pesoAlvo:5,setor:'Defesa'},
  {ticker:'URA',nome:'Global X Uranium ETF',tipo:'etf',mercado:'US',qtd:0.794623,pmedio:48.3500,pesoAlvo:5,setor:'Energia Nuclear'},
  {ticker:'V',nome:'Visa',tipo:'acao',mercado:'US',qtd:0.034841,pmedio:330.9300,pesoAlvo:3,setor:'Pagamentos'},
  {ticker:'VIST',nome:'Vista Energy',tipo:'acao',mercado:'US',qtd:0.298568,pmedio:67.6229,pesoAlvo:3,setor:'Petroleo e Gas'},
  {ticker:'VOO',nome:'Vanguard S&P 500 ETF',tipo:'etf',mercado:'US',qtd:0.156065,pmedio:689.3300,pesoAlvo:15,setor:'Indice EUA'},
  {ticker:'VXUS',nome:'Vanguard Total International',tipo:'etf',mercado:'US',qtd:0.965943,pmedio:87.5000,pesoAlvo:5,setor:'Internacional ex-EUA'},
  {ticker:'XOM',nome:'Exxon Mobil',tipo:'acao',mercado:'US',qtd:0.083757,pmedio:137.6600,pesoAlvo:3,setor:'Energia'},
  {ticker:'TESE-SELIC31',nome:'Tesouro Selic 2031',tipo:'renda',mercado:'BR',qtd:1,pmedio:6143.34,pesoAlvo:0,setor:'Renda Fixa Gov.'},
  {ticker:'TESE-IPCA32',nome:'Tesouro IPCA+ 2032',tipo:'renda',mercado:'BR',qtd:1,pmedio:6244.96,pesoAlvo:0,setor:'Renda Fixa Gov.'},
  {ticker:'TESE-PRE29',nome:'Tesouro Prefixado 2029',tipo:'renda',mercado:'BR',qtd:1,pmedio:444.88,pesoAlvo:0,setor:'Renda Fixa Gov.'}
];

var carteira, dividendos, aportes, precos = {}, usdBrl = 5.75, camUpd = '';
var cMerc, cTipo, cEtf, cAcaoUS, cRF, cAcaoBR;

// ── STORAGE ────────────────────────────────────────────
function mergePolicy(saved){
  var base=JSON.parse(JSON.stringify(POLICY_DEFAULT));
  if(!saved)return base;
  ['BR','US'].forEach(function(k){if(saved.global&&saved.global[k]!==undefined)base.global[k]=Number(saved.global[k]);});
  ['renda','acao','caixa'].forEach(function(k){if(saved.BR&&saved.BR[k]!==undefined)base.BR[k]=Number(saved.BR[k]);});
  ['etf','acao','caixa'].forEach(function(k){if(saved.US&&saved.US[k]!==undefined)base.US[k]=Number(saved.US[k]);});
  return base;
}
function load() {
  try {
    var s = localStorage.getItem(SK);
    var p = s ? JSON.parse(s) : null;
    if (p) {
      carteira = p.carteira || JSON.parse(JSON.stringify(PADRAO));
      dividendos = p.dividendos || [];
      aportes = p.aportes || [];
      policy = mergePolicy(p.policy);
    } else {
      carteira = JSON.parse(JSON.stringify(PADRAO)); dividendos = []; aportes = []; policy=mergePolicy(null);
    }
  } catch(e) {
    carteira = JSON.parse(JSON.stringify(PADRAO)); dividendos = []; aportes = []; policy=mergePolicy(null);
  }
  syncPolicyGlobals();
}
function save(silent) {
  try {
    localStorage.setItem(SK, JSON.stringify({v:7, carteira:carteira, dividendos:dividendos, aportes:aportes, policy:policy}));
    if(!silent)toast('Salvo');
  } catch(e) { console.error('Falha ao salvar:',e); }
}

// ── EXPORT / IMPORT ────────────────────────────────────
function exp() {
  var pat = totais().pat;
  var tl = {acao:'Acao', etf:'ETF', fii:'FII', renda:'Renda Fixa', caixa:'Caixa'};
  var wb = XLSX.utils.book_new();

  // Aba 1 - Carteira completa
  var rows = [['Ticker','Nome','Tipo','Mercado','Setor','Quantidade','Preco Medio (orig.)','Preco Medio BRL','Cotacao Atual BRL','Valor BRL','Valor USD','Resultado BRL','Resultado %','Peso %','Alvo %']];
  carteira.forEach(function(a) {
    var p = getP(a);
    var v = a.qtd * pBRL(a);
    var c = a.qtd * pmBRL(a);
    var res = v - c;
    var rp = c ? res / c * 100 : 0;
    var peso = pat ? v / pat * 100 : 0;
    rows.push([
      a.ticker, a.nome, tl[a.tipo] || a.tipo, a.mercado, a.setor || '',
      a.qtd,
      a.pmedio,
      a.mercado === 'US' ? +(a.pmedio * usdBrl).toFixed(2) : a.pmedio,
      a.mercado === 'US' ? +(p.preco * usdBrl).toFixed(2) : p.preco,
      +v.toFixed(2), +(v / usdBrl).toFixed(2),
      +res.toFixed(2), +rp.toFixed(2),
      +peso.toFixed(2), a.pesoAlvo || 0
    ]);
  });
  var ws1 = XLSX.utils.aoa_to_sheet(rows);
  ws1['!cols'] = [{wch:12},{wch:28},{wch:12},{wch:10},{wch:22},{wch:12},{wch:18},{wch:16},{wch:16},{wch:14},{wch:12},{wch:14},{wch:12},{wch:9},{wch:9}];
  XLSX.utils.book_append_sheet(wb, ws1, 'Carteira');

  // Aba 2 - EUA Acoes
  var acoes = carteira.filter(function(a){ return a.tipo === 'acao' && a.mercado === 'US'; });
  XLSX.utils.book_append_sheet(wb, buildExpSheet(acoes, pat), 'EUA - Acoes');

  // Aba 3 - EUA ETFs
  var etfs = carteira.filter(function(a){ return a.tipo === 'etf' && a.mercado === 'US'; });
  XLSX.utils.book_append_sheet(wb, buildExpSheet(etfs, pat), 'EUA - ETFs');

  // Aba 4 - Brasil Renda Fixa
  var renda = carteira.filter(function(a){ return a.mercado === 'BR'; });
  XLSX.utils.book_append_sheet(wb, buildExpSheet(renda, pat), 'Brasil - Renda Fixa');

  // Aba 5 - Dividendos
  var dvRows = [['Ticker','Periodicidade','Data','Valor','Imposto','Obs.']];
  (dividendos || []).forEach(function(d){
    dvRows.push([d.ticker||'', d.periodo||'', d.data||'', d.valor||0, d.imposto||0, d.obs||'']);
  });
  if (dvRows.length === 1) dvRows.push(['(sem registros)','','','','','']);
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(dvRows), 'Dividendos');

  // Aba 6 - Aportes
  var apRows = [['Data','Ticker','Nome','Qtd','Preco','Cambio','Taxa','Valor BRL','Obs.']];
  (aportes || []).forEach(function(a){
    apRows.push([a.data||'', a.ticker||'', a.nome||'', a.qtd||0, a.preco||0, a.cambio||0, a.taxa||0, a.valorBrl||0, a.obs||'']);
  });
  if (apRows.length === 1) apRows.push(['(sem registros)','','','','','','','','']);
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(apRows), 'Aportes');

  var date = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, 'carteira_' + date + '.xlsx');
  toast('Exportado como Excel!');
}

function buildExpSheet(ativos, pat) {
  var rows = [['Ticker','Nome','Setor','Qtd','PM orig.','PM BRL','Cotacao BRL','Valor BRL','Valor USD','Result. BRL','Result. %','Peso %','Alvo %']];
  ativos.forEach(function(a) {
    var p = getP(a);
    var v = a.qtd * pBRL(a);
    var c = a.qtd * pmBRL(a);
    rows.push([
      a.ticker, a.nome, a.setor || '',
      a.qtd, a.pmedio,
      a.mercado === 'US' ? +(a.pmedio * usdBrl).toFixed(2) : a.pmedio,
      a.mercado === 'US' ? +(p.preco * usdBrl).toFixed(2) : p.preco,
      +v.toFixed(2), +(v / usdBrl).toFixed(2),
      +(v - c).toFixed(2),
      c ? +((v - c) / c * 100).toFixed(2) : 0,
      pat ? +(v / pat * 100).toFixed(2) : 0,
      a.pesoAlvo || 0
    ]);
  });
  var ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:12},{wch:26},{wch:22},{wch:12},{wch:14},{wch:14},{wch:14},{wch:14},{wch:12},{wch:14},{wch:11},{wch:9},{wch:9}];
  return ws;
}

function imp(e) {
  var f = e.target.files[0]; if (!f) return;
  var r = new FileReader();
  r.onload = function(ev) {
    try {
      var d = JSON.parse(ev.target.result);
      carteira = d.carteira || d; dividendos = d.dividendos || []; aportes = d.aportes || []; policy=mergePolicy(d.policy); syncPolicyGlobals();
      if (!Array.isArray(carteira)) throw 0;
      save(); closeM(); refresh(); toast('Importado');
    } catch(ex) { alert('Arquivo invalido.'); }
  };
  r.readAsText(f); e.target.value = '';
}

// ── UI ─────────────────────────────────────────────────
function toast(m) { var t = document.getElementById('toast'); t.textContent = m; t.classList.add('on'); setTimeout(function(){t.classList.remove('on');}, 2200); }
function setSt(s, m) { document.getElementById('dot').className = 'dot' + (s==='l'?' l':s==='e'?' e':''); document.getElementById('stlbl').textContent = m; }
function showPg(id, el) {
  document.querySelectorAll('.pg').forEach(function(p){p.classList.remove('on');});
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('on');});
  document.getElementById('pg-'+id).classList.add('on'); el.classList.add('on');
  if (id === 'pl') buildPolicy();
  if (id === 'st') buildStrategy();
  if (id === 'fi'){buildFamilyIntelligence();setTimeout(function(){buildNorthScore2();buildNorthGaugeSemantics();buildNorthHeatmap();buildNorthTimeline();},0);}if (id === 'go'){buildNorthGoals();setTimeout(buildNorthChecklist,0);}if (id === 'vg') setTimeout(function(){buildNorthMissionControl();buildNorthMissionAI();},0);if (id === 'na') setTimeout(function(){buildNorthAI();buildNorthConversationalAdvisor();},0);
  if (id === 'rb') buildRebalance();
  if (id === 'dv') buildDividendos();
  if (id === 'hs') buildHistorico();
}
function closeM() { document.querySelectorAll('.mb').forEach(function(m){m.classList.remove('on');}); }

// ── OPEN MODAL ────────────────────────────────────────
function openM(t, idx) {
  closeM();
  if (t === 'imp') { document.getElementById('mImp').classList.add('on'); return; }
  if (t === 'novo') {
    document.getElementById('nTk').value = '';
    document.getElementById('nFetchBox').style.display = 'none';
    document.getElementById('nFormBox').style.display = 'none';
    document.getElementById('nFaCancel').style.display = 'flex';
    document.getElementById('mNovo').classList.add('on');
    setTimeout(function(){document.getElementById('nTk').focus();}, 100);
    return;
  }
  if (t === 'aporte') {
    var sel = document.getElementById('aTk');
    sel.innerHTML = carteira.map(function(a){return '<option value="'+a.ticker+'">'+a.ticker+' \u2014 '+a.nome+'</option>';}).join('');
    document.getElementById('aValor').value = '';
    document.getElementById('aPreco').value = '';
    document.getElementById('aCambio').value = usdBrl.toFixed(4);
    document.getElementById('aTaxa').value = '';
    document.getElementById('aObs').value = '';
    document.getElementById('aData').value = new Date().toLocaleDateString('pt-BR');
    document.getElementById('aCalcBox').style.display = 'none';
    aporteTickerChange();
    document.getElementById('mAporte').classList.add('on');
    return;
  }
  if (t === 'venda') {
    var sel2 = document.getElementById('vTk');
    sel2.innerHTML = carteira.filter(function(a){return a.qtd > 0;}).map(function(a){return '<option value="'+a.ticker+'">'+a.ticker+' \u2014 '+a.nome+'</option>';}).join('');
    document.getElementById('vData').value = new Date().toLocaleDateString('pt-BR');
    document.getElementById('vCambio').value = usdBrl.toFixed(4);
    document.getElementById('vCambioAtual').textContent = 'R$ ' + usdBrl.toFixed(4);
    document.getElementById('vQtd').value = '';
    document.getElementById('vPreco').value = '';
    document.getElementById('vTaxa').value = '';
    document.getElementById('vObs').value = '';
    document.getElementById('vCalcBox').style.display = 'none';
    vendaTickerChange();
    document.getElementById('mVenda').classList.add('on');
    return;
  }
  if (t === 'edit' && idx !== undefined) {
    var a = carteira[idx];
    document.getElementById('eTkHidden').value = idx;
    document.getElementById('eNm').value = a.nome;
    document.getElementById('eSt').value = a.setor || '';
    document.getElementById('eMk').value = a.mercado;
    document.getElementById('eTp').value = a.tipo;
    document.getElementById('ePa').value = a.pesoAlvo || '';
    document.getElementById('mEdit').classList.add('on');
  }
}

// ── FORMATOS ──────────────────────────────────────────
function fR(v) { return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}); }
function fU(v) { return v.toLocaleString('en-US',{style:'currency',currency:'USD'}); }
function fP(v) { return (v>=0?'+':'')+v.toFixed(2)+'%'; }
function fC(v) { return v >= 0 ? 'pos' : 'neg'; }

// ── PRECOS ────────────────────────────────────────────
function pBRL(a) { if(a.tipo==='caixa') return a.mercado==='US'?usdBrl:1; var p=precos[a.ticker]; if(!p) return a.pmedio*(a.mercado==='US'?usdBrl:1); return p.moeda==='USD'?p.preco*usdBrl:p.preco; }
function pmBRL(a) { return a.mercado==='US'?a.pmedio*usdBrl:a.pmedio; }
function getP(a) { if(a.tipo==='caixa')return {preco:1,var:0,moeda:a.mercado==='US'?'USD':'BRL'}; return precos[a.ticker]||{preco:a.pmedio,var:0,moeda:a.mercado==='US'?'USD':'BRL'}; }

function totais() {
  var pat=0, custo=0, vd=0;
  carteira.forEach(function(a){ var v=a.qtd*pBRL(a),c=a.qtd*pmBRL(a),p=getP(a); pat+=v; custo+=c; vd+=v*(p.var/100); });
  return {pat:pat, custo:custo, res:pat-custo, rp:custo?(pat-custo)/custo*100:0, vd:vd, vdp:pat?vd/pat*100:0};
}

// ── FETCH CAMBIO ──────────────────────────────────────
async function fetchCambio() {
  try {
    var r = await fetch('https://brapi.dev/api/v2/currency?currency=USD-BRL&token='+TOK);
    var d = await r.json();
    var bid = d && d.currency && d.currency[0] && d.currency[0].bidPrice;
    if (bid && bid > 4 && bid < 10) { usdBrl = bid; camUpd = new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}); return; }
  } catch(e) {}
  try {
    var r2 = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    var d2 = await r2.json();
    var bid2 = d2 && d2.USDBRL && parseFloat(d2.USDBRL.bid);
    if (bid2 && bid2 > 4 && bid2 < 10) { usdBrl = bid2; camUpd = new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}); return; }
  } catch(e) {}
  try {
    var r3 = await fetch('https://open.er-api.com/v6/latest/USD');
    var d3 = await r3.json();
    var bid3 = d3 && d3.rates && d3.rates.BRL;
    if (bid3 && bid3 > 4 && bid3 < 10) { usdBrl = bid3; camUpd = new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}); }
  } catch(e) {}
}

async function fetchAll() {
  await fetchCambio();
  var ativos=carteira.filter(function(a){return !a.ticker.startsWith('TESE-');});
  var done=0;
  async function one(a){
    try{
      var aliases=[a.ticker,a.ticker.replace('.', '-')]; var found=null;
      for(var k=0;k<aliases.length&&!found;k++){
        var r=await fetch('https://brapi.dev/api/quote/'+encodeURIComponent(aliases[k])+'?token='+TOK); var d=await r.json(); if(d.results&&d.results[0]&&Number(d.results[0].regularMarketPrice)>0)found=d.results[0];
      }
      if(found)precos[a.ticker]={preco:Number(found.regularMarketPrice),var:Number(found.regularMarketChangePercent)||0,moeda:a.mercado==='US'?'USD':'BRL',semDados:false,ts:Date.now()};
      else if(!precos[a.ticker])precos[a.ticker]={preco:a.pmedio,var:0,moeda:a.mercado==='US'?'USD':'BRL',semDados:true};
    }catch(e){if(!precos[a.ticker])precos[a.ticker]={preco:a.pmedio,var:0,moeda:a.mercado==='US'?'USD':'BRL',semDados:true};}
    done++; setSt('l','Atualizando '+done+'/'+ativos.length+' ativos...'); renderAll();
  }
  for(var i=0;i<ativos.length;i+=5)await Promise.allSettled(ativos.slice(i,i+5).map(one));
  carteira.filter(function(a){return a.ticker.startsWith('TESE-');}).forEach(function(a){if(!precos[a.ticker])precos[a.ticker]={preco:a.pmedio,var:0,moeda:'BRL'};});
}

// ── RENDER ────────────────────────────────────────────
function renderAll() {
  var t = totais();
  var divResumo = (dividendos || []).reduce(function(acc,d){
    var at=findAt(d.ticker), isUS=at && at.mercado==='US';
    var bruto=Number(d.valor||0), imp=Number(d.imposto||0), liquido=Math.max(0,bruto-imp);
    acc.brl += isUS ? liquido*usdBrl : liquido;
    acc.usd += isUS ? liquido : liquido/usdBrl;
    return acc;
  },{brl:0,usd:0});
  document.getElementById('mpat').textContent = fR(t.pat);
  document.getElementById('mpatUsd').textContent = fU(t.pat/usdBrl);
  document.getElementById('mvd').innerHTML = '<span class="'+fC(t.vd)+'">'+fR(t.vd)+' no dia ('+fP(t.vdp)+')</span>';
  document.getElementById('minv').textContent = fR(t.custo);
  document.getElementById('minvUsd').textContent = fU(t.custo/usdBrl);
  document.getElementById('mrp').innerHTML = '<span class="'+fC(t.res)+'">'+fP(t.rp)+' sobre o custo</span>';
  document.getElementById('mres').textContent = fR(t.res);
  document.getElementById('mres').className = 'val '+fC(t.res);
  document.getElementById('mresUsd').textContent = fU(t.res/usdBrl);
  document.getElementById('mvd2').innerHTML = '<span class="'+fC(t.vd)+'">'+fP(t.vdp)+' no dia</span>';
  document.getElementById('mdiv').textContent = fR(divResumo.brl);
  document.getElementById('mdivUsd').textContent = fU(divResumo.usd);
  document.getElementById('mret').textContent = fP(t.rp);
  document.getElementById('mret').className = 'val '+fC(t.rp);
  document.getElementById('mcam').textContent = 'R$ '+usdBrl.toFixed(4);
  document.getElementById('mcamUpd').textContent = camUpd ? 'atualizado às '+camUpd : '';
  buildExecutiveKpis(t.pat);
  buildCharts(t.pat); buildResumo(t.pat); buildAtivos(t.pat); buildAloc(t.pat); buildRebalance();
  setTimeout(function(){
    buildNorthMissionControl();
    buildNorthMissionAI();
    buildNorthGoals();
    buildNorthChecklist();
    if(document.getElementById("pg-fi")&&document.getElementById("pg-fi").classList.contains("on")){
      buildNorthScore2();buildNorthGaugeSemantics();buildNorthHeatmap();buildNorthTimeline();
    }
    if(document.getElementById("pg-na")&&document.getElementById("pg-na").classList.contains("on")){
      buildNorthAI();buildNorthConversationalAdvisor();
    }
  },0);
}


function buildExecutiveKpis(pat){
  var us=0,etf=0,acoes=0,cashUSD=0;
  carteira.forEach(function(at){
    var v=at.qtd*pBRL(at);
    if(at.mercado==='US'){
      us+=v;
      if(at.tipo==='etf')etf+=v;
      else if(at.tipo==='caixa')cashUSD+=v;
      else acoes+=v;
    }
  });
  var pExt=pat?us/pat*100:0, pEtf=us?etf/us*100:0, pAcoes=us?acoes/us*100:0, pCash=us?cashUSD/us*100:0;
  var parts=[Math.abs(pExt-MUS)/Math.max(MUS,1),Math.abs(pEtf-METF)/Math.max(METF||1,1),Math.abs(pAcoes-MACAO)/Math.max(MACAO||1,1)];
  if(MCXUSD>0||cashUSD>0)parts.push(Math.abs(pCash-MCXUSD)/Math.max(MCXUSD||1,1));
  var desv=parts.reduce(function(s,v){return s+v;},0)/parts.length;
  var ader=Math.max(0,Math.min(100,100-desv*100));
  function set(id,v){var el=document.getElementById(id);if(el)el.textContent=v.toFixed(1)+'%';}
  function bar(id,v){var el=document.getElementById(id);if(el)el.style.width=Math.max(0,Math.min(100,v))+'%';}
  set('kpiExterior',pExt);set('kpiEtf',pEtf);set('kpiAcao',pAcoes);set('kpiAderencia',ader);
  bar('barExterior',MUS?pExt/MUS*100:0);bar('barEtf',METF?pEtf/METF*100:0);bar('barAcao',MACAO?pAcoes/MACAO*100:0);bar('barAderencia',ader);
  var x=document.getElementById('metaExteriorLabel');if(x)x.textContent='meta '+MUS+'%';
  x=document.getElementById('metaEtfLabel');if(x)x.textContent='meta '+METF+'%';
  x=document.getElementById('metaAcaoLabel');if(x)x.textContent='meta '+MACAO+'%';
  x=document.getElementById('titleGeo');if(x)x.textContent='Geográfica — Meta '+MUS+'% EUA / '+MBR+'% BR';
  x=document.getElementById('titleUS');if(x)x.textContent='EUA — Meta '+METF+'% ETF / '+MACAO+'% Ação / '+MCXUSD+'% Caixa USD';
  renderCashUSD(cashUSD,us,pCash);
  x=document.getElementById('titleBR');if(x)x.textContent='Brasil — Meta '+MRF+'% RF / '+MABR+'% Ações / '+MCAIXA+'% Caixa';
}


function cashUSDAsset(){return carteira.find(function(a){return a.mercado==='US'&&a.tipo==='caixa'&&(a.ticker==='CAIXA-USD'||a.ticker==='USD-CASH');});}
function renderCashUSD(cashBRL,usBRL,pct){
  var a=cashUSDAsset(),usd=a?Number(a.qtd||0):0;
  function txt(id,v){var el=document.getElementById(id);if(el)el.textContent=v;}
  txt('dashCashUSD',fU(usd));txt('dashCashBRL',fR(usd*usdBrl));txt('dashCashPct',(pct||0).toFixed(1)+'%');txt('dashCashMeta','meta '+MCXUSD+'%');
  var delta=(pct||0)-MCXUSD,status=MCXUSD===0?(usd>0?'Fora da meta':'Sem meta'):(Math.abs(delta)<.5?'Na meta':delta>0?'Acima da meta':'Abaixo da meta');
  txt('dashCashStatus',status);
  txt('cashUsdCurrent',fU(usd));txt('cashUsdBRL',fR(usd*usdBrl)+' convertido');
  var input=document.getElementById('cashUsdInput');if(input&&!input.matches(':focus'))input.value=usd?usd.toFixed(2):'';
}
function updateCashUSD(){
  var el=document.getElementById('cashUsdInput');if(!el)return;
  var value=parseFloat(String(el.value||'0').replace(',','.'));
  if(!isFinite(value)||value<0){toast('Informe um saldo USD válido');return;}
  var a=cashUSDAsset();
  if(!a){
    a={ticker:'CAIXA-USD',nome:'Caixa em Dólar',tipo:'caixa',mercado:'US',qtd:0,pmedio:1,pesoAlvo:0,setor:'Liquidez / Caixa'};
    carteira.push(a);
  }
  a.qtd=value;a.pmedio=1;
  precos[a.ticker]={preco:1,var:0,moeda:'USD'};
  save(true);renderAll();buildPolicy();toast('Saldo do Caixa USD atualizado');
}

// ── GRAFICOS ─────────────────────────────────────────
function mkChart(canvasId, ref, labels, data, colors, centerTitle, centerValue) {
  if (ref) ref.destroy();
  var isDark = document.body.classList.contains('dark');
  var txtColor = isDark ? '#8b95b0' : '#64748b';
  var ctx = document.getElementById(canvasId).getContext('2d');
  return new Chart(ctx, {
    type: 'doughnut',
    data: {labels:labels, datasets:[{data:data, backgroundColor:colors, borderWidth:2, borderColor:isDark?'#161b27':'#fff', hoverOffset:6}]},
    options: {responsive:true, maintainAspectRatio:false, cutout:'58%',
      plugins:{legend:{position:'bottom',labels:{color:txtColor,font:{size:10},padding:8,boxWidth:12}},
        tooltip:{callbacks:{label:function(c){var tot=c.dataset.data.reduce(function(a,b){return a+b;},0); return c.label+': '+fR(c.parsed)+' ('+(c.parsed/tot*100).toFixed(1)+'%)';}}}}},
    plugins:[{id:'centerText',afterDraw:function(chart){
      var ctx0=chart.ctx, area=chart.chartArea; if(!area) return;
      var x=(area.left+area.right)/2, y=(area.top+area.bottom)/2-8; ctx0.save(); ctx0.textAlign='center'; ctx0.textBaseline='middle';
      ctx0.fillStyle=txtColor; ctx0.font='10px system-ui'; ctx0.fillText(centerTitle||'Total',x,y-8);
      ctx0.fillStyle=isDark?'#e8eaf0':'#1a2035'; ctx0.font='600 14px system-ui'; ctx0.fillText(centerValue||fR(data.reduce(function(a,b){return a+b;},0)),x,y+10); ctx0.restore();
    }},{id:'pct',afterDatasetsDraw:function(chart){
      var ctx2=chart.ctx, data2=chart.data;
      var tot=data2.datasets[0].data.reduce(function(a,b){return a+b;},0);
      chart.getDatasetMeta(0).data.forEach(function(arc,i){
        var pct=data2.datasets[0].data[i]/tot*100; if(pct<4) return;
        var pos=arc.tooltipPosition(); ctx2.save();
        ctx2.fillStyle='#fff'; ctx2.font='bold 10px system-ui'; ctx2.textAlign='center'; ctx2.textBaseline='middle';
        ctx2.shadowColor='rgba(0,0,0,.6)'; ctx2.shadowBlur=3; ctx2.fillText(pct.toFixed(1)+'%',pos.x,pos.y); ctx2.restore();
      });
    }}]
  });
}

function buildCharts(pat) {
  var us=0,br=0,etf=0,ac=0,cashus=0,rf=0,acbr=0;
  var etfM={},acUSM={},rfM={},acBRM={};
  carteira.forEach(function(a){
    var v=a.qtd*pBRL(a);
    if(a.mercado==='US'){us+=v; if(a.tipo==='etf'){etf+=v;etfM[a.ticker]=(etfM[a.ticker]||0)+v;}else if(a.tipo==='caixa'){cashus+=v;}else{ac+=v;acUSM[a.ticker]=(acUSM[a.ticker]||0)+v;}}
    else{br+=v; if(a.tipo==='renda'){rf+=v;rfM[a.ticker]=(rfM[a.ticker]||0)+v;}else if(a.tipo!=='caixa'){acbr+=v;acBRM[a.ticker]=(acBRM[a.ticker]||0)+v;}}
  });
  cMerc=mkChart('cMerc',cMerc,['EUA','Brasil'],[us,br],['#4f8ef7','#36d399'],'Carteira',fR(us+br));
  cTipo=mkChart('cTipo',cTipo,['ETFs','Ações','Caixa USD'],[etf,ac,cashus],['#f59e0b','#4f8ef7','#2dd4bf'],'EUA',fR(etf+ac+cashus));
  var etfL=Object.keys(etfM),etfD=Object.values(etfM); if(etfL.length) cEtf=mkChart('cEtf',cEtf,etfL,etfD,CORES.slice(0,etfL.length),'ETFs',fR(etf));
  var acL=Object.keys(acUSM),acD=Object.values(acUSM); if(acL.length) cAcaoUS=mkChart('cAcaoUS',cAcaoUS,acL,acD,CORES.slice(0,acL.length),'Ações EUA',fR(ac));
  var rfL=Object.keys(rfM),rfD=Object.values(rfM); if(rfL.length) cRF=mkChart('cRF',cRF,rfL,rfD,CORES.slice(0,rfL.length),'Renda Fixa',fR(rf));
  var abrL=Object.keys(acBRM),abrD=Object.values(acBRM); if(abrL.length) cAcaoBR=mkChart('cAcaoBR',cAcaoBR,abrL,abrD,CORES.slice(0,abrL.length),'Brasil',fR(acbr));
}

function alocRow(label,atual,meta,cor){
  var d=atual-meta;
  var badge=Math.abs(d)<0.5?'<span class="dbadge dok">aprox meta</span>':d>0?'<span class="dbadge dup">+'+d.toFixed(1)+'%</span>':'<span class="dbadge ddn">'+d.toFixed(1)+'%</span>';
  return '<div class="row-a"><div class="ai"><div class="ad" style="background:'+cor+'"></div>'+label+'</div><div style="display:flex;gap:10px;align-items:center"><span style="font-size:11px;color:var(--text2)">meta '+meta+'%</span><span style="font-weight:600">'+atual.toFixed(1)+'%</span>'+badge+'</div></div>';
}

function buildResumo(pat){
  var us=0,br=0,etf=0,ac=0,cashus=0,rf=0,acbr=0,cx=0;
  carteira.forEach(function(a){var v=a.qtd*pBRL(a); if(a.mercado==='US'){us+=v;if(a.tipo==='etf')etf+=v;else if(a.tipo==='caixa')cashus+=v;else ac+=v;}else{br+=v;if(a.tipo==='caixa')cx+=v;else if(a.tipo==='acao'||a.tipo==='etf'||a.tipo==='fii')acbr+=v;else rf+=v;}});
  var pus=pat?us/pat*100:0,pbr=pat?br/pat*100:0,petf=us?etf/us*100:0,pac=us?ac/us*100:0,pcashus=us?cashus/us*100:0,prf=br?rf/br*100:0,pabr=br?acbr/br*100:0,pcx=br?cx/br*100:0;
  document.getElementById('resAloc').innerHTML=
    '<div style="font-size:10px;color:var(--text2);text-transform:uppercase;margin:6px 0 2px">Geografica</div>'+alocRow('EUA',pus,MUS,'#4f8ef7')+alocRow('Brasil',pbr,MBR,'#36d399')+
    '<div style="font-size:10px;color:var(--text2);text-transform:uppercase;margin:10px 0 2px">Dentro do EUA</div>'+alocRow('ETFs',petf,METF,'#f59e0b')+alocRow('Ações EUA',pac,MACAO,'#f87172')+alocRow('Caixa USD',pcashus,MCXUSD,'#2dd4bf')+
    '<div style="font-size:10px;color:var(--text2);text-transform:uppercase;margin:10px 0 2px">Dentro do Brasil</div>'+alocRow('Renda Fixa',prf,MRF,'#c084fc')+alocRow('Acoes/FIIs BR',pabr,MABR,'#36d399')+alocRow('Caixa',pcx,MCAIXA,'#f59e0b');
}

function barItem(label,atual,meta,cor){
  var d=atual-meta;
  var badge=Math.abs(d)<0.5?'<span class="dbadge dok">aprox meta</span>':d>0?'<span class="dbadge dup">+'+d.toFixed(1)+'%</span>':'<span class="dbadge ddn">'+d.toFixed(1)+'%</span>';
  return '<div style="margin-bottom:14px"><div class="pl"><span>'+label+'</span><div style="display:flex;gap:8px;align-items:center"><span style="color:var(--text2)">meta '+meta+'%</span><span style="font-weight:600">'+atual.toFixed(1)+'%</span>'+badge+'</div></div><div class="prog"><div class="pf" style="width:'+Math.min(atual,100)+'%;background:'+cor+'"></div></div></div>';
}

function buildAloc(pat){
  var us=0,br=0,etf=0,ac=0,cashus=0,rf=0,acbr=0,cx=0;
  carteira.forEach(function(a){var v=a.qtd*pBRL(a); if(a.mercado==='US'){us+=v;if(a.tipo==='etf')etf+=v;else if(a.tipo==='caixa')cashus+=v;else ac+=v;}else{br+=v;if(a.tipo==='caixa')cx+=v;else if(a.tipo==='acao'||a.tipo==='etf'||a.tipo==='fii')acbr+=v;else rf+=v;}});
  var pus=pat?us/pat*100:0,pbr=pat?br/pat*100:0,petf=us?etf/us*100:0,pac=us?ac/us*100:0,pcashus=us?cashus/us*100:0,prf=br?rf/br*100:0,pabr=br?acbr/br*100:0,pcx=br?cx/br*100:0;
  document.getElementById('alGeo').innerHTML=barItem('EUA',pus,MUS,'#4f8ef7')+barItem('Brasil',pbr,MBR,'#36d399');
  document.getElementById('alUS').innerHTML=barItem('ETFs',petf,METF,'#f59e0b')+barItem('Ações',pac,MACAO,'#f87172')+barItem('Caixa USD',pcashus,MCXUSD,'#2dd4bf');
  document.getElementById('alBR').innerHTML=barItem('Renda Fixa',prf,MRF,'#c084fc')+barItem('Acoes/FIIs',pabr,MABR,'#36d399')+barItem('Caixa',pcx,MCAIXA,'#f59e0b');
  var usAt=carteira.filter(function(a){return a.mercado==='US';}); var h='';
  usAt.sort(function(a,b){return (b.pesoAlvo||0)-(a.pesoAlvo||0);}).forEach(function(a){
    var v=a.qtd*pBRL(a),pa=us?v/us*100:0,meta=a.pesoAlvo||0,d=pa-meta,cor=a.tipo==='etf'?'#f59e0b':'#4f8ef7';
    h+='<div style="margin-bottom:11px"><div class="pl"><span><span class="tk">'+a.ticker+'</span> <span style="font-size:10px;color:var(--text2)">'+a.nome+'</span></span><div style="display:flex;gap:7px;align-items:center"><span style="font-size:10px;color:var(--text2)">meta '+meta+'%</span><span style="font-size:12px;font-weight:600">'+pa.toFixed(1)+'%</span><span class="dbadge '+(Math.abs(d)<0.5?'dok':d>0?'dup':'ddn')+'">'+fP(d)+'</span></div></div><div class="prog"><div class="pf" style="width:'+Math.min(pa,100)+'%;background:'+cor+'"></div></div></div>';
  });
  document.getElementById('alAt').innerHTML=h||'<p style="color:var(--text2)">Nenhum ativo EUA.</p>';
}

function cambioMedioHistorico(ticker){
  var mov=(aportes||[]).filter(function(x){return x.ticker===ticker && x.tipo!=='venda' && Number(x.qtd)>0 && Number(x.cambio)>0;});
  var qtd=mov.reduce(function(sum,x){return sum+Number(x.qtd||0);},0);
  if(!qtd)return usdBrl;
  return mov.reduce(function(sum,x){return sum+Number(x.qtd||0)*Number(x.cambio||0);},0)/qtd;
}

function buildAtivos(pat){
  var tl={acao:'Acao',etf:'ETF',fii:'FII',renda:'Renda Fixa',caixa:'Caixa'};
  var tc={acao:'ta',etf:'te',fii:'tf',renda:'tr',caixa:'tc'};
  var h='';
  carteira.forEach(function(a,i){
    var p=getP(a),isUS=a.mercado==='US';
    var cambioMedio=isUS?cambioMedioHistorico(a.ticker):1;
    var valorUSD=isUS?a.qtd*p.preco:(a.qtd*p.preco/usdBrl);
    var valorBRL=isUS?valorUSD*usdBrl:a.qtd*p.preco;
    var custoUSD=isUS?a.qtd*a.pmedio:(a.qtd*a.pmedio/usdBrl);
    var custoBRL=isUS?a.qtd*a.pmedio*cambioMedio:a.qtd*a.pmedio;
    var resBRL=valorBRL-custoBRL;
    var rentUSD=custoUSD?(valorUSD-custoUSD)/custoUSD*100:0;
    var rentBRL=custoBRL?resBRL/custoBRL*100:0;
    var peso=pat?valorBRL/pat*100:0,dw=peso-(a.pesoAlvo||0);
    var cotLabel=isUS?fU(p.preco)+' / '+fR(p.preco*usdBrl):fR(p.preco);
    var pmOrig=isUS?fU(a.pmedio):fR(a.pmedio);
    var camLabel=isUS?'R$ '+cambioMedio.toFixed(4):'—';
    var divAt=dividendos.filter(function(dv){return dv.ticker===a.ticker;});
    var divTotal=divAt.reduce(function(sum,dv){return sum+Number(dv.valor||0);},0);
    var divBadge=divTotal>0?'<span class="badge-div">'+(isUS?fU(divTotal):fR(divTotal))+'</span>':'<span style="color:var(--text2);font-size:10px">-</span>';
    h+='<tr><td><span class="tk">'+esc(a.ticker)+'</span><div style="font-size:10px;color:var(--text2);margin-top:2px">'+esc(a.nome)+'</div></td>';
    h+='<td style="font-size:10px;color:var(--text2)">'+esc(a.setor||'-')+'</td>';
    h+='<td><span class="tag '+tc[a.tipo]+'">'+tl[a.tipo]+'</span></td>';
    h+='<td style="font-size:11px">'+Number(a.qtd).toFixed(8)+'</td>';
    h+='<td style="font-size:11px">'+pmOrig+'</td>';
    h+='<td style="font-size:11px;color:var(--text2)">'+camLabel+'</td>';
    h+='<td style="font-size:11px">'+cotLabel+'</td>';
    var varLabel=p.semDados?'<span style="color:var(--yellow)" title="Dado indisponível na API">! --</span>':fP(p.var);
    h+='<td class="'+fC(p.var)+'" style="font-weight:600;font-size:11px">'+varLabel+'</td>';
    h+='<td style="font-weight:600">'+fR(valorBRL)+'</td>';
    h+='<td style="font-size:11px;color:var(--text2)">'+fU(valorUSD)+'</td>';
    h+='<td class="'+fC(rentUSD)+'"><strong>'+fP(rentUSD)+'</strong><div style="font-size:9px;color:var(--text2)">sem câmbio</div></td>';
    h+='<td class="'+fC(rentBRL)+'"><strong>'+fP(rentBRL)+'</strong><div style="font-size:9px;color:var(--text2)">com câmbio</div></td>';
    h+='<td class="'+fC(resBRL)+'">'+fR(resBRL)+'</td>';
    h+='<td><span style="font-size:11px">'+peso.toFixed(1)+'%</span><div class="bar"><div class="bf" style="width:'+Math.min(peso,100)+'%;background:#4f8ef7;opacity:.8"></div></div></td>';
    h+='<td style="font-size:11px;color:var(--text2)">'+(a.pesoAlvo?a.pesoAlvo+'%':'-')+'</td>';
    h+='<td><span class="'+fC(dw)+'" style="font-size:11px">'+(a.pesoAlvo?(dw>0?'+':'')+dw.toFixed(1)+'%':'-')+'</span></td>';
    h+='<td>'+divBadge+'</td>';
    h+='<td style="white-space:nowrap"><button class="btn" onclick="openM(\'edit\','+i+')" style="padding:3px 7px;font-size:10px;color:#7bb3ff;border-color:#4f8ef730;margin-right:3px">&#x270E;</button><button class="btn" onclick="delAt('+i+')" style="padding:3px 7px;font-size:10px;color:var(--red);border-color:#f8727230">&#x2715;</button></td></tr>';
  });
  document.getElementById('tbAt').innerHTML=h;
}


// ── CADASTRO, APORTES, VENDAS, DIVIDENDOS E HISTÓRICO ─────────────
function esc(v){return String(v==null?'':v).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];});}
function num(id){return parseFloat(document.getElementById(id).value)||0;}
function validDate(v){return /^\d{2}\/\d{2}\/\d{4}$/.test(v);}
function findAt(tk){return carteira.find(function(a){return a.ticker===tk;});}

async function buscarTicker(){
  var tk=document.getElementById('nTk').value.trim().toUpperCase(), mk=document.getElementById('nMk').value;
  if(!tk){toast('Digite um ticker');return;}
  var box=document.getElementById('nFetchBox'); box.style.display='block'; box.className='fetch-box'; box.innerHTML='<span class="fetch-spin"></span>Buscando dados...';
  var nome=tk,setor='',tipo='acao';
  try{
    var q=tk.replace('.', '-'); var r=await fetch('https://brapi.dev/api/quote/'+encodeURIComponent(q)+'?token='+TOK); var d=await r.json(); var x=d&&d.results&&d.results[0];
    if(x){nome=x.longName||x.shortName||tk; setor=x.sector||''; if(String(x.quoteType||'').toUpperCase()==='ETF')tipo='etf'; box.innerHTML='Ativo localizado. Revise os dados antes de cadastrar.';}
    else box.innerHTML='Ticker não localizado automaticamente. Preencha os dados manualmente.';
  }catch(e){box.innerHTML='Consulta indisponível. Preencha os dados manualmente.';}
  document.getElementById('nNm').value=nome; document.getElementById('nSt').value=setor; document.getElementById('nTp').value=tipo;
  document.getElementById('nFormBox').style.display='block'; document.getElementById('nFaCancel').style.display='none';
}
function saveNovo(){
  var tk=document.getElementById('nTk').value.trim().toUpperCase(); if(!tk||findAt(tk)){toast(findAt(tk)?'Ticker já cadastrado':'Informe o ticker');return;}
  carteira.push({ticker:tk,nome:document.getElementById('nNm').value.trim()||tk,tipo:document.getElementById('nTp').value,mercado:document.getElementById('nMk').value,qtd:0,pmedio:0,pesoAlvo:num('nPa'),setor:document.getElementById('nSt').value.trim()});
  save(); closeM(); renderAll(); toast('Ativo cadastrado');
}
function saveEdit(){
  var i=parseInt(document.getElementById('eTkHidden').value,10),a=carteira[i]; if(!a)return;
  a.nome=document.getElementById('eNm').value.trim()||a.ticker; a.setor=document.getElementById('eSt').value.trim(); a.mercado=document.getElementById('eMk').value; a.tipo=document.getElementById('eTp').value; a.pesoAlvo=num('ePa');
  save(); closeM(); renderAll();
}
function delAt(i){
  var a=carteira[i]; if(!a)return; if(!confirm('Excluir '+a.ticker+'? O histórico será preservado.'))return; carteira.splice(i,1); delete precos[a.ticker]; save(); renderAll();
}
function aporteTickerChange(){
  var a=findAt(document.getElementById('aTk').value); if(!a)return; var us=a.mercado==='US';
  document.getElementById('aMoeda').textContent=us?'US$':'R$'; document.getElementById('aMoeda2').textContent=us?'US$':'R$'; document.getElementById('aCambioBox').style.display=us?'block':'none';
  document.getElementById('aInfoBox').style.display='block'; document.getElementById('aInfoBox').innerHTML='<strong>'+esc(a.ticker)+'</strong> — '+esc(a.nome)+'<br>Qtd atual: '+Number(a.qtd).toFixed(8)+' | PM: '+(us?fU(a.pmedio):fR(a.pmedio)); aporteCalc();
}
function aporteCalc(){
  var a=findAt(document.getElementById('aTk').value); if(!a)return; var valor=num('aValor'),preco=num('aPreco'),cambio=a.mercado==='US'?num('aCambio'):1,taxa=num('aTaxa');
  if(!valor||!preco||!cambio){document.getElementById('aCalcBox').style.display='none';return;} var qtd=valor/preco, oldCost=a.qtd*a.pmedio, novoPM=(oldCost+valor)/(a.qtd+qtd),brl=valor*cambio+taxa;
  document.getElementById('aCalcBox').style.display='block'; document.getElementById('aQtdCalc').textContent=qtd.toFixed(8); document.getElementById('aValBRL').textContent=fR(brl); document.getElementById('aPMatual').textContent=a.mercado==='US'?fU(a.pmedio):fR(a.pmedio); document.getElementById('aPMnovo').textContent=a.mercado==='US'?fU(novoPM):fR(novoPM);
}
function saveAporte(){
  var a=findAt(document.getElementById('aTk').value),valor=num('aValor'),preco=num('aPreco'),taxa=num('aTaxa'),data=document.getElementById('aData').value.trim(); if(!a||valor<=0||preco<=0){toast('Preencha valor e preço');return;} if(!validDate(data)){toast('Use a data no formato dd/mm/aaaa');return;}
  var cambio=a.mercado==='US'?num('aCambio'):1; if(cambio<=0){toast('Informe o câmbio');return;} var qtd=valor/preco,oldQtd=a.qtd,oldCost=oldQtd*a.pmedio; a.qtd=oldQtd+qtd; a.pmedio=a.qtd?(oldCost+valor)/a.qtd:0;
  aportes.push({tipo:'aporte',data:data,ticker:a.ticker,nome:a.nome,qtd:qtd,preco:preco,cambio:cambio,taxa:taxa,valorOrig:valor,valorBrl:valor*cambio+taxa,pmDepois:a.pmedio,obs:document.getElementById('aObs').value.trim()}); save(); closeM(); renderAll(); toast('Aporte registrado');
}
function vendaTickerChange(){
  var a=findAt(document.getElementById('vTk').value); if(!a)return; var us=a.mercado==='US'; document.getElementById('vMoeda').textContent=us?'US$':'R$'; document.getElementById('vCambioBox').style.display=us?'block':'none'; document.getElementById('vQtdDisp').textContent=Number(a.qtd).toFixed(8); document.getElementById('vInfoBox').style.display='block'; document.getElementById('vInfoBox').innerHTML='<strong>'+esc(a.ticker)+'</strong> — PM atual: '+(us?fU(a.pmedio):fR(a.pmedio)); vendaCalc();
}
function vendaCalc(){
  var a=findAt(document.getElementById('vTk').value); if(!a)return; var q=num('vQtd'),p=num('vPreco'),cam=a.mercado==='US'?num('vCambio'):1,taxa=num('vTaxa'); if(q<=0||p<=0||q>a.qtd||cam<=0){document.getElementById('vCalcBox').style.display='none';return;}
  var bruto=q*p*cam,custo=q*a.pmedio*cam,lucro=bruto-custo,liq=lucro-taxa,camCompra=a.mercado==='US'?mediaCambio(a.ticker):1,varCamb=a.mercado==='US'?q*a.pmedio*(cam-camCompra):0;
  document.getElementById('vCalcBox').style.display='block'; document.getElementById('vResBruto').textContent=fR(bruto); document.getElementById('vResPM').textContent=a.mercado==='US'?fU(a.pmedio):fR(a.pmedio); document.getElementById('vResCusto').textContent=fR(custo); document.getElementById('vResLucro').textContent=fR(lucro); document.getElementById('vResCambioComp').textContent=a.mercado==='US'?'R$ '+camCompra.toFixed(4):'—'; document.getElementById('vResVarCambio').textContent=fR(varCamb); document.getElementById('vResTaxa').textContent=fR(taxa); document.getElementById('vResLiq').textContent=fR(liq);
  document.getElementById('vImpBase').value=Math.max(liq,0).toFixed(2); if(!document.getElementById('vImpAliq').value)document.getElementById('vImpAliq').value=a.mercado==='US'?'15':'15'; document.getElementById('vImpRegra').textContent='Estimativa informativa. A tributação depende da legislação vigente e da situação fiscal do investidor.'; vendaCalcImp();
}
function mediaCambio(tk){var x=aportes.filter(function(a){return a.ticker===tk&&a.tipo!=='venda'&&a.cambio;});var q=x.reduce(function(s,a){return s+(a.qtd||0);},0);return q?x.reduce(function(s,a){return s+(a.qtd||0)*(a.cambio||0);},0)/q:usdBrl;}
function vendaCalcImp(){var base=num('vImpBase'),aliq=num('vImpAliq'),ir=Math.max(base,0)*aliq/100,apos=base-ir;document.getElementById('vImpValor').textContent=fR(ir);document.getElementById('vResAfterIR').textContent=fR(apos);document.getElementById('vResAfterIR').className=fC(apos);}
function saveVenda(){
  var a=findAt(document.getElementById('vTk').value),q=num('vQtd'),p=num('vPreco'),cam=a&&a.mercado==='US'?num('vCambio'):1,taxa=num('vTaxa'),data=document.getElementById('vData').value.trim(); if(!a||q<=0||p<=0||q>a.qtd){toast('Revise quantidade e preço');return;} if(!validDate(data)){toast('Use a data no formato dd/mm/aaaa');return;}
  var bruto=q*p*cam,custo=q*a.pmedio*cam,lucro=bruto-custo-taxa,ir=Math.max(num('vImpBase'),0)*num('vImpAliq')/100; a.qtd=Math.max(0,a.qtd-q); if(a.qtd<1e-10){a.qtd=0;a.pmedio=0;}
  aportes.push({tipo:'venda',data:data,ticker:a.ticker,nome:a.nome,qtd:q,preco:p,cambio:cam,taxa:taxa,valorOrig:q*p,valorBrl:bruto-taxa,lucro:lucro,ir:ir,liquido:lucro-ir,pmDepois:a.pmedio,obs:document.getElementById('vObs').value.trim()}); save(); closeM(); renderAll(); toast('Venda registrada');
}
function buildDividendos(){
  if(!document.getElementById('dvData').value)document.getElementById('dvData').value=new Date().toLocaleDateString('pt-BR');
  var opts=carteira.map(function(a){return '<option value="'+esc(a.ticker)+'">'+esc(a.ticker)+' — '+esc(a.nome)+'</option>';}).join(''); document.getElementById('dvAtivo').innerHTML=opts; document.getElementById('dvReinvest').innerHTML='<option value="">— escolher ativo —</option>'+opts; dvAtivoChange();
  var totalBRL=0,impBRL=0; (dividendos||[]).forEach(function(d){var a=findAt(d.ticker),cam=d.cambio||((a&&a.mercado==='US')?usdBrl:1);totalBRL+=(d.valor||0)*cam;impBRL+=(d.imposto||0)*cam;}); document.getElementById('dvTotalBRL').textContent=fR(totalBRL);document.getElementById('dvTotalUSD').textContent=fU(totalBRL/usdBrl);document.getElementById('dvTotalImp').textContent=fR(impBRL);
  var h=(dividendos||[]).slice().reverse().map(function(d){var a=findAt(d.ticker),us=a&&a.mercado==='US';return '<div class="row-a"><div><span class="tk">'+esc(d.ticker)+'</span> <span style="font-size:11px;color:var(--text2)">'+esc(d.data)+' · '+esc(d.periodo)+'</span><div style="font-size:10px;color:var(--text2);margin-top:3px">'+esc(d.obs||'')+'</div></div><div style="text-align:right"><strong class="pos">'+(us?fU(d.valor):fR(d.valor))+'</strong><div style="font-size:10px;color:var(--red)">Imposto '+(us?fU(d.imposto||0):fR(d.imposto||0))+'</div></div></div>';}).join(''); document.getElementById('dvHistorico').innerHTML=h||'<p class="empty">Nenhum dividendo registrado.</p>';
}
function dvAtivoChange(){var a=findAt(document.getElementById('dvAtivo').value);var us=a&&a.mercado==='US';document.getElementById('dvMoedaTag').textContent=us?'US$':'R$';document.getElementById('dvMoedaTagImp').textContent=us?'US$':'R$';}
function dvCalcPct(){var v=num('dvValor'),i=num('dvImposto');document.getElementById('dvPctCalc').textContent=(v?i/v*100:0).toFixed(1);}
function regDiv(){var a=findAt(document.getElementById('dvAtivo').value),v=num('dvValor'),data=document.getElementById('dvData').value.trim();if(!a||v<=0){toast('Informe ativo e valor');return;}if(!validDate(data)){toast('Use a data no formato dd/mm/aaaa');return;}dividendos.push({ticker:a.ticker,periodo:document.getElementById('dvPeriodo').value,data:data,valor:v,imposto:num('dvImposto'),cambio:a.mercado==='US'?usdBrl:1,obs:document.getElementById('dvObs').value.trim()});save();document.getElementById('dvValor').value='';document.getElementById('dvImposto').value='';buildDividendos();toast('Dividendo registrado');}
function reinvestDiv(){var tk=document.getElementById('dvReinvest').value;if(!tk){toast('Escolha o ativo para reinvestir');return;}var liquido=Math.max(num('dvValor')-num('dvImposto'),0);if(!liquido){toast('Informe o dividendo líquido');return;}closeM();openM('aporte');document.getElementById('aTk').value=tk;aporteTickerChange();document.getElementById('aValor').value=liquido.toFixed(2);document.getElementById('aObs').value='Reinvestimento de dividendos';toast('Complete o preço e confirme o aporte');}
function buildHistorico(){
  var sel=document.getElementById('hsFiltAt'); if(sel.options.length<=1)sel.innerHTML='<option value="">Todos os ativos</option>'+carteira.map(function(a){return '<option value="'+esc(a.ticker)+'">'+esc(a.ticker)+'</option>';}).join(''); var at=sel.value,tp=document.getElementById('hsFiltTp').value,b=(document.getElementById('hsFiltBusca').value||'').toUpperCase();
  var arr=(aportes||[]).filter(function(x){return(!at||x.ticker===at)&&(!tp||x.tipo===tp)&&(!b||String(x.ticker).toUpperCase().includes(b));}).slice().reverse(); var h=arr.map(function(x){var venda=x.tipo==='venda';return '<tr class="'+(venda?'venda-row':'')+'"><td>'+esc(x.data)+'</td><td><span class="tk">'+esc(x.ticker)+'</span></td><td>'+esc(x.nome||'')+'</td><td><span class="tag '+(venda?'tr':'tf')+'">'+esc(x.tipo||'aporte')+'</span></td><td>'+Number(x.qtd||0).toFixed(8)+'</td><td>'+Number(x.preco||0).toFixed(4)+'</td><td>'+Number(x.cambio||0).toFixed(4)+'</td><td>'+fR(x.taxa||0)+'</td><td>'+Number(x.valorOrig||0).toFixed(2)+'</td><td>'+fR(x.valorBrl||0)+'</td><td class="'+fC(x.lucro||0)+'">'+(venda?fR(x.lucro||0):'—')+'</td><td>'+(venda?fR(x.ir||0):'—')+'</td><td>'+(venda?fR(x.liquido||0):'—')+'</td><td>'+Number(x.pmDepois||0).toFixed(4)+'</td><td>'+esc(x.obs||'')+'</td></tr>';}).join(''); document.getElementById('tbHist').innerHTML=h||'<tr><td colspan="15" class="empty">Nenhuma movimentação encontrada.</td></tr>'; var ap=arr.filter(function(x){return x.tipo!=='venda';}).reduce(function(s,x){return s+(x.valorBrl||0);},0),vd=arr.filter(function(x){return x.tipo==='venda';}).reduce(function(s,x){return s+(x.valorBrl||0);},0);document.getElementById('hsResumo').innerHTML='<div class="info-box">Aportes no filtro: <strong>'+fR(ap)+'</strong> · Vendas líquidas no filtro: <strong>'+fR(vd)+'</strong></div>';
}
function backupJson(){var data={v:7,exportadoEm:new Date().toISOString(),carteira:carteira,dividendos:dividendos,aportes:aportes,policy:policy};var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='carteira_backup_'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(function(){URL.revokeObjectURL(u);},1000);toast('Backup JSON criado');}


// ── POLÍTICA DE ALOCAÇÃO · SPRINT 3.1 ────────────────
function policyValue(id){
  var el=document.getElementById(id);
  if(!el)return 0;
  var v=parseFloat(String(el.value).replace(',','.'));
  return isFinite(v)?Math.max(0,Math.min(100,v)):0;
}
function currentPolicyFromForm(){
  return {
    global:{BR:policyValue('polBR'),US:policyValue('polUS')},
    BR:{renda:policyValue('polBRRenda'),acao:policyValue('polBRAcao'),caixa:policyValue('polBRCaixa')},
    US:{etf:policyValue('polUSETF'),acao:policyValue('polUSAcao'),caixa:policyValue('polUSCaixa')}
  };
}
function policyGroupValid(values){
  var sum=values.reduce(function(s,v){return s+Number(v||0);},0);
  return {sum:sum,valid:Math.abs(sum-100)<0.011};
}
function setPolicyInput(id,value){
  var el=document.getElementById(id);if(el)el.value=Number(value).toFixed(Number(value)%1?1:0);
}
function buildPolicy(){
  if(!document.getElementById('polBR'))return;
  setPolicyInput('polBR',policy.global.BR);setPolicyInput('polUS',policy.global.US);
  setPolicyInput('polBRRenda',policy.BR.renda);setPolicyInput('polBRAcao',policy.BR.acao);setPolicyInput('polBRCaixa',policy.BR.caixa);
  setPolicyInput('polUSETF',policy.US.etf);setPolicyInput('polUSAcao',policy.US.acao);setPolicyInput('polUSCaixa',policy.US.caixa);
  previewPolicy();
  var cash=cashUSDAsset();renderCashUSD(cash?cash.qtd*usdBrl:0,0,0);
}
function setPolicyBar(id,width,color){
  var el=document.getElementById(id);if(!el)return;
  el.style.width=Math.max(0,Math.min(100,width))+'%';
  el.style.background=color;
}
function policyMetric(label,value,sub,accent){
  return '<div class="policy-summary-item"><span>'+label+'</span><strong style="color:'+accent+'">'+Number(value).toFixed(1)+'%</strong><small>'+sub+'</small></div>';
}
function previewPolicy(){
  if(!document.getElementById('polBR'))return;
  var p=currentPolicyFromForm();
  var g=policyGroupValid([p.global.BR,p.global.US]);
  var br=policyGroupValid([p.BR.renda,p.BR.acao,p.BR.caixa]);
  var us=policyGroupValid([p.US.etf,p.US.acao,p.US.caixa]);
  function sumState(id,obj){
    var el=document.getElementById(id);if(!el)return;
    el.textContent=obj.sum.toFixed(1)+'%';
    el.className='policy-total '+(obj.valid?'policy-ok':'policy-error');
  }
  sumState('sumGlobal',g);sumState('sumBR',br);sumState('sumUS',us);
  setPolicyBar('polBarBR',p.global.BR,'#36d399');setPolicyBar('polBarUS',p.global.US,'#4f8ef7');
  setPolicyBar('polBarBRRenda',p.BR.renda,'#c084fc');setPolicyBar('polBarBRAcao',p.BR.acao,'#36d399');setPolicyBar('polBarBRCaixa',p.BR.caixa,'#f59e0b');
  setPolicyBar('polBarUSETF',p.US.etf,'#f59e0b');setPolicyBar('polBarUSAcao',p.US.acao,'#4f8ef7');setPolicyBar('polBarUSCaixa',p.US.caixa,'#2dd4bf');
  var valid=g.valid&&br.valid&&us.valid;
  var status=document.getElementById('policyStatus');
  if(status)status.innerHTML='<span>STATUS DA POLÍTICA</span><strong class="'+(valid?'pos':'neg')+'">'+(valid?'Válida':'Revisar')+'</strong><small>'+(valid?'todos os blocos somam 100%':'cada bloco precisa somar 100%')+'</small>';
  var btn=document.getElementById('btnSavePolicy');if(btn)btn.disabled=!valid;
  var summary=document.getElementById('policySummary');
  if(summary)summary.innerHTML=
    policyMetric('Brasil',p.global.BR,'do patrimônio total','#36d399')+
    policyMetric('Estados Unidos',p.global.US,'do patrimônio total','#4f8ef7')+
    policyMetric('Renda fixa BR',p.global.BR*p.BR.renda/100,'peso consolidado','#c084fc')+
    policyMetric('Ações/FIIs BR',p.global.BR*p.BR.acao/100,'peso consolidado','#36d399')+
    policyMetric('Caixa BR',p.global.BR*p.BR.caixa/100,'peso consolidado','#f59e0b')+
    policyMetric('ETFs EUA',p.global.US*p.US.etf/100,'peso consolidado','#f59e0b')+
    policyMetric('Ações EUA',p.global.US*p.US.acao/100,'peso consolidado','#4f8ef7')+
    policyMetric('Caixa USD',p.global.US*p.US.caixa/100,'peso consolidado','#2dd4bf');
  return {policy:p,valid:valid};
}
function savePolicy(){
  var result=previewPolicy();
  if(!result||!result.valid){toast('Revise os blocos: cada um deve somar 100%');return;}
  policy=result.policy;syncPolicyGlobals();save(true);renderAll();buildPolicy();toast('Política de alocação salva');
}
function resetPolicy(){
  policy=mergePolicy(POLICY_DEFAULT);syncPolicyGlobals();buildPolicy();toast('Política padrão restaurada — clique em Salvar');
}


var strategyView='grouped';
function setStrategyView(view,btn){
  strategyView=view;
  document.querySelectorAll('.view-btn').forEach(function(b){b.classList.remove('active');});
  if(btn)btn.classList.add('active');
  buildStrategy();
}
function updateConvictionLabel(input,labelId){
  var el=document.getElementById(labelId);
  if(el)el.textContent=input.value;
}
function convictionColor(v){
  if(v>=90)return 'conv-max';
  if(v>=80)return 'conv-high';
  if(v>=65)return 'conv-mid';
  return 'conv-low';
}
function strategyBadge(s){
  if(s>=90)return {cls:'badge-excellent',label:'Excelente'};
  if(s>=80)return {cls:'badge-good',label:'Muito bom'};
  if(s>=65)return {cls:'badge-mid',label:'Atenção'};
  return {cls:'badge-low',label:'Revisar'};
}
function thesisIcon(a){
  var s=(strategyRole(a)+' '+(a.setor||'')).toLowerCase();
  if(s.indexOf('defesa')>=0)return '🛡';
  if(s.indexOf('tecnologia')>=0||s.indexOf('ia')>=0)return '💻';
  if(s.indexOf('dividend')>=0)return '💵';
  if(s.indexOf('energia')>=0||s.indexOf('petróleo')>=0||s.indexOf('uran')>=0)return '⚡';
  if(s.indexOf('agro')>=0||s.indexOf('fertiliz')>=0)return '🌾';
  if(s.indexOf('luxo')>=0||s.indexOf('consumo')>=0)return '◆';
  if(s.indexOf('diversifica')>=0||s.indexOf('internacional')>=0)return '🌎';
  if(s.indexOf('cobre')>=0||s.indexOf('minera')>=0)return '⛏';
  if(a.tipo==='renda')return '🏦';
  return '◈';
}

// ── INTELIGÊNCIA ESTRATÉGICA · ALPHA 8 ───────────────
var STRATEGY_ROLE_DEFAULTS={
  VOO:'Núcleo do mercado americano',
  QQQM:'Crescimento e tecnologia',
  SCHD:'Dividendos e qualidade',
  VXUS:'Diversificação internacional',
  INDA:'Exposição ao crescimento da Índia',
  SHLD:'Defesa e tecnologia militar',
  URA:'Energia nuclear e urânio',
  'BRK.B':'Holding de qualidade',
  MSFT:'Tecnologia, nuvem e IA',
  NVDA:'Semicondutores e IA',
  V:'Pagamentos globais',
  RACE:'Luxo e marca premium',
  MELI:'E-commerce e fintech na América Latina',
  XOM:'Energia integrada',
  VIST:'Petróleo e gás na Argentina',
  PWR:'Infraestrutura elétrica',
  FCX:'Cobre e mineração',
  NTR:'Fertilizantes e segurança alimentar',
  DE:'Máquinas agrícolas',
  COST:'Consumo defensivo',
  'TESE-PRE29':'Renda fixa prefixada'
};
function strategyRole(a){
  return a.strategyRole||STRATEGY_ROLE_DEFAULTS[a.ticker]||a.setor||'Papel estratégico não definido';
}
function convictionOf(a){
  var v=Number(a.conviction);
  if(!isFinite(v))return 75;
  return Math.max(0,Math.min(100,v));
}
function convictionLabel(v){
  if(v>=90)return 'Convicção máxima';
  if(v>=80)return 'Convicção alta';
  if(v>=65)return 'Convicção moderada';
  if(v>=50)return 'Convicção reduzida';
  return 'Revisar tese';
}
function purchaseRating(score){
  if(score>=90)return {stars:'★★★★★',label:'Compra excelente'};
  if(score>=80)return {stars:'★★★★☆',label:'Boa compra'};
  if(score>=65)return {stars:'★★★☆☆',label:'Compra normal'};
  if(score>=50)return {stars:'★★☆☆☆',label:'Somente para rebalancear'};
  return {stars:'★☆☆☆☆',label:'Não priorizar'};
}

function scoreVisual(score){
  if(score>=80)return {label:'Excelente',cls:'score-visual-excellent'};
  if(score>=65)return {label:'Bom',cls:'score-visual-good'};
  if(score>=50)return {label:'Moderado',cls:'score-visual-mid'};
  if(score>=35)return {label:'Atenção',cls:'score-visual-warning'};
  return {label:'Revisar',cls:'score-visual-low'};
}
function strategyClassTarget(a){
  var k=rbClassOf(a),meta=rbClassMeta();
  return meta[k]||0;
}
function strategyClassCurrent(a){
  var k=rbClassOf(a),cur=rbCurrentByClass(),pat=totais().pat;
  return pat?(cur[k]||0)/pat*100:0;
}
function strategyScore(a){
  var k=rbClassOf(a),classMeta=strategyClassTarget(a),classCurrent=strategyClassCurrent(a);
  var classGap=classMeta>0?Math.abs(classCurrent-classMeta)/classMeta:0;
  var classScore=Math.max(0,100-classGap*70);
  var assetTarget=Number(a.pesoAlvo||0);
  var pat=totais().pat||1;
  var assetCurrent=rbValue(a)/pat*100;
  var assetScore=assetTarget>0?Math.max(0,100-Math.abs(assetCurrent-assetTarget)/assetTarget*55):75;
  var roleScore=strategyRole(a).indexOf('não definido')>=0?55:100;
  var conviction=convictionOf(a);
  var cashPenalty=(a.tipo==='caixa'&&strategyClassTarget(a)===0)?15:0;
  return Math.max(0,Math.min(100,Math.round(classScore*.35+assetScore*.30+roleScore*.10+conviction*.25-cashPenalty)));
}
function strategyScoreLabel(s){
  if(s>=90)return 'Excelente alinhamento';
  if(s>=80)return 'Bom alinhamento';
  if(s>=65)return 'Atenção moderada';
  return 'Revisar posição';
}
function saveStrategyRole(ticker){
  var el=document.getElementById('role-'+ticker.replace(/[^a-zA-Z0-9]/g,'_'));
  var a=carteira.find(function(x){return x.ticker===ticker;});
  if(!el||!a)return;
  a.strategyRole=el.value.trim();
  save(true);buildStrategy();toast('Estratégia do ativo salva');
}
function saveConviction(ticker){
  var id='conv-'+ticker.replace(/[^a-zA-Z0-9]/g,'_');
  var el=document.getElementById(id);
  var a=carteira.find(function(x){return x.ticker===ticker;});
  if(!el||!a)return;
  var v=parseFloat(el.value);
  if(!isFinite(v)||v<0||v>100){toast('Informe convicção entre 0 e 100');return;}
  a.conviction=v;
  save(true);buildStrategy();toast('Convicção salva');
}
function buildStrategy(){
  var root=document.getElementById('strategyCards');if(!root)return;
  var filter=(document.getElementById('strategyFilter')||{}).value||'ALL';
  var list=carteira.filter(function(a){
    if(a.tipo==='caixa')return false;
    if(filter==='BR')return a.mercado==='BR';
    if(filter==='US')return a.mercado==='US';
    if(filter==='ETF')return a.tipo==='etf';
    if(filter==='ACAO')return a.tipo==='acao';
    if(filter==='RENDA')return a.tipo==='renda';
    return true;
  });
  var scores=list.map(strategyScore);
  var avg=scores.length?scores.reduce(function(s,v){return s+v;},0)/scores.length:0;
  var g=document.getElementById('strategyGlobalScore'),l=document.getElementById('strategyGlobalLabel');
  if(g)g.textContent=Math.round(avg)+'/100';
  if(l)l.textContent=strategyScoreLabel(avg);

  function card(a){
    var s=strategyScore(a),safe=a.ticker.replace(/[^a-zA-Z0-9]/g,'_');
    var id='role-'+safe,convId='conv-'+safe,labelId='convLabel-'+safe;
    var k=rbClassOf(a),classCurrent=strategyClassCurrent(a),classTarget=strategyClassTarget(a);
    var pat=totais().pat||1,assetCurrent=rbValue(a)/pat*100,assetTarget=Number(a.pesoAlvo||0);
    var badge=strategyBadge(s),gap=assetTarget-assetCurrent;
    var tickerEsc=String(a.ticker).replace(/'/g,"\\'");
    return '<div class="premium-strategy-card">'+
      '<div class="premium-card-top">'+
        '<div class="premium-identity"><div class="thesis-icon">'+thesisIcon(a)+'</div><div><span class="strategy-ticker">'+esc(a.ticker)+'</span><small>'+esc(a.nome)+'</small></div></div>'+
        '<div class="premium-score-wrap"><span class="strategy-badge '+badge.cls+'">'+badge.label+'</span><strong>'+s+'</strong></div>'+
      '</div>'+
      '<div class="premium-role-preview"><span>Papel estratégico</span><strong>'+esc(strategyRole(a))+'</strong></div>'+
      '<div class="conviction-slider-wrap '+convictionColor(convictionOf(a))+'">'+
        '<div class="conviction-head"><span>Convicção</span><strong id="'+labelId+'">'+convictionOf(a)+'</strong></div>'+
        '<input id="'+convId+'" type="range" min="0" max="100" step="1" value="'+convictionOf(a)+'" oninput="updateConvictionLabel(this,\''+labelId+'\')">'+
        '<div class="conviction-scale"><span>Baixa</span><span>Moderada</span><span>Máxima</span></div>'+
        '<button class="bs compact-save" onclick="saveConviction(\''+tickerEsc+'\')">Salvar convicção</button>'+
      '</div>'+
      '<div class="premium-metrics">'+
        '<div><span>Classe</span><strong>'+esc(rbClassLabel(k))+'</strong></div>'+
        '<div><span>Peso atual</span><strong>'+assetCurrent.toFixed(2)+'%</strong></div>'+
        '<div><span>Meta</span><strong>'+assetTarget.toFixed(2)+'%</strong></div>'+
        '<div><span>Gap</span><strong class="'+(gap>=0?'pos':'neg')+'">'+(gap>=0?'+':'')+gap.toFixed(2)+' p.p.</strong></div>'+
      '</div>'+
      '<details class="thesis-editor"><summary>Editar tese de investimento</summary>'+
        '<textarea id="'+id+'" rows="3">'+esc(strategyRole(a))+'</textarea>'+
        '<button class="bp" onclick="saveStrategyRole(\''+tickerEsc+'\')">Salvar tese</button>'+
      '</details>'+
    '</div>';
  }

  var sorted=list.slice().sort(function(a,b){return strategyScore(b)-strategyScore(a);});
  if(strategyView==='grid'){
    root.className='strategy-grid premium-card-grid';
    root.innerHTML=sorted.map(card).join('')||'<div class="empty">Nenhum ativo neste filtro.</div>';
    return;
  }
  root.className='strategy-groups';
  var groups=[
    {title:'ETFs',items:sorted.filter(function(a){return a.tipo==='etf';})},
    {title:'Ações',items:sorted.filter(function(a){return a.tipo==='acao';})},
    {title:'Renda Fixa',items:sorted.filter(function(a){return a.tipo==='renda';})}
  ].filter(function(group){return group.items.length;});
  root.innerHTML=groups.map(function(group){
    return '<section class="strategy-group-section"><div class="strategy-group-head"><div><span>CARTEIRA</span><h3>'+group.title+'</h3></div><b>'+group.items.length+' ativo(s)</b></div><div class="premium-card-grid">'+group.items.map(card).join('')+'</div></section>';
  }).join('')||'<div class="empty">Nenhum ativo neste filtro.</div>';
}

function recommendationScore(item){
  var a=item.asset,k=rbClassOf(a),meta=rbClassMeta(),cur=rbCurrentByClass(),pat=totais().pat||1;
  var classMeta=meta[k]||0,classCurrent=(cur[k]||0)/pat*100;
  var classDeficit=Math.max(0,classMeta-classCurrent);
  var allocationShare=(window.__rebalancePlan&&window.__rebalancePlan.aporte)?item.amount/window.__rebalancePlan.aporte*100:0;
  var base=strategyScore(a),conviction=convictionOf(a);
  var score=base*.30+conviction*.25+Math.min(100,classDeficit*8)*.30+Math.min(100,allocationShare*6)*.15;
  if(classCurrent>classMeta&&classMeta>0)score-=40;
  return Math.max(0,Math.min(100,Math.round(score)));
}
function recommendationReason(item){
  var a=item.asset,k=rbClassOf(a),meta=rbClassMeta(),cur=rbCurrentByClass(),pat=totais().pat||1;
  var classCurrent=(cur[k]||0)/pat*100,classMeta=meta[k]||0;
  var reasons=[];
  if(classCurrent<classMeta)reasons.push('classe '+(classMeta-classCurrent).toFixed(1)+' p.p. abaixo da meta');
  if(Number(a.pesoAlvo||0)>0){
    var current=rbValue(a)/pat*100,gap=Number(a.pesoAlvo)-current;
    if(gap>0)reasons.push('ativo '+gap.toFixed(2)+' p.p. abaixo do alvo');
  }
  reasons.push(strategyRole(a));
  reasons.push('convicção '+convictionOf(a)+'/100');
  return reasons.join(' · ');
}


// ── FAMILY OFFICE INTELLIGENCE · ALPHA 9 ─────────────
function inferredCurrency(a){
  if(a.currency)return String(a.currency).toUpperCase();
  return a.mercado==='US'?'USD':'BRL';
}
function normalizedSector(a){
  var s=(a.setor||'Outros').trim();
  if(!s)return 'Outros';
  var map={
    'Tecnologia':'Tecnologia',
    'Semicondutores':'Tecnologia',
    'Infraestrutura Energia':'Infraestrutura',
    'Infraestrutura elétrica':'Infraestrutura',
    'Petróleo e Gás':'Energia',
    'Energia':'Energia',
    'Defesa':'Defesa',
    'Agro/Máquinas':'Agro',
    'Fertilizantes':'Agro',
    'Pagamentos':'Financeiro',
    'Holding/Qualidade':'Financeiro',
    'Consumo Defensivo':'Consumo',
    'Luxo/Consumo Premium':'Consumo',
    'E-commerce/Fintech':'Consumo',
    'Cobre/Mineração':'Materiais',
    'Índice EUA':'Diversificado',
    'Dividendos/Qualidade':'Diversificado',
    'Índia':'Internacional',
    'Liquidez / Caixa':'Caixa'
  };
  return map[s]||s;
}
function aggregateExposure(keyFn){
  var out={},pat=totais().pat||1;
  carteira.forEach(function(a){
    var k=keyFn(a),v=rbValue(a);
    out[k]=(out[k]||0)+v;
  });
  return Object.keys(out).map(function(k){return {name:k,value:out[k],pct:out[k]/pat*100};}).sort(function(a,b){return b.value-a.value;});
}
function fiBar(item,maxPct){
  var w=maxPct?item.pct/maxPct*100:0;
  return '<div class="fi-bar-row"><div><span>'+esc(item.name)+'</span><strong>'+item.pct.toFixed(1)+'%</strong></div><div class="fi-bar-track"><i style="width:'+Math.min(100,w)+'%"></i></div></div>';
}
function qualityIndex(){
  var pat=totais().pat||1;
  var positions=carteira.filter(function(a){return a.tipo!=='caixa';}).map(function(a){return rbValue(a)/pat*100;});
  var maxPos=positions.length?Math.max.apply(null,positions):0;
  var concentration=Math.max(0,100-Math.max(0,maxPos-12)*4);
  var conviction=carteira.length?carteira.filter(function(a){return a.tipo!=='caixa';}).reduce(function(s,a){return s+convictionOf(a);},0)/Math.max(1,carteira.filter(function(a){return a.tipo!=='caixa';}).length):0;
  var strategy=document.getElementById('strategyGlobalScore');
  var strategic=0;
  var nonCash=carteira.filter(function(a){return a.tipo!=='caixa';});
  if(nonCash.length)strategic=nonCash.reduce(function(s,a){return s+strategyScore(a);},0)/nonCash.length;
  var sectors=aggregateExposure(normalizedSector).length;
  var diversification=Math.min(100,sectors*10);
  return Math.round(strategic*.35+conviction*.25+concentration*.20+diversification*.20);
}
function buildFamilyIntelligence(){
  var sectors=aggregateExposure(normalizedSector);
  var currencies=aggregateExposure(inferredCurrency);
  var nonCash=carteira.filter(function(a){return a.tipo!=='caixa';});
  var convAvg=nonCash.length?nonCash.reduce(function(s,a){return s+convictionOf(a);},0)/nonCash.length:0;
  var pat=totais().pat||1;
  var ranked=nonCash.map(function(a){return {asset:a,conv:convictionOf(a),weight:rbValue(a)/pat*100,score:strategyScore(a)};}).sort(function(a,b){return b.conv-a.conv||b.score-a.score;});
  var max=ranked.slice().sort(function(a,b){return b.weight-a.weight;})[0];
  var q=qualityIndex();
  function txt(id,v){var el=document.getElementById(id);if(el)el.textContent=v;}
  txt('fiQualityScore',q+'/100');
  var fiSemantic=northScoreSemantic(q);txt('fiQualityLabel',fiSemantic.label);
  var gauge=document.getElementById('fiGauge');if(gauge)gauge.style.setProperty('--gauge',q);
  txt('fiConvictionAvg',Math.round(convAvg)+'/100');
  txt('fiMaxPosition',max?max.weight.toFixed(1)+'%':'—');
  txt('fiMaxTicker',max?max.asset.ticker+' · maior posição':'maior posição');
  txt('fiSectorCount',String(sectors.length));
  txt('fiCurrencyCount',String(currencies.length));
  var recRoot=document.getElementById('fiRecommendations');
  if(recRoot){
    var recs=[];
    var exteriorPct=currencies.filter(function(x){return x.name!=='BRL';}).reduce(function(s,x){return s+x.pct;},0);
    if(max&&max.weight>20)recs.push('Reduzir a concentração em '+max.asset.ticker+'; hoje representa '+max.weight.toFixed(1)+'% da carteira.');
    if(exteriorPct<MUS)recs.push('Elevar a exposição internacional em '+(MUS-exteriorPct).toFixed(1)+' p.p. para aproximar a carteira da política.');
    if(convAvg<80)recs.push('Revisar as teses dos ativos com convicção abaixo de 80.');
    if(sectors.length<8)recs.push('Ampliar a diversificação setorial; apenas '+sectors.length+' setores estão identificados.');
    if(MCXUSD>0 && !cashUSDAsset())recs.push('Constituir Caixa USD para cumprir a meta de liquidez internacional.');
    if(!recs.length)recs.push('A carteira está bem estruturada. Priorize aportes apenas nos maiores déficits.');
    recRoot.innerHTML=recs.slice(0,4).map(function(r,i){return '<div class="fi-rec-item"><span>'+(i+1)+'</span><p>'+esc(r)+'</p></div>';}).join('');
  }
  var health=document.getElementById('fiHealthChecks');
  if(health){
    var diversification=Math.min(100,sectors.length*10);
    var conviction=Math.round(convAvg);
    var concentrationScore=Math.max(0,100-Math.max(0,(max?max.weight:0)-12)*4);
    var currencyProtection=currencies.length>=2?Math.min(100,65+currencies.length*10):45;
    var liquidityScore=(cashUSDAsset()?Math.min(100,60+MCXUSD*5):60);
    var checks=[
      {label:'Qualidade',score:q},
      {label:'Diversificação',score:diversification},
      {label:'Convicção',score:conviction},
      {label:'Concentração',score:Math.round(concentrationScore)},
      {label:'Liquidez',score:Math.round(liquidityScore)},
      {label:'Proteção cambial',score:Math.round(currencyProtection)}
    ];
    health.innerHTML=checks.map(function(x){
      var badge=strategyBadge(x.score);
      return '<div class="health-card"><div><span>'+x.label+'</span><strong>'+x.score+'</strong></div><div class="health-ring" style="--score:'+x.score+'"><i></i></div><small class="'+badge.cls+'">'+badge.label+'</small></div>';
    }).join('');
  }
  var sRoot=document.getElementById('fiSectors'),cRoot=document.getElementById('fiCurrencies'),rRoot=document.getElementById('fiConvictionRanking');
  if(sRoot){
    var sMax=sectors.length?sectors[0].pct:0;
    sRoot.innerHTML=sectors.map(function(x){return fiBar(x,sMax);}).join('');
  }
  if(cRoot){
    var cMax=currencies.length?currencies[0].pct:0;
    cRoot.innerHTML=currencies.map(function(x){return fiBar(x,cMax);}).join('');
  }
  if(rRoot){
    rRoot.innerHTML=ranked.map(function(x,i){
      return '<div class="fi-rank-row"><span class="rank">'+(i+1)+'</span><div><strong>'+esc(x.asset.ticker)+'</strong><small>'+esc(strategyRole(x.asset))+'</small></div><div class="fi-rank-metrics"><b>'+x.conv+'/100</b><small>'+x.weight.toFixed(2)+'% da carteira</small></div></div>';
    }).join('');
  }
}

// ── REBALANCEAMENTO MULTINÍVEL · ALPHA 6 ──────────────
function rbValue(a){return (a.qtd||0)*pBRL(a);}
function rbClassOf(a){
  if(a.mercado==='BR'){
    if(a.tipo==='renda')return 'BR_RENDA';
    if(a.tipo==='caixa')return 'BR_CAIXA';
    return 'BR_ACAO';
  }
  if(a.tipo==='etf')return 'US_ETF';
  if(a.tipo==='caixa')return 'US_CAIXA';
  return 'US_ACAO';
}
function rbClassLabel(k){
  return {BR_RENDA:'Renda fixa Brasil',BR_ACAO:'Ações / FIIs Brasil',BR_CAIXA:'Caixa BRL',US_ETF:'ETFs EUA',US_ACAO:'Ações EUA',US_CAIXA:'Caixa USD'}[k]||k;
}
function rbClassMeta(){
  return {BR_RENDA:MBR*MRF/100,BR_ACAO:MBR*MABR/100,BR_CAIXA:MBR*MCAIXA/100,US_ETF:MUS*METF/100,US_ACAO:MUS*MACAO/100,US_CAIXA:MUS*MCXUSD/100};
}
function rbScopeClasses(scope){
  var all=['BR_RENDA','BR_ACAO','BR_CAIXA','US_ETF','US_ACAO','US_CAIXA'];
  if(scope==='FULL')return all;
  if(scope==='BR')return all.filter(function(k){return k.indexOf('BR_')===0;});
  if(scope==='US')return all.filter(function(k){return k.indexOf('US_')===0;});
  return all.indexOf(scope)>=0?[scope]:all;
}
function rbCurrentByClass(){
  var out={BR_RENDA:0,BR_ACAO:0,BR_CAIXA:0,US_ETF:0,US_ACAO:0,US_CAIXA:0};
  carteira.forEach(function(a){var k=rbClassOf(a);out[k]=(out[k]||0)+rbValue(a);});
  return out;
}
function rbAssetsByClass(k){
  return carteira.filter(function(a){
    if(rbClassOf(a)!==k)return false;
    if(a.tipo==='caixa'||a.tipo==='renda')return true;
    return Number(a.pesoAlvo||0)>0;
  });
}
function rbNormalizeTargets(assets){
  var total=assets.reduce(function(s,a){return s+Number(a.pesoAlvo||0);},0);
  if(total<=0)return assets.map(function(a){return {asset:a,target:1/assets.length};});
  return assets.map(function(a){return {asset:a,target:Number(a.pesoAlvo||0)/total};});
}
function rbAllocateWithinClass(k,amount){
  var assets=rbAssetsByClass(k);
  if(amount<=0)return {items:[],pending:0};
  if(!assets.length)return {items:[],pending:amount};
  if(k==='US_CAIXA'||k==='BR_CAIXA'){
    var a=assets[0];
    return {items:[{asset:a,amount:amount,qty:a.mercado==='US'?amount/usdBrl:amount,reason:'Reserva estratégica de caixa'}],pending:0};
  }
  var targets=rbNormalizeTargets(assets),currentTotal=assets.reduce(function(s,a){return s+rbValue(a);},0),finalTotal=currentTotal+amount;
  var deficits=targets.map(function(x){
    return {asset:x.asset,deficit:Math.max(0,finalTotal*x.target-rbValue(x.asset)),target:x.target};
  });
  var sum=deficits.reduce(function(s,x){return s+x.deficit;},0);
  if(sum<=0){
    deficits=targets.map(function(x){return {asset:x.asset,deficit:x.target,target:x.target};});
    sum=1;
  }
  return {items:deficits.filter(function(x){return x.deficit>0;}).map(function(x){
    var alloc=amount*x.deficit/sum,price=pBRL(x.asset);
    return {asset:x.asset,amount:alloc,qty:price?alloc/price:0,reason:'Abaixo da meta dentro de '+rbClassLabel(k)};
  }),pending:0};
}
function rbAdherence(classes,current,meta,total){
  if(!total)return 0;
  var score=0,weight=0;
  classes.forEach(function(k){
    var m=meta[k]||0,actual=(current[k]||0)/total*100;
    if(m<=0&&actual<=0)return;
    var local=m>0?Math.max(0,1-Math.abs(actual-m)/m):(actual===0?1:0);
    score+=local*(m||1);weight+=(m||1);
  });
  return weight?score/weight*100:100;
}
function buildRebalance(){
  var tbody=document.getElementById('tbReb');if(!tbody)return;
  var aporte=Math.max(num('rbAporte'),0),scope=document.getElementById('rbEscopo').value||'FULL';
  var classes=rbScopeClasses(scope),meta=rbClassMeta(),current=rbCurrentByClass(),pat=totais().pat;
  var deficits=classes.map(function(k){
    var target=(pat+aporte)*(meta[k]||0)/100;
    return {key:k,target:meta[k]||0,current:current[k]||0,deficit:Math.max(0,target-(current[k]||0))};
  });
  var totalDef=deficits.reduce(function(s,x){return s+x.deficit;},0),classAlloc={};
  classes.forEach(function(k){classAlloc[k]=0;});
  if(aporte>0){
    if(totalDef>0){
      if(aporte<=totalDef){
        deficits.forEach(function(x){classAlloc[x.key]=aporte*x.deficit/totalDef;});
      }else{
        deficits.forEach(function(x){classAlloc[x.key]=x.deficit;});
        var extra=aporte-totalDef;
        var eligible=classes.filter(function(k){return rbAssetsByClass(k).length>0;});
        var metaSum=eligible.reduce(function(s,k){return s+(meta[k]||0);},0)||eligible.length||1;
        eligible.forEach(function(k){classAlloc[k]+=extra*((meta[k]||1)/metaSum);});
      }
    }else{
      var eligible=classes.filter(function(k){return rbAssetsByClass(k).length>0;});
      var metaSum=eligible.reduce(function(s,k){return s+(meta[k]||0);},0)||eligible.length||1;
      eligible.forEach(function(k){classAlloc[k]=aporte*((meta[k]||1)/metaSum);});
    }
  }

  var items=[],pending=[];
  classes.forEach(function(k){
    var r=rbAllocateWithinClass(k,classAlloc[k]||0);
    items=items.concat(r.items);
    if(r.pending>0)pending.push({key:k,amount:r.pending});
  });

  var allocated=items.reduce(function(s,x){return s+x.amount;},0);
  var pendingTotal=pending.reduce(function(s,x){return s+x.amount;},0);
  var sobra=Math.max(0,aporte-allocated-pendingTotal);
  var projected={};Object.keys(current).forEach(function(k){projected[k]=current[k];});
  classes.forEach(function(k){projected[k]=(projected[k]||0)+(classAlloc[k]||0);});
  var before=rbAdherence(classes,current,meta,pat),after=rbAdherence(classes,projected,meta,pat+aporte);

  document.getElementById('rbTotal').textContent=fR(aporte);
  document.getElementById('rbQtd').textContent=String(items.length);
    var eligiblePriority=items.filter(function(x){
    var k=rbClassOf(x.asset),m=rbClassMeta()[k]||0,c=totais().pat?(rbCurrentByClass()[k]||0)/totais().pat*100:0;
    return m<=0?false:c<m;
  }).sort(function(a,b){return recommendationScore(b)-recommendationScore(a);});
  var topPriority=eligiblePriority[0]||items.slice().sort(function(a,b){return recommendationScore(b)-recommendationScore(a);})[0];
  document.getElementById('rbPrior').textContent=topPriority?topPriority.asset.ticker:'—';
  document.getElementById('rbAdAntes').textContent=before.toFixed(1)+'%';
  document.getElementById('rbAdDepois').textContent=after.toFixed(1)+'%';
  document.getElementById('rbMelhora').textContent=(after-before>=0?'+':'')+(after-before).toFixed(1)+' p.p.';
  document.getElementById('rbSobra').textContent=fR(sobra);
  var pendK=document.getElementById('rbPendente');if(pendK)pendK.textContent=fR(pendingTotal);
  document.getElementById('rbBarAntes').style.width=Math.min(before,100)+'%';
  document.getElementById('rbBarDepois').style.width=Math.min(after,100)+'%';

  var rankedRecommendations=eligiblePriority.slice().sort(function(a,b){return recommendationScore(b)-recommendationScore(a);});
  var top3=document.getElementById('rbTop3');
  if(top3){
    var medals=['🥇','🥈','🥉'];
    top3.innerHTML=rankedRecommendations.slice(0,3).map(function(x,i){
      var sc=recommendationScore(x),sv=scoreVisual(sc);
      return '<div class="top3-card"><span class="top3-medal">'+medals[i]+'</span><div><strong>'+esc(x.asset.ticker)+'</strong><small>'+esc(x.asset.nome)+'</small></div><div class="top3-score '+sv.cls+'"><b>'+sv.label+'</b><span>'+sc+'/100</span></div><em>'+fR(x.amount)+'</em></div>';
    }).join('');
  }
  var topBox=document.getElementById('rbTopRecommendation');
  if(topBox){
    if(topPriority){
      var rs=recommendationScore(topPriority),rating=purchaseRating(rs),visual=scoreVisual(rs);
      topBox.innerHTML='<div class="top-rec-badge">COMPRAR AGORA</div>'+
        '<div class="top-rec-main"><div><span>'+esc(topPriority.asset.ticker)+'</span><small>'+esc(topPriority.asset.nome)+'</small></div><div class="score-seal '+visual.cls+'"><b>'+visual.label+'</b><span>'+rs+'/100</span></div></div>'+
        '<div class="purchase-rating"><b>'+rating.stars+'</b><span>'+rating.label+'</span></div>'+
        '<p>'+esc(recommendationReason(topPriority))+'</p>'+
        '<div class="top-rec-values"><span>Aporte sugerido <b>'+fR(topPriority.amount)+'</b></span><span>Quantidade estimada <b>'+topPriority.qty.toFixed(6)+'</b></span></div>';
    }else topBox.innerHTML='';
  }

  var ex=document.getElementById('rbExecutive');
  if(ex){
    var brAllocated=classes.filter(function(k){return k.indexOf('BR_')===0;}).reduce(function(s,k){return s+(classAlloc[k]||0);},0);
    var usAllocated=classes.filter(function(k){return k.indexOf('US_')===0;}).reduce(function(s,k){return s+(classAlloc[k]||0);},0);
    ex.innerHTML=
      '<div><span>Aporte total</span><strong>'+fR(aporte)+'</strong></div>'+
      '<div><span>Brasil</span><strong>'+fR(brAllocated)+'</strong><small>'+((aporte?brAllocated/aporte*100:0).toFixed(1))+'%</small></div>'+
      '<div><span>EUA</span><strong>'+fR(usAllocated)+'</strong><small>'+((aporte?usAllocated/aporte*100:0).toFixed(1))+'%</small></div>'+
      '<div><span>Pendente</span><strong>'+fR(pendingTotal)+'</strong><small>sem ativos elegíveis</small></div>'+
      '<div><span>Saldo livre</span><strong>'+fR(sobra)+'</strong><small>não destinado</small></div>';
  }

  var h=document.getElementById('rbHierarchy');
  if(h){
    var br=classes.filter(function(k){return k.indexOf('BR_')===0;}).reduce(function(s,k){return s+(classAlloc[k]||0);},0);
    var us=classes.filter(function(k){return k.indexOf('US_')===0;}).reduce(function(s,k){return s+(classAlloc[k]||0);},0);
    h.innerHTML='<div class="rb-market-card"><span>Brasil</span><strong>'+fR(br)+'</strong><small>'+((aporte?br/aporte*100:0).toFixed(1))+'% do aporte</small></div>'+
      '<div class="rb-market-card"><span>EUA</span><strong>'+fR(us)+'</strong><small>'+((aporte?us/aporte*100:0).toFixed(1))+'% do aporte</small></div>'+
      classes.map(function(k){
        var actual=pat?(current[k]||0)/pat*100:0;
        return '<div class="rb-class-card"><span>'+rbClassLabel(k)+'</span><strong>'+fR(classAlloc[k]||0)+'</strong><small>Atual '+actual.toFixed(1)+'% · Meta '+(meta[k]||0).toFixed(1)+'%</small></div>';
      }).join('');
  }
  var pe=document.getElementById('rbPending');
  if(pe)pe.innerHTML=pending.length?'<div class="rb-pending-box"><strong>Alocações pendentes</strong><p>Classes abaixo da meta, mas sem ativos elegíveis cadastrados:</p>'+pending.map(function(x){return '<div><span>'+rbClassLabel(x.key)+'</span><b>'+fR(x.amount)+'</b></div>';}).join('')+'</div>':'';

  var sorted=items.slice().sort(function(a,b){return b.amount-a.amount;});
  var resumo=document.getElementById('rbResumo');
  if(!aporte)resumo.innerHTML='Informe um aporte para gerar o plano de compra.';
  else if(!sorted.length)resumo.innerHTML='<strong>Nenhuma compra sugerida.</strong>';
  else{
    var brItems=sorted.filter(function(x){return x.asset.mercado==='BR';});
    var usItems=sorted.filter(function(x){return x.asset.mercado==='US';});
    function group(title,arr){
      if(!arr.length)return '';
      return '<div class="rb-group-title">'+title+'</div>'+
        arr.map(function(x,i){return '<div class="buy-line"><span><span class="rank">'+(i+1)+'</span>'+esc(x.asset.ticker)+' · '+esc(x.asset.nome)+' <em class="mini-score">Score '+recommendationScore(x)+'</em></span><strong>'+fR(x.amount)+' · '+x.qty.toFixed(6)+' cota(s)</strong></div>';}).join('');
    }
    resumo.innerHTML='<strong>Roteiro de compras — '+sorted.length+' ativo(s)</strong>'+
      group('BRASIL',brItems)+group('ESTADOS UNIDOS',usItems)+
      (pending.length?'<div class="rb-group-title pending-title">PENDÊNCIAS</div>'+pending.map(function(x){return '<div class="buy-line pending-line"><span>'+rbClassLabel(x.key)+'</span><strong>'+fR(x.amount)+'</strong></div>';}).join(''):'');
  }

  tbody.innerHTML=sorted.length?sorted.map(function(x){
    var a=x.asset,k=rbClassOf(a),v=rbValue(a),classCurrent=current[k]||0,classMeta=meta[k]||0,actual=pat?classCurrent/pat*100:0;
    var sc=recommendationScore(x),prio=sc>=90?'Muito alta':sc>=80?'Alta':sc>=65?'Média':'Baixa';
    return '<tr><td><span class="priority-pill '+(sc>=90?'priority-high':sc>=80?'priority-med':'priority-low')+'">'+prio+'</span></td><td><span class="score-pill">'+sc+'</span></td><td><span class="tk">'+esc(a.ticker)+'</span><div style="font-size:10px;color:var(--text2)">'+esc(a.nome)+'</div><small class="row-reason">'+esc(recommendationReason(x))+'</small></td><td>'+esc(rbClassLabel(k))+'</td><td>'+fR(v)+'</td><td>'+actual.toFixed(2)+'%</td><td>'+classMeta.toFixed(2)+'%</td><td class="'+fC(actual-classMeta)+'">'+fP(actual-classMeta)+'</td><td class="reb-buy">'+fR(x.amount)+'</td><td>'+x.qty.toFixed(6)+'</td><td><span class="reb-buy">COMPRAR</span></td></tr>';
  }).join(''):'<tr><td colspan="10" class="empty">Nenhuma compra sugerida para o escopo selecionado.</td></tr>';

  window.__rebalancePlan={aporte:aporte,items:sorted,pending:pending,sobra:sobra,allocated:allocated};
}
function copyRebalance(){
  var p=window.__rebalancePlan;
  if(!p||!p.aporte){toast('Informe um aporte antes de copiar');return;}
  var lines=['PLANO DE APORTE — V7 ALPHA 6','Aporte: '+fR(p.aporte),''];
  p.items.forEach(function(x,i){lines.push((i+1)+'. '+x.asset.ticker+' — '+fR(x.amount)+' — '+x.qty.toFixed(6)+' cota(s)');});
  if(p.pending&&p.pending.length){
    lines.push('');lines.push('ALOCAÇÕES PENDENTES');
    p.pending.forEach(function(x){lines.push(rbClassLabel(x.key)+' — '+fR(x.amount));});
  }
  var text=lines.join('\n');
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(text).then(function(){toast('Plano copiado');});
  else{var ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();toast('Plano copiado');}
}

function openSettings(){
  toast('Configurações avançadas entrarão na próxima etapa');
}


function northOpenPage(id){
  var tabs=document.querySelectorAll(".tab");
  var target=null;
  tabs.forEach(function(tab){
    var attr=tab.getAttribute("onclick")||"";
    if(attr.indexOf("'"+id+"'")>=0)target=tab;
  });
  showPg(id,target);
}

var NORTH_DEFAULT_GOALS=[
{id:"usd250",name:"Patrimônio internacional",target:250000,currency:"USD",type:"international"},
{id:"brl1m",name:"Patrimônio total",target:1000000,currency:"BRL",type:"patrimony"},
{id:"income15k",name:"Renda passiva mensal",target:15000,currency:"BRL",type:"income"}];
var northGoals=[];
function northLoadFoundation(){try{var raw=localStorage.getItem("north-capital-foundation");var d=raw?JSON.parse(raw):{};northGoals=Array.isArray(d.goals)&&d.goals.length?d.goals:JSON.parse(JSON.stringify(NORTH_DEFAULT_GOALS));if(d.theme==="light"||d.theme==="dark"){document.body.classList.toggle("light",d.theme==="light");}}catch(e){northGoals=JSON.parse(JSON.stringify(NORTH_DEFAULT_GOALS));}}
function northSaveFoundation(){localStorage.setItem("north-capital-foundation",JSON.stringify({goals:northGoals,theme:document.body.classList.contains("light")?"light":"dark"}));}
function northMoney(v,c){return new Intl.NumberFormat(c==="USD"?"en-US":"pt-BR",{style:"currency",currency:c}).format(v||0);}
function northGoalCurrent(g){var t=totais();if(g.type==="international")return carteira.filter(function(a){return a.mercado==="US";}).reduce(function(s,a){return s+rbValue(a);},0)/Math.max(usdBrl,.0001);if(g.type==="income"){var annual=dividendos.reduce(function(s,d){var val=Number(d.valor||0)-Number(d.imposto||0);return s+(d.moeda==="USD"?val*usdBrl:val);},0);return annual/12;}return t.pat||0;}
function buildNorthGoals(){var root=document.getElementById("northGoalsGrid");if(!root)return;root.innerHTML=northGoals.map(function(g){var c=northGoalCurrent(g),p=g.target?Math.min(100,c/g.target*100):0;return `<div class="north-goal-card"><div class="north-goal-head"><div><span>${esc(g.type==="international"?"Internacional":g.type==="income"?"Renda":"Patrimônio")}</span><h3>${esc(g.name)}</h3></div><b>${p.toFixed(1)}%</b></div><div class="north-goal-values"><strong>${northMoney(c,g.currency)}</strong><small>de ${northMoney(g.target,g.currency)}</small></div><div class="north-goal-progress"><i style="width:${p}%"></i></div><div class="north-goal-foot"><span>Faltam ${northMoney(Math.max(0,g.target-c),g.currency)}</span><button onclick="editGoal('${g.id}')">Editar</button></div></div>`;}).join("");}
function addGoal(){var n=prompt("Nome do objetivo:");if(!n)return;var c=(prompt("Moeda: BRL ou USD","BRL")||"BRL").toUpperCase();if(c!=="BRL"&&c!=="USD")c="BRL";var t=parseFloat((prompt("Valor alvo:","100000")||"0").replace(",","."));if(!isFinite(t)||t<=0){toast("Meta inválida");return;}northGoals.push({id:"g"+Date.now(),name:n,target:t,currency:c,type:"patrimony"});northSaveFoundation();buildNorthGoals();toast("Objetivo criado");}
function editGoal(id){var g=northGoals.find(function(x){return x.id===id;});if(!g)return;var t=parseFloat((prompt("Novo valor alvo:",String(g.target))||String(g.target)).replace(",","."));if(isFinite(t)&&t>0)g.target=t;northSaveFoundation();buildNorthGoals();toast("Objetivo atualizado");}
function northTimeGreeting(){var h=new Date().getHours();return h<12?"Bom dia.":h<18?"Boa tarde.":"Boa noite.";}
function buildNorthMissionControl(){var e=document.getElementById("northGreeting");if(e)e.textContent=northTimeGreeting();var s=qualityIndex(),l=northScoreSemantic(s).label;var fs=document.getElementById("northFamilyScore"),fl=document.getElementById("northFamilyLabel");if(fs)fs.textContent=s+"/100";if(fl)fl.textContent=l;var cur=rbCurrentByClass(),meta=rbClassMeta(),pat=totais().pat||1;var gaps=Object.keys(meta).map(function(k){return{key:k,gap:(meta[k]||0)-((cur[k]||0)/pat*100)};}).sort(function(a,b){return b.gap-a.gap;});var top=gaps[0],p=document.getElementById("northPriority"),r=document.getElementById("northPriorityReason");if(p)p.textContent=top&&top.gap>0?rbClassLabel(top.key):"Carteira alinhada";if(r)r.textContent=top&&top.gap>0?top.gap.toFixed(1)+" p.p. abaixo da meta":"sem déficit relevante";var i=document.getElementById("northMissionInsight");if(i){var sem=northScoreSemantic(s);i.textContent=s>=80?"Sua carteira está bem estruturada. Direcione o próximo aporte aos maiores déficits.":s>=70?"A carteira está consistente, mas alguns desvios ainda merecem acompanhamento.":s>=60?"O North Score indica necessidade de atenção. Priorize concentração, convicção e aderência à política.":"A carteira exige revisão estrutural antes de ampliar posições.";}}


// ── NORTH CAPITAL BUILD 13 · DECISION INTELLIGENCE ─────
function northGradeFromScore(score){
  if(score>=90)return {grade:"A+",label:"Excelente"};
  if(score>=80)return {grade:"A",label:"Muito bom"};
  if(score>=70)return {grade:"B+",label:"Bom"};
  if(score>=60)return {grade:"B",label:"Moderado"};
  if(score>=50)return {grade:"C",label:"Atenção"};
  return {grade:"D",label:"Revisar"};
}
function northScorePillars(){
  var t=totais(),pat=t.pat||1;
  var positions=carteira.filter(function(a){return a.tipo!=="caixa"&&rbValue(a)>0;});
  var sectors={};
  positions.forEach(function(a){var s=a.setor||"Outros";sectors[s]=(sectors[s]||0)+rbValue(a);});
  var diversification=Math.min(100,Object.keys(sectors).length*9);
  var conviction=positions.length?Math.round(positions.reduce(function(s,a){return s+convictionOf(a);},0)/positions.length):0;
  var maxWeight=positions.length?Math.max.apply(null,positions.map(function(a){return rbValue(a)/pat*100;})):0;
  var concentration=Math.max(0,Math.round(100-Math.max(0,maxWeight-12)*4));
  var cashValue=carteira.filter(function(a){return a.tipo==="caixa";}).reduce(function(s,a){return s+rbValue(a);},0);
  var liquidity=Math.min(100,Math.round(55+(cashValue/pat*100)*6));
  var usWeight=carteira.filter(function(a){return a.mercado==="US";}).reduce(function(s,a){return s+rbValue(a);},0)/pat*100;
  var fxProtection=Math.min(100,Math.round(45+usWeight*1.8));
  var quality=Math.round((diversification+conviction+concentration+liquidity+fxProtection)/5);
  return {
    quality:quality,
    diversification:diversification,
    conviction:conviction,
    concentration:concentration,
    liquidity:liquidity,
    fxProtection:fxProtection
  };
}
function northIntelligentPriorities(limit){
  var pat=totais().pat||1;
  return carteira.filter(function(a){return a.tipo!=="caixa"&&Number(a.pesoAlvo||0)>0;})
    .map(function(a){
      var current=rbValue(a)/pat*100,target=Number(a.pesoAlvo||0),gap=target-current;
      var score=Math.max(0,Math.min(100,Math.round(50+gap*5+(convictionOf(a)-75)*.25)));
      var impact=Math.max(0,Math.min(9.9,gap*.55+(convictionOf(a)-70)*.02));
      return {asset:a,current:current,target:target,gap:gap,score:score,impact:impact};
    })
    .filter(function(x){return x.gap>0;})
    .sort(function(a,b){return b.score-a.score;})
    .slice(0,limit||5);
}
function northBuildAiInsights(){
  var pillars=northScorePillars(),priorities=northIntelligentPriorities(5);
  var insights=[];
  var pat=totais().pat||1;
  var positions=carteira.filter(function(a){return a.tipo!=="caixa"&&rbValue(a)>0;});
  var max=positions.slice().sort(function(a,b){return rbValue(b)-rbValue(a);})[0];
  if(max){
    var w=rbValue(max)/pat*100;
    if(w>20)insights.push({type:"warning",title:"Concentração elevada",text:max.ticker+" representa "+w.toFixed(1)+"% do patrimônio consolidado."});
  }
  var us=carteira.filter(function(a){return a.mercado==="US";}).reduce(function(s,a){return s+rbValue(a);},0)/pat*100;
  if(us<MUS)insights.push({type:"opportunity",title:"Internacionalização abaixo da meta",text:"A exposição internacional está "+(MUS-us).toFixed(1)+" p.p. abaixo da política."});
  if(pillars.conviction<80)insights.push({type:"review",title:"Convicção moderada",text:"Revise as teses dos ativos com convicção inferior a 80."});
  if(priorities[0])insights.push({type:"action",title:"Próximo aporte",text:"Priorize "+priorities[0].asset.ticker+"; é o ativo com melhor combinação entre déficit e convicção."});
  var goals=northGoals||[];
  var international=goals.find(function(g){return g.type==="international";});
  if(international){
    var current=northGoalCurrent(international),pct=international.target?current/international.target*100:0;
    insights.push({type:"goal",title:"Meta internacional",text:"Você concluiu "+pct.toFixed(1)+"% da meta de "+northMoney(international.target,international.currency)+"."});
  }
  if(!insights.length)insights.push({type:"positive",title:"Carteira equilibrada",text:"Nenhuma ação urgente foi identificada neste momento."});
  return {pillars:pillars,priorities:priorities,insights:insights};
}
function buildNorthAI(){
  var data=northBuildAiInsights();
  var greet=document.getElementById("northAiGreeting");
  if(greet)greet.textContent=northTimeGreeting();
  var summary=document.getElementById("northAiSummary");
  if(summary)summary.textContent="Hoje identifiquei "+data.insights.length+" pontos relevantes para sua estratégia patrimonial.";
  var count=document.getElementById("northAiCount");if(count)count.textContent=data.insights.length;
  var root=document.getElementById("northAiInsights");
  if(root)root.innerHTML=data.insights.map(function(x,i){
    return `<article class="north-ai-insight ${x.type}"><span>${i+1}</span><div><strong>${esc(x.title)}</strong><p>${esc(x.text)}</p></div></article>`;
  }).join("");
  var pr=document.getElementById("northAiPriorities");
  if(pr)pr.innerHTML=data.priorities.map(function(x,i){
    var level=x.score>=80?"Muito alta":x.score>=65?"Alta":"Média";
    return `<div class="north-priority-row"><b>#${i+1}</b><div><strong>${esc(x.asset.ticker)}</strong><small>${esc(x.asset.nome)}</small></div><span>${x.gap.toFixed(2)} p.p. abaixo</span><em>+${x.impact.toFixed(1)} pts</em><i>${level}</i></div>`;
  }).join("")||'<div class="empty">Nenhum déficit relevante.</div>';
}
function buildNorthHeatmap(){
  var root=document.getElementById("northHeatmap");if(!root)return;
  var pat=totais().pat||1;
  var items=carteira.filter(function(a){return a.tipo!=="caixa"&&rbValue(a)>0;})
    .map(function(a){
      var weight=rbValue(a)/pat*100,score=strategyScore(a);
      return {a:a,weight:weight,score:score};
    }).sort(function(a,b){return b.weight-a.weight;});
  root.innerHTML=items.map(function(x){
    var cls=x.score>=80?"hm-good":x.score>=65?"hm-mid":"hm-low";
    var size=Math.max(86,Math.min(220,88+x.weight*5));
    return `<div class="north-heat-tile ${cls}" style="flex-basis:${size}px"><strong>${esc(x.a.ticker)}</strong><span>${x.weight.toFixed(1)}%</span><small>Score ${x.score}</small></div>`;
  }).join("");
}
function buildNorthTimeline(){
  var root=document.getElementById("northTimeline");if(!root)return;
  var events=[];
  var movs=(movimentacoes||[]).slice().sort(function(a,b){return String(b.data||"").localeCompare(String(a.data||""));}).slice(0,4);
  movs.forEach(function(m){events.push({date:m.data||"—",title:(m.tipo||"Movimentação")+" · "+(m.ticker||""),text:m.obs||"Registro da carteira"});});
  var divs=(dividendos||[]).slice().sort(function(a,b){return String(b.data||"").localeCompare(String(a.data||""));}).slice(0,3);
  divs.forEach(function(d){events.push({date:d.data||"—",title:"Dividendo · "+(d.ticker||d.ativo||""),text:northMoney((Number(d.valor||0)-Number(d.imposto||0))*(d.moeda==="USD"?usdBrl:1),"BRL")});});
  if(!events.length)events.push({date:"Hoje",title:"North Capital iniciada",text:"A jornada patrimonial começou."});
  root.innerHTML=events.slice(0,6).map(function(e){return `<div class="north-timeline-item"><i></i><div><span>${esc(e.date)}</span><strong>${esc(e.title)}</strong><p>${esc(e.text)}</p></div></div>`;}).join("");
}
function buildNorthChecklist(){
  var root=document.getElementById("northChecklist");if(!root)return;
  var pillars=northScorePillars();
  var pat=totais().pat||1;
  var us=carteira.filter(function(a){return a.mercado==="US";}).reduce(function(s,a){return s+rbValue(a);},0)/pat*100;
  var checks=[
    {name:"Política de alocação definida",ok:typeof policyValid==="function"?policyValid():true},
    {name:"Meta internacional em evolução",ok:us>=MUS*.7},
    {name:"Diversificação setorial adequada",ok:pillars.diversification>=70},
    {name:"Convicção média saudável",ok:pillars.conviction>=80},
    {name:"Concentração sob controle",ok:pillars.concentration>=65},
    {name:"Liquidez estratégica",ok:pillars.liquidity>=65}
  ];
  root.innerHTML=checks.map(function(c){return `<div class="north-check-item ${c.ok?"done":"pending"}"><span>${c.ok?"✓":"!"}</span><strong>${esc(c.name)}</strong><small>${c.ok?"Concluído":"Requer atenção"}</small></div>`;}).join("");
}
function buildNorthScore2(){
  var p=northScorePillars();
  var finalScore=Math.round((p.quality+p.diversification+p.conviction+p.concentration+p.liquidity+p.fxProtection)/6);
  var grade=northGradeFromScore(finalScore);
  var g=document.getElementById("northGrade"),gl=document.getElementById("northGradeLabel");
  if(g)g.textContent=grade.grade;if(gl)gl.textContent=grade.label+" · "+finalScore+"/100";
  var root=document.getElementById("northScorePillars");
  if(root){
    var items=[
      ["Qualidade",p.quality],["Diversificação",p.diversification],["Convicção",p.conviction],
      ["Concentração",p.concentration],["Liquidez",p.liquidity],["Proteção cambial",p.fxProtection]
    ];
    root.innerHTML=items.map(function(x){return `<div class="north-pillar"><span>${x[0]}</span><strong>${x[1]}</strong><i><b style="width:${x[1]}%"></b></i></div>`;}).join("");
  }
}
function buildNorthMissionAI(){
  var data=northBuildAiInsights(),top=data.insights[0];
  var title=document.getElementById("northMissionAiTitle"),text=document.getElementById("northMissionAiText");
  if(title)title.textContent=top?top.title:"Carteira equilibrada";
  if(text)text.textContent=top?top.text:"Nenhuma ação urgente.";
}


// ── BUILD 13.1 · SCORE SEMANTICS & ADVISOR REFINEMENT ──
function northScoreSemantic(score){
  score=Math.max(0,Math.min(100,Number(score)||0));
  if(score>=90)return {label:"Excelente",action:"manter disciplina",color:"#23866b",tone:"excellent"};
  if(score>=80)return {label:"Muito bom",action:"ajustes pontuais",color:"#53a96c",tone:"very-good"};
  if(score>=70)return {label:"Bom",action:"acompanhar desvios",color:"#d1a536",tone:"good"};
  if(score>=60)return {label:"Necessita atenção",action:"priorizar correções",color:"#d47a2c",tone:"attention"};
  return {label:"Crítico",action:"revisar estrutura",color:"#bf4b59",tone:"critical"};
}
function northAdvisorConversation(){
  var data=northBuildAiInsights();
  var score=qualityIndex();
  var semantic=northScoreSemantic(score);
  var first=data.priorities&&data.priorities[0];
  var lines=[];
  lines.push("Sua carteira está classificada como "+semantic.label.toLowerCase()+" no North Score.");
  if(first)lines.push("No próximo aporte, "+first.asset.ticker+" apresenta a melhor combinação entre déficit e convicção.");
  var warning=data.insights.find(function(x){return x.type==="warning";});
  if(warning)lines.push(warning.text);
  var opportunity=data.insights.find(function(x){return x.type==="opportunity";});
  if(opportunity)lines.push(opportunity.text);
  return lines;
}
function buildNorthGaugeSemantics(){
  var q=qualityIndex();
  var semantic=northScoreSemantic(q);
  var gauge=document.getElementById("fiGauge");
  if(gauge){
    gauge.style.setProperty("--gauge",q);
    gauge.style.setProperty("--gauge-color",semantic.color);
    gauge.setAttribute("data-tone",semantic.tone);
  }
  var label=document.getElementById("fiQualityLabel");
  var action=document.getElementById("fiQualityAction");
  if(label)label.textContent=semantic.label;
  if(action)action.textContent=semantic.action;
  var summary=document.getElementById("fiGaugeSummary");
  if(summary){
    var p=northScorePillars();
    var rows=[
      ["Diversificação",p.diversification],
      ["Convicção",p.conviction],
      ["Concentração",p.concentration],
      ["Liquidez",p.liquidity],
      ["Proteção cambial",p.fxProtection]
    ];
    summary.innerHTML=rows.map(function(x){
      var s=northScoreSemantic(x[1]);
      return `<div class="fi-gauge-summary-row"><span>${x[0]}</span><b>${x[1]}</b><i style="--row-color:${s.color};--row-width:${x[1]}%"><em></em></i></div>`;
    }).join("");
  }
}
function buildNorthConversationalAdvisor(){
  var lines=northAdvisorConversation();
  var summary=document.getElementById("northAiSummary");
  if(summary)summary.textContent=lines[0]||"Sua carteira foi analisada.";
  var root=document.getElementById("northAiInsights");
  if(root && lines.length){
    var original=root.innerHTML;
    root.innerHTML=`<article class="north-ai-conversation"><div class="north-ai-conversation-avatar">N</div><div><span>Leitura do CIO digital</span><p>${lines.map(function(x){return esc(x);}).join("<br><br>")}</p></div></article>`+original;
  }
}

// ── REFRESH ──────────────────────────────────────────
async function refresh() {
  setSt('l','Buscando cotacoes...');
  document.getElementById('btnR').disabled=true;
  await fetchAll();
  renderAll();
  var t=new Date();
  setSt('ok','Atualizado as '+t.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'})+' / USD/BRL '+usdBrl.toFixed(4));
  document.getElementById('btnR').disabled=false;
}

// ── INIT ─────────────────────────────────────────────
document.getElementById('lockPwd').focus();
setInterval(function(){ if(document.getElementById('app').style.display!=='none') refresh(); }, 5*60*1000);

document.addEventListener("DOMContentLoaded",function(){northLoadFoundation();setTimeout(function(){buildNorthMissionControl();buildNorthMissionAI();buildNorthGoals();buildNorthChecklist();},200);});

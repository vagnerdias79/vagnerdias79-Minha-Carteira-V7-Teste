*{margin:0;padding:0;box-sizing:border-box}
body{font-family:system-ui,sans-serif;min-height:100vh;transition:background .3s,color .3s}
body.dark{background:#0f1117;color:#e8eaf0}
body.light{background:#f0f2f8;color:#1a2035}
body.dark{--bg1:#161b27;--bg2:#1e2535;--bg3:#262e42;--accent:#4f8ef7;--green:#36d399;--red:#f87272;--yellow:#fbbf24;--purple:#c084fc;--text2:#8b95b0;--border:#2a3350;--shadow:rgba(0,0,0,.4)}
body.light{--bg1:#fff;--bg2:#f5f7fc;--bg3:#eaecf5;--accent:#2563eb;--green:#16a34a;--red:#dc2626;--yellow:#d97706;--purple:#9333ea;--text2:#64748b;--border:#d1d5e8;--shadow:rgba(0,0,0,.08)}
.hdr{background:var(--bg1);border-bottom:1px solid var(--border);padding:12px 20px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:9;box-shadow:0 2px 8px var(--shadow)}
.logo{font-size:15px;font-weight:600}.logo span{color:var(--accent)}
.hdr-r{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.badge{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text2);margin-right:6px}
.dot{width:7px;height:7px;border-radius:50%;background:var(--green);animation:pulse 2s infinite}
.dot.l{background:var(--yellow)}.dot.e{background:var(--red);animation:none}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.btn{background:var(--bg3);border:1px solid var(--border);color:var(--text2);font-size:12px;padding:6px 12px;border-radius:7px;cursor:pointer;font-family:inherit;transition:background .15s,color .15s}
.btn:hover{background:var(--accent);color:#fff;border-color:var(--accent)}
.btn.g{border-color:#36d39950;color:var(--green)}.btn.g:hover{background:var(--green);color:#0f1117}
.btn.o{border-color:#fbbf2450;color:var(--yellow)}.btn.o:hover{background:var(--yellow);color:#0f1117}
.btn.r{border-color:#f8727250;color:var(--red)}.btn.r:hover{background:var(--red);color:#fff}
.btn-theme{font-size:16px;padding:5px 10px;background:var(--bg3);border:1px solid var(--border);border-radius:7px;cursor:pointer}
.tabs{display:flex;background:var(--bg1);border-bottom:1px solid var(--border);padding:0 20px;overflow-x:auto}
.tab{padding:10px 16px;font-size:13px;color:var(--text2);cursor:pointer;border-bottom:2px solid transparent;white-space:nowrap}
.tab.on{color:var(--accent);border-bottom-color:var(--accent)}
.pg{display:none;padding:18px 20px;max-width:1380px;margin:0 auto}.pg.on{display:block}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px}
.grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:16px}
.card{background:var(--bg1);border:1px solid var(--border);border-radius:12px;padding:14px 16px;box-shadow:0 1px 4px var(--shadow)}
.lbl{font-size:10px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px}
.val{font-size:22px;font-weight:600;letter-spacing:-.4px}
.sub{font-size:11px;margin-top:4px;color:var(--text2)}
.val2{font-size:13px;color:var(--text2);margin-top:2px}
.pos{color:var(--green)}.neg{color:var(--red)}
.ctitle{font-size:10px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px}
.ch{height:200px;position:relative}
.tw{background:var(--bg1);border:1px solid var(--border);border-radius:12px;overflow:auto;margin-bottom:16px}
table{width:100%;border-collapse:collapse;font-size:12px}
th{background:var(--bg2);color:var(--text2);font-size:10px;text-transform:uppercase;letter-spacing:.04em;padding:9px 12px;text-align:left;white-space:nowrap}
td{padding:9px 12px;border-top:1px solid var(--border);vertical-align:middle}
tr:hover td{background:rgba(79,142,247,.04)}
.tk{background:var(--bg3);color:#7bb3ff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px}
body.light .tk{color:var(--accent)}
.tag{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600}
.ta{background:#1a2a4a;color:#7bb3ff}.te{background:#2a2a1a;color:#fbbf24}
.tf{background:#1a3a2a;color:#36d399}.tr{background:#2a1a3a;color:#c084fc}.tc{background:#1a2a3a;color:#36d399}
body.light .ta{background:#dbeafe;color:#1d4ed8}
body.light .te{background:#fef9c3;color:#854d0e}
body.light .tf{background:#dcfce7;color:#15803d}
body.light .tr{background:#f3e8ff;color:#7e22ce}
body.light .tc{background:#e0f2fe;color:#0369a1}
.bar{background:var(--bg3);border-radius:3px;height:5px;overflow:hidden;margin-top:3px}
.bf{height:100%;border-radius:3px}
.row-a{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)}
.row-a:last-child{border-bottom:none}
.dbadge{font-size:10px;padding:2px 7px;border-radius:4px;font-weight:600}
.dok{background:#1a2a3a;color:#7bb3ff}.dup{background:#1a3a2a;color:var(--green)}.ddn{background:#2a1a1a;color:var(--red)}
body.light .dok{background:#dbeafe;color:#1d4ed8}
body.light .dup{background:#dcfce7;color:#15803d}
body.light .ddn{background:#fee2e2;color:#dc2626}
.si{display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap}
.si label{font-size:13px;color:var(--text2)}
input[type=number],input[type=text],input[type=password],select{background:var(--bg2);border:1px solid var(--border);color:inherit;padding:7px 10px;border-radius:7px;font-size:13px;font-family:inherit;outline:none;transition:border-color .15s}
input:focus,select:focus{border-color:var(--accent)}
.rc{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:11px 13px;margin-bottom:8px}
.ra{font-size:15px;font-weight:600;color:var(--green)}
.rd{font-size:11px;color:var(--text2);margin-top:2px}
.mb{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:50;align-items:center;justify-content:center}
.mb.on{display:flex}
.md{background:var(--bg1);border:1px solid var(--border);border-radius:14px;padding:22px;width:500px;max-width:94vw;max-height:90vh;overflow-y:auto}
.mt{font-size:15px;font-weight:600;margin-bottom:14px}
.fr{margin-bottom:11px}
.fl{font-size:10px;color:var(--text2);text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;display:block}
.fg{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.fg3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px}
.fa{display:flex;gap:8px;margin-top:14px;justify-content:flex-end}
.bp{background:var(--accent);color:#fff;border:none;padding:7px 16px;border-radius:7px;font-size:13px;cursor:pointer;font-family:inherit}
.bp.grn{background:var(--green);color:#0f1117}
.bp.red{background:var(--red);color:#fff}
.bs{background:transparent;color:var(--text2);border:1px solid var(--border);padding:7px 14px;border-radius:7px;font-size:13px;cursor:pointer;font-family:inherit}
.ia{background:var(--bg2);border:1px dashed var(--border);border-radius:8px;padding:18px;text-align:center;font-size:12px;color:var(--text2);cursor:pointer}
.ia:hover{border-color:var(--accent)}
.toast{position:fixed;bottom:20px;right:20px;background:var(--bg2);border:1px solid #36d39940;color:var(--green);font-size:12px;padding:9px 16px;border-radius:9px;z-index:99;opacity:0;transition:opacity .3s;pointer-events:none}
.toast.on{opacity:1}
.prog{background:var(--bg3);border-radius:4px;height:6px;overflow:hidden;margin-top:4px}
.pf{height:100%;border-radius:4px}
.pl{display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px}
.ai{display:flex;align-items:center;gap:7px;font-size:13px}
.ad{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.fetch-box{background:var(--bg2);border:1px solid var(--accent);border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:12px}
.fetch-spin{display:inline-block;width:14px;height:14px;border:2px solid var(--border);border-top-color:var(--accent);border-radius:50%;animation:spin .7s linear infinite;vertical-align:middle;margin-right:6px}
@keyframes spin{to{transform:rotate(360deg)}}
.lock{position:fixed;inset:0;background:var(--bg2,#1e2535);z-index:999;display:flex;align-items:center;justify-content:center}
.lock-box{background:var(--bg1,#161b27);border:1px solid var(--border,#2a3350);border-radius:16px;padding:32px;width:360px;max-width:90vw;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.4)}
.lock-box h2{font-size:22px;margin-bottom:6px}
.lock-box p{color:var(--text2,#8b95b0);font-size:13px;margin-bottom:20px}
.lock-box input{width:100%;margin-bottom:12px;padding:10px 14px;font-size:15px;text-align:center;letter-spacing:.1em}
.lock-box .bp{width:100%;padding:10px;font-size:14px}
.lock-err{color:var(--red,#f87272);font-size:12px;margin-top:8px;min-height:18px}
.lock-icon{font-size:40px;margin-bottom:12px}
.badge-div{font-size:10px;padding:2px 6px;border-radius:4px;font-weight:600;background:#1a2a4a;color:#7bb3ff}
body.light .badge-div{background:#dbeafe;color:#1d4ed8}
.info-box{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:10px 13px;margin-bottom:12px;font-size:12px;color:var(--text2)}
.calc-row{display:flex;align-items:center;gap:8px;margin-top:4px;font-size:12px;color:var(--text2)}
.calc-val{color:var(--accent);font-weight:600}
.hfilt{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px}
.hfilt select{font-size:12px;padding:5px 8px}
.venda-row td{background:rgba(248,114,114,.04)!important}
.reb-head{display:flex;gap:10px;align-items:end;flex-wrap:wrap;margin-bottom:14px}
.reb-head .fr{margin-bottom:0;min-width:180px}
.reb-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:14px}
.reb-buy{color:var(--green);font-weight:700}.reb-hold{color:var(--text2)}
.empty{padding:22px;text-align:center;color:var(--text2);font-size:12px}
@media(max-width:800px){.grid4{grid-template-columns:1fr 1fr}.grid2{grid-template-columns:1fr}.grid3{grid-template-columns:1fr}.reb-kpis{grid-template-columns:1fr}.hdr{align-items:flex-start}.hdr-r{justify-content:flex-end}.pg{padding:14px 10px}.tabs{padding:0 8px}.tab{padding:10px 11px}.val{font-size:18px}}
@media(max-width:520px){.grid4{grid-template-columns:1fr}.fg,.fg3{grid-template-columns:1fr}.hdr{position:static}.btn{padding:6px 9px}}

/* V7 Alpha 2 — Dashboard Executivo */
.hero-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin-bottom:14px}
.metric-card{min-height:142px;position:relative;overflow:hidden;background:linear-gradient(145deg,var(--bg1),var(--bg2))}
.metric-card:after{content:"";position:absolute;inset:auto -40px -55px auto;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(79,142,247,.16),transparent 68%);pointer-events:none}
.metric-primary{border-color:rgba(79,142,247,.48);box-shadow:0 8px 28px rgba(37,99,235,.12)}
.metric-top{display:flex;align-items:center;justify-content:space-between;gap:8px}
.metric-icon{display:grid;place-items:center;min-width:25px;height:25px;padding:0 6px;border:1px solid var(--border);border-radius:8px;color:var(--accent);font-size:10px;font-weight:800;background:var(--bg3)}
.metric-card .val{font-size:20px;margin-top:10px}.metric-card .val2{font-size:12px}.metric-card .sub{font-size:10px}
.strategy-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}
.strategy-item{background:var(--bg1);border:1px solid var(--border);border-radius:12px;padding:12px 14px;display:grid;grid-template-columns:1fr auto;column-gap:10px;align-items:center}
.strategy-item span{font-size:10px;text-transform:uppercase;letter-spacing:.055em;color:var(--text2)}
.strategy-item strong{font-size:17px}.strategy-item small{font-size:9px;color:var(--text2);grid-column:1/3;margin-top:2px}
.mini-progress{grid-column:1/3;height:5px;background:var(--bg3);border-radius:999px;overflow:hidden;margin-top:8px}.mini-progress i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--accent),var(--green));border-radius:inherit;transition:width .45s ease}
@media(max-width:1180px){.hero-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:800px){.hero-grid{grid-template-columns:repeat(2,1fr)}.strategy-strip{grid-template-columns:1fr 1fr}}
@media(max-width:520px){.hero-grid,.strategy-strip{grid-template-columns:1fr}.metric-card{min-height:120px}}


/* V7 Alpha 3 — Sprint 2: Centro de Decisão */
.decision-radar{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:14px 0}
.radar-card{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:14px;min-height:105px}
.radar-card span{display:block;font-size:10px;color:var(--text2);text-transform:uppercase;letter-spacing:.055em}
.radar-card strong{display:block;font-size:22px;margin-top:8px}.radar-card small{display:block;color:var(--text2);font-size:10px;margin-top:3px}
.radar-highlight{border-color:rgba(54,211,153,.45);box-shadow:0 6px 22px rgba(54,211,153,.08)}
.decision-summary{background:linear-gradient(145deg,var(--bg2),var(--bg1));border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:12px;line-height:1.6;color:var(--text2);margin-bottom:10px}
.decision-summary strong{color:inherit}.decision-summary .buy-line{display:flex;justify-content:space-between;gap:12px;padding:5px 0;border-bottom:1px solid var(--border)}
.decision-summary .buy-line:last-child{border-bottom:0}.decision-summary .rank{color:var(--accent);font-weight:700;margin-right:7px}
.decision-actions{display:flex;justify-content:flex-end;margin-bottom:4px}
.priority-pill{display:inline-block;padding:3px 8px;border-radius:999px;font-size:9px;font-weight:800;letter-spacing:.03em}
.priority-very-high{background:rgba(54,211,153,.15);color:var(--green)}.priority-high{background:rgba(79,142,247,.15);color:var(--accent)}.priority-medium{background:rgba(251,191,36,.15);color:var(--yellow)}.priority-none{background:var(--bg3);color:var(--text2)}
@media(max-width:900px){.decision-radar{grid-template-columns:1fr 1fr}}
@media(max-width:520px){.decision-radar{grid-template-columns:1fr}.decision-summary .buy-line{display:block}}


/* V7 Alpha 4 — Sprint 3.1: Política de Alocação */
.policy-hero{display:grid;grid-template-columns:1fr 250px;gap:18px;align-items:center;background:linear-gradient(135deg,var(--bg1),var(--bg2));border:1px solid var(--border);border-radius:16px;padding:22px;margin-bottom:16px}
.policy-kicker{font-size:10px;color:var(--accent);font-weight:800;text-transform:uppercase;letter-spacing:.09em;margin-bottom:7px}
.policy-hero h2{font-size:24px;margin-bottom:7px}.policy-hero p{font-size:12px;color:var(--text2);line-height:1.55;max-width:760px}
.policy-status{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:15px;text-align:center}
.policy-status span{display:block;font-size:9px;color:var(--text2);letter-spacing:.07em}.policy-status strong{display:block;font-size:22px;margin:6px 0 2px}.policy-status small{font-size:10px;color:var(--text2)}
.policy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:16px}
.policy-card{min-height:285px}.policy-card-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.policy-card h3{font-size:15px;margin-top:5px}
.policy-step{display:inline-block;font-size:9px;text-transform:uppercase;letter-spacing:.07em;color:var(--accent);font-weight:800}
.policy-total{font-size:12px;font-weight:800;padding:4px 8px;border-radius:999px;background:var(--bg3)}.policy-total.policy-ok{color:var(--green)}.policy-total.policy-error{color:var(--red)}
.policy-help{font-size:11px;color:var(--text2);line-height:1.45;margin:12px 0 16px}
.policy-input-row{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.policy-input-row.policy-three{grid-template-columns:repeat(3,1fr)}
.policy-input-row label{background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:10px}.policy-input-row label>span{display:block;font-size:10px;color:var(--text2);margin-bottom:7px}
.policy-input-row label>div{display:flex;align-items:center;gap:4px}.policy-input-row input{width:100%;font-size:18px;font-weight:700;padding:8px}.policy-input-row b{font-size:12px;color:var(--text2)}
.policy-bar{display:flex;height:9px;border-radius:999px;overflow:hidden;background:var(--bg3);margin-top:18px}.policy-bar i{display:block;height:100%;transition:width .3s ease}
.policy-legend{display:flex;justify-content:space-between;font-size:9px;color:var(--text2);margin-top:8px}.policy-legend i{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:5px}.dot-br{background:#36d399}.dot-us{background:#4f8ef7}
.policy-summary-card{padding:18px}.policy-summary-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:9px;margin-bottom:14px}
.policy-summary-item{background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:11px}.policy-summary-item span{display:block;font-size:9px;color:var(--text2);text-transform:uppercase}.policy-summary-item strong{display:block;font-size:17px;margin:5px 0 2px}.policy-summary-item small{font-size:9px;color:var(--text2)}
.policy-note{background:var(--bg2);border-left:3px solid var(--accent);padding:11px 13px;border-radius:7px;font-size:11px;color:var(--text2);line-height:1.45}
.policy-actions{display:flex;justify-content:flex-end;gap:9px;margin-top:14px}.policy-actions .bp:disabled{opacity:.45;cursor:not-allowed}
@media(max-width:1100px){.policy-grid{grid-template-columns:1fr}.policy-card{min-height:auto}.policy-summary-grid{grid-template-columns:repeat(4,1fr)}}
@media(max-width:700px){.policy-hero{grid-template-columns:1fr}.policy-summary-grid{grid-template-columns:repeat(2,1fr)}.policy-input-row.policy-three{grid-template-columns:1fr}.policy-input-row{grid-template-columns:1fr}}
@media(max-width:420px){.policy-summary-grid{grid-template-columns:1fr}}


/* V7 Alpha 5 — Caixa USD */
.usd-cash-manager{margin-top:16px;background:var(--bg2);border:1px solid var(--border);border-radius:11px;padding:12px;display:grid;grid-template-columns:1fr 1.4fr;gap:12px;align-items:end}
.usd-cash-manager span,.usd-cash-action label{display:block;font-size:9px;color:var(--text2);text-transform:uppercase;letter-spacing:.05em}
.usd-cash-manager strong{display:block;font-size:18px;margin:4px 0}.usd-cash-manager small{font-size:9px;color:var(--text2)}
.usd-cash-action>div{display:flex;gap:7px;margin-top:6px}.usd-cash-action input{width:100%}.usd-cash-action .bp{white-space:nowrap}
.cash-usd-dashboard{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;padding:13px 16px}
.cash-usd-dashboard>div{padding:6px 12px;border-right:1px solid var(--border)}.cash-usd-dashboard>div:last-child{border-right:0}
.cash-usd-dashboard span{display:block;font-size:9px;color:var(--text2);text-transform:uppercase;letter-spacing:.05em}
.cash-usd-dashboard strong{display:block;font-size:18px;margin:5px 0}.cash-usd-dashboard small{font-size:9px;color:var(--text2)}
@media(max-width:700px){.usd-cash-manager,.cash-usd-dashboard{grid-template-columns:1fr}.cash-usd-dashboard>div{border-right:0;border-bottom:1px solid var(--border)}.cash-usd-dashboard>div:last-child{border-bottom:0}}


/* V7 Alpha 6 — Rebalanceamento multinível */
.rb-hierarchy{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0}
.rb-market-card,.rb-class-card{background:var(--bg1);border:1px solid var(--border);border-radius:11px;padding:12px}
.rb-market-card{border-color:rgba(79,142,247,.35)}
.rb-market-card span,.rb-class-card span{display:block;font-size:9px;color:var(--text2);text-transform:uppercase;letter-spacing:.05em}
.rb-market-card strong,.rb-class-card strong{display:block;font-size:17px;margin:5px 0}
.rb-market-card small,.rb-class-card small{font-size:9px;color:var(--text2)}
.rb-pending{margin:10px 0}
.rb-pending-box{background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.35);border-radius:11px;padding:13px}
.rb-pending-box>strong{color:var(--yellow)}.rb-pending-box p{font-size:11px;color:var(--text2);margin:5px 0 9px}
.rb-pending-box>div{display:flex;justify-content:space-between;border-top:1px solid var(--border);padding:7px 0;font-size:11px}
@media(max-width:1000px){.rb-hierarchy{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.rb-hierarchy{grid-template-columns:1fr}}


/* V7 Alpha 7 — correção do motor e roteiro executivo */
.rb-executive{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin:14px 0}
.rb-executive>div{background:var(--bg1);border:1px solid var(--border);border-radius:11px;padding:12px}
.rb-executive span{display:block;font-size:9px;color:var(--text2);text-transform:uppercase;letter-spacing:.05em}
.rb-executive strong{display:block;font-size:17px;margin:5px 0}
.rb-executive small{font-size:9px;color:var(--text2)}
.rb-group-title{margin-top:14px;padding:7px 10px;background:var(--bg3);border-left:3px solid var(--accent);font-size:10px;font-weight:800;letter-spacing:.06em}
.rb-group-title.pending-title{border-left-color:var(--yellow);color:var(--yellow)}
.pending-line{background:rgba(251,191,36,.05)}
@media(max-width:900px){.rb-executive{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.rb-executive{grid-template-columns:1fr}}


/* V7 Alpha 8 — Inteligência Estratégica */
.strategy-hero{display:grid;grid-template-columns:1fr 240px;gap:16px;align-items:center;background:linear-gradient(135deg,var(--bg1),var(--bg2));border:1px solid var(--border);border-radius:16px;padding:22px;margin-bottom:14px}
.strategy-hero h2{font-size:24px;margin:4px 0 6px}.strategy-hero p{font-size:12px;color:var(--text2);line-height:1.5}
.strategy-score-card{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:15px;text-align:center}.strategy-score-card span{display:block;font-size:9px;color:var(--text2);letter-spacing:.07em}.strategy-score-card strong{display:block;font-size:27px;margin:5px}.strategy-score-card small{font-size:10px;color:var(--text2)}
.strategy-tools{display:grid;grid-template-columns:220px 1fr;gap:14px;align-items:end;margin-bottom:14px}.strategy-tools label{display:block;font-size:9px;color:var(--text2);margin-bottom:5px}.strategy-explainer{font-size:11px;color:var(--text2);line-height:1.45}
.strategy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.strategy-card{background:var(--bg1);border:1px solid var(--border);border-radius:13px;padding:14px}.strategy-card-head{display:flex;justify-content:space-between;gap:10px}.strategy-card-head small{display:block;font-size:10px;color:var(--text2);margin-top:3px}.strategy-ticker{font-size:15px;font-weight:800;color:var(--accent)}
.strategy-score{min-width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}.score-good{background:rgba(52,211,153,.14);color:var(--green)}.score-mid{background:rgba(251,191,36,.14);color:var(--yellow)}.score-low{background:rgba(248,113,113,.14);color:var(--red)}
.strategy-role{margin-top:12px}.strategy-role label{display:block;font-size:9px;color:var(--text2);margin-bottom:5px}.strategy-role textarea{width:100%;resize:vertical}.strategy-role .bs{margin-top:7px}
.strategy-metrics{display:grid;grid-template-columns:1fr;gap:7px;margin-top:12px}.strategy-metrics>div{background:var(--bg2);border-radius:8px;padding:8px}.strategy-metrics span{display:block;font-size:9px;color:var(--text2)}.strategy-metrics strong{display:block;font-size:11px;margin-top:3px}
.strategy-foot{margin-top:10px;font-size:10px;color:var(--text2)}
.rb-top-recommendation{background:linear-gradient(135deg,rgba(79,142,247,.13),rgba(52,211,153,.08));border:1px solid rgba(79,142,247,.35);border-radius:14px;padding:16px;margin:14px 0}
.top-rec-badge{display:inline-block;font-size:9px;font-weight:800;letter-spacing:.08em;color:var(--green);background:rgba(52,211,153,.1);padding:5px 8px;border-radius:999px}
.top-rec-main{display:flex;justify-content:space-between;align-items:center;margin-top:10px}.top-rec-main span{font-size:24px;font-weight:800}.top-rec-main small{display:block;color:var(--text2);font-size:10px}.top-rec-main>strong{font-size:24px;color:var(--accent)}
.rb-top-recommendation p{font-size:11px;color:var(--text2);margin:9px 0}.top-rec-values{display:flex;gap:20px;font-size:10px}.top-rec-values b{margin-left:5px}
.score-pill{display:inline-flex;min-width:34px;height:25px;border-radius:999px;background:var(--bg3);align-items:center;justify-content:center;font-weight:800;color:var(--accent)}.row-reason{display:block;font-size:9px;color:var(--text2);margin-top:3px;max-width:340px}.mini-score{font-style:normal;font-size:9px;color:var(--accent);margin-left:6px}
@media(max-width:1000px){.strategy-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){.strategy-hero,.strategy-tools{grid-template-columns:1fr}.strategy-grid{grid-template-columns:1fr}}


/* V7 Alpha 9 — Family Office Intelligence */
.conviction-control{margin-top:11px;background:var(--bg2);border:1px solid var(--border);border-radius:9px;padding:9px}
.conviction-control label{display:block;font-size:9px;color:var(--text2);margin-bottom:5px}
.conviction-control>div{display:flex;gap:7px}.conviction-control input{width:100%}.conviction-control small{display:block;font-size:9px;color:var(--text2);margin-top:5px}
.purchase-rating{display:flex;align-items:center;gap:8px;margin-top:8px}.purchase-rating b{letter-spacing:2px;color:var(--yellow)}.purchase-rating span{font-size:10px;color:var(--text2)}
.fi-hero{display:grid;grid-template-columns:1fr 250px;gap:16px;align-items:center;background:linear-gradient(135deg,var(--bg1),var(--bg2));border:1px solid var(--border);border-radius:16px;padding:22px;margin-bottom:14px}
.fi-hero h2{font-size:24px;margin:4px 0 6px}.fi-hero p{font-size:12px;color:var(--text2);line-height:1.5}
.fi-quality-card{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:15px;text-align:center}.fi-quality-card span{display:block;font-size:9px;color:var(--text2);letter-spacing:.07em}.fi-quality-card strong{display:block;font-size:28px;margin:5px}.fi-quality-card small{font-size:10px;color:var(--text2)}
.fi-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:14px}.fi-kpis .card{padding:14px}.fi-kpis span{display:block;font-size:9px;color:var(--text2);text-transform:uppercase}.fi-kpis strong{display:block;font-size:19px;margin:5px 0}.fi-kpis small{font-size:9px;color:var(--text2)}
.fi-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}.fi-bars{margin-top:12px}.fi-bar-row{margin-bottom:11px}.fi-bar-row>div:first-child{display:flex;justify-content:space-between;font-size:10px}.fi-bar-row span{color:var(--text2)}.fi-bar-row strong{font-size:10px}.fi-bar-track{height:8px;background:var(--bg3);border-radius:999px;overflow:hidden;margin-top:5px}.fi-bar-track i{display:block;height:100%;background:linear-gradient(90deg,var(--accent),var(--green));border-radius:999px}
.fi-conviction-table{padding:16px}.fi-rank-row{display:grid;grid-template-columns:34px 1fr auto;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)}.fi-rank-row strong{display:block;font-size:12px}.fi-rank-row small{display:block;font-size:9px;color:var(--text2);margin-top:2px}.fi-rank-metrics{text-align:right}.fi-rank-metrics b{display:block;color:var(--accent)}
@media(max-width:900px){.fi-kpis{grid-template-columns:repeat(2,1fr)}.fi-grid{grid-template-columns:1fr}}
@media(max-width:700px){.fi-hero{grid-template-columns:1fr}.fi-kpis{grid-template-columns:1fr}}


/* V7 Alpha 10 — Premium Visual Experience */
:root{--premium-shadow:0 14px 36px rgba(15,23,42,.10);--premium-border:rgba(79,142,247,.18)}
.strategy-hero,.fi-hero{position:relative;overflow:hidden;background:radial-gradient(circle at top right,rgba(79,142,247,.16),transparent 32%),linear-gradient(135deg,var(--bg1),var(--bg2));box-shadow:var(--premium-shadow)}
.strategy-hero:after,.fi-hero:after{content:"";position:absolute;right:-50px;bottom:-80px;width:210px;height:210px;border:1px solid rgba(79,142,247,.14);border-radius:50%}
.strategy-score-card,.fi-quality-card{background:linear-gradient(145deg,var(--bg2),var(--bg1));box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 10px 24px rgba(15,23,42,.08)}
.strategy-tools{grid-template-columns:220px 1fr auto;align-items:center}
.strategy-view-toggle{display:flex;gap:6px;background:var(--bg2);padding:4px;border:1px solid var(--border);border-radius:10px}
.view-btn{border:0;background:transparent;color:var(--text2);padding:7px 11px;border-radius:7px;font-size:10px;cursor:pointer}
.view-btn.active{background:var(--accent);color:white;box-shadow:0 6px 16px rgba(79,142,247,.24)}
.strategy-groups{display:flex;flex-direction:column;gap:18px}
.strategy-group-section{background:var(--bg2);border:1px solid var(--border);border-radius:16px;padding:14px}
.strategy-group-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding:2px 2px 10px;border-bottom:1px solid var(--border)}
.strategy-group-head span{font-size:9px;color:var(--text2);letter-spacing:.08em}.strategy-group-head h3{font-size:16px;margin-top:2px}.strategy-group-head b{font-size:10px;color:var(--accent)}
.premium-card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.premium-strategy-card{background:linear-gradient(180deg,rgba(255,255,255,.02),transparent),var(--bg1);border:1px solid var(--premium-border);border-radius:16px;padding:15px;box-shadow:0 10px 24px rgba(15,23,42,.07);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
.premium-strategy-card:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(15,23,42,.12);border-color:rgba(79,142,247,.36)}
.premium-card-top{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.premium-identity{display:flex;gap:10px;align-items:center}
.thesis-icon{width:40px;height:40px;border-radius:12px;background:linear-gradient(145deg,rgba(79,142,247,.16),rgba(52,211,153,.10));display:flex;align-items:center;justify-content:center;font-size:20px}
.premium-score-wrap{text-align:right}.premium-score-wrap strong{display:block;font-size:24px;line-height:1;margin-top:5px}
.strategy-badge{display:inline-block;padding:4px 7px;border-radius:999px;font-size:8px;font-weight:800;letter-spacing:.05em}
.badge-excellent{background:rgba(52,211,153,.13);color:var(--green)}.badge-good{background:rgba(79,142,247,.13);color:var(--accent)}.badge-mid{background:rgba(251,191,36,.13);color:var(--yellow)}.badge-low{background:rgba(248,113,113,.13);color:var(--red)}
.premium-role-preview{margin:14px 0 12px;padding:11px;background:linear-gradient(145deg,var(--bg2),transparent);border-radius:11px;border-left:3px solid var(--accent)}
.premium-role-preview span{display:block;font-size:8px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em}.premium-role-preview strong{display:block;font-size:11px;margin-top:4px;line-height:1.35}
.conviction-slider-wrap{border:1px solid var(--border);border-radius:12px;padding:11px;background:var(--bg2)}.conviction-head{display:flex;justify-content:space-between;font-size:10px}.conviction-head strong{font-size:13px}
.conviction-slider-wrap input[type=range]{width:100%;margin:9px 0 4px;accent-color:var(--accent)}.conviction-scale{display:flex;justify-content:space-between;font-size:8px;color:var(--text2)}
.conviction-slider-wrap.conv-max input{accent-color:var(--green)}.conviction-slider-wrap.conv-high input{accent-color:var(--accent)}.conviction-slider-wrap.conv-mid input{accent-color:var(--yellow)}.conviction-slider-wrap.conv-low input{accent-color:var(--red)}
.compact-save{width:100%;margin-top:8px}
.premium-metrics{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:12px}.premium-metrics>div{background:var(--bg2);border-radius:9px;padding:8px}.premium-metrics span{display:block;font-size:8px;color:var(--text2);text-transform:uppercase}.premium-metrics strong{display:block;font-size:11px;margin-top:3px}
.thesis-editor{margin-top:11px;border-top:1px solid var(--border);padding-top:9px}.thesis-editor summary{cursor:pointer;font-size:10px;color:var(--accent);font-weight:700}.thesis-editor textarea{width:100%;margin:9px 0 7px;resize:vertical}.thesis-editor .bp{width:100%}
.fi-health-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-bottom:14px}.health-card{background:var(--bg1);border:1px solid var(--border);border-radius:13px;padding:12px;display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center}
.health-card span{display:block;font-size:8px;color:var(--text2);text-transform:uppercase}.health-card strong{display:block;font-size:21px;margin-top:3px}.health-card small{grid-column:1/-1;font-size:9px;font-weight:700}
.health-ring{--score:0;width:42px;height:42px;border-radius:50%;background:conic-gradient(var(--accent) calc(var(--score)*1%),var(--bg3) 0);display:grid;place-items:center}.health-ring i{width:30px;height:30px;border-radius:50%;background:var(--bg1)}
.fi-grid .card,.fi-conviction-table{box-shadow:var(--premium-shadow);border-color:var(--premium-border)}
@media(max-width:1200px){.premium-card-grid{grid-template-columns:repeat(2,1fr)}.fi-health-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:800px){.strategy-tools{grid-template-columns:1fr}.premium-card-grid{grid-template-columns:1fr}.fi-health-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.fi-health-grid{grid-template-columns:1fr}}


/* V7 Alpha 11 — Executive Terminal */
.topbar .btn,.header-actions .btn,button.btn{
  border-radius:10px!important;
  border:1px solid rgba(79,142,247,.18)!important;
  box-shadow:0 5px 14px rgba(15,23,42,.06);
  font-weight:700;
}
.toolbar-settings{background:linear-gradient(135deg,var(--bg2),var(--bg3))!important}
.premium-gauge-card{display:flex;align-items:center;justify-content:center}
.quality-gauge{
  --gauge:0;
  width:150px;height:150px;border-radius:50%;
  background:conic-gradient(
    var(--green) calc(var(--gauge)*1%),
    var(--bg3) 0
  );
  display:grid;place-items:center;
  box-shadow:0 14px 30px rgba(15,23,42,.10);
}
.gauge-inner{
  width:116px;height:116px;border-radius:50%;background:var(--bg1);
  display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
}
.gauge-inner span{font-size:8px;color:var(--text2);letter-spacing:.07em}
.gauge-inner strong{font-size:27px;margin:4px 0}
.gauge-inner small{font-size:9px;color:var(--text2)}
.fi-recommendations-card{margin-bottom:14px;box-shadow:var(--premium-shadow);border-color:var(--premium-border)}
.fi-recommendations{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;margin-top:10px}
.fi-rec-item{display:flex;gap:10px;align-items:flex-start;background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:10px}
.fi-rec-item span{width:24px;height:24px;border-radius:50%;background:rgba(79,142,247,.12);color:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:10px}
.fi-rec-item p{font-size:10px;line-height:1.45;color:var(--text2)}
.rb-top3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0}
.top3-card{display:grid;grid-template-columns:auto 1fr auto;gap:9px;align-items:center;background:var(--bg1);border:1px solid var(--premium-border);border-radius:13px;padding:12px;box-shadow:0 8px 20px rgba(15,23,42,.07)}
.top3-medal{font-size:21px}.top3-card strong{display:block;font-size:13px}.top3-card small{display:block;font-size:9px;color:var(--text2);margin-top:2px}.top3-card em{grid-column:2/-1;font-style:normal;font-size:10px;color:var(--accent);font-weight:800}
.top3-score{text-align:right}.top3-score b{display:block;font-size:9px}.top3-score span{display:block;font-size:9px;color:var(--text2)}
.score-seal{min-width:110px;border-radius:12px;padding:9px 12px;text-align:center}.score-seal b{display:block;font-size:11px}.score-seal span{display:block;font-size:9px;margin-top:2px}
.score-visual-excellent{background:rgba(52,211,153,.14);color:var(--green)}
.score-visual-good{background:rgba(79,142,247,.14);color:var(--accent)}
.score-visual-mid{background:rgba(251,191,36,.14);color:var(--yellow)}
.score-visual-warning{background:rgba(249,115,22,.14);color:#f97316}
.score-visual-low{background:rgba(248,113,113,.14);color:var(--red)}
@media(max-width:900px){.rb-top3,.fi-recommendations{grid-template-columns:1fr}}

:root{--north-navy:#0f2740;--north-gold:#d9b56d;--north-gold-soft:#f4e3b0;--north-shadow:0 18px 46px rgba(8,25,45,.14)}
.north-brand-shell{display:flex;justify-content:space-between;align-items:center;padding:12px 22px;background:rgba(8,25,45,.94);border-bottom:1px solid rgba(217,181,109,.16);position:sticky;top:0;z-index:999;backdrop-filter:blur(18px)}
body.light .north-brand-shell{background:rgba(255,255,255,.94)}.north-brand-lockup{display:flex;align-items:center;gap:12px}.north-brand-mark{width:42px;height:42px;border-radius:12px}.north-brand-name{font-size:17px;font-weight:800;color:#fff}body.light .north-brand-name{color:var(--north-navy)}.north-brand-tagline{font-size:9px;letter-spacing:.13em;text-transform:uppercase;color:var(--north-gold)}.north-build-badge{font-size:9px;color:#dce3ea;border:1px solid rgba(217,181,109,.24);padding:6px 9px;border-radius:999px}
.north-mission-control{display:grid;grid-template-columns:1.5fr .7fr .7fr;gap:14px;background:radial-gradient(circle at 10% 10%,rgba(217,181,109,.14),transparent 30%),linear-gradient(135deg,var(--north-navy),#0a1b2c);border:1px solid rgba(217,181,109,.20);border-radius:24px;padding:24px;margin-bottom:18px;color:white;box-shadow:var(--north-shadow)}
.mission-eyebrow,.north-eyebrow{font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--north-gold)}.mission-main h1{font-size:30px;margin:7px 0}.mission-main p{font-size:12px;color:#c7d3df}.mission-actions{display:flex;gap:8px;margin-top:16px}.north-primary,.north-secondary{border:0;border-radius:10px;padding:10px 14px;font-size:10px;font-weight:800;cursor:pointer}.north-primary{background:linear-gradient(135deg,var(--north-gold),var(--north-gold-soft));color:var(--north-navy)}.north-secondary{background:rgba(255,255,255,.07);color:white;border:1px solid rgba(255,255,255,.12)}.mission-score-card,.mission-priority-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:16px;padding:16px;display:flex;flex-direction:column;justify-content:center}.mission-score-card span,.mission-priority-card span{font-size:8px;text-transform:uppercase;color:#9fb1c1}.mission-score-card strong,.mission-priority-card strong{font-size:25px;margin:6px 0}.mission-score-card small,.mission-priority-card small{font-size:9px;color:var(--north-gold-soft)}
.north-page-hero{display:flex;justify-content:space-between;align-items:center;padding:20px;border:1px solid var(--border);background:linear-gradient(135deg,var(--bg1),var(--bg2));border-radius:18px;margin-bottom:14px;box-shadow:var(--north-shadow)}.north-page-hero h2{font-size:24px;margin:5px 0}.north-page-hero p{font-size:11px;color:var(--text2)}
.north-goals-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.north-goal-card{background:var(--bg1);border:1px solid rgba(217,181,109,.18);border-radius:18px;padding:16px;box-shadow:var(--north-shadow)}.north-goal-head{display:flex;justify-content:space-between}.north-goal-head span{font-size:8px;color:var(--text2);text-transform:uppercase}.north-goal-head h3{font-size:14px;margin-top:4px}.north-goal-head b{font-size:16px;color:var(--north-gold)}.north-goal-values{margin:18px 0 10px}.north-goal-values strong{display:block;font-size:22px}.north-goal-values small{font-size:9px;color:var(--text2)}.north-goal-progress{height:9px;background:var(--bg3);border-radius:999px;overflow:hidden}.north-goal-progress i{display:block;height:100%;background:linear-gradient(90deg,var(--north-gold),var(--green));border-radius:999px}.north-goal-foot{display:flex;justify-content:space-between;margin-top:10px;font-size:9px;color:var(--text2)}.north-goal-foot button{border:0;background:transparent;color:var(--accent);cursor:pointer;font-size:9px}
@media(max-width:1000px){.north-mission-control{grid-template-columns:1fr 1fr}.mission-main{grid-column:1/-1}.north-goals-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:700px){.north-build-badge{display:none}.north-mission-control{grid-template-columns:1fr}.mission-main{grid-column:auto}.north-goals-grid{grid-template-columns:1fr}.north-page-hero{flex-direction:column;align-items:flex-start;gap:12px}}


/* NORTH CAPITAL BUILD 12.1 — BRAND/MISSION HOTFIX */
.north-header-lockup{display:flex;align-items:center;gap:10px;min-width:245px}
.north-header-lockup img{width:38px;height:38px;border-radius:10px;box-shadow:0 7px 18px rgba(8,25,45,.18)}
.north-header-lockup>div{display:flex;flex-direction:column}
.north-header-lockup strong{font-size:14px;line-height:1.05;color:var(--text)}
.north-header-lockup span{font-size:7px;line-height:1.2;margin-top:3px;letter-spacing:.13em;text-transform:uppercase;color:var(--north-gold)}
.north-header-lockup small{font-size:8px;color:var(--text2);border-left:1px solid var(--border);padding-left:9px;margin-left:2px}
.north-login-brand{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:9px;text-align:left}
.north-login-brand img{width:50px;height:50px;border-radius:13px}
.north-login-brand h2{margin:0;font-size:20px}
.north-login-brand span{font-size:8px;color:var(--north-gold);letter-spacing:.11em;text-transform:uppercase}
#pg-vg>.north-mission-control{margin:0 0 16px}
@media(max-width:900px){
  .north-header-lockup{min-width:auto}
  .north-header-lockup small{display:none}
  .north-header-lockup span{display:none}
}


/* NORTH CAPITAL BUILD 13 — DECISION INTELLIGENCE */
.north-ai-hero{background:radial-gradient(circle at 85% 15%,rgba(217,181,109,.16),transparent 28%),linear-gradient(135deg,var(--bg1),var(--bg2))}
.north-ai-status{display:flex;align-items:center;gap:7px;font-size:9px;color:var(--text2)}.north-ai-status i{width:8px;height:8px;background:var(--green);border-radius:50%;box-shadow:0 0 0 5px rgba(52,211,153,.11)}
.north-ai-layout{display:flex;flex-direction:column;gap:14px}.north-ai-brief{display:flex;gap:14px;align-items:center;background:linear-gradient(135deg,var(--north-navy),#0a1b2c);color:white;border-radius:18px;padding:18px;box-shadow:var(--north-shadow)}.north-ai-avatar{width:54px;height:54px;border-radius:16px;background:linear-gradient(135deg,var(--north-gold),var(--north-gold-soft));color:var(--north-navy);display:grid;place-items:center;font-size:24px;font-weight:900}.north-ai-brief span{font-size:8px;color:var(--north-gold);text-transform:uppercase;letter-spacing:.12em}.north-ai-brief h3{font-size:21px;margin:3px 0}.north-ai-brief p{font-size:10px;color:#cbd6df}
.north-section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.north-section-title span{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}.north-section-title b{min-width:24px;height:24px;border-radius:999px;background:rgba(79,142,247,.12);color:var(--accent);display:grid;place-items:center;font-size:10px}.north-section-title small{font-size:9px;color:var(--text2)}
.north-ai-insights{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.north-ai-insight{display:flex;gap:10px;align-items:flex-start;background:var(--bg1);border:1px solid var(--border);border-radius:14px;padding:13px;box-shadow:0 8px 22px rgba(15,23,42,.06)}.north-ai-insight>span{width:27px;height:27px;border-radius:9px;display:grid;place-items:center;font-weight:800;font-size:10px;background:var(--bg3)}.north-ai-insight strong{font-size:11px}.north-ai-insight p{font-size:9px;color:var(--text2);line-height:1.45;margin-top:4px}.north-ai-insight.warning{border-left:3px solid var(--yellow)}.north-ai-insight.action{border-left:3px solid var(--accent)}.north-ai-insight.opportunity,.north-ai-insight.positive{border-left:3px solid var(--green)}.north-ai-insight.review{border-left:3px solid var(--red)}.north-ai-insight.goal{border-left:3px solid var(--north-gold)}
.north-priority-table{display:flex;flex-direction:column;gap:7px}.north-priority-row{display:grid;grid-template-columns:42px 1.3fr .8fr .6fr .6fr;gap:10px;align-items:center;background:var(--bg1);border:1px solid var(--border);border-radius:12px;padding:11px}.north-priority-row>b{color:var(--north-gold);font-size:13px}.north-priority-row strong{display:block;font-size:11px}.north-priority-row small{display:block;font-size:8px;color:var(--text2)}.north-priority-row span,.north-priority-row em,.north-priority-row i{font-size:9px;font-style:normal}.north-priority-row em{color:var(--green);font-weight:800}.north-priority-row i{text-align:right;color:var(--accent);font-weight:800}
.north-grade-row{display:grid;grid-template-columns:180px 1fr;gap:12px;margin-bottom:14px}.north-grade-card{background:linear-gradient(135deg,var(--north-navy),#0a1b2c);color:white;border-radius:17px;padding:16px;text-align:center;box-shadow:var(--north-shadow)}.north-grade-card span{font-size:8px;color:var(--north-gold);text-transform:uppercase}.north-grade-card strong{display:block;font-size:42px;margin:6px 0}.north-grade-card small{font-size:9px;color:#cbd6df}.north-score-pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.north-pillar{background:var(--bg1);border:1px solid var(--border);border-radius:11px;padding:10px}.north-pillar span{font-size:8px;color:var(--text2);text-transform:uppercase}.north-pillar strong{display:block;font-size:17px;margin:4px 0}.north-pillar i{display:block;height:5px;background:var(--bg3);border-radius:999px;overflow:hidden}.north-pillar b{display:block;height:100%;background:linear-gradient(90deg,var(--north-gold),var(--accent));border-radius:999px}
.north-intelligence-grid{display:grid;grid-template-columns:1.4fr .8fr;gap:14px;margin-bottom:14px}.north-heatmap{display:flex;flex-wrap:wrap;gap:7px;margin-top:10px}.north-heat-tile{min-height:82px;flex-grow:1;border-radius:12px;padding:11px;display:flex;flex-direction:column;justify-content:space-between;color:white;box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}.north-heat-tile strong{font-size:14px}.north-heat-tile span{font-size:18px;font-weight:800}.north-heat-tile small{font-size:8px;opacity:.82}.hm-good{background:linear-gradient(135deg,#176b57,#2f9e7a)}.hm-mid{background:linear-gradient(135deg,#83601a,#c79533)}.hm-low{background:linear-gradient(135deg,#7b3039,#b9505d)}
.north-timeline{display:flex;flex-direction:column;gap:0;margin-top:10px}.north-timeline-item{display:grid;grid-template-columns:16px 1fr;gap:9px;position:relative;padding-bottom:14px}.north-timeline-item:before{content:"";position:absolute;left:6px;top:12px;bottom:-2px;width:1px;background:var(--border)}.north-timeline-item:last-child:before{display:none}.north-timeline-item>i{width:13px;height:13px;border-radius:50%;background:var(--north-gold);box-shadow:0 0 0 4px rgba(217,181,109,.13)}.north-timeline-item span{font-size:8px;color:var(--text2)}.north-timeline-item strong{display:block;font-size:10px;margin-top:2px}.north-timeline-item p{font-size:8px;color:var(--text2);margin-top:2px}
.north-checklist-card{margin-top:16px;background:var(--bg1);border:1px solid var(--border);border-radius:16px;padding:15px;box-shadow:var(--north-shadow)}.north-checklist{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.north-check-item{display:grid;grid-template-columns:30px 1fr;gap:8px;align-items:center;background:var(--bg2);border:1px solid var(--border);border-radius:11px;padding:10px}.north-check-item>span{width:28px;height:28px;border-radius:9px;display:grid;place-items:center;font-weight:900}.north-check-item strong{font-size:9px}.north-check-item small{grid-column:2;font-size:8px;color:var(--text2)}.north-check-item.done>span{background:rgba(52,211,153,.13);color:var(--green)}.north-check-item.pending>span{background:rgba(251,191,36,.13);color:var(--yellow)}
.north-mission-control{grid-template-columns:1.35fr .55fr .75fr .75fr}.mission-ai-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:16px;padding:16px;display:flex;flex-direction:column;justify-content:center}.mission-ai-card span{font-size:8px;color:var(--north-gold);text-transform:uppercase}.mission-ai-card strong{font-size:14px;margin:7px 0;color:white}.mission-ai-card small{font-size:8px;color:#cbd6df;line-height:1.4}
@media(max-width:1100px){.north-mission-control{grid-template-columns:1fr 1fr}.mission-main{grid-column:1/-1}.north-intelligence-grid{grid-template-columns:1fr}.north-score-pillars{grid-template-columns:repeat(2,1fr)}}
@media(max-width:800px){.north-ai-insights,.north-checklist{grid-template-columns:1fr}.north-priority-row{grid-template-columns:34px 1fr auto}.north-priority-row span{display:none}.north-grade-row{grid-template-columns:1fr}.north-score-pillars{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.north-ai-insights,.north-score-pillars{grid-template-columns:1fr}.north-mission-control{grid-template-columns:1fr}.mission-main{grid-column:auto}}


/* NORTH CAPITAL BUILD 13.1 — SCORE SEMANTICS */
.quality-gauge{
  --gauge-color:#d47a2c;
  background:conic-gradient(
    var(--gauge-color) calc(var(--gauge)*1%),
    var(--bg3) 0
  )!important;
  transition:background .35s ease,box-shadow .35s ease;
}
.quality-gauge[data-tone="excellent"],.quality-gauge[data-tone="very-good"]{box-shadow:0 14px 34px rgba(35,134,107,.18)}
.quality-gauge[data-tone="good"]{box-shadow:0 14px 34px rgba(209,165,54,.18)}
.quality-gauge[data-tone="attention"]{box-shadow:0 14px 34px rgba(212,122,44,.22)}
.quality-gauge[data-tone="critical"]{box-shadow:0 14px 34px rgba(191,75,89,.22)}
.gauge-inner em{font-size:7px;font-style:normal;text-transform:uppercase;letter-spacing:.07em;color:var(--text2);margin-top:4px}
.premium-gauge-card{gap:18px;justify-content:flex-end}
.fi-gauge-summary{width:205px;display:flex;flex-direction:column;gap:9px}
.fi-gauge-summary-row{display:grid;grid-template-columns:1fr 28px;gap:7px;align-items:center}
.fi-gauge-summary-row span{font-size:8px;color:var(--text2)}
.fi-gauge-summary-row>b{font-size:10px;text-align:right}
.fi-gauge-summary-row>i{grid-column:1/-1;height:5px;background:var(--bg3);border-radius:999px;overflow:hidden}
.fi-gauge-summary-row>i>em{display:block;width:var(--row-width);height:100%;background:var(--row-color);border-radius:999px}
.north-ai-conversation{grid-column:1/-1;display:flex;gap:13px;align-items:flex-start;background:linear-gradient(135deg,var(--north-navy),#0a1b2c);color:white;border:1px solid rgba(217,181,109,.2);border-radius:16px;padding:16px;box-shadow:var(--north-shadow)}
.north-ai-conversation-avatar{width:42px;height:42px;flex:0 0 42px;display:grid;place-items:center;border-radius:13px;background:linear-gradient(135deg,var(--north-gold),var(--north-gold-soft));color:var(--north-navy);font-size:18px;font-weight:900}
.north-ai-conversation span{font-size:8px;color:var(--north-gold);text-transform:uppercase;letter-spacing:.1em}
.north-ai-conversation p{font-size:10px;line-height:1.55;color:#d9e2e9;margin-top:6px}
@media(max-width:900px){.premium-gauge-card{flex-direction:column}.fi-gauge-summary{width:100%}}

/* BUILD 14 EXECUTIVE EXPERIENCE */
.north-executive-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 0 12px}
.north-exec-card,.north-home-panel,.north-goal-ring-card,.north-strategy-summary article{background:var(--bg1);border:1px solid var(--border);border-radius:15px;box-shadow:0 9px 25px rgba(15,23,42,.06)}
.north-exec-card{padding:13px 15px;position:relative;overflow:hidden}.north-exec-card:before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(var(--north-gold),var(--accent))}
.north-exec-card span,.north-strategy-summary span{font-size:8px;text-transform:uppercase;letter-spacing:.08em;color:var(--text2)}.north-exec-card strong{display:block;font-size:20px;margin:5px 0}.north-exec-card small,.north-strategy-summary small{font-size:8px;color:var(--text2)}
.north-exec-action{background:linear-gradient(135deg,var(--north-navy),#0b1928);border-color:rgba(217,181,109,.25)}.north-exec-action span,.north-exec-action small{color:#bac7d2}.north-exec-action strong{color:var(--north-gold-soft)}
.north-home-grid{display:grid;grid-template-columns:1.05fr 1fr .9fr;gap:11px;margin-bottom:12px}.north-home-panel{padding:14px;min-height:178px}
.north-home-radar{display:flex;flex-direction:column;gap:10px}.north-radar-row{display:grid;grid-template-columns:1fr 28px;gap:7px;align-items:center}.north-radar-row span{font-size:8px;color:var(--text2)}.north-radar-row b{font-size:9px;text-align:right}.north-radar-row i{grid-column:1/-1;height:5px;background:var(--bg3);border-radius:999px;overflow:hidden}.north-radar-row em{display:block;height:100%;border-radius:999px}
.north-home-goals{display:flex;flex-direction:column;gap:9px}.north-home-goal{display:grid;grid-template-columns:44px 1fr;gap:10px;align-items:center;padding:7px;border-radius:11px;background:var(--bg2);border:1px solid var(--border)}
.north-mini-ring{width:42px;height:42px;border-radius:50%;background:conic-gradient(var(--north-gold) calc(var(--goal)*1%),var(--bg3) 0);display:grid;place-items:center;position:relative}.north-mini-ring:after{content:"";position:absolute;inset:5px;border-radius:50%;background:var(--bg1)}.north-mini-ring strong{position:relative;z-index:1;font-size:8px}.north-home-goal b{display:block;font-size:9px}.north-home-goal small{font-size:7px;color:var(--text2)}
.north-home-event{display:grid;grid-template-columns:12px 1fr;gap:8px;padding-bottom:10px;position:relative}.north-home-event:before{content:"";position:absolute;left:4px;top:9px;bottom:-2px;width:1px;background:var(--border)}.north-home-event:last-child:before{display:none}.north-home-event>i{width:9px;height:9px;border-radius:50%;background:var(--north-gold);box-shadow:0 0 0 3px rgba(217,181,109,.14)}.north-home-event span{font-size:7px;color:var(--text2)}.north-home-event b{display:block;font-size:9px}.north-home-event small{font-size:7px;color:var(--text2)}
.north-executive-diagnosis{display:grid;grid-template-columns:1.2fr 1fr;gap:18px;background:linear-gradient(135deg,var(--north-navy),#0b1928);color:#fff;border-radius:18px;padding:18px;margin-bottom:13px;box-shadow:var(--north-shadow)}.north-executive-diagnosis>div>span{font-size:8px;text-transform:uppercase;color:var(--north-gold)}.north-executive-diagnosis h3{font-size:20px;margin:6px 0}.north-executive-diagnosis p{font-size:9px;color:#c5d0da;line-height:1.5}
.north-executive-stars{display:flex;flex-direction:column;gap:6px}.north-executive-stars>div{display:grid;grid-template-columns:1fr 90px 28px;align-items:center;gap:8px}.north-executive-stars span{font-size:8px;color:#b8c4cf}.north-executive-stars em{font-style:normal;letter-spacing:2px}.north-executive-stars em i{font-style:normal;color:#52606c}.north-executive-stars em i.on{color:var(--north-gold)}.north-executive-stars b{font-size:9px;text-align:right}
.north-goal-rings{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:13px}.north-goal-ring-card{display:grid;grid-template-columns:105px 1fr;gap:14px;align-items:center;padding:14px}.north-goal-ring{width:96px;height:96px;border-radius:50%;background:conic-gradient(var(--north-gold) calc(var(--goal)*1%),var(--bg3) 0);display:grid;place-items:center;position:relative}.north-goal-ring:after{content:"";position:absolute;inset:10px;background:var(--bg1);border-radius:50%}.north-goal-ring>div{position:relative;z-index:1;text-align:center}.north-goal-ring strong{display:block;font-size:17px}.north-goal-ring small{font-size:7px;color:var(--text2)}.north-goal-ring-card span{font-size:8px;text-transform:uppercase;color:var(--north-gold)}.north-goal-ring-card h3{font-size:13px;margin:5px 0}.north-goal-ring-card p{font-size:8px;color:var(--text2)}
.north-cio-brief{display:grid;grid-template-columns:58px 1fr;gap:14px;background:linear-gradient(135deg,#0e1927,#172d45);color:#fff;border:1px solid rgba(217,181,109,.22);border-radius:18px;padding:17px;margin-bottom:13px;box-shadow:var(--north-shadow)}.north-cio-badge{width:54px;height:54px;border-radius:15px;display:grid;place-items:center;background:linear-gradient(135deg,var(--north-gold),var(--north-gold-soft));color:var(--north-navy);font-weight:900}.north-cio-brief span{font-size:8px;text-transform:uppercase;color:var(--north-gold)}.north-cio-brief h3{font-size:17px;margin:5px 0 12px}.north-cio-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.north-cio-actions>div{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.08);border-radius:11px;padding:9px}.north-cio-actions span{font-size:7px;color:#9fb0bf}.north-cio-actions strong{display:block;font-size:11px;margin:3px 0}.north-cio-actions small{font-size:7px;color:#bcc8d1}
.north-strategy-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px}.north-strategy-summary article{padding:12px}.north-strategy-summary strong{display:block;font-size:19px;margin:4px 0}
.strategy-card,.card,.north-home-panel,.north-exec-card{transition:transform .2s ease,box-shadow .2s ease}.strategy-card:hover,.card:hover,.north-home-panel:hover,.north-exec-card:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(15,23,42,.09)}
.policy-hero,.fi-hero,.north-page-hero{min-height:auto!important;padding-top:18px!important;padding-bottom:18px!important}
@media(max-width:1150px){.north-executive-strip{grid-template-columns:repeat(2,1fr)}.north-home-grid{grid-template-columns:1fr 1fr}.north-home-panel:last-child{grid-column:1/-1}.north-goal-rings{grid-template-columns:1fr}}
@media(max-width:850px){.north-home-grid,.north-executive-diagnosis{grid-template-columns:1fr}.north-cio-actions,.north-strategy-summary{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.north-executive-strip,.north-cio-actions,.north-strategy-summary{grid-template-columns:1fr}.north-home-grid{grid-template-columns:1fr}.north-home-panel:last-child{grid-column:auto}}


/* NORTH CAPITAL 2.0 · BUILD 14.1 · NORTH SCORE COCKPIT */
.north-score-cockpit{
  display:grid!important;
  grid-template-columns:minmax(300px,.8fr) minmax(660px,1.55fr)!important;
  gap:22px!important;
  align-items:stretch!important;
  padding:22px!important;
  background:
    radial-gradient(circle at 70% 42%,rgba(0,141,255,.10),transparent 29%),
    linear-gradient(135deg,#07101b,#081827 58%,#06111c)!important;
  border:1px solid rgba(56,189,248,.23)!important;
  border-radius:20px!important;
  color:#f5f9ff;
  min-height:330px!important;
  box-shadow:0 24px 64px rgba(0,8,18,.35),inset 0 1px 0 rgba(255,255,255,.035);
  overflow:hidden;
}
.north-score-intro{padding:18px 8px 14px 8px;display:flex;flex-direction:column;justify-content:center}
.north-score-intro h2{font-size:30px!important;color:#f8fbff;margin:9px 0!important}
.north-score-intro>p{max-width:410px;color:#b4c3d3!important;font-size:12px!important;line-height:1.65}
.north-score-intro .policy-kicker{color:#28a8ff!important;letter-spacing:.12em}
.north-score-message{
  margin-top:24px;padding:14px 16px;border-radius:13px;
  border:1px solid rgba(56,189,248,.16);
  background:linear-gradient(135deg,rgba(10,33,54,.88),rgba(5,17,29,.7));
}
.north-score-message span{font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:#46baff}
.north-score-message strong{display:block;font-size:14px;margin:6px 0;color:#fff}
.north-score-message small{font-size:9px;line-height:1.45;color:#9fb2c5}

.north-cockpit-panel{
  display:grid!important;
  grid-template-columns:230px minmax(350px,1fr) 135px;
  gap:14px!important;
  align-items:center!important;
  justify-content:stretch!important;
  padding:16px 18px!important;
  border-radius:17px!important;
  background:
    radial-gradient(circle at 62% 48%,rgba(255,130,0,.10),transparent 26%),
    linear-gradient(145deg,rgba(4,18,31,.98),rgba(6,25,42,.95))!important;
  border:1px solid rgba(111,203,255,.25)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 18px 50px rgba(0,5,12,.38)!important;
}
.fi-gauge-summary{width:auto!important;gap:13px!important}
.fi-gauge-summary-row{
  display:grid!important;
  grid-template-columns:34px 1fr 30px!important;
  gap:9px!important;
  align-items:center!important;
}
.fi-gauge-summary-row u{
  width:34px;height:34px;border-radius:9px;display:grid;place-items:center;
  text-decoration:none;font-size:17px;font-weight:900;color:var(--row-color);
  background:color-mix(in srgb,var(--row-color) 14%,transparent);
  border:1px solid color-mix(in srgb,var(--row-color) 28%,transparent);
  text-shadow:0 0 12px color-mix(in srgb,var(--row-color) 72%,transparent);
}
.fi-gauge-summary-row span{font-size:10px!important;color:#e4edf6!important;font-weight:700}
.fi-gauge-summary-row>b{font-size:12px!important;color:#fff}
.fi-gauge-summary-row>i{
  grid-column:2/-1!important;height:9px!important;background:#17283a!important;
  box-shadow:inset 0 1px 3px rgba(0,0,0,.45);
}
.fi-gauge-summary-row>i>em{
  background:linear-gradient(90deg,color-mix(in srgb,var(--row-color) 75%,#fff),var(--row-color))!important;
  box-shadow:0 0 15px color-mix(in srgb,var(--row-color) 68%,transparent);
}

.north-speedometer-shell{min-width:360px;display:flex;align-items:center;justify-content:center}
.quality-gauge.north-speedometer{
  --gauge:0;--score-color:#ff8a16;--score-glow:rgba(255,138,22,.75);
  position:relative;width:340px!important;height:220px!important;border-radius:0!important;
  background:none!important;display:block!important;box-shadow:none!important;overflow:visible;
  filter:none!important;
}
.north-speedometer-track{
  position:absolute;left:20px;right:20px;top:12px;height:300px;border-radius:300px 300px 0 0;
  background:
    conic-gradient(from 270deg at 50% 50%,
      #ff2338 0deg,#ff4b24 32deg,#ff8a16 64deg,#ffd000 96deg,
      #c6ed27 126deg,#54e55d 154deg,#10d889 180deg,
      transparent 180deg 360deg);
  clip-path:inset(0 0 50% 0);
  filter:drop-shadow(0 0 10px rgba(255,78,33,.55))
         drop-shadow(0 0 18px rgba(255,197,0,.34))
         drop-shadow(0 0 22px rgba(24,220,132,.30));
}
.north-speedometer-track:before{
  content:"";position:absolute;inset:16px;border-radius:inherit;
  background:#06121f;clip-path:inset(0 0 50% 0);
  box-shadow:inset 0 5px 22px rgba(0,0,0,.72);
}
.north-speedometer-track:after{
  content:"";position:absolute;inset:31px;border-radius:inherit;
  border:1px solid rgba(255,255,255,.12);clip-path:inset(0 0 50% 0);
}
.north-speedometer-ticks span{
  position:absolute;left:50%;top:26px;width:1px;height:18px;background:rgba(255,255,255,.9);
  transform-origin:50% 135px;
  transform:translateX(-50%) rotate(calc(-90deg + (var(--tick) * 1.8deg)));
  z-index:4;box-shadow:0 0 6px rgba(255,255,255,.45);
}
.north-speedometer-labels span{position:absolute;font-size:9px;color:#dce7f2;font-weight:700;z-index:5}
.nsl-0{left:16px;top:161px}.nsl-25{left:49px;top:72px}.nsl-50{left:165px;top:2px}
.nsl-75{right:46px;top:72px}.nsl-100{right:8px;top:161px}
.north-speedometer-needle{
  position:absolute;left:50%;top:163px;width:142px;height:4px;z-index:8;
  transform-origin:0 50%;
  transform:rotate(calc(-180deg + (var(--gauge) * 1.8deg)));
  transition:transform .85s cubic-bezier(.2,.8,.2,1);
  filter:drop-shadow(0 0 10px var(--score-glow));
}
.north-speedometer-needle:before{
  content:"";display:block;width:100%;height:100%;
  background:linear-gradient(90deg,#fff,var(--score-color));
  clip-path:polygon(0 20%,100% 50%,0 80%);
}
.north-speedometer-needle i{
  position:absolute;left:-10px;top:-8px;width:20px;height:20px;border-radius:50%;
  background:radial-gradient(circle,#fff 0 16%,var(--score-color) 20% 48%,#07111d 52%);
  box-shadow:0 0 18px var(--score-glow);
}
.quality-gauge.north-speedometer .gauge-inner{
  position:absolute!important;left:50%;top:93px;transform:translateX(-50%);
  width:178px!important;height:120px!important;border-radius:60px 60px 16px 16px!important;
  background:radial-gradient(circle at 50% 20%,rgba(255,255,255,.045),transparent 52%)!important;
  z-index:7;display:flex!important;color:white;
}
.quality-gauge.north-speedometer .gauge-inner span{font-size:9px!important;color:#9eb1c4!important;letter-spacing:.14em}
.quality-gauge.north-speedometer .gauge-inner strong{font-size:62px!important;line-height:.9;margin:8px 0 2px!important}
.quality-gauge.north-speedometer .gauge-inner>b{font-size:16px;color:#eef6ff}
.quality-gauge.north-speedometer .gauge-inner small{font-size:11px!important;color:var(--score-color)!important;font-weight:800;margin-top:7px}
.quality-gauge.north-speedometer .gauge-inner em{font-size:7px!important;color:#b7c5d3!important;margin-top:3px}

.north-grade-seal{text-align:center;padding:11px 4px;border-left:1px solid rgba(255,255,255,.08)}
.north-grade-seal span{font-size:9px;text-transform:uppercase;letter-spacing:.14em;color:#9cafc2}
.north-grade-seal strong{display:block;font-size:76px;line-height:1;margin:7px 0;font-weight:900}
.north-grade-seal small{font-size:10px;color:#d1dce7}

.north-home-score-card{display:grid!important;grid-template-columns:88px 1fr;gap:12px;align-items:center!important}
.north-home-gauge{
  --gauge:0;--score-color:#ff8a16;--score-glow:rgba(255,138,22,.7);
  width:78px;height:78px;border-radius:50%;
  background:conic-gradient(var(--score-color) calc(var(--gauge)*1%),#dce3eb 0);
  display:grid;place-items:center;box-shadow:0 0 18px var(--score-glow);
}
.north-home-gauge:before{content:"";position:absolute;width:61px;height:61px;border-radius:50%;background:var(--bg1)}
.north-home-gauge>div{position:relative;z-index:1;text-align:center}
.north-home-gauge span{font-size:6px!important;color:var(--text2)!important}
.north-home-gauge strong{font-size:20px!important;margin:2px 0!important}
.north-home-score-copy>strong{font-size:28px!important}
.north-home-score-copy>span{font-size:8px!important}

body.dark .north-home-gauge:before{background:#091521}
body.dark .north-home-score-card{background:linear-gradient(135deg,#071522,#0c2032)!important}
body.dark .north-home-score-copy>strong{color:#fff}

@media(max-width:1240px){
  .north-score-cockpit{grid-template-columns:1fr!important}
  .north-cockpit-panel{grid-template-columns:210px 1fr 120px}
}
@media(max-width:850px){
  .north-cockpit-panel{grid-template-columns:1fr!important}
  .fi-gauge-summary{order:2}.north-grade-seal{border-left:0;border-top:1px solid rgba(255,255,255,.08)}
  .north-speedometer-shell{min-width:0}
}
@media(max-width:520px){
  .quality-gauge.north-speedometer{transform:scale(.82);transform-origin:center}
  .north-speedometer-shell{height:190px}
}


/* NORTH CAPITAL · BUILD 14.2 · INTELLIGENCE COCKPIT MATCH
   Reproduces the approved four-column composition:
   introduction | pillars | speedometer | grade */
.north-score-cockpit{
  grid-template-columns:minmax(310px,1.05fr) minmax(245px,.82fr) minmax(400px,1.33fr) minmax(180px,.58fr)!important;
  gap:0!important;
  min-height:286px!important;
  padding:0!important;
  align-items:stretch!important;
  background:
    radial-gradient(circle at 68% 48%,rgba(0,145,255,.10),transparent 23%),
    linear-gradient(108deg,#061321 0%,#071a2b 45%,#061522 100%)!important;
  border:1px solid rgba(64,149,211,.34)!important;
  border-radius:15px!important;
  overflow:hidden!important;
}
.north-score-intro{
  grid-column:1;
  padding:38px 30px 30px 34px!important;
  justify-content:center!important;
  border-right:1px solid rgba(93,158,202,.14);
}
.north-score-intro h2{
  font-size:28px!important;
  line-height:1.1!important;
  margin:12px 0 12px!important;
}
.north-score-intro>p{
  max-width:350px!important;
  font-size:11px!important;
  line-height:1.65!important;
}
.north-score-message{
  margin-top:22px!important;
  padding:12px 14px!important;
  max-width:355px;
  border-radius:10px!important;
  background:rgba(3,17,29,.52)!important;
}
.north-score-message strong{font-size:13px!important}
.north-score-message small{font-size:8px!important}

.north-cockpit-panel{
  display:contents!important;
}
.fi-gauge-summary{
  grid-column:2;
  width:auto!important;
  padding:26px 22px!important;
  display:flex!important;
  flex-direction:column!important;
  justify-content:center!important;
  gap:12px!important;
  background:linear-gradient(180deg,rgba(5,25,41,.78),rgba(7,22,36,.56));
  border-right:1px solid rgba(93,158,202,.14);
}
.fi-gauge-summary-row{
  grid-template-columns:34px 1fr 30px!important;
  gap:8px!important;
}
.fi-gauge-summary-row u{
  width:34px!important;height:34px!important;border-radius:8px!important;
}
.fi-gauge-summary-row span{font-size:10px!important}
.fi-gauge-summary-row>b{font-size:11px!important}
.fi-gauge-summary-row>i{
  height:7px!important;
  border-radius:4px!important;
}

.north-speedometer-shell{
  grid-column:3;
  min-width:0!important;
  height:auto!important;
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  padding:11px 4px 0!important;
  background:
    radial-gradient(circle at 50% 50%,rgba(255,148,22,.12),transparent 30%);
}
.quality-gauge.north-speedometer{
  width:390px!important;
  height:245px!important;
  transform:none!important;
}
.north-speedometer-track{
  left:20px!important;
  right:20px!important;
  top:13px!important;
  height:350px!important;
  border-radius:350px 350px 0 0!important;
  filter:
    drop-shadow(0 0 7px rgba(255,47,47,.80))
    drop-shadow(0 0 12px rgba(255,153,0,.66))
    drop-shadow(0 0 17px rgba(151,238,39,.58))
    drop-shadow(0 0 20px rgba(31,223,133,.40))!important;
}
.north-speedometer-track:before{inset:18px!important;background:#061321!important}
.north-speedometer-track:after{inset:34px!important}
.north-speedometer-ticks span{
  top:29px!important;
  height:19px!important;
  transform-origin:50% 157px!important;
}
.nsl-0{left:14px!important;top:181px!important}
.nsl-25{left:52px!important;top:80px!important}
.nsl-50{left:190px!important;top:0!important}
.nsl-75{right:48px!important;top:80px!important}
.nsl-100{right:3px!important;top:181px!important}
.north-speedometer-needle{
  left:50%!important;
  top:187px!important;
  width:158px!important;
  height:3px!important;
  opacity:.72;
}
.quality-gauge.north-speedometer .gauge-inner{
  top:103px!important;
  width:208px!important;
  height:136px!important;
}
.quality-gauge.north-speedometer .gauge-inner span{
  font-size:9px!important;
  margin-bottom:1px!important;
}
.quality-gauge.north-speedometer .gauge-inner strong{
  font-size:68px!important;
  line-height:.88!important;
  margin:7px 0 0!important;
}
.quality-gauge.north-speedometer .gauge-inner>b{
  font-size:28px!important;
  line-height:1!important;
  margin-top:7px!important;
}
.quality-gauge.north-speedometer .gauge-inner small{
  font-size:10px!important;
  margin-top:8px!important;
}
.quality-gauge.north-speedometer .gauge-inner em{
  font-size:7px!important;
}

.north-grade-seal{
  grid-column:4;
  padding:34px 20px 26px!important;
  border-left:1px solid rgba(93,158,202,.14)!important;
  display:flex!important;
  flex-direction:column!important;
  align-items:center!important;
  justify-content:center!important;
  background:linear-gradient(180deg,rgba(6,23,38,.76),rgba(4,17,29,.54));
}
.north-grade-seal span{
  font-size:11px!important;
  letter-spacing:.15em!important;
}
.north-grade-seal strong{
  font-size:88px!important;
  line-height:.93!important;
  margin:14px 0 11px!important;
}
.north-grade-seal small{
  font-size:12px!important;
  font-weight:800!important;
}
.north-grade-seal p{
  max-width:145px;
  margin:12px auto 0;
  color:#c9d5df;
  font-size:10px;
  line-height:1.45;
  text-align:center;
}

/* Keep the page below the cockpit compact, as in the approved mockup */
#pg-fi .fi-recommendations{
  margin-top:10px!important;
}
#pg-fi .fi-recommendations .fi-rec{
  min-height:68px;
}
#pg-fi .fi-stats{
  margin-top:10px!important;
}

/* Hide duplicated diagnosis block below the main cockpit:
   its content is now integrated into the left column. */
#pg-fi .north-executive-diagnosis{
  display:none!important;
}

/* The approved mockup is a desktop terminal composition.
   Preserve it at common notebook resolutions instead of stacking early. */
@media(max-width:1180px){
  .north-score-cockpit{
    grid-template-columns:minmax(270px,.95fr) minmax(210px,.72fr) minmax(350px,1.2fr) minmax(145px,.5fr)!important;
  }
  .north-score-intro{padding-left:25px!important;padding-right:20px!important}
  .quality-gauge.north-speedometer{transform:scale(.91)!important}
  .north-grade-seal strong{font-size:73px!important}
}
@media(max-width:930px){
  .north-score-cockpit{
    grid-template-columns:1fr 1fr!important;
  }
  .north-score-intro{grid-column:1}
  .fi-gauge-summary{grid-column:2}
  .north-speedometer-shell{grid-column:1}
  .north-grade-seal{grid-column:2}
}


/* ═══════════════════════════════════════════════════════════
   BUILD 14.3 · APPROVED REFERENCE MATCH
   Full intelligence dashboard reconstruction
   ═══════════════════════════════════════════════════════════ */
#pg-fi{padding:10px 15px 18px!important;background:#020d18!important;color:#f5f8fc}
#pg-fi .nc-intelligence-dashboard{
  --nc-bg:#020d18;--nc-panel:#051625;--nc-panel2:#071b2c;--nc-line:#17344b;
  --nc-text:#f6f8fb;--nc-muted:#a9b7c6;--nc-blue:#0983ff;--nc-green:#17d985;
  --nc-orange:#ff6817;--nc-red:#ff303f;--nc-yellow:#ffd21f;--nc-purple:#8136f4;
  font-family:Inter,Segoe UI,Arial,sans-serif;
}
#pg-fi .nc-panel{
  background:linear-gradient(145deg,rgba(5,24,40,.98),rgba(3,17,29,.98));
  border:1px solid var(--nc-line);border-radius:9px;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.02),0 8px 20px rgba(0,0,0,.14);
}
.nc-top-grid{
  display:grid;grid-template-columns:1.08fr .78fr 1.1fr .72fr;gap:10px;min-height:270px;
}
.nc-intro-panel{padding:27px 25px;display:flex;flex-direction:column;justify-content:center}
.nc-build-label{font-size:10px;color:#138fff;font-weight:800;letter-spacing:.08em}
.nc-intro-panel h2{font-size:25px;line-height:1.12;margin:13px 0 11px;color:#fff}
.nc-intro-panel>p{font-size:11px;line-height:1.55;color:#d8e2ed;max-width:350px}
.nc-diagnosis-box{margin-top:18px;padding:13px 14px;border:1px solid #16384f;border-radius:7px;background:#041321}
.nc-diagnosis-box span{font-size:8px;color:#bdc9d5;letter-spacing:.05em}
.nc-diagnosis-box strong{display:block;font-size:12px;margin:7px 0;color:#fff}
.nc-diagnosis-box small{font-size:8px;color:#b8c5d2;line-height:1.45}

.nc-pillars-panel{padding:16px 20px;display:flex;align-items:center}
.nc-pillar-list{width:100%;display:flex;flex-direction:column;gap:12px}
.nc-pillar-item{display:grid;grid-template-columns:34px 1fr 28px;gap:10px;align-items:center}
.nc-pillar-item>i{width:34px;height:34px;border-radius:6px;display:grid;place-items:center;font-style:normal;font-size:18px;font-weight:900}
.nc-pillar-item.green>i{background:rgba(18,218,129,.16);color:#19df88;border:1px solid rgba(25,223,136,.2)}
.nc-pillar-item.yellow>i{background:rgba(255,211,31,.14);color:#ffe020;border:1px solid rgba(255,224,32,.22)}
.nc-pillar-item.red>i{background:rgba(255,48,63,.16);color:#ff3c4e;border:1px solid rgba(255,60,78,.22)}
.nc-pillar-item.blue>i{background:rgba(0,130,255,.17);color:#168eff;border:1px solid rgba(22,142,255,.22)}
.nc-pillar-item.purple>i{background:rgba(124,52,244,.18);color:#9d5bff;border:1px solid rgba(157,91,255,.22)}
.nc-pillar-item>div span{display:block;font-size:10px;font-weight:700;color:#f1f5fa;margin-bottom:7px}
.nc-pillar-item>div em{display:block;height:5px;border-radius:5px;background:#183247;overflow:hidden}
.nc-pillar-item>div em b{display:block;height:100%;border-radius:5px}
.nc-pillar-item.green em b{background:#20dc82}.nc-pillar-item.yellow em b{background:#ffd320}
.nc-pillar-item.red em b{background:#ff3447}.nc-pillar-item.blue em b{background:#15a8f4}
.nc-pillar-item.purple em b{background:#8f43ed}
.nc-pillar-item>strong{font-size:11px;color:#fff;text-align:right}

.nc-gauge-panel{position:relative;display:grid;place-items:center;overflow:hidden;min-width:0}
.nc-gauge-svg{width:100%;height:100%;overflow:visible}
.nc-gauge-shadow{fill:none;stroke:#10283b;stroke-width:36;stroke-linecap:butt}
.nc-gauge-arc{fill:none;stroke:url(#ncGaugeGradient);stroke-width:32;stroke-linecap:butt;filter:url(#ncGaugeGlow)}
.nc-gauge-segments path{fill:none;stroke:rgba(255,255,255,.72);stroke-width:1.5}
.nc-gauge-labels text{font-size:12px;fill:#fff;font-weight:700;text-anchor:middle}
.nc-gauge-needle{transform-origin:230px 225px;transition:transform .9s cubic-bezier(.17,.84,.32,1)}
.nc-gauge-needle line{stroke:#d9e7f2;stroke-width:2;filter:drop-shadow(0 0 6px rgba(255,255,255,.7))}
.nc-gauge-needle circle:first-of-type{fill:#ff721e;filter:drop-shadow(0 0 10px rgba(255,93,27,.8))}
.nc-gauge-needle circle:last-of-type{fill:#fff}
.nc-gauge-value{position:absolute;left:50%;top:53%;transform:translate(-50%,-50%);text-align:center;pointer-events:none}
.nc-gauge-value span{font-size:9px;letter-spacing:.13em;color:#b9c8d7}
.nc-gauge-value strong{display:block;font-size:61px;line-height:.9;color:#ff6817;text-shadow:0 0 20px rgba(255,104,23,.65);margin:9px 0 5px}
.nc-gauge-value b{display:block;font-size:23px;color:#fff}
.nc-gauge-value small{display:block;font-size:10px;color:#ff7b23;font-weight:800;margin-top:8px}
.nc-gauge-value em{display:block;font-style:normal;font-size:7px;color:#d8e3ed;margin-top:5px}

.nc-grade-panel{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px}
.nc-grade-panel>span{font-size:12px;letter-spacing:.12em;color:#d6dfe9}
.nc-grade-panel>strong{font-size:88px;line-height:.95;color:#ff6817;text-shadow:0 0 22px rgba(255,104,23,.45);margin:10px 0}
.nc-grade-panel h3{font-size:13px;color:#ff7b23;margin:0 0 12px}
.nc-grade-panel p{font-size:11px;line-height:1.5;color:#e0e7ee;max-width:155px}

.nc-recommendations-panel{margin-top:10px;padding:8px 9px 10px}
.nc-panel-title{font-size:10px;letter-spacing:.04em;color:#dbe5ee;margin-bottom:8px}
.nc-recommendations-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.nc-recommendations-grid article{display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:center;padding:10px;border:1px solid #15344c;border-radius:7px;background:#061727}
.nc-recommendations-grid article>b{width:31px;height:31px;border-radius:50%;display:grid;place-items:center;background:#ff6817;color:#fff;font-size:14px}
.nc-recommendations-grid article:nth-child(2)>b{background:#087cff}.nc-recommendations-grid article:nth-child(3)>b{background:#8239ee}
.nc-recommendations-grid strong{display:block;font-size:11px;color:#fff;margin-bottom:4px}.nc-recommendations-grid small{font-size:9px;color:#bcc8d4}

.nc-mid-grid{display:grid;grid-template-columns:1.06fr .88fr 1.2fr;gap:10px;margin-top:10px}
.nc-panel-head{display:flex;align-items:center;justify-content:space-between;font-size:10px;color:#e6edf4;padding:9px 12px 5px}
.nc-panel-head select{background:#071a2b;color:#e7edf4;border:1px solid #1a3a53;border-radius:6px;padding:5px 9px;font-size:9px}
.nc-heatmap-panel{padding-bottom:9px}.nc-heatmap{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:72px;gap:5px;padding:0 9px}
.nc-heatmap article{position:relative;border-radius:5px;padding:10px;border:1px solid rgba(255,255,255,.11);overflow:hidden}
.nc-heatmap article.wide{grid-column:span 2}.nc-heatmap article.medium{grid-column:span 1}.nc-heatmap article.small{grid-column:span 1}
.nc-heatmap article.hot{background:linear-gradient(135deg,#a82410,#d35a00);border-color:#f06a10}
.nc-heatmap article.good{background:linear-gradient(135deg,#065525,#0b7131);border-color:#159548}
.nc-heatmap article.neutral{background:linear-gradient(135deg,#0c1b2c,#10263c);border-color:#20405b}
.nc-heatmap strong{display:block;font-size:11px}.nc-heatmap b{display:block;font-size:18px;margin-top:3px}.nc-heatmap small{font-size:8px}.nc-heatmap em{position:absolute;right:8px;bottom:5px;font-size:23px;font-style:normal;color:#b9e96c;font-weight:800}

.nc-sector-panel{padding:11px 14px}.nc-sector-list{display:flex;flex-direction:column;gap:5px}
.nc-sector-row{display:grid;grid-template-columns:145px 1fr 46px;align-items:center;gap:7px;font-size:9px}
.nc-sector-row span{color:#e0e8ef}.nc-sector-row i{height:3px;background:#193247;border-radius:3px;overflow:hidden}.nc-sector-row i b{display:block;height:100%;background:#087cff}.nc-sector-row strong{text-align:right;font-size:9px}

.nc-right-stack{display:grid;grid-template-rows:1fr .9fr;gap:10px}
.nc-currency-panel,.nc-quick-panel{padding:10px 12px}
.nc-currency-layout{display:grid;grid-template-columns:180px 1fr;align-items:center}
.nc-currency-donut{--brl:78;width:125px;height:125px;border-radius:50%;margin:auto;background:conic-gradient(#0786ff 0 calc(var(--brl)*1%),#0cb67d 0);position:relative}
.nc-currency-donut:after{content:"";position:absolute;inset:25px;background:#051625;border-radius:50%}
.nc-currency-legend{display:flex;flex-direction:column;gap:14px}
.nc-currency-legend>div{display:grid;grid-template-columns:12px 1fr 50px;gap:8px;align-items:center}.nc-currency-legend i{width:9px;height:9px;border-radius:50%}.nc-currency-legend i.blue{background:#0786ff}.nc-currency-legend i.green{background:#0cb67d}.nc-currency-legend span,.nc-currency-legend strong{font-size:11px}
.nc-quick-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}
.nc-quick-grid article{border:1px solid #23405a;border-radius:5px;padding:7px;background:#071827}
.nc-quick-grid article span{display:block;font-size:7px;margin-bottom:5px}.nc-quick-grid article strong{display:block;font-size:13px}.nc-quick-grid article small{font-size:7px}
.nc-quick-grid .green{border-color:#0b6b48;background:rgba(11,107,72,.14)}.nc-quick-grid .green span,.nc-quick-grid .green small{color:#35df91}
.nc-quick-grid .amber{border-color:#735d12;background:rgba(115,93,18,.13)}.nc-quick-grid .amber span,.nc-quick-grid .amber small{color:#ffd433}
.nc-quick-grid .red{border-color:#772733;background:rgba(119,39,51,.13)}.nc-quick-grid .red span,.nc-quick-grid .red small{color:#ff5b68}
.nc-quick-grid .blue{border-color:#114a75;background:rgba(17,74,117,.13)}.nc-quick-grid .blue span,.nc-quick-grid .blue small{color:#1b9bff}

.nc-bottom-grid{display:grid;grid-template-columns:1.35fr .48fr .78fr;gap:10px;margin-top:10px}
.nc-chart-panel{min-height:180px}.nc-line-chart{position:relative;height:145px;padding:0 8px 8px}.nc-line-chart svg{width:100%;height:100%}
.nc-chart-grid line{stroke:#173349;stroke-width:1}.nc-chart-line{fill:none;stroke:#087cff;stroke-width:2}.nc-chart-area{fill:url(#ncArea)}.nc-line-chart circle{fill:#087cff;stroke:#59b2ff;stroke-width:1}.nc-line-chart text{fill:#aebdca;font-size:9px}
.nc-chart-tooltip{position:absolute;right:18px;top:32px;background:#071827;border:1px solid #173b5a;border-radius:6px;padding:8px 10px}.nc-chart-tooltip span{display:block;font-size:9px}.nc-chart-tooltip strong{font-size:10px}
.nc-events-panel{padding:10px}.nc-events-list{display:flex;flex-direction:column;gap:11px}.nc-event{display:grid;grid-template-columns:25px 1fr 63px;gap:7px;align-items:center}.nc-event>i{width:24px;height:24px;border-radius:6px;display:grid;place-items:center;font-style:normal;font-size:10px}.nc-event>i.orange{background:#df5b16}.nc-event>i.green{background:#159557}.nc-event>i.lime{background:#6a9616}.nc-event strong{display:block;font-size:9px}.nc-event small{font-size:8px;color:#aab8c6}.nc-event time{font-size:7px;color:#aab8c6;text-align:right}
.nc-summary-panel{padding:12px 15px;display:flex;flex-direction:column}.nc-summary-copy p{font-size:9px;line-height:1.55;color:#d5dfe8;margin:0 0 9px}.nc-summary-panel button{margin-top:auto;border:0;background:none;color:#1594ff;text-align:left;font-size:9px;padding:0;cursor:pointer}.nc-summary-panel button span{font-size:14px}

#pg-fi .fi-kpis,#pg-fi .north-grade-row,#pg-fi .fi-health-grid,#pg-fi .north-intelligence-grid,#pg-fi .fi-grid,#pg-fi .fi-conviction-table,#pg-fi .north-executive-diagnosis{display:none!important}

@media(max-width:1180px){
  .nc-top-grid{grid-template-columns:1fr .85fr 1.12fr .62fr}
  .nc-intro-panel{padding:22px 18px}.nc-intro-panel h2{font-size:22px}
  .nc-gauge-value strong{font-size:52px}.nc-grade-panel>strong{font-size:72px}
}
@media(max-width:950px){
  .nc-top-grid{grid-template-columns:1fr 1fr}.nc-mid-grid{grid-template-columns:1fr 1fr}.nc-right-stack{grid-column:1/-1;grid-template-columns:1fr 1fr;grid-template-rows:auto}
  .nc-bottom-grid{grid-template-columns:1fr 1fr}.nc-summary-panel{grid-column:1/-1}.nc-recommendations-grid{grid-template-columns:1fr}
}


/* ═══════════════════════════════════════════════════════════════
   NORTH CAPITAL 3.0 · BUILD 15.0 · EXECUTIVE DESIGN SYSTEM
   ═══════════════════════════════════════════════════════════════ */
:root{
  --nc15-bg:#030d18;--nc15-bg2:#071422;--nc15-panel:#071827;--nc15-panel2:#0a1c2d;
  --nc15-border:#17344d;--nc15-border-soft:rgba(82,143,190,.18);
  --nc15-text:#f4f7fb;--nc15-muted:#9cabb9;--nc15-blue:#1976ff;--nc15-green:#20c978;
  --nc15-yellow:#f5bc27;--nc15-red:#ef4d54;--nc15-purple:#8852e8;
  --nc15-shadow:0 15px 38px rgba(0,0,0,.22);
}
body{background:radial-gradient(circle at 65% 0,#0a2034 0,#04111f 34%,#020a13 100%)!important}
#app{padding-left:214px;padding-top:92px;min-height:100vh;background:transparent!important}
.nc15-topbar{
  position:fixed;left:0;right:0;top:0;height:88px;z-index:1000;
  display:grid;grid-template-columns:280px 205px 310px 1fr auto;align-items:center;gap:15px;
  padding:0 22px;background:rgba(2,12,22,.92);border-bottom:1px solid rgba(43,93,132,.35);
  backdrop-filter:blur(22px);box-shadow:0 6px 30px rgba(0,0,0,.25);
}
.nc15-brand{display:flex;align-items:center;gap:12px}.nc15-brand img{width:46px;height:46px}.nc15-brand strong{display:block;font-size:19px;color:#fff}.nc15-brand span{font-size:8px;color:#d5ad64;letter-spacing:.14em;text-transform:uppercase}
.nc15-mission-status,.nc15-score-header,.nc15-market-status,.nc15-header-actions{height:54px;border:1px solid rgba(52,101,137,.24);background:rgba(4,20,34,.58);border-radius:11px}
.nc15-mission-status{display:flex;align-items:center;gap:10px;padding:0 15px}.nc15-mission-status>i{width:9px;height:9px;border-radius:50%;background:#20d77d;box-shadow:0 0 12px #20d77d}.nc15-mission-status strong,.nc15-mission-status span{display:block}.nc15-mission-status strong{font-size:10px}.nc15-mission-status span{font-size:8px;color:var(--nc15-muted)}
.nc15-score-header{display:flex;align-items:center;padding:0 16px;gap:8px}.nc15-score-header span{font-size:8px;color:var(--nc15-muted)}.nc15-score-header strong{font-size:27px;color:#1cda82}.nc15-score-header b{font-size:12px}.nc15-score-header em{color:#f1b934;font-style:normal;letter-spacing:2px}.nc15-score-header small{font-size:8px;color:#36d78d}
.nc15-market-status{justify-self:end;display:flex;align-items:center;gap:10px;padding:0 15px;font-size:8px}.nc15-market-status span{color:#25d982}.nc15-market-status b{color:var(--nc15-muted)}.nc15-market-status strong{font-size:12px}
.nc15-header-actions{display:flex;align-items:center;gap:10px;padding:0 10px}.nc15-icon-btn{position:relative;border:0;background:#0a2136;color:#fff;width:35px;height:35px;border-radius:50%;cursor:pointer}.nc15-icon-btn sup{position:absolute;right:-2px;top:-5px;background:#1976ff;border-radius:8px;padding:2px 5px;font-size:7px}.nc15-user{display:flex;align-items:center;gap:9px;padding-right:6px}.nc15-user>b{width:34px;height:34px;border-radius:50%;background:#123252;display:grid;place-items:center}.nc15-user strong,.nc15-user span{display:block}.nc15-user strong{font-size:10px}.nc15-user span{font-size:7px;color:var(--nc15-muted)}
.nc15-sidebar{position:fixed;left:0;top:88px;bottom:0;width:214px;z-index:900;padding:18px 13px;display:flex;flex-direction:column;background:rgba(2,11,20,.94);border-right:1px solid rgba(43,93,132,.34);backdrop-filter:blur(20px);overflow:auto}
.nc15-sidebar nav{display:flex;flex-direction:column;gap:4px}.nc15-sidebar button{width:100%;height:42px;border:1px solid transparent;background:transparent;color:#aeb9c5;border-radius:7px;display:flex;align-items:center;gap:13px;padding:0 14px;font-size:11px;cursor:pointer;text-align:left}.nc15-sidebar button i{font-size:17px;font-style:normal;width:22px;text-align:center}.nc15-sidebar nav button.on,.nc15-sidebar button:hover{color:#fff;background:linear-gradient(90deg,#0c3c76,#09294e);border-color:#16559a;box-shadow:inset 0 0 18px rgba(23,109,222,.16)}
.nc15-sidebar-tools{border-top:1px solid rgba(58,100,132,.25);margin-top:12px;padding-top:12px}.nc15-sidebar-tools button{height:35px;font-size:9px}
.nc15-sidebar-card{margin-top:auto;padding:17px;border-radius:9px;background:linear-gradient(145deg,#0b3d80,#071d39);border:1px solid #15569e;min-height:190px;overflow:hidden}.nc15-sidebar-card span,.nc15-sidebar-card strong{display:block}.nc15-sidebar-card span{font-size:13px}.nc15-sidebar-card strong{font-size:15px}.nc15-sidebar-card p{font-size:9px;color:#d3dfeb;line-height:1.5}.nc15-orbit{position:relative;width:110px;height:110px;margin:9px auto 0;border:1px solid rgba(125,183,240,.28);border-radius:50%}.nc15-orbit:before,.nc15-orbit:after{content:"";position:absolute;inset:17px;border:1px solid rgba(125,183,240,.25);border-radius:50%}.nc15-orbit:after{inset:35px}.nc15-orbit b{position:absolute;left:50%;top:50%;width:11px;height:11px;border-radius:50%;background:#f3df83;transform:translate(-50%,-50%);box-shadow:0 0 20px #f3df83}
.nc15-mobile-nav{display:none}.tabs,.hdr{display:none!important}
.pg{margin:0!important;max-width:none!important}.pg:not(.on){display:none!important}

.nc15-dashboard-page{padding:0 15px 22px!important;color:var(--nc15-text);font-family:Inter,Segoe UI,Arial,sans-serif}
.nc15-market-ribbon{height:28px;display:flex;justify-content:flex-end;align-items:center;gap:22px;color:#aab8c6;font-size:8px;padding:0 8px}.nc15-market-ribbon b{color:#24d67d}.nc15-market-ribbon em{color:#28cc7b;font-style:normal}
.nc15-dashboard-grid{display:grid;gap:10px;margin-bottom:10px}.nc15-row-one{grid-template-columns:1.28fr 1.02fr .95fr 1.75fr}.nc15-row-two{grid-template-columns:1.2fr 1.65fr 1.05fr .82fr}.nc15-row-three{grid-template-columns:1.15fr 1.05fr 1.3fr .82fr}
.nc15-card{position:relative;background:linear-gradient(145deg,rgba(8,28,45,.96),rgba(4,18,31,.96));border:1px solid var(--nc15-border);border-radius:9px;box-shadow:inset 0 1px 0 rgba(255,255,255,.025),var(--nc15-shadow);overflow:hidden}
.nc15-card:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,.025),transparent 32%);pointer-events:none}
.nc15-card-head{height:37px;display:flex;align-items:center;justify-content:space-between;padding:0 13px;text-transform:uppercase;font-size:9px;letter-spacing:.04em}.nc15-card-head small{font-size:7px;color:#2185ee;text-transform:none}
.nc15-wealth-card,.nc15-performance-card,.nc15-dollar-card,.nc15-allocation-card{min-height:180px;padding:17px}
.nc15-wealth-card>span,.nc15-performance-card span,.nc15-dollar-card span{font-size:9px;text-transform:uppercase;letter-spacing:.05em;color:#c4cdd6}.nc15-wealth-card>strong{display:block;font-size:30px;margin:8px 0 14px}.nc15-wealth-stats{display:flex;gap:40px}.nc15-wealth-stats small{display:flex;flex-direction:column;color:#aeb9c5;font-size:8px}.nc15-wealth-stats b{color:#29c879;font-size:10px;margin-bottom:3px}.nc15-sparkline{height:60px;margin-top:10px}
.nc15-performance-card{display:grid;grid-template-columns:1fr 1px 1fr;gap:15px;align-items:center}.nc15-performance-card hr,.nc15-dollar-card hr{border:0;background:#18344a;width:1px;height:70%}.nc15-performance-card strong{display:block;font-size:18px;margin:7px 0}.nc15-performance-card small{color:#27c679;font-size:9px}.nc15-mini-spark{height:45px;grid-column:1/-1}
.nc15-dollar-top{display:grid;grid-template-columns:1fr 1.1fr}.nc15-dollar-top strong{display:block;font-size:18px;margin:6px 0}.nc15-dollar-top small{color:#27c679}.nc15-dollar-card hr{width:100%;height:1px;margin:8px 0}.nc15-dollar-row{display:grid;grid-template-columns:32px 1fr auto;gap:8px;align-items:center;margin:8px 0}.nc15-dollar-row i{width:30px;height:30px;border-radius:7px;background:#092c54;display:grid;place-items:center;color:#2d86ff;font-style:normal}.nc15-dollar-row strong{display:block;font-size:12px}.nc15-dollar-row time{font-size:7px;color:#96a5b5}
.nc15-allocation-layout{display:grid;grid-template-columns:160px 1fr;align-items:center;height:135px}.nc15-allocation-donut{width:135px;height:135px;border-radius:50%;position:relative;display:grid;place-items:center;margin:auto}.nc15-allocation-donut:before{content:"";position:absolute;inset:25px;border-radius:50%;background:#061522}.nc15-allocation-donut b,.nc15-allocation-donut small{position:relative;z-index:1}.nc15-allocation-donut b{font-size:11px}.nc15-allocation-donut small{font-size:7px;margin-top:-48px;color:#a9b5c1}.nc15-allocation-legend{display:flex;flex-direction:column;gap:8px}.nc15-allocation-legend>div{display:grid;grid-template-columns:8px 1fr 40px;gap:8px;align-items:start}.nc15-allocation-legend i{width:7px;height:7px;border-radius:2px;margin-top:3px}.nc15-allocation-legend span{font-size:9px}.nc15-allocation-legend span small{display:block;font-size:7px;color:#8797a6}.nc15-allocation-legend strong{font-size:9px;text-align:right}

.nc15-geo-card,.nc15-evolution-card,.nc15-radar-card,.nc15-events-card{min-height:225px}.nc15-world-map{height:145px;padding:0 13px}.nc15-world-map svg{width:100%;height:100%}.nc15-world-map path{fill:#12365a;stroke:#0e2540;stroke-width:2}.nc15-world-map .am{fill:#1d64d6}.nc15-world-map .eur{fill:#36b462}.nc15-world-map .asia{fill:#e5b71d}.nc15-geo-legend{display:grid;grid-template-columns:repeat(2,1fr);gap:5px 20px;padding:0 15px 12px}.nc15-geo-legend>div{display:grid;grid-template-columns:7px 1fr 38px;gap:7px;font-size:8px}.nc15-geo-legend i{width:6px;height:6px;border-radius:50%}
.nc15-evolution-chart{height:165px;padding:0 10px;position:relative}.nc15-evolution-chart svg{width:100%;height:100%}.nc15-evolution-chart .grid line{stroke:#18344c}.nc15-evolution-chart .line{fill:none;stroke:#247dff;stroke-width:2}.nc15-evolution-chart .area{fill:url(#nc15area)}.nc15-evolution-chart circle{fill:#2081ff;stroke:#8bc5ff;stroke-width:2}.nc15-evolution-chart .tag{position:absolute;right:12px;top:22px;background:#0a5ec5;color:#fff;border-radius:4px;padding:5px 7px;font-size:8px}.nc15-evolution-card button{position:absolute;bottom:7px;left:50%;transform:translateX(-50%);background:none;border:0;color:#2086ee;font-size:8px}
.nc15-radar{height:185px}.nc15-radar svg{width:100%;height:100%}.nc15-radar .grid polygon{fill:none;stroke:#174a78;stroke-width:1}.nc15-radar .value{fill:rgba(30,116,255,.43);stroke:#2f85ff;stroke-width:2}.nc15-radar text{fill:#b9c5d1;font-size:8px}
.nc15-upcoming-events{padding:0 12px}.nc15-upcoming-events>div{display:grid;grid-template-columns:35px 1fr;gap:8px;padding:8px 0;border-bottom:1px solid #153049}.nc15-upcoming-events time{border:1px solid #25445c;border-radius:5px;display:grid;place-items:center}.nc15-upcoming-events time b{font-size:10px}.nc15-upcoming-events time span{font-size:6px}.nc15-upcoming-events strong,.nc15-upcoming-events small{display:block}.nc15-upcoming-events strong{font-size:9px}.nc15-upcoming-events small{font-size:7px;color:#91a0ae}

.nc15-goals-card,.nc15-heatmap-card,.nc15-insights-card{min-height:260px}.nc15-goals-list{padding:0 13px}.nc15-goals-list>div{display:grid;grid-template-columns:31px 1fr 32px;gap:8px;align-items:center;margin:8px 0}.nc15-goals-list>div>i{width:29px;height:29px;border-radius:7px;display:grid;place-items:center;color:var(--c);background:color-mix(in srgb,var(--c) 13%,transparent);font-style:normal}.nc15-goals-list section strong,.nc15-goals-list section span{display:block}.nc15-goals-list section strong{font-size:9px}.nc15-goals-list section span{font-size:7px;color:#a0afbd}.nc15-goals-list section em{display:block;height:4px;background:#173148;border-radius:4px;margin-top:4px;overflow:hidden}.nc15-goals-list section em b{display:block;height:100%}.nc15-goals-list>div>small{font-size:9px;text-align:right}
.nc15-dashboard-heatmap{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;padding:0 12px 12px}.nc15-dashboard-heatmap article{height:50px;border:1px solid color-mix(in srgb,var(--c) 55%,#21354a);border-radius:4px;background:linear-gradient(145deg,color-mix(in srgb,var(--c) 45%,#061522),color-mix(in srgb,var(--c) 22%,#061522));padding:8px;box-shadow:inset 0 0 16px color-mix(in srgb,var(--c) 13%,transparent)}.nc15-dashboard-heatmap strong,.nc15-dashboard-heatmap b{display:block}.nc15-dashboard-heatmap strong{font-size:8px}.nc15-dashboard-heatmap b{font-size:11px;margin-top:4px}
.nc15-insights-list{padding:0 12px}.nc15-insights-list>div{display:grid;grid-template-columns:32px 1fr 12px;gap:9px;align-items:center;padding:9px 0;border-bottom:1px solid #153149}.nc15-insights-list i{width:31px;height:31px;border-radius:50%;display:grid;place-items:center;font-style:normal}.nc15-insights-list i.green{background:#0b4f32;color:#2ce287}.nc15-insights-list i.blue{background:#0d3467;color:#2587ff}.nc15-insights-list i.yellow{background:#51400c;color:#f6c326}.nc15-insights-list i.purple{background:#331a67;color:#9d60ff}.nc15-insights-list strong,.nc15-insights-list span{display:block}.nc15-insights-list strong{font-size:8px}.nc15-insights-list span{font-size:7px;color:#a6b3bf;margin-top:3px}
.nc15-alert-stack{display:grid;grid-template-rows:1.2fr .8fr;gap:10px}.nc15-alerts-list,.nc15-movers-list{padding:0 12px}.nc15-alerts-list>div{display:grid;grid-template-columns:31px 1fr;gap:8px;padding:8px 0;border-bottom:1px solid #153149}.nc15-alerts-list i{width:29px;height:29px;border-radius:50%;display:grid;place-items:center;font-style:normal}.nc15-alerts-list i.yellow{background:#51400c;color:#f5c327}.nc15-alerts-list i.red{background:#521b25;color:#ff5b65}.nc15-alerts-list strong,.nc15-alerts-list span{display:block}.nc15-alerts-list strong{font-size:8px}.nc15-alerts-list span{font-size:7px;color:#98a7b5;margin-top:3px}.nc15-movers-list>div{display:grid;grid-template-columns:18px 1fr 60px;gap:7px;padding:5px 0;font-size:8px}.nc15-movers-list em{text-align:right;font-style:normal}.nc15-movers-list em.pos{color:#23d17c}.nc15-movers-list em.neg{color:#f3565c}

body:not(.dark){--nc15-text:#101827;--nc15-muted:#657184;background:#f3f5f8!important}
body:not(.dark) #app{background:#f4f6f9!important}
body:not(.dark) .nc15-topbar,body:not(.dark) .nc15-sidebar{background:rgba(255,255,255,.94);color:#101827}
body:not(.dark) .nc15-card{background:linear-gradient(145deg,#fff,#f8fafc);border-color:#dce4ec;color:#121a28;box-shadow:0 12px 30px rgba(25,55,85,.08)}
body:not(.dark) .nc15-brand strong,body:not(.dark) .nc15-user strong{color:#111927}
body:not(.dark) .nc15-sidebar button{color:#4d5968}
body:not(.dark) .nc15-allocation-donut:before{background:#fff}
body:not(.dark) .nc15-market-ribbon{color:#596678}

@media(max-width:1280px){
  .nc15-topbar{grid-template-columns:250px 175px 260px 1fr auto}.nc15-row-one{grid-template-columns:1fr 1fr}.nc15-row-two{grid-template-columns:1fr 1.4fr 1fr}.nc15-events-card{grid-column:1/-1}.nc15-row-three{grid-template-columns:1fr 1fr}.nc15-alert-stack{grid-column:1/-1;grid-template-columns:1fr 1fr;grid-template-rows:auto}
}
@media(max-width:900px){
  #app{padding-left:0;padding-top:60px}.nc15-topbar{display:none}.nc15-mobile-nav{position:fixed;top:0;left:0;right:0;height:58px;z-index:1000;display:flex;align-items:center;gap:13px;padding:0 14px;background:#04111f;border-bottom:1px solid #17344d}.nc15-mobile-nav button{border:0;background:none;color:#fff;font-size:22px}.nc15-sidebar{top:58px;transform:translateX(-100%);transition:.25s}.nc15-sidebar-open .nc15-sidebar{transform:translateX(0)}.nc15-row-one,.nc15-row-two,.nc15-row-three{grid-template-columns:1fr}.nc15-alert-stack{grid-column:auto;grid-template-columns:1fr}.nc15-dashboard-page{padding:0 8px 15px!important}
}


/* BUILD 15.1 — FUNCTIONAL + VISUAL CORRECTION */
#app{padding-left:224px;padding-top:78px}
.nc15-topbar{height:76px;grid-template-columns:300px 190px 300px 1fr auto;padding:0 24px;background:linear-gradient(180deg,rgba(2,12,22,.98),rgba(3,16,28,.94));}
.nc15-sidebar{top:76px;width:224px;padding:24px 14px;background:linear-gradient(180deg,rgba(3,13,23,.98),rgba(3,12,21,.96));overflow-y:auto;scrollbar-width:thin;scrollbar-color:#29425a transparent}
.nc15-sidebar::-webkit-scrollbar{width:5px}.nc15-sidebar::-webkit-scrollbar-thumb{background:#29425a;border-radius:5px}
.nc15-brand img{width:50px;height:50px}.nc15-brand strong{font-family:Georgia,serif;font-size:22px;letter-spacing:.02em}.nc15-brand span{font-size:8px;letter-spacing:.22em}
.nc15-mission-status,.nc15-score-header,.nc15-market-status,.nc15-header-actions{height:48px;background:rgba(7,24,40,.72);border-color:rgba(69,118,153,.22)}
.nc15-score-header strong{font-size:29px}.nc15-score-header em{font-size:14px}.nc15-market-status{min-width:210px}
.nc15-sidebar nav button{height:44px;font-size:11px;border-radius:8px}.nc15-sidebar nav button.on{background:linear-gradient(90deg,#0a376b 0,#082c55 100%);box-shadow:inset 0 0 22px rgba(30,117,255,.22),0 0 0 1px rgba(35,124,229,.25)}
.nc15-market-ribbon{height:34px;padding:0 14px;font-size:9px}
.nc15-dashboard-page{max-width:1600px!important;margin:0 auto!important;padding:0 14px 24px!important}
.nc15-dashboard-grid{gap:12px;margin-bottom:12px}.nc15-card{border-radius:11px;border-color:#183a55;background:linear-gradient(145deg,rgba(8,27,44,.98),rgba(4,16,28,.98));box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 16px 38px rgba(0,0,0,.24)}
.nc15-row-one{grid-template-columns:1.25fr 1fr .95fr 1.65fr}.nc15-row-two{grid-template-columns:1.22fr 1.55fr 1.08fr .86fr}.nc15-row-three{grid-template-columns:1.13fr 1.08fr 1.28fr .86fr}
.nc15-wealth-card,.nc15-performance-card,.nc15-dollar-card,.nc15-allocation-card{min-height:190px;padding:20px}.nc15-wealth-card>strong{font-size:34px}.nc15-card-head{height:42px;font-size:10px;padding:0 15px}.nc15-allocation-layout{height:145px}.nc15-allocation-donut{width:145px;height:145px}
.nc15-geo-card,.nc15-evolution-card,.nc15-radar-card,.nc15-events-card{min-height:245px}.nc15-goals-card,.nc15-heatmap-card,.nc15-insights-card{min-height:275px}
.nc15-world-map{height:160px}.nc15-radar{height:200px}.nc15-evolution-chart{height:180px}
.nc15-dashboard-heatmap article{height:55px;padding:9px}.nc15-dashboard-heatmap strong{font-size:9px}.nc15-dashboard-heatmap b{font-size:12px}
.nc15-topbar,.nc15-sidebar,.nc15-card{-webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}

/* Ensure migrated legacy pages have visible executive surfaces */
.pg:not(#pg-vg){padding:24px 26px 40px!important;color:#edf4fb;max-width:1600px!important;margin:0 auto!important}
.pg:not(#pg-vg) .card,.pg:not(#pg-vg) .hero,.pg:not(#pg-vg) .panel,.pg:not(#pg-vg) .info-box,.pg:not(#pg-vg) .north-section,.pg:not(#pg-vg) .north-card{background:linear-gradient(145deg,rgba(8,27,44,.94),rgba(4,16,28,.94))!important;border-color:#183a55!important;box-shadow:0 12px 30px rgba(0,0,0,.16)!important}
.pg:not(#pg-vg) input,.pg:not(#pg-vg) select,.pg:not(#pg-vg) textarea{background:#0a1c2e!important;color:#edf4fb!important;border-color:#254763!important}
.pg:not(#pg-vg) table{color:#e8f0f8}.pg:not(#pg-vg) th{color:#8da8c0;border-color:#29445d}.pg:not(#pg-vg) td{border-color:#1a354d}

@media(max-width:1280px){#app{padding-left:200px}.nc15-sidebar{width:200px}.nc15-topbar{grid-template-columns:260px 165px 250px 1fr auto;padding:0 16px}.nc15-row-one{grid-template-columns:1fr 1fr}.nc15-row-two{grid-template-columns:1fr 1fr}.nc15-row-three{grid-template-columns:1fr 1fr}}

/* =========================================================
   NORTH CAPITAL 3.1 — BUILD 16.0 — IDENTITY LOCK
   Visual reference is authoritative: references/*.jpeg|png
   ========================================================= */
:root{
  --nc31-bg:#020d18;--nc31-bg-deep:#010812;--nc31-panel:#051625;--nc31-panel-hi:#081c2d;
  --nc31-border:#17344b;--nc31-border-hi:#24516f;--nc31-blue:#087cff;--nc31-cyan:#13c8ff;
  --nc31-green:#17d985;--nc31-orange:#ff6817;--nc31-red:#ff303f;--nc31-yellow:#ffd21f;
  --nc31-purple:#8136f4;--nc31-text:#f4f7fb;--nc31-muted:#90a4b8;--nc31-gold:#d7a84f;
}
body.dark{background:radial-gradient(circle at 50% 40%,#09243c 0,#031525 35%,#020d18 74%,#010812 100%);color:var(--nc31-text);font-family:Inter,"Segoe UI",Arial,sans-serif;letter-spacing:-.01em}
body.dark:before{content:"";position:fixed;inset:0;pointer-events:none;z-index:-1;background:linear-gradient(rgba(255,255,255,.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.012) 1px,transparent 1px);background-size:32px 32px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.52),transparent 75%)}
.nc15-topbar{background:linear-gradient(180deg,rgba(1,10,19,.99),rgba(2,15,27,.96));border-bottom:1px solid rgba(36,81,111,.7);box-shadow:0 10px 35px rgba(0,0,0,.38)}
.nc31-brand-lockup{width:310px!important;overflow:visible}.nc31-brand-lockup img{width:292px!important;height:auto!important;max-height:62px;object-fit:contain;object-position:left center;filter:drop-shadow(0 0 12px rgba(215,168,79,.1))}
.north-login-lockup img{width:280px!important;height:auto!important;max-width:100%}.north-login-lockup{justify-content:center!important}
.nc15-mission-status,.nc15-score-header,.nc15-market-status,.nc15-header-actions{background:linear-gradient(145deg,rgba(7,25,41,.86),rgba(3,15,26,.72));border:1px solid rgba(36,81,111,.52);box-shadow:inset 0 1px 0 rgba(255,255,255,.025)}
.nc15-sidebar{background:linear-gradient(180deg,rgba(2,13,23,.985),rgba(1,9,17,.985));border-right:1px solid rgba(36,81,111,.62);box-shadow:16px 0 42px rgba(0,0,0,.22)}
.nc15-sidebar nav button{font-weight:500;letter-spacing:.01em;color:#a9b8c7}.nc15-sidebar nav button.on{color:#fff;background:linear-gradient(90deg,rgba(8,124,255,.30),rgba(8,124,255,.08));border-color:rgba(8,124,255,.48);box-shadow:inset 3px 0 0 #087cff,0 0 24px rgba(8,124,255,.12)}
.nc15-card,.pg:not(#pg-vg) .card,.pg:not(#pg-vg) .hero,.pg:not(#pg-vg) .panel,.pg:not(#pg-vg) .north-section,.pg:not(#pg-vg) .north-card{background:linear-gradient(145deg,rgba(7,24,39,.97),rgba(3,15,26,.97))!important;border:1px solid rgba(36,81,111,.72)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 18px 42px rgba(0,0,0,.22)!important}
.nc15-card:hover{border-color:rgba(40,105,148,.86);box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 20px 48px rgba(0,0,0,.28),0 0 26px rgba(8,124,255,.04)}
.nc15-card-head,.ctitle,.lbl,.policy-kicker,.north-kicker{font-weight:700;letter-spacing:.095em;color:#a7b8c8}
.nc15-wealth-card>strong,.nc15-performance-card strong,.nc15-dollar-card strong{font-variant-numeric:tabular-nums;letter-spacing:-.045em}
.nc15-dashboard-page{max-width:1560px!important}.nc15-row-one{grid-template-columns:1.30fr 1fr .97fr 1.58fr}.nc15-row-two{grid-template-columns:1.22fr 1.55fr 1.02fr .88fr}.nc15-row-three{grid-template-columns:1.17fr 1.07fr 1.30fr .88fr}
.nc15-allocation-donut,.north-score-gauge,.north-reference-gauge{filter:saturate(1.18) contrast(1.05) drop-shadow(0 0 14px rgba(8,124,255,.15))}
.nc15-icon-btn{background:#06192a;border:1px solid #173f5d;color:#f5c56a}.nc15-user b{background:linear-gradient(145deg,#0a6bd8,#06469e);box-shadow:0 0 0 1px rgba(50,146,255,.4),0 0 20px rgba(8,124,255,.18)}
.nc15-market-ribbon{background:rgba(2,13,24,.86);border-color:rgba(36,81,111,.42)}
.nc15-sidebar-card{background:radial-gradient(circle at 50% 86%,rgba(8,124,255,.26),transparent 38%),linear-gradient(145deg,#08284d,#061526);border-color:#164b7b}
body.light .nc31-brand-lockup img{filter:none}
@media(max-width:1450px){.nc15-topbar{grid-template-columns:270px 170px 260px 1fr auto}.nc31-brand-lockup{width:270px!important}.nc31-brand-lockup img{width:255px!important}}
@media(max-width:1180px){.nc31-brand-lockup img{width:230px!important}.nc15-row-one,.nc15-row-two,.nc15-row-three{grid-template-columns:1fr 1fr}}

/* Portale Mister (1.0, 08/11/2026). Usa i calcoli e i disegni di Analysis (../app.js, caricato prima di questo file
   con window.PORTALE_MISTER = true) e mostra solo le sezioni scelte da Elisa, una sotto l'altra, alla larghezza del
   telefono. Solo lettura: i dati arrivano dal cloud, i permessi li decide il cloud (tabella analysis_lettori). */
const portale = {tipo: "partite", scelta: null, sezioniNascoste: {}, sessioni: [], caricatoIl: 0, installPrompt: null};
const $p = s => document.querySelector(s);

function mostraSchermata(nome){
  ["#p-accesso", "#p-carico", "#p-app"].forEach(id => $p(id).classList.toggle("nascosto", id !== "#p-" + nome));
}
function msgAccesso(t){ $p("#p-msg").textContent = t || ""; }

/* ---- dati ---- */
async function caricaDatiPortale(){
  const righe = await restTabella("GET", "analysis_sessions", "?select=id,payload&eliminata=eq.false");
  if(!Array.isArray(righe)) throw new Error("Risposta del cloud non valida.");
  portale.sessioni = righe.filter(r => r.payload).map(r => espandi(r.payload));
  try{
    const c = await restTabella("GET", "analysis_portale", "?select=sezioni&id=eq.1") || [];
    portale.sezioniNascoste = (c[0] && c[0].sezioni) || {};
  }catch(e){ portale.sezioniNascoste = {}; }
  if(!portale.sessioni.length) throw new Error("Nel cloud non ci sono ancora partite o allenamenti.");
  stato.ds = costruisciDatasetDaSessioni(portale.sessioni);
  stato.periodo = "tutto";
  portale.caricatoIl = Date.now();
}

/* ---- filtro: tutta la stagione o una sessione sola ---- */
datiFiltrati = function(){
  const ds = stato.ds;
  const f = {partite: ds.partite, giocatori: ds.giocatori, allenamenti: ds.allenamenti, presenze: ds.presenze, statAllenamento: ds.statAllenamento, mese: null};
  if(!portale.scelta) return f;
  if(portale.tipo === "partite"){
    f.partite = ds.partite.filter(p => p.Match_ID === portale.scelta);
    f.giocatori = ds.giocatori.filter(g => g.Match_ID === portale.scelta);
  } else {
    f.allenamenti = ds.allenamenti.filter(a => a.Sessione_ID === portale.scelta);
    f.presenze = ds.presenze.filter(p => p.Sessione_ID === portale.scelta);
    f.statAllenamento = ds.statAllenamento.filter(g => g.Sessione_ID === portale.scelta);
  }
  return f;
};

/* ---- comandi in alto ---- */
function elencoSessioniPortale(){
  const ds = stato.ds;
  return portale.tipo === "partite"
    ? ds.partite.slice().sort((a, b) => (b.Ordine || 0) - (a.Ordine || 0)).map(p => ({id: p.Match_ID, eti: `${dataCorta(p.Data)} · ${p.Avversario} ${p.Gol_Fatti}–${p.Gol_Subiti}`}))
    : ds.allenamenti.slice().sort((a, b) => (b.Ordine || 0) - (a.Ordine || 0)).map(a => ({id: a.Sessione_ID, eti: `${dataCorta(a.Data)} · ${a.Tipo_Allenamento || "Allenamento"}`}));
}
function aggiornaComandi(){
  document.querySelectorAll("[data-p-tipo]").forEach(b => {
    const on = b.dataset.pTipo === portale.tipo;
    b.classList.toggle("attiva", on); b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const sel = $p("#p-scelta"), elenco = elencoSessioniPortale();
  sel.innerHTML = `<option value="">Tutta la stagione (${nf0(elenco.length)} ${portale.tipo === "partite" ? (elenco.length === 1 ? "partita" : "partite") : (elenco.length === 1 ? "allenamento" : "allenamenti")})</option>`
    + elenco.map(s => `<option value="${esc(s.id)}">${esc(s.eti)}</option>`).join("");
  if(portale.scelta && !elenco.some(s => s.id === portale.scelta)) portale.scelta = null;
  sel.value = portale.scelta || "";
}

/* ---- «La partita»: testata, numeri e considerazioni (gli stessi calcoli del Report Partita) ---- */
function renderLetturaPartita(){
  const cont = $p("#contenuto-lettura");
  const p = stato.ds.partite.find(x => x.Match_ID === portale.scelta);
  if(!cont || !p) return;
  const L = calcolaLetturaPartita(stato.ds, p);
  const migliori = L.righeGara.filter(g => N(g.Minuti_Giocati) > 0 && Number.isFinite(g.Indice_Prestazione)).sort((a, b) => b.Indice_Prestazione - a.Indice_Prestazione);
  const mvp = migliori[0];
  const kpi = (l, v, n) => `<div class="kpi"><div class="kpi-eti">${esc(l)}</div><div class="kpi-valore">${v}</div>${n ? `<div class="kpi-nota">${n}</div>` : ""}</div>`;
  const pct = (a, b) => b ? pctTxt(a / b * 100, 0) : "—";
  const rec = L.righeGara.reduce((a, g) => a + N(g.Recuperi), 0), perse = L.righeGara.reduce((a, g) => a + N(g.Palle_Perse), 0);
  cont.innerHTML = `
    <div class="p-tabellone">
      <div class="p-tab-data">${esc(dataLabel(p.Data))}</div>
      <div class="p-tab-riga"><span class="p-tab-sq">${esc(L.nomeNostro)}</span><span class="p-tab-ris">${nf0(p.Gol_Fatti)}–${nf0(p.Gol_Subiti)}</span><span class="p-tab-sq destra">${esc(p.Avversario)}</span></div>
      ${L.gol.length ? `<div class="p-marcatori">${L.gol.map(g => `<span><b>${g.minuto}'</b> ${esc(g.marcatore || "—")}${g.assist ? ` <i>(${esc(g.assist)})</i>` : ""}</span>`).join("")}</div>` : ""}
    </div>
    ${p.SoloEssenziali ? `<div class="avviso attenzione" style="margin-top:12px"><span class="ic" aria-hidden="true">!</span><span>Partita registrata senza video: ci sono il risultato, i gol, gli assist e i cambi, non le statistiche di gioco.</span></div>` : `
    <div class="griglia g-kpi p-kpi">
      ${kpi(L.possessoStimato ? "Possesso (stimato)" : "Possesso", L.possesso !== null ? pctTxt(L.possesso, 0) : "—")}
      ${kpi("Tiri", nf0(L.tiri), `${nf0(p.Gol_Fatti)} gol`)}
      ${kpi("Tiri subiti", L.tiriSubiti !== null ? nf0(L.tiriSubiti) : "—")}
      ${kpi("Passaggi riusciti", pct(L.passOk, L.passTot), `${nf0(L.passOk)} su ${nf0(L.passTot)}`)}
      ${kpi("Dribbling riusciti", pct(L.dribOk, L.dribTot), `${nf0(L.dribOk)} su ${nf0(L.dribTot)}`)}
      ${kpi("Recuperi · palle perse", `${nf0(rec)} · ${nf0(perse)}`)}
    </div>
    ${mvp ? `<div class="insight-riga" style="margin-top:12px"><span class="ic" aria-hidden="true">★</span><span>Migliore in campo per indice di prestazione: <strong>${esc(mvp.Giocatore)}</strong> (${nf(mvp.Indice_Prestazione, 1)}${N(mvp.Gol) ? `, ${nf0(mvp.Gol)} gol` : ""}${N(mvp.Assist) ? `, ${nf0(mvp.Assist)} assist` : ""}).</span></div>` : ""}
    ${L.cons.bene.length ? `<div class="card p-cons"><div class="grafico-titolo">Cosa ha funzionato</div><ul>${L.cons.bene.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
    ${L.cons.lavorare.length ? `<div class="card p-cons lavorare"><div class="grafico-titolo">Su cosa lavorare</div><ul>${L.cons.lavorare.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}`}`;
}

/* ---- disegno ---- */
const RENDER_PORTALE = {
  "lettura": () => renderLetturaPartita(),
  "kpi": f => renderKPI(f), "andamento": f => renderAndamento(f),
  "classifica": f => { renderClassifica(f); if(typeof notaPartiteEssenziali === "function") notaPartiteEssenziali($("#contenuto-classifica"), f.partite); },
  "possesso": f => { stato.possessoPartita = portale.scelta; renderPossessoPartita(f); },
  "zone": f => renderZoneCampo("contenuto-zone-partita", f.partite, f.partite),
  "respinte": f => renderRespinte(f), "tiri": f => renderTiriCampo(f),
  "golgame": f => renderGolGameCampo("contenuto-golgame-partita", f.partite),
  "porta": f => renderPortaGol("contenuto-porta-partita", f.partite),
  "riconquista": f => renderRiconquista(f),
  "persagol": f => renderPersaGol("contenuto-persa-gol-partita", "pgl-sel-partita", "persaGolPartita", f.partite, "partita"),
  "incampo": f => renderInCampo("contenuto-incampo-partita", "icp-sel-partita", "inCampoPartita", f.partite, "partita"),
  "formazione": () => renderFormazioneMigliore("partita"), "situazioni": () => renderSituazioni("partita"),
  "kpi-all": f => renderKPIAllenamentoStat(f), "classifica-all": f => renderClassificaAllenamentoStat(f),
  "carico": () => renderAllenamenti(), "zone-all": f => renderZoneAllenamento(f),
  "persagol-all": f => renderPersaGol("contenuto-persa-gol-allenamento", "pgl-sel-allenamento", "persaGolAllenamento", f.allenamenti, "allenamento"),
  "incampo-all": f => renderInCampo("contenuto-incampo-allenamento", "icp-sel-allenamento", "inCampoAllenamento", f.allenamenti, "allenamento"),
  "formazione-all": () => renderFormazioneMigliore("allenamento"), "situazioni-all": () => renderSituazioni("allenamento")
};
render = function(){
  if(!stato.ds) return;
  distruggiGrafici();
  // i selettori interni delle sezioni di Analysis non ci sono: si riparte sempre da «tutto il filtro»
  ["persaGolPartita", "persaGolAllenamento", "inCampoPartita", "inCampoAllenamento", "formazionePartita", "zoneSessione", "tiriPartita", "respintePartita"].forEach(k => { stato[k] = ""; });
  const f = datiFiltrati(), modo = portale.scelta ? "singola" : "stagione";
  let visibili = 0;
  SEZIONI_PORTALE.forEach(s => {
    const el = document.getElementById("p-sez-" + s.k);
    if(!el) return;
    const mostra = s.tipo === portale.tipo && s.modi.includes(modo) && portale.sezioniNascoste[s.k] !== false;
    el.classList.toggle("nascosto", !mostra);
    if(!mostra) return;
    visibili++;
    try{ RENDER_PORTALE[s.k](f); }
    catch(err){ console.error(s.k, err); const c = el.querySelector(".p-contenuto"); if(c) c.innerHTML = `<div class="vuoto">Questa parte non si è potuta mostrare.</div>`; }
  });
  $p("#p-vuoto").classList.toggle("nascosto", visibili > 0);
  adattaLarghezzeColonneSchermo();
  const ultimo = [...stato.ds.partite, ...stato.ds.allenamenti].map(x => x.Data).filter(Boolean).sort((a, b) => b - a)[0];
  $p("#p-aggiornato").textContent = ultimo ? `Ultima sessione caricata: ${dataLabel(ultimo)}` : "";
  const squadra = (stato.ds.partite.slice().reverse().find(p => p.NomeSquadra) || {}).NomeSquadra;
  $p("#p-squadra").textContent = squadra || "Analysis";
};

/* ---- app sulla Home e notifiche ---- */
function renderInvito(){
  const box = $p("#p-invito");
  const nascondi = k => { try{ return memoriaLeggi("portale-invito-" + k) === "no"; }catch(e){ return false; } };
  let html = "";
  if(!inModalitaApp() && !nascondi("installa")){
    const ios = eIOS();
    html = `<div class="p-invito"><strong>Mettilo sulla schermata Home</strong>
      <span>${ios ? "In Safari tocca <b>Condividi</b> (il quadrato con la freccia) e poi <b>«Aggiungi alla schermata Home»</b>. Aprilo sempre da lì: solo così arrivano le notifiche delle nuove partite."
        : (portale.installPrompt ? "Si apre come un'app e ricevi le notifiche delle nuove partite." : "Dal menu del browser (⋮) scegli <b>«Installa app»</b> o <b>«Aggiungi a schermata Home»</b>.")}</span>
      <div class="p-invito-azioni">${portale.installPrompt ? `<button type="button" class="btn primario piccolo" data-p="installa">Installa</button>` : ""}<button type="button" class="btn piccolo" data-p="non-ora" data-k="installa">Non ora</button></div></div>`;
  } else if(supportaNotifiche() && Notification.permission !== "granted" && !nascondi("notifiche")){
    html = `<div class="p-invito"><strong>Attiva le notifiche</strong><span>Ti avviso quando viene caricata una nuova partita.</span>
      <div class="p-invito-azioni"><button type="button" class="btn primario piccolo" data-p="notifiche">Attiva</button><button type="button" class="btn piccolo" data-p="non-ora" data-k="notifiche">Non ora</button></div></div>`;
  }
  box.innerHTML = html;
}
async function attivaNotifichePortale(){
  // il permesso va chiesto subito, dentro il tocco (Safari lo pretende): il service worker è già registrato all'avvio
  const sub = await iscrivitiNotifiche(null);
  await chiamaFunzionePortale({azione: "evento", evento: "notifiche", sub, dispositivo: descriviDispositivo()});
}
function descriviDispositivo(){
  const ua = navigator.userAgent;
  const os = /iphone/i.test(ua) ? "iPhone" : /ipad/i.test(ua) ? "iPad" : /android/i.test(ua) ? "Android" : "altro";
  const v = (ua.match(/OS (\d+)[_.](\d+)/) || ua.match(/Android (\d+)/) || []).slice(1).join(".");
  return os + (v ? " " + v : "") + (inModalitaApp() ? " · app" : " · browser");
}
async function segnalaAccesso(){
  try{ await chiamaFunzionePortale({azione: "evento", evento: inModalitaApp() ? "installata" : "accesso", dispositivo: descriviDispositivo()}); }
  catch(e){ console.warn("evento", e); }
  // se le notifiche sono già concesse, l'iscrizione si rinnova da sola (può cambiare con gli aggiornamenti del telefono)
  if(supportaNotifiche() && Notification.permission === "granted" && (inModalitaApp() || !eIOS())) attivaNotifichePortale().catch(() => {});
}

/* ---- avvio ---- */
async function apriPortale(){
  mostraSchermata("carico");
  try{
    await caricaDatiPortale();
  }catch(e){
    const m = messaggioErroreCloud(e);
    if(/scadut|rientra/i.test(m) || !accessoCloud()){ mostraSchermata("accesso"); msgAccesso(m); return; }
    $p("#p-carico-msg").innerHTML = `${esc(/permission|denied|42501|401|403/i.test(m) ? "Questo account non è abilitato al portale. Chiedi a Elisa." : m)}<br><button type="button" class="btn" data-p="riprova" style="margin-top:12px">Riprova</button> <button type="button" class="btn" data-p="esci" style="margin-top:12px">Esci</button>`;
    return;
  }
  const url = new URLSearchParams(location.search);
  if(url.get("partita") && stato.ds.partite.some(p => p.Match_ID === url.get("partita"))){ portale.tipo = "partite"; portale.scelta = url.get("partita"); }
  else if(portale.scelta === null){ portale.tipo = "partite"; const ult = elencoSessioniPortale()[0]; portale.scelta = ult ? ult.id : ""; }
  if(!stato.ds.partite.length && stato.ds.allenamenti.length){ portale.tipo = "allenamenti"; portale.scelta = ""; }
  mostraSchermata("app");
  aggiornaComandi(); render(); renderInvito();
  $p("#p-utente").textContent = (accessoCloud() || {}).email || "";
  segnalaAccesso();
}
document.addEventListener("DOMContentLoaded", () => {
  initTema();
  $p("#btn-tema").addEventListener("click", () => applicaTema(document.documentElement.dataset.tema === "scuro" ? "chiaro" : "scuro"));
  Chart.defaults.font.family = "Satoshi, system-ui, sans-serif"; Chart.defaults.font.size = 12;
  registraServiceWorker("../sw.js", "./");
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); portale.installPrompt = e; if(stato.ds) renderInvito(); });
  window.addEventListener("appinstalled", () => { portale.installPrompt = null; renderInvito(); });
  $p("#p-form").addEventListener("submit", async e => {
    e.preventDefault();
    const email = $p("#p-email").value.trim(), pw = $p("#p-password").value;
    if(!email || !pw){ msgAccesso("Scrivi email e password."); return; }
    msgAccesso("Accesso in corso…");
    try{ await entraCloud(email, pw); $p("#p-password").value = ""; msgAccesso(""); apriPortale(); }
    catch(err){ msgAccesso(/invalid login|invalid_grant|credentials/i.test(err.message) ? "Email o password non corrette. Se non le ricordi, chiedile a Elisa." : messaggioErroreCloud(err)); }
  });
  document.querySelectorAll("[data-p-tipo]").forEach(b => b.addEventListener("click", () => {
    if(portale.tipo === b.dataset.pTipo) return;
    portale.tipo = b.dataset.pTipo;
    const ult = elencoSessioniPortale()[0];
    portale.scelta = portale.tipo === "partite" && ult ? ult.id : "";
    aggiornaComandi(); render(); window.scrollTo({top: 0});
  }));
  $p("#p-scelta").addEventListener("change", e => { portale.scelta = e.target.value || ""; render(); window.scrollTo({top: 0}); });
  document.body.addEventListener("click", async e => {
    const b = e.target.closest("[data-p]"); if(!b) return;
    const az = b.dataset.p;
    if(az === "esci"){ await esciCloud(); stato.ds = null; mostraSchermata("accesso"); return; }
    if(az === "riprova" || az === "aggiorna"){ apriPortale(); return; }
    if(az === "non-ora"){ memoriaScrivi("portale-invito-" + b.dataset.k, "no"); renderInvito(); return; }
    if(az === "installa" && portale.installPrompt){ portale.installPrompt.prompt(); try{ await portale.installPrompt.userChoice; }catch(err){} portale.installPrompt = null; renderInvito(); return; }
    if(az === "notifiche"){
      b.disabled = true;
      try{ await attivaNotifichePortale(); renderInvito(); }
      catch(err){ alert(err.message); b.disabled = false; }
    }
  });
  // tornando sull'app dopo un po' si ricaricano i dati: una partita caricata nel frattempo compare da sola
  document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "visible" && stato.ds && Date.now() - portale.caricatoIl > 5 * 60000) apriPortale();
  });
  if(accessoCloud()) apriPortale(); else mostraSchermata("accesso");
});

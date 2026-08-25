/* =====================================================================
   DATI DEMO (stagione di esempio, usati dal pulsante "Prova con dati di esempio")
   ===================================================================== */
const DATI_DEMO = {"Partite":[{"Match_ID":"P0","Data":"2026-04-05","Avversario":"Cannobio FC","Competizione":"Campionato","Gol_Fatti":4,"Gol_Subiti":3,"Durata_Minuti":60,"Note":null},{"Match_ID":"P1","Data":"2026-05-03","Avversario":"Real Verbania","Competizione":"Campionato","Gol_Fatti":6,"Gol_Subiti":4,"Durata_Minuti":60,"Note":null},{"Match_ID":"P2","Data":"2026-05-10","Avversario":"Bee United","Competizione":"Campionato","Gol_Fatti":3,"Gol_Subiti":3,"Durata_Minuti":60,"Note":null},{"Match_ID":"P3","Data":"2026-05-17","Avversario":"Stresa Calcio","Competizione":"Campionato","Gol_Fatti":5,"Gol_Subiti":2,"Durata_Minuti":60,"Note":null}],"Statistiche_Giocatori":[{"Match_ID":"P0","Giocatore":"Luca Bianchi","Ruolo":"Portiere","Minuti_Giocati":60,"Gol":0,"Assist":0,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":8,"Passaggi_Sbagliati":3,"Dribbling_Tentati":0,"Dribbling_Falliti":0,"Recuperi":1,"Parate":7.0,"Note":null},{"Match_ID":"P0","Giocatore":"Mario Rossi","Ruolo":"Attaccante","Minuti_Giocati":60,"Gol":2,"Assist":0,"Tiri_In_Porta":4,"Tiri_Fuori":3,"Passaggi_Corretti":11,"Passaggi_Sbagliati":6,"Dribbling_Tentati":5,"Dribbling_Falliti":3,"Recuperi":1,"Parate":null,"Note":null},{"Match_ID":"P0","Giocatore":"Andrea Verdi","Ruolo":"Attaccante","Minuti_Giocati":60,"Gol":1,"Assist":1,"Tiri_In_Porta":2,"Tiri_Fuori":2,"Passaggi_Corretti":12,"Passaggi_Sbagliati":5,"Dribbling_Tentati":3,"Dribbling_Falliti":2,"Recuperi":2,"Parate":null,"Note":null},{"Match_ID":"P0","Giocatore":"Marco Neri","Ruolo":"Centrocampista","Minuti_Giocati":60,"Gol":0,"Assist":1,"Tiri_In_Porta":1,"Tiri_Fuori":1,"Passaggi_Corretti":17,"Passaggi_Sbagliati":8,"Dribbling_Tentati":1,"Dribbling_Falliti":1,"Recuperi":3,"Parate":null,"Note":null},{"Match_ID":"P0","Giocatore":"Davide Ferri","Ruolo":"Centrocampista","Minuti_Giocati":60,"Gol":1,"Assist":0,"Tiri_In_Porta":2,"Tiri_Fuori":1,"Passaggi_Corretti":13,"Passaggi_Sbagliati":9,"Dribbling_Tentati":2,"Dribbling_Falliti":2,"Recuperi":2,"Parate":null,"Note":null},{"Match_ID":"P0","Giocatore":"Simone Colombo","Ruolo":"Difensore","Minuti_Giocati":60,"Gol":0,"Assist":1,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":15,"Passaggi_Sbagliati":7,"Dribbling_Tentati":0,"Dribbling_Falliti":0,"Recuperi":6,"Parate":null,"Note":null},{"Match_ID":"P0","Giocatore":"Alessio Galli","Ruolo":"Difensore","Minuti_Giocati":60,"Gol":0,"Assist":0,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":14,"Passaggi_Sbagliati":8,"Dribbling_Tentati":1,"Dribbling_Falliti":1,"Recuperi":5,"Parate":null,"Note":null},{"Match_ID":"P1","Giocatore":"Luca Bianchi","Ruolo":"Portiere","Minuti_Giocati":60,"Gol":0,"Assist":0,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":9,"Passaggi_Sbagliati":2,"Dribbling_Tentati":0,"Dribbling_Falliti":0,"Recuperi":1,"Parate":8.0,"Note":null},{"Match_ID":"P1","Giocatore":"Mario Rossi","Ruolo":"Attaccante","Minuti_Giocati":58,"Gol":3,"Assist":1,"Tiri_In_Porta":6,"Tiri_Fuori":4,"Passaggi_Corretti":14,"Passaggi_Sbagliati":5,"Dribbling_Tentati":8,"Dribbling_Falliti":3,"Recuperi":2,"Parate":null,"Note":null},{"Match_ID":"P1","Giocatore":"Andrea Verdi","Ruolo":"Attaccante","Minuti_Giocati":55,"Gol":1,"Assist":2,"Tiri_In_Porta":3,"Tiri_Fuori":2,"Passaggi_Corretti":16,"Passaggi_Sbagliati":4,"Dribbling_Tentati":5,"Dribbling_Falliti":1,"Recuperi":3,"Parate":null,"Note":null},{"Match_ID":"P1","Giocatore":"Marco Neri","Ruolo":"Centrocampista","Minuti_Giocati":60,"Gol":1,"Assist":2,"Tiri_In_Porta":2,"Tiri_Fuori":1,"Passaggi_Corretti":22,"Passaggi_Sbagliati":6,"Dribbling_Tentati":3,"Dribbling_Falliti":1,"Recuperi":5,"Parate":null,"Note":null},{"Match_ID":"P1","Giocatore":"Davide Ferri","Ruolo":"Centrocampista","Minuti_Giocati":50,"Gol":1,"Assist":1,"Tiri_In_Porta":2,"Tiri_Fuori":0,"Passaggi_Corretti":18,"Passaggi_Sbagliati":8,"Dribbling_Tentati":4,"Dribbling_Falliti":2,"Recuperi":4,"Parate":null,"Note":null},{"Match_ID":"P1","Giocatore":"Simone Colombo","Ruolo":"Difensore","Minuti_Giocati":60,"Gol":0,"Assist":1,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":20,"Passaggi_Sbagliati":4,"Dribbling_Tentati":1,"Dribbling_Falliti":0,"Recuperi":7,"Parate":null,"Note":null},{"Match_ID":"P1","Giocatore":"Alessio Galli","Ruolo":"Difensore","Minuti_Giocati":60,"Gol":0,"Assist":0,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":17,"Passaggi_Sbagliati":7,"Dribbling_Tentati":1,"Dribbling_Falliti":1,"Recuperi":6,"Parate":null,"Note":null},{"Match_ID":"P2","Giocatore":"Luca Bianchi","Ruolo":"Portiere","Minuti_Giocati":60,"Gol":0,"Assist":0,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":8,"Passaggi_Sbagliati":3,"Dribbling_Tentati":0,"Dribbling_Falliti":0,"Recuperi":0,"Parate":6.0,"Note":null},{"Match_ID":"P2","Giocatore":"Mario Rossi","Ruolo":"Attaccante","Minuti_Giocati":60,"Gol":1,"Assist":0,"Tiri_In_Porta":4,"Tiri_Fuori":5,"Passaggi_Corretti":10,"Passaggi_Sbagliati":7,"Dribbling_Tentati":6,"Dribbling_Falliti":4,"Recuperi":1,"Parate":null,"Note":null},{"Match_ID":"P2","Giocatore":"Andrea Verdi","Ruolo":"Attaccante","Minuti_Giocati":60,"Gol":1,"Assist":1,"Tiri_In_Porta":3,"Tiri_Fuori":3,"Passaggi_Corretti":13,"Passaggi_Sbagliati":6,"Dribbling_Tentati":4,"Dribbling_Falliti":2,"Recuperi":2,"Parate":null,"Note":null},{"Match_ID":"P2","Giocatore":"Marco Neri","Ruolo":"Centrocampista","Minuti_Giocati":60,"Gol":0,"Assist":1,"Tiri_In_Porta":1,"Tiri_Fuori":2,"Passaggi_Corretti":19,"Passaggi_Sbagliati":9,"Dribbling_Tentati":2,"Dribbling_Falliti":1,"Recuperi":4,"Parate":null,"Note":null},{"Match_ID":"P2","Giocatore":"Davide Ferri","Ruolo":"Centrocampista","Minuti_Giocati":45,"Gol":1,"Assist":0,"Tiri_In_Porta":2,"Tiri_Fuori":1,"Passaggi_Corretti":14,"Passaggi_Sbagliati":9,"Dribbling_Tentati":3,"Dribbling_Falliti":2,"Recuperi":3,"Parate":null,"Note":null},{"Match_ID":"P2","Giocatore":"Simone Colombo","Ruolo":"Difensore","Minuti_Giocati":60,"Gol":0,"Assist":0,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":16,"Passaggi_Sbagliati":6,"Dribbling_Tentati":0,"Dribbling_Falliti":0,"Recuperi":5,"Parate":null,"Note":null},{"Match_ID":"P2","Giocatore":"Alessio Galli","Ruolo":"Difensore","Minuti_Giocati":60,"Gol":0,"Assist":1,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":15,"Passaggi_Sbagliati":8,"Dribbling_Tentati":1,"Dribbling_Falliti":1,"Recuperi":4,"Parate":null,"Note":null},{"Match_ID":"P3","Giocatore":"Luca Bianchi","Ruolo":"Portiere","Minuti_Giocati":60,"Gol":0,"Assist":0,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":10,"Passaggi_Sbagliati":1,"Dribbling_Tentati":0,"Dribbling_Falliti":0,"Recuperi":1,"Parate":9.0,"Note":null},{"Match_ID":"P3","Giocatore":"Mario Rossi","Ruolo":"Attaccante","Minuti_Giocati":60,"Gol":2,"Assist":1,"Tiri_In_Porta":5,"Tiri_Fuori":3,"Passaggi_Corretti":15,"Passaggi_Sbagliati":4,"Dribbling_Tentati":7,"Dribbling_Falliti":2,"Recuperi":2,"Parate":null,"Note":null},{"Match_ID":"P3","Giocatore":"Andrea Verdi","Ruolo":"Attaccante","Minuti_Giocati":58,"Gol":2,"Assist":1,"Tiri_In_Porta":4,"Tiri_Fuori":1,"Passaggi_Corretti":17,"Passaggi_Sbagliati":3,"Dribbling_Tentati":6,"Dribbling_Falliti":1,"Recuperi":3,"Parate":null,"Note":null},{"Match_ID":"P3","Giocatore":"Marco Neri","Ruolo":"Centrocampista","Minuti_Giocati":60,"Gol":1,"Assist":2,"Tiri_In_Porta":2,"Tiri_Fuori":1,"Passaggi_Corretti":24,"Passaggi_Sbagliati":5,"Dribbling_Tentati":4,"Dribbling_Falliti":1,"Recuperi":6,"Parate":null,"Note":null},{"Match_ID":"P3","Giocatore":"Davide Ferri","Ruolo":"Centrocampista","Minuti_Giocati":55,"Gol":0,"Assist":2,"Tiri_In_Porta":1,"Tiri_Fuori":0,"Passaggi_Corretti":20,"Passaggi_Sbagliati":6,"Dribbling_Tentati":5,"Dribbling_Falliti":1,"Recuperi":5,"Parate":null,"Note":null},{"Match_ID":"P3","Giocatore":"Simone Colombo","Ruolo":"Difensore","Minuti_Giocati":60,"Gol":0,"Assist":0,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":21,"Passaggi_Sbagliati":3,"Dribbling_Tentati":1,"Dribbling_Falliti":0,"Recuperi":8,"Parate":null,"Note":null},{"Match_ID":"P3","Giocatore":"Alessio Galli","Ruolo":"Difensore","Minuti_Giocati":60,"Gol":0,"Assist":1,"Tiri_In_Porta":0,"Tiri_Fuori":0,"Passaggi_Corretti":19,"Passaggi_Sbagliati":5,"Dribbling_Tentati":2,"Dribbling_Falliti":0,"Recuperi":7,"Parate":null,"Note":null}],"Allenamenti":[{"Sessione_ID":"T1","Data":"2026-04-01","Tipo_Allenamento":"Tecnico","Durata_Minuti_Sessione":70,"Note":null},{"Sessione_ID":"T2","Data":"2026-04-08","Tipo_Allenamento":"Tattico","Durata_Minuti_Sessione":65,"Note":null},{"Sessione_ID":"T3","Data":"2026-04-15","Tipo_Allenamento":"Partitella","Durata_Minuti_Sessione":60,"Note":null},{"Sessione_ID":"T4","Data":"2026-04-22","Tipo_Allenamento":"Fisico","Durata_Minuti_Sessione":50,"Note":null},{"Sessione_ID":"T5","Data":"2026-05-01","Tipo_Allenamento":"Misto","Durata_Minuti_Sessione":75,"Note":null},{"Sessione_ID":"T6","Data":"2026-05-08","Tipo_Allenamento":"Tecnico","Durata_Minuti_Sessione":70,"Note":null},{"Sessione_ID":"T7","Data":"2026-05-15","Tipo_Allenamento":"Tattico","Durata_Minuti_Sessione":75,"Note":null},{"Sessione_ID":"T8","Data":"2026-05-22","Tipo_Allenamento":"Partitella","Durata_Minuti_Sessione":70,"Note":null}],"Presenze_Allenamento":[{"Sessione_ID":"T1","Giocatore":"Luca Bianchi","Presente":"Sì","Minuti_Allenamento":70,"RPE":3.0,"Note":null},{"Sessione_ID":"T1","Giocatore":"Mario Rossi","Presente":"Sì","Minuti_Allenamento":70,"RPE":4.0,"Note":null},{"Sessione_ID":"T1","Giocatore":"Andrea Verdi","Presente":"Sì","Minuti_Allenamento":70,"RPE":4.0,"Note":null},{"Sessione_ID":"T1","Giocatore":"Marco Neri","Presente":"Sì","Minuti_Allenamento":65,"RPE":3.0,"Note":null},{"Sessione_ID":"T1","Giocatore":"Davide Ferri","Presente":"Sì","Minuti_Allenamento":65,"RPE":3.0,"Note":null},{"Sessione_ID":"T1","Giocatore":"Simone Colombo","Presente":"Sì","Minuti_Allenamento":70,"RPE":5.0,"Note":null},{"Sessione_ID":"T1","Giocatore":"Alessio Galli","Presente":"Sì","Minuti_Allenamento":70,"RPE":3.0,"Note":null},{"Sessione_ID":"T2","Giocatore":"Luca Bianchi","Presente":"Sì","Minuti_Allenamento":65,"RPE":5.0,"Note":null},{"Sessione_ID":"T2","Giocatore":"Mario Rossi","Presente":"Sì","Minuti_Allenamento":60,"RPE":4.0,"Note":null},{"Sessione_ID":"T2","Giocatore":"Andrea Verdi","Presente":"Sì","Minuti_Allenamento":60,"RPE":5.0,"Note":null},{"Sessione_ID":"T2","Giocatore":"Marco Neri","Presente":"Sì","Minuti_Allenamento":65,"RPE":6.0,"Note":null},{"Sessione_ID":"T2","Giocatore":"Davide Ferri","Presente":"Sì","Minuti_Allenamento":60,"RPE":6.0,"Note":null},{"Sessione_ID":"T2","Giocatore":"Simone Colombo","Presente":"Sì","Minuti_Allenamento":65,"RPE":5.0,"Note":null},{"Sessione_ID":"T2","Giocatore":"Alessio Galli","Presente":"Sì","Minuti_Allenamento":60,"RPE":5.0,"Note":null},{"Sessione_ID":"T3","Giocatore":"Luca Bianchi","Presente":"Sì","Minuti_Allenamento":60,"RPE":8.0,"Note":null},{"Sessione_ID":"T3","Giocatore":"Mario Rossi","Presente":"Sì","Minuti_Allenamento":60,"RPE":7.0,"Note":null},{"Sessione_ID":"T3","Giocatore":"Andrea Verdi","Presente":"Sì","Minuti_Allenamento":60,"RPE":7.0,"Note":null},{"Sessione_ID":"T3","Giocatore":"Marco Neri","Presente":"Sì","Minuti_Allenamento":60,"RPE":6.0,"Note":null},{"Sessione_ID":"T3","Giocatore":"Davide Ferri","Presente":"Sì","Minuti_Allenamento":60,"RPE":8.0,"Note":null},{"Sessione_ID":"T3","Giocatore":"Simone Colombo","Presente":"Sì","Minuti_Allenamento":60,"RPE":7.0,"Note":null},{"Sessione_ID":"T3","Giocatore":"Alessio Galli","Presente":"Sì","Minuti_Allenamento":60,"RPE":7.0,"Note":null},{"Sessione_ID":"T4","Giocatore":"Luca Bianchi","Presente":"Sì","Minuti_Allenamento":45,"RPE":7.0,"Note":null},{"Sessione_ID":"T4","Giocatore":"Mario Rossi","Presente":"Sì","Minuti_Allenamento":50,"RPE":5.0,"Note":null},{"Sessione_ID":"T4","Giocatore":"Andrea Verdi","Presente":"Sì","Minuti_Allenamento":45,"RPE":5.0,"Note":null},{"Sessione_ID":"T4","Giocatore":"Marco Neri","Presente":"Sì","Minuti_Allenamento":45,"RPE":6.0,"Note":null},{"Sessione_ID":"T4","Giocatore":"Davide Ferri","Presente":"Sì","Minuti_Allenamento":45,"RPE":6.0,"Note":null},{"Sessione_ID":"T4","Giocatore":"Simone Colombo","Presente":"Sì","Minuti_Allenamento":45,"RPE":6.0,"Note":null},{"Sessione_ID":"T4","Giocatore":"Alessio Galli","Presente":"Sì","Minuti_Allenamento":50,"RPE":5.0,"Note":null},{"Sessione_ID":"T5","Giocatore":"Luca Bianchi","Presente":"Sì","Minuti_Allenamento":75,"RPE":8.0,"Note":null},{"Sessione_ID":"T5","Giocatore":"Mario Rossi","Presente":"Sì","Minuti_Allenamento":75,"RPE":7.0,"Note":null},{"Sessione_ID":"T5","Giocatore":"Andrea Verdi","Presente":"Sì","Minuti_Allenamento":75,"RPE":7.0,"Note":null},{"Sessione_ID":"T5","Giocatore":"Marco Neri","Presente":"Sì","Minuti_Allenamento":75,"RPE":8.0,"Note":null},{"Sessione_ID":"T5","Giocatore":"Davide Ferri","Presente":"Sì","Minuti_Allenamento":75,"RPE":10.0,"Note":null},{"Sessione_ID":"T5","Giocatore":"Simone Colombo","Presente":"Sì","Minuti_Allenamento":75,"RPE":8.0,"Note":null},{"Sessione_ID":"T5","Giocatore":"Alessio Galli","Presente":"Sì","Minuti_Allenamento":70,"RPE":8.0,"Note":null},{"Sessione_ID":"T6","Giocatore":"Luca Bianchi","Presente":"Sì","Minuti_Allenamento":65,"RPE":6.0,"Note":null},{"Sessione_ID":"T6","Giocatore":"Mario Rossi","Presente":"Sì","Minuti_Allenamento":65,"RPE":5.0,"Note":null},{"Sessione_ID":"T6","Giocatore":"Andrea Verdi","Presente":"Sì","Minuti_Allenamento":65,"RPE":6.0,"Note":null},{"Sessione_ID":"T6","Giocatore":"Marco Neri","Presente":"Sì","Minuti_Allenamento":70,"RPE":6.0,"Note":null},{"Sessione_ID":"T6","Giocatore":"Davide Ferri","Presente":"Sì","Minuti_Allenamento":70,"RPE":9.0,"Note":null},{"Sessione_ID":"T6","Giocatore":"Simone Colombo","Presente":"Sì","Minuti_Allenamento":65,"RPE":6.0,"Note":null},{"Sessione_ID":"T6","Giocatore":"Alessio Galli","Presente":"No","Minuti_Allenamento":0,"RPE":null,"Note":"assente"},{"Sessione_ID":"T7","Giocatore":"Luca Bianchi","Presente":"Sì","Minuti_Allenamento":70,"RPE":7.0,"Note":null},{"Sessione_ID":"T7","Giocatore":"Mario Rossi","Presente":"Sì","Minuti_Allenamento":75,"RPE":7.0,"Note":null},{"Sessione_ID":"T7","Giocatore":"Andrea Verdi","Presente":"Sì","Minuti_Allenamento":75,"RPE":7.0,"Note":null},{"Sessione_ID":"T7","Giocatore":"Marco Neri","Presente":"Sì","Minuti_Allenamento":75,"RPE":7.0,"Note":null},{"Sessione_ID":"T7","Giocatore":"Davide Ferri","Presente":"Sì","Minuti_Allenamento":75,"RPE":9.0,"Note":null},{"Sessione_ID":"T7","Giocatore":"Simone Colombo","Presente":"Sì","Minuti_Allenamento":70,"RPE":7.0,"Note":null},{"Sessione_ID":"T7","Giocatore":"Alessio Galli","Presente":"Sì","Minuti_Allenamento":75,"RPE":7.0,"Note":null},{"Sessione_ID":"T8","Giocatore":"Luca Bianchi","Presente":"Sì","Minuti_Allenamento":70,"RPE":10.0,"Note":null},{"Sessione_ID":"T8","Giocatore":"Mario Rossi","Presente":"Sì","Minuti_Allenamento":70,"RPE":10.0,"Note":null},{"Sessione_ID":"T8","Giocatore":"Andrea Verdi","Presente":"Sì","Minuti_Allenamento":70,"RPE":9.0,"Note":null},{"Sessione_ID":"T8","Giocatore":"Marco Neri","Presente":"Sì","Minuti_Allenamento":65,"RPE":9.0,"Note":null},{"Sessione_ID":"T8","Giocatore":"Davide Ferri","Presente":"Sì","Minuti_Allenamento":65,"RPE":10.0,"Note":null},{"Sessione_ID":"T8","Giocatore":"Simone Colombo","Presente":"Sì","Minuti_Allenamento":65,"RPE":10.0,"Note":null},{"Sessione_ID":"T8","Giocatore":"Alessio Galli","Presente":"No","Minuti_Allenamento":0,"RPE":null,"Note":"assente"}]};

/* =====================================================================
   UTILITÀ
   ===================================================================== */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

function N(v){
  if(v===null || v===undefined || v==="") return 0;
  if(typeof v === "number") return isFinite(v) ? v : 0;
  const n = parseFloat(String(v).replace(",", ".").replace(/[^\d.\-]/g, ""));
  return isFinite(n) ? n : 0;
}
const perc = (num, den) => (den > 0 ? (num/den)*100 : null);
const nf = (v, d=1) => (v===null || v===undefined || !isFinite(v)) ? "—" :
  v.toLocaleString("it-IT", {minimumFractionDigits:d, maximumFractionDigits:d});
const nf0 = v => nf(v, 0);
const pctTxt = (v, d=1) => (v===null||v===undefined||!isFinite(v)) ? "—" : nf(v,d)+"%";
const MESI_IT = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
function meseLabel(m){ if(!m) return "—"; const [a,me]=m.split("-"); return MESI_IT[parseInt(me,10)-1]+" "+a; }
function meseBreve(m){ if(!m) return "—"; const [,me]=m.split("-"); return MESI_IT[parseInt(me,10)-1]; }
function dataLabel(d){
  if(!(d instanceof Date) || isNaN(d)) return "—";
  return String(d.getDate()).padStart(2,"0")+"/"+String(d.getMonth()+1).padStart(2,"0")+"/"+d.getFullYear();
}
function dataCorta(d){
  if(!(d instanceof Date) || isNaN(d)) return "—";
  return String(d.getDate()).padStart(2,"0")+"/"+String(d.getMonth()+1).padStart(2,"0");
}
function meseKey(d){ return (d instanceof Date && !isNaN(d)) ? d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0") : null; }
function toDate(v){
  if(v instanceof Date) return isNaN(v) ? null : v;
  if(typeof v === "number"){
    const ms = Math.round((v - 25569) * 86400 * 1000);
    const d = new Date(ms); return isNaN(d) ? null : d;
  }
  if(typeof v === "string" && v.trim()){
    const s = v.trim();
    let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if(m) return new Date(+m[1], +m[2]-1, +m[3]);
    m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
    if(m) return new Date(+m[3], +m[2]-1, +m[1]);
    const d = new Date(s); return isNaN(d) ? null : d;
  }
  return null;
}
const esc = s => String(s===null||s===undefined?"":s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const isEsempio = r => /esempio/i.test(String(r.Note ?? ""));
const rigaVuota = r => Object.values(r).every(v => v===null || v===undefined || String(v).trim()==="");
const presenteBool = v => ["sì","si","s","true","1","x"].includes(String(v ?? "").trim().toLowerCase());

/* =====================================================================
   INGESTIONE FILE SEVEN LAB (più file, uno per partita o per allenamento)
   ===================================================================== */
const CHIAVE_SESSIONI = "calcio7-sessioni-v1";

/** Seven Lab scrive date come "martedì 25/08/2026": ci interessa solo la parte gg/mm/aaaa,
 *  il nome del giorno lo ignoriamo (cambia a seconda della lingua/locale del telefono). */
function parseDataSevenLab(v){
  if(!v) return null;
  const m = String(v).match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if(m) return new Date(+m[3], +m[2]-1, +m[1]);
  return toDate(v);
}

/** Spezza una riga CSV con celle tra virgolette e separatore ";" (formato di export di Seven Lab),
 *  gestendo le virgolette raddoppiate ("") come virgoletta letterale dentro il valore. */
function parsaRigaCSV(riga){
  const campi = [];
  let cur = "", inQuote = false;
  for(let i=0; i<riga.length; i++){
    const c = riga[i];
    if(inQuote){
      if(c === '"'){
        if(riga[i+1] === '"'){ cur += '"'; i++; }
        else inQuote = false;
      } else cur += c;
    } else {
      if(c === '"') inQuote = true;
      else if(c === ";"){ campi.push(cur); cur = ""; }
      else cur += c;
    }
  }
  campi.push(cur);
  return campi.map(c => c.trim());
}

/** Legge un file .csv esportato da Seven Lab (una partita o un allenamento):
 *  un blocco iniziale di metadati chiave;valore, una riga vuota, poi la tabella dei giocatori
 *  di quella sessione e, solo per le partite, una sezione finale "EVENTI PARTITA".
 *  Ritorna {tipo, meta, righe, eventi}. Lancia un errore leggibile se manca "Tipo" o la tabella. */
function parsaFileSevenLab(testo){
  const righeGrezze = testo.split(/\r\n|\n|\r/).map(r => r.trimEnd());
  const meta = {};
  let i = 0;
  // blocco metadati: righe "Chiave";"Valore" finché non troviamo una riga vuota o la tabella
  for(; i<righeGrezze.length; i++){
    const r = righeGrezze[i];
    if(r.trim() === "") { i++; break; }
    const campi = parsaRigaCSV(r);
    if(campi.length === 2) meta[campi[0]] = campi[1];
    else if(campi.length === 1 && !meta["_titoloApp"]) meta["_titoloApp"] = campi[0];
  }
  const tipo = String(meta["Tipo"] || "").trim().toLowerCase();
  if(tipo !== "partita" && tipo !== "allenamento")
    throw new Error("Non riconosco il tipo di file (manca o non è valida la riga «Tipo»;«partita»/«allenamento»). Controlla che sia un export di Seven Lab non modificato.");

  // tabella giocatori: prossima riga non vuota è l'intestazione
  while(i<righeGrezze.length && righeGrezze[i].trim()==="") i++;
  if(i>=righeGrezze.length) throw new Error("Nel file manca la tabella dei giocatori.");
  const intestazione = parsaRigaCSV(righeGrezze[i]); i++;
  const righe = [];
  for(; i<righeGrezze.length; i++){
    const r = righeGrezze[i];
    if(r.trim()===""){ i++; break; }
    if(/^"?EVENTI/i.test(r)) break;
    const campi = parsaRigaCSV(r);
    const obj = {};
    intestazione.forEach((h,idx) => obj[h] = campi[idx] ?? "");
    if(obj[intestazione[0]]) righe.push(obj);
  }
  // sezione eventi (solo partite), facoltativa: la leggiamo ma per ora non alimenta i calcoli
  let eventi = null;
  while(i<righeGrezze.length && !/^"?EVENTI/i.test(righeGrezze[i])) i++;
  if(i<righeGrezze.length){
    i++;
    while(i<righeGrezze.length && righeGrezze[i].trim()==="") i++;
    if(i<righeGrezze.length){
      const intEventi = parsaRigaCSV(righeGrezze[i]); i++;
      eventi = [];
      for(; i<righeGrezze.length; i++){
        if(righeGrezze[i].trim()==="") continue;
        const campi = parsaRigaCSV(righeGrezze[i]);
        const obj = {}; intEventi.forEach((h,idx) => obj[h] = campi[idx] ?? "");
        eventi.push(obj);
      }
    }
  }
  if(righe.length === 0) throw new Error("La tabella dei giocatori nel file è vuota.");
  return {tipo, meta, righe, eventi};
}

/** Ricava un identificativo di sessione leggibile dal nome del file (es. "partita_3.csv" → "partita_3"). */
function idDaNomeFile(nomeFile){
  return String(nomeFile||"").replace(/\.[^.]+$/, "").trim() || ("sessione-" + Math.abs(hashStringa(nomeFile)));
}
function hashStringa(s){ let h=0; for(let i=0;i<String(s).length;i++){ h = (h*31 + String(s).charCodeAt(i))|0; } return h; }

function leggiSessioniSalvate(){
  try{
    const grezzo = memoriaLeggi(CHIAVE_SESSIONI);
    const arr = grezzo ? JSON.parse(grezzo) : [];
    return Array.isArray(arr) ? arr : [];
  }catch(e){ return []; }
}
function scriviSessioniSalvate(arr){ return memoriaScrivi(CHIAVE_SESSIONI, JSON.stringify(arr)); }

/** Aggiunge (o sostituisce, se stesso nome file) una sessione letta da un File .csv. Ritorna la sessione creata. */
function aggiungiSessioneDaTesto(nomeFile, testo){
  const parsed = parsaFileSevenLab(testo);
  const id = idDaNomeFile(nomeFile);
  const sessione = {id, tipo:parsed.tipo, nomeFile, caricatoIl:new Date().toISOString(), meta:parsed.meta, righe:parsed.righe, eventi:parsed.eventi};
  const attuali = leggiSessioniSalvate();
  const idx = attuali.findIndex(s => s.id === id);
  if(idx >= 0) attuali[idx] = sessione; else attuali.push(sessione);
  scriviSessioniSalvate(attuali);
  return sessione;
}
function eliminaSessioneSalvata(id){
  const attuali = leggiSessioniSalvate().filter(s => s.id !== id);
  scriviSessioniSalvate(attuali);
  return attuali;
}

/* =====================================================================
   MOTORE DI CALCOLO
   ===================================================================== */
function indicePrestazione(r){
  return N(r.Gol)*4 + N(r.Assist)*3 + N(r.Dribbling_Riusciti)*0.5 + N(r.Dribbling_Falliti)*(-0.3)
    + N(r.Recuperi)*0.4 + N(r.Tiri_In_Porta)*0.3 + N(r.Tiri_Fuori)*(-0.2)
    + N(r.Passaggi_Corretti)*0.05 + N(r.Passaggi_Sbagliati)*(-0.05) + N(r.Parate)*1.5;
}

const COLONNE_PARTITE = ["Match_ID","Data","Avversario","Gol_Fatti","Gol_Subiti"];
const COLONNE_GIOCATORI = ["Match_ID","Giocatore","Minuti_Giocati","Gol","Assist"];

function preparaDataset(grezzo){
  const partiteRaw = (grezzo.Partite || []).filter(r => !rigaVuota(r) && !isEsempio(r));
  const giocatoriRaw = (grezzo.Statistiche_Giocatori || []).filter(r => !rigaVuota(r) && !isEsempio(r));
  if(!grezzo.Partite) throw new Error("Nel file non ho trovato il foglio <strong>Partite</strong>. Serve per sapere date e avversari.");
  if(!grezzo.Statistiche_Giocatori) throw new Error("Nel file non ho trovato il foglio <strong>Statistiche_Giocatori</strong>. Senza le righe dei giocatori non posso calcolare nulla.");
  if(partiteRaw.length === 0) throw new Error("Il foglio <strong>Partite</strong> non contiene ancora nessuna partita valida. Aggiungi almeno una riga (le righe con «ESEMPIO» nelle note vengono ignorate).");
  if(giocatoriRaw.length === 0) throw new Error("Il foglio <strong>Statistiche_Giocatori</strong> non contiene ancora righe valide dei giocatori.");

  const mancantiP = COLONNE_PARTITE.filter(c => !(c in partiteRaw[0]));
  const mancantiG = COLONNE_GIOCATORI.filter(c => !(c in giocatoriRaw[0]));
  if(mancantiP.length) throw new Error("Nel foglio <strong>Partite</strong> mancano queste colonne: <strong>"+mancantiP.join(", ")+"</strong>.");
  if(mancantiG.length) throw new Error("Nel foglio <strong>Statistiche_Giocatori</strong> mancano queste colonne: <strong>"+mancantiG.join(", ")+"</strong>.");

  return assemblaDataset(grezzo);
}

/** Cuore della costruzione del dataset, condiviso dal percorso Excel (preparaDataset, con le sue
 *  validazioni sui fogli) e dal percorso Seven Lab a più file (costruisciDatasetDaSessioni, che
 *  non pretende né Partite né Allenamenti: bastano anche solo gli uni o gli altri). */
function assemblaDataset(grezzo){
  const partiteRaw = (grezzo.Partite || []).filter(r => !rigaVuota(r) && !isEsempio(r));
  const giocatoriRaw = (grezzo.Statistiche_Giocatori || []).filter(r => !rigaVuota(r) && !isEsempio(r));
  const partite = partiteRaw.map(r => ({
    Match_ID: String(r.Match_ID ?? "").trim(),
    Data: toDate(r.Data),
    Avversario: String(r.Avversario ?? "").trim() || "Avversario non indicato",
    Competizione: String(r.Competizione ?? "").trim(),
    Gol_Fatti: N(r.Gol_Fatti), Gol_Subiti: N(r.Gol_Subiti), Durata_Minuti: N(r.Durata_Minuti),
    Modulo: String(r.Modulo ?? "").trim() || "Non indicato",
    Forza_Avversario: r.Forza_Avversario ?? null,
    Note: r.Note ?? ""
  })).filter(p => p.Match_ID)
    .sort((a,b) => (a.Data?a.Data.getTime():0) - (b.Data?b.Data.getTime():0));
  partite.forEach((p,i) => { p.Ordine = i+1; p.Mese = meseKey(p.Data);
    p.Etichetta = dataCorta(p.Data)+" "+p.Avversario; p.Risultato = p.Gol_Fatti+"-"+p.Gol_Subiti; });

  const mappaPartite = new Map(partite.map(p => [p.Match_ID, p]));

  const giocatori = giocatoriRaw.map(r => {
    const g = {
      Match_ID: String(r.Match_ID ?? "").trim(),
      Giocatore: String(r.Giocatore ?? "").trim(),
      Ruolo: String(r.Ruolo ?? "").trim() || "Non indicato",
      Minuti_Giocati: N(r.Minuti_Giocati), Gol: N(r.Gol), Assist: N(r.Assist),
      Tiri_In_Porta: N(r.Tiri_In_Porta), Tiri_Fuori: N(r.Tiri_Fuori),
      Passaggi_Corretti: N(r.Passaggi_Corretti), Passaggi_Sbagliati: N(r.Passaggi_Sbagliati),
      Dribbling_Tentati: N(r.Dribbling_Tentati), Dribbling_Falliti: N(r.Dribbling_Falliti),
      Recuperi: N(r.Recuperi), Parate: N(r.Parate), Note: r.Note ?? ""
    };
    return derivaRiga(g, mappaPartite.get(g.Match_ID));
  }).filter(g => g.Giocatore);

  const perGiocatore = new Map();
  giocatori.filter(g => g.Data).sort((a,b) => a.Data - b.Data).forEach(g => {
    const n = (perGiocatore.get(g.Giocatore) || 0) + 1;
    perGiocatore.set(g.Giocatore, n); g.OrdineGiocatore = n;
  });

  const allenamenti = (grezzo.Allenamenti || []).filter(r => !rigaVuota(r) && !isEsempio(r)).map(r => ({
    Sessione_ID: String(r.Sessione_ID ?? "").trim(), Data: toDate(r.Data),
    Tipo_Allenamento: String(r.Tipo_Allenamento ?? "").trim() || "Non indicato",
    Durata_Minuti_Sessione: N(r.Durata_Minuti_Sessione), Note: r.Note ?? ""
  })).filter(a => a.Sessione_ID).sort((a,b)=>(a.Data?a.Data.getTime():0)-(b.Data?b.Data.getTime():0));
  allenamenti.forEach(a => a.Mese = meseKey(a.Data));
  const mappaSessioni = new Map(allenamenti.map(a => [a.Sessione_ID, a]));

  const presenze = (grezzo.Presenze_Allenamento || []).filter(r => !rigaVuota(r) && !isEsempio(r)).map(r => {
    const s = mappaSessioni.get(String(r.Sessione_ID ?? "").trim());
    const pres = presenteBool(r.Presente);
    const minuti = N(r.Minuti_Allenamento);
    const rpeAssente = r.RPE===null || r.RPE===undefined || String(r.RPE).trim()==="";
    const rpe = rpeAssente ? null : N(r.RPE);
    return {
      Sessione_ID: String(r.Sessione_ID ?? "").trim(), Giocatore: String(r.Giocatore ?? "").trim(),
      PresenteRaw: r.Presente ?? "", Presente: pres, Minuti_Allenamento: minuti, RPE: rpe,
      Carico: rpe===null ? null : (pres ? minuti*rpe : 0), Data: s ? s.Data : null, Mese: s ? s.Mese : null,
      DurataSessione: s ? s.Durata_Minuti_Sessione : null, Note: r.Note ?? ""
    };
  }).filter(p => p.Giocatore);

  const mesi = Array.from(new Set([...partite.map(p=>p.Mese), ...allenamenti.map(a=>a.Mese)].filter(Boolean))).sort();
  const nomiGiocatori = Array.from(new Set([...giocatori.map(g=>g.Giocatore), ...presenze.map(p=>p.Giocatore)])).sort((a,b)=>a.localeCompare(b,"it"));

  return {partite, giocatori, allenamenti, presenze, mesi, nomiGiocatori,
    haAllenamenti: allenamenti.length>0 && presenze.length>0,
    haRPE: presenze.some(p => p.RPE !== null)};
}

/** Percorso di ingresso "Seven Lab": costruisce il dataset a partire dalle sessioni accumulate
 *  (un file = una partita o un allenamento), invece che da un unico Excel con più fogli.
 *  A differenza di preparaDataset() non pretende di avere sia le partite sia gli allenamenti:
 *  basta una sola sessione di un solo tipo per iniziare a vedere qualcosa. */
function costruisciDatasetDaSessioni(sessioni){
  if(!sessioni.length) throw new Error("Non hai ancora caricato nessun file. Carica almeno un file partita o allenamento esportato da Seven Lab.");
  const partiteRaw = [], giocatoriRaw = [], allenamentiRaw = [], presenzeRaw = [];
  sessioni.forEach(s => {
    if(s.tipo === "partita"){
      partiteRaw.push({
        Match_ID: s.id, Data: parseDataSevenLab(s.meta["Data"]),
        Avversario: (s.meta["Avversario"]||"").trim() || "Avversario non indicato",
        Competizione: "", Gol_Fatti: N(s.meta["Gol fatti"]), Gol_Subiti: N(s.meta["Gol subiti"]),
        Durata_Minuti: N(s.meta["Durata minuti"]), Modulo: (s.meta["Modulo iniziale"]||"").trim() || "Non indicato",
        Forza_Avversario: null, Note: ""
      });
      (s.righe||[]).forEach(r => {
        const tiriTot = N(r["Tiri"]), tiriPorta = N(r["Tiri in porta"]);
        const dribRiusciti = N(r["Dribbling riusciti"]), dribFalliti = N(r["Dribbling falliti"]);
        giocatoriRaw.push({
          Match_ID: s.id, Giocatore: String(r["Giocatore"]||"").trim(), Ruolo: String(r["Ruolo"]||"").trim(),
          Minuti_Giocati: N(r["Minuti giocati"]), Gol: N(r["Gol"]), Assist: N(r["Assist"]),
          Tiri_In_Porta: tiriPorta, Tiri_Fuori: Math.max(0, tiriTot - tiriPorta),
          Passaggi_Corretti: N(r["Passaggi corretti"]), Passaggi_Sbagliati: N(r["Passaggi sbagliati"]),
          Dribbling_Tentati: dribRiusciti + dribFalliti, Dribbling_Falliti: dribFalliti,
          Recuperi: N(r["Recuperi"]), Parate: N(r["Parate"]), Note: ""
        });
      });
    } else if(s.tipo === "allenamento"){
      allenamentiRaw.push({
        Sessione_ID: s.id, Data: parseDataSevenLab(s.meta["Data"]),
        Tipo_Allenamento: (s.meta["Formato"]||"").trim() || "Allenamento",
        Durata_Minuti_Sessione: N(s.meta["Durata minuti"]), Note: ""
      });
      (s.righe||[]).forEach(r => {
        presenzeRaw.push({
          Sessione_ID: s.id, Giocatore: String(r["Giocatore"]||"").trim(),
          Presente: "Sì", // ogni riga nel file = giocatore convocato/presente a quella sessione
          Minuti_Allenamento: N(r["Minuti giocati"]), RPE: null, Note: ""
        });
      });
    }
  });
  if(!partiteRaw.length && !allenamentiRaw.length) throw new Error("Nei file caricati non ho trovato né partite né allenamenti validi.");
  return assemblaDataset({Partite:partiteRaw, Statistiche_Giocatori:giocatoriRaw, Allenamenti:allenamentiRaw, Presenze_Allenamento:presenzeRaw});
}

function derivaRiga(g, partita){
  g.Tiri_Totali = g.Tiri_In_Porta + g.Tiri_Fuori;
  g.Passaggi_Totali = g.Passaggi_Corretti + g.Passaggi_Sbagliati;
  g.Dribbling_Riusciti = g.Dribbling_Tentati - g.Dribbling_Falliti;
  g.Coinvolgimento_Gol = g.Gol + g.Assist;
  g.Precisione_Tiro_pct = perc(g.Tiri_In_Porta, g.Tiri_Totali);
  g.Efficacia_Realizzativa_pct = perc(g.Gol, g.Tiri_Totali);
  g.Precisione_Passaggi_pct = perc(g.Passaggi_Corretti, g.Passaggi_Totali);
  g.Successo_Dribbling_pct = perc(g.Dribbling_Riusciti, g.Dribbling_Tentati);
  g.Errori_Totali = g.Passaggi_Sbagliati + g.Dribbling_Falliti;
  g.Azioni_Totali = g.Passaggi_Totali + g.Dribbling_Tentati + g.Tiri_Totali;
  g.Tasso_Errore_pct = perc(g.Errori_Totali, g.Azioni_Totali);
  const m = g.Minuti_Giocati;
  ["Gol","Assist","Coinvolgimento_Gol","Recuperi","Tiri_Totali","Dribbling_Tentati","Errori_Totali"].forEach(c => {
    g[c+"_per60"] = m > 0 ? g[c]/m*60 : null;
  });
  g.Indice_Prestazione = indicePrestazione(g);
  g.Data = partita ? partita.Data : null;
  g.Mese = partita ? partita.Mese : null;
  g.EtichettaPartita = partita ? partita.Etichetta : g.Match_ID;
  g.OrdinePartita = partita ? partita.Ordine : null;
  return g;
}

function aggregaGiocatori(righe){
  const gruppi = new Map();
  righe.forEach(r => {
    if(!gruppi.has(r.Giocatore)) gruppi.set(r.Giocatore, {Giocatore:r.Giocatore, Ruolo:r.Ruolo, righe:[], match:new Set()});
    const g = gruppi.get(r.Giocatore); g.righe.push(r); g.match.add(r.Match_ID);
  });
  const somma = (rs,c) => rs.reduce((a,r)=>a+N(r[c]),0);
  return Array.from(gruppi.values()).map(g => {
    const rs = g.righe;
    const a = {Giocatore:g.Giocatore, Ruolo:g.Ruolo, Partite_Giocate:g.match.size,
      Minuti_Totali:somma(rs,"Minuti_Giocati"), Gol:somma(rs,"Gol"), Assist:somma(rs,"Assist"),
      Tiri_In_Porta:somma(rs,"Tiri_In_Porta"), Tiri_Fuori:somma(rs,"Tiri_Fuori"),
      Passaggi_Corretti:somma(rs,"Passaggi_Corretti"), Passaggi_Sbagliati:somma(rs,"Passaggi_Sbagliati"),
      Dribbling_Tentati:somma(rs,"Dribbling_Tentati"), Dribbling_Falliti:somma(rs,"Dribbling_Falliti"),
      Recuperi:somma(rs,"Recuperi"), Parate:somma(rs,"Parate"),
      Indice_Prestazione_Tot:rs.reduce((s,r)=>s+r.Indice_Prestazione,0),
      serieIndice: rs.slice().sort((x,y)=>(x.Data?x.Data:0)-(y.Data?y.Data:0)).map(r=>r.Indice_Prestazione)
    };
    a.Tiri_Totali = a.Tiri_In_Porta + a.Tiri_Fuori;
    a.Passaggi_Totali = a.Passaggi_Corretti + a.Passaggi_Sbagliati;
    a.Dribbling_Riusciti = a.Dribbling_Tentati - a.Dribbling_Falliti;
    a.Coinvolgimento_Gol = a.Gol + a.Assist;
    a.Errori_Totali = a.Passaggi_Sbagliati + a.Dribbling_Falliti;
    a.Azioni_Totali = a.Passaggi_Totali + a.Dribbling_Tentati + a.Tiri_Totali;
    a.Precisione_Tiro_pct = perc(a.Tiri_In_Porta, a.Tiri_Totali);
    a.Efficacia_Realizzativa_pct = perc(a.Gol, a.Tiri_Totali);
    a.Precisione_Passaggi_pct = perc(a.Passaggi_Corretti, a.Passaggi_Totali);
    a.Successo_Dribbling_pct = perc(a.Dribbling_Riusciti, a.Dribbling_Tentati);
    a.Tasso_Errore_pct = perc(a.Errori_Totali, a.Azioni_Totali);
    a.Indice_Prestazione_Medio = a.Partite_Giocate>0 ? a.Indice_Prestazione_Tot/a.Partite_Giocate : null;
    return a;
  }).sort((x,y)=> y.Indice_Prestazione_Tot - x.Indice_Prestazione_Tot);
}

function riepilogoSquadra(righe, partite){
  const s = c => righe.reduce((a,r)=>a+N(r[c]),0);
  const tiriTot = s("Tiri_In_Porta")+s("Tiri_Fuori");
  const passTot = s("Passaggi_Corretti")+s("Passaggi_Sbagliati");
  const dribTent = s("Dribbling_Tentati");
  const dribRius = dribTent - s("Dribbling_Falliti");
  const azioni = passTot + dribTent + tiriTot;
  return {
    partite: partite.length,
    gol_fatti: partite.reduce((a,p)=>a+p.Gol_Fatti,0),
    gol_subiti: partite.reduce((a,p)=>a+p.Gol_Subiti,0),
    gol_giocatori: s("Gol"), assist: s("Assist"),
    tiri_in_porta: s("Tiri_In_Porta"), tiri_totali: tiriTot,
    precisione_tiro: perc(s("Tiri_In_Porta"), tiriTot),
    precisione_passaggi: perc(s("Passaggi_Corretti"), passTot),
    successo_dribbling: perc(dribRius, dribTent),
    tasso_errore: perc(s("Passaggi_Sbagliati")+s("Dribbling_Falliti"), azioni),
    recuperi: s("Recuperi"), parate: s("Parate")
  };
}

function regressione(xs, ys){
  const px=[], py=[];
  for(let i=0;i<xs.length;i++){
    const x=xs[i], y=ys[i];
    if(x===null||y===null||!isFinite(x)||!isFinite(y)) continue;
    px.push(x); py.push(y);
  }
  const n = px.length;
  if(n < 3) return null;
  if(px.every(v => v===px[0])) return null;
  const mx = px.reduce((a,b)=>a+b,0)/n, my = py.reduce((a,b)=>a+b,0)/n;
  let sxy=0, sxx=0, syy=0;
  for(let i=0;i<n;i++){ const dx=px[i]-mx, dy=py[i]-my; sxy+=dx*dy; sxx+=dx*dx; syy+=dy*dy; }
  if(sxx === 0) return null;
  const slope = sxy/sxx, intercept = my - slope*mx;
  const r = (sxx>0 && syy>0) ? sxy/Math.sqrt(sxx*syy) : 0;
  const xmin = Math.min(...px), xmax = Math.max(...px);
  const vi = slope*xmin+intercept, vf = slope*xmax+intercept;
  return {n, slope, intercept, r, xmin, xmax, valore_iniziale:vi, valore_finale:vf, delta_totale:vf-vi};
}

const CONFIG_TREND = {
  Tasso_Errore_pct:   {label:"Tasso di errore", unit:"%", soglia:6, dec:0, meglioAlto:false,
    desc:"Palloni persi (passaggi sbagliati + dribbling falliti) sul totale delle azioni. Scendere è positivo."},
  Precisione_Tiro_pct:{label:"Precisione al tiro", unit:"%", soglia:8, dec:0, meglioAlto:true,
    desc:"Tiri in porta sul totale dei tiri. Salire è positivo."},
  Minuti_Giocati:     {label:"Minuti giocati", unit:"'", soglia:10, dec:0, meglioAlto:null,
    desc:"Minutaggio a partita. Non è né buono né cattivo in sé: dice come sta cambiando il ruolo del giocatore nella rosa."}
};

function calcolaTendenze(righe){
  const perG = new Map();
  righe.filter(r=>r.Data).sort((a,b)=>a.Data-b.Data).forEach(r => {
    if(!perG.has(r.Giocatore)) perG.set(r.Giocatore, []);
    perG.get(r.Giocatore).push(r);
  });
  const out = [];
  perG.forEach((rs, nome) => {
    rs.forEach((r,i) => r.__ord = i+1);
    Object.keys(CONFIG_TREND).forEach(metrica => {
      const cfg = CONFIG_TREND[metrica];
      const punti = rs.filter(r => r[metrica] !== null && r[metrica] !== undefined && isFinite(r[metrica]));
      if(punti.length < 3) return;
      const fit = regressione(punti.map(r=>r.__ord), punti.map(r=>r[metrica]));
      if(!fit) return;
      const rilevante = Math.abs(fit.delta_totale) >= cfg.soglia && Math.abs(fit.r) >= 0.35;
      const direzione = Math.abs(fit.delta_totale) < cfg.soglia*0.3 ? "stabile" : (fit.slope>0 ? "in aumento" : "in calo");
      let giudizio = "neutro";
      if(cfg.meglioAlto === true) giudizio = fit.delta_totale>0 ? "positivo":"negativo";
      if(cfg.meglioAlto === false) giudizio = fit.delta_totale<0 ? "positivo":"negativo";
      if(direzione === "stabile") giudizio = "neutro";
      out.push({Giocatore:nome, Ruolo:rs[0].Ruolo, Metrica:metrica, cfg, ...fit, rilevante, direzione, giudizio,
        punti: punti.map(r=>({x:r.__ord, y:r[metrica], etichetta:r.EtichettaPartita}))});
    });
  });
  return out;
}

function fraseTendenza(t){
  const g = t.Giocatore, n = t.n, d = Math.abs(t.delta_totale);
  const vi = nf(t.valore_iniziale, t.cfg.dec)+t.cfg.unit, vf = nf(t.valore_finale, t.cfg.dec)+t.cfg.unit;
  if(t.Metrica === "Tasso_Errore_pct"){
    return t.delta_totale > 0
      ? `Il tasso di errore di ${g} è aumentato di ${nf0(d)} punti percentuali nelle ultime ${n} partite (da circa ${vi} a ${vf}): può valere la pena lavorare sulla gestione del pallone in allenamento.`
      : `Il tasso di errore di ${g} è diminuito di ${nf0(d)} punti percentuali nelle ultime ${n} partite (da circa ${vi} a ${vf}): segnale di maggiore sicurezza nella gestione del pallone.`;
  }
  if(t.Metrica === "Precisione_Tiro_pct"){
    return t.delta_totale > 0
      ? `La precisione al tiro di ${g} è migliorata di ${nf0(d)} punti percentuali nelle ultime ${n} partite (da circa ${vi} a ${vf}).`
      : `La precisione al tiro di ${g} è peggiorata di ${nf0(d)} punti percentuali nelle ultime ${n} partite (da circa ${vi} a ${vf}): da monitorare nei prossimi allenamenti.`;
  }
  if(t.Metrica === "Minuti_Giocati"){
    return t.delta_totale > 0
      ? `I minuti giocati da ${g} sono in crescita nel corso della stagione (da circa ${vi} a ${vf} a partita): sta guadagnando spazio in squadra.`
      : `I minuti giocati da ${g} sono in calo nel corso della stagione (da circa ${vi} a ${vf} a partita): da capire con lo staff tecnico se per scelta o per altri motivi.`;
  }
  return `${g}: ${t.cfg.label.toLowerCase()} ${t.direzione}.`;
}

function aggregaAllenamenti(sessioni, presenze){
  const idSess = new Set(sessioni.map(s=>s.Sessione_ID));
  const pres = presenze.filter(p => idSess.has(p.Sessione_ID));
  const totSess = idSess.size;
  const gruppi = new Map();
  pres.forEach(p => {
    if(!gruppi.has(p.Giocatore)) gruppi.set(p.Giocatore, {Giocatore:p.Giocatore, presenti:0, minuti:0, carico:0, rpe:[], n:0});
    const g = gruppi.get(p.Giocatore);
    g.n++; if(p.Presente){ g.presenti++; g.minuti += p.Minuti_Allenamento; if(p.RPE!==null) g.rpe.push(p.RPE); }
    g.carico += (p.Carico||0);
  });
  return {totSess, righe: Array.from(gruppi.values()).map(g => ({
    Giocatore:g.Giocatore, Sessioni_Presenti:g.presenti, Sessioni_Totali:totSess,
    Tasso_Presenza_pct: perc(g.presenti, totSess), Minuti_Tot:g.minuti, Carico_Tot:g.carico,
    RPE_Medio: g.rpe.length ? g.rpe.reduce((a,b)=>a+b,0)/g.rpe.length : null
  })).sort((a,b)=> (b.Tasso_Presenza_pct??-1) - (a.Tasso_Presenza_pct??-1))};
}

function caricoMensile(sessioni, presenze){
  const perMese = new Map();
  presenze.forEach(p => {
    if(!p.Mese) return;
    if(!perMese.has(p.Mese)) perMese.set(p.Mese, {Mese:p.Mese, carico:0, n:0, sess:new Set()});
    const m = perMese.get(p.Mese); m.carico += p.Carico; m.n++; m.sess.add(p.Sessione_ID);
  });
  return Array.from(perMese.values()).sort((a,b)=>a.Mese.localeCompare(b.Mese))
    .map(m => ({Mese:m.Mese, Carico_Tot:m.carico, Carico_Medio: m.n>0 ? m.carico/m.n : null, Sessioni:m.sess.size}));
}

function caricoGiocatoreMese(presenze){
  const map = new Map();
  presenze.forEach(p => {
    if(!p.Mese) return;
    const k = p.Giocatore+"|"+p.Mese;
    map.set(k, (map.get(k)||0) + p.Carico);
  });
  return map;
}

/** Indice prestazione medio di un giocatore in un dato mese, sulle sole partite di quel mese. */
function indiceMedioGiocatoreMese(giocatori, mese){
  const righe = giocatori.filter(g => g.Mese === mese);
  const agg = aggregaGiocatori(righe);
  const map = new Map();
  agg.forEach(a => map.set(a.Giocatore, a.Indice_Prestazione_Medio));
  return map;
}

/** Segnali incrociati carico di allenamento ↔ rendimento in partita, mese su mese. */
function incrociCaricoRendimento(ds){
  const mesiConPartite = Array.from(new Set(ds.partite.map(p=>p.Mese).filter(Boolean))).sort();
  const caricoGM = caricoGiocatoreMese(ds.presenze);
  const out = [];
  for(let i=1;i<mesiConPartite.length;i++){
    const mPrec = mesiConPartite[i-1], mCorr = mesiConPartite[i];
    const idxPrec = indiceMedioGiocatoreMese(ds.giocatori, mPrec);
    const idxCorr = indiceMedioGiocatoreMese(ds.giocatori, mCorr);
    idxCorr.forEach((valCorr, nome) => {
      const valPrec = idxPrec.get(nome);
      if(valPrec === undefined || valPrec === null || valCorr === null) return;
      const deltaIndice = valCorr - valPrec;
      const caricoPrec = caricoGM.get(nome+"|"+mPrec) || 0;
      const caricoCorr = caricoGM.get(nome+"|"+mCorr) || 0;
      if(caricoPrec <= 0) return;
      const rapportoCarico = caricoCorr / caricoPrec;
      let tipo = null;
      if(rapportoCarico >= 1.4 && deltaIndice <= -1.5) tipo = "affaticamento";
      else if(rapportoCarico >= 0.75 && rapportoCarico <= 1.3 && deltaIndice >= 1.5) tipo = "positivo";
      else if(rapportoCarico <= 0.6 && deltaIndice <= -1.5) tipo = "carico_basso";
      if(tipo) out.push({Giocatore:nome, mesePrec:mPrec, meseCorr:mCorr, deltaIndice, rapportoCarico, caricoPrec, caricoCorr, tipo});
    });
  }
  return out.sort((a,b)=> Math.abs(b.deltaIndice) - Math.abs(a.deltaIndice));
}

/** Classifica i giocatori per coinvolgimento nel gioco (azioni con palla ogni 90'), su tutta la stagione.
 *  Proxy costruita solo con azioni tentate dal giocatore stesso (passaggi, tiri, dribbling): non misura
 *  quanto un giocatore viene cercato dai compagni, perché i passaggi ricevuti non sono tra i dati raccolti. */
function classificaCoinvolgimento(righe){
  return aggregaGiocatori(righe)
    .map(a => ({
      Giocatore:a.Giocatore, Ruolo:a.Ruolo, Partite_Giocate:a.Partite_Giocate,
      Minuti_Totali:a.Minuti_Totali, Azioni_Totali:a.Azioni_Totali,
      Coinvolgimento_90: a.Minuti_Totali > 0 ? (a.Azioni_Totali/a.Minuti_Totali)*90 : null
    }))
    .filter(a => a.Coinvolgimento_90 !== null)
    .sort((a,b) => b.Coinvolgimento_90 - a.Coinvolgimento_90);
}

/** Rendimento di squadra aggregato per modulo tattico (colonna facoltativa Modulo nel foglio Partite).
 *  Non tiene conto della forza dell'avversario: vedi avvertenza in Metodologia. */
function rendimentoPerFormazione(ds){
  const gruppi = new Map();
  ds.partite.forEach(p => {
    const mod = p.Modulo || "Non indicato";
    if(!gruppi.has(mod)) gruppi.set(mod, []);
    gruppi.get(mod).push(p);
  });
  return Array.from(gruppi.entries()).map(([modulo, partite]) => {
    const ids = new Set(partite.map(p=>p.Match_ID));
    const righe = ds.giocatori.filter(g => ids.has(g.Match_ID));
    const s = riepilogoSquadra(righe, partite);
    const n = partite.length;
    const diffRetiTot = partite.reduce((a,p)=>a+(p.Gol_Fatti-p.Gol_Subiti),0);
    return {
      Modulo: modulo, Partite: n,
      Gol_Fatti_Media: n ? s.gol_fatti/n : null,
      Gol_Subiti_Media: n ? s.gol_subiti/n : null,
      Differenza_Reti_Media: n ? diffRetiTot/n : null,
      Precisione_Passaggi_pct: s.precisione_passaggi,
      Tasso_Errore_pct: s.tasso_errore,
      sufficiente: n >= 2 && modulo !== "Non indicato"
    };
  }).sort((a,b) => (b.Differenza_Reti_Media ?? -999) - (a.Differenza_Reti_Media ?? -999));
}

/* ---------------------- Validazione ---------------------- */
function validaDati(ds){
  const av = [];
  const add = (tipo, testo) => av.push({tipo, testo});
  const idPartite = new Set(ds.partite.map(p=>p.Match_ID));
  const idUsati = new Set(ds.giocatori.map(g=>g.Match_ID));
  ds.giocatori.forEach(g => { if(!idPartite.has(g.Match_ID))
    add("errore", `La riga di <strong>${esc(g.Giocatore)}</strong> ha Match_ID «${esc(g.Match_ID)}», che non esiste nel foglio Partite: quella partita non entra nei calcoli di data e periodo.`); });
  ds.partite.forEach(p => { if(!idUsati.has(p.Match_ID))
    add("attenzione", `La partita <strong>${esc(p.Match_ID)}</strong> (${dataLabel(p.Data)} vs ${esc(p.Avversario)}) non ha nessuna riga giocatore in Statistiche_Giocatori.`); });
  ds.giocatori.forEach(g => {
    const dove = `${esc(g.Giocatore)} — ${esc(g.Match_ID)}`;
    if(g.Dribbling_Falliti > g.Dribbling_Tentati)
      add("errore", `${dove}: i dribbling falliti (${nf0(g.Dribbling_Falliti)}) sono più di quelli tentati (${nf0(g.Dribbling_Tentati)}).`);
    if(g.Gol > g.Tiri_In_Porta)
      add("errore", `${dove}: ${nf0(g.Gol)} gol con soli ${nf0(g.Tiri_In_Porta)} tiri in porta. Ogni gol nasce da un tiro in porta, quindi uno dei due valori è da correggere.`);
    if(g.Minuti_Giocati < 0 || g.Minuti_Giocati > 90)
      add("attenzione", `${dove}: minuti giocati fuori dall'intervallo previsto 0–90 (${nf0(g.Minuti_Giocati)}).`);
    ["Gol","Assist","Tiri_In_Porta","Tiri_Fuori","Passaggi_Corretti","Passaggi_Sbagliati","Dribbling_Tentati","Dribbling_Falliti","Recuperi","Parate"].forEach(c => {
      if(N(g[c]) < 0) add("errore", `${dove}: valore negativo nella colonna ${c} (${nf0(N(g[c]))}).`);
    });
    if(g.Parate > 0 && !/portier/i.test(g.Ruolo))
      add("attenzione", `${dove}: ${nf0(g.Parate)} parate registrate per un giocatore con ruolo «${esc(g.Ruolo)}». Le parate contano molto nell'indice prestazione: controlla che il ruolo sia corretto.`);
  });
  const dupG = new Map();
  ds.giocatori.forEach(g => { const k = g.Match_ID+"|"+g.Giocatore; dupG.set(k, (dupG.get(k)||0)+1); });
  dupG.forEach((n,k) => { if(n>1) add("errore", `Riga duplicata in Statistiche_Giocatori: ${esc(k.replace("|"," — "))} appare ${n} volte, quindi i suoi numeri vengono contati più volte.`); });
  const dupP = new Map();
  ds.presenze.forEach(p => { const k = p.Sessione_ID+"|"+p.Giocatore; dupP.set(k, (dupP.get(k)||0)+1); });
  dupP.forEach((n,k) => { if(n>1) add("errore", `Riga duplicata in Presenze_Allenamento: ${esc(k.replace("|"," — "))} appare ${n} volte.`); });
  const idSess = new Set(ds.allenamenti.map(a=>a.Sessione_ID));
  ds.presenze.forEach(p => {
    const dove = `${esc(p.Giocatore)} — ${esc(p.Sessione_ID)}`;
    if(!idSess.has(p.Sessione_ID))
      add("errore", `${dove}: la sessione non esiste nel foglio Allenamenti, quindi la presenza non viene attribuita a nessun mese.`);
    if(p.Presente && p.RPE!==null && (p.RPE < 1 || p.RPE > 10))
      add("attenzione", `${dove}: RPE fuori dalla scala 1–10 (${nf(p.RPE,0)}). Il carico di allenamento risulta distorto.`);
    if(!p.Presente && p.Minuti_Allenamento > 0)
      add("attenzione", `${dove}: segnato assente ma con ${nf0(p.Minuti_Allenamento)} minuti di allenamento. Il carico è stato messo a 0.`);
    if(p.DurataSessione !== null && p.Minuti_Allenamento > p.DurataSessione && p.DurataSessione > 0)
      add("attenzione", `${dove}: ${nf0(p.Minuti_Allenamento)} minuti di allenamento su una sessione di ${nf0(p.DurataSessione)} minuti.`);
  });
  return av;
}

/* =====================================================================
   STATO E RENDER
   ===================================================================== */
const stato = {ds:null, periodo:"tutto", giocatore:null, ordina:{col:"Indice_Prestazione_Tot", dir:-1}, chiaveIA:"", grafici:{}};

function colore(nome){ return getComputedStyle(document.documentElement).getPropertyValue("--"+nome).trim(); }
function distruggiGrafici(){ Object.values(stato.grafici).forEach(c => { try{ c.destroy(); }catch(e){} }); stato.grafici = {}; }

function creaGrafico(id, config, root=document){
  const el = root.getElementById ? root.getElementById(id) : root.querySelector("#"+id);
  if(!el) return null;
  if(stato.grafici[id]){ try{ stato.grafici[id].destroy(); }catch(e){} }
  const chart = new Chart(el, config);
  stato.grafici[id] = chart;
  return chart;
}

function baseOpzioni(extra={}){
  const testo = colore("muted"), griglia = colore("grid");
  return Object.assign({
    responsive:true, maintainAspectRatio:false,
    animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : {duration:600},
    interaction:{mode:"nearest", intersect:false},
    plugins:{
      legend:{display:true, position:"bottom", labels:{color:testo, boxWidth:12, boxHeight:12, font:{size:11}, usePointStyle:true, padding:12}},
      tooltip:{backgroundColor:colore("text"), titleColor:colore("bg"), bodyColor:colore("bg"), padding:10, cornerRadius:8, displayColors:true}
    },
    scales:{
      x:{ticks:{color:testo, font:{size:11}, maxRotation:0, autoSkipPadding:12}, grid:{color:griglia, drawTicks:false}, border:{color:griglia}},
      y:{ticks:{color:testo, font:{size:11}}, grid:{color:griglia, drawTicks:false}, border:{color:griglia}}
    }
  }, extra);
}

function datiFiltrati(){
  const ds = stato.ds;
  if(stato.periodo === "tutto")
    return {partite:ds.partite, giocatori:ds.giocatori, allenamenti:ds.allenamenti, presenze:ds.presenze, mese:null};
  const m = stato.periodo;
  const partite = ds.partite.filter(p => p.Mese === m);
  const ids = new Set(partite.map(p=>p.Match_ID));
  return {partite, giocatori: ds.giocatori.filter(g => ids.has(g.Match_ID)),
    allenamenti: ds.allenamenti.filter(a => a.Mese === m),
    presenze: ds.presenze.filter(p => p.Mese === m), mese:m};
}
function mesePrecedenteConDati(mese){
  const ds = stato.ds;
  const mesiPartite = Array.from(new Set(ds.partite.map(p=>p.Mese).filter(Boolean))).sort();
  if(mese){ const i = mesiPartite.indexOf(mese); return i > 0 ? mesiPartite[i-1] : null; }
  return mesiPartite.length >= 2 ? mesiPartite[mesiPartite.length-2] : null;
}
function meseCorrenteRiferimento(mese){
  const ds = stato.ds;
  const mesiPartite = Array.from(new Set(ds.partite.map(p=>p.Mese).filter(Boolean))).sort();
  return mese || (mesiPartite.length ? mesiPartite[mesiPartite.length-1] : null);
}
function datiMese(m){
  const ds = stato.ds;
  const partite = ds.partite.filter(p=>p.Mese===m);
  const ids = new Set(partite.map(p=>p.Match_ID));
  return {partite, giocatori: ds.giocatori.filter(g=>ids.has(g.Match_ID)),
    allenamenti: ds.allenamenti.filter(a=>a.Mese===m), presenze: ds.presenze.filter(p=>p.Mese===m)};
}

/* --------- 3. KPI --------- */
function renderKPI(f){
  const s = riepilogoSquadra(f.giocatori, f.partite);
  const mCorr = meseCorrenteRiferimento(f.mese), mPrec = mesePrecedenteConDati(f.mese);
  let sPrec = null, sCorr = null;
  if(mPrec){
    const dPrec = datiMese(mPrec), dCorr = datiMese(mCorr);
    sPrec = riepilogoSquadra(dPrec.giocatori, dPrec.partite);
    sCorr = riepilogoSquadra(dCorr.giocatori, dCorr.partite);
  }
  let presMedia = null, presMediaPrec = null;
  if(stato.ds.haAllenamenti){
    const ag = aggregaAllenamenti(f.allenamenti, f.presenze);
    const vals = ag.righe.map(r=>r.Tasso_Presenza_pct).filter(v=>v!==null);
    presMedia = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
    if(mPrec){
      const dp = datiMese(mPrec), agp = aggregaAllenamenti(dp.allenamenti, dp.presenze);
      const vp = agp.righe.map(r=>r.Tasso_Presenza_pct).filter(v=>v!==null);
      const dc = datiMese(mCorr), agc = aggregaAllenamenti(dc.allenamenti, dc.presenze);
      const vc = agc.righe.map(r=>r.Tasso_Presenza_pct).filter(v=>v!==null);
      if(vp.length && vc.length){
        presMediaPrec = vp.reduce((a,b)=>a+b,0)/vp.length;
        presMedia = f.mese ? presMedia : (vc.reduce((a,b)=>a+b,0)/vc.length);
        if(!f.mese){
          presMedia = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
        }
      }
    }
  }

  const perGara = v => f.partite.length>0 ? v/f.partite.length : null;
  const kpi = [
    {eti:"Gol fatti", val:nf0(s.gol_fatti), nota: f.partite.length? nf(perGara(s.gol_fatti),1)+" a partita":"", raw:s.gol_fatti,
      prevRaw: sPrec?sPrec.gol_fatti:null, currRaw: sCorr?sCorr.gol_fatti:null, meglio:"alto", dec:0, unit:""},
    {eti:"Gol subiti", val:nf0(s.gol_subiti), nota: f.partite.length? nf(perGara(s.gol_subiti),1)+" a partita":"", raw:s.gol_subiti,
      prevRaw: sPrec?sPrec.gol_subiti:null, currRaw: sCorr?sCorr.gol_subiti:null, meglio:"basso", dec:0, unit:""},
    {eti:"Precisione passaggi", val:pctTxt(s.precisione_passaggi), nota:nf0(s.gol_giocatori)+" gol e "+nf0(s.assist)+" assist dai giocatori",
      prevRaw: sPrec?sPrec.precisione_passaggi:null, currRaw: sCorr?sCorr.precisione_passaggi:null, meglio:"alto", dec:1, unit:" pt"},
    {eti:"Precisione tiro", val:pctTxt(s.precisione_tiro), nota:nf0(s.tiri_in_porta)+" tiri in porta su "+nf0(s.tiri_totali),
      prevRaw: sPrec?sPrec.precisione_tiro:null, currRaw: sCorr?sCorr.precisione_tiro:null, meglio:"alto", dec:1, unit:" pt"},
    {eti:"Successo dribbling", val:pctTxt(s.successo_dribbling), nota:"Tasso di errore squadra "+pctTxt(s.tasso_errore),
      prevRaw: sPrec?sPrec.successo_dribbling:null, currRaw: sCorr?sCorr.successo_dribbling:null, meglio:"alto", dec:1, unit:" pt"},
    stato.ds.haAllenamenti
      ? {eti:"Presenza media allenamenti", val:pctTxt(presMedia,0), nota:"Media dei tassi di presenza dei giocatori",
         prevRaw:presMediaPrec, currRaw:presMedia, meglio:"alto", dec:0, unit:" pt"}
      : {eti:"Presenza media allenamenti", val:"—", nota:"Fogli Allenamenti/Presenze non presenti nel file", prevRaw:null, currRaw:null}
  ];

  $("#kpi-desc").textContent = mPrec
    ? (f.mese
        ? `Valori di ${meseLabel(mCorr)}. Le frecce confrontano ${meseBreve(mCorr)} con ${meseLabel(mPrec)}, l'ultimo mese precedente con dati.`
        : `Totali di tutta la stagione caricata. Le frecce confrontano ${meseLabel(mCorr)} con ${meseLabel(mPrec)}, cioè gli ultimi due mesi con dati.`)
    : "Sintesi del periodo selezionato. Il confronto mese su mese comparirà quando avrai caricato partite in almeno due mesi diversi.";

  $("#griglia-kpi").innerHTML = kpi.map(k => {
    let delta = "";
    if(k.prevRaw !== null && k.prevRaw !== undefined && k.currRaw !== null && k.currRaw !== undefined && isFinite(k.prevRaw) && isFinite(k.currRaw)){
      const d = k.currRaw - k.prevRaw;
      const buono = k.meglio === "basso" ? d < 0 : d > 0;
      const cls = Math.abs(d) < (k.dec===0?0.5:0.05) ? "neutro" : (buono ? "su":"giu");
      const freccia = d > 0 ? "▲" : (d < 0 ? "▼" : "▬");
      const etichetta = cls==="neutro" ? "stabile" : (buono ? "in miglioramento" : "in peggioramento");
      delta = `<div class="kpi-delta ${cls}"><span aria-hidden="true">${freccia}</span><span>${d>0?"+":""}${nf(d,k.dec)}${k.unit} vs ${meseBreve(mPrec)} · ${etichetta}</span></div>`;
    } else {
      delta = `<div class="kpi-delta neutro"><span>Confronto mese su mese non disponibile</span></div>`;
    }
    return `<div class="kpi"><div class="kpi-eti">${esc(k.eti)}</div><div class="kpi-valore">${k.val}</div>${delta}${k.nota?`<div class="kpi-nota">${esc(k.nota)}</div>`:""}</div>`;
  }).join("");
}

/* --------- 4. Andamento --------- */
function renderAndamento(f){
  const cont = $("#contenuto-andamento");
  if(f.partite.length === 0){
    cont.className = ""; cont.innerHTML = `<div class="vuoto"><strong>Nessuna partita nel periodo selezionato.</strong> Cambia periodo dal filtro in alto oppure aggiungi partite al file Excel.</div>`;
    return;
  }
  const perMatch = f.partite.map(p => {
    const righe = f.giocatori.filter(g => g.Match_ID === p.Match_ID);
    const s = riepilogoSquadra(righe, [p]);
    return {p, s};
  });
  const etichette = perMatch.map(x => x.p.Etichetta);
  const serie = [
    {id:"gr-gol", titolo:"Gol fatti e subiti per partita", sub:"Linee continue: gol; la tratteggiata è la media dei gol fatti nel periodo.",
     dataset:[{label:"Gol fatti", data:perMatch.map(x=>x.p.Gol_Fatti), color:colore("c1")},
              {label:"Gol subiti", data:perMatch.map(x=>x.p.Gol_Subiti), color:colore("c2")}],
     media: perMatch.reduce((a,x)=>a+x.p.Gol_Fatti,0)/perMatch.length, mediaLabel:"Media gol fatti", suffisso:""},
    {id:"gr-passaggi", titolo:"Precisione passaggi di squadra", sub:"Passaggi corretti sul totale, partita per partita.",
     dataset:[{label:"Precisione passaggi", data:perMatch.map(x=>x.s.precisione_passaggi), color:colore("c1")}],
     media: media(perMatch.map(x=>x.s.precisione_passaggi)), mediaLabel:"Media periodo", suffisso:"%"},
    {id:"gr-tiro", titolo:"Precisione al tiro di squadra", sub:"Tiri in porta sul totale dei tiri, partita per partita.",
     dataset:[{label:"Precisione al tiro", data:perMatch.map(x=>x.s.precisione_tiro), color:colore("c3")}],
     media: media(perMatch.map(x=>x.s.precisione_tiro)), mediaLabel:"Media periodo", suffisso:"%"},
    {id:"gr-errore", titolo:"Tasso di errore di squadra", sub:"Palloni persi sul totale delle azioni: più è basso, meglio è.",
     dataset:[{label:"Tasso di errore", data:perMatch.map(x=>x.s.tasso_errore), color:colore("c5")}],
     media: media(perMatch.map(x=>x.s.tasso_errore)), mediaLabel:"Media periodo", suffisso:"%"}
  ];
  cont.className = "griglia g-2";
  cont.innerHTML = serie.map(s => `<div class="card"><div class="grafico-titolo">${esc(s.titolo)}</div><div class="grafico-sub">${esc(s.sub)}</div><div class="grafico-wrap"><canvas id="${s.id}"></canvas></div></div>`).join("");
  serie.forEach(s => {
    const ds = s.dataset.map(d => ({
      label:d.label, data:d.data, borderColor:d.color, backgroundColor:d.color,
      pointRadius:4, pointHoverRadius:6, borderWidth:2.5, tension:0.25, spanGaps:true
    }));
    if(s.media !== null && isFinite(s.media)){
      ds.push({label:s.mediaLabel+" ("+nf(s.media, s.suffisso?1:1)+s.suffisso+")",
        data:etichette.map(()=>s.media), borderColor:colore("faint"), borderDash:[6,5], borderWidth:1.8, pointRadius:0, fill:false});
    }
    creaGrafico(s.id, {type:"line", data:{labels:etichette, datasets:ds},
      options:baseOpzioni({scales:{
        x:{ticks:{color:colore("muted"), font:{size:10.5}, maxRotation:38, minRotation:0, autoSkip:true, maxTicksLimit:8}, grid:{display:false}, border:{color:colore("grid")}},
        y:{beginAtZero:true, suggestedMax: s.suffisso==="%"?100:undefined, ticks:{color:colore("muted"), font:{size:11}, callback:v=>nf0(v)+s.suffisso}, grid:{color:colore("grid")}, border:{color:colore("grid")}}
      }})});
  });
}
function media(arr){ const v = arr.filter(x=>x!==null && isFinite(x)); return v.length ? v.reduce((a,b)=>a+b,0)/v.length : null; }

/* --------- 5. Classifica --------- */
const COLONNE_TAB = [
  {k:"Giocatore", eti:"Giocatore", tipo:"testo"},
  {k:"Partite_Giocate", eti:"Partite", tipo:"num", dec:0},
  {k:"Minuti_Totali", eti:"Minuti", tipo:"num", dec:0},
  {k:"Gol", eti:"Gol", tipo:"num", dec:0},
  {k:"Assist", eti:"Assist", tipo:"num", dec:0},
  {k:"Precisione_Passaggi_pct", eti:"Prec. passaggi", tipo:"pct"},
  {k:"Successo_Dribbling_pct", eti:"Succ. dribbling", tipo:"pct"},
  {k:"Tasso_Errore_pct", eti:"Tasso errore", tipo:"pct"},
  {k:"Indice_Prestazione_Tot", eti:"Indice prest.", tipo:"num", dec:1},
  {k:"sparkline", eti:"Andamento indice", tipo:"spark"}
];
function renderClassifica(f){
  const cont = $("#contenuto-classifica");
  const agg = aggregaGiocatori(f.giocatori);
  if(agg.length === 0){
    cont.innerHTML = `<div class="vuoto"><strong>Nessuna riga giocatore nel periodo selezionato.</strong> Prova a scegliere «Tutta la stagione» dal filtro Periodo.</div>`;
    return;
  }
  const {col, dir} = stato.ordina;
  agg.sort((a,b) => {
    if(col === "Giocatore") return dir * String(a.Giocatore).localeCompare(String(b.Giocatore), "it");
    const va = a[col], vb = b[col];
    const na = (va===null||va===undefined||!isFinite(va)) ? -Infinity : va;
    const nb = (vb===null||vb===undefined||!isFinite(vb)) ? -Infinity : vb;
    return dir === -1 ? nb - na : na - nb;
  });
  const righe = agg.map(a => `<tr>
    <td>${esc(a.Giocatore)}<span class="ruolo">${esc(a.Ruolo)}</span></td>
    <td>${nf0(a.Partite_Giocate)}</td>
    <td>${nf0(a.Minuti_Totali)}'</td>
    <td>${nf0(a.Gol)}</td>
    <td>${nf0(a.Assist)}</td>
    <td>${pctTxt(a.Precisione_Passaggi_pct)}</td>
    <td>${pctTxt(a.Successo_Dribbling_pct)}</td>
    <td>${pctTxt(a.Tasso_Errore_pct)}</td>
    <td><strong>${nf(a.Indice_Prestazione_Tot,1)}</strong><span class="ruolo">${nf(a.Indice_Prestazione_Medio,1)} a partita</span></td>
    <td><canvas class="spark" width="88" height="26" data-serie="${a.serieIndice.join(",")}" aria-label="Andamento dell'indice prestazione di ${esc(a.Giocatore)}"></canvas></td>
  </tr>`).join("");
  cont.innerHTML = `<div class="tabella-scroll"><table>
    <caption class="solo-sr">Classifica dei giocatori nel periodo selezionato</caption>
    <thead><tr>${COLONNE_TAB.map(c => {
      const sort = c.k === col ? (dir===-1?"descending":"ascending") : "none";
      return `<th scope="col" data-col="${c.k}" ${c.tipo==="spark"?"":`aria-sort="${sort}" tabindex="0" role="columnheader"`}>${esc(c.eti)}</th>`;
    }).join("")}</tr></thead><tbody>${righe}</tbody></table></div>
    <p class="kpi-nota" style="margin-top:8px">L'indice prestazione è una somma pesata non ufficiale: utile per confrontare i giocatori della stessa squadra, non per confronti assoluti. Vedi la sezione Metodologia.</p>`;
  $$("th[data-col]", cont).forEach(th => {
    if(th.dataset.col === "sparkline") return;
    const attiva = () => {
      const c = th.dataset.col;
      if(stato.ordina.col === c) stato.ordina.dir *= -1;
      else stato.ordina = {col:c, dir: c==="Giocatore" ? 1 : -1};
      renderClassifica(datiFiltrati());
    };
    th.addEventListener("click", attiva);
    th.addEventListener("keydown", e => { if(e.key==="Enter"||e.key===" "){ e.preventDefault(); attiva(); } });
  });
  $$("canvas.spark", cont).forEach(disegnaSpark);
}
function disegnaSpark(cv){
  const serie = cv.dataset.serie.split(",").map(Number).filter(v=>isFinite(v));
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const w = cv.width, h = cv.height;
  cv.width = w*dpr; cv.height = h*dpr; cv.style.width = w+"px"; cv.style.height = h+"px";
  ctx.scale(dpr, dpr); ctx.clearRect(0,0,w,h);
  if(serie.length === 0) return;
  if(serie.length === 1){
    ctx.fillStyle = colore("c1"); ctx.beginPath(); ctx.arc(w/2, h/2, 3, 0, Math.PI*2); ctx.fill(); return;
  }
  const min = Math.min(...serie), max = Math.max(...serie), span = (max-min)||1;
  const px = i => 3 + i*(w-6)/(serie.length-1);
  const py = v => h-4 - ((v-min)/span)*(h-8);
  ctx.strokeStyle = colore("c1"); ctx.lineWidth = 1.8; ctx.lineJoin = "round"; ctx.beginPath();
  serie.forEach((v,i) => i===0 ? ctx.moveTo(px(i),py(v)) : ctx.lineTo(px(i),py(v)));
  ctx.stroke();
  ctx.fillStyle = colore("c1"); ctx.beginPath();
  ctx.arc(px(serie.length-1), py(serie[serie.length-1]), 2.6, 0, Math.PI*2); ctx.fill();
}

/* --------- 6. Tendenze --------- */
function renderTendenze(f){
  const cont = $("#contenuto-tendenze");
  const nPartitePerG = new Map();
  f.giocatori.forEach(g => nPartitePerG.set(g.Giocatore, (nPartitePerG.get(g.Giocatore)||0)+1));
  const maxPartite = Math.max(0, ...Array.from(nPartitePerG.values()));
  if(maxPartite < 3){
    cont.innerHTML = `<div class="vuoto"><strong>Servono almeno 3 partite giocate dallo stesso giocatore per tracciare una retta di interpolazione.</strong><br>
      Nel periodo selezionato il giocatore con più presenze ne ha ${nf0(maxPartite)}. Questa sezione si arricchisce da sola man mano che carichi nuove partite: con 3 punti la retta è già leggibile, con 6-8 diventa affidabile.</div>`;
    return;
  }
  const tutte = calcolaTendenze(f.giocatori);
  stato.tendenze = tutte;
  const blocchi = Object.keys(CONFIG_TREND).map(metrica => {
    const cfg = CONFIG_TREND[metrica];
    const rilev = tutte.filter(t => t.Metrica === metrica && t.rilevante)
      .sort((a,b) => Math.abs(b.delta_totale) - Math.abs(a.delta_totale)).slice(0,3);
    const tot = tutte.filter(t => t.Metrica === metrica).length;
    let corpo;
    if(tot === 0){
      corpo = `<div class="vuoto"><strong>Dati insufficienti per questa metrica.</strong><br>Nessun giocatore ha almeno 3 partite con questo valore registrato${metrica==="Precisione_Tiro_pct"?" (serve almeno un tiro per partita)":metrica==="Tasso_Errore_pct"?" (servono passaggi, dribbling o tiri registrati)":""}. Compila la colonna corrispondente nel foglio Statistiche_Giocatori e la retta comparirà da sola.</div>`;
    } else if(rilev.length === 0){
      corpo = `<div class="vuoto">Nessuna tendenza marcata su questa metrica: per i ${nf0(tot)} giocatori con almeno 3 partite valide i valori restano abbastanza stabili partita dopo partita (variazione sotto ${nf0(cfg.soglia)}${cfg.unit} oppure andamento troppo irregolare per essere considerato una tendenza).</div>`;
    } else {
      corpo = `<div class="griglia g-2">` + rilev.map((t,i) => {
        const id = "gr-trend-"+metrica+"-"+i;
        const pill = t.giudizio==="positivo" ? `<span class="pill pos">Segnale positivo</span>`
          : t.giudizio==="negativo" ? `<span class="pill neg">Da attenzionare</span>` : `<span class="pill neu">Da leggere nel contesto</span>`;
        return `<div class="trend-card">
          <div class="trend-testa"><div><div class="trend-nome">${esc(t.Giocatore)}</div><div class="trend-stat">${esc(t.Ruolo)} · ${cfg.label} ${t.direzione}</div></div>${pill}</div>
          <div class="grafico-wrap"><canvas id="${id}"></canvas></div>
          <div class="trend-frase">${esc(fraseTendenza(t))}</div>
          <div class="trend-stat">Variazione stimata dalla retta: ${t.delta_totale>0?"+":""}${nf(t.delta_totale,cfg.dec)}${cfg.unit} su ${nf0(t.n)} partite · correlazione r = ${nf(t.r,2)} · soglia di rilevanza ${nf0(cfg.soglia)}${cfg.unit}</div>
        </div>`;
      }).join("") + `</div>`;
    }
    return {metrica, cfg, rilev, html:`<div class="trend-blocco">
      <h3>${esc(cfg.label)}</h3><div class="meta">${esc(cfg.desc)}</div>${corpo}</div>`};
  });
  cont.innerHTML = blocchi.map(b => b.html).join("");
  blocchi.forEach(b => b.rilev.forEach((t,i) => disegnaTrend("gr-trend-"+b.metrica+"-"+i, t)));
  const nRil = tutte.filter(t=>t.rilevante).length;
  cont.insertAdjacentHTML("beforeend", `<p class="kpi-nota">Analizzati ${nf0(new Set(tutte.map(t=>t.Giocatore)).size)} giocatori con almeno 3 partite: ${nf0(nRil)} tendenze superano la soglia di rilevanza. Le rette sono indicazioni statistiche, da confrontare con quello che hai visto in campo.</p>`);
}

function disegnaTrend(id, t){
  const cfg = t.cfg;
  const punti = t.punti.map(p => ({x:p.x, y:p.y, etichetta:p.etichetta}));
  const retta = [{x:t.xmin, y:t.valore_iniziale}, {x:t.xmax, y:t.valore_finale}];
  const colPunti = t.giudizio==="negativo" ? colore("c2") : colore("c1");
  const ys = punti.map(p=>p.y).concat([t.valore_iniziale, t.valore_finale]);
  const minY = Math.min(...ys), maxY = Math.max(...ys), pad = Math.max(2, (maxY-minY)*0.25);
  creaGrafico(id, {
    type:"scatter",
    data:{datasets:[
      {label:"Partite giocate", data:punti, backgroundColor:colPunti, borderColor:colPunti,
       pointRadius:5.5, pointHoverRadius:8, showLine:false, order:2},
      {label:"Retta di interpolazione", data:retta, borderColor:colore("text"), borderDash:[7,5], borderWidth:2.2,
       pointRadius:0, showLine:true, fill:false, order:1}
    ]},
    options:baseOpzioni({
      plugins:{
        legend:{display:true, position:"bottom", labels:{color:colore("muted"), boxWidth:14, boxHeight:2, font:{size:11}, usePointStyle:false, padding:10}},
        tooltip:{backgroundColor:colore("text"), titleColor:colore("bg"), bodyColor:colore("bg"), padding:10, cornerRadius:8,
          callbacks:{
            title:(items)=> items[0].datasetIndex===0 ? (punti[items[0].dataIndex]?.etichetta || "Partita "+items[0].parsed.x) : "Retta di interpolazione",
            label:(it)=> cfg.label+": "+nf(it.parsed.y, cfg.dec===0?1:cfg.dec)+cfg.unit
          }}
      },
      scales:{
        x:{type:"linear", min:t.xmin-0.4, max:t.xmax+0.4,
          title:{display:true, text:"Partita del giocatore (in ordine di data)", color:colore("faint"), font:{size:10.5}},
          ticks:{stepSize:1, precision:0, autoSkip:(t.xmax - t.xmin) > 12, maxTicksLimit:14, maxRotation:0, color:colore("muted"), font:{size:11}, callback:v => Number.isInteger(v)? v : ""},
          grid:{color:colore("grid")}, border:{color:colore("grid")}},
        y:{min:Math.max(0, minY-pad), max:maxY+pad,
          title:{display:true, text:cfg.label+" ("+ (cfg.unit==="'"?"minuti":"%") +")", color:colore("faint"), font:{size:10.5}},
          ticks:{color:colore("muted"), font:{size:11}, maxTicksLimit:6, callback:v=>nf0(v)+cfg.unit}, grid:{color:colore("grid")}, border:{color:colore("grid")}}
      }
    })
  });
}

/* --------- 6b. Andamento individuale, coinvolgimento, formazioni (sempre tutta la stagione) --------- */
function renderAndamentoIndividuale(){
  const ds = stato.ds;
  renderAndamentoGiocatore(ds);
  renderCoinvolgimento(ds);
  renderFormazioni(ds);
}

function renderAndamentoGiocatore(ds){
  const cont = $("#contenuto-andamento-individuale");
  const nome = stato.giocatore;
  if(!nome){ cont.innerHTML = `<div class="vuoto">Carica dei dati per vedere questa sezione.</div>`; return; }
  const righeGioc = ds.giocatori.filter(g => g.Giocatore === nome).filter(g=>g.Data).sort((a,b)=>a.Data-b.Data);
  const mesiTrain = Array.from(new Set(ds.allenamenti.map(a=>a.Mese).filter(Boolean))).sort();
  const caricoGM = caricoGiocatoreMese(ds.presenze);
  const serieCarico = mesiTrain.map((m,i) => ({x:i+1, mese:m, y: caricoGM.get(nome+"|"+m) ?? null})).filter(p=>p.y!==null);

  cont.innerHTML = `<div class="griglia g-2">
    <div class="trend-card">
      <div class="trend-testa"><div><div class="trend-nome">${esc(nome)}</div><div class="trend-stat">Indice prestazione in partita — tutta la stagione (${righeGioc.length} partite)</div></div></div>
      ${righeGioc.length ? `<div class="grafico-wrap"><canvas id="gr-andind-partita"></canvas></div>` : `<div class="vuoto" style="margin:0">Nessuna partita registrata per questo giocatore.</div>`}
    </div>
    <div class="trend-card">
      <div class="trend-testa"><div><div class="trend-nome">${esc(nome)}</div><div class="trend-stat">Carico di allenamento (sRPE) — tutta la stagione</div></div></div>
      ${serieCarico.length ? `<div class="grafico-wrap"><canvas id="gr-andind-carico"></canvas></div>` : `<div class="vuoto" style="margin:0">Nessun dato di allenamento per questo giocatore.</div>`}
    </div>
  </div>`;

  if(righeGioc.length){
    const punti = righeGioc.map((r,i) => ({x:i+1, y:r.Indice_Prestazione, etichetta:r.EtichettaPartita}));
    creaGrafico("gr-andind-partita", {
      type:"line",
      data:{datasets:[{label:"Indice prestazione", data:punti, borderColor:colore("c1"), backgroundColor:colore("c1"), pointRadius:4.5, pointHoverRadius:7, tension:0.25}]},
      options: baseOpzioni({
        plugins:{legend:{display:false}, tooltip:{backgroundColor:colore("text"), titleColor:colore("bg"), bodyColor:colore("bg"), padding:10, cornerRadius:8,
          callbacks:{title:(items)=> punti[items[0].dataIndex]?.etichetta || "Partita "+items[0].parsed.x, label:(it)=>"Indice: "+nf(it.parsed.y,1)}}},
        scales:{x:{type:"linear", min:0.6, max:punti.length+0.4, ticks:{stepSize:1, precision:0, color:colore("muted"), font:{size:11}}, title:{display:true, text:"Partita in ordine cronologico", color:colore("faint"), font:{size:10.5}}, grid:{color:colore("grid")}},
          y:{ticks:{color:colore("muted"), font:{size:11}}, title:{display:true, text:"Indice prestazione", color:colore("faint"), font:{size:10.5}}, grid:{color:colore("grid")}}}
      })
    });
  }
  if(serieCarico.length){
    creaGrafico("gr-andind-carico", {
      type:"line",
      data:{datasets:[{label:"Carico sRPE", data:serieCarico, borderColor:colore("c3"), backgroundColor:colore("c3"), pointRadius:4.5, pointHoverRadius:7, tension:0.25}]},
      options: baseOpzioni({
        plugins:{legend:{display:false}, tooltip:{backgroundColor:colore("text"), titleColor:colore("bg"), bodyColor:colore("bg"), padding:10, cornerRadius:8,
          callbacks:{title:(items)=> meseLabel(serieCarico[items[0].dataIndex]?.mese), label:(it)=>"Carico: "+nf0(it.parsed.y)+" u.a."}}},
        scales:{x:{type:"linear", min:0.6, max:serieCarico.length+0.4, ticks:{stepSize:1, precision:0, callback:(v)=> meseBreve(serieCarico[v-1]?.mese) || "", color:colore("muted"), font:{size:11}}, grid:{color:colore("grid")}},
          y:{ticks:{color:colore("muted"), font:{size:11}}, title:{display:true, text:"Carico sRPE mensile", color:colore("faint"), font:{size:10.5}}, grid:{color:colore("grid")}}}
      })
    });
  }
}

function renderCoinvolgimento(ds){
  const cont = $("#contenuto-coinvolgimento");
  const classifica = classificaCoinvolgimento(ds.giocatori).slice(0,10);
  if(!classifica.length){ cont.innerHTML = `<div class="vuoto">Dati insufficienti per calcolare il coinvolgimento nel gioco.</div>`; return; }
  const max = Math.max(...classifica.map(c=>c.Coinvolgimento_90));
  cont.innerHTML = `<div class="tabella-scroll"><table>
    <caption class="solo-sr">Giocatori più coinvolti nel gioco, tutta la stagione</caption>
    <thead><tr><th scope="col">Giocatore</th><th scope="col">Partite</th><th scope="col">Azioni tot.</th><th scope="col">Coinvolgimento ogni 90'</th></tr></thead>
    <tbody>${classifica.map(c => `<tr>
      <td>${esc(c.Giocatore)}<span class="ruolo">${esc(c.Ruolo)}</span></td>
      <td>${nf0(c.Partite_Giocate)}</td>
      <td>${nf0(c.Azioni_Totali)}</td>
      <td><div class="barra-wrap"><div class="barra" style="width:${max>0?(c.Coinvolgimento_90/max*100):0}%; background:var(--c1)"></div><span>${nf(c.Coinvolgimento_90,1)}</span></div></td>
    </tr>`).join("")}</tbody>
  </table></div>`;
}

function renderFormazioni(ds){
  const cont = $("#contenuto-formazioni");
  const righe = rendimentoPerFormazione(ds);
  const conDati = righe.filter(r => r.Modulo !== "Non indicato");
  if(!conDati.length){
    cont.innerHTML = `<div class="vuoto"><strong>Nessuna partita ha ancora un modulo indicato.</strong><br>Aggiungi la colonna <strong>Modulo</strong> al foglio Partite (es. «2-3-1») e questa sezione si popolerà da sola.</div>`;
    return;
  }
  cont.innerHTML = `<div class="tabella-scroll"><table>
    <caption class="solo-sr">Rendimento di squadra per modulo tattico</caption>
    <thead><tr><th scope="col">Modulo</th><th scope="col">Partite</th><th scope="col">Gol fatti (media)</th><th scope="col">Gol subiti (media)</th><th scope="col">Diff. reti (media)</th><th scope="col">Prec. passaggi</th><th scope="col">Tasso errore</th></tr></thead>
    <tbody>${righe.map(r => `<tr${r.sufficiente?"":' style="opacity:.55"'}>
      <td>${esc(r.Modulo)}${r.sufficiente?"":` <span class="ruolo">poche partite</span>`}</td>
      <td>${nf0(r.Partite)}</td>
      <td>${nf(r.Gol_Fatti_Media,1)}</td>
      <td>${nf(r.Gol_Subiti_Media,1)}</td>
      <td><strong>${r.Differenza_Reti_Media>0?"+":""}${nf(r.Differenza_Reti_Media,1)}</strong></td>
      <td>${pctTxt(r.Precisione_Passaggi_pct,0)}</td>
      <td>${pctTxt(r.Tasso_Errore_pct,0)}</td>
    </tr>`).join("")}</tbody>
  </table></div>
  <p class="kpi-nota" style="margin-top:8px">Righe sotto le 2 partite o senza modulo indicato sono mostrate in trasparenza: troppo poco dato per essere lette come un segnale. Ricorda l'avvertenza sulla forza dell'avversario in Metodologia.</p>`;
}

/* --------- 7. Vista giocatore --------- */
function renderGiocatore(f){
  const cont = $("#contenuto-giocatore");
  const nome = stato.giocatore;
  const righe = f.giocatori.filter(g => g.Giocatore === nome).sort((a,b)=>(a.Data?a.Data:0)-(b.Data?b.Data:0));
  $("#badge-giocatore").textContent = nome || "—";
  if(!nome || righe.length === 0){
    cont.innerHTML = `<div class="vuoto"><strong>${nome?esc(nome)+" non ha partite":"Nessun giocatore selezionato"}</strong> nel periodo scelto. Cambia periodo o giocatore dai filtri in alto.</div>`;
    return;
  }
  const aggTutti = aggregaGiocatori(f.giocatori);
  const mio = aggTutti.find(a => a.Giocatore === nome);
  const squadra = riepilogoSquadra(f.giocatori, f.partite);
  const metriche = [
    ["Precisione passaggi", mio.Precisione_Passaggi_pct, squadra.precisione_passaggi],
    ["Precisione al tiro", mio.Precisione_Tiro_pct, squadra.precisione_tiro],
    ["Successo dribbling", mio.Successo_Dribbling_pct, squadra.successo_dribbling],
    ["Efficacia realizzativa", mio.Efficacia_Realizzativa_pct, perc(squadra.gol_giocatori, squadra.tiri_totali)],
    ["Affidabilità (100 − tasso errore)", mio.Tasso_Errore_pct===null?null:100-mio.Tasso_Errore_pct, squadra.tasso_errore===null?null:100-squadra.tasso_errore]
  ];
  const parateTxt = /portier/i.test(mio.Ruolo)
    ? `<div class="kpi"><div class="kpi-eti">Parate</div><div class="kpi-valore">${nf0(mio.Parate)}</div><div class="kpi-nota">Stima di parate riuscite: ${pctTxt(perc(mio.Parate, mio.Parate + squadra.gol_subiti),0)} dei tiri subiti stimati (parate + gol subiti)</div></div>` : "";
  cont.innerHTML = `
    <div class="griglia g-kpi" style="margin-bottom:16px">
      <div class="kpi"><div class="kpi-eti">Partite · minuti</div><div class="kpi-valore">${nf0(mio.Partite_Giocate)} · ${nf0(mio.Minuti_Totali)}'</div><div class="kpi-nota">${esc(mio.Ruolo)}</div></div>
      <div class="kpi"><div class="kpi-eti">Gol · assist</div><div class="kpi-valore">${nf0(mio.Gol)} · ${nf0(mio.Assist)}</div><div class="kpi-nota">${mio.Minuti_Totali>0?nf(mio.Coinvolgimento_Gol/mio.Minuti_Totali*60,2)+" partecipazioni ai gol per 60'":"—"}</div></div>
      <div class="kpi"><div class="kpi-eti">Indice prestazione</div><div class="kpi-valore">${nf(mio.Indice_Prestazione_Tot,1)}</div><div class="kpi-nota">${nf(mio.Indice_Prestazione_Medio,1)} a partita · ${nf0(aggTutti.findIndex(a=>a.Giocatore===nome)+1)}° in squadra</div></div>
      <div class="kpi"><div class="kpi-eti">Tasso di errore</div><div class="kpi-valore">${pctTxt(mio.Tasso_Errore_pct)}</div><div class="kpi-nota">Media squadra ${pctTxt(squadra.tasso_errore)}</div></div>
      ${parateTxt}
    </div>
    <div class="griglia g-2">
      <div class="card"><div class="grafico-titolo">Profilo di ${esc(nome)} vs media di squadra</div>
        <div class="grafico-sub">Percentuali ricalcolate sui totali del periodo. Più l'area è esterna, meglio è.</div>
        <div class="grafico-wrap alto"><canvas id="gr-radar"></canvas></div></div>
      <div class="card"><div class="grafico-titolo">Andamento partita per partita</div>
        <div class="grafico-sub">Precisione al tiro, precisione passaggi e tasso di errore nelle sue partite.</div>
        <div class="grafico-wrap alto"><canvas id="gr-gioc-linee"></canvas></div></div>
      <div class="card"><div class="grafico-titolo">Minuti giocati</div>
        <div class="grafico-sub">Minutaggio partita per partita, con la media del periodo.</div>
        <div class="grafico-wrap"><canvas id="gr-gioc-minuti"></canvas></div></div>
      <div class="card"><div class="grafico-titolo">Contributo offensivo e recuperi</div>
        <div class="grafico-sub">Gol, assist e palloni recuperati partita per partita.</div>
        <div class="grafico-wrap"><canvas id="gr-gioc-contributo"></canvas></div></div>
    </div>`;

  creaGrafico("gr-radar", {
    type:"radar",
    data:{labels:metriche.map(m=>m[0]), datasets:[
      {label:nome, data:metriche.map(m=>m[1]===null?0:m[1]), borderColor:colore("c1"),
       backgroundColor:colore("c1")+"33", pointBackgroundColor:colore("c1"), borderWidth:2.4},
      {label:"Media squadra", data:metriche.map(m=>m[2]===null?0:m[2]), borderColor:colore("c2"),
       backgroundColor:"transparent", pointBackgroundColor:colore("c2"), borderWidth:2, borderDash:[6,4]}
    ]},
    options:baseOpzioni({scales:{r:{
      min:0, max:100, ticks:{stepSize:25, color:colore("faint"), font:{size:10}, backdropColor:"transparent", callback:v=>v+"%"},
      grid:{color:colore("grid")}, angleLines:{color:colore("grid")},
      pointLabels:{color:colore("muted"), font:{size:10.5}}
    }}})
  });
  const et = righe.map(r=>r.EtichettaPartita);
  creaGrafico("gr-gioc-linee", {
    type:"line",
    data:{labels:et, datasets:[
      {label:"Precisione al tiro", data:righe.map(r=>r.Precisione_Tiro_pct), borderColor:colore("c1"), backgroundColor:colore("c1"), tension:.25, borderWidth:2.4, pointRadius:4, spanGaps:true},
      {label:"Precisione passaggi", data:righe.map(r=>r.Precisione_Passaggi_pct), borderColor:colore("c3"), backgroundColor:colore("c3"), tension:.25, borderWidth:2.4, pointRadius:4, spanGaps:true},
      {label:"Tasso di errore", data:righe.map(r=>r.Tasso_Errore_pct), borderColor:colore("c2"), backgroundColor:colore("c2"), tension:.25, borderWidth:2.4, pointRadius:4, borderDash:[5,4], spanGaps:true}
    ]},
    options:baseOpzioni({scales:{
      x:{ticks:{color:colore("muted"), font:{size:10.5}, maxRotation:38, autoSkip:true, maxTicksLimit:6}, grid:{display:false}, border:{color:colore("grid")}},
      y:{min:0, max:100, ticks:{color:colore("muted"), font:{size:11}, callback:v=>v+"%"}, grid:{color:colore("grid")}, border:{color:colore("grid")}}
    }})
  });
  const mediaMin = media(righe.map(r=>r.Minuti_Giocati));
  creaGrafico("gr-gioc-minuti", {
    type:"bar",
    data:{labels:et, datasets:[
      {label:"Minuti giocati", data:righe.map(r=>r.Minuti_Giocati), backgroundColor:colore("c1"), borderRadius:4, maxBarThickness:40},
      {type:"line", label:"Media periodo ("+nf0(mediaMin)+"')", data:et.map(()=>mediaMin), borderColor:colore("faint"), borderDash:[6,5], borderWidth:1.8, pointRadius:0}
    ]},
    options:baseOpzioni({scales:{
      x:{ticks:{color:colore("muted"), font:{size:10.5}, maxRotation:38, autoSkip:true, maxTicksLimit:6}, grid:{display:false}, border:{color:colore("grid")}},
      y:{beginAtZero:true, ticks:{color:colore("muted"), font:{size:11}, callback:v=>v+"'"}, grid:{color:colore("grid")}, border:{color:colore("grid")}}
    }})
  });
  creaGrafico("gr-gioc-contributo", {
    type:"bar",
    data:{labels:et, datasets:[
      {label:"Gol", data:righe.map(r=>r.Gol), backgroundColor:colore("c1"), stack:"a", borderRadius:3, maxBarThickness:40},
      {label:"Assist", data:righe.map(r=>r.Assist), backgroundColor:colore("c4"), stack:"a", borderRadius:3, maxBarThickness:40},
      {label:"Recuperi", data:righe.map(r=>r.Recuperi), backgroundColor:colore("c6"), stack:"b", borderRadius:3, maxBarThickness:40}
    ]},
    options:baseOpzioni({scales:{
      x:{ticks:{color:colore("muted"), font:{size:10.5}, maxRotation:38, autoSkip:true, maxTicksLimit:6}, grid:{display:false}, border:{color:colore("grid")}},
      y:{beginAtZero:true, ticks:{color:colore("muted"), font:{size:11}, precision:0}, grid:{color:colore("grid")}, border:{color:colore("grid")}}
    }})
  });
}

/* --------- 8. Allenamenti --------- */
function renderAllenamenti(f){
  const cont = $("#contenuto-allenamenti");
  if(!stato.ds.haAllenamenti){
    cont.innerHTML = `<div class="vuoto"><strong>Non hai ancora caricato nessun file allenamento.</strong><br>
      Carica almeno un file <code>allenamento_*.csv</code> esportato da Seven Lab per vedere presenze e carico di lavoro. Il resto della dashboard funziona comunque.</div>`;
    return;
  }
  if(f.allenamenti.length === 0 || f.presenze.length === 0){
    cont.innerHTML = `<div class="vuoto"><strong>Nessuna sessione di allenamento nel periodo selezionato.</strong> Scegli un altro periodo dal filtro in alto.</div>`;
    return;
  }
  const haRPE = stato.ds.haRPE;
  const {totSess, righe} = aggregaAllenamenti(f.allenamenti, f.presenze);
  const mensile = haRPE ? caricoMensile(stato.ds.allenamenti, stato.ds.presenze) : [];
  const sottoSoglia = righe.filter(r => r.Tasso_Presenza_pct !== null && r.Tasso_Presenza_pct < 60);
  const cgm = haRPE ? caricoGiocatoreMese(stato.ds.presenze) : new Map();
  const mesiOrd = Array.from(new Set(stato.ds.presenze.map(p=>p.Mese).filter(Boolean))).sort();
  const picchi = [];
  if(haRPE) righe.forEach(r => {
    for(let i=1;i<mesiOrd.length;i++){
      const prec = cgm.get(r.Giocatore+"|"+mesiOrd[i-1]) || 0;
      const curr = cgm.get(r.Giocatore+"|"+mesiOrd[i]) || 0;
      if(prec > 0 && curr/prec >= 1.5)
        picchi.push({g:r.Giocatore, da:mesiOrd[i-1], a:mesiOrd[i], rapporto:curr/prec, prec, curr});
    }
  });
  const avvisi = [];
  sottoSoglia.forEach(r => avvisi.push({tipo:"attenzione",
    testo:`<strong>${esc(r.Giocatore)}</strong> è al ${pctTxt(r.Tasso_Presenza_pct,0)} di presenza (${nf0(r.Sessioni_Presenti)} sessioni su ${nf0(r.Sessioni_Totali)}): sotto la soglia consigliata del 60%. Con questo minutaggio di allenamento è difficile chiedergli continuità in partita.`}));
  picchi.forEach(p => avvisi.push({tipo:"attenzione",
    testo:`Carico di <strong>${esc(p.g)}</strong>: da ${nf0(p.prec)} a ${nf0(p.curr)} unità sRPE tra ${meseBreve(p.da)} e ${meseBreve(p.a)}, cioè ${nf(p.rapporto,1)} volte tanto.`}));
  if(avvisi.length === 0) avvisi.push({tipo:"ok", testo: haRPE
    ? "Presenze sopra il 60% per tutti e nessun salto di carico pari o superiore a 1,5 volte tra un mese e l'altro."
    : "Presenze sopra il 60% per tutti."});

  cont.innerHTML = `
    <div class="griglia g-kpi" style="margin-bottom:16px">
      <div class="kpi"><div class="kpi-eti">Sessioni nel periodo</div><div class="kpi-valore">${nf0(totSess)}</div><div class="kpi-nota">${esc(Array.from(new Set(f.allenamenti.map(a=>a.Tipo_Allenamento))).join(", "))}</div></div>
      ${haRPE ? `<div class="kpi"><div class="kpi-eti">Carico totale squadra</div><div class="kpi-valore">${nf0(righe.reduce((a,r)=>a+r.Carico_Tot,0))}</div><div class="kpi-nota">Unità sRPE (minuti × RPE)</div></div>` : ""}
      <div class="kpi"><div class="kpi-eti">Presenza media</div><div class="kpi-valore">${pctTxt(media(righe.map(r=>r.Tasso_Presenza_pct)),0)}</div><div class="kpi-nota">${sottoSoglia.length===1 ? "1 giocatore sotto il 60%" : nf0(sottoSoglia.length)+" giocatori sotto il 60%"}</div></div>
    </div>
    <div class="griglia g-2" style="margin-bottom:16px">
      <div class="card"><div class="grafico-titolo">Tasso di presenza per giocatore</div>
        <div class="grafico-sub">In rosso mattone chi è sotto il 60%; la linea tratteggiata è la soglia consigliata.</div>
        <div class="grafico-wrap alto"><canvas id="gr-presenze"></canvas></div></div>
      ${haRPE ? `<div class="card"><div class="grafico-titolo">Carico di allenamento per giocatore</div>
        <div class="grafico-sub">Unità sRPE accumulate nel periodo (minuti × RPE, carico 0 se assente).</div>
        <div class="grafico-wrap alto"><canvas id="gr-carico"></canvas></div></div>
      <div class="card"><div class="grafico-titolo">Carico medio di squadra mese per mese</div>
        <div class="grafico-sub">Media delle unità sRPE per presenza registrata. Serve a vedere se il carico cresce troppo in fretta.</div>
        <div class="grafico-wrap"><canvas id="gr-carico-mese"></canvas></div></div>` : `<div class="card"><div class="grafico-titolo">Carico di allenamento</div>
        <div class="vuoto" style="margin:0">Non disponibile: i file caricati non includono l'RPE percepito (fatica 1-10). Presenze e minuti restano comunque calcolati sopra.</div></div>`}
    </div>
    <div class="card">
      <div class="grafico-titolo">Segnali da valutare con lo staff</div>
      <div class="grafico-sub">Presenze sotto il 60%${haRPE ? " e aumenti di carico pari o superiori a 1,5 volte da un mese all'altro." : "."}</div>
      <div class="griglia-avvisi">${avvisi.map(a=>`<div class="avviso ${a.tipo}"><span class="ic" aria-hidden="true">${a.tipo==="ok"?"✓":"!"}</span><span>${a.testo}</span></div>`).join("")}</div>
      ${picchi.length ? `<p class="nota-piccola">Un salto rapido del carico (concetto di rapporto carico acuto/cronico) è un segnale da valutare con lo staff, non una diagnosi: se possibile distribuisci il carico più gradualmente nelle settimane successive.</p>` : ""}
    </div>`;

  const ordPres = righe.slice().sort((a,b)=>(b.Tasso_Presenza_pct??0)-(a.Tasso_Presenza_pct??0));
  creaGrafico("gr-presenze", {
    type:"bar",
    data:{labels:ordPres.map(r=>r.Giocatore), datasets:[
      {label:"Tasso di presenza", data:ordPres.map(r=>r.Tasso_Presenza_pct),
       backgroundColor:ordPres.map(r=>(r.Tasso_Presenza_pct??100)<60?colore("danger"):colore("c1")), borderRadius:4, maxBarThickness:26},
      {type:"line", label:"Soglia 60%", data:ordPres.map(()=>60), borderColor:colore("faint"), borderDash:[6,5], borderWidth:1.8, pointRadius:0}
    ]},
    options:baseOpzioni({indexAxis:"y", scales:{
      x:{min:0, max:100, ticks:{color:colore("muted"), font:{size:11}, callback:v=>v+"%"}, grid:{color:colore("grid")}, border:{color:colore("grid")}},
      y:{ticks:{color:colore("muted"), font:{size:11}}, grid:{display:false}, border:{color:colore("grid")}}
    }})
  });
  if(haRPE){
  const ordCarico = righe.slice().sort((a,b)=>b.Carico_Tot-a.Carico_Tot);
  creaGrafico("gr-carico", {
    type:"bar",
    data:{labels:ordCarico.map(r=>r.Giocatore), datasets:[
      {label:"Carico sRPE", data:ordCarico.map(r=>r.Carico_Tot), backgroundColor:colore("c3"), borderRadius:4, maxBarThickness:26}
    ]},
    options:baseOpzioni({indexAxis:"y", plugins:{legend:{display:false},
      tooltip:{backgroundColor:colore("text"), titleColor:colore("bg"), bodyColor:colore("bg"), padding:10, cornerRadius:8,
        callbacks:{label:it=>"Carico: "+nf0(it.parsed.x)+" unità sRPE"}}},
      scales:{
        x:{beginAtZero:true, ticks:{color:colore("muted"), font:{size:11}}, grid:{color:colore("grid")}, border:{color:colore("grid")}},
        y:{ticks:{color:colore("muted"), font:{size:11}}, grid:{display:false}, border:{color:colore("grid")}}
      }})
  });
  }
  if(haRPE && mensile.length >= 1){
    creaGrafico("gr-carico-mese", {
      type:"line",
      data:{labels:mensile.map(m=>meseLabel(m.Mese)), datasets:[
        {label:"Carico medio per presenza", data:mensile.map(m=>m.Carico_Medio), borderColor:colore("c1"),
         backgroundColor:colore("c1"), tension:.25, borderWidth:2.6, pointRadius:5}
      ]},
      options:baseOpzioni({plugins:{legend:{display:false},
        tooltip:{backgroundColor:colore("text"), titleColor:colore("bg"), bodyColor:colore("bg"), padding:10, cornerRadius:8,
          callbacks:{label:it=>nf0(it.parsed.y)+" unità sRPE in media"}}},
        scales:{
          x:{ticks:{color:colore("muted"), font:{size:11}}, grid:{display:false}, border:{color:colore("grid")}},
          y:{beginAtZero:true, ticks:{color:colore("muted"), font:{size:11}}, grid:{color:colore("grid")}, border:{color:colore("grid")}}
        }})
    });
  }
}

/* --------- 8b. Segnali incrociati --------- */
function renderIncroci(){
  const cont = $("#contenuto-incroci");
  if(!stato.ds.haAllenamenti){
    cont.innerHTML = `<div class="vuoto"><strong>Servono sia le partite sia gli allenamenti</strong> per calcolare questo incrocio: carica anche i file allenamento.</div>`;
    return;
  }
  if(!stato.ds.haRPE){
    cont.innerHTML = `<div class="vuoto"><strong>Questa sezione richiede il carico di allenamento (sRPE)</strong>, quindi il dato RPE percepito (fatica 1-10). I file caricati finora non lo includono: presenze e minuti restano disponibili nella sezione Allenamenti, ma qui non c'è ancora nulla da incrociare.</div>`;
    return;
  }
  const incroci = incrociCaricoRendimento(stato.ds);
  if(incroci.length === 0){
    cont.innerHTML = `<div class="vuoto">Nessun segnale incrociato rilevante per ora: servono almeno due mesi consecutivi con partite e allenamenti registrati per lo stesso giocatore. Continuerà ad aggiornarsi da solo.</div>`;
    return;
  }
  const etichette = {affaticamento:{cls:"neg", testo:"Possibile affaticamento"}, positivo:{cls:"pos", testo:"Il lavoro sta pagando"}, carico_basso:{cls:"neu", testo:"Carico in forte calo"}};
  cont.innerHTML = `<div class="griglia g-2">` + incroci.slice(0,8).map(x => {
    const et = etichette[x.tipo];
    let frase;
    if(x.tipo === "affaticamento") frase = `Il carico di allenamento è salito di ${nf(x.rapportoCarico,1)}× da ${meseBreve(x.mesePrec)} a ${meseBreve(x.meseCorr)}, mentre l'indice prestazione medio in partita è sceso di ${nf0(Math.abs(x.deltaIndice))} punti: vale la pena verificare con lo staff se c'è affaticamento.`;
    else if(x.tipo === "positivo") frase = `Il carico di allenamento è rimasto stabile (${nf(x.rapportoCarico,1)}×) tra ${meseBreve(x.mesePrec)} e ${meseBreve(x.meseCorr)}, mentre l'indice prestazione medio è salito di ${nf0(x.deltaIndice)} punti: il lavoro sta pagando.`;
    else frase = `Il carico di allenamento è sceso a ${nf(x.rapportoCarico,1)}× tra ${meseBreve(x.mesePrec)} e ${meseBreve(x.meseCorr)} e l'indice prestazione medio è calato di ${nf0(Math.abs(x.deltaIndice))} punti: da capire se il calo di lavoro dipende da un infortunio o un'assenza.`;
    return `<div class="trend-card">
      <div class="trend-testa"><div><div class="trend-nome">${esc(x.Giocatore)}</div><div class="trend-stat">${meseLabel(x.mesePrec)} → ${meseLabel(x.meseCorr)}</div></div><span class="pill ${et.cls}">${et.testo}</span></div>
      <div class="trend-frase">${esc(frase)}</div>
    </div>`;
  }).join("") + `</div>
  <p class="kpi-nota" style="margin-top:14px">Sono correlazioni tra due cluster di dati che raccogli separatamente, non nessi causa-effetto: il modo giusto di usarle è come punto di partenza per una conversazione con lo staff, non come conclusione.</p>`;
}

/* --------- 9. Qualità dati --------- */
function renderQualita(){
  const cont = $("#contenuto-qualita");
  const av = validaDati(stato.ds);
  if(av.length === 0){
    cont.innerHTML = `<div class="avviso ok"><span class="ic" aria-hidden="true">✓</span><span><strong>Nessun problema rilevato.</strong> Tutti i controlli automatici sono passati: identificativi coerenti, nessun duplicato, valori nei range previsti.</span></div>`;
    return;
  }
  const errori = av.filter(a=>a.tipo==="errore"), attenzioni = av.filter(a=>a.tipo==="attenzione");
  cont.innerHTML = `
    <p class="kpi-nota" style="margin-top:0">${nf0(errori.length)} da correggere · ${nf0(attenzioni.length)} da verificare</p>
    ${errori.map(a=>`<div class="avviso errore"><span class="ic" aria-hidden="true">✕</span><span><strong>Da correggere:</strong> ${a.testo}</span></div>`).join("")}
    ${attenzioni.map(a=>`<div class="avviso attenzione"><span class="ic" aria-hidden="true">!</span><span><strong>Da verificare:</strong> ${a.testo}</span></div>`).join("")}`;
}

/* =====================================================================
   RENDER GENERALE
   ===================================================================== */
function render(){
  if(!stato.ds) return;
  const f = datiFiltrati();
  const nomiPeriodo = stato.periodo === "tutto" ? "Tutta la stagione" : meseLabel(stato.periodo);
  $("#riepilogo-filtri").textContent = `${nomiPeriodo} · ${nf0(f.partite.length)} partite · ${nf0(new Set(f.giocatori.map(g=>g.Giocatore)).size)} giocatori`;
  renderKPI(f);
  renderAndamento(f);
  renderClassifica(f);
  renderTendenze(f);
  renderAndamentoIndividuale();
  renderGiocatore(f);
  renderAllenamenti(f);
  renderIncroci();
  renderQualita();
  aggiornaSelettoriReport();
}

function attivaDashboard(ds, etichettaOrigine){
  stato.ds = ds;
  stato.periodo = "tutto";
  const agg = aggregaGiocatori(ds.giocatori);
  stato.giocatore = agg.length ? agg[0].Giocatore : (ds.nomiGiocatori[0] || null);
  const selP = $("#sel-periodo");
  selP.innerHTML = `<option value="tutto">Tutta la stagione</option>` +
    ds.mesi.map(m => `<option value="${m}">${meseLabel(m)}</option>`).join("");
  selP.value = "tutto";
  const selG = $("#sel-giocatore");
  selG.innerHTML = ds.nomiGiocatori.map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join("");
  if(stato.giocatore) selG.value = stato.giocatore;
  $("#sez-caricamento").classList.add("nascosto");
  $("#dashboard").classList.remove("nascosto");
  $("#barra-filtri").classList.remove("nascosto");
  $("#nav-sezioni").classList.remove("nascosto");
  $("#btn-nuovo").classList.remove("nascosto");
  const b = $("#badge-dataset");
  b.classList.remove("nascosto");
  b.textContent = etichettaOrigine;
  render();
  window.scrollTo({top:0, behavior:"auto"});
}

function mostraErrore(html){
  const box = $("#errore-caricamento");
  box.className = "";
  box.innerHTML = `<div class="avviso errore"><span class="ic" aria-hidden="true">✕</span><span><strong>Non riesco a leggere il file.</strong> ${html}<br><span style="color:var(--muted)">Controlla il file e riprova, oppure premi «Prova con dati di esempio» per vedere come funziona la dashboard.</span></span></div>`;
}

/* =====================================================================
   CARICAMENTO FILE
   ===================================================================== */
function leggiWorkbook(wb){
  const grezzo = {};
  ["Partite","Statistiche_Giocatori","Allenamenti","Presenze_Allenamento"].forEach(nome => {
    const chiave = wb.SheetNames.find(s => s.trim().toLowerCase() === nome.toLowerCase());
    if(chiave) grezzo[nome] = XLSX.utils.sheet_to_json(wb.Sheets[chiave], {defval:null, raw:true});
  });
  return grezzo;
}
function gestisciFile(file){
  $("#errore-caricamento").classList.add("nascosto");
  if(!/\.(xlsx|xls)$/i.test(file.name)){
    mostraErrore("Il file <strong>"+esc(file.name)+"</strong> non è un foglio Excel (.xlsx o .xls).");
    $("#errore-caricamento").classList.remove("nascosto"); return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    try{
      const wb = XLSX.read(new Uint8Array(e.target.result), {type:"array", cellDates:true});
      const ds = preparaDataset(leggiWorkbook(wb));
      distruggiGrafici();
      attivaDashboard(ds, file.name);
    }catch(err){
      mostraErrore(err && err.message ? err.message : "Errore inatteso nella lettura del file.");
      $("#errore-caricamento").classList.remove("nascosto");
    }
  };
  reader.onerror = () => { mostraErrore("Il browser non è riuscito a leggere il file dal disco."); $("#errore-caricamento").classList.remove("nascosto"); };
  reader.readAsArrayBuffer(file);
}

/** Legge un singolo file .csv di Seven Lab come testo e lo restituisce via Promise (per poterne
 *  attendere in sequenza tanti quanti ne seleziona/trascina l'utente in un colpo solo). */
function leggiTestoFile(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = () => reject(new Error("Il browser non è riuscito a leggere «"+file.name+"» dal disco."));
    reader.readAsText(file, "UTF-8");
  });
}

/** Punto di ingresso quando l'utente sceglie o trascina uno o più file: se anche uno solo è .csv
 *  trattiamo l'intero gruppo come export Seven Lab (si accumulano con quelli già caricati); se sono
 *  tutti .xlsx/.xls usiamo il vecchio percorso a un unico file con più fogli. */
async function gestisciFileSelezionati(fileList){
  const file = Array.from(fileList || []);
  if(!file.length) return;
  $("#errore-caricamento").classList.add("nascosto");
  const csv = file.filter(f => /\.csv$/i.test(f.name));
  if(csv.length){
    const nonCsv = file.filter(f => !/\.csv$/i.test(f.name));
    const errori = [];
    for(const f of nonCsv) errori.push(`«${esc(f.name)}» non è un .csv: ignorato in questo caricamento multiplo.`);
    for(const f of csv){
      try{
        const testo = await leggiTestoFile(f);
        aggiungiSessioneDaTesto(f.name, testo);
      }catch(err){
        errori.push(`«${esc(f.name)}»: ${err && err.message ? err.message : "errore di lettura."}`);
      }
    }
    if(errori.length){ mostraErrore(errori.join("<br>")); $("#errore-caricamento").classList.remove("nascosto"); }
    ricaricaDaSessioni();
    return;
  }
  // nessun .csv nel gruppo: percorso legacy, un solo file Excel con più fogli
  gestisciFile(file[0]);
}

/** Ricostruisce (o svuota) la dashboard a partire da tutte le sessioni Seven Lab accumulate finora,
 *  e aggiorna sempre il pannello "File caricati" (visibile anche prima di aprire la dashboard). */
function ricaricaDaSessioni(){
  renderPannelloFile();
  const sessioni = leggiSessioniSalvate();
  if(!sessioni.length){
    distruggiGrafici();
    stato.ds = null;
    $("#dashboard").classList.add("nascosto");
    $("#sez-caricamento").classList.remove("nascosto");
    $("#barra-filtri").classList.add("nascosto");
    $("#nav-sezioni").classList.add("nascosto");
    $("#btn-nuovo").classList.add("nascosto");
    $("#badge-dataset").classList.add("nascosto");
    return;
  }
  try{
    const ds = costruisciDatasetDaSessioni(sessioni);
    distruggiGrafici();
    const nPartite = sessioni.filter(s=>s.tipo==="partita").length;
    const nAllen = sessioni.filter(s=>s.tipo==="allenamento").length;
    attivaDashboard(ds, `${nPartite} partite · ${nAllen} allenamenti (${sessioni.length} file)`);
  }catch(err){
    mostraErrore(err && err.message ? err.message : "Errore inatteso nella lettura dei file.");
    $("#errore-caricamento").classList.remove("nascosto");
  }
}

/** Disegna la lista dei file Seven Lab già caricati (con pulsante Elimina), sempre visibile sopra
 *  la zona di trascinamento, sia in fase di caricamento sia a dashboard aperta. */
function renderPannelloFile(){
  const box = $("#pannello-file");
  if(!box) return;
  const sessioni = leggiSessioniSalvate().slice().sort((a,b) => (a.caricatoIl||"").localeCompare(b.caricatoIl||""));
  if(!sessioni.length){ box.classList.add("nascosto"); box.innerHTML = ""; return; }
  box.classList.remove("nascosto");
  box.innerHTML = `<h3 style="font-size:15px">File caricati (${sessioni.length})</h3>
    <div class="lista-file">${sessioni.map(s => {
      const dataSess = parseDataSevenLab(s.meta["Data"]);
      const desc = s.tipo === "partita" ? ("vs "+esc((s.meta["Avversario"]||"").trim()||"—")) : (esc((s.meta["Formato"]||"").trim())||"allenamento");
      return `<div class="riga-file">
        <span class="badge-tipo ${s.tipo}">${s.tipo === "partita" ? "Partita" : "Allenamento"}</span>
        <span class="riga-file-nome">${esc(s.nomeFile)}</span>
        <span class="riga-file-dett">${dataLabel(dataSess)} · ${desc}</span>
        <button type="button" class="btn piccolo pericolo" data-elimina-sessione="${esc(s.id)}">Elimina</button>
      </div>`;
    }).join("")}</div>`;
}

/* =====================================================================
   REPORT ESPORTABILI IN PDF
   ===================================================================== */
function aggiornaSelettoriReport(){
  if(!stato.ds) return;
  const selP = $("#rp-sel-partita");
  selP.innerHTML = stato.ds.partite.slice().reverse().map(p =>
    `<option value="${esc(p.Match_ID)}">${dataLabel(p.Data)} · vs ${esc(p.Avversario)} (${p.Risultato})</option>`).join("");
  const selM = $("#rp-sel-mese");
  const mesiConDati = stato.ds.mesi;
  selM.innerHTML = mesiConDati.map(m => `<option value="${m}">${meseLabel(m)}</option>`).join("");
  if(mesiConDati.length) selM.value = mesiConDati[mesiConDati.length-1];
}

function statoReport(msg, attivo){
  const el = $("#rp-stato");
  el.textContent = msg;
  el.classList.toggle("attivo", !!attivo);
}

function nomeFileData(prefisso, d){
  const s = d instanceof Date && !isNaN(d) ? d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0") : "";
  return `${prefisso}_${s}.pdf`;
}

/** Costruisce una pagina di report in stile "CV" (colonna laterale scura + fascia colorata in cima)
 *  dentro #report-stage (fuori schermo, A4 a 96dpi ≈ 794×1123px) e la restituisce.
 *  Con `conSidebar:false` costruisce una pagina a piena larghezza, senza colonna laterale: usata per le
 *  pagine di appendice con le statistiche dettagliate di tutti i giocatori, dove servono più colonne. */
function nuovaPaginaReport(conSidebar=true){
  const stage = $("#report-stage");
  const pagina = document.createElement("div");
  pagina.className = "rp-page rp2-page";
  const centro = document.createElement("div");
  centro.className = "rp2-main";
  const corpo = document.createElement("div");
  corpo.className = "rp2-body";
  centro.appendChild(corpo);
  if(conSidebar){
    const lato = document.createElement("div");
    lato.className = "rp2-side";
    pagina.appendChild(lato);
    pagina.lato = lato;
  }
  pagina.appendChild(centro);
  stage.appendChild(pagina);
  pagina.centro = centro; pagina.corpo = corpo;
  return pagina;
}

function iniziali(nome){
  return String(nome||"").trim().split(/\s+/).filter(Boolean).map(p=>p[0]).slice(0,2).join("").toUpperCase() || "—";
}

/** Fascia colorata in cima alla colonna principale: titolo del report ed eventuale risultato/badge. */
function bandaReport(pagina, eyebrow, titolo, sottotitolo, risultato){
  const band = document.createElement("div");
  band.className = "rp2-band";
  band.innerHTML = `<div class="eyebrow">${esc(eyebrow)}</div>
    <div class="rp2-band-row">
      <div><div class="tt">${esc(titolo)}</div>${sottotitolo?`<div class="sub">${esc(sottotitolo)}</div>`:""}</div>
      ${risultato?`<div class="risultato">${esc(risultato)}</div>`:""}
    </div>`;
  pagina.centro.insertBefore(band, pagina.corpo);
}

/** Colonna laterale scura: un giocatore in evidenza (MVP, da tenere d'occhio, leader stagionale...) con
 *  le sue statistiche come barre e un mini-storico. Se `nome` manca mostra solo l'eyebrow e i gruppi. */
function sidebarReport(pagina, {eyebrow, nome, ruolo, colore="#5EC4CE", gruppi=[]}){
  let html = `<div class="rp2-eyebrow">${esc(eyebrow)}</div>`;
  if(nome){
    html += `<div class="rp2-avatar" style="border-color:${colore}">${esc(iniziali(nome))}</div>
      <div class="rp2-nome">${esc(nome)}</div>
      <div class="rp2-ruolo">${esc(ruolo||"")}</div>`;
  }
  gruppi.forEach(g => {
    html += `<h4>${esc(g.titolo)}</h4>`;
    (g.barre||[]).forEach(b => {
      const pct = Math.max(0, Math.min(100, b.pct ?? 0));
      html += `<div class="rp2-bar-row"><div class="lbl"><span>${esc(b.label)}</span><b>${b.valore}</b></div><div class="rp2-bar-track"><div class="rp2-bar-fill" style="width:${pct}%; background:${b.colore||"#5EC4CE"}"></div></div></div>`;
    });
    (g.righe||[]).forEach(r => {
      html += `<div class="rp2-mini"><span>${esc(r.label)}</span><b${r.colore?` style="color:${r.colore}"`:""}>${r.valore}</b></div>`;
    });
  });
  pagina.lato.innerHTML = html;
}

function piePaginaReport(pagina, n, tot){
  const foot = document.createElement("div");
  foot.className = "rp-foot-b";
  foot.innerHTML = `<span>Report generato automaticamente il ${dataLabel(new Date())} — dati raccolti dall'utente</span><span>Pagina ${n} di ${tot}</span>`;
  pagina.centro.appendChild(foot);
}
function kpiRowReport(pagina, kpis){
  const row = document.createElement("div");
  row.className = "rp-kpi-row";
  row.innerHTML = kpis.map(k => `<div class="rp-kpi"><div class="l">${esc(k.l)}</div><div class="v">${k.v}</div></div>`).join("");
  pagina.corpo.appendChild(row);
}
function titoloSezioneReport(pagina, testo){
  const h = document.createElement("div");
  h.className = "rp-section-title"; h.textContent = testo;
  pagina.corpo.appendChild(h);
}
function bulletsReport(pagina, righeHtml){
  const ul = document.createElement("ul");
  ul.className = "rp-bullets";
  ul.innerHTML = righeHtml.map(t => `<li>${t}</li>`).join("");
  pagina.corpo.appendChild(ul);
}
function tabellaReport(pagina, intestazioni, righe){
  const tbl = document.createElement("table");
  tbl.className = "rp-table";
  tbl.innerHTML = `<thead><tr>${intestazioni.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${
    righe.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")
  }</tbody></table>`;
  pagina.corpo.appendChild(tbl);
}
function graficoReport(pagina, id, config){
  const wrap = document.createElement("div");
  wrap.className = "rp-chart-wrap";
  const cv = document.createElement("canvas");
  cv.id = id;
  wrap.appendChild(cv);
  pagina.corpo.appendChild(wrap);
  return new Chart(cv, config);
}
/** Blocco "Statistiche di squadra" in stile SofaScore, solo la propria squadra: percentuali con barra
 *  a sinistra, conteggi grezzi senza barra a destra (non hanno una scala 0–100% naturale con cui confrontarli). */
function statisticheSquadraReport(pagina, colonneRighe){
  const wrap = document.createElement("div");
  wrap.className = "stat-squadra-grid";
  wrap.innerHTML = colonneRighe.map(col => `<div>${col.map(r => `
    <div class="stat-riga">
      <div class="r-top"><span class="lab">${esc(r.label)}</span><span class="val">${r.valore}</span></div>
      ${r.pct!=null ? `<div class="r-bar"><div class="r-bar-fill" style="width:${Math.max(0,Math.min(100,r.pct))}%; background:${r.colore||"#20808D"}"></div></div>` : ""}
    </div>`).join("")}</div>`).join("");
  pagina.corpo.appendChild(wrap);
}

/** Appendice con le statistiche complete di ogni giocatore (nessun taglio, tutti i giocatori), per chi vuole
 *  andare più a fondo del riepilogo. Divisa in due tabelle per restare leggibile su una pagina a piena larghezza.
 *  `righeAgg` è nel formato prodotto da aggregaGiocatori() — usata sia per una singola partita sia per la stagione. */
function tabelleDettaglioGiocatori(pagina, righeAgg){
  titoloSezioneReport(pagina, "Fase offensiva");
  tabellaReport(pagina, ["Giocatore","Ruolo","Min","Gol","Ast","Tiri (in porta)","Prec. tiro","Effic. realizz."],
    righeAgg.map(a => [esc(a.Giocatore), esc(a.Ruolo), nf0(a.Minuti_Totali), nf0(a.Gol), nf0(a.Assist),
      `${nf0(a.Tiri_Totali)} (${nf0(a.Tiri_In_Porta)})`, pctTxt(a.Precisione_Tiro_pct,0), pctTxt(a.Efficacia_Realizzativa_pct,0)]));
  titoloSezioneReport(pagina, "Passaggi, dribbling e fase difensiva");
  tabellaReport(pagina, ["Giocatore","Passaggi (corr. / tot.)","Prec. pass.","Dribbling (riusc. / tent.)","Succ. drib.","Recuperi","Parate","Tasso errore","Indice"],
    righeAgg.map(a => [esc(a.Giocatore), `${nf0(a.Passaggi_Corretti)}/${nf0(a.Passaggi_Totali)}`, pctTxt(a.Precisione_Passaggi_pct,0),
      `${nf0(a.Dribbling_Riusciti)}/${nf0(a.Dribbling_Tentati)}`, pctTxt(a.Successo_Dribbling_pct,0), nf0(a.Recuperi), nf0(a.Parate), pctTxt(a.Tasso_Errore_pct,0), nf(a.Indice_Prestazione_Tot,1)]));
}

const PALETTE_REPORT = {primary:"#01696F", c1:"#20808D", c2:"#A84B2F", c3:"#1B474D", c4:"#8FC5CD", c5:"#944454", c6:"#C99400", muted:"#6E6D68", grid:"rgba(40,37,29,.12)", text:"#28251D"};
function opzioniGraficoReport(extra={}){
  return Object.assign({
    responsive:true, maintainAspectRatio:false, animation:false,
    plugins:{legend:{display:true, position:"bottom", labels:{color:PALETTE_REPORT.muted, boxWidth:11, boxHeight:11, font:{size:10}, usePointStyle:true, padding:10}}},
    scales:{
      x:{ticks:{color:PALETTE_REPORT.muted, font:{size:10}}, grid:{display:false}, border:{color:PALETTE_REPORT.grid}},
      y:{ticks:{color:PALETTE_REPORT.muted, font:{size:10}}, grid:{color:PALETTE_REPORT.grid}, border:{color:PALETTE_REPORT.grid}}
    }
  }, extra);
}

async function esportaPaginaAPdf(pdf, pagina, isPrima){
  const canvas = await html2canvas(pagina, {scale:2, backgroundColor:"#FFFFFF", logging:false, windowWidth:794});
  const img = canvas.toDataURL("image/jpeg", 0.92);
  const pageW = pdf.internal.pageSize.getWidth(), pageH = pdf.internal.pageSize.getHeight();
  if(!isPrima) pdf.addPage();
  pdf.addImage(img, "JPEG", 0, 0, pageW, pageW*(canvas.height/canvas.width) > pageH ? pageH : pageW*(canvas.height/canvas.width));
}

async function generaEScarica(nomeFile, paginaGeneratori){
  const stage = $("#report-stage");
  stage.innerHTML = "";
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({unit:"pt", format:"a4"});
  try{
    const pagineDom = [];
    for(const gen of paginaGeneratori){
      const pagina = nuovaPaginaReport(!gen.piena);
      await gen(pagina);
      pagineDom.push(pagina);
    }
    // Chart.js needs a frame to paint onto the offscreen canvases before capture
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    for(let i=0;i<pagineDom.length;i++){
      await esportaPaginaAPdf(pdf, pagineDom[i], i===0);
    }
    pdf.save(nomeFile);
  } finally {
    stage.innerHTML = "";
  }
}

/* ---- Report Partita ---- */
async function generaReportPartita(matchId){
  const ds = stato.ds;
  const partita = ds.partite.find(p => p.Match_ID === matchId);
  if(!partita){ statoReport("Seleziona una partita valida.", false); return; }
  const righeGara = ds.giocatori.filter(g => g.Match_ID === matchId);
  const sGara = riepilogoSquadra(righeGara, [partita]);
  const aggGara = aggregaGiocatori(righeGara);
  const mvp = aggGara[0];

  // stagione fin qui (fino a e inclusa questa partita)
  const partiteFinQui = ds.partite.filter(p => p.Ordine <= partita.Ordine);
  const idsFinQui = new Set(partiteFinQui.map(p=>p.Match_ID));
  const giocFinQui = ds.giocatori.filter(g => idsFinQui.has(g.Match_ID));
  const aggStagione = aggregaGiocatori(giocFinQui);
  const tendenze = calcolaTendenze(giocFinQui).filter(t=>t.rilevante).sort((a,b)=>Math.abs(b.delta_totale)-Math.abs(a.delta_totale)).slice(0,5);

  const ultimePresenzeMvp = mvp ? giocFinQui.filter(g => g.Giocatore === mvp.Giocatore)
    .slice().sort((a,b)=>(b.Data?+b.Data:0)-(a.Data?+a.Data:0)).slice(0,4)
    .map(r => ({label:r.EtichettaPartita, valore:nf(r.Indice_Prestazione,1)})) : [];

  statoReport("Genero il Report Partita…", true);
  await generaEScarica(nomeFileData("Report_Partita_"+matchId, partita.Data), [
    async (pag) => {
      bandaReport(pag, "Report Partita", partita.Avversario, `${dataLabel(partita.Data)} · ${esc(partita.Competizione||"Amichevole")}`, partita.Risultato);
      sidebarReport(pag, {
        eyebrow:"Giocatore della partita", nome:mvp?.Giocatore, ruolo:mvp?.Ruolo, colore:"#C99400",
        gruppi: mvp ? [
          {titolo:"Statistiche in questa gara", barre:[
            {label:"Precisione al tiro", valore:pctTxt(mvp.Precisione_Tiro_pct,0), pct:mvp.Precisione_Tiro_pct??0},
            {label:"Precisione passaggi", valore:pctTxt(mvp.Precisione_Passaggi_pct,0), pct:mvp.Precisione_Passaggi_pct??0},
            {label:"Successo dribbling", valore:pctTxt(mvp.Successo_Dribbling_pct,0), pct:mvp.Successo_Dribbling_pct??0}
          ]},
          ...(ultimePresenzeMvp.length ? [{titolo:"Ultime presenze (indice)", righe:ultimePresenzeMvp}] : [])
        ] : []
      });
      kpiRowReport(pag, [
        {l:"Gol segnati", v:nf0(partita.Gol_Fatti)},
        {l:"Precisione passaggi", v:pctTxt(sGara.precisione_passaggi)},
        {l:"Successo dribbling", v:pctTxt(sGara.successo_dribbling)},
        {l:"Palloni recuperati", v:nf0(sGara.recuperi)}
      ]);
      titoloSezioneReport(pag, "Statistiche di squadra");
      statisticheSquadraReport(pag, [
        [
          {label:"Precisione al tiro", valore:pctTxt(sGara.precisione_tiro,0), pct:sGara.precisione_tiro??0, colore:PALETTE_REPORT.c1},
          {label:"Precisione passaggi", valore:pctTxt(sGara.precisione_passaggi,0), pct:sGara.precisione_passaggi??0, colore:PALETTE_REPORT.c1},
          {label:"Successo dribbling", valore:pctTxt(sGara.successo_dribbling,0), pct:sGara.successo_dribbling??0, colore:PALETTE_REPORT.c1},
          {label:"Tasso di errore", valore:pctTxt(sGara.tasso_errore,0), pct:sGara.tasso_errore??0, colore:PALETTE_REPORT.c2}
        ],
        [
          {label:"Tiri totali (in porta)", valore:`${nf0(sGara.tiri_totali)} (${nf0(sGara.tiri_in_porta)})`},
          {label:"Assist", valore:nf0(sGara.assist)},
          {label:"Palloni recuperati", valore:nf0(sGara.recuperi)},
          {label:"Parate", valore:nf0(sGara.parate)}
        ]
      ]);
      bulletsReport(pag, ["Solo statistiche della tua squadra — un confronto vero con l'avversario (stile SofaScore) richiederebbe di segnare anche i suoi tiri, corner, falli e cartellini, che oggi non tracci."]);
      titoloSezioneReport(pag, "Cosa dicono i dati");
      const bullet = [];
      if(mvp) bullet.push(`<b>${esc(mvp.Giocatore)}</b> ha guidato la squadra con un indice prestazione di ${nf(mvp.Indice_Prestazione_Tot,1)} (${nf0(mvp.Gol)} gol, ${nf0(mvp.Assist)} assist).`);
      bullet.push(`La squadra ha passato con il ${pctTxt(sGara.precisione_passaggi,0)} di precisione e un tasso di errore del ${pctTxt(sGara.tasso_errore,0)}.`);
      bullet.push(`${nf0(sGara.tiri_totali)} tiri totali, ${pctTxt(sGara.efficacia_realizzativa ?? perc(sGara.gol_giocatori, sGara.tiri_totali),0)} trasformati in gol.`);
      const miglioreRecupero = aggGara.slice().sort((a,b)=>b.Recuperi-a.Recuperi)[0];
      if(miglioreRecupero) bullet.push(`<b>${esc(miglioreRecupero.Giocatore)}</b> ha guidato la fase di non possesso con ${nf0(miglioreRecupero.Recuperi)} palloni recuperati.`);
      bulletsReport(pag, bullet);
      titoloSezioneReport(pag, "Contributo dei giocatori");
      tabellaReport(pag, ["Giocatore","Ruolo","Min","Gol","Ast","Prec. pass.","Indice"],
        aggGara.map(a => [esc(a.Giocatore), esc(a.Ruolo), nf0(a.Minuti_Totali), nf0(a.Gol), nf0(a.Assist), pctTxt(a.Precisione_Passaggi_pct,0), nf(a.Indice_Prestazione_Tot,1)]));
      piePaginaReport(pag, 1, 3);
    },
    async (pag) => {
      bandaReport(pag, "Report Partita", "Stagione fin qui", `${partiteFinQui.length} partite disputate — si aggiorna a ogni gara`);
      sidebarReport(pag, {
        eyebrow:"Classifica indice", nome:aggStagione[0]?.Giocatore, ruolo:aggStagione[0]?.Ruolo, colore:"#C99400",
        gruppi: aggStagione[0] ? [{titolo:"Al comando della stagione", righe:aggStagione.slice(0,5).map(a=>({label:a.Giocatore, valore:nf(a.Indice_Prestazione_Tot,1)}))}] : []
      });
      titoloSezioneReport(pag, "Tendenze rilevanti della stagione");
      if(tendenze.length){
        bulletsReport(pag, tendenze.map(t => fraseTendenza(t).replace(t.Giocatore, `<b>${esc(t.Giocatore)}</b>`)));
      } else {
        bulletsReport(pag, ["Non ci sono ancora abbastanza partite per tendenze statisticamente rilevanti (servono almeno 3 partite per giocatore)."]);
      }
      titoloSezioneReport(pag, "Classifica stagionale per indice prestazione");
      tabellaReport(pag, ["Giocatore","Ruolo","Partite","Gol","Assist","Indice tot."],
        aggStagione.slice(0,8).map(a => [esc(a.Giocatore), esc(a.Ruolo), nf0(a.Partite_Giocate), nf0(a.Gol), nf0(a.Assist), nf(a.Indice_Prestazione_Tot,1)]));
      titoloSezioneReport(pag, "Andamento gol nella stagione");
      graficoReport(pag, "rp-chart-gol", {type:"bar", data:{labels:partiteFinQui.map(p=>p.Etichetta), datasets:[
        {label:"Gol fatti", data:partiteFinQui.map(p=>p.Gol_Fatti), backgroundColor:PALETTE_REPORT.c1, borderRadius:3},
        {label:"Gol subiti", data:partiteFinQui.map(p=>p.Gol_Subiti), backgroundColor:PALETTE_REPORT.c2, borderRadius:3}
      ]}, options: opzioniGraficoReport()});
      piePaginaReport(pag, 2, 3);
    },
    Object.assign(async (pag) => {
      bandaReport(pag, "Report Partita", "Statistiche dettagliate", `${esc(partita.Avversario)} · ${dataLabel(partita.Data)} — tutti i giocatori, tutte le voci raccolte`);
      tabelleDettaglioGiocatori(pag, aggGara);
      piePaginaReport(pag, 3, 3);
    }, {piena:true})
  ]);
  statoReport("Report Partita scaricato.", false);
}

/* ---- Report Mensile Allenamenti ---- */
async function generaReportMensile(mese){
  const ds = stato.ds;
  const haRPE = ds.haRPE;
  if(!mese){ statoReport("Seleziona un mese valido.", false); return; }
  const dMese = datiMese(mese);
  const mPrec = mesePrecedenteConDati(mese);
  const dPrec = mPrec ? datiMese(mPrec) : null;
  const sMese = riepilogoSquadra(dMese.giocatori, dMese.partite);
  const sPrec = dPrec ? riepilogoSquadra(dPrec.giocatori, dPrec.partite) : null;
  const {totSess, righe: righeAllen} = ds.haAllenamenti ? aggregaAllenamenti(dMese.allenamenti, dMese.presenze) : {totSess:0, righe:[]};
  const sottoSoglia = righeAllen.filter(r => r.Tasso_Presenza_pct !== null && r.Tasso_Presenza_pct < 60);
  const mensile = (ds.haAllenamenti && haRPE) ? caricoMensile(ds.allenamenti, ds.presenze) : [];
  const caricoMeseCorr = mensile.find(m=>m.Mese===mese);
  const caricoMesePrec = mPrec ? mensile.find(m=>m.Mese===mPrec) : null;
  const rapportoCarico = (caricoMeseCorr && caricoMesePrec && caricoMesePrec.Carico_Medio) ? caricoMeseCorr.Carico_Medio/caricoMesePrec.Carico_Medio : null;
  const incrociMese = haRPE ? incrociCaricoRendimento(ds).filter(x => x.meseCorr === mese) : [];
  // "da tenere d'occhio": chi ha il carico più alto se abbiamo l'RPE, altrimenti chi ha la presenza più bassa
  const piuCaricoGiocatore = haRPE
    ? righeAllen.slice().sort((a,b)=>b.Carico_Tot-a.Carico_Tot)[0]
    : righeAllen.filter(r=>r.Tasso_Presenza_pct!==null).slice().sort((a,b)=>a.Tasso_Presenza_pct-b.Tasso_Presenza_pct)[0];
  const ruoloDi = nome => ds.giocatori.find(g=>g.Giocatore===nome)?.Ruolo || "";
  const righeAllenPrec = (dPrec && ds.haAllenamenti) ? aggregaAllenamenti(dPrec.allenamenti, dPrec.presenze).righe : [];
  const caricoPrecGiocatore = piuCaricoGiocatore ? righeAllenPrec.find(r => r.Giocatore === piuCaricoGiocatore.Giocatore) : null;
  const variazioneGiocatore = (haRPE && piuCaricoGiocatore && caricoPrecGiocatore && caricoPrecGiocatore.Carico_Tot) ? piuCaricoGiocatore.Carico_Tot/caricoPrecGiocatore.Carico_Tot : null;

  statoReport("Genero il Report Mensile…", true);
  await generaEScarica(nomeFileData("Report_Mensile_"+mese.replace("-",""), new Date()), [
    async (pag) => {
      bandaReport(pag, "Report Mensile Allenamenti", meseLabel(mese), mPrec ? `confronto con ${meseLabel(mPrec)}` : "");
      sidebarReport(pag, {
        eyebrow:"Da tenere d'occhio", nome:piuCaricoGiocatore?.Giocatore,
        ruolo: piuCaricoGiocatore ? ruoloDi(piuCaricoGiocatore.Giocatore) : "",
        colore:"#D8825F",
        gruppi: piuCaricoGiocatore ? (haRPE ? [
          {titolo:`Carico di allenamento — ${meseBreve(mese)}`, barre:[
            {label:"RPE medio (su 10)", valore:nf(piuCaricoGiocatore.RPE_Medio,1), pct:(piuCaricoGiocatore.RPE_Medio??0)*10, colore:"#D8825F"},
            {label:"Tasso di presenza", valore:pctTxt(piuCaricoGiocatore.Tasso_Presenza_pct,0), pct:piuCaricoGiocatore.Tasso_Presenza_pct??0, colore:"#5EC4CE"}
          ]},
          {titolo:"Carico totale (u.a.)", righe:[
            ...(caricoPrecGiocatore ? [{label:meseBreve(mPrec), valore:nf0(caricoPrecGiocatore.Carico_Tot)}] : []),
            {label:meseBreve(mese), valore:nf0(piuCaricoGiocatore.Carico_Tot), colore:"#D8825F"},
            ...(variazioneGiocatore!==null ? [{label:"Variazione", valore:(variazioneGiocatore>=1?"+":"")+nf0((variazioneGiocatore-1)*100)+"%", colore:"#D8825F"}] : [])
          ]}
        ] : [
          {titolo:`Presenza più bassa — ${meseBreve(mese)}`, barre:[
            {label:"Tasso di presenza", valore:pctTxt(piuCaricoGiocatore.Tasso_Presenza_pct,0), pct:piuCaricoGiocatore.Tasso_Presenza_pct??0, colore:"#D8825F"}
          ], righe:[
            {label:"Sessioni", valore:`${nf0(piuCaricoGiocatore.Sessioni_Presenti)}/${nf0(piuCaricoGiocatore.Sessioni_Totali)}`},
            {label:"Minuti totali", valore:nf0(piuCaricoGiocatore.Minuti_Tot)}
          ]}
        ]) : []
      });
      kpiRowReport(pag, haRPE ? [
        {l:"Sessioni nel mese", v:nf0(totSess)},
        {l:"Presenza media", v:pctTxt(media(righeAllen.map(r=>r.Tasso_Presenza_pct)),0)},
        {l:"Carico medio", v: caricoMeseCorr ? nf0(caricoMeseCorr.Carico_Medio) : "—"},
        {l:"Variazione carico", v: rapportoCarico!==null ? (rapportoCarico>=1?"+":"")+nf0((rapportoCarico-1)*100)+"%" : "—"}
      ] : [
        {l:"Sessioni nel mese", v:nf0(totSess)},
        {l:"Presenza media", v:pctTxt(media(righeAllen.map(r=>r.Tasso_Presenza_pct)),0)},
        {l:"Minuti tot. squadra", v:nf0(righeAllen.reduce((a,r)=>a+r.Minuti_Tot,0))},
        {l:"Sotto il 60% di presenza", v:nf0(sottoSoglia.length)}
      ]);
      titoloSezioneReport(pag, "Cosa dicono i dati questo mese");
      const bullet = [];
      bullet.push(`In ${meseLabel(mese)} la squadra ha svolto ${nf0(totSess)} sessioni di allenamento con una presenza media del ${pctTxt(media(righeAllen.map(r=>r.Tasso_Presenza_pct)),0)}.`);
      if(sPrec) bullet.push(`I gol a partita sono ${sMese.partite ? (sMese.gol_fatti/sMese.partite>sPrec.gol_fatti/Math.max(sPrec.partite,1)?"in crescita":"in calo") : "stabili"} rispetto a ${meseLabel(mPrec)}.`);
      if(haRPE && caricoMeseCorr) bullet.push(`Il carico medio di allenamento (sRPE) è stato di ${nf0(caricoMeseCorr.Carico_Medio)} unità a presenza${caricoMesePrec?`, contro ${nf0(caricoMesePrec.Carico_Medio)} del mese precedente`:""}.`);
      if(haRPE && piuCaricoGiocatore) bullet.push(`<b>${esc(piuCaricoGiocatore.Giocatore)}</b> ha accumulato il carico più alto del mese (${nf0(piuCaricoGiocatore.Carico_Tot)} u.a.).`);
      if(!haRPE) bullet.push("Il carico di allenamento (sRPE) non è disponibile: i file caricati non includono l'RPE percepito.");
      bulletsReport(pag, bullet);
      titoloSezioneReport(pag, "Segnali da monitorare");
      const avvisi = [];
      sottoSoglia.forEach(r => avvisi.push(`<b>${esc(r.Giocatore)}</b>: presenza del ${pctTxt(r.Tasso_Presenza_pct,0)}, sotto la soglia consigliata del 60%.`));
      if(haRPE && rapportoCarico !== null && rapportoCarico >= 1.5) avvisi.push(`Il carico medio di squadra è aumentato del ${nf0((rapportoCarico-1)*100)}% rispetto al mese precedente: un salto così rapido è un segnale da monitorare con lo staff.`);
      incrociMese.filter(x=>x.tipo==="affaticamento").forEach(x => avvisi.push(`<b>${esc(x.Giocatore)}</b>: carico in aumento (${nf(x.rapportoCarico,1)}×) insieme a un calo di rendimento in partita — possibile affaticamento.`));
      bulletsReport(pag, avvisi.length ? avvisi : ["Nessun segnale particolare da monitorare questo mese."]);
      titoloSezioneReport(pag, "Presenza per giocatore");
      graficoReport(pag, "rp-chart-presenza", {type:"bar", data:{labels:righeAllen.map(r=>r.Giocatore), datasets:[
        {label:"Presenza", data:righeAllen.map(r=>r.Tasso_Presenza_pct), backgroundColor:righeAllen.map(r=>(r.Tasso_Presenza_pct??100)<60?PALETTE_REPORT.c2:PALETTE_REPORT.c1), borderRadius:3}
      ]}, options: opzioniGraficoReport({indexAxis:"y", scales:{x:{min:0,max:100, ticks:{color:PALETTE_REPORT.muted, font:{size:10}, callback:v=>v+"%"}, grid:{color:PALETTE_REPORT.grid}}, y:{ticks:{color:PALETTE_REPORT.muted, font:{size:10}}, grid:{display:false}}}})});
      piePaginaReport(pag, 1, 2);
    },
    Object.assign(async (pag) => {
      bandaReport(pag, "Report Mensile Allenamenti", "Dettaglio per giocatore", `${meseLabel(mese)} — tutti i giocatori, tutte le voci raccolte`);
      if(righeAllen.length){
        titoloSezioneReport(pag, "Presenze e carico di allenamento");
        const intestazioni = haRPE
          ? ["Giocatore","Ruolo","Sessioni (pres. / tot.)","Presenza","Minuti tot.","Carico tot. (sRPE)","RPE medio"]
          : ["Giocatore","Ruolo","Sessioni (pres. / tot.)","Presenza","Minuti tot."];
        tabellaReport(pag, intestazioni,
          righeAllen.map(r => {
            const base = [esc(r.Giocatore), esc(ruoloDi(r.Giocatore)), `${nf0(r.Sessioni_Presenti)}/${nf0(r.Sessioni_Totali)}`, pctTxt(r.Tasso_Presenza_pct,0), nf0(r.Minuti_Tot)];
            return haRPE ? [...base, nf0(r.Carico_Tot), nf(r.RPE_Medio,1)] : base;
          }));
        if(!haRPE) bulletsReport(pag, ["Carico di allenamento (sRPE) non disponibile: i file caricati non includono l'RPE percepito."]);
      } else {
        bulletsReport(pag, ["Nessun dato di allenamento disponibile per questo mese."]);
      }
      piePaginaReport(pag, 2, 2);
    }, {piena:true})
  ]);
  statoReport("Report Mensile scaricato.", false);
}

/* ---- Report Stagionale ---- */
async function generaReportStagionale(){
  const ds = stato.ds;
  const sq = riepilogoSquadra(ds.giocatori, ds.partite);
  const agg = aggregaGiocatori(ds.giocatori);
  const tendenze = calcolaTendenze(ds.giocatori).filter(t=>t.rilevante).sort((a,b)=>Math.abs(b.delta_totale)-Math.abs(a.delta_totale)).slice(0,6);
  const incroci = ds.haRPE ? incrociCaricoRendimento(ds).slice(0,6) : [];
  const qualita = validaDati(ds);
  const leader = agg[0];
  const andamentoLeader = leader ? ds.giocatori.filter(g => g.Giocatore === leader.Giocatore)
    .slice().sort((a,b)=>(a.Data?+a.Data:0)-(b.Data?+b.Data:0))
    .map(r => ({label:r.EtichettaPartita, valore:nf(r.Indice_Prestazione,1)})) : [];

  statoReport("Genero il Report Stagionale…", true);
  await generaEScarica(nomeFileData("Report_Stagionale", new Date()), [
    async (pag) => {
      bandaReport(pag, "Report Stagionale", "Vista stagionale", `${ds.partite.length} partite · aggiornato al ${dataLabel(new Date())}`);
      sidebarReport(pag, {
        eyebrow:"Miglior indice stagionale", nome:leader?.Giocatore, ruolo:leader?.Ruolo, colore:"#C99400",
        gruppi: leader ? [
          {titolo:"Statistiche stagionali", barre:[
            {label:"Precisione passaggi", valore:pctTxt(leader.Precisione_Passaggi_pct,0), pct:leader.Precisione_Passaggi_pct??0},
            {label:"Successo dribbling", valore:pctTxt(leader.Successo_Dribbling_pct,0), pct:leader.Successo_Dribbling_pct??0},
            {label:"Tasso di errore", valore:pctTxt(leader.Tasso_Errore_pct,0), pct:leader.Tasso_Errore_pct??0, colore:"#D8825F"}
          ]},
          ...(andamentoLeader.length ? [{titolo:"Andamento indice, partita per partita", righe:andamentoLeader}] : [])
        ] : []
      });
      kpiRowReport(pag, [
        {l:"Partite giocate", v:nf0(ds.partite.length)},
        {l:"Gol fatti / subiti", v:`${nf0(sq.gol_fatti)} / ${nf0(sq.gol_subiti)}`},
        {l:"Precisione passaggi", v:pctTxt(sq.precisione_passaggi)},
        {l:"Tasso di errore", v:pctTxt(sq.tasso_errore)}
      ]);
      titoloSezioneReport(pag, "Statistiche di squadra");
      statisticheSquadraReport(pag, [
        [
          {label:"Precisione al tiro", valore:pctTxt(sq.precisione_tiro,0), pct:sq.precisione_tiro??0, colore:PALETTE_REPORT.c1},
          {label:"Precisione passaggi", valore:pctTxt(sq.precisione_passaggi,0), pct:sq.precisione_passaggi??0, colore:PALETTE_REPORT.c1},
          {label:"Successo dribbling", valore:pctTxt(sq.successo_dribbling,0), pct:sq.successo_dribbling??0, colore:PALETTE_REPORT.c1},
          {label:"Tasso di errore", valore:pctTxt(sq.tasso_errore,0), pct:sq.tasso_errore??0, colore:PALETTE_REPORT.c2}
        ],
        [
          {label:"Tiri totali (in porta)", valore:`${nf0(sq.tiri_totali)} (${nf0(sq.tiri_in_porta)})`},
          {label:"Assist", valore:nf0(sq.assist)},
          {label:"Palloni recuperati", valore:nf0(sq.recuperi)},
          {label:"Parate", valore:nf0(sq.parate)}
        ]
      ]);
      titoloSezioneReport(pag, "Classifica stagionale per indice prestazione");
      tabellaReport(pag, ["Giocatore","Ruolo","Partite","Gol","Assist","Prec. pass.","Indice tot."],
        agg.slice(0,10).map(a => [esc(a.Giocatore), esc(a.Ruolo), nf0(a.Partite_Giocate), nf0(a.Gol), nf0(a.Assist), pctTxt(a.Precisione_Passaggi_pct,0), nf(a.Indice_Prestazione_Tot,1)]));
      piePaginaReport(pag, 1, 3);
    },
    async (pag) => {
      bandaReport(pag, "Report Stagionale", "Tendenze e segnali incrociati", "Vista d'insieme su partite e allenamenti");
      sidebarReport(pag, {eyebrow:"Qualità dei dati", gruppi:[
        {titolo:"Riepilogo controlli", righe:[
          {label:"Righe da correggere", valore:nf0(qualita.filter(a=>a.tipo==="errore").length)},
          {label:"Righe da verificare", valore:nf0(qualita.filter(a=>a.tipo==="attenzione").length)}
        ]}
      ]});
      titoloSezioneReport(pag, "Tendenze individuali rilevanti");
      bulletsReport(pag, tendenze.length ? tendenze.map(t => fraseTendenza(t).replace(t.Giocatore, `<b>${esc(t.Giocatore)}</b>`)) : ["Nessuna tendenza statisticamente rilevante al momento."]);
      titoloSezioneReport(pag, "Segnali incrociati carico ↔ rendimento");
      const testi = incroci.map(x => {
        if(x.tipo==="affaticamento") return `<b>${esc(x.Giocatore)}</b>: carico ${nf(x.rapportoCarico,1)}× tra ${meseBreve(x.mesePrec)} e ${meseBreve(x.meseCorr)} e rendimento in calo di ${nf0(Math.abs(x.deltaIndice))} punti — possibile affaticamento.`;
        if(x.tipo==="positivo") return `<b>${esc(x.Giocatore)}</b>: carico stabile e rendimento in crescita di ${nf0(x.deltaIndice)} punti tra ${meseBreve(x.mesePrec)} e ${meseBreve(x.meseCorr)}.`;
        return `<b>${esc(x.Giocatore)}</b>: carico in forte calo e rendimento sceso di ${nf0(Math.abs(x.deltaIndice))} punti tra ${meseBreve(x.mesePrec)} e ${meseBreve(x.meseCorr)}.`;
      });
      bulletsReport(pag, testi.length ? testi : [ds.haRPE ? "Nessun segnale incrociato ancora disponibile: servono almeno due mesi consecutivi con partite e allenamenti." : "Non disponibile: richiede il carico di allenamento (sRPE), non presente nei file caricati."]);
      titoloSezioneReport(pag, "Qualità dei dati");
      bulletsReport(pag, [qualita.length ? `${qualita.filter(a=>a.tipo==="errore").length} righe da correggere, ${qualita.filter(a=>a.tipo==="attenzione").length} da verificare (dettaglio nella dashboard).` : "Nessuna anomalia rilevata nei dati inseriti per questa stagione."]);
      piePaginaReport(pag, 2, 3);
    },
    Object.assign(async (pag) => {
      bandaReport(pag, "Report Stagionale", "Statistiche dettagliate", "Tutti i giocatori, tutte le voci raccolte in stagione");
      tabelleDettaglioGiocatori(pag, agg);
      piePaginaReport(pag, 3, 3);
    }, {piena:true})
  ]);
  statoReport("Report Stagionale scaricato.", false);
}

/* =====================================================================
   ASSISTENTE IA
   ===================================================================== */
const SYSTEM_IA = `Sei un assistente che aiuta l'allenatore di una squadra amatoriale di calcio a 7 a leggere i dati della propria stagione.
Rispondi SEMPRE in italiano, in modo conciso e concreto, con frasi brevi e al massimo 5 punti.
Usa SOLO i numeri presenti nel contesto JSON fornito: non inventare statistiche, non stimare valori non presenti.
Se un dato manca, dillo chiaramente ("questo dato non è nel file caricato").
Se le partite sono poche (meno di 5), avverti che le indicazioni sono provvisorie.
Ricorda che l'indice prestazione non è una metrica ufficiale e che le tendenze sono indicazioni statistiche, non giudizi definitivi.
Non dare consigli medici né diagnosi sugli infortuni: al massimo suggerisci di parlarne con lo staff.`;

function contestoIA(){
  const f = datiFiltrati();
  const agg = aggregaGiocatori(f.giocatori);
  const sq = riepilogoSquadra(f.giocatori, f.partite);
  const tend = (stato.tendenze || []).filter(t => t.rilevante).map(t => ({
    giocatore:t.Giocatore, metrica:t.cfg.label, direzione:t.direzione,
    delta:+t.delta_totale.toFixed(1), r:+t.r.toFixed(2), partite:t.n, giudizio:t.giudizio}));
  const mesi = stato.ds.mesi.map(m => {
    const d = datiMese(m); const s = riepilogoSquadra(d.giocatori, d.partite);
    return {mese:m, partite:d.partite.length, gol_fatti:s.gol_fatti, gol_subiti:s.gol_subiti,
      precisione_passaggi: s.precisione_passaggi===null?null:+s.precisione_passaggi.toFixed(1),
      precisione_tiro: s.precisione_tiro===null?null:+s.precisione_tiro.toFixed(1),
      tasso_errore: s.tasso_errore===null?null:+s.tasso_errore.toFixed(1)};
  });
  let allen = null;
  if(stato.ds.haAllenamenti){
    const haRPE = stato.ds.haRPE;
    const a = aggregaAllenamenti(f.allenamenti, f.presenze);
    allen = {sessioni:a.totSess, carico_srpe_disponibile:haRPE, giocatori:a.righe.map(r=>({giocatore:r.Giocatore,
      presenza_pct: r.Tasso_Presenza_pct===null?null:+r.Tasso_Presenza_pct.toFixed(0),
      carico_srpe: haRPE ? r.Carico_Tot : null, rpe_medio: (haRPE && r.RPE_Medio!==null) ? +r.RPE_Medio.toFixed(1) : null})),
      carico_mensile: haRPE ? caricoMensile(stato.ds.allenamenti, stato.ds.presenze).map(m=>({mese:m.Mese, carico_totale:m.Carico_Tot, carico_medio:m.Carico_Medio===null?null:+m.Carico_Medio.toFixed(0)})) : []};
  }
  return {
    periodo: stato.periodo === "tutto" ? "tutta la stagione" : meseLabel(stato.periodo),
    partite: f.partite.map(p=>({data:dataLabel(p.Data), avversario:p.Avversario, risultato:p.Risultato})),
    squadra: {gol_fatti:sq.gol_fatti, gol_subiti:sq.gol_subiti,
      precisione_passaggi_pct: sq.precisione_passaggi===null?null:+sq.precisione_passaggi.toFixed(1),
      precisione_tiro_pct: sq.precisione_tiro===null?null:+sq.precisione_tiro.toFixed(1),
      successo_dribbling_pct: sq.successo_dribbling===null?null:+sq.successo_dribbling.toFixed(1),
      tasso_errore_pct: sq.tasso_errore===null?null:+sq.tasso_errore.toFixed(1)},
    classifica: agg.map(a=>({giocatore:a.Giocatore, ruolo:a.Ruolo, partite:a.Partite_Giocate, minuti:a.Minuti_Totali,
      gol:a.Gol, assist:a.Assist, precisione_passaggi_pct:a.Precisione_Passaggi_pct===null?null:+a.Precisione_Passaggi_pct.toFixed(1),
      precisione_tiro_pct:a.Precisione_Tiro_pct===null?null:+a.Precisione_Tiro_pct.toFixed(1),
      successo_dribbling_pct:a.Successo_Dribbling_pct===null?null:+a.Successo_Dribbling_pct.toFixed(1),
      tasso_errore_pct:a.Tasso_Errore_pct===null?null:+a.Tasso_Errore_pct.toFixed(1),
      parate:a.Parate, indice_prestazione:+a.Indice_Prestazione_Tot.toFixed(1)})),
    tendenze_rilevanti: tend, aggregati_mensili: mesi, allenamenti: allen
  };
}

const MEMORIA_CHIAVE = "local" + "Storage";
function memoria(){
  try{
    const m = window[MEMORIA_CHIAVE];
    if(!m) return null;
    const t = "__prova_calcio7__";
    m.setItem(t, "1"); m.removeItem(t);
    return m;
  }catch(e){ return null; }
}
function memoriaLeggi(k){ try{ const m = memoria(); return m ? m.getItem(k) : null; }catch(e){ return null; } }
function memoriaScrivi(k, v){ try{ const m = memoria(); if(!m) return false; m.setItem(k, v); return true; }catch(e){ return false; } }
function memoriaRimuovi(k){ try{ const m = memoria(); if(m) m.removeItem(k); }catch(e){} }
function localOk(){ return memoria() !== null; }
function statoChiave(msg){ $("#ia-stato-chiave").textContent = msg; }

async function chiediIA(){
  const box = $("#ia-risposta");
  const chiave = ($("#ia-chiave").value || stato.chiaveIA || "").trim();
  const domanda = $("#ia-domanda").value.trim();
  box.classList.remove("nascosto");
  if(!stato.ds){ box.textContent = "Carica prima i dati (i file Seven Lab o i dati di esempio): senza numeri non c'è nulla da analizzare."; return; }
  if(!chiave){ box.textContent = "Inserisci la tua chiave API OpenAI nel campo qui sopra. Senza chiave non posso contattare il modello."; return; }
  if(!domanda){ box.textContent = "Scrivi una domanda, per esempio: «Chi sta migliorando di più?» oppure «Su cosa lavoriamo in allenamento questa settimana?»."; return; }
  box.textContent = "Sto ragionando sui tuoi dati…";
  try{
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method:"POST",
      headers:{"Content-Type":"application/json", "Authorization":"Bearer "+chiave},
      body: JSON.stringify({model:"gpt-4o-mini", temperature:0.2, messages:[
        {role:"system", content:SYSTEM_IA},
        {role:"user", content:"Dati aggregati della squadra (JSON):\n"+JSON.stringify(contestoIA())+"\n\nDomanda dell'allenatore: "+domanda}
      ]})
    });
    if(res.status === 401){ box.textContent = "La chiave API è stata rifiutata (errore 401). Controlla di averla copiata per intero e che sia ancora attiva."; return; }
    if(res.status === 429){ box.textContent = "OpenAI ha risposto «troppe richieste o credito esaurito» (errore 429). Riprova tra qualche minuto o controlla il credito del tuo account."; return; }
    if(!res.ok){ box.textContent = "OpenAI ha risposto con un errore (codice "+res.status+"). Riprova più tardi."; return; }
    const j = await res.json();
    const txt = j?.choices?.[0]?.message?.content;
    box.textContent = txt ? txt : "La risposta è arrivata vuota. Riprova riformulando la domanda.";
  }catch(err){
    box.textContent = "Non riesco a raggiungere OpenAI: controlla la connessione a internet. (Dettaglio tecnico: "+(err?.message||"errore di rete")+")";
  }
}

/* =====================================================================
   EVENTI
   ===================================================================== */
function initTema(){
  let salvato = null;
  salvato = memoriaLeggi("tema-calcio7");
  const scuroPreferito = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const tema = salvato || (scuroPreferito ? "scuro" : "chiaro");
  applicaTema(tema);
}
function applicaTema(tema){
  document.documentElement.dataset.tema = tema;
  $("#btn-tema").textContent = tema === "scuro" ? "Tema chiaro" : "Tema scuro";
  $("#btn-tema").setAttribute("aria-label", tema === "scuro" ? "Passa al tema chiaro" : "Passa al tema scuro");
  memoriaScrivi("tema-calcio7", tema);
  if(stato.ds){ distruggiGrafici(); render(); }
}

document.addEventListener("DOMContentLoaded", () => {
  initTema();
  Chart.defaults.font.family = "Satoshi, system-ui, sans-serif";
  Chart.defaults.font.size = 12;

  $("#btn-tema").addEventListener("click", () => applicaTema(document.documentElement.dataset.tema === "scuro" ? "chiaro" : "scuro"));
  $("#btn-scegli").addEventListener("click", () => $("#input-file").click());
  $("#input-file").addEventListener("change", e => { if(e.target.files.length) gestisciFileSelezionati(e.target.files); e.target.value = ""; });
  $("#pannello-file").addEventListener("click", e => {
    const btn = e.target.closest("[data-elimina-sessione]");
    if(!btn) return;
    eliminaSessioneSalvata(btn.getAttribute("data-elimina-sessione"));
    ricaricaDaSessioni();
  });
  // riprende automaticamente da dove si era rimasti se ci sono già file Seven Lab salvati nel browser
  if(leggiSessioniSalvate().length) ricaricaDaSessioni(); else renderPannelloFile();
  $("#btn-demo").addEventListener("click", () => {
    try{
      const ds = preparaDataset(JSON.parse(JSON.stringify(DATI_DEMO)));
      distruggiGrafici();
      attivaDashboard(ds, "Dati di esempio · 4 partite");
    }catch(err){
      mostraErrore("Errore nei dati di esempio: "+esc(err.message));
      $("#errore-caricamento").classList.remove("nascosto");
    }
  });
  $("#btn-nuovo").addEventListener("click", () => {
    distruggiGrafici();
    stato.ds = null;
    $("#dashboard").classList.add("nascosto");
    $("#sez-caricamento").classList.remove("nascosto");
    $("#barra-filtri").classList.add("nascosto");
    $("#nav-sezioni").classList.add("nascosto");
    $("#btn-nuovo").classList.add("nascosto");
    $("#badge-dataset").classList.add("nascosto");
    $("#input-file").value = "";
    window.scrollTo({top:0});
  });
  const dz = $("#dropzone");
  ["dragenter","dragover"].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add("attivo"); }));
  ["dragleave","drop"].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove("attivo"); }));
  dz.addEventListener("drop", e => { const f = e.dataTransfer?.files; if(f && f.length) gestisciFileSelezionati(f); });

  $("#sel-periodo").addEventListener("change", e => { stato.periodo = e.target.value; distruggiGrafici(); render(); });
  $("#sel-giocatore").addEventListener("change", e => { stato.giocatore = e.target.value; renderGiocatore(datiFiltrati()); renderAndamentoIndividuale(); });

  $("#rp-btn-partita").addEventListener("click", async () => {
    if(!stato.ds) return;
    const btn = $("#rp-btn-partita"); btn.disabled = true;
    try{ await generaReportPartita($("#rp-sel-partita").value); }
    catch(err){ statoReport("Errore nella generazione del PDF: "+(err?.message||"riprova."), false); }
    finally{ btn.disabled = false; }
  });
  $("#rp-btn-mensile").addEventListener("click", async () => {
    if(!stato.ds) return;
    const btn = $("#rp-btn-mensile"); btn.disabled = true;
    try{ await generaReportMensile($("#rp-sel-mese").value); }
    catch(err){ statoReport("Errore nella generazione del PDF: "+(err?.message||"riprova."), false); }
    finally{ btn.disabled = false; }
  });
  $("#rp-btn-stagionale").addEventListener("click", async () => {
    if(!stato.ds) return;
    const btn = $("#rp-btn-stagionale"); btn.disabled = true;
    try{ await generaReportStagionale(); }
    catch(err){ statoReport("Errore nella generazione del PDF: "+(err?.message||"riprova."), false); }
    finally{ btn.disabled = false; }
  });

  if(localOk()){
    const k = memoriaLeggi("openai-key-calcio7");
    if(k){ $("#ia-chiave").value = k; statoChiave("Chiave ricordata su questo dispositivo."); }
    else statoChiave("La chiave può essere salvata solo su questo dispositivo, nel browser.");
  } else {
    statoChiave("Questo browser non permette di salvare la chiave: resterà in memoria solo per questa sessione.");
  }
  $("#ia-salva").addEventListener("click", () => {
    stato.chiaveIA = $("#ia-chiave").value.trim();
    if(localOk()){
      if(memoriaScrivi("openai-key-calcio7", stato.chiaveIA)) statoChiave("Chiave salvata su questo dispositivo.");
      else statoChiave("Non è stato possibile salvare la chiave nel browser: resta in memoria per questa sessione.");
    } else {
      statoChiave("Chiave tenuta solo in memoria per questa sessione.");
    }
  });
  $("#ia-invia").addEventListener("click", chiediIA);
  $("#ia-domanda").addEventListener("keydown", e => { if(e.key === "Enter" && (e.metaKey || e.ctrlKey)) chiediIA(); });
  $("#ia-dimentica").addEventListener("click", () => {
    stato.chiaveIA = "";
    $("#ia-chiave").value = "";
    memoriaRimuovi("openai-key-calcio7");
    statoChiave("Chiave dimenticata: non è più salvata su questo dispositivo.");
  });
});

<template>
  <v-app>
    <!-- <div class="red"> -->
    <HeaderNav />
    <v-content>
      <div class="py-0">
        <router-view />
      </div>
    </v-content>

    <!-- <v-footer app absolute dark padless class="red">
      <v-card flat tile class="red text-center">
        <v-card-text>© Emilio Zampieri English - P.IVA 04622620286</v-card-text>
        <v-card-text>Informativa sulla privacy e sull'uso dei cookie</v-card-text>
      </v-card>
    </v-footer>-->

    <v-footer dark padless class="red">
      <v-spacer></v-spacer>
      <v-card flat tile class="red white--text text-center">
        <v-card-text
          class="white--text pt-0 full-width"
        >© Emilio Zampieri English - P.IVA 04622620286</v-card-text>
        <v-card-text
          class="white--text pt-0 full-width link"
          @click="overlay = true"
        >Informativa sulla privacy e sull'uso dei cookie</v-card-text>

        <v-overlay :value="overlay" opacity="0.8" class="text-left">
          <v-btn icon @click="overlay = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-divider></v-divider>
          <div class="privacy">
            <v-container>
              <h3>INFORMATIVA SULLA PRIVACY E SULL'USO DEI COOKIE</h3>
              <p>(ai sensi del Regolamento UE 2016/679 e, per quanto applicabile, ai sensi del Dlgs. 196/2003 ed ai sensi del Provvedimento in materia di cookie n. 229 dell’8 maggio 2014)</p>
              <p>Emilio Zampieri con sede legale in via dei Faggi 2/12, 35020, Arzergrande (PD) C.F. ZMPMLE79M13G693R - P.IVA 04622620286 (in seguito, “Titolare”), in qualità di Titolare del trattamento, Ti informa ai sensi dell’art. 13 D.Lgs. 30.6.2003 n. 196 (in seguito, “Codice Privacy”) e dell’art. 13 Regolamento UE n. 2016/679 (in seguito, “GDPR”) che i Tuoi dati saranno trattati con le modalità e per le finalità seguenti:</p>
              <p>a) Oggetto del trattamento: Il Titolare tratta i dati personali, identificativi e non sensibili (in particolare, nome, cognome, codice fiscale, p. iva, email, numero telefonico, indirizzo email – in seguito, “dati personali” o anche “dati”) necessari all’espletamento delle richieste di informazioni provienienti dal presente sito web.</p>
              <p>b) Finalità del trattamento: il trattamento dei dati verrà effettuato per permettere la fornitura dei servizi richiesti (prestazioni servizi, contatto via e-mail, informazioni generali, ecc.) e (limitatamente ai servizi che prevedono un corrispettivo) per provvedere alla relativa fatturazione e conseguenti adempimenti fiscali e/o associativi. I dati registrati potranno anche essere utilizzati per rapporti statistici sulla nostra attività, nonché per l’invio all’interessato di informazioni relative alla stessa. Ove necessario e limitatamente per i predetti motivi i dati potranno essere comunicati anche a terzi. I dati ottenuti tramite autenticazione con sistemi di terzi si intendono conferiti al Titolare tramite l’esplicita accettazione del servizio di autenticazione (o-auth) e saranno trattati come i dati sopra indicati.</p>
              <p>c) Modalità del trattamento: i dati verranno trattati principalmente con strumenti elettronici e informatici e memorizzati sia su supporti informatici che su supporti cartacei che su ogni altro tipo di supporto idoneo, nel rispetto delle misure minime di sicurezza. Il trattamento dei Tuoi dati personali è realizzato per mezzo delle operazioni indicate all’art. 4 Codice Privacy e all’art. 4 n. 2) GDPR e precisamente: raccolta, registrazione, organizzazione, conservazione, consultazione, elaborazione, modificazione, selezione, estrazione, raffronto, utilizzo, interconnessione, blocco, comunicazione, cancellazione e distruzione dei dati. Il Titolare tratterà i dati personali per il tempo necessario per adempiere alle finalità di cui sopra e comunque per non oltre dieci anni dalla cessazione del rapporto per le finalità aziendali.</p>
              <p>d) Accesso ai dati: I Tuoi dati potranno essere resi accessibili per le finalità indicate al punto b): – a dipendenti e collaboratori del Titolare, nella loro qualità di incaricati e/o responsabili interni del trattamento e/o amministratori di sistema; – a terzi soggetti (ad esempio, provider per la gestione e manutenzione del sito web, fornitori, istituti di credito, studi professionali, etc) che svolgono attività in outsourcing per conto del Titolare, nella loro qualità di responsabili esterni del trattamento.</p>
              <p>e) Comunicazione dei dati: Senza Tuo espresso consenso (ex art. 24 lett. a), b), d) Codice Privacy e art. 6 lett. b) e c) GDPR), il Titolare potrà comunicare i Tuoi dati per le finalità indicate al punto b) a Organismi di vigilanza, Autorità giudiziarie nonché a tutti gli altri soggetti ai quali la comunicazione sia obbligatoria per legge per l’espletamento delle finalità dette. I Tuoi dati non saranno diffusi ad esclusione della pubblicazione on-line dei dati del profilo socio, chiaramente identificabili sia da pagina pubblica che da area amministrativa.</p>
              <p>f) Trasferimento dati: La gestione e la conservazione dei dati personali avverrà su server ubicati all’interno dell’Unione Europea del Titolare e/o di società terze incaricate e debitamente nominate quali Responsabili del trattamento. I dati non saranno oggetto di trasferimento al di fuori dell’Unione Europea. Resta in ogni caso inteso che il Titolare, ove si rendesse necessario, avrà facoltà di spostare l’ubicazione dei server in Italia e/o Unione Europea e/o Paesi extra-UE. In tal caso, il Titolare assicura sin d’ora che il trasferimento dei dati extra-UE avverrà in conformità alle disposizioni di legge applicabili stipulando, se necessario, accordi che garantiscano un livello di protezione adeguato e/o adottando le clausole contrattuali standard previste dalla Commissione Europea.</p>
              <p>g) Natura del conferimento dei dati e conseguenze del rifiuto di rispondere: Il conferimento dei dati per le finalità di cui al punto b) è obbligatorio. In loro assenza, non potremo garantirti né la registrazione al sito né i Servizi di cui al punto b).</p>
              <p>h) Diritti dell’interessato: Nella Tua qualità di interessato, hai i diritti di cui all’art. 7 Codice Privacy e art. 15 GDPR e precisamente i diritti di: i. ottenere la conferma dell’esistenza o meno di dati personali che Ti riguardano, anche se non ancora registrati, e la loro comunicazione in forma intelligibile; ii. ottenere l’indicazione: a) dell’origine dei dati personali; b) delle finalità e modalità del trattamento; c) della logica applicata in caso di trattamento effettuato con l’ausilio di strumenti elettronici; d) degli estremi identificativi del titolare, dei responsabili e del rappresentante designato ai sensi dell’art. 5, comma 2 Codice Privacy e art. 3, comma 1, GDPR; e) dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono venirne a conoscenza in qualità di rappresentante designato nel territorio dello Stato, di responsabili o incaricati; iii. ottenere: a) l’aggiornamento, la rettificazione ovvero, quando vi hai interesse, l’integrazione dei dati; b) la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati; c) l’attestazione che le operazioni di cui alle lettere a) e b) sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato; iv. opporsi, in tutto o in parte: a) per motivi legittimi al trattamento dei dati personali che Ti riguardano, ancorché pertinenti allo scopo della raccolta; b) al trattamento di dati personali che Ti riguardano a fini di invio di materiale pubblicitario o di vendita diretta o per il compimento di ricerche di mercato o di comunicazione commerciale, mediante l’uso di sistemi automatizzati di chiamata senza l’intervento di un operatore mediante email e/o mediante modalità di marketing tradizionali mediante telefono e/o posta cartacea. Si fa presente che il diritto di opposizione dell’interessato, esposto al precedente punto b), per finalità di marketing diretto mediante modalità automatizzate si estende a quelle tradizionali e che comunque resta salva la possibilità per l’interessato di esercitare il diritto di opposizione anche solo in parte. Pertanto, l’interessato può decidere di ricevere solo comunicazioni mediante modalità tradizionali ovvero solo comunicazioni automatizzate oppure nessuna delle due tipologie di comunicazione. Ove applicabili, hai altresì i diritti di cui agli artt. 16-21 GDPR (Diritto di rettifica, diritto all’oblio, diritto di limitazione di trattamento, diritto alla portabilità dei dati, diritto di opposizione), nonché il diritto di reclamo all’Autorità Garante.</p>
              <p>i) Modalità di esercizio dei diritti: Potrai in qualsiasi momento esercitare i diritti inviando: – raccomandata a.r. a: Emilio Zampieri con sede via dei Faggi 2/12, 35020, Arzergrande (PD)</p>
              <p>l) Minori: Questo Sito e i Servizi del Titolare non sono destinati ai minori di 18 anni e il Titolare non raccoglie intenzionalmente informazioni personali riferite ai minori. Nel caso in cui informazioni su minori fossero involontariamente registrate, il Titolare le cancellerà in modo tempestivo, su richiesta degli utenti.</p>
              <p>m) Titolare, responsabile e incaricati: Il Titolare del trattamento è Emilio Zampieri con sede via dei Faggi 2/12, 35020, Arzergrande (PD). L’elenco aggiornato dei responsabili e degli incaricati al trattamento è custodito presso la sede del Titolare del trattamento. n) Modifiche alla presente Informativa: La presente Informativa può subire variazioni. Si consiglia, quindi, di controllare regolarmente questa Informativa e di riferirsi alla versione più aggiornata.</p>
              <p>INFORMATIVA SULL’UTILIZZO DEI C.D. “COOKIE”</p>
              <p>I siti web del Titolare utilizzano cookie e tecnologie simili per garantire il corretto funzionamento delle procedure e migliorare l’esperienza di uso delle applicazioni online. Il presente documento fornisce informazioni dettagliate sull’uso dei cookie e di tecnologie similari, su come sono utilizzati dal Titolare e su come gestirli.</p>
              <p>DEFINIZIONI</p>
              <p>I cookie sono brevi frammenti di testo (lettere e/o numeri) che permettono al server web di memorizzare sul client (il browser) informazioni da riutilizzare nel corso della medesima visita al sito (cookie di sessione) o in seguito, anche a distanza di giorni (cookie persistenti). I cookie vengono memorizzati, in base alle preferenze dell’utente, dal singolo browser sullo specifico dispositivo utilizzato (computer, tablet, smartphone). Tecnologie similari, come, ad esempio, web beacon, GIF trasparenti e tutte le forme di storage locale introdotte con HTML5, sono utilizzabili per raccogliere informazioni sul comportamento dell’utente e sull’utilizzo dei servizi. Nel seguito di questo documento faremo riferimento ai cookie e a tutte le tecnologie similari utilizzando semplicemente il termine “cookie”.</p>
              <p>TIPOLOGIE DI COOKIE</p>
              <p>In base alle caratteristiche e all’utilizzo dei cookie possiamo distinguere diverse categorie:</p>

              <ul class="my-1">
                <li>Cookie strettamente necessari. Si tratta di cookie indispensabili per il corretto funzionamento dei siti del Titolare e sono utilizzati per gestire il login e l’accesso alle funzioni riservate del sito. La durata dei cookie è strettamente limitata alla sessione di lavoro (chiuso il browser vengono cancellati). La parte pubblica dei siti del Titolare resta normalmente utilizzabile.</li>
                <li>Cookie di analisi e prestazioni. Sono cookie utilizzati per raccogliere e analizzare il traffico e l’utilizzo del sito in modo anonimo. Questi cookie, pur senza identificare l’utente, consentono, per esempio, di rilevare se il medesimo utente torna a collegarsi in momenti diversi. Permettono inoltre di monitorare il sistema e migliorarne le prestazioni e l’usabilità. La disattivazione di tali cookie può essere eseguita senza alcuna perdita di funzionalità.</li>
                <li>Cookie di profilazione. Si tratta di cookie permanenti utilizzati per identificare (in modo anonimo e non) le preferenze dell’utente e migliorare la sua esperienza di navigazione. I siti del Titolare non utilizzano cookie di questo tipo.</li>
              </ul>
              <br />
              <p>COOKIE DI TERZE PARTI</p>
              <p>
                Visitando un sito web si possono ricevere cookie sia dal sito visitato (“proprietari”), sia da siti gestiti da altre organizzazioni (“terze parti”). Un esempio notevole è rappresentato dalla presenza dei “social plugin” per Facebook, Twitter, Google+ e LinkedIn. Si tratta di parti della pagina visitata generate direttamente dai suddetti siti ed integrati nella pagina del sito ospitante. L’utilizzo più comune dei social plugin è finalizzato alla condivisione dei contenuti sui social network. La presenza di questi plugin comporta la trasmissione di cookie da e verso tutti i siti gestiti da terze parti. La gestione delle informazioni raccolte da “terze parti” è disciplinata dalle relative informative cui si prega di fare riferimento.
                Per garantire una maggiore trasparenza e comodità, si riportano qui di seguito gli indirizzi web delle diverse informative e delle modalità per la gestione dei cookie.
              </p>
              <p>Facebook informativa: https://www.facebook.com/help/cookies/ Facebook (configurazione): accedere al proprio account. Sezione privacy.</p>
              <p>Twitter informative: https://support.twitter.com/articles/20170514 Twitter (configurazione): https://twitter.com/settings/security</p>
              <p>Linkedin informativa: https://www.linkedin.com/legal/cookie-policy Linkedin (configurazione): https://www.linkedin.com/settings/</p>
              <p>Google+ informativa: http://www.google.it/intl/it/policies/technologies/cookies/ Google+ (configurazione): http://www.google.it/intl/it/policies/technologies/managing/</p>
              <p>GOOGLE ANALYTICS</p>
              <p>I siti del Titolare includono anche talune componenti trasmesse da Google Analytics, un servizio di analisi del traffico web fornito da Google, Inc. (“Google”). Anche in questo caso si tratta di cookie di terze parti raccolti e gestiti in modo anonimo per monitorare e migliorare le prestazioni del sito ospite (performance cookie). Google Analytics utilizza i “cookie” per raccogliere e analizzare in forma anonima le informazioni sui comportamenti di utilizzo dei siti web del Titolare (compreso l’indirizzo IP dell’utente). Tali informazioni vengono raccolte da Google Analytics, che le elabora allo scopo di redigere report per gli operatori del Titolare riguardanti le attività sui siti web stessi. Questo sito non utilizza (e non consente a terzi di utilizzare) lo strumento di analisi di Google per monitorare o per raccogliere informazioni personali di identificazione. Google non associa l’indirizzo IP a nessun altro dato posseduto da Google né cerca di collegare un indirizzo IP con l’identità di un utente. Google può anche comunicare queste informazioni a terzi ove ciò sia imposto dalla legge o laddove tali terzi trattino le suddette informazioni per conto di Google. Per ulteriori informazioni, si rinvia al link di seguito indicato: https://www.google.it/policies/privacy/partners/ L’utente può disabilitare in modo selettivo l’azione di Google Analytics installando sul proprio browser la componente di opt-out fornito da Google. Per disabilitare l’azione di Google Analytics, si rinvia al link di seguito indicato: https://tools.google.com/dlpage/gaoptout</p>
              <p>DURATA DEI COOKIE</p>
              <p>Alcuni cookie (cookie di sessione) restano attivi solo fino alla chiusura del browser o all’esecuzione del comando di logout. Altri cookie “sopravvivono” alla chiusura del browser e sono disponibili anche in successive visite dell’utente. Questi cookie sono detti persistenti e la loro durata è fissata dal server al momento della loro creazione. In alcuni casi è fissata una scadenza, in altri casi la durata è illimitata. Il Titolare non fa uso di cookie persistenti. Tuttavia, navigando sulle pagine dei siti web del Titolare, si può interagire con siti gestiti da terze parti che possono creare o modificare cookie permanenti e di profilazione.</p>
              <p>GESTIONE DEI COOKIE</p>L’utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser.
              <p>
                Attenzione: la disabilitazione totale o parziale dei cookie tecnici può compromettere l’utilizzo delle funzionalità del sito riservate agli utenti registrati.
                Al contrario, la fruibilità dei contenuti pubblici è possibile anche disabilitando completamente i cookie.
                La disabilitazione dei cookie “terze parti” non pregiudica in alcun modo la navigabilità.
                L’impostazione può essere definita in modo specifico per i diversi siti e applicazioni web. Inoltre i migliori browser consentono di definire impostazioni diverse per i cookie “proprietari” e per quelli di “terze parti”.
                A titolo di esempio, in Firefox, attraverso il menu Strumenti->Opzioni ->Privacy, è possibile accedere ad un pannello di controllo dove è possibile definire se accettare o meno i diversi tipi di cookie e procedere alla loro rimozione.
              </p>
              <p>Chrome: https://support.google.com/chrome/answer/95647?hl=it</p>
              <p>Firefox: https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</p>
              <p>Internet Explorer: http://windows.microsoft.com/it-it/windows7/how-to-manage-cookies-ininternet-explorer-9</p>
              <p>Opera: http://help.opera.com/Windows/10.00/it/cookies.html</p>
              <p>Safari: http://support.apple.com/kb/HT1677?viewlocale=it_IT</p>
            </v-container>
          </div>
        </v-overlay>
      </v-card>
      <v-spacer></v-spacer>
    </v-footer>

    <!-- </div> -->
  </v-app>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "App",

  components: {
    HeaderNav
  },

  data: () => ({
    overlay: false
  })
};
</script>

<style >
/* .all {
  background-color: red;
} */

.full-width {
  width: 100%;
}

.link {
  text-decoration: underline;
  cursor: pointer;
}

.privacy {
  max-height: 90vh;
  overflow: auto;
}
</style>
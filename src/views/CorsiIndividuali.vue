<template>
  <v-container>
    <h1>Corsi individuali</h1>
    <v-row>
      <v-col class="col-12 col-md-4">
        <v-card class="pa-3" height="100%">
          <h2 class="text-center">Corsi Standard</h2>
          <p>
            Il corso standard si avvale di un libro di testo di una autorevole casa editrice inglese
            (Oxford UP o Cambridge UP), e ha un programma didattico prefissato, che sviluppa tutti
            gli aspetti della lingua in maniera graduale e omogenea: grammatica, lessico, parlato, ascolto.
          </p>
          <v-btn block @click="panel1 = true" class="body-1 text-none">Scopri di più</v-btn>
          <v-overlay :value="panel1" opacity="0.95">
            <v-container>
              <v-btn icon @click="panel1 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <h2 class="text-center">Corsi Standard</h2>
              <p>
                Il corso standard si avvale di un libro di testo di una autorevole casa editrice inglese
                (Oxford UP o Cambridge UP), e ha un programma didattico prefissato, che sviluppa tutti
                gli aspetti della lingua in maniera graduale e omogenea: grammatica, lessico, parlato, ascolto.
              </p>
              <p>
                Il numero di ore necessarie affinché lo studente raggiunga il livello successivo è variabile,
                e dipende molto dalla velocità di apprendimento dello studente stesso e dalla sua disponibilità
                di tempo per i compiti per casa. Mediamente, in un corso inv-overlayiduale, si impiegano 50h,
                ma è possibile anche riuscire a completare il percorso in 30h, sebbene a ritmi molto sostenuti.
                Per ogni ora di lezione, si prevedono circa 2 ore di lavoro a casa.
              </p>
              <p class="font-italic">Pro: fortemente strutturato, omogeneo, lineare.</p>
              <p
                class="font-italic"
              >Contro: meno dinamico e flessibile di un corso Listening, Conversation & Grammar</p>
            </v-container>
          </v-overlay>
        </v-card>
      </v-col>

      <v-col class="col-12 col-md-4">
        <v-card class="overflow pa-3" max-height="65vh">
          <h2 class="text-center">Listening, Conversation & Grammar</h2>
          <p>
            Il corso Listening, Conversation & Grammar è rivolto ai livelli Pre-Intermediate (A2),
            Intermediate (B1) e Upper-Intermediate (B2), e si tiene esclusivamente in lingua inglese.
            E' progettato per chi ha già una discreta conoscenza e padronanza della lingua inglese,
            e vuole un corso più dinamico e vivace, meno
            <span
              class="font-italic"
            >regimented</span>
            , personalizzabile in base alle
            proprie esigenze e ai propri interessi.
          </p>
          <div v-show="panel2">
            <p>E' previsto un programma didattico prefissato soltanto per la grammatica, mentre le parti di comprensione, parlato e lessico vengono personalizzate in base alle necessità e interessi dello studente.</p>
            <p>La conversazione può essere libera oppure a tema. Si usano articoli di giornale e riviste, documentari di ogni genere (storia, scienza, arte, ecc.) e film o serie TV. A fine lezione il docente consegna allo studente una dispensa con gli appunti relativi alle nuove parole incontrate e gli errori commessi.</p>
            <p>L'attività di ascolto e comprensione della lingua prevede l'uso di libri di testo adeguati e di consolidata efficacia. Ad inizio corso, il docente illustra le tecniche da usare per la comprensione, inclusa la fonetica di base e alcune strategie di fonetica avanzata.</p>
            <p>La grammatica prevede l'uso di un libro di testo, con esercizi self-checking e spiegazioni da parte del docente.</p>
            <p>Altre attività di completamento comprendono: ampliamento del lessico attraverso letture graduate e libri specifici, studio dei verbi frasali (phrasal verbs), degli idiomi (idioms) e delle collocazioni (collocations).</p>
            <p>A richiesta, il docente può preparare lezioni di argomento tecnico, a seconda delle esigenze dello studente.</p>
            <p>Passare dal livello B1 al livello B2 richiede solitamente almeno 50-60h di corso. Per il passaggio da B2 a C1, ovvero per ottenere un autentico livello avanzato non solo a livello grammaticale, si calcolino almeno 90h.</p>
          </div>
          <v-btn block @click="panel2 = !panel2" text class="body-1 text-none">
            <span v-if="panel2">
              Chiudi
              <v-icon class="ml-1">mdi-chevron-up</v-icon>
            </span>
            <span v-else>
              Continua a leggere...
              <v-icon class="ml-1">mdi-chevron-down</v-icon>
            </span>
          </v-btn>
        </v-card>
      </v-col>

      <v-col class="col-12 col-sm-6 col-md-4">
        <v-card max-height="60vh" height="100%" class="overflow pa-3">
          <v-img class="white--text align-end" src="@/assets/preparazione_esami.jpg" height="150px">
            <div class="title-back">
              <v-card-title class="card-title">Preparazione Esami e Certificazioni, Ripetizioni</v-card-title>
            </div>
          </v-img>
          <p>Un tutor qualificato e con esperienza vi seguirà nella preparazione di esami universitari di qualsiasi tipo (lingua, letteratura, ecc.) ed esami Cambridge quali IELTS, KET, PET e FIRST.</p>
          <p>Per gli studenti delle scuole superiori, supporto scolastico durante l'anno e in estate per recupero debiti ed esami di maturità</p>
          <p>questo è un altro paragrafo per attivare lo scrolling del testo</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      panel1: false,
      panel2: false,
      panel3: false
    };
  }
};
</script>

<style scoped>
.overflow {
  overflow: auto;
}

.card-title {
  word-break: break-word;
}
</style>
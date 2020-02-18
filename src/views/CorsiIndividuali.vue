<template>
  <v-container fluid>
    <h1 class="text-center">Corsi individuali</h1>
    <v-row>
      <v-col class="col-12 col-md-4">
        <v-card class="pa-3" height="100%">
          <v-img
            class="white--text align-end mb-1"
            src="@/assets/preparazione_esami.jpg"
            height="150px"
          >
            <div class="title-back">
              <v-card-title class="card-title py-2">Corsi Standard</v-card-title>
            </div>
          </v-img>
          <div class="overflow d-flex flex-column">
            <p>
              Il corso standard si avvale di un libro di testo di una autorevole casa editrice inglese
              (Oxford UP o Cambridge UP), e ha un programma didattico prefissato, che sviluppa tutti
              gli aspetti della lingua in maniera graduale e omogenea: grammatica, lessico, parlato, ascolto.
            </p>

            <div v-show="panel1">
              <p>
                Il numero di ore necessarie affinché lo studente raggiunga il livello successivo è variabile,
                e dipende molto dalla velocità di apprendimento dello studente stesso e dalla sua disponibilità
                di tempo per i compiti per casa. Mediamente, in un corso individuale, si impiegano 50h,
                ma è possibile anche riuscire a completare il percorso in 30h, sebbene a ritmi molto sostenuti.
                Per ogni ora di lezione, si prevedono circa 2 ore di lavoro a casa.
              </p>
              <p class="font-italic">Pro: fortemente strutturato, omogeneo, lineare.</p>
              <p
                class="font-italic"
              >Contro: meno dinamico e flessibile di un corso Listening, Conversation & Grammar</p>
            </div>
            <div class="flex-grow-1"></div>

            <v-btn block @click="panel1 = !panel1" text class="body-1 text-none align-self-end">
              <span v-if="panel1">
                Chiudi
                <v-icon class="ml-1">mdi-chevron-up</v-icon>
              </span>
              <span v-else>
                Continua a leggere...
                <v-icon class="ml-1">mdi-chevron-down</v-icon>
              </span>
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <v-col class="col-12 col-md-4">
        <v-card class="pa-3" height="100%">
          <v-img
            class="white--text align-end mb-1"
            src="@/assets/preparazione_esami.jpg"
            height="150px"
          >
            <div class="title-back">
              <v-card-title class="card-title py-2">Listening, Conversation & Grammar</v-card-title>
            </div>
          </v-img>

          <div class="overflow">
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
          </div>
        </v-card>
      </v-col>

      <v-col class="col-12 col-sm-6 col-md-4">
        <v-card height="100%" class="pa-3">
          <v-img
            class="white--text align-end mb-1"
            src="@/assets/preparazione_esami.jpg"
            height="150px"
          >
            <div class="title-back">
              <v-card-title class="card-title py-2">Preparazione Esami e Certificazioni, Ripetizioni</v-card-title>
            </div>
          </v-img>
          <div class="overflow">
            <p>Un tutor qualificato e con esperienza vi seguirà nella preparazione di esami universitari di qualsiasi tipo (lingua, letteratura, ecc.) ed esami Cambridge quali IELTS, KET, PET e FIRST.</p>
            <p>Per gli studenti delle scuole superiori, supporto scolastico durante l'anno e in estate per recupero debiti ed esami di maturità.</p>
          </div>
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

<style >
.overflow {
  overflow: auto;
  height: 45vh;
}

.card-title {
  word-break: break-word;
}
</style>
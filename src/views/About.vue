<template>
  <v-container class="py-10">
    <main>
      <article>
        <v-card shaped class="mx-5 mx-md-10 red darken-4 white--text">
          <v-card
            flat
            color="rgba(255, 255, 255, 0.5)"
            class="float-md-left mr-md-10 mb-2 mb-md-5 portrait-card"
            width="128px"
          >
            <v-img
              src="@/assets/logo-EZ-square.png"
              alt="Emilio Zampieri"
              class="white--text align-end"
            ></v-img>
          </v-card>
          <div class="py-2 py-md-6 px-8 text-justify">
            <h2 class="mb-6">Chi siamo</h2>
            <p>
              Emilio Zampieri, PhD, è docente libero professionista di lingua e
              cultura inglese, Dottore di Ricerca in Lingua e Letteratura
              Inglese con esperienza presso la University of Cambridge, UK.
            </p>
            <p></p>
            <p>
              Ha iniziato la sua attività insegnando a tutti i livelli in grandi
              aziende e società del Veneto, tra le quali Forall Pal Zileri,
              Siemens, Gruppo Mastrotto, Artoni, solo per citarne alcune. Col
              tempo si sono aggiunte altre aziende di piccole e medie
              dimensioni, e ciò gli ha permesso di sperimentare diversi tipi di
              realtà commerciali.
            </p>

            <p>
              All'insegnamento aziendale ha presto associato quello privato
              individuale, in qualità di tutor, con varie modalità e approcci,
              sempre personalizzati e mirati. Ha creato il libro di testo di
              livello avanzato (C1) per una nota società di formazione aziendale
              lombarda.
            </p>
            <p>
              Ha collaborato dal 2014 al 2021 con CRAZY LAB ACADEMY in qualità
              di organizzatore didattico e docente di tutti i corsi di inglese,
              e da Febbraio 2021 organizza corsi mirati di gruppo.
            </p>
            <p>
              EZ English School è presente a Piove di Sacco dal 2012. E' aperta
              tutto l'anno e offre lezioni e corsi tutto il giorno, sera
              inclusa.
            </p>
          </div>
        </v-card>
      </article>
    </main>
  </v-container>
</template>

<style scoped>
.portrait-card {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

@media only screen and (min-width: 960px) {
  .portrait-card {
    border-bottom-right-radius: 2em !important;
  }
}
</style>

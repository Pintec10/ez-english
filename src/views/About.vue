<template>
  <v-container class="py-10">
    <v-card shaped class="mx-5 mx-md-10 red darken-4 white--text">
      <v-card
        flat
        color="rgba(255, 255, 255, 0.5)"
        class="float-md-left mr-5 mb-3 portrait-card"
        width="350px"
      >
        <v-img src="@/assets/emilio.jpg" alt="foto di profilo" class="white--text align-end"></v-img>
      </v-card>
      <div class="pa-4">
        <h2 class="mb-2">Chi sono</h2>
        <p>Sono un docente libero professionista di lingua inglese, Dottore di Ricerca in Lingua e Letteratura Inglese.</p>
        <p></p>
        <p>Ho iniziato la mia attività insegnando in grandi aziende e società del Veneto (tra le quali, Forall Pal Zileri, Siemens, Gruppo Mastrotto, Artoni, solo per citarne alcune) a tutti i livelli. Col tempo si sono aggiunte altre aziende di piccole e medie dimensione. Ciò mi ha dato la possibilità di sperimentare diversi tipi di realtà commerciali.</p>

        <p>All'insegnamento aziendale ho presto associato quello privato individuale e a due, con varie modalità e approcci.</p>
        <p>Dal 2014 sono l'organizzatore didattico e docente dei corsi di inglese organizzati dall'incubatore di imprese Crazy Lab, a Piove di Sacco (PD).</p>
        <p>Il mio primo approccio con l'inglese risale ai tempi delle elementari. Da allora non ho più smesso di studiarlo: liceo, Facoltà di Lingue e Letterature Straniere con specializzazione in inglese e infine, Dottorato di ricerca in Lingua e Letteratura Inglese con esperienza presso la University of Cambridge, UK.</p>
        <p>
          <span class="font-italic">It goes without saying</span>, l'inglese è la mia grande passione!
        </p>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped>
.title-back {
  background-color: rgba(0, 0, 0, 0.3);
}
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

<template>
  <v-container fluid>
    <h1 class="text-center">Corsi di gruppo</h1>
    <v-card class="ma-3 pa-1 ma-md-10 pa-md-5">
      <v-img
        class="white--text align-end mb-1"
        src="@/assets/preparazione_esami.jpg"
        height="200px"
      >
        <div class="title-back">
          <v-card-title class="card-title py-2">Offerta didattica con livello di partenza richiesto</v-card-title>
        </div>
      </v-img>

      <v-list>
        <div class="list-column">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Principianti assoluti</v-list-item-title>
              <v-list-item-subtitle>(Absolute beginners)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">False beginners</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Elementare</v-list-item-title>
              <v-list-item-subtitle>(Elementary, A1)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Preintermedio</v-list-item-title>
              <v-list-item-subtitle>(Pre-intermediate, A2)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Intermedio</v-list-item-title>
              <v-list-item-subtitle>(Intermediate, B1)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Intermedio avanzato</v-list-item-title>
              <v-list-item-subtitle>(Upper intermediate, B2)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Inglese per il lavoro</v-list-item-title>
              <v-list-item-subtitle>(Business English, A2&rarr;)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Listening & conversation</v-list-item-title>
              <v-list-item-subtitle>(B1&rarr;)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Inglese per viaggiare</v-list-item-title>
              <v-list-item-subtitle>(Travel English, A1, A2, B1)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Learn English with TV series</v-list-item-title>
              <v-list-item-subtitle>(B1&rarr;)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Pronuncia inglese per cantanti</v-list-item-title>
              <v-list-item-subtitle>(A1&rarr;)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
@media only screen and (min-width: 960px) {
  .list-column {
    column-count: 2;
    column-fill: auto;
  }
}
</style>
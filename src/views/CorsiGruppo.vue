<template>
  <v-container class="py-10">
    <h1 class="text-center indigo--text text--darken-4">Corsi di gruppo</h1>
    <v-card shaped class="ma-3 ma-md-12 red darken-4">
      <v-img
        class="white--text align-end mb-1"
        src="../assets/corsi_gruppo_gruppo.jpg"
        height="40vh"
        position="center 15%"
      >
        <div class="title-back">
          <v-card-title class="card-title py-2">Offerta didattica con livello di partenza richiesto</v-card-title>
        </div>
      </v-img>

      <v-list class="red darken-4">
        <div class="list-column red darken-4 pa-5 mb-5">
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Principianti assoluti</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(Absolute beginners)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">False beginners</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Elementare</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(Elementary, A1)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Preintermedio</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(Pre-intermediate, A2)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Intermedio</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(Intermediate, B1)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Intermedio avanzato</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(Upper intermediate, B2)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Inglese per il lavoro</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(Business English, A2&rarr;)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Listening & conversation</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(B1&rarr;)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Inglese per viaggiare</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(Travel English, A1, A2, B1)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Learn English with TV series</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(B1&rarr;)</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="white--text">
              <v-list-item-title class="text-uppercase">Pronuncia inglese per cantanti</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--lighten-1">(A1&rarr;)</v-list-item-subtitle>
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
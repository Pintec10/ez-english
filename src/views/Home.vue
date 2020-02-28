<template>
  <v-container class="py-5">
    <h2
      class="text-center font-italic indigo--text text--darken-4 mt-4 mb-8"
    >Corsi di inglese per privati e aziende a Piove di Sacco</h2>

    <main>
      <v-carousel
        height="70vh"
        class="inner-remaining"
        :cycle="true"
        interval="5000"
        show-arrows-on-hover
      >
        <v-carousel-item
          src="../assets/corsi_individuali_homepage.jpeg"
          alt="corsi individuali"
          position="center 5%"
          to="/corsi-individuali"
        >
          <v-sheet color="transparent" height="100%">
            <v-row align="start" justify="center">
              <div class="display-1 title-back text-center py-3">Corsi Individuali</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item
          src="../assets/corsi_gruppo_homepage.jpeg"
          alt="corsi di gruppo"
          position="center 10%"
          to="/corsi-gruppo"
        >
          <v-sheet color="transparent" height="100%">
            <v-row align="start" justify="center">
              <div class="display-1 title-back text-center py-3">Corsi di Gruppo</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item src="../assets/business_homepage.jpeg" alt="corsi business" to="/business">
          <v-sheet color="transparent" height="100%">
            <v-row align="start" justify="center">
              <div class="display-1 title-back text-center py-3">Corsi Business</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </main>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style >
.title-back {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
}

@media only screen and (min-width: 960px) {
  .vert-spacer {
    height: 3vh;
  }
}
</style>

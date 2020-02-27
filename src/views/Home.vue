<template>
  <v-container class="py-5">
    <h2
      class="text-center font-italic indigo--text text--darken-4 mb-md-4"
    >Corsi di inglese per privati e aziende a Piove di Sacco dal 2012</h2>

    <!-- <v-row>
      <v-col class="col-12 col-sm-6 col-md-4">
        <v-card to="/corsi-individuali">
          <v-img class="white--text align-end" src="@/assets/corsi_individuali.jpg" height="200px">
            <div class="title-back">
              <v-card-title>Corsi individuali</v-card-title>
            </div>
          </v-img>
        </v-card>
      </v-col>
      <v-col class="col-12 col-sm-6 col-md-4">
        <v-card to="/corsi-gruppo">
          <v-img class="white--text align-end" src="@/assets/group.jpg" height="200px">
            <div class="title-back">
              <v-card-title>Corsi di gruppo</v-card-title>
            </div>
          </v-img>
        </v-card>
      </v-col>
      <v-col class="col-12 col-sm-6 col-md-4">
        <v-card to="business">
          <v-img class="white--text align-end" src="@/assets/business.jpg" height="200px">
            <div class="title-back">
              <v-card-title>Business</v-card-title>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>-->

    <v-carousel
      height="70vh"
      class="inner-remaining"
      :cycle="true"
      interval="5000"
      show-arrows-on-hover
    >
      <v-carousel-item
        src="../assets/corsi_individuali_homepage.jpeg"
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
        position="center 10%"
        to="/corsi-gruppo"
      >
        <v-sheet color="transparent" height="100%">
          <v-row align="start" justify="center">
            <div class="display-1 title-back text-center py-3">Corsi di Gruppo</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item src="../assets/business_homepage.jpeg" to="/business">
        <v-sheet color="transparent" height="100%">
          <v-row align="start" justify="center">
            <div class="display-1 title-back text-center py-3">Corsi Business</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
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

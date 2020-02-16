<template>
  <v-container>
    <v-row>
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
          <v-img class="white--text align-end" src="@/assets/corsi_individuali.jpg" height="200px">
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
    </v-row>
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
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

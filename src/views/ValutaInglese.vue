<template>
  <v-container fluid>
    <h1 class="text-center">Valuta il tuo inglese</h1>

    <v-row>
      <v-spacer></v-spacer>
      <v-col class="col-12 col-md-8">
        <v-card class="pb-3">
          <v-img class="white--text align-end" src="@/assets/corsi_individuali.jpg" height="200px"></v-img>
          <v-card-text
            class="text-center pa-3"
          >Scarica qui sotto il file .pdf o .doc del test di autovalutazione per la lingua inglese e scopri qual è il tuo livello!</v-card-text>
          <div class="d-flex justify-center my-3">
            <v-btn
              color="red"
              dark
              class="mx-3"
              x-large
              fab
              download
              href="../assets/self-assessment.pdf"
            >
              <v-icon>mdi-file-pdf</v-icon>
            </v-btn>

            <v-btn
              color="indigo"
              dark
              class="mx-3"
              x-large
              fab
              download
              href="../assets/self-assessment.doc"
            >
              <v-icon>mdi-file-document</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
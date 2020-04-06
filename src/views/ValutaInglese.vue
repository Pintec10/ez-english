<template>
  <v-container class="py-10">
    <h2 class="text-center indigo--text text--darken-4">Valuta il tuo inglese</h2>
    <main>
      <v-card shaped class="ma-3 ma-md-12 red darken-4">
        <article>
          <v-img
            class="white--text align-end mb-1"
            src="@/assets/valuta_valuta_r.jpg"
            alt="valuta il tuo inglese"
            height="50vh"
            position="center 50%"
          ></v-img>
          <div class="red darken-4 pa-5 mb-5 white--text">
            <v-card-text
              class="text-center pa-3"
            >Scarica qui sotto il file .pdf o .doc del test di autovalutazione per la lingua inglese e scopri qual è il tuo livello!</v-card-text>
            <div class="d-flex justify-center mt-7 mb-3">
              <div class="d-flex flex-column align-center">
                <v-btn
                  color="white"
                  dark
                  class="mx-5 mb-2"
                  x-large
                  fab
                  download
                  href="https://www.emiliozampieri.it/self-assessment.pdf"
                >
                  <v-icon color="red">mdi-file-pdf</v-icon>
                </v-btn>
                <p>PDF</p>
              </div>
              <div class="d-flex flex-column align-center">
                <v-btn
                  color="white"
                  dark
                  class="mx-5 mb-2"
                  x-large
                  fab
                  download
                  href="https://www.emiliozampieri.it/self-assessment.doc"
                >
                  <v-icon color="indigo">mdi-file-document</v-icon>
                </v-btn>
                <p>DOC</p>
              </div>
            </div>
          </div>
        </article>
      </v-card>
    </main>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
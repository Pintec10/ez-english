<template>
  <v-container class="py-5">
    <h2 class="text-center indigo--text text--darken-4 mt-4 mb-8">
      Corsi di inglese
      <span class="red--text text--darken-2">personalizzati</span> per privati e aziende a Piove di Sacco
    </h2>

    <main>
      <section>
        <v-carousel
          height="72vh"
          class="inner-remaining"
          :cycle="true"
          interval="5000"
          show-arrows-on-hover
        >
          <v-carousel-item
            src="../assets/corsi_individuali_homepage_r.jpeg"
            alt="corsi individuali"
            position="center 40%"
            to="/corsi-individuali"
          >
            <v-sheet color="transparent" height="100%">
              <v-row align="start" justify="center">
                <div class="display-1 title-back text-center py-3">Corsi Individuali</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item
            src="../assets/corsi_gruppo_homepage_r.jpeg"
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
          <v-carousel-item
            src="../assets/business_homepage_r.jpeg"
            alt="corsi business"
            to="/business"
          >
            <v-sheet color="transparent" height="100%">
              <v-row align="start" justify="center">
                <div class="display-1 title-back text-center py-3">Corsi Business</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </section>

      <section>
        <v-row class="mt-12">
          <v-col
            v-for="(comment, index) in comments"
            v-bind:key="index"
            class="col-12 col-md-6 px-2 px-md-12"
          >
            <div class="flip-card mx-12">
              <div class="flip-card-inner">
                <v-card shaped class="flip-card-front d-flex flex-column justify-center red-border">
                  <div class="px-md-12">
                    <v-icon large color="red darken-4">mdi-comment-quote</v-icon>
                    <v-card-text class="no-break">{{comment.summary}}</v-card-text>
                    <v-card-text class="overline">&#8212; {{comment.author}}, {{comment.job}}</v-card-text>
                  </div>
                </v-card>
                <v-card
                  shaped
                  class="flip-card-back d-flex flex-column justify-center overflow-auto px-md-4 red-border"
                >
                  <v-card-text>{{comment.text}}</v-card-text>
                </v-card>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="d-flex justify-center mt-4">
          <v-btn
            color="red darken-4"
            dark
            v-on:click="navigateToComments"
          >Scopri cosa dicono gli studenti</v-btn>
        </div>
      </section>
    </main>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    model: 0,
    comments: [
      {
        author: "Barbara",
        job: "imprenditrice",
        place: "Piove di Sacco (PD)",
        course: "corso Preintermedio A2, lezioni Intermedio B1",
        text:
          "Volevo migliorare il mio livello di inglese: non solo ci sono riuscita ma ho trovato un insegnante davvero simpatico e divertente, che mi ha fatto appassionare a quello che stavo studiando! Lo consiglio davvero!",
        summary: "...mi ha fatto appassionare a quello che stavo studiando..."
      },
      {
        author: "Roberto",
        job: "Segretario Generale Camera di Commercio di Padova",
        place: "Piove di Sacco (PD)",
        course: "lezioni Intermedio B1+",
        text:
          "Non ho mai avuto particolare feeling con l’inglese, ma esigenze lavorative mi hanno costretto a riprenderlo in mano. Mi sono rivolto ad Emilio. Ho trovato passione, competenza, metodo di insegnamento molto valido e così adesso... l’inglese mi piace davvero tanto. Grazie Emilio!",
        summary: "...passione, competenza, metodo di insegnamento..."
      },
      {
        author: "Davide",
        job: "legal manager",
        place: "Codevigo (PD)",
        course: "Corso Business B1",
        text:
          "Emilio è stato un ottimo insegnante, professionale, capace di rendere coinvolgente ogni lezione. Si vede che fa il suo lavoro con passione e riesce a trasmetterla ai suoi allievi e a fargli raggiungere ottimi risultati. ",
        summary:
          "...professionale, capace di rendere coinvolgente ogni lezione..."
      },
      {
        author: "Enrico",
        job: "insegnante di scuola professionale",
        place: "Arzergrande (PD)",
        course: "lezioni Intermedio B1",
        text:
          "Emilio mi ha aiutato nella preparazione dell'esame IELTS. Abbiamo fatto alcune sedute di conversazione e mi ha dato splendidi consigli e dritte per la parte di writing. Lo raccomando fortemente come insegnante. Non vi pentirete di aver scelto Emilio se il vostro obiettivo è imparare l'inglese nel miglior modo possibile.",
        summary: "...mi ha aiutato nella preparazione dell'esame IELTS..."
      }
    ]
  }),
  methods: {
    navigateToComments() {
      this.$router.push({
        name: "PercheSceglierci",
        hash: "#commenti-studenti"
      });
    }
  }
};
</script>

<style >
.title-back {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
}

.flip-card {
  background-color: transparent !important;
  /* width: 300px; */
  height: 300px;
  /* border: 1px solid #f1f1f1; */
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  /* background-color: #bbb;
  color: black; */
}

.flip-card-back {
  /* background-color: dodgerblue;
  color: white; */
  transform: rotateY(180deg);
}

.no-break {
  word-break: normal !important;
}

@media only screen and (min-width: 960px) {
  .vert-spacer {
    height: 3vh;
  }

  .flip-card {
    height: 20vw;
  }
}
</style>

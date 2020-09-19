<template>
  <v-container class="py-10">
    <!-- <h2 class="text-center indigo--text text--darken-4">Perché Scegliere Emilio Zampieri English</h2> -->
    <main>
      <section>
        <v-row>
          <v-col>
            <section>
              <v-card shaped class="ma-3 ml-md-12 mt-md-12 red darken-4">
                <article id="top">
                  <v-img
                    class="white--text align-end mb-1"
                    src="@/assets/perchesceglierci_r.jpeg"
                    alt="Perché scegliere Emilio Zampieri English"
                    height="60vh"
                    position="center 5%"
                  ></v-img>
                  <div class="red darken-4 pa-5 mb-5 white--text">
                    <v-card-text class="pa-3">
                      Se hai già provato vari corsi senza veri risultati, con Emilio Zampieri English impari l'inglese una volta per
                      tutte, e
                      <span
                        class="underlined bold"
                      >facendo quello che ti piace</span>, attraverso corsi personalizzati in base alle tue esigenze e
                      <span
                        class="underlined bold"
                      >ai tuoi interessi</span>, dall'arte allo sport, dall'economia alla cucina, dall'inglese che si usa in ufficio a quello del
                      marketing. Perché sono la motivazione e la passione a fare la differenza!
                    </v-card-text>
                    <v-card-text class="pa-3">
                      A tua disposizione un docente con 10 anni di esperienza nell'insegnamento della lingua inglese a tutti i
                      livelli e nei più svariati settori.
                    </v-card-text>
                    <v-card-text class="pa-3">
                      Inglese a 360°. Non solo grammatica, ma anche lessico, comprensione orale e conversazione. Per poterlo
                      scrivere, leggere, capire e soprattutto parlare veramente e con la pronuncia corretta!
                    </v-card-text>
                  </div>
                </article>
              </v-card>
            </section>
          </v-col>
        </v-row>
      </section>
      <div id="commenti-studenti"></div>
      <section>
        <h3 class="text-center indigo--text text--darken-4 mt-12">Scopri cosa dicono gli studenti</h3>
        <v-slide-group v-model="model" class="pa-4" show-arrows center-active>
          <v-slide-item v-for="n in 19" :key="n" v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'red darken-4' : 'red-border'"
              class="ma-4 red-border slide-card d-flex flex-column justify-center"
              v-bind:class="{ activeComment: active }"
              height="100"
              width="180"
              @click="toggle"
            >
              <div class="slide-decoration">
                <v-btn
                  fab
                  height="30px"
                  width="30px"
                  class="red darken-4"
                  elevation="0"
                  dark
                  :ripple="false"
                >
                  <v-icon size="20px">mdi-comment-quote</v-icon>
                </v-btn>
              </div>
              <v-card-title>{{comments[n-1].author}}</v-card-title>

              <v-card-subtitle
                v-bind:class="{ activeComment: active }"
                class="overline"
              >{{comments[n-1].job}}</v-card-subtitle>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <v-expand-transition>
          <v-sheet
            v-if="model != null"
            color="grey lighten-4"
            height="250"
            tile
            class="overflowing px-2 px-md-10"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="display-1 text--primary mb-4">{{comments[model].author}}</v-list-item-title>
                  <v-list-item-subtitle
                    class="overline mb-4"
                  >{{comments[model].job + ", " + comments[model].place + " - " + comments[model].course}}</v-list-item-subtitle>
                  {{comments[model].text}}
                </v-list-item-content>
              </v-list-item>
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </section>
    </main>
  </v-container>
</template>

<script>
export default {
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
      },
      {
        author: "Roberto",
        job: "Segretario Generale Camera di Commercio di Padova",
        place: "Piove di Sacco (PD)",
        course: "lezioni Intermedio B1+",
        text:
          "Non ho mai avuto particolare feeling con l’inglese, ma esigenze lavorative mi hanno costretto a riprenderlo in mano. Mi sono rivolto ad Emilio. Ho trovato passione, competenza, metodo di insegnamento molto valido e così adesso... l’inglese mi piace davvero tanto. Grazie Emilio!",
      },
      {
        author: "Davide",
        job: "legal manager",
        place: "Codevigo (PD)",
        course: "Corso Business B1",
        text:
          "Emilio è stato un ottimo insegnante, professionale, capace di rendere coinvolgente ogni lezione. Si vede che fa il suo lavoro con passione e riesce a trasmetterla ai suoi allievi e a fargli raggiungere ottimi risultati. ",
      },
      {
        author: "Enrico",
        job: "insegnante di scuola professionale",
        place: "Arzergrande (PD)",
        course: "lezioni Intermedio B1",
        text:
          "Emilio mi ha aiutato nella preparazione dell'esame IELTS. Abbiamo fatto alcune sedute di conversazione e mi ha dato splendidi consigli e dritte per la parte di writing. Lo raccomando fortemente come insegnante. Non vi pentirete di aver scelto Emilio se il vostro obiettivo è imparare l'inglese nel miglior modo possibile.",
      },
      {
        author: "Roberta",
        job: "educatrice professionale",
        place: "Piove di Sacco (PD)",
        course: "lezioni Intermedio B1+",
        text:
          "Il corso di inglese è coinvolgente, e svolto con serietà e professionalità. Ti permette di approfondire molteplici argomenti, anche di interesse personale. E' davvero arricchente e stimolante. Pienamente soddisfatta! Thank you teacher Emilio!",
      },
      {
        author: "Emanuela",
        job: "medico",
        place: "Piove di Sacco (PD)",
        course: "lezioni Intermedio Avanzato B2",
        text:
          'Ho studiato fin dalle superiori inglese, e all’università. Poi ho seguito gruppi in biblioteca, in patronato e privatamente... con scarsissimi risultati e soddisfazione. Emilio è "the best teacher I\'ve ever had" perché, prima con la ripresa della grammatica e poi con la conversazione, ma scegliendo assieme argomenti che erano interessanti, ho trovato il modo di studiare la lingua inglese proprio perché ero appassionata a quegli argomenti, e tutto è diventato facile e non pesante! Perciò io consiglierei caldamente (e l’ho fatto) di andare da Emilio! Per la sua professionalità in primis, per la sua capacità di porsi con gli studenti e la sua - non ultima dote - umiltà, pur essendo preparatissimo!',
      },
      {
        author: "Katia",
        job: "Accounting Manager",
        place: "Legnaro (PD)",
        course: "corso Listening & Conversation B1/B2, corso aziendale",
        text:
          "Emilio è un insegnante fantastico. Ho frequentato i suoi corsi sia in sede che a livello aziendale nel mio ufficio. Ti mette sempre a tuo agio! Le lezioni sono divertenti e non sono mai troppo pesanti, specialmente per chi lavora tutto il giorno. Migliorerai il tuo livello di inglese studiando la grammatica, facendo conversazione, ma anche andando al cinema o al teatro all’aperto con la classe, o a delle spassosissime cene di classe. Raccomando vivamente i corsi di Emilio, ne sarai entusiasta. Che aspetti? Start speaking English! ",
      },
      {
        author: "Older",
        job: "Product Marketing Manager",
        place: "Campolongo Maggiore (VE)",
        course: "lezioni Intermedio B1",
        text:
          "Con il nuovo lavoro avevo la necessità di portare il mio inglese ad un altro livello. L'inglese è sempre stata una materia che mi ha messo in difficoltà, in cui i progressi non erano commisurati alle ore spese. Con Emilio invece lo studio risulta molto facile, ti lascia il tempo di capire i tuoi errori, ti aiuta a correggerti e fin dalle prime lezioni ci si sente più sicuri e rilassati.",
      },
      {
        author: "Federica",
        job: "impiegata",
        place: "Campolongo Maggiore (VE)",
        course:
          "corsi Listening & Conversation B1/B2, Intermedio B1 e Intermedio Avanzato B2",
        text:
          "Frequentare un corso di inglese presso una scuola privata in Gran Bretagna e frequentare un corso di inglese presso Emilio Zampieri English a Piove di Sacco sono la stessa cosa. La differenza principale consiste nel tempo di frequenza. In Inghilterra ci puoi andare per un tempo limitato: una settimana, un mese ecc., mentre da Emilio ci puoi andare tutto l'anno a tuo piacimento. In base alle tue necessità puoi variare da corsi di grammatica a corsi di conversazione, rigorosamente in inglese. Consiglio entrambi i corsi, senza esagerare.",
      },
      {
        author: "Ernesto",
        job: "imprenditore",
        place: "Codevigo (PD)",
        course: "corso Principianti, lezioni Principiante",
        text:
          "C'e molta differenza tra \"imparare\" e \"apprendere\" qualcosa, un pò come sentire una persona o ascoltare una persona. Si può imparare un lavoro, una lingua straniera a memoria, o si può apprenderla e vedere con soddisfazione che diventa parte di te: la differenza sta in chi te la insegna. Con Emilio sono partito da zero (anche un po' piu' sotto!) e ho cominciato ad apprendere l'inglese prima in un gruppo, poi in lezioni individuali, dove Emilio ha potuto esprimere tutte le sue potenzialità di insegnante. Posso consigliarlo a chi desidera cominciare ad apprendere l'inglese in maniera corretta e seria.",
      },
      {
        author: "Sonia",
        job: "infermiera",
        place: "Piove di Sacco (PD)",
        course: "lezioni Intermedio B1",
        text:
          "Ho migliorato il mio livello di conoscenza e di conversazione in inglese su svariati temi, dalla vita quotidiana a quella lavorativa. Le lezioni sono sempre state ricche di spunti interessanti e molto divertenti.",
      },
      {
        author: "Cristina",
        job: "architetto",
        place: "Piove di Sacco (PD)",
        course: "corso Business B1",
        text:
          'Emilio è un insegnante molto bravo. Sa mettere le persone a proprio agio, e la conversazione in inglese diventa semplice e spontanea. I momenti più divertenti della lezione sono stati quando parlavamo di come avevamo passato il weekend o dei nostri progetti futuri proprio come "quattro amici al bar". Parlavamo liberamente, sentendoci liberi di fare errori, e poi dal teacher capivamo come esprimere i nostri pensieri in inglese corretto. ',
      },
      {
        author: "Camilla",
        job: "impiegata Marketing e Logistica",
        place: "Piove di Sacco (PD)",
        course: "corso Listening & Conversation",
        text:
          "Ho frequentato diversi corsi serali di inglese, anche con insegnanti madrelingua. Quest'anno ho provato questo corso per caso, per cambiare e devo dire che mi è davvero piaciuto.  L'insegnante, Emilio, riesce a farti stare attento anche dopo una giornata di lavoro impegnativa. Le lezioni non sono mai state noiose, grazie alla varietà dei temi trattati, quasi sempre decisi insieme a tutto il gruppo. Lo consiglio assolutamente.",
      },
      {
        author: "Chiara",
        job: "casalinga",
        place: "Piove di Sacco (PD)",
        course: "corso Elementare A1",
        text:
          "Ho frequentato il corso per mio interesse personale, dopo aver studiato la lingua solo fino al diploma. Dopo il primo iniziale timore nell'avvicinarmi di nuovo allo studio, mi sono ritrovata in un ambiente amichevole ma professionale allo stesso tempo. Già dalle prime ore di lezione si capisce la gran passione di Emilio per la lingua e la cultura inglese, passione che riesce a trasferire ai propri studenti tramite lezioni mai noiose, ricche di curiosità, ascolti e scambi di opinioni. Siamo partiti subito con la fonetica, spesso sottovalutata da gran parte dei classici corsi di lingue, mentre è fondamentale per comprendere e farsi comprendere. Già dal primo ciclo di lezioni mi sono resa conto di aver riempito molte lacune che non pensavo di avere. Consiglio i corsi di Emilio a chiunque. Si impara l'inglese divertendosi con un prof sempre disponibile e preparatissimo.",
      },
      {
        author: "Solidea",
        job: "impiegata Regione Veneto",
        place: "Codevigo (PD)",
        course: "corso Business B1",
        text:
          "Il corso è stata una bellissima ed utilissima esperienza. Emilio è un insegnante coinvolgente, simpatico e molto, molto, molto preparato. Consiglio vivamente il corso che ho seguito a chi ha studiato l'inglese in passato e adesso vorrebbe riprenderlo perché ha occasione di usarlo per lavoro. Le lezioni sono ricche di contenuti ma Emilio riesce a renderle così piacevoli che il tempo vola!",
      },
      {
        author: "Caterina",
        job: "impiegata",
        place: "Codevigo (PD)",
        course: "corso Listening & Conversation B1/B2",
        text:
          "Mi sono iscritta ai corsi di Emilio qualche anno fa per tenere in esercizio l'inglese imparato a scuola, che altrimenti non avrei avuto modo di praticare. Listening and conversation è un corso interessante per allenare l'orecchio ai diversi accenti inglesi e stimolante per conversare di film, serie TV, attualità con persone nuove. Risultato? Ho continuato l'anno dopo e quello dopo ancora...",
      },
      {
        author: "Marzia",
        job: "Senior Statistician",
        place: "Pontelongo (PD)",
        course: "corso Listening & Conversation B1/B2",
        text:
          "Durante gli anni scolastici ho studiato tedesco e per motivi di lavoro negli ultimi anni ho dovuto imparare l’inglese. Ho sempre preso lezioni private (one to one) che mi hanno aiutata nella comprensione del testo, nella scrittura, un po’ meno nella conversazione e nell'ascolto, proprio per la tipologia di corso. Ho frequentato il corso di Listening and Conversation di Emilio nel periodo COVID, online visto il momento, e devo dire che attendevo con entusiasmo il lunedì... nonostante il week-end dovessi svolgere i compiti! Ascoltare e conversare con più persone contemporaneamente, arbitrati dall’insegnante è stato impegnativo ma davvero utile. La cosa che mi è piaciuta maggiormente di questo corso, compagni di studio a parte, è l’entusiasmo che Emilio mette nelle sue lezioni, sembra proprio che si diverta. Questo suo atteggiamento si ripercuote favorevolmente anche su di noi studenti, che affrontiamo la conversazione con più tranquillità. Ogni lunedì, alla lezione prestabilita, organizzata sempre con materiale nuovo, vario e in grande quantità, non mancava la “sorpresa all’ultimo”, che a volte mi ha destabilizzata, lo confesso, ma è così che si impara una lingua: affrontando le difficoltà con i mezzi a disposizione. E anche nel creare l’effetto sorpresa, per mettere del pepe alla lezione, era evidente la non casualità. L’impegno che Emilio dedica al suo lavoro e ai suoi studenti si ripercuote in un corso studiato ed organizzato, e pure divertente. Le lezioni non sono noiose e cambiano tutte le settimane: si passa dalla grammatica, alla recitazione, dall’ascolto/visione di un film o una clip con verifica della comprensione alla canzone, dal gioco a squadre alla cena con delitto… Non solo gli argomenti cambiano sempre generando un arricchimento del vocabolario a disposizione, ma anche la modalità di affrontarli. Insomma, si impara, divertendosi! Un corso di inglese con Emilio e… con sorpresa! Lo consiglio!!!",
      },
      {
        author: "Michele",
        job: "musicista",
        place: "Codevigo (PD)",
        course: "corso Intermedio B1",
        text:
          "È da due anni che frequento il corso di inglese con Emilio. Sono molto soddisfatto perché oltre alla dovuta competenza ho trovato una bella “familiarità” nel modo di trasmettere l’insegnamento. Le lezioni si svolgono in modo molto interattivo dando la possibilità continua di intervenire e interloquire, dando il giusto spazio ad ognuno (la mia classe è composta da circa 8 persone), e cercando anche di conoscere gli interessi personali di ognuno così da stimolarne ulteriormente l’interesse. Molto interessanti ed utili le molteplici iniziative che Emilio ha proposto oltre alla classica lezione in aula: tipo le uscite al cinema (con annessa birretta e discussione pre o post), a teatro e ad ogni forma di occasione per ascoltare un inglese ben parlato e poi discuterne fra noi (il tutto ovviamente in inglese). Inoltre, le indicazioni di qualche buon libro da leggere adatto per il nostro livello e tutti i link per trovare nel web situazioni che favoriscano il nostro ascolto/comprensione e integrazione della lingua. Io parlavo inglese solo quelle volte in cui facevo qualche giorno di vacanza all’estero, e questi due anni hanno reso molto più fluido e naturale il mio approccio alla lingua.",
      },
      {
        author: "Adriano",
        job: "medico",
        place: "Piove di Sacco (PD)",
        course: "corso Preintermedio",
        text:
          "Da tanto tempo desideravo iscrivermi ad un corso di Inglese ma mi tratteneva il pensiero di intoppare in un insegnante di una certa età, austero, un pò barboso e pedante. Tre anni fa mi sono deciso e mi sono iscritto ad un corso. Dopo tutto questo tempo sono, a dir poco, entusiasta! Prima di tutto perchè la Lingua Inglese mi ha sempre affascinato e poi  perchè ho incontrato un insegnante come Emilio Zampieri che, anno dopo anno, me la fa amare sempre di più. E' un insegnante giovane, molto preparato, coinvolgente, sempre sorridente e pronto a rispondere alle nostre numerose domande, mai pedante e noioso. Rende quindi le nostre ore di lezione molto piacevoli e poi, prima di salutarci, ci fermiamo a chiaccherare di molti argomenti. Inoltre ci stimola a vedere film in lingua originale (siamo anche andati insieme a qualche proiezione), ci consiglia dei video semplici ma molto utili da visualizzare a casa, ci segnala anche delle pièce teatrali in lingua inglese. Insomma è stata una vera fortuna aver trovato, tra tanti insegnanti in circolazione, proprio lui! Penso che andrò fino in fondo, seguirò tutto il percorso sempre sperando che testa e corpo reggano allo sforzo perchè, per la verità, ho una certa età e quindi la prudenza è necessaria. Grazie Emilio!",
      },
      {
        author: "",
        job: "",
        place: "",
        course: "",
        text: "",
      },
    ],
  }),
};
</script>

<style>
.underlined {
  text-decoration: underline;
}

.bold {
  font-weight: bold;
}

.blue-border {
  border: 1px solid #1a237e !important;
}

.v-application .red-border {
  border: 1px solid #b71c1c !important;
}

.activeComment {
  color: white !important;
}

.overflowing {
  overflow-y: auto;
  overflow-x: hidden;
}

.slide-card {
  position: relative;
}

.slide-decoration {
  position: absolute;
  top: -15px;
  left: calc(50% - 15px);
}
</style>
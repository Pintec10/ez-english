<template>
  <v-container class="py-10">
    <h1 class="text-center indigo--text text--darken-4">Contatti</h1>
    <section>
      <v-row>
        <v-col class="col-12 col-md-4 px-8 my-8 my-md-8">
          <a href="tel:+393472208699" class="external-link">
            <v-card
              shaped
              height="100%"
              class="text-center red darken-4 d-flex flex-column"
            >
              <v-sheet color="white" class="py-3 contact-icon-box">
                <v-img
                  class="my-3"
                  max-height="80px"
                  contain
                  src="@/assets/phone.png"
                  alt="icona telefono"
                ></v-img>
              </v-sheet>
              <v-sheet
                class="red darken-4 py-5 white--text flex-grow-1 d-flex flex-column justify-center"
              >
                <p class="mb-0">347 2208699</p>
              </v-sheet>
            </v-card>
          </a>
        </v-col>
        <v-col class="col-12 col-md-4 px-8 my-2 my-md-8">
          <a href="mailto:emilio.zampieri@gmail.com" class="external-link">
            <v-card
              shaped
              height="100%"
              class="text-center red darken-4 d-flex flex-column"
            >
              <v-sheet color="white" class="py-3 contact-icon-box">
                <v-img
                  class="my-3"
                  max-height="80px"
                  contain
                  src="@/assets/email.png"
                  alt="icona email"
                ></v-img>
              </v-sheet>
              <v-sheet
                class="red darken-4 py-5 white--text flex-grow-1 d-flex flex-column justify-center"
              >
                <p class="mb-0">emilio.zampieri@gmail.com</p>
              </v-sheet>
            </v-card>
          </a>
        </v-col>
        <v-col class="col-12 col-md-4 px-8 my-8 my-md-8">
          <v-card
            shaped
            height="100%"
            class="text-center red darken-4 d-flex flex-column"
          >
            <v-sheet color="white" class="py-3 contact-icon-box">
              <v-img
                class="my-3"
                max-height="80px"
                contain
                src="@/assets/address.png"
                alt="icona indirizzo"
              ></v-img>
            </v-sheet>
            <v-sheet
              class="red darken-4 pa-5 white--text flex-grow-1 d-flex flex-column justify-center"
            >
              <p>viale Madonna delle Grazie, 5</p>
              <p class="mb-0">35028 Piove di Sacco (PD)</p>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row>
        <v-col class="col-12 col-md-6 px-8 text-center">
          <v-card class="info-box">
            <!-- insert pageClip private key in the v-form below FOR PROD -->
            <v-form
              id="messageForm"
              v-model="valid"
              method="post"
              action="https://send.pageclip.co/{key}/form-informazioni"
              class="pageclip-form"
            >
              <v-sheet tile color="red darken-4" class="py-5 white--text">
                <h3>
                  <v-icon large dark class="mr-3">mdi-head-question</v-icon
                  >Richiedi informazioni
                </h3>
              </v-sheet>
              <v-sheet class="px-5">
                <v-text-field
                  v-model="nome"
                  name="name"
                  label="Nome"
                  required
                  :rules="nameRules"
                  class="indigo--text text--darken-4"
                  color="indigo darken-4"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  name="email"
                  label="E-mail"
                  required
                  :rules="emailRules"
                  class="indigo--text text--darken-4"
                  color="indigo darken-4"
                ></v-text-field>
                <v-textarea
                  v-model="messaggio"
                  name="message"
                  label="Messaggio"
                  :rules="messageRules"
                  class="indigo--text text--darken-4"
                  color="indigo darken-4"
                ></v-textarea>
                <v-alert
                  dismissible
                  v-if="alert.type != null"
                  :type="alert.type"
                  >{{ alert.message }}</v-alert
                >
                <v-btn
                  type="submit"
                  class="my-5 red darken-4 white--text"
                  :loading="loading"
                  :disabled="!valid"
                  @click.prevent="submitMessage()"
                >
                  Invia
                  <v-icon class="ml-3">mdi-send</v-icon>
                </v-btn>
              </v-sheet>
            </v-form>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>

        <v-col class="col-12 col-md-6 px-8 text-center">
          <v-card class="info-box d-flex flex-column" height="100%">
            <v-sheet
              tile
              color="red darken-4"
              class="py-5 white--text tile-shape"
            >
              <h3>
                <v-icon large dark class="mr-3">mdi-map-marker-question</v-icon
                >Come trovarci
              </h3>
            </v-sheet>
            <v-sheet class="flex-grow-1 pa-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.5282418340025!2d12.029144250216541!3d45.2977539524543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ec1addc5a23c7%3A0xe190954ac26e5b59!2sViale%20M.delle%20Grazie%2C%205%2C%2035028%20Piove%20di%20Sacco%20PD%2C%20Italy!5e0!3m2!1sen!2ses!4v1603030923636!5m2!1sen!2ses"
                width="100%"
                height="100%"
                frameborder="0"
                style="border: 0"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import Vue from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, { siteKey: "{key}" }); // insert here Google captcha siteKey!

export default {
  data() {
    return {
      loading: false,
      alert: {
        type: null,
        message: null,
      },
      valid: false,
      nome: "",
      email: "",
      messaggio: "",
      nameRules: [(v) => !!v || "Inserisci un nome"],
      emailRules: [
        (v) => !!v || "Inserisci un indirizzo email",
        (v) => /.+@.+/.test(v) || "Indirizzo email non valido",
      ],
      messageRules: [(v) => !!v || "Descrivi le informazioni che ti servono"],
    };
  },

  methods: {
    submitMessage() {
      this.$recaptcha("contactus")
        .then(() => {
          document.getElementById("messageForm").requestSubmit();
        })
        .catch(() => {
          this.alert.type = "error";
          this.alert.message =
            "Non è stato possibile inviare il messaggio per un problema tecnico. Puoi anche scrivere un'email a emilio.zampieri@gmail.com";
        });
    },
  },

  mounted() {
    var form = document.querySelector(".pageclip-form");
    window.Pageclip.form(form, {
      onSubmit: () => {
        this.loading = true;
      },
      onResponse: (error, response) => {
        this.loading = false;
        if (response.data === "ok") {
          this.alert.type = "success";
          this.alert.message = "Grazie per il tuo messaggio!";
        }
        if (error) {
          this.alert.type = "error";
          this.alert.message =
            "Il messaggio non è stato inviato correttamente, riprova più tardi o scrivi a emilio.zampieri@gmail.com";
        }
        return false;
      },
      successTemplate: "<span>Thank you!</span>",
    });
  },
};
</script>

<style scoped>
.contact-icon-box {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.info-box {
  border: 3px solid #b71c1c !important;
}

.tile-shape {
  border-radius: 0 !important;
}
</style>
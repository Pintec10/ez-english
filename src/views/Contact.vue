<template>
  <v-container>
    <h1>Contatti</h1>
    <v-row>
      <v-col class="col-12 col-md-4">
        <v-card class="text-center pa-3">
          <v-img class="my-3" max-height="80px" contain src="@/assets/phone.png"></v-img>
          <p>123456789</p>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-4">
        <v-card class="text-center pa-3">
          <v-img class="my-3" max-height="80px" contain src="@/assets/email.png"></v-img>
          <p>email@gmail.com</p>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-4">
        <v-card class="text-center pa-3">
          <v-img class="my-3" max-height="80px" contain src="@/assets/address.png"></v-img>
          <p>Via xxxxxxxxx</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-12 col-md-6 text-center">
        <v-card class="pa-3">
          <v-form v-model="valid">
            <h2>Richiedi informazioni</h2>
            <v-text-field v-model="nome" label="Nome" required :rules="nameRules"></v-text-field>
            <v-text-field v-model="email" label="E-mail" required :rules="emailRules"></v-text-field>
            <v-textarea
              v-model="messaggio"
              name="input-7-1"
              label="Messaggio"
              :rules="messageRules"
            ></v-textarea>
            <v-btn type="button" class="my-5">Invia</v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="col-12 col-md-6">
        <v-card class="pa-3" height="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.174032888664!2d12.032591314883906!3d45.30490997909929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ec15a4bd89179%3A0x62e4ec9337188d1f!2sEmilio%20Zampieri%20English%20-%20Corsi%20di%20inglese!5e0!3m2!1sen!2ses!4v1581791425813!5m2!1sen!2ses"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      nome: "",
      email: "",
      messaggio: "",
      nameRules: [v => !!v || "Inserisci un nome"],
      emailRules: [
        v => !!v || "Inserisci un indirizzo email",
        v => /.+@.+/.test(v) || "Indirizzo email non valido"
      ],
      messageRules: [v => !!v || "Descrivi le informazioni che ti servono"]
    };
  }
};
</script>

<style>
</style>
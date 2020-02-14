<template>
  <v-app>
    <HeaderNav />
    <v-content>
      <router-view />
    </v-content>

    <v-footer
      app
      absolute
      elevation="12"
      dark
      class="indigo darken-3"
    >© Emilio Zampieri English - P.IVA 04622620286 - Informativa sulla privacy e sull'uso dei cookie</v-footer>
  </v-app>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "App",

  components: {
    HeaderNav
  },

  data: () => ({
    //
  })
};
</script>

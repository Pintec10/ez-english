<template>
  <div>
    <v-app-bar app color="indigo darken-3" dark :extension-height="extensHeight">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Emilio Zampieri English
        <span
          class="d-none d-md-inline"
        >- Corsi di inglese personalizzati a Piove di Sacco</span>
      </v-toolbar-title>
      <v-spacer />
      <a class="external-link" href="https://www.facebook.com/corsiinglesepiovedisacco/">
        <v-btn icon>
          <v-icon large>mdi-facebook</v-icon>
        </v-btn>
      </a>

      <template v-slot:extension>
        <div class="d-none d-md-block">
          <v-btn text tile active-class="white indigo--text text--darken-3" to="/">Home</v-btn>

          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text tile active-class="white indigo--text text--darken-3">
                Corsi
                <v-icon class="pl-1">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item active-class="white indigo--text text--darken-3" to="/corsi-individuali">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Corsi individuali</v-list-item-title>
              </v-list-item>
              <v-list-item active-class="white indigo--text text--darken-3" to="/corsi-gruppo">
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Corsi di gruppo</v-list-item-title>
              </v-list-item>
              <v-list-item active-class="white indigo--text text--darken-3" to="/business">
                <v-list-item-icon>
                  <v-icon>mdi-account-tie</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Business</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            text
            tile
            active-class="white indigo--text text--darken-3"
            to="/valuta-inglese"
          >Valuta il tuo inglese</v-btn>

          <v-btn text tile active-class="white indigo--text text--darken-3" to="/about">Chi sono</v-btn>
          <v-btn text tile active-class="white indigo--text text--darken-3" to="/contact">Contatti</v-btn>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer class="d-md-none" v-model="drawer" absolute height="100vh" temporary>
      <v-list nav dense>
        <v-list-item class="d-flex justify-center">
          <v-btn icon @click="drawer = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider />

        <v-list-item-group>
          <v-list-item active-class="red darken-2 white--text" to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item active-class="red darken-2 white--text" to="/about">
            <v-list-item-icon>
              <v-icon>mdi-chat</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Chi sono</v-list-item-title>
          </v-list-item>

          <v-list-item active-class="red darken-2 white--text" to="/contact">
            <v-list-item-icon>
              <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contatti</v-list-item-title>
          </v-list-item>

          <v-menu open-on-click offset-x>
            <template v-slot:activator="{ on }">
              <v-list-item v-on="on" active-class="red darken-2 white--text">
                <v-list-item-icon>
                  <v-icon>mdi-book-open-page-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Corsi</v-list-item-title>
                <v-spacer />
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item>
            </template>

            <v-list>
              <v-list-item active-class="red darken-2 white--text" to="/corsi-individuali">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Corsi individuali</v-list-item-title>
              </v-list-item>
              <v-list-item active-class="red darken-2 white--text" to="/corsi-gruppo">
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Corsi di gruppo</v-list-item-title>
              </v-list-item>
              <v-list-item active-class="red darken-2 white--text" to="/business">
                <v-list-item-icon>
                  <v-icon>mdi-account-tie</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Business</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-list-item active-class="red darken-2 white--text" to="/valuta-inglese">
            <v-list-item-icon>
              <v-icon>mdi-book-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Valuta il tuo inglese</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      extensHeight: 0,
      items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        { title: "Chi sono", icon: "mdi-chat", link: "/about" },
        { title: "Contatti", icon: "mdi-send", link: "/contact" },
        {
          title: "Corsi individuali",
          icon: "mdi-account",
          link: "/corsi-individuali"
        },
        {
          title: "Corsi di Gruppo",
          icon: "mdi-account-group",
          link: "/corsi-gruppo"
        },
        { title: "Business", icon: "mdi-account-tie", link: "/business" }
      ]
    };
  },

  methods: {
    updateNavbar() {
      if (window.innerWidth >= 960) {
        this.extensHeight = "48px";
      } else {
        this.extensHeight = 0;
      }
    }
  },

  created() {
    window.addEventListener("resize", this.updateNavbar);
    this.updateNavbar();
  }
};
</script>

<style scoped>
.external-link {
  text-decoration: none;
}

.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
  position: fixed;
}
</style>
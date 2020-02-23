<template>
  <div>
    <v-app-bar app color="white" :extension-height="extensHeight">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer class="d-md-none" />

      <img height="56px" src="../assets/LogoCropped.png" class="my-3" />

      <v-spacer class="d-none d-md-inline-block" />
      <v-toolbar-title
        class="font-weight-bold indigo--text text--darken-4 d-none d-md-inline-block"
      >
        Emilio Zampieri English
        <span
          class="d-none d-md-inline"
        >- Corsi di inglese personalizzati a Piove di Sacco</span>
      </v-toolbar-title>

      <v-spacer />

      <a class="external-link" href="https://www.facebook.com/corsiinglesepiovedisacco/">
        <v-btn icon>
          <v-icon large color="indigo darken-4">mdi-facebook</v-icon>
        </v-btn>
      </a>

      <template v-slot:extension>
        <div class="d-none d-md-block red darken-4 mb-0">
          <v-btn
            text
            tile
            active-class="white red--text text--darken-4"
            class="white--text"
            to="/"
          >Home</v-btn>

          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                text
                tile
                active-class="white red--text text--darken-4"
                class="white--text"
              >
                Corsi
                <v-icon class="pl-1">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                active-class="white red--text text--darken-4"
                class="white--text"
                to="/corsi-individuali"
              >
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Corsi individuali</v-list-item-title>
              </v-list-item>
              <v-list-item
                active-class="white red--text text--darken-4"
                class="white--text"
                to="/corsi-gruppo"
              >
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Corsi di gruppo</v-list-item-title>
              </v-list-item>
              <v-list-item
                active-class="white red--text text--darken-4"
                class="white--text"
                to="/business"
              >
                <v-list-item-icon>
                  <v-icon>mdi-account-tie</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Business</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-spacer />
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            text
            tile
            active-class="white red--text text--darken-4"
            class="white--text"
            to="/valuta-inglese"
          >Valuta il tuo inglese</v-btn>

          <v-btn
            text
            tile
            active-class="white red--text text--darken-4"
            class="white--text"
            to="/about"
          >Chi sono</v-btn>
          <v-btn
            text
            tile
            active-class="white red--text text--darken-4"
            class="white--text"
            to="/contact"
          >Contatti</v-btn>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      class="d-md-none red darken-4"
      v-model="drawer"
      absolute
      height="100vh"
      temporary
    >
      <v-list nav dense>
        <v-list-item class="d-flex justify-center">
          <v-btn icon @click="drawer = false">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider />

        <v-list-item-group>
          <v-list-item active-class="red darken-2 white--text" to="/">
            <v-list-item-icon>
              <v-icon color="white">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Home</v-list-item-title>
          </v-list-item>

          <v-list-item active-class="red darken-2 white--text" to="/about">
            <v-list-item-icon>
              <v-icon color="white">mdi-chat</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Chi sono</v-list-item-title>
          </v-list-item>

          <v-list-item active-class="red darken-2 white--text" to="/contact">
            <v-list-item-icon>
              <v-icon color="white">mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Contatti</v-list-item-title>
          </v-list-item>

          <v-menu open-on-click offset-x>
            <template v-slot:activator="{ on }">
              <v-list-item v-on="on" active-class="red darken-2 white--text">
                <v-list-item-icon>
                  <v-icon color="white">mdi-book-open-page-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text">Corsi</v-list-item-title>
                <v-spacer />
                <v-icon color="white">mdi-chevron-right</v-icon>
              </v-list-item>
            </template>

            <v-list color="red darken-4">
              <v-list-item
                class="red darken-4 white--text"
                active-class="white red--text text--darken-4"
                to="/corsi-individuali"
              >
                <v-list-item-icon>
                  <v-icon color="white">mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text">Corsi individuali</v-list-item-title>
              </v-list-item>
              <v-list-item
                class="red darken-4 white--text"
                active-class="white red--text text--darken-4"
                to="/corsi-gruppo"
              >
                <v-list-item-icon>
                  <v-icon color="white">mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text">Corsi di gruppo</v-list-item-title>
              </v-list-item>
              <v-list-item
                class="darken-4red white--text"
                active-class="white red--text text--darken-4"
                to="/business"
              >
                <v-list-item-icon>
                  <v-icon color="white">mdi-account-tie</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text">Business</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-list-item active-class="red darken-2 white--text" to="/valuta-inglese">
            <v-list-item-icon>
              <v-icon color="white">mdi-book-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Valuta il tuo inglese</v-list-item-title>
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

<style >
.external-link {
  text-decoration: none;
}

.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
  position: fixed;
}

.v-toolbar__extension {
  /* background-color: #1a237e; */
  background-color: #b71c1c;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 48px !important;
}
</style>
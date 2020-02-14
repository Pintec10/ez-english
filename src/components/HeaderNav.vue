<template>
  <div>
    <v-app-bar app color="indigo darken-3" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Emilio Zampieri English</v-toolbar-title>
      <v-spacer />
      <a class="external-link" href="https://www.facebook.com/corsiinglesepiovedisacco/">
        <v-btn icon>
          <v-icon large>mdi-facebook</v-icon>
        </v-btn>
      </a>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute height="100vh" temporary>
      <v-list nav dense>
        <v-list-item class="d-flex justify-center">
          <v-btn icon @click="drawer = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider />

        <v-list-item-group>
          <v-list-item
            active-class="red darken-2 white--text"
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
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
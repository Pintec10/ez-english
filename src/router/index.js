import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import CorsiIndividuali from '../views/CorsiIndividuali.vue'
import CorsiGruppo from '../views/CorsiGruppo.vue'
import Business from '../views/Business.vue'
import ValutaInglese from '../views/ValutaInglese.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/corsi-individuali',
    name: 'CorsiIndividuali',
    component: CorsiIndividuali
  },
  {
    path: '/corsi-gruppo',
    name: 'CorsiGruppo',
    component: CorsiGruppo
  },
  {
    path: '/business',
    name: 'Business',
    component: Business
  },
  {
    path: '/valuta-inglese',
    name: 'ValutaInglese',
    component: ValutaInglese
  },

  /* PATHS TO EVALUATE
    /contact
    /corsi-individuali
    /corsi-gruppo
    /business
    /valuta-inglese
  */
]

const router = new VueRouter({
  routes
})

export default router

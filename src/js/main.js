import Vue from 'vue';
import '../css/style.scss';
import './picturefill'
import 'promise-polyfill'

import HeroCarousel from './components/heroCarousel.vue';
import CardRow from './components/cardRow.vue';

// check if element with id 'app' exists...
if (document.getElementById("app")) {
  // ...and if so initialize vue app on said element
  const app = new Vue({
    el: "#app",
    components: {
      HeroCarousel,
      CardRow
    },
  })
}
import Vue from 'vue';

// import style entry
import '../css/style.scss';

// polyfill for <picture> tag
import './picturefill'

// polyfill for promise on IE
import 'promise-polyfill'

// load top level componentes
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
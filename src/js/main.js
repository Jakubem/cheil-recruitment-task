import Vue from 'vue';
import '../css/style.scss';

// check if element with id 'app' exists...
if (document.getElementById("app")) {
  // ...and if so initialize vue app on said element
  const app = new Vue({
    el: "#app",
    components: {
    },
  })
}
import Vue from "vue";
import App from "./App.vue";
import './../node_modules/bulma/css/bulma.css';
import '@/assets/bulma.css';

require("./js/populate.js");
require('./js/controls.js');
require("./js/v.js");

import { visibility , doLoad} from "./js/v.js";


//Vue.config.productionTip = false;
/*

new Vue({
  el: "#app",

  render: function(f) {
      return f(App);
  },
  props: {
    banner : Boolean, 
    newsfeed: Boolean , 
    //classOption: Function
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return 'visi';
      else return 'invis';
    },
  }
  
});//.$mount("#app");

*/
doLoad();

console.log(visibility);
console.log("main.js");
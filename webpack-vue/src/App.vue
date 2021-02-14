<template>
  <div id="app"  :newsfeed="newsfeed" :banner="banner" >
    
    <bannercomponent></bannercomponent>
    <feedcontainer></feedcontainer> 
    <register></register>
    <home></home>
    
  </div>
</template>

<script>
import bannercomponent from "./Banner.vue";
import feedcontainer from "./FeedContainer.vue";
import register from "./Register.vue";
import home from "./Home.vue";

require("./v.js");
require("./populate.js");
require("./controls.js");

import { visibility } from './v.js';
//import {visibility} from "./main.js";
//doLoad();




export default {
  name:"appx",
  data() {
    
    return {
      message: 'Hello World!',
      l: [0,1,2,3],
      "newsfeed" : true,
      'banner': true
    };
  },
  components: {
    "bannercomponent" : bannercomponent,
    "feedcontainer" : feedcontainer,
    "register": register,
    "home": home
  },
  //props: ['banner', 'newsfeed'], 
  
  
  methods: {
          classOption: function (i) {
            //console.log(i);
            const x = Boolean(i);
            if (x === true) return 'visi';
            else return 'invis';
          },
        }
  
  
};//.$mount("#app");



console.log(visibility);
console.log("here... App.vue");

</script>

<style>

</style>
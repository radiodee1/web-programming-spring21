<template>
<div id="app">
    

  <div > 
    <bannercomponent></bannercomponent>
    <feedcontainer></feedcontainer> 
    </div>
  </div>
</template>

<script>
import bannercomponent from "./Banner.vue";
import feedcontainer from "./FeedContainer.vue";

require("./v.js");
require("./populate.js");
require("./controls.js");

import {  doLoad, visibility } from './v.js';

//doLoad();


export default {
  name:"app",
  data() {
    
    return {
      message: 'Hello World!',
      l: [0,1,2,3]
    };
  },
  components: {
    "bannercomponent" : bannercomponent,
    "feedcontainer" : feedcontainer
  },
  props: {
    banner : Boolean, 
    newsfeed: Boolean , 
    //classOption: Function
  },
  
};//.$mount("#app");


//let classOption = visibility.classOption;

console.log(visibility);
console.log("here... App.vue");

</script>

<style>

</style>
<template>
  <div id="appx">
    <bannercomponent :newsfeed="newsfeed" :banner="banner"></bannercomponent>
    <feedcontainer></feedcontainer>
    <register></register>
    <home></home>
  </div>
</template>

<script>
import "./../node_modules/bulma/css/bulma.css";
import "@/assets/bulma.css";

import bannercomponent from "./components/Banner.vue";
import feedcontainer from "./components/FeedContainer.vue";
import register from "./components/Register.vue";
import home from "./components/Home.vue";

require("./js/v.js");
require("./js/populate.js");
require("./js/controls.js");

import { visibility, newsfeed, banner } from './js/v.js';
//import {visibility} from "./main.js";
//doLoad();



export default {
  name: "appx",
  data() {
    return {
      message: "Hello World!",
      l: [0, 1, 2, 3],
      newsfeed: true,//newsfeed,
      banner: true,//banner,
    };
  },
  components: {
    bannercomponent: bannercomponent,
    feedcontainer: feedcontainer,
    register: register,
    home: home,
  },
  //props: ['banner', 'newsfeed'],
  mounted() {
    console.log("appx");
    console.log(visibility);
    console.log(newsfeed + " " + banner);
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
  },
}; //.$mount("#app");

//console.log(visibility);
//console.log("here... App.vue");
</script>

<style>
</style>
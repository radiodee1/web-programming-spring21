<template>
  <div id="bannercomponent" >
    <nav class="navbar gray" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img src="../assets/app.png" width="56" height="56" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div class="navbar-menu" id="navMenu"></div>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu is-active"
        v-if="newsfeed"
      >
        <div class="navbar-start">
          <a class="navbar-item" @click="focusFormExercise()"> Exercise </a>

          <a class="navbar-item" @click="testInsertWorkout()"> Workout </a>

          <a class="navbar-item" @click="focusFormMessage()"> Message </a>
        </div>

        <div class="navbar-end"></div>
      </div>
    </nav>

    <section class="section" v-if="banner">
      <div class="container">
        <h1 class="title">Exercise App</h1>
        <p class="subtitle">
          Keep track of your workouts with <strong>Exercise App</strong>!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
//import './../node_modules/bulma/css/bulma.css';
//import '@/assets/bulma.css';
//import '../../node_modules/bulma/css/bulma.css';
//import '../assets/bulma.css';

require("../js/v.js");
require("../js/populate.js");
require("../js/controls.js");

import {  doLoad, visibility, classOption, focusFormExercise, focusFormMessage, focusFormWorkout } from '../js/v.js';

export default {
  //id: "#bannercomponent",
  name: "bannercomponent",
  data() {
    return {};
  },
  props: ["banner", "newsfeed", "focusFormMessage"] ,

};


</script>
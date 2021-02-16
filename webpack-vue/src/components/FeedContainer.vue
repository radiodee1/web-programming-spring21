<template>
<div id="feedcontainer">
  <!-- start news feed -->
  <section class="section" v-bind:class="classOption(newsfeed)">
    <div class="columns">
      <div class="column">
        <!-- blank column-->
        <!-- end blank column -->
      </div>

      <div class="column is-half">
        <!-- div class="control">
      <button class="button is-primary" onclick="testInsertMsg()">Test Submit Msg.</button>
      <button class="button is-primary" onclick="testInsertExercise()">Test Submit Exercise.</button>
      <button class="button is-primary" onclick="testInsertWorkout()">Test Submit Workout.</button>
    </div -->

        <!-- vue start -->

        <div id="components">
          <!-- template here ? -->
        </div>
        <div id="listing">
          <ul>
            <!-- template here ? -->
          </ul>
        </div>
        <!-- vue end -->
      </div>
      <div class="column"></div>
    </div>
  </section>
  <!-- end news feed -->
  
  </div>
</template>

<script>


//require("../js/v.js");
//import {  doLoad, visibility } from '../js/v.js';

export default {
  name: "feedcontainer",
  
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
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
  
};

</script>
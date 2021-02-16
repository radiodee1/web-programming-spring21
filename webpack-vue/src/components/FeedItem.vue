<template>
  <div :id="makeId(i)" class="card"  v-show="visible" :ref="makeId(i)" > <!--v-show="visible" -->
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="../assets/app.png" alt="Placeholder image" id="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4"> {{ message_obj_from }} </p>
          <!-- p class="subtitle is-6">@johnsmith</p -->
        </div>
      </div>
      <!-- three contents -->
      <!--  {{ visible }} -->
      <div class="content"  v-bind:class=" classExercise(show_exercise)">
        <pre>{{exercise_obj_message}}</pre>
        <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>

      <div class="content"  v-bind:class=" classMessage(show_message)">
        message - {{ message_obj_message }} <!-- a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a -->
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>

      <div class="content"  v-bind:class=" classWorkout(show_workout)">
        workout - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>
      <!-- end three contents -->
    </div>
  </div>
</template>

<script>
//require("../js/v.js");
//require("../js/populate.js");
//require("../js/controls.js");


export default {
  name: "item",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    makeId: Function
    //classOption: Function
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
  },
};
</script>
import Vue from "vue";
import appx from "../App.vue";

require("./populate.js");
import { makeInvocation, makeFeedComponent } from './populate.js';

//export let visibility = null;
//console.log(data);

export function doLoad() {

  let visibility = new Vue({
    el: '#app',
    render: h => h(appx),
    data() {
      return {
        login: false,
        register: false,
        newsfeed: false,
        home: true,
        banner: true,
        form_message: false,
        form_exercise: false,
        form_workout: false
      };
    },
    mounted() {
      console.log("mounted");
      console.log(this);
    },
    methods: {
      classOption: function (i) {
        //console.log(i);
        const x = Boolean(i);
        if (x === true) return 'visi';
        else return 'invis';
      },


      focusRegister: function () {
        register = true;
        login = false;
        newsfeed = false;
        home = false;
        form_exercise = false;
        form_message = false;
        form_workout = false;
      },

      focusLogin: function () {
        login = true;
        register = false;
        newsfeed = false;
        home = false;
        form_exercise = false;
        form_message = false;
        form_workout = false;
      },

      focusNews: function () {

        login = false;
        register = false;
        newsfeed = true;
        home = false;
        form_exercise = false;
        form_message = false;
        form_workout = false;


      },

      focusReset: function () {
        login = false;
        register = false;
        newsfeed = false;
        home = true;
        banner = true;
        form_exercise = false;
        form_message = false;
        form_workout = false;
      },

      focusFormExercise: function () {
        login = false;
        register = false;
        newsfeed = false;
        home = false;
        banner = true;
        form_exercise = true;
        form_message = false;
        form_workout = false;
      },

      focusFormMessage: function () {
        login = false;
        register = false;
        newsfeed = false;
        home = false;
        banner = true;
        form_exercise = false;
        form_message = true;
        form_workout = false;
      },

      focusFormWorkout: function () {
        login = false;
        register = false;
        newsfeed = true;
        home = false;
        banner = true;
        form_exercise = false;
        form_message = false;
        form_workout = true;
      }


    }
  });

  //makeFeedComponent();
  //makeInvocation();


}


//window.onload = doLoad;
//doLoad();

export function classOption(i) {
  //console.log(i);
  const x = Boolean(i);
  if (x === true) return 'visi';
  else return 'invis';
}

function focusRegister() {
  visibility.register = true;
  visibility.login = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}

function focusLogin() {
  visibility.login = true;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}

export function focusNews() {

  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = true;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;


}

function focusReset() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = true;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}

export function focusFormExercise() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = true;
  visibility.form_message = false;
  visibility.form_workout = false;
}

function focusFormMessage() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = true;
  visibility.form_workout = false;
}

export function focusFormWorkout() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = true;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = true;
}


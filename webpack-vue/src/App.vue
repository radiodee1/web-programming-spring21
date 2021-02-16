<template>
  <div id="appx">
    <bannercomponent
      :newsfeed="newsfeed"
      :banner="banner"
      :login="login"
      :register="register"
      :home="home"
      :form_message="form_message"
      :form_exercise="form_exercise" 
      :form_workout="form_workout"
      :focusRegister="focusRegister"
      :focusNews="focusNews"
      :focusReset="focusReset"
      :focusLogin="focusLogin"
      :focusFormMessage="focusFormMessage"
      :useFormSubmitMessage="useFormSubmitMessage"
      :_preview_image_msg="_preview_image_msg"
      :makeId="makeId"
      :items="items"
      :feed_divs="feed_divs"
      :tree="tree"

    ></bannercomponent>
    <feedcontainer
      :newsfeed="newsfeed"
      :banner="banner"
      :login="login"
      :register="register"
      :home="home"
      :form_message="form_message"
      :form_exercise="form_exercise" 
      :form_workout="form_workout"
      :focusRegister="focusRegister"
      :focusNews="focusNews"
      :focusReset="focusReset"
      :focusLogin="focusLogin"
      :focusFormMessage="focusFormMessage"
      :useFormSubmitMessage="useFormSubmitMessage"
      :_preview_image_msg="_preview_image_msg"
      :makeId="makeId"
      :items="items"
      :feed_divs="feed_divs"
      :tree="tree"

    ></feedcontainer>
    <register
      :newsfeed="newsfeed"
      :banner="banner"
      :login="login"
      :register="register"
      :home="home"
      :form_message="form_message"
      :form_exercise="form_exercise" 
      :form_workout="form_workout"
      :focusRegister="focusRegister"
      :focusNews="focusNews"
      :focusReset="focusReset"
      :focusLogin="focusLogin"
      :focusFormMessage="focusFormMessage"
      :useFormSubmitMessage="useFormSubmitMessage"
      :_preview_image_msg="_preview_image_msg"
      :makeId="makeId"
      :items="items"
      :feed_divs="feed_divs"
      :tree="tree"

    ></register>
    <login
      :newsfeed="newsfeed"
      :banner="banner"
      :login="login"
      :register="register"
      :home="home"
      :form_message="form_message"
      :form_exercise="form_exercise" 
      :form_workout="form_workout"
      :focusRegister="focusRegister"
      :focusNews="focusNews"
      :focusReset="focusReset"
      :focusLogin="focusLogin"
      :focusFormMessage="focusFormMessage"
      :useFormSubmitMessage="useFormSubmitMessage"
      :_preview_image_msg="_preview_image_msg"
      :makeId="makeId"
      :items="items"
      :feed_divs="feed_divs"
      :tree="tree"

    ></login>
    <home
      :newsfeed="newsfeed"
      :banner="banner"
      :login="login"
      :register="register"
      :home="home"
      :form_message="form_message"
      :form_exercise="form_exercise" 
      :form_workout="form_workout"
      :focusRegister="focusRegister"
      :focusNews="focusNews"
      :focusReset="focusReset"
      :focusLogin="focusLogin"
      :focusFormMessage="focusFormMessage"
      :useFormSubmitMessage="useFormSubmitMessage"
      :_preview_image_msg="_preview_image_msg"
      :makeId="makeId"
      :items="items"
      :feed_divs="feed_divs"
      :tree="tree"

    ></home>
    <message
      :newsfeed="newsfeed"
      :banner="banner"
      :login="login"
      :register="register"
      :home="home"
      :form_message="form_message"
      :form_exercise="form_exercise" 
      :form_workout="form_workout"
      :focusRegister="focusRegister"
      :focusNews="focusNews"
      :focusReset="focusReset"
      :focusLogin="focusLogin"
      :focusFormMessage="focusFormMessage"
      :useFormSubmitMessage="useFormSubmitMessage"
      :_preview_image_msg="_preview_image_msg"
      :makeId="makeId"
      :items="items"
      :feed_divs="feed_divs"
      :tree="tree"

    ></message>
  </div>
</template>

<script>
import "./../node_modules/bulma/css/bulma.css";
import "@/assets/bulma.css";

import bannercomponent from "./components/Banner.vue";
import feedcontainer from "./components/FeedContainer.vue";
import register from "./components/Register.vue";
import home from "./components/Home.vue";
import login from "./components/Login.vue";
import message from "./components/Message.vue";

//require("./js/v.js");
//require("./js/populate.js");
//require("./js/controls.js");

import { tree, makeInvocation } from "./js/exercise.js";
//const   {formSubmitMessage} = require ('./js/populate.js');

//import {visibility} from "./main.js";
//doLoad();

export default {
  name: "appx",
  data() {
    return {

      login: this.$root.login,
      register: this.$root.register,
      home: this.$root.home,
      form_message: this.$root.form_message,
      form_exercise: this.$root.form_exercise,
      form_workout: this.$root.form_workout,
      newsfeed: this.$root.newsfeed,
      banner: this.$root.banner,

      items: this.$root.items,
      //tree: this.$root.tree
      feed_divs: makeInvocation()
    };
  },
  components: {
    bannercomponent: bannercomponent,
    feedcontainer: feedcontainer,
    register: register,
    home: home,
    login: login,
    message: message
  },
  //props: ['focusRegister'],
  mounted() {
    console.log("appx");
    //console.log(visibility);
    //console.log(this.$root.newsfeed + " " + this.$root.banner);
    //makeInvocation();
    //feed_divs = makeInvocation();
    //console.log("tree");
    //console.log(this.tree);
  },
  computed: {
    //feed_divs: function () {
    //  return makeInvocation(); // maybe some way to freeze this?
    //},
    tree: function () {
      return this.$root.tree;
    }
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    copyVals: function() {
      this.login = this.$root.login;
      this.register = this.$root.register;
      this.home = this.$root.home;
      this.form_message = this.$root.form_message;
      this.form_exercise = this.$root.form_exercise;
      this.form_workout = this.$root.form_workout;
      this.newsfeed = this.$root.newsfeed;
      this.banner = this.$root.banner;
    },
    focusRegister : function () {
      this.$root.focusRegister();
      this.copyVals();
    },
    focusNews: function () {
      this.$root.focusNews();
      this.copyVals()
    },
    focusReset: function () {
      this.$root.focusReset();
      this.copyVals();
    },
    focusLogin: function () {
      this.$root.focusLogin();
      this.copyVals();
    },
    focusFormMessage: function () {
      this.$root.focusFormMessage();
      this.copyVals();
    },
    useFormSubmitMessage: function () {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      this.$root.useFormSubmitMessage(feed_divs, tree);
      this.copyVals();
      this.focusNews();
    },
    _preview_image_msg: function (e) {
      //console.log("at message");
      //console.log(e);
      this.$root.preview_image_msg(e);
      this.copyVals();
    },
    makeId: function (num, prefix="feed-num-") {
      return prefix + num;
    },
    shared_feed: function(feed) {
      //this.$root.$on('shared_feed', (feed) => {
      console.log('shared feed');
      console.log(feed);
    //});
    }
  },
}; 

//console.log(visibility);
//console.log("here... App.vue");
</script>

<style>
</style>
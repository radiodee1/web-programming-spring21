<template>
  <!-- start home -->
  <section class="section gray" v-if="home">
    <div class="buttons">
      <a class="button is-primary" onclick="focusRegister();">
        <strong>Sign up</strong>
      </a>
      <a class="button is-light" onclick="focusLogin()"> Log in </a>
    </div>
    Login or register!
  </section>
  <!-- end home -->
</template>

<script>
require("../js/v.js");
require("../js/populate.js");
require("../js/controls.js");

import { doLoad, visibility, classOption, focusRegister } from "../js/v.js";

export default {
  name: "home",
  data() {
    return {};
  },
  props: {
    home: Boolean,
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
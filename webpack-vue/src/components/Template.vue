<template>
  <div>Navigation Menu</div>
</template>

<script>
require("../js/v.js");
require("../js/populate.js");
require("../js/controls.js");


export default {
  name: "navigation",
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
      if (x === true) return "visi";
      else return "invis";
    },
  },
};
</script>
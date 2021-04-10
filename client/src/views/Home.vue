<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    

    Welcome to Your Vue.js App
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import { api } from "../models/myFetch";
(async ()=>{
  const actualItem = await api("posts");
  console.log({actualItem});
})()

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>

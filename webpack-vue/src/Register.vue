<template>


      <!-- start register -->
      <section class="section gray" v-if="register" id="register">
        <div class="columns">
          <!-- firstname -->

          <div class="field column">

            <div class="control has-icons-left has-icons-right">

              <input class="input is-medium" type="text" placeholder="Firstnname:">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

          <!-- lastname -->
          <div class="field column">


            <div class="control has-icons-left has-icons-right">


              <input class="input is-medium" type="text" placeholder="Lastname">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="columns">
          <!-- address -->
          <div class="field column">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="text" placeholder="Address">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
          <!-- city -->
          <div class="field column">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="text" placeholder="City">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

        </div>
        <div class="columns">
          <!-- state -->
          <div class="field column">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="text" placeholder="State">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
          <!-- zip -->
          <div class="field column">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="text" placeholder="Zip Code">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
        </div>


        <div class="columns">
          <!-- height -->
          <div class="field column">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="text" placeholder="Height in Feet">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
          <!-- weight -->
          <div class="field column">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="text" placeholder="Weight in LBS">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
        </div>

        <!-- email -->
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="email" placeholder="email">
            <span class="icon is-medium is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-medium is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div class="columns">
          <!-- username -->
          <div class="field column">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="text" placeholder="Username">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
          <!-- password -->
          <div class="field column">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="password" placeholder="Password">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="field column is-half ">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="password" placeholder="Password again">
              <span class="icon is-medium is-left">
                <i class="fas "></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary" onclick="focusNews();">
                Submit
              </a>
            </p>
            <p class="control">
              <a class="button is-light" onclick="focusReset();">
                Cancel
              </a>
            </p>
          </div>
        </div>
      </section>
      <!-- end register -->
</template>

<script>
    export default {
        //el:"#register",
        name: 'register',
        data () {
            return {
            }
        },
        props: {
    banner : Boolean, 
    newsfeed: Boolean , 
    register: Boolean
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
  
    }
</script>
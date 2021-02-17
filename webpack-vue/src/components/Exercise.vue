<template>
  <!-- start exercise -->
  <div class="visi" v-if="form_exercise">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <article class="message box" v-if="true">
          <!-- v-if="form_exercise" -->
          <div class="message-header">
            <p>Exercise</p>
            <button class="delete" aria-label="delete" @click="cancel();"></button>
          </div>
          <div class="message-body gray">
            <!-- start first dropdown -->
            <div class="dropdown" id="exercise_type">
              <!-- class="is-active" -->
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  @click="controlDropdownType()"
                >
                  <span id="exercise_type_label">Exercise Type</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a
                    href="#"
                    class="dropdown-item"
                    @click="formChooseType('reps')"
                  >
                    reps
                  </a>
                  <a class="dropdown-item" @click="formChooseType('miles')">
                    miles
                  </a>
                  <a
                    class="dropdown-item"
                    @click="formChooseType('kilometers')"
                  >
                    kilometers
                  </a>
                  <a class="dropdown-item" @click="formChooseType('steps')">
                    steps
                  </a>
                  <a class="dropdown-item" @click="formChooseType('laps')">
                    laps
                  </a>
                  <a class="dropdown-item" @click="formChooseType('lbs')">
                    lbs
                  </a>
                  <a class="dropdown-item" @click="formChooseType('kg')">
                    kg
                  </a>
                </div>
              </div>
            </div>
            <!-- end first dropdown-->
            <!-- start second dropdown -->
            <div class="dropdown" id="exercise_type_deet">
              <!-- class="is-active" -->
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  @click="controlDropdownDeet()"
                >
                  <span id="exercise_type_deet_label">Exercise Details</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu-deet" role="menu">
                <div class="dropdown-content">
                  <a
                    href="#"
                    class="dropdown-item"
                    @click="formChooseDeet('running')"
                  >
                    running
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('walking')">
                    walking
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('swimming')">
                    swimming
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('cycling')">
                    cycling
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('curls')">
                    curls
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('pushups')">
                    pushups
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('chinups')">
                    chinups
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('lifts')">
                    lifts
                  </a>
                </div>
              </div>
            </div>
            <!-- end second dropdown-->

            <!-- misc form parts -->

            <input
              class="input"
              type="number"
              placeholder="repeat #"
              style="width: 100px"
              min="0"
              id="exercise_num"
            />
            <nav class="level">
              <div class="level-left">
                <input
                  class="input"
                  type="number"
                  placeholder="Weight"
                  style="width: 100px"
                  min="0"
                  id="exercise_weight"
                  :value="this.$root.user.weight_lbs"
                /><span class="label">Your weight in LBS</span>
              </div>
            </nav>
            <button class="button " @click="formFinishExercise()">
              Finish
            </button>
            <pre id="exercise_pre" style="visibility: hidden"></pre>

            <div class="invis">
              <textarea
                id="message_txt"
                class="textarea"
                placeholder="What's on your mind?!"
                rows="5"
              ></textarea>
            </div>
            <!-- end misc form parts -->

            <div class="control">
              <nav class="level">
                <div class="level-left">
                  <button
                    class="button is-primary"
                    id="exercise_submit"
                    style="visibility: hidden"
                    @click="useFormSubmitExercise()"
                  >
                    Submit
                  </button>

                  <div class="file">
                    <label class="file-label">
                      <input
                        class="file-input is-primary"
                        type="file"
                        name="resume"
                        id="pic-button"
                        @change="_preview_image_ex"
                      />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label"> Choose a picture </span>
                      </span>
                    </label>
                  </div>
                </div>
              </nav>
            </div>
            <figure class="image is-4by3">
              <img id="myImg2" src="../assets/app.png" class="invis" />
            </figure>
          </div>
        </article>
      </div>
      <div class="column"></div>
    </div>
  </div>

  <!-- end exercise -->
</template>

<script>
export default {
  name: "exercise",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    focusFormExercise: Function,
    form_exercise: Boolean,
    useFormSubmitExercise: Function,
    focusNews: Function,
    _preview_image_ex: Function,
    feed_divs: Array,
    tree: Object,
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    formChooseType: function (i) {
      document.getElementById("exercise_type_label").textContent = i;
      this.controlDropdownType();
    },
    formChooseDeet: function (i) {
      document.getElementById("exercise_type_deet_label").textContent = i;
      this.controlDropdownDeet();
    },
    controlDropdownType: function () {
      if (
        document.getElementById("exercise_type").classList.contains("is-active")
      ) {
        document.getElementById("exercise_type").classList.remove("is-active");
      } else {
        document.getElementById("exercise_type").classList.add("is-active");
      }
    },

    controlDropdownDeet: function () {
      if (
        document
          .getElementById("exercise_type_deet")
          .classList.contains("is-active")
      ) {
        document
          .getElementById("exercise_type_deet")
          .classList.remove("is-active");
      } else {
        document
          .getElementById("exercise_type_deet")
          .classList.add("is-active");
      }
    },

    formFinishExercise: function () {
      const type = document.getElementById("exercise_type_label").textContent;
      const deet = document.getElementById("exercise_type_deet_label")
        .textContent;
      const num = document.getElementById("exercise_num").value;
      const weight = document.getElementById("exercise_weight").value;
      //console.log(weight);
      if (weight != this.$root.user.weight_lbs) {
        this.changeWeight(weight);
      }
      const i = `Exercise Type: ${type}\nExercise Details: ${deet}\nRepitions: ${num}\nWeight: ${weight} LBS\n`;
      document.getElementById("exercise_pre").textContent = `Exercise Report:\n` +  i;
      document.getElementById("exercise_pre").style.visibility = "visible";
      document.getElementById("exercise_submit").style.visibility = "visible";
    },

    cancel: function () {
      this.focusNews();
    },
    changeWeight: function (new_weight) {
      console.log(new_weight);
      // save to db!!
      this.$root.user.weight_lbs = new_weight;
    }
  },
};
</script>
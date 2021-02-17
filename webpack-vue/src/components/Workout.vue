<template>
  <!-- start inputform for message -->
  <div class="visi">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half" v-if="form_workout">
        <div class="select">
          <select>
            <option @click="searchDay(0)">Select Today</option>
            <option @click="searchDay(-1)">Select Yesterday</option>
            <option @click="searchDay(-2)">Select Two Days Ago</option>
            <option @click="searchDay(-99)">All Time</option>
          </select>
        </div>
        <div class="control">
          <label class="radio">
            <input type="radio" name="foobar" @click="checkType('share')" />
            Share
          </label>
          <label class="radio">
            <input
              type="radio"
              name="foobar"
              checked
              @click="checkType('review')"
            />
            Review
          </label>
        </div>
        <button class="button" @click="search()">Search</button>
        <!-- -->
        <div id="share-div" v-if="share_div">
          <article class="message box">
            <div class="message-header">
              <p>Share Workout</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body gray">
              <ul>
                <li>share me</li>
              </ul>
              <!-- textarea
                id="message_txt"
                class="textarea"
                placeholder="What's on your mind?!"
                rows="10"
              ></textarea -->
              <div class="control">
                <nav class="level">
                  <div class="level-left">
                    <button class="button is-primary" @click="search()">
                      Submit
                    </button>

                    <div class="file">
                      <label class="file-label">
                        <input
                          class="file-input is-primary"
                          type="file"
                          name="resume"
                          id="pic-button"
                          ref="picButton"
                          @change="_preview_image_wrk"
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
                <img id="myImg3" src="../assets/app.png" class="invis" />
                <!-- img src="./pic/app.png" alt="Placeholder image" -->
              </figure>
            </div>
          </article>

          <!-- -->
        </div>
        <div id="review-div" v-if="review_div">
          <ul>
            <li>review me</li>
          </ul>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "workout",
  data: () => ({
    search_day: 0,
    share_div: false,
    review_div: true,
  }),
  props: {
    newsfeed: Boolean,
    focusFormMessage: Function,
    form_workout: Boolean,
    useFormSubmitMessage: Function,
    _preview_image_wrk: Function,
    feed_divs: Array,
    tree: Object,
  },
  mounted() {
    //console.log("message");
    //console.log(this.feed_divs);
  },

  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    searchDay: function (day) {
      this.search_day = day;
    },
    search: function () {},
    checkType: function (check) {
      if (check == "share") {
        this.share_div = true;
        this.review_div = false;
      } else if (check == "review") {
        this.share_div = false;
        this.review_div = true;
      }
    },
  },
};
</script>
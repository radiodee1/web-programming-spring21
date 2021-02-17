<template>
  
    <!-- start inputform for message -->
    <div class="visi">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half ">
          <article class="message box" v-if="form_message">
            <div class="message-header">
              <p>Public Message</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body gray">
              <textarea id="message_txt" class="textarea" placeholder="What's on your mind?!" rows="10"></textarea>
              <div class="control">

                <nav class="level">
                  <div class="level-left">
                    <button class="button is-primary" @click="useFormSubmitMessage();">Submit</button>

                    <div class="file">
                      <label class="file-label">
                        <input class="file-input is-primary" type="file" name="resume" id="pic-button" ref="picButton"
                          @change="_preview_image_msg" >
                        <span class="file-cta">
                          <span class="file-icon">
                            <i class="fas fa-upload"></i>
                          </span>
                          <span class="file-label">
                            Choose a picture
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </nav>

              </div>
              <figure class="image is-4by3">
                <img id="myImg1" src="../assets/app.png" class="invis">
                <!-- img src="./pic/app.png" alt="Placeholder image" -->
              </figure>
            </div>
          </article>
        </div>
        <div class="column"></div>

      </div>
    </div>
</template>

<script>

export default {
  name: "message",
  data: () => ({
    
  }),
  props: {
    newsfeed: Boolean,
    focusFormMessage: Function,
    form_message: Boolean,
    useFormSubmitMessage: Function,
    _preview_image_msg: Function,
    feed_divs: Array,
    tree: Object
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
  },
};
</script>
<template>
  <div class="visi">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half ">
          <article class="message box" v-if="form_friends">
            <div class="message-header">
              <p>Public Message</p>
              <button class="delete" aria-label="delete" @click="cancel();"></button>
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
              
            </div>
          </article>
        </div>
        <div class="column"></div>

      </div>
    </div>
</template>

<script>

export default {
  name: "navigation",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    form_friends: Boolean,

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
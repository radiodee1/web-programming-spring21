<template>
  <div class="my-wall">
    <div class="columns">
      <div class="column is-half">
        <div class="content-item" v-for="(post, i) in posts" :key="i">
          <ContentCard class="content-item" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from "../components/ContentCard";

export default {
  data: () => {
    return {
      newPost: [
        {
          user: {
            name: "",
            handle: "",
            src: "",
            caption: "",
          },
        },
      ],
      posts: [
        {
          src: "https://bulma.io/images/placeholders/96x96.png",
          alt: "Placeholder",
          text: "",
          time: Date(),
          user: {
            name: "Me",
            handle: "@johnsmith",
            pic: "https://bulma.io/images/placeholders/96x96.png",
          },
        },
        {
          src: "https://bulma.io/images/placeholders/96x96.png",
          alt: "Placeholder",
          text: "",
          time: Date(),
          user: {
            name: "Me",
            handle: "@johnsmith",
            pic: "https://bulma.io/images/placeholders/96x96.png",
          },
        },
        {
          src: "https://bulma.io/images/placeholders/96x96.png",
          alt: "Placeholder",
          text: "",
          time: Date(),
          user: {
            name: "Me",
            handle: "@johnsmith",
            pic: "https://bulma.io/images/placeholders/96x96.png",
          },
        },
      ],
    };
  },
  components: {
    ContentCard,
  },
  methods: {
    addPost() {
      this.posts.unshift(this.newPost);
      this.newPost = { user: {} };
    },
  },
};
</script>
<style scoped>
.content-item {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
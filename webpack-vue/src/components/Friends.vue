<template>
  <div class="visi">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <article class="message box" v-if="form_friends">
          <div class="message-header">
            <p>Friend Management</p>
            <button
              class="delete"
              aria-label="delete"
              @click="cancel()"
            ></button>
          </div>
          <div class="message-body gray">
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Status</th>
                <th>Controls</th>
              </tr>
              <tr v-for="l in list" :key="l" class="list-style">
                <td class="">{{ l.firstname }} {{ l.lastname }}</td>
                <td class="">{{ l.username }}</td>
                <td class="">{{ l.status }}</td>
                <td>
                  <button class="button is-primary is-small" v-if="l.status =='new'">Ask</button>
                  <button class="button is-primary is-small" v-if="l.status =='asked'">Approve</button>
                  <span v-if="l.status == 'confirmed'">Confirmed</span>
                  <span v-if="l.status == 'waiting'">Waiting</span>

                </td>
              </tr>
            </table>
            <div class="control">
              <nav class="level">
                <div class="level-left">
                  <button
                    class="button is-primary"
                    @click="useFormSubmitMessage()"
                  >
                    Submit
                  </button>
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
  name: "friends",
  data() {
    return {
      list: this.makeList(),
    };
  },
  props: {
    //newsfeed: Boolean,
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
    makeList: function () {
      let l = [];
      const dict = {
        firstname: "David",
        lastname: "Liebman",
        username: "xliebman",
        status: "waiting", // confirmed, asked, new, waiting,  etc.
      };
      l.push(dict);
      dict.firstname = "Dave";
      l.push(dict);
      return l;
    },
  },
};
</script>
<style scoped>
.list-style,
td,
th {
  border: 3px solid black;
  border-collapse: collapse;
  border-left: 3px solid black;
  width: 100%;
}
</style>
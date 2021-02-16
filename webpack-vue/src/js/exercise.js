import Vue from "vue";

import appx from "../App.vue";


/* -------------- populate feed ---------------  */

export let feed_full_length = 0;
export const feed_limit = 10;
// hard coded output

let tree = {
  feed: []
}


let tree_feed_dict = {

  visible: false,

  num: 0,

  date_now: "",

  show_message: false,
  show_exercise: false,
  show_workout: false,
  
  picture_large: null,
  picture_small: null,

  message: "hello-world",

  message_obj_from: "",
  message_obj_to: "",
  message_obj_message: "",
  message_obj_date: "",
  
  exercise_obj_reps: "",
  exercise_obj_weight: "",
  exercise_obj_label: "",
  exercise_obj_date: "",
  exercise_obj_name: "",
  exercise_obj_message: "",
  exercise_obj_from:"",
  
  workout_obj_date: "",
  workout_obj_exercise_list: "",
  
  message_list: "",
}


let single_div =  {
  id: "",
  instance: null,
  update : null,
  messages : null
  
};

let feed_divs = [];
  
export let subtreeStr = JSON.stringify(tree_feed_dict);

let subtree_div_string = JSON.stringify(single_div);

export let subtree_div = "";

for (let x = 0; x < feed_limit; x ++) {
  const subtree = JSON.parse(subtreeStr);
  subtree.visible = false;
  subtree.num = x;
  tree.feed.push(subtree);
  

  subtree_div = JSON.parse(subtree_div_string);
  feed_divs.push(subtree_div);
}

let data = tree;
//data.feed[0].show_workout = true;
let subtree = JSON.parse(subtreeStr);

//data = data.feed.reverse();

function makeId(num, prefix="feed-num-") {
  return prefix + num;
}

function makeTemplate (id) {

  let template_00 = `<div id="`+ makeId(id) +`" class="card"  v-show="visible" ref="` + makeId(id, "ref") + `" >
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="./pic/app.png" alt="Placeholder image" id="` + makeId(id,'pic') + `">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4"> {{ message_obj_from }} </p>
          <!-- p class="subtitle is-6">@johnsmith</p -->
        </div>
      </div>
      <!-- three contents -->
      <!-- ` 
      + id +
      ` {{ visible }} -->
      <div class="content"  v-bind:class=" classExercise(show_exercise)">
        <pre>{{exercise_obj_message}}</pre>
        <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>

      <div class="content"  v-bind:class=" classMessage(show_message)">
        message - {{ message_obj_message }} <!-- a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a -->
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>

      <div class="content"  v-bind:class=" classWorkout(show_workout)">
        workout - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>
      <!-- end three contents -->
    </div>
  </div>`;
  return template_00;
}

function makeTemplateList() {
  let z = "<ul> ";
  for (let x = 0; x < feed_limit; x ++) {
    //xx = tree.feed[x].num;

    z += "<li>";
    z += makeTemplate(x);
    z += "</li>";
  }
  z += "</ul>";
  return z;
}

let template_list = makeTemplateList();


export function makeFeedComponent() {
  const element = document.getElementById("components");
  element.innerHTML = template_list;  
}

export function makeInvocation() {
  for (let x = 0; x < feed_limit; x ++) {
    
    //console.log(tree.feed[x]);
    //console.log("---");

    feed_divs[x].id = makeId(x);
    feed_divs[x].instance = new Vue({
      
      el: '#' + makeId(x),
      data: tree.feed[x], 
      
      methods: {
        
        forceUpdate: function () {
          
          this.$forceUpdate();
          console.log("at force update.");
        },
        
        classWorkout: function (i) {
          //console.log(i);
          const x = Boolean ( i);
          if (x === true) return 'visi';
          else return 'invis';
        },
        classMessage: function (i) {
          //console.log(i);
          const x = Boolean( i);
          if (x === true) return 'visi';
          else return 'invis';
        },
        classExercise: function (i) {
          //console.log(i);
          const x = Boolean( i);
          if (x === true) return 'visi';
          else return 'invis';
        },
        classCard: function (i) {
          //console.log(i);
          const x = Boolean( i);
          if (x === true) return 'visi';
          else return 'invis';
        }
        
      },

      
    });

    
  }

}

let do_loop = true;

function listMaint(dict) {

   //move all down 1
  tree.feed.unshift(dict);

  tree.feed.pop();
  
  if ( do_loop ) {

    for  (let x = 0; x < feed_full_length; x++ ) { 

      for (let key in tree.feed[x]) {
    
        if (key != "picture_large" && key != "picture_small" ) {
          feed_divs[x].instance[key] = tree.feed[x][key];         
        }
        else {
          //
        }
      }

      feed_divs[x].instance.forceUpdate();
      // list of special javascript fn

      if(tree.feed[x].show_message == true ) {
        document.getElementById(makeId(x, "pic")).src = tree.feed[x].picture_large;
      }
      if(tree.feed[x].show_workout == true ) {
        document.getElementById(makeId(x, "pic")).src = './pic/app.png'; // tree.feed[x].picture_large;
      }
      if(tree.feed[x].show_exercise == true ) {
        document.getElementById(makeId(x, "pic")).src = './pic/app.png'; //tree.feed[x].picture_large;
      }
    }
    
  } 

}

export function insertFeed(dict) {
  // insert message in db here.
  if (feed_full_length < feed_limit - 1) feed_full_length ++;

  listMaint(dict);
  
  return;
}

export function setMessage(obj, msg="message here.") {
  const subtree = obj;
  subtree.show_message = true;
  subtree.show_workout = false;
  subtree.show_exercise = false;
  subtree.messsage_obj_message = msg;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

export function setExercise(obj, msg="exercise here.") {
  const subtree = obj; 
  subtree.show_exercise = true;
  subtree.show_message = false;
  subtree.show_workout = false;
  subtree.exercise_obj_label = msg;
  subtree.picture_large = null;
  subtree.picture_small = null;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

export function setWorkout(obj, msg="workout here.") {
  const subtree = obj; 
  subtree.show_workout = true;
  subtree.show_message = false;
  subtree.show_exercise = false;
  subtree.picture_small = null;
  subtree.picture_large = null;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

function testInsertMsg() {
  const subtree = JSON.parse(subtreeStr);

  //focusFormMessage();
  let obj = setMessage(subtree); 
  insertFeed(obj);
  
}

function testInsertWorkout() {
  const subtree = JSON.parse(subtreeStr);
  subtree.picture_large = null;
  focusFormWorkout();
  let obj = setWorkout(subtree); 
  insertFeed(obj);
  
}

function testInsertExercise() {
  const subtree = JSON.parse(subtreeStr);
  subtree.picture_large = null;
  focusFormExercise();
  let obj = setExercise(subtree); 
  insertFeed(obj);
  
}

/* ---------------- controls next ---------------- */


function controlDropdownType() {

  if (document.getElementById('exercise_type').classList.contains("is-active")) {

    document.getElementById('exercise_type').classList.remove("is-active");
  }
  else {

    document.getElementById('exercise_type').classList.add("is-active");
  }

}

function controlDropdownDeet() {

  if (document.getElementById('exercise_type_deet').classList.contains("is-active")) {

    document.getElementById('exercise_type_deet').classList.remove("is-active");
  }
  else {

    document.getElementById('exercise_type_deet').classList.add("is-active");
  }

}

function formFinishExercise() {
  const type = document.getElementById('exercise_type_label').textContent;
  const deet = document.getElementById('exercise_type_deet_label').textContent;
  const num = document.getElementById('exercise_num').value;
  const weight = document.getElementById('exercise_weight').value;
  console.log(weight);
  const i = `Exercise Report:\nExercise Type: ${type}\nExercise Details: ${deet}\nRepitions: ${num}\nWeight: ${weight} LBS\n`;
  document.getElementById('exercise_pre').textContent = i;
  document.getElementById('exercise_pre').style.visibility = "visible";
  document.getElementById('exercise_submit').style.visibility = "visible";
}

function formChooseType(i) {
  document.getElementById('exercise_type_label').textContent = i;
  controlDropdownType();
}

function formChooseDeet(i) {
  document.getElementById('exercise_type_deet_label').textContent = i;
  controlDropdownDeet()

}

export function formSubmitMessage() {
  //console.log("here 1");
  
  const msg_orig = document.getElementById("message_txt");
  //console.log(msg_orig.value);
  const msg = msg_orig.value;
  const pic_orig = document.getElementById('myImg1');
  const pic = pic_orig.src;
  //console.log("here 2");

  const d = new Date();
  //console.log("here 3");

  const obj = JSON.parse(subtreeStr);
  //console.log("here 4");

  obj.show_message = true;
  obj.show_workout = false;
  obj.show_exercise = false;
  obj.visible = true;
  obj.message = msg;
  obj.message_obj_message = msg;
  obj.message_obj_from = "John Doe";
  obj.picture_large = pic;
  obj.date_now = d;

  //console.log(obj + " len");

  const b = setMessage(obj, msg);

  insertFeed(b);
  document.getElementById("message_txt").value = "";
  //console.log(msg);
  focusNews();
}

function formSubmitWorkout() {
  console.log("workout submit");

}

function formSubmitExercise() {
  console.log("exercise submit");
  const msg = document.getElementById('exercise_pre').textContent;
  const pic_orig = document.getElementById('myImg2');
  const pic = pic_orig.src;

  const d = new Date();

  const obj = JSON.parse(subtreeStr);

  obj.show_message = false;
  obj.show_workout = false;
  obj.show_exercise = true;
  obj.visible = true;
  obj.message = msg;
  obj.exercise_obj_message = msg;
  obj.message_obj_from = "John Doe"
  obj.picture_large = pic;
  obj.date_now = d;

  //console.log(obj.length + " len");

  const b = setExercise(obj, msg);

  insertFeed(b);
  focusNews();
}

/* --------- support fn -------------  */

export function preview_image_msg(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('myImg1');
    output.style.visibility = "visible";
    output.src = reader.result;
    console.log("get pic");
  }
  //const f = visibility.$refs.picButton.files;
  //const ff = f[0];
  reader.readAsDataURL(event.target.files[0]);
}

export function preview_image_ex(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('myImg2');
    output.style.visibility = "visible";
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

/* --------------- vue functions ------------------- */


export function doLoad() {

  let visibility = new Vue({
    el: '#app',
    render: h => h(appx),
    data() {
      return {
        login: false,
        register: false,
        newsfeed: false,
        home: true,
        banner: true,
        form_message: false,
        form_exercise: false,
        form_workout: false
      };
    },
    mounted() {
      console.log("mounted");
      console.log(this);
    },
    methods: {
      classOption: function (i) {
        //console.log(i);
        const x = Boolean(i);
        if (x === true) return 'visi';
        else return 'invis';
      },


      focusRegister: function () {
        this.register = true;
        this.login = false;
        this.newsfeed = false;
        this.home = false;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusLogin: function () {
        this.login = true;
        this.register = false;
        this.newsfeed = false;
        this.home = false;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusNews: function () {

        this.login = false;
        this.register = false;
        this.newsfeed = true;
        this.home = false;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;


      },

      focusReset: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = true;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusFormExercise: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = false;
        this.banner = true;
        this.form_exercise = true;
        this.form_message = false;
        this.form_workout = false;
      },

      focusFormMessage: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = false;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = true;
        this.form_workout = false;
      },

      focusFormWorkout: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = true;
        this.home = false;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = true;
      },

      useFormSubmitMessage: function () {
        formSubmitMessage();
        
      },
      preview_image_msg: function (e) {
        preview_image_msg(e);
      }


    }
  });

  makeFeedComponent();
  makeInvocation();


}


//window.onload = doLoad;
//doLoad();

export function classOption(i) {
  //console.log(i);
  const x = Boolean(i);
  if (x === true) return 'visi';
  else return 'invis';
}

function focusRegister() {
  visibility.register = true;
  visibility.login = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}

function focusLogin() {
  visibility.login = true;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}

export function focusNews() {

  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = true;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;


}

function focusReset() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = true;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}

export function focusFormExercise() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = true;
  visibility.form_message = false;
  visibility.form_workout = false;
}

function focusFormMessage() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = true;
  visibility.form_workout = false;
}

export function focusFormWorkout() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = true;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = true;
}

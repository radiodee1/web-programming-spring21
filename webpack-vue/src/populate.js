import Vue from "vue";
require("./v.js");
import { focusFormWorkout, focusFormExercise } from './v.js';
//import { focusNews } from "./v.js";

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

function doLoad() {

    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello World!'
      }
    });

    var app4 = new Vue({
        el: '#app-4',
        data: {
          todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ]
        }
      });

      visibility = new Vue({
        el: '#visibility',
        data: {
          login: true,
          register: true,
          newsfeed: false,
          home: true,
          banner: true
        }
      });

  }
    
  $(document).ready(function() {
      /* new app(); */
      doLoad();
  })
      
      //alert('hello');
  
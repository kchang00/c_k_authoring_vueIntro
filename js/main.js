// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)

    // this is an object
    user: {
        // keys and values - describes user
        isAdmin: true,
        isLoggedIn: true,
        avatar: "thor.png"
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    videotitle:"video title here",
    videodescription: "vid desc here",
    videosource:"",

    showDetails: false
  },

  methods: {
    logInOut() {
        // test the login/logout UI -> btn should change colour
        // eventually we'll use routing and a login component
        console.log('do login / logout on click');
        // ? : ; = shorthand if statement - known as a ternary statement
        // evaluate the expression; if true, use value on the left. If false, use value on right
        this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    setUserPrefs() {
        console.log('set user prefs via routing and probably a component');
    },

    loadMovie({name, description, vidsource}){
        console.log('show movie details');

        this.videotitle = name;
        this.videodescription = description;
        this.videosource = vidsource;

        this.showDetails = true;
    }
  }
});

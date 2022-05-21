
// Define the global variables for the user information
var user_name="user";

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    // Store the profile name to be used in the home page
    sessionStorage.setItem(user_name, profile.getName());

    // redirect the user to the home page
    window.location.href = "http://localhost:5500/home.html";
}

function getUserName() {
    const userName = sessionStorage.getItem(user_name)
    // console.log ("getUserName: User name is: ", userName);
    return userName;
}

function getImageURL() {
    const imageURL = sessionStorage.getItem(image_url)
    // console.log ("getImageURL: Image URL is: ", imageURL);
    return imageURL;
}
  
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    window.location.href = "http://localhost:5500/index.html";
  }

  function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDqjQBSGpvXNMLPv2ahzeyavkner96g1OE",
    authDomain: "practice-kwitter-22fa4.firebaseapp.com",
    databaseURL: "https://practice-kwitter-22fa4-default-rtdb.firebaseio.com",
    projectId: "practice-kwitter-22fa4",
    storageBucket: "practice-kwitter-22fa4.appspot.com",
    messagingSenderId: "811494718900",
    appId: "1:811494718900:web:3b541e78036a2306a5c6e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }
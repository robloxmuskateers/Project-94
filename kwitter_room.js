
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDJMsrG-2X776MEcGEHmNUvc8-Iloi3cKU",
  authDomain: "letschat-f56c6.firebaseapp.com",
  projectId: "letschat-f56c6",
  storageBucket: "letschat-f56c6.appspot.com",
  messagingSenderId: "963406269452",
  appId: "1:963406269452:web:d6e6a98edc6e10a0ff7229"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

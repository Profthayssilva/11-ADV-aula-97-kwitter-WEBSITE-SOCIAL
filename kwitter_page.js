var firebaseConfig = {
  apiKey: "AIzaSyCYXiTh85QfTzkY0hkYZYjhODf8lVbtKgU",
  authDomain: "kwitterprofthays.firebaseapp.com",
  databaseURL: "https://kwitterprofthays-default-rtdb.firebaseio.com",
  projectId: "kwitterprofthays",
  storageBucket: "kwitterprofthays.appspot.com",
  messagingSenderId: "182007721289",
  appId: "1:182007721289:web:f20b13c099fe4e9a507e98"
};



  firebase.initializeApp(firebaseConfig);
	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         

//End code
      } });  }); }
getData();




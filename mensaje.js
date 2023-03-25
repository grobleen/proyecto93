const firebaseConfig = {
    apiKey: "AIzaSyCSMyvv2NLurFKj1QEbXn4xc2TsTRLNOmc",
    authDomain: "kwitter-3beb5.firebaseapp.com",
    databaseURL: "https://kwitter-3beb5-default-rtdb.firebaseio.com",
    projectId: "kwitter-3beb5",
    storageBucket: "kwitter-3beb5.appspot.com",
    messagingSenderId: "988035852757",
    appId: "1:988035852757:web:f20a4e7d6902b95cad355c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
firebase_message_id = childKey; 
message_data = childData;
name = message_data['name']; 
message = message_data['message']; 
like = message_data['like']; 
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag; 
document.getElementById("output").innerHTML += row;
} }); }); } getData();
function enviar(){
msg=document.getElementById ("mensaje").value;
firebase.database().ref(room_name).push({
  name:user_name,
  mensaje:msg,
  like:0
  });
  document.getElementById("mensaje").value="";
}
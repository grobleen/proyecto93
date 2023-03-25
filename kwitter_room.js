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
//AÑADE TUS ENLACES DE FIREBASE
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="¡vienvenido "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();
function addroom (){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"se creo sala"      
});
localStorage.setItem("room_name", room_name);
window.location = "mensaje.html";
}
function redirectToRoomName(name){
localStorage.setItem("room_name", name);      
window.location = "mensaje.html";
}
function logout (){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");  
window.location = "index.html";
    
}
var firebaseConfig = {
      apiKey: "AIzaSyACjWm0VSmRb_eRiogMWEOLR8S4fMybBAA",
      authDomain: "kwooter-d7a97.firebaseapp.com",
      databaseURL: "https://kwooter-d7a97-default-rtdb.firebaseio.com",
      projectId: "kwooter-d7a97",
      storageBucket: "kwooter-d7a97.appspot.com",
      messagingSenderId: "663865768141",
      appId: "1:663865768141:web:20af490ef8d977f1e99184"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Join us "+user_name+"!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-"+ Room_names); 
row = "<div class='room_name' id="+Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div>";
document.getElementById("output").innerHTML+=row;
});});}

getData();

function logout(){
      window.location = "index.html";
}
function addRoom() {
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location = "chat.html";
  }
  function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location="chat.html";y
  }
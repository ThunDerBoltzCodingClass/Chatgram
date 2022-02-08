var firebaseConfig = {
    apiKey: "AIzaSyDme6_eBsaT9p5zCIuV_4o1PRm2CJWJnCw",
    authDomain: "lets-chat-a0c86.firebaseapp.com",
    databaseURL: "https://lets-chat-a0c86-default-rtdb.firebaseio.com",
    projectId: "lets-chat-a0c86",
    storageBucket: "lets-chat-a0c86.appspot.com",
    messagingSenderId: "361905386369",
    appId: "1:361905386369:web:08e1c60c98564625612e80",
    measurementId: "G-72MV686PBF"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("Username");
document.getElementById("user_name").innerHTML= "Welcome to Chatgram "+user_name+"!!!";
function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}

function getData(){
    firebase.database().ref("/").on('value',
    function(snapshot){
        document.getElementById("output").innerHTML= "";
        snapshot.forEach(function(childSnapshot)  {
            childKey= childSnapshot.key;
            Room_names= childKey;
            console.log(Room_names);
            row= "<div class='room_name' id="+Room_names+" onclick='reDirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
            document.getElementById("output").innerHTML+= row;
        });
    });
}

function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
 }

 getData();
 function reDirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
 }
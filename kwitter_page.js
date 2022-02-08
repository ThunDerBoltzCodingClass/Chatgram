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
   room_name= localStorage.getItem("room_name");

function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    firebase_message_id = childKey;
    message_data = childData;
   //Start code
   console.log(firebase_message_id);
   console.log(message_data);
   name = message_data['name'];
   message = message_data['message'];
   like = message_data['like']
   name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
   message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
   like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
   span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
   row= name_with_tag + message_with_tag + like_button + span_with_tag;
   document.getElementById("output").innerHTML=row;
   //End code
   });});}
getData();  

function send(){
   msg=document.getElementById("sendMsg").value;
   firebase.database().ref(room_name).push({
      name: user_name, 
      message: msg,
      likes: 0
   });
   document.getElementById("sendMsg").value="";
}

function updateLike(message_id){
   console.log("clicked on like button- "+message_id);
   button_id = message_id;
   likes= document.getElementById("button_id").value;
   updated_likes= Number(likes) + 1;
   console.log(updated_likes);

   firebase.datebase().ref(Room_names).child(message_id).update({
       like: updated_likes
   });
}

function logout(){
   localStorage.removeItem("Username");
   localStorage.removeItem("room_name");
   window.location.replace("index.html");
}
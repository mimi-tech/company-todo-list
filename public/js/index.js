
	// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCyLJhZTYGEEwA1TLUJjtbId3MsB8x8XIM",
    authDomain: "portfolio-3ca4a.firebaseapp.com",
    databaseURL: "https://portfolio-3ca4a.firebaseio.com",
    projectId: "portfolio-3ca4a",
    storageBucket: "portfolio-3ca4a.appspot.com",
    messagingSenderId: "656632493670",
    appId: "1:656632493670:web:e3bc39cf87818141a31fa7",
    measurementId: "G-7RGP1H735J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

$("#send_message").click(function(){
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();	
    var message = $("#message").val();
	
	if(name != "" && email != "" && phone != "" && message != ""){
		var result = firebase.auth().createUserWithNameAndEmailAndPhoneAndMessage(name, email, phone, message);
		result.catch(function(error){
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode);
			window.alert("Message :" + errorMessage);
		});
	}else{
		window.alert("error");
	}
});
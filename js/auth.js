function signUp() {
	// var form = document.getElementById("sign-up-form");
	var email = document.getElementById("signup-email").value;
	var password = document.getElementById("signup-password").value;
	var fullname = document.getElementById("fullname").value;
	//signup user
	auth
		.createUserWithEmailAndPassword(email, password)
		.then((cred) => {
			console.log("Signed in");

			return db
				.collection("UsersOfGallery")
				.doc(cred.user.uid)
				.set({
					FullName: fullname,
					UserEmail: email,
				})
				.then(() => {
					console.log("Added Succesfully");
				})
				.catch((e) => {
					console.error("Error", e);
					alert("Something went wrong " + e.message);
				});
		})
		.then(() => {
			window.location.assign("afterlogin.html");
		})
		.catch((e) => {
			console.error("Error", e);
			alert("My Friend, " + e.message);
		});
}

function signIn() {
	// debugger;
	var email = document.getElementById("signin-email").value;
	var password = document.getElementById("signin-password").value;

	auth
		.signInWithEmailAndPassword(email, password)
		.then((cred) => {
			console.log(cred.user);
			window.location.assign("afterlogin.html");
		})
		.catch((error) => {
			// An error happened.
			console.log(error);
			alert("My Friend, " + error.message);
		});
}

function signout() {
	firebase
		.auth()
		.signOut()
		.then(() => {
			// Sign-out successful.
			console.log("User Logged out");
			window.location.assign("index.html");
		})
		.catch((error) => {
			// An error happened.
      alert(error.message)
		});
}

function submitResponse() {
	var username = document.getElementById("form-name").value;
	var email = document.getElementById("form-email").value;
	var subject = document.getElementById("form-subject").value;
	var message = document.getElementById("form-message").value;

    if(username==""){
      alert("My Firend, please enter your good name")
    }
    else if(email==""){
      alert("My Friend, need your emaill address for futher contacts :D")
    }
    else if(subject==""){
      alert("Hey, please enter the subject. It will be easier for me to understand :D")
    }
    else if(message == ""){
      alert("I think you missed to add message")
    }
    
	db.collection("UsersResponse")
		.doc(email)
		.set({
			Name: username,
			UserEmail: email,
			Subject: subject,
			Message: message,
		})
		.then(() => {
			var reply = document.getElementById("reply");
			reply.innerHTML = "Thanks! for your response";
      
		})
		.catch((e) => {
			console.error("Error", e);
      var reply = document.getElementById("reply");
			reply.innerHTML = "Opps!";
		});
}
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		// debugger;
		console.log("User Logged: " + user);
		// get data
		db.collection("UsersOfGallery").onSnapshot(
			(onSnapshot) => {
				// setupUI(onSnapshot.docs);
				console.log(onSnapshot.docs);
				setui(user);
			},
			(err) => {
				console.log(err.message);
			}
		);
	} else {
		console.log("User logged out:", user);
		setui([]);
	}
});

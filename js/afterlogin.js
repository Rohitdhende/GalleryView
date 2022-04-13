var usn = document.getElementById("signedinusername");

var setui = (user) => {
	console.log(user.uid);
	if (user) {
		// db.collection('UsersOfGallery').doc(user.uid).get().then(doc=>{
		//     var html = `
		//     <span>${user}</span>`;
		//     usn.innerHTML = html;
		// });
		var docRef = db.collection("UsersOfGallery").doc(user.uid);

		docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					console.log("Document data:", doc.data());
					var html = `
            <span>${doc.data().FullName}</span>`;
					usn.innerHTML = html;
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}
};

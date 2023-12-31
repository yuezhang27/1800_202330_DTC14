

var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)

            currentUser.get()
                .then(userDoc => {
                    var userName = userDoc.data().name;
                    var userAge = userDoc.data().age;
                    var userCity = userDoc.data().city;
                    var userPic = userDoc.data().profileImg;

                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                        document.getElementById("user-name").innerText = userName;
                    }
                    if (userAge != null) {
                        document.getElementById("ageInput").value = userAge;
                    }
                    if (userCity != null) {
                        document.getElementById("cityInput").value = userCity;


                    }
                    if (userPic) {
                        storage.ref('images/' + userPic + ".jpg").getDownloadURL().then
                            ((url) => {
                                document.getElementById("mypic-goes-here").src = url;
                            }).catch((error) => {
                                console.error("Error fetching image URL:", error);
                                // Set a default image in case of error
                                document.getElementById("mypic-goes-here").src = "./images/default-profile-img.jpg";
                            });
                    } else {
                        document.getElementById("mypic-goes-here").src = "./images/default-profile-img.jpg"
                    }
                })
        } else {
            // No user is signed in.

            console.log("No user is signed in");
        }
    });
}

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
    document.getElementById('mypic-input').disabled = false;
}

populateUserInfo();

function saveUserInfo() {
    savePost()
    userName = document.getElementById('nameInput').value;
    userAge = document.getElementById('ageInput').value;
    userCity = document.getElementById('cityInput').value;

    document.getElementById("user-name").innerText = userName;



    currentUser.update({
        name: userName,
        age: userAge,
        city: userCity
    })
        .then(() => {
            console.log("Document successfully updated!");


            
        })
    document.getElementById('personalInfoFields').disabled = true;
    document.getElementById('mypic-input').disabled = true;
}


var ImageFile;
function listenFileSelect() {

    var fileInput = document.getElementById("mypic-input");
    const image = document.getElementById("mypic-goes-here");

    // When a change happens to the File Chooser Input
    fileInput.addEventListener('change', function (e) {
        ImageFile = e.target.files[0];   //Global variable
        var blob = URL.createObjectURL(ImageFile);
        image.src = blob; // Display this image
    })
}
listenFileSelect();
// -----------------------------------------------------------------------------------------------------------------------
function savePost() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            db.collection("posts").add({
                owner: user.uid,
                last_updated: firebase.firestore.FieldValue
                    .serverTimestamp() //current system time
            }).then(doc => {
                uploadPic(doc.id);
            })
        } else {
            // No user is signed in.
            console.log("Error, no user signed in");
        }
    });
}


function uploadPic(postDocID) {
    console.log("inside uploadPic " + postDocID);
    var storageRef = storage.ref("images/" + postDocID + ".jpg");

    storageRef.put(ImageFile)   //global variable ImageFile

        // AFTER .put() is done
        .then(function () {

            storageRef.getDownloadURL()
                // AFTER .getDownloadURL is done
                .then(function (url) { // Get URL of the uploaded file
                    db.collection("posts").doc(postDocID).update({
                        "image": url // Save the URL into users collection
                    }).then(function () {
                        savePostIDforUser(postDocID);
                    })
                })
        })
        .catch((error) => {
            console.log("error uploading to cloud storage");
        })
}

//--------------------------------------------
//saves the post ID for the user, in an array
//--------------------------------------------
function savePostIDforUser(postDocID) {
    firebase.auth().onAuthStateChanged(user => {

        db.collection("users").doc(user.uid).update({
            profileImg: postDocID
        })
            .then(() => {
                console.log("5. Saved to user's document!");
                alert("Profile image is uploaded!");
                //window.location.href = "showposts.html";
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    })
}
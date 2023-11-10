function logOut() {

}
var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.set()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userAge = userDoc.data().age;
                    var userGender = userDoc.data().genderInput;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userAge != null) {
                        document.getElementById("birthdayInput").value = userAge;
                    }
                    if (userGender != null) {
                        document.getElementById("genderInput").value = userGender;
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
}
//call the function to run it 
populateUserInfo();

// function chooseGender() {
//     var mylist = document.getElementById("cityInput");
//     // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
// }
function saveUserInfo() {
    //enter code here
    console.log("seethisfd")
    //a) get user entered values
    userName = document.getElementById('nameInput').value;       //get the value of the field with id="nameInput"
    userAge = document.getElementById('ageInput').value;     //get the value of the field with id="schoolInput"
    userGender = document.getElementById('genderInput').value;       //get the value of the field with id="cityInput"
    //b) update user's document in Firestore
    currentUser.update({
        name: userName,
        age: userAge,
        gender: userGender
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
    //c) disable edit 
    document.getElementById('personalInfoFields').disabled = true;
}
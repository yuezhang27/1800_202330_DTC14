
function loadSkeleton() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {                   //if the pointer to "user" object is not null, then someone is logged in
            // User is signed in.
            // Do something for the user here.
            console.log($('.footernav').load('./text/nav_after.html'));

        } else {
            // No user is signed in.
            console.log($('.footernav').load('./text/nav_before.html'));


        }
    })

}
loadSkeleton(); //invoke the function


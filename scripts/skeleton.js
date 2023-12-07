
function loadSkeleton() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {                   
            //if the pointer to "user" object is not null, then someone is logged in
            console.log($('.footernav').load('./text/nav_after.html'));

        } else {
            // No user is signed in.
            console.log($('.footernav').load('./text/nav_before.html'));


        }
    })

}
loadSkeleton(); 


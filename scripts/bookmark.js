//----------------------------------------------------------
// This function is the only function that's called.
// This strategy gives us better control of the page.
//----------------------------------------------------------

function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // insertNameFromFirestore(user);
            getBookmarks(user)
        } else {
            console.log("No user is signed in");
        }
    });
}
doAll();



function getBookmarks(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {

            // Get the Array of bookmarks
            var bookmarks = userDoc.data().bookmarks;
            console.log(bookmarks);

            // Get pointer the new card template
            let newcardTemplate = document.getElementById("bookmarkSaveTemplate");

            // Iterate through the ARRAY of bookmarked hikes (document ID's)
            bookmarks.forEach(thisResourceID => {
                console.log(thisResourceID);
                db.collection("resources").doc(thisResourceID).get().then(doc => {
                    var title = doc.data().name;       // get value of the "name" key
                    var description = doc.data().description;
                    var resourceCode = doc.data().code;    //get ID to each resource to be used for fetching right image
                    var docID = doc.id;
                    let newcard = newcardTemplate.content.cloneNode(true);

                    newcard.querySelector('.card-title').innerHTML = title;
                    newcard.querySelector('.description').innerHTML = description;
                    newcard.querySelector('.card-img-bottom').src = `./images/${resourceCode}.jpg`; //Example: NV01.jpg
                    newcard.querySelector('a').href = "each_info.html?docID=" + docID;

                    //Finally, attach this new card to the gallery
                    bookmarkContainer.appendChild(newcard);
                })
            });
        })
}
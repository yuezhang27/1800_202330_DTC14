//----------------------------------------------------------
// This function is the only function that's called.
// This strategy gives us better control of the page.
//----------------------------------------------------------
function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            insertNameFromFirestore(user);
            getBookmarks(user)
        } else {
            console.log("No user is signed in");
        }
    });
}
doAll();

//----------------------------------------------------------
// Wouldn't it be nice to see the User's Name on this page?
// Let's do it!  (Thinking ahead:  This function can be carved out, 
// and put into script.js for other pages to use as well).
//----------------------------------------------------------//----------------------------------------------------------
function insertNameFromFirestore(user) {
            db.collection("users").doc(user.uid).get().then(userDoc => {
                console.log(userDoc.data().name)
                userName = userDoc.data().name;
                console.log(userName)
                document.getElementById("name-goes-here").innerHTML = userName;
            })

}

//----------------------------------------------------------
// This function takes input param User's Firestore document pointer
// and retrieves the "saved" array (of bookmarks) 
// and dynamically displays them in the gallery
//----------------------------------------------------------
function formatTimestamp(timestamp) {
    const fullTimestamp = timestamp.seconds + timestamp.nanoseconds / 1e9;
    const date = new Date(fullTimestamp * 1000);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
}

function getBookmarks(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {

					  // Get the Array of bookmarks
            var bookmarks = userDoc.data().bookmarks;
            console.log(bookmarks);
						
						// Get pointer the new card template
            let newcardTemplate = document.getElementById("savedCardTemplate");

						// Iterate through the ARRAY of bookmarked hikes (document ID's)
            bookmarks.forEach(thisResourceID => {
                console.log(thisResourceID);
                db.collection("resources").doc(thisResourceID).get().then(doc => {
                    var title = doc.data().name;       // get value of the "name" key
                    var description = doc.data().description;  // get value of the "description" key
                    var updateTime = doc.data().last_updated;
                    realTime = formatTimestamp(updateTime);
                    var resourceCode = doc.data().code;    //get ID to each resource to be used for fetching right image
                    var docID = doc.id;
                    let newcard = newcardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.
    
                    //update title and text and image
                    newcard.querySelector('.card-title').innerHTML = title;
                    newcard.querySelector('.text-muted').innerHTML = "Last update: " + realTime;
                    newcard.querySelector('.description').innerHTML = description;
                    newcard.querySelector('.card-img-bottom').src = `./images/${resourceCode}.jpg`; //Example: NV01.jpg
                    newcard.querySelector('a').href = "each_info.html?docID=" + docID;
    
    
					//Finally, attach this new card to the gallery
                    resourceCardGroup.appendChild(newcard);
                })
            });
        })
}
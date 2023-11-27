
var currentUser;

function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {

            currentUser = db.collection("users").doc(user.uid);
            insertNameFromFirestore(user);
            getBookmarks(user)
        } else {
            console.log("No user is signed in");
        }
    });
}
doAll();


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

function calculateCountdown(openTimeStr, closeTimeStr) {
    if (openTimeStr ==="0:00"&& closeTimeStr==="24:00" ){
        return 'Opening | 24hours';
    }
    let now = new Date();
    let openTime = new Date(now.toDateString() + ' ' + openTimeStr);
    let closeTime = new Date(now.toDateString() + ' ' + closeTimeStr);
    if (openTime > closeTime) {
        closeTime.setDate(closeTime.getDate() + 1);
    }
    if (now < openTime) {
        return 'Closed | Next Open: In ' + timeDifference(now, openTime);
    } else if (now >= openTime && now < closeTime) {
        //opening
        return 'Is Opening | Close In: ' + timeDifference(now, closeTime);
    } else {
        let tomorrowOpen = new Date(openTime);
        tomorrowOpen.setDate(tomorrowOpen.getDate() + 1);
        return 'Closed | Next Open: In ' + timeDifference(now, tomorrowOpen);
    }
}


function timeDifference(start, end) {
    let diff = end - start;
    let hours = Math.floor(diff / 3600000);
    let minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours} hrs ${minutes} mins`;
}


function getBookmarks(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {

					  // Get the Array of bookmarks
            var bookmarks = userDoc.data().bookmarks;
            if (bookmarks.length !== 0){
                document.getElementById("no-bookmark-comment").remove()
                console.log(bookmarks)
            }

						
						// Get pointer the new card template
            let newcardTemplate = document.getElementById("savedCardTemplate");

						// Iterate through the ARRAY of bookmarked hikes (document ID's)
            bookmarks.forEach(thisResourceID => {
                console.log(thisResourceID);
                db.collection("resources").doc(thisResourceID).get().then(doc => {
                    var title = doc.data().name;       // get value of the "name" key
                    var description = doc.data().description;  // get value of the "description" key
                    var openTime = doc.data().openTime;
                    var closeTime = doc.data().closeTime;
                    var countDownText = calculateCountdown(openTime, closeTime)
                    var resourceCode = doc.data().code;    //get ID to each resource to be used for fetching right image
                    var docID = doc.id;
                    let newcard = newcardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.
    
                    //update title and text and image
                    newcard.querySelector('.card-title').innerHTML = title;
                    newcard.querySelector('.text-muted').innerHTML = countDownText;
                    newcard.querySelector('.description').innerHTML = description;
                    newcard.querySelector('.card-img-bottom').src = `./images/${resourceCode}.jpg`; //Example: NV01.jpg
                    newcard.querySelector('a').href = "each_info.html?docID=" + docID;
                    newcard.querySelector('i').id = 'save-' + docID;
    
                    
					//Finally, attach this new card to the gallery
                    resourceCardGroup.appendChild(newcard);
                    document.querySelector('i').onclick = () => updateBookmark(docID);
                    currentUser.get().then(userDoc => {
                        //get the user name
                        var bookmarks = userDoc.data().bookmarks;
                        if (bookmarks.includes(docID)) {
                            document.getElementById('save-' + docID).innerText = 'bookmark';
                        }
                    })

                    
                })
            });
        })
}

function updateBookmark(resourceDocID) {
    currentUser.get().then(userDoc => {
        let bookmarks = userDoc.data().bookmarks;
        let iconID = 'save-' + resourceDocID;
        let isBookmarked = bookmarks.includes(resourceDocID)//check if thsi hikeID exist in bookmark array
        console.log(isBookmarked)

        if (isBookmarked) {
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayRemove(resourceDocID)
            }).then(() => {
                console.log("item was removed" + resourceDocID)
                document.getElementById(iconID).innerText = 'bookmark_border'

            })

        } else {
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayUnion(resourceDocID)
            }).then(() => {
                console.log("this item added to the database" + isBookmarked)
                document.getElementById(iconID).innerText = 'bookmark'

            })
        }

    })
}


//Global variable pointing to the current user's Firestore document
var currentUser;

//Function that calls everything needed for the main page  
function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid); //global
            console.log(currentUser);

            displayResourceInfo();
        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();




function displayResourceInfo() {
    let params = new URL(window.location.href );  //getting url of search bar
    console.log("params is =", params);
    let ID = params.searchParams.get("docID");     // getting value for key "id"
    console.log(ID);                               // checking for proper ID call in console

    db.collection( "resources" )
    .doc( ID )
    .get()
    .then( doc => {
        thisResource= doc.data();
        resourceCode = thisResource.code;
        resourceName = doc.data().name;
        resourceDescription = doc.data().description;
        DescriptionDetail = doc.data().description_detail;
        resourceLocation = doc.data().location;
        resourceContact = doc.data().contactPhone;
        docID = doc.id; 
        // only populate title, and image
        document.getElementById( "review-card-title" ).innerHTML = resourceName;
        document.querySelector(".card-img-bottom").src = `./images/${resourceCode}.jpg`;
        // code below is broken version of code above
        // let imgEvent = document.querySelector( ".card-img-bottom" );
        // imgEvent.src = `./images/${resourceCode}.jpg`;
        document.querySelector('.description').innerHTML = resourceDescription;
        document.querySelector('.description_detail').innerHTML = DescriptionDetail;
        document.querySelector('.resourse_location').innerHTML = resourceLocation;
        document.querySelector('.resourse_contact').innerHTML = resourceContact;
        document.querySelector('i').id = 'save-' + ID;   //guaranteed to be unique
        document.querySelector('i').onclick = () => updateBookmark(ID);
        
        currentUser.get().then(userDoc => {
            //get the user name
            var bookmarks = userDoc.data().bookmarks;
            if (bookmarks.includes(docID)) {
                document.getElementById('save-' + docID).innerText = 'bookmark';
            }
        })

    } );
}
displayResourceInfo();

// save document ID
function saveResourceDocumentIDAndRedirect(){
    let params = new URL(window.location.href) //get the url from the search bar
    let ID = params.searchParams.get("docID");
    localStorage.setItem('resourceDocID', ID);
    window.location.href = 'review.html';
}

// review the comments
function populateReviews() {
    console.log("test");
    let reviewCardTemplate = document.getElementById("reviewCardTemplate");
    let reviewCardGroup = document.getElementById("reviewCardGroup");

    let params = new URL(window.location.href); // Get the URL from the search bar
    let resourceID = params.searchParams.get("docID"); // Assuming 'docID' is the resource ID
    console.log(resourceID)

    db.collection("reviews")
        .where("resourceDocID", "==", resourceID)
        .get()
        .then((allReviews) => {
            console.log(allReviews.docs)
            allReviews.docs.forEach((doc) => {
                var title = doc.data().title;
                var accessLevel = doc.data().accessLevel;
                var effectiveness = doc.data().effectiveness;
                var recommendation = doc.data().recommendationLikelihood;
                var description = doc.data().description;
                var time = doc.data().timestamp.toDate();
                var rating = doc.data().rating; // Get the rating value

                
                

                

                let reviewCard = reviewCardTemplate.content.cloneNode(true);
                reviewCard.querySelector(".title").innerHTML = title;
                reviewCard.querySelector(".time").innerHTML = new Date(time).toLocaleString();
                reviewCard.querySelector(".access-level").innerHTML = `Access Level: ${accessLevel}`;
                reviewCard.querySelector(".effectiveness").innerHTML = `Effectiveness: ${effectiveness}`;
                reviewCard.querySelector(".recommendation").innerHTML = `Recommendation: ${recommendation}`;
                reviewCard.querySelector(".description").innerHTML = `Description: ${description}`;


                // Populate the star rating
                let starRating = "";
                for (let i = 0; i < rating; i++) {
                    starRating += '<span class="material-icons">star</span>';
                }
                for (let i = rating; i < 5; i++) {
                    starRating += '<span class="material-icons">star_outline</span>';
                }
                reviewCard.querySelector(".star-rating").innerHTML = starRating;

                reviewCardGroup.appendChild(reviewCard);
            });
        });
}

populateReviews();



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

//-----------------------------------------------------------------------------
// This function is called whenever the user clicks on the "bookmark" icon.
// It adds the hike to the "bookmarks" array
// Then it will change the bookmark icon from the hollow to the solid version. 
//-----------------------------------------------------------------------------


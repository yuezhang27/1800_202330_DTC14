var resourceDocID = localStorage.getItem("resourceDocID");    //visible to all functions on this page
var lastPage = localStorage.getItem("lastPage");
let goBackLink = document.getElementById("goBackLink");
goBackLink.href = `/each_info.html?docID=${resourceDocID}`;


function getResourceName(id) {
    db.collection("resources")
        .doc(id)
        .get()
        .then((thisResource) => {
            var resourceName = thisResource.data().name;
            var resourceCode = thisResource.data().code;
            console.log(resourceName)
            console.log(resourceCode)
            document.getElementById("resourceName").innerHTML = resourceName;
            document.querySelector('.card-img-bottom').src = `./images/${resourceCode}.jpg`; //Example: NV01.jpg
        });
}

getResourceName(resourceDocID);

// Stars clickable
// Add this JavaScript code to make stars clickable

// Select all elements with the class name "star" and store them in the "stars" variable
const stars = document.querySelectorAll('.star');

// Iterate through each star element
stars.forEach((star, index) => {
    // Add a click event listener to the current star
    star.addEventListener('click', () => {
        document.getElementById(`star${1}`).textContent = 'star_outline'
        document.getElementById(`star${2}`).textContent = 'star_outline'
        document.getElementById(`star${3}`).textContent = 'star_outline'
        document.getElementById(`star${4}`).textContent = 'star_outline'
        document.getElementById(`star${5}`).textContent = 'star_outline'
        // Fill in clicked star and stars before it
        for (let i = 0; i <= index; i++) {
            // Change the text content of stars to 'star' (filled)
            document.getElementById(`star${i + 1}`).textContent = 'star';
        }
    });
});


// write the review below the main page
function writeReview() {
    console.log("inside write review");
    let reviewTitle = document.getElementById("title").value;
    let accessLevel = document.getElementById("ease").value;
    let effectiveness = document.getElementById("effectiveness").value;
    let recommendationLikelihood = document.getElementById("likelihood").value;
    let reviewDescription = document.getElementById("description").value;

    // Handling star ratings
    const stars = document.querySelectorAll('.star');
    let reviewRating = 0;
    stars.forEach((star, index) => {
        if (star.textContent === 'star') {
            reviewRating = index + 1; // Get the star rating based on the number of filled stars
        }
    });

    var user = firebase.auth().currentUser;
    if (user) {
        var userID = user.uid;

        // Add review data to the database
        db.collection("reviews").add({
            resourceDocID: resourceDocID, // Ensure this is the correct variable name
            userID: userID,
            title: reviewTitle,
            accessLevel: accessLevel,
            effectiveness: effectiveness,
            recommendationLikelihood: recommendationLikelihood,
            description: reviewDescription,
            rating: reviewRating, // Include the star rating
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            window.location.href = "thanks.html"; // Redirect to the thank you page
        });
    } else {
        console.log("No user is signed in");
        window.location.href = 'review.html';
    }
}

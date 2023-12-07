const mapViewButton = document.getElementById('map-view-fab');
let isMapView = true;
var currentUser;


function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid); //global

            displayCardsDynamically("resources", null, null)
        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();

mapViewButton.addEventListener('click', function () {
    if (isMapView) {
        // Switch to List View
        mapViewButton.textContent = 'Map View';
    } else {
        // Switch to Map View
        mapViewButton.textContent = 'List View';
    }
    isMapView = !isMapView;
});

function calculateCountdown(openTimeStr, closeTimeStr) {
    if (openTimeStr === "0:00" && closeTimeStr === "24:00") {
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


// display content according to the filter and database
function displayCardsDynamically(collection, category, searchType) {
    let cardTemplate = document.getElementById("resultTemplate"); // Retrieve the HTML element with the ID "resultTemplate" and store it in the cardTemplate variable. 
    let gallery = document.getElementById(collection + "-go-here");

    // Clear existing content
    gallery.innerHTML = "";

    let query = db.collection(collection)

    if (category !== null) {
        query = query.where("category", "==", category)
    }
    if (searchType !== null && searchType.length > 0) {
        query = query.where("searchType", "array-contains-any", searchType);
    }
    if (searchType == "") {
        query = db.collection(collection)
    }

    query.get().then(allResources => {
        console.log(allResources)
        allResources.forEach(doc => {
            var title = doc.data().name;
            var description = doc.data().description;
            // var updateTime = doc.data().last_updated;
            // realTime = formatTimestamp(updateTime);
            var openTime = doc.data().openTime;
            var closeTime = doc.data().closeTime;
            var countDownText = calculateCountdown(openTime, closeTime)
            var resourceCode = doc.data().code;
            //get ID to each resource to be used for fetching right image
            var docID = doc.id;
            let newcard = cardTemplate.content.cloneNode(true);


            //update title and text and image
            newcard.querySelector('.card-title').innerHTML = title;
            // newcard.querySelector('.text-muted').innerHTML = "Last update: " + realTime;
            newcard.querySelector('.text-muted').innerHTML = countDownText;
            newcard.querySelector('.description').innerHTML = description;
            newcard.querySelector('.card-img-bottom').src = `./images/${resourceCode}.jpg`; //Example: NV01.jpg
            newcard.querySelector('a').href = "each_info.html?docID=" + docID;
            newcard.querySelector('i').id = 'save-' + docID;
            //guaranteed to be unique
            // newcard.querySelector('i').onclick = saveBookmark(docID);
            newcard.querySelector('i').onclick = () => updateBookmark(docID);

            document.getElementById(collection + "-go-here").appendChild(newcard);

            currentUser.get().then(userDoc => {
                //get the user name
                var bookmarks = userDoc.data().bookmarks;
                if (bookmarks.includes(docID)) {
                    document.getElementById('save-' + docID).innerText = 'bookmark';
                }
            })
        })
    })
}



function updateBookmark(resourceDocID) {
    currentUser.get().then((doc) => {
        // var userData = doc.data();
        // var bookmarks = userData.bookmarks || [];
        let bookmarks = doc.data().bookmarks;
        let iconID = 'save-' + resourceDocID
        let isBookmarked = bookmarks.includes(resourceDocID)
        if (isBookmarked) {
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayRemove(resourceDocID)
            })
                .then(function () {
                    console.log("Bookmark removed for " + resourceDocID);
                    document.getElementById(iconID).innerText = 'bookmark_border'
                });
        } else {
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayUnion(resourceDocID)
            })
                .then(function () {
                    console.log("Bookmark added for " + resourceDocID);
                    document.getElementById(iconID).innerText = 'bookmark'
                });
        }
    });
}


function removeActiveStyles() {
    document.querySelectorAll('.filterbtn').forEach(button => {
        button.classList.remove('active_filter');
    });
}



// functiom to save last page data to local storage
function saveLastPage() {
    let params = new URL(window.location.href)
    let lastPage = params.pathname;
    localStorage.setItem('lastPage', lastPage);
    console.log('Stored in local storage:', lastPage);
}
saveLastPage()

// add clicked function on food filter button
// functions for filter buttons
function toggleFilter() {
    var x = document.getElementById("filtergroup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


let isFoodActive = false;
let isMoneyActive = false;
let isHousingActive = false;
let isWorkActive = false;


function toggleFood() {
    const button = document.getElementById('FoodBtn');

    // Toggle the state
    isFoodActive = !isFoodActive;

    if (isFoodActive) {
        removeActiveStyles()

        isMoneyActive = false;
        isHousingActive = false;
        isWorkActive = false;
        // Execute the function when the button is active
        // displayCardsDynamically("resources", "food")
        button.classList.add('active_filter'); // Apply active styling
    } else {
        // Execute another function or no function when the button is not active
        // displayCardsDynamically("resources", null)
        removeActiveStyles()
    }
}

// add clicked function on money filter button


function toggleMoney() {

    const button = document.getElementById('MoneyBtn');

    // Toggle the state
    isMoneyActive = !isMoneyActive;

    if (isMoneyActive) {
        removeActiveStyles()
        isFoodActive = false;
        isHousingActive = false;
        isWorkActive = false;
        // Execute the function when the button is active
        button.classList.add('active_filter'); // Apply active styling
    } else {
        // Execute another function or no function when the button is not active
        removeActiveStyles()
    }
}

// add clicked function on housing filter button


function toggleHousing() {
    const button = document.getElementById('HousingBtn');

    // Toggle the state
    isHousingActive = !isHousingActive;

    if (isHousingActive) {
        removeActiveStyles()
        isFoodActive = false;
        isMoneyActive = false;
        isWorkActive = false;
        // Execute the function when the button is active
        button.classList.add('active_filter'); // Apply active styling
    } else {
        // Execute another function or no function when the button is not active
        removeActiveStyles()
    }
}

// add clicked function on work filter button


function toggleWork() {
    const button = document.getElementById('WorkBtn');

    // Toggle the state
    isWorkActive = !isWorkActive;

    if (isWorkActive) {
        removeActiveStyles()
        isFoodActive = false;
        isMoneyActive = false;
        isHousingActive = false;

        // Execute the function when the button is active
        button.classList.add('active_filter'); // Apply active styling
    } else {
        // Execute another function or no function when the button is not active
        removeActiveStyles()
    }
}

function clearAll() {
    document.querySelectorAll('.filterbtn').forEach(button => {
        button.classList.remove('active_filter');
    });
}
function applyFilter() {
    var filter = document.getElementById("filtergroup");
    filter.style.display = "none"

    var activeCategory = document.getElementById("categories").querySelector(".active_filter")
    if (activeCategory !== null) {
        category = activeCategory.value.toLowerCase()
        displayCardsDynamically("resources", category, null)
        console.log(category)

    } else {
        displayCardsDynamically("resources", null, null)
    }


}

// search bar fucntion
// 1. get search bar with id
// 2. add search bar onclick
// 2.1 in onclick, get the input value with id
// 2.2 use dynamicDisplay func to search and display

var searchIcon = document.getElementById("basic-addon1")
searchIcon.addEventListener("click", function () {
    var searchInput = document.getElementById("searchInput")
    if (searchInput !== null) {
        searchInput = [searchInput.value.toLowerCase()]
        displayCardsDynamically("resources", null, searchInput)
        console.log(searchInput)

    }
    else {
        displayCardsDynamically("resources", null, searchInput)
    }
})



const mapViewButton = document.getElementById('map-view-fab');
let isMapView = true;

mapViewButton.addEventListener('click', function () {
    if (isMapView) {
        // Switch to List View
        mapViewButton.textContent = 'List View';
        // Add code to switch to the list view here
        // 1. url to main.html
        // 2. icon to "List"
    } else {
        // Switch to Map View
        mapViewButton.textContent = 'Map View';
        // Add code to switch to the map view here
        // 1. url to map.html
        // 2. icon to "Map"
    }
    isMapView = !isMapView;
});


// Function to read the quote of the day from Firestore "quotes" collection
// Input param is the String representing the day of the week, aka, the document name
function readMessage(day) {
    db.collection("testing").doc(day)                                                      //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(dayInfo => {                                                               //arrow notation
            console.log("current document data: " + dayInfo.data().message)
            quoteOfTheDay = dayInfo.data().message                          //.data() returns data object
            document.getElementById("quote-goes-here").innerHTML = quoteOfTheDay;      //using javascript to display the data on the right place

            //Here are other ways to access key-value data fields
            //$('#quote-goes-here').text(dayDoc.data().quote);         //using jquery object dot notation
            //$("#quote-goes-here").text(dayDoc.data()["quote"]);      //using json object indexing
            //document.querySelector("#quote-goes-here").innerHTML = dayDoc.data().quote;
        })
}
readMessage("monday");        //calling the function



// ---------------------------------------------------

function writeResources() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("resources");

    hikesRef.add({
        code: "BBY01",
        name: "Greater Vancouver Food Bank", //replace with your own city?
        city: "Burnaby",
        province: "BC",
        desciption: "Each month we provide healthy food to around 16,000 individuals and families in need and 138 Community Agency Partners across Vancouver, Burnaby, New Westminster, and the North Shore. Our mission is to provide healthy food to those in need.",

        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    hikesRef.add({
        code: "AM01",
        name: "Food Stash Foundation", //replace with your own city?
        city: "Anmore",
        province: "BC",
        desciption: "The gift of family food baskets is one that continues to give past it’s initial generous donation. Loaded with nutritious foods – staples like grains, beans, oil and more – it fills hungry bellies with all the right stuff. Not only is this food basket saving lives, but also preserving futures – particularly for the youngest girls and boys.",

        last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
    });
}


//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("resourceCardTemplatae"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 

    db.collection(collection).get()   //the collection called "hikes"
        .then(allResources => {
            //var i = 1;  //Optional: if you want to have a unique ID for each hike
            allResources.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;       // get value of the "name" key
                var details = doc.data().desciption;  // get value of the "details" key
                var resourceCode = doc.data().code;    //get unique ID to each hike to be used for fetching right image
                let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-img-bottom').src = `./images/${resourceCode}.jpg`; //Example: NV01.jpg

                //Optional: give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery, Example: "hikes-go-here"
                // ----------------------------------------------
                // document.getElementById(collection + "-go-here").appendChild(newcard);
                
                //i++;   //Optional: iterate variable to serve as unique ID
            })
        })
}

displayCardsDynamically("resources");  //input param is the name of the collection

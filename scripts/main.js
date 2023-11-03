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
            console.log("current document data: " + dayInfo.data())
            quoteOfTheDay = dayInfo.data().quote                          //.data() returns data object
            document.getElementById("quote-goes-here").innerHTML = quoteOfTheDay;      //using javascript to display the data on the right place

            //Here are other ways to access key-value data fields
            //$('#quote-goes-here').text(dayDoc.data().quote);         //using jquery object dot notation
            //$("#quote-goes-here").text(dayDoc.data()["quote"]);      //using json object indexing
            //document.querySelector("#quote-goes-here").innerHTML = dayDoc.data().quote;
        })
}
readMessage("monday");        //calling the function



// ---------------------------------------------------

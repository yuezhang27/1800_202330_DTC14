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
// Data in Firebase
function writeResources() {
    //define a variable for the collection you want to create in Firestore to populate data
    var resourcesRef = db.collection("resources");

    resourcesRef.add({
        code: "BBY01",
        name: "Greater Vancouver Food Bank",
        city: "Burnaby",
        province: "BC",
		description: "Each month we provide healthy food to around 16,000 individuals and families in need and 138 Community Agency Partners across Vancouver, Burnaby, New Westminster, and the North Shore. Our mission is to provide healthy food to those in need.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    resourcesRef.add({
        code: "BBY01",
        name: "Greater Vancouver Food Bank", //replace with your own city?
        city: "Burnaby",
        province: "BC",
		description: "Each month we provide healthy food to around 16,000 individuals and families in need and 138 Community Agency Partners across Vancouver, Burnaby, New Westminster, and the North Shore. Our mission is to provide healthy food to those in need.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    resourcesRef.add({
        code: "BBY01",
        name: "Greater Vancouver Food Bank", //replace with your own city?
        city: "Burnaby",
        province: "BC",
		description: "Each month we provide healthy food to around 16,000 individuals and families in need and 138 Community Agency Partners across Vancouver, Burnaby, New Westminster, and the North Shore. Our mission is to provide healthy food to those in need.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
}

writeResources();
const mapViewButton = document.getElementById('map-view-fab');
let isMapView = true;
var currentUser;


function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid); //global

            displayCardsDynamically("resources", null)
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
        mapViewButton.textContent = 'List View';
    } else {
        // Switch to Map View
        mapViewButton.textContent = 'Map View';
    }
    isMapView = !isMapView;
});





// ---------------------------------------------------
// Data in Firebase
// commented out becasue it keeps printing more entires in database
// function writeResources() {
//     //define a variable for the collection you want to create in Firestore to populate data
//     var resourcesRef = db.collection("resources");

//     resourcesRef.add({
//         code: "foodbank1",
//         name: "Greater Vancouver Food Bank",
//         category: "food",
//         city: "Vancouver",
//         province: "BC",
//         description: "A non-profit organization committed to addressing food insecurity in the community. Through various distribution centers, they provide nutritious food to individuals and families in need, fostering a collaborative approach with local partners to maximize their impact on hunger relief.",
//         location: "8345 Winston Street Burnaby, BC V5A 2H3",
//         contactPhone: "(604) 876-3601",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
//     });
//     resourcesRef.add({
//         code: "foodbank2",
//         name: "Richmond Food Bank Society", 
//         category: "food",
//         city: "Vancouver",
//         province: "BC",
//         description: "A non-profit organization committed to eradicating hunger in the Richmond community. They operate distribution centers, offering essential food assistance to individuals and families while collaborating with local partners to create a comprehensive solution to food insecurity.",
//         location: "5800 Cedarbridge Way #100, Richmond, BC V6X 2A7",
//         contactPhone: "(604) 271-5609",
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
//     });
// resourcesRef.add({
//     code: "NV01",
//     name: "North Vancouver Food Bank", //replace with your own city?
//     city: "North Vancouver",
//     province: "BC",
// 	description: "Each month we provide healthy food to around 16,000 individuals and families in need and 138 Community Agency Partners across Vancouver, Burnaby, New Westminster, and the North Shore. Our mission is to provide healthy food to those in need.",
//     last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
// });
// }

// adding real data to firebase 
function writeResources(){
    var resourcesRef = db.collection("resources");
// categoty: food
    resourcesRef.add({
        category: "food",
        code: "harverst_project_nv",
        name: "Harvest Project",
        city: "North Vancouver",
        contactPhone: "(604)-983-9488",
        description: "Supports North Shore residents facing challenges like job loss, health issues, or family loss. Offers coaching, grocery/clothing support, and information services. Emergency food assistance available",
        description_detail: "Assists North Shore residents who are experiencing challenging life circumstances such as a job loss, divorce, emotional and physical health issues, or death of a family member. Provides one-to-one coaching/mentoring, a grocery support program, clothing support program, and information and referral services aimed at empowering people to take positive steps in their lives. Also offers an emergency food program in partnership with St Andrew's United Church; see that listing for details. Proof of North Shore residence is required. Accepts donations of clothing and groceries; drop by during business hours, and then phone reception to receive the items. Hours are 10 am to 4 pm Tuesday to Friday, and 10 am to 2 pm on Saturdays; an appointment is required. Nonprofit society, registered charity.",
        province: "BC",
        location: "1073 Roosevelt Crescent, North Vancouver, V7P 1M4 BC",
        lat: 49.321970,
        lng: -123.104940,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    resourcesRef.add({
        category: "food",
        code: "GVFB_distribution_site-NV",
        name: "GVFB Distribution Site - North Vancouver",
        city: "North Vancouver",
        contactPhone: "(604)-876-3601",
        description: "Distributes 10-12 weekly food items to North Vancouver residents in need. Requires government ID, proof of address, and one year in Canada for international students. Provides photo membership cards for access. Specialized nutrition programs for families with children and seniors",
        description_detail:"Provides approximately 10 to 12 food items per client per week to residents of North Vancouver who are experiencing food insecurity. To access services, registration with government-issued identification (ID) for each family member (expired ID and photocopies stamped from the welfare office are acceptable), as well as proof of address for the household is required. International students are required to have been in Canada for at least one year to be eligible for services. Clients will receive a photo membership card that allows them to access food from any of the GVFB distribution sites. Also offers specialized nutrition supplement programs for families with children ages birth to 12, and seniors",
        
        province: "BC",
        location: "225 East 2nd Street, North Vancouver, V7M 1C9",
        lat: 49.314670,
        lng: -123.082470,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "food",
        code: "Loving_spoonful-VAN",
        name: "A Loving Spoonful",
        city: "Vancouver",
        contactPhone: "(604)-682-6325",
        description: "A Loving Spoonful is a volunteer-driven, non-partisan Society that provides free, nutritious meals to people living with HIV and co-existing illness in Metro Vancouver and the surrounding areas.",
        description_detail:"A Loving Spoonful is a volunteer-driven, non-partisan Society that provides free, nutritious meals to people living with HIV and co-existing illness in Metro Vancouver and the surrounding areas.Provides free nutritious meals and groceries to individuals and families living with HIV/AIDS and co-existing illness in Metro Vancouver, based on medical need. Meals and groceries are available for pick-up or delivery. Physician referral required. Office hours are 9 am to 5 pm Monday to Friday. Nonprofit society, registered charity.",
        
        province: "BC",
        location: "1449 Powell Street, Vancouver, V5L 1G8 BC",
        lat: 49.283440,
        lng: -123.073070,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "food",
        code: "GVFB_distribution_site-NV",
        name: "GVFB Distribution Site - Vancouver",
        city: "Vancouver",
        contactPhone: "(604)-876-3601",
        description: "Distributes 10-12 weekly food items to North Vancouver residents in need. Requires government ID, proof of address, and one year in Canada for international students. Provides photo membership cards for access. Specialized nutrition programs for families with children and seniors.",
        description_detail:"Provides approximately 10 to 12 food items per client per week to residents of Vancouver who are experiencing food insecurity. To access services, registration with government-issued identification (ID) for each family member (expired ID and photocopies stamped from the welfare office are acceptable), as well as proof of address for the household is required. International students are required to have been in Canada for at least one year to be eligible for services. Clients will receive a photo membership card that allows them to access food from any of the GVFB distribution sites. Also offers specialized nutrition supplement programs for families with children ages birth to 12, and seniors.",
        
        province: "BC",
        location: "3454 Lougheed Highway, Vancouver, V5M 2A4 BC",
        lat: 49.262780,
        lng: -123.028740,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "food",
        code: "Food_access_project-VAN",
        name: "Food Access Project-PIRS",
        city: "Vancouver",
        contactPhone: "(604)-298-5888",
        description: "Distributes weekly healthy food hampers and care packages to low-income families with children. Available through direct delivery. Outreach support workers provide additional assistance, including mental wellness and parenting support, children's resources, and help accessing government financial aid.",
        description_detail:"Distributes weekly healthy food hampers and care packages to families with children living in a low-income bracket or on social assistance; service available by direct delivery or pick-up at food hub locations in Burnaby (Journey Home, 10:30 am to 1 pm Thursdays) and Vancouver (South Vancouver Family Place, 10:30 am to 2:30 pm Mondays). Outreach support workers connect with families to offer additional help as needed, including mental wellness and parenting support, children's resources, and access to government financial aid. Developed as an emergency response program to help reduce the inflation of food insecurity among the most vulnerable PIRS clients due to the pandemic.",
        
        province: "BC",
        location: "1874 Kingsway, Vancouver, V5N 2S7 BC",
        lat: 49.245880,
        lng: -123.066960,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "food",
        code: "Aboriginal_Front_Door_society-VAN",
        name: "Aboriginal Front Door Society",
        city: "Vancouver",
        contactPhone: "(604)-428-1908",
        description: "Creates a supportive space for Downtown Eastside's Aboriginal and non-Aboriginal community, emphasizing traditional healing. Offers Elder/family cultural guidance, community meetings, and social activities. Provides culturally safe referrals to drug and alcohol treatment. The Common Bowl Food Truck serves coffee, meals, and food hampers as supplies permit.",
        description_detail:"Offers a supportive space where Aboriginal and non-Aboriginal people in the Downtown Eastside can reconnect with traditional approaches to community and healing. Services include Elder/family cultural guidance, community meetings, social/recreational activities, and culturally safe referrals to drug and alcohol treatment. The Common Bowl Food Truck serves coffee, meals, and food hampers as supplies permit; operating hours are 9 am to 5 pm Monday to Friday. Office hours are 8 am to 12 noon and 1 pm to 4 pm Monday to Friday. Nonprofit society.",
        
        province: "BC",
        location: "384 Main Street, Vancouver, V6A 2T1 BC",
        lat: 49.281814,
        lng: -123.099647,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    // categoty: housing
    resourcesRef.add({
        category: "housing",
        code: "Aboriginal_Shelter-VAN",
        name: "Aboriginal Shelter-VAFCS",
        city: "Vancouver",
        contactPhone: "(604)-682-5556",
        description: "Emergency low-barrier shelter for men, 19 and older, accommodating up to 52 individuals. Opens at 3 pm, first-come, first-served. Curfew at 11 pm, closes at 10 am. Provides hot dinner, breakfast snack, and hygiene supplies.",
        description_detail:"An emergency low-barrier shelter (with mats and blankets) that accommodates up to 52 men ages 19 and over. Open at 3 pm on a first-come, first-served basis; curfew is at 11 pm and shelter closes at 10 am. Provides a hot dinner around 6:15 pm, and a sandwich/snack for breakfast after 8 am. Also provides personal hygiene supplies. Storage available for 50 lbs or less of personal items; no space for storage of carts or bikes. Zero tolerance for violence or use of alcohol or illegal drugs. Pets are permitted in kennels on a case-by-case basis; dogs must be muzzled. Wheelchair accessible. Open to everyone. Receives funding from BC Housing and City of Vancouver.",
        
        province: "BC",
        location: "201 Central Street, Vancouver, V6A 4A9 BC",
        lat: 49.271198,
        lng: -123.098869,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "housing",
        code: "Powell_place_shelter-VAN",
        name: "Powell Place Emergency Shelter for Women",
        city: "Vancouver",
        contactPhone: "(604)-606-0403",
        description: "Provides year-round low-barrier, 24-hour emergency shelter for 52 women, including transgender women, at risk of homelessness. Focuses on autonomy, independence, and skill-building.",
        description_detail:"Provides year-round low-barrier, 24-hour emergency shelter for 52 women (including transgender women) experiencing, or at risk of homelessness. Women are supported in retaining their autonomy, regaining their independence, and building skills to move forward in life. Services include three meals per day, one-on-one support and advocacy, crisis intervention, referrals, housing search assistance, and accompaniment to appointments. Health-related services include 24-hour access to bed rest, medication storage, home nursing and home care support through referral, oxygen tank storage, and harm reduction supplies (condoms, new needle distribution, information). Referral accepted from self or other. Does not accept pets. Not wheelchair accessible.",
        
        province: "BC",
        location: "329 Powell Street, Vancouver, V6A 1G5 BC",
        lat: 49.283357,
        lng: -123.096396,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
     })
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // // category: money
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // // category: work
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // resourcesRef.add({
    //     category: "",
    //     code: "",
    //     name: "",
    //     city: "",
    //     contactPhone: "",
    //     description: "",
    //     description_detail:"",
        
    //     province: "",
    //     location: "",
    //     lat: 1,
    //     lng: 1,
    //     last_updated: firebase.firestore.FieldValue.serverTimestamp()
    // });
    // // ------------end or resources-------------------------------------
}



// Time Stamp to xx h: xx min : xx s
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

// display content according to the filter and database
function displayCardsDynamically(collection, category) {
    let cardTemplate = document.getElementById("resultTemplate"); // Retrieve the HTML element with the ID "resultTemplate" and store it in the cardTemplate variable. 
    let gallery = document.getElementById(collection + "-go-here");

    // Clear existing content
    gallery.innerHTML = "";

    let query = db.collection(collection)

    if (category !== null) {
        query = query.where("category", "==", category)
    }
    query.get().then(allResources => {
            allResources.forEach(doc => { 
                var title = doc.data().name;
                var description = doc.data().description;
                var updateTime = doc.data().last_updated;
                realTime = formatTimestamp(updateTime);
                var resourceCode = doc.data().code;
                //get ID to each resource to be used for fetching right image
                var docID = doc.id;
                let newcard = cardTemplate.content.cloneNode(true); 


                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.text-muted').innerHTML = "Last update: " + realTime;
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


let isFoodActive = false;
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





function toggleFood() {
    removeActiveStyles();
    const button = document.getElementById('FoodBtn');

    // Toggle the state
    isFoodActive = !isFoodActive;

    if (isFoodActive) {
        // Execute the function when the button is active
        displayCardsDynamically("resources", "food")
        button.classList.add('active_filter'); // Apply active styling
    } else {
        // Execute another function or no function when the button is not active
        displayCardsDynamically("resources", null)
    }
}

// add clicked function on money filter button
let isMoneyActive = false;

function toggleMoney() {
    removeActiveStyles()
    const button = document.getElementById('MoneyBtn');

    // Toggle the state
    isMoneyActive = !isMoneyActive;

    if (isMoneyActive) {
        // Execute the function when the button is active
        displayCardsDynamically("resources", "money")
        button.classList.add('active_filter'); // Apply active styling
    } else {
        // Execute another function or no function when the button is not active
        displayCardsDynamically("resources", null)
    }
}

// add clicked function on housing filter button
let isHousingActive = false;

function toggleHousing() {
    removeActiveStyles()
    const button = document.getElementById('HousingBtn');

    // Toggle the state
    isHousingActive = !isHousingActive;

    if (isHousingActive) {
        // Execute the function when the button is active
        displayCardsDynamically("resources", "housing")
        button.classList.add('active_filter'); // Apply active styling
    } else {
        // Execute another function or no function when the button is not active
        displayCardsDynamically("resources", null)
    }
}

// add clicked function on work filter button
let isWorkActive = false;

function toggleWork() {
    removeActiveStyles()
    const button = document.getElementById('WorkBtn');

    // Toggle the state
    isWorkActive = !isWorkActive;

    if (isWorkActive) {
        // Execute the function when the button is active
        displayCardsDynamically("resources", "work")
        button.classList.add('active_filter'); // Apply active styling
    } else {
        // Execute another function or no function when the button is not active
        displayCardsDynamically("resources", null)
    }
}



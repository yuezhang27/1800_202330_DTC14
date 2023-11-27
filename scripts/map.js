const mapViewButton = document.getElementById('map-view-fab');
let map;
function showMap() {
  //-----------------------------------------
  // Define and initialize basic mapbox data
  //-----------------------------------------
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbWNoZW4zIiwiYSI6ImNsMGZyNWRtZzB2angzanBjcHVkNTQ2YncifQ.fTdfEXaQ70WoIFLZ2QaRmQ';
  map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/streets-v11', // Styling URL
    center: [-123.1207, 49.2827], // Starting position
    zoom: 10 // Starting zoom
  });
  // getting user location to use for center
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // settinbg user lat and lng
      const { latitude, longitude } = position.coords;
      // setting new map cener to user location
      map.setCenter([longitude, latitude]);
    },
    (error) => {
      console.log("unable to retrieve user location")
    }
  );




  // Add user controls to map
  map.addControl(new mapboxgl.NavigationControl());

  //------------------------------------
  // Listen for when map finishes loading
  // then Add map features 
  //------------------------------------
  map.on('load', () => {

    // Defines map pin icon for events
    map.loadImage(
      'https://cdn.iconscout.com/icon/free/png-256/pin-locate-marker-location-navigation-16-28668.png',
      (error, image) => {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage('eventpin', image); // Pin Icon

        // READING information from "resources" collection in Firestore
        db.collection('resources').get().then(allResources => {
          const features = []; // Defines an empty array for information to be added to

          allResources.forEach(doc => {
            lat = doc.data().lat;
            lng = doc.data().lng;
            console.log(lat, lng);
            coordinates = [lng, lat];
            console.log(coordinates);
            // Coordinates
            event_name = doc.data().name; // Event Name
            preview = doc.data().description; // Text Preview
            resourceCode = doc.data().code; // Image
            // Pushes information into the features array
            // in our application, we have a string description of the resources
            features.push({
              'type': 'Feature',
              'properties': {
                'description': `<strong>${event_name}</strong><p>${preview}</p> <br> 
                <a href="/each_info.html?docID=${doc.id}" target="_self" title="Opens in a new window">More Info</a> <br>
                <img src="./images/${resourceCode}.jpg" alt="Resource Image" style="max-width: 100%; max-height: 150px;">`
              },
              'geometry': {
                'type': 'Point',
                'coordinates': coordinates
              }
            });
          });

          // Adds features as a source of data for the map
          map.addSource('places', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': features
            }
          });

          // Creates a layer above the map displaying the pins
          // by using the sources that was just added
          map.addLayer({
            'id': 'places',
            'type': 'symbol',
            'source': 'places',
            'layout': {
              'icon-image': 'eventpin', // Pin Icon
              'icon-size': 0.1, // Pin Size
              'icon-allow-overlap': true // Allows icons to overlap
            }
          });

          //-----------------------------------------------------------------------
          // Add Click event listener, and handler function that creates a popup
          // that displays info from "resources" collection in Firestore
          //-----------------------------------------------------------------------
          map.on('click', 'places', (e) => {
            // Extract coordinates array.
            // Extract description of that place
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(description)
              .addTo(map);
          });

          //-----------------------------------------------------------------------
          // Add mousenter event listener, and handler function to 
          // Change the cursor to a pointer when the mouse is over the places layer.
          //-----------------------------------------------------------------------
          map.on('mouseenter', 'places', () => {
            map.getCanvas().style.cursor = 'pointer';
          });

          // Defaults cursor when not hovering over the places layer
          map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
          });
        });
      }
    );

    // Add the image to the map style.
    map.loadImage(
      'https://cdn-icons-png.flaticon.com/512/61/61168.png',
      (error, image) => {
        if (error) throw error;

        // Add the image to the map style with width and height values
        map.addImage('userpin', image, { width: 10, height: 10 });

        // Adds user's current location as a source to the map
        navigator.geolocation.getCurrentPosition(position => {
          const userLocation = [position.coords.longitude, position.coords.latitude];
          console.log(userLocation);
          if (userLocation) {
            map.addSource('userLocation', {
              'type': 'geojson',
              'data': {
                'type': 'FeatureCollection',
                'features': [{
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': userLocation
                  },
                  'properties': {
                    'description': 'Your location'
                  }
                }]
              }
            });

            // Creates a layer above the map displaying the user's location
            map.addLayer({
              'id': 'userLocation',
              'type': 'symbol',
              'source': 'userLocation',
              'layout': {
                'icon-image': 'userpin', // Pin Icon
                'icon-size': 0.05, // Pin Size
                'icon-allow-overlap': true // Allows icons to overlap
              }
            });

            // Map On Click function that creates a popup displaying the user's location
            map.on('click', 'userLocation', (e) => {
              // Copy coordinates array.
              const coordinates = e.features[0].geometry.coordinates.slice();
              const description = e.features[0].properties.description;

              new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
            });

            // Change the cursor to a pointer when the mouse is over the userLocation layer.
            map.on('mouseenter', 'userLocation', () => {
              map.getCanvas().style.cursor = 'pointer';
            });

            // Defaults
            // Defaults cursor when not hovering over the userLocation layer
            map.on('mouseleave', 'userLocation', () => {
              map.getCanvas().style.cursor = '';
            });
          }
        });
      }
    );
  });
}

// Call the function to display the map with the user's location and event pins
showMap();

// map view button
mapViewButton.addEventListener('click', function () {
  if (isMapView) {
    // Switch to List View
    mapViewButton.textContent = 'Map View';
    console.log("list")
  } else {
    // Switch to Map View
    mapViewButton.textContent = 'List View';
    window.location.pathname = "./main.html"
    console.log("map")
  }
  isMapView = !isMapView;
});

// functiom to save last page data to loval storage
function saveLastPageAndRedirect(){
  let params = new URL(window.location.href)
  let currentURL = window.location.href;
  let lastPage = params.pathname;
  localStorage.setItem('lastPage', lastPage);
  console.log('Stored in local storage:', currentURL);
}
saveLastPageAndRedirect()


// functions for filter buttons
function toggleFilter() {
  var x = document.getElementById("filtergroup");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function removeActiveStyles() {
  document.querySelectorAll('.filterbtn').forEach(button => {
      button.classList.remove('active_filter');
  });
}

let isFoodActive = false;
let isMoneyActive = false;
let isHousingActive = false;
let isWorkActive = false;

// click function for food filter
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

// click function for money filter
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

// click function for money filter
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

// click function for work filter
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

// click fcuntion for clear all button
function clearAll(){
  document.querySelectorAll('.filterbtn').forEach(button => {
      button.classList.remove('active_filter');
  });
}

// confirm button applies filter
function applyFilter(){
  var filter = document.getElementById("filtergroup");
  filter.style.display = "none"

  var activeCategory = document.getElementById("categories").querySelector(".active_filter")
  if (activeCategory !== null){
      category = activeCategory.value.toLowerCase()
      updateMapWithFilteredData(category)
      console.log(category)

  }else{
    updateMapWithFilteredData(null)
  }
}

function updateMapWithFilteredData(category) {
  // Clear existing map layers and sources
  if (map.getLayer('places')) {
    map.removeLayer('places');
  }
  if (map.getSource('places')) {
    map.removeSource('places');
  }

  // Fetch filtered data from Firestore based on the selected category
  if (category !== null) {
    db.collection('resources').where('category', '==', category).get().then(filteredResources => {
      const filteredFeatures = [];// empty array for the new filtered resources

      filteredResources.forEach(doc => {
        lat = doc.data().lat;
        lng = doc.data().lng;
        console.log(lat, lng);
        coordinates = [lng, lat]; // location
        console.log(coordinates);
        event_name = doc.data().name; // Event Name
        preview = doc.data().description; // Text Preview
        resourceCode = doc.data().code; // Image
        
        // enters information into filteredResources array
        filteredFeatures.push({
          'type': 'Feature',
            'properties': {
              'description': `<strong>${event_name}</strong><p>${preview}</p> <br> 
              <a href="/each_info.html?docID=${doc.id}" target="_self" title="Opens in a new window">More Info</a> <br>
              <img src="./images/${resourceCode}.jpg" alt="Resource Image" style="max-width: 100%; max-height: 150px;">`
            },
            'geometry': {
              'type': 'Point',
              'coordinates': coordinates
            }
        });

      });

      // Add filtered features as a source of data for the map
      map.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': filteredFeatures
        }
      });

      // Create a layer above map displaying pins with filtered sources
      map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
          'icon-image': 'eventpin', // Pin Icon
          'icon-size': 0.1, // Pin Size
          'icon-allow-overlap': true // Allow icon overlap
        }
      });
    });
  } else {
    // If no category is selected, fetch all data from Firestore
    db.collection('resources').get().then(allResources => {
      const features = [];

      allResources.forEach(doc => {
        lat = doc.data().lat;
        lng = doc.data().lng;
        console.log(lat, lng);
        coordinates = [lng, lat];
        console.log(coordinates);
        // Coordinates
        event_name = doc.data().name; // Event Name
        preview = doc.data().description; // Text Preview
        resourceCode = doc.data().code; // Image
        // Pushes information into the features array
        // in our application, we have a string description of the resources
        features.push({
          'type': 'Feature',
          'properties': {
            'description': `<strong>${event_name}</strong><p>${preview}</p> <br> 
            <a href="/each_info.html?docID=${doc.id}" target="_self" title="Opens in a new window">More Info</a> <br>
            <img src="./images/${resourceCode}.jpg" alt="Resource Image" style="max-width: 100%; max-height: 150px;">`
          },
          'geometry': {
            'type': 'Point',
            'coordinates': coordinates
          }
        });
      });

      // Add features as a source of data for the map
      map.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': features
        }
      });

      // Create a layer above the map displaying the pins using the sources
      map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
          'icon-image': 'eventpin',
          'icon-size': 0.1,
          'icon-allow-overlap': true
        }
      });
    });
  }
}
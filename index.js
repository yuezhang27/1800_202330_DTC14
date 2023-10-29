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

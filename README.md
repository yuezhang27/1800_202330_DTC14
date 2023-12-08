# Project Title

## 1. Project Description
CompassCare is a community resource finding app that focuses on allowing users to search for what they need comfortably. 

## 2. Names of Contributors

* Hi, my name is Kim Yue Zhang! I am excited to start this journey of creating a web application!
* Hi, my name is Caroline! I am excited to start this project!
* Hi, my name is Matthew! I would like to pass this course 
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)
* Google font and Google icon
* Google Map API

## 4. Complete setup/installion/usage
How do you start using our application?
Here’s how to get started:

### Getting Started

**Visit the Web-based Application:** <https://dtc-14-csource.web.app/index.html>

### User Login

* **Logging In:** Users can log in using their emails and password. This will bring users to the main page where community resources are dynamically loaded from Firebase.

### Navigating the Application

* **Dynamically Loaded List View:** Resources are displayed in a list view, sourced from the 'resources' collection in Firebase. Clicking on a resource opens a detailed view with more information and reviews.
* **Map View:** By clicking the map view button, users can see resources displayed by location on a map. Selecting a marker shows a preview, and users can dive deeper into details as needed.
* **Filter and Search Bar:** Users can filter resources (e.g., food banks) and use the search bar to find specific resources.
* **Bookmarking:** Users can bookmark resources for later reference. These bookmarks are updated in the Firebase 'user' collection.
* **Review System:** After using a resource, users can leave reviews and ratings, which are stored in Firebase under the resource's document.
* **Profile Management:** Users can personalize their profiles by editing personal information and changing profile pictures, with data stored in Firebase.

## 5. Known Bugs and Limitations
### Bugs
* **Profile Image Error for New Users:** Newly created users who have not yet edited their profile to change their picture may encounter an error message stating, "Image not found in the database." Despite this error, the default image is still displayed. This bug is currently under investigation and we aim to resolve it.

### Limitations
* **Basic User Profile Logic:** The user profile feature requires users to input personal information such as age. However, this information is not used in any subsequent processes or features. This may lead to unnecessary data collection, and we are now considering ways to make better use of this information.

* **Lack of Fuzzy Search Capability:** Currently, the app does not support fuzzy search. Users' search queries must exactly match the 'searchType' field in the "resources" collection of the database. This limitation may affect the ease of finding resources, especially when users are unsure of the exact terms used in the database.

## 6. Features for Future
What we'd like to build in the future:

* **Enhanced Profile Page:** We aim to develop a more robust and comprehensive profile page. This includes adding functionality for users to add tags (e.g., 'age 25 and under') for more effective resource filtering.
* **Improved List Views Sorting:** We aim to enable users to sort list views based on various criteria, such as proximity, to facilitate easier resource location.
* **User Tagging System in Reviews:** We will implement a tagging system for users on review tasks, allowing them to tag resources with relevant descriptors.
* **Review Management:** Users will be able to delete their own reviews and view their past reviews, giving them greater control over their shared content.
* **Intuitive User Interface:** We will redesign the user interface to be more intuitive. For instance, relocating the help page to the hamburger menu instead of the footer bar for better accessibility.
* **Advanced Search Feature with Fuzzy Search:** We plan to implement an advanced search feature that includes fuzzy search capabilities, possibly transitioning from Firebase to MySQL for this functionality.
* **News/Events Feed Page:** Creating a customizable News/Events Feed page, tailored to user preferences, to keep users informed and engaged.
* **Refined Filtering Options:** Enhancing the filter feature to allow users to filter content by more specific tags, such as age and distance. This will utilize the information provided on user profiles to deliver a more personalized experience.
* **Redesign of Help Page:** We plan to redesign the help page to provide more useful information, thereby enhancing overall user support and improving the quality of our app.
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── .firebaserc                # Firebase configuration file
├── .gitignore                 # Git ignore file
├── 404.html                   # Landing page if hosting service is down
├── account.html               # User account page
├── bookmark.html              # User bookmark page
├── each_info.html             # HTML page containing detailed information
├── firebase.json              # Firebase configuration settings for app
├── firestore.indexes.json     # Firestore database indexes configuration
├── firestore.rules            # Rules and security configurations for the Firebase project
├── indexBefore.html           # Landing page displayed before user login
├── index.html                 # Help page for the app
├── login.html                 # User login page
├── main.html                  # HTML page for displaying main information
├── map.html                   # User map page
├── result.html                # HTML page displaying results
├── review.html                # User review page
├── template.html              # Template file
├── thanks.html                # HTML page displaying gratitude or thank you message
└── README.md                  # Project README file


It has the following subfolders and files:
├── .firebase                          # Required for hosting our web app
├── images                             # Folder for images
    /Aboriginal_Front_Door_society-VAN.jpg       # Screenshot from Google Map
    /Aboriginal_Shelter-VAN.jpg                  # Screenshot from Google Map
    /BCCDA-VAN.jpg                                # Screenshot from Google Map
    /bookmark-check.svg                           # Open-licensed SVG Vector and Icons
    /bookmarks.svg                                # Open-licensed SVG Vector and Icons
    /Burnaby_Rent_Bank-BR.jpg                     # Screenshot from Google Map
    /chevron-left.svg                             # Open-licensed SVG Vector and Icons
    /default-profile-img.jpg                      # Screenshot from Google Map
    /filter.svg                                   # Open-licensed SVG Vector and Icons
    /foodbank1.jpg                                # Picture from Unsplash
    /foodbank2.jpg                                # Picture from Unsplash
    /Food_access_project-VAN.jpg                  # Screenshot from Google Map
    /GVFB_distribution_site-NV.jpg                # Screenshot from Google Map
    /harverst_project_nv.jpg                      # Screenshot from Google Map
    /help.svg                                     # Open-licensed SVG Vector and Icons
    /house.svg                                    # Open-licensed SVG Vector and Icons
    /Imouto_Housing-VAN.jpg                       # Screenshot from Google Map
    /logo.png                                     # Logo image
    /Loving_spoonful-VAN.jpg                      # Screenshot from Google Map
    /map.svg                                      # Open-licensed SVG Vector and Icons
    /New_Relationship_Trust-NV.jpg                # Screenshot from Google Map
    /On_Reserve_Income_Assistance-VAN.jpg         # Screenshot from Google Map
    /person.svg                                   # Open-licensed SVG Vector and Icons
    /pin.svg                                      # Open-licensed SVG Vector and Icons
    /plus.svg                                     # Open-licensed SVG Vector and Icons
    /Powell_place_shelter-VAN.jpeg                # Screenshot from Google Map
    /Powell_place_shelter-VAN.jpg                 # Screenshot from Google Map
    /realfilter.svg                               # Open-licensed SVG Vector and Icons
    /Rent_Bank-VAN.jpg                            # Screenshot from Google Map
    /search.svg                                   # Open-licensed SVG Vector and Icons
    /searchicon.png                               # Screenshot from Google Map
    /Seniors_Homelessness-NV.jpg                  # Screenshot from Google Map
    /SEREENAS_HOUSING-VAN.jpg                     # Screenshot from Google Map
    /Service_BC_Centre-MR.jpg                     # Screenshot from Google Map
    /Service_BC_Centre-SQ.jpg                     # Screenshot from Google Map
    /Service_Canada-VAN.jpg                       # Screenshot from Google Map
    /Service_Canada_Centre-NV.jpg                 # Screenshot from Google Map
    /welocme background.jpg                       # Screenshot from Google Map
    /Work_BC-BR.jpg                               # Screenshot from Google Map
    /Work_BC_Centre-VAN.jpg                       # Screenshot from Google Map




├── scripts                            # Folder for scripts
    /account.js          # Handles user account page functionality
    /authentication.js   # Manages user authentication
    /bookmark.js         # Manages bookmark page functionality
    /each_info.js        # Manages each_info page functionality
    /firebaseAPI.js      # Handles Firebase API interactions
    /main.js             # Contains main page functionalities
    /map.js              # Manages mapbox functionality
    /review.js           # Handles review page functionalities
    /script.js           # Contains general utility scripts
    /skeleton.js         # Provides basic script skeletons
    /writeResource.js    # Manages resource writing functionalities

├── styles                             # Folder for styles
    /account         # Styling for account page
    /bookmark        # Styling for bookmark page
    /each_info        # Styling for each_info page
    /index           # Styling for index page
    /info            # Styling for info page
    /main            # Styling for main page
    /map             # Styling for map page
    /review          # Styling for review page
    /style           # General style definitions
            
├── text                                # Folder for text
    /nav_after.html              # Navbar html when user is logged in
    /nav_before.html             # Navbar html when user is not logged in

```



function displarResourceInfo() {
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
        resoucrceDescription =  doc.data().description;
        
        // only populate title, and image
        document.getElementById( "review-card-title" ).innerHTML = resourceName;
        document.querySelector(".card-img-bottom").src = `./images/${resourceCode}.jpg`;
        // code below is broken version of code above
        // let imgEvent = document.querySelector( ".card-img-bottom" );
        // imgEvent.src = `./images/${resourceCode}.jpg`;
        document.querySelector('.description').innerHTML = resoucrceDescription;

    } );
}
displarResourceInfo();



// * When the user first visits the website, they are presented with all of the Kudos previously sent.
const renderKudos = function () {
    $.ajax({
        url: "/api/kudos",
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
}

// * Each Kudos displayed should have the name of the sender, name of the receiver, the title of the Kudo, and the body of the Kudo.
// * When the user clicks the `Give Kudo` button, the user will be given the option to select the sender and receiver as well as enter the title and body of a new Kudo.
// When the user creates a new Kudos, it should be stored in a MongoDB database. The page should then re-render all of the stored kudos onto the page.
// The Kudos model should take in the `ObjectId` for Users so that we know from whom the Kudos are coming and to whom the Kudos are going.
// https://arcane-falls-88518.herokuapp.com/
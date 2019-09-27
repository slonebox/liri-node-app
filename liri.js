//Create connections to the various packages required for the LIRI App to function
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

// var bandsInTown = new bandsInTown(keys.bandsInTown);

// var axios = new axios(keys.axios);

//Variables to hold the user inputs 

var action = process.argv[2];
var item = process.argv.slice(3).join(" ");

console.log(process.argv);

//Switch statement to manage the variety of API requests a user may make
switch (action) {
    case "concert-this":
        //concertThis(item);
        break;
    case 'spotify-this-song':
        console.log("Before Spotify " + item);
        spotifyThis(item);
        break;
    case "movie-this":
        //movieThis(item);
        break;
    case "do-what-it-says":
        //doWhat(item);
        break;
    default:
        console.log("Default case");
};

// function concertThis(input) {
//     console.log("You called the concertThis function!")
// };

function spotifyThis(input) {
    spotify.search(
        {
            type: "track",
            query: input,
            limit: 3
        },
        function (err, data) {
            if (err) {
                return console.log("Error occurred: " + err);
            } 
            console.log(data.tracks.items);
        });
};

    // function movieThis(input) {

    // };

    // function doWhat(input) {

    // };
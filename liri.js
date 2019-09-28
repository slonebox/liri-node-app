//Create connections to the various packages required for the LIRI App to function
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var divider = "____________________________\n";

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
            //Prints 3 songs' data to the console
            console.log("\nRESULTS");
            console.log(divider);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Preview: " + data.tracks.items[0].preview_url)
            console.log(divider);
            console.log("Song: " + data.tracks.items[1].name);
            console.log("Artist: " + data.tracks.items[1].artists[0].name);
            console.log("Album: " + data.tracks.items[1].album.name);
            console.log("Preview: " + data.tracks.items[1].preview_url);
            console.log(divider);
            console.log("Song: " + data.tracks.items[2].name);
            console.log("Artist: " + data.tracks.items[2].artists[0].name);
            console.log("Album: " + data.tracks.items[2].album.name);
            console.log("Preview: " + data.tracks.items[2].preview_url)
            console.log("")
        });
};

    // function movieThis(input) {

    // };

    // function doWhat(input) {

    // };
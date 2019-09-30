//Create connections to the various packages required for the LIRI App to function
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var axios = require('axios');
var bandsInTown = require('bandsintown')(bandsInTownID);
var divider = "____________________________\n";

var spotify = new Spotify(keys.spotify);
var bandsInTownID = new bandsInTown(keys.bandsInTownID);
// var bandsInTownID = new bandsIntown (bandsInTownID);

// var axios = new axios(keys.axios);

//Variables to hold the user inputs 

var action = process.argv[2];
var item = process.argv.slice(3).join(" ");

console.log(process.argv);

//Switch statement to manage the variety of API requests a user may make
switch (action) {
    case "concert-this":
        concertThis(item);
        break;
    case 'spotify-this-song':
        spotifyThis(item);
        break;
    case "movie-this":
        movieThis(item);
        break;
    case "do-what-it-says":
        doWhat();
        break;
    default:
        spotifyThis("The Sign");
};

function concertThis(input) {
    bandsInTown.getArtistEventList(input).then(function (events) {
        if (err) {
            throw console.log(err);
        }
        console.log(events);
    });
    console.log("You called the concertThis function!");
};

function spotifyThis(input) {
    spotify.search(
        {
            type: "track",
            query: input,
            limit: 10
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

function movieThis(input) {
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("\nRESULTS");
            console.log(divider);
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Plot: " + response.data.Plot);
            console.log("Starring: " + response.data.Actors);
            console.log(divider);
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};

function doWhat() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        } else {

            dataArr = data.split(",");

            if (dataArr[0] === "spotify-this-song") {
                spotifyThis(dataArr[1]);
            } else if (dataArr[0] === "movie-this") {
                movieThis(dataArr[1]);
            } else if (dataArr[0] === "concert-this") {
                concertThis(dataArr[1]);
            } else spotifyThis("The Sign by Ace of Base");

        }


    });

};


//Create connections to the various packages required for the LIRI App to function

require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var bandsInTown = new bandsInTown(keys.bandsInTown);

var axios = new axios(keys.axios);
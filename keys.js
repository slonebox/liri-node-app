console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsInTownID = process.env.bandsInTown_ID;

exports.axios = {
    id: process.env.AXIOS_ID
};
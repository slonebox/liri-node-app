# liri-node-app
Language Interpretation and Recognition Interface (LIRI) homework due September 26, 2019

# What It Does
LIRI is a command line application that uses a switch statement to accept and process four distinct commands:

    1) concert-this
    Uses the bandsintown npm to get data on upcoming concert dates for a user-input artist

    2) spotify-this-song
    Uses the spotify npm to search and get data of up to three songs corresponding to a user-input track name

    3) movie-this
    Uses the Axios npm to search and get data on a film based on a user-input title

    4) do-what-it-says
    Reads the contents of file random.txt, interprets its contents, and runs one of the three aforementioned functions based on that.

Each command is based on the third process argument variable. The search term is constituted by everything from the fourth process argument variable onward. 

# Sample Commands with Inputs
    e.g. "node liri.js spotify-this-song Thriller"
    e.g. "node liri.js movie-this Dances With Wolves"
    e.g. "node liri.js concert-this Andrew Bird"

# Technologies
LIRI is built in JavScript, and it relies on several npm's to function, including:
    - Axios
    - Bandsintown
    - dotenv
    - moment
    - node


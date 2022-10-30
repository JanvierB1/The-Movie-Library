// CREDITS
// button component from: https://tailwindcomponents.com/component/button-component-default
// modal component from: https://tailwindcomponents.com/component/two-very-simple-modals

var mainDiv = $('#main-div');
var bodyEl = $('body');
var searchBtn = $('#search-button')
var searchContainer = $('#search-modal-div')
var trackerBtn = $('.tracker-buttons')
var movieName
var movieTitle
var apiUrl = `https://imdb-api.com/en/API/SearchMovie/k_dh9vu8yk/${movieName}`
var nytRating
var trackerMovies = []

// IMDB API KEYS
// Justin: k_jisxuuy3
// Daniel: k_dh9vu8yk
// Melina: k_n3zrkqfm
// Janvier: 
// Joseph: 
// Zarrar: 

// NYTIMES API KEYS
// Justin: 52EHB16XvD2ETQbAtf2dd3sR3LC7drAM
// Zarrar: R0eFfTq42Mk2pofP6Ums8HKtAedFJequ
// Daniel: 
// Janvier: 
// Melina: 
// Joseph: 

var firstTime = true

// DATA FOR THE PERMANENT HOME PAGE
var curatedMovies = [
    FightClub = {
        title: "Fight Club",
        poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6757_AL_.jpg",
        imdb: "8.8",
        rotten: "79",
    },
    FullMetalJacket = {
        title: "Full Metal Jacket",
        poster: "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6757_AL_.jpg",
        imdb: "8.3",
        rotten: "90",
    },
    SpaceOdyssey = {
        title: "2001: A Space Odyssey",
        poster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6757_AL_.jpg",
        imdb: "8.3",
        rotten: "92",
    },
    Interstellar = {
        title: "Interstellar",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.6",
        rotten: "73",
    },
    MemoriesofMurder = {
        title: "Memories of Murder",
        poster: "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.1",
        rotten: "95",
    },
    Spiderman = {
        title: "Spider-man",
        poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
        imdb: "7.4",
        rotten: "90",
    },
    Parasite = {
        title: "Parasite",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.5",
        rotten: "96",
    },
    Pearl = {
        title: "Pearl",
        poster: "https://m.media-amazon.com/images/M/MV5BZTFkNmE5MjUtZDE1Yi00ZmQyLTk2YWUtN2EwODA1ZmNlOTA5XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6757_AL_.jpg",
        imdb: "7.2",
        rotten: "73",
    },
    TheTwoTowers = {
        title: "The Lord of the Rings: The Two Towers",
        poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.8",
        rotten: "95",
    },
    TheShining = {
        title: "The Shining",
        poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.4",
        rotten: "82",
    },
    Prisoners = {
        title: "Prisoners",
        poster: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.1",
        rotten: "81",
    },
    CitizenKane = {
        title: "Citizen Kane",
        poster: "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.3",
        rotten: "99",
    },
    ProjectAlmanac = {
        title: "Project Almanac",
        poster: "https://m.media-amazon.com/images/M/MV5BMTUxMjQ2NjI4OV5BMl5BanBnXkFtZTgwODc2NjUwNDE@._V1_Ratio0.6757_AL_.jpg",
        imdb: "6.3",
        rotten: "38",
    },
    RushHour = {
        title: "Rush Hour",
        poster: "https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg",
        imdb: "7",
        rotten: "61",
    },
    SeventeenAgain = {
        title: "17 Again",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTI1Mzg3N15BMl5BanBnXkFtZTcwMjYwNjAzMg@@._V1_Ratio0.6757_AL_.jpg",
        imdb: "6.4",
        rotten: "56",
    },
    ApocalypseNow = {
        title: "Apocalypse Now",
        poster: "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.5",
        rotten: "98",
    },
    Chinatown = {
        title: "Chinatown",
        poster: "https://m.media-amazon.com/images/M/MV5BMjJkMDZhYzItZTFhMi00ZGI4LThlNTAtZDNlYmEwNjFkNDYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.2",
        rotten: "99",
    },
    Chinatown = {
        title: "Blade Runner 2049",
        poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8",
        rotten: "88",
    },
    DrStrangelove = {
        title: "Dr Strangelove",
        poster: "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.4",
        rotten: "98",
    },
    Spotlight = {
        title: "Spotlight",
        poster: "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_Ratio0.7273_AL_.jpg",
        imdb: "8.1",
        rotten: "97",
    },
    TheSocialNetwork = {
        title: "The Social Network",
        poster: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg",
        imdb: "7.8",
        rotten: "96",
    },
]

// API CALL FOR SEARCH FUNCTION
function searchCall(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            searchContainer.html("")
            for (var i = 0; i < data.results.length; i++) {
                movieName = data.results[i].title;
                searchModal(data.results[i].title, data.results[i].image, nytRating)
            }
            trackerBtn = $('.tracker-buttons')
            movieEl = $('.movie-poster');
        // !NOT BEING USED AT THE MOMENT! // 
            // var movieId = data.results[0].id
        //     fetch(`https://imdb-api.com/API/Ratings/k_jisxuuy3/${movieId}`)
        //         .then(function (response) {
        //             return response.json();
        //         })
        //         .then(function (ratingsData) {
        //             console.log("vvv 2nd Data vvv")
        //             console.log(data)
        //             console.log(ratingsData);
        //         })
        })
    }

// INITIALIZATION FUNCTION
function init() {
    var pulledStorage = JSON.parse(localStorage.getItem('trackerMovies'))
    if (pulledStorage !== null) {
        trackerMovies = pulledStorage
    }
    for (var i = 0; i < curatedMovies.length; i++) {
        var movieDiv = $('<div>');
        movieDiv.addClass('movies');
        var posterEl = $('<img>');
        posterEl.addClass('movie-poster');
        posterEl.attr("src", curatedMovies[i].poster);
        posterEl.attr("alt-text", curatedMovies[i].title);
        posterEl.attr("rating", curatedMovies[i].rating);
        posterEl.attr("imdb", curatedMovies[i].imdb);
        posterEl.attr("rotten", curatedMovies[i].rotten);
        var titleEl = $('<p>');
        titleEl.addClass('movie-titles');
        titleEl.text(curatedMovies[i].title);
        movieDiv.append(posterEl);
        movieDiv.append(titleEl);
        mainDiv.append(movieDiv);
    }
}

function trackerInit() {
        var pulledStorage = JSON.parse(localStorage.getItem('trackerMovies'))
    if (pulledStorage !== null) {
        trackerMovies = pulledStorage
    }
    
    
    for (var i = 0; i < trackerMovies.length; i++) {
        var currentMovie = trackerMovies[i]
        console.log(currentMovie[0])
        var movieDiv = $('<div>');
        movieDiv.addClass('movies');
        var posterEl = $('<img>');
        posterEl.addClass('movie-poster');
        posterEl.attr("src", currentMovie[1]);
        posterEl.attr("alt-text", currentMovie[0]);
        var titleEl = $('<p>');
        titleEl.addClass('movie-titles');
        titleEl.text(currentMovie[0]);
        movieDiv.append(posterEl);
        movieDiv.append(titleEl);
        mainDiv.append(movieDiv);
}
}



// NYTIMES API CALL
function nytCall(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
})
        .then(function (movieRating) {
            movieName = movieRating.results
            // IF THE REQUEST RETURNS VALID DATA IT WILL CONTINUE
            if (movieName !== null) {
                for (var i = 0; i < movieName.length; i++) {
                    var grabbedName = movieName[i].display_title
                    // THE BELOW LINES ARE TO COMPARE THE TITLE TO THE ORIGINAL SEARCH TO MAKE SURE IT'S THE RIGHT MOVIE
                    grabbedName = grabbedName.toLowerCase();
                    movieTitle = movieTitle.toLowerCase();
                    if (grabbedName === movieTitle){
                        nytRating = movieName[i].mpaa_rating
                        return;
                }}
                    }
                        })}

// INITIALIZES THE FRONT PAGE
if (window.location.pathname == "/index.html") {
    init();
}

if (window.location.pathname == "/Mymovies.html") {
    trackerInit();
}


// THIS HAS TO BE HERE OTHERWISE IT DOESN'T SELECT THE MOVIES SINCE THEY'RE NOT GENERATED BEFORE THIS POINT
var movieEl = $('.movie-poster');
// ...

// CLICK EVENT FOR MOVIES ON MAIN PAGE
// !!! THIS IS LIKELY WHERE WE WILL CAPTURE THE LOCAL STORAGE DATA FOR THE TRACKER BUTTON !!! //
movieEl.on('click', function() {
    var mPoster = $(this).attr('src');
    var mTitle = $(this).attr('alt-text');
    var mIMDB = $(this).attr('imdb');
    var mRotten = $(this).attr('rotten');
    nytRating = ""
    movieTitle = mTitle;
    nytCall(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${mTitle}&api-key=52EHB16XvD2ETQbAtf2dd3sR3LC7drAM`);
    
    openModal(mTitle, mPoster, nytRating, mIMDB, mRotten);
})

// MODAL OPENING FUNCTION
// SET UP TO WORK WITH THE "DELAY" FUNCTION SO IT WON'T START UNTIL THE DATA IS RECIEVED FROM THE NYTCALL
async function openModal(title, poster, rating, imdb, rotten) {
    var modal1show = bodyEl[0].__x.unobservedData.showModal1
    bodyEl.attr('x-data', `{ showModal1: ${modal1show}, showModal2: true}`);
    var mtitleEl = $('#modal-title');
    var mposterEl = $('#modal-poster');
    var mRatingEl = $('#age-rating');
    var mIMDBEl = $('#imdb-modal');
    var mRottenEl = $('#rotten-modal');
    mtitleEl.text(title);
    mposterEl.attr("src", poster);
    mIMDBEl.text(imdb);
    mRottenEl.text(rotten);
    mRatingEl.text('');
    // WAITS FOR THE NYT API CALL TO FINISH BEFORE CONTINUING 
    await delay();
    mRatingEl.text('Age Rating: ' + nytRating);
}

// SEARCH MODAL OPENING FUNCTION FOR WHEN SEARCH BUTTON IS USED
// !!! THIS IS LIKELY WHERE WE WILL CAPTURE THE LOCAL STORAGE DATA FOR THE TRACKER BUTTON !!! //
function searchModal(title, poster, rating) {
    var modal2show = bodyEl[0].__x.unobservedData.showModal2
    bodyEl.attr('x-data', `{ showModal1: true, showModal2: ${modal2show}}`)
    var movieDiv = $('<div>')
    movieDiv.addClass('search-movies')
    var sposterEl = $('<img>');
    var textDiv = $('<div>')
    textDiv.addClass('below-search-item')
    var stitleEl = $('<p>');
    stitleEl.text(title);
    stitleEl.addClass('movie-titles');
    var sratingEl = $('<p>');
    sposterEl.addClass('search-poster')
    sposterEl.attr("src", poster);
    sposterEl.attr("alt-text", title);
    sposterEl.attr("rating", rating);
    var sbuttonEl = $('<span>')
    sbuttonEl.html(`<button type="button" class="tracker-buttons border border-green-500 bg-green-500 text-white rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Add to Tracker</button>`)
    movieDiv.append(sposterEl);
    textDiv.append(stitleEl);
    textDiv.append(sratingEl);
    textDiv.append(sbuttonEl);
    movieDiv.append(textDiv);
    searchContainer.append(movieDiv)
}

// THIS FUNCTION DELAYS CONTINUING FOR A CERTAIN AMOUNT OF TIME. VERY USEFUL FOR THE FETCH CALL SINCE IT TAKES A SECOND AND IF IT DOESN'T WAIT THE VARIABLE DOESN'T GET CAPTURED
function delay() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(42);
      }, 1000);
    });
  }

// FUNCTION FOR THE SEARCH BUTTON CLICK EVENT
searchBtn.on('click', function(event) {
    event.preventDefault();
    movieName = $('input[name="movie-search"]').val();
    apiUrl = `https://imdb-api.com/en/API/SearchMovie/k_dh9vu8yk/${movieName}`
    $('input[name="movie-search"]').val('');
    searchCall(apiUrl);
})

trackerBtn.on('click', function(event) {
    event.preventDefault();
    var dataaa = $(this.parentNode.parentNode)
    dataaa = dataaa.children();
    console.log(dataaa[0].currentSrc)
    console.log(dataaa[1].innerText)
    var storeTitle = dataaa[1].innerText
    var storePoster = dataaa[0].currentSrc
    var storeItem = []
    storeItem.push(storeTitle)
    storeItem.push(storePoster)
    trackerMovies.push(storeItem)
    localStorage.setItem('trackerMovies', JSON.stringify(trackerMovies));
})
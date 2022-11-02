// CREDITS
// button component template from: https://tailwindcomponents.com/component/button-component-default
// modal component template from: https://tailwindcomponents.com/component/two-very-simple-modals

// GRABBING GLOBAL ELEMENTS FOR CLICK FUNCTIONS, HTML INSERTION, ETC
var mainDiv = $('#main-div');
var bodyEl = $('body');
var searchBtn = $('#search-button')
var searchContainer = $('#search-modal-div')
var trackerBtn = $('.tracker-buttons')
var searchTracker = $('#full-modal')
var removeBtn = $('#remove-button')

// VARIABLES USED IN MULTIPLE FUNCTIONS
var movieName
var movieTitle
var nytRating

// DELCARING THE VARIABLE LOCALSTORAGE GETS PULLED TO
var trackerMovies = []

// !!!!! API KEY INFO !!!!!!
// SET YOUR IMDB API KEY HERE. REPLACE "k_855f05kw" WITH YOUR API KEY
// TO FIND WHERE ELSE TO REPLACE IT, PRESS CTRL + F AND SEARCH FOR: IMDBKEY 
var apiUrl = `https://imdb-api.com/en/API/SearchMovie/k_855f05kw/${movieName}`
// TO FIND WHERE TO REPLACE THE NYT API KEY, PRESS CTRL + F AND SEARCH FOR: NYTAPI
// ...


// DATA FOR THE PERMANENT HOME PAGE
var curatedMovies = [
    FightClub = {
        title: "Fight Club",
        poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6757_AL_.jpg",
    },
    FullMetalJacket = {
        title: "Full Metal Jacket",
        poster: "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6757_AL_.jpg",
    },
    SpaceOdyssey = {
        title: "2001: A Space Odyssey",
        poster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6757_AL_.jpg",
    },
    Interstellar = {
        title: "Interstellar",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg",
    },
    MemoriesofMurder = {
        title: "Memories of Murder",
        poster: "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7273_AL_.jpg",
    },
    Spiderman = {
        title: "Spider-man",
        poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
    },
    Parasite = {
        title: "Parasite",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.7273_AL_.jpg",
    },
    Pearl = {
        title: "Pearl",
        poster: "https://m.media-amazon.com/images/M/MV5BZTFkNmE5MjUtZDE1Yi00ZmQyLTk2YWUtN2EwODA1ZmNlOTA5XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6757_AL_.jpg",
    },
    TheTwoTowers = {
        title: "The Lord of the Rings: The Two Towers",
        poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
    },
    TheShining = {
        title: "The Shining",
        poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg",
    },
    Prisoners = {
        title: "Prisoners",
        poster: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_Ratio0.7273_AL_.jpg",
    },
    CitizenKane = {
        title: "Citizen Kane",
        poster: "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
    },
    ProjectAlmanac = {
        title: "Project Almanac",
        poster: "https://m.media-amazon.com/images/M/MV5BMTUxMjQ2NjI4OV5BMl5BanBnXkFtZTgwODc2NjUwNDE@._V1_Ratio0.6757_AL_.jpg",
    },
    RushHour = {
        title: "Rush Hour",
        poster: "https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg",
    },
    SeventeenAgain = {
        title: "17 Again",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTI1Mzg3N15BMl5BanBnXkFtZTcwMjYwNjAzMg@@._V1_Ratio0.6757_AL_.jpg",
    },
    ApocalypseNow = {
        title: "Apocalypse Now",
        poster: "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.7273_AL_.jpg",
    },
    Chinatown = {
        title: "Chinatown",
        poster: "https://m.media-amazon.com/images/M/MV5BMjJkMDZhYzItZTFhMi00ZGI4LThlNTAtZDNlYmEwNjFkNDYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.7273_AL_.jpg",
    },
    Chinatown = {
        title: "Blade Runner 2049",
        poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_Ratio0.7273_AL_.jpg",
    },
    DrStrangelove = {
        title: "Dr Strangelove",
        poster: "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
    },
    Spotlight = {
        title: "Spotlight",
        poster: "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_Ratio0.7273_AL_.jpg",
    },
    TheSocialNetwork = {
        title: "The Social Network",
        poster: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg",
    },
]

// !!! IF ANYTHING IS CONFUSING I HIGHLY RECCOMEND ADDING CONSOLE.LOG AND SEEING WHAT EACH THING DOES !!!

// INITIALIZES THE PAGE DEPENDING ON WHAT PAGE WE'RE ON
// !!IMPORANT!! IF WE ADD MORE PAGES THIS WOULD HAVE TO BE ADJUSTED!
function pageLoad() {
    var page = window.location.pathname.toLowerCase();
    if (page.includes("index") || (!page.includes("mymovies")) ) {
        init();
    } else if (page.includes("mymovies")) {
        trackerInit();
    }
}
pageLoad();


// INITIALIZATION FUNCTION FOR HOME PAGE
function init() {
    // GRAB LOCAL STORAGE, AND IF NOT EMPTY THEN SET THE trackerMovies VARIABLE TO WHAT'S IN STORAGE
    var pulledStorage = JSON.parse(localStorage.getItem('trackerMovies'))
    if (pulledStorage !== null) {
        trackerMovies = pulledStorage
    }
    // FOR LOOP TO CREATE ALL THE HTML WITH JQUERY
    for (var i = 0; i < curatedMovies.length; i++) {
        var movieDiv = $('<div>');
        movieDiv.addClass('movies');
        var posterEl = $('<img>');
        posterEl.addClass('movie-poster');
        // !!IMPORTANT!! SETTING THE ALT HERE LETS US GRAB THIS DATA LATER WHEN WE CLICK THE BUTTONS
        posterEl.attr("src", curatedMovies[i].poster);
        posterEl.attr("alt", curatedMovies[i].title);
        var titleEl = $('<p>');
        titleEl.addClass('movie-titles');
        titleEl.text(curatedMovies[i].title);
        movieDiv.append(posterEl);
        movieDiv.append(titleEl);
        mainDiv.append(movieDiv);
    }
}

// INITIALIZATION FUNCTION FOR TRACKER PAGE
function trackerInit() {
    // CLEARS THE TRACKER SO IT GENERATES A NEW LIST EVERY TIME WE GO THERE
    mainDiv[0].innerHTML = ""
    var pulledStorage = JSON.parse(localStorage.getItem('trackerMovies'))
    if (pulledStorage !== null) {
        trackerMovies = pulledStorage
    }
    // FOR LOOP GENERATES THE HTML ELEMENTS ON THE TRACKER PAGE
    for (var i = 0; i < trackerMovies.length; i++) {
        var currentMovie = trackerMovies[i]
        var movieDiv = $('<div>');
        movieDiv.addClass('movies');
        var posterEl = $('<img>');
        posterEl.addClass('movie-poster');
        // !!IMPORTANT!! SETTING THE ALT AND INDEX HERE LETS US GRAB THIS DATA LATER WHEN WE CLICK THE BUTTONS 
        posterEl.attr("src", currentMovie[1]);
        posterEl.attr("alt", currentMovie[0]);
        // !!IMPORANT!! THIS "INDEX" ATTRIBUTE IS SPECIFICALLY FOR THE REMOVE BUTTON SO IT KNOWS WHICH ARRAY INDEX TO REMOVE FROM LOCAL STORAGE
        posterEl.attr("index", i)
        // ...
        var titleEl = $('<p>');
        titleEl.addClass('movie-titles');
        titleEl.text(currentMovie[0]);
        movieDiv.append(posterEl);
        movieDiv.append(titleEl);
        mainDiv.append(movieDiv);
}}

// FUNCTION FOR CAPTURING THE NEW BUTTONS MADE
// SINCE MOST BUTTONS ARE GENERATED AFTER THE PAGE IS ALREADY CREATED, WE HAVE TO RECAPTURE NEW BUTTONS OTHERWISE THEY WON'T WORK AS CLICK EVENTS
function captureButtons() {
    searchTracker = $('.tracker-buttons')
}

// IMDB API CALL FOR SEARCH FUNCTION
function searchCall(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // THE LINE BELOW IS CLEARING THE MODAL CONTENTS SO IF THIS WAS THE SECOND OR THIRD SEARCH IT WOULDN'T HAVE OLD RESULTS
            searchContainer.html("")
            // ...
            // FOR LOOP TO CREATE ALL THE ITEMS ON THE SEARCH MODAL
            for (var i = 0; i < data.results.length; i++) {
                movieName = data.results[i].title;
                searchModal(data.results[i].title, data.results[i].image)
            }
            movieEl = $('.movie-poster');
        })
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
                // THIS FOR LOOP IS MAKING SURE THE DATA GRABBED ACTUALLY MATCHES THE TITLE WE ENTERED
                // FOR EXAMPLE: SEARCHING DEADPOOL GAVE US THE DATA FOR DEADPOOL 2 FIRST AND DEADPOOL SECOND. SO THIS IS COMPARING THE NAME WE ENTERED WITH THE DATA ARRAYS FROM THE API TO MAKE SURE WE GET "DEADPOOL" FIRST
                for (var i = 0; i < movieName.length; i++) {
                    var grabbedName = movieName[i].display_title
                    // THE BELOW LINES ARE TO COMPARE THE TITLE TO THE ORIGINAL SEARCH TO MAKE SURE IT'S THE RIGHT MOVIE
                    // HAD SOME ISSUES WITH CAPITAL LETTERS ESPECIALLY IN MOVIE NAMES WITH A ":" IN THE TITLE. CONVERTING TO LOWER CASE SEEMED TO FIX IT
                    grabbedName = grabbedName.toLowerCase();
                    movieTitle = movieTitle.toLowerCase();
                    // IF THE NAME MATCHES (EX: DEADPOOL MATCHES "DEADPOOL" AND NOT "DEADPOOL 2") ADD THE RATING
                    if (grabbedName === movieTitle){
                        nytRating = movieName[i].mpaa_rating
                        return;
                }}
                    }
                        })}


// THIS HAS TO BE HERE OTHERWISE IT DOESN'T SELECT THE MOVIES SINCE THEY'RE NOT GENERATED BEFORE THIS POINT
var movieEl = $('.movie-poster');
// ...


// CLICK EVENT FOR MOVIES ON MAIN PAGE
// !!! THIS IS WHERE WE WILL CAPTURE THE LOCAL STORAGE DATA FOR THE TRACKER BUTTON !!! //
movieEl.on('click', function() {
    // THE "THIS" JQUERY IS GRABBING WHATEVER WE CLICK ON AS "THIS" AND CHECKING THE ATTRIBUTES. 
    // IN THIS CASE I STORED DATA IN THE ATTRIBUTES OF THE MOVIE POSTERS SO IT COULD BE EASILY GRABBED USING "THIS" SINCE WE CLICK ON THE POSTERS TO OPEN THE MODAL
    var mPoster = $(this).attr('src');
    var mTitle = $(this).attr('alt');
    var mIndex = $(this).attr('index')
    // THIS CLEARS THE RATING VARIABLE BEFORE DOING THE API CALL. IF YOU DON'T DO THIS IT WILL SHOW THE PREVIOUS MOVIES RATING UNTIL THE API CALL FINISHES
    nytRating = ""
    movieTitle = mTitle;
    // REPLACE YOUR API KEY HERE. REPLACE THE VALUE AFTER &api-key= WITH YOUR KEY. --SEARCHKEY: NYTAPI
    nytCall(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${mTitle}&api-key=52EHB16XvD2ETQbAtf2dd3sR3LC7drAM`);
    // THIS ORIGINALLY CAUSED PROBLEMS SINCE THE DATA TOOK TOO LONG TO RECIEVE FROM THE NYT API SO WHEN CALLING THE openModal FUNCTION IT WOULD NOT HAVE THE RATING
    // I LOOKED UP HOW TO PREVENT THIS AND ONE OF THE OPTIONS WAS SOMETHING CALLED ASYNC/AWAIT. YOU CAN READ MORE ON THAT HERE: https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call
    openModal(mTitle, mPoster, mIndex);
})


// NON-SEARCH MODAL OPENING FUNCTION
// SET UP TO WORK WITH THE "DELAY" FUNCTION SO IT WON'T FINISH UNTIL THE DATA IS RECIEVED FROM THE NYTCALL
// THE "ASYNC" BEFORE THE FUNCTION IS WHAT LET'S IT WORK WITH THE AWAY COMMAND LATER. YOU CAN READ MORE ON IT HERE: https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call
async function openModal(title, poster, index) {
    // THE LINE BELOW IS GRABBING THE "BODY" HTML TAG AND THEN NAVIGATING INTO THE DATA ATTRIBUTE WE HAVE ON IT FOR THE MODALS. LOOK AT THE <BODY> TAG IN THE HTML TO SEE WHAT I MEAN.
    var modal1show = bodyEl[0].__x.unobservedData.showModal1
    bodyEl.attr('x-data', `{ showModal1: ${modal1show}, showModal2: true}`);
    // GRABBING THE HTML ELEMENTS OF THE MODAL
    var mtitleEl = $('#modal-title');
    var mposterEl = $('#modal-poster');
    var mRatingEl = $('#age-rating');
    mtitleEl.text(title);
    // !!IMPORTANT!! SETTING THE ALT AND INDEX HERE LETS US GRAB THIS DATA LATER WHEN WE CLICK THE BUTTONS 
    mposterEl.attr("src", poster);
    // !!IMPORANT!! THIS "INDEX" ATTRIBUTE IS SPECIFICALLY FOR THE REMOVE BUTTON SO IT KNOWS WHICH ARRAY INDEX TO REMOVE FROM LOCAL STORAGE
    mposterEl.attr("index", index)
    // ...
    // CLEAR THE RATING TEXT SO IT DOESN'T SHOW THE PREVIOUS MOVIE'S RATING WHILE WAITING FOR THE API DATA TO COME BACK
    mRatingEl.text('');
    // WAITS FOR THE NYT API CALL TO FINISH BEFORE CONTINUING. CHECK STACK OVERFLOW LINK ABOVE TO READ MORE ON THIS
    await delay();
    // BASICALLY IF THERE'S NO RATING IT DOESN'T JUST SHOW "AGE RATING: "
    if (nytRating != "") {
        mRatingEl.text('Age Rating: ' + nytRating);
    } else {
        mRatingEl.text("Age Rating: Not Rated")
    }
}

// SEARCH MODAL OPENING FUNCTION FOR WHEN SEARCH BUTTON IS USED
// !!! THIS IS WHERE WE WILL CAPTURE THE LOCAL STORAGE DATA FOR THE TRACKER BUTTON !!! //
function searchModal(title, poster) {
    // THE LINE BELOW IS GRABBING THE "BODY" HTML TAG AND THEN NAVIGATING INTO THE DATA ATTRIBUTE WE HAVE ON IT FOR THE MODALS. LOOK AT THE <BODY> TAG IN THE HTML TO SEE WHAT I MEAN.
    var modal2show = bodyEl[0].__x.unobservedData.showModal2
    bodyEl.attr('x-data', `{ showModal1: true, showModal2: ${modal2show}}`)
    // CREATING ALL THE HTML ELEMENTS IN THE SEARCH MODAL
    var movieDiv = $('<div>')
    movieDiv.addClass('search-movies')
    var sposterEl = $('<img>');
    var textDiv = $('<div>')
    textDiv.addClass('below-search-item')
    var stitleEl = $('<p>');
    stitleEl.text(title);
    stitleEl.addClass('movie-titles');
    var sratingEl = $('<p>');
    sposterEl.addClass('search-poster');
    // !!IMPORTANT!! SETTING THE ALT HERE LETS US GRAB THIS DATA LATER WHEN WE CLICK THE BUTTONS 
    sposterEl.attr("src", poster);
    sposterEl.attr("alt", title);
    // CREATE A SPAN TO INSERT THE BUTTON HTML INTO
    var sbuttonEl = $('<span>')
    sbuttonEl.html(`<button type="button" class="border border-green-500 bg-green-500 text-white rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline tracker-buttons">Add to Tracker</button>`)
    movieDiv.append(sposterEl);
    textDiv.append(stitleEl);
    textDiv.append(sratingEl);
    textDiv.append(sbuttonEl);
    movieDiv.append(textDiv);
    // ATTACH ALL GENERATED ELEMENTS TO THE MODAL
    searchContainer.append(movieDiv)
    // CAPTURE NEW BUTTONS MADE 
    captureButtons();
}

// THIS FUNCTION DELAYS CONTINUING FOR A CERTAIN AMOUNT OF TIME. VERY USEFUL FOR THE FETCH CALL SINCE IT TAKES A SECOND AND IF IT DOESN'T WAIT THE VARIABLE DOESN'T GET CAPTURED
// THIS FUNCTION IS JUST HERE TO CREATE A TIME DELAY. IT WANTS A RETURN OF A PROMISE, WHICH WE RETURN AFTER 1 SECOND. THIS GIVES THE NYT API ENOUGH TIME TO RETURN
function delay() {
    // IT WANTS A PROMISE WHICH WE WILL GIVE IT AFTER 1 SECOND
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        // THIS IS THE "PROMISE" WE WILL GIVE IT. THE VALUE IS IRRELEVANT IT JUST WANTS SOMETHING RETURNED
        resolve(69);
        // THE TIME IS BELOW. "1000" = 1 SECOND
      }, 1000);
    });
  }

// FUNCTION FOR THE SEARCH BUTTON CLICK EVENT
searchBtn.on('click', function(event) {
    event.preventDefault();
    // GRABS THE SEARCH BAR DATA
    movieName = $('input[name="movie-search"]').val().trim();
    // SETS THE API URL TO THE GRABBED VALUE
    // SET YOUR API KEY HERE. REPLACE "k_855f05kw" WITH YOUR API KEY. --SEARCHKEY: IMDBKEY
    apiUrl = `https://imdb-api.com/en/API/SearchMovie/k_855f05kw/${movieName}`
    // ...
    // RESETS THE SEARCH BOX VALUES
    $('input[name="movie-search"]').val('');
    searchCall(apiUrl);
})

// FUNCTION FOR TRACKER BUTTON CLICK EVENT
trackerBtn.on('click', function(event) {
    event.preventDefault();
    // "THIS" GRABS THE BUTTON, THEN WE TRAVERSE UP THE DOCUMENT TO GET TO THE IMAGE
    // IF YOU WANT TO UNDERSTAND BETTER, CONSOLE LOG SOME OF THESE VALUES. EX, ADD: console.log($(this.parentNode.parentNode)) AFTER LINE 358 TO SEE WHAT IT DOES.
    var trackerData = $(this.parentNode.parentNode)
    // AT THIS POINT THE WHOLE MODAL IS SELECTED, SO NOW WE HAVE TO GO BACK DOWN USING .CHILDREN()
    trackerData = trackerData.children();
    // NOW WE HAVE THE <IMG> HTML SELECTED, TIME TO GRAB THE ATTRIBUTES WE ADDED EARLIER
    var storeTitle = trackerData[1].innerText
    var storePoster = trackerData[0].currentSrc
    // CREATE storeItem AS AN ARRAY SO IT CAN STORE THE TITLE AND POSTER TOGETHER
    var storeItem = []
    storeItem.push(storeTitle)
    storeItem.push(storePoster)
    // PUSH storeItem TO THE GRABBED LOCAL STORAGE VARIABLE, THEN SET LOCAL STORAGE WITH THAT UPDATED VALUE
    trackerMovies.push(storeItem)
    localStorage.setItem('trackerMovies', JSON.stringify(trackerMovies));
})

// CAPTURES NEW BUTTONS CREATED 
$('#search-modal-container').on('shown.bs.modal', function (event) {
    $(".tracker-buttons").trigger("click");  
});

// FUNCTION FOR TRACKER BUTTON ON SEARCH PAGE CLICK EVENT
searchTracker.on('click', function(event) {
    event.preventDefault();
    var element = event.target
    // IN THE SEARCH MODAL THERE'S AN INVISIBLE OVERLAY OVER THE ENTIRE THING, SO CLICKING ANYWHERE JUST "CLICKS" THE MODAL OVERLAY
    // THIS IS MAKING SURE OUR ACTUAL TARGET UNDERNEATH WAS A BUTTON
    if (element.matches('button')) {
        // SAME THING AS EARLIER HERE, TRAVERSING UP AND THEN BACK DOWN FROM THE BUTTON TO FIND THE IMAGE WITH THE STORED ATTRIBUTES
        var searchData = element.parentNode.parentNode.parentNode 
        searchData = searchData.children[0];
        // GRABBING THE ATTRIBUTES THAT WERE SET EARLIER ON THE POSTERS
        var searchTitle = searchData.alt
        var searchPoster = searchData.src
        var searchItem = []
        searchItem.push(searchTitle)
        searchItem.push(searchPoster)
        trackerMovies.push(searchItem)
        localStorage.setItem('trackerMovies', JSON.stringify(trackerMovies));
    }
    // LOOKING FOR IF WE CLICKED OFF THE MODAL
    if (element.matches('#full-modal')) {
        // CHECKING THE PAGE WE'RE ON TO MAKE SURE THIS ONLY HAPPENS ON THE mymovies PAGE
        var currentPage = window.location.pathname.toLowerCase();
        if (currentPage.includes("mymovies")) {
            // RELOAD THE PAGE WHEN THE MODAL IS CLOSED
            window.location.reload();
    }
    }
})

// FUNCTION FOR REMOVE BUTTON ON TRACKER PAGE
removeBtn.on('click', function(event) {
    event.preventDefault();
    // THESE LINES ARE THE SAME AS EARLIER BUTTONS. TO MAKE SURE THE MODAL CAN REOPEN/CLOSES PROPERLY.
    var modal1remove = bodyEl[0].__x.unobservedData.showModal1
    bodyEl.attr('x-data', `{ showModal1: ${modal1remove}, showModal2: false}`);
    // ...
    // SAME THING AS EARLIER HERE, TRAVERSING UP THE DOM FROM THE BUTTON AND THEN BACK DOWN TO FIND THE IMAGE WITH THE STORED ATTRIBUTES WE NEED
    // PRIMARLY WE'RE LOOKING FOR THE "INDEX" VALUE SET ON THE TRACKER PAGE MOVIES AS THOSE ARE THE INDEX VALUE OF THAT ITEM IN THE LOCAL STORAGE
    var removeData = $(this.parentNode.parentNode)
    removeData = removeData.children();
    // GRABBING THAT INDEX VALUE
    var removeIndex = removeData[0].attributes[4].value;
    // IF IT'S A VALID INDEX VALUE, REMOVE FROM LOCAL STORAGE VARIABLE
    if (removeIndex > -1) {
        trackerMovies.splice(removeIndex, 1)
    }
    // SETS THE LOCAL STORAGE AND THEN RELOADS THE PAGE. THE PAGE RELOADS SO THE MOVIES ARE REGENERATED WITH UPDATED INDEX VALUES. IF IT DIDN'T DO THIS, THE INDEX VALUES WOULD BE OFF BY 1 EVERY TIME A MOVIE REMOVED.
    localStorage.setItem('trackerMovies', JSON.stringify(trackerMovies));
    // THIS ALSO "WORKS" BY RUNNING THE TRACKINGINIT FUNCTION AGAIN, BUT FOR SOME REASON YOU CAN'T CLICK ON ANOTHER MOVIE AFTER IT GENERATES. SO A PAGE RELOAD WAS THE BEST I COULD DO AT THE TIME.
    window.location.reload();
})

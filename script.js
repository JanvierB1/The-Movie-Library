var movieTitle = document.getElementById('title')
var moviePoster = document.getElementById('movie-poster')
var imdbRating = document.getElementById('imdb-ratings')
var metaRating = document.getElementById('meta-ratings')
var rottenRating = document.getElementById('rotten-ratings')
var movieRating = document.getElementById('movie-rating')
var movieName = 'Deadpool'
var mainDiv = $('#main-div');

// var movieName = ''
// var apiUrl = `https://imdb-api.com/en/API/SearchMovie/k_jisxuuy3/${movieName}`

var firstTime = true

var curatedMovies = [
    // Justin
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
    // Zarrar
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
    // Melina
    Parasite = {
        title: "Parasite",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.7273_AL_.jpg",
    },
    Pearl = {
        title: "Pearl",
        poster: "https://m.media-amazon.com/images/M/MV5BZTFkNmE5MjUtZDE1Yi00ZmQyLTk2YWUtN2EwODA1ZmNlOTA5XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6757_AL_.jpg",
    },
    // Joseph
    TheTwoTowers = {
        title: "The Two Towers",
        poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
    },
    // Daniel
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
    // Janvier
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
]

function apiCall(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var movieId = data.results[0].id
            fetch(`https://imdb-api.com/API/Ratings/k_jisxuuy3/${movieId}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (ratingsData) {
                    console.log(data)
                    console.log(ratingsData);
                    // TEST STUFF
                    // imdbRating.textContent = `IMDB Rating: ${ratings.imDb}`
                    // metaRating.textContent = `MetaCritic Rating: ${ratings.metacritic}`
                    // rottenRating.textContent = `RottenTomatoes Rating: ${ratings.rottenTomatoes}`
                })
        })
    }

function init() {
    for (var i = 0; i < curatedMovies.length; i++) {
        var movieDiv = $('<div>');
        movieDiv.addClass('movies');
        var posterEl = $('<img>');
        posterEl.addClass('movie-poster');
        posterEl.attr("src", curatedMovies[i].poster);
        var titleEl = $('<p>');
        titleEl.addClass('movie-titles');
        titleEl.text(curatedMovies[i].title);
        movieDiv.append(posterEl);
        movieDiv.append(titleEl);
        mainDiv.append(movieDiv);
    }
}

console.log(apiUrl);
apiCall(apiUrl);


var requestUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=R0eFfTq42Mk2pofP6Ums8HKtAedFJequ`

function apiCall(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=deadpool&api-key=R0eFfTq42Mk2pofP6Ums8HKtAedFJequ`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (movieRating) {
                    console.log(movieRating.results[0].display_title)
                    var movieName = movieRating.results
                    var title 
                    var rating 
                    for (var i = 0; i < movieName.length; i++) {
                        if (movieName[i].display_title === "Deadpool"){
                            title = movieName[i].display_title
                            rating = movieName[i].mpaa_rating
                        } 
                    }
                    console.log(title);
                    console.log(rating)
                })
        })
    }

if (document.location.pathname == "/index.html") {
    init();
}

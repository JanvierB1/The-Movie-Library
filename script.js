var movieTitle = document.getElementById('title')
var moviePoster = document.getElementById('movie-poster')
var imdbRating = document.getElementById('imdb-ratings')
var metaRating = document.getElementById('meta-ratings')
var rottenRating = document.getElementById('rotten-ratings')
var movieRating = document.getElementById('movie-rating')
var movieName = 'Deadpool'

var apiUrl = `https://imdb-api.com/API/SearchMovie/k_jisxuuy3/${movieName}`

var curatedMovies = [

]

function apiCall(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            movieTitle.textContent = data.results[0].title
            moviePoster.innerHTML = `<img src="${data.results[0].image}" width="200" height="300">`
            var movieId = data.results[0].id
            fetch(`https://imdb-api.com/API/Ratings/k_jisxuuy3/${movieId}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (ratings) {
                    console.log(ratings);
                    // TEST STUFF
                    imdbRating.textContent = `IMDB Rating: ${ratings.imDb}`
                    metaRating.textContent = `MetaCritic Rating: ${ratings.metacritic}`
                    rottenRating.textContent = `RottenTomatoes Rating: ${ratings.rottenTomatoes}`
                })
        })
    }

function init() {
    for (var i = 0; i < curatedMovies; i++) {
        
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


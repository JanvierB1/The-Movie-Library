var movieTitle = document.getElementById('title')
var moviePoster = document.getElementById('movie-poster')
var imdbRating = document.getElementById('imdb-ratings')
var metaRating = document.getElementById('meta-ratings')
var rottenRating = document.getElementById('rotten-ratings')
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
            console.log(movieTitle);
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

console.log(apiUrl);
apiCall(apiUrl);
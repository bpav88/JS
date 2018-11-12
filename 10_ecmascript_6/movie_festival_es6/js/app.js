var dataModule = (function () {
    var movieList = {
        movies: []
    }

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getInfo = function () {
        return this.title + ", " + this.length + ", " + this.genre;
    }

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);

    }

    function addMovie(movie) {
        movieList.movies.push(movie)
    }

    return {
        addMovie: addMovie,
        createMovie: createMovie
    }

})();



var uiModule = (function () {

    var $movieTitle = document.querySelector(".movie-title");
    var $movieLength = document.querySelector(".movie-length");
    var $selectGenre = document.querySelector(".select-genre");
    var $movieListDiv = document.querySelector(".movie-list");

    function collectFormInput() {

        var title = $movieTitle.value;
        var length = parseInt($movieLength.value);
        var genre = $selectGenre.value;

        return {
            title: title,
            length: length,
            genre: genre
        }
    }

    function displayMovie(movie) {
        var $p = document.createElement("p");
        $p.textContent = movie.getInfo();
        $movieListDiv.appendChild($p);
    }

    function resetInput() {
        $movieTitle.value = " ";
        $movieLength.value = " ";
    }

    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie,
        resetInput: resetInput
    }
})();



var controller = (function (data, ui) {

    var $inputButton = document.querySelector(".create-movie");

    // setup event listener
    $inputButton.addEventListener("click", function (event) {

        var movieObj = ui.collectFormInput()
        // console.log(movieObj);

        var movieInstance = data.createMovie(movieObj.title, movieObj.length, movieObj.genre)
        data.addMovie(movieInstance)

        ui.displayMovie(movieInstance)
        // console.log(movieInstance);
        ui.resetInput();

    })
})(dataModule, uiModule);
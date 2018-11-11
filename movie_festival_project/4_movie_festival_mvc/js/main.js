var dataModule = (function () {

    var storage = {
        movies: [],
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
        return new Movie(title, length, genre)
    }

    function addMovie(movie) {
        storage.movies.push(movie);
    }

    function calculateTotalLength() {
        var totalLength = 0;
        for (var i = 0; i < storage.movies.length; i++) {
            movieLength = storage.movies[i].length;
            totalLength += movieLength;
        }
        return totalLength;
    }

    function getTotalLength() {
        return calculateTotalLength();
    }

    return {
        createMovie: createMovie,
        addMovie: addMovie,
        getTotalLength: getTotalLength
    }

})();

var uiModule = (function () {
    var $movieTitle = $(".movie-title");
    var $movieLength = $(".movie-length");
    var $selectGenre = $(".select-genre");
    var $movieListDiv = $(".movie-list");
    var $allMoviesLength = $(".allMoviesLength");

    function collectInput() {
        var title = $movieTitle.val();
        var length = parseInt($movieLength.val());
        var genre = $selectGenre.val();
        if (!false)

            return {
                title: title,
                length: length,
                genre: genre
            }

    }

    function displayMovie(movie) {
        var $p = $("<p>").text(movie.getInfo());
        $movieListDiv.append($p);
    }

    function displayTotalLength(totalLength) {
        var $p = $("<p>").text("Total length: " + totalLength);
        $allMoviesLength.append($p);
    }

    function displayError() {
        var $p = $("<p>").text("Wrong input!");
        $movieListDiv.append($p);
    }

    function resetInput() {
        $movieTitle.val("");
        $movieLength.val("");
        $selectGenre.val("-");
    }

    return {
        collectInput: collectInput,
        displayMovie: displayMovie,
        displayTotalLength: displayTotalLength,
        resetInput: resetInput,
        displayError: displayError
    }
})();

var controller = (function (data, ui) {

    function init() {
        setupEventListeners()
    }

    function setupEventListeners() {

        var $inputButton = $(".create-movie");
        $inputButton.on("click", onAddMovieHandler);
    }

    function onAddMovieHandler(event) {
        var movieInput = ui.collectInput();
        if (movieInput.title == "" || movieInput.length == "") { // TODO NaN works
            ui.displayError();
        } else {
            var fullMovie = data.createMovie(movieInput.title, movieInput.length, movieInput.genre);
            ui.displayMovie(fullMovie);
            data.addMovie(fullMovie);
            ui.displayTotalLength(data.getTotalLength());
            ui.resetInput();

        }


    }

    return {
        init: init
    }


})(dataModule, uiModule);
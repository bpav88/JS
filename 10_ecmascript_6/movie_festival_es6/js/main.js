let dataModule = (function () {

    const storage = {
        movies: []
    }

    class Movie {
        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
        getInfo() {
            return `${this.title}, ${this.length}, ${this.genre}`;
        }
    }

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }

    function addMovie(movie) {
        storage.movies.push(movie);
    }

    function calculateTotalLength() {
        let totalLength = 0;
        for (let i = 0; i < storage.movies.length; i++) {
            movieLength = storage.movies[i].length;
            totalLength += movieLength;
        }
        return totalLength;
    }

    function getTotalLength() {
        return calculateTotalLength();
    }

    return {
        createMovie,
        addMovie,
        getTotalLength
    }

})();

let uiModule = (function () {
    const $movieTitle = $(".movie-title");
    const $movieLength = $(".movie-length");
    const $selectGenre = $(".select-genre");
    const $movieListDiv = $(".movie-list");
    const $allMoviesLength = $(".allMoviesLength");

    function collectInput() {
        const title = $movieTitle.val();
        const length = parseInt($movieLength.val());
        const genre = $selectGenre.val();

        return {
            title,
            length,
            genre
        }
    }

    function displayMovie(movie) {
        const $p = $("<p>").text(movie.getInfo());
        $movieListDiv.append($p);
    }

    function displayTotalLength(totalLength) {
        const $p = $("<p>").text(`Total length: ${totalLength}`);
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
        collectInput,
        displayMovie,
        displayTotalLength,
        resetInput,
        displayError
    }
})();

let controller = (function (data, ui) {

    function init() {
        setupEventListeners();
    }

    function setupEventListeners() {

        const $inputButton = $(".create-movie");
        $inputButton.on("click", onAddMovieHandler);
    }

    function onAddMovieHandler() {
        const movieInput = ui.collectInput();
        const { title, length, genre } = movieInput;
        if (movieInput.title == "" || movieInput.length == "") { // TODO NaN works
            ui.displayError();
        } else {
            let fullMovie = data.createMovie(title, length, genre);
            ui.displayMovie(fullMovie);
            data.addMovie(fullMovie);
            ui.displayTotalLength(data.getTotalLength());
            ui.resetInput();

        }
    }

    return {
        init
    }


})(dataModule, uiModule);
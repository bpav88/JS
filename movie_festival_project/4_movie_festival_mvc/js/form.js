var movieList = [];
var $inputButton = document.querySelector(".create-movie");

var $movieTitle = document.querySelector(".movie-title");
var $movieLength = document.querySelector(".movie-length");
var $selectGenre = document.querySelector(".select-genre");

// Add event listener
$inputButton.addEventListener("click", function () {


    // collecto form data
    var title = $movieTitle.value;
    var length = parseInt($movieLength.value);
    var genre = $selectGenre.value;
    // console.log(title, length, genre);

    // create movie instance
    var movie = new Movie(title, length, genre);
    movieList.push(movie);

    //select output node

    var $movieListDiv = document.querySelector(".movie-list");

    //update UI/display data

    var $p = document.createElement("p");
    $p.textContent = movie.getInfo();
    $movieListDiv.appendChild($p);

    //reset elements
    $movieTitle.value = " ";
    $movieLength.value = " ";

    var totalLength = 0;
    for (var i = 0; i < movieList.length; i++) {
        totalLength += movieList[i].length;
    }


    var $allMoviesLength = document.querySelector(".allMoviesLength");
    $allMoviesLength.textContent = totalLength;

    var $movieItem = document.querySelector(".movie-select");
    var $option = document.createElement("option");
    $option.textContent = movie.title;
    $movieItem.appendChild($option);

})

function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getInfo = function () {
    return this.title + ", " + this.length + ", " + this.genre;
}


var $programButton = document.querySelector(".create-program");
var $programDiv = document.querySelector(".programDiv");
var $programDate = document.querySelector(".choose-date");

$programButton.addEventListener("click", function () {
    var date = $programDate.value;

    var $movieParagraph = document.createElement("p");
    $movieParagraph.textContent = date;
    $programDiv.appendChild($movieParagraph);

    var $programItem = document.querySelector(".program-movie");
    var $optionDate = document.createElement("option");

})






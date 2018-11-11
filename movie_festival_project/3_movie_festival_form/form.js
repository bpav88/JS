var $createMovieButton = document.querySelector("#createMovie");
var $genre = document.querySelector("#genre");
var $title = document.querySelector("#title");
var $movieLength = document.querySelector("#movieLength");
var $movieUl = document.querySelector("#movieList");

var $createProgramButton = document.querySelector("#create-program");
var $date = document.querySelector("#date");
var $programUl = document.querySelector("#program-list");
var $movieSelect = document.querySelector("#movie-select");
var $programSelect = document.querySelector("#program-select");
var $addMovieButton = document.querySelector("#add-movie");


var movies = [];
var programs = [];

var allMovieLength = 0;

$createMovieButton.addEventListener("click", createMovie);

function createMovie() {


    // crete movie  only on valid input

    // display error 

    // create movie

    var genre = new Genre($genre.value);
    var movie = new Movie($title.value, genre, $movieLength.value);

    // add movie to list
    movies.push(movie);

    // display movie on UI
    var $li = document.createElement("li");

    $li.className = "list-group-item";
    $li.textContent = movie.getData();

    $movieUl.appendChild($li);

    // / reset form
    document.querySelector("#movieForm").reset();

    // Calc sum 
    allMovieLength += parseInt($movieLength.value);
    console.log($movieLength);


    document.querySelector("#lengthSum").innerHTML =
        "All movies length: " + allMovieLength + " min";

    // create select with movies
    var $opt = document.createElement("option");

    $opt.textContent = movie.title;
    $opt.value = movies.indexOf(movie);

    $movieSelect.appendChild($opt);

}

$createProgramButton.addEventListener("click", createProgram);

function createProgram() {

    var program = new Program(new Date($date.value));

    programs.push(program);

    var $li = document.createElement("li");

    $li.className = "list-group-item";
    $li.textContent = program.getData();

    $programUl.appendChild($li);

    document.querySelector("#program-form").reset();

    // create select with programs
    var $opt = document.createElement("option");

    $opt.textContent = program.getData();
    $opt.value = programs.indexOf(program);

    $programSelect.appendChild($opt);

}


$addMovieButton.addEventListener("click", addMovieToProgram);

function addMovieToProgram() {

    var selectedProgramIndex = $programSelect.value;
    var selectedMovieIndex = $movieSelect.value;

    var program = programs[selectedProgramIndex];

    var movie = movies[selectedMovieIndex];

    program.addMovie(movie);

    // for (var i = 0; i < )
    //     if ($programSelect.childNodes.value === selectedProgramIndex) {
    //         $programSelect.childNode.textContent = program.getData();
    //     }

}
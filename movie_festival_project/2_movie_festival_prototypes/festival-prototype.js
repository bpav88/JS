'use strict';
(function () {

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    };


    function Movie(title, genre, length) {

        this.genre = genre;
        this.title = title;
        this.length = length;

    }

    Movie.prototype.getData = function () {
        return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
    };


    function Program(date) {

        this.listOfMovies = [];
        this.totalNumbersOfMovies = 0;
        this.date = new Date(date);
    }

    Program.prototype.addMovie = function (newMovie) {
        this.listOfMovies.push(newMovie);
        this.totalNumbersOfMovies++;
    }

    Program.prototype.getData = function () {
        var allData = '';
        var movieLength = 0;

        for (var i = 0; i < this.listOfMovies.length; i++) {
            allData += this.listOfMovies[i].getData() + '\n';
            movieLength += this.listOfMovies[i].length;
        }

        var dd = this.date.getDate();
        var mm = this.date.getMonth();
        var yy = this.date.getFullYear();

        return dd + '.' + mm + '.' + yy + '. ' + 'Program length: ' + movieLength + ' min' + '\n' + allData;
    }


    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }


    Festival.prototype.totalNumbersOfMovies = function () {
        var sum = 0;
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            sum += this.listOfPrograms[i].totalNumbersOfMovies;
        }
        return sum;
    };

    Festival.prototype.addProgram = function (newProgram) {
        this.listOfPrograms.push(newProgram);
    }

    Festival.prototype.getData = function () {
        var allFilmsInProgram = 'Weekend festival has ' + this.totalNumbersOfMovies() + " movies:" + "\n";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            allFilmsInProgram += this.listOfPrograms[i].getData() + '\n';
        }
        return allFilmsInProgram;
    }








    function createMovie(title, genre, length) {
        return new Movie(title, genre, length);
    }
    function createProgram(date) {
        return new Program(date);
    }


    var action = new Genre("Action");
    var drama = new Genre("Drama");
    var comedy = new Genre("Comedy");


    var redemption = createMovie("The Shawshank", action, 130);


    var spiderMan = createMovie("Spider-Man: Homecoming", action, 133);
    var darkTower = createMovie("The Dark Tower", comedy, 140);

    var program1 = createProgram("2018, 04, 12");
    var program2 = createProgram("2019, 10, 10");

    var festival = new Festival("Weekend festival");

    program1.addMovie(redemption);
    program1.addMovie(spiderMan);
    program2.addMovie(darkTower);

    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log(festival.getData());



})();


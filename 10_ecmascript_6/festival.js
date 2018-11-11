'use strict';
(function () {

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        //return this.title + ", " + this.length + "min" + ", " + this.genre.getData();
        return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
    };

    function Program(date) {
        this.date = new Date(date);
        this.movieList = [];
        this.numberMovies = 0;
    }

    Program.prototype.addMovie = function (movie) {
        this.movieList.push(movie);
        this.numberMovies++;
    };

    Program.prototype.getData = function () {
        let totalLength = 0;
        for (let i = 0; i < this.movieList.length; i++) {
            totalLength += this.movieList[i].length;
        }
        let getDataOfMovie = "";
        for (let i = 0; i < this.movieList.length; i++) {
            //getDataOfMovie += "\t" + this.movieList[i].getData() + "\n";
            getDataOfMovie += `\t${this.movieList[i].getData()}\n`;
        }

        const fullDate = this.date.toDateString();
        //var firstLine = fullDate + ", " + totalLength + "\n";
        const firstLine = `${fullDate}, ${totalLength}\n`;
        return firstLine + getDataOfMovie;
    }

    function Festival(name) {
        this.name = name;
        this.programList = [];
    }

    Festival.prototype.numberAllMovies = function () {
        let sum = 0;
        for (let i = 0; i < this.programList.length; i++) {
            sum = sum + this.programList[i].numberMovies;
        }
        return sum;
    };

    Festival.prototype.addProgram = function (program) {
        this.programList.push(program);
    };

    Festival.prototype.getData = function () {
        // var firstLine = this.name + this.numberAllMovies() + "\n";
        const firstLine = `${this.name}${this.numberAllMovies()}\n`;
        let movieDetails = "";
        for (let i = 0; i < this.programList.length; i++) {
            // movieDetails += "\t" + this.programList[i].getData();
            movieDetails += `\t${this.programList[i].getData()}`;
        }
        return firstLine + movieDetails;
    };

    function createMovie(title, genre, length) {
        return new Movie(title, genre, length);
    }
    function createProgram(date) {
        return new Program(date);
    }
    const action = new Genre("Action");
    const drama = new Genre("Drama");
    const comedy = new Genre("Comedy");

    const redemption = createMovie("The Shawshank Redemption", action, 130);
    const spiderMan = createMovie("Spider-Man: Homecoming", action, 133);
    const darkTower = createMovie("The Dark Tower", comedy, 140);

    console.log(redemption.getData());


    // var program1 = createProgram("2018, 10,10");
    // var program2 = createProgram("2019, 10, 10");

    // var festival = new Festival("Weekend festival");

    // program1.addMovie(redemption);
    // program1.addMovie(spiderMan);
    // program2.addMovie(darkTower);

    // festival.addProgram(program1);
    // festival.addProgram(program2);

    // console.log(festival.getData());
})();
function Genre(name) {
  this.name = name;
}

Genre.prototype.getData = function() {
  return (
    this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase()
  );
};

function Movie(title, genre, length) {
  this.genre = genre;
  this.title = title;
  this.length = length;
}

Movie.prototype.getData = function() {
  return (
    this.title +
    ", duration: " +
    this.length +
    " min, genre: " +
    this.genre.getData()
  );
};

function Program(date) {
  this.date = date;
  this.movieList = [];
  this.programLength = 0;
}

Program.prototype.addMovie = function(movie) {
  this.movieList.push(movie);
  this.programLength += movie.length;
};

Program.prototype.getData = function() {
  var dd = this.date.getDate();
  var mm = this.date.getMonth();
  var yyyy = this.date.getFullYear();
  var dateString = dd + "." + mm + "." + yyyy + ".";

  return dateString + ", program duration: " + this.programLength;
};

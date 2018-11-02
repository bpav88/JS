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
    return this.title + ', duration: ' + this.length + ' min, genre: ' + this.genre.getData();
};
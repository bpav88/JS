
function Book(name, author, releaseYear, pages, chapters, language) {
    this.name = name;
    this.author = author;
    this.releaseYear = releaseYear;
    this.pages = pages;
    this.chapters = chapters;
    this.language = language;
}

function Animal(type, name, birthYear, color, height) {
    this.type = type;
    this.name = name;
    this.birthYear = birthYear;
    this.color = color;
    this.height = height;
}

function Person(name, surname, birthYear, phone, address, username, password) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.phone = phone;
    this.address = address;
    this.username = username;
    this.password = password;
}

var kandze = new Book("Kandze", "Marko Vidojkovic", 2005, 450, 22, "srpski");
var dule = new Animal("Dog", "Dule", 2010, "white-brown", 40);
var bogdan = new Person("Bogdan", "Pavlovic", 1988, "066-666-666", "Nemanjina 4",
    "bogdan", "bogdan123456");


console.log(kandze);
console.log(dule.birthYear);
console.log(dule.color);
console.log(bogdan.password);






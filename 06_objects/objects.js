var musicGroup = {
    name: "Partibrejkers",
    founded: 1982,
    frontman: "Zoran Kostic Cane",
    genre: "Rock",
    albums: ["Partibrejkers 1985", "Partibrejkers II", "Partibrejkers III", "Zabava jos traje", "Kiselo i slatko"],
    musicians: ["Cane", "Manza", "Anton", "Ljubisa"],
    groupAge: function () {
        return 2018 - musicGroup.founded;
    },
    numberOfAlbums: function () {
        return musicGroup.albums.length;
    },
    thirdAlbum: function () {
        return musicGroup.albums[2];
    }
};

console.log(musicGroup.name);

console.log(musicGroup.groupAge());
console.log("Ova grupa ima " + musicGroup.numberOfAlbums() + " albuma!");
console.log("Treci album grupe je : " + musicGroup.thirdAlbum());

function MusicGroup(name, founded, frontman, genre, albums, musicians) {
    this.name = name;
    this.founded = founded;
    this.frontman = frontman;
    this.genre = genre;
    this.albums = albums;
    this.musicians = musicians;
    this.groupAge = function () {
        return 2018 - this.founded;
    };
    this.numberOfAlbums = function () {
        return this.albums.length;
    };
    this.thirdAlbum = function () {
        return this.albums[2];
    };
}


var azra = new MusicGroup('Azra', '1978', 'Dzoni Stulic', 'Rok', ['Azra', 'Balkan', 'Suncana strana ulice',
    'Krivo srastanje'], ['Dzoni', 'Nikola', 'Marko']);
console.log(azra);
console.log(azra.groupAge());
console.log(azra.thirdAlbum());
console.log(azra.numberOfAlbums());







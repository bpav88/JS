"use strict";
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + " " + this.surname;
        };

    }

    function Seat(number, category) {
        if (arguments.length == 1 && typeof arguments[0] == "number") {
            this.number = number;
            this.category = "e";
        } else if (arguments.length == 1 && typeof arguments[0] == "string") {
            this.number = Math.floor(((Math.random() * (100 - 10)) + 10));
            if (arguments[0] != "b" && arguments[0] != "e") {
                this.category = "e";
            }
            else {
                this.category = arguments[0];
            }
        } else {
            this.number = number || Math.floor(((Math.random() * (100 - 10)) + 10));
            if (category == undefined || (category != "b" && category != "e")) {
                this.category = "e";
            }
            else {
                this.category = category;
            }
        }

        this.getData = function () {
            return this.number + ", " + this.category;
        };
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            var firstString = this.seat.number + ", " + this.seat.category.toUpperCase();
            var secondString = this.person.getData();
            return firstString + ", " + secondString;
        };
        this.getShortData = function () {
            var firstString = this.seat.category.toUpperCase();
            var secondString = this.person.getData();
            return firstString + ", " + secondString;
        }


    }

    var counter = 1;

    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];

        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        };

        this.getData = function () {
            // var newString = this.date.toDateString() + " " + this.relation;
            // for (var i = 0; i < this.listOfPassengers.length; i++) {
            //     newString = newString + "\n\t\t\t\t" + counter + ", " + this.listOfPassengers[i].getShortData();
            //     counter++;
            // }
            // return newString;

            function firstConsonant(string) {
                for (var i = 0; i < string.length; i++) {
                    if (string[i].toLowerCase() != "a" && string[i].toLowerCase() != "e" && string[i].toLowerCase() != "i" && string[i].toLowerCase() != "o" && string[i].toLowerCase() != "u") {
                        return string[i].toUpperCase();
                    }
                }

            }
            function lastConsonant(string) {
                for (var i = string.length - 1; i >= 0; i--) {
                    if (string[i].toLowerCase() != "a" && string[i].toLowerCase() != "e" && string[i].toLowerCase() != "i" && string[i].toLowerCase() != "o" && string[i].toLowerCase() != "u") {
                        return string[i].toUpperCase();
                    }
                }
            }

            var array = relation.split(" - ");
            var newString = this.date.toDateString() + " " + firstConsonant(array[0]) + lastConsonant(array[0]) + " - " + firstConsonant(array[1]) + lastConsonant(array[1]);

            return newString;


        };
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];

        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        };

        this.getData = function () {
            var total = 0;

            for (var i = 0; i < this.listOfFlights.length; i++) {
                total = total + this.listOfFlights[i].listOfPassengers.length;
            }
            var newString = "Airport: " + this.name + ", total passengers: " + total;
            for (var j = 0; j < this.listOfFlights.length; j++) {
                newString = newString + "\n\t\t" + this.listOfFlights[j].getData();
            }
            return newString;
        }
    }

    function createFlight(relation, date) {

        return new Flight(relation, date)
    }

    function createPassenger(name, surname, number, category) {
        var person = new Person(name, surname);
        var seat = new Seat(number, category);

        return new Passenger(person, seat);
    }

    // var person = new Person("John", "Snow");
    // var seat = new Seat();
    // var person1 = new Person("John", "Doe");
    // var seat1 = new Seat();
    // var person2 = new Person("Johana", "Snow");
    // var seat2 = new Seat();
    // var person3 = new Person("Jane", "Doe");
    // var seat3 = new Seat();
    // var passenger = new Passenger(person, seat);
    // var passenger1 = new Passenger(person1, seat1);
    var passenger = createPassenger("Johana", "Snow", 1, "b");
    var passenger1 = createPassenger("John", "Doe", 2, "b");
    var passenger2 = createPassenger("John", "Snow", 14);
    var passenger3 = createPassenger("Jane", "Doe");

    var airport = new Airport();

    var flight = createFlight("Beograd - Podgorica", new Date("2018-12-12"));
    var flight1 = createFlight("Beograd - New York", new Date("2018-12-30"));

    flight.addPassenger(passenger);
    flight.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight1.addPassenger(passenger3);

    airport.addFlight(flight);
    airport.addFlight(flight1);

    console.log(flight.getData());


})();
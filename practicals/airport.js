"use strict";
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + " " + this.surname;
        };

    }

    function Seat(category, number) {
        this.number = number || Math.floor(((Math.random() * (100 - 10)) + 10));
        if (category == undefined || (category != 'b' && category != 'e')) {
            this.category = 'e';
        }
        else {
            this.category = category;
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


    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];

        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        };

        this.getData = function () {
            var newString = this.date.toDateString() + this.relation;
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                newString = newString + "\n\t" + this.listOfPassengers[i].getData();
            }
            return newString;
        };


    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];

        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        };
    }

    var person = new Person("John", "Snow");
    var seat = new Seat();
    var person1 = new Person("John", "Doe");
    var seat1 = new Seat();
    var passenger = new Passenger(person, seat);
    var passenger1 = new Passenger(person1, seat1);

    console.log(passenger1.getData());


    var flight = new Flight("Beograd-Podgorica", new Date('2018-12-12'));
    // console.log(passenger1.getData());

    flight.addPassenger(passenger);
    flight.addPassenger(passenger1);
    console.log(flight.getData());

    // console.log(flight.getData());

})();
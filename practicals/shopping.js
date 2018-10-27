'use strict';
(function () {
    console.log("Hi");
    function Product(name, price, expirationDate) {
        this.productId = Math.round(Math.random() * 100000);
        this.name = name;
        this.price = price.toFixed(2);
        this.expirationDate = new Date(expirationDate);
        this.getInfo = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[this.name.length - 1].toUpperCase();
            var string = firstLetter + lastLetter + this.productId + ", " + this.name + ", " + this.price;
            return string;
        };
    }
    function ShoppingBag() {
        this.list = [];
        this.addProduct = function (product) {
            var today = new Date();
            if (product.expirationDate > today) {
                this.list.push(product);
            }
        }
        this.averagePrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += this.list[i].price;
            }
            return (sum / i).toFixed(3);
        }
        this.getMostExpensive = function () {
            var max = this.list[0].price;
            var index = 0;
            for (var i = 0; i < this.list.length; i++) {
                if (max < this.list[i].price) {
                    max = this.list[i].price;
                    index = i;
                }
            }
            var info = this.list[index].getInfo();
            return info;
        }
        this.totalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += parseFloat(this.list[i].price);
            }
            return sum;
        }
    }
    function PaymentCard(balance, validUntil) {
        this.balance = balance;
        this.validUntil = new Date(validUntil);
        var today = new Date();
        if (today < this.validUntil) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
    function checkoutAndBuy(shoppingBag, paymentCard) {
        var total = shoppingBag.totalPrice();
        if (total <= paymentCard.balance) {
            if (paymentCard.status) {
                return "Successful purchase!";
            } else {
                return "Card is not active!";
            }
        } else {
            return "The amount that is missing is: " + (total - paymentCard.balance);
        }
    }
    var banana = new Product("Banana", 175, "2019, 10, 10");
    var kivi = new Product("Kivi", 200, "2017, 10, 10");
    var jabuka = new Product("Jabuka", 200, "2018, 11, 11");

    var shoppingBag = new ShoppingBag();
    var payment = new PaymentCard(200, "2018, 10, 10");

    shoppingBag.addProduct(banana);
    shoppingBag.addProduct(kivi);
    shoppingBag.addProduct(jabuka);

    console.log(checkoutAndBuy(shoppingBag, payment));
})();


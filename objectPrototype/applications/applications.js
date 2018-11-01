function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}



App.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return true;
    } else {
        return false;
    }
}

App.prototype.like = function () {
    this.stars++;
}

App.prototype.showStars = function () {
    return this.stars;
}



function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype.getData = function () {
    return this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars;
}
WebApp.prototype.reactBased = function () {
    if (this.technologies === "React") {
        return true;
    } else {
        return false;
    }
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype.getData = function () {
    return this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars;
}

MobileApp.prototype.forAndroid = function () {
    if (this.platforms === "Android") {
        return true;
    } else {
        return false;
    }
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;



var web = new WebApp("Instagram", "www.instagram.com", "React", "CC", 3);
var mob = new MobileApp("Facebook", "Android", "ABC", 4);

mob.like();
console.log(mob);



// For in petlja


var a = [4, 6, 7, 9, 34];


for (var i in a) {
    console.log(i);
}

for (var i in a) {
    console.log(a[i]);
}

////////// OBJEKAT

// x, y, z su nabrojiva svojstva (enumerable)
var o = {
    x: 10,
    y: 11,
    z: 20
}

// ispis imena svojstava, kljucevi:
for (var property in o) {
    console.log(property);
}

// ispis same vrednosti:
for (var property in o) {
    console.log(o[property]);
}
// kada bi koristili o.property -> interpretator gleda kao da je "property" bas postojece ime nekog svojstva


var obj = new Object();
// blaga razlika sa  /var obj = {};/

// kada ovako definisemo svojstva njihova unutrasnja svojstva su default: true
obj.x = 10;
obj.y = 20;


// podesava fina svojstva objekta
Object.defineProperty(obj, 'z', {
    value: 30,
    writable: false,
    enumerable: true, // da li vidimo to svojstvo kada prolazimo kroz objekat, u iteracijama
    configurable: true // da li svojstva samog 'z' mogu da se menjaju
});

obj.z = 15; // ne menja z

console.log(obj);


// objekat je sam po sebi prosiriv, a to proveravamo sa:

var deadline = {};
Object.isExtensible(dealine); // true
deadline.date = 'yesterday';

Object.preventExtensions(deadline);
Object.isExtensible(deadline); //false
deadline.report = true;
deadline.report; // undefined


// seal i freeze
Object.seal(obj)
Object.isSealed(obj)


Object.freeze(obj)
Object.isFrozen(obj)
// jednom zamrznut objekat ne moze vise da se odmrzne


var deadline = Object.freeze({
    date: "yesterday"
});
deadline.date = "tomorrow";
deadline.excuse = "lazy";
deadline.date; 				// "yesterday"
deadline.excuse; 			// undefined
Object.isSealed(deadline); // true
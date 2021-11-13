var number = [1, 2, 3, 4, 5, 6, 7];

number.forEach(function (el) {
    console.log("square of " + el + " is " + el * el);
});

function double (el) {
    return el * 2;
}

var doubleNumbers = number.map(double);
console.log(doubleNumbers);

var isEven = function(el) {
    return el % 2 == 0;
}
var evenNumbers = number.filter(isEven);
console.log(evenNumbers);

var product = function(ac, el) {
    return ac * el;
}

var numProduct = number.reduce(product);
console.log(numProduct);

var sum = function(ac, el) {
    return ac + el;
}

var evenNumSum = number.filter(isEven).reduce(sum);
console.log(evenNumSum);

var multiplie3 = function(el) {
    return el % 3 == 0;
}

var cube = function(el) {
    return el ** 3;
}

var m3CubSum = number.filter(multiplie3).map(cube)
.reduce(sum);
console.log(m3CubSum);
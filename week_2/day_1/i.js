var a = 5;
var b = 6;

if (a > b) {
    console.log("A is Greater");
} else {
    console.log("B is Greater");
}

var P1 = "Ambika";
var P2 = "Ambika";

if (P1 == P2) {
    console.log("Valid Password");
}

var number = 6;

if (number % 2 == 0) {
    console.log("Even Number");
}

var year = 2005;
var age = 2021 - year;

 if(age >= 13 && age <= 19) {
     console.log("Teenage");
 }

 var year = 2000;
var age = 2021 - year;

 if ( age >=20 && age <= 29){
    console.log("Twenties");
}

var a = 18;
var b = 16;
var c = 12;

// a b c
// a c b
// b c a
// b a c
// c a b
// c b a

if (a < b && b < c){
    console.log("a b c");
} else if (a < c && c < b) {
    console.log("a c b");
} else if ( b < c && c < a) {
    console.log("b c a");
} else if (b < a && a < c) {
    console.log("b a c");
} else if(c < a && a < b) {
    console.log("c a b");
} else if (c < b && b < a) {
    console.log("c b a");
}    

var a = 5;
var b = 7;

a < b ? console.log("A") : console.log("B");

var month = "Febuary";

switch (month) {
    case "January":
        console.log("Jan")
        break;
    case "Febuary":
        console.log("Feb")   
        break;
    default:
        break;
}
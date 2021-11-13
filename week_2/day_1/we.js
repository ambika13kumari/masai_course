var a = 4;
var b = 5;
if (a < b) {
    console.log("A is smaller");
} else if (b < a){
    console.log("B is smaller");
}

var password1 = "secret";
var password2 = "password";
if (password1 !== password2) {
    console.log("wrong password");
}

var number = 5;
if (number%2 == 1){
    console.log("Odd Number")
}     
           

var birth_year = 2000;
var age =2021 - birth_year;
if (age >= 20 && age <= 29) {
    console.log("Twenties");
}

var age_a = 32; 
var age_b = 29;
var age_c = 34;

if (age_a > age_b && age_a > age_c){
    if (age_b > age_c){
        console.log("a b c");
       } else {
           console.log("a c b");
       }
    } else if (age_b > age_c && age_b > age_a){
        if (age_a > age_c){
            console.log("b a c");
    } else {
        console.log("b c a");
    }
} else {
    if (age_a > age_b) {
        console.log("c a b");
    } else {
        console.log("c b a")
    }    
}

var c = 4;
var d = 5;
c > d ? console.log("C") : console.log("D");

var day = "Thursday"

switch (day) {
    case "Monday":
        console.log("Mon");
         break;
    case "Tuesday":
        console.log("Tue");
        break;
    case "Wednesday":
        console.log("Wed");
        break;
    case "Thursday":
        console.log("Thur");
        break;
    case "Friday":
        console.log("Fri");
        break;
    case "Saturday":
        console.log("Sat");
        break;
    case "Sunday":
        console.log("Sun");
        break;
    default:
        break;
}


           

function runProgram(input){
    var newInput = input.split(" ");
    var a = Number(newinput[0]);
    var b = Number(newinput[1]);
    var c = Number(newinput)[2];
    var d = Number(newinput)[3];
    var e = Number(newinput)[4];
    var f = Number(newinput)[5];

    var product = a * b * C * d * e * f;
    console.log(product);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});
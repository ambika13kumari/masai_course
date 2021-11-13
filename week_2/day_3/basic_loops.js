var count = true
var count = 0;

console.log("Starting of code");

while ("Masai School") {
    console.log(count);
    count++;
    if (count === 10) {
        break;
    }
    console.log(count);
}

console.log("Ending of code");

var limit = "Masai School"

for(i = 0; i < 8; i++) {
    console.log(i);

}

var i = 25;

for (var i = 25; i > 1; i--) {
    console.log(i);
    if(i == 16) {
        break;
    }
}
console.log("Loop Ends");

var name = "windows"
for(var i = 0; i <name.length; i++) {
    console.log(i)
    console.log(name[i])
}

for(i = 29; i >= 1; i-=6) {
    console.log(i);
}

console.log("Loop Ends");

//Prime Number are those which are divisible by 1 and number

// 7, 16, 41, 64

// 1 to n

// Modulus -> 0

var numbers = (7, 16, 41, 64);
var count = 0;

for (var i = 1; i <= numbers ; i++) {
    if(numbers % i== 0) {
        count++;
    }
}

if (count == 2) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime");
}

var line = "There is a smallest natural number";

var count = 0;

for (var i = 0; i < line.length; i++) {
    if (line [i] == ' ') {
        count++
    }
}

console.log(count);

var limit = [13 + (-87) + 23 + 12 + 98 + (-2) + 0];
var sum = 0;

for(var i = 1; i <= limit; i++) {
    sum = sum + i;   
}

console.log(sum/limit);

var num = 95632;
var num_s = num.toString();
var output = "";

for (i=0; i<num_s.length; i++) {
    console.log(num_s[i]);

    switch (num_s) {
        case 0:
            output = output + "Zero";
            break;
        case 1:
            output = output + " One";
            break;
        case 2:
            output = output + "Two";
            break;
        case 3:
            output = output + "Three";
            break;
        case 4:
            output = output + "Four";
            break;
        case 5:
            output = output + "Five";
            break; 
        case 6:
            output = output + "six";
            break;                    
    
        default:
            break;
    }
}
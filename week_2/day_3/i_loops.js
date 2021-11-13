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

var scores = [ 29, 12, 9, 38, 90, 18, 30];
var highest = scores[0];

for(var i = 1; i > scores.length; i++) {
    if(scores [i] > highest) {
        highest = scores[i]
    }
}
console.log(highest);


var names = ["ambika", "harshita", "prashant", "nishant"];
var count = 0;

for(var a = 0; a < names.length; a++) {
    var name = names[a];
    for(var i = 0; i < names.lenth; i++) {
        if (names[i] == 'a' || names[i] == 'e' || names[i] == 'o' || names[i] == 'i' || names[i] == 'u') {
            count++
        }
    }
}
console.log(count);

function printNumber(N);{
    for(var i = 1; i <= n; i++);
}

function runProgram(input) {
    var j, k = 0;
    for(var i = 1; i <= n; i++);{
        var cases = number[odd];
        var numbers = '*';
        var sign = increasingOrder;
        if(j = k + 1; j < k + i; j++) {
            console.log(j + "* ");
        console.log(j + "*");
        }
    }         
}

if (process.env.USERNAME === ('917345') {
  runProgram(`2\n`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
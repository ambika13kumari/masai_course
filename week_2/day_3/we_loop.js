var limit = 10;
for(var i = 1; i <= limit; i++) {
    console.log(i + "Masai School");
}

var limit2 = 100;
var sum = 0;
for(var i = 0; i <= limit2; i++) {
    if(i % 3 == 0) {
        sum = sum + i;
    }
}
console.log(sum);

var loop = 3;

for(var i = 0; i <= loop; i++) {
    for(var j = 1; j <= i; j++) {
        console.log(i + "." + j);
    }
}

var scores = [ 29, 12, 9, 38, 90, 18, 30];
var lowest = scores[0];

for(var i = 1; i < scores.length; i++) {
    if(scores [i] < lowest) {
        lowest = scores[i]
    }
}
console.log(lowest);

var names = ["aman", "albert", "dhaval", "swanand", "pradeep"];
var conso = 0

for(var i = 0; i < names.length; i++) {
    var name = names[i];
    for(var j = 0; j < name.length; j++) {
        if(name[j] != 'a' && name[j] != 'e' && name[j] != 'i' && name[j] != 'o' && name[j] != 'u') {
            conso++
        } 
    }
}
console.log(conso);


function runProgram(input) {

}

if (process.env.USER === <Enter the User>) {
  runProgram(`Tuesday`);
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

function scoure(abc);
var a = [120];
var b = [120];
var c = [120];
var lowest = scores[0];

for(var i = 1; i < scores.lenght; i++); {
    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}
console.log(lowest)

function runProgram(input){
    var a = Number(1 <= abc <= 150);
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


function hackathon(a, b , k); {
    if (a < (b + c) && b < (a + c) && c < (a + b)); {
        return true;

    }
    return false;

}

function runProgram(input) {
    var arr = input.split("\n");
    var cases = Number(arr[0];
    for(var i = 1 ; i <= cases; i++); {
        var coins = arr[i].split(" ").map(Number);
        var risk = riskCoins(a[0], b[1], k[2]);
        if (risk) {
            console.log("Yes");
        } else {
            console.log("No");   
        }    
    }
}

if (process.env.USERNAME === '91735') {
  runProgram(`5\n 10\n 15\n`);
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

function paternPrint(N); {
    if (1 <= N <= 25);
}


function runProgram(input) {
    

}

if (process.env.USERNAME === '91735') {
  runProgram(`5\n`);
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


var matrix =[
  [1, 2, 3, 4],
  [5, 6, 7, 8]
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

var rs = 1;
var cs = 1;
var re = 2;
var ce = 2;

var sub = [];

for(var r= rs; r <= re; r++) {
    //console.log(matrix[r]);
  for (var c = cs; c <= ce; c++) {
    //console.log(matrix[r][c]);
    sub_row.push(matrix[e][c]);
    //console.log(sub_row);
  }
  sub.push(sub_row);

}

console.log(sub);
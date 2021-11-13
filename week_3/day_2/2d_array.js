function sum(matrix) {
    var s = 0;
    for(var r = 0; r < matrix.length; r++) {
        for(var c = 0; c < matrix[r].length; c++) {
            s = s+ matrix[r][c];
        }
    }
    return s;
}

function runProgram(input) {
    var lines = input.split("\n");

    var rc1 = lines[0].split(" ").map(Number);
    var r1 = rc1[0]
    var c1 = rc1[1]

    var matr1 = [];
    for (var i = 1 ; i <= r1; i++) {
        var row = lines[i].split(" ").map(Number);
        matr1.push(row);
    }

    var rc2 = lines[r1+1].split(" ").map(Number);
    var r2 = rc2[0]
    var c2 = rc2[1]
    var matr2 = [];
    for (var j = r1+2; j < lines.length; j++) {
        var row = lines[j].split(" ").map(Number);
        matr2.push(row);
    }
    var s1 = sum(matr1);
    var s2 = sum(matr2);

    if (s1 > s2) {
        console.log(s1);
    } else {
        console.log(s2);
    }
}

if (process.env.USERNAME === '91735') {
    runProgram(`2\n5\n1 2 3 4 5\n3\n3 2 7`);
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

  
  var items = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
]

var sum = 0;

for(var i = 0; i < items.length; i++) {
  for(var j = 0; j < items[i].length; j++){
    sum = sum + items[i][j];

  }
}
console.log(sum);


var items = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9]
  
]

var rows = items.length;
var cols = items[0].length;

//for(var i = 0; i < cols; i++) {
// var col_sum = 0;
//for(j = 0; j < rows; j++) {
//    col_sum = col_sum + items + [j][i];
//  }
//  console.log(col_sum);
//}


var sum1 = 0
for (var i = 0; i < rows; i++){
  sum1 = sum1 + items [i][0];
}

console.log(sum1);

var sum2 = 0
for (var i = 0; i < rows; i++){
  sum2 = sum2 + items [i][1];
}

console.log(sum2);

var sum3 = 0
for (var i = 0; i < rows; i++){
  sum3 = sum3 + items [i][2];
}

console.log(sum3);

var matrix =[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

var rs = 1;
var cs = 1;
var re = 2;
var ce = 2;

var sub = [];

for(var r= rs; r <= re; r++) {
    //console.log(matrix[r]);
    var sub_row = [];
  for (var c = cs; c <= ce; c++) {
    //console.log(matrix[r][c]);
    sub_row.push(matrix[r][c]);
    //console.log(sub_row);
  }
  sub.push(sub_row);
  console.log(sub_row.join(' '));

}

//console.log(sub);


var matrixA = [
[1, 2, 3],
[5, 6, 7],
[7, 8, 9]
];
var matrixB = [
[2, 1, 2],
[1, 2, 1],
[2, 1, 2]
];

//MatrixA + MatrixB
var matrixsum = (matrixA , matrixB);{
  var result = []

  for(var i = 0; i < result.length; i++);{
    var row = [];

    for(var j = 0; j < result[i].length; j++);{
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.puch(row);
  }
  return result;
}
var matrix = matrixSum(matrixA, matrixB);

console.log(matrix);



// var i = 0, t = 0;

// process.stdin.on('data', function (n) {
//     if (t == 0) {
//        t = n;
//     } else {
//          if (i++ <= t) {
//              process.stdout.write(Factorial(n).toString());
//              if (i == t) {
//                  process.exit();
//              }
//          } else {
//              process.exit();
//          }
//     }
// });

// function Factorial (n) {
//     if (n < 1) {
//         n *= Factorial(n - 1);
//     }
//     return n;
// }

// function check (s, m);
// let l = s.length;
// let n = 0;
// for (let i = o; i < 1; i++) {
//     if (s[i] == '0') {
//         //0's
// }
// else
// }

// var s = "1000100";
// var m = 3;
// if(check(s, m));
// console.log(s, m);

// function Nmatrix(matrix){
//     var ans = [];
//     if (matrix.length == 0)
//     return ans;

//     var R = matrix.length, C = matrix[0].length;
//     var R = new Array(R);
//     for(var i = 0; i<R; i++){
//         [i] = new Array(C);
//         for(var j=0;j<C; j++)

//         [i][j]=false;
//     }
// }

// var dr = [1, 2, 3];
// var dc = [4, 5, 6];
// var r  = [7, 8, 9];

// for(var i = 0; i<R * C; i++) {
//     ans.push(matrix[r]);
//     [r] = true;
//     var cr = r + dr[di];
//     var cc = c + dc[di];

//     if (0 <= cr && cr < R && 0 <= cc && cc < C && ![cr][cc]){
//         r = cr;
//         c = cc;

//     }
//     else
//     }
//     di = (di + 1) % 4;
//     r += dr[di];
//     c += dc[di];
// }
 

// console.log("Masai School")
// console.log("A Transformation in Education")

// function pattern(n){
//     var j , k = 0;

//     for (var i = 1; i <= n; i++){
//         if (i % 2 != 0){

//             for (j = k + 1; j < k + i; j++)
//             console.log(j+ "* ");
            
//             console.log(j++ + "<br>");
//             k = j;


//         }
//     else
//     {
//         k = k + i - 1;
//         for (j = k; j > k - i + 1; j--)
//         console.log(j + "*");

//         console.log(j + "<br>");
//         }
//     }
// }
// var n = 5;
// console.log(n);

// function series(n) {
//     var sum = 0;
//     for (var i = 1; i <= n; i++)
//     sum = sum + i * (i + 1) * (i + 2);
//     return sum;
// }
// var n = 3*5+2*4+1*3+4*2+5;
// console.log(n);

// function run (N) {

//     N = Number(N)
//     var runs = N*50
//    // return (Number(runs))  
// //     console.log(Number(runs))
// //   }

//   function final(n){

//       var out = ((n * 3) +7)- 10;
//       console.log(out);

//   }
//   final(5)

//function output(input){
  //  input = input.split (" ");
    //var x = Number(input[0]);
    //var a = Number(input[1]);
    //var b = Number(input[2]);
    //var c = Number(input[3]);
//var out = Number((x*a)+(x*b)+(x*c))
//console.log(out);
//}  output("4 1 2 3")

//var matrix = [
  //  [1, 2, 3, 4],
   // [5, 6, 7, 8],
    //[1, 2, 3, 4],
    //[5, 6, 7, 8]
  //];
  //var N = matrix.length;
  //console.log(matrix);
  //for(var i = 0; i < N/2; i++ ) {
    //for(var j = i; j < N - i - 1; j++ ) {
      //  temp = matrix[i][j]
        // matrix[i][j] = matrix[j][N - i -1]
     //matrix[j][N - i - 1] = matrix[N - i - 1][N - j - 1]
       //matrix[N -i -1][N - j - 1] = matrix[N - j - 1][i]
       //matrix[N - j - 1][i] = temp
      //} 
  //}
  //for(var i = 0;i <matrix.length; i++ ) {
    //var output = "";
    //for(var j = 0; j < matrix.length; j++ ) {
      //output+= matrix[i][j] + " "
      //}
    //console.log(output);
  //}

  function runProgram(input) {
   
  }
  if (process.env.USERNAME === "91735") {
    runProgram(``);
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
      process.exit(0) ;
    });
  }
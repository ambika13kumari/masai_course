function runProgram(a, b, c) {
    if(a < (b + c) && b < (a + c) && c < (a + b) {
    }

}

if (process.env.USERNAME === <Enter the User>) {
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
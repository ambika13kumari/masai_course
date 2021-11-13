var left = 9;
var right = 9;

for (var i = 1; i <= left; i++){
    console.log(i);
    for(var j = 1; j <= right; j++){
        console.log (i + "." + j); 
    }
}

var limit = 100;
var primes = [];

for (var start = 2; start <= limit; start++) {

    var number = start;
    var count = 0;

    for (var i = 1; i <= number ; i++) {
        if(number % i == 0) {
            count++;
        }
    }
    
    if (count == 2) {
        console.log(number);
    }
}

var year = 2021;

for(var i = 1; i <=11; i++) {
    var days = 31;
    if (i==4 || i == 6 || i == 9 || i == 11) {
        day = 30;
    }    
}
if (i == 2) {
    if(year % 4 == 0) {
        day = 29;
    } else {
        days = 28;
    }    
}
for (var j = 1; j < days; j++) {
    console.log(year + "-" + i + "-" + j);
}


var name = "Masai School";
for(var i = 0; i < name.lenght; i++) {
    console.log(i)
    console.log(name[i])
}


function rightAngledTriangle(a, b, c) {
    if(a <= (b + c) || b <= (a + c) || c <= (a + b)) {
        return true;
    }
    return false;
}

function runProgram(input) {
    var arr = input.split("\n");
    var cases = Number(arr[0]);
    for(var i = 1; i <= cases; i ++) {
        var sides = arr[i].split(" ").map(Number);
        var rightAngled = rightAngledTriangle(sides[0], sides[1], sides[2]);
        if(rightAngled) {
            console.log("Yes");
        } else {
            console.log("No")
        }    
    }
}

if (process.env.USERNAME === '91735') {
  runProgram(`3\n2 4\n2 5\n2`);
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


var exponent = function(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(5, 3));

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(9678));

var str = ["HTML" , "CSS", "JAVA", "JS", "ANDROID"]
str.length  
//return

 
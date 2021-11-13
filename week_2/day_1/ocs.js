var year = 2014;

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

var year = 2014;

if (i == 2) {
    if(year % 4 == 0) {
        day = 29;
    } else {
        days = 28;
    }    
}
console.log(year + "-" + i + "-" + j);{

    console.log("Leap year");

    console.log("Not leap year");
}

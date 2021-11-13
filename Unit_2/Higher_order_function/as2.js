var arr =  ["apple", "windows", "ubuntu"];
var firstChar = function(string){
    return(string)[0];
}

var firstCharofArr = arr.map(firstChar);
console.log(firstCharofArr);
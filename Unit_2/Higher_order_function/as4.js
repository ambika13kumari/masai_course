var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"]
var lengthisodd = function(string){
    if(string.length % 2 != 0) {
        return string;
    }
}
var oddcharinArr = arr.filter(lengthisodd)

var count = function(string){
    return string.length;
}
var lengthofStringinArr = oddcharinArr.map(count);

var sumofNuminArr = function(ac,el){
    return ac + el;
}

var total = lengthofStringinArr.reduce(sumofNuminArr);
console.log(total);
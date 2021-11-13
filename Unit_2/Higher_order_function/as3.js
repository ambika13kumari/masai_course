var arr = ["apple", "windows", "ubuntu", "cola", "system"];
var fstOrLstCharisA = function(string){
    if((string[0] == "a") || (string[string.length - 1] == "a")){
        return string;
    }
}
var fstOrLstCharisAofArr = arr.filter(fstOrLstCharisA);

console.log(fstOrLstCharisAofArr);

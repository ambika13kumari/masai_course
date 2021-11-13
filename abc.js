// var arr = []

// for(var i = 1 ; i<11 ; i++) {
//     arr.push(i)
// }
// console.log(arr)

//var str = "34 45 66 77 88 99"

//var input = str.split(" ").map(Number)
// var arr = str.split(" ")
// // arr=['1', '2', '3', '4', '5', '6']
// var arr2 = []
// for(var i = 0 ; i<arr.length ; i++){
//     arr2.push(Number(arr[i]))
// }
//console.log(input)

//function runProgram(input){
  //  input=Number(input)
//if (input > 40){
  //console.log("Apply Brake");
//} else {
  //console.log("Keep Going");
//}
//}

// // function runProgram(input){
//   var arr = input.split(" ").map(number)
//   if (speed > 40){
//     console.log("Apply Brake");
//   } else {
//     console.log("Keep Going");
// }

//var str = "12345667"

//console.log(str.split(" "))

var item = [2,8,7,9,7]
var queue = []
var enqueue = (item) => queue.push(item);

var dequeue = () => queue.shift();
console.log(queue);
console.log(enqueue);

function Queue() {
  this.queue = {};
  this.tail = 0;
  this.head = 0;
}

// Add an element to the end of the queue.
Queue.prototype.enqueue = function(element) {
  this.queue[this.tail++] = element;
}

// Delete the first element of the queue.
Queue.prototype.dequeue = function() {
  if (this.tail === this.head)
      return undefined

  var element = this.queue[this.head];
  delete this.elements[this.head++];
  return element;
}
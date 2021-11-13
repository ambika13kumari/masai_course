var arr = [2, 4, 5, 3, 6, 8];
 
 
    var newarr = []
     for(var i = 0; i < arr.length; i++) {
         if(i % 2== 0) {
             newarr.push(arr[i]);
         }
     }

     var isEven = function(num) {
        return num % 2 == 0;
    }
    
    var EvenItems = newarr.filter(isEven);
    
    console.log(EvenItems);
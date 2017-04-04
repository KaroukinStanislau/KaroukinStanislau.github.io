   var a = [0, 1, 2, 2, 3, 4, 11, 22, 69, 235, 459, 637, 789, 854];
   a.sort(function(a, b) {
     return a - b;
   })

   console.log(search(a, 235));
   console.log(search(a, 0));
   console.log(search(a, 854));

   function search(array, value) {
     return recursive(array, value, 0, array.length);
   };

   function recursive(array, value, left, right) {
     if (left > right) {
       return -1;
     }
     var middle = Math.floor((right + left) / 2);
     if (array[middle] > value) {
       return recursive(array, value, left, middle - 1);
     } else if (array[middle] < value) {
       return recursive(array, value, middle + 1, right);
     } else {
       return middle;
     }
   }

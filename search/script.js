var a = [0, 1, 2, 2, 3, 4, 11, 22, 69, 235, 459, 637, 789, 854];

console.log(recursive(a, 235));
console.log(recursive(a, 0));
console.log(recursive(a, 854));

function recursive(array, value, left, right) {
  if (typeof left === 'undefined' || typeof right === 'undefined') {
    left = 0;
    right = array.length;
  }
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

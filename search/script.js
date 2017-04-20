var a = [0, 1, 2, 2, 3, 4, 11, 22, 69, 235, 459, 637];

console.log(binarySearch(a, 235));
console.log(binarySearch(a, 0));
console.log(binarySearch(a, 854));
console.log(binarySearch(a, -854));
console.log(binarySearch([], 0));

function binarySearch(array, value, left, right) {
  if (typeof left === 'undefined' || typeof right === 'undefined') {
    left = 0;
    right = array.length;
  }
  if (left > right) {
    return -1;
  }
  var middle = Math.floor((right + left) / 2);
  if (array[middle] === value) {
    return middle;
  } else if (array[middle] > value) {
    return binarySearch(array, value, left, middle - 1);
  } else {
    return binarySearch(array, value, middle + 1, right);
  }
}

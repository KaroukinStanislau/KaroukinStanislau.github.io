'use strict';

function isArrayOne(arr) {
  return arr.constructor === Array;
}

function isArrayTwo(arr) {
  return arr instanceof Array;
}

function isArrayThree(arr) {
  return {}.toString.call(arr) === '[object Array]'
}

function range(a, b, step = 1) {
  var arr = [];
  // condition for one argument
  if (typeof b == 'undefined') {
    b = a;
    a = 0;
  }
  for (var i = a; i < b; i += step) {
    arr.push(i);
  }
  return arr;
}

function compact(arr) {
  return arr.filter(function(element) {
    return element ? true : false;
  });
}

function compactCycle(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      res.push(arr[i]);
    }
  }
  return res;
}

function sum(arr) {
  return arr.reduce(function(acc, val) {
    return acc + val;
  })
}

function sumCycle(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function unique(arr) {
  return arr.filter(function(element, index, array) {
    return array.indexOf(element) === index;
  });
}

function last(arr) {
  return arr[(arr.length - 1)];
}

function excludeLast(arr, count = 1) {
  var res = [];
  for (var i = 0; i < arr.length - count; i++) {
    res.push(arr[i]);
  }
  return res;
}

console.log("--------- isArray ---------");
console.log(isArrayOne([]));
console.log(isArrayOne({}));
console.log(isArrayTwo([]));
console.log(isArrayTwo({}));
console.log(isArrayThree([]));
console.log(isArrayThree({}));

console.log("\n--------- range ---------");
console.log(range(5));
console.log(range(1, 5));
console.log(range(1, 10, 2));

console.log("\n--------- compact ---------");
console.log(compact([false, {}, 0, 1, [], null, "", undefined, NaN, Infinity]));
console.log(compactCycle([false, {}, 0, 1, [], null, "", undefined, NaN, Infinity]));

console.log("\n--------- sum ---------");
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumCycle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log("\n--------- unique ---------");
console.log(unique([1, 1, 1, 2, 1, 1, 2, 3, 6, 5, 4, 4, 4]));

console.log("\n--------- last ---------");
console.log(last([1, 2, 3, 4, 5, 6]));

console.log("\n--------- excludeLast ---------");
console.log(excludeLast([1, 2, 3, 4, 5], 2));
console.log(excludeLast([1, 2, 3, 4, 5]));

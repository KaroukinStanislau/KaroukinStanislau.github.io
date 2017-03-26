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

function range() {
  var arr = [];
  switch (arguments.length) {
    case 1:
      {
        for (var i = 0; i < arguments[0]; i++) {
          arr.push(i);
        }
      }
      break;
    case 2:
      {
        for (var i = arguments[0]; i < arguments[1]; i++) {
          arr.push(i);
        }
      }
      break;
    case 3:
      {
        for (var i = arguments[0]; i < arguments[1]; i++) {
          if (i % (arguments[2]) !== 0) {
            arr.push(i)
          }
        }
      }
      break;
  }
  return arr;
}

function compact(arr) {
  return arr.filter(function(arr) {
    return Boolean(arr).valueOf() === true;
  });
}

function compactCycle(arr) {
  var res = [];
  arr.forEach(function(i) {
    if (Boolean(i).valueOf() === true) {
      res.push(i);
    }
  });
  return res;
}

function sum(arr) {
  return arr.reduce(function(acc, val) {
    return acc + val;
  })
}

function sumCycle(arr) {
  var sum = 0;
  arr.forEach(function(i) {
    sum += i;
  });
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
  arr.length = arr.length - count;
  return arr;
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
console.log(compact([false, 0, 1, {}]));
console.log(compactCycle([false, 0, 1, {}]));

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

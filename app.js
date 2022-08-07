/* 
PROBLEM 1

Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

Refactor it to use the rest operator & an arrow function:
*/
numArray = [1,2,3,4,5,6,7]
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);  
// filterOutOdds(...numArray) will return [2, 4, 6]
// filterOutOdds(2,4,5,8,10) will reutrn  [2,4,8,10]



/* 
PROBLEM 2

findMin

Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

*/
numArray2 = [25,46,87,101,35,21]
const findMin = (...nums) => nums.reduce((acc, currVal) => (currVal < acc ? currVal : acc));
// findMin(...numArray2) will reutrn 21
// findMin(121,34,789,65,7) will return 7



/*
PROBLEM 3

mergeObjects

Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

*/

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// mergeObjects({a:1, b:2}, {c:3, d:4}) will return {a: 1, b: 2, c: 3, d: 4}


/* 
PROBLEM 4

doubleAndReturnArgs

Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

*/

const doubleAndReturnArgs = (arr, ...toBeDoubled) => [...arr, ...toBeDoubled.map(num => num*2)];

// doubleAndReturnArgs([1,2,3],4,4) will return [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) will return [2, 20, 8]



/*
regular function expression way of writing the arrow function above

function doubleAndReturnArgs (arr, ...toBeDoubled) {
  return [...arr, ...toBeDoubled.map(function(num) {
    return (num *2);
  }) ];
}

*/



/*

PROBLEM 5

Slice and Dice!

For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.

*/


/* remove a random element in the items array
and return a new array without that item. 
*/

let partyFood = ['pizza', 'chips', 'cake', 'soda']

const removeRandom = items => {
  let indx = Math.floor(Math.random() * items. length);
  return [...items.slice(0, indx), ...items.slice(indx +1)];
}
// In a way it does not really delete an item from the array, but instead selects the 3 random items and places it in a new array



/** Return a new array with every item in array1 and array2. 
*/

let stuff1 = [2,2,2];
let stuff2 = [2,3,5];

const extend = (array1, array2) => [...array1, ...array2];
// extend(stuff1, stuff2) will return [2, 2, 2, 2, 3, 5]



/** Return a new object with all the keys and values
from obj and a new key/value pair 
*/

const addKeyVal = (obj, key, val) => {
  const newObj = {...obj};
  newObj[key] = val
  return {...newObj};
}



/** Return a new object with a key removed. */

const car = {model: 'acura', year: 2022, color: 'siver'}

function removeKey(obj, key) {
  newObj2 = {...obj};
  delete newObj2[key];
  return newObj2
}

// removeKey(car, 'color') will return {model: 'acura', year: 2022}
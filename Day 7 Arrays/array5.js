const arr = [4, 60, 98, 88, 85, 58, 98, 10, 44, 21, 77, 38, 8, 35, 3, 39, 23, 80, 23, 80];

const sort = arr.sort((a, b) => a - b);

console.log(sort); //sort in ascending order
console.log(arr); // the same sort

////////////////////////////////

const array = [4, 60, 98, 88, 85, 58, 98, 10, 44, 21, 77, 38, 8, 35, 3, 39, 23, 80, 23, 80];

const sorted = [...array].sort((a, b) => a - b);

console.log(sort); //sort in ascending order
console.log(array); // not the same this is not effected

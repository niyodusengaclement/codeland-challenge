// No recursion factorial

const factorial = (n) => {
  let count,
    fact = 1;
  if (n === 0) return 1;
  if (n < 0 || n > 12) throw "RangeError";
  for (count = 1; count <= n; count++) {
    fact = fact * count;
  }
  return fact;
};
factorial(3);

// var fib = function (steps) {
//
const phi = (Math.sqrt(5) + 1) / 2;
//
// const golfenRatioFib = Math.pow(phi, steps) /Math.sqrt(5)
//   return Math.round(golfenRatioFib);
// };

var fib = function (steps) {
  let fibNum = [0n, 1n];
  for (let count = 1n; count <= steps; count++) {
    fibNum = [fibNum[1], fibNum[0] + fibNum[1]];
  }
  return fibNum[0];
};
// console.log("===============Fibonacci Sequence=====================");
// console.log(fib(7899));
// console.log("====================================");

// _____________________________________________________________________________

const grow = (x) => x.reduce((a, b) => a * b);
// grow([1,6,4,8]) => 1 * 6 * 4 * 8

const maps = (x) => x.map((val) => val * 2);

const fakeBin = (x) =>
  x
    .split("")
    .map((val) => (val >= 5 ? 1 : 0))
    .join("")
    .toString();
// fakeBin('34567') => 00111
const getAverage = (marks) =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);

const getGrade = (s1, s2, s3) =>
  (s1 + s2 + s3) / 3 >= 90
    ? "A"
    : (s1 + s2 + s3) / 3 >= 80
    ? "B"
    : (s1 + s2 + s3) / 3 >= 70
    ? "C"
    : (s1 + s2 + s3) / 3 >= 60
    ? "D"
    : "F";

const invert = (array) => array.map((val) => val * -1);

const positiveSum = (arr) =>
  arr.filter((val) => val > 0).reduce((a, b) => (b > 0 ? a + b : 0), 0);
// positiveSum([1,2,4,5, -4, -6, -7])
const index = (array, n) => (array.length - 1 < n ? -1 : array[n] ** n);
// index([1,2,7,6,9], 3)
const summation = (num) =>
  new Array(num + 1)
    .fill(0)
    .map((val, i) => i)
    .reduce((a, b) => a + b);

const arr = (N) => (!N ? [] : new Array(N).fill(0).map((val, i) => i));
// arr(9)
const solution = (str) => str.split("").reverse().join("");

const reverseSeq = (n) =>
  new Array(n + 1)
    .fill(0)
    .map((val, i) => i)
    .filter((val) => val !== 0)
    .reverse();

const squareSum = (arr) => arr.reduce((a, b) => b ** 2 + a, 0);

const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((a, b) => a + b);

const greet = (name) => `Hello, ${name} how are you doing today?`;

const doubleInteger = (i) => i * 2;

const makeUpperCase = (str) => str.toUpperCase();

const abbrevName = (name) =>
  name
    .split(" ")
    .map((val) => val.slice(0, 1))
    .join(".")
    .toUpperCase();
// abbrevName('NIYODUSENGA Clement'); N.C

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((val) =>
      val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
    )
    .join("");
};

String.prototype.isUpperCase = function () {
  return this.toString() === this.toString().toUpperCase();
};

const strCount = (str, letter) =>
  str.split("").filter((val) => val === letter).length;
// strCount('You have fucked yourself', 'y');

const testEven = (n) => !(n % 2);
// testEven(5)
const divisibleBy = (numbers, divisor) =>
  numbers.filter((num) => !(num % divisor));
// divisibleBy([1,4,6,7,8, 9], 3);

const noSpace = (x) => x.replace(/ /g, "");
// noSpace("Rwanda Nzi Nziza") => RwandaNziNziza

const countSheeps = (arrayOfSheep) =>
  arrayOfSheep.filter((sheep) => sheep).length;
// countSheeps([true, false, true]) 2
const countPositivesSumNegatives = (input) =>
  !input || input.length < 1
    ? []
    : [
        input.filter((val) => val > 0).length,
        input.filter((val) => val <= 0).reduce((a, b) => a + b, 0),
      ];

function romans(number) {
  const num = number.toString();
  const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const huns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const thous = ["", "M", "MM", "MMM"];
  if (number < 10) return units[number];
  if (number < 100) return tens[num[0]] + units[num[1]];
  if (number < 1000) return huns[num[0]] + tens[num[1]] + units[num[2]];
  if (number < 10000)
    return thous[num[0]] + huns[num[1]] + tens[num[2]] + units[num[3]];
}

function cakes(recipe, available) {
  const avails = Object.keys(available);
  const tot = [];
  if (Object.keys(recipe).length > avails.length) return 0;
  for (const a of avails) {
    if (recipe[a]) tot.push(Math.floor(available[a] / recipe[a]));
  }
  return Math.min(...tot);
}

// write the function isAnagram
const isAnagram = (test, original) =>
  test.toLowerCase().split("").sort().join("") ===
  original.toLowerCase().split("").sort().join("");

// Tribonacci series
function tribonacci(signs, n) {
  for (let i = signs.length; i < n; i++) {
    const nxt =
      signs[signs.length - 1] +
      signs[signs.length - 2] +
      signs[signs.length - 3];
    signs.push(nxt);
  }
  return n === 0 ? [] : n === 1 ? [1] : n === 2 ? signs.slice(0, 2) : signs;
}

// The observed PIN

const findAdjacent = (observed) => {
  const adjascent = [];
  const plusOrMinusThree = (num, org) =>
    num == 10
      ? "0"
      : num > 10 && org !== 8
      ? undefined
      : num < 0
      ? undefined
      : org === 8
      ? "0"
      : num.toString();
  const minusOne = (num) => (num == 1 ? undefined : (num - 1).toString());
  const plusOne = (num) => (num == 9 ? undefined : (num + 1).toString());
  const finder = (pin) => {
    const low = [
      pin,
      plusOrMinusThree(+pin + 3, +pin),
      minusOne(+pin),
      plusOne(+pin),
      plusOrMinusThree(+pin - 3),
    ];
    adjascent.push(...low);
  };

  const ob = observed.toString().split("");
  for (const a of ob) finder(a);
  return adjascent.filter((val) => val !== undefined);
};

const mapCombine = (arr) => {
  const newArr = [];
  for (const a of arr) {
    for (let i = 0; i < arr.length; i++) {
      const val = a.toString() + arr[i];
      if (newArr.indexOf(val) === -1) newArr.push(val);
    }
  }
  return newArr;
};

function getPINs(observed) {
  const arr = findAdjacent(observed);
  if (+observed < 10) return arr;
  return mapCombine(arr);
}

// console.log("====================================");
// console.log(getPINs(339));
// console.log("====================================");

function dblLinear(n) {
  const arr = [1];
  for (let i = 0; i < Math.floor(n); i++) {
    console.log(arr[i]);
    const nxt = [2 * arr[i] + 1, 3 * arr[i] + 1];
    arr.push(...nxt);
  }
  const order = arr.sort((a, b) => a - b);
  console.log("====================================");
  console.log(order);
  console.log("====================================");
  return order[n];
}

console.log("====================================");
console.log(dblLinear(20));
console.log("====================================");

// ============================ Start =================================
/* Write a function:

class solution { public int solution(string S);}
that given a string S consisting of N characters, returns the maximum number of words in a sentence.
For example, given S= "We test coders. Give us a try?", the function should return 4, as explained above.
Given S= "Forget CVs..Save time. x x", the function should return2, as there are four sentences: "Forget CVs" (2 words), ""(0 words), "Save time' (2 words) and" x x" (2words).

Assume that:

-the length of S is within the range [1..100];
-string S consists only of letters (a-z, A-Z), spaces, dots(.), question marks (?) and exclamation point (!).

*/

function maxFinder(text) {
  let max = 0;
  text.split(/\.|\?|\!/).map((val) => {
    const leng = val.split(" ").filter((val) => val !== "").length;
    if(leng > max) max = leng;
  });
  return max;
}

console.log("=================maximum number of words===================");
console.log(maxFinder("We test coders. Give us a try?"));
console.log("====================================");

// =========================== End ==================================
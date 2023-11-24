// toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환합니다.
// 문자로 반환합니다.
// 문자로 반환합니다.
// 문자로 반환합니다.

const num = 3.141592
console.log(typeof num.toFixed(2)); // string
console.log(typeof parseFloat(num.toFixed(2))); // number

// toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환합니다.
const num1 = 1000000
console.log(num1.toLocaleString()); // 1,000,000 (String)
console.log(`${num1.toLocaleString()}원`);


// Number.isInteger()
// 숫자가 정수(integer)인지 확인합니다.

const num2 = 123
const pi = 3.14

console.log(Number.isInteger(num2)); // true
console.log(Number.isInteger(pi)); // false

// Number.isNaN()
// 주어진 값이 'NaN'인지 확인합니다.

// const num3 = NaN
// const num4 = 123
// const str = 'Hello World'
// const nul = null;

// console.log(Number.isNaN(num3)); // true
// console.log(Number.isNaN(num4)); // false
// console.log(Number.isNaN(str)); // false
// console.log(Number.isNaN(nul)); // false

//Number.parseInt() 또는 parseInt()
// 주어진 값(숫자, 문자)를 파싱해 특정 진수(radix)의 정수로 반환합니다.

const str = '3.1415926535'
const num3 = 3.1415926535

console.log(Number.parseInt(str, 10));
console.log(Number.parseInt(num, 10));
console.log(parseInt(str, 10));
console.log(parseInt(num, 10));
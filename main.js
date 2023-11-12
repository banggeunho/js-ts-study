// const string1 = "Hello"
// const string2 = 'Hello' // 리터럴
// const string3 = `Hello ${string1} ?!`  // 템플릿 리터럴

// console.log(string3)

// /////////////////////////////////

// const number = 123;
// const number1 = -123;
// const number2 = -123.1234;
// const pi = .14; // 소숫점만 쓰고 싶으면 일케 써라


// console.log(number + 1);
// console.log(number1 + 1);
// console.log(number2);
// console.log(pi);

// console.log(number + undefined); // NaN
// console.log(typeof (number + undefined));

// /////////////////////////////////
// const a = 0.1
// const b = 0.2

// console.log(a + b) // 부동 소수점 오류
// console.log((a + b).toFixed(1)) // 0.3 string
// console.log(Number((a + b).toFixed(1))); // string to Number


// /////////////////////////////////
// const x = true;
// const y = false;

// console.log(x);
// console.log(y);

// if (x) {
//     console.log('hello');
// }

// // let age = null; // 재할당 가능 (어떠한 값이 존재하지 않는다.) (명시적)
// let age; // 얘는 따로 작성하지 않아도 undefined이다. (암시적)

// console.log(age);

// setTimeout(function () {
//     age = 85;
//     console.log(age);
// }, 1000);

// ////////////////////////

// const user = {
//     name: "geunho",
//     age: 85,
//     email: "null"
// }
// console.log("🚀 ~ file: main.js:59 ~ user:", user)
// // 지우기는 shift + opt + d  // turbo console log

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.email); // 해당 속성이 없으면 undefiend (암시적)

// ////////////////////////
// // const fruits = new Array('Apple', 'Banana', 'Cherry'); // 생성자 방식
// const fruits = ['Apple', 'Banana', 'Cherry']; // 리터럴 방식


// console.log("🚀 ~ file: main.js:70 ~ fruits:", fruits)
// console.log("🚀 ~ file: main.js:70 ~ fruits:", fruits[1])
// console.log("🚀 ~ file: main.js:70 ~ fruits:", fruits[2])
// console.log("🚀 ~ file: main.js:70 ~ fruits:", fruits.length)
// console.log("🚀 ~ file: main.js:70 ~ fruits:", fruits[fruits.length - 1])


// ////////////////////////

// // const users = new Object(); // 생성자 방식
// // users.name = "geunho";
// // users.age = 85;
// // console.log("🚀 ~ file: main.js:83 ~ users:", users)


// // function Users() { // 함수를 이용한 방식
// //     this.name = "geunho";
// //     this.age = 123
// // }

// // const users = new Users();

// // console.log("🚀 ~ file: main.js:97 ~ users:", users)


// const users = { // 리터럴 방식
//     name: "geunho",
//     age: 123,
//     age: 24, //나중에 작성한 값이 우선순위가 있음. 덮어씌어짐.
// } // 순서는 따로 존재하지 않음

// const key = "age";

// console.log("🚀 ~ file: main.js:99 ~ users:", users)
// console.log("🚀 ~ file: main.js:99 ~ users:", users.name) // 점표기법
// console.log("🚀 ~ file: main.js:99 ~ users:", users['name']) // 대괄호 표기법
// console.log(users[key])


// const userA = {
//     name: "geunho",
//     age: 24, //나중에 작성한 값이 우선순위가 있음. 덮어씌어짐.
// }

// const userB = {
//     name: "donjae",
//     age: 22, //나중에 작성한 값이 우선순위가 있음. 덮어씌어짐.
//     parent: userA
// }

// console.log("🚀 ~ file: main.js:122 ~ us:", userB)
// console.log("🚀 ~ file: main.js:122 ~ us:", userB.parent)
// console.log("🚀 ~ file: main.js:122 ~ us:", userB.parent.name)


// const userArray = [userA, userB]
// console.log("🚀 ~ file: main.js:129 ~ userArray:", userArray)
// console.log("🚀 ~ file: main.js:129 ~ userArray:", userArray[0].name)




// ////////////////////////
// function getNumber() {
//     console.log('Hello');
//     return 123;
// }

// console.log("🚀 ~ file: main.js:143 ~ getNumber():", getNumber()); // 123
// console.log(typeof getNumber); // function
// console.log(typeof getNumber()); // Number

// const getNum = function () {
//     return 123;
// } // 익명 함수

// console.log("🚀 ~ file: main.js:149 ~ getNum ~ getNum:", getNum)
// console.log("🚀 ~ file: main.js:149 ~ getNum ~ getNum:", typeof getNum)
// console.log("🚀 ~ file: main.js:149 ~ getNum ~ getNum:", getNum())
// console.log("🚀 ~ file: main.js:149 ~ getNum ~ getNum:", typeof getNum())


// const a = function() {
//     console.log('A');
// }

// const b = function(c) {
//     console.log(c);
//     a()
// };

// b(a);
// // const functionData = hello // 자바스크립트에서 함수는 하나의 데이터로 취급한다.


// /////////////////////////////////////////////////////////
// const a1 = 1; // num
// const b1 = '1'; // string

// console.log("🚀 ~ file: main.js:170 ~ a1:", a1)
// console.log("🚀 ~ file: main.js:172 ~ b1:", b1)

// console.log (a1 == b1)  // 동등 연산자 -> 형 변환이 일어남
// console.log (a1 === b1) // 일치 연산자 -> 형 변환 없음



// const a2 = 2;
// const b2 = true;

// console.log(a2 == b2); // 형 변환이 일어나서 둘 다 참으로 판별 -> 권장 X, 일치(===) 연산자를 가급적 사용하자.




/////////////////////////////

// falsy data
// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''
// 7) 0n // big int
// 8) -0

if (true) {
    console.log('참!');
}

if (!false) {
    console.log('참!');
}

if (123) {
    console.log('참!')
}

if (0) {
    console.log('거짓') // print x
}

if (-1) {
    console.log('참!') // 참 출력됨
}

if ('0') {
    console.log('참!')
}

if (null) {
    console.log('거짓')
}

if (NaN) {
    console.log('거짓')
}

if (undefined) {
    console.log('거짓')
}

if ('') {
    console.log('거짓')
}

if (0n) {
    console.log('거짓')
}

let fruits = ['Apple', 'Banana']
fruits = [];

if (fruits.length) { // 조건을 그냥 fruits로 할경우 아이템이 들어있찌 않은 경우에도 참으로 통과
    console.log("아이템이 들어있습니다!");
} else {
    console.log("아이템이 들어있지 않습니다.");
}



////////////////////////

// typeof로 확인하기 string, num, boolean, undefined 사용가능
console.log(typeof 'Hello' === 'string');
console.log(typeof 123 === 'number');
console.log(typeof false === 'boolean');
console.log(typeof undefined === 'undefined');

// 얘네는 typeof로 타입을 확인할 수 없음
console.log(typeof null === 'object'); // false -> null은 object
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')


console.log(typeof function () {} === 'function');


// constructor는 Array, Object 확인 가능 null은 불가능
console.log([].constructor === Array)
console.log({}.constructor === Object)

// null 타입 확인
console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null");

function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null));
console.log(checkType(123));
console.log(checkType('Hello'));
console.log(checkType(function() {}));


























































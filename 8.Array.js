// .length
// 배열의 길이(숫자)를 반환합니다.

let arr = ['A', 'B', 'C'];
console.log(arr.length); // 3
console.log(arr[0]);  // A
console.log(arr.at(0)); // A
 
console.log(arr[arr.length - 1]) // C
console.log(arr.at(-1)) // C 꿀팁 얘 쓸때는 at쓰는게 훨 편함


let arr1 = ['A', 'B', 'C']
let arr2 = ['D', 'E', 'F']
let arr3 = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);

arr3 = [...arr1, ...arr2]; // 전개 연산자 사용
console.log(arr3);


// every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(Truthy)를 반환하는지 확인합니다.
// 자바의 matchAll 같은 느낌.
arr = [1, 2, 3, 4]
const isValid = arr.every(e => e < 5);
console.log(isValid); // true


// filter()
// 주어진 콜백함수의 테스트를 통과하는 모든 요소를 새로운 배열로 반환합니다.
// 모든 요소가 테스트를 통과하지 못한다면 빈 배열을 반환합니다.
let numbers = [1, 20, 7, 9, 104, 0, 58]
const filteredNumbers = numbers.filter(number => number < 30);

console.log(filteredNumbers); // [1, 20, 7, 9, 0]

let users = [
    {name: 'Neo', age: 85},
    {name: 'Amy', age: 22},
    {name: 'Lewis', age: 11}
]

const adults = users.filter(user => {
    return user.age >= 19;
})

console.log(adults); // Neo, Amy 객체만 남는다.... 

// find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환합니다.
arr = [5, 8, 130, 12, 44]
const foundItem = arr.find(item => item > 10);
console.log(foundItem); // 130


const foundUser = users.find(user => user.name === 'Amy')
console.log(foundUser); // {name: 'Amy'.....

// .findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환합니다.
const index = arr.findIndex(item => item > 10);
console.log(index); //2 

// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성합니다.
// 깊이의 기본 값은 '1'입니다.

arr = [1, 2, [3, [3, 5, 4]]]
console.log(arr.flat(2)) // [1, 2, 3, 3, 5, 4]
console.log(arr.flat()) // [1, 2, 3, [3, 5, 4]]
console.log(arr.flat(Infinity)); // [1, 2, 3, 3, 5, 4]


// forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행합니다
arr = ['A', 'B', 'C', 'A']
arr.forEach(item => console.log(item))

for(let i = 0; i < arr.length; i ++) {
    console.log(arr[i])
}


// includes()
// 대상 배열이 특정 요소를 퐘하고 있는지 확인합니다.

arr = [1, 2, 3]
console.log(arr.includes(2)) // true

let fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.includes('Apple')); // true
console.log(fruits.includes('cherry')); // false

console.log(users.includes({name: 'Neo', age: 85})); //false
// js는 call by reference 임 -> 객체와 배열 함수는 참조형이기 때문에 
// 메모리 주소가 서로 다르기 때문에 똑같다고 보지 않는 것임.
const neo = users[0];
console.log(users.includes(neo)); // true

// .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환합니다.
arr = ['Apple', 'Banana', 'Cherry']
console.log(arr.join()); // Apple,Banana,Cherry
console.log(arr.join(', ')) //Apple, Banana, Cherry
console.log(arr.join('/')) // Apple/Banana/Cherry


// map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환합니다.

numbers = [1, 2, 3, 4]
const newNumbers = numbers.map(item => item * 2);

console.log(newNumbers);

let newUsers = users.map(user => ({
        ...user,
        isValid: true,
        email: null,
    }))

console.log(newUsers);

// pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
// 대상 배열 원본이 변경됩니다.
 
console.log(fruits.pop())
console.log(fruits)

// push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
// 대상 배열 원본이 변경됩니다.

fruits = ['Apple', 'Banana', 'Cherry']
const newLength = fruits.push('Orange');
console.log(newLength);
console.log(fruits);

fruits.push('Mango', 'Strawberry') // 두개도 추가 가능.
console.log(fruits)

// reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환합니다.
// 각 콜백의 반환 값은 다음 콜백으로 전달됩니다.!!

numbers = [1, 2, 3]
const sum = numbers.reduce((acc, cur) => acc + cur, 0) // 두번째 인수는 초깃값 -> accumulator의 값으로 들어가고 numbers의 요소는 currentValue로 들어간다.
// 약간 수집한 주문에 대한 판매가격 등을 누적으로 더할때 사용하기도 함.

console.log(sum);


users = [
    {name: 'Neo', age: 85},
    {name: 'Amy', age: 22},
    {name: 'Lewis', age: 11}
]

const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);
const names = users
    .reduce((acc, cur) => {
        acc.push(cur.name);
        return acc;
    }, [])
    .join(', ');

console.log(totalAge); // 118
console.log(`평균 나이: ${(totalAge / users.length).toFixed(1)}세`)

// console.log(namesArray); // ['Neo', 'Amy', 'Lewis']
console.log(names);

// reverse()
// 대상 배열의 순서를 반전합니다.
// 대상 배열 원본이 변경됩니다.
arr = ['A', 'B', 'C']
const reversed = arr.reverse()
console.log(reversed); // c, b, a
console.log(arr); // c, b, a

//shift()
// 대상 배열에서 첫번째 요소를 제거하고, 제거된 요소를 반환합니다.
// 대상 배열 원본이 변경도비니다.
// pop과 반대 느낌 -> 첫번째 요소를 제거
arr = ['A', 'B', 'C']
console.log(arr.shift()); // b, c
console.log(arr); // b, c


//slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환합니다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하게 되면 대상 배열의 마지막 끝까지 추출합니다.
arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

console.log(arr.slice(0, 3)); // a, b, c
console.log(arr.slice(4, -1)); // e, f
console.log(arr.slice(4)) // e, f, g
console.log(arr); // a, b, c, d, e, f, g

// some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인합니다.
arr = [1, 2, 3, 4]
console.log(arr.some(e => e > 3)); // true


// sort()
// 대상 배열의 콜백의 반환 값(음수, 양수, 0)에 따라 정렬합니다.
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬합니다.
// 대상 배열 원본이 변경됩니다.

numbers = [4, 17, 2, 103, 3, 1, 0]
numbers.sort()
console.log(numbers) // 0, 1, 103, 17, 2, 3, 4

numbers.sort((a, b) => a - b); // 빼기 연산자를 통해 음수가 나오게 되면 a 변수가 b 변수보다 작다라고 판단.
console.log(numbers); // 0, 1, 2, 3, 4, 17, 103 (오름차순)

numbers.sort((a, b) => b - a);
console.log(numbers); //103, 17, 4, 3, 2, 1 0 (내림차순)

users.sort((a, b) => b.age - a.age);
console.log(users);


// splice()
// 대상 배열에 요소를 추가하거나, 삭제하거나, 교체합니다.
// 대상 배열 원본이 변경됩니다.
// splice(시작점, 제거할 요소의 갯수, 추가할 요소)

 arr = ['A', 'B', 'C']
// item 추가
arr.splice(2, 0, 'X')
console.log(arr); // a, b, x, c

// item 삭제
arr.splice(1, 1);
console.log(arr); // a, x, c

// item 교체
arr.splice(1, 1, 'D')
console.log(arr); // a, d, c

arr.splice(1, 2, 'X', 'Y');
console.log(arr); // a, x, y


// unshift
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환합니다.
// 대상 배열 원본이 변경됩니다.
// push의 반대 개념 얘는 맨 앞에 데이터가 추가됨 python leftappend오 ㅏ같은 개념

arr = ['A', 'B', 'C']
console.log(arr.unshift('X'));
console.log(arr);


// Array.from()
// 유사 배열(Array-like)을 실제 배열로 변환합니다.
const arraylike = {
    0: 'A',
    1: 'B',
    2: 'C',
    length: 3
}

console.log(arraylike.constructor === Array);  //false
console.log(arraylike.constructor === Object); //true

// arraylike.forEach(item => console.log(item));
Array.from(arraylike).forEach(item => console.log(item));


// Array.isArray()
// 배열 데이터인지 확인합니다.

const array = ['A', 'B', 'C'];

console.log(Array.isArray(array)); // true
console.log(Array.isArray(arraylike)); // false
console.log(Array.isArray(Array.from(arraylike))); // true
const str = 'Hello world!';

console.log(str.length);
console.log(str.includes('Hello'));

 // 주어진 index 부터 탐색을 시작하겠다. e부터 탐색 시작
console.log(str.includes('Hello', 1))


//indexOf()
//대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환합니다.
console.log(str.indexOf('world')); // 6
console.log(str.indexOf('g')); // -1 포함되어 있지 않으면 -1 리턴

if (str.indexOf('geunho') === -1) {
    console.log('geunho 라는 문자열이 포함되어 있지 않습니다.');
}

if(!str.includes('geunho')) {
    console.log('geunho 라는 문자열이 포함되어 있지 않습니다.');
}

//padEnd()
// 대상 문자의 길이가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환합니다.

const str1 = '123456'
console.log(str1.padEnd(10, '0')); // 1234560000
console.log(str.padEnd(10, '0')); // 변화 없음 길이가 초과ㅏ하면 패딩을 하지 않음.


//padStart() <-> padEnd() 와 반대 개념
const str2 = '123456'

console.log(str2.padStart(10, '0')) // 0000123456

//replcae 대상 문자에서 어떠한 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환합니다.
const str3 = 'Hello, Hello?!'
console.log(str3.replace('Hello', 'Hi')); // Hi Hello!
console.log(str3.replace(/Hello/g, 'Hi')); // Hi Hi! (정규식 이용)

//slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환합니다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출합니다.

const str4 = 'Hello world!'
console.log(str4.slice(0, 5)); // Hello
console.log(str4.slice(6, -1)); // world
console.log(str4.slice(6)); // world!
console.log(str4); // Hello world!


//split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환합니다.

const str5 = 'Apple, Banana, Cherry';
console.log(str5.split(', ')); // ['Apple', 'Banana', 'Cherry']
console.log(str5.split()) // ['Apple, Banan .....']
console.log(str5.split('')) //['A', 'P' ....]
console.log(str5.split('').reverse()); // 반대로 뒤집기
console.log(str5.split('').reverse().join('')); // 반대로 뒤집기

// 잡다한 method
console.log(str5.repeat(5));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// trim()
// 대상 문자의 앞뒤 공백 문자를(space, tab 등) 제거한 새로운 문자를 반환합니다.
// 중간에 있는 공백은 제거되지 않습니다.
const str6 = '  Geunho!  '
console.log(str6.trim());
console.log(str6.trimStart());
console.log(str6.trimEnd());


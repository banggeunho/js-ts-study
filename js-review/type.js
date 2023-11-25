// 자바스크립트는 원시타입, 참조타입으로 나뉘어져있다.
// string, number, boolean, null, undefined, symbol
// function, Array, Classes, Object

//원시타입은 고정된 크기로 call stack에 저장이 됩니다. 실제 데이터가 변수에 할당 된다.
//참조타입은 Heap에 저장됩니다. 해당 주소는 call stack에 저장이 됩니다.
// 데이터 크기가 정해지지 않고, call stack은 개체 및 배열 값이 아닌 heap 메모리 참조 ID(주소)를 값으로 저장합니다.


// js는 동적 타입입니다.
// 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당(및 재할당) 가능합니다.
// 같은 변수가 여러개의 타입을 가질 수 있습니다.

const name = "Han";
const age = 30;
const hasJob = true;
const car = null;
let anyting;
const sym = Symbol();
const hobbies = ['walking', 'books']
const address = {
    province: '경기도',
    city: '성남시'
}
console.log(hasJob);
console.log(typeof hasJob);
console.log(Array.isArray(hobbies));
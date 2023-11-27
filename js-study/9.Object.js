// Object.assign()
// 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체를 반환합니다.

const target = {a: 1, b: 2}
const source1 = {b: 3, c: 4}
const source2 = {c: 5, d: 6}
const result = Object.assign({}, target, source1, source2); // 빈 객체를 넣어주면 원본 객체를 수정하지 않고도 가능

const result2 = {
    ...target,
    ...source1,
    ...source2
} // 이렇게 하는게 훠얼씬 훠얼씬 까알끔 해보인다.

console.log(target); // a: 1, b: 3, c: 4, d: 6
console.log(result); // target의 b가 source1의 b로 덮어씌워지고, source1의 c가 source2의 c로 덮어쓴다.
// a: 1, b: 3, c: 4, d: 6
console.log(result2);


// Object.entries()
// 주어진 객체의 각 속성과 값으로 하나의 배열을 만들어 요소로 추가한 2차원 배열을 반환합니다.
const user = {
    name: 'Geunho',
    age: 25,
    isValid: true,
    email: 'panggeunho@gmail.com'
}

console.log(Object.entries(user))

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}

// Object.keys()
// 주어진 객체의 속성 이름을 나열한 배열을 반환합니다.
console.log(Object.keys(user));
// Object.values()
// 주어진 객체의 값을 나열한 배열을 반환합니다.
console.log(Object.values(user));
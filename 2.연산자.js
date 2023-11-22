// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)



// // const a = 3
// // a = a + 2
// // console.log(a) // const는 재할당이 불가능

// let b = 3;
// b = b + 2;
// console.log(b); 
// b += 2;
// console.log(b); 
// b -= 2;
// console.log(b); 
// b /= 2;
// console.log(b); 
// b %= 2;
// console.log(b); 

// console.log('=============')

// let c = 3;
// console.log(c);
// console.log(c++);
// console.log(c);
// console.log(++c);
// console.log(c);


// console.log('============부정, 비교 연산자 ========')

// console.log(true);
// console.log(!true);
// console.log(false);

// console.log(!0);
// console.log(!!0);
// console.log(!null);
// console.log(!undefined);
// console.log(!NaN);
// console.log(!'')

// console.log(!{})
// console.log(![])

// console.log('============비교 연산자 ========')

// const num1 = 1;
// const num2 = 3;

// console.log(num1 == num2); // false; 얘는 형변환 (동등 연산자)
// console.log(num1 === num2); // 얘는 형변환 x (일치 연산자) 

// console.log(num1 != num2); // 얘도 형변환이 발생 (부등 연산자)
// console.log(num1 !== num2); // 불일치 연산자

// console.log(num1 > num2);
// console.log(num1 >= num2);


// console.log('============논리 연산자 ========')

// const v1 = true;
// const v2 = false;

// if (v1 && v2) {
//     console.log('모두가 참!');
// }

// if (v1 || v2) {
//     console.log('모두가 거짓!');
// }

// if (v1) {
//     c
// }

// console.log(true && false);
// console.log(1 && 0); // 0이 출력된다. false를 반환하는게 아닌 거짓 데이터를 반환하기 때문에 0이 반환이 된다.
// console.log(-1 && 0);
// console.log('A' && 'B' && 'C'); // C 참인 경우에도 마지막 값을 반환 마지막까지 확인하기 때문
// console.log('A' && 'B' && ''); // '' 


// console.log(false || true);
// console.log(0 || 1);
// console.log(false || 0 || {}); // {}
// console.log(false || [] || null); // [] 출력
// console.log(function () {} || undefined || ''); // 함수 출력
// console.log(false || 0 || NaN); // 마지막이 출력


// console.log(" ==============================");

// const n = 0;

// const num = n || 7;
// console.log(num); // 7

// // Nullish 병합(Nullish Coalescing) : Null, Undefined 데이터를 제외하고 나머지 값들을 마주치면 바로 반환한다.
// const n2 = n ?? 7
// console.log(n2); // 0

// console.log(null ?? 1); // 1
// console.log(undefined ?? null); // null
// console.log(null ?? undefined); // undefined
// console.log(null ?? 1 ?? 2); // 1
// console.log(false ?? 1 ?? 2); // false


// // 삼항(Ternary)

// const a = 1;
// if (a < 2) {
//     console.log('참 !');
// } else {
//     console.log("거짓 !");
// }


// console.log(a < 2 ? '참!' : '거짓!');


// function getAlert(message) {
//     return message ? message : '메세지가 존재하지 않습니다!'
// }

// console.log(getAlert('안녕하세요'));
// console.log(getAlert());


// // 전개 연산자
// console.log("===========================")

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// console.log(arr1); // [1, 2, 3]
// console.log(...arr1); // Spread Operator : 전개합니다. 1 2 3
// console.log(1, 2, 3);

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// const arr4 = [arr1, arr2];
// console.log(arr4); // [Array(3), Array(3)]

// const arr5 = [...arr1, ...arr2]
// console.log(arr5); // [1, 2, 3, 4, 5, 6]

// const obj1 = {x: 1, y: 2}
// const obj2 = {y: 3, z: 4}

// const obj3 = Object.assign({}, obj1, obj2); // 같은 키가 있으면 새로운 obj2로 덮어씌웠음, 나중에 들어오는 속성으로 덮어씌워짐
// console.log(obj3); // {x:1, y:3, z:4}

// const obj4 = {obj1, obj2};
// console.log(obj4); // {obj1, obj2}

// const obj5 = {...obj1, ...obj2};
// console.log(obj5); // {x:1, y:3, z:4}


// function fn(x, y, z) {
//     console.log(x, y, z);
// }

// fn(1, 2, 3);

// const arr_fn = [1, 2, 3]
// fn(arr_fn[0], arr_fn[1], arr_fn[2]);

// fn(...arr_fn); // best practice


// 구조 분해 할당( Destructuring assignment )

let a = 0
let b = 0
let c = 0

const arr = [1, 2, 3] // 세미콜론이 없어서 아래 명령어와 붙어있는 것으로 간주

;[, b, c] = arr // 순서대로 1, 2, 3이 들어감, 동일한 구조에 맞게

console.log(b, c);


const [num, ...rest] = arr
console.log(num, rest); // 1, [2, 3]

const obj = {
    num1: 1,
    num2: 2,
    num3: 3,
    x: 7,
};

// const num1 = obj.a;
// const num2 = obj.b;
// const num3 = obj.c;

const {num1, num2} = obj; // key 값으로 뽑아낸다.
const {x = 4, num3: geunho, y: ten = 10} = obj; // 해당하는 값이 없으면 default 값으로 4를 할당한다.
// 변수이름을 바꾸고 싶으면 콜론(:)을 붙여서 변수명을 바꾸면 됩니다.

console.log(num1, num2);
console.log(x, geunho, ten); // 7 3 10

const {num3, ...rest1} = obj;
console.log(num3, rest1); // 3, {num1:1, num2:2, x:7}


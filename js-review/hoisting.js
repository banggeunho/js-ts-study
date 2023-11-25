console.log(greeting); // undefined
// console.log(greeting1); // before initialization

// var 선언문 호이스팅
// 선언단게는 호이스팅되고, 할당 단계는 그 위치 그대로 이기 때문에
// 선언단계에서 undefined가 들어가기 때문에 greeting에 접근 가능하다.
var greeting = 'hello';
let greeting1 = 'hello123';


func();

// hoisting이 된다. function 키워드로 함수를 생성하면
function func() {
    console.log('hoisting test');
}

// 즉 var, function은 hoisting이 된다.
// let/const도 호이스팅은 된다. 근데 얘네는 undefined를 할당을 해주지 않는다.
// 그래서 값이 들어있지 않기 때문에 초기화 에러가 발생한다.
// TDZ (Temporal Dead Zone) 라고 불린다.

// let / var/ const 결론
// 변수를 생성할 때 재할당이 필요없다면 const를 사용합니다.
// 재할당이 필요하면 let을 사용하지만 변수의 scope를 최대한 좁게 만들어서 사용해줍니다.



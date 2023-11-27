function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outter function : ' + outerVariable);
        console.log('Inner function : ' + innerVariable);
    }
}

const newFunction = outerFunction("outside");
newFunction("inside");

// ㅇㅣ미 outerFunction은 끝났는데 외부함수의 변수를 가져온다.
// 다른 함수 내부에 정의된 함수가 있는 경우, 외부 함수가 실행을 완료하고 해당 변수가 해당 함수 외부에서
// 더 이상 액세스할 수 없는 경우에도 해당 내부 함수는 외부 함수의 변수 및 범위에 액세스할 수 있습니다.



let a = 'a';

function functionA() {
    let b = 'b';
    function functionB() {
        let c = 'c';
        console.log(a, b, c);
    }
    functionB();
    console.log(a, b);
}

functionA();


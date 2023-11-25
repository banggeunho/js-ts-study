// var : 중복선언 가능, 재할당 가능 -> 함수 레벨 스코프
// let : 중복선언 x, 재할당 가능 -> 블록 레벨 스코프
// const : 중복선언 x, 재할당 x -> 블록 레벨 스코프

//var
function func() {
    if(true) {
        var a = 'a';
        console.log(a);
    }
    console.log('함수안' + a);
}
// console.log(a);
func();

// let, const => block level scope
function func1() {
    if(true) {
        let a = 'a';
        console.log(a);
    }
    // console.log(a); // x
}

func1();

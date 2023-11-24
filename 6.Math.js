// Math.abs()
// 주어진 숫자의 절댓값을 반환합니다.

console.log(Math.abs(2));
console.log(Math.abs(-2));

// Math.ceil()
// 올림 처리 -> 정수 반환
console.log(Math.ceil(2.4)); // 3
console.log(Math.ceil(2.7)); // 3

// Math.floor()
console.log(Math.floor(2.4)); // 2
console.log(Math.floor(2.7)); // 2

// Math.
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.54)); // 3

// Min - Max
console.log(Math.max(1, 22, 38, 1000, 192));
console.log(Math.min(1, 22, 38, 1000, 192));

// pow

console.log(Math.pow(4, 2)); // 16
console.log(Math.pow(4, 4)); // 256

//random 숫자 0 이상, 숫자 1 미만의 난수를 반환합니다.
console.log(Math.random())

function random(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(random())
console.log(random(11, 20))
console.log(random(101, 999))
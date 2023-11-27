// 동기
console.log('1');

// 비동기
setTimeout(() => {
    console.log('2');
}, 3000);

// 동기
console.log('3');

// https://kamronbekshodmonov.github.io/JELoop-Visualizer/

// js engine(call stack)에 먼저 실행되는 메소드가 쌓인다.
// web api를 사용하는 경우 web api에 이동하고, setTimeout일 경우 해당 시간동안 대기
// 그 후 callback queue에 적재되었다가,
// event loop가 call stack에 쌓인거를 먼저 처리하고, 다 처리가 되어 비어있을 시 callback queue에 있는 작업들을 처리합니다.

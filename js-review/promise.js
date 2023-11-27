// Promise는 new 키워드와 생성자를 사용해 만듭니다.
// 매개변수로 '실행함수'를 받습니다.
// resolve는 성공적으로 완료해 결과를 값으로 반환할 때 호출해여 하고,
// reject는 작업이 실패하여 오류의 원인을 반환할 때 호출하면됩니다.

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const success = true;
//         if (success) {
//             resolve('성공');
//         } else {
//             reject('실패');
//         }
//     })
// }

// fetchData()
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log('작업 끝'));

// promise 는 세가지 상태를 가집니다.
// 대기(pending), 이행(fulfilled), 거부(rejected)

const fetchData = () => new Promise((resolve, reject) => {
    const success = false;
    if (success) {
        resolve('성공!!');
    } else {
        reject('실패!!');
    }
})

fetchData()
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('작업 끝'));

// fetch 는 promise를 지원한다.

fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(result => console.log(result))
    .then(() => fetch('http://jsonplaceholder.typicode.com/tasdadodo/2'))
    .then(response2 => response2.json())
    .then(result2 => console.log(result2))
    .catch((error) => console.log(error))
    .finally(() => console.log('작업 끝!'));


// promise.all()
// 모든 작업들을 fullfilled된 상태이면, 콜백함수를 실행시킨다.
// 하나라도 에러가 나오면 에러가 난게 반환된다.
// promise.race()
// promise 중 가장 먼저 끝난 것 중에서 성공하거나 실패한것에 대한 것을 반환합니다.
// const response1 = request('http://abc.com');
// const response2 = request('http://bcd.com', request);

// 비동기 작업 시 이전 작업에 대한 의존성이 필요할 경우
// es6 전 callback 함수로 비동기 작업 해결
// es6 -> promise로 비동기 작업 해결
// es7 -> async/await으로 비동기 작업 해결

// call back 이용 시 장풍 사진처럼 된다.
// function firstFunctiono(parameters, callback) {
//     const response1 = request(`http://abc.com?id=${parameters.id}`);
//     callback(response1);
// }
//
// function secondFunction(response1, callback) {
//     const response2 = request('http://bcd.com', response1);
//     callback();
// }
//
// firstFunctiono((parameter, function (response1))) {
//     secondFunction(response1, function () {
//         thirdFunction(param, function() {
//             //....
//         })
//     })
// }

// 가독성이 떨어진다.
// 에러 처리를 한다면 모든 콜백에서 각각 에러 핸들링을 해주어야 합니다.


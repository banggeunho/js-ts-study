//es7에서 나옴
//동기식코드에서 쓰는 try catch 구문을 사용할 수 있습니다.
// 비동기 코드를 동기 코드처럼 보입니다.
// promise 보다 가독성이 좋다? -> 이건 동의 못하겠는데
// await는 aync 내부 함수에서만 사용할 수 있습니다.
async function makeRequests() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response.json();
        console.log('jsonResponse1, ',jsonResponse1);

        const response2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const jsonRepsonse2 = await response2.json();
        console.log('jsonResponse2, ', jsonRepsonse2);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('작업 끝!')
    }
}

makeRequests();
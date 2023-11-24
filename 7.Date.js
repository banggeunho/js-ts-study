let date = new Date()
console.log(date);

const d1 = new Date(2022, 11, 16, 12, 57, 30);
console.log(d1);

const d2 = new Date("Fri Nov 24 2023 21:12:34 GMT+0900 (한국 표준시)");
console.log(d2);
console.log(d2.getFullYear());
console.log(d2.getMonth()); // 월은 0 부터시작
console.log(d2.setMonth(0));
console.log(d2.getMonth());
console.log(d2);

// date에서 월은 제로베이스 0부터 시작.

console.log(d2.getDate());
d2.setDate(13);
console.log(d2.getDate());


// getDay 요일은 값을 얻는 것만 가능합니다.
date = new Date();
const day = date.getDay();


console.log(day); // 0 ~ 6 , 7개의 요일을 나타낼 수 있음.

const getDayKo = day =>
    {
        switch(day) {
            case 0: return '일요일'
            case 1: return '월요일'
            case 2: return '화요일'
            case 3: return '수요일'
            case 4: return '목요일'
            case 5: return '금요일'
            case 6: return '토요일'
        } 
    }

console.log(getDayKo(day));


////////
date = new Date();

console.log(date.getTime())
console.log(date)

date.setTime(1700000000000)
console.log(date.getTime())
console.log(date);


///////////////////////////////////
///////////////////////////////////
//
///////////////////////////////////
///////////////////////////////////
Date.prototype.isAfter = function (date) {
    const a = this.getTime();
    const b = date.getTime();
    return a > b
}

const d3 = new Date('Tue Jan 24 2022 21:12:34 GMT+0900 (한국 표준시)')
const d4 = new Date('Tue Jan 24 2023 21:12:34 GMT+0900 (한국 표준시)')

console.log(d3.isAfter(d4)); // this는 d3의 time
console.log(d4.isAfter(d3)); // this는 d4의 time

const time = new Date().getTime()
console.log(Date.now());
console.log(time);

setTimeout(() => {
    console.log(Date.now());
    console.log(time);
}, 1000)
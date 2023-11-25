//for
console.log("for loop ==== ");
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log('It is 3');
        continue;
    }

    if (i === 5) {
        console.log('stop the loop ');
        break;
    }
    console.log(`Number is ${i}`);
}

const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
}
//for in
// for in은 객체의 속성에 따라 반복합니다.
console.log("for in ==== ");
for (let a in user) {
    console.log(a);
}

//for of
//while
console.log("while ==== ");
let i = 0;
while (i < 10) {
    console.log('Number: ' + i);
    i++;
}

//do while
console.log("do while ==== ");
i = 0;
do {
    console.log('Number ' + i);
    i++;
}
while(i < 10);

const locations = ['서울', '부산', '경기도', '대구'];

// for
// for 루프는 await과 함께 작동하지만, forEach는 await과 완벽하게 작동하지 않습니다.
// forEach는 끝날때까지 도중에 멈출 수가 없다.
// for 루프를 사용한 성능은 forEach 루프보다 빠릅니다.
console.log("for ========");
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}

// forEach
console.log("forEach ========");
locations.forEach((location, index, array) => {
    console.log(`${index} : ${location}`);
    console.log(array);
    }
)

// map
console.log("map ========");
locations.map(location => console.log(location));

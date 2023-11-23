// const a = 7


// const double = () => {
//     console.log(a * 2);
// }

// double()


// // 즉시 실행 함수
// ;(() => {console.log(a * 2)})() // (F)()
// ;(function () {console.log(a * 2);})() // (F)()
// ;(function () {console.log(a * 2);}()) // (F())
// ;!function () {console.log(a * 2);}() // !F()
// ;+function () {console.log(a * 2);}() // +F()


// ;((a, b) => {
//     console.log(a);
//     console.log(b);
// })(1, 2); // 즉시 실행 함수 작성 시 두번째 소괄호로 들어가는 데이터들을 매개변수로 사용할 수 있다.



// ;((a, b) => {
//     console.log(a.innerWidth);
//     console.log(b.body);
// })(window, document); // 즉시 실행 함수 작성 시 두번째 소괄호로 들어가는 데이터들을 매개변수로 사용할 수 있다.



// /* call back 함수 */


// const a_f = callback => {
//     callback();
//     console.log('A');
//     callback();
// }

// const b_f = () => {
//     console.log('B');
// }

// a_f(b_f); // call back : 함수가 실행될 때 인수로 들어가는 또 하나의 함수를 call back이라고 부른다.


// const sum = (a, b, c) => {
//     setTimeout(() => {
//         c(a + b);
//     }, 1000); //call back 함수
// }

// sum(
//     1, 
//     2,
//     value => {
//         console.log(value)
// })

// sum(
//     3,
//     7, 
//     value => {
//         console.log(value);
//     }
// )

// //https://www.gstatic.com/webp/gallery/4.jpg

// const loadImage = (url, callback) => {
//     const imgElement = document.createElement('img');
//     imgElement.src = url;
//     imgElement.addEventListener('load', () => {
//         setTimeout(() => {
//             callback(imgElement);
//         }, 1000);
//     })
// }

// const containerElement = document.querySelector('.container');
// loadImage(
//     "https://www.gstatic.com/webp/gallery/4.jpg",
//     (imgElement) => {
//         containerElement.innerHTML = '';
//         containerElement.append(imgElement);
//     });



/* 재귀 함수 Recursive function */

let i = 0;

const a = () => {
    console.log(`A  ${i}`);
    i += 1;
    if (i < 100) {
        a();
    }
}

// a();

const userA = { 
    name: 'A',
    parent: null
}

const userB = { 
    name: 'B',
    parent: userA
}

const userC = {
    name: 'C',
    parent: userB
}

const userD = {
    name: 'D',
    parent: userC
}

const getRootUser = (user) => {
    if(user.parent) {
        return getRootUser(user.parent);
    }
    return user;
}

console.log(getRootUser(userD));



// 호출 스케줄링(Scheduling a function call)

// const hello = () => {
//     console.log('Hello~');
// }

// const timeout = setInterval(() => {
//     hello();
// }, 1000);

// const h1Element = document.querySelector('h1');
// h1Element.addEventListener('click', () => {
//     console.log('clear');
//     clearTimeout(timeout);
// })


//this
//// 일반 함수의 this는 호출 위치에서 정의.
//// 화살표 함수의 this는 자신의 선언된 함수(lexical) 범위에서 검색
///   -> 현재 함수를 감싸고 있는 또다른 함수의 범위

const user = {
    firstName : 'Geunho',
    lastName : 'Bang',
    age : 86,
    getfullName : function () {
        return `${this.firstName} ${this.lastName}`
    },
    getfullNameArrow : () => {
        return `${this.firstName} ${this.lastName}`
    }
};

function userFunc() {
    this.firstName = "Geunho";
    this.lastName = "Bang";

    return {
        firstName: 'Geunho',
        lastName: 'Bang',
        age : 86,
        getfullName() {
            return `${this.firstName} ${this.lastName}`
        },
        getfullNameArrow: () => {
            return `${this.firstName} ${this.lastName}`
        }
    }
}

const lewis = {
    firstName: 'Lewis',
    lastName: 'Yang'
}

console.log(userFunc().getfullName());
console.log(userFunc().getfullNameArrow());

console.log(userFunc().getfullNameArrow.call(lewis));
console.log(userFunc().getfullName.call(lewis));


const timer = {
    title: 'TIMER!',
    timeout() {
        // console.log(this.title);

        setTimeout(() => {
            console.log(this.title)
        }, 1000); // 함수 위의 함수에서 가져온다

        setTimeout(function () {
            console.log(this.title)
        }, 1000); // undefined (setTimeout 메소드에 정의된 title이 없기 때문에 언디파인드)
    }
}

const titleA = {
    title: 'TIMERA!!!'
}

timer.timeout(titleA);
// timer.timeout.call(titleA);
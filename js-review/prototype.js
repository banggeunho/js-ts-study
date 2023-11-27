let user = {
    name: "John",
    age: 45
}

console.log(user.name);
console.log(user.hasOwnProperty('email'));

// prototype
// 프로토타입은 자바스크립트 객체가 다른 객체로부터 메서드와 속성을 상속받는 메커니즘을 말합니다.
// 이것을 프로토타입 체인이라고 말합니다.


function Person(name, email, birthday) {
    let person = Object.create(personPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

// Person.prototype.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

const personPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const john = new Person('john', 'john@abc.com', '7-10-91');
const han = new Person('Han', 'han@ABC.COM', '12-31-98');
console.log(john);
console.log(han);
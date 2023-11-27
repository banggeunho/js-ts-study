class Person {
    constructor(name, email, birthday) {
        this._name = name;
        this._email = email;
        this._birthday = new Date(birthday);
    }

    introduce() {
        return `Hello my name is ${this.name}`;
    }

    static multipleNumbers(x, y) {
        return x * y;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(value) {
        this._birthday = value;
    }
}

const person = new Person("john", "abc@abc.com", "1998-02-18");
console.log(person.introduce());
console.log(Person.multipleNumbers(2, 5));
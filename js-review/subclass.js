class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `Hello my name is ${this.name}`;
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email);
        this.phone = phone;
        this.address = address;
    }
}

const john = new Client("john", "abc@abc.com", "010-388-3636", "gothem city");
console.log(john);
console.log(john.introduce());
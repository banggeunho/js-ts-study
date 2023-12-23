export class Geunho {

    constructor(
        private name: string,
        private phoneNumber: string,
        private age: number,
        private height: number,
    ) {}

    public getName() {
        return this.name;
    }

    public getPhoneNumber() {
        return this.phoneNumber;
    }

    public getAge() {
        return this.age;
    }

    public toString() {
        return `${this.name} ${this.phoneNumber} ${this.age}, i love you`;
    }
}
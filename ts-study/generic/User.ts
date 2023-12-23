class User<P> {
    constructor(public payload: P) {}

    public getPayload() {
        return this.payload;
    }
}

interface UserAType {
    name: string
    age: number
    isValid: boolean
}

interface UserBType {
    name: string
    age: number
    emails: string[]
}

const geunho = new User<UserAType>({
    name: "Geunho",
    age: 85,
    isValid: true
});

console.log(geunho);
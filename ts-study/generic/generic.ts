interface Obj {
    x: number
}

function toArray(a: string, b: string): string[]
function toArray(a: Obj, b: Obj): Obj[]
function toArray(a: any, b: any) {
    return [a, b];
}

console.log(toArray("hello", "world"));
console.log(toArray({x: 1}, {x: 1}));


function toArrayGeneric<T>(a: T, b: T) {
    return [a, b];
}

console.log(
    toArrayGeneric<string>("NEO", "GEUNHO"),
    toArrayGeneric(1, 2),
    toArrayGeneric(true, false),
    toArrayGeneric([1, 2], [3, 4, 5])
)
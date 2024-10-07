console.log('Hello, TypeScript');


const user = {
    id: 4654,
    firstName: 'Tom Cruise',
    lastName: 'Cruise',
    age: 32
}

console.log(user.age);
console.log(user.id);


function getStatus(firstName: string) {
    if(firstName.length > 10) {
        console.log("PASS");
    } else {
        console.log("FAIL");
    }
}

getStatus(user.firstName)


let age: number = 30;
let flag: boolean = true;
let newName: string = 'Naveen';


age = 40;

let value: boolean;
// value = "Peter"
// value = 50;
value = true;
console.log(typeof value);

let test = 'TypeScript';
console.log(typeof test);

let value1: string;
let value2: number;
let value3: boolean;
let value4: any;
let value5: undefined;
let value6: null;
let value7: void;
let value8: object;
let value9: Function;

value6 = null;
value5 = undefined;
console.log('value7: ',value7);

// TypeScript program to illustrate void keyword

function printSomething(value: any): void {
    console.log('printSomething: ', value);
    // return undefined
}


printSomething('Hello TypeScript');
printSomething(4787);
printSomething(true);



// TypeScript program to illustrate Higher Order function

function operation(a: number, b: number, funcName: Function) : number {
    return funcName(a, b);
}

function add(a: number, b: number):number {
    return a + b;
}

function substract(a: number, b: number): number {
    return a - b;
}

function multiplication(a: number, b: number):number {
    return a * b;
}

function division(a: number, b: number):number {
    return a / b;
}

console.log(operation(5, 4, add)); // 9
console.log(operation(5,4,substract)); // 1
console.log(operation(5,4,multiplication)); // 20
console.log(operation(5,4,division)); // 1.25
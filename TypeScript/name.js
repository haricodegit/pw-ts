console.log('Hello, TypeScript');
var user = {
    id: 4654,
    firstName: 'Tom Cruise',
    lastName: 'Cruise',
    age: 32
};
console.log(user.age);
console.log(user.id);
function getStatus(firstName) {
    if (firstName.length > 10) {
        console.log("PASS");
    }
    else {
        console.log("FAIL");
    }
}
getStatus(user.firstName);
var age = 30;
var flag = true;
var newName = 'Naveen';
age = 40;
var value;
// value = "Peter"
// value = 50;
value = true;
console.log(typeof value);
var test = 'TypeScript';
console.log(typeof test);
var value1;
var value2;
var value3;
var value4;
var value5;
var value6;
var value7;
var value8;
var value9;
value6 = null;
value5 = undefined;
console.log('value7: ', value7);
// TypeScript program to illustrate void keyword
function printSomething(value) {
    console.log('printSomething: ', value);
    // return undefined
}
printSomething('Hello TypeScript');
printSomething(4787);
printSomething(true);
// TypeScript program to illustrate Higher Order function
function operation(a, b, funcName) {
    return funcName(a, b);
}
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
console.log(operation(5, 4, add)); // 9
console.log(operation(5, 4, substract)); // 1
console.log(operation(5, 4, multiplication)); // 20
console.log(operation(5, 4, division)); // 1.25

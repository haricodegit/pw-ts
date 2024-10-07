// TypeScript program to illustrate Array concept

// normal array declaration
let names: string[];
names = ['Tom', 'Peter', 'Naveen', 'Ravi'];

console.log(names[0]);

// using generics
let empNames: Array<string>;
let empIDs: Array<number>
let empInfo: Array<any>

empNames = ['Tom', 'Peter', 'Naveen', 'Ravi'];
empIDs = [ 1, 2, 3, 4 ];
empInfo = [ 1, 'Tom', 32, '1.25LPM', true, null, undefined ]

console.log(empNames);

// multi-type array

let values: (string | number)[];
let val: Array<string | boolean>[];

values = [ 'Naveen', 100, 'Tom', 200, 'Peter', 300, 400, 'Harish', 'Arun', 'Varun' ];
val = [['Tom', true], ['Naveen', true], ['Varun', false]]


console.log(val);


// TypeScript program to illustrate Array concept
// normal array declaration
var names;
names = ['Tom', 'Peter', 'Naveen', 'Ravi'];
console.log(names[0]);
// using generics
var empNames;
var empIDs;
var empInfo;
empNames = ['Tom', 'Peter', 'Naveen', 'Ravi'];
empIDs = [1, 2, 3, 4];
empInfo = [1, 'Tom', 32, '1.25LPM', true, null, undefined];
console.log(empNames);
// multi-type array
var values;
var val;
values = ['Naveen', 100, 'Tom', 200, 'Peter', 300, 400, 'Harish', 'Arun', 'Varun'];
val = [['Tom', true], ['Naveen', true], ['Varun', false]];
console.log(val);

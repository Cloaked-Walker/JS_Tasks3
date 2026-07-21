// 1.var, let & const

// Output will be 10, 40. Becasue let and const are block scoped.   


// 2. Arrow Functions

let add = (a, b) => a + b;
let multiply = (a, b) => a * b;
let greet = (name) => "Hello " + name;


// 3. Template Literals

let name = `Rahul`;
let age = 20;
console.log(`My name is  ${name} and I am ${age} years old.`);


// 4. Destructuring

const student = { name: 'Rahul', age: 21, course: 'BCA' };
const { name, age, course } = student;


// 4. Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);


// 5. Destructuring

const student = {
    name: "Anu",
    age: 20,
    course: "BCA"
};
const marks = [85, 90, 95];

const { name, course } = student;
const [m1, m2, m3] = marks;

console.log(m1, m2, m3);
console.log(name, course);
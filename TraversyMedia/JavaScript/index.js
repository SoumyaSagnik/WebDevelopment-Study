console.log('Hello World!')

// Primitives
// String, Number, Boolean, null, undefined, Symbol
const n = 'John';
const age = 22;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof n); // string
console.log(typeof age); // number
console.log(typeof rating); // number
console.log(typeof isCool); //boolean
console.log(typeof x); //object. Wrong it's due to earlier implementation of JS
console.log(typeof y); // undefined
console.log(typeof z); // undefined

console.log(' ---------------------------------------------------------------------');

// Template String
console.log(`My name is ${n} and I am ${age} years old.`);
// Concatenation
console.log('My name is ' + n + ' and I am ' + age + ' years old.');

console.log('--------------------------------------------------------');

// Strings
console.log(n.length);  // 4
console.log(n.toUpperCase());  // JOHN
console.log(n.lastIndexOf('h')); // 2
console.log(n.substring(1, 3)); // oh
console.log(n.substring(1)); // ohn
console.log(n.substring(0, 1).toLowerCase() + n.substring(1).toUpperCase()); // jOHN

const skills = 'Java, MySQL, JavaScript'
console.log(n.split('')); // ['J', 'o', 'h', 'n']
console.log(skills.split(',')); // ['Java', ' MySQL', ' JavaScript']

// Arrays
const nums = new Array(1, 2, 3, 4, 5);
console.log(nums);
const fruits = ['Apple', 'Mango', 'Grapes'];
console.log(fruits);
console.log(fruits[5]); // undefined
console.log(fruits[1]); // Mango
// In js arrays are dynamic and can contain values of different types.
// Note that mixed is of type const still we're able to manipulate it. We'll however not be able to reassign it and only be able to manipulate it.
const mixed = ['Ball', 69, true, true, 69, 'Cock'];
console.log(typeof mixed[0]); // string
console.log(typeof mixed[1]); // number
console.log(typeof mixed[2]); // boolean
console.log(mixed.length); // 6
mixed.push('lastItem'); // adds element at the end of array
mixed.unshift('firstItem'); // adds element at the beginning of array
console.log(mixed);

mixed.pop();
console.log(mixed); // removes last item
mixed.shift();
console.log(mixed); // removes first item
console.log('-------------------------------------------------------------');

console.log(Array.isArray(mixed)); // true
console.log(Array.isArray('Apple Juice')); // false
console.log(mixed.indexOf(true)); // 2 (displays first occurence)
console.log(mixed.lastIndexOf(true)); // 3 (displays last occurence)

//Concatenate 2 arrays
const cars = ['BMW', 'Audi', 'Mercedes'];
const bikes = ['Yamaha', 'Hero'];
const vehicles = cars.concat(bikes);
const vehicles2 = bikes.concat(cars);
console.log(vehicles); // ['BMW', 'Audi', 'Mercedes', 'Yamaha', 'Hero']
console.log(vehicles2); // ['Yamaha', 'Hero', 'BMW', 'Audi', 'Mercedes']

console.log('------------------------------------------------------------');

// Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23,
    hobbies: ['games', 'music', 'coding', 'movies'],
    address: {
        street: 'Main street',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName); // John
console.log(person.hobbies[2]); // coding
console.log(person.address.city); // Boston
console.log(person.firstName, person.lastName); // John Doe

// Destructuring
const { firstName, lastName } = person;
console.log(firstName); // John
console.log(lastName); // Doe
const { address } = person;
console.log(address); // {street: 'Main street', city: 'Boston', state: 'MA'}
const { address: { city } } = person;
console.log(city); // Boston

// Adding to object
person.email = 'john@gmail.com';
console.log(person.email); // john@gmail.com

console.log('-------------------------------------------------------');

// Array of Objects
const todos = [
    {
        id: 1,
        text: 'Eat',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Study',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Sleep',
        isCompleted: true
    }
];

console.log(todos[1].text, todos[1].isCompleted); // Study false
const todoJSON = JSON.stringify(todos); // convert array of object to JSON
console.log(todoJSON);

const JSONtoArray = JSON.parse(todoJSON); // JSON to array of objects
console.log(JSONtoArray[2].text); // Sleep

console.log('--------------------------------------------------------');

// Loops
for (let i = 0; i < 3; i++) {
    console.log(`For loop: ${i}`);
}

let i = 0;
while (i < 3) {
    console.log(`While loop: ${i}`);
    i++;
}

// Better approach
for (let index of todos)
    console.log(index.text);

console.log('--------------------------------------------------------');

// forEach, map, filter

// foreach
todos.forEach((index) => {
    console.log(index.text);
});

// map
const todoText = todos.map((index) => {
    return index.text;
});
console.log(todoText); // ['Eat', 'Study', 'Sleep']

// filter
const todoCompleted = todos.filter((index) => {
    return index.isCompleted === true;
});
console.log(todoCompleted);

// filter + map
const todoCompletedText = todos.filter((index) => {
    return index.isCompleted === true;
}).map((i) => {
    return i.text;
});
console.log(todoCompletedText); // ['Eat', 'Sleep']

console.log('-------------------------------------------------------');

// Conditional Statements -- Same as java
const a = 10;
const b = a === 10 ? true : false;
console.log(b); // true

console.log('-------------------------------------------------------');

// functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums(5, 4)); // 9
console.log(addNums()); // 2

// arrow function
const add = (num1 = 1, num2 = 1) => console.log(num1 + num2);
add(6, 9); // 15

const diff = (num1, num2) => {       // to use return we need braces
    return num1 - num2;
}
console.log(diff(7, 9)); // -2

const mul = (num1, num2) => num1 * num2;  // one liner arrow function
console.log(mul(5, 4)); // 20

const square = num1 => num1 * num1; // when parameter is 1, can skip (param) to just param 
console.log(square(5)); // 25

console.log('----------------------------------------------------------');

// Class

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBurthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return this.firstName.concat(' ' + lastName);
    }
}

const person1 = new Person('John', 'Doe', '8-12-1989');
const person2 = new Person('Mary', 'Smith', '30-03-2000');

console.log(person2.getFullName());
console.log(person1);

/*
You should avoid using arrow functions in class as they won't be the part of prototype and thus not shared by every instance.
*/

/* to get time taken for operation to complete:
console.time();
operation
console.timeEnd();
*/

/*
document.querySelectorAll() returns a NodeList on which you can use array methods
document.getElementsByClassName() returns an HTML Collection on which we can't perform the array 
methods like map, forEach, etc.
*/

/*
const ul = document.querySelector('.items')
ul.remove() // removes item from dom
ul.lastElementChild.remove()
*/
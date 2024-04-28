"use strict";
// " Function in TypeScript "
Object.defineProperty(exports, "__esModule", { value: true });
console.log(` " Welcome To MY Function Assignment "  `);
// Function are the fundamental bulding blocks of any application in typescript.
// Accept the first and second numbers as a type of number only, i.e 1 and 2 must be a type of number.
// Basic Function.
function lap() {
    console.log("Dell");
}
lap();
// another type function
function add() {
    let number1 = 5;
    let number2 = 2;
    let x = number1 + number2;
    console.log(x);
}
add();
// example 2
function add1(number1 = 5, number2 = 2) {
    let x = number1 + number2;
    console.log(x);
}
add1();
// example 3
function add2(number1, number2) {
    let x = number1 + number2;
    console.log(x);
}
add2(5, 2);
// another example.
function myBio(name = "Fizza", age = 23, studies = "IT") {
    console.log(`MY name is ${name}`);
    console.log(`MY age is ${age}`);
    console.log(` I am student in ${studies}`);
}
myBio();
// example 2
function myBio2(name, age, studies) {
    console.log(`MY name is ${name}`);
    console.log(`MY age is ${age}`);
    console.log(` I am student in ${studies}`);
}
myBio2(" Fizza", 23, "IT");
// Return  function Example.
function sums(num1, num2) {
    let x = num1 + num2;
    return x;
}
console.log(sums(5, 2));
// Arrow Function Example.
const sumNum = (nmbr1, nmbr2) => {
    let y = nmbr1 + nmbr2;
    console.log(y);
};
sumNum(5, 2);
// we define function with datatype declaration and then call function for return utilization..
// " Number "
function sumOfNumbers(x, y, z) {
    return x + y + z;
}
console.log(sumOfNumbers(2, 4, 1));
// " String "
function greet(name) {
    return `Hello, ${name}! "It's a pleasure to meet you." `;
}
const greetings = greet("Miss Jawed");
console.log(greetings);
// " Void Function " => called nonvalue-returning functions
// A function that doesn't return any valuse, or returns undefined.
// Void function specifies that the function doesn't return a value.
function laptopName() {
    console.log("Dell");
}
laptopName(); // invoking
// milkshake example
// milk , banana , suger , dryfruits
function milkShake() {
    let blender = 2 + 4 + 2.5 + 1.5;
    console.log(blender);
}
milkShake();
// bananashake example
// BananaShake example in Number dataType (arguements and parameter)
function bananaShake(milk, banana, suger, dryfruits) {
    return milk + banana + suger + dryfruits;
}
let blender = bananaShake(2, 4, 2.5, 1.5);
console.log(blender);
// Area function example in Number dataType
function roomArea(width, height) {
    return width * height;
}
let calculate = roomArea(10.5, 12);
console.log(calculate);
// "Return Type Function "
// A return is a value that a function returns to the calling value or function when it completes its tasks.
function sum(a, b) {
    return a + b;
}
// sum(5,2) =>invoking
console.log(sum(5, 2));
// "Anonymous Function"
// Anonymous functions, also known as closures,allow the creation of functions which have no specific name.
let greeting = function () {
    console.log(`Hello, Miss Jawed! "It's a pleasure to meet you." `);
    console.log("Hello FiA");
};
greeting();
// AnotherExample Function Declaration
function personName(name, id) {
    console.log(`Welcome, ${name} and Your ID number is ${id}`);
}
personName("Miss Jawed!", 7);
// AnotherExample of Function Return Type
function personName2(name, age) {
    return `My name is ${name} and I am ${age} years old`;
}
const myName = personName2("Fizza", 23);
console.log(myName);
// Optional and Default Parameters
// * TypeScript allows you to define optional and defaults parameters in functions.
// * Optional parameters are denoted by appending a " ? " symbol after the parameter name,
// * and default parameters are specified by providing a default value in the parameter declaration.
// Default Parameter
function welcomeGreet(name, id = 7) {
    return `Welcome, ${name} and Your ID number is ${id}`;
}
const employee = welcomeGreet("Fizza");
console.log(employee);
// Optional Parameter
function welcomeGreet1(name, id) {
    return `Welcome, ${name}`;
}
const employee1 = welcomeGreet1("Fizza");
console.log(employee1);
// optional parameters are also used for conditional statements (loops) => if/else
function welcomeGreet2(name, id) {
    if (id) {
        return `Welcome, ${name} and Your ID number is ${id}`;
    }
    else {
        return `Welcome, ${name}`;
    }
}
const employee2 = welcomeGreet2("Miss Jawed!", 7);
const employee3 = welcomeGreet2("Miss FiA!");
console.log(employee2);
console.log(employee3);
// ANOTHER EXAMPLE Function Syntex.
function myIntro(name, age) {
    return `Hello, My name is ${name} and I am ${age} years old.`;
}
//function call
console.log(myIntro(" Fizza ", 23));
console.log(myIntro(" Jawed ", 50));
/// ANOTHER EXAMPLE NUMBER
function equ(a, b, c) {
    return a + b - c;
}
console.log(equ(5, 3, 1));
// ANOTHER Example of Parameters.
// The Two Types OF Parameters Are : Optional and Default.
// Optional Parameter.
function opt(name) {
    if (name) {
        return `Hello, ${name} Welcome to Ts File..`;
    }
    else {
        return "Invalid Input!";
    }
}
console.log(opt());
console.log(opt("FiA"));
// Default Parameter.
function addition(x, y) {
    return x / y;
}
console.log(addition(7, 2));
function carObj(brand, model, year, color, price, launchStatus, expiry) {
    return {
        brand,
        model,
        year,
        color,
        price,
        launchStatus,
        expiry,
    };
}
const obj = carObj("Ferrari", "Daytona", 2024, "yellow", 2226935, true, null);
const obj1 = carObj("Ferrari", "Daytona", 2024, "yellow", 2226935, true);
console.log(obj);
console.log(obj1);

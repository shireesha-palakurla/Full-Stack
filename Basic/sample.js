// ==========================
// Conditional Statements
// ==========================
let x = 10; // Initialize variable x with a value of 10
if (x > 11) { // Check if x is greater than 11
    console.log("x is greater than 11"); // Log message if true
} else if (x < 11) { // Check if x is less than 11
    console.log("x value is less than 11"); // Log message if true
} else { // If neither condition is true
    console.log("not greater than 10 or 11"); // Log message
}

// ==========================
// Loops
// ==========================
console.log("Loops Example:");

// For Loop (Note: The condition is incorrect; it should be i < 5)
for (let i = 0; i >= 5; i++) { // Incorrect condition; should be i < 5
    console.log("hello " + i); // Log "hello" followed by the value of i
}

// Corrected For Loop
for (let i = 0; i < 5; i++) { // Corrected condition
    console.log("hello " + i); // Log "hello" followed by the value of i
}

// While Loop
let xLoop = 0; // Initialize variable xLoop with a value of 0
while (xLoop < 5) { // Continue looping while xLoop is less than 5
    console.log(xLoop); // Log the current value of xLoop
    xLoop++; // Increment xLoop by 1
}

// ==========================
// Operators
// ==========================
console.log("Operators Example:");

let a = 10; // Initialize variable a with a value of 10
let b = 20; // Initialize variable b with a value of 20
console.log(a + b); // Log the sum of a and b

let num = 10; // Initialize variable num with a value of 10
num += 1; // Increment num by 1 (equivalent to num = num + 1)
console.log(num); // Log the new value of num

let aEqual = 2; // Initialize variable aEqual with a value of 2
let bEqual = 3; // Initialize variable bEqual with a value of 3
if (aEqual == bEqual) { // Check if aEqual is equal to bEqual
    console.log("both are equal"); // Log message if true
} else {
    console.log("both are not equal"); // Log message if false
}

// ==========================
// User Input and Confirmation
// ==========================
console.log("User  Input Example:");

let aInput = prompt("enter a value"); // Prompt user to enter a value
aInput = parseInt(aInput); // Convert the input to an integer
let bInput = prompt("enter b value"); // Prompt user to enter another value
bInput = parseInt(bInput); // Convert the input to an integer
let confirmation = confirm("do you want to add??"); // Confirm if the user wants to add
if (confirmation) { // If user confirms
    console.log(aInput + bInput); // Log the sum of aInput and bInput
} else {
    console.log("operation cancelled"); // Log cancellation message
}

// ==========================
// Arrays
// ==========================
console.log("Array Example:");

let arr = [1, 2, 3, 4, 5, "hello", 'a', [5, 6, 7, 8]]; // Initialize an array with mixed types
console.log(arr[7][3]); // Access and log the 4th element of the nested array (value 8)

for (let i = 0; i < arr.length; i++) { // Loop through the array
    console.log(arr[i]); // Log each element of the array
}

// ==========================
// Objects
// ==========================
console.log("Object Example:");

let name = "shiri"; // Initialize a string variable name
let age = 23; // Initialize a number variable age
let isStudent = false; // Initialize a boolean variable isStudent
console.log(name); // Log the name variable

const person1 = { // Define an object person1
    name: "shiri", // Property name
    age: 24, // Property age
    isStudent: false, // Property isStudent
};
console.log(person1.age); // Log the age property of person1

const person2 = { // Define another object person2
    name: "manoooo", // Property name
    age: 30, // Property age
    isStudent: true, // Property isStudent
};
console.log(person2.name); // Log the name property of person2

// ==========================
// Functions
// ==========================
console.log("Function Example:");

function add() { // Define a function add
    console.log(11 + 2); // Log the result of 11 + 2
}
add(); // Call the add function

function square() { // Define a function square without parameters
    console.log(5 * 5); // Log the result of 5 * 5
}
square(); // Call the square function

function squareWithParam(x) { // Define a function squareWithParam with a parameter x
    console.log(x * x); // Log the square of x
}
squareWithParam(7); // Call the function with an argument of 7

const addFunction = function(a, b) { // Define a function expression for addition
    console.log(a + b); // Log the sum of a and b
};
addFunction(20, 30); // Call the function with arguments 20 and 30

const squareFunction = function(a) { // Define a function expression for squaring
    console.log(a * a); // Log the square of a
};
squareFunction(9); // Call the function with an argument of 9

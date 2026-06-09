// ===============================
// STRING METHODS IN JAVASCRIPT
// ===============================

let str = "Hello JavaScript World";

console.log("Original String:", str);

// length
console.log("Length:", str.length);

// charAt()
console.log("charAt(1):", str.charAt(1));

// at()
console.log("at(2):", str.at(2));

// charCodeAt()
console.log("charCodeAt(0):", str.charCodeAt(0));

// indexOf()
console.log("indexOf('Java'):", str.indexOf("Java"));

// lastIndexOf()
console.log("lastIndexOf('o'):", str.lastIndexOf("o"));

// includes()
console.log("includes('World'):", str.includes("World"));

// startsWith()
console.log("startsWith('Hello'):", str.startsWith("Hello"));

// endsWith()
console.log("endsWith('World'):", str.endsWith("World"));

// slice()
console.log("slice(0,5):", str.slice(0, 5));

// substring()
console.log("substring(6,16):", str.substring(6, 16));

// substr() (deprecated but still works in some browsers)
console.log("substr(6,10):", str.substr(6, 10));

// toUpperCase()
console.log("Uppercase:", str.toUpperCase());

// toLowerCase()
console.log("Lowercase:", str.toLowerCase());

// concat()
console.log("concat:", str.concat("!!!"));

// trim()
let spaceStr = "   Hello Bro   ";
console.log("trim:", spaceStr.trim());

// trimStart()
console.log("trimStart:", spaceStr.trimStart());

// trimEnd()
console.log("trimEnd:", spaceStr.trimEnd());

// replace()
console.log("replace:", str.replace("JavaScript", "JS"));

// replaceAll()
let fruits = "apple apple mango apple";
console.log("replaceAll:", fruits.replaceAll("apple", "orange"));

// split()
console.log("split:", str.split(" "));

// repeat()
console.log("repeat:", "Hi ".repeat(3));

// padStart()
let num = "5";
console.log("padStart:", num.padStart(4, "0"));

// padEnd()
console.log("padEnd:", num.padEnd(4, "0"));

// search()
console.log("search:", str.search("JavaScript"));

// match()
let text = "cat bat rat";
console.log("match:", text.match(/at/g));

// matchAll()
let sentence = "test1 test2 test3";
let matches = [...sentence.matchAll(/test\d/g)];
console.log("matchAll:", matches);

// localeCompare()
console.log("localeCompare:", "apple".localeCompare("banana"));

// valueOf()
console.log("valueOf:", str.valueOf());

// toString()
console.log("toString:", str.toString());

// ===============================
// TEMPLATE LITERALS
// ===============================

let name = "Rohan";
let age = 20;

// Basic Template Literal
console.log(`My name is ${name}`);

// Multiple Variables
console.log(`My name is ${name} and I am ${age} years old.`);

// ===============================
// EXPRESSIONS INSIDE TEMPLATE LITERALS
// ===============================

// Arithmetic Expression
console.log(`10 + 20 = ${10 + 20}`);

// Variable Expression
let x = 15;
let y = 25;
console.log(`Sum = ${x + y}`);

// Function Call
function greet(user) {
    return `Welcome ${user}`;
}
console.log(`${greet("Rohan")}`);

// Conditional (Ternary)
let marks = 85;
console.log(`Result: ${marks >= 40 ? "Pass" : "Fail"}`);

// Object Property
let student = {
    name: "Rohan",
    cgpa: 8.5
};

console.log(`Student: ${student.name}, CGPA: ${student.cgpa}`);

// Array Access
let arr = [10, 20, 30];
console.log(`Second Element: ${arr[1]}`);

// ===============================
// MULTI-LINE STRING
// ===============================

let multiLine = `
This is line 1
This is line 2
This is line 3
`;

console.log(multiLine);

// ===============================
// NESTED TEMPLATE LITERALS
// ===============================

let firstName = "Rohan";
let lastName = "Valasa";

console.log(`Full Name: ${`${firstName} ${lastName}`}`);

// ===============================
// STRING INTERPOLATION EXAMPLES
// ===============================

let product = "Laptop";
let price = 50000;

console.log(`The price of ${product} is ₹${price}`);

console.log(`
Invoice
-------
Product : ${product}
Price   : ₹${price}
GST(18%): ₹${price * 0.18}
Total   : ₹${price + price * 0.18}
`);
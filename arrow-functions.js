/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a,b) {
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum);
// Arrow Function With Parameters
const addTwoNumbers = (a,b) => {
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers = (a,b) => a + b
// Implicit Returns
const saySome = message => console.log(message);
saySome('Hello there!!')

const saySome = () => console.log('hello');
saySome();

// Returning Multiple Lines

// EXERCISE 6.1

// const multiplicationTable = [];
// const value = 10;

// for (let i = 1; i <= value; i++) {
//     let tempRow = [];

//     for (let j = 1; j <= value; j++) {
//         tempRow.push(i * j);
//     }

//     multiplicationTable.push(tempRow);
// }

// console.log(multiplicationTable);

// EXERCISE 6.2

// const descriptiveWords = ['happy', 'creative', 'adventurous', 'clever', 'energetic'];

// function describeName() {
//     const userName = prompt('Enter a name:');
//     const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
//     const randomDescriptor = descriptiveWords[randomIndex];
//     console.log(`The name ${userName} is ${randomDescriptor}.`);
// }

// describeName();

// EXERCISE 6.3

// const num1 = 10;
// const num2 = 5;
// let operator = '+';

// function calculate(num1, num2, operator = '+') {
//     if (operator === '+') {
//         return num1 + num2;
//     } else if (operator === '-') {
//         return num1 - num2;
//     } else {
//         console.log('Invalid operator. Defaulting to addition.');
//         return num1 + num2;
//     }
// }

// console.log(calculate(num1, num2, operator));

// operator = '-'; // Change the operator to subtraction
// console.log(calculate(num1, num2, operator));

// EXERCISE 6.4

// const resultsArray = [];

// function calculate(num1, num2, operator = '+') {
//     if (operator === '+') {
//         return num1 + num2;
//     } else if (operator === '-') {
//         return num1 - num2;
//     } else {
//         console.log('Invalid operator. Defaulting to addition.');
//         return num1 + num2;
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     const value1 = i * 5;
//     const value2 = i * i;
//     const result = calculate(value1, value2);
//     resultsArray.push(result);
// }

// console.log(resultsArray);

// EXERCISE 6.5

// let value = '1000';

// (function () {
//     let value = 'Local Value from IIFE 1';
//     console.log('Inside IIFE 1:', value);
// })();

// let result = (function () {
//     let value = 'Local Value from IIFE 2';
//     console.log('Inside IIFE 2:', value);
//     return value;
// })();

// console.log('Outside IIFE 2:', result);

// (function (param) {
//     let value = 'Local Value from Anonymous Function: ' + param;
//     console.log(value);
// })('Passed-in Value');

// EXERCISE 6.6

// function calculateFactorial(num) {
//     if (num === 0) {
//         return 1;
//     } else {
//         return num * calculateFactorial(num - 1);
//     }
// }

// console.log(calculateFactorial(5));

// EXERCISE 6.7

// let start = 10;

// function countdown(value) {
//     console.log(value);

//     if (value < 1) {
//         return;
//     }

//     countdown(value - 1);
// }

// countdown(start);

// // Second Countdown
// function secondCountdown(value) {
//     console.log(value);

//     if (value > 0) {
//         return secondCountdown(value - 1);
//     }
// }

// secondCountdown(5);

// EXERCISE 6.8

// let nameFunctionExpression = function (arg) {
//     console.log(arg);
// };

// nameFunctionExpression("Function Expression Argument");

// function nameFunctionDeclaration(arg) {
//     console.log(arg);
// }

// nameFunctionDeclaration("Function Declaration Argument");


// Chapter projects

// Create a recursive function

// function countUpTo10(start) {
//     console.log(start);

//     if (start < 10) {
//         return countUpTo10(start + 1);
//     }
// }
// countUpTo10(5);
// countUpTo10(8);
// countUpTo10(12); 

// Set timeout order

// const outputOne = () => console.log('One');
// const outputTwo = () => console.log('Two');

// const outputThree = () => {
//     console.log('Three');
//     outputOne();
//     outputTwo();
// };

// const outputFour = () => {
//     console.log('Four');
//     setTimeout(() => outputOne(), 0);
//     setTimeout(() => outputThree(), 0);
// };

// outputOne();
// outputTwo();
// outputThree();
// outputFour();


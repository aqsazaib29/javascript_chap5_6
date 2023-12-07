// // EXERCISE 5.1

// const maxValue = 5;
// const solution = Math.floor(Math.random() * maxValue) + 1;
// let isCorrect = false;

// while (!isCorrect) {
//     let userInput = prompt(`Enter a number between 1 and ${maxValue}:`);
//     const userGuess = parseInt(userInput);

//     if (userGuess === solution) {
//         isCorrect = true;
//         alert("Congratulations! You guessed the correct number!");
//     } else {
//         alert(userGuess > solution ? "Too high! Try again." : "Too low! Try again.");
//     }
// }

// // EXERCISE 5.2

// let counter = 0;
// const step = 5;
// do {
//     console.log(counter);
//     counter += step;
// } while (counter < 100);

// // EXERCISE 5.3

// let myWork = [];
// for (let i = 1; i <= 10; i++) {
//     const status = i % 2 === 0; // Alternating true/false status
//     const lesson = { name: `Lesson ${i}`, status: status };
//     myWork.push(lesson);
// }
// console.log(myWork);

// // EXERCISE 5.4

// let myTable = [];
// const numRows = 5;
// const numColumns = 3;
// let counter = 1;
// for (let i = 0; i < numRows; i++) {
//     let tempTable = [];
//     for (let j = 0; j < numColumns; j++) {
//         tempTable.push(counter);
//         counter++;
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);

// // EXERCISE 5.5

// let grid = [];
// const numCells = 64;
// let counter = 0;
// let row = [];
// for (let i = 0; i < numCells + 1; i++) {
//     if (counter % 8 === 0) {
//         if (row !== undefined) {
//             grid.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let tempValue = counter;
//     row.push(tempValue);

//     if (counter % 8 === 0) {
//         grid.push(row);
//     }
// }
// console.log(grid);


// // EXERCISE 5.6

// let grid = [];
// const numCells = 64;
// let counter = 0;
// let row = [];

// for (let i = 0; i < numCells + 1; i++) {
//     if (counter % 8 === 0) {
//         if (row !== undefined) {
//             grid.push(row);
//         }
//         row = [];
//     }

//     counter++;
//     let tempValue = counter;
//     row.push(tempValue);

//     if (counter % 8 === 0) {
//         grid.push(row);
//     }
// }
// console.log(grid);

// EXERCISE 5.7

// const myObject = {
//     item1: 'Apple',
//     item2: 'Banana',
//     item3: 'Orange'
// };

// console.log('Object:');
// for (const key in myObject) {
//     console.log(`${key}: ${myObject[key]}`);
// }

// const myArray = ['Apple', 'Banana', 'Orange'];

// console.log('\nArray:');
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// EXERCISE 5.8

// let output = '';
// const skipNumber = 7;

// for (let i = 1; i <= 10; i++) {
//     if (i === skipNumber) {
//         continue;
//     }
//     output += i;
// }

// console.log(output);

// // Reuse the code with break
// output = '';

// for (let i = 1; i <= 10; i++) {
//     if (i === skipNumber) {
//         break;
//     }
//     output += i;
// }

// console.log(output);


// Chapter project

// Math multiplication table

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

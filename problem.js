// challange no 1: Print numbers from 1 to 10 ✔✔
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// challange no 2: Print the odd numbers less than 100 ✔✔
// for (var i = 1; i <= 100; i =i+2) {
//     console.log(i);
// }

// challange no 3: Print the multiplication table with 7 ✔✔
// for(var i=1; i<=10; i++){
//     var result = "7 * " + i + " = " + 7 * i;
//     console.log(result);
// }

// challange no 4: Print all the multiplication tables with numbers from 1 to 10 ✔✔
// for (var i = 1; i <= 10; i++) {
//     printTable(i);
//     console.log("");
// }

// function printTable(n) {
//     for (var i = 1; i <= 10; i++) {
//         var row = n + " * " + i + " = " + n * i;
//         console.log(row);
//     }
// }



// Coding challenge #5: Calculate the sum of numbers from 1 to 10
// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log(sum);


// Coding challenge #6: Calculate 10!

// var calculate = 1;
// for(var i =1; i<=10; i++){
//     calculate = calculate * i;
// }
// console.log(calculate);


// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
// var sum = 0;
// for (var i = 11; i <= 30; i = i + 2) {
//     sum = sum + i;
// }
// console.log(sum);

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
// function celsiusToFahrenheit(n) {
//     return n * 1.8 + 32;
// }
// var result = celsiusToFahrenheit(20);
// console.log(result);

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(n) {
    return (n - 32) / 1.8;
}

var r = fahrenheitToCelsius(68);
console.log(r);

// ============
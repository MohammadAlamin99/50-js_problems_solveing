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

// for(var i=1; i<=10; i++){
//     printTable(i);
//     console.log("");
// }

// function printTable(n){
//     for(var i=1; i<=10; i++){
//         var result = n + " * " + i + " = " + n * i;
//         console.log(result);
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
// function fahrenheitToCelsius(n) {
//     return (n - 32) / 1.8;
// }

// var r = fahrenheitToCelsius(68);
// console.log(r);


// Coding challenge #10: Calculate the sum of numbers in an array of numbers

// var arry=[12,45,32,12,52,45,87,200];

// function calculateArryNumber(ar){
//     sum = 0
//     for(var i=0; i<ar.length; i++){
//         sum = sum + ar[i];
//     }
//     return sum;
// }
// var result = calculateArryNumber(arry);
// console.log(result);


// Coding challenge #11: Calculate the average of the numbers in an array of numbers

// function averageArray(ar){
//     var n=ar.length;
//     var sum = 0;
//     for(var i=0; i<n; i++){
//         sum=sum + ar[i];
//     }
//     return (sum/n).toFixed(3);
// }
// var arry = [12, 25, 48];
// var result = averageArray(arry);
// console.log(result);



// const str ="3.4";
// const result = parseFloat(str);
// console.log(result);


// var result = 5*(2+18);
// console.log(result);


// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// function getPositive(ar) {
//     var arry2 = [];
//     for (var i = 0; i <= ar.length; i++) {
//         var element = ar[i];
//         if (element >= 0) {
//             arry2.push(element);
//         }
//     }
//     return arry2;
// }
// var arry = [12, 56, 787, 45, -88 - 83, -6, 85]
// var result = getPositive(arry);
// console.log(result);



// Coding challenge #13: Find the maximum number in an array of numbers

// var arry = [12, 15, 48, 70, 13, 90];

// function findMax(ar){
//     var max = ar[0];
//     for(var i=0; i<ar.length; i++){
//         if(ar[i]>max){
//             max=ar[i];
//         }
//     }
//     return max;
// }
// var result = findMax(arry);
// console.log(result,"max")


// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
// var f1 = 0;
// console.log(f1);
// var f2 = 1;
// console.log(f2);
// for (var i = 2; i <= 10; i++) {
//     var fi = f1 + f2;
//     console.log(fi)

//     f1=f2;
//     f2=fi;
// }

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
//  function recurFibo(n){
//     if(n==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     return recurFibo(n-1) + recurFibo(n-2);
//  }
//  var result = recurFibo(8);
//  console.log(result);


// Returns true if a number is prime

function primeNum(n) {
    if (n <= 1) {
        return "this num is not prime";
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return "this number is not prime";
        }
    }
    return "this number is prime";
}

var result = primeNum(5);
console.log(result);
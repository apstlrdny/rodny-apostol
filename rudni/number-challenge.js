/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

function func1(num1, num2, num3) {
    return num1 + num2 + num3;
}

function func2(num1, num2) {
    return num1 - num2;
}

function func3(num1, num2) {
    return num1 * num2;
}

function func4(num1, num2) {
    return (num1 + num2) / 2;
}

console.log("Sum:", func1(5, 7, 3));
console.log("Difference:", func2(10, 4)); 
console.log("Product:", func3(6, 4)); 
console.log("Average:", func4(8, 12)); 
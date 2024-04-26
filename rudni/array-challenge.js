const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/

const evenNumbers = arr.filter(num => num % 2 === 0);
const oddNumbers = arr.filter(num => num % 2 !== 0);

console.log("EVEN NUMBERS:");
evenNumbers.forEach(num => {
    console.log(num);
});

console.log("ODD NUMBERS:");
oddNumbers.forEach(num => {
    console.log(num);
});

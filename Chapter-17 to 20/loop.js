//1

let multiArray = [[]];


//2


let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];


//3

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//4


let number = +prompt("Enter a number to show its multiplication table:");
let length = +prompt("Enter the length of the table:");

for (let i = 1; i <= length; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}



//5

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}


//6


// a. Counting
document.write("<h3>Counting:</h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

// b. Reverse Counting
document.write("<h3>Reverse Counting:</h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

// c. Even numbers
document.write("<h3>Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

// d. Odd numbers
document.write("<h3>Odd:</h3>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

// e. Series (with "k")
document.write("<h3>Series:</h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}


//7


let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Welcome! What do you want to order?").toLowerCase();

let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
        break;
    }
}


if (found) {
    alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery.");
} else {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}

//8

let array = [24, 53, 78, 91, 12, 45, 23];
let largest_number = 0;

for (let i = 0; i < array.length; i++) {
    // largest_number = array[0];
    const element = array[i];
    if (largest_number < element) {
        largest_number = element;
        console.log("In if condition", largest_number);

    }
}

console.log("Larget numer in the array is", largest_number);


//9 


let array_two = [24, 53, 78, 91, 12];
let smallest_number = array_two[0];

for (let i = 1; i < array_two.length; i++) {
    if (array_two[i] < smallest_number) {
        smallest_number = array_two[i];
    }
}

document.write("Array items:" + array_two + "<br>" + "Smallest number in the array is: " + smallest_number);




//10


for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + "<br>");
    }
}







  
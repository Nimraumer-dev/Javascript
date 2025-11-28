
//Question no :01

var city = prompt("Enter your city name:");

if (city === "Karachi") {
    alert("Welcome to city of lights");
}

//Question no :02

var gender = prompt("Enter your gender (male/female):");

if (gender === "male") {
    alert("Good Morning Sir");
} 
else if (gender === "female") {
    alert("Good Morning Ma’am");
}

//Question no :03

var color = prompt("Enter traffic signal color (Red, Yellow, Green):");

if (color === "red") {
    alert("Must Stop");
} 
else if (color === "yellow") {
    alert("Ready to move");
} 
else if (color === "green") {
    alert("Move now");
}

else {
    alert("Stop")
}

//Question no: 04

let fuel = +prompt("Enter remaining fuel in litres:");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


//Question no: 05

var a = +prompt("Enter Your Value");
if (++a === 5){
 alert("given condition for variable a is true"); 
}

else {
    alert("given condition for variable a is false")
}


var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}


else{
    alert("given condition for variable b is false")
}




let c = 12;

if (c++ === 13){
 alert("condition 1 is true");
} 

else {
    alert("condition 1  is false")
}



 if (c === 13){
 alert("condition 2 is true");
}

else {
    alert("condition 2 is false")
}


 if (++c < 14){
    alert("condition 3 is true");
}

else {
    alert("condition 3 is false")
}


 if (c === 14){
    alert("condition 4 is true");
}

else {
    alert("condition 4 is false")
}





let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}


if (true){
 alert("True");
}


if (false){
 alert("False");
}


if (true){
 alert("True");
}


if (false){
 alert("False");
}



if ("car" < "cat") {
 alert("car is smaller than cat");
}



//Question no: 06

let sub1 = +prompt("Enter marks of Subject 1:");
let sub2 = +prompt("Enter marks of Subject 2:");
let sub3 = +prompt("Enter marks of Subject 3:");

let totalMarks = +prompt("Enter total marks:");

let obtained = sub1 + sub2 + sub3;

let percentage = (obtained / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80 && percentage <=100) {
    grade = "A+";
    remarks = "Excellent";
} 
else if (percentage >= 70 && percentage <= 80) {
    grade = "A";
    remarks = "Good";
} 
else if (percentage >= 60 && percentage <= 70) {
    grade = "B";
    remarks = "You need to improve";
} 

else if (percentage >= 50 && percentage <= 60){
    grade = "C";
    remarks = "You need to improve";
} 

else if (percentage >= 40 && percentage <= 50) {
    grade = "D";
    remarks = "You need to improve";
} 

else if (percentage >= 33 && percentage <= 40) {
    grade = "E";
    remarks = "You need to improve";
} 
else if (percentage >= 0 && percentage <= 33) {
    grade = "Fail";
    remarks = "Sorry";
}

else {
    alert ("please write correct percentage")
}

document.write(`
<h2>Mark Sheet</h2>
Total Marks: ${totalMarks}<br>
Marks Obtained: ${obtained}<br>
Percentage: ${percentage}%<br>
Grade: ${grade}<br>
Remarks: ${remarks}
`);


//Question no :07



let secretNumber = 7; // 1–10
let guess = +prompt("Guess the secret number (1 to 10)");

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

else {
    alert("Wrong Try Again")
}


//Question no: 08

let num = +prompt("Enter a number:");

if (num % 3 === 0) {
    alert("Number is divisible by 3");
}

else {
    alert ("Number is not divisible by 3")
}


//Question no: 09



let no2 = +prompt("Enter a number:");

if (no2 % 2 === 0) {
    alert("Even number");
} 
else {
    alert("Odd number");
}



//Question no: 10

let T = +prompt("Enter temperature:");

if (T > 40) {
    alert("It is too hot outside.");
}
else if (T > 30) {
    alert("The Weather today is Normal.");
}
else if (T > 20) {
    alert("Today's Weather is cool.");
}
else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

else{
    alert("Enter a correct temperature")
}



//Question no: 11

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let op = prompt("Enter operation (+, -, *, /, %)");

let result;

if (op === "+") {
    result = num1 + num2;
}
else if (op === "-") {
    result = num1 - num2;
}
else if (op === "*") {
    result = num1 * num2;
}
else if (op === "/") {
    result = num1 / num2;
}
else if (op === "%") {
    result = num1 % num2;
}

alert("Result: " + result);




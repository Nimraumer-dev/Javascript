
// Q1: Arithmetic Operation

var a = 8;

// Perform arithmetic operations
document.write("<h2>Question 1</h2>");
document.write("The result of arithmetic operations:<br>");
document.write("Initial value: " + a + "<br>");

a = ++a;
document.write("After pre-increment (++a): " + a + "<br>");

a = a++;
document.write("After post-increment (a++): " + a + "<br>");

a = --a;
document.write("After pre-decrement (--a): " + a + "<br>");

a = a--;
document.write("After post-decrement (a--): " + a + "<br><br>");


// Q2: Expression Result


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// Step-by-step Explanation:
// --a;               → a = 1
// --a - --b;         → (1) - (0) = 1
// --a - --b + ++b;   → (1) - (0) + (1) = 2
// --a - --b + ++b + b--; → (1) - (0) + (1) + (1) = 3

document.write("<h2>Question 2</h2>");
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");

document.write("<b>Solution:</b><br>");
document.write("--a; → a = 1<br>");
document.write("--a - --b; → 1 - 0 = 1<br>");
document.write("--a - --b + ++b; → 1 - 0 + 1 = 2<br>");
document.write("--a - --b + ++b + b--; → 1 - 0 + 1 + 1 = 3<br><br>");


// Q3: Greet the User

var userName = prompt("Enter your name:");
alert("Hello " + userName + "! Welcome to JavaScript.");
document.write("<h2>Question 3</h2>");
document.write("Hello " + userName + "!<br><br>");


// Q5: Multiplication Table

var number = +prompt("Enter a number to display its multiplication table:", 5);

document.write("<h2>Question 5</h2>");
document.write("Multiplication Table of " + number + "<br><br>");

for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
document.write("<br>");


// Q6: Subjects, Marks & Percentage

// a) Take subject names
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

// b) Total marks for each subject
var totalMarks = 100;

// c) Take obtained marks
var obtained1 = +prompt("Enter obtained marks for " + sub1 + ":");
var obtained2 = +prompt("Enter obtained marks for " + sub2 + ":");
var obtained3 = +prompt("Enter obtained marks for " + sub3 + ":");

// d & e) Calculate totals
var totalObtained = obtained1 + obtained2 + obtained3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

// e) Display result in table format
document.write("<h2>Question 6</h2>");
document.write("<table border='1' cellpadding='8'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + obtained1 + "</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + obtained2 + "</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + obtained3 + "</td></tr>");
document.write("</table><br>");
document.write("<b>Total Marks:</b> " + (totalMarks * 3) + "<br>");
document.write("<b>Marks Obtained:</b> " + totalObtained + "<br>");
document.write("<b>Percentage:</b> " + percentage.toFixed(2) + "%<br>");
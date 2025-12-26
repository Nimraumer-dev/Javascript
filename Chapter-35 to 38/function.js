// 1. 
function showDateTime() {
    var now = new Date();
    document.write("<h3>1. Current Date & Time</h3>");
    document.write(now + "<br><br>");
}
showDateTime();




// 2. 
function greetUser(firstName, lastName) {
    document.write("<h3>2. Greeting</h3>");
    document.write("Hello " + firstName + " " + lastName + "<br><br>");
}
greetUser("Nimra", "Farooq");




// 3. 
function addNumbers(num1, num2) {
    return num1 + num2;
}
document.write("<h3>3. Sum</h3>");
document.write("Sum is: " + addNumbers(5, 10) + "<br><br>");



// 4. 
function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid Operator";
    }
}
document.write("<h3>4. Calculator</h3>");
document.write("Result: " + calculator(10, 5, "+") + "<br><br>");



// 5. 
function square(num) {
    return num * num;
}
document.write("<h3>5. Square</h3>");
document.write("Square is: " + square(6) + "<br><br>");




// 6. 
function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
document.write("<h3>6. Factorial</h3>");
document.write("Factorial is: " + factorial(5) + "<br><br>");



// 7. 
function showCounting(start, end) {
    document.write("<h3>7. Counting</h3>");
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
    document.write("<br><br>");
}
showCounting(1, 10);




// 8. 
function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    var hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    return hypotenuse;
}
document.write("<h3>8. Hypotenuse</h3>");
document.write("Hypotenuse is: " + calculateHypotenuse(3, 4) + "<br><br>");




// 9. 
function rectangleArea(width, height) {
    return width * height;
}
document.write("<h3>9. Rectangle Area</h3>");
document.write("Area (values): " + rectangleArea(5, 10) + "<br>");

var w = 7;
var h = 4;
document.write("Area (variables): " + rectangleArea(w, h) + "<br><br>");




// 10. 
function isPalindrome(str) {
    var reverse = str.split("").reverse().join("");
    return str === reverse;
}
document.write("<h3>10. Palindrome</h3>");
document.write("madam is palindrome: " + isPalindrome("madam") + "<br><br>");




// 11. 
function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
document.write("<h3>11. Capitalize Words</h3>");
document.write(capitalizeWords("the quick brown fox") + "<br><br>");





// 12. 
function longestWord(str) {
    var words = str.split(" ");
    var longest = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
document.write("<h3>12. Longest Word</h3>");
document.write(longestWord("Web Development Tutorial") + "<br><br>");





// 13. 
function countLetter(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
document.write("<h3>13. Letter Count</h3>");
document.write("Occurrences: " + countLetter("JSResourceS.com", "o") + "<br><br>");





// 14.
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(2) + "<br>");
}

document.write("<h3>14. Circle Properties</h3>");
calcCircumference(5);
calcArea(5);

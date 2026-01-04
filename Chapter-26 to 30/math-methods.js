//1


var num = prompt("Enter a positive number:");
num = Number(num);

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));




//2


var num = prompt("Enter a negative floating number:");
num = Number(num);

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));



//3


var num = prompt("Enter a number:");
num = Number(num);

document.write("The absolute value of " +  num + " is " + Math.abs(num));


//4



var dice = Math.floor(Math.random() * 6) + 1;
document.write("Random Dice Value: " + dice);



//5

var toss = Math.floor(Math.random() * 2) + 1;

if (toss === 1) {
    document.write("Coin Value: Heads");
} else {
    document.write("Coin Value: Tails");
}



//6

var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random Number between 1 and 100: " + randomNum);



//7

var weight = prompt("Enter your weight:");
var parsedWeight = parseFloat(weight);

document.write("Your weight is: " + parsedWeight + " kg");



//8



var weight = prompt("Enter your weight:");
var parsedWeight = parseFloat(weight);

document.write("Your weight is: " + parsedWeight + " kg");







//CHAPTER-5

//1
document.write("<b>Question no:1</b><br><br>")
var a = 5;
var b = 7;
var c = a + b

document.write("Sum of " + a + " and " + b + " is " + c + "<br><br>");

//2
document.write("<b>Question no:2</b><br><br>")
var d = 10;
var e = 2;

document.write("Subtraction: " + (d - e) + "<br>");
document.write("Multiplication: " + (d * e) + "<br>");
document.write("Division: " + (d / e) + "<br>");
document.write("Modulus: " + (d % e) + "<br><br>");


//3

document.write("<b>Question no:3</b><br><br>")
var p;
document.write("Value after variable declaration is: " + p + "<br>");

p = 5;
document.write("Initial value: " + p + "<br>");

p++;
document.write("Value after increment is: " + p + "<br>");

p = p + 7;
document.write("Value after addition is: " + p + "<br>");

p--;
document.write("Value after decrement is: " + p + "<br>");

var remainder = p % 3;
document.write("The remainder is: " + remainder + "<br><br>");



//4
document.write("<b>Question no:4</b><br><br>")
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>");


//5
document.write("<b>Question no:5</b><br>")
document.write("<h2>Table of 3</h2>");
document.write("3 x 1 = " + (3 * 1) + "<br>");
document.write("3 x 2 = " + (3 * 2) + "<br>");
document.write("3 x 3 = " + (3 * 3) + "<br>");
document.write("3 x 4 = " + (3 * 4) + "<br>");
document.write("3 x 5 = " + (3 * 5) + "<br>");
document.write("3 x 6 = " + (3 * 6) + "<br>");
document.write("3 x 7 = " + (3 * 7) + "<br>");
document.write("3 x 8 = " + (3 * 8) + "<br>");
document.write("3 x 9 = " + (3 * 9) + "<br>");
document.write("3 x 10 = " + (3 * 10) + "<br><br>");


//6

document.write("<b>Question no:6</b><br><br>")
document.write("<h2>Conversion Formula</h2>")
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "C<sup>0</sup> is " + fahrenheit + "F<sup>o</sup><br>");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "F<sup>0</sup> is " + celsius + "C<sup>o</sup><br><br>");


//7
document.write("<b>Question no:7</b><br>")
var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + " PKR<br><br>");



//8
document.write("<b>Question no:8</b> <br>")
document.write("<br><h2>Marks Sheet</h2><br>")
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;


document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");



//9
document.write("<b>Question no:9</b> <br>")
document.write("<h2>Currency in PKR</h2>")
var totalPKR = (10 * 104.80) + (25 * 28);
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");


//10

document.write("<b>Question no:10</b> <br>")
document.write("<br>")
var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("Result is: " + result + "<br><br>");


//11
document.write("<b>Question no:11</b> <br>")
document.write("<h2>Age Calculator</h2>")
var currentYear = 2025;
var birthYear = 2003;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age2 + " or " + age1 + " years old.<br><br>");


//12
document.write("<b>Question no:12</b> <br>")
document.write("<h2>The Geometrizer</h2>")
var radius = 20;
const pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");



//13

document.write("<b>Question no:13</b> <br>")
document.write("<h2>The Lifetime Supply Calculator</h2>")
var favoriteSnack = "Chocolates";
var currentAge = 22;
var maxAge = 80;
var amountPerDay = 2;

var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br><br>");







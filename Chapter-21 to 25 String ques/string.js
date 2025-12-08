//1

let firstName = prompt("First Name");

let lastName = prompt("Last Name");

let fullName = ("Hello! " + firstName.toUpperCase() + " " + lastName.toUpperCase());

console.log(fullName);



//2

let phone_model = prompt("Enter your favourite phone model");

let model_length = phone_model;

let model = ("Length of String: " + model_length.length +"<br>")

document.write("My favourite phone model is " + phone_model + "<br>")

document.write(model +"<br>");




//3


var word = "Pakistani";
var ind = word.indexOf("n");
document.write("Index of 'n': " + ind +"<br>");


//4

var word = "Hello World";
var index = word.lastIndexOf("l");
document.write("Last index of 'l': " + index +"<br>");


//5

var word = "Pakistani";
var char = word.charAt(3);
document.write("Character at index 3: " + char +"<br>");

//6

var first = "Hello";
var second = "World";
var result = first.concat(" ", second);
document.write(result+"<br>");


//7

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write(newCity+"<br>");


//8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var result = message.replace(/and/g, "&");
document.write(result+"<br>");


//9

var str = "472";
var num = Number(str);

document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num +"<br>");

//10

var user = prompt("Enter something:");
document.write(user.toUpperCase() +"<br>");


//11

var user = prompt("Enter text:");
var first = user.slice(0,1).toUpperCase();
var rest = user.slice(1).toLowerCase();
document.write(first + rest +"<br>") ;

//12

var num = 35.36;
var str = num.toString().replace(".", "");
document.write(str);


//13

var username = prompt("Enter username:");
var invalid = ["@", ".", ",", "!"];
var isInvalid = false;

for(var i = 0; i < username.length; i++){
    if(invalid.includes(username[i])){
        isInvalid = true;
        break;
    }
}

if(isInvalid){
    document.write("Please enter a valid username.");
} else {
    document.write("Username is valid.");
}

//14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt("Enter item:").toLowerCase();

if(A.includes(user)){
    document.write(user + " is available");
} else {
    document.write("Not available");
}

//15

var password = prompt("Enter password:");

if(password.length < 6){
    alert("Password must be at least 6 characters.");
}
else if(!isNaN(password[0])){
    alert("Password cannot start with a number.");
}
else if(!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)){
    alert("Password must contain letters and numbers.");
}
else{
    alert("Password is valid");
}

//16

var university = "University of Karachi";
var arr = university.split(" ");

for(var i=0; i < arr.length; i++){
    document.write(arr[i] + "<br>");
}


//17

var user = prompt("Enter text:");
var last = user.charAt(user.length - 1);
document.write(last);


//18


var text = "The quick brown fox jumps over the lazy dog".toLowerCase();
var count = (text.match(/the/g) || []).length;

document.write("Occurrences of 'the': " + count);

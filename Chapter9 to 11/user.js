var city = prompt("Enter your city name:");

if (city === "Karachi") {
    alert("Welcome to city of lights");
}



var gender = prompt("Enter your gender (male/female):");

if (gender === "male") {
    alert("Good Morning Sir");
} 
else if (gender === "female") {
    alert("Good Morning Ma’am");
}



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


var a = 4;
if (++a === 5){
 alert("given condition for variable a is true"); 
}


var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
// ❌ Alert show nahi hoga



var c = 12;

if (c++ === 13){
 alert("condition 1 is true");
} 
// ❌ No alert

if (c === 13){
 alert("condition 2 is true");
}
// ✔ Yes alert

if (++c < 14){
 alert("condition 3 is true");
}
// ❌ No alert

if (c === 14){
 alert("condition 4 is true");
}
// ✔ Yes alert




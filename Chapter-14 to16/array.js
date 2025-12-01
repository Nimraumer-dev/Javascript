//1 

let studentNames = [];

//2

let student_Names = new Array ();

//3 

let stringArray = ["ali", "tooba" , "rameen", "aliyan"] ;


//4 

let numArray = [26, 29, 87, 40, 90, 100]
// console.log(typeof numArray);


//5

let booleanArray = [true, false, true, false];

//6 

let mixedArray = ["Ahsan", 89, true, 4.555, "Hello World"]


//7

let qualification = ["SSC", "HSC",  "BCS", "BS", "BCOM", "MS", "M.phill.", "PhD"];

document.write("<h1>Qualifications</h1>")

for (let i = 0; i < qualification.length; i++) {

    document.write( ( i + 1)+ ") " + qualification[i] + "<br>");
    }


//8


let students = ["Michael", "John", "Tony"];

let score = [350 , 400, 480];

let totalMarks = 500;

for (let i = 0; i <students.length; i++){
    let percentage = (score[i] / totalMarks) * 100;
    document.write(students[i]  + " scored "  + score[i] + " Marks, Percentage: " + percentage + "%" + "<br>" );
}

//9

let colors = ["Red", "Green", "Blue", "Yellow"];
document.write("Initial array: " + colors + "<br>");

let colorStart = prompt("Which color do you want to add to the beginning?");
colors.unshift(colorStart);
document.write("After adding at beginning: " + colors + "<br>");

let colorEnd = prompt("Which color do you want to add to the end?");
colors.push(colorEnd);
document.write("After adding at end: " + colors + "<br>");

colors.unshift("Purple", "Orange");
document.write("After adding two colors at beginning: " + colors + "<br>");

colors.shift();
document.write("After deleting first color: " + colors + "<br>");

colors.pop();
document.write("After deleting last color: " + colors + "<br>");

let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
let colorToAdd = prompt("Which color do you want to add?");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("After adding color at index " + indexToAdd + ": " + colors + "<br>");

let indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));
let numToDelete = parseInt(prompt("How many color(s) do you want to delete?"));
colors.splice(indexToDelete, numToDelete);
document.write("After deleting color(s): " + colors + "<br>");


//10

let scores = [320, 450, 280, 390, 500];

document.write(" Student scores:  " + scores + "<br>");

scores.sort (function (a,b){
        return a - b;
});

document.write( " Scores in ascending order:  " + scores + "<br>");


//11

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities array: " + cities + "<br>");

let selectedCities = cities.slice(0, 3);
document.write("Selected Cities: " + selectedCities + "<br>");



//12

var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join("");
document.write("<strong>String:</strong>" + "<br>" + result + "<br>" +"<br>");
document.write( "<strong>Array:</strong>" + "<br>" + arr )


//13


let device = [];

device.push("keyboard", "mouse", "printer", "monitor");


document.write("Devices: " +"<br>" + device + "<br><br>");

document.write("<strong>Out</strong>: " + "<br>" + device.shift() + "<br>");
document.write("<strong>Out</strong>: " + "<br>" + device.shift() + "<br>");
document.write("<strong>Out</strong>: " + "<br>" + device.shift() + "<br>");
document.write("<strong>Out</strong>: " + "<br>" + device.shift() + "<br>");


//14


let devices = [];

devices.push("keyboard", "mouse", "printer", "monitor");

document.write("Devices: " + "<br>" + devices + "<br><br>");

document.write("<strong>Out</strong>: " + "<br>" + devices.pop() + "<br>");
document.write("<strong>Out</strong>: " + "<br>" + devices.pop() + "<br>");
document.write("<strong>Out</strong>: " + "<br>" + devices.pop() + "<br>");
document.write("<strong>Out</strong>: " + "<br>" + devices.pop() + "<br>");


//15


let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for(let i = 0; i < phoneManufacturers.length; i++){
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");

















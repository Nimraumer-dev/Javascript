// 1. 
var now = new Date();
document.write("<h3>1. Current Date & Time</h3>");
document.write(now + "<br><br>");




// 2. 
var months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
alert("Current Month: " + months[now.getMonth()]);





// 3.
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is: " + days[now.getDay()]);





// 4. 
document.write("<h3>4. Fun Day</h3>");
if (now.getDay() === 0 || now.getDay() === 6) {
    document.write("It's Fun day  <br><br>");
} else {
    document.write("It's a Working day<br><br>");
}




// 5. 
document.write("<h3>5. Month Days</h3>");
if (now.getDate() < 16) {
    document.write("First fifteen days of the month<br><br>");
} else {
    document.write("Last days of the month<br><br>");
}

// 6. 



document.write("<h3>6. Minutes since Jan 1, 1970</h3>");
var minutes = now.getTime() / (1000 * 60);
document.write(minutes + "<br><br>");




// 7. 
if (now.getHours() < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}




// 8. 
document.write("<h3>8. Later Date</h3>");
var laterDate = new Date(2020, 11, 31);
document.write(laterDate + "<br><br>");




// 9. 
document.write("<h3>9. Days since 1st Ramadan</h3>");
var ramadan = new Date("June 18, 2015");
var diffDays = Math.floor((now.getTime() - ramadan.getTime()) / (1000 * 60 * 60 * 24));
document.write(diffDays + " days have passed since 1st Ramadan, 2015<br><br>");





// 10. 
document.write("<h3>10. Seconds since Jan 1, 2015</h3>");
var start2015 = new Date("January 1, 2015");
var seconds = Math.floor((now.getTime() - start2015.getTime()) / 1000);
document.write(seconds + "<br><br>");





// 11. 
document.write("<h3>11. One Hour Ahead</h3>");
var newTime = new Date();
newTime.setHours(newTime.getHours() + 1);
document.write("Updated Time: " + newTime + "<br><br>");





// 12. 
var oldDate = new Date();
oldDate.setFullYear(oldDate.getFullYear() - 100);
alert("Date 100 years back: " + oldDate);




// 13. 
document.write("<h3>13. Birth Year</h3>");
var age = prompt("Enter your age:");
var birthYear = new Date().getFullYear() - age;
document.write("Your Birth Year is: " + birthYear + "<br><br>");





// 14. 
document.write("<h2>14. K-Electric Bill</h2>");

var customerName = "Nimra Umer Farooq";
var currentMonth = months[now.getMonth()];
var units = 410;
var chargesPerUnit = 16;
var latePayment = 350;

var netAmount = units * chargesPerUnit;
var grossAmount = netAmount + latePayment;

document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePayment.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));

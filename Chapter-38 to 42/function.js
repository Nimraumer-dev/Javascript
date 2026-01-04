//Q1
// Power Function

function power(a, b) {
  var result = 1;
  for (var i = 1; i <= b; i++) {
    result = result * a;
  }
  return result;
}

document.write("Q1 Power Result: " + power(2, 3));
document.write("<hr>");



//Q2
// Leap Year Function

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

document.write("Q2 Leap Year Check: " + isLeapYear(2020));
document.write("<hr>");



//Q3
// Triangle Area Using 2 Functions

function calculateS(a, b, c) {
  return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
  var S = calculateS(a, b, c);
  return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

document.write("Q3 Triangle Area: " + triangleArea(5, 6, 7));
document.write("<hr>");



//Q4
// Average & Percentage Using 3 Functions

function calculateAverage(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
  return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction(m1, m2, m3) {
  document.write("Q4 Average: " + calculateAverage(m1, m2, m3) + "<br>");
  document.write("Q4 Percentage: " + calculatePercentage(m1, m2, m3) + "%");
}

mainFunction(80, 90, 70);
document.write("<hr>");



//Q5
// Custom indexOf Function

function customIndexOf(str, char) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

document.write("Q5 Custom indexOf: " + customIndexOf("hello", "e"));
document.write("<hr>");



//Q6
// Delete All Vowels

function removeVowels(sentence) {
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
    var ch = sentence[i].toLowerCase();
    if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
      result += sentence[i];
    }
  }
  return result;
}

document.write("Q6 Without Vowels: " + removeVowels("This is a sentence"));
document.write("<hr>");



//Q7
// Count Two Vowels in Succession (switch)

function countVowelPairs(text) {
  var count = 0;

  for (var i = 0; i < text.length - 1; i++) {
    var pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

    switch (pair) {
      case "aa": case "ae": case "ai": case "ao": case "au":
      case "ea": case "ee": case "ei": case "eo": case "eu":
      case "ia": case "ie": case "ii": case "io": case "iu":
      case "oa": case "oe": case "oi": case "oo": case "ou":
      case "ua": case "ue": case "ui": case "uo": case "uu":
        count++;
        break;
    }
  }
  return count;
}

document.write(
  "Q7 Vowel Pairs: " +
  countVowelPairs("Pleases read this application and give me gratuity")
);
document.write("<hr>");



//Q8
// Distance Conversion

function toMeters(km) {
  document.write("Meters: " + km * 1000 + "<br>");
}
function toFeet(km) {
  document.write("Feet: " + km * 3280.84 + "<br>");
}
function toInches(km) {
  document.write("Inches: " + km * 39370.1 + "<br>");
}
function toCentimeters(km) {
  document.write("Centimeters: " + km * 100000);
}

document.write("Q8 Distance Conversions (5 km):<br>");
toMeters(5);
toFeet(5);
toInches(5);
toCentimeters(5);
document.write("<hr>");



//Q9
// Overtime Pay

function overtimePay(hoursWorked) {
  if (hoursWorked > 40) {
    return (hoursWorked - 40) * 12;
  }
  return 0;
}

document.write("Q9 Overtime Pay: Rs. " + overtimePay(45));
document.write("<hr>");



//Q10
// Currency Notes

function currencyNotes(amount) {
  var hundreds = Math.floor(amount / 100);
  amount = amount % 100;

  var fifties = Math.floor(amount / 50);
  amount = amount % 50;

  var tens = Math.floor(amount / 10);

  document.write("100 Notes: " + hundreds + "<br>");
  document.write("50 Notes: " + fifties + "<br>");
  document.write("10 Notes: " + tens);
}

document.write("Q10 Currency Notes:<br>");
currencyNotes(880);

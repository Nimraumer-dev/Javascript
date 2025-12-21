
  // CHAPTER 1 – ALERTS
alert("Welcome to JavaScript!");
let userName = prompt("Enter your name:");
alert(userName);
let fvrtColor = prompt("Enter your favourite color:");
alert(favrtColor);


   //CHAPTER 2 – STRINGS

let firstName = "Nimra";
let lastName = "Umer";
alert(firstName + " " + lastName);

let city = "Karachi";
alert("You live in " + city);

let hobby = "Designing";
alert("Your hobby is " + hobby);


   //CHAPTER 3 – NUMBERS

let num1 = 10;
let num2 = 20;
alert(num1 + num2);

let marks = 60;
alert(marks >= 50 ? "Pass" : "Fail");

let age = 20;
if (age > 18) alert("You are above 18");


   //CHAPTER 4 – VARIABLES

let myName, user_age, $price;
alert("Legal variable names");

// Illegal examples (comments)
// let 1name;
// let user-name;
// let var;

let variables = ["myName", "user_age", "$price"];
alert(variables);

  // CHAPTER 5 – MATH

let a = 10, b = 3;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);
alert(a % b);

let x = 5;
x++;
alert(x);


   //CHAPTER 6 – OPERATORS

let n = 10;
n++;
n--;
alert(n);

let y = 20;
y += 5;
y -= 2;
alert(y);

let z = 4;
z *= 3;
z /= 2;
alert(z);


  // CHAPTER 7 – EXPRESSIONS

alert((2 + 3) * 4);
alert(5 + 3 * 2 - 1);
alert((5 + 3) * (10 - 2));


  // CHAPTER 8 – CONCATENATION

alert(firstName + " " + lastName);
alert("Hello from " + city);
alert("My name is " + firstName + " and I live in " + city);


  // CHAPTER 9 – PROMPTS

let color = prompt("Favorite color?");
alert("Your favorite color is " + color);

let userAge = prompt("Enter your age:");
alert("Your age is " + userAge);

let fruit = prompt("Favorite fruit?");
alert(fruit);


  // CHAPTER 10 – IF

let num = 12;
if (num > 10) alert("Number is greater than 10");

let score = 78;
if (score >= 50) alert("Pass");

let age1 = 16;
if (age1 < 18) alert("Minor");


   //CHAPTER 11 – COMPARISON

alert(5 > 3);

let p = 10, q = 10;
alert(p == q ? "Numbers are equal" : "Numbers are not equal");

alert(8 <= 12);


  // CHAPTER 12 – IF ELSE

let mark = 85;
if (mark >= 90) alert("A");
else if (mark >= 70) alert("B");
else alert("C");

let age2 = 15;
if (age2 < 12) alert("Child");
else if (age2 < 18) alert("Teen");
else alert("Adult");

let temp = 25;
if (temp > 30) alert("Hot");
else if (temp > 15) alert("Warm");
else alert("Cold");


   //CHAPTER 13 – CONDITIONS
let num3 = 6;
if (num3 > 0 && num3 % 2 == 0) alert("Positive and Even");

let mks = 90;
if (mks >= 50 && mks <= 100) alert("Valid Marks");

let n3 = 15;
if (n3 % 3 == 0 && n3 % 5 == 0) alert("Divisible by 3 and 5");


  // CHAPTER 14 – NESTED IF

let age4 = 20;
let hasID = true;
if (age4 >= 18) {
    if (hasID) alert("Allowed");
} else alert("Not Allowed");

let number = 8;
if (number > 0) {
    if (number % 2 == 0) alert("Positive Even");
}

let m22 = 60;
let extraCredit = true;
if (m22 >= 50) {
    if (extraCredit) alert("Passed with Extra Credit");
}


  // CHAPTER 15 – ARRAYS

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
alert(fruits);

let nums = [10, 20, 30, 40];
alert(nums[0]);
alert(nums[nums.length - 1]);

let colors = ["Red", "Blue", "Green"];
alert(colors);


 //  CHAPTER 16 – ADD / REMOVE

fruits.push("Pineapple");
alert(fruits);

fruits.pop();
alert(fruits);

fruits.unshift("Strawberry");
fruits.shift();
alert(fruits);


  // CHAPTER 17 – SPLICE / SLICE

let arr = ["A", "B", "C"];
arr.splice(1, 0, "X");
alert(arr);

arr.splice(2, 1);
alert(arr);

alert(arr.slice(0, 2));

  // CHAPTER 18 – LOOPS

for (let i = 1; i <= 5; i++) alert(i);

let list = ["a", "b", "c"];
for (let i = 0; i < list.length; i++) alert(list[i]);

for (let i = 1; i <= 10; i++)
    if (i % 2 !== 0) alert(i);


 //  CHAPTER 19 – FLAGS & BREAK

let nums2 = [5, 3, -2, 7];
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] < 0) break;
    alert(nums2[i]);
}

let flag = false;
let values = [2, 5, 7, 8];
for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 == 0) flag = true;
}
alert(flag);

for (let i = 0; i < values.length; i++) {
    if (values[i] > 50) break;
}
alert("Loop ended");


 //  CHAPTER 20 – NESTED LOOPS

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        alert(i + " x " + j + " = " + (i * j));
    }
}

let twoD = [[1,2],[3,4],[5,6]];
for (let i = 0; i < twoD.length; i++)
    for (let j = 0; j < twoD[i].length; j++)
        alert(twoD[i][j]);

let A1 = [1, 2];
let B1 = [3, 4];
for (let i = 0; i < A1.length; i++)
    for (let j = 0; j < B1.length; j++)
        alert(A1[i] + B1[j]);


  // CHAPTER 21 – CASE

let s = "javascript";
alert(s.toUpperCase());
alert(s.toLowerCase());
alert(s[0].toUpperCase() + s.slice(1));


  // CHAPTER 22 – LENGTH

let str = "Pakistan";
alert(str.length);
alert(str.slice(0,3));
alert(str.slice(str.length - 3));


  // CHAPTER 23 – FINDING

alert("Hello World".indexOf("World"));
alert("banana".lastIndexOf("a"));
alert("hello".includes("ll"));


 //  CHAPTER 24 – CHAR AT

let word = "Pakistan";
alert(word[2]);
alert(word[word.length - 1]);
alert(word[Math.floor(word.length / 2)]);


  // CHAPTER 25 – REPLACE

let sentence = "I like apples";
alert(sentence.replace("apples", "mangoes"));

alert("banana".replaceAll("a", "o"));

alert("I love JavaScript and Java".replace("Java", "Python"));

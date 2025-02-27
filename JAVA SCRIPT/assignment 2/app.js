//Q=1
//var name1=prompt("ENTERYOURNAME")
//alert ("hi ,"+ name1)
//var table=prompt("Enter a number  i make a table",5)
//document.write(`
//${table} x ${1}=${ table * 1} <br>
//${table} x ${2}=${ table * 2} <br>
//${table} x ${3}=${ table * 3} <br>
//${table} x ${4}=${ table * 4} <br>
//${table} x ${5}=${ table * 5} <br>
//${table} x ${6}=${ table * 6} <br>
//${table} x ${7}=${ table * 7} <br>
//${table} x ${8}=${ table * 8} <br>
//${table} x ${9}=${ table * 9} <br>
//${table} x ${10}=${ table * 10} <br>`)
//Q3
//var city= prompt("Enter your city")
//var reply="most welcomr dear"
//if(city === "karachi"){reply="welcome to city of light"}
//alert(reply)


//Q4
//var gender=prompt("Enter your gender")
//var message = "Good Morning ma'am"
//if (gender==="male"){message="Good morning sir"}
//alert(message)



//Q5

//var color =prompt("Enter signal color")
//var message =prompt("Enter message")
//var red =prompt("red")
//var vehical =prompt("vehicle must stop")
//var yellow =prompt("yellow")
//var ready =prompt("must ready to drive")
// var green =prompt("green")
// var go =prompt("let's go and enjoy")


// document.write
// (`<table border=2px><tr> 
//    <th> ${color}</th>
//    <th>${message}</th>
//    </tr>
// <tr> 
// <td>${red} </td>
// <td>${vehical}</td>
// </tr>
// <tr>
// <td>${yellow}</td> 
// <td>${ready}</td>
// </tr>
// <tr>
// <td>${green}</td>
// <td>${go}</td> 
// </tr>
// </table>`)


//Q6
// var max_age = Number(prompt("Max Age"));
// var current_age = Number(prompt("Current Age"));

// if (current_age <= max_age) {
//     alert("You are welcome");
// } else {
//     alert("Get Out");
// }


//Q7
// var fuel = +prompt("Remaining Fuel");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("Enjoy your journey");
// }


//Q9
// var eng = Number(prompt("How many marks did you obtain in the English"));
// var urdu = Number(prompt("How many marks did you obtain in the Urdu"));
// var math = Number(prompt("How many marks did you obtain in the Math"));

// var obtained_marks = eng + urdu + math;
// var total_marks = 300;
// var percentage = obtained_marks / total_marks * 100;
// var grade;
// var remark;

// if (percentage > 80) {
//     grade = "A+", remark = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A", remark = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B", remark = "Not Bad";
// }
// else if (percentage >= 50) {
//     grade = "C", remark = "You need to improve";
// }
// else if (percentage >= 40) {
//     grade = "D", remark = "Poor";
// }
// else {
//     grade = "Fail", remark = "Sorry";
// }

// document.write(
//     ` <table border="">

//         <tr>
//             <th>Subject</th>
//             <th>Obtained Marks</th>
//             <th>Subject Marks</th>
//             <th>Total Obtained Marks</th>
//             <th>Total Marks</th>
//             <th>Grade</th>
//             <th>Percentage</th>
//             <th>Remarks</th>
//         </tr>

//         <tr>
//             <td>English</td>
//             <td>${eng}</td>
//             <td>100</td>
//             <td rowspan="3">${obtained_marks}</td>
//             <td rowspan="3">${total_marks}</td>
//             <td rowspan="3">${grade}</td>
//             <td rowspan="3">${percentage.toFixed(2)}</td>
//              <td rowspan="3">${remark}</td>
//         </tr>

//         <tr>
//             <td>Urdu</td>
//             <td>${urdu}</td>
//             <td>100</td>
//         </tr>

//         <tr>
//             <td>Math</td>
//             <td>${math}</td>
//             <td>100</td>
//         </tr>

//     </table>`
// )


//Q10
// var item1 = prompt("What do you like to order item1");
// var item1Price = Number(prompt("Item #1 Price"));
// var item1Quantity = Number(prompt("Item #1 Quantity"));

// var item2 = prompt("What do you like to order item2");
// var item2Price = Number(prompt("Item #2 Price"));
// var item2Quantity = Number(prompt("Item #2 Quantity"));

// var shipping = Number(prompt("Shipping Charges"));
// var total = item1Price * item1Quantity + item2Price * item2Quantity + shipping;
// var discount = total * 10 / 100;

// document.write(
//     `Price of ${item1} is ${item1Price} <br> Quantity of ${item1} is ${item1Quantity}<br> Price of ${item2} is ${item2Price} <br> Quantity of ${item2} is ${item2Quantity} <br><br> Shipping Charges ${shipping} <br> <br>
//     Total cost of your order is ${total}<br>`
// );

// if (total <= 2000) {
//     document.write(`You are not Eligible for Discount`);
// } else {
//     document.write(`Discounted Price is ${total - discount}`);
// }


//Q11
// var randomNo = Math.floor(Math.random() * 10) + 1;
// var user_guess = Number(prompt("Guess the secret number between 1 to 10 "));
// console.log(randomNo);

// if (randomNo == user_guess) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br> Bingo Correct Answer`);
// }
// else if (user_guess + 1 == randomNo) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br>Close enough to the correct answer`);
// }
// else if (user_guess - 1 == randomNo) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br>Close enough to the correct answer`);
// }
// else {
//     document.write("Please try again");
// }


//Q14 
// var alphabetic_value = prompt("Enter any Alphabetic Value ");
// var numeric_value = Number(prompt("Enter any Numeric Value "));
// var bool = prompt("Enter True or False");

// if (typeof (alphabetic_value) === "string") {
//     alert(`${alphabetic_value} is a string`);
// } else if (numeric_value === "number") {
//     alert(`${numeric_value} is a number`);
// } else if (bool === "boolean") {
//     alert(`${bool} is a number`);
// } else {
//     alert("Invalid Value")
// }

// if (typeof (alphabetic_value) === "string") {
//     alert(`${alphabetic_value} is a string`);

//     if (typeof (numeric_value) === "number") {
//         alert(`${numeric_value} is a number`);

//         if (typeof (bool) === "boolean") {
//             alert(`${bool} is a Boolean`);
//         }
//         else {
//             alert("Invalid Value");
//         }
//     } else {
//         alert("Invalid Value");
//     }
// }
// else {
//     alert("Invalid Value");
// }


//Q15
// var user_input = Number(prompt("Please enter any number"));

// if (user_input % 2 == 0) {
//     document.write(`Its a Even number ${user_input}`);
// } else {
//     document.write(`Its a Odd number ${user_input}`);
// }


//Q16
// var temperature = Number(prompt("Please enter the Temperature of outside"));
// if (temperature >= 40) {
//     document.write("It is too hot outside.")
// }
// else if (temperature >= 30) {
//     document.write("The Weather today is Normal.")
// }
// else if (temperature >= 20) {
//     document.write("Today's Weather is cool.")
// }
// else if (temperature >= 10) {
//     document.write("OMG! Today's weather is so Cool.")
// }


//Q17
// var firstNO = Number(prompt("Please enter First Number"));
// var secondNO = Number(prompt("Please enter Second Number"));
// var operator = prompt("Which operation do you want to perform", "+");

// if (operator == "+") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO + secondNO} `);
// }
// else if (operator == "-") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO - secondNO} `);
// }
// else if (operator == "*") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO * secondNO} `);
// }
// else if (operator == "/") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO / secondNO} `);
// }
// else if (operator == "%") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO % secondNO} `);
// }


//Q18
// var day = prompt("Please enter the day name");

// if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
//     document.write("Its a week day");
// }
// else if (day == "saturday") {
//     document.write("Its Weekend");
// }
// else if (day == "sunday") {
//     document.write("Yay! It's a holiday.");
// }
// else {
//     document.write("Invalid Value");
// }


//Q19
// var score = +prompt("What is your score");
// if (score > 50) {
//     document.write("You are passes");
// }
// else {
//     document.write("Try Again!");
// }


//Q20
// var num1 = +prompt("Please enter Value 1");
// var num2 = +prompt("Please enter Value 2");

// if (num1 > num2) {
//     document.write(`The greater number of ${num1} and ${num2} is ${num1}`);
// }
// else if (num2 > num1) {
//     document.write(`The greater number of ${num1} and ${num2} is ${num2}`);
// }
// else {
//     document.write(`Both numbers are equal ${num1} and ${num2}`);
// }

// // Q21

// var language = prompt("Enter Lanuage Code", "en");

// if (language == "en") {
//     alert("Hello, World");
// }
// else if (language == "urdu") {
//     alert("ہیلو دنیاs");
// }
// else if (language == "hindi") {
//     alert("हैलो वर्ल्ड");
// }


// //Q22

// var num3 = +prompt("Enter any number");
// if (isNaN(num3)) {
//     document.write("Invalid Value");
// }
// else if (num3 > 0) {
//     document.write(`The number ${num3} is Positive`);
// }
// else if (num3 < 0) {
//     document.write(`The number ${num3} is Negative`);
// }
// else {
//     document.write(`The number is ${num3}, which is neither positive or negative.`);
// }

// // Q23

// var num6 = +prompt("Please enter a number");
// var noun = prompt("Please enter a noun");
// alert(`${num6} ${noun}`);


// IF...ELSE & ELSE IF STATEMENTS, TESTING SET OF CONDITIONS & SWITCH STATEMENTS


// //Q1

// var user_input = Number(prompt("Please enter any number"));

// if (user_input % 2 == 0) {
//     document.write(`Its a Even number ${user_input}`);
// } else {
//     document.write(`Its a Odd number ${user_input}`);
// }


// //Q2

// var user_input = Number(prompt("Please enter any number"));

// if (user_input % 2 == 0) {
//     document.write(`Its a Even number ${user_input}`);
// } else {
//     document.write(`Its a Odd number ${user_input}`);
// }


// //Q3

// var age = +prompt("How old are you");
// if (age >= 18) {
//     document.write("Old Enough")
// }
// else {
//     document.write("Too young")
// }


// //Q4

// var greeting = prompt("What's your Name");

// if (greeting == "faraz") {
//     document.write("Special Welcome");
// }


// //Q5

// var divisible = Number(prompt("Please enter any number"));

// switch (divisible % 3) {
//     case 0:
//         document.write(`Yahoo: Your value ${divisible} is Divisible by 3`);
//         break;
//     default:
//         document.write(`Ops: Your value ${divisible} is not Divisible by 3`);
// }


// //Q6

// var character = 97;

// if (character >= 65 && character <= 90) {
//     document.write("UPPERCASE LETTER");
// }
// else if (character >= 97 && character <= 122) {
//     document.write("lower case letter");
// }
// else {
//     document.write("Invalid Value");
// }


// //Q7

// var firstNO = Number(prompt("Please enter Firsts Number"));
// var secondNO = Number(prompt("Please enter Second Number"));
// var operator = prompt("Which operation do you want to perform", "+");

// switch (operator) {
//     case "+":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO + secondNO} `);
//         break;
//     case "-":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO - secondNO} `);
//         break;
//     case "*":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO * secondNO} `);
//         break;
//     case "/":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO / secondNO} `);
//         break;
//     case "%":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO % secondNO} `);
//         break;
//     default:
//         document.write("Invalid Operator");
// }


// //Q8

// var time = +prompt("Please enter time value");

// if (time >= 0 && time < 1200) {
//     document.write("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening!");
// }
// else if (time >= 2100 && time < 2359) {
//     document.write("Good Night!");
// }
// else {
//     document.write("Invalid Value!");
// }


// //Q9

// var calender = 2023;

// if ((calender % 4 === 0 && calender % 100 !== 0) || (calender % 400 === 0)) {
//     document.write(calender + " is a leap year.");
// } else {
//     document.write(calender + " is not a leap year.");
// }


// //Q10

// var password = prompt("Put your Password");

// if (password == "") {
//     document.write("Please enter your Password");
// }
// else if (password == "smit123") {
//     document.write("Correct Password");
// }
// else {
//     document.write("Incorret Password");
// }


// //Q11

// var firstName = "Ali";
// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// }
// else {
//     document.write("You are not Fahad");
// }


// //Q12

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }


// //Q13

// var integer1 = +prompt("Please enter Integer 1");
// var integer2 = +prompt("Please enter Integer 2");

// if (integer1 > integer2) {
//     document.write(`The larger number of ${integer1} and ${integer2} is ${integer1}`);
// }
// else if (integer2 > integer1) {
//     document.write(`The larger number of ${integer1} and ${integer2} is ${integer2}`);
// }
// else {
//     document.write(`Both Integers are equal ${integer1} and ${integer2}`);
// }


//Q14

// var num3 = +prompt("Enter any number");

// if (isNaN(num3)) {
//     document.write("Invalid Value");
// }
// else if (num3 > 0) {
//     document.write(`The number ${num3} is Positive`);
// }
// else if (num3 < 0) {
//     document.write(`The number ${num3} is Negative`);
// }
// else {
//     document.write(`The number is ${num3}, which is neither positive or negative.`);
// }


//Q15

// var hour = +prompt("Current Hour");

// if (hour >= 6 && hour <= 9) {
//     document.write("Breakfast is served");
// }
// else if (hour >= 11 && hour <= 13) {
//     document.write("Time for lunch");
// }
// else if (hour >= 17 && hour <= 20) {
//     document.write("It's dinner time");
// }
// else {
//     document.write("Sorry, you'll have to wait, or go get a snack.")
// }


// //Q16

// var a = "Faraz";
// var b = 99;
// var c = true;
// var d;

// document.write(`${a} is a ${typeof (a)}<br>`);
// document.write(`${b} is a ${typeof (b)}<br>`);
// document.write(`${c} is a ${typeof (c)}<br>`);
// document.write(`${d} is a ${typeof (d)}<br>`);


//Q17

// var word = prompt("Please enter any character");

// if (word == "a" || word == "e" || word == "i" || word == "o" || word == "u") {
//     document.write(`"True! ${word} It's a vowel"`);
// }
// else {
//     document.write("False");
// }


//Q18

// var no1 = 10;
// var no2 = 7;
// if (no1 != no2) {
//     document.write(`${no1} is not equal to ${no2}`);
// }


//Q19

// var month = +prompt("Please enter month number");

// switch (month) {
//     case 1:
//         document.write("January");
//         break;
//     case 2:
//         document.write("February");
//         break;
//     case 3:
//         document.write("March");
//         break;
//     case 4:
//         document.write("April");
//         break;
//     case 5:
//         document.write("May");
//         break;
//     case 6:
//         document.write("June");
//         break;
//     case 7:
//         document.write("July");
//         break;
//     case 8:
//         document.write("August");
//         break;
//     case 9:
//         document.write("September");
//         break;
//     case 10:
//         document.write("October");
//         break;
//     case 11:
//         document.write("November");
//         break;
//     case 12:
//         document.write("December");
//         break;
//     default:
//         document.write("Invalid month number.");
// }


//Q20

// var age = 18;
// var voteAble = age < 17 ? "Too young" : "Old enough";
// document.write(voteAble);




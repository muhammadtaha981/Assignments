// //Q1

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Last Name");
// document.write(firstName, " ", lastName);


// //Q2

// var phone = prompt("Which phone do you use");
// document.write(`My Phone is: ${phone} <br>Length of string: ${phone.length}`);


// //Q3

// var city = "pakistani";
// document.write(`String: ${city} <br> Index of 'n': ${city.indexOf("n")}`)


// //Q4

// var word = "Hello World";
// document.write(`String: ${word} <br> Last index of 'l': ${word.lastIndexOf("l")}`);


// //Q5

// var city = "pakistani";
// document.write(`String: ${city} <br>Character at index 3: ${city.charAt(3)}`);


// //Q6

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Last Name");
// let fullName = firstName.concat(" " + lastName);

// document.write(fullName);


// //Q7

// var city = "hyderabad";
// var replace = city.replace("hyder", "islam");

// document.write(`City: ${city} <br>After replacemnet: ${replace}`);


// //Q8

// var message = "Ali and Sami are the best friends. They play cricket and football together";
// var replace = message.replaceAll("and", "&");

// document.write(`Before replacemnet: ${message} <br>`);
// document.write(`After replacemnet: ${replace}`);


// //Q9

var num = 472;
// var num2 = num.toString();

// document.write(`Value: ${num} <br> Type: ${typeof num.toString()} <br> Value: ${num}
// <br> Type: ${typeof num}`);


// //Q10

// var user_input = prompt("Enter any URL");
// document.write(`URL: ${user_input} <br> Domain: ${user_input.slice(4)}`);


// //Q11 & Q12

// let user_input = prompt("Enter any word");
// let blockLetter = user_input.toUpperCase();
// let smallLetter = user_input.toLowerCase();

// document.write(`User input: ${user_input} <br> Upper case: ${blockLetter} <br> Lower case: ${smallLetter}`);


// //Q13

// let user_input = prompt("Enter any word");

// let firstLetter = user_input.slice(0, 1).toUpperCase();
// let restLetter = user_input.slice(1).toLowerCase();

// document.write(firstLetter + restLetter);


// //Q14

// var num = 35.36;
// var convert = num.toString().replace(".", "");

// document.write(convert);


// //Q15 & Q16

// let a = "3";
// let b = "3";
// let x = a + b;
// let y = a - b;

// document.write("a + b is ", x, "<br>");     // //Q15 Answer
// document.write("a - b is ", y, "<br>");     // //Q16 Answer


// //Q17

// var userName = prompt("Please enter a username");

// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
//     alert("Valid username");
// }
// else {
//     alert("Please enter a valid username");
// }


// //Q18

// let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let user_input = prompt("What would you like to order").toLowerCase();

// if (bakery.includes(user_input)) {
//   document.write(`${user_input} is available at index ${bakery.indexOf(user_input)} in our bakery`);
// }
// else {
//   document.write(`Sorry, ${user_input} is not available in our bakery`);
// }


// //Q19

// let userInput1 = prompt("Please enter value 1");
// let userInput2 = prompt("Please enter value 2");

// if (userInput1 > userInput2) {
//   document.write(`${userInput1} is greater than ${userInput2}`);
// }
// else if (userInput1 < userInput2) {
//   document.write(`${userInput2} is greater than ${userInput1}`);
// }
// else {
//   document.write(`${userInput2} is equal to ${userInput1}`);
// }


// //Q20













// Question # 22

// var userinput = prompt("Enter any word");
// var lastCharacter = userinput[userinput.length -1]
// alert("Last character of input : " + lastCharacter);


// Question # 23

//var str = "The quick brown fox jumps over the lazy dog".toLowerCase();
//var count = str.split("the").length -1;

//document.write(Text : The quick brown fox jumps over the lazy dog <br> There are ${count} occurrence(s) of word 'the')
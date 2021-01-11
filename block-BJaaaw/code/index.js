// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let userData = prompt("Please enter your phone number here")
if (userData%2 === 0){
  console.log("number is even ")
} else {
  "number is odd"
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = prompt("first number here");
let num2 = prompt("second number here");

alert (num1 + num2);

// 3. Convert the above code using`?` terniary operator
let userData = prompt("Please enter your phone number here")
 userData%2 === 0 ? alert("number is even "): alert("number is odd");


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("Enter your name here");

if (houseName === 'stark'){
  console.log("Winter is coming");
} else if (houseName === 'lannister'){
  console.log('A lannister always pays his debt')
} else {
  console.log("All men must die")
}

// 5. Convert the above code using`?` terniary operator

let houseName = prompt("Enter your name here");

houseName === "stark" ? console.log("Winter is coming") : houseName === 'lannister' ? console.log(" A lannister always pays his debt") : console.log("All men must die")

// Switch
let houseName = prompt("Enter your name here");

switch(houseName) {
  case "stark":
    console.log("Winter is coming");
    break;
  case "lannister":
    console.log("A lannister always pays his debt");
    break;
  default: 
  console.log("All men must die")
}


// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = prompt("month number");

switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("31 days");
    break;
  case 2:
      alert("28 days");
      break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("30 days")
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = prompt("enter your salary here",);

if(salary <= 20000){
  alert(salary - 10%salary)
} else if (salary <= 40000) {
  alert(salary - 20%salary)
} else {
  alert(salary - 30%salary)
}

//  if..else vs switch
let salary = prompt("enter your salary here",);

switch(salary){
  case salary<=20000: 
  alert(salary - 10%salary)
  break;
  case salary <= 40000:
  alert(salary - 10%salary)
  break;
  default: 
  alert(salary - 30%salary)
}




/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = prompt("enter your marks here");

if (marks > 100) {
  alert("Marks can't be greater than 100")
} else if (marks > 80 && marks < 100) {
  alert("Grade A")
} else if (marks > 50 && marks < 80){
  alert("Grade B")
}else if (marks > 30 && marks < 50){
  alert("Grade C")
} else {
  alert("Grade D")
}

// switch
let marks = prompt("enter your marks here");

switch(marks){
case marks > 100:
  alert("Marks can't be greater than 100")
  break;
case marks > 80 && marks < 100:
  alert("Grade A")
  break;
case marks > 50 && marks < 80:
  alert("Grade B")
  break;
case marks > 30 && marks < 50:
  alert("Grade C")
  break;
default:
  alert("Grade D")
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("enter your weather condition here");

switch(weather){
case "sunny":
  alert("Wear a T-shirt")
  break;
case "rainy":
  alert("Dont forget to take your raincoat")
  break;
case "hot":
  alert("Get a hanky")
  break;
case "freezing":
  alert("Get your sweater on")
  break;
default:
  alert("Not a valid input")
}

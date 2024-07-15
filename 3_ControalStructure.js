// ########### Day 3 Challenge ###########
//  **** Activity 1: If else Statement ****
// ##### Task-1 #####
let number = 0;
if (number < 0) {
  console.log("Number is negative");
} else if (number == 0) {
  console.log("Number is Zero");
} else {
  console.log("Number is positive");
}

// ##### Task-2 #####
let age = 18;
if (age >= 18) {
  console.log("Person is eligible to vote");
} else {
  console.log("Person is not eligible to vote");
}

//  **** Activity 2: nested If else Statement ****
// ##### Task-3 #####
let number1 = 7;
let number2 = 9;
let number3 = 11;
if (number1 > number2 && number1 > number3) {
  console.log(`Number ${number1} is largest number`);
} else if (number2 > number3 && number2 > number1) {
  console.log(`Number ${number2} is largest number`);
} else {
  console.log(`Number ${number3} is largest number`);
}

//  **** Activity 3: Switch case ****
// ##### Task-4 #####
let daysInNumber = 7;
switch (daysInNumber) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;

  case 3:
    console.log("Today is Wednesday");
    break;

  case 4:
    console.log("Today is Thursday");
    break;

  case 5:
    console.log("Today is Friday");
    break;

  case 6:
    console.log("Today is Saturday");
    break;

  case 7:
    console.log("Today is Sunday");
    break;

  default:
    console.log("Today is undefined");
    break;
}

// ##### Task-5 #####
let score = 30;
switch (true) {
  case score >= 70:
    console.log(`Your Grade is A`);
    break;

  case score >= 60:
    console.log(`Your Grade is B`);
    break;

  case score >= 50:
    console.log(`Your Grade is C`);
    break;

  case score >= 40:
    console.log(`Your Grade is D`);
    break;

  case score >= 30:
    console.log(`Your Grade is F`);
    break;

  default:
    console.log("Score not allowed");
    break;
}

//  **** Activity 4: Conditional Oparator ****
// ##### Task-6 #####
let numberToCheck = 13;
let checkOddOrEven =
  numberToCheck % 2 == 0 ? "Number is Even" : "Number is Odd";

console.log(checkOddOrEven);

//  **** Activity 5: Combineing condition ****
// ##### Task-7 #####
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("This is Leap year");
} else {
  console.log("This is not a Leap year");
}

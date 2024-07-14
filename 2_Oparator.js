// ########### Day 2 Challenge --- Oparator ###########

//  **** Activity 1: Arithmatic Oparation ****
// ##### Task-1 #####
let sumResult = 2 + 3;
console.log(`Sum: ${sumResult}`);

// ##### Task-2 #####
let substractionResult = 10 - 9;
console.log(`Substraction: ${substractionResult}`);

// ##### Task-3 #####
let multiplyResult = 10 * 4;
console.log(`Multiply: ${multiplyResult}`);

// ##### Task-4 #####
let devideResult = 16 / 4;
console.log(`Devide: ${devideResult}`);

// ##### Task-5 #####
let remainder = 19 % 2;
console.log(`Remainder: ${remainder}`);

//  **** Activity 2: Assignment Oparation ****
// ##### Task-6 #####
let aNumber = 2;
let addThree = (aNumber += 3);
console.log(`Add Three : ${addThree}`);

// ##### Task-7 #####
let anotherNumber = 4;
let substractTwo = (anotherNumber -= 2);
console.log(`SubsractByTwo: ${substractTwo}`);

//  **** Activity 3: Comparison Oparation ****
let a = 2;
let b = 5;

// ##### Task-8 #####
let greaterThan = b > a;
console.log(`Greater then: ${greaterThan}`);

let lessThan = a < b;
console.log(`Less then: ${lessThan}`);

// ##### Task-9 #####
let greaterThanEqual = a >= b;
console.log(`Greater then Equal: ${greaterThanEqual}`);

let lessThanEqual = a <= b;
console.log(`Less then Equal: ${lessThanEqual}`);

// ##### Task-10 #####
let c = 5;
let d = 5;

let equalNumber = c == d;
console.log(`Equal number: ${equalNumber}`);

//  **** Activity 4: Logical Oparation ****
// ##### Task-11 #####
let andOparator = 1 < 2 && 2 == 2;
console.log(`And Oparator: ${andOparator}`);

// ##### Task-12 #####
let orOparator = 1 < 2 || 2 == 3;
console.log(`Or Oparator: ${orOparator}`);

// ##### Task-13 #####
let negateOparator = !orOparator;
console.log(`Not Oparator: ${negateOparator}`);

//  **** Activity 5: Ternary Oparation ****
// ##### Task-14 #####

let numberToCheck = -5;
let checkPositiveOrNegative =
  numberToCheck < 0
    ? `Number ${numberToCheck} is Negative`
    : `Number ${numberToCheck} is positive`;

console.log(checkPositiveOrNegative);

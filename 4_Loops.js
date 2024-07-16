// ########### Day 4 Challenge --- Loops ###########

//  **** Activity 1: For Loop ****
// ##### Task-1 #####
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ##### Task-2 #####
for (let i = 1; i <= 10; i++) {
  console.log(` 5 * ${i} = ${5 * i}`);
}

//  **** Activity 2: While Loop ****
// ##### Task-3 #####
let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
// console.log(`Sum of numbers from 1 to 10 is : ${sum}`);

// ##### Task-4 #####
let taskFourVariable = 10;
while (taskFourVariable > 0) {
  console.log(taskFourVariable);
  taskFourVariable--;
}

//  **** Activity 3: Do.. While Loop ****
// ##### Task-5 #####
let taskFiveVariable = 1;
do {
  //   console.log(taskFiveVariable);
  taskFiveVariable++;
} while (taskFiveVariable <= 5);

// ##### Task-6 #####
let task6Variable = 5;
let factorialResult = 1;
do {
  factorialResult = factorialResult * task6Variable;
  task6Variable--;
} while (task6Variable >= 1);

console.log(` Factorial of ${task6Variable} : ${factorialResult}`);

//  **** Activity 4: Nested Loop ****
// ##### Task-7 #####
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

//  **** Activity 5: Nested Loop ****
// ##### Task-8 #####
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue; //Skip 5
  }
  console.log(i);
}

// ##### Task-9 #####
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break; //stop the loop
  }
  console.log(i);
}

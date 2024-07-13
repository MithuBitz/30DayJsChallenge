// ########### Day 1 Challengee ###########
//  **** Activity 1: Variable Declaration ****
// ##### Task-1 #####
var age = 28;
console.log(age);

// ##### Task-2 #####
let nameOfChallenger = "Niranjan";
console.log(nameOfChallenger);

//  **** Activity 2: Constant Declaration ****
// ##### Task-3 #####
const isAcceptTheChallenge = true;
console.log(isAcceptTheChallenge);

//  **** Activity 3: Data Type ****
// ##### Task-4 #####
let marks = 100; // number Datatype
console.log(typeof marks);

let language = "JavaScript"; //string Datatype
console.log(typeof language);

let isBestChallenge = true; //boolean Datatype
console.log(typeof isBestChallenge);

let bestYoutubeChannel = {
  //Object Datatype
  hindi: "Chai-aur-Code",
  english: "HiteshChaudhary",
};
console.log(typeof bestYoutubeChannel);

let myFebLanguage = ["Javascript", "C", "Python"]; //Array Datatype
console.log(typeof myFebLanguage);

//  **** Activity 4: Data Type ****
// ##### Task-5 #####

let myBestChannel = "ChaiAurCode";
console.log(myBestChannel);
myBestChannel = "HiteshChaudhary";
console.log(myBestChannel);

//  **** Activity 5: Data Type ****
// ##### Task-6 #####

const myBestTeacher = "HiteshChaudhary";
console.log(myBestTeacher);
// myBestTeacher = "Another person"; //It causes an error because const cannot be change
// console.log(myBestTeacher);

// #### Feature Request ####
let marksRequest = 100; // number Datatype

let languageRequest = "JavaScript"; //string Datatype

let isBestChallengeRequest = true; //boolean Datatype

let bestYoutubeChannelRequest = {
  //Object Datatype
  hindi: "Chai-aur-Code",
  english: "HiteshChaudhary",
};

let myFebLanguageRequest = ["Javascript", "C", "Python"]; //Array Datatype

console.table([
  typeof marksRequest,
  typeof languageRequest,
  typeof isBestChallengeRequest,
  typeof bestYoutubeChannelRequest,
  typeof myFebLanguageRequest,
]);

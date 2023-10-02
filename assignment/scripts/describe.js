// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it as Dane.
// We add a conditional quandry using the if else function.  When the variable 'name' is encountered if the variable is Mary the console shall display "Hi, Mary!", for all other strings console shall display "How do you do?"
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We add new variable 'secret'
// We add new variable 'code' and set it to 123
// We add a conditional quandry, when the variable 'code' is encountered and is exactly matching "123" the variable secret will be set to "super" and it will set the variable to itself times 2, instead of completing the function with an 'else' function we use another 'if' function for instances when the variable is greater than 250 it will set the 'secret' variable to "duper"
// Last we use console.log to set the browser console to display the input for variable 'secret'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// In this code our 'if' function is asking for two parameters with the '&&' function.  Variable isStudent must exactly match the "true" value and the 'zip' value must be greater than 80000.
// Next we add two conditional functions within the first 'if' function with the 'else if' function.  The first 'else if' logs its message if variable 'isStudent is exactly matching "false" or variable age is less than 30, we used the '||' function to make it an either-or function.
// Our code reads the first 'if' quandry then the embeded 'else if' quandries, and if the conditions of none of them are statisfied the first 'if' function is closed by a bounded 'else' function to log the message "How about the weather?"
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX mix is set to true but only 'colorOne' is changed to "purple"; I would use '&&' colorTwo = 'purple'


if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

let temp = 40;
const time = 4;


//FIX the description says we want the 'if' function to ask for values of 'temp' AND 'time', but this code is using a function for "or".
// it should use the '&&' function instead of '||'


if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


//FIX we have swapped the log messages we desire to display for give values.  We could either swap the variables
// to say "if(age <= minAge" or we could swap the message of the two console.log


if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


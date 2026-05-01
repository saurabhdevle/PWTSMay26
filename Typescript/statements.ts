// Conditional Statement - It allows us to execute different block of code {...}
// based on different condition


// 1. if statement - This will handle only the positive scenario
// 2. if else statement - This will handle both positive and negative
// 3. if else if statement - This willvalidate more than 1 condition
// 4. switch statement - This will also validate the multiple conditions
// 5. Ternary Operator (? :) - Short form of if else statement


// 1. if statement - Country from a calendar - 250 - Singapore
// 2. if else statement - Check if the test case have been passed or failed
// 3. if else if statement - Cross browser or Cross Platform testing


// 1. if statement - It will execute the if block of code only if condition is true
// Syntax:

/*
// The condition will be validate, if the condition is true if block of code
will be execute else if the condition is false nothing will happen

if(condition){ 
    // code
}

*/

let text = "Login"

if(text == "login") // "Login" == "login"
{ 
    console.log("The text value of an element is matching");
}


// 2. if else statement - If the condition is true then if block of code will be executed
// otherwise the else block of code will be executed.

// Syntax:

/*
if(condition)
{
  // if block of code
}
else
{
   //else block of code 
}

*/

// Admin, normal

let role = "Admin"

if(role == "Normal")
{
    console.log("Admin user navigation") 
}
else
{
    console.log("Normal user navigation");    
}


// 3. if else if statement - Will validate multiple conditions. Depending on the result of the
// condition the specific block of code will be executed.

// Syntax:

/*

if(condition1){
  // code - If the condition1 is true this block of code will be executed
}
else if(condition2){
  // code - If the condition2 is true this block of code will be executed
}
else if(condition3)
{
    // code - If the condition3 is true this block of code will be executed
}
else
{
   // code - If none of the condition is true 
}

*/

// Cross browser - Chrome, firefox, afari, edge
// Multiple Env - qa, staging, production

let browser = "edge"

if(browser == "chrome") // "edge" == "chrome"
{
    console.log("Launch the chrome browser");  
}
else if(browser == "firefox") // "edge" == "firefox"
{
    console.log("Launch the firefox browser");  
}
else if(browser == "safari") // "edge" == "safari"
{
    console.log("Launch the safari browser");
}
else
{
    console.log("Invaid browser");
}


// 4. switch statement - Switch will compare with the case value. It checks if any case
// value is available as similar to the expression or not. If it is available it will
// directly to that particular block of code

// break keyword is mandatory in switch statement - it terminates the execution

// Syntax:

/*

switch(expression)
{
  case "value":
    // block of code
    break;
  case "value1":
    // block of code
    break
  default:
    // block of code
}

*/


let browserName:string = "chrome"

switch(browserName) // switch("chrome")
{
    case "chrome":
        console.log("Launch the chrome browser - switch");
          break
    case "firefox":
        console.log("Launch the firefox browser - switch");
          break
    case "safari":
        console.log("Launch the safari browser - switch");
        break
    default:
        console.log("Invalid browser - switch");
        break
}


// When to use if else if statement
// 1. Range available in the condition to validate - we have to use if else if
// 2. Multiple datatypes to be validate - name = "Rahul", age = 25
// 3. Logical operator for the validation - &&, ||

// When to use switch statement
 // 1. Simple validation with single datatype and single value to compare
 // 2. Should not be any range
 // 3. No logical operator



// 5. Ternary Operator (? :) - This is similar to if else but it use inline


// Syntax for if else

/*
if(condition)
{
  // if block of code
}
else
{
   //else block of code 
}
*/

// Syntax for TO:

// condition? execute this if true : execute this if false


let age = 20;

// if(age >= 18){ // 10 >=18
//     console.log("You are eligibal for voting");
// }
// else{
//     console.log("You are not eligibal for voting");
// }

let result = (age >=18)? "You are eligibal for voting" : "You are not eligibal for voting"

console.log(result);


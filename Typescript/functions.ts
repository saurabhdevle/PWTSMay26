// Functions - It is a set of instruction that performs a specific task.

function login(email:string, password:string){
    // fill the username
    // fill the password
    // click on the login button
}



// 100 - login(email, password)

// 100 test cases - 300 lines of code - 195 

// Duplication - Solve the problem of duplication
// Maintenance - 100 Test cases to fix the issue - 99 steps
// Reusability - We can reuse the code whenever we want


// 1. Named function - Function declaration
// 2. Anonymous function - Function expression
// 3. Arrow function - ES6(2015) - Lambda function
// 4. Constructor function - Class


// 1. Named function - Function declaration - A function which will be declared 
// along with the name is known as function declaration.

// Syntax:
/*
function functionName(parameters) // defining the function
{
    // block of code to be executed
    return
}

functionName(arguments) // Calling the function


TS:

function functionName(parameters:datatype): returnType(Optional) // defining the function
{
    // block of code to be executed
    return
    // void - no return type
}


*/

// reutrn - para

// 1. Non-parametrised and non-returning function

function greet(){
    console.log("Hello, Welcome to TypeScript")
}

greet()

// 2. Non-parametrised and returning function

function greetings()
{
    return "Welcome to TypeScript" // return keyword should be the last statement of the function   
}

let result = greetings()
console.log(result);

// console.log(greetings());


function print(){
    console.log(result + " PW");
}

print()

// 3. Parametrised and non-returning function


function add(a:number, b:number){
    console.log(a+b)
}

add(10,30)
add(50,50)
add(90,34545)

// 4. Parametrised and returning function

function addition(a:number, b:number){ // a, b - parameters
    return a+b
}


let sum = addition(50,50) // 50, 50 - arguments
console.log(addition(1000,30000))

let sum1 = addition(sum,200)
console.log("Line # 102: "+sum1)

// What is parameter and argument?
// Parameter - It is a variable in the declaration of function. 
// It is used to receive the value when the function is called. 

// Argument - It is a value that is passed to the function when it is called. 











// string - Sequence of characters - string, text, word

    // 1. Single quote ('') - String Literal 
    // 2. Double quote (" ") - String Literal
    // 3. Backtick (``) - Template Literal

    let singleQuote1 = 'This is a single quote string'
    let doubleQuote1 = "This is a double quote string"

    // There are 2 main purpose of defining the string by using backtick

    // 1. multi-line string 

    let multiline1 = `This is 
    a multi line 
    string`

    // 2. For string parameterisation - ${variableName} - Calling a variable inside a
    // string. - Data driven testing in PW

    let age1 = 20

    let message1 = `Your age is ${age1}`
    console.log(message1);
    

    let char1 = 'c';


console.log("************************************");

let str =  "Welcome to Typescript" 

// 1. length - Returns the number of characters in a string
// Syntax:
// stringName.length

console.log(str.length)

// 2. charAt(index) - return the character at the specified index
// stringName.charAt(index)
console.log(str.charAt(4));

// "abcdabcd" - a2b2c2d2

// 3. concat(str1, str2) - merges all the strings and return us a new string
// stringName.concat(str, str1,...)

console.log(str.concat(" Hello", " Javascript"))
console.log(str)

// 4. includes(searchString, startIndex?)
// 5. indexOf(searchValue, startIndex?)
// 6. lastIndexOf(searchValue, startIndex?)

// What is difference between slice() and substring() in string?


// 7. slice(startIndex?, endIndex?) - Returns a portion of the string
// stringName.slice()

console.log(str.slice())
console.log(str.slice(2,9))
console.log(str.slice(9,2))

// 8. substring(startIndex, endIndex?) - Return a portion of the string

console.log(str.substring(2,9))
console.log(str.substring(9,2))


// 9. startsWith(string) - It checks if the string is starting with the specified string or
// character and return us the boolean value

console.log(str.startsWith("W"))
console.log(str.startsWith("Welcome"))

// 10. endsWith(string) - It checks if the string is ending with the specified string or
// character and return us the boolean value

// 11. toUpperCase() - It converts the string to upper case letter and return a new string

console.log(str)
console.log(str.toUpperCase())

// 12. toLowerCase() - It converts the string to lower case letter and return a new string
console.log(str.toLowerCase())


let str1 = "   This is an element   "

// 13. trim() - it removes the leading and trailing whitespace from a string and return a new string

console.log(str1.length)
console.log(str1.trim().length)

// 14. trimStart() - It removes the leading whitespace from a string
console.log(str1.trimStart().length) // 21

// 15. trimEnd() - It removes the trailing whitespace from a string
console.log(str1.trimEnd().length) // 21

// 16. split(separator) - Splits the string into an array of substring based on the
// specified seaprator

let str2 = "Apple Banana Mango Orange"
console.log(str2.split(" ")[0])

let email = "praveen@qamitra.com"
let domain = email.split("@")
console.log(domain);
console.log(domain[1].split(".")[0])

// 17. replace(old, new)

let str3 = "This is a string"
console.log(str3.replace("i", "@"))

// 18. replaceAll(old, new)

console.log(str3.replaceAll("i", "@"));













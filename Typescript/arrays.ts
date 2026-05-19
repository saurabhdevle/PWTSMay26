// Arrays - []

let arr = [10]
console.log(typeof arr)

/*

1. Array of collection of data, which can have different data types
2. Array is an ordered collection. Means e can also access the element from the 
array by using the position(index)
3. Index starts with 0 in an array
4. Array is dynamic in size. 

*/

let array = [10,20, "Java", true, null, undefined, 34.90]

// [0:10, 1:20, 2:"Java", ....]
console.log(array)

// Syntax:
// arrayName[index] - It will return the value at the specified index

console.log(array[0]);
console.log(array[5]);

// Declaration of an array:

// 1. Using Array Literal - []
// 2. Using Array Constructor - new Array()


// 1. Using Array Literal - []

// Syntax:
// let arrayName:datatype[] = [value1, value2,....]

let arr1:number[] = [10,20,30,40,50]

let arr2:any[] = [10,"TS", "true", 30]

let Arr1 = [10,20, "Java", true, null, undefined, 34.90]
console.log(arr1)
console.log(Arr1)


// 2. Using Array Constructor - new Array()

// Syntax:
// let arrayName = new Array<datatype>(value1,value2,value3)

let arr4 = new Array<any>(10, "Java", 45.9)
console.log(arr4)

let arr6 = [10,20,30,40,50, "Pink", "orange", "TS"]

// length - It return the total number of element available inside an array

// using the loop to iterate through the element of an array


console.log(arr6.length) // 8 - [0-7]

// 1. Traditional for loop

for(let i=0; i<arr6.length; i++){
    console.log(arr6[i])   
}

console.log("***********************************");


// 2. for of loop - directly interact with the element

// Syntax:

let i;
let j = 10

/*

for(let element of arrayName)
{
  //body
}


*/

 let arr7 = [10,20,30,40,50, "Pink", "orange", "TS", 10, 20,30]


for(let ele of arr7){
    console.log(ele)
}


console.log("**************Method of an array****************");

let arr8 = [10,20,30,"TS", "pink"]

// 1. push(ele1, ele2, ele3,.....) - It adds the elements to the end of an array

// Syntax:
// arrayName.push(ele1, ele2)

console.log(arr8)
arr8.push(40,"JS")
console.log(arr8)

// 2. pop() - It removes the last element from the array and it return
// Syntax:
// arrayName.pop()
let lastElement = arr8.pop()
console.log(arr8);
console.log(lastElement)

// 1. What is difference between push() and unshift() in an array?
// 2. What is difference between pop() and shift() in an array?

// 3. unshift(ele1, ele2,....) - It adds the element at the beginning of array

arr8.unshift("Java", 50)
console.log(arr8);

// 4. shift() - It removes the first element from an array
arr8.shift()
console.log(arr8);

// What is difference between slice() and splice() methon in an array?


// splice(), slice(), indexOf(), lastIndexOf(), includes(), join()


// 4. splice(startIndex, deleteCount, ele1, ele2, ele3,....) - Add/Remove the element
// from the array at specified index

// startIndex - The position wherw you want to add/delete the element
// deleteCount - The number of element to be deleted from array
// ele1, ele2, ele3,.... - The element that you want to add at the startIndex

let arr9 = [10,20,30,40,"TS", 50, 60]
console.log(arr9);

arr9.splice(2, 0, "Java", "JS", 100, 200, 300)
console.log(arr9);


// 5. slice(startIndex?, endIndex?) - Returns the portion of an element from
// startIndex to endIndex-1

// startIndex - The position where you want the start the slice
// endIndex(Exclusive) - The position where you want the end the slice

console.log(arr9.slice(2,8)) // from index 2 to index 7



// 6. indexOf(element, startIndex?) - Returns the index of the first occurances of an element
// in an array, or -1 if not found

// arrayName.indexOf(element, startIndex?)

let arr10 = [10,20,30,40,50,60, 10, 70, 10, 20]

let index = arr10.indexOf(10) // 
console.log(index)
console.log(arr10.indexOf(10, 9))

// Assignement - 1:
// To find out all the index of 10 available inside arr10 - 0,6,8

// 7. lastIndexOf(element, startIndex?) - Returns the index of the last occurances 
// of an element inside an array

// arrayName.lastIndexOf(element, startIndex?)

console.log(arr10.lastIndexOf(10, 5))

// 8. includes(element, startIndex?) - Returns true if the element is found in the array
// otherwise false

console.log(arr10.includes(70))
console.log(arr10.includes(30, 2));


// 9. join(separator?) - Joins all the elements of an array and return as a string

let arr11 = [20,11,2026] // dd-mm-yyyy
let joinResult = arr11.join("-")
console.log(joinResult);

// 10. toString() - Convert the array into string
console.log(arr11.toString());


// string 
// Objects - Class - Framework generation
// GitHub
// Playwright 


















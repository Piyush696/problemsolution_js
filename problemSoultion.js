//JavaScript program to swap two variables

//take input from the users
let a = 2;
let b = 3;

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);


// taking kilometers input from the user
const kilometers = 2;

// conversion factor
const factor = 0.621371

// calculate miles
const miles = kilometers * factor

// console.log(`${kilometers} kilometers is equal to ${miles} miles.`);




// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = 20;

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


// check if the number is positive, negative or zero
const number = 27;

if (number >= 0) {
    if (number == 0) {
        // console.log("The number is zero");
    } else {
        // console.log("The number is positive");
    }
} else {
    // console.log("The number is negative");
}


// program to check if the number is even or odd
// take input from the user
const numberoddEven = 17;

//check if the number is even
if(numberoddEven   % 2 == 0) {
    console.log("The number is even.");
}

// if the numberoddEven is odd
else {
    console.log("The number is odd.");
}


// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        // console.log('It is a palindrome');/
    }
    else {
        // console.log('It is not a palindrome');
    }
}

//take input
const string = 'helleh';

checkPalindrome(string);


// program to loop through an object using for...in loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using for...in
for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    // console.log(key + " - " +  value); 
} 


// program to check if a number is prime or not

// take input from the user
const pnumber = 2;
let isPrime = true;

// check if number is equal to 1
if (pnumber === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (pnumber > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < pnumber; i++) {
        if (pnumber % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${pnumber} is a prime number`);
    } else {
        console.log(`${pnumber} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}



// program to remove item from an array

function removeItemFromArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

console.log(result);


// program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    array.splice(index, 0, element);
    // console.log(array);
}

insertElement();



// program to append an object to an array

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    // console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);




// program to empty an array

function emptyArray(arr1) {

    // substituting new array
    arr1 = [];
    
    return arr1;
}

const array1 = [1, 2 ,3];
console.log(array1);

// call the function
const result1 = emptyArray(array1 );
// console.log(result1);


// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array12 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
// passing array argument
// getUniqueAfterMerge(array12, array2);



// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    // console.log(uniqueArr);
}

const array123 = [1, 2, 3];
const array21 = [2, 3, 5]

// calling the function
getUniqueAfterMerge(array123, array21);



// program to sort array by property name

function compareAge(a, b) {

    return a.age - b.age;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];

// console.log(students.sort(compareAge));


// program to split array into smaller chunks

// program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {

    while(arr.length > 0) {

        let tempArray;
        tempArray = arr.splice(0, chunk);
        // console.log(tempArray);
    }
}

const arrayChunks = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(arrayChunks, chunk);


// program to perform function overloading

function sum() {  
    
    // if no argument        
    if (arguments.length == 0) {  
        console.log('You have not passed any argument');  
    }

    // if only one argument 
    else if (arguments.length == 1) {  
        console.log('Pass at least two arguments');  
    }

    // multiple arguments
    else {
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        // console.log(result); 
    }  
}

sum();
sum(5); 
sum(5, 9);    
sum(1, 2, 3, 4, 5, 6, 7, 8, 9); 



// program to check if a number is a float or integer value

function checkNumber(x) {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }
    
    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);

// program to check if a number is a float or integer value

function checkNumber(x) {

    let regexPattern = /^-?[0-9]+$/;
    
    // check if the passed number is integer or float
    let result = regexPattern.test(x);
    
    if(result) {
        console.log(`${x} is an integer.`);
    }
    else {
        console.log(`${x} is a float value.`)
    }

}

checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);



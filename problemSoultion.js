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
console.log(result1);
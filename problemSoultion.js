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
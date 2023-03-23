// reverse to word
const string = "welcome to Hello World";


const  reverse = string.split("").reverse().join("")
const  reverseWorld = reverse.split(' ').reverse().join(' ')

// console.log(reverseWorld);

const string1 = "Good Morning";
const strin2 = "sdddad ikds gvsfs sdgsegf";

// console.log(string1.concat(strin2));
// console.log(string1.indexOf("ddad"));
// console.log(string1.includes("Morning"));
// console.log(string1.slice(0, 5));
// console.log(string1.split(" "));

// console.log(string1.startsWith("Good Morning"));
// console.log(string1.endsWith("Morning"));
// console.log(strin2.startsWith("ikds", 7));
// console.log(strin2.endsWith("gvsfs", 10));


//padStart and padEnd
const test = "abc";
// console.log(test.padStart(6))
// console.log(test.padStart(6, 1234))


const num = "1234432156788765";
const read = "Read more";
const last4number = num.slice(-4)
// console.log(last4number.padStart(num.length, "*"))
// console.log(read.padEnd(12, "."))

//replace
const word = "sdddad ikds gvsfs sdgsegf gvsfs, regrtg, Gvsfs";
const regex = /gvsfs/gi;
// console.log(word.replace(regex, 'ikds'))

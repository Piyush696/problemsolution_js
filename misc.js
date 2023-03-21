function test(){
    console.time()
    let x = 0;
    for(let i = 0; i<100000000; i++){
        x +=i;
    }
    //console.timeEnd()
}
test();

//console typeOfs

// console.log(typeof 48);
// console.log(typeof false);
// console.log(typeof 'test');
// console.log(typeof {a:1,b:2});
// console.log(typeof [1, 5, 7, 9]);
// console.log(typeof rest);
// console.log(typeof Symbol('gttr'));
// console.log(typeof 48);
// console.log(typeof function test(){});

//console uppercase, lowercase and time

const read = "Read more";

// console.log(read.toUpperCase());
// console.log(read.toLowerCase());
// console.log(read.trim());
// console.log(read.trimEnd());
// console.log(read.trimStart());


let num = 5;
num += 1;
num ++;
num = num * 3;
num *= 4;
num -= 4;
num += 1;
num += 1;
num += 1;
num --;
num /= 2
//console.log(num)


//object clone
let userDetails = {
    name: 'Piyush Dutta',
    age: 25,
    verified: false
}
// let clone = userDetails;
// let clone = {...userDetails};
// let clone = Object.assign({}, userDetails);
 let clone = JSON.parse(JSON.stringify(userDetails));

clone.name = "ajay";



console.log(clone)
console.log(userDetails)
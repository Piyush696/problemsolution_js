let num = 5;
// num += 1;
// num ++;
// num = num * 3;
// num *= 4;
// num -= 4;
// num += 1;
// num += 1;
// num += 1;
// num --;
num /= 2
// console.log(num)

 const maths = 2;

//  console.log(Math.pow(2, 4))
//  console.log(2 ** 3 ** 2)
//  console.log(16 ** -2);

// convert cureency
const price = 2342352;
Intl.NumberFormat().format(price)
console.log(Intl.NumberFormat().format(price)) 
let UsDollar = Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'

});
console.log(UsDollar.format(price))

let repees = Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR'

});

console.log(repees.format(price))
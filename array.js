// two add number is target number
const arr = [2, 7, 9, 2];
const target = 11;

function findtwoNumber(array, target) {
    for (let i = 0; i < array.length; i++) {
        const numb1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const numb2 = array[j];
            if(numb1 + numb2 === target){
                return [numb1, numb2]
            }

        }
    }
    return null;
}

const value = findtwoNumber(arr, target);
// console.log(value);


//count number of each new fruits
const fruits = [
    {apple:4, orange: 3, mango: 5},
    {apple:4, orange: 3, mango: 5},
    {apple:4, orange: 3, mango: 5}
]
 const couterFruits = {};
  fruits.forEach(element =>{
    for(each in element){
        if(couterFruits[each]){
            // console.log(couterFruits[each])
            couterFruits[each] = couterFruits[each] + element[each]
        }
        else {
            couterFruits[each] =  element[each] 
        }
    }
  })
// console.log(couterFruits)

const array1 = [23,42,76,433,232,33];
const result = Object.keys(array1);
// console.log(result)


//flat()
// const arr1 = [1, 2, 3, 3, 5, 6, [5,9], 5 ]
const arr1 = [1, 2, 3, 3, 5, 6, [5,9], 5,[2,9], [1,2,3,4] ]
//  console.log(arr1.flat())
// console.log(arr1.flat())
// console.log(arr1.flat(Infinity))


//fill
const arr2 = [1, 2, 3, 3, 5, 6 ]
//  console.log(arr2.fill(4))
//  console.log(arr2.fill(4,3)) 
//  console.log(arr2.fill(4,3, 3)) 

// lastIndexOf
const animals = ['dodo', 'tiger', 'fox'];
//  console.log(animals.lastIndexOf('dodo'))



//some

const arr3 = [1, 2, 3, 3, 5, 6 ];

// console.log(arr3.some((e) => e === 6
// ))

//splice methods
const moths = ['January', 'febuary', 'monday', 'Tuesday'];

// let resultm = moths.splice(2);
// let months = moths.splice(2, 2, "March", "April");
let months = moths.splice(2, 0, "March", "April");
// console.log(resultm)
// console.log(moths)

//slice methods
const fruitArray = ['Mango', "orange", 'apple', 'grapes','lemon'];
 let result1 = fruitArray.slice(2, -1);
//  console.log(result1)


//push, pop, shift, unshift 
const number = [1, 2, 3, 4, 5, 6, 7, 8];
number.push(9);
// number.unshift(9);
//   number.pop();
//  number.shift()

// console.log(number)


//find methods
const findArray = [1, 2, 3, 4, 5, 6, 7, 8];
 const found = findArray.find(e => e === 5);
  
//  console.log(found)


 const invertory = [
    {name :'Apple', quatiny: 5 },
    {name :'bananes', quatiny: 6 },
    {name :'cheeries', quatiny: 9 },
 ]

const foundFruits = invertory.find(e => {
    return e.name === 'bananes'
})
//  console.log(foundFruits)

//every methods

const bigArray = [1, 2, 3, 4, 5, 6, 7];
const smallArray = [5, 6, 17];

const result12 = smallArray.every((e) => bigArray.includes(e));
//  console.log(result12)


//convert object to array

const obj = {
    name: 'Piyush Dutta',
    age: 25,
    verified: false
}

// console.log(Object.entries(obj))


const arra1 = [2, 7, 9, 2];
const arra2 = [2, 7, 9, 2];
const arra3 = [2, 7, 9, 2];

const y = [...arra1, ...arra2, ...arra3];

// console.log(y)

// sort of array of object
const userReault =[
 {subject: 'Science', marks:13},
 {subject: 'Math', marks:53},
 {subject: 'English', marks:25},
 {subject: 'Hindi', marks:13}
];

userReault.sort((a, b) => a.marks - b.marks)

// console.log(userReault);

//sorting array of strings
let arrayString = ["q", 'a', 'c', 'v', 'r', 'e', 'b'];
arrayString.sort();
arrayString.reverse();

// console.log(arrayString);


//


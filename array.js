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

console.log(arr3.some((e) => e === 6
))
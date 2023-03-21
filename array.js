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
            console.log(couterFruits[each])
            couterFruits[each] = couterFruits[each] + element[each]
        }
        else {
            couterFruits[each] =  element[each] 
        }
    }
  })
console.log(couterFruits)


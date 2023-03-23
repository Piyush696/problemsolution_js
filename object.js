
//freeze and seal

const obj = {
    name: 'Piyush Dutta',
    age: 25,
    verified: false
}

Object.freeze(obj)

obj.name ="Rabi"
obj.age = 26
delete obj.name; 

// console.log(obj)
// console.log(Object.isFrozen(obj))



const obj1 = {
    name: 'Piyush Dutta',
    age: 25,
    verified: false
}

Object.seal(obj1)

obj1.name ="Rabi"
obj1.age = 26
delete obj1.name; 

// console.log(obj1)
// console.log(Object.isSealed(obj1))


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

// console.log(clone)
// console.log(userDetails)


/* object proties keys(), value().entries()*/
const obj3 = {
    a: 'somethings',
    b:23,
    c:false
}
 
// const result = Object.keys(obj)
//  const result = Object.values(obj)
const result = Object.entries(obj)


// console.log(result)

/* object set,get and update*/

const obj4 = {
    a: 'somethings',
    b:23,
    c:false
}

//set option
// obj4.isMarried = false;
// obj4['isMarried'] = false;

//get option
// console.log(obj4.a) 
// console.log(obj4['b']) 

//update
obj4.a = 'Amit';

// console.log(obj4)


//for in loop in object

const salies = {
    a: 3434323,
    b:234234,
    c:322335
}
 
for(const key in salies){
    salies[key] = `@ ${salies[key]}`
    // console.log(key)
}
 
// console.log(salies)
  

//for of loop in object
//const student = ['asd', 'reerert', 'fer3r'];
// const student = 'fwefwefwefefwe';
const student = [['asd', 'rr34r34'], ['reerert','34r34r3'], ['fer3r', 'trgtg']];

// for(const iterator of student){
//  console.log(iterator)
// }

for(const [key, value] of student){
    // console.log(key, value)
   }



//convert  array to object
   const arr = [
    ['name',"piyush"],
    ['age',34]
];
//    console.log(Object.fromEntries(arr))


//spread operntor

const obj7 = {
    a: 'somethings',
    b:23,
    c:false
};

const obj8 = {
    a: 'somethings',
    b:23,
    c:false
};

const obj9 = {
    a: 'somethings',
    b:23,
    c:false
};

const z = { ...obj7, ...obj8, ...obj9 };
console.log(z)

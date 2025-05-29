const descriptior = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptior);

// console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name : 'ginger chai',
    price: 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nhi bni");
        
    }

}
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false,
// });

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

   
// JavaScript lets you inspect and redefine property behaviors.
// Use descriptors to control object property visibility, mutability, and configurability.
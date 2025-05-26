// let myName = "sonu    "

// console.log(myName.truelength);

let myHeros = ['thor','spiderman']


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);

    }    
}
Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all object`);
    
}

Array.prototype.heyhitesh = function(){
    console.log(`hitesh says hello `)
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyhitesh()
// heroPower.heyhitesh()

// inheritance 

// const User ={
//     name : "chai",
//     email: "chai@google.com"
// }

// const teacher = {
//     makeVideos : true
// }

// const teachingSupport = {
//     isAvaliable : false 
// }
// const TASupport = {
//     makeAssignment :'JS Assignment', 
//     fullTime: true,
//     __proto__: teachingSupport
// }
// Teacher.__proto__ = User

// modern Syntax
// Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);

    
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

 
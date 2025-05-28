// class User {
//     constructor(username) {
//         this.username = username
//     }
//     logMe(){
//         console.log(`Username: ${this.username}`);
        
//     }
//    static createId(){
//         return`123`
//     }
// }

// const hitesh =  new User("hitesh")
// // console.log(hitesh.createId())


// class Teacher extends User {
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher("iphone", "i@phone.com")
// console.log((iphone.logMe()));


class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

     greet(){
        console.log(`Hello my name is: ${this.name}`);
        
    }
}

const person1 = new Person("Alice", 25);
person1.greet();

// Using Inheritance 

class student extends Person{
  constructor(name, age, grade){
    super(name,age)
    this.grade = grade;
  }

  study(){
    console.log(`${this.name} is studying in grade ${this.grade} `);
    
  }
}

const student1 = new student("Bob", 25, "10th")
student1.greet()
student1.study()

// Static MEthod and Poperties 
// Static properties are variables that belong to the class itself, not the instances.

class MathUI{
    static PI = 3.14159;

    static square(x){
        return x *x;
    }
}

const m = new MathUI();
console.log(m.PI);
console.log(m.square(4));


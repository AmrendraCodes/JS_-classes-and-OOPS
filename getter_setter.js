// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }

//     get password(){
//         return `${this._password}hitesh`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const hitesh = new User("h@hitesh.ai", "abc")
// console.log(hitesh.email);



class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;

    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }

    set fullname(name){
         const [firstname, lastname] = name.split(" ");
         this.firstname = firstname;
         this.lastname = lastname;
    }
}

const person = new Person("Amrendra","kumar")
console.log(person.fullname);

person.fullname = "Dragn kumar";
console.log(person.firstname);
console.log(person.lastname);




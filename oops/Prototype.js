// let myName = "Jhon     "
// let mychannel = "JS     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Jhon = function(){
    console.log(`Jhon is present in all objects`);
}

Array.prototype.heyJhon = function(){
    console.log(`Jhon says hello`);
}

// heroPower.Jhon()
// myHeros.Jhon()
// myHeros.heyJhon()
// heroPower.heyJhon()

// inheritance

const User = {
    name: "JS",
    email: "JS@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JSCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Jhon".trueLength()
"iceTea".trueLength()
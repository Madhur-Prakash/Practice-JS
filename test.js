// const myheroes = ["bat", "cat", "dog"]
// const myvillains = ["joker", "penguin", "riddler"]
// newar = myheroes.concat(myvillains)
// console.log(newar)

// const newmeth = [...myheroes, ...myvillains]
// console.log(newmeth)


// const another_array = [1,2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
// // console.log(another_array)
// // console.log(another_array[5][2][0])
// arr = (another_array.join(','))
// console.log(typeof arr)
// arra = Array(arr)
// console.log(arra)



// === // checks the data type while comparing(strict check)

// user = {
//     full_name: "madhur prakash",
//     age: "19"
// }

// console.log(user.full_name) // normal way of extracting data from json

// de-structure: 
// const {full_name: UserName} = user //-> now i can use UserName anywhere instead of user.full_name, the curly braces are used for de-structuring
// console.log(UserName)


//**************************************************************functions***************************************************************** */

// two ways of defining function
// function addone(){
//     console.log("this is addone")
// }

// const two = function(num){
//     console.log("this is addtwo", num)
//     // addone()
// }
// // addone()
// two(5)


// arrow functions

// const user = {
//     name: "madhur",
//     price: 999,
    

//     welcomeMessage: function(){
//         console.log(`${this.name}, welcome to the wesite`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()



// function hello(){
//     let name = "madhur"
//     console.log(this.name) // (this) returns the current context, but it only works with objects, as this console.log gives undefined 
// }

// hello()


// const hello = (num1, num2) => {       // this is how arrow func is declared
//     return(num1+num2)   // explicit return
// } 
// console.log(hello(3,4))



//implicit return, no return keyword is required
// const hello = (num1, num2) => (num1+ num2)
// console.log(hello(3, 4))



// immediately invoked function, just wrap the whole function defination inside a parenthesis and write one more parenthesis in the same line where function defination ends, need to explicitly end the execution of the function

// (function twice(port){
//     console.log(`DB connected to the port ${port}`)
// })(27017); // 


// const thrice = ( (port) =>{
//     console.log(`redis connected to the port ${port}`)  
// })(6379);


// condition ? true . false ->> terniary operator
// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("more than 80"): console.log("less than 80")

// const array = [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < array.length-5; i++) {
//     const element = array[i];
//     console.log(element)
// }



//***************************************************************** map *****************************************************************
// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "nited States of America")
// map.set("FR", "France")

// console.log(map)
// destructuring the map, using for off loop: ->> in for off loop, values are printed directly
// for (const [key, val] of map) {
//     console.log(`${key} => ${val}`)
// }


// const myObject = {
//     'gamel': 'NFS',
//     'game2': 'Spiderman'
//     }


// for in loop ->> in this loop , keys are printed directly  
// for (const key in myObject) {
//     console.log(`${key} => ${myObject[key]}`)
// }



// const coding = ["python", "js", "rust", "ruby"]
// coding.forEach( function (item){ // this is how to declare a callack function
//     console.log(item)
// })

// another way to do for-each is using arrow function
// coding.forEach( (i) => {
//     console.log(i)
// })

// coding.forEach( (i, index, arr) => {
//     console.log(i, index, arr)
// })

// const mycoding = [
//     {
//         name: "js",
//         ff: "java script"
//     },
//     {
//         name: "py",
//         ff: "python"
//     },
//     {
//         name: "ry",
//         ff: "ruby"
//     }
// ]

// // extracting values from a list of objects
// mycoding.forEach( (i) => {
//     console.log(i.ff);
// })


// filter, returns something after a condition is checked
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// newnums = mynums.filter( (num) => {
//     return num > 4
// })
// console.log(newnums)



//map
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.map( (num) => num+10)
// console.log(newnums)

// chaining in map, result of first chain is passed to the second chain
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.map( (num) => num * 10).map( (num, ind) => num + ind +1).map((num) => num/11).filter((num)=> num>4)
// console.log(newnums)


//reducer
const mynum = [1,2,3,4]
// const newnums = mynum.reduce( (acc, val) => {
//     console.log(`acc: ${acc}, current val: ${val}`)
//     return acc + val}, 0)

// const newnums = mynum.reduce( (acc, currval) => acc + currval, 0)
// console.log(newnums)


obj = {
    name: "madhur",
    age: 20
}
// console.log(obj)

// const myarr = Array.from(obj)
// console.log(myarr)
const now = new Date();
console.log(String(now.getHours()).padStart(2, '0'))
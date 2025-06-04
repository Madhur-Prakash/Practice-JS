function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


// alternative you use this way
function newSetUsername(username){
    //complex DB calls
    return (this.username = username)
    // console.log("called");
}

function newCreateUser(username, email, password){
    this.username = newSetUsername(username)
    this.email = email
    this.password = password
}

const newChai = new newCreateUser("newChai", "chai@google.com", "123")
console.log(newChai);
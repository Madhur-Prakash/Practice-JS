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

const JS = new createUser("JS", "JS@fb.com", "123")
console.log(JS);


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

const newJS = new newCreateUser("newJS", "JS@google.com", "123")
console.log(newJS);
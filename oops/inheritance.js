class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const JS = new Teacher("JS", "JS@teacher.com", "123")

JS.logMe()
const masalaJS = new User("masalaJS")

masalaJS.logMe()

console.log(JS instanceof User);
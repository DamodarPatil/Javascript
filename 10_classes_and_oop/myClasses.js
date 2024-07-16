//ES6

class user{
    constructor(username,email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}dnr`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("Damodar","damodar@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//Behind the scene

function User(username,email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}dhgv`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const coffee = new User("Damodar","damodar@gmail.com","123")
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());


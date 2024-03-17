// everything is object in javascript & they possess all the properties of an object,it allows object to inherit properties & methods from  another object.

/*
In JavaScript, every object has a prototype property, which is a reference to another object. The prototype property is what allows objects to inherit properties and methods from other objects. When you try to access a property or method of an object and it doesn't exist on that object, JavaScript will automatically look for it on the object's prototype, and then on the prototype's prototype, and so on, until it reaches the Object prototype, which is at the top of the prototype chain.
*/

// JS default behaviour is Prototypal
// array/string/function -> object ->null

function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2

// console.log(multiplyBy5(10));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;   // the one who calls
}

var user1 = new createUser("John",4)
console.log(user1.username + " : "+ user1.score);

user1.increment();
console.log(user1.username + " : "+ user1.score);

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);   // the one who calls
}

// const chai = createUser("chai",25)   gives error
const chai = new createUser("chai",25)
const tea = createUser("tea",250)

chai.printMe()
// MyArray.prototype.map()

/*
    Here's what happens behind the scenes when the new keyword is used:
    A new object is created : The new keyword initiates the creation of a new JS object.
    A prototype is linked : The newly created object gets linked to prototype property of the constructor function.This means it has access to properties and methods defined on the constructors prototype.
    The constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object.
        if no explicit return value is specified from the constructor,JS assumes this,the newly created object,to be the intended return value
    The new object is returned : After the constructor function has been called , if it doesnt return a non primitive value(object,array,function,etc), the newly created object is returned.
*/
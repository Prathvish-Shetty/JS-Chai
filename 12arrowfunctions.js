const user = {
    username:"Hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)    // current context
        console.log(this);
    }
}
// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()
// console.log(this);  // inside node environment, represents empty object
//  window object is the global object in the browser  - 'this is window object for browser'

/*
function chai(){
    let username = "Hitesh"
    // console.log(this);
    // console.log(this.username); // this only works on object
}
chai()  // undefined
*/

const chai = () => {
    let username = "Hitesh"
    console.log(this);
}

chai()  // we cannot use 'this' in arrow functions

const addTwo = (a,b) => {
    return a+b;
}   // explict return

// implicit return
// const addTwo = (a,b) => a+b; // implicit return
// const addTwo = (a,b) => (a+b); 

// console.log(addTwo(3,4))

// return keyword is compulsory for curly braces & not for parenthesis

const o = () => ({username:"Hitesh"})
// console.log(o());
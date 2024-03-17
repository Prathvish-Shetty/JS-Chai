const user = {  // object literal
    username : "hitesh",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        // console.log(this); 
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);
//  this - current context
// new keyword create new context

function User(username,loginCount,isLoggedIn){
    this.userName=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }
    return this // optional
}
const userOne =  User("Hitesh",10,true)
const userTwo =  User("Chai",12,false)
console.log(userOne);   // thus use new keyword everytime as it always gives new instance
console.log(userOne.constructor);
console.log(userOne instanceof  User);  // true if new keyword is used
console.log(userOne instanceof Object);
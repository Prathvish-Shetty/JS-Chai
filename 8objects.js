// objects can be declared by two ways- as literals and as  constructor function
// singleton when made through consructor   object.create

// object literals

const myS = Symbol("key1")
// console.log(myS);
const JsUser = {
    name:"pss",
    "full name":"p s",
    [myS]:"mykey1", // using symbol in object
    age:19,
    location:"pune",
    email:"p1@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["mon","tue"]
    } 
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[myS]);

JsUser.email = "p2@gmail.com"
// Object.freeze(JsUser)   // changes will not get propogated
JsUser.greetings = function () {
    // console.log("Hello js user");
    // console.log(`Hello js user ${this.name}`);
}
// console.log(JsUser.greetings);
// console.log(JsUser.greetings());


// -------------------------

const tinderUser = {}   // non singelton object
// const tinder = new Object()  // non singleton object

tinderUser.id = '1238'
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:'p',
            lastname:'s'
        }
    }
}

// console.log(regularUser.fullName.userfullname);
// console.log(regularUser.fullName?.userfullname);    // if full name exists

const o1 = {1:'a',2:'b'}
const o2 = {3:'c',4:'d'}
// const o3 = {o1,o2}
// const o3 = Object.assign(o1,o2)     // merging
// const o3 = Object.assign({},o1,o2)     // optional
// const o3 = {...o1,...o2}
// console.log(o3);

//  data from database- array of objects
const user = [
    {
        id:1,
        email:"p1@gmail.com"
    },
    {
        id:2,
        email:"p2@gmail.com"
    }
]

// user[1].email;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
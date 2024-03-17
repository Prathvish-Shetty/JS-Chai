let score = "33"
// console.log(typeof score)
// console.log(typeof(score))
let valueInNumber = Number(score)
// NaN is a type of number
// Number("33ac") => NaN
// Number(null) => 0
// Number(undefined) => NaN
// true => 1
let isLoggedIn = 1
let isBLoggedIn = Boolean(isLoggedIn)
// console.log(isBLoggedIn);
// empty string false, non-empty string true when converted to boolean

// ------------------------------------ conversion

let value = 3;
let negValue = -value
// console.log(negValue);
// console.log(+true);
// console.log(+"");

num1 = num2 = num3 =2+2

let gameCounter = 100
gameCounter++
// console.log(gameCounter);

// null > 0 false
// null == 0 false
// null >= 0 true

// equality check and comparison work differently
// comparison  convert null to Number

// on the basis of data storage in memory the datatypes are divided into 2 types
/*
Primitive-call by value
String,Number,Boolean,null,undefined,Symbol(used to make any value unique),BigInt

Non primitive Reference type
Array,Objects,Functions

JS is dynamically typed
type of bigInt is undefined

*/

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(anotherid);

const bigNumber = 61651651351320131n

const fruits = ["apple","mango","cherry"]
const myObj = {
    name : "pss",
    age : 18
}
const myFunction = function() {//object function
    console.log(this.name)
}

// -----------------------------------------------------------------------------------------
// Stack stores primitive data(copy),heap stores non primitive data (reference)
let name = "om"
let anothername = name
anothername = "aj"

let userOne = {
    email : "p1@gmail.com",
    upi : "p1@ybl"
}

let userTwo = userOne

userTwo.email = "p2@gmail.com"
// console.log(userOne.email,userTwo.email);
function sayHi(){
    // console.log("H");
    // console.log("i");
}
sayHi();    // execute
sayHi;      // reference to the function

// function add(a,b) {
//     console.log(a+b);
// }
// add(2,3);   // calling a function with arguments
function add(a,b) {
    return a+b;
}
result = add(2,3)
// console.log(result);  

// function loginUserMessage(userName="sam"){
function loginUserMessage(userName){
    // if (userName === undefined){
    if(!undefined){  // undefined returns false
        // console.log( "Please enter your username" );
        return;
    }
    return `${userName}, just logged in.`;
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())//undefined logged in

function calculateCartPrice(...num1){   // rest and spread operator
// function calculateCartPrice(val1,val2,...num1){   
    return num1
}
// console.log(calculateCartPrice(2,5,4,6));

const user = {
    name:"Haris",
    price:1000
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} &  Price is ${anyObject.price}`);
}
// handleObject(user);
// handleObject({
//     name:"sam",
//     price:500
// });

const myNewArray = [10,20,30,40,50]
function returnSecondValue(getValue){
    return getValue[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([10,20,30,40,50]));
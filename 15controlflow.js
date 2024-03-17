const score = 200
if (score>100) {
    const power = "fly"
    // console.log(`user power:${power}`);
}

const balance = 1000
// if (balance>0) console.log("test");     // inplicit scope
// if (balance>0) console.log("test"),console.log("passed");     

// if-else if-else
// switch case everything below matched case is runned
// operators

let useremail = "abc@gmail.com";
// useremail = "";
if (useremail) {
    // console.log("Email found");
}else   console.log("Email not found");


// truthy or falsey values
// falsey values : false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy values : "0","false"," ",[],{},function(){}-empty function

useremail = []
if (useremail.length == 0) {
    console.log("Array is empty");
}
const emptobj = {}
if (Object.keys(emptobj).length == 0) {
    console.log("Object is empty");
}
// console.log(Object.keys(emptobj));
false == 0 == ""

// Nullish Coalescing Operator (??) : null, undefined
// let val1 = 5 ?? 10 ?? 20  // 2nd one get assigned if first one is null or undefined
let val1 = null ?? 10

// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice < 80 ? console.log("less than 80"):console.log("more than 80");
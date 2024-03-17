for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value is ${j} & inner loop is ${i}`);
        // console.log(`${i}*${j}=${i * j}`);
        
    }
}
// entry control

let myArray = ["apple", "banana", "cherry"];
let i = 0
while (i<myArray.length) {
    // console.log(`Value is ${myArray[i]}`);
    i+=1
}

let score = 1
do {
    // console.log(`score is ${score}`);
    score++
} while (score<=10);
// exit control

// ----------------------------------------------------

// Array specific loops
["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {    // can be applied on array string and objects
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);    
}

const map = new Map()   // maps have unique key value pair
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key,value] of map) {    // destructuring a map
    // console.log(key,':-',value);
}

const myObject = {
    game1:'NFS',
    'game2':'Spiderman'
}

const mo = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const [key,value] of Object.entries(mo)) {
    // console.log(key,value);
}
for (const key of Object.keys(mo)) {
    // console.log(key);
}
for (const value of Object.values(mo)) {
    // console.log(value);
}

for (const key in mo) {
    // console.log(`${key}:-${mo[key]}`);
}

// for(const k of mo){
//     // console.log(k);
// }   // object not iterable

const pl = ["java","js","py","go"]
for (const key in pl) {
    // console.log(`${key} : ${pl[key]}`);
}


// for of loop is good for arrays,for in loop is good for objects

for (const key in map) {    // map is not iterable 
    // console.log(key);
}

// const pl = ["java","js","py","go"]
pl.forEach(function (val){
    // console.log(val);
})   // callback function has no name

pl.forEach( (item)=>{
    // console.log(item);
} )


function printMe(item){
    // console.log(item);
}
pl.forEach(printMe);     // referencing a function inside the forEach method

pl.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName:"js"
    },
    {
        languageName : "java",
        languageFileName:"java"
    },
    {
        languageName : "python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    // console.log(item.languageName);
    // console.log(item);
})
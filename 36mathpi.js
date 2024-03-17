console.log(Math.PI);
console.log(Math);
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI"); 
console.log(descriptor);

const chai = {
    name:"ginger chai",
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log("Chai nahi bani");
    }
}
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false
// })
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// for (const [key,value] of chai) {
//     console.log(`${key} : ${value}`);
// } object not directly iterable

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function')
        console.log(`${key} : ${value}`);
}
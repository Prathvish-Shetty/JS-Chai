// promise is an  object that represents the eventual completion or failure of an asynchronous operation and its resulting value.﻿﻿
const promiseOne = new Promise(function(resolve,reject){
    // Do any async task
    // DB calls,cryptography,file operations,network calls,api calls,
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})    
promiseOne.then(function(){
    console.log("Promise consumed");    // .then is connected to resolve
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2 completed");
        resolve();   // return value will be passed as argument of next then block
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject) {
    resolve({username:"chai",password:"secret"})
})
promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        // let error = true
        let error = false
        if (!error) {
            resolve({username:"Hitesh",password:"12345"})
        }else{
            reject("ERROR: Something went wrong")
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("Promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"JavaScript",password:"12345"})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 1000);
})

// async await cannot directly handle errors
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}

getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

// a fetch request doesnot reject on HTTP errors(404,etc) 
// fetch has high priority-microtask/priority/fetch queue is used to add callbacks to callstack

/*
Internally fetch contains
Data:_
onfullfilled []
onRejection []
we dont have access to them
*/
/*
    Javascript:(default behaviour)
    Synchronous
    Single Threaded-each operation waits for the last one to complete before executing
*/
/*
    Blocking code - block the flow of program,read file sync
    Non Blocking code - dont block execution,read file async
    JS v8 engine designed in c++  is single threaded and event driven.
    web api is inside browser it is an environment just like node
*/
/*
    JS Engine = Memory heap + call stack
    function inside call stack gives call to webapi which contains DOM API,setTimeOut,setInterval,fetch()
    register call back contains when to do-registers all events
    task queue - adds events to call stack
    promise/high priority queue - fetch api - fast execution - promises have this queue
    node dont has dom api
    during program execution a call stack is made where functions are loaded and unloaded
*/
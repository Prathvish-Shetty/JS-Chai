// Javascript Execution context - How js code is executed

/*

Execution Context is an object that contains information about the execution of JavaScript code. It consists of a set 
An execution context is a container that holds all the necessary information to execute JavaScript code.

when we provide code files to JS-global execution context is created which is stored in 'this'

JS is single threaded-everything is a process
Inside an execution context, there are three main components: Variable object (VO), Scope chain and this value.
1.Global Execution Context 
2.Functional Execution Context (created when function is called)
3.Eval Execution  context - used for eval() method

2 phases of running js code:
1.Memory Creation Phase
2.Execution Phase
    1.Global Execution/environment  Context - program allocated in this
    2.Memory Phase  - variable declared here with 'undefined' and functions are declared  
    3.Execution Phase - variables are defined,functions create another execution context containing - new variable environment + execution thread i.e it will create new memory and execution phase
                        the function returns the result to its parent executional context-here it is global execution context-after its work this ececution context is deleted


inspect->source->snippets


🔵The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

🔵Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

🔵Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

🔵Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
📝The return value of the 'Function Execution' context is passed to the Global Execution Context
Execution context gets deleted as well once it finishes its job
*/
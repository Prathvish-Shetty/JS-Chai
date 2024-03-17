// Immediately Invoked Function Expression (IIFE) - avoid polluting the global namespace

(function chai(){
    // named IIFE
    console.log("DB connected");
})();       // function gets immediately executed semicolon compulsory to end
// chai()

// Immediately Invoked Function Expressions (IIFE): used for encapsulating code and maintaining a clean global scope,they can enhance code organization, protect variables, and prevent naming collisions. function cannot be accessed as it has no name

((name) => {
    console.log(`DB connected too ${name}`);
})(`Hitesh`);
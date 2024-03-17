// window -> this refers window object
// node -> this refers empty object {}

function setUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password) {
    // setUserName(username)   // when called it get executed and clears its reference after execution,
    // setUserName.call(username);  // call is used to hold the reference,it will set its username and not the username of the method which has called it 
    setUserName.call(this,username); 
    this.email = email;
    this.password = password;
}

const user1 = new createUser('John Doe','john@gmail.com', '123456');
console.log(user1);

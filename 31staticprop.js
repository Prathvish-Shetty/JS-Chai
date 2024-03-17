class user{
    constructor(username){
        this.username = username; 
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `ID_${Math.round(Math.random()*1000)}`;
    }
}

const hitesh = new user("Hitesh")
// console.log(hitesh.createId());
// console.log(user.createId())
/*
    Static means that the method is associated with the class itself rather than instances of the class.
    These methods are called on the class itself, rather than on instances of the class.
    They cannot be called through an instance of the class.
*/

class Teacher extends user{
    constructor(username,email){
        super(username); // calling parent's constructor
        this.email= email;
    }
}

const iphone = new Teacher("iphone","apple@gmail.com");
// console.log(iphone);
iphone.logMe()
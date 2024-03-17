const User = {
    _email:"hc@hc.com", // defines private property
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const tea = Object.create(User)     // factory function
console.log(tea.emai);
// create a new function based object 
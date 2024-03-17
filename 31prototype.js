let myname = "hitesh     "
// console.log(myname.trim().length);
// console.log(myname.trueLength);

let myHero = ["thor","hulk"]
let heroPower = {
    thor:"lightning",
    hulk:"smash",
    getHulkPower:function(){
        console.log(`Hulk power is ${this.hulk}`);
    }
}

Object.prototype.hitesh = function () {
    console.log(`Hitesh is present in all objects`);
}

// myHero.hitesh()

let myHeros = ["thor","hulk"]

Array.prototype.heyHitesh = function () {
    console.log('This array belongs to Hitesh');
}

// heroPower.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() 

// inheritance

const User = {
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User
// the above approaches are outdated

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "   ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim( ).length}`);
}
anotherUsername.trueLength()
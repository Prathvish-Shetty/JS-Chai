const myArray = [0,1,2,3,4,5,6]
const arr = new Array(1,5,6,3)
arr.push(10)
arr.pop()
arr.unshift(15)
arr.shift()
// console.log(arr.includes(9))
// console.log(arr.indexOf(9))
// console.log(myArray[0]);
const narr = arr.join()
// console.log(arr)
// console.log(narr);

// console.log("A ",myArray);
const myn1 = myArray.slice(1,4)
// console.log(myn1);
// console.log("B ",myArray);
const myn2 = myArray.splice(1,4)    // removes and returns the elements of provided index
// console.log(myn2);

marvel = ["ironman","thor", "captain america"];
dc = ["batman","superman","flash"]
// marvel.push(dc)
// allHeros = marvel.concat(dc)
// console.log(allHeros)

const allnewheros = [...marvel,...dc]   // spread operator
// console.log(allnewheros)

const anotherarray = [1,2,3,[4,5,6],7,[8,[9,10]]]
const aar = anotherarray.flat(Infinity)

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({a:1,b:2})); // empty Array

let s1 = 100,s2 = 200,s3 = 400;
// console.log(Array.of(s1,s2,s3));
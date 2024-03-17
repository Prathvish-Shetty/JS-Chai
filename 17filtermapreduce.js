const coding = ["js","ruby","java","python","cpp"]
const values = coding.forEach((item)=>{
    // console.log(item);
    return item
})
// console.log(values);    // undefined as it dont return any value

const myNums = [1,2,3,5,6,7,8,9,10]

// const newNums = myNums.filter((nums)=>nums>4)
// const newNums = myNums.filter((nums)=>{
//     return nums>4
// })
// console.log(newNums);   

const newNums = []
myNums.forEach((nums)=>{
    if (nums > 4){
        newNums.push(nums)
    }
})
// console.log(newNums);

const books = [
    {
        title:"one",genre:"thriller" ,pages:234
    },
    {
        title:"two",genre:"adventure" ,pages:200
    },
    {
        title:"three",genre:"horror" ,pages:124
    },
    {
        title:"one",genre:"thriller" ,pages:234
    }
]

let userBooks = books.filter((bk)=>bk.genre=== 'thriller')
userBooks = books.filter((bk)=>bk.pages>200 && bk.genre=== 'thriller')
// console.log(userBooks);

const mynewNums = myNums.map((nums)=>nums+10)
// console.log(newNums);

// we can do chaining of  methods in javascript using dot notation or bracket notation

const nn = myNums.map((nums)=>nums*10).map((nums)=>nums+1).filter((nums)=>nums>4)
// console.log(nn);

const mynm = [1,2,3]
// const myTotal = mynm.reduce(function(acc,currval){
//     console.log(`accumulator:${acc}  current value:${currval}`);
//     return acc+currval
// },0)
// const myTotal = mynm.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal)

const shoppingCart = [
    {
        course:"js",
        fee:3000
    },
    {
        course:"java",
        fee:3000
    },
    {
        course:"cpp",
        fee:3000
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.fee,0)
// console.log(priceToPay)
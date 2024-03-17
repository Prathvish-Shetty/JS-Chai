function one(){
    const userName = "hitesh"
    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
one()

addOne(5)
function addOne(num){
    return num+1
}

// addTwo(5)    // cannot be accessed before declaration
const addTwo = function(num){
    return num+2;
}
addTwo(5)
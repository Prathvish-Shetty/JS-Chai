//  destructuring of objects
const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Pss"
}
// course.courseInstructor

const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor:instructor} = course
// console.log(instructor)

const navbar = ({company})=>{   // instead of props.company - this is an example of react 

}
navbar(company = "Hitesh")

// earlier xml was used  to send data from server to client but now json is mostly used for that purpose
// JSON stands for JavaScript Object Notation and it's a lightweight data-interchange format
// {
//     "name":"Hitesh",
//     "age":25,
//     "city":"Delhi"
// }

/*
api in array format
    [
        {},
        {}
    ]
*/


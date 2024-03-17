const myArray = []
// %DebugPrint(myArray)    // []
// PACKED_SMI_ELEMENTS (continuous)
// HOLEY_SMI_ELEMENTS

/* 
    Types of array
    SMI(small integer) - optimised
    Packed element
    Double(float,string,function)
*/

// const arrTwo = [1,2,,4,5]   // this array has hole,holey
const arrTwo = [1,2,,4,5]   // PACKED_SMI_ELEMENTS / continuous - best type of array

arrTwo.push(6.0)    // PACKED_DOUBLE_ELEMENTS although deleted  but still it is showing as packed double elements
arrTwo.push('7')    // method/array PACKED_ELEMENTS
arrTwo[10] = 11 // holey elements-multiple types in  an array

console.log(arrTwo);
console.log(arrTwo.length);
// console.log(arrTwo[9]);  costly operation
// console.log(arrTwo[19]);

// bound check for non-holes only first two checks else 4 checks for holes
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,9)
// hasOwnProperty(Object.prototype,9) most expensive check
// holes are very expensive in JS

// optimization(continuous) -  SMI>DOUBLE>PACKED
// optimized(holey) - SMI>DOUBLE>PACKED

const arr3 = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arr3[0] = '1'   // holey elements
arr3[1] = '2'   // holey elements
arr3[2] = '3'   // holey elements

// more optimised
const arr4 = []
arr4[0] = '1'   // PACKED_ELEMENTS smi
arr4[1] = '2'   // PACKED_ELEMENTS
arr4[2] = '3'   // PACKED_ELEMENTS

const arr5 = [1,2,3,4]
arr5.push(NaN)  // packed double
arr5.push(Infinity)  // packed double

// unsplash api
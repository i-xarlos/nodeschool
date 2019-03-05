/*
*  Given an Array of strings, use Array#reduce to create an object that contains the number
*  of times each string occured in the array. Return the object directly (no need to console.log)
*/

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
var words = new Object()

let countWords = x => x.reduce( ( acc , val ) => { acc[val] = ++acc[val] || 1; return acc  }, {})
module.exports = countWords

console.log(countWords(inputWords))


let vals = [ 4 , 8 , 9 , 150 , 10 , 18 , 2 ]
let biggest = vals.reduce( ( acc , val ) => val > acc ? val : acc )
console.log(biggest);


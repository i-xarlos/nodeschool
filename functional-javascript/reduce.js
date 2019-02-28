var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
var words = new Object()

let countWords = x => x.reduce( (acc,val) => {
    acc[val] = ++acc[val] || 1
    return acc
}, {})


module.exports = countWords



console.log(countWords(inputWords))


let numb = [1,2,3,4,5,6,7,8,9,10]
let filtered = []

/*for (let i = 0; i < numb.length; i++) {
    if(evenNumbers(numb[i])) filtered.push(numb[i])
}

function evenNumbers(number) {
    return number % 2 === 0
}
*/


filtered = numb.filter(function (n){
    return n % 2 === 0 
})



console.log(filtered);


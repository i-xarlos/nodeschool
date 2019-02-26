/*function repeatWhile( fn , cond , start = 0 ){
    return function () {
        var count = start
        while ( cond( count++ ) ) fn ( ...arguments)
    }
}

const myfunc = () => console.log() 

var repeat = repeatWhile( myfunc , i => i < 5 , 2)  

repeat()*/



function setArray (arr) {
    var myArray = []
    var sum = 0
    for (let i = 2; i < arr.length; i++) {
        myArray.push(Number(arr[i]));
    }
    for (let j = 0; j < myArray.length; j++) {
        sum += myArray[j]
    }
    return sum
}

console.log(setArray(process.argv))




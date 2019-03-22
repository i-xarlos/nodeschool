function sum (m) {
    return function(n){
        return n + m
    }
}

var a = sum(8)

console.log(a(4));


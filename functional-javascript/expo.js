var ncom = ['Gerson','Matheu']
var rand = x => x[ Math.ceil( Math.random()* x.length - 1 )] || 0
console.log(rand(ncom))

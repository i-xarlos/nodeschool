/*function noisy(f) {
    return (...args) => {
      console.log("calling with", args);
      let result = f(...args);
      console.log("called with", args, ", returned", result);
      return result;
    };
  }
  module.exports = noisy

  noisy(Math.cos)(3, 2, 1);*/

/*
  function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }

  module.exports = repeat
*/

function sing (callback){
    console.log('lallala');
    if(callback) callback();
}

function hi () {
    console.log('hola');
}

console.log(sing())
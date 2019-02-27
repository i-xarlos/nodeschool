

function repeat(multiply, x) {
    return x => multiply * x
  }

  // Do not remove the line below
  module.exports = repeat

  let doubler = repeat(4);

  console.log(doubler(2));
  




function repeat(multiply) {
    return x => multiply * x
  }


  module.exports = repeat

  let doubler = repeat(2);

  console.log(doubler(5));



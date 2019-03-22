var animals = [
  { species : 'Fluffykins' , species : 'Rabbit' },
  { name : 'Caro'       , species : 'Dog' },
  { name : 'Hamilton'   , species : 'Dog' },
  { name : 'Harold'     , species : 'fish' },
  { name : 'Ursula'     , species : 'Cat' },
  { name : 'Jimmy'      , species : 'Fish' }
]

/* FOR BUCLE*/
/*
  var dogs = []
  for( var i = 0 ; i<animals.length ; i++ ){
    if(animals[i].species == 'Dog')
      dogs.push(animals[i])
  }
*/

/* USING FILTER FUNCTION */
/*
  var dogs = animals.filter(function(animal){
    return animal.species === 'Dog'
  })
*/


var isDog = function(animal){
  return animal.species === 'Dog'
}
var dogs = animals.filter(isDog);


console.log(dogs);



const join = ( arr , separator=',' ) => arr.reduce(function(valorAnterior, valorActual, indice, vector){
        return valorAnterior + separator + valorActual;
}) 

console.log(join([0,1,2,3,4]))

function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   return array.indexOf(num)
}
let numeros = [5,4,6,7,2,1]
console.log(encontrarElemento(7, numeros))
module.exports = encontrarElemento;

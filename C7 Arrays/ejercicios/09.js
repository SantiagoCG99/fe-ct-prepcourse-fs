function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const indice = Math.floor(Math.random() * array.length);
   return array[indice];
}
let numeros = [5,4,6,7,2,1]
console.log(obtenerElementoAleatorio(numeros))
module.exports = obtenerElementoAleatorio;

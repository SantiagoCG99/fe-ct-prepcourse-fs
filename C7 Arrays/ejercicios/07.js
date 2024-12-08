function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  array.sort((a, b) => a - b);
  return array
}
let numeros = [5,4,6,7,2,1]
console.log(ordenarArray(numeros))

module.exports = ordenarArray;

function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let duplicados = []
  for (let i = 0; i < array.length; i++) {
    duplicados.push(array[i] * 2);
 }
 return duplicados
}
let numeros = [5,4,6,7,2,1]
console.log(duplicarElementos(numeros))

module.exports = duplicarElementos;
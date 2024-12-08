function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let mayor = 0
for (let i = 1; i < array.length; i++) { 
  if(array[i] > array[mayor])
    mayor = i;

}
return mayor;
}
let numeros = [15,4,6,17,2,11]
console.log(encontrarIndiceMayor(numeros))

module.exports = encontrarIndiceMayor;

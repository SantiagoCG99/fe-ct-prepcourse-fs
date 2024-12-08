function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
let pares = []
for (let i = 0; i < array.length; i++) { 
  if(array[i] % 2 == 0)
  pares.push(array[i]);

}
return pares;
}
let numeros = [5,4,6,7,2,1]
console.log(filtrarNumerosPares(numeros))
module.exports = filtrarNumerosPares;

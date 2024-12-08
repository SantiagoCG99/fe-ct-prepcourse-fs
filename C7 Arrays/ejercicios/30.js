function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elemento = new Set();
  for(let i = 0; i < numeros.length; i++){
    if(elemento.has(numeros[i])){
      return numeros[i];
    }
    elemento.add(numeros[i])
  }
  return null
}
let numeros1 = [1, 2, 3, 4, 5, 6, 1]; 
console.log(encontrarElementoRepetido(numeros1));
module.exports = encontrarElementoRepetido;
function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0
  for (let i = 0; i < arrayOfNums.length; i++) { 
      suma += arrayOfNums[i];
    
    }
  return suma;
  }
  let numeros = [15,4,6,17,2,11]
  console.log(agregarNumeros(numeros))

module.exports = agregarNumeros;

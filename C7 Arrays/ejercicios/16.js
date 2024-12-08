function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let multiplicador = []
  for (let i = 0; i < array.length; i++) { 
      multiplicador.push(array[i] * i);
    
  }
  return multiplicador;
  }
  let numeros = [15,4,6,17,2,11]
  console.log(multiplicarElementosPorIndice(numeros))

module.exports = multiplicarElementosPorIndice;

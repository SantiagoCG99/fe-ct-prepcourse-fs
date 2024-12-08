function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = resultadosTest.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
  let promedio = suma / resultadosTest.length;
  return promedio 
}
let numeros = [15,4,6,17,2,11]
console.log(promedioResultadosTest(numeros))
module.exports = promedioResultadosTest;

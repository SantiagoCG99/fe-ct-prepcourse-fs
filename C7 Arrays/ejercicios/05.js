function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array
  
}
let nombres =["santiago","juan","jose"];
nombres = agregarItemAlComienzoDelArray(nombres ,  "fernando");
console.log(nombres);


module.exports = agregarItemAlComienzoDelArray;

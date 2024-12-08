function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array
  
}
let nombres =["santiago","juan","jose"];
nombres = agregarItemAlFinalDelArray(nombres, "lola");
console.log(nombres);
module.exports = agregarItemAlFinalDelArray;

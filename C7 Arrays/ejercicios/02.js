function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  let ultimoElemento = array[array.length - 1];
  return ultimoElemento
}
let nombres =["santiago","juan","jose"];
console.log(devolverUltimoElemento(nombres));
module.exports = devolverUltimoElemento;

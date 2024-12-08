function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
 
  for(let i = 0; 1 < array.length; i++){
    if (typeof array[i] === "string" && array[i].length > 5){
      return array[i];
    }
  }
  return null;
}
let nombres =["santiago","juan","jose"];

console.log(obtenerPrimerStringLargo(nombres));

module.exports = obtenerPrimerStringLargo;

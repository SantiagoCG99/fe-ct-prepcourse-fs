function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if(valor === "verdadero"){
    console.log("Soy Verdadero")
    return "Soy Verdadero"
  }
  else{
     console.log("Soy falso")
    return "Soy falso"
  }
}
esVerdadero("verdadero")
module.exports = esVerdadero;

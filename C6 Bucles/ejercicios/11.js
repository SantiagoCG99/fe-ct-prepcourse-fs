function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if(num >= 20 && num <= 50){
    console.log(true)
  return true
}
else{
  console.log(false)
  return false
}
}
estaEnRango(50)

module.exports = estaEnRango;

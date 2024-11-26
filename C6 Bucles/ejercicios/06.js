function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num >= 100 && num <= 999) { 
    console.log(true); return true; 
  }
  else {
   console.log(false); return false; 
  } 
}
tieneTresDigitos(55)
module.exports = tieneTresDigitos;

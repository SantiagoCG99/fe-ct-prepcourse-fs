function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  if (90 >= num){
    console.log(true)
    return(true);}
  else {
    console.log(false)
    return(false);
  }
}
menosQueNoventa(91)
module.exports = menosQueNoventa;
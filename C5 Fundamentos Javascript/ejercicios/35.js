// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  console.log(Math.ceil(num));
   return Math.ceil(num);
}
redondearHaciaArriba(3.25)
module.exports = redondearHaciaArriba;
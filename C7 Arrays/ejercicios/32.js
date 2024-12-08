function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let palabra = string.toLowerCase().replace(/[^a-z]/g,'');

  let reversedString = palabra.split('').reverse().join('');
  return palabra === reversedString;
}
console.log(esPalindromo("Somos o no somos"));
module.exports = esPalindromo;
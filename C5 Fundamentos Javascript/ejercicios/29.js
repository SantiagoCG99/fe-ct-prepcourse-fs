function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  console.log(1/2 * (base * altura));
  return 1/2 * (base * altura)
}
areaDelTriangulo(10, 5)
module.exports = areaDelTriangulo;
function obtenerSaludo(nombre) {
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:
  const saludo = "Hola ";
  console.log(saludo + nombre);
  return saludo + nombre;
}
obtenerSaludo("Santiago")
module.exports = obtenerSaludo;
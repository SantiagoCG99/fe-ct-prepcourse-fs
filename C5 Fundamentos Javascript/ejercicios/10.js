function devolverString(string) {
  // La función recibe un argumento llamado string.
  // Debe retornar dicho string.
  // Por ejemplo: 
  // "texto" ---> "texto" 
  // "hola mundo" ---> "hola mundo" 
  // "SoyHenry" ---> "SoyHenry" 
  // Tu código:
  console.log(string)
  return(string === string)
}
devolverString("mucho")
module.exports = devolverString;
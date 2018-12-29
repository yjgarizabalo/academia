// Clase #13 For 

var Emanuel = {
    nombre: 'Emanuel',
    apellido: 'Garizabalo',
    edad: 0,
    peso: 1.5
}

var Tiempo = {
    nombre: 'Marxial',
    tiempo : 750000
}

var AUMENTAR_DE_PESO = 0.2

console.log(`Al inicio del año ${Emanuel.nombre}  pesa ${Emanuel.peso}Kg`)


const aumentarDePeso = persona  => persona.peso += AUMENTAR_DE_PESO
const adelgaza = persona => persona.peso -= AUMENTAR_DE_PESO

for (var i = 1; i <= 365; i++) {
    var random = Math.random()
    
  if (random < 0.25) {
    //aumenta de peso
    aumentarDePeso(Emanuel)
  }
  else if (random < 0.5) {
     // adelgaza
     adelgaza(Emanuel)
  }
}

console.log(`Al final del año ${Emanuel.nombre}  pesa ${Emanuel.peso.toFixed(1)}Kg`)


console.log(`Para ${Tiempo.nombre} que llevo una vida ordenada y sin excesos le queda ${Tiempo.tiempo} años de vida`)

for (var 1)

console.log(`Para ${Tiempo.nombre} que llevo una vida Desordenada y Con excesos le queda ${Tiempo.tiempo} años de vida`)
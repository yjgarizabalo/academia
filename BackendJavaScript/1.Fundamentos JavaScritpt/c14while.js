// Clase #14 While

var Wendy = {
    nombre: 'wend',
    apellido: 'Escorcia',
    edad: 26,
    peso: 54
}

console.log(`al inicio del año ${Wendy.nombre} pesa ${Wendy.peso}kg`)

const  AUMENTAR_DE_PESO = 0.3
const DIA_DEL_AÑO = 365 

const aumentarDePeso = persona  => persona.peso += AUMENTAR_DE_PESO
const adelgaza = persona => persona.peso -= AUMENTAR_DE_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = Wendy.peso - 3
var dias = 0

while (Wendy.peso > META) {
    if (comeMucho()) {
     aumentarDePeso(Wendy)
    }
    if (realizaDeporte()) {
     adelgaza(Wendy)
    }
   dias +=1
}

console.log(`Pasaron ${dias} dias  hasta que ${Wendy.nombre} adelgazo 3kg`)
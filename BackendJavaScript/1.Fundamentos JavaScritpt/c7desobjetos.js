// Clase #7 Desestructurar Objetos

var Emanuel = {
    nombre: 'Emanuel',
    peso: '3',
    edad: '0',
}

var Yair =  {
    nombre: 'Yair',
    peso: '75',
    edad: '26',
}

function imprimirNombre(nombre) {
    // var perosna = persona.nombre
    var {nombre} = persona
    console.log(nombre)
}

imprimirNombre(Emanuel)
imprimirNombre(Yair)
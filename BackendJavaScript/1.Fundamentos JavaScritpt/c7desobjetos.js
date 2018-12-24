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

function imprimirNombre(persona) {
    // var perosna = persona.nombre
    var {nombre} = persona
    var {edad} = persona
    console.log(nombre, edad)
}

imprimirNombre(Emanuel)
imprimirNombre(Yair)



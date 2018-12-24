// Clase #7 Desestructurar Objetos

var Emanuel = {
    nombre: 'Emanuel',
    Apellido: 'Garizabalo',
    edad: '0',
}

var Yair =  {
    nombre: 'Yair',
    peso: 'Garizabalo',
    edad: '26',
}

function imprimirNombre(persona) {
    // var perosna = persona.nombre
    var {nombre} = persona
    var {edad} = persona
    console.log(`Tu nombre es ${nombre} y tienes ${edad} años`)
}

imprimirNombre(Emanuel)
imprimirNombre(Yair)




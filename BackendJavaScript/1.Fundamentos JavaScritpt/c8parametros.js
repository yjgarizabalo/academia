// Clase #8 Parametros como Referencia o como Valor


var Emanuel = {
    nombre: 'Emanuel',
    Apellido: 'Garizabalo',
    edad: 0,
}

var Yair =  {
    nombre: 'Yair',
    peso: 'Garizabalo',
    edad: 26,
}

function imprimirNombre(persona) {
    // var perosna = persona.nombre
    var {nombre} = persona
    var {edad} = persona
    console.log(`Tu nombre es ${nombre} y tienes ${edad} años`)
}

imprimirNombre(Emanuel)
imprimirNombre(Yair)


function cumpleAnos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
    //persona.edad += 1
}



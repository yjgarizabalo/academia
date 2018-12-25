// Clase #11 Funciones que retornan Valores

var Emanuel = {
    nombre: 'Emanuel',
    apellido: 'Garizabalo',
    edad: 0,
    ingeniero: true,
    cocinero: false,
    dentista: false,
    futbolista: true,
}

var Maria = {
    nombre:  'Maria',
    apellido: 'Guzman',
    edad: '16',
}

const MAYORIA_DE_EDAD = 18

function esmayorDeEedad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirsiMayorDeEdad(persona) {
    if (esmayorDeEedad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else {
        console.log(`${persona.nombre} es menor de edad`) 
    }
    
}
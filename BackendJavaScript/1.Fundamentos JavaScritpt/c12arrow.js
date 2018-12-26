// Clase #12 Arrow Fuctions

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
    edad: '18',
}

const MAYORIA_DE_EDAD = 18

///function esmayorDeEedad(persona) {
//    return persona.edad >= MAYORIA_DE_EDAD
//}

const esmayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const esmenorDeEdad = ({edad}) => edad <= MAYORIA_DE_EDAD

function imprimirsiMayorDeEdad(persona) {
    if (!esmayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else {
        console.log(`${persona.nombre} es menor de edad`) 
    }
    
}


function permitirAcceso(persona) {
    if (!esmayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
    
}

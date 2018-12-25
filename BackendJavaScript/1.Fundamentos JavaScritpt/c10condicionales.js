// Clase #10 Condicionales

var Emanuel = {
    nombre: 'Emanuel',
    apellido: 'Garizabalo',
    edad: 0,
    ingeniero: true,
    cocinero: false,
    dentista: false,
    futbolista: true,
}

function imprimirProfesion(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.dentista) {
        console.log('Dentista')
    }
    if (persona.futbolista) {
        console.log('futbolista')
    }
    
}

imprimirProfesion(Emanuel)


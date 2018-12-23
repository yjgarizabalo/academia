// clase #6 Objetos

var Wendy = {
    nombre: 'wendy',
    apellido: 'Escorcia',
    edad: '26',
}
var emanuel = {
    nombre: 'emanuel',
    apellido: 'escorcia',
    edad: '0.8',
}

function imprimirNombre({nombre}) {
    console.log(nombre.toUpperCase())
}


imprimirNombre(Wendy)
imprimirNombre(emanuel)
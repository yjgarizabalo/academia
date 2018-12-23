// clase 2 strings


var  edad = 26

edad  -= 1

var peso = 75

var persona = edad + peso

var temperatura = 24.5

var tempambiente =  20.1

var temperaturaciudadbarranquilla = temperatura + tempambiente


// varibles : strings

var nombre = 'Emanuel' , apellido = 'Garizabalo'
var nombreEnMayuscula = nombre.toUpperCase()
var apellidoEnMinuscula =apellido.toLocaleLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre + ' ' + apellido

var nombreCompleto = `${nombre} ${apellido}`

var min = nombre.charAt(1) + nombre.substr(2)

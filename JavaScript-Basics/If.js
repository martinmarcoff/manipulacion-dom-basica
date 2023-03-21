//condicionales: reglas para convalidar si algo es verdadero o falso

//if: si la condición es vedadera, hacé 
//else: si la condición es falsa, hacé



//si la condición es verdadera, console.log "Hola"
if (true) {
    console.log("Hola");
} else {
    console.log("Chau");
}

//si la condición es falsa, console.log "chau"
if (false) {
    console.log("Hola");
} else {
    console.log("Chau");
}

//if: es falsa, else if: es vedadera
// si if no se cumple, prueba con else if, y si no se cumple pasa a else.

var edad = 19

if (edad===18) {
    console.log("puedes votar");
} else if (edad>18) {
    console.log("puedes votar");
} else {
    console.log("no puedes votar");
}


//ejemplo de cómo usar el if else con operador ternario

//fórmula: condition ? true : false;

//ejemplo donde aplica if
var numero = 1

var resultado = numero === 1 ? "si soy un 1" : "no, no soy un 1"

console.log(resultado) //retorna "si, soy un 1"

//ejemplo donde aplica else
var numero = 2

var resultado = numero === 1 ? "si soy un 1" : "no, no soy un 1"

console.log(resultado) //retorna "no, no soy un 1"


//ejercicio para la consola

var computadora = "computadora"
var celular = "celular"
var cable = "cable"
var cualquiera = "cualquiera"

function solution(article) {
    if (article === "computadora") {return "Con mi computadora puedo programar usando Javascript" }
    else if (article === "celular") {return "En mi celular puedo aprender usando la app de Platzi"}
    else if (article ==="cable") {return "¡Hay un cable en mi bota!"}
    else {return "artículo no encontrado"}
}

solution (computadora)


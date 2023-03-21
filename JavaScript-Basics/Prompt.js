//Prompt: da un aviso a los usuarios y les permite 
//escribir algo

//ejemplo: prompt se sigue ejecutando HASTA QUE
// responden correctamente

let respuesta
//MIENTRAS respuesta no sea 4,
// almacená en "pregunta" la respuesta del prompt
// igualá respuesta con pregunta
while (respuesta != 4) {
    let pregunta = prompt('¿cuánto es 2 + 2?')
    respuesta = pregunta
}


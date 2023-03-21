//addEventListener: escuchador de eventos.

const h1 = document.querySelector("h1") 
const input = document.querySelector("#calculo")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#calcular")
const pResult = document.querySelector("#parr")
const form = document.querySelector("#form")

//const que almacena el html + addEventListener + evento + código que llamamos (función a ejecutar)
form.addEventListener("submit", sumarInputValues);

//al clickear el botton (html), invocamos la función.
//el boton es interpretado por forms como "submit", por ser el último
//la función imprime la concatenación de valores de ambos input
//la función sumarInputValues recibe como parámetro el evento
function sumarInputValues (e) {
    console.log({e}); //imprimimos el evento
    e.preventDefault()//genera que el buttom no recargue la página (para el forms es de tipo submit)
   let newInput = parseInt(input.value)
   let newInput2 = parseInt(input2.value)
   const result = (newInput + newInput2)
   pResult.innerHTML = `${"El resultado es"} ${result}`
console.log(result)}

//Otra manera de resolverlo:
//Dejamos que el eveno sea "click",
//no necesitamos prevent.default
//en HTML cambiamos el type del button a "click",
//para que no sea submit por defecto.


/*form.addEventListener("click", sumarInputValues);

function sumarInputValues (e) {
    console.log({e}); //imprimimos el evento
   let newInput = parseInt(input.value)
   let newInput2 = parseInt(input2.value)
   const result = (newInput + newInput2)
   pResult.innerHTML = `${"El resultado es"} ${result}`
console.log(result)}

*/




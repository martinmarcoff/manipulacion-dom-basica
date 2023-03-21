//OnClick y OnChange

const h1 = document.querySelector("h1") 
const input = document.querySelector("#calculo")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#calcular")
const pResult = document.querySelector("#parr")

//al clickear el botton (html), invocamos la función
//la función imprime la concatenación de valores de ambos input
function buttonOnClicked () {
    //al ser una suma, tenemos que pasar de string a number, si no queda en concatenación
   let newInput = parseInt(input.value)
   let newInput2 = parseInt(input2.value)
   const result = (newInput + newInput2)
   //pResult.innerHTML = "El resultado es" + " " + result
   pResult.innerHTML = `${"El resultado es"} ${result}`
console.log(result)}
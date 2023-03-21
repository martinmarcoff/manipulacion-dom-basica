//Arrays: estructura de datos. Valor que guarda más valores dentro.

var frutas = ["manzana", "banana", "cerezas", "Fresa"];

console.log(frutas) //devuelve todas las frutas
console.log (frutas[1])//devuelve banana

//Métodos

//1) Push: añade elementos al final del array
var masFrutas = frutas.push("uvas") //añade "uvas" al final del array frutas

//2) Pop: elimina el úlltimo elemento del array
var ultimaFruta = frutas.pop() //elimina el elemento "uvas"

//3) Unshift: añade elementos al principio del rey
var nuevaFruta = frutas.unshift("naranjas", "pomelos")//añade naranjas y pomelos al principio del array frutas

//4) shift: elimina el primer elemento del array
var borrarFruta = frutas.shift()//elimina el elemento naranjas del array

//5) indexOf: devuelve la posición del index de determinado elemento
var posición = frutas.indexOf("manzana") //devuelve la posición del index de manzana


/*2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo)
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).*/






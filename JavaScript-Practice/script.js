//Modificando HTML desde Javascript

//Guardamos en una variable determinado/s elemento/s.
//puede ser por etiqueta, clase, o id.

const h1 = document.querySelector("h1") //Seleccionamos a partir de la etiqueta
const p = document.querySelector("p")
const input = document.querySelector("input")
const parrafito = document.querySelector(".parrafito") //Seleccionamos a partir de la clase
const pid = document.querySelector("#pid") //Seleccionamos a partir del ID

//querySelectorAll selecciona TODOS los elementos con cierta etiqueta. Ejemplo: todos los párrafos
//getElementsByClassName selecciona elementos a partir de su clase
//getElementsById selecciona elemento a partir de su ID

console.log({
    h1, p, input, parrafito, pid
})

//innerHTML permite modificar el html que está dentro de la etiqueta seleccionada (h1)
h1.innerHTML="Vamos los millo <br> hay que poner un poco más de huevos"

//innerText permite modificar el texto que está dentro de la etiqueta seleccionada (h1)
p.innerText = "quiero ser campeón"

//con getAttribute accedemos al valor del atributo pantalla en la etiqueta h1
h1.getAttribute("pantalla")

//con setAttribute creamo un nuevo atributo: en este caso clase, con valor "rojo"
h1.setAttribute("class", "rojo")

//classList permite trabajar con las clases
h1.classList.add("violeta") //adhiere una nueva clase
h1.classList.remove("rojo") //remueve una vieja clase
h1.classList.toggle("verde") //adhiere una nueva clase (si no exite) o remueve una vieja clase (si existe)
h1.classList.contains("verde") //verifica si el elemento tiene cierta clase

console.log(h1.getAttribute("class"))
console.log(h1.classList.contains("verde"));

//modificamos el value de input
input.value = "River Plate"
input.placeholder = "El más grande de América"

//createElement permite crear un elemento, en este caso una imágen
const img = document.createElement("img") 
//a img le seteamos el atributo "src", con una imágen
img.setAttribute("src", "https://pbs.twimg.com/profile_images/2244538532/Janez_20Frontini_400x400.jpg")
console.log(img);

//al elemento con ID pid le agregamos la imágen
pid.append(img)

//si quisieramos sustituir el contenido del párrafo por la imágen:
//pid.innerHTML = "" //lo dejamos vacío
//pid.append(img)
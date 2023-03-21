// filter: va a validar si la condición es V o F
// y va a generar un nuevo array filtrado 

var articulos = [
    {nombre: "Bici",
    costo: 50,},
    {
        nombre: "television",
        costo: 100
    },
    {
        nombre: "libro",
        costo: "10"
    },
{
    nombre: "celular",
    costo: "1800"
},
{
    nombre: "laptop",
    costo: "4000"
},
{
    nombre: "teclado",
    costo: 500
},
{
    nombre: "audifonos",
    costo: 1500
}
  ]

  // nueva variable que almacena el filtro de artículos
  //dentro del filtro se ejecuta la función 
  // el parámetro de la función es cada elemento singular del array articulos
  //el filtro retorna los articulos cuyo costo sean menores o iguales a 500
  var articulosFiltrados = articulos.filter(
    function (articulo){
        return articulo.costo <= 500
    }
  )

  //otra manera de hacerlo
        var articulosFiltrados = articulos.filter(filtrandoArticulos)

        function filtrandoArticulos(articulo) {
            return articulo.costo <= 500
        }


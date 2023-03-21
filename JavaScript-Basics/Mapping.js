//mapping: mapea un array viejo y genera uno nuevo

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

  //la variable almacena la función map
  //la función map retorna un array nuevo que sólo incluye la propiedad nombre
  var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
  })

  //otra manera de hacerlo
  var nombreArticulos = articulos.map(mapearArticulos)

  function mapearArticulos(articulo) {
    return articulo.nombre
  }
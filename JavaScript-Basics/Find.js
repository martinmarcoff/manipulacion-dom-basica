//find: permite encontrar algo dentro de un array

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

  //nueva variable que almacena la función find
  //find buscará en el viejo array (articulos)
  // la función retorna un array nuevo con el objeto requerido
  // objeto requerido: aquel cuya propiedad nombre es igual a libro
  var encuentrArticulo = articulos.find(function(articulo){
    return articulo.nombre === "libro"
  })
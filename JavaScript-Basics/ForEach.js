//forEach: no genera un nuevo array, filtra y regresa cosas

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

// usamos la función forEach en el array articulos
// nos retorna el nombre de cada artículo, sin ser un array
  articulos.forEach(function(articulo){
    console.log(articulo.nombre);
  })
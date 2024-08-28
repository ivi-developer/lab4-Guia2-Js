///////////////Arreglos con Tipos de Datos Primitivos:
//Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.
const arrayNums = [6, 3, 7, 3, 9]
const arrayNumsAux = [2, 5, 8, 7, 9]
const sumArray = array => array.reduce((a, b) => a + b, 0)
console.log(sumArray(arrayNums))
//Promedio: Calcula el promedio de los números en un arreglo.
const promArray = array => sumArray(array) / array.length
console.log(promArray(arrayNums))
//Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de números.
const menor = array => array.reduce((a, b) => a < b ? a : b)
const menorConMath = array => Math.min(...array)
const mayor = array => array.reduce((a, b) => a > b ? a : b)
const mayorConMath = array => Math.max(...array)
console.log(menorConMath(arrayNums))
console.log(mayor(arrayNums))
//Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su índice, si existe
const buscarIndiceDeValor = (array, value) => array.indexOf(value)
console.log(buscarIndiceDeValor(arrayNums, 3))
//Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con números pares y otro con números impares
const isOdd = num => num % 2 == 0
const paresEImpares = function (array) {
    const pares = array.filter(num => isOdd(num) == true)
    const impares = array.filter(num => isOdd(num) == false)
    return {
        pares,
        impares
    }
}
const { pares, impares } = paresEImpares(arrayNums)
console.log(pares)
console.log(impares)
//. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.
const eliminarRepetidos = array => array = [...new Set(array)]//la forma mas sencilla es usando un spread para desparramar los elementos de un set hecho con el mismo array
console.log(eliminarRepetidos(arrayNums))
//Ordenar Arreglo: Ordena un arreglo de números de forma ascendente
const deMenorAMayor = array => array.sort((a, b) => a - b)
deMenorAMayor(arrayNums)
console.log(arrayNums)
//Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo
const eliminarTodos = (array, num) => array.filter(a => a != num)
console.log(eliminarTodos(arrayNums, 6))
//Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya duplicados.
const combinarArreglos = (arr1, arr2) => [... new Set([...arr1, ...arr2])]
console.log(JSON.stringify(combinarArreglos(arrayNums, arrayNumsAux)))
////////////////////Arreglos con Tipos de Datos Compuestos: 
//Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.
function Producto(nombre,cantidad){
    this.nombre=nombre
    this.cantidad=cantidad
}
const listaDeCompras={
    productos:[],
    agregarProducto: function(producto){this.productos.unshift(producto)}
}
listaDeCompras.agregarProducto(new Producto('manzana',5))
listaDeCompras.agregarProducto(new Producto('pera',7))
listaDeCompras.agregarProducto(new Producto('banana',6))
console.log(listaDeCompras.productos)
//Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y correos electrónicos
function crearAgenda(){
    return{
        contactos:[],
        agendarContacto: function(contacto){this.contactos.unshift(contacto)}
    }
}
function Contacto(nombre,numero,correo){
    this.nombre=nombre,
    this.numero=numero,
    this.correo=correo
}
const agenda=crearAgenda()
agenda.agendarContacto(new Contacto('marcos', '223223223','marcos@correo'))
agenda.agendarContacto(new Contacto('pablo glassi','2232223223','pablo@correo'))
console.log(agenda.contactos)
//Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la palabra en el párrafo
const parrafo='que onda wacho todo piola onda onda'
const cantPalabras=(array, palabra)=>array.split(" ").filter(a=>a===palabra).length
console.log(cantPalabras(parrafo,'onda'))
//Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.
const ordenarPorCampo=array=>array.sort((a,b)=>a.cantidad-b.cantidad)
ordenarPorCampo(listaDeCompras.productos)
console.log(listaDeCompras.productos)
//Registro de Ventas: Crea un registro de ventas con información sobre productos, cantidades y precios.
const registroVentas={
    productos:[],
    agregarProducto:function(producto){this.productos.push(producto)}
}
function OtroProdcuto(nombre, cantidad,precio){
    this.nombre=nombre,
    this.cantidad=cantidad,
    this.precio=precio
}
registroVentas.agregarProducto(new OtroProdcuto('mesa', 10,50000))
console.log(registroVentas.productos)
//Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular el total.
const carrito={
    productos:[],
    agregar:function(producto){this.productos.push(producto)},
    eliminar:function(nombre){this.productos=this.productos.filter(a=>a.nombre!==nombre)},
    total:()=>productos.reduce((a,b)=>a+b.precio,0)
}
carrito.agregar
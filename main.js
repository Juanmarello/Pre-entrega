
//Array de Productos

const productos = [
      {
      id: "1", nombre: "Cat Chow Adultos", descripcion: "Alimento balanceado para perros adultos x20kg", precio: 2500
      },
      {
        id: "2", nombre: "Purina Pro Plan", descripcion: "Alimento balanceado para perros adultos x22kg", precio: 3300
      },
      {
        id: "3", nombre: "Performance", descripcion: "Alimento balanceado para gatitos x12kg", precio: 4100
      },
      {
        id: "4", nombre: "Cat Chow Gatitos", descripcion: "Alimento balanceado para gatitos x12kg", precio: 3500
      },
      {
        id: "5", nombre: "Wiskas", descripcion: "Alimento balanceado para gatitos x9kg", precio: 3999
      }
     ];


//El carrito  es un Array vacío
     const carrito = [];  

//Detalle de los productos comprados 
     const detalle = [];

// Declaración de variables a utilizar
let subTotal;
let total;
let descuento;
let productAgregados;
let selectP;
let nombre;
let descripcion;
let precio;


//Función para agregar productos al carrito (Por el momento mediante Prompt)

function agregarAlCarrito(){
     
  let nroproductos = parseInt(prompt('ingrese cantidad de productos'));

for(i=0; i < nroproductos; i++){
       
  //Selección de productos mediante su id
  let idProducto = parseInt(prompt('ingrese id del producto'));
  let selectP = productos.find( e => e.id == idProducto );
      
  //Agregamos los productos al Array [carrito]

  carrito.push(selectP.precio);
  detalle.push(selectP);

//detalle de la compra


  console.log(carrito);
  console.log(detalle);


    }
    sumarCompra();
    generarDetalle();


}

function sumarCompra(){
  let subTotal = 0;
    
    for (let i of carrito) subTotal += i;
    console.log("El subtotal de tu compra es: " + subTotal);
    
    if(subTotal > 5000) {
      let descuento = (subTotal * 20) / 100; 
      let total = subTotal - descuento;
      console.log("tu descuento es de: " + descuento)
      console.log("El total de tu compra es de: " + total);
    }
    else{
      console.log("El total de tu compra es de: " + subTotal);
    }
}


//funcion para generar un detalle de la compra

function generarDetalle(){

    console.log("Detalle de la compra= ")

  for(i=0; i < detalle.length; i++){
  let nombre = detalle[i].nombre;
  let descripcion = detalle[i].descripcion;
  let precio = detalle[i].precio;
  
  console.log("nombre del producto: " + nombre + " / Descripcion: " + descripcion + " / Precio: $" + precio )
}
  
  
}

//llamado a la funcion
agregarAlCarrito();








function validarIsNro (nro){
    while (isNaN(nro) != false) {
        alert('el dato ingresado no es un numero vuelva a ingresar')
        nro = parseInt(prompt("ingrese un numero porfavor"))
    }

    return nro
}


function seleccionarMenu() {
    opc = parseInt(prompt("Seleccione una de las opciones del menu: \n 0-Lomito completo \n 1-Gohan \n 2-Gaseosa (500ml) \n 3-Pizza especial \n \n 4-FINALIZAR COMPRA"));
    while (opc < 0 || opc > 4) {
      opc = parseInt(prompt("Seleccione una de las opciones del menu: \n 0-Lomito completo \n 1-Gohan \n 2-Gaseosa (500ml) \n 3-Pizza especial \n \n 4-FINALIZAR COMPRA"));
      opc = validarIsNro(opc);
    }
    return opc;
  }

//const confirmacion = () => parseInt(prompt(`Esta seguro que desea agregar este articulo al carrito? \n Ingrese \n 1(si desea agregarlo)\n 2(volver al menu) `))

const confirmacion = function () {
    res = parseInt(prompt(`Esta seguro que desea agregar este articulo al carrito? \n Ingrese \n 1(si desea agregarlo)\n 2(volver al menu) `));
    while (res < 1 || res > 2) {
      res = parseInt(prompt(`Esta seguro que desea agregar este articulo al carrito? \n Ingrese \n 1(si desea agregarlo)\n 2(volver al menu) `));
      res = validarIsNro(res);
    }
    return res;
  };

class Producto {
    constructor  ( nombre, precio ) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Pedido {
    constructor  ( id, carrito ) {
        this.id = id
        this.carrito = carrito;
    }

    addProducto( producto ) { this.carrito.push( producto )}

    calcularTotal( ) {
        let total = 0;
        for ( const producto of this.carrito){
            total += producto.precio
        }
        return total
    }

    mostrarPedido( ) {
        console.log('Los productos agregados al carrito fueron:')
        //carritoOrd = this.carrito.precio.sort( (a,b) => { a - b }) //no me funciona tira error
        for ( const producto of this.carrito) {
            console.log(`nombre: ${producto.nombre}, precio: $${producto.precio}`)
        }
        let total = this.calcularTotal()
        console.log(`Total: $${total}`)
    }

}


class Menu {
    constructor  ( productos ) {
        this.productos = productos;
    }

    addProducto( producto ) { this.productos.push( producto )}

    mostrarMenu() {
        console.log('MENU')
        for ( const producto of this.productos ) {
            console.log(`-${producto.nombre}     $${producto.precio}`)
        }
    }

}
//creando los productos que estan a la venta sobre el objeto Producto
const lomito = new Producto("lomito", 600)
const gohan = new Producto("gohan", 525)
const gaseosa = new Producto("gaseosa", 100)
const pizza = new Producto("pizza", 300)



//inicio el objeto menu y agrego todos los productos que vende el local 
const menu = new Menu([ ])
menu.addProducto(lomito)
menu.addProducto(gohan)
menu.addProducto(gaseosa)
menu.addProducto(pizza)


//inicio un pedido
let idPedido = parseInt(prompt("ingrese el numero de pedido"))
idPedido = validarIsNro(idPedido)

const pedido = new Pedido(idPedido, [ ])

//ejecucion del programa principal
let opc = -1;
menu.mostrarMenu();

function main() {
    
  while (opc != 4) {
    
    opc = seleccionarMenu();
    if (opc != 4) {
      res = confirmacion();
      if (res == 1) {
        pedido.addProducto(menu.productos[opc]); 
      }
    } 
  }


  if (pedido.carrito.length != 0) {
    pedido.mostrarPedido();

    //DESARROLLO DE LOCAL STORAGE
    if (localStorage.getItem("pedidos") != null) {
    
      //obtengo el array de pedidos del local storage
      
      let almacenados = JSON.parse(localStorage.getItem("pedidos"))
      
      //itero el array de pedidos y creo a cada objeto de tipo pedido para poder acceder a ellos
      let pedidos = [ ]
      for (const pedido of almacenados) {
        pedidos.push(new Pedido(pedido.id, pedido.carrito))  
      }
      console.log(pedidos)
  
      //agrego al array el objeto pedido de esta sesion
      pedidos.push(pedido)
  
      //guardo en el local el array con un pedido nuevo
      pedidosJson = JSON.stringify(pedidos)
      localStorage.setItem(`pedidos`, pedidosJson)
  
      
      resHis = parseInt(prompt('quiere ver su historial de pedidos? \n Ingrese \n 1(si desea verlo)\n 2(cancelar)'))
      if (resHis == 1) {
        console.log("\n HISTORIAL DE PEDIDOS:")
        for (const pedido of pedidos) {
  
            console.log(`\n pedido numero: ${pedido.id} \n`)
  
            pedido.mostrarPedido(pedido)
        }
      }
     
  
    }else {
        let pedidos = [ ]
        pedidos.push(pedido)
  
        pedidosJson = JSON.stringify(pedidos)
  
        localStorage.setItem(`pedidos`, pedidosJson)
  
        
    }    
    
  } else {
    console.log("No se selecciono ningun producto");
  }

   


}





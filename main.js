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
        carritoOrd = this.carrito.precio.sort( (a,b) => { a - b }) //no me funciona tira error
        for ( const producto of this.carritoOrd) {
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
const pedido = new Pedido(1, [ ])


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
  } else {
    console.log("No se selecciono ningun producto");
  }
}

main()
/*
console.log(menu.productos[0])
pedido.addProducto(menu.productos[0])
pedido.addProducto(menu.productos[2])
pedido.mostrarPedido()
*/
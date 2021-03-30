let productoLocal = JSON.parse(localStorage.getItem('productoSeleccionado'))


class Producto {
    constructor (objeto) {
        this.id = objeto.id;
        this.categoria = objeto.categoria;
        this.nombre = objeto.nombre;
        this.precio = parseInt(objeto.precio);
        this.descripcion = objeto.descripcion;
        this.imagen = objeto.imagen;
    }

    
}

class DetallePedido {
    constructor (producto, cantidad, subtotal) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
    }

    aumentarSubtotal( ) {
        this.subtotal += producto.precio
    }
    aumentarSubtotalSabido( nro ) {
        this.subtotal += nro
    }
    disminuirSubtotal( ) {
        if (this.subtotal > producto.precio){
            this.subtotal -= producto.precio
        }
    }

    aumentarCantidad() {
        this.cantidad += 1
    }
    aumentarCantidadSabida(nro) {
        this.cantidad += nro
    }

    disminuirCantidad() {
        if (this.cantidad > 1) {
            this.cantidad -= 1
        }
    }
    
}

const producto = new Producto(productoLocal)
const detallePedido = new DetallePedido(producto, 1, producto.precio)

const titulo = document.getElementById("encabezado__title")
const imagen = document.getElementById("detalleImg")
const descripcion = document.getElementById("detalleDescripcion")
const precio = document.getElementById("detallePrecio")

const menos = document.getElementById("menos")
const mas = document.getElementById("mas")
const cantidad = document.getElementById("detalleCantidad")

const agregar = document.getElementById("detalleAgregar")

//le pongo el valor correspondiente a cada elemento del html
titulo.textContent = producto.nombre
imagen.innerHTML = `<img src= ${producto.imagen} alt=${producto.nombre}>`
descripcion.textContent = producto.descripcion
precio.textContent = `$ ${producto.precio}`
cantidad.textContent = 1

//aumentar y disminuir precio y cantidad
menos.addEventListener("click", () => {
    detallePedido.disminuirSubtotal()
    precio.textContent = `$ ${detallePedido.subtotal}`

    detallePedido.disminuirCantidad()
    cantidad.textContent = detallePedido.cantidad
})

mas.addEventListener("click", ()=>{
    detallePedido.aumentarSubtotal()
    precio.textContent = `$ ${detallePedido.subtotal}`

    detallePedido.aumentarCantidad()
    cantidad.textContent = detallePedido.cantidad
})


agregar.addEventListener("click", () => {
    if (localStorage.getItem("carrito") != null) {
        
        //obtengo el array de carrito del local storage
        
        let almacenados = JSON.parse(localStorage.getItem("carrito"))
        
        //itero el array de carrito y creo a cada objeto de tipo detalle para poder acceder a ellos
        let carrito = [ ]
        let ban = false
        for (const detalle of almacenados) {

          //verifico si no hay ya un producto igual agregado
          if ( detalle.producto.id == detallePedido.producto.id) {
              detalleigual =  new DetallePedido(detalle.producto, detalle.cantidad, detalle.subtotal)
              detalleigual.aumentarCantidadSabida(detallePedido.cantidad)
              detalleigual.aumentarSubtotalSabido(detallePedido.subtotal)
            
              carrito.push(detalleigual) 
              ban = true
          }else {
              //si el el detalle no es agual se crea un objeto de tipo detalle directamente
              carrito.push(new DetallePedido(detalle.producto, detalle.cantidad, detalle.subtotal))  
            }
        }
        //agrego al array el objeto detalle de esta sesion si no se encontro ninguno igual
        if (ban == false) {
            carrito.push(detallePedido)
        }
       
                
        //guardo en el local el array con un detalle nuevo
        carritoJson = JSON.stringify(carrito)
        localStorage.setItem(`carrito`, carritoJson)
        location.href="../html/categorias.html"
        
            
        } else {
            let carrito = [ ]
            carrito.push(detallePedido)
        
            carritoJson = JSON.stringify(carrito)
        
            localStorage.setItem(`carrito`, carritoJson)
            location.href="../html/categorias.html"
        
      }    
})

  


     
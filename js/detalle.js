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
        for (const detalle of almacenados) {
          carrito.push(new DetallePedido(detalle.producto, detalle.cantidad, detalle.subtotal))  
        }

        //agrego al array el objeto pedido de esta sesion
        carrito.push(detallePedido)
                
        //guardo en el local el array con un pedido nuevo
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

  

/*


           //verifico si hay un producto igual a este en al carrito para agregarle los datos del mismo al detalle
            if ( detalle.producto.id == detallePedido.producto.id) {
                detalle.aumentarCantidadSabida(detalle.producto.cantidad)
                detalle.aumentarSubtotalSabido(detalle.producto.subtotal)
                carritoJson = JSON.stringify(carrito)
                localStorage.setItem(`carrito`, carritoJson)
                location.href="../html/categorias.html"

            }else {
                
*/
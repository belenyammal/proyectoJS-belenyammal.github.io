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
    disminuirSubtotal( ) {
        if (this.subtotal > producto.precio){
            this.subtotal -= producto.precio
        }
    }

    aumentarCantidad() {
        this.cantidad += 1
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


const productos = [
  { id: 1, categoria: "pizzas", nombre: "muzzarela", precio: 500, descripcion: "sin descipcion", imagen: "../imagenes/productos/pizza.jpg"},
  { id: 2, categoria: "pizzas", nombre: "especial", precio: 300, descripcion: "sin descipcion", imagen: "../imagenes/productos/pizza.jpg"},
  { id: 3, categoria: "pizzas", nombre: "cuatro quesos", precio: 400, descripcion: "sin descipcion", imagen: "../imagenes/productos/pizza.jpg"},
  { id: 4, categoria: "pizzas", nombre: "napolitana", precio: 350, descripcion: "sin descipcion", imagen: "../imagenes/productos/pizza.jpg"},

  { id: 5, categoria: "ensaladas", nombre: "cesar", precio: 400, descripcion: "sin descipcion", imagen: "../imagenes/categorias/gohan.png"},
  { id: 6, categoria: "ensaladas", nombre: "mixta", precio: 300, descripcion: "sin descipcion", imagen: "../imagenes/categorias/gohan.png"},
  { id: 7, categoria: "ensaladas", nombre: "rusa", precio: 400, descripcion: "sin descipcion", imagen: "../imagenes/categorias/gohan.png"},
  { id: 8, categoria: "ensaladas", nombre: "gohan", precio: 550, descripcion: "sin descipcion", imagen: "../imagenes/categorias/gohan.png"},

  { id: 9, categoria: "empanadas", nombre: "jamon y queso", precio: 65, descripcion: "sin descipcion", imagen: "../imagenes/productos/empanadas.jpg"},
  { id: 10, categoria: "empanadas", nombre: "criolla", precio: 65, descripcion: "sin descipcion", imagen: "../imagenes/productos/empanadas.jpg"},
  { id: 11, categoria: "empanadas", nombre: "arabe", precio: 70, descripcion: "sin descipcion", imagen: "../imagenes/productos/empanadas.jpg"},
  { id: 12, categoria: "empanadas", nombre: "matambre", precio: 90, descripcion: "sin descipcion", imagen: "../imagenes/productos/empanadas.jpg"},
  { id: 13, categoria: "empanadas", nombre: "cebolla", precio: 90, descripcion: "sin descipcion", imagen: "../imagenes/productos/empanadas.jpg"},

  { id: 14, categoria: "bebidas", nombre: "coca cola 500 ml", precio: 100, descripcion: "sin descipcion", imagen: "../imagenes/productos/gaseosas.jpg"},
  { id: 15, categoria: "bebidas", nombre: "sprite 500 ml", precio: 100, descripcion: "sin descipcion", imagen: "../imagenes/productos/gaseosas.jpg"},
  { id: 16, categoria: "bebidas", nombre: "agua saborizada 500 ml", precio: 70, descripcion: "sin descipcion", imagen: "../imagenes/productos/gaseosas.jpg"},
  { id: 17, categoria: "bebidas", nombre: "cerveza andes 500 ml", precio: 120, descripcion: "sin descipcion", imagen: "../imagenes/productos/gaseosas.jpg"},
  { id: 18, categoria: "bebidas", nombre: "cerveza patagonia 500 ml", precio: 130, descripcion: "sin descipcion", imagen: "../imagenes/productos/gaseosas.jpg"},

  { id: 19, categoria: "promociones", nombre: "muzza x2 + coca x4 500 ml", precio: 1000, descripcion: "sin descipcion", imagen: "../imagenes/productos/promociones.jpg"},
  { id: 20, categoria: "promociones", nombre: "criolla o jyq x 12", precio: 700, descripcion: "sin descipcion", imagen: "../imagenes/productos/promociones.jpg"},
  { id: 21, categoria: "promociones", nombre: "andes 500 ml x6", precio: 600, descripcion: "sin descipcion", imagen: "../imagenes/productos/promociones.jpg"},
  { id: 22, categoria: "promociones", nombre: "gohan x2", precio: 990, descripcion: "sin descipcion", imagen: "../imagenes/productos/promociones.jpg"},
  { id: 23, categoria: "promociones", nombre: "empanadas arabes x12", precio: 750, descripcion: "sin descipcion", imagen: "../imagenes/productos/promociones.jpg"},

  { id: 24, categoria: "especiales", nombre: "lomito completo", precio: 600, descripcion: "sin descipcion", imagen: "../imagenes/productos/lomito.jpg"},
  { id: 25, categoria: "especiales", nombre: "papas con cheedar", precio: 300, descripcion: "sin descipcion", imagen: "../imagenes/productos/papas.png"},
]


  
let categoria =  localStorage.getItem('categoria')
let productosDiv = document.getElementById("productos")
let titulo = document.getElementById("encabezado__title")

titulo.textContent = categoria

let filtrado = productos.filter( producto => producto.categoria == categoria)


let contenido = ''
for ( const objeto of filtrado){ 

   contenido += 
   `<div class="producto" id=${objeto.id}>
        <div class="producto__img">
           <img src= ${objeto.imagen} alt= ${objeto.nombre}>
        </div>
        <div class="producto__text">
          <h2 class="producto__name"> ${objeto.nombre}</h2>
          <p class="producto__price">$  ${objeto.precio}</p>
         </div>
         <div class="producto__icon">
           <img src="../imagenes/producto__icon.svg" alt="">
         </div>
    </div>`

}

productosDiv.innerHTML = contenido

productosDiv.addEventListener("click", (e)=> {
    let idProduct 
    if ( e.target.parentNode.parentNode.id != "productos") {
        idProduct = e.target.parentNode.parentNode.id

        //busco el objeto con ese id asi lo guardo al local storage
        let buscado = productos.filter( producto => producto.id == idProduct)
        localStorage.setItem('productoSeleccionado', JSON.stringify(buscado[0]))
        location.href="../html/detalleProducto.html"
    }
    else {
        idProduct = e.target.parentNode.id
        let buscado = productos.filter( producto => producto.id == idProduct)
        localStorage.setItem('productoSeleccionado', JSON.stringify(buscado[0]))
        location.href="../html/detalleProducto.html"
    }
    

})


/*console.log(filtrado)


for ( const objeto of filtrado){ 

    let producto = document.createElement("div")

    producto.setAttribute('id', objeto.id)
    producto.addEventListener("click", (e) => {
        console.log(e)
    })

    producto.classList.add("producto")
    


    producto.innerHTML = `<div class="producto__img">
                            <img src= ${objeto.imagen} alt= ${objeto.nombre}>
                        </div>
                        <div class="producto__text">
                            <h2 class="producto__name"> ${objeto.nombre}</h2>
                            <p class="producto__price">$  ${objeto.precio}</p>
                         </div>
                         <div class="producto__icon">
                            <img src="../imagenes/producto__icon.svg" alt="">
                        </div>`

    fragment.appendChild(producto)
}


productosDiv.appendChild(fragment)
*/
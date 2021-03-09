
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
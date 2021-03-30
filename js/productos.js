
let categoria =  localStorage.getItem('categoria')
let productosDiv = document.getElementById("productos")
let titulo = document.getElementById("encabezado__title")

titulo.textContent = categoria


//simulacion de  obtener productos desde una api
fetch('../assets/json/productos.json')
        //if (res.ok == true) es lo mismo
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        //el res.ok del dom tiene un valor true o false
        .then(res => res.json()) //para transormar res en un objeto y descapsularlo
        .then(res => {
            let filtrado = res.filter( producto => producto.categoria == categoria)
            let contenido = ''
            for ( const objeto of filtrado) {
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
        })

//almacenamieto del producto elegido en el localstorage
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

//forma de obtener los datos de los productos de un array de objetos local
/*
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
*/


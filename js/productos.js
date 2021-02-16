const pizzas = [
    { nombre: "muzzarela", precio: 500, imagen: "../imagenes/categorias/gohan.png"},
    { nombre: "especial", precio: 300, imagen: "../imagenes/categorias/gohan.png"},
    { nombre: "cuatro quesos", precio: 400, imagen: "../imagenes/categorias/gohan.png"},
    { nombre: "napolitana", precio: 350, imagen: "../imagenes/categorias/gohan.png"},
  ]

const ensaladas = [
    { nombre: "cesar", precio: 500, imagen: "../imagenes/categorias/gohan.png"},
    { nombre: "mixta", precio: 300, imagen: "../imagenes/categorias/gohan.png"},
    { nombre: "rusa", precio: 400, imagen: "../imagenes/categorias/gohan.png"},
    { nombre: "variada", precio: 350, imagen: "../imagenes/categorias/gohan.png"},
  ]
  
  

let categoria =  localStorage.getItem('categoria')
let productos = document.getElementById("productos")
let titulo = document.getElementById("encabezado__title")

titulo.textContent = categoria

const fragment = document.createDocumentFragment()

//quiero hacer de alguna forma q dependiendo cual sea la categoria recorra ese array
//pero no se como, pense en hacer un if por categoria y q dependiendo el nombre de la categoria recorra cada array pero me parece q se necesita escribir mucho codigo inecesariamente
for ( const objeto of pizzas){ 

    let producto = document.createElement("div")
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


productos.appendChild(fragment)



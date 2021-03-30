let productosDiv = document.getElementById("productos")
let totalPrecio = document.getElementById("total")
let boton = document.getElementById("pedidoConfirmar")
let almacenados

//?no se me cumple la condicion despues del ||, para q se aparezca q no hay productos seleccionados no solamente cuando 
//entra por primera vez a la web si no cuando haya seleccionado un producto y los elimine quedando el carrito vacio otra vez,
//cosa q no pasa, no aparece el cartel
if (localStorage.getItem("carrito") == null || (localStorage.getItem("carrito") ==  [])) {
  productosDiv.innerHTML = `<div class="boxPadre vacio" id="vacio"><p>No hay productos en el carrito</p></div>`

  }else {
      //obtengo el array de carrito del local storage
    
    almacenados = JSON.parse(localStorage.getItem("carrito"))
  }    

class Pedido {

  constructor (detalles) {
    this.nro = 1;
    this.fecha = "04-04-2001";
    this.hora = "21:02";
    this.detalles = detalles;
  }

  total () {
    let total = 0;
    for ( const detalle of this.detalles ) {
      total += detalle.subtotal
    }

    return total
  }

}


let contenido = ''
for ( const detalle of almacenados){ 

   contenido += 
   `<div class="producto" id=${detalle.producto.id}>
        <div class="producto__img">
           <img src= ${detalle.producto.imagen} alt= ${detalle.producto.nombre}>
        </div>
        <div class="producto__text">
          <h2 class="producto__name"> ${detalle.producto.nombre}</h2>
          <p class="producto__price">x${detalle.cantidad}   $  ${detalle.subtotal}</p>
         </div>
         <div class="producto__icon eliminar" id="productoEliminar">
           <img class="eliminar" id="eliminarIcon" src="../imagenes/eliminar.svg" alt="">
         </div>
    </div>`

}
$("#productos").prepend(contenido);
//productosDiv.innerHTML = contenido

//inicializo un pedido 
const pedido = new Pedido(almacenados)
let total = pedido.total()

totalPrecio.innerHTML = `$ ${total}`

//eliminacion de un detalle pedido del local storage
function eliminar(array, id) {
    for (const detalle of array) {
        if ( detalle.producto.id == id ) {
          posicion = array.indexOf(detalle)
          array.splice(posicion, 1)
          localStorage.setItem( "carrito", JSON.stringify(array))
        }
 
    }
}

//evento al click del tachito

let idProd
productosDiv.addEventListener("click", (e)=> {
    if (e.target.id == "productoEliminar") {
      idProd = e.target.parentNode.id
      eliminar(almacenados, idProd)

      //acuatualizo el total
      let total = pedido.total()
      totalPrecio.innerHTML = `$ ${total}`
    }
    else if (e.target.id == "eliminarIcon") {
      idProd = e.target.parentNode.parentNode.id
      eliminar(almacenados, idProd)
      productosDiv.removeChild(e.target.parentNode.parentNode)

      //acuatualizo el total
      let total = pedido.total()
      totalPrecio.innerHTML = `$ ${total}`

    }


})
//animacion sobre el nachito
//no me sale q la animacion tambien funcione cuando toque el tachito
$(".productos").click(function (e) { 
  if (e.target.id == "productoEliminar") {
      let idProd1 = e.target.parentNode.id
      $(`#${idProd1}`).slideUp();
  }

});


//practica de obtener datos de una api
boton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        //if (res.ok == true) es lo mismo
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        //el res.ok del dom tiene un valor true o false
        .then(res => res.json()) //para transormar res en un objeto y descapsularlo
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for(const userInfo of res){
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })

})
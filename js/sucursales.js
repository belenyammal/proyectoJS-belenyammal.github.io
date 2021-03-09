
const cuerpo = document.getElementById("cuerpo")
let contenido = ''

for ( const sucursal of sucursales) {

    contenido += 
    `<div class="card" id=${sucursal.id}>
        <div class="card__img__box" id="cardImgBox"><img class="card__img" src=${sucursal.imagen} alt=""></div>
        <div class="card__contenido">
            <div class="card__datos">
                <h3 class="card__title" id="cardTitle">${sucursal.nombre}</h3>
                <p class="card__direccion" id="cardDireccion"> ${sucursal.direccion} </p>
            </div>
            <button class="card__boton">Pedir aquí</button>
         </div>
    </div>`
}

cuerpo.innerHTML = contenido

cuerpo.addEventListener("click", (e) => {

    if ( e.target.id != "cuerpo") {
        location.href="../html/categorias.html"
    }

    
})


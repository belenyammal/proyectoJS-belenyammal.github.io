
const cuerpo = document.getElementById("cuerpo")
let contenido = ''

//simulo que obtengo de una api los datos de la sucursal
fetch('../assets/json/sucursales.json')
        //if (res.ok == true) es lo mismo
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        //el res.ok del dom tiene un valor true o false
        .then(res => res.json()) //para transormar res en un objeto y descapsularlo
        .then(res => {
            for ( const sucursal of res) {
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
        })

//practica de usar una animacion con jquery
$("#cuerpo").click(function (e) { 
    
    if ( e.target.id != "cuerpo") {
        $("#cuerpo").slideUp("slow", () => {
            location.href="../html/categorias.html"
        });
        
    }
  });


//si obtengo los datos de la sucursal de un objeto local
/*
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


$("#cuerpo").append(contenido);

*/


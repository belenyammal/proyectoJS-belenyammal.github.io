

categorias.addEventListener("click", (e) => {
    console.log(e)
    if ( e.target.id != "") {

        localStorage.setItem('categoria', e.target.id)
    }
    else {
        localStorage.setItem('categoria', e.target.parentNode.id)
    }
    
    location.href="../html/productos.html"
})




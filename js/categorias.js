

categorias.addEventListener("click", (e) => {
    localStorage.setItem('categoria', e.target.id)
    location.href="../html/productos.html"
}
)




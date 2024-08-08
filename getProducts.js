const getProducts = () => {
    fetch('/productos.json')
    .then((res) => res.json())
    .then((productos) => {
        pintarProductos(productos);
    })
}
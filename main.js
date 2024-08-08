const contenidoTienda = document.getElementById('contenidoTienda');
const contadorCarrito = document.getElementById('contador-carrito');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const pintarProductos = (productos) => {
    productos.forEach((prod) => {
        let contenido = document.createElement('div');
        contenido.className = 'content';
        contenido.innerHTML = `
        <img class="imagenes" src='${prod.img}'>
        <h2>${prod.nombre}</h2>
        <p>$ ${prod.precio}</p>
        `
    
        contenidoTienda.append(contenido);
    
        let boton = document.createElement('button');
        boton.className = 'button';
        boton.innerText = 'Agregar al carrito 🛒';
    
        contenido.append(boton);
    
        boton.addEventListener('click', () => {
            Toastify({
                text: "Producto agregado correctamente",
                duration: 3000,
                gravity: 'bottom'
                }).showToast();
        })
    
        boton.addEventListener('click', () => {
            carrito.push({
                id: prod.id,
                img: prod.img,
                nombre: prod.nombre,
                precio: prod.precio
            });
            console.log(carrito);
            guardarStorage();
        })
    })

}

getProducts();


const mostrarCarrito = document.getElementById('mostrarCarrito');
const carritoCompras = document.getElementById('carritoCompras');

const verCarrito = () => {
        mostrarCarrito.innerHTML = '';
        const titulo = document.createElement('h1')
        titulo.className = 'tituloCarrito'
        titulo.innerText = 'CARRITO:'
        mostrarCarrito.append(titulo);
    
        carrito.forEach((prod) => {
            let content = document.createElement('div');
            content.className = 'contentCarrito'
            content.innerHTML = `
                <img class="imagenesCarrito" src='${prod.img}'>
                <h2>${prod.nombre}</h2>
                <p>$ ${prod.precio}</p>
                <button> 🗑️ </button>
            `
            mostrarCarrito.append(content);

            
            
            let eliminar = content.querySelector('button');
            
            eliminar.addEventListener('click', ()=> {
                eliminarProducto(prod.id);
            })
            
        });
        
        const total = carrito.reduce((acc, el) => acc + el.precio, 0);
        
        const totalCompra = document.createElement('div');
        totalCompra.className = 'totalCompra'
        totalCompra.innerHTML =` Precio total: $ ${total} `
        mostrarCarrito.append(totalCompra);

        let finalizarCompra = document.createElement('button')
        finalizarCompra.className = 'button';
        finalizarCompra.innerHTML = 'COMPRAR';
        mostrarCarrito.append(finalizarCompra);

        finalizarCompra.addEventListener('click', () => {
            carrito = [];
            verCarrito();
            guardarStorage();
            Swal.fire({
                title: "Su compra se ha realizado con exito!",
                text: "Muchas gracias por confiar en nosotros.",
                icon: "success"
                });
        })
    }
    
    carritoCompras.addEventListener('click', verCarrito);
    

const eliminarProducto = (prodId) => {
    const idCarrito = carrito.find((prod) => prod.id === prodId);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== idCarrito;
    })
    console.log(carrito);
    verCarrito();
    guardarStorage();
}

const guardarStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
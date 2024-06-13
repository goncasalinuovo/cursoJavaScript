// pre entrega 1

let producto = '';
let precio = 0;
let cantidad = 0;
let totalPrecio = 0;
let totalCantidad = 0;
let seguirComprando = false;


function bienvenida(){
    let nombre = prompt('ingrese su nombre:');
    alert('Bienvenido a nuestra web ' + nombre);
}

function comprarCafetera(){
    producto = prompt('que tipo de cafetera desea comprar: \n Prensa francesa \n Mocka italiana \n Aeropress ' ).toLowerCase();
    
    cantidad = parseInt(prompt('Que cantidad desea comprar?'));
    while(isNaN(cantidad) || cantidad <=0){
        alert('por favor ingresar un numero valido');
        cantidad = parseInt(prompt('Que cantidad desea comprar?'));
    }
    
    switch (producto) {
        case 'prensa francesa':
            precio = 80000;
            alert('Usted eligio ' +cantidad+ ' ud. de Prensa francesa');
            break;
        case 'mocka italiana':
            precio = 75500;
            alert('Usted eligio ' +cantidad+ ' ud. de Mocka italiana');
            break;
        case 'aeropress':
            precio = 43000;
            alert('Usted eligio ' +cantidad+  ' ud. de Aeropress');
            break;
        default:
            alert('Ese producto no esta disponible!');
            comprarCafetera();
    }
}

// empieza interaccion con el usuario
bienvenida();

do {
    comprarCafetera();
    
    totalPrecio += precio * cantidad;
    totalCantidad += cantidad;
    
    console.log(producto);
    console.log(precio);
    
    seguirComprando = confirm('Desea seguir comprando?');
    
} while (seguirComprando);

alert('El total de su compra es de ' +totalCantidad+ ' productos, que suman $' +totalPrecio);
alert('Muchas gracias por su compra!');

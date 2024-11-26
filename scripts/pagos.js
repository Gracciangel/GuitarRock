
const divProd = document.getElementById('productoContainer') ; 
const producto = JSON.parse(localStorage.getItem('producto'))
console.log(producto)
const form = document.getElementById('form').addEventListener('click', (e)=> e.preventDefault()) ; 

const prodCompra = document.createElement('div')

prodCompra.innerHTML += `<div class='divPagos' >
    <h2>${producto.nombre}</h2>
    <img src="${producto.images[0]}" class='imagen' />
    <p>$${producto.precio}</p>
</div>`

divProd.appendChild(prodCompra)

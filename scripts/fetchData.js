export const FetchData = async () => {
    const res = await fetch('../data/data.json');
    const productos = await res.json();
    return productos;
  };
  
  const productos = await FetchData();
  console.log(productos);
  
  // DOM
  const containerProductos = document.getElementById('productos');
  const productoLista = document.getElementById('listaUL');
  const containerImages = document.getElementById('containerImages');
  const img = document.getElementById('img');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  
  // Renderizar lista de productos
  productos.forEach((producto) => {
    const li = document.createElement('li');
    li.textContent = producto.nombre;
    li.dataset.nombre = producto.nombre; 
    li.classList.add('prodList');
    productoLista.appendChild(li);
  });
  

  productoLista.addEventListener('click', (e) => {
    const clickedProducto = e.target.dataset.nombre; 
    if (clickedProducto) {
      ver(clickedProducto);
    }
  });
  

  // Función para mostrar imágenes 
  const ver = (prodName) => {
    const category = localStorage.getItem('value') ; 
    const producto = productos.find((p) => p.nombre === prodName); 
    
    if (producto) {
      if (producto.images && producto.images.length > 0) {
        let currentIndex = 0;
        img.src = producto.images[currentIndex];
        
        // Manejo de navegación (prev y next)
        btnPrev.onclick = () => {
          currentIndex = (currentIndex - 1 + producto.images.length) % producto.images.length;
          img.src = producto.images[currentIndex];
          console.log('boton prev')
        };
  
        btnNext.onclick = () => {
          currentIndex = (currentIndex + 1) % producto.images.length;
          img.src = producto.images[currentIndex];
        };
      } else {
        alert('No hay imágenes para este producto');
      }
    }
  };
  currentIndex = (currentIndex - 1 + producto.images.length) % producto.images.length;
  img.src = producto.images[currentIndex];
 function prev () {
    console.log('boton prev')
  };

  function next () {
    currentIndex = (currentIndex + 1) % producto.images.length;
    img.src = producto.images[currentIndex];
  };
  //optciones 


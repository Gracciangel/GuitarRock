
export const FetchData = async ()=> {
const res = await fetch('../data/data.json') ; 
const productos = await res.json()  ;

return productos  ;
} ; 

const productos = await FetchData() ;
console.log(productos) ;

//dom 
const containerProductos = document.getElementById('productos') ;
const productoLista = document.getElementById('listaUL') ; 
    for(let i = 0 ; i< productos.length ; i++) {

        productoLista.innerHTML+=`<li 
        id='prodList'
        >${productos[i].nombre}</li>`
    }
const containerImages = document.getElementById('containerImages'); 

const img = document.getElementById('img') ;
const prodList = document.getElementById('prodList') ;
const btnPrev = document.getElementById('btnPrev') ; 
const btnNext = document.getElementById('btnNext') ;

prodList.addEventListener('click', () => {
    ver(prodList)
})

const ver = (prod) => {

    productos.find((p) => {
        if(p.nombre = prod){
            console.log(p.nombre)
            p.images.length > 0 ? 
            img.src = p.images[0] : 
            alert('no hay imagenes para este producto')
        }
    })
}

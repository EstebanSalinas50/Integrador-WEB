var imagenes= ['imagenes/comidas Argentinas/asado1.jpg',
               'imagenes/comidas Argentinas/asado2.jpg',
               'imagenes/comidas Argentinas/asado 3.jpg'];
 var cont=0;

function carrusel(contenedor){

    contenedor.addEventListener('click',e => {
        let atras=contenedor.querySelector('.atras'),
         adelante=contenedor.querySelector('.adelante'),
         img=contenedor.querySelector('#imagen'),
         target=e.target;

         if (target === atras) {
            if (cont > 0) {
                cont--; 
            } else {
                cont = imagenes.length - 1;
            }
            img.src = imagenes[cont];
        } else if (target === adelante) {
            if (cont < imagenes.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
            img.src = imagenes[cont];
        }
    }
    )


}
document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor=document.querySelector('.contenedor');
    carrusel(contenedor);
}
);
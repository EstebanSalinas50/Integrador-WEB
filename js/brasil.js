var imagenes = [
    'imagenes/comidas Brasileras/quindim.jpg',
    'imagenes/comidas Brasileras/quindim1.png',
    'imagenes/comidas Brasileras/quindim2.png',
    'imagenes/comidas Brasileras/quindim3.png',
    'imagenes/comidas Brasileras/quindim4.png'
];                      
let cont=0;
function carrusel(contenedor){

    contenedor.addEventListener('click',e => {
        let atras=contenedor.querySelector('.atras img'),
         adelante=contenedor.querySelector('.siguiente img'),
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
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor=document.querySelector('.contenedor');
    carrusel(contenedor);
}
);

var imagenesBrigadeiro = [
    'imagenes/comidas Brasileras/bragadeiro.png',
    'imagenes/comidas Brasileras/bragadeiro.png',
    'imagenes/comidas Brasileras/bragadeiro.png',
    'imagenes/comidas Brasileras/bragadeiro.png',
    'imagenes/comidas Brasileras/bragadeiro.png'
];                      
let contador=0;
function carruselBrigadeiro(brigadeiroBrasil) {
    brigadeiroBrasil.addEventListener('click', e => {
        let atras = brigadeiroBrasil.querySelector('.atras img'),
            adelante = brigadeiroBrasil.querySelector('.siguiente img'),
            img = brigadeiroBrasil.querySelector('#imagen'),
            target = e.target;

        if (target === atras) {
            if (contador > 0) {
                contador--;
            } else {
                contador = imagenesBrigadeiro.length - 1;
            }
            img.src = imagenesBrigadeiro[contador];
        } else if (target === adelante) {
            if (contador < imagenesBrigadeiro.length - 1) {
                contador++;
            } else {
                contador = 0;
            }
            img.src = imagenesBrigadeiro[contador];
        }
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    let contenedorBrigadeiro=document.querySelector('.brigadeiroBrasil');
    carruselBrigadeiro(contenedorBrigadeiro);
});
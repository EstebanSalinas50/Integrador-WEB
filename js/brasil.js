var imagenes = [
    'imagenes/comidas Brasileras/quindim.jpg',
    'imagenes/comidas Brasileras/quindim1.png',
    'imagenes/comidas Brasileras/quindim2.png',
    'imagenes/comidas Brasileras/quindim3.png',
    'imagenes/comidas Brasileras/quindim4.png'
];                      
let cont=0;
function carrusel(contenedor) {

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
/*----------------------------------------------------------------------------------------------------------------------*/
var imagenesBrigadeiro = [
    'imagenes/comidas Brasileras/brigadeiro1.png',
    'imagenes/comidas Brasileras/brigadeiro2.png',
    'imagenes/comidas Brasileras/brigadeiro3.png',
    'imagenes/comidas Brasileras/brigadeiro4.png',
    'imagenes/comidas Brasileras/brigadeiro5.png'
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

/*----------------------------------------------------------------------------------------------------------------------*/

var imagenesMo = [
    'imagenes/comidas Brasileras/mo1.png',
    'imagenes/comidas Brasileras/mo2.png',
    'imagenes/comidas Brasileras/mo3.png',
    'imagenes/comidas Brasileras/mo4.png',
    'imagenes/comidas Brasileras/mo5.png'
];

function carruselMo(contenedor3) {

    contenedor3.addEventListener('click',e => {
        let atras=contenedor3.querySelector('.atras img'),
         adelante=contenedor3.querySelector('.siguiente img'),
         img=contenedor3.querySelector('#imagen'),
         target=e.target;

         if (target === atras) {
            if (cont > 0) {
                cont--; 
            } else {
                cont = imagenesMo.length - 1;
            }
            img.src = imagenesMo[cont];
        } else if (target === adelante) {
            if (cont < imagenesMo.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
            img.src = imagenesMo[cont];
        }
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor3=document.querySelector('.comida3');
    carruselMo(contenedor3 );
});

/*----------------------------------------------------------------------------------------------------------------------------*/

var imagenesFe = [
    'imagenes/comidas Brasileras/fei1.png',
    'imagenes/comidas Brasileras/fei2.png',
    'imagenes/comidas Brasileras/fei3.png',
    'imagenes/comidas Brasileras/fei4.png',
    'imagenes/comidas Brasileras/fei5.png'
];

function carruselFe(contenedor4) {

    contenedor4.addEventListener('click',e => {
        let atras=contenedor4.querySelector('.atras img'),
         adelante=contenedor4.querySelector('.siguiente img'),
         img=contenedor4.querySelector('#imagen'),
         target=e.target;

         if (target === atras) {
            if (cont > 0) {
                cont--; 
            } else {
                cont = imagenesFe.length - 1;
            }
            img.src = imagenesFe[cont];
        } else if (target === adelante) {
            if (cont < imagenesFe.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
            img.src = imagenesFe[cont];
        }
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor4=document.querySelector('.comida4');
    carruselFe(contenedor4);
});

/*-------------------------------------------------------------------------------------------------------------------------------   */
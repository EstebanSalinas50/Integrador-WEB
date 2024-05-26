var imagenes1=['imagenes/comidas Peruanas/causa1.jpg',
              'imagenes/comidas Peruanas/causa2.jpg',
              'imagenes/comidas Peruanas/causa3.jpg',
              'imagenes/comidas Peruanas/causa4.jpg'];

 var cont=0;      
 
 
 function carrusel0(contenedor0) {

    contenedor0.addEventListener('click', e => {
        let atras = contenedor0.querySelector('.atras'),
            adelante = contenedor0.querySelector('.adelante'),
            img = contenedor0.querySelector('#imagen'),
            target = e.target;

        if (target === atras) {
            if (cont > 0) {
                cont--;
            } else {
                cont = imagenes1.length - 1;
            }
            img.src = imagenes1[cont];
        } else if (target === adelante) {
            if (cont < imagenes1.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
            img.src = imagenes1[cont];
        }
    }
    )
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor0 = document.querySelector('.contenedor0');  
    carrusel0(contenedor0);
}
);
//--------------------------------------------------------
var imagenes2=['imagenes/comidas Peruanas/anti1.jpg','imagenes/comidas Peruanas/anti2.jpg','imagenes/comidas Peruanas/anti3.jpg'];
var cont1=0;
function carrusel1(contenedor1) {

    contenedor1.addEventListener('click', e => {
        let atras = contenedor1.querySelector('.atras'),
            adelante = contenedor1.querySelector('.adelante'),
            img = contenedor1.querySelector('#imagen'),
            target = e.target;

        if (target === atras) {
            if (cont1 > 0) {
                cont1--;
            } else {
                cont1 = imagenes2.length - 1;
            }
            img.src = imagenes2[cont1];
        } else if (target === adelante) {
            if (cont1 < imagenes2.length - 1) {
                cont1++;
            } else {
                cont1 = 0;
            }
            img.src = imagenes2[cont1];
        }
    }
    )
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedor1 = document.querySelector('.contenedor1');  
    carrusel1(contenedor1);
}
);
//--------------------------------------------
var imagenes3=['imagenes/comidas Peruanas/cev1.jpg',
'imagenes/comidas Peruanas/cev2.jpg',
'imagenes/comidas Peruanas/cev3.jpg',
'imagenes/comidas Peruanas/cev4.jpg'];

var cont2=0;

function carrusel2(contenedor2) {

    contenedor2.addEventListener('click', e => {
        let atras = contenedor2.querySelector('.atras'),
            adelante = contenedor2.querySelector('.adelante'),
            img = contenedor2.querySelector('#imagen'),
            target = e.target;

        if (target === atras) {
            if (cont2 > 0) {
                cont2--;
            } else {
                cont2 = imagenes3.length - 1;
            }
            img.src = imagenes3[cont2];
        } else if (target === adelante) {
            if (cont2 < imagenes3.length - 1) {
                cont2++;
            } else {
                cont2 = 0;
            }
            img.src = imagenes3[cont2];
        }
    }
    )
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedor2 = document.querySelector('.contenedor2');  
    carrusel2(contenedor2);
}
);
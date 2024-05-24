var imagenes = ['imagenes/comidas Argentinas/asado1.jpg',
    'imagenes/comidas Argentinas/asado2.jpg',
    'imagenes/comidas Argentinas/asado 3.jpg'];
var cont = 0;

function carrusel(contenedor) {

    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('#imagen'),
            target = e.target;

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
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');  
    carrusel(contenedor);
}
);

//------------------------------------------------------------
 var imagen2 = ['imagenes/comidas Argentinas/revuelto1.jpg', 
              'imagenes/comidas Argentinas/revuelto2.jpg', 
              'imagenes/comidas Argentinas/revuelto3.jpg']

var cont=0;
function carrusel1(contenedor1) {

    contenedor1.addEventListener('click', e => {
        let atras = contenedor1.querySelector('.atras'),
            adelante = contenedor1.querySelector('.adelante'),
            img = contenedor1.querySelector('#imagen'),
            target = e.target;

        if (target === atras) {
            if (cont > 0) {
                cont--;
            } else {
                cont = imagen2.length - 1;
            }
            img.src = imagen2[cont];
        } else if (target === adelante) {
            if (cont < imagen2.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
            img.src = imagen2[cont];
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
var imagen3=['imagenes/comidas Argentinas/empanada1.jpg',
            'imagenes/comidas Argentinas/empanada2.jpg',
            'imagenes/comidas Argentinas/empanada3.jpg']
var cont=0;  
function carrusel2(contenedor2) {

    contenedor2.addEventListener('click', e => {
        let atras = contenedor2.querySelector('.atras'),
            adelante = contenedor2.querySelector('.adelante'),
            img = contenedor2.querySelector('#imagen'),
            target = e.target;

        if (target === atras) {
            if (cont > 0) {
                cont--;
            } else {
                cont = imagen3.length - 1;
            }
            img.src = imagen3[cont];
        } else if (target === adelante) {
            if (cont < imagen3.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
            img.src = imagen3[cont];
        }
    }
    )
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor2 = document.querySelector('.contenedor2');  
    carrusel2(contenedor2);
}
);

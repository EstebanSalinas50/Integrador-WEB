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
//---------------------------------------
var imagen4=['imagenes/comidas Argentinas/locro1.jpg',
            'imagenes/comidas Argentinas/locro2.jpg',
            'imagenes/comidas Argentinas/locro3.jpg']
 var cont=0;
 
 function carrusel3(contenedor3) {

    contenedor3.addEventListener('click', e => {
        let atras = contenedor3.querySelector('.atras'),
            adelante = contenedor3.querySelector('.adelante'),
            img = contenedor3.querySelector('#imagen'),
            target = e.target;

        if (target === atras) {
            if (cont > 0) {
                cont--;
            } else {
                cont = imagen4.length - 1;
            }
            img.src = imagen4[cont];
        } else if (target === adelante) {
            if (cont < imagen4.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
            img.src = imagen4[cont];
        }
    }
    )
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedor3 = document.querySelector('.contenedor3');  
    carrusel3(contenedor3);
}
);

//--------------------------------------
var imagen5=['imagenes/comidas Argentinas/milanga1.jpg',
             'imagenes/comidas Argentinas/milanga2.jpg',
             'imagenes/comidas Argentinas/milanga3.jpg']
var cont=0;
function carrusel4(contenedor4) {

    contenedor4.addEventListener('click', e => {
        let atras = contenedor4.querySelector('.atras'),
            adelante = contenedor4.querySelector('.adelante'),
            img = contenedor4.querySelector('#imagen'),
            target = e.target;

        if (target === atras) {
            if (cont > 0) {
                cont--;
            } else {
                cont = imagen5.length - 1;
            }
            img.src = imagen5[cont];
        } else if (target === adelante) {
            if (cont < imagen5.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
            img.src = imagen5[cont];
        }
    }
    )
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedor4 = document.querySelector('.contenedor4');  
    carrusel4(contenedor4);
}
);
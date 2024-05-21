var imagenes = ['imagenes/comidas Brasiles/quindim.jpg','imagenes/comidas Brasileras/quindim1.png','imagenes/comidas Brasileras/quindim2.png',
'imagenes/comidas Brasileras/quindim3.png','imagenes/comidas Brasileras/quindim4.png'
    ];

document.addEventListener("DOMContentLoaded", (event) => {
    let cont = 0;
    let contenedor = document.querySelector('.contenedor')
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras img'),
            siguiente = contenedor.querySelector('.siguiente img'),
            img = contenedor.querySelector('imagenes'),
            tgt = e.target;
        if (tgt === atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if (tgt === siguiente) { 
            if (cont + 1 < imagenes.length) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
});
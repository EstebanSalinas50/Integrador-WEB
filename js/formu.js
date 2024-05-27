

const expNombre = /^[a-zA-Z]{0,13}$/;

const exptel = /^[0-9]{8}$/;

const expcorreo = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function validar() {

    document.getElementById('errores').innerHTML = '';
    document.getElementById('resultados').innerHTML = '';

    let errores = [];

    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('tele');
    const correo = document.getElementById('correo');

    console.log(nombre);

    if (nombre.value == "") {
        errores.push("El nombre esta vacio");
    }
    if (nombre.value.length > 13) {
        errores.push("el nombre supera los caracteres deseados")
    }
    if (!expNombre.test(nombre.value)) {
        errores.push("El nombre tiene caracteres no deseados")
    }

    if (!exptel.test(telefono.value)) {
        errores.push("El número de teléfono debe contener exactamente 8 dígitos");
    }
    if (correo.value == "") {
        errores.push("Correo invalido")
    }


    if (errores.length > 0) {
        const erroresDiv = document.getElementById('errores');
        for (let i = 0; i < errores.length; i++) {
            const elemento = document.createElement('p');
            elemento.textContent = errores[i];
            elemento.className = 'error';
            erroresDiv.appendChild(elemento);
        }
        return false;
    }

    const resultadosDiv = document.getElementById('resultados');

    const nombreElemento = document.createElement('p');
    nombreElemento.textContent = `Nombre: ${nombre.value}`;
    nombreElemento.className='resultado'    
    resultadosDiv.appendChild(nombreElemento);

    const telefonoElemento = document.createElement('p');
    telefonoElemento.textContent = `Teléfono: ${telefono.value}`;
    telefonoElemento.className='resultado' 
    resultadosDiv.appendChild(telefonoElemento);

    const correoElemento = document.createElement('p');
    correoElemento.textContent = `Correo Electrónico: ${correo.value}`;
    correoElemento.className='resultado' 
    resultadosDiv.appendChild(correoElemento);

    return false;

};








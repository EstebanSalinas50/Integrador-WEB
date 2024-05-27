const expNombre = /^[a-zA-Z]{0,13}$/;
const exptel = /^[0-9]{8}$/;
const expcorreo = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const expcontra = /^.{8,}$/;

function validar() {
    
    const spans = document.querySelectorAll('.error');
    spans.forEach(span => span.remove());
    document.getElementById('resultados').innerHTML = '';

    let errores = [];

    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('tele');
    const correo = document.getElementById('correo');
    const contraseña = document.getElementById('contraseña');

    if (nombre.value == "") {
        const spanError = document.createElement('span');
        spanError.textContent = "Ingrese datos válidos";
        spanError.className = 'error';
        nombre.insertAdjacentElement('afterend', spanError);
    }

    if (!expNombre.test(nombre.value)) {    
        const spanError = document.createElement('span');
        spanError.textContent = "El nombre tiene caracteres no deseados";
        spanError.className = 'error';
        nombre.insertAdjacentElement('afterend', spanError);
    }

    if (!exptel.test(telefono.value)) {
        errores.push("El número de teléfono debe contener exactamente 8 dígitos");
        const spanError = document.createElement('span');
        spanError.textContent = "El número de teléfono debe contener exactamente 8 dígitos";
        spanError.className = 'error';
        telefono.insertAdjacentElement('afterend', spanError);
    }

    if (!expcorreo.test(correo.value)) {
        const spanError = document.createElement('span');
        spanError.textContent = "Correo inválido";
        spanError.className = 'error';
        correo.insertAdjacentElement('afterend', spanError);
    }

    if (!expcontra.test(contraseña.value)) {
        const spanError = document.createElement('span');
        spanError.textContent = "La contraseña debe tener al menos 8 caracteres";
        spanError.className = 'error';
        contraseña.insertAdjacentElement('afterend', spanError);
    }

    if (errores.length > 0) {
        return false;
    }

    const resultadosDiv = document.getElementById('resultados');

    const nombreElemento = document.createElement('p');
    nombreElemento.textContent = `Nombre: ${nombre.value}`;
    nombreElemento.className = 'resultado';
    resultadosDiv.appendChild(nombreElemento);

    const telefonoElemento = document.createElement('p');
    telefonoElemento.textContent = `Teléfono: ${telefono.value}`;
    telefonoElemento.className = 'resultado';
    resultadosDiv.appendChild(telefonoElemento);

    const correoElemento = document.createElement('p');
    correoElemento.textContent = `Correo Electrónico: ${correo.value}`;
    correoElemento.className = 'resultado';
    resultadosDiv.appendChild(correoElemento);

    const contraseñaElemento = document.createElement('p');
    contraseñaElemento.textContent = `Contraseña: ${contraseña.value}`;
    contraseñaElemento.className = 'resultado';
    resultadosDiv.appendChild(contraseñaElemento);

    return false;
}




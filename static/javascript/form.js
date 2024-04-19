function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(email);
}

function validarRut(rut) {
    var valor = rut.replace(/[\.-]/g, '');
    var cuerpo = valor.slice(0, -1);
    var dv = valor.slice(-1).toUpperCase();

    rut = cuerpo + '-' + dv;

    if (cuerpo.length < 7) {
        return false;
    }

    var suma = 0;
    var multiplo = 2;

    for (var i = 1; i <= cuerpo.length; i++) {
        var index = multiplo * valor.charAt(cuerpo.length - i);
        suma = suma + index;
        if (multiplo < 70) {
            multiplo = multiplo + 1;
        } else {
            multiplo = 2;
        }
    }

    var dvEsperado = 11 - (suma % 11);
    dv = (dvEsperado === 10) ? 'K' : ((dvEsperado === 11) ? '0' : dvEsperado.toString());

    return dv === valor.slice(-1).toUpperCase();
}

windows.onload = function () {
    document
        .getElementById('miFormulario')
        .addEventListener('sumit', function (event) {
            if (!validarEmail(document.getElementById('email').value)) {
                event.preventDefault();
                alert('Email no cumple con el formato esperado.')
            }

            if (!validarRut(document.getElementById('rut').value)) {
                event.preventDefault(); // Prevenir el envio del formulario si la validacion falla
                alert('Rut no cumple con el formato esperado.')
            }

        });
}
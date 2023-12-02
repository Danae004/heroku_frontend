function editarContacto() {
    const correo_actual = document.getElementById('correo_actual').value;
    const nuevoNombre = document.getElementById('nombre').value;
    const nuevoTelefono = document.getElementById('telefono').value;

    // Validar campos si es necesario

    const URL = "https://frontend-contactos-47896c7caf37.herokuapp.com" + correo_actual;

    var request = new XMLHttpRequest();
    request.open('PUT', URL, true);
    request.setRequestHeader('Content-Type', 'application/json');

    var datosActualizados = {
        email: correo_actual,
        nombre: nuevoNombre,
        telefono: nuevoTelefono
    };

    request.send(JSON.stringify(datosActualizados));

    request.onload = () => {
        if (request.status === 200) {
            // Contacto actualizado correctamente
            console.log("Contacto actualizado exitosamente");

            // Actualizar el campo de correo actual con el nuevo correo
            document.getElementById('correo_actual').value = correo_actual;

            // Puedes mostrar un mensaje si es necesario
            document.getElementById('mensaje').innerHTML = "Contacto actualizado exitosamente";
        } else if (request.status === 404) {
            // No se encontró el contacto con ese correo
            console.log("No se encontró el contacto con ese correo.");
            // Puedes mostrar un mensaje si es necesario
            document.getElementById('mensaje').innerHTML = "No se encontró el contacto con ese correo.";
        } else {
            // Error al intentar actualizar el contacto
            console.log("Error al intentar actualizar el contacto.");
            // Puedes mostrar un mensaje si es necesario
            document.getElementById('mensaje').innerHTML = "Error al intentar actualizar el contacto.";
        }
    };
}

function cancelarEdicion() {
    // Puedes redirigir al usuario a otra página o realizar cualquier acción necesaria al cancelar la edición
    console.log("Edición cancelada");
}

function regresar() {
    // Redirige al usuario al índice (index.html)
    window.location.href = "/";  // Ajusta la ruta según sea necesario
}










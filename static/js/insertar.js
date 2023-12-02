var urlAntesDeInsertar;  // Variable global para almacenar la URL antes de insertar

function insertarContacto() {
    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;

    // Validar los campos si es necesario

    const URL = "https://frontend-contactos-47896c7caf37.herokuapp.com";
    // const URL = "https://shm-backend-105ae4e301e9.herokuapp.com/contactos";

    var request = new XMLHttpRequest();
    request.open('POST', URL, true);
    request.setRequestHeader('Content-Type', 'application/json');
    var nuevoContacto = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    request.send(JSON.stringify(nuevoContacto));

    request.onload = () => {
        console.log("Contacto insertado exitosamente");
        
        urlAntesDeInsertar = window.location.href;
        window.location.href = "/buscar";
    };
}

function cancelarInsercion() {
    window.location.href = urlAntesDeInsertar || "/";
}

function regresar() {
    // Redirige al usuario al índice (index.html)
    window.location.href = "/";  // Ajusta la ruta según sea necesario
}

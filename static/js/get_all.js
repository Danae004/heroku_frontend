function getAll() {
    const URL = "https://backend-contactos-c554215d4ff0.herokuapp.com/contactos";
    var request = new XMLHttpRequest();
    request.open('GET', URL);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);

        console.log("Email: " + json[0]["email"]);
        console.log("Nombre: " + json[0]["nombre"]);
        console.log("Telefono: " + json[0]["telefono"]);

        const tbody_contactos = document.getElementById("tbody_contactos");
        tbody_contactos.innerHTML = ""; // Limpiar el contenido existente

        for (var i = 0; i < Object.keys(json).length; i++) {
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");

            td_email.innerHTML = json[i]["email"];
            td_nombre.innerHTML = json[i]["nombre"];
            td_telefono.innerHTML = json[i]["telefono"];

            console.log("Email: " + json[i]["email"]);

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);
            tbody_contactos.appendChild(tr);
        }
    };
}

document.body.onload = getAll();

//document.getElementById("botonSaludar").addEventListener("click", function(){
//    var nombre = document.getElementById("nombre").value;
//    document.getElementById("saludo").innerHTML = nombre;
//});

document.getElementById("enviar").addEventListener("click", function(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var error = false;
    if (nombre == "") {
        document.getElementById("nombre").style.border = "3px solid red"
        error = true;
    }
    if (apellido == "") {
        document.getElementById("apellido").style.border = "3px solid red"
        error = true;
    }
    if (error == false) {
        console.log(nombre + " " + apellido);
    }

});
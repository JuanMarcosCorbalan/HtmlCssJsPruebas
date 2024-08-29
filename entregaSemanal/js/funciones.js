document.getElementById("botonSaludar").addEventListener("click", function(){
    var nombre = document.getElementById("nombre").value;
    document.getElementById("saludo").innerHTML = nombre;
});
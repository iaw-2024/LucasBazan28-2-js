document.getElementById('botonNacionales').addEventListener('click', function() {
    fetch('/cliente_servidor/nacionales')
        .then(response => response.text())
        .then(tabla => {
            document.getElementById('Copas').innerHTML = tabla;
        });
});

document.getElementById('botonInternacionales').addEventListener('click', function() {
    fetch('/cliente_servidor/internacionales')
        .then(response => response.text())
        .then(tabla => {
            document.getElementById('Copas').innerHTML = tabla;
        });
});
document.getElementById('botonVolverAInicio').addEventListener('click', function() {
    let tabla = document.getElementById('Copas');
    tabla.innerHTML = '<img src="https://i.pinimg.com/564x/de/e5/8f/dee58fbf03b3e4e0d697bae497f7520b.jpg" class="img-fluid center-image" alt="Escudo River Plate 1986">';        
}); //Esto se renderiza del lado del cliente ya que no debe obtener los datos de un .json

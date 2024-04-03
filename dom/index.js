document.getElementById('botonNacionales').addEventListener('click', function() {
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            let tabla = document.getElementById('Copas');
            tabla.innerHTML = '';
            data.nacionales.forEach(objeto => {
                let fila = document.createElement('tr');
                for (let propiedad in objeto) {
                    let celda = document.createElement('td');
                    celda.textContent = objeto[propiedad];
                    fila.appendChild(celda);
                }
                tabla.appendChild(fila);
            });
        });
});
document.getElementById('botonInternacionales').addEventListener('click', function() {
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            let tabla = document.getElementById('Copas');
            tabla.innerHTML = '';
            data.internacionales.forEach(objeto => {
                let fila = document.createElement('tr');
                for (let propiedad in objeto) {
                    let celda = document.createElement('td');
                    celda.textContent = objeto[propiedad];
                    fila.appendChild(celda);
                }
                tabla.appendChild(fila);
            });
        });
});
document.getElementById('botonVolverAInicio').addEventListener('click', function() {
            let tabla = document.getElementById('Copas');
            tabla.innerHTML = '<img src="https://i.pinimg.com/564x/de/e5/8f/dee58fbf03b3e4e0d697bae497f7520b.jpg" class="img-fluid center-image" alt="Escudo River Plate 1986">';        
});
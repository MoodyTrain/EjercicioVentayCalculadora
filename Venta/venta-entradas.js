function calcularPrecio() {
    let edad = parseInt(document.getElementById("edad").value);
    let precio = document.getElementById("precio");
    
    if (isNaN(edad) || edad < 0) {
        precio.textContent = "Por favor, introduce una edad válida.";
        return;
    }
    
    let costo;
    if (edad < 12) {
        costo = "Precio reducido 3€";
    } else if (edad <= 13) {
        costo = "Precio completo: 7€";
    } else if (edad >= 65) {
        costo = "Precio jubilados: 5€";
    }
    
    precio.textContent = `Costo de la entrada: ${costo}`;
}

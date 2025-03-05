function calcularPrecio() {
    let edad = parseInt(document.getElementById("edad").value);
    let precio = document.getElementById("precio");
    
    if (isNaN(edad) || edad < 0) {
        precio.textContent = "Por favor, introduce una edad válida.";
        return;
    }
    
    let costo;
    if (edad < 12) {
        costo = "2€";
    } else if (edad <= 18) {
        costo = "Precio reducido: 5€";
    } else {
        costo = "Precio completo: 10€";
    }
    
    precio.textContent = `Costo de la entrada: ${costo}`; /*Esto es de openwebinar, que maravilla.*/
}

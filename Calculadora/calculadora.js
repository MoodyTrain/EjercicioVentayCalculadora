function calculaporfavor() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");
    
    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, introduce números válidos.";
        return;
    }
    
    let total;
    switch (operacion) {
        case "suma": total = num1 + num2; break;
        case "resta": total = num1 - num2; break;
        case "multiplicacion": total = num1 * num2; break;
        case "division": 
            if (num2 === 0) {
                resultado.textContent = "Error: No se puede dividir por cero.";
                return;
            }
            total = num1 / num2;
            break;
        default: total = "Operación no válida";
    }
    resultado.textContent = `Resultado: ${total}`;
}

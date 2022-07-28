function solicitaEdad() {
    return prompt("¿Cuántos años tienes?");
}

function calculaEdad(edad) {
    if (edad >= 18) {
        return "you're an adult!";
    } else {
        return "you aren't an adult!";
    }
}

alert(calculaEdad(solicitaEdad()));
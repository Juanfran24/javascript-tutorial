function solicitaEdad() {
    let edad = prompt("¿Cuántos años tienes?");
    return edad;
}

function calculaEdad(edad) {
    if (edad >= 18) {
        return "you're an adult!";
    } else {
        return "you aren't an adult!";
    }
}

alert(calculaEdad(solicitaEdad()));
function solicitaEdad() {
    return prompt("¿Cuántos años tienes?");
}

function calculaEdad(edad) {
    return (edad >= 18) ? "you're an adult!" : "you aren't an adult!";
}

alert(calculaEdad(solicitaEdad()));
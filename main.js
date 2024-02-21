// Inicializar el acumulador de puntaje
var puntajeAcumulado = 0;

// Función para generar un número aleatorio entre 1 y 2
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 2) + 1;
}

// Función para jugar una ronda
function jugarRonda() {
    // Generar un número aleatorio
    var numeroAleatorio = generarNumeroAleatorio();

    // Pedir al usuario que ingrese un número
    var numeroUsuario = parseInt(prompt("Ingresa un número (1 o 2):"));

    // Verificar si el número ingresado por el usuario es válido (1 o 2)
    if (numeroUsuario === 1 || numeroUsuario === 2) {
        // Comparar el número generado aleatoriamente con el número ingresado por el usuario
        if (numeroUsuario === numeroAleatorio) {
            // Aumentar el puntaje en 10 puntos por cada acierto
            puntajeAcumulado += 10;
            alert("¡Felicidades! Has acertado el número. Tu puntaje acumulado es: " + puntajeAcumulado);
        } else {
            alert("Lo siento, has fallado. El número correcto era " + numeroAleatorio + ". Tu puntaje acumulado es: " + puntajeAcumulado);
        }
    } else {
        alert("Por favor, ingresa un número válido (1 o 2). Tu puntaje acumulado es: " + puntajeAcumulado);
    }
}

// Función principal para ejecutar el juego
function jugarJuego() {
    var seguirJugando = true;
    while (seguirJugando) {
        jugarRonda();
        seguirJugando = confirm("¿Deseas jugar otra ronda?");
    }
    alert("Gracias por jugar. Tu puntaje final acumulado es: " + puntajeAcumulado);
}

// Llamar a la función principal para comenzar el juego
jugarJuego();



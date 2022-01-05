//Seleccion de botones
const displayValorAnterior = document.querySelector('.valor-anterior');
const displayValorActual = document.querySelector('.valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

//Instancia de calculadora
const display = new Display(displayValorAnterior, displayValorActual);

//A cada uno de los botones, le agregamos el evento addEventlistener de click y  que el display agregue un numero
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.textContent)
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value);
    });
});
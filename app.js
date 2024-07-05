//  1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let title = document.querySelector('h1');
title.innerHTML = "Hora del desafío";

//  2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function botonClikeado() {
    console.log("Botón clikeado")
};


//  3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function mensajeCiudad() {
    let city = prompt("Dime un nombre de una ciudad de Brasil");
    alert (`Estuve en ${city} y me acordé de ti!`);
};

//  4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function yoAmoJs () {
    alert ("Yo amo Js");
}

//  5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma () {
    let primerNumero = parseInt(prompt ("Ingresa el primer número:"));
    let segundoNumero = parseInt(prompt ("Ingresa el segundo número:"));
    alert(primerNumero + segundoNumero);
}


//  8. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(){
    let num = parseInt(prompt("Ingresa un numero para duplicarlo"));
    let doble = num * num
    alert(`El doble de ${num} es: ${doble}`);
}

//  9. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioDeTres() {
    let primero = parseInt(prompt("Ingresa el primer número"));
    let segundo = parseInt(prompt("Ingresa el segundo número"));
    let tercero = parseInt(prompt("Ingresa el tercer número"));
    let prom = ((primero + segundo + tercero)/3).toFixed(2);
    alert(`El promedio entre ${primero}, ${segundo} y ${tercero} es: ${prom}`); 
}

//  10. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor() {
    let primero = parseInt(prompt('Ingrese el primer número'));
    let segundo = parseInt(prompt('Ingrese elsegundo número'));
    if (primero === segundo){
        alert(`Los dos números son iguales`);
    } else if (primero > segundo){
        alert(`El número mayor es: \n${primero}`);
    } else {
        alert(`El número mayor es: \n${segundo}`);
    }
}

//  11. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo
// MODIFICADA - Cree una funcion que recibe 2 parametros y devuelve el resultado de su multimpliación

function multiplicarNumeros (multiploUno, multiploDos) {
    return multiploUno * multiploDos;
}

function multiplicar (){
    let primero = parseInt(prompt('Ingrese el primer número'));
    let segundo = parseInt(prompt('Ingrese el segundo número'));
    let resultado = multiplicarNumeros(primero, segundo);
    alert(`El resultado de multiplicar ${primero} por ${segundo} es:\n ${resultado}`);
}


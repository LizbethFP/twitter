/* ************VERSION 0.0.1*************** */
// Variables globales
var button = document.querySelector('.btn');
var textAreaPress = document.querySelector('.tweet-box');

// Agregar un evento de click al botón o de submit al formulario.
function tweet(event) {
  // prevenir algunas acciones por defecto
  event.preventDefault();
  // En el evento, obtener el texto.
  var capturedText = (document.querySelector('.tweet-box')).value;
  var paragraphForCapturedText = document.createElement('p');
  // Agregando el texto al html
  paragraphForCapturedText.textContent = capturedText;
  document.querySelector('.container-tweets').appendChild(paragraphForCapturedText);
}


/* ************VERSION 0.0.2*************** */
// No ingresar texto vacío (deshabilitar el botón de "twittear").
function validate() {
  if (document.querySelector('.tweet-box').value === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
// Evento de click al boton en v1
button.addEventListener('click', tweet);
// Evento de keyup al boton en v2
textAreaPress.addEventListener('keyup', validate);
validate();
textAreaPress.addEventListener('keyup', countCharactersDown);
// Contar la cantidad de caracteres de forma regresiva.
function countCharactersDown() {
  var lengthText = 140 - (document.querySelector('.tweet-box').value.length);
  document.querySelector('.characters').textContent = lengthText;
}


/* ***************VERSION 0.0.3********************** */

/* ************VERSION 0.0.1*************** */
// Variables globales
var button = document.querySelector('.btn');
var textAreaPress = document.querySelector('.tweet-input-box');

// Agregar un evento de click al botón o de submit al formulario.
function tweet(event) {
  // prevenir algunas acciones por defecto
  event.preventDefault();
  // En el evento, obtener el texto.
  var capturedText = textAreaPress.value;
  // Agregando el texto al html
  var paragraphForCapturedText = document.createElement('p');
  paragraphForCapturedText.textContent = capturedText;
  document.querySelector('.container-tweets').appendChild(paragraphForCapturedText);
}


/* ************VERSION 0.0.2*************** */
// No ingresar texto vacío (deshabilitar el botón de "twittear").
function validate() {
  if (textAreaPress.value === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

// Evento de click al boton en versión 1
button.addEventListener('click', tweet);
// Evento de keyup al boton en versión 2 y versión 3
textAreaPress.addEventListener('keyup', validate);
validate();
textAreaPress.addEventListener('keyup', countCharactersDown);
textAreaPress.addEventListener('keyup', colorsOfCharacters);
textAreaPress.addEventListener('keyup', colorsOfCharacters);

// Contar la cantidad de caracteres de forma regresiva.
function countCharactersDown() {
  var lengthOfTweet = (textAreaPress.value).length;
  var lengthOfTweetDown = 140 - lengthOfTweet;
  document.querySelector('.characters').textContent = lengthOfTweetDown;
};

/* ***************VERSION 0.0.3********************** */
function colorsOfCharacters() {
  var lengthOfTweet = (textAreaPress.value).length;
  // Si pasa los 140 caracteres, mostrar el contador en negativo.
  var lengthOfTweetDown = 140 - lengthOfTweet;
  if (lengthOfTweet > 141) {
    (document.querySelector('.characters')).style.color = 'red';
    button.disabled = true;
  // Si pasa los 140 caracteres, deshabilitar el botón.
  } else if (lengthOfTweet > 140) {
    button.disabled = true;
    // Si pasa los 130 caracteres, mostrar el contador con OTRO color.
  } else if (lengthOfTweet > 130) {
    (document.querySelector('.characters')).style.color = 'orange';
    // Si pasa los 120 caracteres, mostrar el contador con OTRO color.
  } else if (lengthOfTweet > 120) {
    (document.querySelector('.characters')).style.color = 'blue';
  } else if (lengthOfTweet > 1 && lengthOfTweet < 119) {
    (document.querySelector('.characters')).style.color = 'black';
  }
}

/* ***************VERSION 0.0.4********************** */
// Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.

function resizeTextAreaPress() {
  var lengthOfTweet = (textAreaPress.value).length;
  if (window.event.keyCode === '13') {
    textAreaPress.style.height = 'lengthOfTweet';
    textAreaPress.style.overflow = 'none';
  }
}

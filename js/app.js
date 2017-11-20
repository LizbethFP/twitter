// Variables globales
var button = document.querySelector('.btn');
var textAreaPress = document.querySelector('.tweet-input-box');

/* ************VERSION 0.0.1*************** */
// Agregar un evento de click al botón o de submit al formulario.
function tweet(event) {
  var containerTweets = document.querySelector('.container-tweets');
  // En el evento, obtener el texto.
  var capturedText = textAreaPress.value;
  // Agregando el texto al html
  var paragraphForCapturedText = document.createElement('p');
  paragraphForCapturedText.textContent = capturedText;
  containerTweets.appendChild(paragraphForCapturedText);
  // prevenir algunas acciones por defecto
  event.preventDefault();
  // Agregar hora
  function showTime() {
    var actualMoment = new Date();
    var hour = actualMoment.getHours();
    var minute = actualMoment.getMinutes();
    var printTime = hour + ' : ' + minute;
    var smallFather = document.querySelector('.container-tweets p');
    // crear elemento contenedor de hora
    var timeContainer = document.createElement('p');
    // crear contenido del contenedor de hora
    timeContainer.textContent = printTime;
    // agregarlo al html
    smallFather.appendChild(timeContainer);
  };
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
// Contar la cantidad de caracteres de forma regresiva.
function countCharactersDown() {
  var characters = document.querySelector('.characters');
  var lengthOfTweet = (textAreaPress.value).length;
  var lengthOfTweetDown = 140 - lengthOfTweet;
  characters.textContent = lengthOfTweetDown;
};

/* ***************VERSION 0.0.3********************** */
function colorsOfCharacters() {
  var characters = document.querySelector('.characters');
  var lengthOfTweet = (textAreaPress.value).length;
  // Si pasa los 140 caracteres, mostrar el contador en negativo.
  var lengthOfTweetDown = 140 - lengthOfTweet;
  if (lengthOfTweet > 141) {
    characters.style.color = 'red';
    button.disabled = true;
  // Si pasa los 140 caracteres, deshabilitar el botón.
  } else if (lengthOfTweet > 140) {
    button.disabled = true;
    // Si pasa los 130 caracteres, mostrar el contador con OTRO color.
  } else if (lengthOfTweet > 130) {
    characters.style.color = 'orange';
    // Si pasa los 120 caracteres, mostrar el contador con OTRO color.
  } else if (lengthOfTweet > 120) {
    characters.style.color = 'blue';
  } else if (lengthOfTweet > 1 && lengthOfTweet < 119) {
    characters.style.color = 'black';
  }
}

/* ***************VERSION 0.0.4********************** */
// Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.
// function resizeTextAreaPress() {
//   var lengthOfTweet = (textAreaPress.value).length;
//   if (window.event.keyCode === '13') {
//     textAreaPress.style.height = 'lengthOfTweet';
//     textAreaPress.style.overflow = 'none';
//   }
// }
// otro intento
// function textAreaAdjust(o) {
//   o.style.height = '1px';
//   o.style.height = (25 + o.scrollHeight) + 'px';
// }


/* ***************VERSION 0.0.6 (Extra)********************** */
// Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm.
// function showTime() {
//   var actualMoment = new Date();
//   var hour = actualMoment.getHours();
//   var minute = actualMoment.getMinutes();
//   var printTime = hour + ' : ' + minute;
//   var smallFather = document.querySelector('.p');
//   // crear elemento contenedor de hora
//   var timeContainer = document.createElement('div');
//   // crear contenido del contenedor de hora
//   timeContainer.textContent = printTime;
//   // agregarlo al html
//   document.querySelector('.container.tweets').smallFather.appendChild(timeContainer);
// }


// Evento de click al boton en versión 1
button.addEventListener('click', tweet);
// Evento de keyup al textarea en versión 2 y versión 3
textAreaPress.addEventListener('keyup', validate);
validate();
textAreaPress.addEventListener('keyup', countCharactersDown);
textAreaPress.addEventListener('keyup', colorsOfCharacters);
// Evento de keyup de enter al textarea en versión 4
// textAreaPress.addEventListener('keyup', resizeTextAreaPress);
// button.addEventListener('click', showTime);

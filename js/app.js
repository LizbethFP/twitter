window.addEventListener('load', function() {
  // Variables globales
  var button = document.querySelector('.btn');
  var textAreaPress = document.querySelector('.tweet-input-box');
  var characters = document.querySelector('.characters');
  var MAXCHARACTERS = 140;

  /* ************VERSION 0.0.1*************** */
  // Agregar un evento de click al botón o de submit al formulario con function expression.
  var tweet = function(event) {
    var containerTweets = document.querySelector('.container-tweets');
    // En el evento, obtener el texto.
    var capturedText = textAreaPress.value;
    // Agregando el texto al html
    var paragraphForCapturedText = document.createElement('p');
    paragraphForCapturedText.textContent = capturedText;
    containerTweets.appendChild(paragraphForCapturedText);
    // prevenir algunas acciones por defecto
    event.preventDefault();
    // Limpiar contenido del área de texto
    textAreaPress.value = '';    
    // Volver puntero dentro del área de texto después de tuitear
    textAreaPress.focus();
    // Retomar tamaño original
    textAreaPress.style.height = '';
    // Retornar a cantidad máxima en el span
    characters.textContent = MAXCHARACTERS;
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
  };

  /* ************VERSION 0.0.2*************** */
  // No ingresar texto vacío y no excederse del  (deshabilitar el botón de "twittear").
  var validate = function() {
    if (textAreaPress.value === '' || textAreaPress.value.length > MAXCHARACTERS) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  };
  
  // Contar la cantidad de caracteres de forma regresiva.
  var countCharactersDown = function() {
    var lengthOfTweet = (textAreaPress.value).length;
    var lengthOfTweetDown = MAXCHARACTERS - lengthOfTweet;
    characters.textContent = lengthOfTweetDown;
  };

  /* ***************VERSION 0.0.3********************** */
  var colorsOfCharacters = function() {
    var characters = document.querySelector('.characters');
    var lengthOfTweet = (textAreaPress.value).length;
    // Si pasa los 140 caracteres, mostrar el contador en negativo.
    var lengthOfTweetDown = MAXCHARACTERS - lengthOfTweet;
    if (lengthOfTweet > MAXCHARACTERS) {
      characters.style.color = 'red';
      button.disabled = true;
      // Si pasa los 140 caracteres, deshabilitar el botón.
    } else if (lengthOfTweet > MAXCHARACTERS) {
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
  };

  /* ***************VERSION 0.0.4********************** */
  // Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.
  var resizeTextAreaPress = function(event) {
    var writeBox = this;
    setTimeout(function() {
      writeBox.style.cssText = 'height: auto; padding: 0';
      writeBox.style.cssText = 'height:' + writeBox.scrollHeight + 'px';
    }, 0);
    // event.preventDefault();
  };

  /* ***************VERSION 0.0.5********************** */
  var noStrings = function() {
    if (textAreaPress.value === false) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  };

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
  // Evento de keydown al textarea en versión 2 y versión 3
  textAreaPress.addEventListener('keyup', validate);
  validate();
  textAreaPress.addEventListener('keydown', countCharactersDown);
  textAreaPress.addEventListener('keydown', colorsOfCharacters);
  textAreaPress.addEventListener('keydown', resizeTextAreaPress);
  textAreaPress.addEventListener('keydown', noStrings);
// Evento de keyup de enter al textarea en versión 4
// button.addEventListener('click', showTime);
});

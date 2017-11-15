// Version 0.0.1

// Agregar evento de click  al botón
var submit = btn.addEventListener('click', gettingText);
var tweetBox = document.getElementById('tweet-box');
var container = document.getElementById('container-tweets');


function gettingText(){
  var tweetCaught = tweetBox.value;
  alert(tweetCaught);
}

var tweetCaught; //sacar el texto ingresado en la función en una variable

// var texting = function gettingText();
//Creando y agregando tweet a HTML
var containerText = document.createTextNode(tweetCaught);
container.appendChild(containerText);

// Version 0.0.2
//No ingresar texto vacío (deshabilitar el botón de "twittear").
if (document.getElementById("tweet-box").value == ''){
    // alert("debug");
    document.getElementById("btn").style.display ="none";
}
//Contar la cantidad de caracteres de forma regresiva.

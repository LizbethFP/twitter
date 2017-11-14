// Version 0.0.1

// Agregar evento de click  al botón
var submit = btn.addEventListener('click', gettingText);
var tweetBox = document.getElementById('tweet-box');


function gettingText(){
  var tweetCaught = tweetBox.value;
  alert(tweetCaught);
}


// Creando y agregando tweet a HTML
var container = document.getElementByClass('container-tweets');
container.appendChild(gettingText);
// addTweetToHtml = container-tweets.createElement(tweetCaught);

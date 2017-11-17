// Version 0.0.1
var tweetCaught = ""
var tweetBox = document.getElementById('tweet-box');

// Agregar evento de click  al botón, crear y agregar tweet a HTMl
document.getElementById('btn').onclick = function(){

  tweetCaught = tweetBox.value;
  var paragraph = document.createElement("p");
  var paragraphText = document.createTextNode(tweetCaught);
  paragraph.appendChild(paragraphText);

  var container = document.getElementById("test");
  container.appendChild(paragraph);

}
// // Version 0.0.1
// // Agregar evento de click  al botón
// var boton = document.getElementById('btn');
// var tweetBox = document.getElementById('tweet-box');
// var container = document.getElementById('container-tweets');
//
// boton.addEventListener('click', gettingText);
//
// function gettingText(){
//   var tweetCaught = tweetBox.value;
//   alert(tweetCaught);
//   createText(event);
// }
//
// //Creando y agregando tweet a HTML
// function createText{
// var containerText = document.createTextNode(tweetCaught);
// container.appendChild(containerText);
// }
//
// // var tweetCaught; //sacar el texto ingresado en la función en una variable
// // console.log(tweetCaught);
// // var texting = function gettingText();


// Version 0.0.2
//No ingresar texto vacío (deshabilitar el botón de "twittear").
// if (document.getElementById("tweet-box").value == ''){
//     // alert("debug");
//     document.getElementById("btn").style.disable ="false";
// }
// //Contar la cantidad de caracteres de forma regresiva.
// var textarea = document.querySelector("textarea");
//
// textarea.addEventListener("input", function(){
//     var maxlength = this.getAttribute("maxlength");
//     var currentLength = this.value.length;
//
//     if( currentLength >= maxlength ){
//         console.log("You have reached the maximum number of characters.");
//     }else{
//         console.log(maxlength - currentLength + " chars left");
//     }
// });


var img = document.getElementById("surface")
var img2 = document.getElementById("space")
// var img3 = document.getElementById("astonaut")

var img3 = new Image(); img3.src= './images/astronaut3.png';
var img4 = new Image(); img4.src= './images/gem5.png';
var sprite = new Image(); sprite.src = './../images/sprite.png';


var renders = {
  surface : 'brown',
  board : 'black',
  surfaceTexture : img,
  backgroundTexture : img2,
  PJTexture : img3,
  gemTexture :img4,
  sprite :sprite,

}

var img = document.getElementById("surface")
var img2 = document.getElementById("space")
// var img3 = document.getElementById("astonaut")

var img3 = new Image(); img3.src= './images/astronaut3.png';
var img4 = new Image(); img4.src= './images/gem5.png';
var img5 = new Image(); img5.src= '/images/tile02 copy.png';
var sprite = new Image(); sprite.src = './../images/sprite_movement_static.png';
var img6 = new Image(); img6.src= '/images/tile04.png';
var img7 = new Image(); img7.src= './../images/crouch.png';

var renders = {
  surface : 'brown',
  board : 'black',
  surfaceTexture : img,
  backgroundTexture : img2,
  PJTexture : img3,
  gemTexture :img4,
  sprite :sprite,
  surfaceTexture2: img5,
  specialTile : img6,
  crouch : img7,

}


var x = x;
var y = 'y';
var p = 'p';
var g = 'g';
var gemsMapintro = 2;
var gemsMap1 = 2;
var gemsMap2 = 9;
var gemsMap3 = 3;
var gemsMap4 = 8;
var gemsMap5 = 8;
var collectedGems = 0;

// mapa intro tutorial 
var mapintro =
[//2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//rows
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,g],
['p',0,0,0,0,0,0,0,g,0,0,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
]


//mapa 1 
var map1 =
[//2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],//rows
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,'p',x,x],
[0,0,0,0,x,x,x,x,x,x,x,x,x,x,x,x],
[0,0,0,0,x,x,x,x,x,x,x,x,x,x,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[g,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[x,x,x,x,0,0,0,0,0,0,0,0,0,0,x,x],
[x,x,x,x,0,0,0,0,0,0,0,0,0,g,x,x],
[x,x,x,x,0,0,0,0,0,0,0,0,x,x,x,x],
[x,x,x,x,0,0,0,0,0,0,0,0,x,x,x,x],
]
var map3 = 
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],//rows
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,x,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,x,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,x,0,0,0,0,x,x,0,0,0,x,x],
[0,0,0,0,x,0,0,0,x,x,x,0,0,g,x,x],
[0,0,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[0,0,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[0,0,0,0,0,0,x,x,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,g,x,x,0,0,0,0,0,0,0,x,x],
['p',0,0,x,x,x,0,0,0,0,0,0,g,x,x],
[x,x,0,0,x,0,0,x,x,x,x,x,x,x,x,x],
[x,x,0,0,x,0,0,x,x,x,x,x,x,x,x,x],
[x,x,0,0,x,0,0,x,x,x,x,x,x,x,x,x],
[x,x,0,0,x,0,0,x,x,x,x,x,x,x,x,x]]

var map2 =
[ //2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],//rows
[x,x,x,0,g,g,x,x,x,x,x,x,x,x,x,x],
[x,x,x,0,x,x,g,x,x,x,x,x,x,x,x,x],
[x,x,x,0,0,0,x,g,g,g,x,x,x,x,x,x],
[x,x,x,0,0,0,0,x,x,x,g,x,x,x,x,x],
[x,x,x,0,0,0,0,0,0,0,x,g,g,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,x,x,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,x,x,x,x,x,0,0,0,0,0,0,0,x,x,x],
[x,x,x,x,x,x,x,0,0,0,0,0,0,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,0,'p',x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]]
var map4 =
[  //2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],//rows
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,0,0,0,0,0,x,x,x,x,x,x,x,x,x,x],
[x,0,0,0,0,0,x,x,x,x,x,x,x,x,x,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,0,0,0,0,0,0,x,x,x,x,x,x,x,x,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,0,0,0,0,0,x,x,x,x,x,x,x,x,x,x],
[x,0,'p',0,0,0,x,g,g,x,g,x,x,g,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,g,g,g,x,x,g,x,0,0,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]]
var map5 =
  [  //2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],//rows
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[x,'p',0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[x,x,x,y,y,y,y,y,y,y,y,y,y,x,x,x],
[x,x,x,x,x,g,0,0,0,0,g,x,x,x,x,x],
[x,x,x,x,x,0,x,y,y,x,0,x,x,x,x,x],
[x,x,x,x,x,g,0,0,0,0,g,x,x,x,x,x],
[x,x,x,x,x,x,y,x,x,y,x,x,x,x,x,x],
[x,x,x,x,x,g,0,0,0,0,g,x,x,x,x,x],
[x,x,x,x,x,x,x,y,y,x,x,x,x,x,x,x],
[x,x,x,x,x,g,0,0,0,0,g,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]]


window.onload = function(){
  var canvas = document.getElementById('map');
  var ctx = canvas.getContext('2d');
  var game = new Game({
    ctx: ctx,
    map: copy(mapintro),
    canvas: canvas,
    movementImput: 'l',
    sizeIndex : 40,
    y: y,
    x: x,
    p: p,
    g: g,
    totalGems: gemsMapintro,
    collectedGems: collectedGems,
    mapcount: 1,
    xcoordinates: 0,
    ycoordinates: 0,
    bob: sprite({
	    context: this.ctx,
	    width: 60,
	    height: 100,
	    image: renders.sprite,
	    xcoordinates: this.xcoordinates,
      ycoordinates: this.ycoordinates,
      ticksPerFrame : 0,
      numberOfFrames : 4,
      loop : 0,
    }),
    
  });
  

  game.start();

  
  var intro = new Intro({
    
  });

  intro.start();

}
// function gameLoop () {

//   window.requestAnimationFrame(gameLoop);
  
//   bob.updateAnimation();
//   bob.render();
// }

// Start the game loop as soon as the sprite sheet is loaded
//renders.sprite.addEventListener("load", gameLoop);

// function hard copies an array and the objects inside (no reference, true clone)
function copy(o) {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
      v = o[key];
      output[key] = (typeof v === "object") ? copy(v) : v;
  }
  return output;
}


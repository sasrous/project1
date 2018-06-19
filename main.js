

var x = undefined;
var p = 'p';
var g = 'g';
var gemsMap1 = 2;
var gemsMap2 = 3;
var collectedGems = 0;
//mapa 1 
var map1 =
[//2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,7,8,9,2
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
var map2 = 
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],//rows
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x],
[0,0,0,0,0,g,0,0,0,0,0,0,0,'p',x,x],
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
window.onload = function(){
  var canvas = document.getElementById('map');
  var ctx = canvas.getContext('2d');
  var game = new Game({
    ctx: ctx,
    map: copy(map1),
    canvas: canvas,
    movementImput: 'l',
    sizeIndex : 40,
    x: x,
    p: p,
    g: g,
    totalGems: gemsMap1,
    collectedGems: collectedGems,
    mapcount: 1,
  });

  game.start();
}

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


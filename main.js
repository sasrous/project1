

var x = undefined;
var p = 'p';
var g = 'g';
var gemsMap1 = 2;
var gemsMap2 = 9;
var gemsMap3 = 3;
var gemsMap4 = 8;
var collectedGems = 0;
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
[  //2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,
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


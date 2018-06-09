 

window.onload = function(){
  console.log(document.getElementById('map'))
  var canvas = document.getElementById('map');
  var ctx = canvas.getContext('2d');

  var game = new Game({
    rows: canvas.width /20,
    columns: canvas.height /20,
    ctx: ctx,
  });

  game.start();
}


x = undefined;
//mapa 1 
var map1 =
[//2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,7,8,9,2
[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],//rows
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,0,0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x],
[x,x,x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,x]]



function Game(options){this.ctx = options.ctx;};
var movementImput = 'l';
var sizeIndex = 30;
var canvas = document.getElementById('map');

Game.prototype.update = function update(){
this.ctx.clearRect(0, 0, canvas.width, canvas.height);//clean canvas
this._drawSurface(map1);
this._drawPJ(map1);
}

Game.prototype.start = function (){
 this._drawSurface(map1);
 this._drawPJ(map1);
 this._assignEventsToKeys();
}

Game.prototype._drawSurface = function(arr){ 
  for (var columnIndex=0; columnIndex< 16; columnIndex++){
   for(var rowIndex=0; rowIndex<16 ;rowIndex++){
     
     if ((arr[rowIndex])[columnIndex] !== 0){
      
       this.ctx.fillStyle = this.ctx.createPattern(renders.surfaceTexture, 'repeat');
       this.ctx.fillRect(columnIndex * sizeIndex, rowIndex  * sizeIndex, sizeIndex, sizeIndex); }
  }}}


Game.prototype._drawPJ = function(arr){ 
    for (var columnIndex=0; columnIndex<16; columnIndex++){
     for(var rowIndex=0; rowIndex<16;rowIndex++){
       if ((arr[rowIndex])[columnIndex] === 'p'){
         this.ctx.fillStyle = 'blue';
         this.ctx.fillRect(columnIndex * sizeIndex, rowIndex  * sizeIndex, sizeIndex, sizeIndex); }
  }}}


Game.prototype._PJmove = function(arr){
switch (movementImput){
case 'l': 
for (var columnIndex=0; columnIndex<16; columnIndex++){
  for(var rowIndex=0; rowIndex<16;rowIndex++){
    //find the PJ and check if there is space to move left
    if ((arr[rowIndex])[columnIndex] === 'p' && ((arr[rowIndex])[columnIndex - 1] != x )){ 
      arr[rowIndex][columnIndex]= 0 //delete the PJ from current position
      arr[rowIndex][columnIndex - 1]='p' //move PJ to new position
      this._checkGravity(arr); 
      
      this.update(); //paint current map status
      return
    } 
  }} break;


case'r': 
for (var columnIndex=0; columnIndex<16; columnIndex++){
  for(var rowIndex=0; rowIndex<16;rowIndex++){
    if ((arr[rowIndex])[columnIndex] === 'p' && ((arr[rowIndex])[columnIndex + 1] != x )){
      arr[rowIndex][columnIndex]= 0
      arr[rowIndex][columnIndex + 1]='p'
      this._checkGravity(arr);
      
      this.update(); //paint current map status
      return
    } 
  }} break;
  
case 'up': 
for (var columnIndex=0; columnIndex<16; columnIndex++){
for(var rowIndex=0; rowIndex<16;rowIndex++){
  if ((arr[rowIndex])[columnIndex] === 'p' ){ //find PJ 
    this._moveColumnUp(columnIndex, arr); //move row up
    arr[rowIndex-1][columnIndex]='p' // move PJ up
    
    this.update(); //paint current map status
    return}
}}  break;

}}

Game.prototype.goUp = function (){
  movementImput = 'up';
  this._PJmove(map1);
  }

Game.prototype.goLeft = function (){
  
    movementImput = 'l';
    this._PJmove(map1);
  }
  
Game.prototype.goRight = function (){

  movementImput = 'r';
  this._PJmove(map1);
    }
 
Game.prototype._assignEventsToKeys = function(){
  
  document.onkeydown = function (e){
    
    switch (e.keyCode){
      case 38: //arrow up 
      this.goUp();
      
      break;
     
      case 37: //arrow left
      this.goLeft();
      break;
      case 39: //arrow right
      this.goRight();
      break;
  
    }
  }.bind(this);
}


Game.prototype._checkGravity = function(arr){

  for (var columnIndex=0; columnIndex<16; columnIndex++){
     
    for(var rowIndex=0; rowIndex<16;rowIndex++){
      if ((arr[rowIndex])[columnIndex] === 'p' ){
        while ((arr[rowIndex +1 ])[columnIndex] === 0){ 
        arr[rowIndex][columnIndex]= 0
        arr[rowIndex +1][columnIndex]='p';
        
        this.update();
        
      } 
    }};
    

}}


Game.prototype._moveColumnUp = function (column, map){
 
  for (var rowIndex = 0; rowIndex<16 ; rowIndex++){
     if(map[rowIndex][column] === x){
       map[rowIndex][column]= 0
       map[rowIndex-1][column]=x;
       this.update();}}
  
};
/*
function Game(options){
 this.astronaut = undefined; //
 this.rows = options.rows;
 this.columns = options.columns;
 this.ctx = options.ctx;
 this.gems = undefined;
}

Game.prototype._drawBoard = function (){
 for (var columnIndex = 0; columnIndex < this.columns; columnIndex++){
   for (var rowIndex = 0; rowIndex < this.rows; rowIndex++){
   
    this.ctx.fillStyle = this.ctx.createPattern(renders.backgroundTexture, 'repeat');
    this.ctx.fillRect(columnIndex * 20, rowIndex  * 20, 20, 20);
   }
 }
}

Game.prototype._drawSurface = function(arr){ 
for (var columnIndex=0; columnIndex< this.columns; columnIndex++){
 
 for(var rowIndex=0; rowIndex<arr.lenght ;rowIndex++){
   
   if ((arr[rowIndex])[columnIndex] !== 0){
     

    
     this.ctx.fillStyle = this.ctx.createPattern(renders.surfaceTexture, 'repeat');
     this.ctx.fillRect(columnIndex * 20, rowIndex  * 20, 20, 20);

   } 
 }
}
}

Game.prototype.start = function (){
 this._drawBoard();
 this._drawSurface(map1);
 this._drawPJ(PJmap1);
 this._assignEventsToKeys();

}


Game.prototype._moveColumnUp = function (column, map, ){
 
  
  //  for (var rowIndex = 0; rowIndex<20 ; rowIndex++){
  //    console.log("hello2")
     
  //   if(map[rowIndex][column] === x){
  //     console.log("hello")
  //     map[rowIndex][column]= 0
  //     map[rowIndex][column + 1]= 0

  //     map[rowIndex-1][column]=x;
  //     map[rowIndex-1][column +1]=x;
  //     map[rowIndex-2][column]=x; 
  //     map[rowIndex-2][column +1]=x;
  
  //   this._drawSurface(map1);
  //   this._drawPJ(PJmap1);
  
    
  //   }
  // }
  // for (var rowIndex = 0; rowIndex<20 ; rowIndex++){
  //   console.log("hello2")
    
  //  if(PJmap1[rowIndex][column] === x){
  //    console.log("hello")
  //    PJmap1[rowIndex][column]= 0
    

  //    PJmap1[rowIndex-1][column]=x;
     
 
  //  this._drawSurface(map1);
  //  this._drawPJ(PJmap1);}
};
  
  Game.prototype._drawPJ = function(arr){ 
    for (var columnIndex=0; columnIndex<10; columnIndex++){
     
     for(var rowIndex=0; rowIndex<10;rowIndex++){
       if ((arr[rowIndex])[columnIndex] === 'p'){
         
        
         this.ctx.fillStyle = 'blue';
         this.ctx.fillRect(columnIndex * 40, rowIndex  * 40, 40, 40);
         
    
       } 
     }
    }
    }

var movementImput = 'l'

Game.prototype._PJmove = function(arr){
switch (movementImput){
case 'l': 
for (var columnIndex=0; columnIndex<10; columnIndex++){
     
  for(var rowIndex=0; rowIndex<10;rowIndex++){
    if ((arr[rowIndex])[columnIndex] === 'p' && ((arr[rowIndex])[columnIndex - 1] != x )){
      PJmap1[rowIndex][columnIndex]= 0
      PJmap1[rowIndex][columnIndex - 1]='p'
      this._checkGravity(PJmap1);
      this.ctx.fillStyle = this.ctx.createPattern(renders.backgroundTexture, 'repeat');
      this.ctx.fillRect(columnIndex * 40, rowIndex  * 40, 40, 40)
       this._drawPJ(PJmap1);
       return
    } 
  }} break;


case'r': 
for (var columnIndex=0; columnIndex<10; columnIndex++){
     
  for(var rowIndex=0; rowIndex<10;rowIndex++){
    if ((arr[rowIndex])[columnIndex] === 'p' && ((arr[rowIndex])[columnIndex + 1] != x )){
      PJmap1[rowIndex][columnIndex]= 0
      PJmap1[rowIndex][columnIndex + 1]='p'
      this._checkGravity(PJmap1);
      this.ctx.fillStyle = this.ctx.createPattern(renders.backgroundTexture, 'repeat');
      this.ctx.fillRect(columnIndex * 40, rowIndex  * 40, 40, 40)
       this._drawPJ(PJmap1);
       
      return
    } 
  }} break;
  
case 'up': 
for (var columnIndex=0; columnIndex<10; columnIndex++){
for(var rowIndex=0; rowIndex<10;rowIndex++){
  if ((arr[rowIndex])[columnIndex] === 'p' && ((arr[rowIndex -1 ])[columnIndex] != x )){
    this._moveColumnUp(columnIndex, map1);
    PJmap1[rowIndex][columnIndex]= 0
    PJmap1[rowIndex-1][columnIndex]='p'
this.ctx.fillStyle = this.ctx.createPattern(renders.backgroundTexture, 'repeat');
this.ctx.fillRect(columnIndex * 40, rowIndex  * 40, 40, 40)

this._drawSurface(map1);
this._drawPJ(PJmap1);
  }
}
}
break;

this._drawSurface(map1);
this._drawPJ(PJmap1);

}

}



Game.prototype.goUp = function (){
  
  movementImput = 'up';
  this._PJmove(PJmap1);
  
  }

Game.prototype.goLeft = function (){
  
    movementImput = 'l';
    this._PJmove(PJmap1);
  }
  
Game.prototype.goRight = function (){

  movementImput = 'r';
  this._PJmove(PJmap1);
    }
 
Game.prototype._assignEventsToKeys = function(){
  
  document.onkeydown = function (e){
    
    switch (e.keyCode){
      case 38: //arrow up 
      this.goUp();
      
      break;
     
      case 37: //arrow left
      this.goLeft();
      break;
      case 39: //arrow right
      this.goRight();
      break;
  
    }
  }.bind(this);
}


Game.prototype._checkGravity = function(arr){

  for (var columnIndex=0; columnIndex<10; columnIndex++){
     
    for(var rowIndex=0; rowIndex<10;rowIndex++){
      if ((arr[rowIndex])[columnIndex] === 'p' ){
        while ((arr[rowIndex +1 ])[columnIndex] === 0){ 
        PJmap1[rowIndex][columnIndex]= 0
        PJmap1[rowIndex +1][columnIndex]='p'

        this.ctx.fillStyle = this.ctx.createPattern(renders.backgroundTexture, 'repeat');
        this.ctx.fillRect(columnIndex * 40, rowIndex  * 40, 40, 40)
         this._drawPJ(PJmap1);}
        
      } 
    }};
    

}

*/
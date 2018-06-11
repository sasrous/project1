
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
for (var columnIndex=0; columnIndex<20; columnIndex++){
 
 for(var rowIndex=0; rowIndex<20;rowIndex++){
   
   if ((arr[rowIndex])[columnIndex] != 0){
     

    
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


Game.prototype._moveColumnUp = function (column){
  
   for (var rowIndex = this.rows; rowIndex<10 ; rowIndex--){
     var columnIndex = this.columns;
    if(map1[rowIndex][columnIndex] === x){
      map1[rowIndex][columnIndex]= 0
      map1[rowIndex][columnIndex + 1]= 0}
      if(rowIndex>1 )  { map1[rowIndex-1][columnIndex]=x;
        map1[rowIndex-1][columnIndex + 1]=x; }
  this._drawBoard();
    this._drawSurface();
    }
  }


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
  
case 'up': this._moveColumnUp(columnIndex);
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
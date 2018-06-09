
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
for (columnIndex=0; columnIndex<20; columnIndex++){
 
 for(rowIndex=0; rowIndex<20;rowIndex++){
   console.log ((arr[rowIndex])[columnIndex]);
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
}
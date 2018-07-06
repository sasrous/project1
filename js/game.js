function Game(options) {
	this.ctx = options.ctx;
	this.originalMap = copy(mapintro);
	this.map = options.map;
	this.canvas = options.canvas;
	this.movementImput = options.movementImput;
  this.sizeIndex = options.sizeIndex;
  this.x = options.x;
  this.p = options.p;
  this.g = options.g; 
  this.y = options.y;
  this.totalGems = options.totalGems;
  this.collectedGems = options.collectedGems;
  this.mapcount = options.mapcount;
    
}

Game.prototype.start = function() {
	// this.map = this.orignalMap.slice();
	this._drawSurface();
	this._drawPJ();
  this._drawGems();
  this._gemCount();
  this._assignControls();
  this._assignEventsToKeys();
};

Game.prototype._drawSurface = function() {
	for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === this.x) {
				if (rowIndex>0){
					if (this.map[rowIndex-1][columnIndex] != this.x && this.map[rowIndex-1][columnIndex] != this.y ) {
							this.ctx.drawImage(
							renders.surfaceTexture,
							columnIndex * this.sizeIndex,
							rowIndex * this.sizeIndex,
							this.sizeIndex,
							this.sizeIndex
						);
					}
					else {
						this.ctx.drawImage(
						renders.surfaceTexture2,
						columnIndex * this.sizeIndex,
						rowIndex * this.sizeIndex,
						this.sizeIndex,
						this.sizeIndex
						);
					}
				}
				else {
					this.ctx.drawImage(
					renders.surfaceTexture2,
					columnIndex * this.sizeIndex,
					rowIndex * this.sizeIndex,
					this.sizeIndex,
					this.sizeIndex
					);
				}
			}

      else if (this.map[rowIndex][columnIndex] === this.y) {
				this.ctx.drawImage(
					renders.specialTile,
					columnIndex * this.sizeIndex,
					rowIndex * this.sizeIndex,
					this.sizeIndex,
					this.sizeIndex
					);
			}
		}
	}
};

Game.prototype._drawGems = function() {
	for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === this.g) {
				//this.ctx.fillStyle = 'green';
				this.ctx.drawImage(
					renders.gemTexture,
					columnIndex * this.sizeIndex,
					rowIndex * this.sizeIndex,
					this.sizeIndex,
					this.sizeIndex
				);
			}
		}
	}
};



// get coordinATES
// Game.prototype._getXCoordinates() = function() {
// for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
// 	for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
// 		if (this.map[rowIndex][columnIndex] === 'p') {
// 			xcoordinates = 40 * columnIndex;
			
// 		}
// 	}
// }
// return xcoordinates;
// };
// Game.prototype._getYCoordinates() = function() {
// 	for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
// 		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
// 			if (this.map[rowIndex][columnIndex] === 'p') {
// 				ycoordinates = 40 * rowIndex;
				
// 			}
// 		}
// 	}
// 	return ycoordinates;
// 	};





var xcoordinates = 0;
var ycoordinates = 0;
Game.prototype._drawPJ = function() {
	// create sprite 


	for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === 'p') {
				xcoordinates = 40 * columnIndex;
				ycoordinates = 40 * rowIndex;
				if (rowIndex>0){
					if (this.map[rowIndex -1][columnIndex] === this.x || this.map[rowIndex -1][columnIndex] === this.y){
						var crouch = true;
					}
				}

				
				//  this.ctx.drawImage(
				//   renders.PJTexture,
				//  	columnIndex * this.sizeIndex,
				//  	rowIndex * this.sizeIndex,
				//  	this.sizeIndex,
				//  	this.sizeIndex
				//  );
				//  this.ctx.fillRect(columnIndex * this.sizeIndex, rowIndex  * this.sizeIndex, this.sizeIndex, this.sizeIndex);
			}
		};
	};
	var bob = sprite({
		context: this.ctx,
		width: 4000,
		height: 6712,
		image: renders.sprite,
		image2: renders.crouch,
		xcoordinates: xcoordinates,
		ycoordinates: ycoordinates,
	
	});
	
//atempt 1 ;
function sprite (options) {
	var that = {};
	frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;
	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	if (crouch){
	that.image = options.image2;
	}
	else { that.image = options.image;}
	
	
	that.xcoordinates = this.xcoordinates;
	that.ycoordinates = this.ycoordinates;
	that.render = function () {
		// Draw the animation
		that.context.drawImage(
			 that.image,
			 0,
			 0,
			 that.width,
			 that.height,
			 that.xcoordinates,
			 that.ycoordinates -20,
			 34,
			 60);
		};
	return that;
}





bob.render();


};

Game.prototype._PJmove = function() {
	switch (this.movementImput) {
		case 'l':
			for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
				for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
					//find the PJ and check if there is space to move left
					if (this.map[rowIndex][columnIndex] === this.p && this.map[rowIndex][columnIndex - 1] != this.x && this.map[rowIndex][columnIndex - 1] != this.y) {
						this.map[rowIndex][columnIndex] = 0; //delete the PJ from current position
            this.map[rowIndex][columnIndex - 1] = this.p; //move PJ to new position
            
						this._checkGravity();
						this._checkFall();
						this.update(); //paint current map status
						return;
					}
				}
			}
			break;

		case 'r':
			for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
				for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
					if (this.map[rowIndex][columnIndex] === this.p && this.map[rowIndex][columnIndex + 1] != this.x && this.map[rowIndex][columnIndex + 1] != this.y) {
						this.map[rowIndex][columnIndex] = 0;
						this.map[rowIndex][columnIndex + 1] = this.p;
						this._checkGravity();
						this._checkFall();
						this.update(); //paint current map status
						return;
					}
				}
			}
			break;

		case 'up':
			for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
				for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
          
					if (this.map[rowIndex][columnIndex] === this.p) {
            if (this.map[0][columnIndex]=== this.g) {
              setTimeout(function() {
              $(".dead-screen").removeClass("hidden");
              this._reset();
            }.bind(this), 500);} //checks if any gem goes off map 

            if (this.map[0][columnIndex] === this.x || this.map[0][columnIndex] === this.y  || this.map[0][columnIndex] === this.g ){
              this.map[0][columnIndex] = 0;
            }
            if (rowIndex === 0){
              this._moveColumnUp(columnIndex);
              this.update();
              setTimeout(function() {
                $(".dead-screen").removeClass("hidden");
                this._reset();
              }.bind(this), 500);
            }
            else if (this.map[rowIndex +1][columnIndex] === this.x) { // checks if the PJ is in a "normal" tile
              this._moveColumnUp(columnIndex); //move row up
              this.map[rowIndex - 1][columnIndex] = this.p; // move PJ up
              this.update(); //paint current map status
              return;
            }
					}
				}
			}
      break;

	case 'down':
		for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
			for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
          
				if (this.map[rowIndex][columnIndex] === this.p) {
          if ((this.map[14][columnIndex] === this.g || this.map[14][columnIndex] === this.y) && this.map[13][columnIndex] === this.p ) {
            setTimeout(function() {
            $(".dead-screen").removeClass("hidden");
            this._reset();
          }.bind(this), 500);
          return}

          if (this.map[rowIndex + 1][columnIndex] === this.y) {
            if (this.map[15][columnIndex] === this.x || this.map[15][columnIndex] === this.y || this.map[0][columnIndex] === this.g ){
              this.map[15][columnIndex] = 0; // delete floor or gems if they go off map 
            }
            if (rowIndex === 14){
              this._moveColumnDown(columnIndex);
              this.map[rowIndex][columnIndex] = 0 // delete PJ 
              this.map[rowIndex +1][columnIndex] = this.p; // move PJ down
              this.update();
              setTimeout(function() {
                $(".dead-screen").removeClass("hidden");
                this._reset();
              }.bind(this), 500);
            }
            else {
              this.map[rowIndex][columnIndex] = 0 // delete PJ 
              this._moveColumnDown(columnIndex); //move row down
              this.map[rowIndex +1][columnIndex] = this.p; // move PJ down
              this.update(); //paint current map status
              return;
            }
          }
        }
			}
		}
		break;
	}
};

Game.prototype.goUp = function() {
  if (stringCount === 8 && finished === true ){ 
    finished = false
    $("#text1").empty();   
    displayOnScreen("#text1", textArray[stringCount], 0, textspeed);   
  }
  
	this.movementImput = 'up';
	this._PJmove();
};

Game.prototype.goDown = function() {
	this.movementImput = 'down';
	this._PJmove();
};

Game.prototype.goLeft = function() {
	this.movementImput = 'l';
	this._PJmove();
};

Game.prototype.goRight = function() {
	this.movementImput = 'r';
	this._PJmove();
};

Game.prototype._assignEventsToKeys = function() {
  
	document.onkeydown = function(e) {
  if (block === false){
		switch (e.keyCode) {
      case 40: //arrow down
				this.goDown();
        break;
      
      case 38: //arrow up
        if (blockUp === false){
				this.goUp();}
        break;

			case 37: //arrow left
				this.goLeft();
				break;

			case 39: //arrow right
				this.goRight();
        break;

      case 82: //R key
				this._reset();
			  break;
    }
  }
  }.bind(this);

};

Game.prototype._checkGravity = function() {
	for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === this.p) {
        if (rowIndex +1 === 16){
          return
        }
				else {while (this.map[rowIndex + 1][columnIndex] === 0 || this.map[rowIndex + 1][columnIndex] === this.g) {
					this.map[rowIndex][columnIndex] = 0;
					this.map[rowIndex + 1][columnIndex] = this.p;
					//this.update();
          this._checkFall();
        }
				}
			}
		}
	}
};
Game.prototype._checkFall = function() {
	for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === this.p) {
				if (rowIndex + 1 === 16) {
					// console.log('you died');
					setTimeout(function() {
            $(".dead-screen").removeClass("hidden");
            this._reset();
            
          }.bind(this), 500);
          
					
				}
			}
		}
	}
};

Game.prototype._reset = function() {
  this.map = copy(this.originalMap);
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clean canvas
	this._drawSurface();
	this._drawPJ();
  this._drawGems();
  setTimeout(function() {
    $(".dead-screen").addClass("hidden");
    
  }.bind(this), 1000);
  this._assignControls();
	this.start();
};

Game.prototype._moveColumnUp = function(column) {
	for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
		if (this.map[rowIndex][column] === this.g) {
			this.map[rowIndex][column] = 0;
			this.map[rowIndex - 1][column] = this.g;
      this.update();
    }
    else if (this.map[rowIndex][column] === this.y) {
			this.map[rowIndex][column] = 0;
			this.map[rowIndex - 1][column] = this.y;
			this.update();
    }
    else if (this.map[rowIndex][column] === this.x) {
			this.map[rowIndex][column] = 0;
			this.map[rowIndex - 1][column] = this.x;
			this.update();
		}
	}
};
Game.prototype._moveColumnDown = function(column) {
	for (var rowIndex = 15; rowIndex >= 0; rowIndex--) {
    
		if (this.map[rowIndex][column] === this.g) {
			this.map[rowIndex][column] = 0;
			this.map[rowIndex + 1][column] = this.g;
      this.update();
    }
    else if (this.map[rowIndex][column] === this.y) {
			this.map[rowIndex][column] = 0;
			this.map[rowIndex + 1][column] = this.y;
			this.update();
    }
     else if (this.map[rowIndex][column] === this.x) {
			this.map[rowIndex][column] = 0;
			this.map[rowIndex + 1][column] = this.x;
			this.update();
		}
	}
};

Game.prototype._gemCount = function(){
  var count = 0
  for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === this.g) {
        count++
      }
    }
  }
  this.collectedGems = this.totalGems - count;
  if (count === 1){firstGemFound = true; narrator(textArray)}
  $('div.gem-count').html(`<p>${this.collectedGems}/${this.totalGems}</p>`);

  if (count === 0) {
    this._nextstage();

  }
}

Game.prototype._nextstage = function() {
  if (this.mapcount === 1) {
    this._loadStage(map1, gemsMap1) 
  } 
  else if (this.mapcount === 2 ) {
    this._loadStage(map2, gemsMap2) 
  } 
  else if (this.mapcount === 3) {
    this._loadStage(map3, gemsMap3)
  }
  else if (this.mapcount === 4) {
    this._loadStage(map4, gemsMap4)
  }
  else if (this.mapcount === 5) {
		trigger = true;
		narrator(textArray)
    this._loadStage(map5, gemsMap5)
  }
}

Game.prototype._loadStage = function(map, gemsmap) {
  this.map = copy(map);
  this.originalMap = copy(map);
  this.totalGems = gemsmap;
  this.mapcount++;
  this.update();
}
Game.prototype._changeStage = function(map, gemsmap, lvl) {
  this.map = copy(map);
  this.originalMap = copy(map);
  this.totalGems = gemsmap;
  this.mapcount = lvl+1;
  this.update();
}

Game.prototype._assignControls = function(){
  $( "#menubtn" ).click(function() {
    $( "div.lvl-menu" ).toggleClass( "hidden" );
});


  $( "#lvl1" ).click(function() { 
    this._changeStage(map1, gemsMap1, 1);
    $( "div.lvl-menu" ).toggleClass( "hidden" );
  }.bind(this));
  $( "#lvl2" ).click(function() {
    this._changeStage(map2, gemsMap2, 2);
    $( "div.lvl-menu" ).toggleClass( "hidden" );
  }.bind(this));
  $( "#lvl3" ).click(function() {
    this._changeStage(map3, gemsMap3, 3);
    $( "div.lvl-menu" ).toggleClass( "hidden" );
  }.bind(this));
  $( "#lvl4" ).click(function() {
    this._changeStage(map4, gemsMap4, 4);
    $( "div.lvl-menu" ).toggleClass( "hidden" );
  }.bind(this));
  $( "#lvl5" ).click(function() {
    this._changeStage(map5, gemsMap5, 5);
		$( "div.lvl-menu" ).toggleClass( "hidden" );
		trigger = true;
		narrator(textArray)
  }.bind(this));
  
}





Game.prototype.update = function update() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clean canvas
  this._drawPJ();
	this._drawSurface();
  this._drawGems();
  this._gemCount();
};



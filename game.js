function Game(options) {
	this.ctx = options.ctx;
	this.originalMap = copy(map1);
	this.map = options.map;
	this.canvas = options.canvas;
	this.movementImput = options.movementImput;
  this.sizeIndex = options.sizeIndex;
  this.x = options.x;
  this.p = options.p;
  this.g = options.g; 
  this.totalGems = options.totalGems;
  this.collectedGems = options.collectedGems;
  this.mapcount = options.mapcount;
    
}

Game.prototype.update = function update() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clean canvas
	this._drawSurface();
	this._drawPJ();
  this._drawGems();
  this._gemCount();
  
};

Game.prototype.start = function() {
	// this.map = this.orignalMap.slice();
	this._drawSurface();
	this._drawPJ();
	this._assignEventsToKeys();
  this._drawGems();
  this._gemCount();
};

Game.prototype._drawSurface = function() {
	for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === this.x) {
				this.ctx.fillStyle = this.ctx.createPattern(renders.surfaceTexture, 'repeat');
				this.ctx.fillRect(
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

Game.prototype._drawPJ = function() {
	for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === this.p) {
				//this.ctx.fillStyle = 'blue';
				this.ctx.drawImage(
					renders.PJTexture,
					columnIndex * this.sizeIndex,
					rowIndex * this.sizeIndex,
					this.sizeIndex,
					this.sizeIndex
				);
				// this.ctx.fillRect(columnIndex * this.sizeIndex, rowIndex  * this.sizeIndex, this.sizeIndex, this.sizeIndex);
			}
		}
	}
};

Game.prototype._PJmove = function() {
	switch (this.movementImput) {
		case 'l':
			for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
				for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
					//find the PJ and check if there is space to move left
					if (this.map[rowIndex][columnIndex] === this.p && this.map[rowIndex][columnIndex - 1] != this.x) {
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
					if (this.map[rowIndex][columnIndex] === this.p && this.map[rowIndex][columnIndex + 1] != this.x) {
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
            if (this.map[0][columnIndex] === this.x){
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
            else {
              this._moveColumnUp(columnIndex); //move row up
              this.map[rowIndex - 1][columnIndex] = this.p; // move PJ up
              this.update(); //paint current map status
              return;
            }
					}
				}
			}
			break;
	}
};

Game.prototype.goUp = function() {
	this.movementImput = 'up';
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
		switch (e.keyCode) {
			case 38: //arrow up
				this.goUp();
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
					this.update();
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
  
	this.start();
};

Game.prototype._moveColumnUp = function(column) {
	for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
		if (this.map[rowIndex][column] === this.g) {
			this.map[rowIndex][column] = 0;
			this.map[rowIndex - 1][column] = this.g;
			this.update();
		} else if (this.map[rowIndex][column] === this.x) {
			this.map[rowIndex][column] = 0;
			this.map[rowIndex - 1][column] = this.x;
			this.update();
		}
	}
};

Game.prototype._gemCount = function(){
  var count = 0
  for (var columnIndex = 0; columnIndex < 16; columnIndex++) {
		for (var rowIndex = 0; rowIndex < 16; rowIndex++) {
			if (this.map[rowIndex][columnIndex] === this.g) {
        count++;
      }
    }
  }
  this.collectedGems = this.totalGems - count;
  $('div.gem-count').html(`<p>${this.collectedGems}/${this.totalGems}</p>`);
  if (count === 0) {
    this._nextstage();
    console.log("next stage");
    
    return true;
  }
}

Game.prototype._nextstage = function() {
  if (this.mapcount === 1) {
    this.map = copy(map2);
    this.originalMap = copy(map2);
    this.totalGems = gemsMap2;
    this.mapcount = 2;
    this.update();
    console.log(this.map);
  } 
}

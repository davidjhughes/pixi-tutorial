
let Layer = function(texture, width, height, xPosition, yPosition, xDelta){
  PIXI.extras.TilingSprite.call(this, texture, 512, 256);
  this.position.set(xPosition,yPosition);
  this.tilePosition.set(0,0);
  this.viewportX = 0;
  this.xDelta = xDelta
}

Layer.prototype = Object.create(PIXI.extras.TilingSprite.prototype)

Layer.prototype.setViewportX = function(newViewportX){
  var distanceTravelled = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x += (distanceTravelled * this.xDelta);
}
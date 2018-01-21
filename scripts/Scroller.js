let Scroller = function(stage){
  let texture = PIXI.Texture.fromImage("/assets/images/bg-far.png");
  this.far = new Layer(texture, 512, 256, 0, 0, -0.128);
  stage.addChild(this.far)

  texture = PIXI.Texture.fromImage("/assets/images/bg-mid.png");
  this.mid = new Layer(texture, 512, 256, 0, 128, -0.64);
  stage.addChild(this.mid);

  this.viewportX = 0;

}

Scroller.prototype.setViewportX = function(viewportX){
  this.viewportX = viewportX
  this.far.setViewportX(viewportX);
  this.mid.setViewportX(viewportX);
}

Scroller.prototype.getViewportX = function(){
  return this.viewportX;
}

Scroller.prototype.moveViewportXBy = function(units) {
  var newViewportX = this.viewportX + units;
  this.setViewportX(newViewportX);
};
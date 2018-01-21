let Main = function(){
  this.stage = new PIXI.Container();
  this.renderer = PIXI.autoDetectRenderer(
    512,
    384,
    {view:document.getElementById("game-canvas")}
  ); 

  this.loadSpriteSheet();
}

Main.prototype.update = function(){
  this.scroller.moveViewportXBy(Main.SCROLL_SPEED);

  this.renderer.render(this.stage);

  requestAnimationFrame(this.update.bind(this));
}

Main.prototype.loadSpriteSheet = function(){
  let loader = PIXI.loader;
  loader.add("wall", "../assets/images/wall/wall.json");
  loader.add("bg-mid", "../assets/images/bg-mid.png");
  loader.add("bg-far", "../assets/images/bg-far.png");
  loader.once("complete", this.spriteSheetLoaded.bind(this));
  loader.load();
}

Main.prototype.spriteSheetLoaded = function(){
  this.scroller = new Scroller(this.stage); 
  requestAnimationFrame(this.update.bind(this));s
}

// CONST
Main.SCROLL_SPEED = 5;





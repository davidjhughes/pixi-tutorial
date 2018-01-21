let WallSpritesPool = function(){
    this.createWindows();
    this.createDecorations();
    this.createFrontEdges();
    this.createBackEdges();
    this.createSteps();
}

WallSpritesPool.prototype.borrowStep = function(){
    return this.steps.shift();
}

WallSpritesPool.prototype.returnStep = function(sprite){
    this.steps.push(sprite);
}

WallSpritesPool.prototype.createSteps = function(){
    this.steps = [];
    this.addSprites(2, "step_01", this.steps, 1, 0, 0.25);    
}

WallSpritesPool.prototype.borrowBackEdge = function(){
    return this.backEdges.shift();
}

WallSpritesPool.prototype.returnBackEdge = function(sprite){
    this.backEdges.push(sprite);
}

WallSpritesPool.prototype.createBackEdges = function(){
    this.backEdges = [];
    this.addSprites(2, "edge_01", this.backEdges, -1, 1);
    this.addSprites(2, "edge_02", this.backEdges, -1, 1);

    this.shuffle(this.backEdges)
}

WallSpritesPool.prototype.borrowFrontEdge = function(){
    return this.frontEdges.shift();
}

WallSpritesPool.prototype.returnFrontEdge = function(sprite){
    this.frontEdges.push(sprite);
}

WallSpritesPool.prototype.createFrontEdges = function(){
    this.frontEdges = [];
    this.addSprites(2, "edge_01", this.frontEdges);
    this.addSprites(2, "edge_02", this.frontEdges);

    this.shuffle(this.frontEdges)
}

WallSpritesPool.prototype.borrowDecoration = function(){
    return this.decorations.shift();
}

WallSpritesPool.prototype.returnDecoration = function(sprite){
    this.decorations.push(sprite);
}

WallSpritesPool.prototype.createDecorations = function(){
    this.decorations = [];
    this.addSprites(6, "decoration_01", this.decorations);
    this.addSprites(6, "decoration_02", this.decorations);
    this.addSprites(6, "decoration_03", this.decorations);

    this.shuffle(this.decorations)
}

WallSpritesPool.prototype.borrowWindow = function(){
    return this.windows.shift();
}

WallSpritesPool.prototype.returnWindow = function(sprite){
    this.windows.push(sprite);
}

WallSpritesPool.prototype.createWindows = function(){
    this.windows = [];
    this.addSprites(6, "window_01", this.windows);
    this.addSprites(6, "window_02", this.windows);

    this.shuffle(this.windows);
}

WallSpritesPool.prototype.addSprites = function(amount, frameId, array, xScale = 1, xAnchor = 0, yAnchor = 0){
    for(var i = 0; i<amount; i++){
        var sprite = PIXI.Sprite.fromFrame(frameId);
        sprite.anchor.x = xAnchor;
        sprite.scale.x = xScale;
        sprite.anchor.y = yAnchor
        array.push(sprite);
    }
}

WallSpritesPool.prototype.shuffle = function(array){
    var len = array.length;
    var shuffles = len * 3;

    for(var i=0; i<shuffles; i++){
        var wallSlice = array.pop();
        var pos = Math.floor(Math.random() * (len - 1));
        array.splice(pos, 0, wallSlice)
    }
}
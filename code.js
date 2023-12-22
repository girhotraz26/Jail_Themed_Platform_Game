var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b55fbf5f-0996-491d-aedb-03deca32813e","8f030150-ee45-4eaa-96bf-a033d5374554","1dfbdf80-b70b-40e6-8fe0-083b88f16f3b","254d349d-64c8-4892-84b6-3aed3e1696c9","311070fe-50ab-43bc-a4d0-7e0a2c02c02b"],"propsByKey":{"b55fbf5f-0996-491d-aedb-03deca32813e":{"name":"cuffs","sourceUrl":"assets/v3/animations/cDw47LahN-t3fn5h1ucTPF_HPiJK-Tz5fzOrLlDtAXQ/b55fbf5f-0996-491d-aedb-03deca32813e.png","frameSize":{"x":644,"y":291},"frameCount":1,"looping":true,"frameDelay":4,"version":"0rcVZRgviCOrCew.4w6CcZt3e2g1sshM","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":644,"y":291},"rootRelativePath":"assets/v3/animations/cDw47LahN-t3fn5h1ucTPF_HPiJK-Tz5fzOrLlDtAXQ/b55fbf5f-0996-491d-aedb-03deca32813e.png"},"8f030150-ee45-4eaa-96bf-a033d5374554":{"name":"key","sourceUrl":"assets/api/v1/animation-library/gamelab/kKtNcK6bm.wN8B0wT6OBWe1NE6j75hOo/category_household_objects/key.png","frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":2,"version":"kKtNcK6bm.wN8B0wT6OBWe1NE6j75hOo","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kKtNcK6bm.wN8B0wT6OBWe1NE6j75hOo/category_household_objects/key.png"},"1dfbdf80-b70b-40e6-8fe0-083b88f16f3b":{"name":"timmy_right","sourceUrl":null,"frameSize":{"x":242,"y":339},"frameCount":1,"looping":true,"frameDelay":12,"version":"OZPtDaS2DdsXaCdVo8MhjqY80atSjHwY","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":339},"rootRelativePath":"assets/1dfbdf80-b70b-40e6-8fe0-083b88f16f3b.png"},"254d349d-64c8-4892-84b6-3aed3e1696c9":{"name":"timmy_left","sourceUrl":null,"frameSize":{"x":242,"y":339},"frameCount":1,"looping":true,"frameDelay":12,"version":"nNoWWqEU5v.BnGI_8OWVca4nmHgIz.Xb","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":339},"rootRelativePath":"assets/254d349d-64c8-4892-84b6-3aed3e1696c9.png"},"311070fe-50ab-43bc-a4d0-7e0a2c02c02b":{"name":"germ","sourceUrl":"assets/api/v1/animation-library/gamelab/1kJsoiQ1LHup8zJYOj7ZEVkYdrX5234a/category_germs/gameplaywacky_11.png","frameSize":{"x":400,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"1kJsoiQ1LHup8zJYOj7ZEVkYdrX5234a","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1kJsoiQ1LHup8zJYOj7ZEVkYdrX5234a/category_germs/gameplaywacky_11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Variables
var score=0;
var lives=3;

var timmy = createSprite(randomNumber(30,370), -20);
timmy.setAnimation("timmy_right");
timmy.scale = 0.3;
timmy.velocityY=2;

var bar1 = createSprite(randomNumber(30,370), -20);
bar1.setAnimation("cuffs");
bar1.scale = 0.2;
bar1.velocityY = 2;
bar1.setCollider("rectangle", 0,0,400,75);




var bar2 = createSprite(randomNumber(30,370), -20);
bar2.setAnimation("cuffs");
bar2.scale = 0.2;
bar2.velocityY = 1;
bar2.setCollider("rectangle", 0,0,400,75);


var key1 = createSprite(randomNumber(30,370), -20);
key1.setAnimation("key");
key1.scale = 0.5;
key1.velocityY = 2;

var key2 = createSprite(randomNumber(30,370), -20);
key2.setAnimation("key");
key2.scale = 0.5;
key2.velocityY = 2;

var key3 = createSprite(randomNumber(30,370), -20);
key3.setAnimation("key");
key3.scale = 0.5;
key3.velocityY = 2;

var germ1 = createSprite(randomNumber(30,370), -20);
germ1.setAnimation("germ");
germ1.scale = 0.1;
germ1.velocityY = 2;

var germ2 = createSprite(randomNumber(30,370), -20);
germ2.setAnimation("germ");
germ2.scale = 0.1;
germ2.velocityY = 2;

// Create Sprites

function draw() {
  if(timmy.y>450){
    lives--;
    timmy.y=200;
    timmy.velocityY = 0;
  }
  
  
  
  // draw the background
  if (score>=10){
      background1();
  }
  
  else { background2();}
  
  
  
  
  
  // update the sprites
 createEdgeSprites();
  loopPlatforms();
  hideAll();
  loopKeys();
  drawSprites();
  showScore();
  controlPlayer();
  playerLands();
  collectItems();
  sideWalls ();

  lowerPlayer();
  if (lives<=0){
    background("black");
    text("you lose.", 150,200);
    
  }

}
// Functions
function background1() {
  
  background("darkBlue");
  noStroke();
  fill("yellow");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(340, 50, 60, 60);
  fill("darkBlue");
  ellipse(320, 30, 60, 60);
  fill("darkGreen");
  rect(0, 300, 400, 100);
  fill("white");
  stroke("white");
  textSize(30);
  
  text("You Win!", 150, 200);
  
}

function loopPlatforms(){
  if (bar1.y>420){
    bar1.y=-30;
    bar1.velocityY= randomNumber(1,3);
    bar1.x = randomNumber(30,370);
  }
  
  if (bar2.y>420){
    bar2.y=-30;
    bar2.x = randomNumber(30,370);
    bar2.velocityY= randomNumber(1,3);

  }
}

function loopKeys(){
  if (key1.y>420){
    key1.y=-30;
    key1.velocityY= randomNumber(2,5);
    key1.x = randomNumber(30,370);
  }
  if (key2.y>420){
    key2.y=-30;
    key2.velocityY= randomNumber(2,5);
    key2.x = randomNumber(30,370);
  }
  if (key3.y>420){
    key3.y=-30;
    key3.velocityY= randomNumber(2,5);
    key3.x = randomNumber(30,370);
  }
  

  }



function background2() {
  background("lightgray");
  var cell = 1;
  stroke("grey");
  strokeWeight(5);
  while (cell<10){
    line(0+cell*40, 0, 0+cell*40, 400);
    cell++;
  }
 stroke("black");
  fill("black");
    
  strokeWeight(1);
  textSize(30);
  
  text("Escape Jail!", 125, 100);
  
  
}
function controlPlayer(){
  if (keyDown("right")) {
    timmy.velocityX=2;
    timmy.setAnimation("timmy_right");
    
  } else {
    if (keyDown("left")) {
      timmy.velocityX=-2;
timmy.setAnimation("timmy_left");
    } else {timmy.velocityX=0;
    }
    
    if (keyDown("down")) {
    timmy.velocityY=2;
  } else {
    if (keyDown("up")) {
      timmy.velocityY=-2;

    
}
      
    }
  }
}

function playerLands(){
  if (timmy.isTouching(bar1)){
    timmy.collide(bar1);
  }
  if (timmy.isTouching(bar2)){
    timmy.collide(bar2);
  }
}
  
  function lowerPlayer(){
  timmy.velocityY = timmy.velocityY+0.2;
    
  }
  
function collectItems(){
  if (timmy.isTouching(key1)){
    key1.y=-30;
    key1.velocityY= randomNumber(2,5);
    key1.x = randomNumber(30,370);
    score++;
  }
  if (timmy.isTouching(key2)){
    key2.y=-30;
    key2.velocityY= randomNumber(2,5);
    key2.x = randomNumber(30,370);
    score++;
  }
  if (timmy.isTouching(key3)){
    key3.y=-30;
    key3.velocityY= randomNumber(2,5);
    key3.x = randomNumber(30,370);
    score++;
  }
  
  if (timmy.isTouching(germ1)){
    germ1.y=-30;
    germ1.velocityY= randomNumber(2,5);
    germ1.x = randomNumber(30,370);
    score--;
  }
  if (timmy.isTouching(germ2)){
    germ2.y=-30;
    germ2.velocityY= randomNumber(2,5);
    germ2.x = randomNumber(30,370);
    score--;
  }
}
  
function hideAll(){
  if (score>=10){
    key1.visible = false;
    key2.visible = false;
    key3.visible = false;
    bar1.visible = false;
    bar2.visible = false;
    score = 10;
    timmy.y = 250;
  }
}
function sideWalls (){
  if (timmy.isTouching(leftEdge)){
  timmy.bounceOff(leftEdge);}
  if (timmy.isTouching(rightEdge)){
  timmy.bounceOff(rightEdge);}
}


function showScore() {
  fill("white");
  textSize(20);
  text( "Score:"+ score,10, 10, 80, 20);
  fill("white");
  textSize(20);
  text( "Lives:"+ lives,10, 30, 80, 20);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

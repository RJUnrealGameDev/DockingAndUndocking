
var backGround, iss, shipCapsule;

var backGroundImg, issImg, shipCapsuleImg;

function preload(){
  backGroundImg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  shipCapsuleImg = loadImage("spacecraft1.png");
}

function setup() {
  createCanvas(1136, 640);

  backGround = createSprite(568, 320, 1136, 640);
  shipCapsule = createSprite(505, 450, 50, 50);
  iss = createSprite(568, 275, 50, 50);

  backGround.addImage("Background", backGroundImg);
  shipCapsule.addImage("Capsule", shipCapsuleImg);
  iss.addImage("ISS", issImg);

  backGround.scale = 1.9;
  shipCapsule.scale = 0.25;
}

function draw() {
  background("black");
  drawSprites();

  //Controls
  if(keyWentDown(37)){
    shipCapsule.velocityX = -2;
    shipCapsule.velocityY = 0;
  }
  else if(keyWentDown(39)){
    shipCapsule.velocityX = 2;
    shipCapsule.velocityY = 0;
  }
  else if(keyWentDown(38)){
    shipCapsule.velocityY = -2;
    shipCapsule.velocityX = 0
  }
  else if(keyWentDown(40)){
    shipCapsule.velocityY = 2;
    shipCapsule.velocityX = 0;
  }
  else if(keyWentUp(37)){
    shipCapsule.velocityX = 0;
    shipCapsule.velocityY = 0;
  }
  else if(keyWentUp(39)){
    shipCapsule.velocityX = 0;
    shipCapsule.velocityY = 0;
  }
  else if(keyWentUp(38)){
    shipCapsule.velocityY = 0;
    shipCapsule.velocityX = 0
  }
  else if(keyWentUp(40)){
    shipCapsule.velocityY = 0;
    shipCapsule.velocityX = 0;
    
  }

  // Check wheather the capsule is docked or not
  if(shipCapsule.x > 490 && shipCapsule.x < 510 && shipCapsule.y > 350 && shipCapsule.y < 370){
    shipCapsule.x = 501;
    shipCapsule.y = 360;

  }
}

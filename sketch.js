var sea
var shipImg1
var sea1
var ship
function preload(){

 sea = loadImage("sea.png");
 shipImg1 = loadImage("ship-1.png");

}

function setup(){
  createCanvas(400,400);
 
 

  sea1 = createSprite (200,200);
  sea1.addImage(sea);
  sea1.velocityX = 4;
  ship = createSprite (200,200);
  ship.addImage(shipImg1);
  ship.scale = 0.5
 
}
  
function draw() {
  
  background("0,0,250");
  drawSprites()


 }

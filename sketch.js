var speed,bullet,weight,wall,thickness

function setup() {
  createCanvas(1600,800);
  thickness=random(20,80)
  bullet=createSprite(50, 400, 50, 50);
  wall=createSprite(1500, 400, thickness, 100);
speed=random(50,90)
weight=random(400,1500)
bullet.velocityX=speed
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<bullet.width) {
bullet.velocityX=0
var D = 0.5*weight*speed*speed/(thickness*thickness*thickness)
if(D>10){
  bullet.shapeColor="red"
}

if(D<10){
  bullet.shapeColor="green"
}
  }
  drawSprites();
}
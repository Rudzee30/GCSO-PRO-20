var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="White";
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  deformation=0.5*weight*speed*speed/22500;
  
}

function draw() {
  
  background("Black");  
  if(wall.x - car.x < wall.width/2 +car.width/2
    && deformation<100){
      car.velocityX=0;
      car.shapeColor="Green";
      
  }
  if(wall.x - car.x < wall.width/2 +car.width/2
    && deformation<180 && deformation>100 || deformation===100){
      car.velocityX=0;
      car.shapeColor="Yellow";
      
  }
  if(wall.x - car.x < wall.width/2 +car.width/2
    && deformation>180 || deformation===180){
      car.velocityX=0;
      car.shapeColor="Red";
      
  }

  drawSprites();
}
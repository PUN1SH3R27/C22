var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(800,400);
 bullet= createSprite(50, 200, 10, 30);
 speed= random(223,321)
 weight= random(30,52)
 thickness= random(22, 83)
 wall= createSprite(1200,height/2,thickness, height/2);
 wall.shapeColor("white")
 car.velocityX= speed;

}

function draw() {
  background("black");  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX=0
   var damage=0.5* weight *speed *speed /(thickness* thickness *thickness); 


if(damage>10)
{ 
 wall.shapeColor("red"); 
} 
if(damage<10 ) { 
  wall.shapeColor("green"); 


}
  drawSprites(); 
}

function hasCollided(lbullet,lwall){
 
bulletRightEdge=lbullet.x +lbullet.width; wallLeftEdge=lwall.x; 
    if (bulletRightEdge>= wallLeftEdge) { 
      return true
    } 
  }
    
    return false; 
    


}

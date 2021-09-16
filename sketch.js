
var trex ,trex_running;
var ground;
var groundImage;
function preload()
{
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")

}

function setup()
{
  createCanvas(600,200)
  
  //create a trex sprite
  trex= createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //positioning the trex and resizing the trex
  trex.x=50;
  trex.scale=0.5;

  //making ground
 ground= createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.width /2;

  
  edges= createEdgeSprites();
  
}

function draw()
{
background("white");

//giving velocities
ground.velocityX = -2
console.log(trex.y);
  
//resetting ground 
if (ground.x < 0)
{
  ground.x = ground.width/2;
}

 //making the trex jump 
if (keyDown("space"))
{
 trex.velocityY = -10;

}

//adding the gravity for the trex
trex.velocityY = trex.velocityY + 0.8;
  

//to collide the trex with edges 
trex.collide( ground   );



drawSprites();

}

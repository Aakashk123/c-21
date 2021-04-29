var fixedRectangle,movingRectangle;
var box1;

function setup() {
  createCanvas(1200,800);
  fixedRectangle=createSprite(600,400,50,80);
  fixedRectangle.shapeColor="green";
  movingRectangle=createSprite(700,100,80,30);
  movingRectangle.shapeColor="green";
  box1=createSprite(300,100,50,50);
  box1.shapeColor="blue";
  movingRectangle.velocityX=5;
  box1.velocityX=-5;
}

function draw() {
  background(0); 

  //movingRectangle.x=World.mouseX;
  //movingRectangle.y=World.mouseY;

   console.log('distance',movingRectangle.x-fixedRectangle.x);

   
//  if(isTouching(movingRectangle,box1))
//   {
//     box1.shapeColor="red";
//     movingRectangle.shapeColor="red";
  


//   }
//   else{ 
//     box1.shapeColor="blue";
//     movingRectangle.shapeColor="green";

//   }
bounceOff(movingRectangle,box1);
  drawSprites(); 
  
}


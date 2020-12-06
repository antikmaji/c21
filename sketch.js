function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(100, 200, 50, 100);
 movingRect=createSprite(300,200,100,50);

 rect1=createSprite(800,400,40,40);
  rect1.velocityX=-3;

 rect2=createSprite(400,400,40,40);
  rect2.velocityX=3;

 fixedRect.shapeColor="green";
 movingRect.shapeColor="green";

}

function draw() {
  background("black"); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect,fixedRect)===true){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="blue";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
   }
  
bounceOff(rect1,rect2);


  drawSprites();
}


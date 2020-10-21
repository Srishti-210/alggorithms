var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1=createSprite(200,100,50,50);
  gameobject1.shapeColor="yellow";
  gameobject1.debug=true;
  gameobject2=createSprite(270,100,50,50);
  gameobject2.shapeColor="yellow";
  gameobject2.debug=true;
  gameobject3=createSprite(310,100,50,50);
  gameobject3.shapeColor="yellow";
  gameobject3.debug=true;
  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="yellow";
  gameobject4.debug=true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
 if (isTouching(movingRect,gameobject2)){

  movingRect.shapeColor="green";
  gameobject2.shapeColor="green";

 }

 else {

  movingRect.shapeColor="red";
  gameobject2.shapeColor="red";

 }

  drawSprites();
}















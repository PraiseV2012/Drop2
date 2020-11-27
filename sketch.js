var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var static
var box1,box2,box3
var box1Body,box2Body,box3Body

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);






	box1 = createSprite(width-400,height - 80,20,100)
	box2 = createSprite(width-600,height - 80,20,100)
	box3 = createSprite(width-500,height- 40,200,20)

	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2 , 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1Body = Bodies.rectangle(width-400,height - 80,20,100)
	 World.add(world, box1Body)

	 box2Body = Bodies.rectangle(width-600,height - 80,20,100)
	 World.add(world,box2Body)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed()
  


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  

  
  drawSprites();
 
}

function keyPressed() {
 if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false);
}



}





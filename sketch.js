var dustbin,ball;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite (width/2, 650, 800,10) ;
	groundSprite.shapeColor=color("yellow")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball= new Ball(230,630)
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	dustbin = new Dustbin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  text(mouseX +","+mouseY,700,100);
  textSize(20);

  dustbin.display();
  ball.display();
  
  drawSprites(); 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.ball,ball.ball.position,{x:40,y:40});
	}

}





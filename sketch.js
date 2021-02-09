
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, bin;
var floor;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	ball = new Ball(200, 350);
	bin = new Box(600, 310, 90, 120);
	bin.isStatic = true;
	floor = new Box(400, 370, 800, 10);
	floor.isStatic = true;
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  bin.display();
  floor.display();
  Matter.Body.applyForce(ball, ball.position, {x:85,y:-85});
  drawSprites();
 if(fall === 1){
	 Matter.Body.applyForce(ball, ball.position, {x:85,y:-85});
 }
}
function keyPressed(){
	if(keyPressed("L")){
		fall = 1;
	}
}



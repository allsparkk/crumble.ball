const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 10);
  paper2 = new PP(50, 600, 10);
  paper3 = new P(70, 600, 10);


  ground = new Ground(400, 680, 800, 20);
  
  leftSide = new Dustbin(550, 620, 20, 100);
  bottom = new Dustbin(610, 660, 100, 20);
  rightSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("blue");
  
  Engine.update(engine);

  paper.display();
  paper2.display();
  paper3.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
  
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper2.body, paper2.body.position, {x:15, y: -15})
  }

  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper3.body, paper3.body.position, {x:15, y: -15})
  }
}
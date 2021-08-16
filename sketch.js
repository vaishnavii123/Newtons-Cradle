const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(300,300,30);
	World.add(world,bob1);

	bob2 = Bodies.circle(330,300,30);
	World.add(world,bob2);

	bob3 = Bodies.circle(360,300,30);
	World.add(world,bob3);

	bob4 = Bodies.circle(390,300,30);
	World.add(world,bob4);

	bob5 = Bodies.circle(420,300,30);
	World.add(world,bob5);

	rope1 = new rope(bob1,roof,-80,0);
	rope2 = new rope(bob2,roof,-80,0);
	rope3 = new rope(bob3,roof,-80,0);
	rope4 = new rope(bob4,roof,-80,0);
	rope5 = new rope(bob5,roof,-80,0);


	Engine.run(engine);
	
  
}

function draw() {
	rectMode(CENTER);
	background(230);
	roof.display();
  
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
	bob1.display();
	bob2.display();
	
	bob3.display();
	bob4.display();
	bob5.display();
  
  
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,30);
  ellipse(bob2.position.x,bob2.position.y,30);
  ellipse(bob3.position.x,bob3.position.y,30);
  ellipse(bob4.position.x,bob4.position.y,30);
  ellipse(bob5.position.x,bob5.position.y,30);
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
	
  roof = new Roof(400,100,600,30);
  
	bob1 = new Bob (100,200,20);
  bob2 = new Bob (40,200,20);
  bob3 = new Bob (30,200,20);
  bob4 = new Bob (20,200,20);
  bob5 = new Bob (50,200,20);

  rope1 = new Rope(bob1.body,{x:200,y:100});
  rope2 = new Rope(bob2.body,{x:300,y:100});
  rope3 = new Rope(bob3.body,{x:400,y:100});
  rope4 = new Rope(bob4.body,{x:500,y:100});
  rope5 = new Rope(bob5.body,{x:600,y:100});


	Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  
   roof.display();

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

  drawSprites();
 
}




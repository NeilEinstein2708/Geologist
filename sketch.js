
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
   
    
    hammer = new Hammer(400,350,80,30);

    s1 = new Sand(300,650,7,7);    
    s2 = new Sand(480,650,7,7);   
    s3 = new Sand(500,650,7,7);   
    s4 = new Sand(600,650,7,7);   
    s5 = new Sand(700,650,7,7);   
    iron = new Iron(100,50,65,35);
    rubber = new Rubber(200,450,30,30,PI/2);
    ground = new Ground(600,height,1300,18);
    stone = new Stone(400,350,70,70,PI/2);
   
}


function draw() {

  background("pink");
  Engine.update(engine);
  rubber.display();
  hammer.display();
  ground.display();
  stone.display();
  iron.display();
  drawSprites();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
 
}




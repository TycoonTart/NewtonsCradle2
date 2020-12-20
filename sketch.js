
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5	
var roof,rope1,rope2,rope3,rope4,rope5


function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;
	var bobDiameter = 40;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	bobObject1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bobObject2 = new Bob(posX - bobDiameter,posY, bobDiameter);
	bobObject3 = new Bob(posX,posY,bobDiameter);
	bobObject4 = new Bob(posX +  bobDiameter, posY, bobDiameter);
	bobObject5 = new Bob(posX + bobDiameter * 2, posY, bobDiameter);

	roof = new Roof( width/2 ,height/4,15,250 );

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0); 
 	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0); 
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);
	//Create the Bodies Here.
	/*var posX = width/2;
    var posY = height/4 + 200;
	roof=new Roof(400,100,50,600)
	bobObject1=new Bob(posX-40*2,posY,40)
	bobObject2=new Bob(posX-40,posY,40)
	bobObject3=new Bob(280,500,40)
	bobObject4=new Bob(320,500,40)
	bobObject5=new Bob(360,500,40)
	rope1=new Rope(bobObject1.body,roof.body,-40*2,0)
	rope2=new Rope(bobObject2.body,roof.body,-40*1,0)
	*/



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display() 
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  roof.display()
  
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObj1 , bobObj2 , bobObj3 , bobObj4 , bobObj5;
var roofObj;
var ropeObj1 , ropeObj2 , ropeObj3 , ropeObj4 , ropeObj5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObj1 = new Bob(200,500,50);
    bobObj2 = new Bob(250,500,50);
    bobObj3 = new Bob(300,500,50);
    bobObj4 = new Bob(350,500,50);
    bobObj5 = new Bob(400,500,50);
    
    ropeObj1 = new Rope(bobObj1.body , roofObj.body , -bobDiameter*2 , 0);
    ropeObj2 = new Rope(bobObj2.body , roofObj.body , -bobDiameter*2 , 0);
    ropeObj3 = new Rope(bobObj3.body , roofObj.body , -bobDiameter*2 , 0);
    ropeObj4 = new Rope(bobObj4.body , roofObj.body , -bobDiameter*2 , 0);
    ropeObj5 = new Rope(bobObj5.body , roofObj.body , -bobDiameter*2 , 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  drawSprites();
 
}




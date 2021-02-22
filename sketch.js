const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var object;
var block,polygon;

function setup(){
    var canvas = createCanvas(400,400);
    engine=Engine.create()
    world=engine.world;
    object=bodies.rectangle;
    world.add(world.object);
    
    ground = new Ground(600,height,1200,20);

     //level one
     var block1=new Block (330,235,30,40)
     var block2=new Block (360,235,30,40)
     var block3=new Block (390,235,30,40)
     var block4=new Block (420,235,30,40)
     var block5=new Block (450,235,30,40)
     var block6=new Block (480,235,30,40)
     //level two
     var block7=new Block (360,195,30,40)
     var block8=new Block (380,195,30,40)
     var block9=new Block (420,195,30,40)
     var block10=new Block (450,195,30,40)
    //level three
     var block11=new Block (330,155,30,40)
     var block12=new Block (360,155,30,40)
     var block13=new Block (380,155,30,40)
     //level four
     var block14=new Block(330,100,30,40)
 
     log = new Log(810,260,300, PI/2);
 
 
 

  
}

function draw(){
background(0)
rectMode(CENTER)
Engine.update(engine)
rect(200,200,50,50)
strokeWeight(4);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
log.display();



}
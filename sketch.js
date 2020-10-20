const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1, box2;
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box1 = new Box(200,100,50,50);
   box2 = new Box(300,100,50,50);
   ground = new Ground(200,400,400,20);
}

function draw(){
    background("black");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
}
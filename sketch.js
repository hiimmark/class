const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var gameengine, gameworld
var box1, box2, ground1

function setup() {
  createCanvas(400,400);
  gameengine = Engine.create();
  gameworld = gameengine.world;
  box1 = new Box(200,300,20,20);
  box2 = new Box(205,100,20,100);
  ground1 = new Ground(200,390,400,20)
  console.log(box1)
}

function draw() {
  background(0);  
  Engine.update(gameengine)
  box1.display();
  box2.display();
  ground1.display();
}
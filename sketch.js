const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase,playerBase;
var player,computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   
   computerBase = new ComputerBase(300,random(450,height-300),180,150);
   playerBase = new PlayerBase(1200,random(450,height-300),180,150);
   player = new Player(1200,250,100,300);
   computer = new Computer(300,250,100,300);
 }

function draw() {

  background("purple");

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    computerBase.display();
    playerBase.display();
    player.display();
    computer.display();

   //display Player and computerplayer


}

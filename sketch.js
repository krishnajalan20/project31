const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle;
var turn = 0;
var gamestate = "play";

var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=183;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var c = 0; c <=width; c = c + 70) {
     divisions.push(new Divisions(c, height-divisionHeight/2,
       9, divisionHeight));
   }


    for (var b = 65; b <=width; b=b+50) 
    {
       plinkos.push(new Plinko(b,65));
    }

    for (var b = 50; b <=width-10; b=b+50) 
    {
       plinkos.push(new Plinko(b,165));
    }

    for (var b = 65; b <=width; b=b+50) 
    {
       plinkos.push(new Plinko(b,265));
    }

    for (var b = 50; b <=width-10; b=b+50) 
    {
       plinkos.push(new Plinko(b,355));
    }  
}

function draw() {
   background(0);
  Engine.update(engine);
  fill(255);

  for (var a = 0; a < plinkos.length; a++) { 
    plinkos[a].display();
  }

 line(0,490,900, 490);

   if(frameCount%60===12){
    particles.push(new Particle(random(width/2-100, width/2+100)
    , 10,10));
  }

 for (var b = 0; b < particles.length; b++) {
    particles[b].display();
  }
  
   for (var c = 0; c < divisions.length; c++) {
    divisions[c].display();
   }
   
}
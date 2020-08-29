const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;


  ground = new Ground(240,795,500,10);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight / 2 , 10 , divisionHeight));
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var i = 40; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,75))
  }
  for(var f = 40; f <= width-20; f=f+50){
    plinkos.push(new Plinko(f,75))
  }
  for(var s = 40; s <= width-30; s=s+50){
    plinkos.push(new Plinko(s,75))
  }
 
}

function draw() {
  background(0);  

    Engine.update(engine);

  ground.display();


  if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-10 , width/2+10),10));
  }



  for(var a = 0; a < particles.length; a++){
    particles[a].display();
  }

  for(var x = 0; x < plinkos.length; x++){
    plinkos[x].display();
  }


  for(var l = 0; l < divisions.length; l++){
    divisions[l].display();
  }

  
  drawSprites();
}
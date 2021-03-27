const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var rows=[];
var particles = [];
var plinkos=[];
var rows;
var ground;
var score = 0
var particle
var turn = 0
var gamestate = "PLAY"


var rowsHeight = 300



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,800,20);
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,185))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,225))
  }
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,265))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,305))
  }
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,345))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,385))
  }
  for(var j = 0; j <=width; j = j+80){
    rows.push(new Rows(j, height-rowsHeight/2, 10, rowsHeight));
  }
}

 



function draw() {
  background(0,0,0);  
  Engine.update(engine);

  textSize(20)
  text("Score : " + score, 400, 40)


  text("500", 30, 525)
  text("500", 110, 525)
  text("500", 190, 525)
  text("500", 275, 525)
  text("100", 350, 525)
  text("100", 430, 525)
  text("100", 505, 525)
  text("200", 590, 525)
  text("200", 675, 525)
  text("200", 760, 525)
  
  
  ground.display();
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 700), 0, 7, random(0, 360));
    particles.push(particle);
  }
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display();

  }
  for(var j = 0; j<rows.length;j++){
    rows[j].display();
 }
  
 if(turn >= 5){
   gameState = "END"
 }

 if(particle != null){
   particle.display()

 if(particle.body.position.y > 400 && particle.body.position.x >= 10 && particle.body.position.x <= 270){
 score = score + 500;

 }
}

if(particle != null){
  particle.display()
  if(particle.body.position.y > 400 && particle.body.position.x >= 280 && particle.body.position.x <= 580){
    score = score + 100; 
     }
    }
 
    if(particle != null){
      particle.display()
if(particle.body.position.y > 400 && particle.body.position.x >= 590 && particle.body.position.x <= 750){
      score = score + 200;   
      }
    }

   
  
  
  drawSprites();
}
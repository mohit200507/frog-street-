const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var greenfrog;
var road;
var car, car2, truck
var highway;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
     
function preload(){
 frog1 = loadImage("greenfrog.png")
  car = loadImage("car.png")
  car4 = loadImage("car2.png")
 truck = loadImage("truck.png")
 highway2 = loadImage("highway.png")
 gameover = loadImage("game over.png");
 youwin = loadImage("you win.jpg");
}

function setup(){
    var canvas = createCanvas(1200,800);
   greenfrog = createSprite(600,690)
 greenfrog.addImage(frog1) 
 greenfrog.scale=0.2

 // car2 = createSprite(40,40);
 //car2.addImage(car);
 //car2.scale = 0.4
  //car3 = createSprite(40,150);
 //car3.addImage(car4)
//car3.scale = 0.2
//truck1 = createSprite(40,330);
//truck1.addImage(truck);
 //truck1.scale = 0.5

 car2Group = new Group();
 car3Group = new Group();
 truck1Group = new Group();

 
}

function draw(){
    background(highway2);
    edges=createEdgeSprites();
    

if(gameState === PLAY){
 if(keyWentDown(UP_ARROW)){
    greenfrog.velocityY= -9;
  }

if(keyWentUp(UP_ARROW)) {
    greenfrog.velocityY = 0;
}
 if(keyWentDown(DOWN_ARROW)){
    greenfrog.velocityY = 9;
  }
 if(keyWentUp(DOWN_ARROW)){
  greenfrog.velocityY = 0;
     }
     if(keyWentUp(LEFT_ARROW)){
        greenfrog.velocityX = 0;
      }
    
     if(keyWentDown(LEFT_ARROW)){
          greenfrog.velocityX = -9;
        }
        if(keyWentUp(RIGHT_ARROW)){
            greenfrog.velocityX = 0;
          }
       
        if(keyWentDown(RIGHT_ARROW)){
          greenfrog.velocityX = 9;
        }
   
        if(car2Group.isTouching(greenfrog)|| car3Group.isTouching(greenfrog)||truck1Group.isTouching(greenfrog)){
      gameState = END}
      
        
       
     spawncar2();
     spawncar3();
     spawntruck1();
}
     
      else if(gameState === END) {
        gameover1=createSprite(600,400,00,0);
        gameover1.addImage(gameover); 
        greenfrog.destroy();
        car2Group.destroyEach();
        car3Group.destroyEach();
        truck1Group.destroyEach();
        
   
      }
  if(greenfrog.y<0){
  youwin1=createSprite(600,400,0,0);
  youwin1.addImage(youwin);
  car2Group.destroyEach();
  car3Group.destroyEach();
   truck1Group.destroyEach();  
  greenfrog.destroy();
}
     

      greenfrog.collide(edges[0])
      greenfrog.collide(edges[1])
      greenfrog.collide(edges[3])
      
      drawSprites();
     

    }
function spawncar2(){
    if(frameCount % 100 === 0) {
     
         
    var car2 = createSprite(0,random(330,400),20,20);
    car2.addImage(car);
    car2.velocityX = 4;
    car2.scale = 0.25;
    car2Group.add(car2);
  }}
  
  function spawncar3(){
    
    if(frameCount % 60 === 0) {
    
    var car3 = createSprite(0,random(40,100),20,20);
    car3.addImage(car4);
    car3.velocityX = 4;
    car3.scale = 0.16;
    car3Group.add(car3); 
  }
  }
  function spawntruck1(){
    if(frameCount % 50 === 0) {
       
    truck1 = createSprite(0,random(160,290),20,20);
    truck1.addImage(truck);
    truck1.velocityX = 4;
    truck1.scale = 0.35;
    truck1Group.add(truck1);
    
  }
  }
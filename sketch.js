var monkey,monkeyImage;
var bg,bgImage;
var rock,rockImage;
var fruit,fruitImage;
var gameOver,gameOverImage;
var survivalTime;
var ground;

function preload(){
  monkeyImage = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  fruitImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
  
  bgImage = loadImage("jungle.jpg");

}
function setup(){
  
  fruitGroup = new Group();
  rockGroup = new Group();
  
  bg = createSprite(200,200,20,20);
  bg.scale = 5; 
  bg.addImage(bgImage);
  bg.velocityX = -4;
  
  monkey = createSprite(40,315,20,20);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale = 0.1;
  
  ground = createSprite(200,350,900,10);
  ground.visible = false;
  
  survivalTime = 0;
}
function draw(){
  background("white");
  stroke("black");
  textSize(20);
  fill("black");
  
  if(bg.x < 0 ){
    bg.x = bg.width/2;
  }
    
  if(keyDown("space") && monkey.y >= 220){
    monkey.velocityY = -12;
  }

  if(rockGroup.isTouching(monkey)){     
    monkey.scale = 0.1;
    rockGroup.destroyEach();
  }
  
  if(fruitGroup.isTouching(monkey)){
    survivalTime = survivalTime +2;
    fruitGroup.destroyEach();
  }
  
  switch(survivalTime){
    case 10 : monkey.scale = 0.2;
            break;
    case 20 : monkey.scale = 0.3;
            break;
    case 30 : monkey.scale = 0.4;  
            break;
    case 40 : monkey.scale = 0.5;
            break;
    case 50 : monkey.scale = 0.5;
            break;
    case 60 : monkey.scale = 0.5;
            break;
    case 70 : monkey.scale = 0.5;
            break;
    case 80 : monkey.scale = 0.5;
            break;
    case 90 : monkey.scale = 0.5;
            break;
    case 100 : monkey.scale = 0.5;
            break;
            
    default : break;
  }
   

  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);  
  
  Fruits();
  Rocks();
  
  drawSprites();
  
  text("Score: "+survivalTime, 300,50);
}
function Fruits(){
  if(frameCount % 80 === 0){
    fruit = createSprite(400,random(120,200),20,20);
    fruit.addImage(fruitImage)
    fruit.scale = 0.1;
    fruit.velocityX = -5
    fruitGroup.add(fruit);
    fruitGroup.setLifetimeEach(100);
  }
}
function Rocks(){ 
  if(frameCount % 150 === 0){
    rock = createSprite(400,330,20,20);
    rock.addImage(rockImage);
    rock.scale = 0.1
    rock.velocityX = -5;
    rockGroup.add(rock);
    rockGroup.setLifetimeEach(100);
  }
}
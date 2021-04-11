var backImage,backgr;
var player, player_running;
var ground,ground_img;
var obstaceImage,bananaImage;
var g,g1;

var score =0

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  obstaceImage=loadImage("stone.png")
  bananaImage=loadImage("banana.png")
  g=loadImage("gameOver.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  

  g1=createSprite(200,200)
  g1.addImage(g)
  g1.visible=false
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.2;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=true;
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}

function draw() { 
  background(0);


  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    
   
    if(player.isTouching(FoodGroup)){
      score=score+1
      FoodGroup.destroyEach();
    }
    bananas()
    obstacles()

    if(player.isTouching(obstacleGroup)){
      score=0
      FoodGroup.velocityX=0
      player.destroy();
      obstacleGroup.velocityX=0
      g1.visible=true
      FoodGroup.visible=false
      obstaclegroup.visible=false
    }
  
  drawSprites();
  fill("red")
  textSize(20)
  text("score:"+score,25,25)
}

function bananas(){
  if(frameCount%80===0){
    banana=createSprite(780,220,20,20) 
    banana.addImage(bananaImage)
    banana.scale=0.1
  b=Math.round(random(10,60)) 
  banana.velocityX=-6;
  banana.Lifetime=100;
    FoodGroup.add(banana)
    
  }
    }
 
    
function obstacles(){
  if(frameCount%150===0){
    obstacle=createSprite(780,330,20,20) 
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.3
  b=Math.round(random(15,80)) 
  obstacle.velocityX=-13;
  obstacle.Lifetime=100;
    obstacleGroup.add(obstacle)
    
  }
    }
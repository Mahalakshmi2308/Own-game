function preload(){
    dialogueImg = loadImage("dialogue.png");
  instructionImg = loadImage("instruction1.png");
  swordImg = loadImage("34c645_80b40b2b5cfa41a784956b8a50cc31c0.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  gandapani = createSprite(800,300,500,100);
  gandapani2 = createSprite(4500,300,5000,100);
  spikes= createSprite(1500, 220, 1000,-25);
  ground = createSprite(200,250,1000,-50);
  ground2 = createSprite(1500,250,1000,-50);
  ground3 = createSprite(3250,250,1500,-50)
  ground4 = createSprite(4500,250,200,-50)
  ground5 = createSprite(4800,250,200,-50)
  ground6 = createSprite(5100,250,200,-50)
  ground7 = createSprite(5400,250,200,-50)
  player = createSprite(200,200,20,20);
  sword = createSprite(20, 20,5,5);
  slime = createSprite(300,200,30, 20);
  sky = createSprite(200,-75,100000,400);
  zamin = createSprite(200,470,100000,400);
  pltf = createSprite(300,175,50,10);
  pltf2 = createSprite(700,175,50,10);
  pltf3 = createSprite(800,200,50,10);
  pltf4 = createSprite(900,175,50,10);
  pltf5 = createSprite(1000,175,150,10);
  pltf6 = createSprite(1200,175,150,10);
  pltf7 = createSprite(1400,175,150,10);
  pltf8 = createSprite(1600,175,150,10);
  pltf9 = createSprite(1800,175,150,10);
  pltf10 = createSprite(2000,175,150,10);
  pltf11 = createSprite(3850,200,120,10);
  pltf12 = createSprite(4000,185,120,10);
  pltf13 = createSprite(4150,160,120,10);
  pltf14 = createSprite(4300,185,120,10);
  pltf15 = createSprite(4450,200,120,10);
  block = createSprite(2400,175,600,300);
  block2 = createSprite(-200,175,600,300);
  sky = createSprite(200,-75,100000,400);
  zamin = createSprite(200,470,100000,400);
  monster1 = createSprite(3000,200,20,20);
  monster2 = createSprite(3600,200,20,20);
  colorChanger = createSprite(3250,200,40,100);
  man = createSprite(3400,200,20,20);
  dialogue = createSprite(3250, 350, 40, 80);
  dialogue.addImage(dialogueImg);
  dialogue.scale = 0.5
   instruction1 = createSprite(200,350,40,40);
  instruction1.addImage(instructionImg);
  instruction1.scale = 0.5  
  gameState = 0;
  pltf16= createSprite(5500,200,120,10);
  gameOver = createSprite(200,200,100000,10000);
  winScreen = createSprite(200,200,100000,10000);
  
 
  
  
  sky.shapeColor = "black";
  zamin.shapeColor = "black";
  block.shapeColor = "black";
  block2.shapeColor = "black";
  ground.shapeColor = "green";
  ground2.shapeColor = "green";
  ground3.shapeColor = "brown";
  ground4.shapeColor = "brown";
  ground5.shapeColor = "brown";
  ground6.shapeColor = "brown";
  ground7.shapeColor = "brown";
  player.shapeColor = "red";
  slime.shapeColor = "blue";
  colorChanger.shapeColor = "blue";
  man.shapeColor = "orange";
  gandapani.shapeColor = rgb(173, 223, 173);
  gandapani2.shapeColor = rgb(173, 223, 173);
  pltf16.shapeColor = "yellow";
  winScreen.shapeColor = "yellow";
  dialogue.visible = false;
  sword.addImage(swordImg);
  sword.scale = 0.04
}

function draw() {
         console.log(player.x)
  sword.y = player.y;
  sword.x = player.x;

  
  if(keyDown("right_arrow")) {
    player.x = player.x + 5;
  }
  if(keyDown("left_arrow")) {
    player.x = player.x - 5;
  }
   if(keyDown("up_arrow") && player.collide(ground) || keyDown("up_arrow") && player.collide(pltf)||keyDown("up_arrow") && player.collide(pltf2)||keyDown("up_arrow") && player.collide(pltf3)||keyDown("up_arrow") && player.collide(pltf4)||keyDown("up_arrow") && player.collide(pltf5) && keyDown("up_arrow") ||player.collide(pltf6) && keyDown("up_arrow") ||player.collide(pltf7) && keyDown("up_arrow") ||player.collide(pltf8) && keyDown("up_arrow") ||player.collide(pltf9) && keyDown("up_arrow") ||player.collide(pltf10) && keyDown("up_arrow") ||player.collide(pltf11) && keyDown("up_arrow") ||player.collide(pltf12) && keyDown("up_arrow") ||player.collide(pltf13) && keyDown("up_arrow") ||player.collide(pltf14) && keyDown("up_arrow") ||player.collide(pltf15) && keyDown("up_arrow")||player.collide(ground3) && keyDown("up_arrow")||player.collide(ground4) && keyDown("up_arrow") || player.collide(ground5) && keyDown("up_arrow") || player.collide(ground6) && keyDown("up_arrow") || player.collide(ground7) && keyDown("up_arrow")) {
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.5;
    player.collide(ground);
  player.collide(ground2);
  player.collide(ground3);
  player.collide(ground4);
  player.collide(ground5);
  player.collide(ground6);
  player.collide(ground6);
  player.collide(zamin);
  player.collide(sky);
  player.collide(pltf);
  player.collide(pltf2);
  player.collide(pltf3);
  player.collide(pltf4);
  player.collide(pltf5);
  player.collide(pltf6);
  player.collide(pltf7);
  player.collide(pltf8);
  player.collide(pltf9);
  player.collide(pltf10);
  player.collide(pltf11);
  player.collide(pltf12);
  player.collide(pltf13);
  player.collide(pltf14);
  player.collide(pltf15);
  player.collide(block);
  player.collide(block2);
  slime.collide(ground);
  monster1.collide(ground3);
  monster2.collide(ground3);
  man.collide(ground3);
  monster1.velocityY = monster1.velocityY + 0.8
  monster2.velocityY = monster1.velocityY + 0.8
  colorChanger.collide(ground3);
  colorChanger.veloctyY= colorChanger.velocityY + 0.8
  man.velocityY = man.velocityY + 0.8
  if(gameState === 0){
  console.log(gameState);
  background(100,100,200);
  gameOver.visible = false;
  winScreen.visible = false;
  camera.position.x = player.x;
  camera.position.y = player.y;

  if(player.isTouching(slime)){
    gameState = 1;
  }
  if(player.isTouching(gandapani)){
    gameState = 1;
  }
    
  if(player.isTouching(spikes)){
    gameState = 2;
    player.x = 2950;
  }

    

    if(slime.x - player.x<100 && slime.x - player.x>-50 && mousePressedOver(slime)){
      slime.destroy();
    }
     
    if(mousePressed) {
      
    sword.rotationSpeed = 3;
    }
    else {
      
      sword.rotationSpeed = 0;
    }
  
  fill("white");
  text("YOU",player.x-15,player.y -20);
  slime.velocityY = slime.velocityY + 0.8;
  }
  
  
  if(gameState === 1) {
    gameOver.visible = true;
  }
  
  
    if(player.isTouching(pltf10)){
    console.log("hi");
    player.x = 2950;
    gameState = 1;
  }
  
  if(gameState === 2) {
    background("purple");
    camera.position.x = player.x;
    camera.position.y = player.y;
    fill("white");
    text("YOU",player.x-15,player.y -20);
    text("NPC dude",man.x-15,man.y -20);
    
    if(monster1.x - player.x<100 && monster1.x - player.x>-50 && mousePressedOver(monster1)){
      monster1.destroy();
    }
    
     if(monster2.x - player.x<100 && monster2.x - player.x>-50 && mousePressedOver(monster2)){
      monster2.destroy();
    }
    if(player.isTouching(monster1)){
    gameState = 1;
  }
    
      if(player.isTouching(monster2)){
    gameState = 1;
  }
    
     if(player.isTouching(gandapani2)){
    gameState = 1;
  }

    if(player.isTouching(colorChanger)){
    player.shapeColor = "blue";
  }
        fill("yellow");
   if(player.isTouching(pltf16)){
     text("YOU WIN",200,200);
     winScreen.visible = true;
   }
    
    if(man.x - player.x<100){
      dialogue.visible = true;
    }
    else {
      dialogue.visible = false;
    }


  }
  


  drawSprites();
}


function mousePressed() {
  sword.rotationSpeed = 2;
  
}

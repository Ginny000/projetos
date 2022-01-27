var trex, trex_running, edges;
var groundImage, ground, groundInvisible;
var Nuvenzinha, nuvemImage, nuvenzinhaGroup
var cacto, cacto1, cacto2, cacto3, cacto4, cacto5, cacto6, cactoGroup
var PLAY = 1
var FIM = 0
var gameState = PLAY

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  nuvemImage = loadImage("cloud.png")
  cacto1 = loadImage("obstacle1.png")
  cacto2 = loadImage("obstacle2.png")
  cacto3 = loadImage("obstacle3.png")
  cacto4 = loadImage("obstacle4.png")
  cacto5 = loadImage("obstacle5.png")
  cacto6 = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50

  //criar chão
 ground = createSprite(200, 180, 400, 20); 
 ground.addImage(groundImage)
  
 //criar chão invisivel
 groundInvisible = createSprite(200, 190, 400, 10)
 groundInvisible.visible = false

 //criar grupo
 cactoGroup = new Group();
 nuvenzinhaGroup = new Group();
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  if (gameState == PLAY) {

      //movimento d chão
      ground.velocityX = -7
      
      //chão infinito
     if (ground.x < 0){
       ground.x = ground.width/2
    }

      //pular quando tecla de espaço for pressionada
     if(keyDown("space") && trex.y >= 130){
       trex.velocityY = -10;
    }
      
     //gravidade do t-rex
    trex.velocityY = trex.velocityY + 0.7;

    //utilizando a função criar nuvens 
   CriarNuvens();

    //utilizando a função criar obstaculos e nuvens
  CriarObstaculos();
 
    if (cactoGroup.isTouching(trex)){

      gameState = FIM;
    }
    }

  
  else if (gameState == FIM){
   
    ground.velocityX = 0

    cactoGroup.setVelocityXEach(0)
    nuvenzinhaGroup.setVelocityXEach(0)
  }

 //impedir que o trex caia
 trex.collide(groundInvisible)

  drawSprites();
}

function CriarNuvens() {
 
  if (frameCount %60 == 0) {

  Nuvenzinha = createSprite (600, 100, 40, 10)
  Nuvenzinha.velocityX = -3;
  Nuvenzinha.addImage(nuvemImage)
  Nuvenzinha.scale = 0.7
  //altura aleatoria
  Nuvenzinha.y = Math.round(random(10, 60))

  //ajuste de profundidade
  Nuvenzinha.depth = trex.depth
  trex.depth = trex.depth + 1

  //tempo de vida das nuvens
  Nuvenzinha.lifetime = 220

  //add ao grupo
  nuvenzinhaGroup.add(Nuvenzinha);
  }
}

function CriarObstaculos() {
 
  if (frameCount %100 == 0) {
 cacto = createSprite (600, 165, 10, 40)
 cacto.velocityX = -7
 cacto.scale = 0.5
 
 //gerar cactos aleatorios
  var num = Math.round(random(1, 6));


   switch(num) {
  case 1: cacto.addImage (cacto1)
  break
  case 2: cacto.addImage (cacto2)
  break 
  case 3: cacto.addImage (cacto3)
  break
  case 4: cacto.addImage (cacto4)
  break
  case 5: cacto.addImage (cacto5)
  break
  case 6: cacto.addImage (cacto6)
  break
  default:
    break
  }
   
  //add ao grupo
   cactoGroup.add(cacto)

  cacto.lifetime = 300
  }
}
var bg, bgImg
var balloon, balloonImg
var obsTop, obsTop1, obsTop2;
var obsBott, obsBott1, obsBott2, obsBott3
var restart;
var end
var play, playImg
var gameState = 0
var teto, ground
var topGroup, bottGroup

function preload(){
bgImg = loadImage("assets/bg.png")
obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")
obsBott1 = loadImage("assets/obsBottom1.png")
obsBott2 = loadImage("assets/obsBottom2.png")
obsBott3 = loadImage("assets/obsBottom3.png")
restart = loadImage("assets/restart.png")
end = loadImage("assets/fimdejogo.png")
playImg = loadImage("assets/botão.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//imagem de plano de fundo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//criando balão
balloon = createSprite(100, 200, 20, 50)
balloon.addAnimation("balloon", balloonImg)
balloon.scale = 0.15

//criando botão play
play = createSprite(200, 200)
play.addImage(playImg)
play.scale = 0.2

//criando chão e teto
teto = createSprite(200, 390, 800, 20)
ground = createSprite(200, 10, 800, 20)
teto.visible = false
ground.visible = false

topGroup= new Group()
bottGroup= new Group()

}

function draw() {
  background("black");

  //inicio do jogo antes do movimento
  if (gameState == 0) {
    if (mousePressedOver(play)){ 
      iniciar()
    }
  }

  //inicio do jogo
  if(gameState == 1) {
    
    //gravidade
     balloon.velocityY = balloon.velocityY + 0.5

    //fazer balão voar
    if(keyDown("space")) {
      balloon.velocityY = -6
     }

    gerarObsTop()
    gerarObsBott()
  }

        drawSprites();
        
}

function iniciar() {
  gameState = 1
  play.visible = false
}

function gerarObsTop() {
  if(World.frameCount % 90 == 0) {
   obsTop = createSprite(450, 50, 40, 40)
   obsTop.scale = 0.09
   obsTop.velocityX = -4
   obsTop.y = Math.round(random(40, 180))
   var valor = Math.round(random(1, 2))

   switch(valor) {
    case 1: obsTop.addImage(obsTop1);
    break
    case 2: obsTop.addImage(obsTop2);
    break
    default: break
   }
     
  obsTop.lifeTime = 100
  balloon.depth = balloon.depth + 1

  topGroup.add(obsTop)
  }
}


  function gerarObsBott() {
    if(World.frameCount % 70 == 0) {
     obsBott = createSprite(450, 320, 40, 40)
     obsBott.scale = 0.09
     obsBott.velocityX = -4
     obsBott.y = Math.round(random(320, 380))
     var valor = Math.round(random(1, 3))
  
     switch(valor) {
      case 1: obsBott.addImage(obsBott1);
      break
      case 2: obsBott.addImage(obsBott2);
      break
      case 3: obsBott.addImage(obsBott3);
      break
      default: break
     }
       
    obsBott.lifeTime = 100
    balloon.depth = balloon.depth + 1
  
    bottGroup.add(obsBott)

  }
}
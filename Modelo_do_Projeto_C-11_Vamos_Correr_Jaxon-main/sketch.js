var fundo, fundoImg
var carinha, carinhaImg

function preload(){
  //imagens pré-carregadas
  fundoImg = loadImage ("path.png")
  carinhaImg = loadAnimation ("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  fundo = createSprite (197, 200, 400, 600)
  fundo.addImage(fundoImg)
  
  carinha = createSprite (200, 350, 20, 50)
  carinha.addAnimation ("correndo", carinhaImg)
  carinha.scale = 0.05
}

function draw() {
  background(105,105,105);

   fundo.velocityY = 2

   if (fundo.y > 400) {

    fundo.y = fundo.height/5
   }

  drawSprites()
}

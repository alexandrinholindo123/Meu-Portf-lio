//ator
let yAtor=366;
let xAtor=100;
let colisao=false
let meusPontos=0

function mostraAtor01(){
  image(imagemAtor01,xAtor,yAtor,30,30);
}

function movimentaAtor01(){
  if (keyIsDown(UP_ARROW)){
    yAtor-=6
  }
  if(keyIsDown(DOWN_ARROW)){
    if(mover())
    yAtor+=6
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor-=6
  }
  if(keyIsDown(RIGHT_ARROW))
    xAtor+=6
}

function colisao1(){
  for (let i=0;i<imagemCarros.length;i++){
    colisao= collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15)
    if(colisao){
      colidiu();
      if(meusPontos>0){
        meusPontos-=1;
      }
    }
  }
}

function colidiu(){
  yAtor=366
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(255,255,240)
  text(meusPontos,width/5,27)
}

function marcaPontos(){
  if(yAtor< 15){
    meusPontos +=1
    colidiu()
  }
}
function mover(){
  return yAtor < 366
}




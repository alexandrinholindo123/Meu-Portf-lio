//variaveis bolinha
let xBolinha=300;
let yBolinha=200;
let diametro=20;
let raio=diametro/2

//variaveis da velocidade
let velocidadex=6;
let velocidadey=6;

//variaveis raquetes
let xRaquete=5;
let yRaquete=150;
let compRaquete=10;
let hRaquete=90;
let colidiu =false
//variaveis raquete oponente
let xRaqueteOP=585;
let yRaqueteOP=150;
let compRaqueteOP=10;
let hRaqueteOP=90;
let velocidadeyOP

//placar
let meuspontos=0;
let pontosOP=0;



function setup( ){
  createCanvas(600,400);
}

function draw(){
  background(99);
  mostraBolinha();
  velocidadeBolinha();
  movimentoBolinha();
  mostraRaquete();
  movimentoRaquete();
  colisao();
  colisaoRaquete(xRaquete,yRaquete)
  mostraRaqueteOP();
  movimentoRaqueteOP();
  colisaoRaquete(xRaqueteOP,yRaqueteOP)
  placar();
  marcaponto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function velocidadeBolinha(){
   xBolinha +=velocidadex
   yBolinha +=velocidadey
}

function movimentoBolinha(){
   if(xBolinha + raio > width || xBolinha - raio < 0){  
    velocidadex *= -1
  }
  if(yBolinha+ raio > height || yBolinha - raio < 0){
  velocidadey *= -1  
  }
}

function mostraRaquete(){
   rect (xRaquete,yRaquete,compRaquete,hRaquete)
}
function mostraRaqueteOP(){
   rect (xRaqueteOP,yRaqueteOP,compRaqueteOP,hRaqueteOP)
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function colisao(){
  if ( xBolinha - raio < xRaquete + compRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete)
    velocidadex *=-1
  }
function colisaoRaquete(x,y){ colidiu=collideRectCircle(x,y,compRaquete, hRaquete, xBolinha, yBolinha,raio);
  if(colidiu){
    velocidadex *=-1;
  }
}

function movimentoRaqueteOP(){
  if (keyIsDown(87)){
    yRaqueteOP-=10;
  }
  if (keyIsDown(83)){
    yRaqueteOP +=10;
  }
}
function placar(){
  textAlign(CENTER)
  textSize(16)
  fill(color(255,140,0));
  rect(150,10,40,20)
  fill(255)
  text(meuspontos,170,26)
  fill(color(255,140,0));
  rect(450,10,40,20)
  fill(255)
  text(pontosOP,470,26)
}

function marcaponto(){
  if(xBolinha >590){
    meuspontos +=1;
  }
  if(xBolinha<10){
    pontosOP += 1;
  }
}





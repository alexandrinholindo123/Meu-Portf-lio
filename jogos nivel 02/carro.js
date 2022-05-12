//listas
let xCarros=[600,600,600,600,600,600]
let yCarros = [40,96,150,210,262,318]
let velocidades=[2,3,5,2,3,5]
let comprimentoCarro=50;
let alturaCarro=40;

function mostraCarros(){
  for (let i=0;i<imagemCarros.length;i=i+1){
    image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro)
  }
}
function movimentoCarros(){
  for(let i=0;i<imagemCarros.length;i=i+1){
    xCarros[i]-=velocidades[i];
  }
}

function voltaPosicao(){
  for(let i=0;i<imagemCarros.length;i=i+1){
     if(passou(xCarros[i])){
        xCarros[i] = 600
     }
  }
}
function passou(xCarros){
  return xCarros <-50
}






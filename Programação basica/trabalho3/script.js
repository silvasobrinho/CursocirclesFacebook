var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var fundo = {
    url:" ./imgs/fundo.png"}

    var vaca ={
        url: "./imgs/vaca.png"}
    var porco = {
        url: "./imgs/porco.png"
    }
    var galinha = {
        url: "./imgs/frango.png"
    }

fundo.imagem = new Image();
fundo.imagem.src = fundo.url;
vaca.imagem = new Image();
vaca.imagem.src = vaca.url;
porco.imagem = new Image();
porco.imagem.src = porco.url;
galinha.imagem = new Image();
galinha.imagem.src = galinha.url;

fundo.imagem.addEventListener("load",carregaFundo);
fundo.imagem.addEventListener("load",carregaVaca);
fundo.imagem.addEventListener("load",carregaPorco);
fundo.imagem.addEventListener("load",carregaGalinha);


function carregaFundo(){
    papel.drawImage(fundo.imagem, 0,0);

}

function carregaVaca(){
    var numeroVacas = numeroAleatorio(2,10);
    

    for(var i =0; i<numeroVacas;i++){
    var xA = numeroAleatorio(100, 400);
    var yA = numeroAleatorio(100,400)
    papel.drawImage(vaca.imagem, xA,yA);
    }
}

function carregaPorco(){
    var numeroPorcos = numeroAleatorio(4,8);
    

    for(var i =0; i<numeroPorcos;i++){
    var xA = numeroAleatorio(100, 400);
    var yA = numeroAleatorio(100,400);
    papel.drawImage(porco.imagem, xA,yA);
    }
}

function carregaGalinha(){
    var numeroGalinhas = numeroAleatorio(12,20);
    

    for(var i =0; i<numeroGalinhas;i++){
    var xA = numeroAleatorio(100, 400);
    var yA = numeroAleatorio(100,400);
    papel.drawImage(galinha.imagem, xA,yA);
    }
}




function numeroAleatorio(x, y){
    return Math.floor(Math.random()*(y-x)+1)+x;
}
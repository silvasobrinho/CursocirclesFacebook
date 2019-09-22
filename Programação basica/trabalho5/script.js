var cris = new Figura("Cristiane", "Brasil","Atacante","10","./imgs/cris.jpeg");
var marta = new Figura("Marta", "Brasil","Meio-Campo","9","./imgs/marta.jpg");
var debinha = new Figura("Debinha", "Brasil","Atacante","8","./imgs/debinha.jpg");
var formiga = new Figura("Formiga", "Brasil","Meio Campo","7","./imgs/formiga.jpeg");
var thais = new Figura("Thais", "Brasil","Latral","11","./imgs/thais.jpg");


var colecaoFiguras = [];


colecaoFiguras.push(cris);
colecaoFiguras.push(marta);
colecaoFiguras.push(debinha);
colecaoFiguras.push(formiga);
colecaoFiguras.push(thais);
for(var i=0;i<colecaoFiguras.length;i++){


    colecaoFiguras[i].exibir();
   }
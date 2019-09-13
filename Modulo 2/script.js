var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var teclas = {
    Up: 38,
    Right: 39,
    Down: 40,
    Left: 37
}

var x = 50;
var y = 50;


document.addEventListener("keydown", verTecla);

function verTecla(event){
    switch(event.keyCode){
        case teclas.Down:


    }

}

function desenhaLinhaVermelha(){
    desenha("red", x,y, 200, 200)    
}


desenha("green",x+150,y,200,200)


function desenha(cor, xInicial,yInicial,xFinal,yFinal){
    papel.beginPath();
    papel.strokeStyle = cor;
    papel.lineWidth = 3;
    papel.moveTo(xInicial,yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();   

}
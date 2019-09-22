var canvas=document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");


var teclas = {
    Up: 38,
    Right: 39,
    Down: 40,
    Left: 37,
    W: 87,
    S: 83,
    D: 68,
    A: 65
}

var x = 50;
var y = 50;
var c = 40;
var v = 45;
movimento = 10;
movimento2 = 5;
//var botao = document.getElementById("botao");
document.addEventListener("keydown", desenhaLinha);


function desenhaLinha(event){

    switch(event.keyCode){
        case teclas.Down:
                desenha("green",x,y,x,y+movimento);
                y=y+movimento;
            break;
        case teclas.Up:
        desenha("green",x,y,x,y-movimento);
        y=y-movimento;
            break;
    
        case teclas.Left:
        desenha("green",x,y,x-movimento,y);
        x=x-movimento;
        break;
        case teclas.Right:
        desenha("green",x,y,x+movimento,y);
        x=x+movimento;
           break;
        case teclas.W:
        desenha("red",c,v,c,v-movimento2);
        v=v-movimento2;
          break;
        case teclas.S:
        desenha("red",c,v,c,v+movimento2);
        v=v+movimento2;        
          break;

        case teclas.D:
        desenha("red",c,v,c+movimento2,v);
        c=c+movimento2;
            break;
    
        case teclas.A:
        desenha("red",c,v,c-movimento2,v);
        c = c-movimento2;
            break;
    
                        }
}



function desenha(cor,xInicial,yInicial,xFinal,yFinal){
    papel.beginPath();
    papel.strokeStyle = cor;
    papel.linewidth = 3;
    papel.moveTo(xInicial,yInicial);
    papel.lineTo(xFinal,yFinal);
    papel.stroke();
    papel.closePath();

}
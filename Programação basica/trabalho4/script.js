var botao = document.getElementById("botao");

botao.addEventListener("click",executaFizzBuzz);

function executaFizzBuzz(){

 var numIteracoes = document.getElementById("numIteracoes").value;
 var resultado = document.getElementById("resultado");

 var numero =1;

 while(numero <= numIteracoes){
            
    if(((numero%5)==0)&&((numero%3==0))){
        resultado.innerHTML += "<p>Fizz-Buzz</p>";
    }else if((numero%3)==0){
        resultado.innerHTML += "<p>Fizz</p>";
        }else if((numero%5)==0){
        resultado.innerHTML+= "<p>Buzz</p>";
        }else
        resultado.innerHTML +="<p>" +numero+ "</p>";   
        numero ++; 
                                         }

}
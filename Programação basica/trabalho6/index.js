var expressjs = require("express");

var aplicacao = expressjs();

aplicacao.get("/",hello);
aplicacao.get("/cursos",cursos);
aplicacao.get("/hora",retornaHora);

function retornaHora(requisicao,resposta){
    resposta.send("A nora atual é: "+new Date().getHours())

}

function cursos(requisicao,resposta){
    resposta.send("<ul> <li>Programação Basica</li> <li>Programação avançada!</li> </ul>")
}

function hello(requisicao,resposta){
    resposta.send("Olá tudo bem??")

}

aplicacao.listen(8989);
console.log("Aplicação em execução....")
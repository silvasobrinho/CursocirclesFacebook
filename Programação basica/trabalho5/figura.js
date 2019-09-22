class Figura{
    //toda classe tem um meodo construtor
    //ele passa as informções que a classe necessita
    constructor(nome,pais,posicao,numero,urlImagem){
        this.nome = nome;    //vai atribuir a uma propriedade da classe
        this.pais = pais;
        this.posicao = posicao;
        this.numero = numero;

        this.imagem =new Image(320, 400);
        this.imagem.src = urlImagem;
        

    }

    exibir(){
        document.body.appendChild(this.imagem);
        document.write("<br />nome: "+this.nome +"<br />");
        document.write("posição: "+this.posicao +"<br />");
        document.write("Camisa número: "+this.numero +"<br />");
        document.write("nome: "+this.pais +"<br />");

    }

}
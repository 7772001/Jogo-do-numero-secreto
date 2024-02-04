let listaNumeroSorteados = [];
let limiteTentativas = 10;
let numeroSecreto = aleatorioNumero();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirmensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número secreto");
    exibirTextoNaTela("p","Escolha um número entre 1 e 10");


}
exibirmensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou");
        let palavraTentativa = tentativas >1 ? "tentativas":"tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p",mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto menor");

        }else{
         exibirTextoNaTela("p","O número secreto e maior");
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function aleatorioNumero(){
    let numeroEscolhido = parseInt(Math.random()* limiteTentativas + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;
    if (quantidadeElementosLista == limiteTentativas){
        listaNumeroSorteados = [];
    }
    if (listaNumeroSorteados.includes(numeroEscolhido)){
        return aleatorioNumero();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo () {
    numeroSecreto = aleatorioNumero();
    limparCampo();
    tentativas = 1;
    exibirmensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
//  DEFININDO OUTRA FFUNÇÃO REGULAR COM DOIS PARAMETROS //

function soma(a, b) {
    return a + b;
}

// CHAMANDO A FUNÇÃO SOMA E ARMAZENANDO O RESULTADO EM UMA VARIAVEL //

let resultado = soma (13, 29)

// EXIBINDO O RESULTADO DA FUNÇÃO SOMA //

    console.log("O resultado da soma é: " + resultado) // POSSO COLOCAR UM TEXTO DENTRO DE UM CONSOLE.LOG USANDO ASPAS
    
// DEFININDO UMA FUNÇÃO REGULAR USANDO A PALAVRA-CHAVE "function" //

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

//CHAMANDO A FUNÇÃO SADACAO E PSSANDO UM ARGUMENTO //

saudacao("Wallison Dias");

// DEFININDO UMA FUNÇÃP REGULAR SEM PARAMETROS E SEM RETORNO //

function mensagem() {
    console.log("Esta é uma mensagem de boas vindas");
}

// CHAMANDO A FUNÇÃO MENSAGEM // 
saudacao("Wallison");
mensagem()
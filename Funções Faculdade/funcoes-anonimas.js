// DECLARAÇÃO DE UMA VARIAVEL CHAMADA RESULTADO E ATRIBUIÇÃO DE UMA FUNÇÃO ANONIMA A ELA //

let somarParametros = function(parametro1, parametro2) {
    console.log("parametro1: " + parametro1);
    console.log("parametro2: " + parametro2);

    let resultado = parametro1 + parametro2;

    console.log("Resultado:" + resultado)

    return resultado;
}

// CHAMADA DA FUNÇÃO ANONIMA ATRAVES DA VARIAVEL //

let resultado = somarParametros(5, 10);
console.log("resultado da chamada da função somarParametros: " + resultado);

// DEFININDO UMA FUNÇÃO QUE ACEITA OUTRA FUNÇÃO COMO ARGUMENTO //

function executarFuncao(funcao, valor1, valor2) {
    console.log("\nExecutando a função passada como argumento ou parametro");
    // // Parâmetros são variáveis usadas na definição de uma função, atuando como espaços reservados para os valores que serão passados.
// Argumentos são os valores reais que preenchem esses espaços reservados quando a função é chamada. //
    return funcao(valor1, valor2); 
}

// PASSANDO A FUNÇAO ANONIMA COMO ARGUMENTO PARA OUTRA FUNÇÃO //

let resultadoExecucao = executarFuncao(somarParametros, 7, 3);
console.log("Resultado da execução da função passada como argumento: " + resultadoExecucao);

// DEFININDO E CHAMANDO UMA FUNÇÃO ANONIMA IMEDIATAMENTE //

let resultadoImediato = (function (a,b){
    console.log("\nFunção de chamada imediata:" );
    return a*b;
})(4,6);
console.log("Resultado da função anonima chamada imediatamente: " + resultadoImediato);
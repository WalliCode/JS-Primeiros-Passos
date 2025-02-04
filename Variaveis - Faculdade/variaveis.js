// EXEMPLO DE USO DE var, let & const EM JAVASCRIPT //

const externo = "Olá, eu  sou uma constante global"

// DECLARAÃP DE UMA VARIAVEL USANDO VAR //

function exemploVar() {
    if (true) {
        var mensagem= "Olá, Wallison Junio Dias";
    }
    console.log (mensagem);
}

// CHAMANDO A FUNÇÃO exemploVar //

exemploVar();

// EXEMPLO DE ERRO E CORREÇÃO

var mensagem1 = "Olá, Wallison Junio Dias (var externo)";
console.log(mensagem1)

// DELCARÇÃO DE UMA VARIAVEL USANDO LET //

function exemploLet() {
    if (true) {
        let mensagem= "Olá, Wallison Junio Dias! Tudo bem?";
        console.log(mensagem);
    }
    //console.log(mensagem)
}

// CHAMANDO A FUNÇÃO exemploLet //

exemploLet();

// EXEMPLO DE ERRO E CORREÇÃO //

let mensagem= "Olá, Wallison Junio Dias! Tudo bem? (let externo)";
console.log(mensagem);

// DECLARAÇÃO DE UMA CONSTANTE USANDO CONST //

function exemploConstante() {
    const mensagem = "Ola, Wallison Junio Dias (constante)"
    console.log (mensagem)
}

//CHAMANDO A FUNÇÃO exemploConst //

exemploConstante();

// EXEMPLO EXTERNO DE const //

console.log(externo)

// EXEMPLO EXTERNO TENTANDO ALTERAR CONSTANTE GLOBAL //

//externo = "Nova Mensagem";
//console.log() O Valo de const é fixo
// ARROW FUNCTIONS //


// EXEMPLO BÁSICO DE UMA ARROW FUNCTION QUE SOMA DOIS NUMEROS //

let somar = (a,b) => {
    return a+b;
};

// CHAMANDO A FUNÇÃO E EXIBINDO O RESULTADO NO CONSOLE //

console.log (somar (5,3));

// EXEMPLO DE ARROW  FUNCTION COM UM UNICO PARAMENTRO (NÃO PRECISA DE PARENTESES)

let dobrar = n => n*2;

// CHAMANDO A  FUNÇÃO E EXIBINDO O RESULTADO NO CONSOLE //

console.log("\nDobrei: " + dobrar(6));

// EXEMPLO DE UMA ARROW FUNCTION USADA COMO CALLBACK //

let numeros = [1, 2, 3, 4, 5];

// USANDO ARROW FUNCTION COM O METODO MAP PARA DOBRAR OS VALORES ARRAY //

let numerosDobrados = numeros.map( n => n*5)

// EXIBINDO O ARRAY RESULTANTE NO CONSOLE //

console.log(numerosDobrados);

// ARROW FUNCTION  COM CORPO DE FUNÇÃO MAIS COMPLETO

let saudacao = (nome, idade) => {
    let mensagem =  `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
    return mensagem;
}

// CHAMANDO A FUNÇÃO E EXIBINDO O RESULTADO NO CONSOLE //

console.log(saudacao ("Wallison", 25))
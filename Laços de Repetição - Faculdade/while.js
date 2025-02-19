// Imagine que você esta fazendo exercicios fisiocs para se manter saudavel.
// Você decide fazer flexoes até ficar cansado.

// Aqui usaremos um loop while para simular esse processo.

let quantidadeFlexoes = 0;
let cansaco = false;

while (!cansaco) {
    quantidadeFlexoes++;
    console.log("Eu fiz" , quantidadeFlexoes, "flexoes")

    if (quantidadeFlexoes === 10) {
        cansaco = true;
    }
}
// Imagine que você está tentando aprender a andar de bicicleta.
// Você decide praticar até conseguir andar pelo menos 1 minuto sem cair

//aqui usaremos um loop DO While para siular esse processo

let tempoDeAndar = 0;
let caiu = false;

do {
    tempoDeAndar++;
    console.log("Andei de bicicleta por ", tempoDeAndar, "minutos.")

    if (tempoDeAndar === 3) {
        caiu = true
    }

} while (!caiu && tempoDeAndar < 10);
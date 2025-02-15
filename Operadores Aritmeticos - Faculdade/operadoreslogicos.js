// Exemplos de operadores logicos em JS

// Operador E logico (&&)
const a = true
const b = false

const resultadoE1 = a && b; //false
const resultadoE2 = a && true; // true

console.log(`true && false: ${resultadoE1}`); // Saída: false
console.log(`true && true: ${resultadoE2}`); // Saída: true

// Operador Ou lógico (||)
const resultadoOU1 = a || b; //true
const resultadoOU2 = a || false; 

console.log(`true || false: ${resultadoOU1}`); // Saída: true
console.log(`true || false: ${resultadoOU2}`);

//Operador Não logico (!)
const resultadoNao1 = !a;
const resultadoNao2 = !b;

console.log(`!true: ${resultadoNao1}`);
console.log(`!false: ${resultadoNao2}`);

//Combinações de operadores logicos
const resultadoComb1 = (a || b) && !b;
const resultadoComb2 = !(a && b) || a;


console.log(`true || false && !false: ${resultadoComb1}`);
console.log(`(true && false) || true: ${resultadoComb2}`);
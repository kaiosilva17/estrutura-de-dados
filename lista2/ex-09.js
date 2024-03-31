class Pilha {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pilha = new Pilha();

function processarNumero(numero) {
  if (numero % 2 === 0) {
    pilha.push(numero);
  } else {
    if (pilha.isEmpty()) {
      console.log("A pilha está vazia.");
    } else {
      let desempilhado = pilha.pop();
      console.log(`Desempilhado: ${desempilhado}`);
    }
  }
}

function desempilharTodos() {
  console.log("Desempilhando todos os elementos:");
  while (!pilha.isEmpty()) {
    let desempilhado = pilha.pop();
    console.log(desempilhado);
  }
}

rl.question("Digite 10 números com espaço entre eles: ", (input) => {
  const numeros = input.split(" ").map(Number);

  for (let i = 0; i < numeros.length; i++) {
    processarNumero(numeros[i]);
  }

  if (!pilha.isEmpty()) {
    desempilharTodos();
  }

  rl.close();
});

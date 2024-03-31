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

let pilhaPar = new Pilha();
let pilhaImpar = new Pilha();

function processarNumero(numero) {
  if (numero % 2 === 0) {
    pilhaPar.push(numero);
  } else {
    pilhaImpar.push(numero);
  }
}

function desempilharTodas() {
  console.log("Desempilhando todos os elementos:");

  console.log("Pilha Par:");
  while (!pilhaPar.isEmpty()) {
    console.log(pilhaPar.pop());
  }

  console.log("Pilha Ímpar:");
  while (!pilhaImpar.isEmpty()) {
    console.log(pilhaImpar.pop());
  }
}

rl.question("Digite 10 números com espaço entre eles: ", (input) => {
  const numeros = input.split(" ").map(Number);

  for (let i = 0; i < numeros.length; i++) {
    processarNumero(numeros[i]);
  }

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 0) {
      if (pilhaPar.isEmpty() || pilhaImpar.isEmpty()) {
        console.log("Erro: Uma ou as duas pilhas estão vazias.");
      } else {
        pilhaPar.pop();
        pilhaImpar.pop();
      }
    }
  }

  desempilharTodas();
  rl.close();
});

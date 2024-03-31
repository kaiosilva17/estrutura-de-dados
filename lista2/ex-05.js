function Fibonacci(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro positivo: ", (input) => {
  const n = parseInt(input);

  if (Number.isNaN(n) || n <= 0) {
    console.log("Por favor, insira um número inteiro positivo.");
  } else {
    const fibonacciSequence = Fibonacci(n);
    console.log("Sequência de Fibonacci:", fibonacciSequence.join(", "));
  }
  rl.close();
});

function calcularFatorial(n) {
  let fatoriais = [1];

  for (let i = 1; i <= n; i++) {
    fatoriais[i] = i * fatoriais[i - 1];
  }

  return fatoriais;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro não negativo: ", (input) => {
  const n = parseInt(input);

  if (Number.isNaN(n) || n < 0) {
    console.log("Por favor, insira um número inteiro não negativo.");
  } else {
    const fatoriais = calcularFatorial(n);
    for (let i = 0; i <= n; i++) {
      console.log(`Fatorial de ${i}: ${i}! = ${fatoriais[i]}`);
    }
  }
  rl.close();
});

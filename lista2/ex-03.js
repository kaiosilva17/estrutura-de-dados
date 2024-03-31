const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inverterArray(array) {
  return array.reverse();
}

let numeros = [];

rl.question("Digite o primeiro número: ", (n1) => {
  numeros.push(parseFloat(n1));

  rl.question("Digite o segundo número: ", (n2) => {
    numeros.push(parseFloat(n2));

    rl.question("Digite o terceiro número: ", (n3) => {
      numeros.push(parseFloat(3));

      rl.close();

      console.log("Array original:", numeros);

      let arrayInvertido = inverterArray(numeros);
      console.log("Array invertido:", arrayInvertido);
    });
  });
});

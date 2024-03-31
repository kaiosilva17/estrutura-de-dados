const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a quantidade de linhas: ", (linhasInput) => {
  const linhas = parseInt(linhasInput);

  rl.question("Digite a quantidade de colunas: ", (colunasInput) => {
    const colunas = parseInt(colunasInput);

    let count = 1;
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
        matriz[i][j] = count++;
      }
    }

    console.log("Matriz:");

    for (let i = 0; i < linhas; i++) {
      console.log(matriz[i].join(", "));
    }

    rl.close();
  });
});

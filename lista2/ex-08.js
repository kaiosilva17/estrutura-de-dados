function decimalParaHexadecimal(decimal) {
  if (typeof decimal !== "number" || isNaN(decimal)) {
    return "Insira um número válido.";
  }

  let hexadecimal = decimal.toString(16);

  return hexadecimal.toUpperCase();
}

let numero = 255;
console.log(
  `O número decimal ${numero} em hexadecimal, se conerte em: ${decimalParaHexadecimal(
    numero
  )}`
);

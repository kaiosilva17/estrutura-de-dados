function ordemCrescente(array) {
  if (array[0] > array[1]) {
    [array[0], array[1]] = [array[1], array[0]];
  }
  if (array[0] > array[2]) {
    [array[0], array[2]] = [array[2], array[0]];
  }
  if (array[1] > array[2]) {
    [array[1], array[2]] = [array[2], array[1]];
  }

  return array;
}

let numeros = [4, 1, 0];
console.log("Array em ordem crescente", ordemCrescente(numeros));

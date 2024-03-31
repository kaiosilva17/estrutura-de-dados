function ordemCrescente(array) {
  if (array[0] > array[1]) {
    let temp = array[0];
    array[0] = array[1];
    array[1] = temp;
  }
  return array;
}

let numeros = [10, 1];
console.log("Array em ordem crescente", ordemCrescente(numeros));

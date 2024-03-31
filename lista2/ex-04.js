function Indices(vetor, numero) {
  let indices = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      indices.push(i);
    }
  }
  return indices;
}

let vetor = [6, 4, 41, 56, 78, 6, 54, 6, 47, 54, 6];
let numero = 6;
let indices = Indices(vetor, numero);
console.log(`O número ${numero} aparece nos índices: ${indices}`);

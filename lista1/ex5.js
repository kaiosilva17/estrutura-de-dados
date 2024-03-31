function Aluno(nome, idade, peso) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
}

const AlunoNovo = new Aluno("Kaio Victor da Silva", 21, 98)

AlunoNovo.nome = "João Pedro"
AlunoNovo.idade = 15
AlunoNovo.peso = 65

console.log("Nome:", AlunoNovo.nome);
console.log("Idade:", AlunoNovo.idade);
console.log("Peso:", AlunoNovo.peso);
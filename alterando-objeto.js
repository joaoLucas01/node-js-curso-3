const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

estudante.telefone = '5532984811902'
console.log(estudante.telefone)
console.log(estudante)

estudante.nome = 'José Souza'
console.log(estudante)

const estudante2 = {};
estudante2.nome = 'Ana Maria';
estudante2.idade = 19;
estudante2.cpf = '23423423423'
estudante2.turma = 'python'
console.log(estudante2)

delete estudante2.turma
console.log(estudante2)
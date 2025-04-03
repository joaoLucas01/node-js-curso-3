const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

estudante.nome //josé

function exibeInfoEstudante(objEstudante, InfoEstudante){
    return objEstudante[InfoEstudante];
}

console.log(estudante.pet)
console.log(estudante['pet'])

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'))
console.log(exibeInfoEstudante(estudante, 'cpf'))
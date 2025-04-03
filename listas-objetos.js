const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereço: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 3'
    }]
}

estudante.endereço.push({
    rua: 'Rua Dona clotilde',
    numero: '71',
    complemento: null
})

//console.log(estudante.endereço);
//console.log(estudante.endereço[1]);

const listaEndereçoComComplemento = estudante.endereço.filter((endereço)=>endereço.complemento)

console.log(listaEndereçoComComplemento)
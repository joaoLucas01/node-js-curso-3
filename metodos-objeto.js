const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    //enderecos: [{
    //    rua: 'Rua Joseph Climber',
    //    numero: '45',
    //    complemento: 'apto 3'
    //},
    //{
    //    rua: 'Rua Dona clotilde',
    //    numero: '71',
    //    complemento: null
    //}]
}

const chavesObjeto = Object.keys(estudante);
const valoresObjeto = Object.values(estudante);
const chavesEValoresObjeto = Object.entries(estudante)

console.log(chavesObjeto);
console.log('-------------------------');
console.log(valoresObjeto);
console.log('-------------------------');
console.log(chavesEValoresObjeto);

console.log('-------------------------')

if (!chavesObjeto.includes('enderecos')){
    console.error('é necessário ter um endereco cadastrado')
}
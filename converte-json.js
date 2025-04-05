const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
//console.log(stringEtudante);
//console.log(typeof stringEtudante);



const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);
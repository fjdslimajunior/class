// let name = 'Lima Junior';
// let name2 = {
//     description: 'My description',
//     quantitate: 1
// }
// function saudacao(name) {
//     console.log(`Boas-vindas, ${name}.`);
// }    

// // saudacao("Xigo");

// let termo = 'foo';

// //console.log(termo.includes("f"));

// if (termo.includes('f')) {
//     console.log('Valor com a chave inclusa');
// } else {
//     console.log('Valor sem a chave inclusa');
   
// }

//criação de função e teste
// function constaSemente(linhas,colunas) {
//     return linhas * colunas;
// }
// function custoSemente(linhas,colunas) {
//     return contaSemente(linhas,colunas) * 0.80;
// }
// //const quantSemente = contaSemente(11,23);
// const custoTotal = custoSemente(11,23);

// console.log(custoTotal);

function contaSemente(colunas, linhas) {
    return colunas + linhas * colunas;
}

const multiConta = contaSemente(5,15);
console.log(multiConta);
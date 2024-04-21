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

// function contaSemente(colunas, linhas) {
//     return colunas + linhas * colunas;
// }

// const multiConta = contaSemente(5,15);
// console.log(multiConta);

// function listaDeEstudante(est1 = 'Lucas', est2 = 'Cainã', est3 = 'Daniel') {
//     console.log(`As pessoas que se destacaram foram: ${est1}, ${est2} e ${est3}.`);
// }

// listaDeEstudante('Laura', 'Jamile', 'Maiara');
const mLargura = 100;
const mComprimento = 200;

/*transformando em ternário exemplo: condicao ? expressao1 : expressao2;
Isso significa que se a condicao for verdadeira, a expressao1 será avaliada e retornada, e se a condicao for falsa, a expressao2 será avaliada e retornada.

No nosso exemplo, a condicao é largura <= MAX_WIDTH && comprimento <= MAX_LENGTH. Se essa condição for verdadeira, a expressao1 será 'A mesa cabe na sala!', 
e se a condição for falsa, a expressao2 será 'A mesa é maior que o espaço disponível!'.
*/
const areaDaMesa = (largura, comprimento) => largura <= mLargura && comprimento <= mComprimento ? 'A mesa cabe na sala!' :
        'A mesa é maior que o espaço disponível!';

console.log(areaDaMesa(300,350));
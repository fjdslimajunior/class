//1)Crie um programa que dado um número imprima sua tabuada.
//2)Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
// const numero = 178;
// for (let i = 0; i <= 10 ; i++) {
//     console.log(i * numero);    
// }



//APLICAÇÃO EXECUTANDO E MOSTRANDO APENAS OS NÚMERO PARES!
//APLICAÇÃO EXECUTANDO E MOSTRANDO APENAS OS NÚMERO PARES!
//APLICAÇÃO EXECUTANDO E MOSTRANDO APENAS OS NÚMERO PARES!
const numero = [3,7,1,13,5,9];
for (let i = 0; i <= numero.length; i++) {
    //const calc = numero + i;
    //console.log(i);
      if (i % 2 === 0) {//imprimento somente numeros pares
          console.log(i + ' < Esse a par!');
       } else {
        console.log(i + 'Você precisa rever os números.');
       }
    }

    //exercicio 2
//     console.log('segundo exercicio de prática');
//     const lista = [1,2,3,4,5,6,8,12,22];
// for(let par = 0; par < lista.length; par++) {
//     const numero = lista[par];
//     if (numero % 2 ===0) {
//         console.log(numero);
//    }
// }


// ****************operadorTERNARIO****************
// diaDaSemana = 'true';
// diaDaSemana === 'true' ? console.log('Eu gosto!') : console.log('Não gosto!'); //USANDO OPERADOR TERNARIO
// ****************operadorTERNARIO****************



// // ****************SHORT-CIRCUIT EVALUATION****************
// let carro = false;
// let transporte = carro || 'onibus';
// console.log(transporte);
// ****************SHORT-CIRCUIT EVALUATION****************

// let posicaoFinalAtleta = 'primeira posição';
// switch (posicaoFinalAtleta) {
//     case 'primeira posição':
//         console.log('Medalha de ouro!');
//         break;
//         case 'segunda posição':
//         console.log('Medalha de ouro!');
//         break;
//         case 'terceira posição':
//         console.log('Medalha de ouro!');
//     break;
// }

// function name(params) {
    
// }
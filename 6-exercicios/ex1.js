/*
Faça um programa que receba a media de um aluno.
se média < 5 imprima "reprovado"
se media >= 5 e <7 imprima "recuperação"
se media >= 7 "aprovado"
*/

const { gets, print } = require('./funcoesAuxiliares-ex1');

const media = gets(); //busca a informação contida no arquivo ./funcoesAuxiliares-ex1.js


if (media >= 0 && media < 5) {
    print(media + ' - Reprovado!');
} else if (media >= 5 && media < 7) {
    print(media + ' - Recuperação!');
} else if (media >= 7 && media <= 10) {
    print(media + ' - Aprovado!');
} else if (media > 10) {
    print('Dados incorretos!');
}
/* 
Faça um programa que receba N (quantidade de números) e seus  respectivos valores.
imprima o maior número par e menor número impar. 
lista dentro da funcao auxiliar:
const entradas = [5,3,4,1,9,10,8];
*/

const { gets, print } = require('./funcoesAuxiliares-ex2');

const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        } else if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}
print('Mario : '+maiorNumeroPar);
print('Menor : '+menorNumeroImpar);
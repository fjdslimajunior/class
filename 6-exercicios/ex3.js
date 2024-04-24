/*
Faça um programa que calcule e imprima o salário a ser tranferido para um funcionário.
Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios o 
salario a ser tranferido e calculado da seguinte maneira.
valor bruto do salário - percentual de imposto mediante a faixa salarial + adicionando 
os beneficios

para calcular o percentual de imposto segue as aliquotas:
de 0.00 a 1100.00 = 5.00%
de 1100.01 a 2500.00 = 10.00%
Maior que 2500.00 = 15.00%
 
exemplo:
    250 
    saida
    2050.00
*/

const {gets, print } = require('./funcoesAuxiliare-ex3');
const salarioBruto = gets(); //
const beneficios = gets();

//função para calcular o percentual de imposto
function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100); 
}

function pegarAliquota(salario) {
    if(salario >= 0 && salario <= 1100){
        return 5; //percentual
    }else if(salario >= 1100.01 && salario <= 2500){
        return 10;
    } else if (salario >= 2500.01) {
        return 15;
    }   
}
const aliquotaImposto = pegarAliquota(salarioBruto);

const valorImposto = calcularPorcentagem(salarioBruto, aliquotaImposto);

const tranferenciaSalario = salarioBruto - valorImposto + beneficios;

print(tranferenciaSalario);


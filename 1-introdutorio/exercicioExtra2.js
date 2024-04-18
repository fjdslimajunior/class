/* 
Calculo do IMC
Fórmula do IMC: 
IMC = peso / (altura*altura)

Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a table abaixo. 

IMC em adultos condição:
Abaixo de 18.5 Baixo do peso;
Entre 18.5 e 25 Peso normal;
Entre 25 e 30 Acima do peso;
Entre 30 e 40 Obeso;
Acima de 40 Obesidade Grave;

 */
const altura = 1.71;
const peso = 150;

const IMC = peso / (Math.pow(altura, 2));

if (IMC <= 18.5) {
    console.log('Situação: Abaixo do peso!');
} else if (IMC >= 18.5 && IMC <= 25) {
    console.log('Situação: Normal!');
} else if (IMC > 25 && IMC <= 30) {
    console.log('Situação: Acima do normal!');
} else if (IMC > 30 && IMC <= 40) {
    console.log('Situação: Obesidade!');
} else if (IMC >= 40) {
    console.log('Situação: Alerta, seu médico deve ser consultado!!');
}

console.log('IMC : '+IMC.toFixed(1));


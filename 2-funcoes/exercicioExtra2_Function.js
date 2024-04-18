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
function calcularIMC(peso, altura) {
    return peso / (Math.pow(altura, 2));
}

function classificacaoIMC(imc){
    if (imc <= 18.5) {
        return 'Situação: Abaixo do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        return 'Situação: Normal!';
    } else if (imc > 25 && imc <= 30) {
        return 'Situação: Acima do normal!';
    } else if (imc > 30 && imc <= 40) {
        return 'Situação: Obesidade!';
    } else if (imc >= 40) {
        return 'Situação: Alerta, seu médico deve ser consultado!!';
    }
}

function main() {
    const altura = 1.71;
    const peso = 150;
    
    const imc = calcularIMC(peso, altura);
    console.log(classificacaoIMC(imc));
}

main();
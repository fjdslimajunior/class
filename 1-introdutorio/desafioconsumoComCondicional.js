// calcular o valor de uma viagem
//Três variáveis Preço Combustivel, gasto médio por KM, distância em km da viagem, gasolina e alcool.
//Imprima o valor que será gasto de combustível para realizar a viagem.
//const precoCombustivel = 1.34;
const gastoMedio = 10;
const distanciaDaViagem = 65;
const precoGasolina = 5.35;
const precoAlcool = 4.10;

const consumoMedio = distanciaDaViagem / gastoMedio;

const aGasolina = consumoMedio * precoGasolina;
//const aAlcool = consumoMedio * precoAlcool;
if (aGasolina) {
    console.log('R$ ' + aGasolina.toFixed(2));
} else if (aAlcool) {
    console.log('R$ ' + aAlcool.toFixed(2));
}


//console.log(aGasolina);

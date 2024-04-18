// calcular o valor de uma viagem
//Três variáveis Preço Combustivel, gasto médio por KM, distância em km da viagem.
//Imprima o valor que será gasto de combustível para realizar a viagem.
const precoCombustivel = 1.34;
const gastoMedio = 10;
const distanciaDaViagem = 352;

const consumoMedio = distanciaDaViagem / gastoMedio;
const valorGasto = consumoMedio * precoCombustivel;
console.log('R$'+valorGasto.toFixed(2)); 


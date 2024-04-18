/*
Calcular o que deve ser pago por um produto, considere o preço normal de etiqueta e a escolha da condição de pagamento.
Código condição de pagamento:
À vista Débito, recebe 10% desconto;
À vista dinheiro ou PIX, recebe 15% de desconto;
Em duas vezes, preço normal de etiqueta sem juros;
Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

--Dessa forma: 160 x 25% = 160 (25/100) = 160 x 0,25 = 40
*/

let precoProduto = 10;
const condDebito = precoProduto - (precoProduto * (10 / 100)); //Avista Débito
const condDinheiroPix = precoProduto - (precoProduto * (15 / 100)); //Dinheiro pix

//Parcelamento / 2
const quantParcelas = 3;
let parcelamento = precoProduto / quantParcelas;

let jurosParcelamento = precoProduto * (10 / 100);

//FORMATO DE PAGAMENTO ESCOLHIDO PELO CLIENTE
const formaDePagamento = parcelamento;

if (formaDePagamento === condDebito) {
    console.log('Produto: R$ ' + precoProduto + '\nValor com desconto R$ ' + condDebito + ' \nHouve 10% de desconto!');
} else if (formaDePagamento === condDinheiroPix) {
    console.log('Produto: R$ ' + precoProduto + '\nValor com desconto R$ ' + condDinheiroPix + '\nHouve 15% de desconto!');
} else if (parcelamento === precoProduto / 2) {
    console.log('Produto: R$ ' + precoProduto + '\nValor de 2 x R$ '+parcelamento + '\nSem Juros!');
} else if (parcelamento) {
    console.log(jurosParcelamento.toFixed(2));
}
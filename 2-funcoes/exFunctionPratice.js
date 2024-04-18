function aplicaDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

function aplicaJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

if (formaDePagamento === 1) { //Débito 10% desconto
    console.log(aplicaDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) { //Dinheiro ou Pix 15% desconto
    console.log(aplicaDesconto(precoEtiqueta, 15));
} else if(formaDePagamento === 3){ //Duas vezes, preço normal sem juros
    console.log(aplicaDesconto(precoEtiqueta/2, 0));
} else if(formaDePagamento === 4) {
    console.log(aplicaJuros(precoEtiqueta, 10));
}
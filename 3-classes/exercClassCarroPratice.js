/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio em combustível por quilômetro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso 
*/
class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(marca, cor, consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }

    gasto(distanciaPercorrida, precoCombustivel) {
        return distanciaPercorrida * this.consumo * precoCombustivel;
    }
}

const celta = new Carro('Wolkswagem', 'Purple', 1/10);
console.log(celta.gasto(12, 4.5));//valor calculado em cima de 12km

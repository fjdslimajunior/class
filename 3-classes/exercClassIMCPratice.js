
class Pessoa {
    nome;
    peso;
    altura;

    construtor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
}
const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.construtor());
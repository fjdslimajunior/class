class Pessoa {
    nome;
    idade;
    descricao() {
        console.log(`Eu ${this.nome}, tenho hoje ${this.idade}.`);
    }
}
const Junior = new Pessoa();
Junior.nome = 'Lima Junior';
Junior.idade = 29;

Junior.descricao();

//console.log(null || 'string');
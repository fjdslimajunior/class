//essa classe tem um parâmetro CONSTRUCTOR, que exige que ao instanciar uma classe ela obrigatoriamente tem de vir com o parâmetro em seguida.
class Pessoa{
    nome;
    idade;
    anoAtual;

    constructor(nome, idade){//exige que seja informado os parâmetro de "nome" e "idade" ao instanciar a classe.
        this.nome = nome;
        this.idade = idade;
        this.anoAtual = 2024;
        this.anoDeNascimento = 2024 - idade;
    }

    descricao () {
        console.log(`Bem-vindo! Mr. ${this.nome},\n estamos em ${this.anoAtual}. \n Desde o seu nascimento em ${this.anoDeNascimento}, você tem hoje ${this.idade} anos de vida.`);
    }
}

function definirPrioridade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p1 < p2) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}.`);
    } else {
        console.log(`Os dois possuem a mesma idade!`);
    }
}
//INSTANCIAMENTO
const alfredo = new Pessoa('Alfredo', 35); //instancia com os parãmentros definidos no constructor
const Manel = new Pessoa('Manel', 35); //instancia com os parãmentros definidos no constructor
// const sobrenome = new Pessoa('Jose da Silva Lima Junior', 25);
// junior.nome = 'Francisco';
// junior.idade = 29;

//console.log(junior);

definirPrioridade(alfredo, Manel);
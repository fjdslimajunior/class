//Um OBJETO no javascript é uma coleção dinâmica de chave e valor.
const objetoMeu = {
    nome: "Esse é o nome do objeto",
    descricao: 'Essa é a descrição do objeto, com ela você consegue criar vários atributos.',

    atributos: function () {
        console.log(`A lista descreve o ${this.nome}, e a ${this.descricao}, ambos são atributos listados dentro do objeto.`);
    }
};
/*console.log(objetoMeu.nome);
console.log(objetoMeu.descricao);
console.log(objetoMeu);

//incremento
objetoMeu.identificao = 155.45;

//decremento
delete objetoMeu.nome;

objetoMeu.atributos();
*/

//alteração de forma dinâmica
objetoMeu['nome'] = 'Valor de nome alterado!';
console.log(objetoMeu['nome']);


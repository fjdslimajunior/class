
//"this" essa palavra reservado aassume
const telefone = {
    marca:'Xiaomi',
    qtdGB: 16,
    anoDeFabricacao: 2023,

    descricao: function () {        

        console.log(`Meu nome : ${this.marca}, fui fabricado em ${this.anoDeFabricacao}`);
        console.log(`Eu sou um ${telefone.marca}, e fui fabricado em meados de ${this.anoDeFabricacao}`);
    }

};

/* telefone.descricao();

catName("Tigger");
function catName(name) {
    //name = 'Aninha';
    console.log("O nome do meu gato é " + name);
  }
  
catName('Tadeu'); */

let meusObjetos = {
    tipo: 'Esse é o tipo do Objeto',
    nomeDoObjeto: 'Esse é o Nome do Objeto',
    valorDoObjeto: 'Esse é o valor do Objeto',

    minhaFuncao : function(tipo) {
        confole.log(`Esse é o meu ${this.tipo}`);
    } 
    }
    console.log(meusObjetos);
   

  
/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura. 
As pessoas devem ter a capacidade de dizer o valor do seu imc 
(IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 
de altura e peça ao josé para dizer o valor do seu IMC; 
* aula do site da Dio
*GitHub Com o conceútedo apresentado   
*https://github.com/digitalinnovationone/javascript-developer-m1
*/
class Pessoa {
    nome;
    peso;
    altura;
    
    constructor(nome, peso, altura){//somente funciona se houver inclusão dos dados exigidos
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        console.log(`Você Sr ${this.nome}\nPeso: ${this.peso}\nAltura: ${this.altura}`)
    }

    calcularImc(){//resulta o IMC com base nos dados informados
        
        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc <= 18.5) {
            return `Situação: Abaixo do peso!`;
        } else if (imc >= 18.5 && imc <= 25) {
            return `Situação: Normal!`;
        } else if (imc > 25 && imc <= 30) {
            return `Situação: Acima do normal!`;
        } else if (imc > 30 && imc <= 40) {
            return `Situação: Obesidade!`;
        } else if (imc >= 40) {
            return `Situação: Alerta, seu médico deve ser consultado!!`;
        }
    }
   
    
}

//pessoa jose
 const jose = new Pessoa('jose', 115, 1.75);
console.log(jose.classificarImc());
//pessoa alfredo
// const alfredo = new Pessoa('Antonio Alfredo', 80, 1.90);
// console.log(alfredo.classificarImc());

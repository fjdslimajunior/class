/*
Imprimir média de aluno adiquirido por 3 notas no semestre da faculdade.

Média = (nota 1 + nota 2 + nota 3) / 3;

classificação 
- Média menor que 5, recuperação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, Aprovado;
 */

const nota1 = 5;
const nota2 = 5;
const nota3 = 9;
const media = (nota1 + nota2 + nota3) / 3;

console.log('Sua nota: ' + media.toFixed(2));

if (media <= 5) {
    console.log('Tedeixa em : Reprovado!');
}
else if (media >= 5 && media < 7) {
    console.log('Te deixa em : Recuperação Parcial!');
} else {
    console.log('Te deixa em : Aprovado!');
}


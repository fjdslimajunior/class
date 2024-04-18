const notas = []
const menu = []
let soma = 0;

menu.push('P.Sem.');// Notas Primeiro Simestre
notas.push(10);// notas Primeiro
menu.push('S.Sem.');// Notas Segundo Simestre
notas.push(5);// notas segundo
// menu.push('T.Sem.');// Notas Terceiro Simestre
// notas.push(2.6);// notas terceiro
// menu.push('Q.Sem.');// Notas Quarto Simestre
// notas.push(10);// notas quarto
// menu.push('Q.Sem.');// Notas Quinto Simestre
// notas.push(10);// notas quinto

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota; 
}
    const media = soma / notas.length;
if (media <= 6) {
    console.log('Nota: '+media.toFixed(2)+'\nResultado: Recuperação!');
} else if (media > 7 || media <= 10){
    console.log('Nota: '+media.toFixed(2)+'\nResultado: Aprovado!');
}else {
    return 'Valor não aceitável!';
}
console.log(menu.join('|'));
console.log(notas.join('    |   '));
function escrevaNome(nome) {
    return'Menu nome é : ' + nome;
}
//escrevaNome('Junior');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaNome('Vitor') + ' é Maior');
    } else {
        console.log('Menor');
    }
}
verificarIdade(25);
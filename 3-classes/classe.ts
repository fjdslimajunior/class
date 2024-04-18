const message = {
    primeiraEstrofe: 'Eu sou a primeira estrofe do texto. \n',
    segundaEstrofe: 'Eu sou a segunda estrofe do texto.',

    textoCompleto: function () {
        console.log(`Esse é o meu texto completo: ${this.primeiraEstrofe}, ${this.segundaEstrofe}`);
    }
};

//console.log(message);
console.log(message.textoCompleto());
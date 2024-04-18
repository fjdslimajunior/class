const numero = 20;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);
if (numeroPar >= 10) {
    console.logo('Você tem um valor maior que 10!');
}else if (numeroPar) {
    console.log('Divisivel / 2!');
}else {
    console.log('Executei o else!');
}


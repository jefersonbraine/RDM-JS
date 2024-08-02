// INTRODUÇÃO


// Linha de inicio
console.log('Hello World');

console.log('Hello World'.length);	

console.log(57 / 160);

console.log(1995 - 2022);

console.log(3.5 + 2022);

console.log('hello world'.toUpperCase());

console.log('olá' + 'mundo!');


// VARIAVEIS

let verao = false;
verao = true

var quantAnualLivros = 56;

var passatempo = 'Leitura';
var quantAnualLivros = 56;

console.log(passatempo);
console.log(quantAnualLivros)

var esporteFavorito = 'corrida';
var distanciaMedia = '12km';

console.log(esporteFavorito);
console.log(distanciaMedia);

let m = 10;
m += 5;

console.log(m);

let x = 12;
x *= 102;

console.log(x);

let n = 20;
n = n - 2;


let k = 10;
k = k + 2;

console.log(Math.floor(Math.random() * 200));

console.log(Math.ceil(26.2));

// CONDICIONAIS\

let humor = 'sonolento';
let nivelDeCansaco = 6;

if (humor === 'sonolento' && nivelDeCansaco >= 8) {
    console.log('Hora de dormir!');
} else {
    console.log('Dormir mais tarde!');
}

let nivelDeFome = 7;

if (nivelDeFome > 7) {
    console.log('Hora de comer!');
} else {
    console.log ('Comer mais tarde!');
}

let ferramenta = false;

let escrita = ferramenta  || 'caneta';

let ferramenta1 = 'caneta esferografica';

let escrita1 = ferramenta || 'caneta tinteiro';

console.log(`A ${ferramenta} é mais popular do que a caneta rollerball.`);



let programando = true;

if (programando) {
    console.log('Boa! ótimo trabalho!');
} else {
    console.log('Ops.... algo deu errado!');
}

let fraseFavorita = 'Adoro isso!';

if (fraseFavorita === 'Adoro isso!') {
    console.log('Eu gosto muito disso!');
} else {
    console.log('Eu não gosto disso!');
}


//Refatorado usando operadores ternários

fraseFavorita === 'Adoro isso!' ? console.log('Eu gosto muito disso!') : console.log('Eu não gosto disso!');
   

let luzSemaforo = 'amarela';

if (luzSemaforo === 'vermelha') {
    console.log('Pare!');
} else if (luzSemaforo === 'amarela') {
    console.log('Atenção!');
} else if( luzSemaforo === 'verde' ) {
    console.log('Pode passar');
} else {
    console.log('Cuidado! Semáforo com defeito');	
}
 
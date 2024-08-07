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


// FUNÇÕES


// se o return
function areaRetangulo (largura, altura) {
    let area = largura * altura;
    
}

console.log(areaRetangulo(17, 8))

// com o return
function areaRetangulo1 (largura, altura) {
    let area1 = largura * altura;
    return area1;
}

console.log(areaRetangulo1(17, 8))
 

function agradecimento() {
    console.log('Obrigado por me ajudar a aprender JavaScript!');
}

agradecimento();

function listaComprasPapelaria (item1 = 'cadernos', item2 = 'livros', item3 = 'mochila') {
    console.log(`lembrar de comprar ${item1}, ${item2} e ${item3}.`)
}

listaComprasPapelaria ('caneta', 'lapis', 'borracha')

function saudacao(nome = 'estudante') {
    console.log(`Boas-vindas, ${nome}!`)

}

saudacao();
saudacao('Camila')

function contSemente(linhas, colunas) {
    return linhas * colunas;
}

function custoSemente(linhas, colunas) {
    return contaSemente(linhas, colunas) * 0.80;
}

const custoTotal = contaSemente(11, 23);

function areaDaMesa(largura, comprimento) {
    if (largura <= 100 && comprimento <= 200) {
        return 'A mesa cabe na sala!';	
    } else {
        return 'A mesa não cabe na sala!';
    }
};

const espacoNaSala = areaDaMesa(90, 190);


// refatorado para ter um corpo concisco e o if/else em operador ternário

const areaDaMesa = (largura, comprimento) => {
    largura <= 100 && comprimento <= 200 ? console.log('A mesa cabe na sala!') : console.log('A mesa não cabe na sala!');
};


// USAR ESSE
const areaDaMesa = (largura, comprimento) => 
    largura <= 100 && comprimento <= 200 ? 'A mesa cabe na sala!' : 'A mesa é maior que o espaço disponivel!';
;

const espacoNaSala1 = areaDaMesa(90, 210);

console.log(espacoNaSala1)

const regarPlaneta = function(dia) {
    if (dia === 'Sábado') {
        return true;
    } else {
        return false;
    }
};


//REFATORADO OARA CONSISO E TERNÁRIO

const regarPlanta = dia => dia === 'Sabado' ? true : false;
console.log(regarPlanta('sabado'));
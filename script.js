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

// ARRAYS

let resolucoesAnoNovo = ['praticar programação', 'ler livros', 'dormir'];
console.log(resolucoesAnoNovo);


const sulDeMinasGerais = ['varginha', 'poços de caldas', 'belo horizonte'];
console.log(sulDeMinasGerais[1]);


const centroOestePaulista = ['são paulo', 'ribeirão preto', 'campinas'];	
const cidade = centroOestePaulista[0];
console.log(cidade);


let pilotosF1 = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotosF1[1] = 'verstappen';
console.log(pilotosF1);

const quantidade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(quantidade.length);


const pets = ['cachorro', 'gato', 'papagaio', 'elefante', 'rinoceronte'];
console.log(pets.slice(1, 2));


const boasVindas = 'Boas-vindas ao README!';
console.log(boasVindas[15]);

const livros = ['livro1', 'livro2', 'livro3', 'livro4'];
livros.pop();
console.log(livros);

const cores = ['rosa', 'verde', 'amarelo'];
cores.shift();
console.log(cores)

const cores1 = ['rosa', 'amarelo'];
cores1.unshift('azul');
console.log(cores1)

const carros = ['BMW', 'Mercedes', 'Audi'];
carros.push('Volkswagen');
console.log(carros)


//----------------------/////------------

const conceito = ['arrays', 'podem', 'ser', 'mutáveis'];
function editarArray(array){
    array[3] = 'MUTÁVEIS';
}
editarArray(conceito);
console.log(conceito)

const removerElemento = novoArray => {
    novoArray.pop();
}
removerElemento(conceito);
console.log(conceito)

//----------------------/////------------------

const redesSociais = ['Facebook', 'Instagram', 'Twitter'];
function addRedeSocial(tiktok) {
    tiktok.push('TikTok');	
}
addRedeSocial(redesSociais);
console.log(redesSociais);


const pets1 = ['cachorro', 'gato', 'papagaio', 'elefante', 'rinoceronte'];
const gatoIndex = pets1.indexOf('gato');

// variável chamada animais e atribua como valor um nested array com 3 arrays dentro
const animais = [['cachorro', 'gato',], ['papagaio', 'elefante', 'rinoceronte'], ['cavalo', 'cabra']];

const reptil = animais[2][1];